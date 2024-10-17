using UnityEngine;

public class BladeKnight : EnemyBase
{
	private Sprite[] hairSprites;

	private Sprite[] capeSprites;

	private int lastAct;

	private int talk = -1;

	private int bodyFrames;

	private bool hasPrayed;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "BLADEKNIGHT";
		fileName = "bladeknight";
		maxHp = 1000;
		hp = maxHp;
		hpPos = new Vector2(2f, 50f);
		hpWidth = 200;
		atk = 6;
		def = -10;
		flavorTxt = new string[5] { "* BLADEKNIGHT闪耀着纯红色的剑光。", "* BLADEKNIGHT面无表情地耸立。", "* 它没有面部特征，这让你感到不安。", "* 闻起来像金属与铁锈。", "* 它高高耸立于你之上。" };
		dyingTxt = new string[1] { "* 它似乎开始逐渐消失。" };
		satisfyTxt = new string[1] { "* BLADEKNIGHT不想再战斗了。" };
		chatter = new string[3] { "/WDJIAOCHU NIDE\nLINGHUN", "/WDWO CENGJING\nGANZHIDAO GUO", "/WDXIANG XIWANG\nDE XIEDAIZHE\nBENQU" };
		actNames = new string[3] { "交谈", "祈求", "尖叫" };
		canSpareViaFight = false;
		exp = 0;
		gold = 0;
		defaultChatPos = new Vector2(184f, 137f);
		attacks = new int[2] { 50, 51 };
		hairSprites = new Sprite[3];
		capeSprites = new Sprite[2];
		for (int i = 0; i < 3; i++)
		{
			hairSprites[i] = Resources.Load<Sprite>("battle/enemies/BLADEKNIGHT/spr_b_bladeknight_hair_2_" + i);
			if (i < 2)
			{
				capeSprites[i] = Resources.Load<Sprite>("battle/enemies/BLADEKNIGHT/spr_b_bladeknight_cape_" + i);
			}
		}
		hurtSpriteName = "_dmg_3";
	}

	protected override void Update()
	{
		base.Update();
		if (!gotHit)
		{
			bodyFrames++;
			GetPart("hair").GetComponent<SpriteRenderer>().sprite = hairSprites[bodyFrames / 4 % 3];
			GetPart("cape").GetComponent<SpriteRenderer>().sprite = capeSprites[bodyFrames / 6 % 2];
		}
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		sound = "snd_txtwdc";
		if (talk > -1)
		{
			base.Chat(new string[1] { chatter[talk] }, type, sound, pos, canSkip, speed);
		}
		talk = -1;
	}

	public override void TurnToDust()
	{
		aud.clip = Resources.Load<AudioClip>("sounds/snd_deathnoise");
		aud.Play();
		CombineParts();
		obj.transform.Find("mainbody").GetComponent<ParticleDuplicator>().Activate(1);
	}

	public override string[] PerformAct(int i)
	{
		lastAct = i - 1;
		if (GetActNames()[i] == "查看")
		{
			return new string[1] { "* BLADEKNIGHT 攻击50 防御50\n* 它已拿起武器对抗光明。" };
		}
		if (GetActNames()[i] == "祈求")
		{
			def -= 3;
			if (satisfied < 100)
			{
				AddActPoints(50);
			}
			if (satisfied == 100)
			{
				talk = 1;
			}
			if (!hasPrayed)
			{
				hasPrayed = true;
				if ((int)Util.GameManager().GetFlag(13) < 3)
				{
					if (!WeirdChecker.HasKilled(Util.GameManager()))
					{
						return new string[1] { "* 你祈求爱与希望。\n* 它的防御力下降了！" };
					}
					return new string[1] { "* 你祈求平安。\n* 它的防御力下降了！" };
				}
				return new string[1] { "* 你祈求力量。\n* 它的防御力下降了！" };
			}
			return new string[1] { "* 你继续祈求。\n* 它的防御力下降了！" };
		}
		if (GetActNames()[i] == "交谈")
		{
			if (satisfied == 100)
			{
				talk = 2;
			}
			else
			{
				talk = 0;
			}
			return new string[1] { "* 你尝试与BLADEKNIGHT交谈，^05\n  它用一种奇怪的语言\n  回应了你。" };
		}
		if (GetActNames()[i] == "尖叫")
		{
			return new string[1] { "* 你寻求帮助。^05\n* 但是谁也没有来。" };
		}
		return base.PerformAct(i);
	}
}

