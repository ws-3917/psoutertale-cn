using System;
using UnityEngine;

public class TileMazeStartCutscene : CutsceneBase
{
	private InteractPapyrusTextbox papyrus;

	private Animator sans;

	private TileMaze tileMaze;

	private Transform susieSign;

	private Transform noelleSign;

	private int randomizeFrames = 25;

	private float pitchFactor = 30f;

	private float activation = 25f;

	private int finisher;

	private int preset;

	private bool depressed;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			frames++;
			if (!MoveTo(susie, new Vector3(-4.56f, 1.4f), 4f))
			{
				SetMoveAnim(susie, isMoving: false);
			}
			if (!MoveTo(noelle, new Vector3(-5.85f, 1.41f), 4f))
			{
				SetMoveAnim(noelle, isMoving: false);
			}
			if (frames == 30)
			{
				papyrus.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
				StartText(new string[45]
				{
					"啊，^05你们仨来了！", "就好像我们刚才\n没有见过一样！", "* 所以说。^05\n* 这到底是什么情况？", "这么着急吗，^05嗯？", "嗯，^05这个谜题很华丽...", "呃，^05有点暴力，^05但\n仍然很优雅……", "由杰出的ALPHYS博士贡献！", "* (... 漂亮。)", "你看到这些地砖了吗？！？", "我...^05正在测试\n此版本的新功能...",
					"我很惊讶我没有\n把自己绕在里面，", "因为这里可是新添加了\n力场陷阱！", "但正如你所见，^05\n它们的颜色各有不同！", "每种颜色都有\n不同的功能！", "红色地砖无法穿过！", "你不能在上面穿行！", "黄色地砖是带电的！", "他们会放电！", "虽然不像那个球那样严重，\n^05但仍然会很痛！", "你要是死了那可就尴尬了！",
					"说到死亡...", "之前的绿色地砖在致命陷阱中\n没有发挥什么作用...", "所以这新款的绿色地砖\n将会产生弹幕攻击！", "我亲自为他们提供了骨头，^05\n所以要小心！", "橙色地砖\n闻起来像橙子。", "它们会让你\n闻起来很美味！", "蓝色地砖是水地砖。", "你可以游过去，^05但是...", "如果你闻起来像橙子！", "食人鱼会咬你。",
					"这可能不会造成伤害，^05\n但你也别想过去。", "另外，^05如果蓝色地砖旁边，", "有一个黄色地砖的话，\n水也会电到你！", "紫色地砖很滑！", "你会滑到下一块地砖！", "然而，^05\n这滑溜溜的肥皂...", "还是柠檬味的！！", "食人鱼不喜欢这些！", "紫色和蓝色是可以的！", "粉色地砖什么也不会发生。",
					"你可以直接踩上去。", "最后，^05白色地砖。", "那就是终点！", "踩上去后谜题就解决了！", "怎么样！？\n明白了吗？？？"
				}, new string[47]
				{
					"snd_txtpap", "snd_txtpap", "snd_txtsus", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtsus", "snd_txtpap", "snd_txtpap",
					"snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap",
					"snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap",
					"snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap",
					"snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap"
				}, new int[1], new string[45]
				{
					"ufpap_neutral", "ufpap_laugh", "su_annoyed", "ufpap_laugh", "ufpap_neutral", "ufpap_side", "ufpap_neutral", "su_inquisitive", "ufpap_neutral", "ufpap_side",
					"ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_laugh",
					"ufpap_side", "ufpap_side", "ufpap_evil", "ufpap_laugh", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral",
					"ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral",
					"ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral", "ufpap_neutral"
				});
				papyrus.SetTalkable(txt);
				state = 1;
				frames = 0;
			}
		}
		else if (state == 1)
		{
			if ((bool)txt)
			{
				if (AtLine(30))
				{
					ChangeDirection(kris, Vector2.up);
					ChangeDirection(susie, Vector2.down);
				}
				else if (AtLine(35))
				{
					ChangeDirection(kris, Vector2.right);
					ChangeDirection(susie, Vector2.right);
				}
				return;
			}
			frames++;
			if (frames == 60)
			{
				StartText(new string[4] { "* 我，^05呃...", "哦，^05如果你没明白的话，^05\nKRIS一定明白了！", "至于你们俩...", "你们可以随意帮助他\n举牌子！" }, new string[4] { "snd_txtnoe", "snd_txtpap", "snd_txtpap", "snd_txtpap" }, new int[1], new string[4] { "no_shocked", "ufpap_neutral", "ufpap_side", "ufpap_neutral" });
				papyrus.SetTalkable(txt);
				state = 2;
				frames = 0;
			}
		}
		else if (state == 2 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				PlaySFX("sounds/snd_heavyswing");
				SetSprite(papyrus, "overworld/npcs/underfell/spr_ufpap_orb_throw_shoe");
			}
			float t = (float)frames / 30f;
			float t2 = (float)frames / 40f;
			susieSign.position = Vector3.Lerp(new Vector3(3.83f, 2.03f), new Vector3(-4.54f, 2.37f), t) + new Vector3(0f, Mathf.Sin(Mathf.Lerp(0f, (float)Math.PI, t)));
			noelleSign.position = Vector3.Lerp(new Vector3(3.83f, 2.03f), new Vector3(-5.86f, 2.37f), t2) + new Vector3(0f, Mathf.Sin(Mathf.Lerp(0f, (float)Math.PI, t2)));
			if (frames == 30)
			{
				susieSign.GetComponent<SpriteRenderer>().enabled = false;
				SetSprite(susie, "spr_su_lemon_sign_catch");
				PlaySFX("sounds/snd_noise");
			}
			else if (frames == 40)
			{
				noelleSign.GetComponent<SpriteRenderer>().enabled = false;
				SetSprite(noelle, "spr_no_orange_sign_catch");
				PlaySFX("sounds/snd_noise");
			}
			if (frames == 70)
			{
				papyrus.GetComponent<Animator>().enabled = true;
				susie.EnableAnimator();
				StartText(new string[21]
				{
					"* 我特么要这东西做什么？",
					"你们可以记录\nKRIS的气味！",
					"如果KRIS踩到橙色地砖，\n^05就举起橙子！",
					"如果KRIS踩到紫色地砖，\n^05就举起柠檬！",
					"然而，^05KRIS每次只能染上\n一种气味。",
					"所以你们不能同时举牌！",
					"* 我...^05懂了。",
					"* 等会，^05我没听懂，^05再说一遍？",
					"* Kris在紫色地砖闻起来像 \n  柠檬，^05然后呢？",
					"好的...^05\n我会重复一遍...",
					"*\t别浪费时间了。",
					"啊，^05他们记没记住啊？",
					"那么我就不浪费\n更多时间解释了！",
					depressed ? "* （那么我想我只需要\n  担心紫色的。）" : "* 干！！！",
					"哦，^05其实...^05\n还有最后一件事！",
					"这个谜题...",
					"是完全随机的！！！！！！",
					"当我拉动这个开关时，^05\n就会自动生成一个谜题...",
					"我也不知道会变成什么样！",
					"我也不知道怎么解决！",
					"捏嘿嘿！^05准备...！"
				}, new string[21]
				{
					"snd_txtsus", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtpap",
					"snd_txtsans", "snd_txtpap", "snd_txtpap", "snd_txtsus", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap",
					"snd_txtpap"
				}, new int[1], new string[21]
				{
					"su_annoyed",
					"ufpap_neutral",
					"ufpap_neutral",
					"ufpap_neutral",
					"ufpap_neutral",
					"ufpap_neutral",
					"no_confused",
					"su_inquisitive",
					"su_neutral",
					"ufpap_side",
					"ufsans_empty",
					"ufpap_side",
					"ufpap_evil",
					depressed ? "su_smirk_sweat" : "su_angry",
					"ufpap_evil",
					"ufpap_neutral",
					"ufpap_laugh",
					"ufpap_neutral",
					"ufpap_neutral",
					"ufpap_neutral",
					"ufpap_evil"
				});
				papyrus.SetTalkable(txt);
				state = 3;
				frames = 0;
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (AtLine(7))
				{
					noelle.EnableAnimator();
				}
				else if (AtLine(8))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(9))
				{
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(11))
				{
					ChangeDirection(sans, Vector2.up);
				}
				else if (AtLine(12))
				{
					ChangeDirection(papyrus, Vector2.down);
				}
				else if (AtLine(13))
				{
					ChangeDirection(papyrus, Vector2.left);
					ChangeDirection(sans, Vector2.left);
				}
				else if (AtLine(14) && !depressed)
				{
					SetSprite(susie, "spr_su_wtf");
				}
				else if (AtLine(15))
				{
					susie.EnableAnimator();
				}
				else if (AtLine(17))
				{
					SetSprite(kris, "spr_kr_surprise");
					SetSprite(noelle, "spr_no_surprise");
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				SetMoveAnim(papyrus, isMoving: true);
				ChangeDirection(papyrus, Vector2.up);
				kris.EnableAnimator();
				susie.EnableAnimator();
				noelle.EnableAnimator();
				GameObject.Find("TileMazeMachine").GetComponent<AudioSource>().Play();
				UnityEngine.Object.FindObjectOfType<MusicPlayer>().SetVolume(0.3f);
			}
			else if (frames == 30)
			{
				SetMoveAnim(papyrus, isMoving: false);
				ChangeDirection(papyrus, Vector2.left);
			}
			randomizeFrames++;
			if (!((float)randomizeFrames >= activation))
			{
				return;
			}
			randomizeFrames = 0;
			pitchFactor = pitchFactor / 1.02f - 1f;
			GameObject.Find("TileMazeMachine").GetComponent<AudioSource>().pitch = 3f / (pitchFactor / 20f + 2.5f);
			if (activation > 3f)
			{
				activation /= 1.1f;
			}
			else
			{
				finisher++;
				activation = ((finisher > 30) ? 1 : 2);
			}
			if (finisher == 120)
			{
				GameObject.Find("TileMazeMachine").GetComponent<AudioSource>().Stop();
				if ((int)gm.GetPersistentFlag(3) == 0)
				{
					preset = UnityEngine.Random.Range(0, 3) + 1;
				}
				else
				{
					preset = (int)gm.GetPersistentFlag(3);
				}
				if (UTInput.GetButton("Z"))
				{
					preset = 1;
				}
				else if (UTInput.GetButton("X"))
				{
					preset = 2;
				}
				else if (UTInput.GetButton("C"))
				{
					preset = 3;
				}
				gm.SetPersistentFlag(3, preset);
				gm.SetFlag(237, preset);
				tileMaze.CreateMaze(new int[6][]
				{
					new int[8] { 2, 2, 2, 2, 2, 2, 2, 2 },
					new int[8] { 2, 2, 2, 2, 2, 2, 2, 2 },
					new int[8] { 0, 0, 0, 0, 0, 0, 0, 7 },
					new int[8] { 0, 0, 0, 0, 0, 0, 0, 7 },
					new int[8] { 2, 2, 2, 2, 2, 2, 2, 2 },
					new int[8] { 2, 2, 2, 2, 2, 2, 2, 2 }
				});
				gm.StopMusic();
				frames = 0;
				state = 4;
			}
			else
			{
				tileMaze.GenerateRandomMaze();
			}
		}
		else if (state == 4)
		{
			frames++;
			if (frames == 45)
			{
				if (!depressed)
				{
					PlayAnimation(noelle, "Laugh");
					PlayAnimation(susie, "Laugh");
					PlaySFX("sounds/snd_suslaugh");
				}
				else
				{
					frames = 75;
				}
			}
			if (frames == 75)
			{
				SetSprite(papyrus, "overworld/npcs/underfell/spr_ufpap_left_mad_0");
				StartText(new string[4]
				{
					"怎么？！？！",
					depressed ? "* Huh,^05 convenient." : "* 哼，^05挺简单呐！",
					depressed ? "* Guess we'll just get\n  this done and over\n  with." : "* 办得到吗，^05Kris？",
					"哦不不不不不！！！！！\n这次不算！"
				}, new string[4] { "snd_txtpap", "snd_txtsus", "snd_txtsus", "snd_txtpap" }, new int[1], new string[4]
				{
					"ufpap_mad",
					depressed ? "su_smile_sweat" : "su_confident",
					depressed ? "su_confident" : "su_smile",
					"ufpap_mad"
				});
				state = 5;
				frames = 0;
			}
		}
		else if (state == 5)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					if (!depressed)
					{
						noelle.UseHappySprites();
					}
					susie.UseHappySprites();
					PlayAnimation(noelle, "idle");
					if (!depressed)
					{
						SetSprite(susie, "spr_su_shrug", flipX: true);
					}
				}
				else if (AtLine(3) && !depressed)
				{
					susie.EnableAnimator();
					susie.GetComponent<SpriteRenderer>().flipX = false;
					PlayAnimation(susie, "idle");
					ChangeDirection(susie, Vector2.down);
					ChangeDirection(noelle, Vector2.down);
					ChangeDirection(kris, Vector2.up);
				}
				else if (AtLine(4))
				{
					PlayAnimation(papyrus, "Pissed");
					ChangeDirection(kris, Vector2.right);
					ChangeDirection(susie, Vector2.right);
					ChangeDirection(noelle, Vector2.right);
					susie.UseUnhappySprites();
					noelle.UseUnhappySprites();
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				PlayAnimation(papyrus, "walk");
				ChangeDirection(papyrus, Vector2.up);
				SetMoveAnim(papyrus, isMoving: true, 2f);
			}
			if (frames == 5 || frames == 10)
			{
				PlaySFX("sounds/snd_item");
			}
			if (frames == 20 || frames == 30 || frames == 40)
			{
				PlaySFX("sounds/snd_noise");
			}
			if (frames == 40)
			{
				gm.PlayGlobalSFX("sounds/snd_bell");
				tileMaze.CreateMaze(preset);
				SetSprite(kris, "spr_kr_surprise");
				SetSprite(susie, "spr_su_surprise_right");
				SetSprite(noelle, "spr_no_surprise");
				SetMoveAnim(papyrus, isMoving: false);
			}
			float num = 0f;
			if (frames >= 20 && frames <= 23)
			{
				int num2 = ((frames % 2 == 0) ? 1 : (-1));
				num = (float)(23 - frames) * (float)num2 / 24f;
			}
			if (frames >= 30 && frames <= 33)
			{
				int num3 = ((frames % 2 == 0) ? 1 : (-1));
				num = (float)(33 - frames) * (float)num3 / 24f;
			}
			if (frames >= 40 && frames <= 43)
			{
				int num4 = ((frames % 2 == 0) ? 1 : (-1));
				num = (float)(43 - frames) * (float)num4 / 24f;
			}
			GameObject.Find("TileMazeMachine").transform.position = new Vector3(3.9f + num, 1.81f);
			if (frames == 70)
			{
				ChangeDirection(papyrus, Vector2.left);
				if (depressed)
				{
					StartText(new string[4] { "来吧！！！", "花越多时间越好，^05 KRIS！", "因为你可能还没靠近\n就丧命了！", "* Umm...^10 good luck,^05 Kris." }, new string[4] { "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtnoe" }, new int[1], new string[4] { "ufpap_neutral", "ufpap_laugh", "ufpap_evil", "no_weird" });
				}
				else
				{
					StartText(new string[7] { "来吧！！！", "花越多时间越好，^05 KRIS！", "因为你可能还没靠近\n就丧命了！", "* Kris，^05不要着急...", "* Kris，^05别问我，我也不会。", "* 我都不知道这死规则\n  怎么用。", "* 祝好运，^05Kris。" }, new string[7] { "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtnoe" }, new int[1], new string[7] { "ufpap_neutral", "ufpap_laugh", "ufpap_evil", "no_shocked", "su_annoyed", "su_smirk_sweat", "no_weird" });
				}
				papyrus.SetTalkable(txt);
				state = 6;
				frames = 0;
			}
		}
		else
		{
			if (state != 6)
			{
				return;
			}
			if ((bool)txt)
			{
				if (AtLine(4))
				{
					kris.EnableAnimator();
					susie.EnableAnimator();
					noelle.EnableAnimator();
					ChangeDirection(susie, Vector2.down);
					ChangeDirection(noelle, Vector2.down);
					ChangeDirection(kris, Vector2.up);
				}
				return;
			}
			ChangeDirection(kris, Vector2.down);
			RestorePlayerControl();
			gm.PlayMusic("music/mus_forest");
			GameObject.Find("SusieNoelleDialogue").transform.position = Vector3.zero;
			UnityEngine.Object.Destroy(GameObject.Find("NoPuncCard"));
			if (Util.GameManager().GetFlagInt(211) == 1)
			{
				GameObject.Find("NoelleD").GetComponent<InteractTextBox>().ModifyContents(new string[8] { "* Kris,^05 I think I\n  might remember the\n  rules!", "* No you don't.", "* Huh...?^10\n* But I--", "* You don't remember the\n  rules,^05 Noelle.", "* ...", "* Well,^05 I...^10 guess\n  I don't, faha.", "THAT'S THE SPIRIT!!!", "WHY DON'T YOU PUT \nTHAT NOGGIN TO \nGOOD USE,^05 KRIS?" }, new string[8] { "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtpap", "snd_txtpap" }, new int[1], new string[8] { "no_confused", "su_side", "no_confused_side", "su_annoyed", "no_thinking", "no_weird", "ufpap_neutral", "ufpap_laugh" });
			}
			if (depressed)
			{
				GameObject.Find("SusieD").GetComponent<InteractTextBox>().ModifyContents(new string[4] { "* ...", "* 额...", "* Kinda at a loss\n  for words right now,^05\n  not gonna lie.", "* Good luck,^05 I guess." }, new string[1] { "snd_txtsus" }, new int[1], new string[4] { "su_neutral", "su_side_sweat", "su_dejected", "su_neutral" });
				GameObject.Find("SusieD").GetComponent<InteractTextBox>().DisableSecondaryLines();
			}
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetCheckpoint();
		papyrus = UnityEngine.Object.FindObjectOfType<InteractPapyrusTextbox>();
		sans = GameObject.Find("Sans").GetComponent<Animator>();
		susieSign = GameObject.Find("SignToSusie").transform;
		noelleSign = GameObject.Find("SignToNoelle").transform;
		GameObject.Find("LoadingZone").GetComponent<LoadingZone>().SetForceActivationTrigger(forceActivationTrigger: true);
		tileMaze = UnityEngine.Object.FindObjectOfType<TileMaze>();
		papyrus.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = true;
		RevokePlayerControl();
		ChangeDirection(kris, Vector2.right);
		ChangeDirection(susie, Vector2.right);
		ChangeDirection(noelle, Vector2.right);
		SetMoveAnim(kris, isMoving: false);
		SetMoveAnim(susie, isMoving: true);
		SetMoveAnim(noelle, isMoving: true);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		gm.PlayMusic("music/mus_papyrus", 0.85f);
		depressed = Util.GameManager().GetFlagInt(87) >= 7;
		gm.LockMenu();
		gm.SetPartyMembers(susie: false, noelle: false);
	}
}

