using System.Collections.Generic;
using UnityEngine;

public class DogiCutscene : CutsceneBase
{
	private bool selecting;

	private int selIndex;

	private bool oblit;

	private int oblitDistance;

	private int oblitDif;

	private InteractTextBox dogamy;

	private InteractTextBox dogaressa;

	private string[] noelleDiag = new string[3] { "* 我们刚刚才帮了一群\n  兔子逃离了黑漆漆的森林！", "* 我们刚跟S-^05Snowdrake\n  战-^05战斗完，^05所以...", "* 可-^05可能是...？" };

	private string[] noelleSounds = new string[3] { "snd_txtnoe", "snd_txtnoe", "snd_txtnoe" };

	private int[] noelleSpeed = new int[3];

	private string[] noellePortrats = new string[3] { "no_confused", "no_confused_side", "no_weird" };

	private string[] dogamyDiag = new string[5] { "* .................", "* 呃，^05有道理。", "* （你们几个，^05抓紧回小镇去吧。）", "*（这里很危险，^05\n  更别提还有人类\n  在附近徘徊。）", "* 好...^05懂了。" };

	private string[] dogamySounds = new string[5] { "snd_text", "snd_text", "snd_text", "snd_text", "snd_txtsus" };

	private int[] dogamySpeed = new int[2] { 4, 0 };

