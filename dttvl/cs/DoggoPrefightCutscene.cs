using System.Collections.Generic;
using UnityEngine;

public class DoggoPrefightCutscene : CutsceneBase
{
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
				ChangeDirection(kris, Vector2.up);
				ChangeDirection(susie, Vector2.up);
				ChangeDirection(noelle, Vector2.up);
			}
			GameObject.Find("Doggo").transform.position = new Vector3(2.938f, Mathf.Lerp(-1.794f, -0.878f, (float)frames / 40f));
			if (frames == 60)
			{
				List<string> list = new List<string> { "* 我听见了！^05\n* 我知道你就在那！", "* 我只能看见正在动的东西，\n  ^05可我的听觉可不会\n  骗我...！" };
				List<string> list2 = new List<string> { "snd_text", "snd_text" };
				List<string> list3 = new List<string> { "", "" };
				if ((int)gm.GetFlag(172) == 0)
				{
					list.AddRange(new string[2] { "* （我们是不是该...^05\n  说点什么...?）", "* （也许很快就行了...？^05我们\n  先确保自己不被砍到吧。）" });
					list2.AddRange(new string[3] { "snd_txtnoe", "snd_txtsus", "snd_text" });
					list3.AddRange(new string[3] { "no_thinking", "su_inquisitive", "" });
				}
				list.Add("* ...^10\n* 证明你自己吧！！！");
				StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray());
				state = 1;
			}
		}
		if (state == 1 && !txt)
		{
			kris.InitiateBattle(57);
			EndCutscene(enablePlayerMovement: false);
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.StopMusic();
		StartText(new string[1] { "* 谁在那！？" }, new string[1] { "snd_text" }, new int[1], new string[0]);
	}
}

