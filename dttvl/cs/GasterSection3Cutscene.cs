using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public class GasterSection3Cutscene : CutsceneBase
{
	private int variance = 3;

	private int pupilFrames;

	private bool creepygastershit;

	private Sprite[] gasterEyes;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			Tilemap[] array = Object.FindObjectsOfType<Tilemap>();
			foreach (Tilemap obj in array)
			{
				float t = 1f;
				if ((bool)txt)
				{
					t = (float)(txt.GetCurrentStringNum() - 5) / 35f;
				}
				obj.color = Color.Lerp(b: Color.Lerp(new Color(0.5f, 0.5f, 0.5f), Color.black, t), a: obj.color, t: 0.05f);
			}
			if (!txt)
			{
				frames++;
				if (frames == 60)
				{
					array = Object.FindObjectsOfType<Tilemap>();
					for (int i = 0; i < array.Length; i++)
					{
						array[i].color = Color.black;
					}
					string text = ((kris.transform.position.x - GameObject.Find("Gaster").transform.position.x < 0f) ? "_left" : "");
					SetSprite(GameObject.Find("Gaster").GetComponent<SpriteRenderer>(), "overworld/npcs/spr_gaster_lookback" + text);
					GameObject.Find("windsound").GetComponent<AudioSource>().Stop();
					gm.PlayMusic("music/mus_him", (variance == 0) ? 1f : 0.6f, 0f);
					if (variance == 0)
					{
						StartText(new string[8] { "* ...", "* 直到...", "* 我找到了它。", "* 黑暗喷泉。", "* 在那地底。", "* 有一种黑暗魔法，\n  可以笼罩周围环境，\n  形成一个新的世界。", "* 你知道的太多了，^10\n  KRIS。", "* ...因此。" }, new string[8] { "", "#v_gaster_s3_end_1", "#v_gaster_s3_end_2", "#v_gaster_s3_end_3", "#v_gaster_s3_end_4", "#v_gaster_s3_end_5", "#v_gaster_s3_end_6", "#v_gaster_s3_end_7" }, new int[1] { 1 }, new string[0]);
					}
					else
					{
						List<string> list = new List<string> { "* IT IS TORTURE,^10 KRIS.", "* THE REGRET I FEEL DAILY\n  HAUNTS ME.", "* HOW EVERYTHING COULD HAVE\n  TURNED HAD I NOT JUMPED.", "* MAYBE MY NAME WOULD LIVE ON IF\n  I HADN'T \"GONE MISSING.\"", "* MAYBE YOU WOULD NOT BE\n  CONDUCTING YOUR OWN EXPERIMENT.", "* WHEREIN YOU OBLITERATE\n  EVERYTHING IN THESE WORLDS." };
						List<string> list2 = new List<string> { "#v_gaster_s3_end_o_0", "#v_gaster_s3_end_o_1", "#v_gaster_s3_end_o_2", "#v_gaster_s3_end_o_3", "#v_gaster_s3_end_o_4", "#v_gaster_s3_end_o_5" };
						if (variance == 1)
						{
							list.Add("* ...");
							list2.Add("");
						}
						else
						{
							list.Add("* YOU BARELY EVEN CONSIDERED\n  A MORE TAME ROUTE.");
							list2.Add("#v_gaster_s3_end_o_6");
							if (variance == 3)
							{
								list.Add("* AND ALL THE WHILE FILMING\n  YOUR FINDINGS.");
								list2.Add("#v_gaster_s3_end_o_6a");
							}
							list.Add("* HOW SADISTIC...");
							list2.Add("#v_gaster_s3_end_o_7");
						}
						StartText(list.ToArray(), list2.ToArray(), new int[1] { 1 }, new string[0]);
					}
					txt.MakeUnskippable();
					frames = 0;
					state = 1;
				}
			}
		}
		if (state == 1)
		{
			float num = 1f;
			if ((bool)txt)
			{
				num = (float)(txt.GetCurrentStringNum() - 1) / 6f;
			}
			num *= num;
			gm.GetMusicPlayer().SetVolume(Mathf.Lerp(gm.GetMusicPlayer().GetVolume(), num * 0.5f, 0.01f));
			if (!txt)
			{
				frames++;
				if (frames == 1)
				{
					gm.StopMusic();
					GameObject.Find("darkness").GetComponent<SpriteRenderer>().enabled = true;
				}
				if (frames == 45)
				{
					gm.SetPersistentFlag(1, 1);
					GameObject.Find("darkness").GetComponent<SpriteRenderer>().enabled = false;
					GameObject.Find("gasterlookin").GetComponent<SpriteRenderer>().enabled = true;
				}
				if (frames >= 90 && frames <= 108)
				{
					GameObject.Find("eye").GetComponent<SpriteRenderer>().sprite = gasterEyes[frames - 90];
					GameObject.Find("eye").GetComponent<SpriteMask>().sprite = gasterEyes[frames - 90];
					if (frames == 90)
					{
						GameObject.Find("eye").GetComponent<SpriteRenderer>().enabled = true;
						GameObject.Find("pupils").GetComponent<SpriteRenderer>().enabled = true;
						GameObject.Find("pinpointL").GetComponent<SpriteRenderer>().enabled = true;
						GameObject.Find("pinpointR").GetComponent<SpriteRenderer>().enabled = true;
					}
					num = (float)(frames - 94) / 14f;
					num = num * num * num * (num * (6f * num - 15f) + 10f);
					GameObject.Find("pupils").transform.localPosition = new Vector3(0f, Mathf.Lerp(0.213f, 0f, num));
					if (frames == 108)
					{
						creepygastershit = true;
					}
				}
				if (frames == 150)
				{
					string text2 = "";
					int num2 = 15 - gm.GetPlayerName().Length / 2;
					for (int j = 0; j < num2; j++)
					{
						text2 += " ";
					}
					List<string> list3 = new List<string>();
					if (variance == 0)
					{
						list3.Add("\b       你得协助我创建一个 \n\b       新世界，^20 \n\b" + text2 + "^N?");
					}
					else if (variance == 1)
					{
						list3.Add("\b      YOU AND I AREN'T SO \n\b      DIFFERENT,^20 ^N.");
					}
					else
					{
						list3.Add("\b  PERHAPS WE ARE MUCH THE SAME,^20 \n\b" + text2 + "^N.");
					}
					if (variance == 3)
					{
						list3.Add("\b  MAY YOUR FOLLOWERS GUIDE YOU \n\b          TO OBLIVION.");
					}
					StartText(list3.ToArray(), new string[1] { "" }, new int[1] { 1 }, new string[0]);
					Object.Destroy(GameObject.Find("menuBorder"));
					Object.Destroy(GameObject.Find("menuBox"));
					txt.MakeUnskippable();
					frames = 0;
					state = 2;
				}
			}
		}
		if (creepygastershit)
		{
			if (pupilFrames < 40)
			{
				Transform[] componentsInChildren = GameObject.Find("pupils").GetComponentsInChildren<Transform>();
				foreach (Transform transform in componentsInChildren)
				{
					if (transform.gameObject.name != "pupils")
					{
						transform.localScale = Vector3.Lerp(transform.localScale, Vector3.zero, 0.1f);
					}
				}
			}
			pupilFrames++;
			if (pupilFrames % 40 == 0)
			{
				GameObject.Find("pupils").transform.localPosition = new Vector3((float)Random.Range(-1, 2) / 48f, (float)Random.Range(-1, 2) / 48f);
			}
		}
		if (state == 2 && !txt)
		{
			if ((int)gm.GetSessionFlag(2) == 1)
			{
				gm.SetSessionFlag(2, 0);
				gm.SetPartyMembers(susie: true, noelle: true);
			}
			gm.LoadArea(81, fadeIn: false, kris.transform.position, kris.GetDirection());
			state = 3;
			creepygastershit = false;
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetFlag(183, 1);
		if ((int)gm.GetFlag(12) == 0)
		{
			variance = 0;
		}
		else if (PlayerPrefs.GetInt("CompletionState", 0) < 3)
		{
			variance = (GameManager.UsingRecordingSoftware() ? 3 : 2);
		}
		else
		{
			variance = 1;
		}
		gasterEyes = new Sprite[19];
		for (int i = 0; i < 19; i++)
		{
			gasterEyes[i] = Resources.Load<Sprite>("vfx/spr_gaster_eyes_" + i);
		}
		StartText(new string[40]
		{
			"* 我的青年时代，^10我还没当\n  皇家科学员的那个时候...", "* 我是一位皇家法师。", "* 这是一个延续了数万年的\n  家族血统。", "* 我发现了如何将热域的\n  岩浆转化为电能...", "* 而那电能可以为瀑布中\n  发现的废弃人类用具供电。", "* 从那时起，^10家庭血统就变成了\n  科学家。", "* 但是这个血统随着我的\n  死亡而终结了。", "* 终结于DREEMURR的孩子\n  死去的那一刻。", "* 从ASRIEL的尘埃中诞生了\n  一个红色的人类灵魂。", "* ASRIEL离开后，^10我发现结界\n  可以利用灵魂的力量。",
			"* 我非正式地调查了\n  人类的灵魂的能力。", "* 也许我能发现\n  一种打破结界的方法...？", "* 然而，^10随着越来越多的\n  人类灵魂落入国王的手中...", "* 我注意到了一些怪事。", "* 红色灵魂完全不会受到损伤。", "* 不同于其他人类灵魂...", "* 将其他灵魂的内部物质\n  取出后会出现损伤的迹象。", "* 随着灵魂力量实验\n  未能得出任何结论...", "* 我必须知道红色灵魂的\n  抗损伤能力有多强。", "* 我的“陨落”时刻即将来临。",
			"* 凭借我只是一介凡人的理由，\n  ^10我辞去了我的职位...", "* 我带着红色灵魂\n  进入核心...", "* 并紧紧抓住它...", "* 跳入了底部的臭氧层。", "* 短短几秒内，^10我就感觉自己\n  四分五裂、支离破碎。", "* 我却仍然紧握着灵魂。", "* 当我濒临崩溃时，\n  我才打算放手。", "* 然后我就到这了。", "* 周围有无所不有，\n  又空无一物。", "* 还...^10不知怎得...",
			"* 我感觉到红色灵魂就在我附近。", "* 一直都在。", "* 尽管在这里可以重建\n  新容器...", "* 尽管我能够将我的思想\n  重塑为一个本质...", "* 我也从未离开过。", "* 我只能从外面往里看。", "* 只能透过那个灵魂的视角。", "* 无论它在何方，何地。", "* 我只希望再次变得完整。", "* 很长一段时间里，^10我都感觉自己\n  无法离开这里，^10这永恒的炼狱。"
		}, new string[40]
		{
			"#v_gaster_s3_initial_0", "#v_gaster_s3_initial_1", "#v_gaster_s3_initial_2", "#v_gaster_s3_initial_3", "#v_gaster_s3_initial_4", "#v_gaster_s3_initial_5", "#v_gaster_s3_initial_6", "#v_gaster_s3_initial_7", "#v_gaster_s3_initial_8", "#v_gaster_s3_initial_9",
			"#v_gaster_s3_initial_10", "#v_gaster_s3_initial_11", "#v_gaster_s3_initial_12", "#v_gaster_s3_initial_13", "#v_gaster_s3_initial_14", "#v_gaster_s3_initial_15", "#v_gaster_s3_initial_16", "#v_gaster_s3_initial_17", "#v_gaster_s3_initial_18", "#v_gaster_s3_initial_19",
			"#v_gaster_s3_initial_20", "#v_gaster_s3_initial_21", "#v_gaster_s3_initial_22", "#v_gaster_s3_initial_23", "#v_gaster_s3_initial_24", "#v_gaster_s3_initial_25", "#v_gaster_s3_initial_26", "#v_gaster_s3_initial_27", "#v_gaster_s3_initial_28", "#v_gaster_s3_initial_29",
			"#v_gaster_s3_initial_30", "#v_gaster_s3_initial_31", "#v_gaster_s3_initial_32", "#v_gaster_s3_initial_33", "#v_gaster_s3_initial_34", "#v_gaster_s3_initial_35", "#v_gaster_s3_initial_36", "#v_gaster_s3_initial_37", "#v_gaster_s3_initial_38", "#v_gaster_s3_initial_39"
		}, new int[1] { 1 }, new string[0]);
		if (PlayerPrefs.GetInt("GasterSection3", 0) == 0)
		{
			PlayerPrefs.SetInt("GasterSection3", 1);
			txt.MakeUnskippable();
		}
	}
}

