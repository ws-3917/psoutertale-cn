using System.Collections.Generic;
using UnityEngine;

public class Flowey : EnemyBase
{
	private int bodyFrames;

	private int headDif = 1;

	private bool initialFlavor;

	private bool animateBody = true;

	private int curAttack = -1;

	private int[] orderedAttacks = new int[8] { 23, 24, 25, 26, 28, 24, 27, 29 };

	private Vector3 headOffsetEnd = Vector3.zero;

	private Vector3 headOffset = Vector3.zero;

	private int spareAttempts;

	private int spareAttemptsSpoken;

	private int spareAttemptsFinale;

	private int spareAttemptsSpokenFinale;

	private bool check;

	private bool doneChatting = true;

	private bool inFinale;

	private bool finaleKilled;

	private bool dodge;

	private bool hardmode;

	private bool krisFalling;

	private int krisFallingFrames;

	protected override void Awake()
	{
		base.Awake();
		hardmode = (int)Util.GameManager().GetFlag(108) == 1;
		enemyName = "Flowey";
		fileName = "flowey";
		checkDesc = "* 坚守着他的唯一理念：\n  “不是杀人就是被杀。”";
		if (hardmode && (int)Util.GameManager().GetFlag(13) == 3)
		{
			checkDesc = "* 我最好的朋友。";
		}
		maxHp = 900;
		if (!hardmode)
		{
			maxHp += 100;
		}
		hp = maxHp;
		hpPos = new Vector2(0f, 175f);
		atk = 30;
		def = 1;
		playerMultiplier = (hardmode ? 1.35f : 1.25f);
		flavorTxt = new string[6] { "* 闻起来像花园里的藤蔓。", "* Flowey露出邪恶的笑容。", "* 四周藤蔓阴森的蠕动着。", "* 大地上下翻滚。", "* Flowey咯咯地笑起来。", "* 闻起来像一束腐烂的花。" };
		dyingTxt = new string[1] { "* Flowey正在凋谢。" };
		chatter = new string[1] { "" };
		actNames = new string[1] { REDBUSTER_NAME };
		if (hardmode)
		{
			actNames = new string[1] { EnemyBase.MakeSpecialActString("KS", "Red Buster", "Deals RED Damage", 60) };
		}
		canSpareViaFight = false;
		renderSpareBar = false;
		emptyHPBarWhenZero = false;
		hpWidth = 200;
		attacks = new int[7] { 23, 24, 25, 26, 27, 28, 29 };
		if (hardmode)
		{
			attacks = new int[7] { 23, 24, 25, 26, 27, 49, 29 };
			orderedAttacks = new int[7] { 23, 24, 25, 26, 29, 27, 49 };
		}
		exp = 150;
		gold = 50;
		defaultChatPos = new Vector2(182f, 126f);
		defaultChatSize = "RightWide";
	}

