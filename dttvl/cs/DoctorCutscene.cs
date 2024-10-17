using UnityEngine;

public class DoctorCutscene : CutsceneBase
{
	private Animator doctor;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && !txt)
		{
			frames++;
			GameObject.Find("Dark").GetComponent<SpriteRenderer>().color = Color.Lerp(Color.black, new Color(0f, 0f, 0f, 0f), (float)frames / 60f);
			if (frames == 75)
			{
				kris.SetSprite("spr_kr_sit_injured_injured");
				susie.SetSprite("spr_su_left_worried_wideeye_0");
				PlaySFX("sounds/snd_wing", 0.9f);
			}
			if (frames >= 75 && frames <= 78)
			{
				int num = ((frames % 2 == 0) ? 1 : (-1));
				int num2 = 78 - frames;
				kris.transform.position = new Vector3(-4.108f, 0.5f) + new Vector3((float)(num2 * num) / 24f, 0f);
			}
			if (frames == 100)
			{
				doctor.SetFloat("dirX", -1f);
				doctor.SetFloat("dirY", 0f);
				StartText(new string[9] { "* Kris！\n^05* 你没事！", "* KRIS！！！\n* 我们都担心死你了！！！", "* 那名女士真的把你打得不轻。", "* 你甚至鼻子都开始流血了...", "* 随后一大堆人跑进了山洞。", "* 哦，^05外面怎么了？", "* 是的没错。", "* 咱，^05呃，^05不到怎得了。", "* ...^05听懂了。" }, new string[9] { "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_text", "snd_txtsus", "snd_txtsus", "snd_text" }, new int[18], new string[9] { "no_happy", "su_angry", "su_annoyed", "su_dejected", "no_confused_side", "", "su_neutral", "su_side_sweat", "" }, 1);
				state = 1;
				frames = 0;
			}
		}
		if (state == 1)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 2)
				{
					susie.SetSprite("spr_su_wtf");
					susie.GetComponent<SpriteRenderer>().flipX = true;
				}
				else if (txt.GetCurrentStringNum() == 3)
				{
					susie.EnableAnimator();
					susie.GetComponent<SpriteRenderer>().flipX = false;
				}
				else if (txt.GetCurrentStringNum() == 6)
				{
					susie.ChangeDirection(Vector2.right);
					noelle.ChangeDirection(Vector2.right);
				}
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					doctor.SetBool("isMoving", value: true);
				}
				doctor.transform.position = Vector3.Lerp(new Vector3(0f, 1.2f), new Vector3(-2.583f, 0.28f), (float)frames / 45f);
				if (frames == 30)
				{
					susie.ChangeDirection(Vector2.down);
					susie.GetComponent<Animator>().SetBool("isMoving", value: true);
				}
				susie.transform.position = Vector3.Lerp(new Vector3(-2.573f, 0.25f), new Vector3(-2.573f, 1.3f), (float)(frames - 30) / 15f);
				if (frames == 45)
				{
					doctor.SetBool("isMoving", value: false);
					susie.GetComponent<Animator>().SetBool("isMoving", value: false);
					noelle.ChangeDirection(Vector2.up);
				}
				if (frames == 60)
				{
					StartText(new string[3] { "* 现在，^05Kris，^05你可能会遭受到\n  <color=#FF0000FF>脑震荡</color>的一些干扰...", "* 但你接下来几天应该\n  能够恢复。", "* 歇一会吧，^05好吗？" }, new string[3] { "snd_text", "snd_text", "snd_text" }, new int[18], new string[3] { "", "", "" }, 1);
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
				doctor.SetBool("isMoving", value: true);
				doctor.SetFloat("dirX", 1f);
			}
			doctor.transform.position = Vector3.Lerp(new Vector3(-2.583f, 0.28f), new Vector3(1.26f, -0.55f), (float)frames / 45f);
			if (frames == 20)
			{
				kris.EnableAnimator();
				kris.ChangeDirection(Vector2.right);
				PlaySFX("sounds/snd_wing");
			}
			kris.transform.position = Vector3.Lerp(new Vector3(-4.108f, 0.5f), new Vector3(-2.62f, -0.23f), (float)(frames - 20) / 30f);
			if (frames == 45)
			{
				doctor.SetBool("isMoving", value: false);
				doctor.SetFloat("dirX", 0f);
				doctor.SetFloat("dirY", -1f);
			}
			if (frames == 50)
			{
				kris.ChangeDirection(Vector2.down);
			}
			if (frames == 65)
			{
				StartText(new string[9] { "* （当你站起来的时候，\n  你觉得头很轻。）", "* （你的攻击下降了6。）^05\n* （你的防御下降了3。）", "* 顺便一提，^05Kris，\n  ^05我们现在破产了。", "* 需要把所有的钱花在医疗上。", "* 真他妈的会诈骗。", "* 嘿，^05我们为何不绕小镇\n  逛一逛呢。", "* 他们难道不想把世界\n  涂成蓝色吗？", "* 哦对，^05没错！", "* 对啊，^05我们四处转转吧。" }, new string[9] { "snd_text", "snd_text", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus" }, new int[18], new string[9] { "", "", "su_annoyed", "su_side", "su_disappointed", "no_curious", "no_thinking", "su_surprised", "su_smile_side" }, 1);
				state = 3;
			}
		}
		if (state != 3)
		{
			return;
		}
		if ((bool)txt)
		{
			if (txt.GetCurrentStringNum() == 3 || txt.GetCurrentStringNum() == 8)
			{
				kris.ChangeDirection(Vector2.up);
			}
			if (txt.GetCurrentStringNum() == 6)
			{
				kris.ChangeDirection(Vector2.left);
			}
		}
		else
		{
			kris.SetSelfAnimControl(setAnimControl: true);
			susie.SetSelfAnimControl(setAnimControl: true);
			noelle.SetSelfAnimControl(setAnimControl: true);
			kris.ChangeDirection(Vector2.down);
			gm.SetCheckpoint(56, new Vector3(48.76f, -34.36f));
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		if ((int)gm.GetFlag(13) >= 5)
		{
			gm.SetFlag(102, 1);
			gm.SetFlag(0, "injured");
			gm.SetGold(0);
			base.StartCutscene(par);
			fade.FadeIn(1, Color.black);
			gm.SetFlag(99, 1);
			GameObject.Find("Dark").GetComponent<SpriteRenderer>().enabled = true;
			gm.StopMusic();
			kris.SetSelfAnimControl(setAnimControl: false);
			susie.SetSelfAnimControl(setAnimControl: false);
			noelle.SetSelfAnimControl(setAnimControl: false);
			kris.DisableAnimator();
			susie.DisableAnimator();
			susie.UseUnhappySprites();
			noelle.UseUnhappySprites();
			susie.ChangeDirection(Vector2.left);
			kris.transform.position = new Vector3(-4.108f, 0.38f);
			kris.SetSprite("spr_kr_sleep_injured");
			susie.transform.position = new Vector3(-2.573f, 0.25f);
			susie.SetSprite("spr_su_left_worried_0");
			noelle.transform.position = new Vector3(-4.098f, -1.096f);
			noelle.ChangeDirection(Vector2.up);
			doctor = GameObject.Find("DoctorAmigoBalls").GetComponent<Animator>();
			doctor.transform.position = new Vector3(0f, 1.2f);
			doctor.SetFloat("dirY", 1f);
			StartText(new string[1] { "* Kris，^05醒醒！" }, new string[5] { "snd_txtnoe", "", "", "", "" }, new int[5], new string[5] { "", "", "", "", "" }, 1);
		}
		else
		{
			Object.Destroy(base.gameObject);
		}
	}
}

