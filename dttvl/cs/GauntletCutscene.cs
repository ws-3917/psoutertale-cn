using System;
using System.Collections.Generic;
using UnityEngine;

public class GauntletCutscene : CutsceneBase
{
	private readonly bool DEBUG;

	private Animator qc;

	private Animator sans;

	private InteractPapyrusTextbox papyrus;

	private Transform gauntlet;

	private Transform funnyCrumb;

	private bool papyrusCatchLedge;

	private float sansYVelocity = 6f;

	private float crumbYVelocity = 3f;

	private float susieYVelocity = 12f;

	private float krisYVelocity = 15f;

	private Vector3 noelleOrigPos;

	private bool fastVersion;

	private bool depressed;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			if (Mathf.Abs(kris.transform.position.x - susie.transform.position.x) > 1.25f)
			{
				SetMoveAnim(susie, isMoving: true);
				susie.transform.position += new Vector3(0.125f, 0f);
			}
			else
			{
				SetMoveAnim(susie, isMoving: false);
			}
			if (Mathf.Abs(noelle.transform.position.x - susie.transform.position.x) > 1.25f)
			{
				SetMoveAnim(noelle, isMoving: true);
				noelle.transform.position += new Vector3(0.125f, 0f);
			}
			else
			{
				SetMoveAnim(noelle, isMoving: false);
			}
			if (MoveTo(cam, new Vector3(22.87f, 0f, -10f), 6f))
			{
				return;
			}
			frames++;
			if (frames == 15)
			{
				if (!fastVersion)
				{
					StartText(new string[5] { "* 你们怎么就听不懂呢？？！", "* 你明明知道如果桥被毁了\n  会发生什么！", "我确实知道，^05但是你\n就不能换条...", "* 这算哪门子解决方案啊，^05\n  蠢货！！！", "* 我不管Sans怎么跟你说的。" }, new string[5] { "snd_text", "snd_text", "snd_txtpap", "snd_text", "snd_text" }, new int[1], new string[5] { "", "", "ufpap_worry", "", "" });
					papyrus.SetTalkable(txt);
					state = 1;
					frames = 0;
				}
				else if (frames == 15)
				{
					StartText(new string[4] { "* Of course.", "KRIS!", "THIS IS YOUR FINAL \nAND MOST DANGEROUS \nCHALLENGE!", "看好了！^05这致命的\n恐怖的挑战！" }, new string[2] { "snd_txtsus", "snd_txtpap" }, new int[1], new string[4] { "su_inquisitive", "ufpap_mad", "ufpap_mad", "ufpap_evil" });
					papyrus.SetTalkable(txt);
					state = 3;
					frames = 0;
				}
			}
		}
		else if (state == 1 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				qc.enabled = true;
				ChangeDirection(qc, Vector2.left);
				qc.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = true;
			}
			if (frames == 20)
			{
				qc.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
			}
			if (frames == 25)
			{
				StartText(new string[2] { "* 抱歉又问一次，^05\n  但你们能帮我处理一下\n  这俩玩意吗？", "* 我特么的要去拿我的战术补给！！！" }, new string[2] { "snd_text", "snd_text" }, new int[1], new string[2] { "", "" });
				state = 2;
				frames = 0;
			}
		}
		else if (state == 2)
		{
			if ((bool)txt && !AtLineRepeat(2))
			{
				return;
			}
			if (!txt || frames < 25)
			{
				frames++;
				if (frames == 1)
				{
					ChangeDirection(qc, Vector2.right);
					SetMoveAnim(qc, isMoving: true, 2f);
				}
			}
			MoveTo(qc, new Vector3(37.47f, 0.25f), 10f);
			MoveTo(papyrus, new Vector3(28.176f, -0.25f), 10f);
			LookAt(sans, qc);
			LookAt(papyrus, qc);
			if (frames == 60)
			{
				Resources.Load<AudioClip>("music/mus_gauntlet");
				if (!depressed)
				{
					ChangeDirection(susie, Vector2.up);
				}
				ChangeDirection(papyrus, Vector2.left);
				ChangeDirection(sans, Vector2.left);
				StartText(new string[5]
				{
					depressed ? "* Arright..." : "* 嗯，我们还有事要处理呢，^05\n  所以...",
					depressed ? "* Let's hurry this up." : "* 我感觉这可不是什么好事。",
					depressed ? "IMPATIENT,^05 ARE WE?" : "漂亮...",
					"那我们就别浪费时间了！",
					"看好了！^05这致命的\n恐怖的挑战！"
				}, new string[5] { "snd_txtsus", "snd_txtsus", "snd_txtpap", "snd_txtpap", "snd_txtpap" }, new int[1], new string[5]
				{
					depressed ? "su_annoyed" : "su_depressed_smile",
					depressed ? "su_annoyed" : "su_teeth",
					"ufpap_laugh",
					"ufpap_evil",
					"ufpap_evil"
				});
				state = 3;
				frames = 0;
				papyrus.SetTalkable(txt);
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (!fastVersion)
				{
					if (AtLine(2) && !depressed)
					{
						SetSprite(susie, "spr_su_shrug", flipX: true);
					}
					else if (AtLine(4))
					{
						susie.EnableAnimator();
						ChangeDirection(susie, Vector2.right);
						susie.GetComponent<SpriteRenderer>().flipX = false;
					}
				}
				return;
			}
			frames++;
			if (frames == 20)
			{
				SetSprite(kris, "spr_kr_surprise");
				SetSprite(susie, "spr_su_surprise_right");
				SetSprite(noelle, "spr_no_surprise");
			}
			float num = (float)frames / 60f;
			float num2 = (float)frames / 40f;
			if (fastVersion)
			{
				num *= 1.5f;
				num2 *= 1.5f;
			}
			gauntlet.Find("Fella").position = new Vector3(25.913f, Mathf.Lerp(8.5f, 5.751f, num));
			gauntlet.Find("Cannon").position = new Vector3(26.459f, Mathf.Lerp(-7.22f, -5.459f, num));
			gauntlet.Find("SpearTop").position = new Vector3(23.203f, Mathf.Lerp(7.4f, 5.245f, num));
			gauntlet.Find("SpearBottom").position = new Vector3(23.203f, Mathf.Lerp(-7.4f, -5.67f, num));
			gauntlet.Find("Fire").position = new Vector3(20.039f, Mathf.Lerp(-8.93f, -5.374f, num2));
			gauntlet.Find("BallChain").position = new Vector3(19.724f, Mathf.Lerp(9.06f, 6.167f, num));
			if (frames == (fastVersion ? 45 : 90))
			{
				StartText(new string[23]
				{
					"只要我一声令下，^05\n机关就会尽数启动！！！",
					"大炮开火！\n^05尖刺摆动！\n^05刀刃切割！",
					"每部分都开始剧烈\n的上下摆动！",
					"你的胜利可能性将\n十分渺茫！！！",
					"* 等下，^05其实这机关\n  还挺酷的。",
					"* S-SUSIE!!!",
					depressed ? "* Hey,^05 since this isn't\n  some stupid fight,^05 why\n  don't I just..." : "* 嘿，^05 如果他们俩\n  不愿意干，^05那么我就...",
					"* Susie，^05不行！",
					"* Papyrus，^05这根本就不公平。",
					"* 这和Sans做的事根本没有没区别。",
					"* 这并不令人费解，^05但却是\n  致命的。^05\n* 它就是致命的。",
					"所以你对致命谜题没意见？",
					"* 好吧，^05 至少我们\n  还有机会把事情做好。",
					"*\t老大，^05别听他们的。",
					"*\t这个挑战堪称完美。",
					"不不，^05我看明白了。",
					"这是一种幼稚的办法。",
					"这太过分了！",
					"我认为如果他们\n必须走钢丝的话会更好。",
					"而且他们还得躲避攻击！",
					"AT LEAST THAT IS \nA GOOD TIMING \nCHALLENGE.",
					"但这太直接了！",
					"撤退！"
				}, new string[23]
				{
					"snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe",
					"snd_txtnoe", "snd_txtpap", "snd_txtnoe", "snd_txtsans", "snd_txtsans", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap",
					"snd_txtpap", "snd_txtpap", "snd_txtpap"
				}, new int[1], new string[23]
				{
					"ufpap_evil", "ufpap_evil", "ufpap_evil", "ufpap_evil", "su_surprised", "no_shocked", "su_smile_side", "no_angry", "no_confused", "no_confused_side",
					"no_thinking", "ufpap_side", "no_weird", "ufsans_side", "ufsans_neutral", "ufpap_side", "ufpap_mad", "ufpap_mad", "ufpap_side", "ufpap_neutral",
					"ufpap_side", "ufpap_mad", "ufpap_neutral"
				});
				papyrus.SetTalkable(txt);
				state = 4;
				frames = 0;
			}
		}
		else if (state == 4)
		{
			if ((bool)txt)
			{
				if (AtLine(5))
				{
					susie.EnableAnimator();
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(6))
				{
					SetSprite(noelle, "spr_no_surprise_left", flipX: true);
				}
				else if (AtLine(7))
				{
					SetSprite(susie, "spr_su_shrug", flipX: true);
					kris.EnableAnimator();
					ChangeDirection(kris, Vector2.left);
				}
				else if (AtLine(8))
				{
					SetSprite(noelle, "pissed/spr_no_right_0_pissed");
					SetSprite(susie, "spr_su_surprise_right", flipX: true);
				}
				else if (AtLine(9))
				{
					noelle.EnableAnimator();
					susie.GetComponent<SpriteRenderer>().flipX = false;
					PlayAnimation(susie, "Embarrassed");
					ChangeDirection(kris, Vector2.right);
				}
				else if (AtLine(12))
				{
					PlayAnimation(susie, "idle");
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(14))
				{
					ChangeDirection(sans, Vector2.down);
				}
				return;
			}
			frames++;
			if (fastVersion)
			{
				if (frames == 1)
				{
					gm.StopMusic(45f);
					ChangeDirection(papyrus, Vector2.right);
				}
				else if (frames == 30)
				{
					ChangeDirection(papyrus, Vector2.left);
				}
			}
			else
			{
				if (frames == 30)
				{
					gm.StopMusic(45f);
					ChangeDirection(papyrus, Vector2.right);
				}
				if (frames == 80)
				{
					ChangeDirection(papyrus, Vector2.left);
				}
			}
			if (frames == (fastVersion ? 30 : 100))
			{
				StartText(new string[2] { "开...^05开关在哪呢...", "*\t我就知道你会退缩。" }, new string[2] { "snd_txtpap", "snd_txtsans" }, new int[1], new string[2] { "ufpap_worry", "ufsans_closed" });
				state = 5;
				frames = 0;
			}
		}
		else if (state == 5)
		{
			if ((bool)txt && AtLine(2))
			{
				ChangeDirection(papyrus, Vector2.up);
			}
			else
			{
				if ((bool)txt)
				{
					return;
				}
				if (!MoveTo(sans, new Vector3(28.027f, 0.17f), fastVersion ? 3 : 2))
				{
					frames++;
					if (frames == 1)
					{
						SetMoveAnim(sans, isMoving: false);
					}
					if (frames == 15)
					{
						StartText(new string[6] { "SANS，^05你是不是-", "*\tpapyrus...", "*\t你忘了我告诉你要\n\t珍惜的最重要的一件事。", "什么啊...？", "*\t...", "* 在这个世界，\n  不是杀人就是被杀。" }, new string[6] { "snd_txtpap", "snd_txtsans", "snd_txtsans", "snd_txtpap", "snd_txtsans", "" }, new int[6] { 0, 0, 0, 0, 0, 4 }, new string[6] { "ufpap_mad", "ufsans_side", "ufsans_closed", "ufpap_side", "ufsans_closed", "ufsans_empty" });
						state = 6;
						frames = 0;
					}
				}
				else
				{
					SetMoveAnim(sans, isMoving: true, 0.5f);
				}
			}
		}
		else if (state == 6)
		{
			if ((bool)txt && AtLine(5))
			{
				txt.GetTextUT().SetLetterSpacing(15.3825f);
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
					PlayAnimation(sans, "Kick");
				}
				if (frames == 5)
				{
					PlaySFX("sounds/snd_heavyswing");
					gm.PlayGlobalSFX("sounds/snd_damage");
					SetSprite(kris, "spr_kr_surprise");
					SetSprite(susie, "spr_su_surprise_right");
					SetSprite(noelle, "spr_no_surprise_left", flipX: true);
					SetSprite(papyrus, "overworld/npcs/underfell/spr_ufpap_kicked");
				}
				if (frames >= 5 && !papyrusCatchLedge && !MoveTo(papyrus, new Vector3(28.176f, -3.332f), 12f))
				{
					papyrusCatchLedge = true;
					gm.PlayGlobalSFX("sounds/snd_noise");
					SetSprite(papyrus, "overworld/npcs/underfell/spr_ufpap_hangon");
				}
				if (frames < 15)
				{
					return;
				}
				if (frames == 15)
				{
					PlaySFX("sounds/snd_bigcut");
					PlayAnimation(sans, "AttackLeft");
					sans.GetComponent<AudioSource>().Play();
				}
				float t = (float)(frames - 15) / 15f;
				sans.transform.position = new Vector3(Mathf.Lerp(28.027f, 20f, t), (frames < 30) ? 0.17f : 10f);
				if (sans.transform.position.x < 22.87f && frames <= 30)
				{
					cam.transform.position = new Vector3(sans.transform.position.x, 0f, -10f);
				}
				else if (frames > 30)
				{
					MoveTo(cam, new Vector3(18.5f, 0f, -10f), 8f);
				}
				if (frames == 30)
				{
					PlaySFX("sounds/snd_grab");
					PlayAnimation(kris, "HoldSans");
				}
				if (frames >= 30 && frames <= 35)
				{
					susie.transform.position -= new Vector3(0.125f, 0f);
					noelle.transform.position -= new Vector3(1f / 6f, 0f);
				}
				if (frames == 45)
				{
					List<string> list = new List<string> { "* 欸我？？？？？", "* KRIS，^05后退！！！", "* Susie，^05这个桥太窄了！", "* 你会打到Kris的！", " Damn it...", "* ...!", "* Kris，^05我有个想法！", "* 过肩摔！", "* 等等，^05Susie，^05那不就-", "* 快！！！" };
					List<string> list2 = new List<string> { "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus" };
					List<string> list3 = new List<string> { "su_shocked", "su_wtf", "no_afraid", "no_afraid", "su_dejected", "su_surprised", "su_excited", "su_angry", "no_shocked", "su_wtf" };
					if (fastVersion)
					{
						list = new List<string> { "* 欸我？？？？？", "* KRIS,^05 STAND BACK--" };
					}
					StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray());
					state = 7;
					frames = 0;
				}
			}
		}
		else if (state == 7)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					PlaySFX("sounds/snd_weaponpull");
					SetSprite(susie, "spr_su_threaten_stick");
				}
				else if (AtLine(3))
				{
					SetSprite(noelle, "spr_no_panic_right");
				}
				else if (AtLine(5))
				{
					SetSprite(susie, "spr_su_lookaway");
					gm.PlayGlobalSFX("sounds/snd_smallswing");
					SetSprite(noelle, "spr_no_think_right_panic");
				}
				else if (AtLine(7))
				{
					susie.EnableAnimator();
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(8))
				{
					SetSprite(susie, "spr_su_throw_ready");
					SetSprite(noelle, "spr_no_think_right_confused");
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				susie.EnableAnimator();
				PlayAnimation(kris, "GrabSans");
			}
			if (frames == 9)
			{
				PlaySFX("sounds/snd_grab");
				sans.GetComponent<AudioSource>().Stop();
			}
			if (frames == 18)
			{
				PlayAnimation(kris, "ThrowSans");
			}
			if (frames == 21)
			{
				PlaySFX("sounds/snd_criticalswing");
				SetSprite(susie, "spr_su_surprise_right");
			}
			if (frames == 23)
			{
				gm.PlayGlobalSFX("sounds/snd_crash");
				SetSprite(GameObject.Find("BridgePart").transform, "overworld/snow_objects/spr_epicbridgepart_1");
			}
			if (frames >= 23 && frames <= 26)
			{
				float num3 = (float)(frames - 26) / 24f;
				cam.transform.position = new Vector3(18.5f + (float)UnityEngine.Random.Range(-1, 2) * num3, (float)UnityEngine.Random.Range(-1, 2) * num3, -10f);
			}
			if (frames == 25)
			{
				sans.transform.position = new Vector3(18.22f, 0.12f);
				SetSprite(sans, "overworld/npcs/underfell/spr_ufsans_sqoish");
				funnyCrumb.position = new Vector3(18.101f, -0.381f);
			}
			if (frames >= 25)
			{
				sans.transform.position += new Vector3(-0.125f, sansYVelocity / 48f);
				sansYVelocity -= 0.75f;
				funnyCrumb.position += new Vector3(-5f / 48f, crumbYVelocity / 48f);
				crumbYVelocity -= 0.75f;
				funnyCrumb.eulerAngles = new Vector3(0f, 0f, frames * 6);
				if (sansYVelocity <= 0f)
				{
					sans.GetComponent<SpriteRenderer>().sortingOrder = -600;
				}
				if (crumbYVelocity <= 0f)
				{
					funnyCrumb.GetComponent<SpriteRenderer>().sortingOrder = 51;
				}
			}
			if (frames >= 21)
			{
				susie.transform.position = new Vector3(Mathf.Lerp(17.25f, 16.23f, (float)(frames - 21) / 5f), susie.transform.position.y);
				if (frames == 26)
				{
					SetSprite(noelle, "spr_no_surprise");
					noelleOrigPos = noelle.transform.position;
					sans.GetComponent<AudioSource>().clip = Resources.Load<AudioClip>("sounds/snd_bump");
					sans.GetComponent<AudioSource>().loop = false;
					sans.GetComponent<AudioSource>().Play();
				}
				if (frames >= 26 && frames <= 36)
				{
					noelle.transform.position = Vector3.Lerp(noelleOrigPos, new Vector3(14.9f, 0.77f), (float)(frames - 26) / 10f) + new Vector3(0f, Mathf.Sin((float)((frames - 26) * 18) * ((float)Math.PI / 180f)));
					if (frames == 36)
					{
						PlayAnimation(noelle, "Teeter");
					}
				}
			}
			if (frames == 70)
			{
				UnityEngine.Object.Destroy(sans.gameObject);
				UnityEngine.Object.Destroy(funnyCrumb.gameObject);
				SetSprite(susie, "spr_su_wtf");
				ChangeDirection(kris, Vector2.left);
				PlayAnimation(kris, "idle");
				StartText(new string[3] { "* 欸，^05我还在你后面呢！！！", "* 你差点就--", "* 我^05-我-^05我要...！" }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtnoe" }, new int[6] { 0, 0, 0, 0, 0, 4 }, new string[3] { "su_angry", "su_annoyed", "no_scared" });
				state = 8;
				frames = 0;
			}
		}
		else if (state == 8)
		{
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					susie.EnableAnimator();
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				PlayAnimation(noelle, "FallOffBridge");
				PlaySFX("sounds/snd_noelle_scared");
				ChangeDirection(susie, Vector2.left);
			}
			if (frames == 10)
			{
				PlayAnimation(noelle, "FallingBridge");
			}
			if (frames == 15)
			{
				SetSprite(susie, "spr_su_surprise_right", flipX: true);
				SetSprite(kris, "spr_kr_surprise", flipX: true);
				gm.PlayGlobalSFX("music/mus_fearsting");
			}
			float num4 = (float)(frames - 8) / 20f;
			if (frames < 10)
			{
				num4 = 0f;
			}
			num4 *= num4;
			noelle.transform.position = new Vector3(14.9f, Mathf.Lerp(0.73f, -6.07f, num4));
			if (frames == 44)
			{
				gm.PlayMusic("music/mus_gauntlet");
				StartText(new string[1] { "* NOELLE!!!" }, new string[1] { "snd_txtsus" }, new int[6] { 0, 0, 0, 0, 0, 4 }, new string[1] { "su_surprised" });
				state = 9;
				frames = 0;
			}
		}
		else
		{
			if (state != 9 || (bool)txt)
			{
				return;
			}
			frames++;
			if (frames == 1)
			{
				susie.GetComponent<SpriteRenderer>().flipX = false;
				PlayAnimation(susie, "FallBack");
				PlaySFX("sounds/snd_jump");
			}
			if ((bool)gauntlet)
			{
				float num5 = 1f - (float)frames / 45f;
				gauntlet.Find("Fella").position = new Vector3(25.913f, Mathf.Lerp(8.5f, 5.751f, num5));
				gauntlet.Find("Cannon").position = new Vector3(26.459f, Mathf.Lerp(-7.22f, -5.459f, num5));
				gauntlet.Find("SpearTop").position = new Vector3(23.203f, Mathf.Lerp(7.4f, 5.245f, num5));
				gauntlet.Find("SpearBottom").position = new Vector3(23.203f, Mathf.Lerp(-7.4f, -5.67f, num5));
				gauntlet.Find("Fire").position = new Vector3(20.039f, Mathf.Lerp(-8.93f, -5.374f, num5));
				gauntlet.Find("BallChain").position = new Vector3(19.724f, Mathf.Lerp(9.06f, 6.167f, num5));
				if (num5 <= 0f)
				{
					UnityEngine.Object.Destroy(gauntlet.gameObject);
				}
			}
			susie.transform.position += new Vector3(-1f / 24f, susieYVelocity / 48f);
			susieYVelocity -= 1f;
			if (frames == 15)
			{
				kris.GetComponent<SpriteRenderer>().flipX = false;
				kris.EnableAnimator();
				SetMoveAnim(kris, isMoving: true);
			}
			if (frames >= 15 && frames <= 30 && !MoveTo(kris, new Vector3(18.5f, 0.15f), 4f))
			{
				ChangeDirection(kris, Vector2.down);
			}
			if (frames == 30)
			{
				kris.transform.position = new Vector3(18.5f, 0.15f);
				SetSprite(kris, "spr_kr_iceslide_down");
			}
			if (frames == 35)
			{
				noelle.transform.position = Vector3.zero;
				PlayAnimation(kris, "Spin");
				PlaySFX("sounds/snd_jump");
			}
			if (frames >= 35)
			{
				if (krisYVelocity > -18f)
				{
					krisYVelocity -= 1f;
				}
				kris.transform.position += new Vector3(0f, krisYVelocity / 48f);
				if (kris.transform.position.y < 0f)
				{
					cam.transform.position = kris.transform.position + new Vector3(0f, 0f, -10f);
					PlayAnimation(kris, "SlideFall", 1f, startAtBeginning: false);
				}
				if (kris.transform.position.y <= -10f)
				{
					Util.GameManager().SetPartyMembers(susie: false, noelle: false);
					susie.transform.position = Vector3.zero;
					UnityEngine.Object.FindObjectOfType<GauntletFallScenario>().Activate();
					EndCutscene(enablePlayerMovement: false);
				}
			}
		}
	}

	private void LateUpdate()
	{
		if (state == 7)
		{
			if ((bool)txt)
			{
				noelle.GetComponent<SpriteRenderer>().sortingOrder = 0;
			}
			else
			{
				noelle.GetComponent<SpriteRenderer>().sortingOrder = -2;
			}
		}
		else if (state == 8 && !txt && frames >= 9)
		{
			noelle.GetComponent<SpriteRenderer>().sortingOrder = -600;
		}
		else if (state == 9 && !txt)
		{
			if (susieYVelocity <= 0f)
			{
				susie.GetComponent<SpriteRenderer>().sortingOrder = -600;
			}
			if (frames >= 34)
			{
				kris.GetComponent<SpriteRenderer>().sortingOrder = 51;
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetCheckpoint();
		qc = GameObject.Find("QC").GetComponent<Animator>();
		sans = GameObject.Find("Sans").GetComponent<Animator>();
		papyrus = UnityEngine.Object.FindObjectOfType<InteractPapyrusTextbox>();
		papyrus.StopStare();
		if ((int)gm.GetFlag(12) == 1 && (int)gm.GetFlag(13) < 10)
		{
			WeirdChecker.Abort(gm);
		}
		RevokePlayerControl();
		ChangeDirection(kris, Vector2.right);
		ChangeDirection(susie, Vector2.right);
		ChangeDirection(noelle, Vector2.right);
		ChangeDirection(sans, Vector2.left);
		kris.transform.position = new Vector3(19.25f, kris.transform.position.y);
		SetMoveAnim(kris, isMoving: false);
		SetMoveAnim(susie, isMoving: false);
		SetMoveAnim(noelle, isMoving: false);
		gauntlet = GameObject.Find("GauntletCutscene").transform;
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		funnyCrumb = GameObject.Find("BridgeCrumb").transform;
		depressed = Util.GameManager().GetFlagInt(87) >= 7;
		if (DEBUG)
		{
			UnityEngine.Object.Destroy(funnyCrumb.gameObject);
			state = 8;
		}
		else
		{
			gm.PlayMusic("music/mus_papyrus", 0.85f);
		}
		fastVersion = gm.GetSessionFlagInt(15) == 1;
		if (fastVersion)
		{
			papyrus.transform.position = new Vector3(28.176f, -0.25f);
			qc.transform.position = new Vector3(100f, 0f);
		}
		else
		{
			gm.SetSessionFlag(15, 1);
		}
	}
}

