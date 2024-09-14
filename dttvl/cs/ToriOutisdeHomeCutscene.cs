using System;
using UnityEngine;

public class ToriOutisdeHomeCutscene : CutsceneBase
{
	private Animator toriel;

	private int torielPosIndex;

	private int edge;

	private bool selecting;

	private bool musicStart;

	private bool hardmode;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			frames++;
			cam.transform.position = Vector3.Lerp(Vector3.zero, cam.GetClampedPos(), (float)frames / 150f);
			if (frames == 60)
			{
				StartText(new string[1] { hardmode ? "* ...if I could just convince\n  them to not..." : "* ...如果这个魔法真的能\n  起效的话，^15那么我就..." }, new string[3] { "snd_txttor", "snd_txtsus", "snd_txtsus" }, new int[18]
				{
					1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0
				}, new string[3] { "", "su_side_sweat", "su_smile_sweat" }, 0);
			}
			kris.transform.position = Vector3.Lerp(new Vector3(0f, -17.625f), new Vector3(0f, -14.9f), (float)(frames - 130) / 45f);
			susie.transform.position = Vector3.Lerp(new Vector3(0f, -18.51f), new Vector3(0f, -16.01f), (float)(frames - 130) / 45f);
			if (frames >= 175)
			{
				kris.GetComponent<Animator>().SetBool("isMoving", value: false);
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
				if (!txt)
				{
					if ((int)gm.GetFlag(13) < 3)
					{
						state = 1;
						string[] array = new string[7] { "* 呃，^10嗨，^05Dreemurr女士。", "* 哦！\n^10* 你好Kris，^10还有Susie！", "* 你们能够毫发无损\n  地到达这里，真是太好了。", "* Hell yeah,^05 we did!", "* 我的家就在前面。", "* 请跟我一起来。", "* 我给你们准备了个惊喜。" };
						string[] array2 = new string[7] { "su_side_sweat", "tori_blush", "tori_happy", "su_happy", "tori_neutral", "tori_neutral", "tori_neutral" };
						if (hardmode)
						{
							array[1] = "* Oh!\n^10* Hello,^05 you two!";
							array[2] = "* Susie,^05 I knew that\n  I could trust you\n  with the human child.";
							array[3] = "* Heh,^05 why wouldn't you?";
						}
						else if ((int)gm.GetFlag(13) == 2)
						{
							array[4] = "* ...Kris?\n* You don't look very\n  well,^10 dear.";
							array2[4] = "tori_worry";
						}
						if (gm.GetHP(0) != gm.GetMaxHP(0) || gm.GetHP(1) != gm.GetMaxHP(1))
						{
							array[3] = (hardmode ? "* (If only she knew.)" : "* （呃，^05哪里毫发无损了？？？）");
							array2[3] = "su_smirk_sweat";
						}
						StartText(array, new string[7] { "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], array2, 0);
					}
					else if (hardmode)
					{
						StartText(new string[9] { "* 呃，^10嗨，^05Dreemurr女士。", "* Oh!\n^10* Hello,^05 you two!", "* ... Huh?\n* My child,^05 you don't look\n  too well.", "* Is everything alright,^05\n  dear?", "* ...", "* ...", "* Maybe,^05 uhhh,^05 they need\n  to rest.", "* 这样啊！^10\n* 那你为什么不进来呢？", "* 我给你们准备了个惊喜。" }, new string[9] { "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor" }, new int[18], new string[9] { "su_side_sweat", "tori_blush", "tori_worry", "tori_worry", "tori_worry", "tori_weird", "su_smile_sweat", "tori_blush", "tori_neutral" }, 0);
						state = 1;
						edge++;
					}
					else
					{
						StartText(new string[4] { "* 呃，^10嗨，^05Dreemurr女士。", "* 哦！\n^10* 你好Kris，^10还有Susie！", "* 噢，Kris！^10\n* 你看起来很痛苦。", "* 发生什么了，^10亲爱的？" }, new string[4] { "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[7] { "su_side_sweat", "tori_blush", "tori_worry", "tori_worry", "tori_neutral", "tori_neutral", "tori_neutral" }, 0);
						txt.EnableSelectionAtEnd();
						state = 3;
					}
				}
			}
		}
		if (state == 1)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 2 && !musicStart)
				{
					if ((int)gm.GetFlag(13) != 3)
					{
						gm.PlayMusic("music/mus_toriel", 0.75f);
					}
					musicStart = true;
					toriel.Play("WalkDown");
				}
			}
			else if (torielPosIndex == 0)
			{
				toriel.SetFloat("speed", 1f);
				toriel.Play("WalkRight");
				toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(2.94f, -13.22f), 1f / 6f);
				if (toriel.transform.position == new Vector3(2.94f, -13.22f))
				{
					torielPosIndex = 1;
				}
			}
			else if (torielPosIndex == 1)
			{
				toriel.Play("WalkUp");
				toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(2.94f, -6f), 1f / 6f);
				if (toriel.transform.position == new Vector3(2.94f, -6f))
				{
					gm.StopMusic(60f);
					toriel.GetComponent<SpriteRenderer>().enabled = false;
					state = 2;
					if (hardmode && edge > 0)
					{
						StartText(new string[2] { "* Now that I think\n  about it,^05 you could\n  use some shut-eye.", "* Yeah,^05 you might just\n  be going crazy from\n  this place..." }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_neutral", "su_inquisitive" }, 0);
					}
					else if (edge == 1)
					{
						StartText(new string[3] { "* 实话实说，^05 Kris。", "* 你需要休息。", "* 她可能有那啥...\n  ^10为我们做的卧室。" }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_side", "su_neutral", "su_smile_sweat" }, 0);
					}
					else if (edge == 2)
					{
						StartText(new string[3] { "* You okay,^05 Kris?", "* You were shaking.", "* Why don't you go\n  to sleep when we\n  go inside?" }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_side_sweat", "su_side", "su_smirk" }, 0);
					}
					else
					{
						StartText(new string[3] { "* 一个惊喜...？", "* 我打赌他说的惊喜就是\n  给我们做了个派还是别的\n  什么东西。", "* 要是她花这么长时间却\n  只做了这点东西那可就\n  算不上惊喜了。" }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_surprised", "su_confident", "su_teeth_eyes" }, 0);
					}
				}
			}
		}
		if (state == 2 && !txt)
		{
			gm.PlayMusic("zoneMusic");
			kris.GetComponent<BoxCollider2D>().enabled = true;
			kris.SetSelfAnimControl(setAnimControl: true);
			susie.SetSelfAnimControl(setAnimControl: true);
			cam.SetFollowPlayer(follow: true);
			EndCutscene();
		}
		if (state == 3 && (bool)txt)
		{
			if (txt.GetCurrentStringNum() == 2)
			{
				toriel.Play("WalkDown");
			}
			if (txt.CanLoadSelection() && !selecting)
			{
				InitiateDeltaSelection();
				select.SetupChoice(Vector2.left, "我想歇歇", Vector3.zero);
				select.SetupChoice(Vector2.right, "真是\n爽翻了", new Vector3(-90f, 0f));
				select.SetCenterOffset(new Vector2(0f, 0f));
				select.Activate(this, 0, txt.gameObject);
				selecting = true;
			}
		}
		if (state == 4 && (bool)txt && txt.CanLoadSelection() && !selecting)
		{
			InitiateDeltaSelection();
			select.SetupChoice(Vector2.left, "我不知道", Vector3.zero);
			select.SetupChoice(Vector2.right, "我变得\n更强了", new Vector3(-90f, 0f));
			select.SetCenterOffset(new Vector2(0f, 0f));
			select.Activate(this, 0, txt.gameObject);
			selecting = true;
		}
		if (state == 5 && (bool)txt && txt.CanLoadSelection() && !selecting)
		{
			InitiateDeltaSelection();
			select.SetupChoice(Vector2.left, "我累坏了", Vector3.zero);
			select.SetupChoice(Vector2.right, "咱把他们\n都杀了", new Vector3(-80f, 0f));
			select.SetCenterOffset(new Vector2(0f, 0f));
			select.Activate(this, 0, txt.gameObject);
			selecting = true;
		}
		if (state == 6)
		{
			if (!txt)
			{
				frames++;
				if (frames <= 3)
				{
					int num = ((frames % 2 == 0) ? 1 : (-1));
					int num2 = 3 - frames;
					kris.transform.position = new Vector3(0f, -14.9f) + new Vector3((float)(num2 * num) / 24f, 0f);
				}
				if (frames >= 10)
				{
					susie.GetComponent<Animator>().SetBool("isMoving", value: true);
					susie.GetComponent<Animator>().SetFloat("speed", 2f);
					susie.transform.position = Vector3.Lerp(new Vector3(0f, -16.01f), new Vector3(1.43f, -14.82f), (float)(frames - 10) / 20f);
				}
				if (frames == 30)
				{
					susie.GetComponent<Animator>().SetBool("isMoving", value: false);
					susie.ChangeDirection(Vector2.left);
					StartText(new string[2] { "* Kris，^05你他喵的\n  在嘀咕什么?", "* 我不觉得她" }, new string[4] { "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor" }, new int[18], new string[7] { "su_annoyed", "su_annoyed", "tori_worry", "tori_worry", "tori_neutral", "tori_neutral", "tori_neutral" }, 0);
				}
			}
			else if (txt.GetCurrentStringNum() == 2 && !txt.IsPlaying())
			{
				state = 7;
				frames = 0;
				kris.GetComponent<Animator>().SetFloat("speed", 1f);
				UnityEngine.Object.Destroy(txt.gameObject);
			}
		}
		if (state == 7)
		{
			frames++;
			if (frames == 30)
			{
				toriel.Play("Shocked");
			}
			if (frames >= 38 && frames <= 41)
			{
				int num3 = ((frames % 2 == 0) ? 1 : (-1));
				int num4 = 41 - frames;
				kris.transform.position = new Vector3(0f, -14.9f) + new Vector3((float)(num4 * num3) / 24f, 0f);
			}
			if (frames >= 48 && frames <= 51)
			{
				int num5 = ((frames % 2 == 0) ? 1 : (-1));
				int num6 = 51 - frames;
				kris.transform.position = new Vector3(0f, -14.9f) + new Vector3((float)(num6 * num5) / 24f, 0f);
			}
			if (frames >= 58 && frames <= 61)
			{
				int num7 = ((frames % 2 == 0) ? 1 : (-1));
				int num8 = 61 - frames;
				kris.transform.position = new Vector3(0f, -14.9f) + new Vector3((float)(num8 * num7) / 24f, 0f);
			}
			if (frames >= 64 && frames <= 67)
			{
				int num9 = ((frames % 2 == 0) ? 1 : (-1));
				int num10 = 67 - frames;
				kris.transform.position = new Vector3(0f, -14.9f) + new Vector3((float)(num10 * num9) / 24f, 0f);
				susie.transform.position = new Vector3(1.43f, -14.82f) + new Vector3((float)(num10 * num9) / 24f, 0f);
			}
			if (frames == 38 || frames == 48 || frames == 58)
			{
				PlaySFX("sounds/snd_bump");
			}
			if (frames == 64)
			{
				UnityEngine.Object.Instantiate(Resources.Load<GameObject>("vfx/SOULRemoveEffect"), new Vector3(-0.031f, -15f), Quaternion.identity);
				PlaySFX("sounds/snd_grab");
				susie.DisableAnimator();
				susie.SetSprite("spr_su_surprise_right");
				susie.GetComponent<SpriteRenderer>().flipX = true;
			}
			if (frames == 90)
			{
				kris.GetComponent<Animator>().Play("SoulThrow_Left");
			}
			if (frames == 92)
			{
				PlaySFX("sounds/snd_heavyswing");
			}
			if (frames == 94)
			{
				GameObject.Find("FakeSOUL").transform.position = kris.transform.position;
				GameObject.Find("FakeSOUL").GetComponent<Animator>().Play("Yeet", 0, 0f);
			}
			if (frames == 96)
			{
				PlaySFX("sounds/snd_hurt");
			}
			if (frames == 96)
			{
				cam.transform.position += new Vector3(0.1f, 0.1f);
			}
			if (frames == 98)
			{
				cam.transform.position -= new Vector3(0.15f, 0.15f);
			}
			if (frames == 100)
			{
				cam.transform.position += new Vector3(0.05f, 0.05f);
			}
			if (frames >= 110)
			{
				float num11 = frames - 110;
				if (num11 == 0f)
				{
					string text = ((gm.GetWeapon(0) == 3) ? "Pencil" : "Knife");
					kris.GetComponent<Animator>().Play("Lunge" + text);
				}
				if (num11 >= 6f)
				{
					if (num11 == 6f)
					{
						PlaySFX("sounds/snd_weaponpull");
					}
					kris.transform.position = new Vector3(Mathf.Lerp(0f, -2.3f, (num11 - 6f) / 15f), Mathf.Sin(Mathf.Lerp(0f, 170f, (num11 - 6f) / 15f) * ((float)Math.PI / 180f)) - 14.9f);
				}
				if (num11 == 22f)
				{
					cam.transform.position += new Vector3(0.1f, 0.1f);
					gm.PlayGlobalSFX("sounds/snd_hurt");
					gm.Death(0);
				}
			}
		}
		if (state != 8)
		{
			return;
		}
		if (!txt)
		{
			frames++;
			if (frames == 1)
			{
				gm.Death();
			}
		}
		else if (txt.GetCurrentStringNum() == 3)
		{
			kris.ChangeDirection(Vector2.down);
			susie.DisableAnimator();
			susie.SetSprite("spr_su_shrug");
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		selecting = false;
		if (state == 3)
		{
			if (index == Vector2.right)
			{
				edge = 1;
				gm.StopMusic();
				StartText(new string[1] { "* 嗯？^10\n* 你这是什么意思？" }, new string[4] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[7] { "tori_worry", "tori_neutral", "tori_worry", "tori_worry", "tori_neutral", "tori_neutral", "tori_neutral" }, 0);
				state = 4;
				txt.EnableSelectionAtEnd();
			}
			else
			{
				StartText(new string[2] { "* 这样啊！^10\n* 那你为什么不进来呢？", "* 我给你们准备了个惊喜。" }, new string[4] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[7] { "tori_blush", "tori_neutral", "tori_worry", "tori_worry", "tori_neutral", "tori_neutral", "tori_neutral" }, 0);
				state = 1;
			}
		}
		else if (state == 4)
		{
			if (index == Vector2.right)
			{
				edge = 2;
				gm.PlayMusic("music/mus_prebattle1", 0.25f);
				StartText(new string[2]
				{
					"* 你到底在说什么啊...?",
					hardmode ? "* (I swear,^05 if you're\n  gonna say what I think\n  you're gonna say...)" : "* （Kris,^05现在不是\n  发疯的时候。）"
				}, new string[4] { "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor" }, new int[18], new string[7] { "tori_weird", "su_side_sweat", "tori_worry", "tori_worry", "tori_neutral", "tori_neutral", "tori_neutral" }, 0);
				state = 5;
				txt.EnableSelectionAtEnd();
			}
			else
			{
				StartText(new string[2]
				{
					hardmode ? "* My child,^10 you might\n  just be tired." : "* Kris，^10你可能只是累了。",
					"* 跟我来。^10\n* 我有个惊喜给你。"
				}, new string[4] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[7] { "tori_worry", "tori_neutral", "tori_worry", "tori_worry", "tori_neutral", "tori_neutral", "tori_neutral" }, 0);
				state = 1;
			}
		}
		else
		{
			if (state != 5)
			{
				return;
			}
			gm.StopMusic();
			if (index == Vector2.right)
			{
				if (hardmode)
				{
					toriel.Play("Shocked");
					state = 8;
					frames = 0;
					StartText(new string[4] { "* ...", "* Y-^05you mean you...", "* Well,^05 well,^05 well.\n^05* Look who decided to\n  reveal themselves.", "* I warned you,^05 you <color=#FF0000FF>FREAK</color>." }, new string[4] { "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txtsus" }, new int[18], new string[4] { "tori_shocked", "tori_shocked", "su_depressed_smile", "su_teeth" }, 0);
				}
				else
				{
					frames = 0;
					state = 6;
					kris.GetComponent<Animator>().Play("RemoveSoul_WalkUp");
					kris.GetComponent<Animator>().SetFloat("speed", 0f);
					PlaySFX("sounds/snd_bump");
				}
			}
			else
			{
				StartText(new string[2] { "* ...", "* Why don't you two\n  follow me?" }, new string[4] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[7] { "tori_worry", "tori_worry", "tori_worry", "tori_worry", "tori_neutral", "tori_neutral", "tori_neutral" }, 0);
				state = 1;
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		if ((int)gm.GetFlag(51) == 1)
		{
			EndCutscene();
			return;
		}
		kris.GetComponent<BoxCollider2D>().enabled = false;
		base.StartCutscene(par);
		hardmode = (int)gm.GetFlag(108) == 1;
		gm.StopMusic(30f);
		gm.SetFlag(51, 1);
		kris.SetSelfAnimControl(setAnimControl: false);
		kris.ChangeDirection(Vector2.up);
		kris.GetComponent<Animator>().SetBool("isMoving", value: true);
		susie.SetSelfAnimControl(setAnimControl: false);
		susie.ChangeDirection(Vector2.up);
		susie.GetComponent<Animator>().SetBool("isMoving", value: true);
		toriel = GameObject.Find("Toriel").GetComponent<Animator>();
		toriel.transform.position = new Vector3(0f, -13.22f);
		toriel.Play("WalkUp");
		cam.SetFollowPlayer(follow: false);
		cam.transform.position = Vector3.zero;
	}
}

