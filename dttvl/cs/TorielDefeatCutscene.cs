using UnityEngine;

public class TorielDefeatCutscene : CutsceneBase
{
	private Animator toriel;

	private bool playSound;

	private void Update()
	{
		if (state == 0)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 2)
				{
					susie.ChangeDirection(Vector2.right);
				}
				if (txt.GetCurrentStringNum() == 28 && !playSound)
				{
					playSound = true;
					PlaySFX("sounds/snd_item");
				}
				if (txt.GetCurrentStringNum() == 33)
				{
					susie.ChangeDirection(Vector2.up);
				}
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					gm.StopMusic(60f);
					susie.ChangeDirection(Vector2.right);
					toriel.SetFloat("speed", 1f);
					toriel.GetComponent<SpriteRenderer>().flipX = false;
				}
				if (toriel.transform.position.x != 7.73f)
				{
					toriel.transform.position = Vector3.MoveTowards(toriel.transform.position, new Vector3(7.73f, 0.3f), 0.125f);
				}
				else
				{
					toriel.GetComponent<SpriteRenderer>().enabled = false;
					kris.ChangeDirection(Vector2.down);
					susie.ChangeDirection(Vector2.up);
					StartText(new string[4] { "* 那么，^05你要离开这...", "* And I've gotta find\n  this <color=#FFFF00FF>ROYAL SCIENTIST</color>\n  guy.", "* 应该会挺有意思的。", "* 我们走吧。" }, new string[4] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[4] { "su_neutral", "su_side", "su_confident", "su_smile" }, 0);
					state = 1;
				}
			}
		}
		if (state == 1 && !txt)
		{
			kris.SetSelfAnimControl(setAnimControl: true);
			susie.SetSelfAnimControl(setAnimControl: true);
			gm.PlayMusic("zoneMusic");
			gm.SetCheckpoint(14, new Vector3(91.8f, 0.6f));
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetFlag(8, 1);
		Object.Destroy(GameObject.Find("SusieSOUL"));
		kris.transform.position = new Vector3(-0.65f, 0.88f);
		kris.ChangeDirection(Vector2.right);
		kris.GetComponent<Animator>().Play("idle");
		susie.transform.position = new Vector3(-1.16f, -0.35f);
		susie.EnableAnimator();
		susie.ChangeDirection(Vector2.up);
		susie.UseHappySprites();
		toriel = GameObject.Find("Toriel").GetComponent<Animator>();
		toriel.enabled = true;
		toriel.Play("WalkRight", 0, 0f);
		toriel.GetComponent<SpriteRenderer>().flipX = true;
		toriel.transform.position = new Vector3(1.47f, 0.3f);
		gm.PlayMusic("music/mus_toriel", 0.75f);
		StartText(new string[33]
		{
			"* ...^10谢了。", "* 哎，^10额，^05我叫Susie。", "* 额...你听说过Kris这个\n  名字吗？", "* Kris...", "* 我从未听说过。", "* 哈。", "* 好吧，^05在我那边，\n  你是他的妈妈。", "* 真的？", "* 好吧，^05我完全不知道。", "* 除非...",
			"* 除非...？", "* 你会不会...^10\n  是来自另一个世界\n  的人？", "* 可能只有那样才解释得通吧。", "* 你知道我该怎么离开吗？", "* 我觉得吧...", "* 你或许可以去找地底世界的\n  <color=#FFFF00FF>皇家科学员</color>。", "* 他总是在做一些...\n  ^15有趣的实验。", "* 他或许能帮助你们回家。", "* 那我该怎么找到他呢？", "* 你们得一路走到热域。",
			"* 那离这挺远的，\n^10  但我相信你们能办到的。", "* 还有我的孩子，^05一切你都\n  看在眼里...", "* 你也想陪伴她，^05对吧？", "* 你们两个合力一定无所不能。", "* 因此我对你们俩的离去\n  不会感到太担心。", "* 但不管怎么说，^05在你们离开\n  之前，^05我给你个手机。", "* 需要我帮助的时候，\n^05  给我打电话。", "* （你得到了手机。）", "* 我会为你们准备些东西。", "* 我希望能尽快见到你们。",
			"* 我的孩子，^05做个好人，\n^05  好吗？", "* 还有Susie，^05\n  看好，保护好这个孩子。", "* 包在我身上，^05不用担心。"
		}, new string[33]
		{
			"snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor",
			"snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor",
			"snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_text", "snd_txttor", "snd_txttor",
			"snd_txttor", "snd_txttor", "snd_txtsus"
		}, new int[33], new string[33]
		{
			"su_depressed", "su_neutral", "su_smile_sweat", "tori_neutral", "tori_worry", "su_inquisitive", "su_annoyed", "tori_blush", "tori_neutral", "tori_worry",
			"su_smile_sweat", "tori_worry", "su_inquisitive", "su_neutral", "tori_worry", "tori_neutral", "tori_worry", "tori_neutral", "su_surprised", "tori_worry",
			"tori_happy", "tori_worry", "tori_worry", "tori_neutral", "tori_happy", "tori_neutral", "tori_neutral", "", "tori_neutral", "tori_neutral",
			"tori_worry", "tori_worry", "su_smirk_sweat"
		}, 0);
	}
}

