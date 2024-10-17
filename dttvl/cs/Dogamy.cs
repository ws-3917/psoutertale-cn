using UnityEngine;

public class Dogamy : EnemyBase
{
	public enum DogiDialogue
	{
		Neutral1 = 0,
		Neutral2 = 1,
		Neutral3 = 2,
		Neutral4 = 3,
		PetImmediateM = 4,
		PetImmediateF = 5,
		Resniff = 6,
		PetM = 7,
		PetF = 8
	}

	private Sprite[] sprites;

	private int bodyFrames;

	private int response;

	private bool useDogaressaVariant;

	private DogiDialogue dialogueType;

	private bool rolled;

	private bool resniffed;

	private bool pet;

	private bool sparedOnce;

	protected override void Awake()
	{
		base.Awake();
		base.Awake();
		enemyName = "Dogamy";
		fileName = "dogamy";
		checkDesc = "* Dogaressa的老公。\n* 靠嗅觉来辨认东西。";
		maxHp = 240;
		hp = maxHp;
		atk = 14;
		def = 6;
		displayedDef = 4;
		canSpareViaFight = false;
		chatter = new string[1] { "error\nno\nbrute\nforce" };
		flavorTxt = new string[4] { "* 狗狗们挥动斧头以保护对方。", "* 狗狗们正在为下次的情侣竞赛作练习...^05\n  管他是啥意思。", "* 狗狗们彼此说着甜腻的情话。", "* 狗狗们仍迟疑不想与你战斗。" };
		dyingTxt = flavorTxt;
		satisfyTxt = flavorTxt;
		actNames = new string[3] { "Pet", "Re-sniff", "Roll Around" };
		hurtSound = "sounds/snd_ehurt1";
		defaultChatSize = "LeftSmall";
		exp = 45;
		gold = 20;
		attacks = new int[1] { 85 };
		int[] array = new int[9] { 0, 1, 2, 3, 4, 5, 5, 6, 0 };
		sprites = new Sprite[array.Length];
		for (int i = 0; i < array.Length; i++)
		{
			sprites[i] = Resources.Load<Sprite>("battle/Enemies/Dogamy/spr_b_dogamy_" + array[i]);
		}
		hpPos = new Vector2(0f, 187f);
		hpWidth = 202;
		defaultChatPos = new Vector2(-161f, 98f);
	}

