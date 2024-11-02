using UnityEngine;

public class DoggoPostfightCutscene : CutsceneBase
{
	private int endState;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (endState == 1 && !txt)
		{
			gm.PlayMusic("zoneMusic");
			kris.ChangeDirection(Vector2.down);
			EndCutscene();
		}
		else if (endState == 2 && !txt)
		{
			frames++;
			GameObject.Find("Doggo").transform.position = new Vector3(2.938f, Mathf.Lerp(-0.878f, -1.794f, (float)frames / 40f));
			if (frames == 60)
			{
				gm.PlayMusic("zoneMusic");
				kris.ChangeDirection(Vector2.down);
				EndCutscene();
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		endState = int.Parse(par[0].ToString());
		if (endState == 1)
		{
			Object.Destroy(GameObject.Find("Doggo"));
			if (!gm.SusieInParty() || (int)gm.GetSessionFlag(3) == 0 || ((int)gm.GetSessionFlag(3) == 1 && (int)gm.GetFlag(172) == 1))
			{
				if ((int)gm.GetFlag(12) == 1)
				{
					gm.PlayGlobalSFX("sounds/snd_ominous");
				}
				gm.PlayMusic("zoneMusic");
				EndCutscene();
			}
			else if ((int)gm.GetSessionFlag(5) == 1)
			{
				StartText(new string[2] { "* ...........", "* 你俩别那么看我！！！" }, new string[2] { "snd_txtnoe", "snd_txtsus" }, new int[2] { 5, 0 }, new string[2] { "no_silent", "su_angry" });
			}
			else
			{
				StartText(new string[3]
				{
					"* Kris，^05为什么我们已经\n  赢得了他的信任之后还要\n  杀了他...？",
					"* 对啊，^05老兄，^05\n  你可真残忍。",
					((int)gm.GetFlag(87) > 2) ? "* 我希望你不要再开始屠杀了。" : "* 你没事吧？"
				}, new string[3] { "snd_txtnoe", "snd_txtsus", "snd_txtsus" }, new int[2], new string[3] { "no_shocked", "su_pissed", "su_annoyed" });
			}
		}
		else
		{
			if ((int)gm.GetFlag(12) == 1)
			{
				WeirdChecker.Abort(gm);
			}
			GameObject.Find("Doggo").GetComponent<Animator>().Play("doggo_look");
			StartText(new string[4]
			{
				"* 我-^05我-^05我跟不认识的人\n  交上了朋友...！",
				"* 而且他们几乎没动！！！",
				"* 也-^05也许我可以和余下的守卫\n  和好...",
				((int)gm.GetSessionFlag(4) == 1) ? "* 我...^10我得睡会..." : "* 我...^10我需要来点狗粮..."
			}, new string[1] { "snd_text" }, new int[1], new string[1] { "" });
		}
	}
}

