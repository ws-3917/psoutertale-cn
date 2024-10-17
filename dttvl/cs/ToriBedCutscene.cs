using System;
using UnityEngine;

public class ToriBedCutscene : CutsceneBase
{
	private Animator toriel;

	private bool hardmode;

	private void Update()
	{
		if (state == 0 && !txt)
		{
			frames++;
			toriel.SetFloat("speed", 1f);
			toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(0f, -7f), 1f / 6f);
			kris.transform.position = Vector3.Lerp(new Vector3(-0.51f, -3.33f), new Vector3(-0.75f, -3.33f), (float)(frames - 10) / 5f);
			susie.transform.position = Vector3.Lerp(new Vector3(0.49f, -3.165f), new Vector3(0.69f, -3.165f), (float)(frames - 10) / 5f);
			if (frames == 10)
			{
				kris.ChangeDirection(Vector2.right);
				susie.ChangeDirection(Vector2.left);
			}
			if (frames == 60)
			{
				StartText(new string[2]
				{
					hardmode ? "* Y'know,^05 she isn't really\n  that different from the\n  Toriel from my world." : "* 她和之前也没什么不一样，\n  ^05是吧。",
					"* 我现在有点好奇这个\n  世界的我是什么样的了。"
				}, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_smirk", "su_smile_sweat" }, 0);
				state = 1;
				frames = 0;
			}
		}
		if (state == 1 && !txt)
		{
			kris.ChangeDirection(Vector2.up);
			susie.ChangeDirection(Vector2.up);
			if (susie.transform.position != new Vector3(0f, 2.13f))
			{
				susie.GetComponent<Animator>().SetBool("isMoving", value: true);
				susie.transform.position = Vector3.MoveTowards(susie.transform.position, new Vector3(0f, 2.13f), 1f / 12f);
			}
			else
			{
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
				frames++;
				if (frames == 20)
				{
					StartText(new string[1] { "* 管他呢。" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_confident", "su_smile_sweat" }, 1);
					state = 2;
					frames = 0;
				}
			}
			kris.transform.position = Vector3.MoveTowards(kris.transform.position, new Vector3(-0.51f, -3.33f), 1f / 48f);
		}
		if (state == 2 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				PlaySFX("sounds/snd_jump");
				susie.GetComponent<Animator>().Play("Fall");
			}
			if (frames <= 15)
			{
				susie.transform.position = new Vector3(Mathf.Lerp(0f, 2.89f, (float)frames / 15f), Mathf.Lerp(2.13f, 2.49f, (float)frames / 15f) + Mathf.Sin((float)frames * 12f * ((float)Math.PI / 180f)));
			}
			if (frames == 15)
			{
				susie.DisableAnimator();
				susie.SetSprite("spr_su_laydown");
				gm.PlayGlobalSFX("sounds/snd_heavyswing");
				cam.transform.position = new Vector3(0.05f, 0.05f);
				GameObject.Find("SusieBedCutscene").transform.position = new Vector3(3.14f, 1.42f);
				GameObject.Find("SusieBed").transform.position = new Vector3(6.14f, 1.42f);
				GameObject.Find("KrisBedCutscene").transform.position = new Vector3(-2.29f, 1.42f);
				GameObject.Find("KrisBed").transform.position = new Vector3(-7.06f, 1.42f);
			}
			if (frames == 17)
			{
				cam.transform.position = Vector3.zero;
			}
			if (frames == 30)
			{
				StartText(new string[2] { "* 可以的话我们也许能\n  休息下。", "* 我们的路还很长。" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_smirk", "su_smile" }, 1);
				state = 3;
				gm.SetPartyMembers(susie: false, noelle: false);
			}
		}
		if (state == 3 && !txt)
		{
			kris.SetSelfAnimControl(setAnimControl: true);
			kris.ChangeDirection(Vector2.down);
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		if ((int)gm.GetFlag(53) == 1)
		{
			EndCutscene();
			return;
		}
		cam.SetFollowPlayer(follow: false);
		kris.GetComponent<BoxCollider2D>().enabled = false;
		base.StartCutscene(par);
		hardmode = (int)gm.GetFlag(108) == 1;
		StartText(new string[11]
		{
			"* 惊喜！^10\n* 我为你们俩准备了一个房间！",
			"* 里面还很乱，^10\n  但我们完全可以待会收拾。",
			"* 但是...^10我们也不在这住。\n^10* 我们还得走呢。",
			"* 哦...^15\n* 是的，^10没错。",
			"* 或许你们想在走之前\n  休息会呢。",
			"* 我以后...^10可以把这个\n  变成客房。",
			"* 听着不错。",
			"* 很好。\n^10* 我现在在烤箱里\n  还放着一个派。",
			"* 在晾凉之前，你们可以先\n  睡个觉。",
			"* 哦那太好了！",
			hardmode ? "* 你们好好休息吧。" : "* 好好休息吧，^10Kris，^10还有Susie。"
		}, new string[11]
		{
			"snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txtsus",
			"snd_txttor"
		}, new int[18], new string[11]
		{
			"tori_happy", "tori_wack", "su_side_sweat", "tori_worry", "tori_neutral", "tori_worry", "su_smirk", "tori_neutral", "tori_neutral", "su_excited",
			"tori_happy"
		}, 0);
		kris.SetSelfAnimControl(setAnimControl: false);
		kris.ChangeDirection(Vector2.up);
		kris.transform.position = new Vector3(-0.51f, -3.33f);
		kris.GetComponent<Animator>().SetBool("isMoving", value: false);
		susie.SetSelfAnimControl(setAnimControl: false);
		susie.ChangeDirection(Vector2.up);
		susie.transform.position = new Vector3(0.49f, -3.165f);
		susie.GetComponent<Animator>().SetBool("isMoving", value: false);
		toriel = GameObject.Find("Toriel").GetComponent<Animator>();
		toriel.transform.position = new Vector3(0f, 0.18f);
		toriel.Play("WalkDown");
	}
}

