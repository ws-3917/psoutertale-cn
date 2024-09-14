using UnityEngine;

public class PapXOPuzzleENd : CutsceneBase
{
	private InteractPapyrusTextbox papyrus;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			frames++;
			if (frames == 10)
			{
				RevokePlayerControl();
				susie.UseUnhappySprites();
				noelle.UseUnhappySprites();
				ChangeDirection(kris, papyrus.transform.position - kris.transform.position);
				ChangeDirection(susie, papyrus.transform.position - susie.transform.position);
				ChangeDirection(noelle, papyrus.transform.position - noelle.transform.position);
				StartText(new string[5] { "所以你已经战胜了谜题...", "而且它还^05没爆炸^05！\n真不可思议！", "但下一个谜题\n就不会这么安全了！！！", "我希望你能遵守规则！", "嘿嘿嘿嘿捏！！！" }, new string[5] { "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap", "snd_txtpap" }, new int[1], new string[5] { "ufpap_side", "ufpap_neutral", "ufpap_evil", "ufpap_side", "ufpap_evil" });
				papyrus.SetTalkable(txt);
				state = 1;
			}
		}
		else if (state == 1 && !txt)
		{
			if (!MoveTo(papyrus, new Vector3(17.2f, 1.54f), 8f))
			{
				Object.Destroy(papyrus.gameObject);
				state = 2;
				if (Util.GameManager().GetFlagInt(87) < 7)
				{
					StartText(new string[8] { "* 为什么我们不能迈过\n  那些石头呢，^05Kris？", "* 那样这谜题可就简单的\n  不是一点半点了。", "* 对你来说，^05我想。", "* Kris很矮的。", "* 哦，^05对。", "* 等一下，^05如果我们\n  把Kris抻长点，会怎么样？", "* ...^05其实，^05那对\n  人类不起作用。", "* 走吧。" }, new string[8] { "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[1], new string[8] { "su_annoyed", "su_smirk_sweat", "no_playful", "no_neutral", "su_side", "su_surprised", "su_inquisitive", "su_neutral" });
					ChangeDirection(kris, susie.transform.position - kris.transform.position);
					ChangeDirection(susie, kris.transform.position - susie.transform.position);
					ChangeDirection(noelle, susie.transform.position - noelle.transform.position);
				}
			}
			else
			{
				SetMoveAnim(papyrus, isMoving: true);
				ChangeDirection(papyrus, Vector2.right);
				ChangeDirection(kris, papyrus.transform.position - kris.transform.position);
				ChangeDirection(susie, papyrus.transform.position - susie.transform.position);
				ChangeDirection(noelle, papyrus.transform.position - noelle.transform.position);
			}
		}
		else
		{
			if (state != 2)
			{
				return;
			}
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					noelle.UseHappySprites();
					ChangeDirection(susie, noelle.transform.position - susie.transform.position);
				}
				else if (AtLine(8))
				{
					ChangeDirection(susie, kris.transform.position - susie.transform.position);
				}
			}
			else
			{
				RestorePlayerControl();
				ChangeDirection(kris, Vector2.down);
				Object.Instantiate(Resources.Load<GameObject>("overworld/npcs/StalkerFlowey"), new Vector3(-5.61f, -0.24f), Quaternion.identity);
				EndCutscene();
				state = 3;
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		papyrus = Object.FindObjectOfType<InteractPapyrusTextbox>();
		papyrus.StopStare();
	}
}

