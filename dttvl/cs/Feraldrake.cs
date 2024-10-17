using UnityEngine;

public class Feraldrake : EnemyBase
{
	private int actCount;

	private int respond;

	private bool roar;

	private int roarFrames;

	private int headFrames;

	private int lastI = -1;

	private Sprite[] sprites = new Sprite[15];

	private bool chilldrake;

	private bool snowyAppears;

	private bool attackedLast;

	private bool addressedAttack;

	private bool doingFakeAttack;

	private bool spareable;

	private bool pacifist;

	private int turnCount;

	private int attackCount = -1;

	private int attackCheckedAt;

	private int actCheckedAt;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Snowdrake";
		fileName = "snowdrake";
		checkDesc = "* 在林中呆了太久，^05它已经疯了！";
		maxHp = 310;
		hp = maxHp;
		hpToUnhostile = maxHp - 1;
		hostile = true;
		hpPos = new Vector2(2f, 122f);
		hpWidth = 101;
		atk = 15;
		def = 2;
		displayedDef = 20;
		chatter = new string[1] { " " };
		flavorTxt = new string[3] { "* Feraldrake流了许多口水。", "* 闻起来像湿枕头。", "* Feraldrake正盯着你。" };
		dyingTxt = new string[1] { "* Snowdrake的身体正在散架。" };
		satisfyTxt = flavorTxt;
		actNames = new string[3]
		{
			"Heckle",
			"Laugh",
			((int)Util.GameManager().GetFlag(211) == 1) ? REDBUSTER_NAME : "Joke"
		};
		if (Util.GameManager().IsEasyMode())
		{
			actNames = new string[4]
			{
				"Heckle",
				"Laugh",
				((int)Util.GameManager().GetFlag(211) == 1) ? REDBUSTER_NAME : "Joke",
				"Smack"
			};
		}
		hurtSound = "sounds/snd_hurtdragon";
		defaultChatSize = "RightSmall";
		exp = 80;
		gold = 10;
		playerMultiplier = 0.5f;
		attacks = new int[1] { 83 };
		hurtSpriteName = "_dmg_feral";
		for (int i = 0; i < 15; i++)
		{
			sprites[i] = Resources.Load<Sprite>("battle/enemies/Snowdrake/spr_snowdrake_head_" + i);
		}
	}

	protected override void Start()
	{
		base.Start();
		defaultChatPos = new Vector2(Mathf.RoundToInt(GetEnemyObject().transform.position.x * 48f) + 107, 95f);
		obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/" + enemyName.Replace(".", "") + "/spr_b_" + fileName + hurtSpriteName);
		if (Object.FindObjectOfType<BattleManager>().GetBattleID() == 65)
		{
			chilldrake = true;
			checkDesc = "* A feral snowdrake,^05 but cooler.";
			if (Util.GameManager().IsEasyMode())
			{
				actNames = new string[5]
				{
					"查看",
					"Agree",
					"Clash",
					((int)Util.GameManager().GetFlag(211) == 1) ? REDBUSTER_NAME : "Joke",
					"Smack"
				};
			}
			else
			{
				actNames = new string[4]
				{
					"查看",
					"Agree",
					"Clash",
					((int)Util.GameManager().GetFlag(211) == 1) ? REDBUSTER_NAME : "Joke"
				};
			}
			hpToUnhostile = 0;
			if ((int)Util.GameManager().GetFlag(181) == 2 && (int)Util.GameManager().GetFlag(182) == 1)
			{
				snowyAppears = true;
			}
			if (!WeirdChecker.HasKilled(Util.GameManager()) && snowyAppears)
			{
				pacifist = true;
			}
		}
		else
		{
			Object.Destroy(GetPart("head-anchor").Find("head").Find("glasses").gameObject);
		}
		Object.Destroy(GetPart("head-anchor").Find("head").Find("pissed").gameObject);
	}

	protected override void Update()
	{
		base.Update();
		if (Util.GameManager().IsTestMode() && Input.GetKeyDown(KeyCode.E) && turnCount < 3)
		{
			turnCount = 3;
			PlaySFX("sounds/snd_bell");
		}
		if (!gotHit && !roar)
		{
			if (roarFrames > 0)
			{
				roarFrames = 0;
				SeparateParts();
			}
			int num = headFrames % 84;
			float num2 = 0f;
			if (num < 50)
			{
				num2 = (float)num / 30f;
				if (num2 > 1f)
				{
					num2 = 1f;
				}
			}
			else
			{
				num2 = 1f - (float)(num - 50) / 30f;
				if (num2 < 0f)
				{
					num2 = 0f;
				}
			}
			GetPart("head-anchor").localPosition = new Vector3(-1f / 24f, Mathf.Lerp(0.957f, 0.707f, num2 * num2 * (3f - 2f * num2)) + 1.5208334f);
			GetPart("body").transform.localPosition = new Vector3(-1f / 24f, Mathf.Lerp(0.373f, 0.293f, num2 * num2 * (3f - 2f * num2)));
			if (headFrames >= 60)
			{
				int num3 = Mathf.FloorToInt(5f / 58f * (float)(headFrames - 60));
				if (num3 != lastI)
				{
					GetPart("head-anchor").Find("head").GetComponent<SpriteRenderer>().sprite = sprites[num3 + 4];
				}
				lastI = num3;
			}
			else if (headFrames == 0 || headFrames == 30)
			{
				GetPart("head-anchor").Find("head").GetComponent<SpriteRenderer>().sprite = sprites[1];
			}
			else if (headFrames == 8)
			{
				GetPart("head-anchor").Find("head").GetComponent<SpriteRenderer>().sprite = sprites[0];
			}
			else if (headFrames == 39)
			{
				GetPart("head-anchor").Find("head").GetComponent<SpriteRenderer>().sprite = sprites[2];
			}
			if (hostile)
			{
				if (headFrames <= 50)
				{
					GetPart("head-anchor").localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(0f, -17f, (float)(headFrames - 45) / 5f));
				}
				else if (headFrames <= 85)
				{
					GetPart("head-anchor").localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(-17f, 9f, (float)(headFrames - 80) / 5f));
				}
				else if (headFrames <= 124)
				{
					GetPart("head-anchor").localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(9f, 19f, (float)(headFrames - 120) / 4f));
				}
				else if (headFrames <= 135)
				{
					GetPart("head-anchor").localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(19f, 0f, (float)(headFrames - 130) / 5f));
				}
			}
			else
			{
				GetPart("head-anchor").localRotation = Quaternion.Euler(0f, 0f, 0f);
			}
			headFrames = (headFrames + 1) % 168;
		}
		else if (roar)
		{
			roarFrames++;
			if (roarFrames < 3 || roarFrames >= 24)
			{
				obj.transform.localPosition = mainPos;
			}
			else
			{
				obj.transform.localPosition = mainPos + new Vector3((float)((roarFrames % 2 != 0) ? 1 : (-1)) / 24f, 0f);
			}
			if (roarFrames == 27)
			{
				roar = false;
			}
		}
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		base.Hit(partyMember, rawDmg, playSound);
		if (!(rawDmg > 0f))
		{
			return;
		}
		if (!chilldrake)
		{
			Util.GameManager().SetFlag(232, 1);
			return;
		}
		attackedLast = true;
		if (pacifist)
		{
			addressedAttack = false;
		}
	}

	public override int CalculateDamage(int partyMember, float rawDmg, bool forceMagic = false)
	{
		if (snowyAppears && hp - base.CalculateDamage(partyMember, rawDmg, forceMagic) <= 0)
		{
			turnCount = 3;
			return hp - 1;
		}
		if (partyMember == 2 && (bool)Object.FindObjectOfType<IceShock>())
		{
			return base.CalculateDamage(partyMember, rawDmg, forceMagic) / 20;
		}
		return base.CalculateDamage(partyMember, rawDmg, forceMagic);
	}

	public override string GetName()
	{
		if (hostile)
		{
			return "Feraldrake";
		}
		return base.GetName();
	}

	public override bool CanSpare()
	{
		return spareable;
	}

	public override string[] PerformAct(int i)
	{
		if (chilldrake && pacifist && addressedAttack)
		{
			attackedLast = false;
			addressedAttack = false;
		}
		if (GetActNames()[i] == "Laugh")
		{
			respond = 1;
			if (hostile)
			{
				actCount++;
				if (!tired && actCount >= 3)
				{
					tired = true;
					return new string[1] { "* 你嘲笑Feraldrake。\n* Feraldrake变得疲倦了。" };
				}
				return new string[1] { "* 你嘲笑Feraldrake。\n* 无事发生。" };
			}
			return new string[1] { "* 你嘲笑Snowdrake。\n* Snowdrake看起来很疑惑。" };
		}
		if (GetActNames()[i] == "Heckle")
		{
			respond = 2;
			if (hostile)
			{
				actCount++;
				if (!tired && actCount >= 3)
				{
					tired = true;
					return new string[1] { "* 你向Feraldrake喝倒彩。\n* Feraldrake变得疲倦了。" };
				}
				return new string[1] { "* 你向Feraldrake喝倒彩。\n* 无事发生。" };
			}
			return new string[1] { "* 你向Snowdrake喝倒彩。\n* Snowdrake看起来很疑惑。" };
		}
		if (GetActNames()[i] == "Joke")
		{
			respond = 3;
			if (chilldrake)
			{
				actCount++;
				return new string[1] { "* 你说了一个有关冰的低级双关笑话。\n* 无事发生。" };
			}
			if (hostile)
			{
				actCount++;
				if (!tired && actCount >= 3)
				{
					tired = true;
					return new string[1] { "* 你说了一个有关冰的低级双关笑话。\n* Feraldrake变得疲倦了。" };
				}
				return new string[1] { "* 你说了一个有关冰的低级双关笑话。\n* 无事发生。" };
			}
			return new string[1] { "* 你说了一个有关冰的低级双关笑话。\n* Snowdrake似乎很喜欢。" };
		}
		if (GetActNames()[i] == "Agree")
		{
			actCount++;
			respond = 1;
			return new string[1] { "* 你赞同了Feraldrake的咆哮。\n* 无事发生。" };
		}
		if (GetActNames()[i] == "Clash")
		{
			actCount++;
			respond = 2;
			return new string[1] { "* 你告诉Feraldrake它一直都错了。\n* 无事发生。" };
		}
		if (GetActNames()[i] == "Smack")
		{
			if (hostile)
			{
				if (!chilldrake)
				{
					Util.GameManager().SetFlag(232, 1);
				}
				else
				{
					attackedLast = true;
					if (pacifist)
					{
						doingFakeAttack = true;
					}
				}
				base.Hit(0, 10f, playSound: true);
				return new string[1] { "* 你打了Feraldrake一巴掌。" };
			}
			base.Hit(0, 10f, playSound: true);
			return new string[1] { "* 你打了Snowdrake一巴掌。\n* 它看起来很疑惑。" };
		}
		return base.PerformAct(i);
	}

	public override void EnemyTurnEnd()
	{
		base.EnemyTurnEnd();
		if (!hostile)
		{
			spareable = true;
		}
	}

	public override string[] PerformAssistAct(int i)
	{
		switch (i)
		{
		case 1:
			actCount++;
			if (!chilldrake)
			{
				if (hostile && !tired && actCount >= 3)
				{
					tired = true;
					return new string[1] { "* Susie把她的武器指向了Feraldrake。\n* Feraldrake变得疲倦了。" };
				}
				return new string[1] { hostile ? "* Susie把她的武器指向了Feraldrake。\n* 无事发生。" : "* Susie把她的武器指向了snowdrake。\n* Snowdrake看起来很疑惑。" };
			}
			return new string[1] { "* Susie把她的武器指向了Feraldrake。\n* 无事发生。" };
		case 2:
			if (hostile)
			{
				actCount++;
				if (chilldrake || tired)
				{
					return new string[1] { "* Noelle让雪花从掌心流过。\n* 无事发生。" };
				}
				if (!tired && actCount >= 3)
				{
					tired = true;
					return new string[1] { "* Noelle flows snow through\n  the cold air.\n* Feraldrake became TIRED." };
				}
			}
			respond = 5;
			return new string[2] { "* Noelle flows snow through\n  the cold air.", "* Snowdrake looks confused,^05 but\n  seems impressed." };
		default:
			return base.PerformAssistAct(i);
		}
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		if (hostile)
		{
			respond = 0;
			roar = true;
			roarFrames = 0;
			PlaySFX("sounds/snd_hurtdragon");
			CombineParts();
			return;
		}
		if (respond > 0)
		{
			if (respond == 1)
			{
				text = new string[1] { "W-what're \nyou\n laughin' \nat?" };
			}
			else if (respond == 3)
			{
				text = new string[1] { "Heh...\nReminds \nme of \nSnowy." };
			}
			else if (respond == 5)
			{
				text = new string[1] { "Whoa,^05 \ncool..." };
			}
		}
		respond = 0;
		speed = 1;
		base.Chat(text, type, sound, pos, canSkip, speed);
		chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
	}

	public override int GetNextAttack()
	{
		if (chilldrake)
		{
			if (!pacifist)
			{
				addressedAttack = false;
			}
			turnCount++;
			if (turnCount >= 4 && snowyAppears)
			{
				respond = 0;
				MonoBehaviour.print("get ending attack");
				return 84;
			}
		}
		return base.GetNextAttack();
	}

	public override string GetRandomFlavorText()
	{
		if (chilldrake)
		{
			if (!pacifist && attackedLast && !addressedAttack && doingFakeAttack && (int)Util.GameManager().GetFlag(232) == 1)
			{
				addressedAttack = true;
				return "su_side_sweat`snd_txtsus`* Uhh...^05 don't these guys\n  turn back to normal\n  after we hit them?";
			}
			if (pacifist)
			{
				if (attackedLast && (attackCheckedAt != turnCount || addressedAttack || doingFakeAttack))
				{
					if (attackCheckedAt != turnCount)
					{
						attackCheckedAt = turnCount;
						attackCount++;
					}
					addressedAttack = true;
					if (attackCount < 3 && !doingFakeAttack)
					{
						return (new string[3]
						{
							((int)Util.GameManager().GetFlag(232) == 1) ? "su_surprised`snd_txtsus`* Uhh...^05 why didn't this\n  one turn back to\n  normal???" : "su_annoyed`snd_txtsus`* That did...^05 nothing.^05\n* Great.",
							"no_shocked`snd_txtnoe`* We aren't gonna kill\n  them,^05 are we???",
							(actCount <= 3) ? "su_angry`snd_txtsus`* KRIS!!!^05\n* TRY SOMETHING ELSE!!!" : "su_angry`snd_txtsus`* STOP BEING CRAZY ALREADY!!!"
						})[attackCount];
					}
					if (attackCount < 2)
					{
						return (new string[2]
						{
							((int)Util.GameManager().GetFlag(232) == 1) ? "su_surprised`snd_txtsus`* Uhh...^05 why didn't this\n  one turn back to\n  normal???" : "su_annoyed`snd_txtsus`* That did...^05 nothing.^05\n* Great.",
							(actCount <= 3) ? "su_angry`snd_txtsus`* KRIS!!!^05\n* TRY SOMETHING ELSE!!!" : "su_angry`snd_txtsus`* STOP BEING CRAZY ALREADY!!!"
						})[attackCount];
					}
				}
				else
				{
					if (actCount >= 9 && (actCheckedAt != 9 || addressedAttack))
					{
						if (actCheckedAt != 9)
						{
							actCheckedAt = 9;
						}
						addressedAttack = true;
						return "su_angry`snd_txtsus`* KRIS!!!^05\n* TRY SOMETHING ELSE!!!";
					}
					if (actCount >= 6 && (actCheckedAt != 6 || addressedAttack))
					{
						if (actCheckedAt != 6)
						{
							actCheckedAt = 6;
						}
						addressedAttack = true;
						return "su_annoyed`snd_txtsus`* Why is this just\n  not working???";
					}
					if (actCount >= 3 && (actCheckedAt != 3 || addressedAttack))
					{
						if (actCheckedAt != 3)
						{
							actCheckedAt = 3;
						}
						addressedAttack = true;
						return "su_side_sweat`snd_txtsus`* Is it just me,^05 or\n  is this one not\n  tired yet?";
					}
				}
			}
			doingFakeAttack = false;
		}
		if (!hostile)
		{
			return "* Snowdrake has come to its\n  senses.";
		}
		if (tired)
		{
			return "* Feraldrake looks tired.";
		}
		return base.GetRandomFlavorText();
	}

	public override void Spare(bool sleepMist = false)
	{
		if (!spared)
		{
			obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().color = Color.white;
			hurtSpriteName = "_dmg";
		}
		if (sleepMist)
		{
			Util.GameManager().SetSessionFlag(9, 1);
		}
		else
		{
			Util.GameManager().SetSessionFlag(9, 0);
		}
		base.Spare(sleepMist);
	}

	public bool Roaring()
	{
		return roar;
	}

	public override void Unhostile()
	{
		if (hostile)
		{
			playerMultiplier = 0.8f;
			chatter = new string[3] { "Huh...?", "Huh...?\nWhuh...?", "Where \nam I?" };
			Object.Destroy(GetPart("head-anchor").Find("head").Find("feral").gameObject);
			hurtSpriteName = "_dmg";
			obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/" + enemyName.Replace(".", "") + "/spr_b_" + fileName + hurtSpriteName);
		}
		base.Unhostile();
	}
}

