using UnityEngine;

public class SusieNoticesDummyCutscene : CutsceneBase
{
	private Animator toriel;

	private void Update()
	{
		if (state == 0 && !txt)
		{
			EndCutscene();
		}
		if (state == 1 && !txt)
		{
			toriel.Play("WalkRight");
			toriel.SetFloat("speed", 1f);
			if (toriel.transform.position != new Vector3(-0.03f, 2.15f))
			{
				toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(-0.03f, 2.15f), 0.125f);
			}
			else
			{
				toriel.Play("WalkDown", 0, 0f);
				toriel.SetFloat("speed", 0f);
				state = 2;
				StartText(new string[5] { "* ...还有，^10这位女士。\n^05* 请不要掺活进人类的战斗。", "* 欸，你认真的？？？", "* 我只是想要--", "* 跟人类战斗？\n^10* 你最好别碰他。", "* （提到战斗...\n  我可比她懂得多不少...）" }, new string[5] { "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txtsus" }, new int[18], new string[5] { "tori_mad", "su_pissed", "su_pissed", "tori_weird", "su_dejected" }, 0);
			}
		}
		if (state == 2 && !txt)
		{
			kris.ChangeDirection(Vector2.down);
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		if ((int)gm.GetFlag(108) == 1)
		{
			toriel = GameObject.Find("Toriel").GetComponent<Animator>();
			toriel.transform.position = new Vector3(-3.45f, -0.33f);
			susie.transform.position = new Vector3(-6.148f, -1.127f);
			GameObject.Find("susieinteract").transform.position = new Vector3(-6.229f, -1.65f);
			gm.SetPartyMembers(susie: false, noelle: false);
			StartText(new string[13]
			{
				"* 作为在地底世界的一位人类，\n^10  你或许会受到怪物的攻击。", "* 你可能已经充分的了解到了...", "* 你得学会应付这种场景。", "* 但是，^10不要担心！^10\n* 流程很简单。", "* 当你遭遇了怪物^10，\n  你会进入战斗。", "* 在陷入战斗时^10，\n  友善地跟它们交谈。", "* 你也可以打回来，^05\n  前提是它们太--", "* 孩子，^05别听她的！", "* 去试试和人偶聊聊天吧。", "* 也可以选择揍爆它？？？",
				"* 那特么就是一个训练人偶。", "* 暴力可不是什么好选项，\n^05  我的孩子。", "* （我也没说啥啊？？？）"
			}, new string[13]
			{
				"snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txtsus",
				"snd_txtsus", "snd_txttor", "snd_txtsus"
			}, new int[18], new string[13]
			{
				"tori_neutral", "tori_annoyed", "tori_neutral", "tori_happy", "tori_neutral", "tori_neutral", "su_side_sweat", "tori_wack", "tori_neutral", "su_inquisitive",
				"su_annoyed", "tori_wack", "su_side_sweat"
			}, 0);
			state = 1;
			return;
		}
		GameObject.Find("LoadingZoneLeave").GetComponent<BoxCollider2D>().enabled = false;
		if ((int)gm.GetFlag(7) == 0)
		{
			StartText(new string[2] { "* Kris，看啊！^10\n* 一个训练人偶！", "* 我们应该去揍爆它。" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_surprised", "su_smile" }, 0);
			gm.SetFlag(7, 1);
		}
		else if ((int)gm.GetFlag(7) == 1)
		{
			StartText(new string[3] { "* 额，Kris？", "* 你犹豫什么呢？", "* 咱是在热身吗。" }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_smile_sweat", "su_smile_sweat", "su_smile_sweat" }, 0);
			gm.SetFlag(7, 2);
		}
		else if ((int)gm.GetFlag(7) == 2)
		{
			StartText(new string[1] { "* ..." }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_inquisitive", "su_smile_sweat", "su_smile_sweat" }, 0);
			gm.SetFlag(7, 3);
		}
		else if ((int)gm.GetFlag(7) == 3)
		{
			EndCutscene();
		}
		if ((int)gm.GetFlag(7) == 3)
		{
			GameObject.Find("SusieAnnoyed").GetComponent<InteractTextBox>().ModifyContents(new string[1] { "* Kris，^05别他妈的到处乱转了。" }, new string[1] { "snd_txtsus" }, new int[1], new string[1] { "su_annoyed" });
		}
		GameObject.Find("SusieAnnoyed").GetComponent<InteractTextBox>().enabled = true;
	}
}

