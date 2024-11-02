using System.Collections.Generic;
using UnityEngine;

public class EarthboundFirstCutscenePt2 : CutsceneBase
{
	public override Dictionary<string, string[]> GetDefaultStrings()
	{
		Dictionary<string, string[]> dictionary = new Dictionary<string, string[]>();
		dictionary.Add("part_0", new string[10] { "* 发-^05发生什么事了？？？", "* 刚刚一切都变白了...！", "* ...^05但是我现在倒是\n  不感到奇怪了。", "* 我...^10也是...", "* Kris，^05我想是魔法生效了！", "* 但是我们该怎么回到\n  森林...?", "* 或许我们可以再找一扇\n  灰色的门？", "* 行吧。", "* 这个山洞又不是任意门。", "* 抓紧，^05我们走吧。" });
		return dictionary;
	}

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			frames++;
			if (frames == 60)
			{
				noelle.SetSprite("spr_no_surprise");
				kris.EnableAnimator();
				kris.ChangeDirection(Vector2.right);
				StartText(GetStringArray("part_0"), new string[10] { "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[11], new string[10] { "no_scared", "su_surprised", "su_inquisitive", "no_silent", "no_surprised_happy", "su_side", "no_curious", "su_annoyed", "su_smirk_sweat", "su_neutral" }, 0);
				state = 1;
			}
		}
		if (state == 1)
		{
			if (!txt)
			{
				kris.ChangeDirection(Vector2.down);
				gm.PlayMusic("music/mus_cave");
				gm.SetCheckpoint(51);
				Object.FindObjectOfType<SectionTitleCard>().Activate();
				EndCutscene();
			}
			else if (txt.GetCurrentStringNum() == 3)
			{
				susie.EnableAnimator();
				susie.ChangeDirection(Vector2.right);
				kris.ChangeDirection(Vector2.left);
			}
			else if (txt.GetCurrentStringNum() == 5)
			{
				noelle.EnableAnimator();
				noelle.ChangeDirection(Vector2.left);
				kris.ChangeDirection(Vector2.right);
			}
			else if (txt.GetCurrentStringNum() == 8)
			{
				kris.ChangeDirection(Vector2.left);
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		gm.StopMusic();
		gm.SetFlag(65, 1);
		base.StartCutscene(par);
		kris.DisableAnimator();
		susie.DisableAnimator();
		noelle.DisableAnimator();
		kris.SetSprite("spr_kr_point");
		susie.SetSprite("spr_su_surprise_right");
		noelle.SetSprite("spr_no_cast_left");
		gm.SetFramerate(30);
		fade.FadeIn(30, Color.white);
	}
}

