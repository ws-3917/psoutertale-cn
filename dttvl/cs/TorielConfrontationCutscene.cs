using UnityEngine;

public class TorielConfrontationCutscene : CutsceneBase
{
	private Animator toriel;

	private bool torielMusicPlay;

	private bool susieCoolPose;

	private bool itemSound;

	private void Update()
	{
		if (state == 0)
		{
			frames++;
			kris.transform.position = Vector3.Lerp(new Vector3(-0.77f, -2.92f), new Vector3(-0.77f, -1.97f), (float)frames / 20f);
			susie.transform.position = Vector3.Lerp(new Vector3(0.77f, -2.73f), new Vector3(0.77f, -1.78f), (float)frames / 20f);
			if (frames == 20)
			{
				kris.GetComponent<Animator>().SetBool("isMoving", value: false);
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
			}
			if (frames == 50)
			{
				StartText(new string[3] { "* ...", "* 呃...^15 嘿。^15\n* Dreemurr^10，呃，^10女士。", "* 我们有些好奇...\n  ^05呃，您为什么看见我们\n  就跑啊。" }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_side_sweat", "su_side_sweat", "su_smile_sweat" }, 0);
				frames = 0;
				state = 1;
			}
		}
		if (state == 1)
		{
			if (!txt)
			{
				state = 2;
				frames = 0;
				toriel.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = false;
				toriel.enabled = true;
				toriel.Play("StandAndTurn");
			}
			else if (txt.GetCurrentStringNum() >= 2)
			{
				frames++;
				toriel.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = frames >= 10 && frames <= 30;
				if (frames == 10)
				{
					toriel.enabled = true;
					toriel.Play("StandAndTurn");
				}
			}
		}
		if (state == 2 && (frames < 40 || !txt))
		{
			frames++;
			if (frames == 40)
			{
				StartText(new string[3] { "* 实在抱歉。^10 *抽泣*", "* 我控制不止情绪，^10\n  我也不想让你们俩担心。", "* 但是显而易见，^10*抽泣*\n  ^10我失败了。" }, new string[3] { "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18]
				{
					1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0
				}, new string[3] { "", "", "" }, 0);
			}
			if (frames == 41)
			{
				toriel.SetFloat("speed", 0.75f);
			}
			if (frames == 150)
			{
				frames = 0;
				state = 3;
				StartText(new string[4] { "* 哦...^20 呃...", "* 呃，^10抱歉。", "* 请不要道歉。\n^10* 你们什么也没做错。", "* 但我...^10 *抽泣*\n^10  必须问你一个问题。" }, new string[4] { "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor" }, new int[18]
				{
					0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0
				}, new string[4] { "su_concerned", "su_concerned", "tori_cry_side", "tori_cry_side" }, 0);
			}
		}
		if (state == 3)
		{
			if (!txt)
			{
				frames++;
				if (frames == 1)
				{
					toriel.Play("WalkDownCrying");
				}
				if (frames <= 45)
				{
					toriel.transform.position = Vector3.Lerp(Vector3.zero, new Vector3(-0.774f, -1.5f), (float)frames / 45f);
				}
				if (frames == 50)
				{
					susie.DisableAnimator();
					susie.SetSprite("spr_su_left_unhappy_0");
					kris.GetComponent<SpriteRenderer>().enabled = false;
					toriel.Play("GrabKris");
				}
				if (frames == 100)
				{
					gm.PlayMusic("music/mus_musicbox", 0.8f);
					StartText(new string[5] { "* 我的孩子，^15\n  那个早早离开我们了的\n  那个孩子。", "* 那个经常会开些\n  轻松愉快的玩笑的孩子...", "* 那个给我们带来快乐的孩子。", "* 也为许多人的生活\n  带来了希望。", "* 我的孩子，^15\n  真的是你吗？" }, new string[5] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18]
					{
						1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
						0, 0, 0, 0, 0, 0, 0, 0
					}, new string[5] { "tori_cry", "tori_cry", "tori_cry", "tori_cry", "tori_cry" }, 0);
				}
				if (frames == 145)
				{
					toriel.SetFloat("speed", 0f);
					StartText(new string[4] { "* 什么玩意？？？^10\n* “早早离开”？？？", "* 女士，^10我是了解Kris的，\n  就Kris那种怂货，\n  哪敢自己去送命啊。", "* ...Kris？", "* 呃，^10对？？？\n^10* 你的孩子是Kris，^10\n  没错吧？" }, new string[5] { "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txttor" }, new int[18], new string[5] { "su_worried", "su_smile_sweat", "tori_cry_weird", "su_concerned", "tori_cry" }, 0);
				}
				if (frames == 175)
				{
					toriel.Play("HugKris");
				}
				if (frames == 190)
				{
					StartText(new string[4] { "* 当-^05当然了。\n^10* 我为我的情绪\n  爆发道歉。", "* 他就算活下来了，\n  ^10也不可能活这么长。", "* 我把“Kris”认成他\n  一点都不合理。", "* 算了吧...？" }, new string[5] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor" }, new int[18], new string[5] { "tori_worry", "tori_worry", "tori_worry", "su_smile_sweat", "tori_cry" }, 0);
					state = 4;
					frames = 0;
				}
			}
			else if (frames == 145 && txt.GetCurrentStringNum() == 3)
			{
				toriel.Play("GrabKrisShocked");
			}
		}
		if (state == 4 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				toriel.SetFloat("speed", 1f);
				gm.StopMusic(60f);
			}
			if (frames >= 90)
			{
				if (frames == 90)
				{
					susie.EnableAnimator();
					kris.GetComponent<SpriteRenderer>().enabled = true;
					toriel.Play("WalkDown");
				}
				toriel.transform.position = Vector3.Lerp(new Vector3(-0.774f, -1.5f), Vector3.zero, (float)(frames - 90) / 30f);
				if (frames == 120)
				{
					toriel.SetFloat("speed", 0f);
					toriel.Play("WalkDown", 0, 0f);
				}
			}
			if (frames == 150)
			{
				StartText(new string[30]
				{
					"* 所以你刚刚是不是说\n  我是这个孩子的母亲？", "* 呃... ^10对？", "* 然后你还知道我的姓氏，\n  ^05是吧？", "* 对啊??^10\n* 你不是在我们学校教\n  我们这群小孩的吗。", "* 真的？", "* 嗯，^10不幸的是，\n^10  我跟你们口中的那个\n  Toriel不是同一位。", "* 哈？", "* 我不是老师，^10\n  也不是Kris的监护人。", "* 相反，^10我是遗迹的看护人。", "* 之前也是一位颇受尊敬的\n  皇室成员。",
					"* 所以这怎么可能就...？\n^15* ...不，^10那...", "* ...", "* 哈？", "* 会不会是你们两个...\n  来自另一个不同的世界？", "* 可能只有那样才解释得通吧。", "* 你知道我们该怎么离开这吗？", "* 我觉得吧...", "* 你或许可以去找地底世界的\n  <color=#FFFF00FF>皇家科学员</color>。", "* 他总是在做一些...\n  ^15有趣的实验。", "* 他或许能帮助你们回家。",
					"* 我们怎么去找这家伙？", "* 你们得一路走到热域。", "* 那离这挺远的，\n^10  但我相信你们能办到的。", "* 毕竟，^10你们两个在路上\n  可以互相扶持，^10对吧？", "* 嗨呀！^05太特么对啦！", "* 很好！", "* 我去为你们准备些路上的行李。", "* 走到遗迹尽头应该不会\n  花太长时间。", "* 祝你们两个，^10好运。", "* 呃，^08谢谢。"
				}, new string[30]
				{
					"snd_txttor", "snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor",
					"snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor",
					"snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus"
				}, new int[33], new string[30]
				{
					"tori_worry", "su_smile_sweat", "tori_weird", "su_annoyed", "tori_blush", "tori_worry", "su_surprised", "tori_worry", "tori_neutral", "tori_annoyed",
					"tori_worry", "tori_worry", "su_smile_sweat", "tori_worry", "su_inquisitive", "su_neutral", "tori_worry", "tori_neutral", "tori_worry", "tori_neutral",
					"su_surprised", "tori_worry", "tori_happy", "tori_neutral", "su_smile", "tori_happy", "tori_neutral", "tori_neutral", "tori_happy", "su_smile_side"
				}, 0);
				state = 5;
				frames = 0;
			}
		}
		if (state == 5)
		{
			if (!txt)
			{
				frames++;
				if (frames == 1)
				{
					toriel.Play("WalkRight");
					toriel.SetFloat("speed", 1f);
					toriel.transform.Find("Exclaim").localPosition = new Vector3(0f, 1.33f);
				}
				if (frames > 30)
				{
					toriel.Play("WalkRight", 0, 0f);
					toriel.SetFloat("speed", 0f);
					toriel.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = frames >= 30 && frames < 50;
				}
				else
				{
					toriel.transform.position = Vector3.Lerp(Vector3.zero, new Vector3(2f, 0f), (float)frames / 30f);
				}
				if (frames == 50)
				{
					toriel.GetComponent<SpriteRenderer>().flipX = true;
					StartText(new string[9] { "* 哦，^10Kris！", "* 你们两个在路上可能需要\n  我的帮助。", "* 我把这个<color=#FFFF00FF>手机</color>给你。", "* ...你已经有一个了？", "* 好的。\n^10* 那么我给你<color=#FFFF00FF>我的电话号码</color>。", "* （你得到了Toriel的号码。）", "*（你用“另一个世界的妈妈”\n  这个名称备注了这个号码。）", "* 你需要什么的话，\n  ^10打电话直接说。", "* 我希望能尽早看到\n  你们两个。" }, new string[9] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_text", "snd_text", "snd_txttor", "snd_txttor" }, new int[18], new string[9] { "tori_happy", "tori_worry", "tori_neutral", "tori_worry", "tori_neutral", "", "", "tori_neutral", "tori_neutral" }, 0);
					state = 6;
					frames = 0;
				}
			}
			else
			{
				if (txt.GetCurrentStringNum() == 8 && !torielMusicPlay)
				{
					torielMusicPlay = true;
					gm.PlayMusic("music/mus_toriel", 0.75f);
				}
				if (txt.GetCurrentStringNum() == 25 && !susieCoolPose)
				{
					susie.DisableAnimator();
					susie.SetSprite("spr_su_pose");
					susieCoolPose = true;
				}
				if (txt.GetCurrentStringNum() == 30 && susieCoolPose)
				{
					susie.EnableAnimator();
					susieCoolPose = false;
				}
			}
		}
		if (state == 6)
		{
			if (!txt)
			{
				frames++;
				if (frames == 1)
				{
					gm.StopMusic(60f);
					toriel.GetComponent<SpriteRenderer>().flipX = false;
					toriel.Play("WalkRight");
					toriel.SetFloat("speed", 1f);
				}
				toriel.transform.position = Vector3.Lerp(new Vector3(2f, 0f), new Vector3(8f, 0f), (float)frames / 40f);
				if (frames == 60)
				{
					toriel.GetComponent<SpriteRenderer>().enabled = false;
					susie.ChangeDirection(Vector2.left);
					kris.ChangeDirection(Vector2.right);
					StartText(new string[4] { "* 所以，^10我们必须和这位\n  <color=#FFFF00FF>皇家科学员</color>见面才能回家。", "* 嗯。", "* 应该会挺有意思的。", "* 我们走吧，^10Kris。" }, new string[4] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[4] { "su_neutral", "su_side", "su_confident", "su_smile" }, 0);
				}
				if (frames == 61)
				{
					kris.SetSelfAnimControl(setAnimControl: true);
					susie.SetSelfAnimControl(setAnimControl: true);
					kris.ChangeDirection(Vector2.down);
					gm.SetFlag(1, "smirk");
					gm.SetCheckpoint(14, new Vector3(91.8f, 0.6f));
					EndCutscene();
					gm.PlayMusic("music/mus_ruins");
				}
			}
			else if (txt.GetCurrentStringNum() == 6 && !itemSound)
			{
				gm.SetFlag(8, 1);
				itemSound = true;
				PlaySFX("sounds/snd_item");
			}
		}
		if (state == 7 && !txt)
		{
			if (toriel.transform.position.x != 7.28f)
			{
				toriel.Play("WalkRight");
				toriel.SetFloat("speed", 1f);
				toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(7.28f, -0.36f), 1f / 6f);
			}
			else
			{
				toriel.Play("WalkRight", 0, 0f);
				toriel.SetFloat("speed", 0f);
				toriel.transform.position = new Vector3(26.51f, -0.81f);
				EndCutscene();
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		toriel = GameObject.Find("Toriel").GetComponent<Animator>();
		if ((int)gm.GetFlag(108) == 1)
		{
			GameObject.Find("HardTorielCutsceneTrigger").transform.position = new Vector3(26.55f, -1.49f);
			toriel.transform.position = new Vector3(2.37f, -0.36f);
			toriel.enabled = true;
			state = 7;
			StartText(new string[2] { "* 这间屋里还有一个谜题。", "* 不知道你能不能解开？" }, new string[2] { "snd_txttor", "snd_txttor" }, new int[18], new string[2] { "tori_worry", "tori_neutral" }, 0);
		}
		else
		{
			toriel.transform.position = Vector3.zero;
			gm.StopMusic(10f);
			kris.SetSelfAnimControl(setAnimControl: false);
			susie.SetSelfAnimControl(setAnimControl: false);
			kris.ChangeDirection(Vector2.up);
			susie.ChangeDirection(Vector2.up);
			kris.GetComponent<Animator>().SetBool("isMoving", value: true);
			susie.GetComponent<Animator>().SetBool("isMoving", value: true);
		}
	}
}

