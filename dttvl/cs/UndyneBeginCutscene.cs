using UnityEngine;

public class UndyneBeginCutscene : CutsceneBase
{
	private Animator undyne;

	private bool playMusic;

	private int help;

	private float undyneVelocity = 10f;

	private bool undyneGround;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				RevokePlayerControl();
				ChangeDirection(kris, Vector2.up);
				ChangeDirection(susie, Vector2.up);
				gm.StopMusic(30f);
			}
			if (noelle.transform.position.x < 2.33f)
			{
				ChangeDirection(noelle, Vector2.right);
				noelle.transform.position += new Vector3(1f / 12f, 0f);
				SetMoveAnim(noelle, isMoving: true);
			}
			else
			{
				SetMoveAnim(noelle, isMoving: false);
				ChangeDirection(noelle, Vector2.up);
			}
			if (MoveTo(cam, new Vector3(cam.transform.position.x, 3.34f, -10f), 4f))
			{
				return;
			}
			if (MoveTo(undyne, new Vector3(5.26f, 6.38f), 4f))
			{
				if (undyne.transform.position.x <= 10.95f && !playMusic)
				{
					playMusic = true;
					gm.PlayMusic("music/mus_undynescary");
				}
				undyne.GetComponent<AudioSource>().volume = (14.2f - undyne.transform.position.x) / 4f;
				SetMoveAnim(undyne, isMoving: true);
				ChangeDirection(undyne, Vector2.left);
			}
			else
			{
				SetMoveAnim(undyne, isMoving: false);
				state = 1;
				frames = 0;
			}
		}
		else if (state == 1)
		{
			frames++;
			if (frames == 20)
			{
				ChangeDirection(undyne, Vector2.up);
			}
			if (frames == 70)
			{
				SetSprite(undyne, "overworld/npcs/waterfall/spr_undyne_a_call");
				PlaySFX("sounds/snd_dial");
			}
			if (frames == 110)
			{
				StartText(new string[8] { "* Papyrus，^05Alphys说，\n  在雪镇西边发现了一个人类。", "* 还有另外两只怪物也跟着它。", "* 我将派遣其余的皇家守卫\n  去保卫该地区。", "* ...好，^05我知道你弄了谜题。", "* 但是我希望你或者其他的那个\n  人能抓住那个人类！", "* ...^05\n* ...好啊，把两个怪物随从抓来也不是\n  不行。", "* 看起来...^10他们在叛国。", "* 回见。" }, new string[1] { "snd_txtund" }, new int[1], new string[1] { "" }, 1);
				state = 2;
				frames = 0;
			}
		}
		else if (state == 2 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				undyne.enabled = true;
			}
			if (frames >= 30 && !MoveTo(cam, new Vector3(cam.transform.position.x, 0f, -10f), 4f))
			{
				StartText(new string[5] { "*（绝对是ALPHYS打了小报告。）", "* （那是不是...^05Undyne警官？）", "* （等下...）", "* 条子在追我们？？！？", "* (Susie，^05小点声！！！)" }, new string[5] { "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtnoe" }, new int[1], new string[5] { "su_annoyed", "no_thinking", "su_inquisitive", "su_wtf", "no_scared" }, 1);
				state = 3;
				frames = 0;
				ChangeDirection(noelle, Vector2.right);
				ChangeDirection(susie, Vector2.left);
				ChangeDirection(kris, Vector2.left);
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(4))
				{
					gm.StopMusic();
					SetSprite(noelle, "spr_no_surprise");
					SetSprite(susie, "spr_su_wtf", flipX: true);
					SetSprite(kris, "spr_kr_surprise");
				}
				else if (AtLine(5))
				{
					SetSprite(noelle, "spr_no_panic_right");
				}
			}
			if ((bool)txt && !AtLineRepeat(5))
			{
				return;
			}
			frames++;
			if ((bool)txt && frames < 48)
			{
				SetSprite(susie, "spr_su_freaked");
			}
			cam.transform.position = new Vector3(cam.transform.position.x, Mathf.Lerp(0f, 4f, (float)frames / 10f), -10f);
			if (frames == 8)
			{
				PlaySFX("sounds/snd_encounter");
				ChangeDirection(undyne, Vector2.down);
				undyne.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = true;
			}
			if (frames == 28)
			{
				gm.PlayMusic("music/mus_undynetheme");
			}
			if (frames == 38)
			{
				undyne.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
			}
			if (frames < 48)
			{
				return;
			}
			if (frames == 48)
			{
				if ((bool)txt)
				{
					Object.Destroy(txt.gameObject);
				}
				SetSprite(noelle, "spr_no_surprise_up");
				SetSprite(susie, "spr_su_surprise_up");
				SetSprite(kris, "spr_kr_surprise_upright", flipX: true);
				SetMoveAnim(undyne, isMoving: true, 0.75f);
			}
			if (!MoveTo(undyne, new Vector3(5.26f, 5.374f), 2f))
			{
				help++;
				SetMoveAnim(undyne, isMoving: false);
				if (help == 20)
				{
					StartText(new string[7] { "* 什么条子在追你啊，^05罪犯？", "* 你们俩周围是不是还有个\n  人类啊，^05是吧？！", "* 我-^05我...^10呃...", "* 现在，^05我要你们两个非常\n  小心地把人类从那片海藻中\n  移出来。", "* 啊好？^05\n* 不然呢？", "* 不然我就会把人类灵魂亲手\n  扯出来！", "* 行，^05你行，^05好..." }, new string[7] { "snd_txtund", "snd_txtund", "snd_txtnoe", "snd_txtund", "snd_txtsus", "snd_txtund", "snd_txtsus" }, new int[1], new string[7] { "und_helm", "und_helm", "no_shocked", "und_helm", "su_annoyed", "und_helm", "su_smirk_sweat" }, 0);
					state = 4;
					frames = 0;
				}
			}
		}
		else if (state == 4)
		{
			if ((bool)txt)
			{
				if (AtLine(4))
				{
					kris.EnableAnimator();
					kris.GetComponent<SpriteRenderer>().flipX = false;
					susie.EnableAnimator();
					noelle.EnableAnimator();
					ChangeDirection(kris, Vector2.up);
					ChangeDirection(susie, Vector2.up);
					ChangeDirection(noelle, Vector2.up);
				}
				else if (AtLine(5))
				{
					SetSprite(susie, "spr_su_point_up_0");
				}
				else if (AtLine(6))
				{
					SetSprite(undyne, "overworld/npcs/waterfall/spr_undyne_a_jump_0");
				}
				else if (AtLine(7))
				{
					SetSprite(susie, "spr_su_shrug");
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				gm.StopMusic();
				PlaySFX("sounds/snd_grab");
				kris.transform.position = new Vector3(0f, 100f);
				kris.GetComponent<SpriteRenderer>().enabled = false;
				noelle.transform.position = new Vector3(0f, 100f);
				susie.transform.position += new Vector3(5f / 12f, 0f);
				PlayAnimation(susie, "DragKrisNoelle", 0f);
				Object.FindObjectOfType<UndyneShadow>().transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
			}
			if (frames == 20)
			{
				StartText(new string[1] { "* 跑！！！" }, new string[1] { "snd_txtsus" }, new int[1], new string[1] { "su_angry" }, 0);
				state = 5;
				frames = 0;
			}
		}
		else
		{
			if (state != 5 || (bool)txt)
			{
				return;
			}
			frames++;
			if (frames == 1)
			{
				gm.PlayMusic("music/mus_undynefast");
				susie.GetComponent<Animator>().SetFloat("speed", 1f);
			}
			susie.transform.position += new Vector3(1f / 6f, 0f);
			kris.transform.position = susie.transform.position;
			if (susie.transform.position.x > cam.transform.position.x)
			{
				cam.transform.position = new Vector3(cam.GetClampedPos().x, Mathf.MoveTowards(cam.transform.position.y, 3.34f, 0.125f), -10f);
			}
			if (frames == 5)
			{
				SetSprite(undyne, "overworld/npcs/waterfall/spr_undyne_a_jump_1");
				undyne.transform.Find("shadow").GetComponent<SpriteRenderer>().enabled = false;
				PlaySFX("sounds/snd_jump");
			}
			if (frames >= 5)
			{
				if (undyneGround)
				{
					undyne.transform.position += new Vector3(1f / 6f, 0f);
				}
				else
				{
					undyne.transform.position += new Vector3(0f, undyneVelocity / 48f);
					undyneVelocity -= 1f;
					if (undyne.transform.position.y <= 0f)
					{
						undyne.transform.position = new Vector3(5.26f, 0f);
						undyne.enabled = true;
						ChangeDirection(undyne, Vector2.right);
						SetMoveAnim(undyne, isMoving: true);
						undyne.GetComponent<BoxCollider2D>().enabled = true;
						undyne.transform.Find("shadow").GetComponent<SpriteRenderer>().enabled = true;
						undyneGround = true;
					}
				}
			}
			if (frames == 90)
			{
				fade.FadeOut(7);
			}
			if (frames == 100)
			{
				gm.LoadArea(125, fadeIn: true, new Vector2(-7.11f, -0.73f), Vector2.right);
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		Object.FindObjectOfType<OverworldPlayer>().SetCollision(onoff: true);
		undyne = GameObject.Find("Undyne").GetComponent<Animator>();
		undyne.transform.position = new Vector3(14.2f, 6.38f);
		gm.SetSessionFlag(18, 0);
		gm.SetSessionFlag(19, 0);
		gm.SetCheckpoint();
		if (gm.GetFlagInt(12) == 1 && (gm.GetFlagInt(305) != 1 || gm.GetFlagInt(306) != 1))
		{
			WeirdChecker.Abort(gm);
		}
		StartText(new string[5] { "* 等一下...", "* 呃，^05咋了？", "* 没人听见刚刚那个声音吗？", "* 反正我没。^05\n* 你是听到了还是-", "* 嘘！！^05\n* （它要过来了！）" }, new string[5] { "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtnoe" }, new int[1], new string[5] { "no_shocked", "su_side", "no_confused_side", "su_annoyed", "no_scared" });
	}
}

