using System.Collections.Generic;
using UnityEngine;

public class QCFirstCutscene : CutsceneBase
{
	private Animator qc;

	private bool noellePresent;

	private bool blood;

	private bool alt;

	private int susieMoveState;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && !txt)
		{
			frames++;
			if (qc.enabled)
			{
				if (!MoveTo(qc, new Vector3(-0.938f, 1.125f), 4f))
				{
					qc.enabled = false;
					SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit");
					PlaySFX("sounds/snd_wing");
				}
				else
				{
					ChangeDirection(qc, Vector2.up);
					SetMoveAnim(qc, isMoving: true);
				}
			}
			if (frames >= 10)
			{
				if (!MoveTo(kris, new Vector3(0.79f, -1.18f), 3f))
				{
					SetMoveAnim(kris, isMoving: false);
				}
				else
				{
					SetMoveAnim(kris, isMoving: true, 0.6f);
				}
			}
			if (frames >= 15 && noellePresent)
			{
				if (!MoveTo(noelle, new Vector3(-0.69f, -0.7f), 4f))
				{
					SetMoveAnim(noelle, isMoving: false);
				}
				else
				{
					SetMoveAnim(noelle, isMoving: true);
				}
			}
			if (frames >= 20)
			{
				if (frames == 20)
				{
					SetMoveAnim(susie, isMoving: true);
				}
				if (susieMoveState == 0 && !MoveTo(susie, new Vector3(1.33f, -2.4f), 4f))
				{
					susieMoveState = 1;
				}
				else if (susieMoveState == 1 && !MoveTo(susie, new Vector3(1.33f, -0.14f), 6f))
				{
					susieMoveState = 2;
					ChangeDirection(susie, Vector2.right);
				}
				else if (susieMoveState == 2 && !MoveTo(susie, new Vector3(1.96f, -0.14f), 6f) && susie.GetComponent<SpriteRenderer>().enabled)
				{
					susie.GetComponent<SpriteRenderer>().enabled = false;
					ChangeDirection(susie, Vector2.left);
					SetMoveAnim(susie, isMoving: false);
					string text = (noellePresent ? "0" : "1");
					SetSprite(GameObject.Find("toplayer").transform, "overworld/snow_objects/spr_bnuy_home_0_susie_" + text);
				}
			}
			if (frames != 90)
			{
				return;
			}
			List<string> list = new List<string>
			{
				"* 这可比黑暗森林好多了，\n  ^05是吧？",
				"* 是的没错。",
				"* 就是有点^05挤。",
				"* 恁几个为啥搁这地下住啊？",
				"* 简而言之，^05我们很久之前\n  还住在雪镇。",
				"* 那可不是什么好地方，\n  就现在地底世界的情况来说...",
				"* 但也能凑活住。",
				"* 直到有一天...\n  那两兄弟突然爆发...",
				"* 他们开始见谁杀谁。",
				"* 我知道杀戮在这里并不\n  罕见，^05但这次规模太过\n  壮大。",
				"* 甚至到了我们不得不\n  藏身于某个地方以避开\n  他们的地步。",
				"* 我仍在那里经营我的商店\n  以保证货源充足。",
				"* 呃，^05直到最近。",
				"* 咋了？",
				"* 一群发了疯的snowdrakes\n  突然在这底下袭击了我们。",
				"* 把梯子都拆成片了！",
				"* 我拿到了大部分碎片，^05\n  但我还是缺了几片。",
				"* 我还把我斧子落在商店了^05...",
				"* 从那时起我就一直被困在这里，\n  ^05想在尝试改变命运之前找到他们。",
				noellePresent ? "* 嗯，^05我们刚刚碰巧\n  拿到了一片。" : "* Oh,^05 umm...^10\n* I think I'm holding\n  onto one of them.",
				"* 显然有一只snowdrakes\n  正抓着它。",
				"* 真的吗？？？",
				"* 那可真不错，^05真的！",
				"* 我根本接近不了它们，^05\n  更不用说打中它们了。",
				"* 你能帮助我们找到其他碎片吗？",
				"* 呃，^05怎么说呢...",
				"* 我想咱们没得选了。",
				"* 我们正要去热域。",
				"* 那，^05就得拿到那些碎片了！",
				"* 但我想那可能\n  是一项艰巨的任务..."
			};
			List<string> list2 = new List<string>
			{
				"snd_text", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_text", "snd_text", "snd_text", "snd_text", "snd_text", "snd_text",
				"snd_text", "snd_text", "snd_text", "snd_txtsus", "snd_text", "snd_text", "snd_text", "snd_text", "snd_text", "snd_txtsus",
				"snd_txtsus", "snd_text", "snd_text", "snd_text", "snd_text", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_text", "snd_text"
			};
			List<string> list3 = new List<string>
			{
				"",
				"su_smile",
				"su_smile_sweat",
				"su_neutral",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"su_surprised",
				"",
				"",
				"",
				"",
				"",
				noellePresent ? "su_surprised" : "su_inquisitive",
				noellePresent ? "su_smile_side" : "su_smirk_sweat",
				"",
				"",
				"",
				"",
				"su_side_sweat",
				"su_smile_sweat",
				"su_neutral",
				"",
				""
			};
			if (noellePresent)
			{
				list.AddRange(new string[15]
				{
					"* ...^05其实，^05麻烦问一下...^05\n* 你是，呃，^05 <color=#FFFF00FF>Noel</color>女士吗？",
					"* 蛤？？？",
					"* 呃，^05是我...",
					"* 你比我想的长得快多了...",
					"* 你猜怎么着？\n* 我不能让你们白帮我。\n* 我可以让你们在这过夜。",
					"* 哎呀，^05我绝对会让你在\n  出发前先休息一下的！",
					blood ? "* Hey,^05 we needed to\n  take a break\n  anyway." : "* 呃，^05我想我们接受了。",
					"* 我想我们只有两间卧室可以睡...",
					"* 你们其中两个人得用一张床了。",
					alt ? "* ..." : "* ...!!!",
					alt ? "* Kris，^05你恐怕得自己睡\n  一张床了。" : "* Kris，^05你恐怕得自己睡\n  一张床了。",
					"* 怎的？？？",
					"* 我可不想挤一张床啊！！！",
					alt ? "* Susie..." : "* 你想让Kris抢走所有的被吗？",
					alt ? "* ...^05 Oh,^05 right...^05\n* Guess I will,^05 then." : "* ...^05好吧，^05成。^05\n* 我会跟Noelle一起睡的。"
				});
				list2.AddRange(new string[15]
				{
					"snd_text", "snd_txtnoe", "snd_txtnoe", "snd_text", "snd_text", "snd_text", "snd_txtsus", "snd_text", "snd_text", "snd_txtnoe",
					"snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus"
				});
				list3.AddRange(new string[15]
				{
					"",
					"no_shocked",
					"no_weird",
					"",
					"",
					"",
					blood ? "su_smile" : "su_inquisitive",
					"",
					"",
					alt ? "no_depressed" : "no_surprised_happy",
					alt ? "no_thinking" : "no_confused_side",
					"su_wtf",
					"su_angry",
					alt ? "no_mad" : "no_tease_finger",
					alt ? "su_inquisitive" : "su_flustered"
				});
				if (blood)
				{
					list.AddRange(new string[4] { "* But uhh,^05 Kris.", "* Don't think I forgot\n  about that talk.", "* We're talking after\n  we wake up.", "* Now let's go." });
					list2.AddRange(new string[4] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" });
					list3.AddRange(new string[4] { "su_neutral", "su_side", "su_annoyed", "su_side" });
				}
			}
			else
			{
				list.AddRange(new string[7] { "* Ms. <color=#FFFF00FF>Noel</color> is already upstairs\n  sleeping in the large bedroom.", "* One of y'all will need to\n  share with her.", "* 额...", "* ...", "* I guess I will.", "* Kris,^05 we're gonna have\n  that talk after we\n  wake up.", "* So you better sleep\n  well." });
				list2.AddRange(new string[7] { "snd_text", "snd_text", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" });
				list3.AddRange(new string[7] { "", "", "su_surprised", "su_side_sweat", "su_flustered", "su_neutral", "su_annoyed" });
			}
			StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray(), 1);
			state = 1;
			frames = 0;
			SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_4");
		}
		else
		{
			if (state != 1)
			{
				return;
			}
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() <= 30)
				{
					if (AtLine(5) || AtLine(8) || AtLine(20) || AtLine(29))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_1");
					}
					else if (AtLine(6) || AtLine(11) || AtLine(17))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_3");
					}
					else if (AtLine(9) || AtLine(28))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_2");
					}
					else if (AtLine(10) || AtLine(18))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_5");
					}
					else if (AtLine(15))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_8");
					}
					else if (AtLine(21))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_9");
					}
					else if (AtLine(23))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_4");
					}
					else if (AtLine(14))
					{
						SetSprite(GameObject.Find("toplayer").transform, "overworld/snow_objects/spr_bnuy_home_0_susie_1");
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_1");
					}
				}
				else if (noellePresent)
				{
					if (AtLine(31))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_6");
					}
					else if (AtLine(35))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_7");
					}
					else if (AtLine(36))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_4");
					}
					else if (AtLine(38))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_1");
					}
					else if (AtLine(39))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_3");
					}
					else if (AtLine(41))
					{
						ChangeDirection(noelle, Vector2.right);
						ChangeDirection(kris, Vector2.left);
					}
					else if (AtLine(42))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_9");
						ChangeDirection(kris, Vector2.right);
						SetSprite(GameObject.Find("toplayer").transform, "overworld/snow_objects/spr_bnuy_home_0_toplayer");
						susie.GetComponent<SpriteRenderer>().enabled = true;
						SetSprite(susie, "spr_su_wtf", flipX: true);
					}
					else if (AtLine(44))
					{
						if (alt)
						{
							SetSprite(noelle, "spr_no_blush");
						}
						else
						{
							ChangeDirection(noelle, Vector2.up);
						}
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_3");
					}
					else if (AtLine(45))
					{
						SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_1");
						susie.GetComponent<SpriteRenderer>().flipX = false;
						PlayAnimation(susie, "Embarrassed");
						ChangeDirection(susie, Vector2.up);
					}
					if (blood && AtLine(46))
					{
						susie.UseUnhappySprites();
						noelle.EnableAnimator();
						noelle.UseUnhappySprites();
						PlayAnimation(susie, "idle");
						ChangeDirection(susie, Vector2.left);
						ChangeDirection(kris, Vector2.right);
						ChangeDirection(noelle, Vector2.right);
					}
				}
				else if (AtLine(31))
				{
					SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_2");
				}
				else if (AtLine(32))
				{
					SetSprite(qc, "overworld/npcs/underfell/spr_qc_uf_sit_1");
				}
				else if (AtLine(33))
				{
					ChangeDirection(kris, Vector2.right);
					SetSprite(GameObject.Find("toplayer").transform, "overworld/snow_objects/spr_bnuy_home_0_toplayer");
					susie.GetComponent<SpriteRenderer>().enabled = true;
				}
				else if (AtLine(34))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(35))
				{
					PlayAnimation(susie, "Embarrassed");
				}
				else if (AtLine(36))
				{
					PlayAnimation(susie, "idle");
					ChangeDirection(susie, Vector2.left);
				}
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					PlayAnimation(susie, "walk");
					ChangeDirection(susie, Vector2.up);
					ChangeDirection(noelle, Vector2.right);
					noelle.EnableAnimator();
					SetMoveAnim(kris, isMoving: true);
					SetMoveAnim(susie, isMoving: true);
					SetMoveAnim(noelle, isMoving: true);
				}
				MoveTo(kris, new Vector3(3.48f, 1.44f), 3f);
				MoveTo(susie, new Vector3(4.3f, 3.44f), 3f);
				if (noellePresent)
				{
					MoveTo(noelle, new Vector3(3.38f, 1.27f), 3f);
				}
				if (frames == 30)
				{
					fade.FadeOut(15);
				}
				if (frames == 45)
				{
					gm.LoadArea(89, fadeIn: true, new Vector2(-3.32f, -2.46f), Vector2.up);
				}
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		RevokePlayerControl();
		gm.SetFlag(172, 0);
		noellePresent = Util.GameManager().NoelleInParty();
		blood = WeirdChecker.HasCommittedBloodshed(gm);
		alt = (int)gm.GetFlag(87) >= 7;
		qc = GameObject.Find("QC").GetComponent<Animator>();
		qc.enabled = true;
		qc.transform.position = new Vector3(-0.13f, -0.48f);
		Object.Destroy(Object.FindObjectOfType<SAVEPoint>().gameObject);
		StartText(new string[1] { "* 欢迎光临！" }, new string[1] { "snd_text" }, new int[1], new string[1] { "" });
	}
}

