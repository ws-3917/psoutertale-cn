using System.Collections.Generic;
using UnityEngine;

public class FirstFeralPostCutscene : CutsceneBase
{
	private Animator feraldrake;

	private int endState;

	private int rememberance;

	private int posing;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if ((state == 0 || state == 1) && !txt)
		{
			bool flag = false;
			if (state == 0)
			{
				frames++;
				if (frames == 1)
				{
					SetSprite(susie, "spr_su_freaked");
					SetSprite(noelle, "spr_no_surprise");
					PlaySFX("sounds/snd_jump");
					PlayAnimation(feraldrake, "Walk", 2f);
					GameObject.Find("LadderPart1").transform.position = feraldrake.transform.position;
				}
				feraldrake.transform.position = new Vector3(20f, Mathf.Lerp(-4.37f, 3.41f, (float)frames / 20f));
				if (frames == 20)
				{
					PlayAnimation(susie, "idle");
					PlayAnimation(noelle, "idle");
					ChangeDirection(kris, Vector2.up);
					ChangeDirection(susie, Vector2.up);
					ChangeDirection(noelle, Vector2.up);
				}
				if (frames == 30)
				{
					PlaySFX("sounds/snd_escaped");
				}
				if (frames >= 60)
				{
					flag = true;
				}
			}
			else if (state == 1)
			{
				if (frames == 0)
				{
					frames++;
					GameObject.Find("LadderPart1").transform.position = feraldrake.transform.position;
					ChangeDirection(feraldrake, Vector2.down);
					PlayAnimation(feraldrake, "Walk", 0.75f);
				}
				if (feraldrake.transform.position.y > -5.55f)
				{
					MoveTo(feraldrake, new Vector3(20f, -5.55f), 4f);
				}
				else if (feraldrake.transform.position.x < 25f)
				{
					MoveTo(feraldrake, new Vector3(25f, -5.55f), 4f);
					ChangeDirection(feraldrake, Vector2.right);
				}
				else
				{
					frames++;
					if (frames == 30)
					{
						flag = true;
					}
				}
			}
			if (flag)
			{
				Object.Destroy(feraldrake.gameObject);
				ChangeDirection(kris, Vector2.left);
				ChangeDirection(noelle, Vector2.right);
				if (rememberance >= 8 && !gm.NoelleInParty())
				{
					ChangeDirection(susie, Vector2.right);
					StartText(new string[3] { "* You spared them,^05 huh?", "* That's cool and all,^05\n  but like.", "* 你着什么急啊？？？" }, new string[1] { "snd_txtsus" }, new int[1], new string[3] { "su_neutral", "su_side", "su_angry" });
				}
				else
				{
					SetSprite(susie, "spr_su_wtf");
					StartText(new string[1] { "* 你着什么急啊？？？" }, new string[1] { "snd_txtsus" }, new int[1], new string[1] { "su_angry" });
				}
				state = 3;
			}
		}
		else if (state == 2 && !txt)
		{
			frames++;
			if (frames == 30)
			{
				ChangeDirection(kris, Vector2.left);
				ChangeDirection(noelle, Vector2.right);
				if (rememberance < 4)
				{
					ChangeDirection(susie, Vector2.right);
					StartText(new string[2] { "* You sure we needed\n  to kill them?", "* They seemed more confused\n  than anything." }, new string[1] { "snd_txtsus" }, new int[1], new string[2] { "su_annoyed", "su_side" });
				}
				else
				{
					StartText(new string[3]
					{
						(rememberance >= 8) ? "* Should've expected that\n  to happen." : "* Y'know,^05 that seems about\n  right.",
						"* But uhh...",
						"* They seemed to come\n  to their senses when\n  we hit them."
					}, new string[1] { "snd_txtsus" }, new int[1], new string[3] { "su_annoyed", "su_side", "su_side_sweat" });
				}
				state = 3;
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (endState == 1)
				{
					if (AtLine(2))
					{
						ChangeDirection(susie, Vector2.up);
					}
				}
				else if (!gm.NoelleInParty() && AtLine(3))
				{
					SetSprite(susie, "spr_su_wtf");
				}
				return;
			}
			PlayAnimation(susie, "idle");
			if (gm.NoelleInParty())
			{
				ChangeDirection(susie, Vector2.up);
				StartText(new string[4]
				{
					((int)gm.GetFlag(172) == 1) ? "* They could be in\n  a feral state." : "* 你认为是森林让他们变得\n  野蛮的吗？",
					"* 瞅着像。",
					"* 呃，^05我想我们应该注意点。",
					"* ...等下，^05什么玩意这是？"
				}, new string[2] { "snd_txtnoe", "snd_txtsus" }, new int[1], new string[4]
				{
					((int)gm.GetFlag(172) == 1) ? "no_depressedx" : "no_shocked",
					"su_inquisitive",
					"su_side_sweat",
					"su_surprised"
				});
			}
			else
			{
				ChangeDirection(susie, Vector2.right);
				StartText(new string[5] { "* ...", "* Eh,^05 kinda seems par\n  for the course here.", "* But uhh...", "* I dunno,^05 they seemed\n  a bit crazier than\n  the other people here.", "* ...等下，^05什么玩意这是？" }, new string[1] { "snd_txtsus" }, new int[1], new string[5] { "su_neutral", "su_annoyed", "su_side", "su_smirk_sweat", "su_surprised" });
			}
			state = 4;
			frames = 0;
		}
		else if (state == 4)
		{
			if ((bool)txt)
			{
				if (gm.NoelleInParty())
				{
					if (AtLine(2))
					{
						ChangeDirection(susie, Vector2.left);
					}
					else if (AtLine(3))
					{
						ChangeDirection(susie, Vector2.down);
					}
				}
				else if (AtLine(2))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(3))
				{
					ChangeDirection(susie, Vector2.right);
				}
				else if (AtLine(5))
				{
					ChangeDirection(susie, Vector2.down);
				}
				return;
			}
			if (frames == 0)
			{
				frames++;
				SetMoveAnim(susie, isMoving: true);
				ChangeDirection(noelle, Vector2.down);
				ChangeDirection(kris, Vector2.down);
			}
			if (MoveTo(susie, new Vector3(20f, -3.2f), 4f))
			{
				return;
			}
			frames++;
			if (frames == 2)
			{
				SetMoveAnim(susie, isMoving: false);
			}
			if (frames == 10)
			{
				PlaySFX("sounds/snd_wing");
				SetSprite(susie, "spr_su_hold_ladder");
				Object.Destroy(GameObject.Find("LadderPart1"));
			}
			if (frames == 55)
			{
				if (gm.NoelleInParty())
				{
					StartText(new string[6] { "* 这是个横过来的“工”。", "* 我更倾向于这是梯子的\n  一部分，^05Susie。", "* ...^05哦好吧。", "* 唔，^05我想我可以一直\n  拿着这个。", "* （Susie拿到了梯子碎片。）", "* 我们走吧。" }, new string[6] { "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_text", "snd_txtsus" }, new int[1], new string[6] { "su_surprised", "no_happy", "su_inquisitive", "su_flustered", "", "su_neutral" });
				}
				else
				{
					StartText(new string[6] { "* 这是个横过来的“工”。", "* Why would they be\n  holding onto this?", "* I guess I can hold\n  it for ya.", "* (Susie got the \"H\".)", "* Let's head over to\n  that rabbit house.", "* Remember,^10 <color=#FFFF00FF>two rights\n  from here</color>." }, new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_text", "snd_txtsus", "snd_txtsus" }, new int[1], new string[6] { "su_surprised", "su_side", "su_smirk", "", "su_neutral", "su_smile_side" });
				}
				state = 5;
				frames = 0;
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
				if (gm.NoelleInParty())
				{
					if (AtLine(2) && (int)gm.GetFlag(172) == 0)
					{
						SetSprite(noelle, "spr_no_laugh_0");
					}
					else if (AtLine(3))
					{
						SetSprite(susie, "spr_su_hold_ladder_sus");
					}
					else if (AtLine(4))
					{
						PlayAnimation(susie, "Embarrassed");
					}
					else if (AtLine(5))
					{
						PlayAnimation(noelle, "idle");
						PlayAnimation(susie, "idle");
						ChangeDirection(susie, Vector2.up);
					}
				}
				else if (AtLine(2))
				{
					SetSprite(susie, "spr_su_hold_ladder_sus");
				}
				else if (AtLine(3))
				{
					PlayAnimation(susie, "idle");
					ChangeDirection(susie, Vector2.up);
				}
			}
			else if (!MoveTo(cam, cam.GetClampedPos(), 3f))
			{
				RestorePlayerControl();
				gm.PlayMusic("zoneMusic");
				gm.SetCheckpoint(87, new Vector3(20f, 1.85f));
				Object.Instantiate(Resources.Load<GameObject>("overworld/npcs/StalkerFlowey"), new Vector3(24.25f, -8.41f), Quaternion.identity);
				EndCutscene();
			}
		}
	}

	private void LateUpdate()
	{
		if ((bool)feraldrake && feraldrake.enabled)
		{
			Sprite sprite = Resources.Load<Sprite>("overworld/npcs/enemies/" + feraldrake.GetComponent<SpriteRenderer>().sprite.name + "_red");
			if (sprite != null)
			{
				feraldrake.GetComponent<SpriteRenderer>().sprite = sprite;
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		endState = int.Parse(par[0].ToString());
		rememberance = (int)gm.GetFlag(87);
		feraldrake = GameObject.Find("Feraldrake").GetComponent<Animator>();
		feraldrake.transform.position = new Vector3(20f, -4.37f);
		PlayAnimation(feraldrake, "Walk", 0f);
		PlayAnimation(susie, "idle");
		PlayAnimation(noelle, "idle");
		if (gm.NoelleInParty())
		{
			kris.transform.position = new Vector3(20.85f, -2.745f);
			susie.transform.position = new Vector3(20f, -2.54f);
			noelle.transform.position = new Vector3(19.09f, -2.54f);
		}
		else
		{
			kris.transform.position = new Vector3(20.55f, -2.745f);
			susie.transform.position = new Vector3(19.55f, -2.54f);
		}
		if (endState == 1)
		{
			GameObject.Find("LadderPart1").transform.position = feraldrake.transform.position;
			Object.Destroy(feraldrake.gameObject);
			state = 2;
			return;
		}
		if ((int)gm.GetFlag(12) == 1)
		{
			WeirdChecker.Abort(gm);
		}
		List<string> list = new List<string>();
		List<string> list2 = new List<string>();
		List<string> list3 = new List<string>();
		if ((int)gm.GetSessionFlag(9) == 1)
		{
			list.AddRange(new string[7] { "* ...", "* 嘿，^05醒醒！！！", "* ...^05咋...^05咋了...？", "* 我刚才是在做梦吗...？", "* 你可别说话了。&5\n* 你刚刚还想给咱吃了呢。", "* 所以到底特么怎的了？", "* 让我捋捋..." });
			list2.AddRange(new string[7] { "snd_txtsus", "snd_txtsus", "snd_text", "snd_text", "snd_txtsus", "snd_txtsus", "snd_text" });
			list3.AddRange(new string[7] { "su_neutral", "su_angry", "", "", "su_annoyed", "su_annoyed", "" });
		}
		else
		{
			list.AddRange(new string[2] { "* Oh my goodness,^05 everything\n  feels so much clearer...", "* Okay,^05 what's the deal?" });
			list2.AddRange(new string[2] { "snd_text", "snd_txtsus" });
			list3.AddRange(new string[2] { "", "su_annoyed" });
		}
		list.AddRange(new string[4] { "* 我和几个朋友来找Snowy。", "* 但是大家都逐渐失了智。\n* 我也是！", "* ^05哦对了，^05Snowy！！^05\n* 你有看见Snowy吗？？？", "* 怎么说呢，^05呃..." });
		list2.AddRange(new string[4] { "snd_text", "snd_text", "snd_text", "snd_txtsus" });
		list3.AddRange(new string[4] { "", "", "", "su_side" });
		if ((int)gm.GetFlag(181) != 2 || (int)gm.GetFlag(182) > 1)
		{
			list.AddRange(new string[4] { "* Haven't found em.", "* 哦...", "* Well...", "* I guess I'll head back to\n  town,^05 then..." });
			list2.AddRange(new string[2] { "snd_txtsus", "snd_text" });
			list3.AddRange(new string[2] { "su_dejected", "" });
			state = 1;
		}
		else
		{
			list.AddRange(new string[3] { "* 我认为他在梯子上面\n  一些纸板的附近。", "* 真假？？？", "* 失礼！！" });
			list2.AddRange(new string[2] { "snd_txtsus", "snd_text" });
			list3.AddRange(new string[2] { "su_smirk", "" });
		}
		StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray());
	}
}

