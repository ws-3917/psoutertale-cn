using UnityEngine;

public class Whimsun : EnemyBase
{
	private bool terrorized;

	private int floatFrames;

	private int spriteFrames;

	private Sprite[] sprites;

	private bool up = true;

	private int lastAct = -1;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Whimsun";
		fileName = "whimsun";
		checkDesc = "^10* 这个怪物过于敏感胆小\n  不擅长战斗...";
		maxHp = 10;
		hp = maxHp;
		hpPos = new Vector2(2f, 122f);
		hpWidth = 101;
		atk = 5;
		satisfied = 100;
		def = 0;
		flavorTxt = new string[4] { "* Whimsun避开了你的眼神。", "* Whimsun继续道歉。", "* Whimsun四处飘动。", "* 四周充斥着薰衣草和樟脑丸的味道。" };
		dyingTxt = new string[1] { "* Whimsun摇摇欲坠。" };
		satisfyTxt = flavorTxt;
		chatter = new string[4] { "I'm \nsorry...", "I have \nno \nchoice..", "Forgive \nme...", "*sniff \nsniff*" };
		actNames = new string[2] { "安慰", "恐吓" };
		defaultChatSize = "RightSmall";
		exp = 2;
		gold = 0;
		attacks = new int[2] { 7, 8 };
		sprites = new Sprite[2]
		{
			Resources.Load<Sprite>("battle/enemies/Whimsun/spr_b_whimsun_0"),
			Resources.Load<Sprite>("battle/enemies/Whimsun/spr_b_whimsun_1")
		};
	}

	protected override void Start()
	{
		base.Start();
		defaultChatPos = new Vector2(Mathf.RoundToInt(GetEnemyObject().transform.position.x * 48f) + 104, 172f);
	}

	protected override void Update()
	{
		if (!gotHit)
		{
			if (up)
			{
				floatFrames++;
				if (floatFrames == 32)
				{
					up = false;
				}
			}
			else
			{
				floatFrames--;
				if (floatFrames == 0)
				{
					up = true;
				}
			}
			GetEnemyObject().transform.Find("parts").transform.localPosition = Vector3.Lerp(Vector3.zero, new Vector3(0f, 0.3f), (float)floatFrames / 32f);
			spriteFrames++;
			GetPart("body").GetComponent<SpriteRenderer>().sprite = sprites[spriteFrames / 10 % 2];
		}
		base.Update();
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		base.Hit(partyMember, rawDmg, playSound);
		if (hp <= 0)
		{
			gold = 2;
		}
	}

	public override string GetRandomFlavorText()
	{
		if (terrorized)
		{
			return "* Whimsun呼吸急促。\n* Susie看起来很担心。";
		}
		return base.GetRandomFlavorText();
	}

	public override string[] PerformAct(int i)
	{
		lastAct = i;
		if (GetActNames()[i] == "安慰")
		{
			Spare();
			return new string[1] { "* 你头一个词刚说到一半^10，\n  Whimsun就甩着热泪逃跑了。 " };
		}
		if (GetActNames()[i] == "恐吓")
		{
			gold = 2;
			if (!terrorized)
			{
				terrorized = true;
				return new string[1] { "* 你高举你的双臂\n  同时不停弯曲你的手指。\n* Whimsun吓坏了！" };
			}
			return new string[2] { "* 你高举你的双臂\n  同时不停弯曲你的手指。\n* Whimsun吓坏了！", "su_worried`snd_txtsus`* Kris，^10你确定这个小家伙\n  是敌人？" };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		if (i == 1)
		{
			if (!spared)
			{
				Spare();
				return new string[1] { "* Susie一步还没迈出。\n* Whimsun逃跑了！" };
			}
			return new string[1] { "su_inquisitive`snd_txtsus`* 行吧...？" };
		}
		return base.PerformAssistAct(i);
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		if (terrorized)
		{
			text = new string[1] { "I \ncan't \nhandle \nthis..." };
		}
		base.Chat(text, type, sound, pos, canSkip, 1);
		chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
	}
}

