using System.Collections.Generic;
using UnityEngine;

public class SnowdinInnCutscene : CutsceneBase
{
	private Animator noel;

	private Animator dess;

	private bool selecting;

	private bool dessHumanChoice;

	private int dessStart;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && !txt)
		{
			frames++;
			GameObject.Find("Black").GetComponent<SpriteRenderer>().color = new Color(0f, 0f, 0f, 1f - (float)frames / 60f);
			if (frames == 70)
			{
				PlaySFX("sounds/snd_wing", 0.8f);
				SetSprite(kris, "spr_kr_couch_getup_0");
			}
			if (frames >= 70 && frames <= 73)
			{
				int num = ((frames % 2 == 0) ? 1 : (-1));
				int num2 = 73 - frames;
				kris.transform.position = new Vector3(2f, -1.8333f) + new Vector3((float)(num2 * num) / 24f, 0f);
			}
			if (frames == 85)
			{
				SetSprite(dess, "overworld/npcs/snowdin/spr_ds_ttn_lookover");
			}
			if (frames == 110)
			{
				PlaySFX("sounds/snd_wing", 0.9f);
				SetSprite(kris, "spr_kr_couch_getup_1");
			}
			if (frames >= 110 && frames <= 113)
			{
				int num3 = ((frames % 2 == 0) ? 1 : (-1));
				int num4 = 113 - frames;
				kris.transform.position = new Vector3(2f, -1.8333f) + new Vector3((float)(num4 * num3) / 24f, 0f);
			}
			if (frames == 130)
			{
				SetSprite(dess, "overworld/npcs/snowdin/spr_ds_ttn_lookkris_familiar");
				ChangeDirection(noel, Vector2.right);
				StartText(new string[8] { "* 好吧，^05看起来他醒了！", "* 嘿呀！！！^05\n* 你还好吗？", "* ...那是什么表情？", "* 你好像见鬼了似的。", "* 呃，^05得了吧！", "* 我叫<color=#FF7F00FF>Dess</color>，^05\n  这个是我的妹妹，<color=#FFFF00FF>Noel</color>！", "* 你好！", "* 你叫什么？" }, new string[8] { "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtnoe_ut", "snd_txtnoe_ut" }, new int[1], new string[8] { "dessut_confused", "dessut_excited", "dessut_confused", "dessut_confused", "dessut_excited", "dessut_happy", "nl_happy", "nl_neutral" }, 0);
				state = 1;
				frames = 0;
			}
		}
		else if (state == 1)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					gm.PlayMusic("music/mus_youngdess");
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_ttn_lookkris_happy");
					SetSprite(kris, "spr_kr_couch_surprise");
				}
				else if (AtLine(3))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_ttn_lookkris_familiar");
				}
				else if (AtLine(5))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_ttn_lookkris_happy");
				}
				return;
			}
			frames++;
			if (frames == 25)
			{
				SetSprite(kris, "spr_kr_couch_sit");
			}
			if (frames == 50)
			{
				SetSprite(dess, "overworld/npcs/snowdin/spr_ds_ttn_lookkris_familiar");
				StartText(new string[5] { "* ...^05 Kris?", "* 我好像在哪听过这个名字...？", "* 哎呀，^05总之很高兴见到你！", "* ... Noel,^05你给妈妈打电话\n  问问我们什么时候回去。", "* 好的！" }, new string[5] { "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtnoe_ut" }, new int[1], new string[5] { "dessut_confused", "dessut_thoughtful", "dessut_excited", "dessut_neutral", "nl_happy" }, 0);
				state = 3;
				frames = 0;
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_ttn_lookkris_happy");
				}
				else if (AtLine(4))
				{
					dess.enabled = true;
					ChangeDirection(noel, Vector2.up);
				}
				return;
			}
			if (frames == 0)
			{
				LookAt(dess, noel);
				if (noel.transform.position.y < -0.84f)
				{
					SetMoveAnim(noel, isMoving: true);
					noel.transform.position += new Vector3(0f, 1f / 12f);
					return;
				}
				if (noel.transform.position.x > -4.29f)
				{
					ChangeDirection(noel, Vector2.left);
					noel.transform.position -= new Vector3(1f / 12f, 0f);
					return;
				}
				if (noel.transform.position.y < 2.06f)
				{
					ChangeDirection(noel, Vector2.up);
					noel.transform.position += new Vector3(0f, 1f / 12f);
					return;
				}
				PlaySFX("sounds/snd_escaped");
				noel.GetComponent<SpriteRenderer>().enabled = false;
				frames++;
				ChangeDirection(dess, Vector2.up);
				return;
			}
			frames++;
			if (frames == 30)
			{
				ChangeDirection(dess, Vector2.right);
				SetMoveAnim(dess, isMoving: true);
			}
			if (frames >= 30 && !MoveTo(dess, new Vector3(1.35f, -1.36f), 4f))
			{
				SetMoveAnim(dess, isMoving: false);
				SetSprite(dess, "overworld/npcs/snowdin/spr_ds_whisper");
				StartText(new string[3] { "* （来吧，^05Kris...）", "* （我要问你个怪问题。\n  实话告诉我...）", "* （你是个人类吧？）" }, new string[3] { "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtdes_ut" }, new int[1], new string[3] { "dessut_thoughtful", "dessut_sneaky_look", "dessut_sneaky" }, 0);
				state = 4;
				frames = 0;
				txt.EnableSelectionAtEnd();
			}
		}
		else if (state == 4)
		{
			if (!txt)
			{
				return;
			}
			if (txt.CanLoadSelection() && !selecting)
			{
				InitiateDeltaSelection();
				select.SetupChoice(Vector2.left, "好...?", Vector3.zero);
				select.SetupChoice(Vector2.right, "不-不...", new Vector3(-20f, 0f));
				select.Activate(this, 0, txt.gameObject);
				selecting = true;
			}
			else if (!selecting)
			{
				if (AtLine(2))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_whisper_peek");
				}
				else if (AtLine(3))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_whisper");
				}
			}
		}
		else if (state == 5)
		{
			if ((bool)txt)
			{
				if (AtLine(1 + dessStart))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_confused");
				}
				else if (AtLine(2 + dessStart) || AtLine(5 + dessStart))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_explain");
				}
				else if (AtLine(4 + dessStart))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_excited");
				}
				else if (AtLine(6 + dessStart))
				{
					dess.enabled = true;
					ChangeDirection(dess, Vector2.up);
				}
				else if (AtLine(7 + dessStart))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_worried");
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				noel.GetComponent<SpriteRenderer>().enabled = true;
				SetMoveAnim(noel, isMoving: true, 1.3f);
				ChangeDirection(noel, Vector2.down);
				PlaySFX("sounds/snd_escaped");
			}
			if (!MoveTo(noel, new Vector3(noel.transform.position.x, -0.75f), 6f))
			{
				ChangeDirection(noel, Vector2.right);
				SetMoveAnim(noel, isMoving: false);
				SetSprite(noel, "player/Noel/spr_nl_right_0_unhappy");
				SetSprite(dess, "overworld/npcs/snowdin/spr_ds_surprise");
				StartText(new string[11]
				{
					"* Dess，^05妈妈想让我们\n  现在就回去。", "* 等等，^05为啥？", "* Doesn't she go to\n  work in a couple\n  hours?", "* Well,^05 the royal guard\n  is gonna go human\n  hunting soon.", "* They think a human\n  was spotted leaving\n  the RUINs earlier.", "* And I thought they\n  didn't know what\n  humans looked like.", "* Lemme go check on\n  the two upstairs real\n  quick before we go.", "* Are we gonna ride\n  on the boat?", "* Well,^05 if we have\n  to go home right\n  now,^05 then yeah.", "* Yay!",
					"* Okay,^05 be right back."
				}, new string[11]
				{
					"snd_txtnoe_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtnoe_ut", "snd_txtnoe_ut", "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtnoe_ut", "snd_txtdes_ut", "snd_txtnoe_ut",
					"snd_txtdes_ut"
				}, new int[1], new string[11]
				{
					"nl_curious", "dessut_surprise", "dessut_confused_think", "nl_thinking", "nl_curious", "dessut_annoyed", "dessut_thoughtful", "nl_happy", "dessut_confused", "nl_happy",
					"dessut_neutral"
				}, 0);
				state = 6;
				frames = 0;
			}
		}
		else if (state == 6)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					SetSprite(dess, "overworld/npcs/snowdin/spr_ds_left_0_unhappy");
				}
				else if (AtLine(6))
				{
					dess.enabled = true;
				}
				else if (AtLine(7) || AtLine(11))
				{
					ChangeDirection(dess, Vector2.left);
				}
				else if (AtLine(8))
				{
					SetSprite(noel, "player/Noel/spr_nl_right_0");
				}
				else if (AtLine(9))
				{
					ChangeDirection(dess, Vector2.up);
				}
				else if (AtLine(10))
				{
					SetSprite(noel, "player/Noel/spr_nl_happy");
				}
				return;
			}
			if (frames == 0)
			{
				ChangeDirection(dess, Vector2.up);
			}
			if (dess.transform.position.y < 0.52f)
			{
				SetMoveAnim(dess, isMoving: true);
				dess.transform.position += new Vector3(0f, 0.125f);
			}
			else if (dess.transform.position.x > -4.29f)
			{
				ChangeDirection(dess, Vector2.left);
				dess.transform.position -= new Vector3(0.125f, 0f);
			}
			else if (dess.transform.position.y < 2.06f)
			{
				ChangeDirection(dess, Vector2.up);
				dess.transform.position += new Vector3(0f, 0.125f);
			}
			else if (dess.GetComponent<SpriteRenderer>().enabled)
			{
				PlaySFX("sounds/snd_escaped");
				dess.GetComponent<SpriteRenderer>().enabled = false;
				ChangeDirection(dess, Vector2.up);
			}
			frames++;
			if (frames == 45)
			{
				noel.enabled = true;
				ChangeDirection(noel, Vector2.right);
				SetMoveAnim(noel, isMoving: true);
			}
			if (frames >= 45)
			{
				if (noel.transform.position.x < 0f)
				{
					noel.transform.position += new Vector3(1f / 12f, (noel.transform.position.x < -2f) ? 0f : (-1f / 48f));
				}
				else
				{
					SetMoveAnim(noel, isMoving: false);
				}
			}
			if (frames == 120)
			{
				StartText(new string[2] { "* 嘿，^05Kris。", "* 你跟Dess刚才说啥呢？" }, new string[2] { "snd_txtnoe_ut", "snd_txtnoe_ut" }, new int[1], new string[2] { "nl_neutral", "nl_happy" }, 0);
				txt.EnableSelectionAtEnd();
				state = 7;
				frames = 0;
			}
		}
		else if (state == 7)
		{
			if ((bool)txt && txt.CanLoadSelection() && !selecting)
			{
				InitiateDeltaSelection();
				select.SetupChoice(Vector2.left, "Time Travel", Vector3.zero);
				select.SetupChoice(Vector2.right, "Being Human", new Vector3(-70f, 0f));
				select.SetupChoice(Vector2.up, "Guitar", new Vector3(0f, 0f));
				select.SetupChoice(Vector2.down, "没事", new Vector3(0f, 0f));
				select.Activate(this, 1, txt.gameObject);
				selecting = true;
			}
		}
		else if (state == 8 && !txt)
		{
			if (frames == 0)
			{
				frames++;
				dess.GetComponent<SpriteRenderer>().enabled = true;
				PlaySFX("sounds/snd_escaped");
				ChangeDirection(dess, Vector2.down);
				SetMoveAnim(dess, isMoving: true, 1.5f);
			}
			if (dess.transform.position.y > -0.52f)
			{
				dess.transform.position -= new Vector3(0f, 1f / 6f);
				return;
			}
			if (dess.transform.position.x < -1.64f)
			{
				ChangeDirection(dess, Vector2.right);
				dess.transform.position += new Vector3(1f / 6f, 0f);
				return;
			}
			SetMoveAnim(dess, isMoving: false);
			SetSprite(noel, "player/Noel/spr_nl_left_0_unhappy");
			StartText(new string[5] { "* 好吧，我们走吧，Noel。", "* Uhh...^05 probably don't\n  talk to the other\n  deer.", "* Why?", "* No reason.^05\n* Now let's go.", "* Oh,^05 umm,^05 see ya\n  Kris!" }, new string[5] { "snd_txtdes_ut", "snd_txtdes_ut", "snd_txtnoe_ut", "snd_txtdes_ut", "snd_txtdes_ut" }, new int[1], new string[5] { "dessut_confused", "dessut_confused_think", "nl_confused", "dessut_murderous_side", "dessut_embarrassed" }, 0);
			state = 9;
			frames = 0;
		}
		else if (state == 9 && !txt)
		{
			if (MoveTo(dess, new Vector3(-0.79f, -6.04f), 6f))
			{
				ChangeDirection(dess, Vector2.down);
				SetMoveAnim(dess, isMoving: true);
				if (dess.transform.position.y < -2.32f)
				{
					SetSprite(noel, "player/Noel/spr_nl_down_0_unhappy");
				}
				return;
			}
			frames++;
			if (frames == 30)
			{
				noel.enabled = true;
				ChangeDirection(noel, Vector2.up);
				StartText(new string[3] { "* Aw,^05 but I wanted\n  to meet them...", "* Oh well...", "* Bye-bye Kris!^05\n* Until we meet agai--^10 " }, new string[1] { "snd_txtnoe_ut" }, new int[1], new string[3] { "nl_thinking", "nl_weird", "nl_happy" }, 0);
				state = 10;
				frames = 0;
			}
		}
		else if (state == 10)
		{
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					gm.StopMusic(60f);
					ChangeDirection(noel, Vector2.right);
					txt.ForceAdvanceCurrentLine();
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				susie.GetComponent<SpriteRenderer>().enabled = true;
				susie.SetCustomSpritesetPrefix("no");
				ChangeDirection(susie, Vector2.down);
				SetMoveAnim(susie, isMoving: true);
				susie.transform.position = new Vector3(-4.21f, 2.28f);
				PlaySFX("sounds/snd_escaped");
			}
			if (!MoveTo(susie, new Vector3(-4.21f, -0.43f), 6f))
			{
				SetMoveAnim(susie, isMoving: false);
				SetSprite(noel, "player/Noel/spr_nl_left_0_unhappy");
				StartText(new string[7] { "* Kris,^05 what the hell\n  is going on???", "* Why are we back\n  in that rabbit house?", "* ...", "* Speaking of deja vu...", "* 嘿！！！\n  ^05醒醒！！！", "* 啥..^10咋了...？", "* 看呐，^05Noelle！！！" }, new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus" }, new int[1], new string[7] { "su_annoyed", "su_annoyed", "su_wideeye", "su_inquisitive", "su_wtf", "", "su_angry" }, 0);
				state = 11;
				frames = 0;
			}
		}
		else if (state == 11)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(4))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(5))
				{
					PlayAnimation(susie, "ShakeNoelle");
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				PlayAnimation(susie, "idle");
				susie.SetCustomSpritesetPrefix("");
				noelle.transform.position = new Vector3(-2.936f, -0.433f);
				SetSprite(noelle, "spr_no_kneel_left");
				PlaySFX("sounds/snd_noise");
				ChangeDirection(susie, Vector2.right);
			}
			if (frames == 40)
			{
				ChangeDirection(noelle, Vector2.left);
				noelle.EnableAnimator();
				PlaySFX("sounds/snd_wing");
			}
			if (frames == 60)
			{
				ChangeDirection(noelle, Vector2.up);
			}
			else if (frames == 70)
			{
				ChangeDirection(noelle, Vector2.down);
			}
			else if (frames == 80)
			{
				ChangeDirection(noelle, Vector2.right);
			}
			if (frames == 100)
			{
				StartText(new string[1] { "* 你在说什么呢？" }, new string[1] { "snd_txtnoe" }, new int[1], new string[1] { "no_confused" }, 0);
				new GameObject("NoelTextbox").AddComponent<TextBox>().CreateBox(new string[1] { "* 你在说什么呢？" }, new string[1] { "snd_txtnoe_ut" }, new int[1], 1, giveBackControl: false, new string[1] { "nl_confused" });
				state = 12;
				frames = 0;
			}
		}
		else if (state == 12 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				PlaySFX("sounds/snd_noise");
				GameObject.Find("Black").GetComponent<SpriteRenderer>().color = new Color(0f, 0f, 0f, 1f);
				GameObject.Find("NoelleNeon").transform.position = noelle.transform.position;
				GameObject.Find("NoelNeon").transform.position = noel.transform.position;
			}
			if (frames == 40)
			{
				gm.PlayMusic("music/mus_star", (Util.GameManager().GetFlagInt(13) >= 10) ? 0.75f : 0.95f);
			}
			if (frames == 130)
			{
				string[] array = new string[4] { "* 什么鬼...？！", "* 那是不是...^15我？", "* 就像...", "* 看起来就像一个奇怪的镜子..." };
				StartText(array, new string[1] { "snd_txtnoe" }, new int[1] { 1 }, new string[1] { "" }, 0);
				TextBox textBox = new GameObject("NoelTextbox").AddComponent<TextBox>();
				textBox.CreateBox(array, new string[1] { "snd_txtnoe_ut" }, new int[1] { 1 }, 1, giveBackControl: false, new string[1] { "" });
				textBox.GetTextUT().transform.localPosition = new Vector3(0f, -40f);
				Object.Destroy(txt.GetTextUT().transform.Find("menuBorder").gameObject);
				Object.Destroy(txt.GetTextUT().transform.Find("menuBox").gameObject);
				Object.Destroy(textBox.GetTextUT().transform.Find("menuBorder").gameObject);
				Object.Destroy(textBox.GetTextUT().transform.Find("menuBox").gameObject);
				state = 13;
				frames = 0;
			}
		}
		else if (state == 13 && !txt)
		{
			frames++;
			if (frames <= 90)
			{
				float a = 1f - (float)frames / 90f;
				GameObject.Find("Black").GetComponent<SpriteRenderer>().color = new Color(0f, 0f, 0f, a);
				GameObject.Find("NoelleNeon").GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, a);
				GameObject.Find("NoelNeon").GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, a);
			}
			if (frames == 120)
			{
				SetSprite(noel, "player/Noel/spr_nl_surprise");
				StartText(new string[3] { "* 哦-^05哦！", "* 我...^10得走了。", "* 呃...^10再见，^05我自己！！！" }, new string[1] { "snd_txtnoe_ut" }, new int[1], new string[3] { "nl_shocked", "nl_confused_side", "nl_happy" }, 0);
				state = 14;
				frames = 0;
			}
		}
		else if (state == 14)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					noel.enabled = true;
					ChangeDirection(noel, Vector2.up);
				}
				else if (AtLine(3))
				{
					ChangeDirection(noel, Vector2.left);
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				ChangeDirection(noel, Vector2.down);
				SetMoveAnim(noel, isMoving: true, 1.5f);
			}
			MoveTo(noel, new Vector3(-0.87f, -5.7f), 6f);
			if (frames >= 15)
			{
				if (MoveTo(noelle, new Vector3(-0.67f, -0.433f), 8f))
				{
					SetMoveAnim(noelle, isMoving: true, 2f);
				}
				else
				{
					ChangeDirection(noelle, Vector2.down);
					SetMoveAnim(noelle, isMoving: false);
				}
			}
			if (frames >= 40)
			{
				if (susie.transform.position.x < -2.84f)
				{
					SetMoveAnim(susie, isMoving: true);
					susie.transform.position += new Vector3(1f / 12f, 0f);
				}
				else if (!MoveTo(susie, new Vector3(-1.943f, -1.12f), 4f))
				{
					SetMoveAnim(susie, isMoving: false);
					ChangeDirection(susie, Vector2.down);
				}
			}
			if (frames == 90)
			{
				bool flag = Util.GameManager().GetFlagInt(13) >= 10;
				if (flag)
				{
					StartText(new string[23]
					{
						"* 我想那就是另一个世界\n  的你了。", "* 她看起来跟我小时候\n  一模一样。", "* 感觉就像在看一张\n  活生生的全家福。", "* ...", "* 那...^10让我有点\n  头皮发麻。", "* Huh...?^10\n* Why's that?", "* 我也不知道。", "* It feels kinda...", "* Foreboding.", "* ...",
						"* I might just be\n  feeling a little\n  freaked out,^05 heh...", "* Maybe we should take\n  a breather here for\n  a little bit.", "* Try to chill out\n  while we can.", "* Y'know,^05 before we have\n  to deal with this\n  thing's shit again.", "* 嗯...", "* That's not a terrible\n  idea,^05 actually.", "* I feel like we can't\n  get away with much\n  while in town.", "* Presuming that's where\n  we are,^05 anyway.", "* 好了...", "* Though,^05 Kris.",
						"* Once we get going,^05 we're\n  going back on our shit.", "* So you better enjoy\n  your damn time here.", "* Now let's go look\n  around town."
					}, new string[23]
					{
						"snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe",
						"snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus",
						"snd_txtsus", "snd_txtsus", "snd_txtsus"
					}, new int[1], new string[23]
					{
						"su_side", "no_shocked", "no_shocked", "su_side", "su_side_sweat", "no_confused", "su_neutral", "su_side", "su_dejected", "no_thinking",
						"su_worriedsmile", "su_smirk_sweat", "su_smile_sweat", "su_sad", "no_thinking", "no_curious", "no_weird", "no_curious", "su_side", "su_neutral",
						"su_annoyed", "su_annoyed", "su_neutral"
					}, 0);
				}
				else
				{
					StartText(new string[15]
					{
						"* 我想那就是另一个世界\n  的你了。", "* 她看起来跟我小时候\n  一模一样。", "* 感觉就像在看一张\n  活生生的全家福。", "* That's...^05 a weird way\n  to put it.", "* Then again...", "* 如果这里的我也是个小孩，\n ^05 那么呃...", "* 我也会感觉很奇怪。", "* But uhh...", "* 还有另一只鹿在谈论我们。", "* 她到底跟你说了什么，^05\n  Kris？",
						"* Dess???", "* 是谁...？", "* 我，^05呃...", "* ...^10算了。", "* 是啊，^05你们谈了什么，\n  ^05Kris？"
					}, new string[15]
					{
						"snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus",
						"snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe"
					}, new int[1], new string[15]
					{
						"su_side", "no_shocked", "no_shocked", "su_smirk_sweat", "su_inquisitive", "su_inquisitive", "su_side_sweat", "su_neutral", "su_side", "su_annoyed",
						"no_awe", "su_smile_sweat", "no_shocked", "no_depressed", "no_happy"
					}, 0);
				}
				state = (flag ? 17 : 15);
				frames = 0;
			}
		}
		else if (state == 15)
		{
			if ((bool)txt)
			{
				if (AtLine(4))
				{
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(5))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(6))
				{
					PlayAnimation(susie, "Embarrassed");
				}
				else if (AtLine(7))
				{
					SetSprite(susie, "spr_su_lookup_side");
				}
				else if (AtLine(8))
				{
					PlayAnimation(susie, "idle");
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(9))
				{
					SetSprite(noelle, "spr_no_surprise");
				}
				else if (AtLine(11))
				{
					SetSprite(noelle, "spr_no_surprise_leftdown");
				}
				else if (AtLine(13))
				{
					noelle.EnableAnimator();
					ChangeDirection(noelle, Vector2.up);
				}
				else if (AtLine(15))
				{
					ChangeDirection(noelle, Vector2.right);
				}
				return;
			}
			frames++;
			if (frames == 60)
			{
				StartText(new string[14]
				{
					"* 皇家护卫队会追捕我们吗\n  毕竟你是人类？", "* 我以为我们离开了\n  那个疯狂的维度！！！", "* ...", "* 等一下，^05这和你妈妈\n  说的一致。", "* 所以...^05\n  我想我们确实需要留意。", "* What...?", "* Kris的妈妈也在\n  这个世界上。", "* 她说^05“这里的怪物很危险。”", "* 他们并不，^05但是...", "* 我想我们需要担心一下守卫。",
					"* 不过，^05我觉得我们还有时间\n  放松一下。", "* 你自己选吧，^05Kris。", "* Well,^05 they already look\n  pretty comfortable,^05\n  Susie.", "* Why don't we chill\n  some place that isn't\n  in HERE???"
				}, new string[14]
				{
					"snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus",
					"snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus"
				}, new int[1], new string[14]
				{
					"su_pissed", "su_wtf", "su_inquisitive", "su_side", "su_smile_sweat", "no_curious", "su_neutral", "su_smile_side", "su_inquisitive", "su_annoyed",
					"su_side", "su_smirk", "no_happy", "su_angry"
				}, 0);
				state = 16;
				frames = 0;
			}
		}
		else if (state == 16)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					SetSprite(susie, "spr_su_wtf");
				}
				else if (AtLine(3))
				{
					susie.EnableAnimator();
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(5))
				{
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(6))
				{
					ChangeDirection(noelle, Vector2.left);
				}
				else if (AtLine(12))
				{
					gm.StopMusic(60f);
				}
				else if (AtLine(13))
				{
					SetSprite(noelle, "spr_no_laugh_0");
				}
				else if (AtLine(14))
				{
					SetSprite(susie, "spr_su_throw_ready");
				}
				return;
			}
			noelle.EnableAnimator();
			ChangeDirection(noelle, Vector2.right);
			susie.EnableAnimator();
			if (gm.GetFlagInt(12) == 0)
			{
				susie.UseHappySprites();
			}
			if (!WeirdChecker.HasCommittedBloodshed(gm))
			{
				noelle.UseHappySprites();
			}
			kris.transform.position = new Vector3(1.27f, -2.05f);
			kris.EnableAnimator();
			gm.PlayGlobalSFX("sounds/snd_wing");
			gm.PlayMusic("zoneMusic");
			RestorePlayerControl();
			WeirdChecker.RoomModifications(gm);
			gm.SetCheckpoint(112, new Vector3(0.92f, -1.95f));
			EndCutscene();
		}
		else
		{
			if (state != 17)
			{
				return;
			}
			if ((bool)txt)
			{
				if (AtLine(4))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(5) || AtLine(8))
				{
					SetSprite(susie, "spr_su_lookup");
				}
				else if (AtLine(6))
				{
					ChangeDirection(noelle, Vector2.left);
				}
				else if (AtLine(7))
				{
					SetSprite(susie, "spr_su_lookup_side");
				}
				else if (AtLine(11))
				{
					PlayAnimation(susie, "Embarrassed");
				}
				else if (AtLine(12))
				{
					PlayAnimation(susie, "idle");
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(14))
				{
					SetSprite(susie, "spr_su_shrug_unhappy", flipX: true);
				}
				else if (AtLine(15))
				{
					ChangeDirection(noelle, Vector2.up);
				}
				else if (AtLine(17))
				{
					ChangeDirection(noelle, Vector2.left);
					susie.EnableAnimator();
					susie.GetComponent<SpriteRenderer>().flipX = false;
				}
				else if (AtLine(20))
				{
					gm.StopMusic(60f);
					ChangeDirection(noelle, Vector2.right);
				}
				else if (AtLine(21))
				{
					SetSprite(susie, "spr_su_point_right_unhappy");
				}
				else if (AtLine(23))
				{
					susie.EnableAnimator();
				}
			}
			else
			{
				state = 16;
			}
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		switch (id)
		{
		case 0:
		{
			List<string> list = new List<string>();
			List<string> list2 = new List<string>();
			if (index == Vector2.left)
			{
				dessStart = 1;
				dessHumanChoice = true;
				SetSprite(dess, "overworld/npcs/snowdin/spr_ds_peace");
				Util.GameManager().SetFlag(288, 1);
				list.AddRange(new string[4] { "* 啊哈！！！^05\n* 所以人类都是时空旅行者！", "* 哈？", "* 哦，^05这是谣言\n  我听说了。", "* Alphys的老助手试图\n  证明人类拥有篡改时间\n  的力量。" });
				list2.AddRange(new string[4] { "dessut_excited", "dessut_confused", "dessut_embarrassed", "dessut_thoughtful" });
			}
			else
			{
				SetSprite(dess, "overworld/npcs/snowdin/spr_ds_confused");
				list.AddRange(new string[3] { "* 确定吗...？", "* 因为我听过一个传言\n  说人类是时间旅行者。", "* 显然，这源于Alphys的\n  老助手尝试做的某件事。" });
				list2.AddRange(new string[3] { "dessut_confused_think", "dessut_confused", "dessut_confused" });
			}
			list.AddRange(new string[4] { "* 不管那个助理是谁，^05\n  但我猜那只是谣言！", "* 不过...^05 我想这\n  并不能解释，^05\n  呃...", "* 有个人看起来像成年版Noel。", "* 呃，^05随便！！！" });
			list2.AddRange(new string[4] { "dessut_excited", "dessut_confused", "dessut_confused_think", "dessut_murderous_side" });
			StartText(list.ToArray(), new string[1] { "snd_txtdes_ut" }, new int[1], list2.ToArray(), 0);
			state = 5;
			frames = 0;
			break;
		}
		case 1:
			if (index == Vector2.left)
			{
				gm.SetFlag(289, 1);
				StartText(new string[5] { "* What,^05 like that silly\n  rumor Dess talks about?", "* She likes talking\n  about it to everyone!", "* At least it's not\n  super weird.", "* Like the one where\n  the royal scientist has\n  zombies in her basement.", "* Fahaha!" }, new string[1] { "snd_txtnoe_ut" }, new int[1], new string[5] { "nl_curious", "nl_confused_side", "nl_weird", "nl_happy", "nl_playful" }, 0);
			}
			else if (index == Vector2.right)
			{
				gm.SetFlag(289, 2);
				StartText(new string[7] { "* ...^10 What about being\n  human?", "* I know Dess wants\n  to meet one,^05 but...", "* They seem so scary!", "* I think it's because\n  of that silly time\n  travel rumor,^05 but...", "* I don't think it'd\n  be worth it.", "* But I mean...", "* You aren't a human,^05\n  right?" }, new string[1] { "snd_txtnoe_ut" }, new int[1], new string[7] { "nl_confused", "nl_confused_side", "nl_weird", "nl_curious", "nl_thinking", "nl_thinking", "nl_confused" }, 0);
			}
			else if (index == Vector2.up)
			{
				gm.SetFlag(289, 3);
				StartText(new string[5] { "* ...^10 Really?", "* She doesn't really\n  play guitar anymore.", "* She's really good,^05 but...", "* She stopped playing\n  as much after our\n  dad fell down.", "* So I bet you're\n  lying!" }, new string[1] { "snd_txtnoe_ut" }, new int[1], new string[5] { "nl_confused", "nl_confused_side", "nl_weird", "nl_thinking", "nl_playful" }, 0);
			}
			else
			{
				StartText(new string[3] { "* 确定吗...？", "* I thought I heard\n  my name when you\n  were talking.", "* What's so interesting\n  about me?" }, new string[1] { "snd_txtnoe_ut" }, new int[1], new string[3] { "nl_thinking", "nl_curious", "nl_weird" }, 0);
			}
			state = 8;
			frames = 0;
			break;
		}
		selecting = false;
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		fade.FadeIn(0, Color.black);
		gm.StopMusic();
		gm.SetFlag(283, 1);
		GameObject.Find("Black").GetComponent<SpriteRenderer>().enabled = true;
		gm.HealAll(99);
		RevokePlayerControl();
		kris.transform.position = new Vector3(2f, -1.8333f);
		SetSprite(kris, "spr_kr_couch_sleep");
		susie.transform.position = new Vector3(10f, 0f);
		noelle.transform.position = new Vector3(10f, 0f);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		noel = GameObject.Find("Noel").GetComponent<Animator>();
		dess = GameObject.Find("Dess").GetComponent<Animator>();
		noel.transform.position = new Vector3(-0.15f, -1.81f);
		dess.transform.position = new Vector3(0.32f, -0.16f);
		Resources.Load<AudioClip>("music/mus_youngdess");
		ChangeDirection(noel, Vector2.up);
		StartText(new string[3] { "* 他们怎么还没醒啊...？", "* 我知道，^05是吧？^05\n* 他们都昏过去了。", "* 我很好奇谁会先醒..." }, new string[3] { "snd_txtnoe_ut", "snd_txtdes_ut", "snd_txtdes_ut" }, new int[1], new string[3] { "", "", "" }, 1);
	}
}

