public class ToriCallEBCutscene : CutsceneBase
{
	public void Update()
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
				state = 1;
				StartText(new string[12]
				{
					"* （嘀嘀嘀，嘀嘀嘀…）", "* Kris？？？^10喂？？？\n^10* 你接了？？！", "* ...^05谢天谢地。", "* Kris，^05你和Susie到底跑\n  哪去了？？？", "* 我还以为有人把你们\n  两个绑走了呢！", "* 你知道我们家的车发生\n  什么了吗？？？", "* Kris，^05请不要再\n  就这样离开了。", "* 无论如何，^05在外面待会就回来。", "* 小心点，^05好吗，^05亲爱的？", "* (滴...)",
					"* 等下，^05Kris，^05这个是你的\n  原本的母亲还是刚哭完那个？", "* （啥...？）"
				}, new string[12]
				{
					"snd_text", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_text",
					"snd_txtsus", "snd_txtnoe"
				}, new int[23], new string[12]
				{
					"", "torid_blush", "torid_worry", "torid_weird", "torid_worry", "torid_mad", "torid_worry", "torid_wack", "torid_worry", "",
					"su_surprised", "no_confused"
				});
			}
		}
		if (state == 1 && !txt)
		{
			gm.PlayMusic("zoneMusic");
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetFlag(64, 1);
		PlaySFX("sounds/snd_dial");
		gm.StopMusic();
		gm.SetFlag(84, 1);
	}
}

