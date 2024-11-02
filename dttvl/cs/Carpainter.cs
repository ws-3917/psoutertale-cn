using System;
using UnityEngine;

public class Carpainter : EnemyBase
{
	private bool geno;

	private bool lookingForAvoid;

	private bool startedFight;

	private bool playingDefeatAnim;

	private int animFrames;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "颜料匠先生";
		fileName = "carpainter";
		checkDesc = "* 乐乐教的最高祭司。";
		maxHp = 1000;
		hp = maxHp;
		hpPos = new Vector2(2f, 145f);
		hpWidth = 150;
		atk = 30;
		def = 12;
		flavorTxt = new string[3] { "* 颜料匠先生威胁地拿着他\n  的画笔指着你。", "* 闻起来像颜料。", "* 颜料匠先生凝视着你。" };
		dyingTxt = new string[1] { "* 颜料匠先生不敢再威胁你们了。" };
		satisfyTxt = flavorTxt;
		actNames = new string[3] { "交谈", "SN!交流", "S!拒绝" };
		sActionName = "交谈";
		nActionName = "交谈";
		defaultChatSize = "RightSmall";
		exp = 1;
		gold = 18;
		geno = (int)UnityEngine.Object.FindObjectOfType<GameManager>().GetFlag(13) >= 5;
		canSpareViaFight = geno;
		attacks = new int[2] { 38, 39 };
	}

	protected override void Start()
	{
		base.Start();
		defaultChatPos = new Vector2(Mathf.RoundToInt(GetEnemyObject().transform.position.x * 48f) + 109, 121f);
	}

	protected override void Update()
	{
		base.Update();
		if (!gotHit)
		{
			animFrames++;
			float t = (Mathf.Cos((float)(animFrames * 12) * ((float)Math.PI / 180f)) + 1f) / 2f;
			float t2 = (Mathf.Cos((float)((animFrames - 3) * 12) * ((float)Math.PI / 180f)) + 1f) / 2f;
			float t3 = (Mathf.Cos((float)((animFrames - 6) * 12) * ((float)Math.PI / 180f)) + 1f) / 2f;
			GetPart("torso").transform.localPosition = new Vector3(0.059f, Mathf.Lerp(0.789f, 0.647f, t));
			GetPart("torso").transform.Find("arms").localPosition = new Vector3(-0.061f, Mathf.Lerp(0.879f, 0.824f, t2));
			GetPart("torso").transform.Find("arms").localScale = new Vector3(Mathf.Lerp(1f, 1.05f, t3), 1f, 1f);
			GetPart("legs").transform.localScale = new Vector3(1f, Mathf.Lerp(1f, 0.8625f, t), 1f);
		}
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "S!拒绝")
		{
			lookingForAvoid = true;
			return new string[2] { "su_annoyed`snd_txtsus`* 把你那死人信仰拿远点。", "*（Susie激励你本回合<color=#FFFF00FF>不要被击中</color>！）" };
		}
		if (GetActNames()[i] != "查看")
		{
			int points = 5;
			string text = "* 你试图说服\n  颜料匠先生远离\n  乐乐教。";
			string text2 = "* 他好像在听。";
			if (GetActNames()[i].StartsWith("SN!交流"))
			{
				points = ((UnityEngine.Object.FindObjectOfType<GameManager>().GetMiniPartyMember() == 1) ? 20 : 15);
				text = "* 大家试图说服\n  颜料匠先生放弃\n  乐乐教。";
			}
			else if (UnityEngine.Object.FindObjectOfType<GameManager>().GetMiniPartyMember() == 1)
			{
				text = "* Paula让颜料匠先生\n  好好想想自己造了哪些孽。";
				points = 10;
			}
			AddActPoints(points);
			if (satisfied >= 100)
			{
				Spare();
				text2 = "* 他完全信服了！";
			}
			return new string[2] { text, text2 };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		string text = "* 你无视游戏规则，使出了K-行动。";
		string text2 = "* 他好像在听。";
		if (i == 1)
		{
			text = "* Susie威胁\n  颜料匠说因为他领导了邪教\n  而要痛打他。";
		}
		if (i == 2)
		{
			text = "* Noelle恳求颜料匠\n  考虑一下乐乐教的负面\n  影响。";
		}
		AddActPoints(5);
		if (satisfied >= 100)
		{
			Spare();
			text2 = "* 他完全信服了！";
		}
		return new string[2] { text, text2 };
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		base.Hit(partyMember, rawDmg, playSound);
		if (hp <= 0 && rawDmg > 0f)
		{
			if (geno)
			{
				killed = false;
				UnityEngine.Object.FindObjectOfType<BattleManager>().StopMusic();
				exp = 100;
				obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/" + enemyName.Replace(".", "") + "/spr_b_" + fileName + "_die_0");
			}
			else
			{
				obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/" + enemyName.Replace(".", "") + "/spr_b_" + fileName + "_defeat");
			}
		}
	}

	public override void Spare(bool sleepMist = false)
	{
		CombineParts();
		spared = true;
		obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/" + enemyName.Replace(".", "") + "/spr_b_" + fileName + "_defeat");
	}

	public override void TurnToDust()
	{
		if (geno)
		{
			playingDefeatAnim = true;
		}
		CombineParts();
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		if (!text[0].Contains("error"))
		{
			if (playingDefeatAnim)
			{
				killed = true;
			}
			base.Chat(text, type, sound, pos, canSkip, speed);
			chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
		}
	}

	public override int GetNextAttack()
	{
		if (playingDefeatAnim)
		{
			return 52;
		}
		return base.GetNextAttack();
	}

	public bool LookingForAvoid()
	{
		if (lookingForAvoid)
		{
			lookingForAvoid = false;
			return true;
		}
		return false;
	}

	public override void EnemyTurnEnd()
	{
		lookingForAvoid = false;
	}

	public override string GetRandomFlavorText()
	{
		if (!startedFight)
		{
			startedFight = true;
			return "* 富兰克林徽章反射了\n  颜料匠的电击！";
		}
		return base.GetRandomFlavorText();
	}
}