	protected override void Update()
	{
		if (hp > 0)
		{
			Vector3 vector = Vector3.zero;
			headOffset = Vector3.Lerp(headOffset, headOffsetEnd, 0.5f);
			if (gotHit)
			{
				moveBody--;
				vector = new Vector3(Random.Range(0, 3) - 1, Random.Range(0, 3) - 1) * ((float)moveBody / 96f);
				if (moveBody == 0)
				{
					gotHit = false;
					SetFace("evil");
				}
			}
			if (animateBody)
			{
				bodyFrames++;
				float num = (float)bodyFrames / 30f;
				if (bodyFrames > 30)
				{
					num = (float)(60 - bodyFrames) / 30f;
				}
				num = num * num * (3f - 2f * num);
				GetPart("stem").transform.localScale = new Vector3(1f, Mathf.Lerp(1f, 0.9f, num), 1f);
				GetPart("head").transform.localPosition = Vector3.Lerp(new Vector3(-0.32f, 2.72f), new Vector3(-0.32f - 0.1f * (float)headDif, 2.45f), num) + vector + headOffset;
				if (bodyFrames == 60)
				{
					bodyFrames = 0;
					headDif *= -1;
				}
			}
		}
		else
		{
			if (gotHit)
			{
				frames++;
				_ = moveBody;
				int num2 = (finaleKilled ? 6 : 4);
				if (frames % num2 == 0)
				{
					if (moveBody < 0)
					{
						moveBody *= -1;
					}
					else if (moveBody > 0)
					{
						moveBody -= 2;
						moveBody *= -1;
					}
				}
				if (frames == 60 && !finaleKilled)
				{
					gotHit = false;
				}
				if (finaleKilled)
				{
					int num3 = (frames - 90) / 6 % 4;
					if (frames > 90 && frames < 109)
					{
						SetFace("final_blow_" + num3);
					}
					if (frames == 130)
					{
						gotHit = false;
					}
				}
				obj.transform.localPosition = mainPos + new Vector3((float)moveBody / 24f, 0f);
			}
			if (dodge)
			{
				GetPart("stem").transform.localScale = new Vector3(1f, Mathf.Lerp(GetPart("stem").transform.localScale.y, 0.3717188f, 0.25f), 1f);
				GetPart("head").transform.localPosition = Vector3.Lerp(GetPart("head").transform.localPosition, new Vector3(-0.78f, 0.95f), 0.25f);
			}
		}
		if ((bool)chatbox && !check && !finaleKilled && !doneChatting && spareAttemptsFinale < 10)
		{
			Dictionary<int, string> dictionary = new Dictionary<int, string>();
			if (spareAttemptsSpokenFinale == 1)
			{
				dictionary.Add(2, "sad_dying");
				dictionary.Add(3, "mad_dying");
				dictionary.Add(4, "side_dying");
				dictionary.Add(5, "sassy_dying");
			}
			else if (spareAttemptsSpokenFinale == 3)
			{
				dictionary.Add(1, "mad_dying");
			}
			else if (spareAttemptsSpokenFinale == 4)
			{
				dictionary.Add(1, "rage_dying");
			}
			else if (spareAttemptsSpokenFinale == 5)
			{
				dictionary.Add(1, "hanging");
			}
			else if (spareAttemptsSpokenFinale == 7)
			{
				dictionary.Add(1, "sad_dying");
				dictionary.Add(3, "reminice_dying");
			}
			else if (spareAttemptsSpokenFinale == 8)
			{
				dictionary.Add(1, "sad2_dying");
				dictionary.Add(3, "earnest_dying");
			}
			else if (spareAttemptsSpokenFinale == 9)
			{
				dictionary.Add(1, "reminice_dying");
				dictionary.Add(2, "sad2_dying");
				dictionary.Add(3, "hanging");
			}
			else if (inFinale && spareAttemptsSpokenFinale == 0)
			{
				if ((int)Object.FindObjectOfType<GameManager>().GetFlag(13) == 3)
				{
					if (hardmode)
					{
						dictionary.Add(1, "hanging");
						dictionary.Add(2, "neutral_dying");
						dictionary.Add(3, "side_dying");
						dictionary.Add(4, "evil_dying");
						dictionary.Add(5, "grin_dying");
						dictionary.Add(7, "sad_dying");
						dictionary.Add(10, "neutral_dying");
					}
					else
					{
						dictionary.Add(1, "hanging");
						dictionary.Add(2, "neutral_dying");
						dictionary.Add(3, "side_dying");
						dictionary.Add(4, "sassy_dying");
						dictionary.Add(5, "grin_dying");
						dictionary.Add(7, "earnest_dying");
						dictionary.Add(8, "evil_dying");
						dictionary.Add(10, "sad_dying");
						dictionary.Add(13, "neutral_dying");
					}
				}
				else
				{
					dictionary.Add(1, "hanging");
					dictionary.Add(2, "neutral_dying");
					dictionary.Add(3, "side_dying");
					dictionary.Add(5, "neutral_dying");
					dictionary.Add(6, "grin_dying");
					dictionary.Add(8, "sad_dying");
					dictionary.Add(10, "neutral_dying");
				}
			}
			else if (!inFinale)
			{
				if (spareAttemptsSpoken == 1)
				{
					dictionary.Add(1, "side");
					dictionary.Add(2, "laugh_0");
					dictionary.Add(3, "evil");
					dictionary.Add(4, "laugh_0");
				}
				else if (spareAttemptsSpoken == 2)
				{
					dictionary.Add(1, "sassy");
					dictionary.Add(2, "toriel");
					dictionary.Add(3, "laugh_0");
					if (chatbox.GetCurrentStringNum() == 1)
					{
						SetFace("sassy");
					}
					if (chatbox.GetCurrentStringNum() == 2)
					{
						SetFace("toriel");
					}
					if (chatbox.GetCurrentStringNum() == 3)
					{
						SetFace("laugh_0");
					}
				}
				else if (spareAttemptsSpoken == 3)
				{
					dictionary.Add(1, "mad");
					dictionary.Add(3, "laugh_0");
				}
			}
			if (dictionary.ContainsKey(chatbox.GetCurrentStringNum()))
			{
				SetFace(dictionary[chatbox.GetCurrentStringNum()]);
			}
		}
		else if (!doneChatting && !chatbox && !finaleKilled && spareAttemptsFinale < 10)
		{
			check = false;
			doneChatting = true;
			if (spareAttemptsFinale < 3)
			{
				if (inFinale)
				{
					SetFace("hanging");
				}
				else
				{
					SetFace("evil");
				}
			}
		}
		if (krisFalling)
		{
			krisFallingFrames++;
			GetPart("kris").transform.localPosition = new Vector3(2.9f, Mathf.Lerp(5.25f, 0.17f, (float)krisFallingFrames / 10f));
			if (krisFallingFrames == 10)
			{
				Util.GameManager().PlayGlobalSFX("sounds/snd_noise");
			}
			int num4 = krisFallingFrames / 2 - 4;
			if (num4 > 3)
			{
				num4 = 3;
			}
			else if (num4 < 0)
			{
				num4 = 0;
			}
			if (!GetPart("kris").GetComponent<SpriteRenderer>().sprite.name.EndsWith(num4.ToString()))
			{
				GetPart("kris").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Flowey/spr_b_flowey_kris_fall_" + num4);
			}
		}
	}

