using System.Collections.Generic;
using UnityEngine;

public class DummyDefeatCutscene : CutsceneBase
{
	private int endState;

	private Animator toriel;

	private int FUCK;

	public override Dictionary<string, string[]> GetDefaultStrings()
	{
		Dictionary<string, string[]> dictionary = new Dictionary<string, string[]>();
		dictionary.Add("toriel_kill_comment_hm", new string[4] { "* 你为什么要跟人偶战斗呢，\n^05  我的孩子？", "* 我们可不想伤害任何人，\n  对吗...？", "* 所以我才建议来聊聊天。", "* 无论如何，^05跟上吧。" });
		dictionary.Add("toriel_act_comment_hm", new string[2] { "* 啊^05，做得好^10！\n  * 你做得很好。", "* 感谢你的倾听，^05我的孩子。" });
		dictionary.Add("toriel_bore_comment_hm", new string[3] { "* ^10.^10.^10.", "* ^10.^10.^10.", "* 下个房间等着我们呢。" });
		dictionary.Add("kill_hm", new string[3] { "* 噫...", "* 人偶...^15化作尘埃了。", "* 还挺吓人的，^10说实话。" });
		dictionary.Add("act_hm", new string[5] { "* 好，看着吧。", "* 行动在这里也奏效。", "* 你也可以叫我来行动。", "* 要是Kris的妈妈不让我\n  和你战斗，^05那么...", "* （你学习了S行动。）" });
		dictionary.Add("bore_hm", new string[2] { "* ...", "* （...真是个怪小孩...）" });
		dictionary.Add("act", new string[2] { "* 不错，很酷。", "* 真高兴能知道那个\n  烂到爆的行动在这里\n  居然还有用。" });
		dictionary.Add("kill", new string[3] { "* 哈...", "* 它直接...^15化作尘埃了。", "* 还挺吓人的，^10说实话。" });
		dictionary.Add("bore", new string[2] { "* ...", "* ...也行吧？？？" });
		return dictionary;
	}

	private void Update()
	{
		if (state == 0 && !txt)
		{
			GameObject.Find("LoadingZoneLeave").GetComponent<BoxCollider2D>().enabled = true;
			GameObject.Find("SusieAnnoyed").GetComponent<InteractTextBox>().enabled = false;
			EndCutscene();
		}
		if (state == 1 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				toriel.Play("WalkUp");
			}
			toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(-0.03f, 10f), 0.125f);
			toriel.GetComponent<SpriteRenderer>().enabled = toriel.transform.position.y < 2.84f;
			if (frames >= 5)
			{
				if (susie.transform.position.x != -1f)
				{
					susie.GetComponent<Animator>().SetBool("isMoving", value: true);
					susie.transform.position = Vector3.MoveTowards(susie.transform.position, new Vector3(-1f, -1.127f), 0.125f);
				}
				else
				{
					susie.GetComponent<Animator>().SetBool("isMoving", value: false);
					kris.ChangeDirection(Vector2.left);
					if ((int)gm.GetFlag(175) == 1)
					{
						StartText(GetStringArray("bore_hm"), new string[3] { "snd_txtsus", "snd_txtsus", "snd_text" }, new int[18], new string[3] { "su_wideeye", "su_inquisitive", "" }, 0);
					}
					else if (endState == 1)
					{
						StartText(GetStringArray("kill_hm"), new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_side", "su_neutral", "su_side_sweat" }, 0);
					}
					else
					{
						StartText(GetStringArray("act_hm"), new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_text", "snd_txtsus" }, new int[18], new string[5] { "su_confident", "su_smile", "su_smile_side", "su_annoyed", "" }, 0);
					}
					state = 2;
				}
			}
		}
		if (state == 2 && !txt)
		{
			kris.ChangeDirection(Vector2.down);
			susie.SetSelfAnimControl(setAnimControl: true);
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		endState = (int)par[0];
		toriel = GameObject.Find("Toriel").GetComponent<Animator>();
		bool flag = (int)gm.GetFlag(108) == 1;
		Object.Destroy(GameObject.Find("susieinteract"));
		if (flag)
		{
			susie.SetSelfAnimControl(setAnimControl: false);
			gm.SetPartyMembers(susie: true, noelle: false);
		}
		if (endState == 1)
		{
			Object.Destroy(GameObject.Find("人偶"));
		}
		if ((int)gm.GetFlag(175) == 1)
		{
			if (flag)
			{
				StartText(GetStringArray("toriel_bore_comment_hm"), new string[3] { "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[3] { "tori_weird", "tori_weird_side", "tori_happy" }, 0);
				state = 1;
			}
			else
			{
				StartText(GetStringArray("bore"), new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_wideeye", "su_inquisitive" }, 0);
			}
		}
		else if (endState == 1)
		{
			if (flag)
			{
				StartText(GetStringArray("toriel_kill_comment_hm"), new string[4] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[4] { "tori_weird", "tori_worry", "tori_worry", "tori_neutral" }, 0);
				state = 1;
			}
			else
			{
				StartText(GetStringArray("kill"), new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_side", "su_neutral", "su_side_sweat" }, 0);
			}
		}
		else if (endState == 2)
		{
			if (flag)
			{
				StartText(GetStringArray("toriel_act_comment_hm"), new string[2] { "snd_txttor", "snd_txttor" }, new int[18], new string[2] { "tori_happy", "tori_happy" }, 0);
				state = 1;
			}
			else
			{
				StartText(GetStringArray("act"), new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_smile", "su_smile_side" }, 0);
			}
		}
	}
}

