using System.Collections.Generic;
using UnityEngine;

public class HHFirstCutscene : CutsceneBase
{
	private Animator cultist;

	private bool susiePose;

	public override Dictionary<string, string[]> GetDefaultStrings()
	{
		Dictionary<string, string[]> dictionary = new Dictionary<string, string[]>();
		dictionary.Add("part_0", new string[7] { "* 呃...", "* 这鬼地方到底是怎么回事？", "* 我明白了？", "* 谁在到处把树涂成蓝色？", "* 我担心的不是这个。", "* 只是...^10\n  感觉这地方有点...", "* 阴森可怖。" });
		dictionary.Add("part_1", new string[9] { "* ...", "* 这...^05 你们是什么人？", "* 唔...^05这身打扮是怎么回事？", "* 你是要画树还是干什么？", "* 你是想讲你反对我把这\n  世界全部涂成蓝色吗？", "* 你为什么要那么干？", "* 不仅有害环境，^05还--", "* 我想得给你们三个上一课了！", "{0}" });
		dictionary.Add("susie_reactions", new string[2] { "* 你想见识一下我的厉害？^10\n* 放马过来，^05混球！", "* Hey,^05 wait a sec!" });
		return dictionary;
	}

	private void Update()
	{
		if (state == 0)
		{
			frames++;
			cam.transform.position = Vector3.Lerp(new Vector3(7.99f, -7.66f), new Vector3(1.64f, -2.43f, -10f), (float)frames / 60f);
			kris.transform.position = Vector3.Lerp(new Vector3(0.05f, -1.02f), new Vector3(0.05f, -2.25f), (float)frames / 60f);
			susie.transform.position = Vector3.Lerp(new Vector3(0.03f, -0.61f), new Vector3(1.91f, -1.21f), (float)frames / 75f);
			noelle.transform.position = Vector3.Lerp(new Vector3(0.03f, -0.65f), new Vector3(2.29f, -3.06f), (float)frames / 75f);
			if (frames == 60)
			{
				kris.GetComponent<Animator>().SetBool("isMoving", value: false);
				kris.GetComponent<Animator>().SetFloat("speed", 1f);
			}
			if (frames == 75)
			{
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
				susie.GetComponent<Animator>().SetFloat("speed", 1f);
				noelle.GetComponent<Animator>().SetBool("isMoving", value: false);
				noelle.GetComponent<Animator>().SetFloat("speed", 1f);
			}
			if (frames == 80)
			{
				kris.ChangeDirection(Vector2.right);
			}
			if (frames == 95)
			{
				susie.ChangeDirection(Vector2.down);
				noelle.ChangeDirection(Vector2.right);
			}
			if (frames == 110)
			{
				susie.ChangeDirection(Vector2.up);
				noelle.ChangeDirection(Vector2.left);
			}
			if (frames == 140)
			{
				susie.ChangeDirection(Vector2.down);
				noelle.ChangeDirection(Vector2.up);
				frames = 0;
				state = 1;
				StartText(GetStringArray("part_0"), new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[7] { "su_side_sweat", "su_smile_sweat", "no_confused", "no_happy", "su_annoyed", "su_side", "su_side" }, 1);
			}
		}
		if (state == 1 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				cultist.SetFloat("dirX", -1f);
				cultist.SetBool("isMoving", value: true);
			}
			cultist.transform.position = Vector3.Lerp(new Vector3(9.44f, -4.42f), new Vector3(5.9f, -3.47f), (float)frames / 45f);
			if (frames == 30)
			{
				susie.ChangeDirection(Vector2.right);
				noelle.ChangeDirection(Vector2.right);
			}
			if (frames == 45)
			{
				cultist.SetFloat("speed", 0f);
				cultist.transform.Find("Exclaim").GetComponent<AudioSource>().Play();
				cultist.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = true;
			}
			if (frames == 65)
			{
				cultist.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = false;
				cultist.SetFloat("speed", 1f);
				cultist.SetBool("isMoving", value: false);
			}
			if (frames == 75)
			{
				state = 2;
				frames = 0;
				string @string = GetString("susie_reactions", 0);
				string text = "su_angry";
				if ((int)gm.GetFlag(13) == 4)
				{
					@string = GetString("susie_reactions", 1);
					text = "su_shocked";
				}
				StartText(GetStringArrayFormatted("part_1", @string), new string[9] { "snd_text", "snd_text", "snd_txtsus", "snd_txtsus", "snd_text", "snd_txtnoe", "snd_txtnoe", "snd_text", "snd_txtsus" }, new int[18], new string[9] { "", "", "su_inquisitive", "su_annoyed", "", "no_confused", "no_thinking", "", text }, 1);
			}
		}
		if (state != 2)
		{
			return;
		}
		if (!txt)
		{
			kris.InitiateBattle(24);
			EndCutscene(enablePlayerMovement: false);
		}
		else if (txt.GetCurrentStringNum() == 9 && !susiePose)
		{
			susiePose = true;
			susie.DisableAnimator();
			if ((int)gm.GetFlag(13) == 4)
			{
				susie.SetSprite("spr_su_surprise_right");
				return;
			}
			susie.SetSprite("spr_su_threaten_stick");
			PlaySFX("sounds/snd_weaponpull");
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetCheckpoint(55, new Vector3(15.87f, 0.37f));
		cultist = GameObject.Find("CultistCutscene").GetComponent<Animator>();
		kris.SetSelfAnimControl(setAnimControl: false);
		susie.SetSelfAnimControl(setAnimControl: false);
		noelle.SetSelfAnimControl(setAnimControl: false);
		kris.GetComponent<Animator>().SetBool("isMoving", value: true);
		kris.GetComponent<Animator>().SetFloat("speed", 0.5f);
		susie.ChangeDirection(Vector2.right);
		susie.GetComponent<Animator>().SetBool("isMoving", value: true);
		susie.GetComponent<Animator>().SetFloat("speed", 0.5f);
		noelle.GetComponent<Animator>().SetBool("isMoving", value: true);
		noelle.GetComponent<Animator>().SetFloat("speed", 0.5f);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		cam.SetFollowPlayer(follow: false);
	}
}