	public void TriggerKrisFalling()
	{
		GetPart("kris").GetComponent<SpriteRenderer>().enabled = true;
		krisFalling = true;
	}

	public bool KrisDoneFalling()
	{
		if (krisFalling)
		{
			return krisFallingFrames > 30;
		}
		return false;
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "查看")
		{
			check = true;
			return new string[1] { "* FLOWEY - LV 99\n" + checkDesc };
		}
		if (GetActNames()[i] == "KS!Red Buster;Deals RED Damage`60")
		{
			return new string[1] { "* 我操死你的妈" };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		return new string[1] { "* 但是她想不出任何主意。" };
	}

	public override int GetPredictedHP()
	{
		if (inFinale)
		{
			return 1;
		}
		return base.GetPredictedHP();
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		if (dodge)
		{
			rawDmg = 0f;
		}
		predictedDmg[partyMember] = 0f;
		int num = 0;
		int num2 = hp;
		if (rawDmg > 0f)
		{
			num = CalculateDamage(partyMember, rawDmg);
			if (num <= 0)
			{
				num = 1;
			}
			hp -= num;
			if (playSound)
			{
				aud.clip = Resources.Load<AudioClip>("sounds/snd_damage");
				aud.Play();
			}
			frames = 0;
			gotHit = true;
			if (hp <= 0)
			{
				GetPart("stem").transform.localScale = new Vector3(1f, 1f, 1f);
				GetPart("head").transform.localPosition = new Vector3(-0.34f, 2.72f);
				Object.FindObjectOfType<BattleManager>().SkipPartyMemberTurn(0);
				Object.FindObjectOfType<BattleManager>().SkipPartyMemberTurn(1);
				Object.FindObjectOfType<BattleManager>().StopMusic();
				GetPart("vineLeft").GetComponent<Animator>().SetFloat("speed", 0f);
				GetPart("vineRight").GetComponent<Animator>().SetFloat("speed", 0f);
				SetFace("evil_hit_dying");
				if (inFinale)
				{
					finaleKilled = true;
					SetFace("final_blow_0");
				}
				hp = 0;
				moveBody = 10;
				obj.transform.localPosition = mainPos + new Vector3((float)moveBody / 24f, 0f);
			}
			else
			{
				SetFace("evil_hit");
				moveBody = ((rawDmg > 30f) ? 30 : ((int)rawDmg));
			}
		}
		else
		{
			num = (int)rawDmg;
			hp -= num;
			if (hp > num2 && num != 0)
			{
				aud.clip = Resources.Load<AudioClip>("sounds/snd_heal");
				aud.Play();
				if (hp > maxHp)
				{
					hp = maxHp;
				}
			}
		}
		if ((!(rawDmg > 0f) || !(enemySOUL != null)) && (!finaleKilled || dodge))
		{
			string text = "EnemyHP" + obj.transform.parent.gameObject.name[5];
			if (!GameObject.Find(text))
			{
				EnemyHPBar component = Object.Instantiate(Resources.Load<GameObject>("battle/enemies/EnemyHP"), GameObject.Find("BattleCanvas").transform).GetComponent<EnemyHPBar>();
				component.gameObject.name = "EnemyHP" + obj.transform.parent.gameObject.name[5];
				component.transform.localScale = new Vector2(1f, 1f);
				component.transform.localPosition = hpPos;
				component.StartHP(num, num2, maxHp, partyMember, hpWidth, mercy: false, emptyHPBarWhenZero);
			}
			else
			{
				GameObject.Find(text).GetComponent<EnemyHPBar>().StartHP(num, num2, maxHp, partyMember, mercy: false, emptyHPBarWhenZero);
			}
		}
	}

