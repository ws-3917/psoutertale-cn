using UnityEngine;

public class Toriel : EnemyBase
{
	private int talk = -1;

	private bool fightBegin;

	private bool jumpedInFront;

	private bool jumpedOnce;

	private int curProgress;

	private int processedProgress;

	private bool prevProgressWasViolence;

	private int spareTally;

	private bool friskDownedOnce;

	private bool susieDownedOnce;

	private bool finalBlow;

	private string[][] diag = new string[5][]
	{
		new string[2] { "我的孩子，^05你究竟在\n干什么？", "你为什么要护着她...？" },
		new string[2] { "你想证明什么？", "我是在保护你啊。" },
		new string[3] { "你能理解吗？", "怪物很危险！", "离她远点！" },
		new string[1] { "别那么看我。" },
		new string[1] { "我不...^10理解..." }
	};

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Toriel";
		fileName = "toriel";
		checkDesc = "* Knows best for you.";
		maxHp = 440;
		hp = maxHp;
		hpPos = new Vector2(0f, 200f);
		atk = 5;
		def = 0;
		flavorTxt = new string[4] { "* Toriel正在准备一记魔法攻击。", "* Toriel看穿了你。", "* Toriel冷目相视。", "* Toriel正在深呼吸。" };
		chatter = new string[1] { "" };
		actNames = new string[2] { "交谈", "S!挺身而出" };
		canSpareViaFight = false;
		hpWidth = 150;
		attacks = new int[5] { 41, 42, 43, 44, 45 };
		exp = 0;
		gold = 0;
		defaultChatPos = new Vector2(178f, 141f);
		defaultChatSize = "RightWide";
	}

	protected override void Update()
	{
		base.Update();
		if (Object.FindObjectOfType<GameManager>().GetCombinedHP() <= 0)
		{
			SetFace("gasp");
		}
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		if (CalculateDamage(partyMember, rawDmg) >= hp)
		{
			rawDmg = 0f;
		}
		if (partyMember == 0 && rawDmg > 0f)
		{
			if (curProgress >= 5)
			{
				finalBlow = true;
			}
			if (processedProgress == curProgress)
			{
				curProgress++;
				prevProgressWasViolence = true;
			}
		}
		base.Hit(partyMember, rawDmg, playSound);
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "查看")
		{
			return new string[1] { "* TORIEL - 攻击80 防御80" + checkDesc };
		}
		if (GetActNames()[i] == "交谈")
		{
			if (curProgress < 5)
			{
				talk++;
				if (talk != 0)
				{
					if (talk != 1)
					{
						return new string[1] { "* Ironically,^05 talking does not\n  seem to be the solution\n  to this situation." };
					}
					return new string[1] { "* You tried to think\n  of something to say\n  again,^05 but..." };
				}
				return new string[1] { "* You couldn't think of\n  any conversation\n  topics." };
			}
			return new string[1] { "* 你认为应该让Susie来解释。" };
		}
		if (GetActNames()[i] == "S!挺身而出")
		{
			jumpedInFront = true;
			if (processedProgress == curProgress)
			{
				curProgress++;
				prevProgressWasViolence = false;
			}
			if (!jumpedOnce)
			{
				jumpedOnce = true;
				return new string[2] { "* 你挡在了Susie身前。", "* 本回合只有你会受到伤害。" };
			}
			return new string[1] { "* 你继续为Susie挺身而出。" };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		if (curProgress >= 5)
		{
			finalBlow = true;
			prevProgressWasViolence = false;
			Object.FindObjectOfType<BattleManager>().SkipPartyMemberTurn(0);
			return new string[6] { "su_dejected`snd_txtsus`* 你看，^05要是我真的想要\n  这个孩子的命...", "su_neutral`snd_txtsus`* 我早就下手了。", "su_dejected`snd_txtsus`* 但我没有，^05因为他什么\n  错也没犯。", "su_dejected`snd_txtsus`* 实话说，^05\n  我完全不理解发生了\n  什么。", "su_side`snd_txtsus`* 你若让我来说...", "su_smirk`snd_txtsus`* 我可以告诉你我在干什么。" };
		}
		return new string[1] { "* Susie尝试和Toriel解释，\n^05  Toriel完全忽视。" };
	}

	public void SetFace(string spriteName)
	{
		GetPart("body").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Toriel/spr_b_toriel_" + spriteName);
	}

	public override string GetRandomFlavorText()
	{
		jumpedInFront = false;
		if (!fightBegin)
		{
			fightBegin = true;
			return "* Toriel拦住了去路！";
		}
		if (spareTally >= 3 && curProgress == 0)
		{
			return "* Sparing doesn't seem to\n  be the solution to\n  this situation.";
		}
		if (curProgress >= 5)
		{
			return "* 看起来Toriel或许会愿意听\n  Susie说话了。";
		}
		return base.GetRandomFlavorText();
	}

	public override bool[] GetTargets()
	{
		if (!jumpedInFront)
		{
			return new bool[3] { false, true, false };
		}
		return new bool[3] { true, false, false };
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		if (text[0] != "")
		{
			base.Chat(text, type, sound, pos, canSkip, speed);
		}
		else if (processedProgress < curProgress && processedProgress < diag.Length && processedProgress < 5)
		{
			text = diag[processedProgress];
			if (processedProgress == 0 && prevProgressWasViolence)
			{
				text[1] = "为什么你要打我？";
			}
			base.Chat(text, type, "snd_txttor", pos, canSkip, speed);
			if (processedProgress == 3)
			{
				SetFace("annoyed");
			}
			else if (processedProgress == 4)
			{
				SetFace("sad_side");
			}
			processedProgress++;
		}
		else if (finalBlow)
		{
			text = ((!prevProgressWasViolence) ? new string[7] { "...你是对的。", "我只是...^05\n太害怕了。", "我害怕ASGORE的\n计划得逞。", "我一直都提心吊胆。", "也许是时候看开一点了。", "我为我对你造成的\n创伤道歉。", "我乐意听你的故事。" } : new string[8] { "不，^05我明白了。", "I am being \nunreasonable to harm \nsomeone that did not \ndo anything.", "我只是...^05\n太害怕了。", "我害怕ASGORE的\n计划得逞。", "我一直都提心吊胆。", "也许是时候看开一点了。", "我为我对你造成的\n创伤道歉。", "我乐意听你的故事。" });
			Object.FindObjectOfType<BattleManager>().StopMusic();
			base.Chat(text, type, "snd_txttor", pos, canSkip, speed);
			SetFace("surrender");
		}
	}

	public override int GetNextAttack()
	{
		if (finalBlow)
		{
			return 46;
		}
		return base.GetNextAttack();
	}

	public override void AttemptedSpare()
	{
		base.AttemptedSpare();
		spareTally++;
	}

	public bool FriskHasDowned()
	{
		if (!friskDownedOnce)
		{
			friskDownedOnce = true;
			return false;
		}
		return true;
	}

	public bool SusieHasDowned()
	{
		if (!susieDownedOnce)
		{
			susieDownedOnce = true;
			return false;
		}
		return true;
	}

	public override void TurnToDust()
	{
		Util.GameManager().LoadBunnyCheck();
	}

	public override bool PartyMemberAcceptAttack(int partyMember, int attackType)
	{
		if (partyMember != 0)
		{
			return false;
		}
		return true;
	}
}

