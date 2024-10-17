using System.Collections.Generic;
using UnityEngine;

public class CoilSnakeDefeatCutscene : CutsceneBase
{
	private bool selecting;

	private int endState;

	private bool onOblit;

	private Vector3 susiePos = Vector3.zero;

	private bool damage;

	private bool prevOblit;

	public override Dictionary<string, string[]> GetDefaultStrings()
	{
		Dictionary<string, string[]> dictionary = new Dictionary<string, string[]>();
		dictionary.Add("killed_0", new string[5] { "* ...", "* ...", "* K-^05Kris…？", "* 我们刚刚...^15干了什么？`", "* 那-^05那-^05那是...^15血吗？？" });
		dictionary.Add("killed_1", new string[1] { "* … ^15Kris。" });
		dictionary.Add("killed_2", new string[7] { "* 你他妈什么毛病？？？", "* 我们没必要打得这么狠！", "* 尤其那条蛇还是这么无害！", "* ...", "* 特么<color=#FF0000FF>“我控制不了我自己”</color>\n  是什么意思？？？", "* 你也不是不知道\n  你在干啥！！！", "* S-Susie,^05停!!!" });
		dictionary.Add("killed_3", new string[7] { "* Noelle…", "* Susie，^05Kris有点...\n^10  不对劲。", "* 好好想想...", "* Kris做了一些以前没做过的事。", "* 而且不仅仅是在此处。", "* Kris至少几天前行为就\n  怪起来了。", "* Kris也许是正确的。" });
		dictionary.Add("killed_4", new string[7] { "* ...", "* Kris。", "* 你需要和我们好好解释解释。", "* 下次我们休息的时候，^05\n  我们需要好好谈一谈。", "* 现在，^05我们需要继续\n  我们的行程。", "* 只是，^05如果你能针对此类现象\n  采取行动，^05请一定要做。", "* 我真的不想到处抛洒鲜血。" });
		dictionary.Add("spared_0", new string[7] { "* ...", "* 出于某种原因...", "* 我感到非常焦虑。", "* 为什么...？", "* 不到。", "* 我有点害怕蛇的内脏会飞出来。", "* ？？？？？？？" });
		dictionary.Add("ranaway_oblit_0", new string[6] { "* 哦，该死，^05它跑了？？？", "* 好耶！", "* 哇，^05Susie，^05你看起来\n  真的很高兴。", "* 一切都好吗？", "* 就是现在。", "* ？？？？？" });
		dictionary.Add("ranaway_0", new string[4] { "* 他跑了？？？", "* 给我回来你个--", "* 嘿，^05起-起码它不挡道了。", "* 我想..." });
		return dictionary;
	}

