using UnityEngine;

public class PostGaster3Cutscene : CutsceneBase
{
	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			frames++;
			if (frames == 40)
			{
				gm.DisablePlayerMovement(deactivatePartyMembers: true);
				ChangeDirection(kris, Vector2.down);
				if (Util.GameManager().GetFlagInt(172) == 0)
				{
					StartText(new string[11]
					{
						"* Kris...?", "* 你刚才特么干啥呢？", "* 你一直在...发呆。", "* 你不会是要...", "* ...^10是要...^05干啥？", "* ...", "* ...当我没说。", "* 可能他就是...^05需要点时间。", "* 这些木头在某种程度上\n  有种催眠般的效果。", "* 好吧，^05真够怪的。",
						"* 我们走吧。"
					}, new string[11]
					{
						"snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus",
						"snd_txtsus"
					}, new int[1], new string[11]
					{
						"su_side_sweat", "su_annoyed", "no_thinking", "no_shocked", "su_inquisitive", "no_sad", "no_depressed", "no_relief", "no_weird", "su_annoyed",
						"su_annoyed"
					});
				}
				else
				{
					StartText(new string[21]
					{
						"* Kris...?", "* 你刚才特么干啥呢？", "* Kris。", "* If you were serious\n  about not having\n  control...", "* You...", "* ...^05 I...\n^10* I mean...", "* ...^10 nevermind.", "* The hell were you\n  gonna say?", "* I...^05 shouldn't say.", "* Everything is just...^05\n  getting to me.",
						"* ...", "* Noelle,^05 I get it.", "* But we're also in\n  this together.", "* Doing something rash\n  is gonna ruin our\n  chances of getting home.", "* ...", "* I...^10 probably need\n  some rest.", "* I feel like I'm\n  going crazy.", "* I'm sure we can\n  find someplace ahead\n  we can sleep.", "* But for now,^05 we\n  aren't really safe.", "* So,^05 uhh...",
						"* I guess let's find\n  that place."
					}, new string[21]
					{
						"snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtnoe",
						"snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus",
						"snd_txtsus"
					}, new int[1], new string[21]
					{
						"su_side_sweat", "su_annoyed", "no_depressedx", "no_depressedx", "no_depressedx_smile", "no_afraid", "no_depressedx", "su_inquisitive", "no_depressed_side", "no_depressedx",
						"su_depressed", "su_sad", "su_sad_side", "su_dejected", "no_depressedx", "no_depressedx", "no_depressedx", "su_worriedsmile", "su_dejected", "su_side",
						"su_smirk"
					});
				}
				state = 1;
			}
		}
		if (state == 1 && !txt)
		{
			RestorePlayerControl();
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		if ((int)gm.GetFlag(183) == 0)
		{
			Object.Destroy(base.gameObject);
			return;
		}
		kris.DisableStepSounds();
		gm.SetFlag(184, 1);
		gm.StopMusic();
		if (gm.SusieInParty())
		{
			base.StartCutscene(par);
			susie.transform.position = new Vector3(-1.35f, -0.55f);
			susie.ChangeDirection(Vector2.up);
			noelle.transform.position = new Vector3(0.43f, -0.58f);
			noelle.ChangeDirection(Vector2.up);
			susie.UseUnhappySprites();
			noelle.UseUnhappySprites();
		}
		else
		{
			Object.Destroy(base.gameObject);
		}
	}
}

