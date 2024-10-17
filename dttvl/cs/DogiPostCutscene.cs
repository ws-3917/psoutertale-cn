using UnityEngine;

public class DogiPostCutscene : CutsceneBase
{
	private InteractTextBox dogamy;

	private InteractTextBox dogaressa;

	private Vector3 camPos;

	private int endState;

	private bool replayTrollDeath;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					dogamy.SetTalkable(null);
					dogaressa.SetTalkable(txt);
				}
				else if (AtLine(4))
				{
					dogamy.SetTalkable(txt);
					dogaressa.SetTalkable(null);
				}
				return;
			}
			if (frames == 0)
			{
				PlayAnimation(dogamy, "Walk");
				PlayAnimation(dogaressa, "Walk");
				frames++;
			}
			if (dogamy.transform.parent.position.y != 2.02f)
			{
				MoveTo(dogamy.transform.parent, new Vector3(8.43f, 2.02f), 6f);
				return;
			}
			if (MoveTo(dogamy.transform.parent, new Vector3(-1.04f, 2.02f), 6f))
			{
				dogamy.GetComponent<SpriteRenderer>().flipX = true;
				return;
			}
			frames++;
			if (frames == 30)
			{
				ChangeDirection(susie, Vector2.left);
				ChangeDirection(kris, Vector2.right);
				ChangeDirection(noelle, Vector2.left);
				StartText(new string[7] { "* 所以...", "* 你难道不特别想躲开他们的\n  攻击吗？", "* 我不是什么专家，^05但...", "* 你不需要通过杀小孩来\n  达到你的目的。", "* 这看起来像是那种付了10元\n  就能做到的事。", "* 你在说些什么，^05Susie？", "* 我不到啊。^05\n* 我们走吧。" }, new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus" }, new int[1], new string[7] { "su_side", "su_annoyed", "su_side", "su_neutral", "su_smile_side", "no_thinking", "su_smirk_sweat" });
				Object.Destroy(dogamy.transform.parent.gameObject);
				state = 1;
			}
		}
		else if (state == 1)
		{
			if ((bool)txt)
			{
				if (AtLine(6))
				{
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(7))
				{
					ChangeDirection(susie, Vector2.left);
				}
			}
			else if (!MoveTo(cam, cam.GetClampedPos(), 2f))
			{
				ChangeDirection(kris, Vector2.down);
				RestorePlayerControl();
				gm.PlayMusic("zoneMusic");
				EndCutscene();
			}
		}
		else if (state == 2)
		{
			frames++;
			if (frames == 45)
			{
				ChangeDirection(susie, Vector2.left);
				ChangeDirection(kris, Vector2.right);
				ChangeDirection(noelle, Vector2.left);
				StartText(new string[6] { "* 嘶...^05你真的就...^05\n  自己对付了一个大块头。", "* 你做的方式...^05真的很瘆人...", "* 我们特么怎么打出这种伤害的？", "* 这绝对没有“我们变得更强大了”\n  那么简单。", "* 因为我们得到的唯一后果是\n  死掉的尸体。", "* 我希望我们能尽早搞懂\n  到底发生了什么。" }, new string[6] { "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[1], new string[6] { "su_concerned", "no_shocked", "su_inquisitive", "su_neutral", "su_depressed", "su_dejected" });
				state = 3;
			}
		}
		else if (state == 3 && !txt)
		{
			if (!MoveTo(cam, cam.GetClampedPos(), 2f))
			{
				ChangeDirection(kris, Vector2.down);
				RestorePlayerControl();
				gm.PlayMusic("zoneMusic");
				EndCutscene();
			}
		}
		else if (state == 4)
		{
			frames++;
			if (frames == 30)
			{
				ChangeDirection(kris, Vector2.right);
				ChangeDirection(susie, Vector2.left);
				ChangeDirection(noelle, Vector2.left);
				if (replayTrollDeath)
				{
					StartText(new string[3] { "* 我操你妈你他妈干啥呢。", "* 你要杀你就特么杀全乎了。", "* 不，^05你猜怎么着--^10" }, new string[1] { "snd_txtsus" }, new int[1], new string[3] { "su_disappointed", "su_pissed", "su_annoyed" });
				}
				else
				{
					StartText(new string[4] { "* 我操你妈你他妈干啥呢。", "* 你要杀你就特么杀全乎了。", "* 不，^05你猜怎么着？\n* 你那颗心可能没啥用了。", "* ...^05你特么还犹豫？^05\n* 你不早想这么干了。" }, new string[1] { "snd_txtsus" }, new int[1], new string[4] { "su_disappointed", "su_pissed", "su_annoyed", "su_smirk_sweat" });
				}
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
					susie.ChangeDirection(Vector2.up);
				}
				else if (AtLine(3))
				{
					SetSprite(susie, "spr_su_throw_ready", flipX: true);
					if (replayTrollDeath)
					{
						ChangeDirection(kris, Vector2.up);
						txt.ForceAdvanceCurrentLine();
					}
					else
					{
						SetSprite(kris, "spr_kr_surprise");
					}
				}
				else if (AtLine(4))
				{
					susie.GetComponent<SpriteRenderer>().flipX = false;
					susie.EnableAnimator();
					ChangeDirection(susie, Vector2.left);
					kris.EnableAnimator();
					ChangeDirection(kris, Vector2.up);
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				PlayAnimation(kris, "RemoveSoul_WalkUp");
			}
			if (frames == 15 && replayTrollDeath)
			{
				susie.GetComponent<SpriteRenderer>().flipX = false;
				susie.EnableAnimator();
				ChangeDirection(susie, Vector2.left);
			}
			if (frames == 45)
			{
				SetSprite(noelle, "spr_no_surprise_left");
				if (replayTrollDeath)
				{
					SetSprite(susie, "spr_su_surprise_right", flipX: true);
				}
			}
			if (frames >= 38 && frames <= 41)
			{
				int num = ((frames % 2 == 0) ? 1 : (-1));
				int num2 = 41 - frames;
				kris.transform.position = new Vector3(7.302f, -1.63f) + new Vector3((float)(num2 * num) / 24f, 0f);
			}
			if (frames >= 48 && frames <= 51)
			{
				int num3 = ((frames % 2 == 0) ? 1 : (-1));
				int num4 = 51 - frames;
				kris.transform.position = new Vector3(7.302f, -1.63f) + new Vector3((float)(num4 * num3) / 24f, 0f);
			}
			if (frames >= 58 && frames <= 61)
			{
				int num5 = ((frames % 2 == 0) ? 1 : (-1));
				int num6 = 61 - frames;
				kris.transform.position = new Vector3(7.302f, -1.63f) + new Vector3((float)(num6 * num5) / 24f, 0f);
			}
			if (frames >= 64 && frames <= 67)
			{
				int num7 = ((frames % 2 == 0) ? 1 : (-1));
				int num8 = 67 - frames;
				kris.transform.position = new Vector3(7.302f, -1.63f) + new Vector3((float)(num8 * num7) / 24f, 0f);
			}
			if (frames == 38 || frames == 48 || frames == 58)
			{
				PlaySFX("sounds/snd_bump");
			}
			if (frames == 64)
			{
				Object.Instantiate(Resources.Load<GameObject>("vfx/SOULRemoveEffect"), kris.transform.position, Quaternion.identity);
				PlaySFX("sounds/snd_grab");
			}
			if (frames == 110)
			{
				if (replayTrollDeath)
				{
					StartText(new string[7] { "* 啊-^05啊！^05\n* 还是很吓人啊...！", "* Kris，^05我甚至没机会\n  把话说完...", "* 对，^05我支持你。", "* 玩棒球怎么样。", "* 我正好也要说这句。", "* 所以，^05继续吧。^05\n* 往后退。", "* 还有额...^05Noelle，\n  你去旁观席。" }, new string[5] { "snd_txtnoe", "snd_txtsus", "snd_txtkrs", "snd_txtkrs", "snd_txtsus" }, new int[1], new string[7] { "no_afraid", "su_surprised", "kr_relieved_side", "kr_smug", "su_smile_sweat", "su_confident", "su_smirk_sweat" });
				}
				else
				{
					StartText(new string[6] { "* 啊-^05啊！^05\n* 还是很吓人啊...！", "* 然...^10然后呢？", "* 玩棒球怎么样。", "* 怎的？", "* 你去抛球位。", "* 还有额...^05Noelle，\n  你去旁观席。" }, new string[5] { "snd_txtnoe", "snd_txtkrs", "snd_txtsus", "snd_txtkrs", "snd_txtsus" }, new int[3] { 0, 1, 0 }, new string[6] { "no_afraid", "kr_g_1", "su_smile_side", "kr_weird", "su_annoyed", "su_smirk_sweat" });
				}
				state = 6;
				frames = 0;
			}
		}
		else if (state == 6)
		{
			if ((bool)txt)
			{
				if (replayTrollDeath)
				{
					if (AtLine(2))
					{
						susie.GetComponent<SpriteRenderer>().flipX = false;
						susie.EnableAnimator();
					}
					else if (AtLine(3))
					{
						txt.gameObject.AddComponent<ShakingText>().StartShake(25);
					}
					else if (AtLine(4))
					{
						SetSprite(noelle, "spr_no_left_shocked_0");
					}
					else if (AtLine(6))
					{
						SetSprite(susie, "spr_su_throw_ready", flipX: true);
						txt.GetComponent<ShakingText>().Stop();
					}
					else if (AtLine(7))
					{
						noelle.EnableAnimator();
						SetSprite(susie, "spr_su_shrug_unhappy");
					}
				}
				else if (AtLine(2))
				{
					txt.gameObject.AddComponent<ShakingText>().StartShake(5);
				}
				else if (AtLine(3))
				{
					txt.GetComponent<ShakingText>().Stop();
				}
				else if (AtLine(4))
				{
					SetSprite(kris, "spr_kr_up_removesoul_wtf");
					SetSprite(noelle, "spr_no_left_shocked_0");
					txt.gameObject.GetComponent<ShakingText>().StartShake(25);
				}
				else if (AtLine(5))
				{
					SetSprite(susie, "spr_su_throw_ready", flipX: true);
					txt.GetComponent<ShakingText>().Stop();
				}
				else if (AtLine(6))
				{
					noelle.EnableAnimator();
					SetSprite(susie, "spr_su_shrug_unhappy");
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				ChangeDirection(susie, Vector2.right);
				ChangeDirection(noelle, Vector2.up);
				ChangeDirection(kris, Vector2.left);
				PlayAnimation(kris, "walk");
				kris.EnableAnimator();
				susie.EnableAnimator();
				SetMoveAnim(kris, isMoving: true);
				SetMoveAnim(susie, isMoving: true);
				SetMoveAnim(noelle, isMoving: true);
			}
			if (!MoveTo(kris, new Vector3(4.11f, -1.62f), 4f))
			{
				SetMoveAnim(kris, isMoving: false);
				ChangeDirection(kris, Vector2.right);
				if (replayTrollDeath && kris.GetComponent<Animator>().enabled)
				{
					PlaySFX("sounds/snd_wing");
					SetSprite(kris, "spr_kr_pre_pitchsoul_0");
				}
			}
			if (!MoveTo(susie, new Vector3(9.43f, -1.47f), 4f))
			{
				SetMoveAnim(susie, isMoving: false);
				ChangeDirection(susie, Vector2.left);
			}
			if (!MoveTo(noelle, new Vector3(7.64f, 0.65f), 6f))
			{
				SetMoveAnim(noelle, isMoving: false);
				ChangeDirection(noelle, Vector2.down);
			}
			if (frames == 60)
			{
				if (replayTrollDeath)
				{
					StartText(new string[4] { "* 我们看看你能不能把\n  这玩意打进太空。", "* 你知道我会的，^05Kris。", "* 好。", "* 击球手准备。" }, new string[4] { "snd_txtkrs", "snd_txtsus", "snd_txtkrs", "snd_txtkrs" }, new int[1], new string[4] { "kr_smirk", "su_smile", "kr_g_1", "kr_smug" });
				}
				else
				{
					StartText(new string[11]
					{
						"* 你抛给我，然后我传给太空。", "* 或者也可以试试用它打破结界。", "* 哦...", "* 你确定就因为我刚才做的事\n  然后咱们就要这么干吗？", "* 我还记得你说的话。", "* 而且...", "* 你的所作所为又愚昧又残忍。", "* 所以就别墨迹了。", "* 除非你还想保持现状。", "* ...",
						"* 击球手准备。"
					}, new string[10] { "snd_txtsus", "snd_txtsus", "snd_txtkrs", "snd_txtkrs", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtkrs" }, new int[1], new string[11]
					{
						"su_neutral", "su_smirk_sweat", "kr_dejected", "kr_sad", "su_neutral", "su_side", "su_depressed", "su_annoyed", "su_annoyed", "kr_g_1",
						"kr_smug"
					});
				}
				frames = 0;
				state = 7;
			}
		}
		else
		{
			if (state != 7)
			{
				return;
			}
			if ((bool)txt)
			{
				if (replayTrollDeath)
				{
					if (AtLine(2))
					{
						SetSprite(susie, "spr_su_threaten_stick", flipX: true);
					}
					else if (AtLine(3))
					{
						SetSprite(kris, "spr_kr_pre_pitchsoul_1");
					}
					else if (AtLine(4))
					{
						SetSprite(kris, "spr_kr_pitchsoul_0");
					}
				}
				else if (AtLine(3))
				{
					ChangeDirection(kris, Vector2.up);
				}
				else if (AtLine(4))
				{
					PlaySFX("sounds/snd_wing");
					SetSprite(kris, "spr_kr_pre_pitchsoul_0");
				}
				else if (AtLine(5))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(8))
				{
					SetSprite(susie, "spr_su_threaten_stick", flipX: true);
				}
				else if (AtLine(10))
				{
					SetSprite(kris, "spr_kr_pre_pitchsoul_1");
				}
				else if (AtLine(11))
				{
					SetSprite(kris, "spr_kr_pitchsoul_0");
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				PlayAnimation(kris, "PitchSoul");
				kris.EnableAnimator();
			}
			if (frames == 19)
			{
				PlaySFX("sounds/snd_wing");
			}
			if (frames == 33)
			{
				gm.PlayGlobalSFX("sounds/snd_swing");
			}
			if (frames >= 37)
			{
				GameObject.Find("SoulToss").transform.position = new Vector3(Mathf.Lerp(5.01f, 7.54f, (float)(frames - 37) / 3f), kris.transform.position.y);
			}
			if (frames == 36)
			{
				susie.EnableAnimator();
				PlayAnimation(susie, "AttackStick");
				PlaySFX("sounds/snd_attack");
			}
			if (frames >= 40)
			{
				int num9 = frames / 2 % 2;
				SetSprite(GameObject.Find("SoulToss").transform, "player/Kris/spr_soul_pitch_hit_" + num9);
				if (frames == 40)
				{
					gm.PlayGlobalSFX("sounds/snd_homerun");
					susie.DisableAnimator();
					SetSprite(noelle, "spr_no_surprise");
				}
				float num10 = (float)(frames - 56) / 48f;
				cam.transform.position = camPos + new Vector3(Random.Range(-1, 2), Random.Range(-1, 2)) * num10;
			}
			if (frames == 51)
			{
				gm.Death(6);
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		dogamy = GameObject.Find("Dogamy").GetComponent<InteractTextBox>();
		dogaressa = GameObject.Find("Dogaressa").GetComponent<InteractTextBox>();
		endState = int.Parse(par[0].ToString());
		gm.SetPartyMembers(susie: true, noelle: true);
		if (endState == 2)
		{
			WeirdChecker.Abort(gm);
			StartText(new string[4] { "* 我仍然不清楚你是否是个人类还是\n  小狗，^05但...你很友好？？？", "* （这里大多数怪物都很恶毒，^05所以...）", "* （我估计我们不会因此消灭你。）", "* 谢了，^05奇怪的人狗混合体！" }, new string[1] { "snd_text" }, new int[1], new string[1] { "" });
			dogamy.SetTalkable(txt);
			return;
		}
		Object.Destroy(dogamy.transform.parent.gameObject);
		gm.SetFlag(1, "inquisitive");
		gm.SetFlag(2, "depressed_side");
		if (endState == 3)
		{
			gm.ModifyCheckpointLocation(84, Vector3.zero);
			state = 4;
			replayTrollDeath = (int)gm.GetPersistentFlag(8) == 1;
			if (!replayTrollDeath)
			{
				gm.SetPersistentFlag(8, 1);
			}
			camPos = cam.transform.position;
		}
		else
		{
			PlaySFX("sounds/snd_ominous");
			state = 2;
		}
	}
}