	private void Update()
	{
		if (state == 0)
		{
			if (!txt)
			{
				if (onOblit && !prevOblit && endState == 1)
				{
					state = 1;
					susiePos = kris.transform.position + new Vector3(-0.879f, 0.165f);
					susie.GetComponent<Animator>().SetBool("isMoving", value: true);
					susie.GetComponent<Animator>().SetFloat("speed", 0.5f);
					if (susie.transform.position.x < susiePos.x)
					{
						susie.ChangeDirection(Vector2.right);
					}
					else
					{
						susie.ChangeDirection(Vector2.left);
					}
				}
				else
				{
					if ((int)gm.GetFlag(12) == 1)
					{
						WeirdChecker.Abort(Object.FindObjectOfType<GameManager>());
					}
					EndCutscene();
				}
			}
			else if (!txt && onOblit && endState == 1)
			{
				state = 1;
				susiePos = kris.transform.position + new Vector3(-0.879f, 0.165f);
				susie.GetComponent<Animator>().SetBool("isMoving", value: true);
				susie.GetComponent<Animator>().SetFloat("speed", 0.5f);
				if (susie.transform.position.x < susiePos.x)
				{
					susie.ChangeDirection(Vector2.right);
				}
				else
				{
					susie.ChangeDirection(Vector2.left);
				}
			}
		}
		if (state == 1)
		{
			if (susie.transform.position != susiePos)
			{
				susie.transform.position = Vector3.MoveTowards(susie.transform.position, susiePos, 1f / 24f);
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					kris.GetComponent<SpriteRenderer>().enabled = false;
					susie.GetComponent<Animator>().SetBool("isMoving", value: false);
					susie.GetComponent<Animator>().SetFloat("speed", 0f);
					susie.GetComponent<Animator>().Play("GraspKris");
				}
				if (frames == 20)
				{
					StartText(GetStringArray("killed_1"), new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_depressed" });
					state = 2;
					frames = 0;
				}
			}
		}
		if (state == 2 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				noelle.SetSprite("spr_no_surprise");
				susie.GetComponent<Animator>().SetFloat("speed", 1f);
				PlaySFX("sounds/snd_grab");
			}
			if (frames == 30)
			{
				StartText(GetStringArray("killed_2"), new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe" }, new int[18], new string[7] { "su_serious", "su_serious", "su_serious", "su_serious", "su_angry_hero", "su_teeth_determined", "no_afraid_open" });
				state = 3;
				frames = 0;
			}
		}
		if (state == 3)
		{
			if (!txt)
			{
				if (damage)
				{
					damage = false;
					frames = 0;
					susie.transform.position = susiePos;
					susie.DisableAnimator();
					susie.SetSprite("spr_su_grasp_kris_letgo");
					kris.DisableAnimator();
					kris.GetComponent<SpriteRenderer>().enabled = true;
					kris.SetSprite("spr_kr_grasped");
					noelle.EnableAnimator();
				}
				frames++;
				float num = (float)frames / 5f;
				kris.GetComponent<SpriteRenderer>().sortingOrder = susie.GetComponent<SpriteRenderer>().sortingOrder - 1;
				if (frames <= 5)
				{
					kris.transform.position = susiePos + Vector3.Lerp(new Vector3(1.146f, -0.102000006f), new Vector3(1.146f, -0.26500002f), num * num);
				}
				else if (frames == 6)
				{
					kris.transform.position = susiePos + new Vector3(1.146f, -0.165f);
					kris.SetSprite("spr_kr_sit");
					kris.GetComponent<SpriteRenderer>().flipX = true;
					PlaySFX("sounds/snd_noise");
				}
				if (frames == 30)
				{
					susie.SetSprite("spr_su_left_sad_0");
					StartText(GetStringArray("killed_3"), new string[7] { "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe" }, new int[18], new string[7] { "su_concerned", "no_afraid", "no_depressed", "no_depressed", "no_depressed_side", "no_depressed_side", "no_depressed" });
					state = 4;
					frames = 0;
				}
			}
			else if (txt.GetCurrentStringNum() >= 6)
			{
				frames++;
				damage = true;
				if (frames == 1)
				{
					PlaySFX("sounds/snd_damage");
				}
				if (frames <= 8)
				{
					int num2 = ((frames % 2 == 0) ? 1 : (-1));
					int num3 = 8 - frames;
					susie.transform.position = susiePos + new Vector3((float)(num3 * num2) / 24f, 0f);
				}
			}
		}
		if (state == 4 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				susie.EnableAnimator();
				susie.GetComponent<Animator>().Play("idle");
				susie.ChangeDirection(Vector2.up);
			}
			if (frames == 40)
			{
				StartText(GetStringArray("killed_4"), new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[7] { "su_depressed", "su_side", "su_neutral", "su_side", "su_annoyed", "su_dejected", "su_dejected" });
				state = 5;
				frames = 0;
			}
		}
		if (state != 5)
		{
			return;
		}
		if ((bool)txt)
		{
			if (txt.GetCurrentStringNum() == 2)
			{
				susie.ChangeDirection(Vector2.right);
				kris.GetComponent<SpriteRenderer>().flipX = false;
				kris.EnableAnimator();
				kris.ChangeDirection(Vector2.left);
			}
		}
		else if (!txt)
		{
			if (frames == 0)
			{
				gm.PlayGlobalSFX("sounds/snd_ominous");
				frames++;
			}
			if (cam.transform.position != cam.GetClampedPos())
			{
				cam.transform.position = Vector3.MoveTowards(cam.transform.position, cam.GetClampedPos(), 1f / 24f);
				return;
			}
			gm.SetFlag(1, "depressed");
			gm.SetFlag(2, "depressed");
			kris.SetSelfAnimControl(setAnimControl: true);
			susie.SetSelfAnimControl(setAnimControl: true);
			noelle.SetSelfAnimControl(setAnimControl: true);
			cam.SetFollowPlayer(follow: true);
			EndCutscene();
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		if (!(index == Vector2.left))
		{
			_ = index == Vector2.right;
		}
		state = 1;
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		endState = int.Parse(par[0].ToString());
		gm.SetFlag(89, endState);
		onOblit = (int)gm.GetFlag(13) >= 4;
		prevOblit = (int)gm.GetFlag(13) == 3;
		if (endState == 1)
		{
			if (onOblit)
			{
				Object.FindObjectOfType<OverworldCoilSnake>().CreateDeadEnemy();
				gm.StopMusic();
				cam.SetFollowPlayer(follow: false);
				kris.ChangeDirection(Vector2.right);
				susie.ChangeDirection(Vector2.right);
				noelle.ChangeDirection(Vector2.right);
				susie.UseUnhappySprites();
				susie.SetSelfAnimControl(setAnimControl: false);
				noelle.transform.position = new Vector3(noelle.transform.position.x, kris.transform.position.y + noelle.GetPositionOffset().y);
				noelle.UseUnhappySprites();
				noelle.DisableAnimator();
				noelle.SetSprite("spr_no_right_shocked_0");
				StartText(GetStringArray("killed_0"), new string[5] { "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe" }, new int[18], new string[5] { "no_shocked", "su_concerned", "su_concerned", "su_concerned", "no_afraid" });
			}
			else if (prevOblit)
			{
				StartText(GetStringArray("ranaway_oblit_0"), new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtnoe" }, new int[18], new string[6] { "su_surprised", "su_excited", "no_confused", "no_confused_side", "su_smirk", "no_happy" });
			}
			else
			{
				StartText(GetStringArray("ranaway_0"), new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtsus" }, new int[18], new string[4] { "su_angry", "su_wtf", "no_happy", "su_annoyed" });
			}
		}
		else if (endState == 2)
		{
			if (onOblit)
			{
				StartText(GetStringArray("spared_0"), new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtnoe" }, new int[18], new string[7] { "su_side_sweat", "su_side_sweat", "su_side_sweat", "no_curious", "su_neutral", "su_dejected", "no_speechless" });
			}
			else if (prevOblit)
			{
				WeirdChecker.Abort(Object.FindObjectOfType<GameManager>());
				EndCutscene();
			}
			else
			{
				EndCutscene();
			}
		}
		else
		{
			EndCutscene();
		}
	}
}