	private string[] dogamyPortrats = new string[5] { "", "", "", "", "su_inquisitive" };

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && !txt)
		{
			if (frames == 0)
			{
				kris.EnableAnimator();
				susie.EnableAnimator();
				noelle.EnableAnimator();
				SetMoveAnim(kris, isMoving: true, 1.5f);
				SetMoveAnim(susie, isMoving: true, 1.5f);
				SetMoveAnim(noelle, isMoving: true, 1.5f);
				ChangeDirection(kris, Vector2.left);
				ChangeDirection(susie, (susie.transform.position.x > 8.402f) ? Vector2.left : Vector2.right);
				ChangeDirection(noelle, (noelle.transform.position.x > 9.494f) ? Vector2.left : Vector2.right);
			}
			frames++;
			if (kris.transform.position.x != 7.302f)
			{
				MoveTo(kris, new Vector3(7.302f, kris.transform.position.y), 8f);
			}
			else if (MoveTo(kris, new Vector3(7.302f, -1.63f), 8f))
			{
				ChangeDirection(kris, Vector2.down);
			}
			else
			{
				ChangeDirection(kris, Vector2.up);
				SetMoveAnim(kris, isMoving: false);
			}
			if (susie.transform.position.x != 8.402f)
			{
				MoveTo(susie, new Vector3(8.402f, susie.transform.position.y), 8f);
			}
			else if (MoveTo(susie, new Vector3(8.402f, -1.47f), 8f))
			{
				ChangeDirection(susie, Vector2.down);
			}
			else
			{
				ChangeDirection(susie, Vector2.up);
				SetMoveAnim(susie, isMoving: false);
			}
			if (noelle.transform.position.x != 9.494f)
			{
				MoveTo(noelle, new Vector3(9.494f, noelle.transform.position.y), 8f);
			}
			else if (MoveTo(noelle, new Vector3(9.494f, -1.468f), 8f))
			{
				ChangeDirection(noelle, Vector2.down);
			}
			else
			{
				ChangeDirection(noelle, Vector2.up);
				SetMoveAnim(noelle, isMoving: false);
			}
			if (!MoveTo(dogamy.transform.parent, new Vector3(8.43f, 0.27f), 8f))
			{
				dogamy.GetComponent<SpriteRenderer>().flipX = false;
				PlayAnimation(dogamy, "Idle");
				PlayAnimation(dogaressa, "Idle");
			}
			if (frames == 90)
			{
				dogamy.GetComponent<Animator>().enabled = false;
				dogaressa.GetComponent<Animator>().enabled = false;
				List<string> list = new List<string> { "* 我们收到了多份一名人类和\n  一对怪物四处游荡的报告。", "* （你们仨见过这个人类吗？）", "* 呃呃呃呃呃呃呃", "* ...", "* 没。", "* 我呃...^05都不知道人类\n  长啥样。", "* 确定吗...？", "* （你们仨闻着不像什么好人呐...）", "* 呃，^05怎么说呢...", "* 我们，^05唔..." };
				List<string> list2 = new List<string> { "snd_text", "snd_text", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_text", "snd_text", "snd_txtsus", "snd_txtsus" };
				List<int> list3 = new List<int> { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
				List<string> list4 = new List<string> { "", "", "su_side_sweat", "su_neutral", "su_side", "su_smirk_sweat", "", "", "su_wideeye", "su_sus" };
				if (!oblit)
				{
					list.AddRange(noelleDiag);
					list2.AddRange(noelleSounds);
					list3.AddRange(noelleSpeed);
					list4.AddRange(noellePortrats);
					list.AddRange(dogamyDiag);
					list2.AddRange(dogamySounds);
					list3.AddRange(dogamySpeed);
					list4.AddRange(dogamyPortrats);
				}
				StartText(list.ToArray(), list2.ToArray(), list3.ToArray(), list4.ToArray());
				dogamy.SetTalkable(txt);
				state = 1;
				frames = 0;
				if (oblit)
				{
					txt.EnableSelectionAtEnd();
				}
			}
		}
		else if (state == 1)
		{
			if ((bool)txt)
			{
				if (txt.CanLoadSelection() && !selecting)
				{
					InitiateDeltaSelection();
					select.SetupChoice(Vector2.left, "...", Vector3.zero);
					select.SetupChoice(Vector2.right, "I'm actually\na human.", new Vector3(-70f, 0f));
					select.Activate(this, 1, txt.gameObject);
					selecting = true;
				}
				else if (!selecting)
				{
					if (AtLine(2 - oblitDif) || AtLine(8 - oblitDif) || AtLine(16 - oblitDif))
					{
						dogamy.SetTalkable(null);
						dogaressa.SetTalkable(txt);
					}
					else if (AtLine(3 - oblitDif) || AtLine(18 - oblitDif))
					{
						dogaressa.SetTalkable(null);
					}
					else if (AtLine(4 - oblitDif))
					{
						ChangeDirection(susie, Vector2.left);
					}
					else if (AtLine(5 - oblitDif))
					{
						ChangeDirection(susie, Vector2.up);
						SetSprite(kris, "spr_kr_confused_to_side");
						SetSprite(noelle, "spr_no_confused_to_side");
					}
					else if (AtLine(6 - oblitDif) || AtLine(10 - oblitDif))
					{
						PlayAnimation(susie, "Embarrassed");
					}
					else if (AtLine(7 - oblitDif))
					{
						PlayAnimation(susie, "idle");
						kris.EnableAnimator();
						noelle.EnableAnimator();
						dogamy.SetTalkable(txt);
					}
					else if (AtLine(9 - oblitDif))
					{
						dogaressa.SetTalkable(null);
						ChangeDirection(susie, Vector2.right);
					}
					else if (AtLine(11 - oblitDif))
					{
						PlayAnimation(susie, "idle");
					}
					else if (AtLine(12 - oblitDif))
					{
						ChangeDirection(susie, Vector2.up);
					}
					else if (AtLine(14 - oblitDif))
					{
						dogamy.SetTalkable(txt);
					}
				}
			}
			else
			{
				if (selecting)
				{
					return;
				}
				if (frames == 0)
				{
					dogamy.GetComponent<Animator>().enabled = true;
					dogaressa.GetComponent<Animator>().enabled = true;
					PlayAnimation(dogamy, "Walk");
					PlayAnimation(dogaressa, "Walk");
					frames++;
				}
				if (dogamy.transform.parent.position.y != 2.02f)
				{
					MoveTo(dogamy.transform.parent, new Vector3(8.43f, 2.02f), 6f);
					return;
				}
				if (MoveTo(dogamy.transform.parent, new Vector3(-1.04f, 2.02f), 6f))
				{
					dogamy.GetComponent<SpriteRenderer>().flipX = true;
					return;
				}
				frames++;
				if (frames == 30)
				{
					ChangeDirection(susie, Vector2.right);
					ChangeDirection(kris, Vector2.right);
					ChangeDirection(noelle, Vector2.left);
					StartText(new string[7]
					{
						(oblitDistance > 0) ? "* 谢天谢地。^05\n* 我以为你会杀了它们，^05Kris。" : "* 人类很...^10危险？",
						(oblitDistance > 0) ? "* 但我很好奇为什么它们认为\n  所有人类都很危险。" : "* 有点冒昧，^05不是吗？",
						"* 为什么他们没有\n  认出克里斯是人类呢？",
						"* Kris，^05还记得\n  你妈妈说过什么吗？",
						"* 或者说...^05你那个来自紫色\n  洞穴的妈说了什么？",
						"* 他们想要...^05\n  夺走你的灵魂或者\n  什么的。",
						"* 我的意思是，^05 我不知道，\n  ^05你认为发生什么了？"
					}, new string[7] { "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[1], new string[7]
					{
						(oblitDistance > 0) ? "no_weird" : "no_curious",
						"no_thinking",
						"no_confused",
						"su_neutral",
						"su_smirk_sweat",
						"su_smile_sweat",
						"su_inquisitive"
					});
					txt.EnableSelectionAtEnd();
					state = 2;
				}
			}
		}
		else if (state == 2)
		{
			if ((bool)txt)
			{
				if (AtLine(4) || AtLine(6))
				{
					ChangeDirection(susie, Vector2.left);
				}
				else if (AtLine(5))
				{
					ChangeDirection(susie, Vector2.up);
				}
				else if (AtLine(7))
				{
					PlayAnimation(susie, "Embarrassed");
				}
				if (txt.CanLoadSelection() && !selecting)
				{
					InitiateDeltaSelection();
					select.SetupChoice(Vector2.left, "Just as\nconfused as\nyou", Vector3.zero);
					select.SetupChoice(Vector2.right, "Something\nhappened to\nthem", new Vector3(-64f, 0f));
					select.SetupChoice(Vector2.up, "I agree\nwith them", new Vector3(-14f, 0f));
					select.SetupChoice(Vector2.down, "...", Vector3.zero);
					select.SetCenterOffset(new Vector2(0f, -22f));
					select.Activate(this, 0, txt.gameObject);
					selecting = true;
				}
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (selIndex == 0)
				{
					if (AtLine(3))
					{
						susie.UseHappySprites();
						noelle.UseHappySprites();
					}
				}
				else if (selIndex == 1)
				{
					if (AtLine(3))
					{
						ChangeDirection(susie, Vector2.right);
					}
					else if (AtLine(8))
					{
						SetSprite(susie, "spr_su_wtf");
					}
					else if (AtLine(9))
					{
						SetSprite(susie, "spr_su_throw_ready", flipX: true);
					}
				}
				else if (selIndex == 2)
				{
					if (AtLine(2))
					{
						ChangeDirection(susie, Vector2.right);
						susie.GetComponent<SpriteRenderer>().flipX = false;
						susie.EnableAnimator();
					}
					else if (AtLine(8))
					{
						ChangeDirection(susie, Vector2.left);
					}
				}
				return;
			}
			if (frames == 0)
			{
				susie.GetComponent<SpriteRenderer>().flipX = false;
				susie.EnableAnimator();
				ChangeDirection(susie, Vector2.left);
				frames++;
			}
			if (!MoveTo(cam, cam.GetClampedPos(), 2f))
			{
				ChangeDirection(kris, Vector2.down);
				RestorePlayerControl();
				gm.PlayMusic("zoneMusic");
				bool flag = false;
				if (oblit && oblitDistance == 0)
				{
					flag = true;
					new GameObject("LOL").AddComponent<TextBox>().CreateBox(new string[3] { "* ...", "* 可恶，我们没有和它们战斗！", "* 事情到此应该降温了。" }, new string[1] { "snd_txtsus" }, new int[1], giveBackControl: true, new string[3] { "su_side", "su_surprised", "su_smile" });
					WeirdChecker.Abort(gm);
				}
				gm.SetFlag(214, 1);
				EndCutscene(!flag);
			}
		}
		else if (state == 4)
		{
			if ((bool)txt)
			{
				if (AtLine(2))
				{
					susie.EnableAnimator();
					susie.GetComponent<SpriteRenderer>().flipX = false;
				}
				else if (AtLine(3))
				{
					noelle.EnableAnimator();
				}
				else if (AtLine(5))
				{
					ChangeDirection(susie, Vector2.up);
					PlayAnimation(susie, "idle");
				}
				else if (AtLine(6))
				{
					ChangeDirection(susie, Vector2.left);
					ChangeDirection(noelle, Vector2.left);
				}
				if (txt.CanLoadSelection() && !selecting)
				{
					InitiateDeltaSelection();
					select.SetupChoice(Vector2.left, "Yeah sorry", Vector3.zero);
					select.SetupChoice(Vector2.right, "I'm going to\nkill you", new Vector3(-64f, 0f));
					select.Activate(this, 2, txt.gameObject);
					selecting = true;
				}
			}
		}
		else if (state == 5)
		{
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					susie.EnableAnimator();
					susie.GetComponent<SpriteRenderer>().flipX = false;
					noelle.EnableAnimator();
					ChangeDirection(susie, Vector2.up);
					ChangeDirection(noelle, Vector2.up);
					dogamy.SetTalkable(txt);
				}
				if (txt.CanLoadSelection() && !selecting)
				{
					InitiateDeltaSelection();
					select.SetupChoice(Vector2.left, "I was joking,\nsorry", Vector3.zero);
					select.SetupChoice(Vector2.right, "Proceed", new Vector3(-40f, 0f));
					select.Activate(this, 3, txt.gameObject);
					selecting = true;
				}
			}
		}
		else
		{
			if (state != 6)
			{
				return;
			}
			if ((bool)txt)
			{
				if (AtLine(3))
				{
					susie.EnableAnimator();
					ChangeDirection(susie, Vector2.up);
					ChangeDirection(noelle, Vector2.up);
					dogaressa.SetTalkable(txt);
				}
			}
			else
			{
				kris.InitiateBattle(66);
				gm.SetFlag(214, 1);
				EndCutscene(enablePlayerMovement: false);
			}
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		switch (id)
		{
		case 0:
		{
			Object.Destroy(dogamy.transform.parent.gameObject);
			List<string> list4 = new List<string>();
			List<string> list5 = new List<string>();
			List<string> list6 = new List<string>();
			PlayAnimation(susie, "idle");
			if (index == Vector2.down)
			{
				selIndex = 0;
				list4.AddRange(new string[4] { "* ...", "* 如果你不想说的话，\n  ^05你可以不说的。", "* 我只是很高兴我们不需要\n  浪费时间和它们干架。", "* 走吧。" });
				list5.AddRange(new string[1] { "snd_txtsus" });
				list6.AddRange(new string[4] { "su_side", "su_smirk", "su_smile_side", "su_smile" });
			}
			else if (index == Vector2.up)
			{
				selIndex = 2;
				SetSprite(susie, "spr_su_wtf", flipX: true);
				list4.AddRange(new string[8] { "* 那特么是什么意思，^05\n  Kris？？？", "* 我听说人类很久以前就\n  发明了“偏见”一词。", "* 这类争论深深扎根于他们个体的不同之处之间。", "* 我无法想象那将是什么样的，^05\n  更别提他们怎样对待我们的了。", "* 我相信Kris比我们都更\n  了解这一点。", "* 我们现在不需要深究这类玩意。", "* 等我们回家，^05\n  回到学校再来讨论吧。", "* 我们干脆走吧。" });
				list5.AddRange(new string[8] { "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus", "snd_txtsus" });
				list6.AddRange(new string[8] { "su_angry", "no_curious", "no_thinking", "no_curious", "no_weird", "su_annoyed", "su_side", "su_annoyed" });
			}
			else
			{
				selIndex = 1;
				if (index == Vector2.left)
				{
					list4.AddRange(new string[2] { "* 欸...^05你看起来并不这样。", "* 什么，^05你觉得他们...^05去\n  参加战争之类的了？" });
				}
				else
				{
					list4.AddRange(new string[2] { "* 所以，^05你觉得如何？", "* 就这件事而言？" });
				}
				list5.AddRange(new string[2] { "snd_txtsus", "snd_txtsus" });
				list6.AddRange(new string[2] { "su_annoyed", "su_smirk_sweat" });
				list4.AddRange(new string[7] { "* 我寻思在这个地下世界里...", "* 人类和怪物会更加粗暴地\n  对待对方。", "* 根据我们所知的人类力量，^05\n  这很...^05令人担忧。", "* 等下，^05啥？", "* 只是一些无聊的历史\n  知识了，^05哈哈...", "* 嗯？^05\n* 那我们就别浪费时间了！！！", "* 我们走吧！" });
				list5.AddRange(new string[7] { "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtsus" });
				list6.AddRange(new string[7] { "no_curious", "no_curious", "no_weird", "su_side_sweat", "no_happy", "su_angry", "su_pissed" });
			}
			gm.SetFlag(233, selIndex);
			StartText(list4.ToArray(), list5.ToArray(), new int[1], list6.ToArray());
			state = 3;
			frames = 0;
			selecting = false;
			break;
		}
		case 1:
		{
			List<string> list7 = new List<string>();
			List<string> list8 = new List<string>();
			List<int> list9 = new List<int>();
			List<string> list10 = new List<string>();
			if (index == Vector2.left)
			{
				list7.AddRange(noelleDiag);
				list8.AddRange(noelleSounds);
				list9.AddRange(noelleSpeed);
				list10.AddRange(noellePortrats);
				list7.AddRange(dogamyDiag);
				list8.AddRange(dogamySounds);
				list9.AddRange(dogamySpeed);
				list10.AddRange(dogamyPortrats);
				oblitDif = 10;
			}
			else
			{
				state = 4;
				SetSprite(susie, "spr_su_surprise_right", flipX: true);
				SetSprite(noelle, "spr_no_surprise_left");
				list7.AddRange(new string[6] { "* K-^05KRIS？？？", "* 哦，^05呃...", "* My buddy here is a\n  bit loopy after,^05 uhh...", "* 在森林那里和Snowdrake们\n  战斗之后...", "* 这也是为什么呃，^05我们\n  闻起来很奇怪。", "* 对吗，^05Kris...？" });
				list8.AddRange(new string[2] { "snd_txtnoe", "snd_txtsus" });
				list9.Add(0);
				list10.AddRange(new string[6] { "no_scared", "su_wideeye", "su_side_sweat", "su_smile_sweat", "su_inquisitive", "su_worriedsmile" });
			}
			StartText(list7.ToArray(), list8.ToArray(), list9.ToArray(), list10.ToArray());
			if (state == 4)
			{
				txt.EnableSelectionAtEnd();
			}
			selecting = false;
			break;
		}
		case 2:
		{
			List<string> list11 = new List<string>();
			List<string> list12 = new List<string>();
			List<int> list13 = new List<int>();
			List<string> list14 = new List<string>();
			if (index == Vector2.left)
			{
				state = 1;
				ChangeDirection(susie, Vector2.up);
				ChangeDirection(noelle, Vector2.up);
				list11.AddRange(dogamyDiag);
				list12.AddRange(dogamySounds);
				list13.AddRange(dogamySpeed);
				list14.AddRange(dogamyPortrats);
				oblitDif = 13;
				WeirdChecker.Abort(gm);
				oblitDistance = 1;
			}
			else
			{
				state = 5;
				SetSprite(susie, "spr_su_wtf", flipX: true);
				SetSprite(noelle, "spr_no_surprise_left");
				list11.AddRange(new string[3] { "* KRIS，^05闭嘴！！！", "* 如果你非要这么干，^05我们\n  不会帮你的。", "* K-^05Kris没有在开玩笑吧...？？？" });
				list12.AddRange(new string[3] { "snd_txtsus", "snd_txtsus", "snd_text" });
				list13.Add(0);
				list14.AddRange(new string[3] { "su_wtf", "su_pissed", "" });
			}
			StartText(list11.ToArray(), list12.ToArray(), list13.ToArray(), list14.ToArray());
			if (state == 5)
			{
				txt.EnableSelectionAtEnd();
			}
			selecting = false;
			break;
		}
		case 3:
		{
			List<string> list = new List<string>();
			List<string> list2 = new List<string>();
			List<string> list3 = new List<string>();
			if (index == Vector2.left)
			{
				state = 1;
				list.AddRange(new string[4] { "* 好，^05谢天谢地。", "* 在那一刹那，^05我们差点以为\n  你真的是一名人类。", "* （不要再黑色幽默了。）\n* （这会置你于死地的。）", "* （现在你们仨跟快去小镇吧。）" });
				list2.Add("snd_text");
				list3.Add("");
				oblitDif = 13;
				WeirdChecker.Abort(gm);
				oblitDistance = 1;
			}
			else
			{
				state = 6;
				SetSprite(susie, "spr_su_shrug");
				ChangeDirection(noelle, Vector2.left);
				gm.SetCheckpoint(91, new Vector3(-2.8f, 2.57f));
				gm.SetPartyMembers(susie: false, noelle: false);
				list.AddRange(new string[4] { "* 好了，^05至少我们谈过这个话题。", "* 我们马上就离开。", "* （原来你自始至终都是\n  一名人类！！！）", "* （是时候消灭你了！）" });
				list2.AddRange(new string[3] { "snd_txtsus", "snd_txtsus", "snd_text" });
				list3.AddRange(new string[3] { "su_smile_sweat", "su_smirk", "" });
			}
			StartText(list.ToArray(), list2.ToArray(), new int[1], list3.ToArray());
			selecting = false;
			break;
		}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		RevokePlayerControl();
		SetSprite(kris, "spr_kr_surprise");
		SetSprite(susie, "spr_su_surprise_right");
		SetSprite(noelle, "spr_no_surprise");
		dogamy = GameObject.Find("Dogamy").GetComponent<InteractTextBox>();
		dogaressa = GameObject.Find("Dogaressa").GetComponent<InteractTextBox>();
		PlayAnimation(dogamy, "Walk", 1.5f);
		PlayAnimation(dogaressa, "Walk", 1.5f);
		dogamy.transform.parent.position = new Vector3(17.13f, 0.27f);
		gm.StopMusic(30f);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		oblit = (int)Util.GameManager().GetFlag(13) >= 9;
		StartText(new string[2] { "* 站住！！！", "* （你们几个，^05都给我靠边站！）" }, new string[1] { "snd_text" }, new int[1], new string[1] { "" });
	}
}

