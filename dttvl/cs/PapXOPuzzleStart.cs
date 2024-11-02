using UnityEngine;

public class PapXOPuzzleStart : CutsceneBase
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
			if (frames == 30)
			{
				papyrus.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
				StartText(new string[7] { "哦，^05你们来啦。", "* 你！！！", "* 你为什么没看住Sans？？？", "你说啥呢？", "* 我们被他伏击了，\n  ^05笨蛋！！！", "什么？？？^05\n太荒谬了！！！", "他一直在认真地听我说话，\n^05就在这-" }, new string[7] { "snd_txtpap", "snd_txtsus", "snd_txtsus", "snd_txtpap", "snd_txtsus", "snd_txtpap", "snd_txtpap" }, new int[1], new string[7] { "ufpap_neutral", "su_wtf", "su_pissed", "ufpap_side", "su_angry", "ufpap_mad", "ufpap_neutral" });
				papyrus.SetTalkable(txt);
				state = 1;
				frames = 0;
			}
		}
		else if (state == 1)
		{
			if ((bool)txt)
			{
				if (AtLine(2) || AtLine(5))
				{
					SetSprite(susie, "spr_su_wtf");
				}
				else if (AtLine(3))
				{
					SetSprite(susie, "spr_su_throw_ready");
				}
				else if (AtLine(6))
				{
					susie.EnableAnimator();
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				ChangeDirection(papyrus, Vector2.up);
			}
			if (frames == 60)
			{
				ChangeDirection(papyrus, Vector2.left);
				StartText(new string[20]
				{
					"我...^05还在想他今天怎么\n这么安静。",
					"* 你还在想？？？",
					"他会去哪呢...？",
					"哦，^05这边是另外一个\n谜题。",
					"所以他在我布置完之前\n他逃了！！！",
					"我对此表示歉意。",
					"我知道他就在前面\n的谜题那。",
					"我都能从这看到他！",
					"所以你们现在都安全了，\n不会受到他的伤害。",
					"但是，^05啊...",
					"这里还有一个谜题\n需要你来解决。",
					"我本打算把它做成\n我的脸型状的...",
					"但SANS希望它更有压迫感。",
					"所以我做成了他的脸！！",
					"但我不知道怎么解决。",
					"你直接靠边站就行，\n我会解决的。",
					"你绝对不应该按任何\n很酷的红色按钮...",
					"那些只是摆设。",
					"捏嘿嘿...",
					(Util.GameManager().GetFlagInt(211) == 1) ? "* (You kinda want to push the\n  button...)" : "* （...不要按红色按钮，^05\n  Kris。）"
				}, new string[20]
				{
					"snd_txtpap",
					"snd_txtsus",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					"snd_txtpap",
					(Util.GameManager().GetFlagInt(211) == 1) ? "snd_text" : "snd_txtnoe"
				}, new int[1], new string[20]
				{
					"ufpap_worry",
					"su_wtf",
					"ufpap_side",
					"ufpap_side",
					"ufpap_mad",
					"ufpap_neutral",
					"ufpap_side",
					"ufpap_neutral",
					"ufpap_neutral",
					"ufpap_laugh",
					"ufpap_laugh",
					"ufpap_side",
					"ufpap_side",
					"ufpap_neutral",
					"ufpap_side",
					"ufpap_neutral",
					"ufpap_laugh",
					"ufpap_side",
					"ufpap_laugh",
					(Util.GameManager().GetFlagInt(211) == 1) ? "" : "no_shocked"
				});
				papyrus.SetTalkable(txt);
				state = 2;
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
				if (AtLine(2))
				{
					SetSprite(susie, "spr_su_wtf");
				}
				else if (AtLine(4))
				{
					ChangeDirection(papyrus, Vector2.right);
				}
				else if (AtLine(5))
				{
					susie.EnableAnimator();
					ChangeDirection(papyrus, Vector2.up);
				}
				else if (AtLine(6) || AtLine(9) || AtLine(16))
				{
					ChangeDirection(papyrus, Vector2.left);
				}
				else if (AtLine(8) || AtLine(14))
				{
					ChangeDirection(papyrus, Vector2.right);
				}
				else if (AtLine(10))
				{
					papyrus.SetTalkable(null);
					PlayAnimation(papyrus, "Pose");
				}
				else if (AtLine(12))
				{
					papyrus.SetTalkable(txt);
					PlayAnimation(papyrus, "idle");
					ChangeDirection(papyrus, Vector2.up);
				}
				else if (AtLine(15) || AtLine(17))
				{
					ChangeDirection(papyrus, Vector2.up);
				}
			}
			else
			{
				papyrus.Stare();
				EndCutscene();
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		papyrus = Object.FindObjectOfType<InteractPapyrusTextbox>();
		ChangeDirection(papyrus, Vector2.left);
		papyrus.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = true;
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		SetSprite(susie, "spr_su_surprise_right");
		PlaySFX("sounds/snd_encounter");
		gm.SetFlag(236, 1);
	}
}

