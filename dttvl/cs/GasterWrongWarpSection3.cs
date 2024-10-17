using UnityEngine;

public class GasterWrongWarpSection3 : CutsceneBase
{
	private void Update()
	{
		if (state == 0 && !txt)
		{
			gm.SetPartyMembers(susie: true, noelle: true);
			Util.GameManager().SetFlag(178, 1);
			Util.GameManager().LockMenu();
			Util.GameManager().LoadArea(87, fadeIn: false, new Vector2(10.04f, -15.3f), Vector2.left);
			state = 1;
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		StartText(new string[6] { "* 真是聪明，^10DREEMURR...", "* 你来到了这个地方也真是聪明。", "* 然而，^10你不应该在这里。", "* 然而事实上，^10你并不在这。", "* 回到你必须在的地方，^10\n  忘掉我们的交流...", "* 直到我们再次见面，^10KRIS。" }, new string[6] { "#v_gaster_ww_0", "#v_gaster_ww_1", "#v_gaster_ww_2", "#v_gaster_ww_3", "#v_gaster_ww_4", "#v_gaster_ww_5" }, new int[1] { 1 }, new string[0]);
		txt.MakeUnskippable();
		gm.SetFlag(231, 1);
	}
}

