using UnityEngine;

public class TorielSwitchesHardModeCutscene : CutsceneBase
{
	private Animator toriel;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && !txt)
		{
			if (toriel.transform.position != new Vector3(10f, -0.78f))
			{
				toriel.Play("WalkRight");
				toriel.SetFloat("speed", 1f);
				toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(10f, -0.78f), 0.125f);
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					PlaySFX("sounds/snd_boomf");
				}
				if (frames == 30)
				{
					toriel.GetComponent<SpriteRenderer>().enabled = false;
					StartText(new string[2] { "* 我还以为她不会如此刻薄...", "* 说实话，^05我感觉不太舒服。" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_concerned", "su_dejected" }, 0);
					state = 1;
				}
			}
		}
		if (state == 1 && !txt)
		{
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		if ((int)gm.GetFlag(108) == 1)
		{
			gm.SetFlag(119, 1);
			toriel = GameObject.Find("Toriel").GetComponent<Animator>();
			toriel.transform.position = new Vector3(0.51f, -0.78f);
			StartText(new string[9] { "* 要解开这个谜题^10，\n  你需要打开多个开关。", "* 别担心^10，我已经帮你--", "* 额，^05能演示一下吗？", "* 肃静。\n^10* 我正在教这孩子怎么在--", "* 额，我不应该在这！", "* 做事快点也不会少块肉，\n^05  对吧？", "* ...", "* 行，^05我只会演示一遍。", "* 学学怎么耐心一点吧。" }, new string[9] { "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[9] { "tori_neutral", "tori_neutral", "su_smile_sweat", "tori_mad", "su_pissed", "su_annoyed", "tori_annoyed", "tori_mad", "tori_annoyed" }, 0);
			base.StartCutscene(par);
		}
		else
		{
			EndCutscene();
		}
	}
}