	public void SetFace(string faceName)
	{
		if (!GetPart("head").GetComponent<SpriteRenderer>().sprite.name.EndsWith(faceName))
		{
			GetPart("head").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("battle/enemies/Flowey/spr_b_flowey_head_" + faceName);
		}
	}

	public override void Chat()
	{
		if (finaleKilled)
		{
			if (!hardmode)
			{
				Chat(new string[3] { "I knew it...!", "You're just like \nthem!", "Chara..." }, defaultChatSize, "snd_txtflw2", defaultChatPos, canSkip: true, 2);
			}
			else if ((int)Object.FindObjectOfType<GameManager>().GetFlag(13) == 3)
			{
				Chat(new string[4]
				{
					(spareAttemptsFinale > 0) ? "Your sudden twist \nagainst me..." : "That lack of \nremorse...",
					"...^15 Frisk...",
					"You played your best \ntrick yet...!",
					"H^04a^04.^04.^04.^30 h^04a^04.^04.^04."
				}, defaultChatSize, "snd_txtflw2", defaultChatPos, canSkip: true, 2);
			}
			else
			{
				Chat(new string[1] { "I knew you had \nit in you!" }, defaultChatSize, "snd_txtflw2", defaultChatPos, canSkip: true, 2);
			}
			chatbox.gameObject.AddComponent<ShakingText>().StartShake(0, "speechbubble");
		}
		else if (spareAttemptsFinale > spareAttemptsSpokenFinale)
		{
			check = false;
			doneChatting = false;
			string[] array = (new string[10][]
			{
				new string[6] { "...", "... 怎么...？", "你真打算这么干？", "饶恕我...?", "你不可能真的\n那么做的。", "来吧，^05杀了我吧。" },
				new string[1] { "杀了我。" },
				new string[1] { "杀了我！" },
				new string[1] { "杀了我！" },
				new string[1] { "..." },
				new string[1] { "...^15哈...^10哈..." },
				new string[4] { "你知道的，^05我...", "当我偷听到一切\n的时候。", "在那个世界，^05\n她有个孩子。", "我全都明白了。" },
				new string[3]
				{
					"那也许，^05如果我\n夺走了你的灵魂……",
					hardmode ? "我可以去探索\n其他的世界。" : "我可以替代\n你探索别的世界。",
					"我还能再次看见\n他们。"
				},
				new string[3]
				{
					hardmode ? "...你让我想起了\n很多事情，^05\n你知道的。" : "...你和他真的很像，^05\n懂吧。",
					hardmode ? "就像我所认为的..." : "我就是这么想的，^10\n你的兄弟...",
					"..."
				},
				new string[1] { "..." }
			})[spareAttemptsSpokenFinale];
			if (spareAttemptsSpokenFinale == 0 && spareAttempts > 0)
			{
				array[4] = "我已经告诉过你了\n我不会接受你的\n仁慈。";
			}
			if (spareAttemptsSpokenFinale == 0 && (int)Object.FindObjectOfType<GameManager>().GetFlag(13) == 3)
			{
				array[2] = "Are you like... \nACTUALLY braindead?";
				array[4] = "Didn't you murder \nall the monsters \nin the RUINS?";
			}
			spareAttemptsSpokenFinale++;
			Chat(array, defaultChatSize, "snd_txtflw", defaultChatPos, canSkip: true, 0);
		}
		else if (!inFinale && hp <= 0)
		{
			GetPart("vineLeft").GetComponent<Animator>().Play("Disappear");
			GetPart("vineRight").GetComponent<Animator>().Play("Disappear");
			doneChatting = false;
			actNames[1] = "";
			check = false;
			Object.FindObjectOfType<BattleManager>().ForceSoloKris();
			Object.FindObjectOfType<BattleManager>().PlayMusic("music/mus_f_wind", 1f, hasIntro: true);
			inFinale = true;
			if (Object.FindObjectOfType<GameManager>().GetHP(0) < 1)
			{
				Object.FindObjectOfType<GameManager>().SetHP(0, 1);
				Object.FindObjectOfType<GameManager>().PlayGlobalSFX("sounds/snd_heal");
			}
			if ((int)Object.FindObjectOfType<GameManager>().GetFlag(13) == 3)
			{
				if (!hardmode)
				{
					Chat(new string[14]
					{
						"嘻嘻嘻...", "做的好，^05Kris！", "You sure are no \npushover.", "All that power \nyou gained from \nmerciless slaughter...", "Through sheer will \nand DETERMINATION...", "And look where \nit's gotten you!", "Though...^10 it hasn't \nall been just you, \nhas it?", "After all,^05 it takes \nMAGIC to kill a \nghost.", "I was never any \nmatch against you \ntwo!", "...",
						"那么...^05Kris。", "It's time to finish \nwhat you started.", "来吧。", "了结我。"
					}, defaultChatSize, "snd_txtflw", defaultChatPos, canSkip: true, 0);
					checkDesc = "^15* 你最好的朋友。";
				}
				else
				{
					Chat(new string[10]
					{
						"嘻嘻嘻...",
						"Well done,^05 Frisk!",
						"While the IDIOT in \nmy grasp here \nnever fought back...",
						"I know that only \nYOU would have the \nguts to fight back!",
						(Util.GameManager().GetWeapon(0) == 27) ? "And given the stolen \nknife in your hands,^05\nyou were DEAD serious!" : "Hahaha...",
						"...",
						"So...^05 Frisk.",
						"It's time to finish \nwhat you started.",
						"来吧。",
						"了结我。"
					}, defaultChatSize, "snd_txtflw", defaultChatPos, canSkip: true, 0);
				}
			}
			else if (!hardmode)
			{
				Chat(new string[11]
				{
					"嘻嘻嘻...", "做的好，^05Kris！", "你显然不是我想象中\n的那么容易对付。", "如果是别人和我\n战斗的话，我可不会\n那么容易就倒下。", "但你不同。", "为什么，^05即使有了\n纯粹的意志和决心...", "你却仍然可以打败我！", "那么...^05Kris。", "你也是时候采取\n最后行动了。", "来吧。",
					"了结我。"
				}, defaultChatSize, "snd_txtflw", defaultChatPos, canSkip: true, 0);
			}
			else
			{
				Chat(new string[11]
				{
					"嘻嘻嘻...", "干得漂亮！", "你显然不是我想象中\n的那么容易对付。", "特别是跟我手上这个\n反击都不会的傻逼\n有很大区别啊。", "但你不同。", "为什么，^05即使有了\n纯粹的意志和决心...", "你却仍然可以打败我！", "听着...^05人类。", "你也是时候采取\n最后行动了。", "来吧。",
					"了结我。"
				}, defaultChatSize, "snd_txtflw", defaultChatPos, canSkip: true, 0);
			}
		}
		else if (inFinale)
		{
			if (spareAttemptsFinale > 0)
			{
				Chat(new string[1] { "..." }, defaultChatSize, "snd_txtflw", defaultChatPos, canSkip: true, 0);
			}
			else
			{
				Chat(new string[1] { "Come on,^10 finish me \noff." }, defaultChatSize, "snd_txtflw", defaultChatPos, canSkip: true, 0);
			}
		}
		else if (spareAttempts > spareAttemptsSpoken)
		{
			check = false;
			doneChatting = false;
			string[] text = (new string[3][]
			{
				new string[4] { "你是在饶恕我？", "哈哈哈哈！！！\n差不多得了！", "这个世界的原则就是\n不是杀人就是被杀！", "我决不接受你的仁慈！" },
				new string[3] { "你真的以为我会就\n这么放你走吗？", "我和她可不一样！", "你要是觉得我会放了你\n那你就蠢的没边了。" },
				new string[3] { "你在开玩笑吗？\n你是脑残吗？", "我绝不接受你的仁慈！", "闭嘴，死！" }
			})[spareAttemptsSpoken];
			spareAttemptsSpoken++;
			Chat(text, defaultChatSize, "snd_txtflw2", defaultChatPos, canSkip: true, 0);
		}
		else if (check)
		{
			doneChatting = false;
			Chat(new string[1] { "搞得像我会允许你们\n看我的状态一样！" }, defaultChatSize, "snd_txtflw2", defaultChatPos, canSkip: true, 0);
		}
	}

	public override void AttemptedSpare()
	{
		if (spareAttempts < 3 && spareAttempts == spareAttemptsSpoken)
		{
			spareAttempts++;
		}
	}

	public override string GetRandomFlavorText()
	{
		if (!initialFlavor)
		{
			initialFlavor = true;
			return "* FLOWEY进攻了！";
		}
		if (inFinale)
		{
			return "* ...";
		}
		return base.GetRandomFlavorText();
	}

	public override void Spare(bool sleepMist = false)
	{
		if (inFinale)
		{
			spareAttemptsFinale++;
		}
	}

	public override bool CanSpare()
	{
		return inFinale;
	}

	public override int GetNextAttack()
	{
		if (finaleKilled)
		{
			return 30;
		}
		if (spareAttemptsSpokenFinale == 10)
		{
			return 31;
		}
		if (hp <= 0)
		{
			return -1;
		}
		if (curAttack != orderedAttacks.Length - 1)
		{
			curAttack++;
			return orderedAttacks[curAttack];
		}
		return base.GetNextAttack();
	}

	public void SetHeadOffset(Vector3 headOffset)
	{
		headOffsetEnd = headOffset;
	}

	public void EnableDodge()
	{
		frames = 0;
		dodge = true;
	}
}

