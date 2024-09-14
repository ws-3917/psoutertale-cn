using UnityEngine;
using UnityEngine.UI;

public class FloweyIntroCutscene : CutsceneBase
{
	private SpriteRenderer flowey;

	private Sprite[] floweySprites;

	private Vector3 krisOrigPos;

	private Vector3 susieOrigPos;

	private Vector3 floweyOrigPos;

	private Transform fakeBattleUI;

	private Transform fakeTPBar;

	private bool susieSlash;

	private bool hardmode;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 13)
				{
					gm.StopMusic();
				}
			}
			else if (!txt)
			{
				frames++;
				if (frames == 1)
				{
					if (hardmode)
					{
						kris.ChangeDirection(Vector2.right);
					}
					else
					{
						kris.DisableAnimator();
						kris.SetSprite("spr_kr_right_0");
					}
					susie.DisableAnimator();
					susie.SetSprite("spr_su_crossed_right");
				}
				if (frames <= 10)
				{
					new GameObject("KrisAfterImage", typeof(SpriteRenderer), typeof(AfterImage)).GetComponent<AfterImage>().CreateAfterImage(kris.GetComponent<SpriteRenderer>().sprite, kris.transform.position);
					new GameObject("SusieAfterImage", typeof(SpriteRenderer), typeof(AfterImage)).GetComponent<AfterImage>().CreateAfterImage(susie.GetComponent<SpriteRenderer>().sprite, susie.transform.position);
					kris.transform.position = Vector3.Lerp(krisOrigPos, new Vector3(-4.6f, 2.126f), (float)frames / 10f);
					susie.transform.position = Vector3.Lerp(susieOrigPos, new Vector3(-4.479f, 0.292f), (float)frames / 10f);
					flowey.transform.position = Vector3.Lerp(floweyOrigPos, new Vector3(4.03f, 0.7f), (float)frames / 10f);
				}
				if (frames == 10)
				{
					PlaySFX("sounds/snd_weaponpull_fast");
					susie.transform.position = new Vector3(-3.733f, 0.772f);
					if (!hardmode)
					{
						kris.transform.position = new Vector3(-4.221f, 2.044f);
						kris.EnableAnimator();
						kris.SetSelfAnimControl(setAnimControl: false);
						kris.GetComponent<Animator>().Play("DR Attack", 0, 0f);
					}
					susie.EnableAnimator();
					susie.SetSelfAnimControl(setAnimControl: false);
					susie.GetComponent<Animator>().Play("DR Attack", 0, 0f);
				}
				if (frames == 24)
				{
					gm.PlayMusic("music/mus_battledelta");
					if (!hardmode)
					{
						kris.transform.position = new Vector3(-4.417f, 2.125f);
						kris.GetComponent<Animator>().Play("DR Idle", 0, 0f);
						StartText(new string[7] { "* 不是。", "* 你们特么在干啥啊？", "* 我们...^10 在战斗？", "* 你难道不知道不成？？？", "* 你要是这么战斗的话\n  没人会知道你在干什么的，\n  ^05白痴。", "* 行！！！", "* 如果你能闭嘴的话，^05\n  那你就快点展示一下\n  到底该怎么做才对。" }, new string[7] { "snd_txtflw", "snd_txtflw", "snd_txtsus", "snd_txtsus", "snd_txtflw", "snd_txtsus", "snd_txtsus" }, new int[10], new string[7] { "flowey_confused", "flowey_confused", "su_inquisitive", "su_angry", "flowey_sassy", "su_wtf", "su_angry" }, 1);
					}
					else
					{
						StartText(new string[7] { "* 不是。", "* 你们特么在干啥啊？", "* 我们...^10 在战斗？", "* 你难道不知道不成？？？", "* 我认为你朋友也绝对搞不清现在的\n  状况。", "* 行！！！", "* 如果你能闭嘴的话，^05\n  那你就快点展示一下\n  到底该怎么做才对。" }, new string[7] { "snd_txtflw", "snd_txtflw", "snd_txtsus", "snd_txtsus", "snd_txtflw", "snd_txtsus", "snd_txtsus" }, new int[10], new string[7] { "flowey_confused", "flowey_confused", "su_inquisitive", "su_angry", "flowey_sassy", "su_wtf", "su_angry" }, 1);
					}
					susie.transform.position = new Vector3(-4.167f, 0.311f);
					susie.GetComponent<Animator>().Play("DR Idle", 0, 0f);
					Object.Destroy(GameObject.Find("menuBorder"));
					Object.Destroy(GameObject.Find("menuBox"));
					frames = 0;
					state = 1;
				}
			}
		}
		if (state == 1)
		{
			fakeBattleUI.localPosition = Vector3.Lerp(fakeBattleUI.localPosition, Vector3.zero, 0.4f);
			fakeTPBar.localPosition = Vector3.Lerp(fakeTPBar.localPosition, Vector3.zero, 0.4f);
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 6 && !susieSlash)
				{
					susie.transform.position = new Vector3(-3.733f, 0.772f);
					susie.GetComponent<Animator>().Play("DR Attack", 0, 0f);
					PlaySFX("sounds/snd_attack");
					susieSlash = true;
				}
			}
			else
			{
				StartText(new string[1] { "* 别担心，\n  ^05不会花太长时间的。" }, new string[1] { "snd_txtflw" }, new int[1], new string[1] { "flowey_sassy" }, 1);
				gm.StopMusic();
				state = 2;
			}
		}
		if (state == 2)
		{
			fakeBattleUI.localPosition = Vector3.Lerp(fakeBattleUI.localPosition, new Vector3(0f, -198f), 0.4f);
			fakeTPBar.localPosition = Vector3.Lerp(fakeTPBar.localPosition, new Vector3(-116f, 0f), 0.4f);
			if (!txt)
			{
				Object.Destroy(flowey.gameObject);
				Object.Destroy(fakeBattleUI.gameObject);
				Object.Destroy(fakeTPBar.gameObject);
				kris.InitiateBattle(1, new Vector3(-0.055f, -1.63f), 18);
				EndCutscene(enablePlayerMovement: false);
				state = 3;
			}
		}
	}

	private void LateUpdate()
	{
		if (state == 0 && (bool)txt && (bool)txt.GetPortrait() && txt.GetPortrait().sprite.name.Contains("flowey"))
		{
			flowey.sprite = floweySprites[int.Parse(txt.GetPortrait().sprite.name.Substring(txt.GetPortrait().sprite.name.Length - 1))];
		}
		if (state == 1 && (bool)txt)
		{
			if ((bool)txt.GetTextUT() && (bool)txt.GetTextUT().GetGameObject())
			{
				txt.GetTextUT().GetGameObject().transform.localPosition = new Vector3(78f, -203f);
				txt.GetTextUT().GetGameObject().GetComponent<Text>()
					.lineSpacing = 0.9f;
			}
			if ((bool)txt.GetPortrait())
			{
				txt.GetPortrait().transform.localPosition = new Vector3(-259f, -182f);
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		cam.SetFollowPlayer(follow: false);
		krisOrigPos = kris.transform.position;
		susieOrigPos = susie.transform.position;
		if ((int)gm.GetFlag(108) == 1)
		{
			hardmode = true;
			StartText(new string[15]
			{
				"* 哈喽！^15\n* 我是<color=#FFFF00FF>FLOWEY</color>.^15\n* 一朵叫<color=#FFFF00FF>FLOWEY</color>的<color=#FFFF00FF>花</color>!", "* 嗯...", "* 你一定刚来地下世界，\n  ^15对吗？", "* 呃...", "* 天了咯，^10你一定\n  很困惑吧。", "* 得有人教你\n  这里的游戏规则！", "* 得有人教你\n  不要多管闲事。", "* 嘿，^10那可不是跟一个\n  好心的陌生人说话的\n  语气！", "* 那又怎样？^10\n* 赶紧起开\n  别挡我们的路。", "* 但是...^10 你不想知道一些\n  关于灵魂的事吗？^15\n* 还有关于LOVE的？",
				"* 伙计，^10为什么你那么\n  想告诉我们这东西？", "* 你是想要我们的灵魂\n  还是怎么样？", "* ！！！^15\n* 你-^05你怎么...？！", "* 我不知道。^10\n* 不是你告诉我们的吗。", "* 来吧，^05我们给这蠢货上一课。"
			}, new string[15]
			{
				"snd_txtflw", "snd_txtflw", "snd_txtflw", "snd_txtsus", "snd_txtflw", "snd_txtflw", "snd_txtsus", "snd_txtflw", "snd_txtsus", "snd_txtflw",
				"snd_txtsus", "snd_txtsus", "snd_txtflw", "snd_txtsus", "snd_txtsus"
			}, new int[18], new string[15]
			{
				"flowey_neutral", "flowey_neutral", "flowey_neutral", "su_inquisitive", "flowey_neutral", "flowey_neutral", "su_side", "flowey_sassy", "su_neutral", "flowey_earnest",
				"su_annoyed", "su_annoyed", "flowey_fear", "su_confident", "su_smile"
			}, 0);
		}
		else
		{
			StartText(new string[15]
			{
				"* 哈喽！^15\n* 我是<color=#FFFF00FF>FLOWEY</color>.^15\n* 一朵叫<color=#FFFF00FF>FLOWEY</color>的<color=#FFFF00FF>花</color>!", "* 嗯...", "* 你一定刚来地下世界，\n  ^15对吗？", "* 呃...", "* 天了咯，^10你一定\n  很困惑吧。", "* 得有人教你\n  这里的游戏规则！", "* 得有人教你\n  不要多管闲事。", "* 嘿，^10那可不是跟一个\n  好心的陌生人说话的\n  语气！", "* 那又怎样？^10\n* 赶紧起开\n  别挡我们的路。", "* 但是...^10 你不想知道一些\n  关于灵魂的事吗？^15\n* 还有关于LOVE的？",
				"* 伙计，^10为什么你那么\n  想告诉我们这东西？", "* 你是想要我们的灵魂\n  还是怎么样？", "* ！！！^15\n* 你-^05你怎么...？！", "* 我不知道。^10\n* 不是你告诉我们的吗。", "* Kris，^05我们给这白痴\n  上一课吧。"
			}, new string[15]
			{
				"snd_txtflw", "snd_txtflw", "snd_txtflw", "snd_txtsus", "snd_txtflw", "snd_txtflw", "snd_txtsus", "snd_txtflw", "snd_txtsus", "snd_txtflw",
				"snd_txtsus", "snd_txtsus", "snd_txtflw", "snd_txtsus", "snd_txtsus"
			}, new int[18], new string[15]
			{
				"flowey_neutral", "flowey_neutral", "flowey_neutral", "su_inquisitive", "flowey_neutral", "flowey_neutral", "su_side", "flowey_sassy", "su_neutral", "flowey_earnest",
				"su_annoyed", "su_annoyed", "flowey_fear", "su_confident", "su_smile"
			}, 0);
		}
		gm.PlayMusic("music/mus_flowey");
		flowey = GameObject.Find("Flowey").GetComponent<SpriteRenderer>();
		floweyOrigPos = flowey.transform.position;
		floweySprites = new Sprite[2]
		{
			Resources.Load<Sprite>("overworld/npcs/spr_flowey_0"),
			Resources.Load<Sprite>("overworld/npcs/spr_flowey_1")
		};
		fakeBattleUI = GameObject.Find("FakeBattleUI").transform;
		if (hardmode)
		{
			fakeBattleUI.GetComponent<Image>().sprite = Resources.Load<Sprite>("battle/spr_fake_battle_ui_hard");
			fakeBattleUI.GetChild(0).GetComponent<Image>().color = UIBackground.borderColors[(int)gm.GetFlag(223)];
		}
		fakeTPBar = GameObject.Find("FakeTP").transform;
	}
}

