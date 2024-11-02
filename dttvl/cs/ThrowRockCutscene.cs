using System;
using UnityEngine;

public class ThrowRockCutscene : CutsceneBase
{
	private RockThatDoesNotMove rock;

	private Transform rockThatDies;

	private Vector3 camPos;

	private void Update()
	{
		if (state == 0 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				cam.SetFollowPlayer(follow: false);
				camPos = cam.transform.position;
				kris.SetSelfAnimControl(setAnimControl: false);
				kris.ChangeDirection(Vector2.left);
				kris.GetComponent<Animator>().SetBool("isMoving", value: true);
				susie.SetSelfAnimControl(setAnimControl: false);
				susie.ChangeDirection(Vector2.left);
				if (susie.transform.position.x < 1.75f)
				{
					susie.ChangeDirection(Vector2.right);
				}
				susie.GetComponent<Animator>().SetBool("isMoving", value: true);
			}
			float num = (((int)gm.GetFlag(108) == 1) ? 0.15f : 0f);
			if (kris.transform.position != new Vector3(0.5f, -2.33f - num))
			{
				kris.transform.position = Vector3.MoveTowards(kris.transform.position, new Vector3(0.5f, -2.33f - num), 5f / 48f);
			}
			else
			{
				kris.ChangeDirection(Vector2.right);
				kris.GetComponent<Animator>().SetBool("isMoving", value: false);
			}
			if (susie.transform.position != new Vector3(1.75f, -2.166f))
			{
				susie.transform.position = Vector3.MoveTowards(susie.transform.position, new Vector3(1.75f, -2.166f), 5f / 48f);
			}
			else
			{
				susie.ChangeDirection(Vector2.right);
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
			}
			cam.transform.position = Vector3.Lerp(camPos, new Vector3(4.44f, 0f), (float)frames / 30f);
			if (frames == 60)
			{
				StartText(new string[7] { "* 谁允许你到处推我了？", "* 我允许了。\n^10* 赶紧去压板那。", "* 你觉得你就这个态度对我\n  说话的话，我会动吗？", "* 你要是还不动的话，\n  我就要强迫你过去了。", "* 说得像你办得到一样！^10\n* 我已经和这片大地\n  融为一体了！", "* 我一步也不会动的，^05大小姐。", "* 行，可别说我没警告过你。" }, new string[7] { "snd_text", "snd_txtsus", "snd_text", "snd_txtsus", "snd_text", "snd_text", "snd_txtsus" }, new int[18], new string[7] { "", "su_annoyed", "", "su_smile", "", "", "su_confident" });
				state = 1;
				frames = 0;
			}
		}
		if (state == 1 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				PlaySFX("sounds/snd_grab");
				susie.DisableAnimator();
				susie.SetSprite("spr_su_throw_ready");
				rock.transform.position = new Vector3(1.33f, -1.86f);
				rock.GetComponent<SpriteRenderer>().sortingOrder = 0;
			}
			if (frames == 30)
			{
				StartText(new string[1] { "* 给老子特么抓紧动！！！" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_angry" });
				state = 2;
				frames = 0;
			}
		}
		if (state == 2 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				rockThatDies = rock.ThrowObject(playAnim: true);
				susie.EnableAnimator();
				susie.GetComponent<Animator>().Play("Throw");
				PlaySFX("sounds/snd_heavyswing");
				camPos = cam.transform.position;
			}
			float num2 = (float)frames / 20f;
			num2 = Mathf.Sin(num2 * (float)Math.PI * 0.5f);
			if (frames <= 20)
			{
				rockThatDies.position = Vector3.Lerp(new Vector3(5.565f, -3.153f), new Vector3(6.209f, -3.153f), num2);
			}
			if (frames == 3)
			{
				cam.transform.position += new Vector3(0.15f, 0.15f);
			}
			if (frames == 5)
			{
				cam.transform.position -= new Vector3(0.25f, 0.25f);
			}
			if (frames == 7)
			{
				cam.transform.position += new Vector3(0.1f, 0.1f);
			}
			if (frames >= 30)
			{
				cam.transform.position = Vector3.Lerp(camPos, cam.GetClampedPos(), (float)(frames - 30) / 30f);
			}
			if (frames == 60)
			{
				susie.GetComponent<Animator>().Play("walk");
				susie.SetSelfAnimControl(setAnimControl: true);
				susie.ChangeDirection(Vector2.left);
				kris.SetSelfAnimControl(setAnimControl: true);
				StartText(new string[1] { "* 漂亮。" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_smile" });
				state = 3;
				frames = 0;
			}
		}
		if (state == 3 && !txt)
		{
			cam.SetFollowPlayer(follow: true);
			UnityEngine.Object.Instantiate(Resources.Load<GameObject>("overworld/npcs/StalkerFlowey"), new Vector3(-6.64f, -0.6f), Quaternion.identity);
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		rock = GameObject.Find("RockBot").GetComponent<RockThatDoesNotMove>();
		StartText(new string[2] { "* 哇等等，^10伙计！", "* 怎的？" }, new string[2] { "snd_text", "snd_txtsus" }, new int[2], new string[2] { "", "su_side_sweat" });
		gm.SetFlag(21, 1);
	}
}

