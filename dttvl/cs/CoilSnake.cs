using UnityEngine;

public class CoilSnake : EnemyBase
{
	private bool geno;

	private bool playingDefeatAnim;

	private int defeatFrames;

	private bool down = true;

	private int bounceFrames;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Coil Snake";
		fileName = "snake";
		checkDesc = "* 这个容易对付的敌人\n  不知为何出现得这么晚。";
		maxHp = 10;
		hp = maxHp;
		hpPos = new Vector2(2f, 132f);
		hpWidth = 101;
		atk = 4;
		satisfied = 0;
		def = 0;
		flavorTxt = new string[4] { "* Coil Snake正在上蹿下跳。", "* Coil Snake正在试图逃跑。", "* 闻起来像蛇。", "* Coil Snake发出嘶嘶声。\n^15* ...但目标不是你。" };
		dyingTxt = new string[1] { "* Coil Snake要撑不住了。" };
		satisfyTxt = flavorTxt;
		chatter = new string[3] { "Ssssss", "I'm a \nssssnake", "Ssssorry \nfor \nthissss" };
		actNames = new string[1] { "交谈" };
		defaultChatSize = "RightSmall";
		exp = 1;
		gold = 4;
		attacks = new int[1] { 34 };
		geno = (int)Object.FindObjectOfType<GameManager>().GetFlag(13) >= 4;
		if (geno)
		{
			checkDesc = "* 蛇血有利于治疗心脏。";
		}
	}

	protected override void Start()
	{
		base.Start();
		defaultChatPos = new Vector2(Mathf.RoundToInt(GetEnemyObject().transform.position.x * 48f) + 103, 65f);
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "交谈")
		{
			if (satisfied < 100)
			{
				AddActPoints(100);
			}
			return new string[1] { "* 你试图与Coil Snake交谈。^10\n* 他立马回应了你：“嘶嘶”。\n* 多么有意义的一段对话！" };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		switch (i)
		{
		case 1:
			return new string[1] { "su_inquisitive`snd_txtsus`* ...我特么该怎么做？？？^10\n* 把他系个扣？" };
		case 2:
			return new string[1] { "no_happy`snd_txtnoe`* 我想我们已经可以饶恕\n  它了。^05Kris..." };
		default:
			return base.PerformAssistAct(i);
		}
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		base.Chat(text, type, sound, pos, canSkip, 1);
		chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
	}

	protected override void Update()
	{
		base.Update();
		if (playingDefeatAnim)
		{
			defeatFrames++;
			if (!geno && defeatFrames == 14)
			{
				Transform obj = Object.Instantiate(Resources.Load<GameObject>("vfx/EnemyRunEffect")).transform;
				obj.position = base.obj.transform.Find("mainbody").position;
				SpriteRenderer[] componentsInChildren = obj.GetComponentsInChildren<SpriteRenderer>();
				for (int i = 0; i < componentsInChildren.Length; i++)
				{
					componentsInChildren[i].sprite = base.obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite;
				}
				base.obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().enabled = false;
			}
			else if (geno)
			{
				if (defeatFrames == 1)
				{
					Object.FindObjectOfType<PartyPanels>().RaiseHeads(kris: false, susie: false, noelle: false);
				}
				if (defeatFrames < 45)
				{
					base.obj.transform.Find("mainbody").localPosition = new Vector3(Random.Range(-1, 2), Random.Range(-1, 2)) / 24f;
				}
				else if (defeatFrames == 45)
				{
					base.obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/" + enemyName.Replace(".", "") + "/spr_b_" + fileName + "_kill_1");
					base.obj.transform.Find("mainbody").localPosition = Vector3.zero;
					Object.Instantiate(Resources.Load<GameObject>("vfx/EnemyBlood"), base.obj.transform.Find("mainbody").position + new Vector3(0f, 0.2f), Quaternion.identity);
					aud.clip = Resources.Load<AudioClip>("sounds/snd_noise");
					aud.Play();
				}
			}
		}
		else
		{
			if (gotHit)
			{
				return;
			}
			if (down)
			{
				bounceFrames++;
				if (bounceFrames == 15)
				{
					down = false;
				}
			}
			else
			{
				bounceFrames--;
				if (bounceFrames == 0)
				{
					down = true;
				}
			}
			GetPart("body").transform.localScale = Vector3.Lerp(new Vector3(1f, 1f), new Vector3(1f, 0.85f), (float)bounceFrames / 23f);
		}
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		base.Hit(partyMember, rawDmg, playSound);
		if (hp <= 0 && rawDmg > 0f && geno)
		{
			Object.FindObjectOfType<BattleManager>().StopMusic();
			exp = 25;
			gold = 10;
			obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/" + enemyName.Replace(".", "") + "/spr_b_" + fileName + "_kill_0");
			Object.FindObjectOfType<GameManager>().SetFlag(87, 4);
			Object.FindObjectOfType<PartyPanels>().SetSprite(1, "spr_su_down_unhappy_0");
			Object.FindObjectOfType<PartyPanels>().SetSprite(2, "spr_no_down_unhappy_0");
		}
	}

	public override void TurnToDust()
	{
		playingDefeatAnim = true;
		if (!geno)
		{
			aud.clip = Resources.Load<AudioClip>("sounds/snd_defeatrun");
			aud.Play();
		}
		CombineParts();
	}

	public override bool CanSpare()
	{
		return true;
	}

	public override bool IsShaking()
	{
		if (!geno || !playingDefeatAnim || defeatFrames >= 150)
		{
			return base.IsShaking();
		}
		return true;
	}
}

