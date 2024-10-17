using UnityEngine;

public class PencilStatueCutscene : CutsceneBase
{
	private Transform pickles;

	private Transform pencil;

	private float velocity = 1f / 24f;

	private void Update()
	{
		if (state == 0 && !txt)
		{
			Vector3 vector = new Vector3(17.08f, 34.93f);
			Vector3 vector2 = new Vector3(14.74f, 34.45f);
			Vector3 vector3 = new Vector3(15.68f, 33.43f);
			bool flag = true;
			if (kris.transform.position != vector2)
			{
				flag = false;
				kris.ChangeDirection(Vector2.right);
				kris.transform.position = Vector3.MoveTowards(kris.transform.position, vector2, 1f / 12f);
				kris.GetComponent<Animator>().SetBool("isMoving", value: true);
				kris.GetComponent<Animator>().SetFloat("speed", 0.75f);
			}
			else
			{
				kris.GetComponent<Animator>().SetBool("isMoving", value: false);
			}
			if (noelle.transform.position != vector3)
			{
				flag = false;
				if (noelle.transform.position.y <= vector3.y)
				{
					noelle.ChangeDirection(Vector2.up);
				}
				else
				{
					noelle.ChangeDirection(Vector2.down);
				}
				noelle.transform.position = Vector3.MoveTowards(noelle.transform.position, vector3, 0.125f);
				noelle.GetComponent<Animator>().SetBool("isMoving", value: true);
				noelle.GetComponent<Animator>().SetFloat("speed", 1f);
			}
			else
			{
				noelle.ChangeDirection(Vector2.up);
				noelle.GetComponent<Animator>().SetBool("isMoving", value: false);
			}
			if (susie.transform.position != vector)
			{
				susie.transform.position = Vector3.MoveTowards(susie.transform.position, vector, 0.125f);
				susie.ChangeDirection(Vector2.up);
				susie.GetComponent<Animator>().SetBool("isMoving", value: true);
				susie.GetComponent<Animator>().SetFloat("speed", 1f);
				kris.ChangeDirection(Vector2.right);
				noelle.ChangeDirection(Vector2.up);
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					PlaySFX("sounds/snd_grab");
					susie.DisableAnimator();
					susie.SetSprite("spr_su_throw_ready");
					pencil.transform.position = new Vector3(16.6f, 35.2f);
					pencil.transform.eulerAngles = new Vector3(0f, 0f, 90f);
				}
				if (frames >= 30 && flag)
				{
					StartText(new string[1] { "* 给老子特么抓紧动！！！" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_angry" }, 0);
					state = 1;
					frames = 0;
				}
			}
		}
		if (state == 1 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				susie.EnableAnimator();
				susie.GetComponent<Animator>().Play("Throw");
				PlaySFX("sounds/snd_heavyswing");
			}
			if (frames < 26)
			{
				pencil.transform.position += new Vector3(7f / 48f, velocity);
				pencil.transform.eulerAngles -= new Vector3(0f, 0f, 10f);
				velocity -= 1f / 96f;
			}
			else if (frames == 26)
			{
				Object.Instantiate(Resources.Load<GameObject>("overworld/eb_objects/WaterPillar"), pencil.transform.position - new Vector3(0f, 0.48667f), Quaternion.identity);
				Object.Destroy(pencil.gameObject);
			}
			else if (frames == 50)
			{
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
				susie.GetComponent<Animator>().Play("walk");
				susie.ChangeDirection(Vector2.left);
				StartText(new string[5] { "* 漂亮。", "* Susie？\n^05* 你总是这样撇东西吗？", "* 呃...", "* 还挺...^10重的其实。", "* 我、我不是那个意思，\n  ^05但是..." }, new string[5] { "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtnoe" }, new int[18], new string[5] { "su_smile", "no_confused_side", "su_surprised", "su_flustered", "no_happy" }, 0);
				state = 2;
				frames = 0;
			}
			MonoBehaviour.print(frames);
		}
		if (state == 2)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 2)
				{
					susie.ChangeDirection(Vector2.down);
				}
				if (txt.GetCurrentStringNum() == 3)
				{
					susie.ChangeDirection(Vector2.right);
				}
				if (txt.GetCurrentStringNum() == 4)
				{
					susie.DisableAnimator();
					susie.SetSprite("spr_su_embarrassed_0");
				}
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					gm.PlayMusic("music/mus_photo_intro");
					pickles.GetComponent<Animator>().SetFloat("speed", 1f);
				}
				if (frames == 30)
				{
					susie.SetSprite("spr_su_down_unhappy_0");
				}
				if (frames == 45 || frames == 65)
				{
					susie.SetSprite("spr_su_right_unhappy_0");
				}
				else if (frames == 55 || frames == 75)
				{
					susie.SetSprite("spr_su_left_unhappy_0");
				}
				if (frames == 140)
				{
					noelle.DisableAnimator();
					kris.ChangeDirection(Vector3.down);
					noelle.SetSprite("spr_no_down_unhappy_0");
					susie.SetSprite("spr_su_down_unhappy_0");
				}
				if (frames <= 175)
				{
					pickles.transform.position = Vector3.Lerp(new Vector3(16.82f, 55.54f), new Vector3(16.82f, 31.37f), (float)frames / 175f);
					if (frames == 175)
					{
						pickles.GetComponent<Animator>().SetFloat("speed", 0f);
					}
				}
				if (frames == 217)
				{
					pickles.GetComponent<Animator>().enabled = false;
					pickles.GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/spr_fuzzypickle_up");
					pickles.GetComponent<SpriteRenderer>().flipX = true;
					StartText(new string[6] { "* 拍立得！", "* “我是摄影天才”，\n  这是我的自称！", "* ？？？？？", "* 好，^05准备好接受\n  瞬间记忆吧！", "* 看相机...", "* 准备...^10\n* 说“长毛酸黄瓜。”" }, new string[6] { "snd_text", "snd_text", "snd_txtsus", "snd_text", "snd_text", "snd_text" }, new int[18], new string[6] { "", "", "su_smirk_sweat", "", "", "" }, 0);
					state = 3;
					frames = 0;
				}
			}
		}
		if (state == 3 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				kris.DisableAnimator();
				susie.SetSprite("spr_su_pose");
				kris.SetSprite("spr_kr_peace");
				noelle.SetSprite("spr_no_pose");
			}
			if (frames == 30)
			{
				PlaySFX("sounds/snd_camera_flash");
				fade.FadeIn(30, Color.white);
			}
			if (frames == 75)
			{
				kris.EnableAnimator();
				susie.EnableAnimator();
				susie.ChangeDirection(Vector3.down);
				noelle.EnableAnimator();
				noelle.ChangeDirection(Vector3.down);
				StartText(new string[2] { "* 哇，^05多么棒的照片啊！", "* 它总会勾起我最美好的回忆..." }, new string[2] { "snd_text", "snd_text" }, new int[18], new string[2] { "", "" }, 0);
				state = 4;
				frames = 0;
			}
		}
		if (state == 4 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				susie.DisableAnimator();
				susie.SetSprite("spr_su_down_unhappy_0");
				pickles.GetComponent<Animator>().enabled = true;
				pickles.GetComponent<Animator>().SetFloat("speed", -1f);
			}
			if (frames < 60)
			{
				pickles.transform.position = Vector3.Lerp(new Vector3(16.82f, 31.37f), new Vector3(16.82f, 41.1f), (float)frames / 60f);
			}
			else if (frames == 60)
			{
				Object.Destroy(pickles.gameObject);
			}
			if (frames == 75)
			{
				gm.StopMusic(30f);
				noelle.ChangeDirection(Vector3.up);
				kris.ChangeDirection(Vector3.right);
				StartText(new string[3] { "* 那照片不应该给咱吗？", "* 我想他待会会给我们吧...", "* ...^10管他呢。" }, new string[3] { "snd_txtsus", "snd_txtnoe", "snd_txtsus" }, new int[18], new string[3] { "su_annoyed", "no_happy", "su_neutral" }, 0);
				state = 5;
			}
		}
		if (state != 5)
		{
			return;
		}
		if ((bool)txt)
		{
			if (txt.GetCurrentStringNum() == 3)
			{
				susie.EnableAnimator();
				susie.ChangeDirection(Vector3.up);
			}
			return;
		}
		if (cam.transform.position != cam.GetClampedPos())
		{
			cam.transform.position = Vector3.MoveTowards(cam.transform.position, cam.GetClampedPos(), 1f / 12f);
			return;
		}
		gm.PlayMusic("zoneMusic");
		cam.SetFollowPlayer(follow: true);
		kris.ChangeDirection(Vector3.down);
		kris.SetSelfAnimControl(setAnimControl: true);
		susie.SetSelfAnimControl(setAnimControl: true);
		noelle.SetSelfAnimControl(setAnimControl: true);
		Object.Instantiate(Resources.Load<GameObject>("overworld/npcs/StalkerFlowey"), new Vector3(10.76f, 27.6f), Quaternion.identity);
		EndCutscene();
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetFlag(85, 1);
		pencil = GameObject.Find("PencilStatue").transform;
		pickles = GameObject.Find("FuzzyPickles").transform;
		kris.SetSelfAnimControl(setAnimControl: false);
		susie.SetSelfAnimControl(setAnimControl: false);
		noelle.SetSelfAnimControl(setAnimControl: false);
		kris.GetComponent<Animator>().SetBool("isMoving", value: false);
		susie.GetComponent<Animator>().SetBool("isMoving", value: false);
		noelle.GetComponent<Animator>().SetBool("isMoving", value: false);
		cam.SetFollowPlayer(follow: false);
		StartText(new string[2] { "* （因为某种奇怪的原因^05\n  这里有一块铅笔形的铁块\n  挡住了路。）", "* 天哪，^05怎么什么东西\n  都能挡咱们的路啊？" }, new string[2] { "snd_text", "snd_txtsus" }, new int[2], new string[2] { "", "su_annoyed" });
	}
}