	protected override void Update()
	{
		base.Update();
		if (gotHit)
		{
			return;
		}
		bodyFrames = (bodyFrames + 1) % (20 + sprites.Length * 7);
		if (GetBodyFrames() > 20)
		{
			int num = (GetBodyFrames() - 20) / 7;
			if (num >= sprites.Length)
			{
				num = sprites.Length - 1;
			}
			GetPart("body").GetComponent<SpriteRenderer>().sprite = sprites[num];
		}
		else if (GetBodyFrames() == 0)
		{
			GetPart("body").GetComponent<SpriteRenderer>().sprite = sprites[0];
		}
		GetPart("axe").GetComponent<SpriteRenderer>().enabled = !Object.FindObjectOfType<Dogaressa>().IsShaking() && !Object.FindObjectOfType<Dogaressa>().IsDone() && !killed;
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "Pet")
		{
			if (!Object.FindObjectOfType<Dogaressa>().IsKilled())
			{
				if (resniffed)
				{
					response = 3;
					if (satisfied < 100)
					{
						if (Object.FindObjectOfType<Dogaressa>().GetSatisfactionLevel() >= 100)
						{
							satisfied = 75;
						}
						AddActPoints(25);
						if (satisfied < 100)
						{
							satisfied = 100;
						}
					}
					return new string[1] { "* 你拍了拍Dogamy。" };
				}
				response = 1;
				return new string[1] { "* 狗狗们全然不信你的气味。" };
			}
			return new string[1] { "* Dogamy对着你咆哮。" };
		}
		if (GetActNames()[i] == "Re-sniff")
		{
			if (!Object.FindObjectOfType<Dogaressa>().IsKilled())
			{
				if (!resniffed)
				{
					if (rolled)
					{
						AddActPoints(50);
						Object.FindObjectOfType<Dogaressa>().AddActPoints(50);
						response = 2;
						resniffed = true;
					}
					return new string[2]
					{
						"* 狗狗们闻了闻你……",
						rolled ? "* 在泥土中翻滚后，^05你闻起来\n  一点问题没有！" : "* 你闻起来很奇怪！\n* 它俩认为你很可能是名人类！"
					};
				}
				return new string[1] { "* 狗狗们已经知道你闻起来\n  不错了。" };
			}
			return new string[1] { "* Dogamy甚至不再抬起他的鼻子。" };
		}
		if (GetActNames()[i] == "Roll Around")
		{
			rolled = true;
			return new string[2] { "* 你在泥土和雪中打滚。", "* 闻起来像只奇怪的小狗。" };
		}
		return base.PerformAct(i);
	}

	public override int CalculateDamage(int partyMember, float rawDmg, bool forceMagic = false)
	{
		int num = ((!Object.FindObjectOfType<Dogaressa>().IsKilled()) ? 1 : 2);
		return base.CalculateDamage(partyMember, rawDmg, forceMagic) * num;
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		if (Object.FindObjectOfType<Dogaressa>().IsDone())
		{
			text = ((response != 4) ? new string[1] { (Random.Range(0, 2) == 0) ? "Whine." : "Whimper." } : new string[1] { "W...^10\nwhat...?" });
		}
		else
		{
			if (response == 0)
			{
				dialogueType = (DogiDialogue)Random.Range(0, 4);
			}
			else if (response == 1)
			{
				dialogueType = (useDogaressaVariant ? DogiDialogue.PetImmediateF : DogiDialogue.PetImmediateM);
			}
			else if (response == 2)
			{
				dialogueType = DogiDialogue.Resniff;
			}
			else if (response == 3)
			{
				dialogueType = (useDogaressaVariant ? DogiDialogue.PetF : DogiDialogue.PetM);
			}
			text[0] = (new string[9] { "Take my \nwife... \n's fleas.", "Don't \ntouch my \nhot dog.", "No. 2 \nNuzzle \nChamps \n'98!!", "Let's \nkick \nhuman \ntail!!", "Paws off \nyou \nsmelly \nhuman.", "Stop! \nDon't \ntouch \nher!", "What! \nSmells \nlike a \n...", "Wow!!! \nPet by \nanother \npup!!!", "What \nabout \nme......\n........" })[(int)dialogueType];
		}
		response = 0;
		useDogaressaVariant = false;
		base.Chat(text, type, sound, pos, canSkip, 1);
		chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
	}

	public void SetResponseFromDogaressa(int response = -1)
	{
		useDogaressaVariant = true;
		if (response > -1)
		{
			this.response = response;
		}
	}

	public override string GetRandomFlavorText()
	{
		if (sparedOnce)
		{
			return "* Dogamy目瞪口呆。";
		}
		if (Object.FindObjectOfType<Dogaressa>().IsKilled())
		{
			return "* Dogamy心碎了。";
		}
		if (CanSpare() && Object.FindObjectOfType<Dogaressa>().CanSpare())
		{
			return "* 狗狗们被扩展了心智。";
		}
		if (resniffed)
		{
			return "* 狗狗们觉得你可能是只走失的\n  小狗，并对此感到疑惑。";
		}
		if (rolled)
		{
			return "* 狗狗们想再闻你一次。";
		}
		return base.GetRandomFlavorText();
	}

	public int GetBodyFrames()
	{
		if (Object.FindObjectOfType<Dogamy>().IsShaking() || Object.FindObjectOfType<Dogamy>().IsDone() || Object.FindObjectOfType<Dogaressa>().IsShaking() || Object.FindObjectOfType<Dogaressa>().IsDone())
		{
			return 0;
		}
		return bodyFrames;
	}

	public bool CanPet()
	{
		return resniffed;
	}

	public override bool CanSpare()
	{
		if (satisfied < 100 || Object.FindObjectOfType<Dogaressa>().GetSatisfactionLevel() < 100)
		{
			return Object.FindObjectOfType<Dogaressa>().IsKilled();
		}
		return true;
	}

	public DogiDialogue GetDialogue()
	{
		return dialogueType;
	}

	public override void Spare(bool sleepMist = false)
	{
		if (Object.FindObjectOfType<Dogaressa>().IsKilled())
		{
			if (!sparedOnce)
			{
				response = 4;
				sparedOnce = true;
			}
			else
			{
				base.Spare(sleepMist);
			}
		}
		else
		{
			base.Spare(sleepMist);
		}
	}
}

