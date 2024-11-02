using System.Collections.Generic;
using UnityEngine;

public class DeepForestFirstCutscene : CutsceneBase
{
	private bool oblit;

	private bool selecting;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			frames++;
			if (frames >= 30)
			{
				if (frames == 30)
				{
					SetMoveAnim(susie, isMoving: true);
					SetMoveAnim(noelle, isMoving: true);
				}
				if (!MoveTo(susie, new Vector3(20.889f, 1.66f), 4f))
				{
					SetMoveAnim(susie, isMoving: false);
				}
				if (!MoveTo(noelle, new Vector3(19.138f, 1.612f), 4f))
				{
					SetMoveAnim(noelle, isMoving: false);
				}
			}
			if (frames == 90)
			{
				StartText(new string[4]
				{
					"* 这地方可真...呃...",
					"* 阴森。",
					oblit ? "* 我在这片森林里什么也看不见。" : "* 除了一片黑暗什么也\n  看不见...",
					oblit ? "* 你们呢？" : "* 你呢，^05Kris？"
				}, new string[4]
				{
					"snd_txtsus",
					"snd_txtsus",
					oblit ? "snd_txtsus" : "snd_txtnoe",
					oblit ? "snd_txtsus" : "snd_txtnoe"
				}, new int[1], new string[4]
				{
					"su_neutral",
					"su_side",
					oblit ? "su_smirk_sweat" : "no_silent",
					oblit ? "su_neutral" : "no_confused_side"
				});
				txt.EnableSelectionAtEnd();
				frames = 0;
				state = 1;
			}
		}
		else if (state == 1)
		{
			if ((bool)txt)
			{
				if (AtLine(4))
				{
					ChangeDirection(susie, oblit ? Vector2.left : Vector2.up);
					ChangeDirection(noelle, oblit ? Vector2.right : Vector2.up);
				}
				if (txt.CanLoadSelection() && !selecting)
				{
					selecting = true;
					InitiateDeltaSelection();
					select.SetupChoice(Vector2.left, "I can see\nfine", Vector3.zero);
					select.SetupChoice(Vector2.right, "I can't see\nanything", new Vector3(-46f, 0f));
					select.Activate(this, 0, txt.gameObject);
				}
			}
		}
		else if (state == 2 && !txt)
		{
			RestorePlayerControl();
			EndCutscene();
		}
		else if (state == 3 && !txt && !MoveTo(susie, new Vector3(20f, 1f), 6f))
		{
			frames++;
			if (frames == 1)
			{
				SetMoveAnim(susie, isMoving: false);
			}
			if (frames == 5)
			{
				StartText(new string[9] { "* Kris，^05我们刚刚发现了这所\n  有一堆兔子的奇怪房子。", "* 它们看起来比我们在这里\n  见到的其他人都要友善。", "* 我不确定我能否完全\n  信任它们...", "* 反正Noelle决定进入。", "* （不知道为什么，她也坚决\n  要在黑暗中行走...）", "* 大概...^05从这里开始右转两次。", "...^05这特么是什么表情？", "* 你在这里看不清吗？", "* 最好在我们去那里的时候\n  带一个火把。" }, new string[1] { "snd_txtsus" }, new int[1], new string[9] { "su_sus", "su_smile_sweat", "su_neutral", "su_side", "su_inquisitive", "su_smirk", "su_annoyed", "su_smirk_sweat", "su_neutral" });
				state = 2;
			}
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		selecting = false;
		ChangeDirection(susie, Vector2.up);
		ChangeDirection(noelle, Vector2.up);
		List<string> list = new List<string>();
		List<string> list2 = new List<string>();
		List<string> list3 = new List<string>();
		if (index == Vector2.left)
		{
			if (oblit)
			{
				list.AddRange(new string[3] { "* 啊对对对，^05一通瞎扯。", "* 你听自来一点也不自信。", "* 用我提醒你把火把带上吗。" });
				list2.Add("snd_txtsus");
				list3.AddRange(new string[3] { "su_annoyed", "su_side", "su_neutral" });
			}
			else
			{
				list.AddRange(new string[3] { "* 你可确定？", "* 我在哪里读到过人类的视力\n  比怪物要差。", "* 也许随身携带那个火把是个\n  好主意。" });
				list2.AddRange(new string[3] { "snd_txtnoe", "snd_txtnoe", "snd_txtnoe" });
				list3.AddRange(new string[3] { "no_confused", "no_thinking", "no_curious" });
			}
		}
		else
		{
			list.Add("* ...最好还是带上那根火把吧。");
			list2.Add("snd_txtsus");
			list3.Add("su_inquisitive");
		}
		list.AddRange(new string[2] { "* 天了，^05就算你能看见我也\n  得让你拿着。", "* 这也太黑了。" });
		list2.AddRange(new string[2] { "snd_txtsus", "snd_txtsus" });
		list3.AddRange(new string[2] { "su_annoyed", "su_side" });
		StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray());
		state = 2;
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		oblit = (int)gm.GetFlag(172) == 1;
		RevokePlayerControl();
		cam.SetFollowPlayer(follow: true);
		gm.SetFlag(203, 1);
		gm.SetFlag(1, "side_sweat");
		if (!Util.GameManager().SusieInParty())
		{
			LoadingZone[] array = Object.FindObjectsOfType<LoadingZone>();
			foreach (LoadingZone obj in array)
			{
				obj.SetForceActivationTrigger(forceActivationTrigger: true);
				obj.ModifyContents("* Kris，^05我们去那个房子那边吧。", "snd_txtsus", "su_annoyed");
			}
			Util.GameManager().SetPartyMembers(susie: true, noelle: false);
			StartText(new string[1] { "* KRIS！！！" }, new string[1] { "snd_txtsus" }, new int[1], new string[1] { "" });
			GameObject.Find("LOL").transform.position = new Vector3(36.22f, -16.38f);
			susie.transform.position = new Vector3(20f, -2.54f);
			SetMoveAnim(susie, isMoving: true);
			ChangeDirection(susie, Vector2.up);
			state = 3;
		}
		else if (!oblit)
		{
			gm.SetFlag(2, "silent");
		}
	}
}

