using UnityEngine;

public class FloweyDefeatCutscene : CutsceneBase
{
	private int endState;

	private void Update()
	{
		if (state == 0)
		{
			frames++;
			if (endState == 2 && frames == 30)
			{
				if ((int)gm.GetFlag(13) == 3)
				{
					StartText(new string[7] { "* 我猜...^10\n  这暂时解决了。", "* ...", "* Kris...?", "* You look...^10 relieved.", "* ...", "* Well,^05 you don't have\n  to talk about that\n  right now.", "* 我们走吧." }, new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[7] { "su_side", "su_neutral", "su_side", "su_side", "su_side", "su_smirk", "su_smile" });
				}
				else
				{
					StartText(new string[7] { "* 我猜...^10\n  这暂时解决了。", "* ...", "* 我有点纳闷那朵花\n  是怎么个事。", "* “了结我”...", "* 那有点极端了，^05\n  你不这么觉得吗，^05Kris?", "* ...", "* 好啦,^05我们还是\n  快离开这里吧。" }, new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[7] { "su_side", "su_side", "su_smile_side", "su_dejected", "su_dejected", "su_side", "su_smile" });
				}
				state = 1;
			}
			else if (endState == 1 && frames == 30)
			{
				StartText(new string[4] { "* 唉。", "* 这...^10 真的有点残暴了喂。", "* ...", "* 还是快离开这里吧，^05 Kris。" }, new string[7] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[4] { "su_side_sweat", "su_side_sweat", "su_dejected", "su_neutral" });
				gm.SetFlag(1, "side_sweat");
				state = 1;
			}
		}
		if (state == 1 && !txt)
		{
			cam.SetFollowPlayer(follow: true);
			kris.ChangeDirection(Vector2.down);
			if (endState == 2 && (int)gm.GetFlag(13) == 3)
			{
				WeirdChecker.Abort(gm);
			}
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		endState = int.Parse(par[0].ToString());
		Object.Destroy(GameObject.Find("BigFlower"));
		if (endState == 1)
		{
			GameObject.Find("DeadFlowey").transform.position = new Vector3(0f, 0.172f);
		}
		kris.GetComponent<Animator>().Play("idle");
		susie.GetComponent<Animator>().Play("idle");
		kris.SetSelfAnimControl(setAnimControl: true);
		susie.SetSelfAnimControl(setAnimControl: true);
		kris.ChangeDirection(Vector2.up);
		susie.ChangeDirection(Vector2.up);
	}
}

