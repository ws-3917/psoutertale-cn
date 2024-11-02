public class TorielCall2 : CutsceneBase
{
	private void Update()
	{
		if (state == 0 && !txt)
		{
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		PlaySFX("sounds/snd_dial");
		if ((int)gm.GetFlag(108) == 1)
		{
			StartText(new string[11]
			{
				"* （嘀嘀嘀，嘀嘀嘀…）", "* 你好。^10\n* 这里是TORIEL。", "* 很抱歉没有接你的电话。", "* 我目前正忙着为\n  你和Susie准备些东西。", "* Speaking of,^05 I do\n  have a question.", "* You like things other\n  than butterscotch or\n  cinnamon,^10 too...", "* Do you not?", "* SNAILS SNAILS SNAILS\n  SNAILS SNAILS SNAILS\n  SNAILS SNAILS SNAILS", "* ...", "* I will see you\n  soon,^05 my child.",
				"* (滴...)"
			}, new string[11]
			{
				"snd_text", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor",
				"snd_text"
			}, new int[18], new string[11]
			{
				"", "tori_neutral", "tori_worry", "tori_worry", "tori_worry", "tori_worry", "tori_worry", "su_excited", "tori_weird", "tori_wack",
				""
			});
		}
		else
		{
			StartText(new string[6] { "* （嘀嘀嘀，嘀嘀嘀…）", "* 你好。^10\n* 这里是TORIEL。", "* 很抱歉没有接你的电话。", "* 我目前正忙着为\n  你和Susie准备些东西。", "* 感谢你的耐心，^10亲爱的。", "* (滴...)" }, new string[6] { "snd_text", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_text" }, new int[18], new string[6] { "", "tori_neutral", "tori_worry", "tori_worry", "tori_neutral", "" });
		}
		gm.SetFlag(61, 1);
	}
}

