using UnityEngine;

public class Doggo : EnemyBase
{
	private bool saidFirstLine;

	private bool approached;

	private bool hitLastAttack = true;

	private int approachCount;

	private int rageFrames;

	private int response = -1;

	private int lastFlavor = -1;

	private bool acknowledgeUnhostile;

	private bool pettedOnce;

	private bool assuredAfterUnhostile;

	private Sprite[] eyeSprites;

	private Sprite[] headSprites;

	private int bodyFrames;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Doggo";
		fileName = "doggo";
		checkDesc = "* 现在这些时候有点害怕物体移动。";
		maxHp = 320;
		hp = maxHp;
		atk = 13;
		def = 10;
		displayedDef = 7;
		hostile = true;
		hpToUnhostile = 0;
		canSpareViaFight = false;
		chatter = new string[1] { "error\nno\nbrute\nforce" };
		flavorTxt = new string[2] { "* Doggo在不停地寻找移动的物体。", "* Doggo前后紧张地看。" };
		dyingTxt = flavorTxt;
		satisfyTxt = flavorTxt;
		actNames = new string[3] { "Pet", "Approach", "N!Assure" };
		hurtSound = "sounds/snd_doghurt1";
		defaultChatSize = "RightSmall";
		exp = 30;
		gold = 15;
		eyeSprites = new Sprite[13];
		for (int i = 0; i < 7; i++)
		{
			if (i != 6)
			{
				eyeSprites[i] = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_eyes_" + i);
			}
			switch (i)
			{
			case 6:
				eyeSprites[10] = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_eyes_" + i);
				break;
			case 1:
				eyeSprites[11] = eyeSprites[i];
				eyeSprites[12] = eyeSprites[i];
				break;
			case 5:
				eyeSprites[6] = eyeSprites[i];
				eyeSprites[7] = eyeSprites[i];
				break;
			case 4:
				eyeSprites[8] = eyeSprites[i];
				break;
			case 3:
				eyeSprites[9] = eyeSprites[i];
				break;
			}
		}
		headSprites = new Sprite[2]
		{
			Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_head_mad_0"),
			Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_head_mad_1")
		};
		attacks = new int[1] { 81 };
		defaultChatPos = new Vector2(72f, 140f);
	}

	protected override void Update()
	{
		base.Update();
		if (gotHit)
		{
			return;
		}
		bodyFrames++;
		int num = bodyFrames / 3 % 13;
		GetPart("head").Find("eyes").GetComponent<SpriteRenderer>().sprite = eyeSprites[num];
		float num2 = (float)(bodyFrames % 30) / 15f;
		if (num2 > 1f)
		{
			num2 = 2f - num2;
		}
		GetPart("arms").transform.localPosition = new Vector3(0f, Mathf.Lerp(2.743f, 2.5f, num2));
		if (!hostile)
		{
			return;
		}
		if (approached)
		{
			rageFrames++;
			if (rageFrames % 7 == 0)
			{
				GetPart("head").GetComponent<SpriteRenderer>().flipX = !GetPart("head").GetComponent<SpriteRenderer>().flipX;
			}
		}
		else
		{
			int num3 = bodyFrames / 4 % 2;
			GetPart("head").GetComponent<SpriteRenderer>().sprite = headSprites[num3];
		}
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "Pet")
		{
			if (!hostile)
			{
				AddActPoints(25);
				if (!pettedOnce)
				{
					response = 0;
					pettedOnce = true;
					return new string[1] { "* 你拍了拍Doggo。" };
				}
				return new string[1] { "* 你彻底地拍了拍Doggo。" };
			}
			return new string[1] { (!hitLastAttack) ? "* 你伸出了你的手，^05随后思索先\n  靠近他是否更好，^05所以你选择\n  没拍。" : "* Doggo仍在质疑你的行为。" };
		}
		if (GetActNames()[i] == "Approach")
		{
			if (!hostile)
			{
				return new string[1] { "* Doggo已经信任你了。" };
			}
			if (!approached && hitLastAttack)
			{
				return new string[1] { "* 你担心Doggo会立即攻击你，\n  所以你并没有拍。" };
			}
			if (!approached)
			{
				approached = true;
				response = 1;
				GetPart("arms").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_arms_rage");
				GetPart("head").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_head_rage");
				GetPart("head").Find("eyes").GetComponent<SpriteRenderer>().color = new Color(0f, 0f, 0f, 0f);
			}
			approachCount++;
			if (approachCount == 1)
			{
				return new string[1] { "* 你慢慢地靠近了Doggo。\n* 他觉察到你的动静并准备攻击。" };
			}
			if (approachCount == 2)
			{
				return new string[1] { "* 你继续靠近Doggo。\n* 他不知道你的目的是什么。" };
			}
			if (approachCount == 3)
			{
				Unhostile();
				AddActPoints(50);
				return new string[2] { "* 你现在非常接近Doggo了。", "* 这种亲近的距离在某种程度上\n  让他冷静了下来。" };
			}
		}
		else if (GetActNames()[i] == "N!Assure")
		{
			if (hostile)
			{
				if (approached)
				{
					response = 2;
					Unhostile();
					AddActPoints(50);
					return new string[4] { "* Noelle温柔地和Doggo说话。", "no_happy`snd_txtnoe`* 嘿，^05我们不会伤害你的。", "no_happy`snd_txtnoe`* 也许我们能成为朋友...？", "* Doggo看起来已经冷静下来了，\n  ^05但仍未被完全说服。" };
				}
				return new string[2] { "no_confused_side`snd_txtnoe`* （等下，^05Kris，^05我们不想把\n  他吓着！）", "no_happy`snd_txtnoe`* （也许我们该先让他知道\n  我们的存在...）" };
			}
			if (!assuredAfterUnhostile)
			{
				response = 2;
				assuredAfterUnhostile = true;
				AddActPoints(25);
				return new string[2] { "* Noelle温柔地和Doggo说话。", "no_happy`snd_txtnoe`* 也许我们可以...^05在这之后玩\n  你丢我接？" };
			}
			return new string[2] { "no_thinking`snd_txtnoe`* （我不知道该说什么别的了...）", "no_happy`snd_txtnoe`* （对不起，^05Kris。）" };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		switch (i)
		{
		case 1:
			if (!hostile)
			{
				if (!tired)
				{
					tired = true;
					Hit(3, 1f, playSound: true);
					Util.GameManager().SetSessionFlag(4, 1);
					return new string[2] { "* Susie溜到Doggo身后，狠狠\n  晃了晃他的的哨站。", "* Doggo吓了一跳，头撞上了天花板。" };
				}
				return new string[1] { "* Susie又晃了晃他的哨站，^05\n  但没有事发生。" };
			}
			return new string[2] { "su_annoyed`snd_txtsus`* （Kris，^05我不想让他伤害我们\n  任何人。）", "su_smirk_sweat`snd_txtsus`* （你最好还是得让\n  他冷静下来。）" };
		case 2:
			if (!hostile)
			{
				response = 0;
				pettedOnce = true;
				AddActPoints(25);
				return new string[1] { "* Noelle摸了摸Doggo。" };
			}
			return new string[2] { "no_confused_side`snd_txtnoe`* （等下，^05Kris，^05我们不想把\n  他吓着！）", "no_happy`snd_txtnoe`* （也许我们该先让他知道\n  我们的存在...）" };
		default:
			return base.PerformAssistAct(i);
		}
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		base.Hit(partyMember, rawDmg, playSound);
		if (hp < maxHp / 2 && !approached && hostile)
		{
			approached = true;
			approachCount++;
			response = 1;
			GetPart("arms").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_arms_rage");
			GetPart("head").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_head_rage");
			GetPart("head").Find("eyes").GetComponent<SpriteRenderer>().color = new Color(0f, 0f, 0f, 0f);
		}
	}

	public override int CalculateDamage(int partyMember, float rawDmg, bool forceMagic = false)
	{
		if (partyMember == 3)
		{
			if (hp == 1)
			{
				Util.GameManager().SetSessionFlag(5, 1);
			}
			return 1;
		}
		return base.CalculateDamage(partyMember, rawDmg, forceMagic);
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		bool flag = hostile;
		if (response > -1)
		{
			if (hostile)
			{
				saidFirstLine = true;
				if (response == 1)
				{
					text = new string[1] { (new string[3] { "error \nbark", "GET \nAWAY,^05 \nFIEND!", "WHAT \nDO YOU \nWANT?!" })[approachCount] };
					lastFlavor = 2;
				}
				else if (approached)
				{
					text = new string[1] { hitLastAttack ? "WHY ARE \nYOU \nHERE??" : "WHERE'D \nYOU GO\n???" };
				}
			}
			else
			{
				flag = true;
				if (!acknowledgeUnhostile)
				{
					acknowledgeUnhostile = true;
					text = new string[1] { (approachCount >= 3) ? "(Are \nthey...\nnice?)" : "You're \ngonna \nneed to \nshow me" };
				}
				else if (response == 0)
				{
					text = new string[1] { (satisfied >= 100) ? "Oh \nyeah..." : "Maybe... \na lil' \nmore..." };
				}
				else if (response == 2)
				{
					text = new string[1] { "That \nsounds...\nkind of \nexciting" };
				}
				if (lastFlavor == -1)
				{
					lastFlavor = response;
				}
				response = -1;
			}
		}
		else if (!saidFirstLine && hostile)
		{
			saidFirstLine = true;
			text = new string[1] { "Don't \nmove an \ninch!" };
		}
		else if (hostile)
		{
			text = new string[1] { hitLastAttack ? "I hit \nsomething\n?????" : "Will it \nmove \nthis \ntime?" };
		}
		hitLastAttack = false;
		if (flag)
		{
			speed = 1;
			base.Chat(text, type, sound, pos, canSkip, speed);
			chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
		}
	}

	public void HitLastAttack()
	{
		hitLastAttack = true;
	}

	public override string GetRandomFlavorText()
	{
		if (satisfied >= 100)
		{
			if (!pettedOnce)
			{
				return "* Doggo超喜欢你丢我接！！！^30\n\n* 等下出错了？？？";
			}
			return "* Doggo已经被摸过了。";
		}
		if (lastFlavor == 0)
		{
			return "* Doggo还想被摸。";
		}
		if (lastFlavor == 2)
		{
			lastFlavor = -1;
			if (!hostile)
			{
				return "* Doggo感觉好点了。";
			}
			return "* Doggo现在十分激动！！！";
		}
		if (!hostile)
		{
			return "* Doggo仍然不信任你。";
		}
		if (!hitLastAttack)
		{
			return "* Doggo看起来什么也没找到。";
		}
		return base.GetRandomFlavorText();
	}

	public int GetProgress()
	{
		if (hostile)
		{
			if (!approached)
			{
				return 0;
			}
			return 1;
		}
		return 2;
	}

	public override void Unhostile()
	{
		if (hostile)
		{
			response = 3;
			def = -500;
			if (hp > 0)
			{
				Util.GameManager().SetSessionFlag(3, 1);
			}
			GetPart("body").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_body");
			GetPart("head").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_head_normal");
			GetPart("head").GetComponent<SpriteRenderer>().flipX = false;
			GetPart("head").Find("eyes").localPosition = Vector3.zero;
			GetPart("head").Find("eyes").GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, 1f);
			GetPart("tail").GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, 1f);
			GetPart("arms").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Doggo/spr_b_doggo_arms");
		}
		base.Unhostile();
	}
}

