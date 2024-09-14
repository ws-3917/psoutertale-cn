using UnityEngine;

public class LetterStartCutscene : CutsceneBase
{
	private void Update()
	{
		if (isPlaying && state == 0 && !txt)
		{
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.PlayMusic("music/mus_papyrus", 0.85f);
		gm.SetFlag(84, 8);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		GameObject.Find("LoadingZone").GetComponent<LoadingZone>().SetForceActivationTrigger(forceActivationTrigger: true);
		StartText(new string[4] { "人类！！！", "我希望你已经准备好\n面对这不可能的\n挑战了！！！", "由我那才华\n横溢的兄弟创作的。", "你绝对过不了这关！！" }, new string[1] { "snd_txtpap" }, new int[1], new string[4] { "ufpap_evil", "ufpap_laugh", "ufpap_side", "ufpap_laugh" });
	}
}

