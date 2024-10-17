using System.Collections.Generic;
using UnityEngine;

public class ElecMazeStartCutscene : CutsceneBase
{
	private bool oblit;

	private bool leave;

	private bool niceNoelleVer;

	private Animator papyrus;

	private Animator sans;

	private Transform orb;

	private int curPapPos;

	private bool papFeet;

	private Vector3[] pos = new Vector3[11]
	{
		new Vector3(3.914f, 0.041f),
		new Vector3(3.914f, -1.2f),
		new Vector3(0.96f, -1.2f),
		new Vector3(0.96f, 0.37f),
		new Vector3(1.97f, 0.37f),
		new Vector3(1.97f, 2.43f),
		new Vector3(-1.77f, 2.43f),
		new Vector3(-1.77f, 1.26f),
		new Vector3(-0.54f, 1.26f),
		new Vector3(-0.54f, -0.07f),
		new Vector3(-2.25f, -0.07f)
	};

	private Vector2[] dir = new Vector2[11]
	{
		Vector2.down,
		Vector2.left,
		Vector2.up,
		Vector2.right,
		Vector2.up,
		Vector2.left,
		Vector2.down,
		Vector2.right,
		Vector2.down,
		Vector2.left,
		Vector2.left
	};

	public void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			if ((bool)txt)
			{
				if (AtLine(5))
				{
					SetSprite(susie, "spr_su_wtf");
				}
			}
			else
			{
				if ((bool)txt)
				{
					return;
				}
				frames++;
				if (frames == 1)
				{
					susie.EnableAnimator();
					ChangeDirection(sans, Vector2.left);
					ChangeDirection(papyrus, Vector2.left);
					papyrus.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = true;
					if (!leave)
					{
						SetMoveAnim(susie, isMoving: true);
						SetMoveAnim(noelle, isMoving: true);
						ChangeDirection(susie, -(susie.transform.position - new Vector3(-5.11f, 0.48f)));
						ChangeDirection(noelle, -(noelle.transform.position - new Vector3(-5.64f, -0.62f)));
					}
				}
				if (!leave)
				{
					if (!MoveTo(susie, new Vector3(-5.11f, 0.48f), 4f))
					{
						SetMoveAnim(susie, isMoving: false);
						ChangeDirection(susie, Vector2.right);
					}
					if (!MoveTo(noelle, new Vector3(-5.64f, -0.62f), 4f))
					{
						SetMoveAnim(noelle, isMoving: false);
						ChangeDirection(noelle, Vector2.right);
					}
				}
				if (frames == 30)
				{
					papyrus.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
				}
				if (frames == 45)
				{
					StartText(new string[3] { "哦吼！！！^10\n人类来了！！！", "终于，^10你们几个都陷入\n了我的伟大的陷阱！！！！！", "如你所见，这是一个隐形的..." }, new string[3] { "snd_txtpap", "snd_txtpap", "snd_txtpap" }, new int[1], new string[3] { "ufpap_neutral", "ufpap_evil", "ufpap_laugh" });
					state = 1;
					frames = 0;
				}
			}
		}
		else if (state == 1)
		{
			if ((bool)txt && AtLineRepeat(3))
			{
				txt.Disable();
				txt.MakeUnskippable();
				SetMoveAnim(sans, isMoving: true, 0.25f);
				if (!MoveTo(sans, new Vector3(3.1f, 1.231f), 2f / 3f))
				{
					Object.Destroy(txt);
					PlayAnimation(papyrus, "Electrocute");
					PlaySFX("sounds/snd_shock");
					SetSprite(susie, "spr_su_surprise_right");
					if (oblit)
					{
						noelle.EnableAnimator();
					}
					else
					{
						SetSprite(noelle, "spr_no_surprise");
					}
					SetMoveAnim(sans, isMoving: false);
				}
			}
			else
			{
				if ((bool)txt)
				{
					return;
				}
				frames++;
				if (frames < 30)
				{
					papyrus.transform.position = new Vector3(3.914f, 0.041f) + new Vector3(Random.Range(-3, 4), Random.Range(-3, 4)) / 48f;
				}
				else if (frames == 30)
				{
					papyrus.transform.position = new Vector3(3.914f, 0.041f);
					PlayAnimation(papyrus, "CoolOff");
				}
				if (frames == 60)
				{
					susie.EnableAnimator();
					noelle.EnableAnimator();
				}
				if (frames == 90)
				{
					StartText(new string[1] { "电击...^15\n迷宫..." }, new string[1] { "snd_txtpap" }, new int[1], new string[1] { "ufpap_electrocuted" });
				}
				if (frames == 91 && oblit)
				{
					frames = 150;
				}
				if (frames == 120)
				{
					PlaySFX("sounds/snd_suslaugh");
					PlayAnimation(susie, "Laugh");
					if (!oblit)
					{
						PlayAnimation(noelle, "Laugh");
					}
				}
				if (frames == 150)
				{
					StartText(new string[7]
					{
						oblit ? "* 漂亮。" : "* 哈哈哈哈哈！！！",
						oblit ? "* 恶有恶报，^05蠢蛋。" : "* 恶有恶报，^05蠢蛋！！！",
						"哦，^05那你可就错了！！",
						"我在上次见面时\n救了你的命，\n你躲过了一劫...",
						"而你躲得过初一\n躲不过十五！！！",
						"这个球会产生强烈\n的电击！",
						"就你们那小身板可\n挺不住这一下子！！"
					}, new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap" }, new int[1], new string[7]
					{
						oblit ? "su_smirk" : "su_happy",
						oblit ? "su_teeth_eyes" : "su_angry",
						"ufpap_laugh",
						"ufpap_side",
						"ufpap_evil",
						"ufpap_neutral",
						"ufpap_laugh"
					});
					state = 2;
					frames = 0;
				}
			}
		}
		else if (state == 2)
		{
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					if (!oblit)
					{
						PlayAnimation(noelle, "idle");
						noelle.UseHappySprites();
					}
					PlayAnimation(papyrus, "idle");
				}
				else if (AtLine(4))
				{
					PlayAnimation(susie, "idle");
					if (!oblit)
					{
						susie.UseHappySprites();
					}
					noelle.UseUnhappySprites();
				}
				else if (AtLine(6))
				{
					papyrus.enabled = false;
					papyrus.GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/underfell/spr_ufpap_orb_shoe");
				}
				else if (AtLineRepeat(7))
				{
					txt.Disable();
					txt.MakeUnskippable();
					SetMoveAnim(sans, isMoving: true, 0.25f);
					if (!MoveTo(sans, new Vector3(2.4f, 1.231f), 0.5f))
					{
						Object.Destroy(txt);
						PlayAnimation(papyrus, "Electrocute");
						PlaySFX("sounds/snd_shock");
						SetMoveAnim(sans, isMoving: false);
					}
				}
				return;
			}
			frames++;
			if (frames < 30)
			{
				papyrus.transform.position = new Vector3(3.914f, 0.041f) + new Vector3(Random.Range(-3, 4), Random.Range(-3, 4)) / 48f;
			}
			else if (frames == 30)
			{
				papyrus.transform.position = new Vector3(3.914f, 0.041f);
				PlayAnimation(papyrus, "CoolOff");
			}
			if (frames == 20 && !oblit)
			{
				gm.PlayGlobalSFX("sounds/snd_suslaugh");
				PlayAnimation(susie, "Laugh");
			}
			if (frames == 45)
			{
				StartText(new string[7]
				{
					oblit ? "* 哇哦，^05多么令人震惊。" : "* 我天了，^05太好笑了！",
					"* 你真该好好管管你旁边\n  那个微笑的垃圾袋，^05\n  蠢货。",
					"你为什么...！！！",
					"*\t其实，^05老大...",
					"*\t我想你可能得把这球\n\t给那个人类。你要是想\n\t那么干的话，你懂的...",
					"*\t宰了他们。",
					"哦，^05好。"
				}, new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtpap", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtpap" }, new int[1], new string[7]
				{
					oblit ? "su_annoyed" : "su_happy",
					oblit ? "su_smirk_sweat" : "su_smile",
					"ufpap_mad",
					"ufsans_closed",
					"ufsans_neutral",
					"ufsans_empty",
					"ufpap_neutral"
				});
				state = 3;
				frames = 0;
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (curPapPos == 0)
				{
					if (AtLine(2))
					{
						papyrus.enabled = false;
						papyrus.GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/underfell/spr_ufpap_cooling_mad");
					}
					else if (AtLine(3))
					{
						PlayAnimation(papyrus, "Pissed");
					}
					else if (txt.GetCurrentStringNum() >= 4)
					{
						if (!MoveTo(sans, new Vector3(3.853f, 1.231f), 4f))
						{
							SetMoveAnim(sans, isMoving: false);
							ChangeDirection(sans, Vector2.down);
						}
						else
						{
							SetMoveAnim(sans, isMoving: true);
							ChangeDirection(sans, Vector2.right);
						}
						if (AtLine(6))
						{
							PlayAnimation(susie, "idle");
							susie.UseUnhappySprites();
						}
						else if (AtLine(7))
						{
							PlayAnimation(papyrus, "idle");
							ChangeDirection(papyrus, Vector2.up);
						}
					}
				}
				else if (AtLine(2))
				{
					PlayAnimation(papyrus, "Pissed");
				}
				else if (AtLine(3))
				{
					PlayAnimation(papyrus, "idle");
					ChangeDirection(papyrus, Vector2.right);
				}
				return;
			}
			if (sans.transform.position != new Vector3(3.853f, 1.231f))
			{
				sans.transform.position = new Vector3(3.853f, 1.231f);
				SetMoveAnim(sans, isMoving: false);
			}
			ChangeDirection(sans, Vector2.left);
			if (curPapPos > 0 && curPapPos < 4)
			{
				frames++;
				if (frames % 4 == 0)
				{
					Object.Instantiate(GameObject.Find("Steps"), papyrus.transform.position + new Vector3(-1f / 48f, -11f / 12f), Quaternion.identity);
				}
			}
			if (curPapPos == 4 && !papFeet)
			{
				PlaySFX("sounds/snd_noise");
				GameObject.Find("Boots").transform.position = pos[curPapPos] + new Vector3(-1f / 48f, -0.812f);
				papFeet = true;
			}
			if (MoveTo(papyrus, pos[curPapPos + 1], 4f))
			{
				SetMoveAnim(papyrus, isMoving: true);
				ChangeDirection(papyrus, dir[curPapPos]);
				return;
			}
			curPapPos++;
			ChangeDirection(papyrus, dir[curPapPos]);
			if (curPapPos == 4)
			{
				SetMoveAnim(papyrus, isMoving: false);
				StartText(new string[4] { "*\t老大，^05把靴子脱掉。", "WHAT?!?!?!?!^05\nYOU WANT <color=#FFFF00FF>ANOTHER \nREDESIGN</color>!?!?!?!?!?", "哦，^05等下，^05尾迹...\n^10干得好。", "*（这俩傻子到底在\n  说什么？？？）" }, new string[4] { "snd_txtsans", "snd_txtpap", "snd_txtpap", "snd_txtsus" }, new int[1], new string[4] { "ufsans_neutral", "ufpap_mad", "ufpap_side", "su_smirk_sweat" });
			}
			else if (curPapPos == pos.Length - 1)
			{
				papyrus.enabled = false;
				papyrus.GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/underfell/spr_ufpap_orb");
				StartText(new string[1] { "麻烦拿着这个！" }, new string[1] { "snd_txtpap" }, new int[1], new string[1] { "ufpap_neutral" });
				state = 4;
				frames = 0;
			}
		}
		else if (state == 4 && !txt)
		{
			frames++;
			if (frames < 30)
			{
				if (frames == 1)
				{
					papyrus.GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/underfell/spr_ufpap_orb_throw");
				}
				orb.transform.position = new Vector3(-2.729f, Mathf.Lerp(0.743f, 5.149f, (float)frames / 27f));
				return;
			}
			if (frames == 30)
			{
				papyrus.enabled = true;
				orb.transform.parent = kris.transform;
			}
			orb.transform.localPosition = new Vector3(0f, Mathf.Lerp(10.854f, 0.854f, (float)(frames - 30) / 60f));
			if (frames == 90)
			{
				SetSprite(susie, "spr_su_surprise_right");
				if (!oblit)
				{
					SetSprite(noelle, "spr_no_surprise");
				}
			}
			if (curPapPos > 0)
			{
				if (MoveTo(papyrus, pos[curPapPos - 1], 10f))
				{
					SetMoveAnim(papyrus, isMoving: true);
					ChangeDirection(papyrus, -dir[curPapPos - 1]);
					return;
				}
				curPapPos--;
				if (curPapPos == 4)
				{
					Object.Destroy(GameObject.Find("Boots"));
					PlaySFX("sounds/snd_noise");
					papFeet = false;
				}
				else if (curPapPos == 0)
				{
					ChangeDirection(papyrus, Vector2.left);
					SetMoveAnim(papyrus, isMoving: false);
				}
			}
			else
			{
				if (frames < 60)
				{
					return;
				}
				state = 5;
				List<string> list = new List<string> { "* 呃呃呃呃呃呃呃", "* 好，^05那要是我们就...\n  ^05把这球扔掉会怎样？", "* 然后就直接从迷宫中间\n  穿过去？", "呃，^05违反规定有惩罚！！！", "惩罚就是，^05我会允许\nSANS做他想做的事。", "你绝对不想让我那么\n干的！！！" };
				List<string> list2 = new List<string> { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtpap", "snd_txtpap", "snd_txtpap" };
				List<string> list3 = new List<string> { "su_shocked", "su_side", "su_smile", "ufpap_mad", "ufpap_side", "ufpap_evil" };
				if (oblit && !niceNoelleVer)
				{
					list.AddRange(new string[4] { "* ...^05当你以那种口气说的时候...", "* 为什么我们不干脆——", "* 呃，^05为什么不直接去\n  走迷宫，Kris！？", "* 我不到啊，^05也许该根据那\n  Papyrus仁兄的指示走这个迷宫。" });
					list2.AddRange(new string[4] { "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus" });
					list3.AddRange(new string[4] { "no_depressedx", "no_depressedx_smile", "su_excited", "su_smirk_sweat" });
				}
				else
				{
					list.AddRange(new string[3] { "* 呵呵...^05成...", "* 呃...^10还是算了吧。", "* ...^05你觉得你能解决吗，\n  ^05Kris？" });
					list2.AddRange(new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" });
					list3.AddRange(new string[3] { "su_confident", "su_dejected", "su_smile_sweat" });
					if (niceNoelleVer)
					{
						list.AddRange(new string[1] { "* ...你还记得他怎么走的吗，^05\n  Kris...?" });
						list2.AddRange(new string[1] { "snd_txtnoe" });
						list3.AddRange(new string[1] { "no_depressed_side" });
					}
					else
					{
						list.AddRange(new string[2] { "* Kris，^05你还记得他刚刚的\n  路线吗？", "* 你要是那么走回去，\n  ^05你应该就不会受伤！" });
						list2.AddRange(new string[2] { "snd_txtnoe", "snd_txtnoe" });
						list3.AddRange(new string[2] { "no_thinking", "no_happy" });
					}
				}
				list.AddRange(new string[2] { "嘿，^05别再提示了！！！", "人类，^05按你的想法走..." });
				list2.AddRange(new string[2] { "snd_txtpap", "snd_txtpap" });
				list3.AddRange(new string[2] { "ufpap_mad", "ufpap_evil" });
				StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray());
			}
		}
		else
		{
			if (state != 5)
			{
				return;
			}
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					susie.EnableAnimator();
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(3))
				{
					noelle.EnableAnimator();
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(4))
				{
					papyrus.enabled = false;
					papyrus.GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/underfell/spr_ufpap_left_mad_0");
				}
				if (!oblit || niceNoelleVer)
				{
					if (AtLine(7))
					{
						SetSprite(susie, "spr_su_shrug");
					}
					else if (AtLine(8))
					{
						PlayAnimation(susie, "Embarrassed");
					}
					else if (AtLine(9))
					{
						PlayAnimation(susie, "idle");
						ChangeDirection(kris, susie.transform.position - kris.transform.position);
						ChangeDirection(susie, kris.transform.position - susie.transform.position);
						ChangeDirection(noelle, kris.transform.position - noelle.transform.position);
					}
					else if (AtLine(10))
					{
						ChangeDirection(kris, noelle.transform.position - kris.transform.position);
					}
					else if (AtLine(12))
					{
						ChangeDirection(kris, Vector2.right);
						ChangeDirection(susie, Vector2.right);
						ChangeDirection(noelle, Vector2.right);
					}
				}
				else if (AtLine(7))
				{
					ChangeDirection(noelle, Vector2.up);
					ChangeDirection(susie, noelle.transform.position - susie.transform.position);
				}
				else if (AtLine(8))
				{
					txt.ForceAdvanceCurrentLine();
					ChangeDirection(noelle, Vector2.right);
				}
				else if (AtLine(9))
				{
					SetSprite(susie, "spr_su_surprise_right");
					ChangeDirection(kris, susie.transform.position - kris.transform.position);
					ChangeDirection(noelle, kris.transform.position - noelle.transform.position);
				}
				else if (AtLine(10))
				{
					PlayAnimation(susie, "Embarrassed");
				}
				else if (AtLine(11))
				{
					PlayAnimation(susie, "idle");
					ChangeDirection(kris, Vector2.right);
					ChangeDirection(susie, Vector2.right);
					ChangeDirection(noelle, Vector2.right);
				}
				return;
			}
			bool flag = false;
			bool flag2 = false;
			if (!leave)
			{
				flag = MoveTo(susie, new Vector3(-4.25f, 0.84f), 10f);
				flag2 = MoveTo(noelle, new Vector3(-5.4f, 0.84f), 10f);
			}
			if (flag)
			{
				SetMoveAnim(susie, isMoving: true);
				ChangeDirection(susie, Vector2.right);
			}
			else
			{
				SetMoveAnim(susie, isMoving: false);
				ChangeDirection(susie, Vector2.down);
				susie.UseHappySprites();
			}
			if (flag2)
			{
				SetMoveAnim(noelle, isMoving: true);
				ChangeDirection(noelle, Vector2.up);
			}
			else
			{
				SetMoveAnim(noelle, isMoving: false);
				ChangeDirection(noelle, Vector2.down);
				if (!oblit)
				{
					susie.UseHappySprites();
				}
			}
			if (!flag && !flag2)
			{
				if (!leave)
				{
					GameObject.Find("SusieTalk").transform.position = new Vector3(-4.25f, 0.3f);
				}
				GameObject.Find("SusieTalk").GetComponent<InteractTextBox>().ModifyContents(new string[2] { "* 得了吧，^05Kris，^05给他们看看\n  你能做些什么！！！", "* 还有呃...^05别挂了。" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[1], new string[2] { "su_smile", "su_smile_sweat" });
				GameObject.Find("SusieTalk").GetComponent<InteractTextBox>().DisableSecondaryLines();
				if (!leave)
				{
					GameObject.Find("NoelleTalk").transform.position = new Vector3(-5.4f, 0.3f);
				}
				if (!oblit)
				{
					GameObject.Find("NoelleTalk").GetComponent<InteractTextBox>().ModifyContents(new string[1] { "* Kris，^05记得我说的吗..." }, new string[1] { "snd_txtnoe" }, new int[1], new string[1] { "no_happy" });
				}
				else
				{
					GameObject.Find("NoelleTalk").GetComponent<InteractTextBox>().ModifyContents(new string[1] { "* ..." }, new string[1] { "snd_txtnoe" }, new int[1], new string[1] { "no_depressedx" });
				}
				GameObject.Find("NoelleTalk").GetComponent<InteractTextBox>().DisableSecondaryLines();
				Object.FindObjectOfType<ElectricMazeHandler>().StartLook();
				kris.SetMovement(newMove: true);
				kris.SetCollision(onoff: true);
				kris.ChangeDirection(Vector2.down);
				kris.SetSelfAnimControl(setAnimControl: true);
				cam.SetFollowPlayer(follow: true);
				gm.DisableMenu();
				EndCutscene(enablePlayerMovement: false);
			}
		}
	}

	private void LateUpdate()
	{
		if (papFeet && papyrus.enabled)
		{
			Sprite sprite = Resources.Load<Sprite>("overworld/npcs/underfell/" + papyrus.GetComponent<SpriteRenderer>().sprite.name + "_bf");
			if (sprite != null)
			{
				papyrus.GetComponent<SpriteRenderer>().sprite = sprite;
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		papyrus = GameObject.Find("Papyrus").GetComponent<Animator>();
		sans = GameObject.Find("Sans").GetComponent<Animator>();
		orb = GameObject.Find("Orb").transform;
		oblit = (int)Util.GameManager().GetFlag(172) == 1;
		leave = !Util.GameManager().SusieInParty();
		niceNoelleVer = oblit && !leave && gm.GetFlagInt(184) == 1;
		gm.SetCheckpoint();
		Util.GameManager().SetPartyMembers(susie: false, noelle: false);
		Object.FindObjectOfType<ActionPartyPanels>().UpdatePanels();
		gm.PlayMusic("music/mus_papyrus", 0.85f);
		StartText(new string[5]
		{
			"你根本就搞不懂事情\n的前后顺序！！！",
			"你看见啥你就想杀啥...",
			"但你却连陷阱都\n布置不好！！！！！！",
			"*\t是啊。^10\n*\t陷阱都乱套了。",
			leave ? "* 好了，^05他们来了，^05闭嘴！！！！！" : "* 你们俩怪人搁着聊什么呢？？？"
		}, new string[5] { "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtsans", "snd_txtsus" }, new int[1], new string[5] { "ufpap_mad", "ufpap_side", "ufpap_mad", "ufsans_neutral", "su_pissed" });
		RevokePlayerControl();
		SetMoveAnim(kris, isMoving: false);
		SetMoveAnim(susie, isMoving: false);
		SetMoveAnim(noelle, isMoving: false);
		ChangeDirection(kris, Vector2.right);
		ChangeDirection(susie, Vector2.right);
		ChangeDirection(noelle, Vector2.right);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		GameObject.Find("LoadingZone").GetComponent<LoadingZone>().SetForceActivationTrigger(forceActivationTrigger: true);
	}
}

