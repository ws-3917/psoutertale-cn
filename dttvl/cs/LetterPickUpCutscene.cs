using System;
using System.Collections.Generic;
using UnityEngine;

public class LetterPickUpCutscene : CutsceneBase
{
	private bool leave;

	private bool oblit;

	private float speed = 4f;

	private int krisRunFrames;

	private Transform letter;

	private Animator papyrus;

	private Animator sans;

	private int runFrames;

	private bool susRun;

	private void Update()
	{
		if (state == 0)
		{
			bool num = MoveTo(kris, new Vector3(0f, 0.62f), 4f);
			bool flag = MoveTo(susie, new Vector3(-0.7f, 1.01f), 4f);
			bool flag2 = MoveTo(noelle, new Vector3(-3.68f, noelle.transform.position.y), 4f);
			if (!num)
			{
				ChangeDirection(kris, Vector2.down);
				SetMoveAnim(kris, isMoving: false);
			}
			if (!flag)
			{
				ChangeDirection(susie, Vector2.down);
				SetMoveAnim(susie, isMoving: false);
			}
			if (!flag2)
			{
				ChangeDirection(noelle, Vector2.right);
				SetMoveAnim(noelle, isMoving: false);
			}
			if (!num && !flag && !flag2)
			{
				state = 1;
			}
		}
		else if (state == 1)
		{
			frames++;
			if (frames == 10)
			{
				letter.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
				SetSprite(kris, "spr_kr_openletter_0");
			}
			if (frames == 30)
			{
				PlaySFX("sounds/snd_noise");
				SetSprite(kris, "spr_kr_openletter_1");
			}
			if (frames == 45)
			{
				SetSprite(susie, "spr_su_surprise_right");
			}
			if (frames == 50)
			{
				PlaySFX("sounds/snd_attack");
				PlayAnimation(susie, "AttackStick");
				gm.StopMusic();
			}
			if (frames >= 52)
			{
				if (frames == 52)
				{
					letter.GetChild(0).GetComponent<SpriteRenderer>().enabled = true;
					letter.GetComponent<UFLetter>().SetSprite(0);
					letter.position = new Vector3(0f, 0.046f);
					gm.PlayGlobalSFX("sounds/snd_damage");
					SetSprite(kris, "spr_kr_ko");
				}
				float num2 = (float)(frames - 52) / 20f;
				if (num2 < 1f)
				{
					num2 = Mathf.Sin(num2 * (float)Math.PI * 0.5f);
				}
				kris.transform.position = new Vector3(Mathf.Lerp(0f, 2f, num2), kris.transform.position.y);
				if (frames < 62)
				{
					letter.position += new Vector3(0f, speed / 48f);
					speed -= 0.5f;
				}
			}
			if (frames >= 62)
			{
				if (letter.position.y > -0.39f)
				{
					if (frames == 62)
					{
						letter.GetComponent<UFLetter>().StartGeneratingBones();
						PlayAnimation(susie, "walk");
						ChangeDirection(susie, Vector2.left);
						SetMoveAnim(susie, isMoving: true, 3f);
						if (!oblit)
						{
							SetSprite(noelle, "spr_no_surprise");
						}
					}
					letter.position -= new Vector3(0f, 1f / 6f);
					if (letter.position.y < -0.39f)
					{
						letter.position = new Vector3(0f, -0.39f);
						letter.GetComponent<UFLetter>().MakeLetterEmpty();
					}
				}
				if (!MoveTo(susie, new Vector3(-3f, susie.transform.position.y), 10f))
				{
					ChangeDirection(susie, Vector2.right);
					SetMoveAnim(susie, isMoving: false);
					SetSprite(susie, "spr_su_surprise_right");
				}
			}
			if (frames == 92)
			{
				SetSprite(kris, "spr_kr_sit_injured", flipX: true);
			}
			if (frames == 112)
			{
				letter.GetComponent<UFLetter>().StopGeneratingBones();
			}
			if (frames == 157)
			{
				gm.PlayMusic("music/mus_him", 0.45f);
				SetSprite(susie, "spr_su_wtf");
				StartText(new string[12]
				{
					"* 那特么是啥？？？", "* “信”你个鬼啊。^05\n* 这不就是炸弹吗！！！", "呃，^10SANS...", "我原本以为会是，^05呃，^10\n一次正面的比拼。", "但我发现你是要偷袭！", "我以为，比如，你写了\n一封非常漂亮、讨人\n喜欢的信。", "然后趁他们分心时\n从背后攻击他们！！", "*\t哦，^05papyrus。", "*\t你认为我经历了这么多之后\n\t还会轻易放过他吗？", "*\t你忘了他对我们做了什么吗？",
					"你到底什么鬼意思？？？", "*\t哦，^05你不知道。"
				}, new string[12]
				{
					"snd_txtsus", "snd_txtsus", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtsans", "snd_txtsans", "snd_txtsans",
					"snd_txtpap", "snd_txtsans"
				}, new int[1], new string[12]
				{
					"su_wtf", "su_pissed", "ufpap_worry", "ufpap_side", "ufpap_neutral", "ufpap_side", "ufpap_evil", "ufsans_side", "ufsans_closed", "ufsans_empty",
					"ufpap_mad", "ufsans_closed"
				});
				state = 2;
				frames = 0;
			}
		}
		else if (state == 2)
		{
			if (!txt || txt.GetCurrentStringNum() >= 3)
			{
				krisRunFrames++;
				if (krisRunFrames == 20)
				{
					ChangeDirection(kris, Vector2.right);
					PlayAnimation(kris, "idle");
				}
				else if (krisRunFrames >= 40)
				{
					if (!MoveTo(kris, new Vector3(-1.78f, kris.transform.position.y), txt ? 2 : 4))
					{
						SetMoveAnim(kris, isMoving: false);
					}
					else
					{
						SetMoveAnim(kris, isMoving: true, txt ? 0.5f : 1f);
					}
				}
			}
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					SetSprite(susie, "spr_su_throw_ready");
				}
				else if (AtLine(3))
				{
					PlayAnimation(susie, "idle");
					if (!oblit)
					{
						SetSprite(noelle, "spr_no_right_shocked_0");
					}
					ChangeDirection(papyrus, Vector2.up);
					ChangeDirection(sans, Vector2.down);
					SetSprite(kris, "spr_kr_sit");
				}
				else if (AtLine(4))
				{
					ChangeDirection(papyrus, Vector2.left);
				}
				else if (AtLine(5))
				{
					ChangeDirection(papyrus, Vector2.up);
				}
				else if (AtLine(11))
				{
					PlayAnimation(papyrus, "Pissed");
				}
				return;
			}
			if (sans.transform.position.y > -0.32f)
			{
				PlayAnimation(papyrus, "idle");
				SetMoveAnim(sans, isMoving: true);
				MoveTo(sans, new Vector3(sans.transform.position.x, -0.32f), 4f);
				return;
			}
			if (sans.transform.position.x < 7.06f)
			{
				ChangeDirection(sans, Vector2.right);
				MoveTo(sans, new Vector3(7.06f, -0.32f), 4f);
				if (sans.transform.position.x > 4.5f)
				{
					ChangeDirection(papyrus, Vector2.right);
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				ChangeDirection(kris, Vector2.right);
				PlayAnimation(kris, "idle");
				SetMoveAnim(kris, isMoving: false);
			}
			if (frames == 30)
			{
				state = 3;
				frames = 0;
				ChangeDirection(papyrus, Vector2.up);
				StartText(new string[11]
				{
					"...", "好吧，^05我是真没想到。", "但是不要太害怕！！！", "我会用最有力的\n皮带拴住他！！！", "呃，^10打个比方。", "从现在起，^05我们\n将进行绝对公平的挑战！", "它们不会是你们\n无法预测的突袭！", "我可以保证。", "不管什么情况！！！", "你走的路上^05将布满陷阱！",
					"捏！^10嘿！^10嘿嘿！"
				}, new string[1] { "snd_txtpap" }, new int[1], new string[11]
				{
					"ufpap_sus", "ufpap_side", "ufpap_neutral", "ufpap_neutral", "ufpap_side", "ufpap_neutral", "ufpap_neutral", "ufpap_side", "ufpap_evil", "ufpap_evil",
					"ufpap_evil"
				});
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					ChangeDirection(papyrus, Vector2.left);
				}
				else if (AtLine(3))
				{
					PlayAnimation(papyrus, "Pose");
				}
				else if (AtLine(5))
				{
					PlayAnimation(papyrus, "idle");
					ChangeDirection(papyrus, Vector2.up);
				}
				else if (AtLine(6))
				{
					SetSprite(papyrus, "overworld/npcs/underfell/spr_ufpap_left_mad_0");
				}
				return;
			}
			if (MoveTo(papyrus, new Vector3(7.1f, -0.778f), 6f))
			{
				papyrus.enabled = true;
				ChangeDirection(papyrus, Vector2.right);
				SetMoveAnim(papyrus, isMoving: true);
				return;
			}
			frames++;
			if (frames == 1)
			{
				gm.StopMusic(60f);
			}
			if (frames == 20)
			{
				PlayAnimation(noelle, "idle");
				List<string> list = new List<string> { "* 他们说的“他”是谁？", "* 反正不是咱们，^05是吧？", "* 因为我们10分钟前才刚...\n  ^10见到他。" };
				List<string> list2 = new List<string> { "snd_txtsus", "snd_txtsus", "snd_txtsus" };
				List<string> list3 = new List<string> { "su_annoyed", "su_side_sweat", "su_neutral" };
				if (!oblit)
				{
					list.Add("* 也许他把某个人跟咱\n  弄混了...？");
					list2.Add("snd_txtnoe");
					list3.Add("no_thinking");
				}
				ChangeDirection(kris, Vector2.left);
				list.Add(leave ? "* Whatever.^05\n* See ya up ahead." : "* 管他的。^05\n* 我们走吧。");
				list2.Add("snd_txtsus");
				list3.Add("su_annoyed");
				StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray());
				state = 4;
				frames = 0;
			}
		}
		else
		{
			if (state != 4 || (bool)txt)
			{
				return;
			}
			if (leave)
			{
				int num3 = 8;
				runFrames++;
				if (runFrames > 10)
				{
					num3 = ((runFrames > 60) ? 12 : 10);
				}
				MoveTo(susie, new Vector3(8.33f, susie.transform.position.y), num3);
				if (susie.transform.position.y > 0.22f)
				{
					susie.transform.position -= new Vector3(0f, (float)num3 / 48f);
				}
				if (runFrames == 10 && susRun)
				{
					PlayAnimation(susie, "run", 1.5f);
				}
				if (frames == 0)
				{
					UnityEngine.Object.Destroy(UnityEngine.Object.FindObjectOfType<LetterScenarioHandler>().gameObject);
					SetMoveAnim(susie, isMoving: true, 1.5f);
					ChangeDirection(kris, Vector2.down);
					gm.PlayMusic("zoneMusic");
					kris.SetCollision(onoff: true);
					kris.SetSelfAnimControl(setAnimControl: true);
					gm.EnablePlayerMovement();
					frames++;
				}
			}
			else
			{
				UnityEngine.Object.Destroy(UnityEngine.Object.FindObjectOfType<LetterScenarioHandler>().gameObject);
				RestorePlayerControl();
				ChangeDirection(kris, Vector2.down);
				gm.PlayMusic("zoneMusic");
				EndCutscene();
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		GameObject.Find("LoadingZone").GetComponent<LoadingZone>().SetForceActivationTrigger(forceActivationTrigger: false);
		papyrus = GameObject.Find("Papyrus").GetComponent<Animator>();
		sans = GameObject.Find("Sans").GetComponent<Animator>();
		oblit = (int)Util.GameManager().GetFlag(172) == 1;
		leave = !Util.GameManager().SusieInParty();
		UnityEngine.Object.Destroy(GameObject.Find("CutsceneZone (1)"));
		RevokePlayerControl();
		Util.GameManager().SetFlag(197, 1);
		gm.SetFlag(84, 9);
		ChangeDirection(kris, new Vector3(0f, 0.62f) - kris.transform.position);
		ChangeDirection(susie, new Vector3(-0.7f, 1.01f) - susie.transform.position);
		ChangeDirection(noelle, Vector2.left);
		SetMoveAnim(kris, isMoving: true);
		SetMoveAnim(susie, isMoving: true);
		SetMoveAnim(noelle, isMoving: true);
		susRun = GameManager.GetOptions().runAnimations.value == 1;
		letter = UnityEngine.Object.FindObjectOfType<UFLetter>().transform;
	}
}

