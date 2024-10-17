using System.Collections.Generic;
using UnityEngine;

public class CarpainterDefeatCutscene : CutsceneBase
{
	private bool carpainterLives = true;

	private bool itemSound;

	private int itemSoundAt = 14;

	private void Update()
	{
		if (!isPlaying || state != 0)
		{
			return;
		}
		if ((bool)txt)
		{
			if (!itemSound && txt.GetCurrentStringNum() == itemSoundAt)
			{
				itemSound = true;
				gm.PlayGlobalSFX("sounds/snd_item");
			}
			return;
		}
		if (carpainterLives)
		{
			gm.PlayMusic("music/mus_zombiepaper");
		}
		kris.ChangeDirection(Vector2.down);
		gm.SetCheckpoint(56, new Vector3(24.15f, -22.53f));
		EndCutscene();
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		Object.Destroy(GameObject.Find("Lightning"));
		Object.Destroy(GameObject.Find("ReflectBall"));
		gm.StopMusic();
		gm.SetFlag(84, 4);
		int num = int.Parse(par[0].ToString());
		bool flag = (int)gm.GetFlag(13) >= 5;
		if (!flag && (int)gm.GetFlag(12) == 1)
		{
			WeirdChecker.Abort(gm);
			flag = false;
		}
		carpainterLives = !(num == 1 && flag);
		cam.SetFollowPlayer(follow: true);
		if (carpainterLives)
		{
			gm.SetFlag(117, 1);
			if (flag)
			{
				WeirdChecker.Abort(gm);
			}
			Object.FindObjectOfType<CarpainterNPC>().SetSprite(0);
			List<string> list = new List<string>
			{
				"", "* 你能看到我背后的\n  玛尼玛尼雕像吗...", "* 自我得到雕像以来，^05\n  我一直都在做怪事。", "* 可以的话，^05请原谅我。", "* 我只是想要个普通、^05\n  和平的生活。", "* 我向所有人^10致歉。", "* 嘿，^05只要你的道歉\n  是真心的就好。", "* 你真想道歉的话，^05\n  不如拿上油漆稀释剂\n  来的实在。", "* 嘿，^05我们想去\n  小人国脚印。", "* 有人告诉我们\n  你有一颗炸弹。",
				"* 想让我们原谅你？\n  那就现在把炸弹交出来。", "* 听起来很划算。", "* 炸弹在这。^05\n* 它应该有足够伤害\n  把封条炸开。", "* (Susie得到了炸弹。)", "* 哇，^05爽歪歪。", "* 话说回来，^05额...^05\n* 我们又该从哪里着手？", "* 洞穴入口在镇上东边，^05\n* 那用封条封锁了。", "* 好耶，^05爽。", "* 走吧。"
			};
			List<string> list2 = new List<string>
			{
				"snd_txtsus", "snd_text", "snd_text", "snd_text", "snd_text", "snd_text", "snd_txtnoe", "snd_txtpau", "snd_txtsus", "snd_txtsus",
				"snd_txtsus", "snd_text", "snd_text", "snd_text", "snd_txtsus", "snd_txtsus", "snd_text", "snd_txtsus", "snd_txtsus"
			};
			List<string> list3 = new List<string>
			{
				"", "", "", "", "", "", "no_happy", "pau_sussy", "su_neutral", "su_side",
				"su_annoyed", "", "", "", "su_smile", "su_smile_sweat", "", "su_smile", "su_happy"
			};
			if (gm.GetMiniPartyMember() == 0)
			{
				list.RemoveAt(7);
				list2.RemoveAt(7);
				list3.RemoveAt(7);
				list[8] = "* 你肯定有能通过它的方法。";
				list[10] = "* 我因此拥有一枚炸弹。";
				itemSoundAt--;
			}
			if (num == 1)
			{
				if ((int)gm.GetFlag(87) >= 4)
				{
					list[0] = "* 哇，看看你。^05\n* 你活下来了。";
					list3[0] = "su_confident";
				}
				else
				{
					list[0] = "* 哈哈！^05\n* 吃这一招，^05白痴！";
					list3[0] = "su_teeth_eyes";
				}
			}
			else if (flag)
			{
				list[0] = "* （嗯，^05嘿，^05我们没有杀死他……）";
				list3[0] = "su_smile_sweat";
			}
			else
			{
				list[0] = "* 看吧，^05你们的邪教有多烂。";
				list3[0] = "su_confident";
			}
			StartText(list.ToArray(), list2.ToArray(), new int[18], list3.ToArray(), 1);
		}
		else
		{
			itemSoundAt = 1;
			Object.FindObjectOfType<CarpainterNPC>().SetSprite(4);
			StartText(new string[2] { "* (Susie得到了炸弹。)", "* ..." }, new string[2] { "snd_text", "" }, new int[2], new string[2] { "", "su_depressed" }, 1);
		}
	}
}

