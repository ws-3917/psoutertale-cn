using UnityEngine;

public class ElecMazeEndCutscene : CutsceneBase
{
	private bool oblit;

	private bool leave;

	private Animator papyrus;

	private Animator sans;

	private int runFrames;

	private bool susRun;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				Object.Destroy(GameObject.Find("Orb"));
				ChangeDirection(papyrus, Vector2.left);
				gm.StopMusic(20f);
				ChangeDirection(kris, Vector2.right);
			}
			MoveTo(papyrus, new Vector3(100f, 0.041f), 10f);
			if (frames == 35)
			{
				ChangeDirection(kris, Vector2.up);
				susie.UseUnhappySprites();
				state = 1;
				StartText(new string[1] { "* 准备好。" }, new string[1] { "snd_txtsans" }, new int[1], new string[1] { "ufsans_empty" });
				frames = 0;
			}
		}
		else if (state == 1 && !txt)
		{
			if ((bool)sans)
			{
				if (sans.transform.position.y != -0.14f)
				{
					SetMoveAnim(sans, isMoving: true);
					MoveTo(sans, new Vector3(3.853f, -0.14f), 4f);
					return;
				}
				if (sans.transform.position.x != 7.22f)
				{
					ChangeDirection(kris, Vector2.right);
					ChangeDirection(sans, Vector2.right);
					MoveTo(sans, new Vector3(7.22f, -0.14f), 4f);
					return;
				}
				Object.Destroy(Object.FindObjectOfType<ElectricMazeHandler>().gameObject);
				if (leave)
				{
					ChangeDirection(kris, Vector2.left);
					state = 3;
					StartText(new string[2] { "* 好，呃...^10真浪费时间啊。", "* 跟我说说。" }, new string[2] { "snd_txtsus", "snd_txtnoe" }, new int[1], new string[2] { "su_annoyed", "no_depressedx" });
				}
			}
			else if (!MoveTo(susie, new Vector3(-1.21f, 0.84f), 6f))
			{
				ChangeDirection(kris, Vector2.left);
				StartText(new string[2] { "* 好，呃...^10真浪费时间啊。", "* 还是抓紧走吧，^05我想。" }, new string[1] { "snd_txtsus" }, new int[1], new string[2] { "su_annoyed", "su_side" });
				SetMoveAnim(susie, isMoving: false);
				SetMoveAnim(noelle, isMoving: false);
				state = 2;
			}
			else
			{
				SetMoveAnim(susie, isMoving: true);
				SetMoveAnim(noelle, isMoving: true);
				MoveTo(noelle, new Vector3(-1.21f, 0.84f), 6f);
			}
		}
		else if (state == 2 && !txt)
		{
			RestorePlayerControl();
			susie.UseHappySprites();
			if ((int)gm.GetFlag(87) < 4)
			{
				noelle.UseHappySprites();
			}
			ChangeDirection(kris, Vector2.down);
			gm.PlayMusic("zoneMusic");
			gm.SetCheckpoint(82);
			gm.EnableMenu();
			EndCutscene();
		}
		else if (state == 3 && !txt)
		{
			if (!MoveTo(noelle, new Vector3(7.33f, 0.84f), 6f))
			{
				if (!MoveTo(susie, new Vector3(-1.21f, 0.84f), 6f))
				{
					ChangeDirection(kris, Vector2.left);
					StartText(new string[2] { "* 对呃...^05对不住了，^05Kris。", "* 前头见吧。" }, new string[1] { "snd_txtsus" }, new int[1], new string[2] { "su_dejected", "su_side" });
					SetMoveAnim(susie, isMoving: false);
					SetMoveAnim(noelle, isMoving: false);
					state = 4;
				}
				else
				{
					SetMoveAnim(susie, isMoving: true);
				}
			}
			else
			{
				if (noelle.transform.position.x > 4f)
				{
					ChangeDirection(kris, Vector2.right);
				}
				else if (noelle.transform.position.x > 1f)
				{
					ChangeDirection(kris, Vector2.up);
				}
				SetMoveAnim(noelle, isMoving: true);
			}
		}
		else if (state == 4 && !txt)
		{
			int num = 8;
			runFrames++;
			if (runFrames > 10)
			{
				num = ((runFrames > 60) ? 12 : 10);
			}
			MoveTo(susie, new Vector3(8.33f, 0.84f), num);
			if (runFrames == 10 && susRun)
			{
				PlayAnimation(susie, "run", 1.5f);
			}
			if (frames == 0)
			{
				SetMoveAnim(susie, isMoving: true, 1.5f);
				ChangeDirection(kris, Vector2.down);
				gm.PlayMusic("zoneMusic");
				kris.SetCollision(onoff: true);
				kris.SetSelfAnimControl(setAnimControl: true);
				gm.EnablePlayerMovement();
				gm.SetCheckpoint(82);
				gm.EnableMenu();
				frames++;
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		papyrus = GameObject.Find("Papyrus").GetComponent<Animator>();
		sans = GameObject.Find("Sans").GetComponent<Animator>();
		papyrus.enabled = true;
		ChangeDirection(papyrus, Vector2.down);
		ChangeDirection(sans, Vector2.down);
		gm.SetFlag(189, 1);
		oblit = (int)Util.GameManager().GetFlag(172) == 1;
		leave = Object.FindObjectOfType<ElectricMazeHandler>().IsLeave();
		Object.FindObjectOfType<ElectricMazeHandler>().StopLook();
		if (!leave)
		{
			Util.GameManager().SetPartyMembers(susie: true, noelle: true);
			gm.SetFlag(1, "side");
			if (gm.GetFlagInt(172) == 0)
			{
				gm.SetFlag(2, "thinking");
			}
		}
		Object.FindObjectOfType<ActionPartyPanels>().SetActivated(activated: false);
		Object.FindObjectOfType<ActionPartyPanels>().Lower();
		StartText(new string[9] { "不可置信！！^05\n你这脚滑的蜗牛！！", "你这么轻松就\n解决了...^10\n简直太轻松了！", "但是！！", "下一个谜题可就没这么\n简单了！", "那是由我的兄弟，\nSANS设计的！", "不，^05不会再电击\n你的灵魂了。", "这会是一场\n精心设计的挑战！！", "你必定会被\n彻底消灭！", "捏嘿嘿嘿！！" }, new string[9] { "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap" }, new int[1], new string[9] { "ufpap_mad", "ufpap_side", "ufpap_neutral", "ufpap_evil", "ufpap_evil", "ufpap_side", "ufpap_neutral", "ufpap_evil", "ufpap_neutral" });
		RevokePlayerControl();
		SetMoveAnim(kris, isMoving: false);
		SetMoveAnim(susie, isMoving: false);
		SetMoveAnim(noelle, isMoving: false);
		ChangeDirection(kris, Vector2.up);
		ChangeDirection(susie, Vector2.right);
		ChangeDirection(noelle, Vector2.right);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		susRun = GameManager.GetOptions().runAnimations.value == 1;
		GameObject.Find("LoadingZone").GetComponent<LoadingZone>().SetForceActivationTrigger(forceActivationTrigger: false);
	}
}

