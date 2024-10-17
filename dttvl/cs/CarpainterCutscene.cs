using UnityEngine;

public class CarpainterCutscene : CutsceneBase
{
	private int changeFace;

	private bool selecting;

	private bool agree;

	private CarpainterNPC carpainter;

	private Vector3 camPos;

	private SpriteRenderer lightning;

	private SpriteRenderer reflectBall;

	private Sprite[] reflectBallSprites;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0 && (bool)txt && txt.CanLoadSelection() && !selecting)
		{
			selecting = true;
			InitiateDeltaSelection();
			select.SetupChoice(Vector2.left, "I guess", Vector3.zero);
			select.SetupChoice(Vector2.right, "Hell no", new Vector3(-12f, 0f));
			select.Activate(this, 0, txt.gameObject);
		}
		if (state != 1)
		{
			return;
		}
		if ((bool)txt)
		{
			if (txt.GetCurrentStringNum() == changeFace)
			{
				carpainter.SetSprite(1);
			}
			return;
		}
		frames++;
		if (frames == 1)
		{
			cam.SetFollowPlayer(follow: false);
			camPos = cam.transform.position;
			gm.StopMusic();
			PlaySFX("sounds/snd_enemypsi");
		}
		if (frames == 25)
		{
			PlaySFX("sounds/snd_lithit");
			kris.GetComponent<SpriteRenderer>().color = Color.black;
			susie.GetComponent<SpriteRenderer>().color = Color.black;
			noelle.GetComponent<SpriteRenderer>().color = Color.black;
			GameObject.Find("Black").GetComponent<SpriteRenderer>().color = new Color(0f, 0f, 0f, 0.75f);
		}
		if (frames < 25)
		{
			return;
		}
		int num = frames % 4 / 2;
		carpainter.SetSprite(num + 2);
		reflectBall.sprite = reflectBallSprites[num];
		float num2 = Mathf.Lerp(6f, 0f, (float)(frames - 25) / 10f);
		cam.transform.position = camPos + new Vector3(Random.Range(-1, 2), Random.Range(-1, 2)) * num2 / 48f;
		lightning.transform.position = kris.transform.position + new Vector3(-0.03f + Random.Range(-0.125f, 0.125f), -0.78f + Random.Range(-0.125f, 0.125f));
		if (frames < 35)
		{
			return;
		}
		if (frames == 35)
		{
			if ((int)gm.GetFlag(103) == 0)
			{
				gm.SetPersistentFlag(0, 1);
				gm.Death();
			}
			else
			{
				reflectBall.transform.position = kris.transform.position + new Vector3(0f, (gm.GetMiniPartyMember() == 1) ? 0.95f : 0.79f);
			}
		}
		lightning.transform.GetChild(0).GetComponent<SpriteRenderer>().enabled = false;
		lightning.color = Color.Lerp(new Color32(byte.MaxValue, byte.MaxValue, 0, 182), new Color(1f, 1f, 0f, 0f), (float)(frames - 35) / 8f);
		if (frames == 55)
		{
			kris.GetComponent<SpriteRenderer>().color = Color.white;
			susie.GetComponent<SpriteRenderer>().color = Color.white;
			noelle.GetComponent<SpriteRenderer>().color = Color.white;
			GameObject.Find("Black").GetComponent<SpriteRenderer>().color = new Color(0f, 0f, 0f, 0f);
			Object.Destroy(reflectBall.gameObject);
			kris.InitiateBattle(28, new Vector2(-5.646f, -4.48f), 10);
			EndCutscene(enablePlayerMovement: false);
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		state = 1;
		if (index == Vector2.right)
		{
			StartText(new string[5] { "* 滚你妈，^05怪人。", "* 你要是不想成为我的左膀右臂，\n  ^05你也可以成为我的左腿右足。", "* 开玩笑的！^05\n* 对于我和我的宗教来说，\n  你的存在可是个大问题。", "* 违抗我，^05我就结束你可怜的生命！", "* 预备！" }, new string[5] { "snd_txtsus", "snd_text", "snd_text", "snd_text", "snd_text" }, new int[5], new string[5] { "su_annoyed", "", "", "", "" });
			changeFace = 3;
		}
		else
		{
			StartText(new string[3] { "* 你这傻子，^05你已经落入我的圈套啦！", "* 你会因你的讽刺语气\n  而受到惩罚！", "* 预备！" }, new string[3] { "snd_text", "snd_text", "snd_text" }, new int[5], new string[5] { "", "", "", "", "" });
			changeFace = 1;
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		carpainter = Object.FindObjectOfType<CarpainterNPC>();
		lightning = GameObject.Find("Lightning").GetComponent<SpriteRenderer>();
		reflectBall = GameObject.Find("ReflectBall").GetComponent<SpriteRenderer>();
		reflectBallSprites = new Sprite[2]
		{
			Resources.Load<Sprite>("overworld/eb_objects/spr_reflectball_0"),
			Resources.Load<Sprite>("overworld/eb_objects/spr_reflectball_1")
		};
		gm.SetCheckpoint(61);
		kris.ChangeDirection(Vector2.up);
		susie.ChangeDirection(Vector2.up);
		noelle.ChangeDirection(Vector2.up);
		if ((int)gm.GetFlag(87) >= 5)
		{
			StartText(new string[4] { "* 感谢你们的到来！^05\n* 我一直都在等你们三个。", "* 我需要你的帮助，让世界染成蓝色，^05\n  变成一个和平的社会。", "* 我知道你有暴力倾向，^05因此你会\n  成为一个非常有用的助手。", "* 你能成为我的左膀右臂吗？" }, new string[4] { "snd_text", "snd_text", "snd_text", "snd_text" }, new int[4], new string[4] { "", "", "", "" });
			txt.EnableSelectionAtEnd();
		}
		else if (gm.GetMiniPartyMember() == 1)
		{
			StartText(new string[4] { "* P-^05Paula？？？^05\n* 你是怎么...？", "* 呃，^05你们下回把钱用在监狱\n  硬度的升级吧还是。", "* 准备好让我们把你打的\n  六亲不认吧！", "* 等你看到了我的毁灭性炸弹\n  你就不会这么想了！" }, new string[5] { "snd_text", "snd_txtpau", "snd_txtsus", "snd_text", "snd_text" }, new int[5], new string[5] { "", "pau_confident", "su_pissed", "", "" });
			state = 1;
			changeFace = 4;
		}
		else
		{
			StartText(new string[3] { "* 感谢你们的到来！^05\n* 我一直都在等你们三个。", "* 我需要你的帮助，让世界染成蓝色，^05\n  变成一个和平的社会。", "* 你能成为我的左膀右臂吗？" }, new string[3] { "snd_text", "snd_text", "snd_text" }, new int[3], new string[3] { "", "", "" });
			txt.EnableSelectionAtEnd();
		}
	}
}

