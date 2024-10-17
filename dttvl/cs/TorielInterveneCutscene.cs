using UnityEngine;

public class TorielInterveneCutscene : CutsceneBase
{
	private Animator toriel;

	private bool hardmode;

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
				toriel.SetFloat("speed", 1f);
				kris.ChangeDirection(Vector2.down);
				susie.DisableAnimator();
				susie.SetSprite("spr_su_down_unhappy_0");
				toriel.Play("WalkUp", 0, 0f);
			}
			toriel.transform.position = Vector3.Lerp(new Vector3(0f, -7f), new Vector3(0f, -2.5f), (float)frames / 30f);
			if (frames == 30)
			{
				toriel.SetFloat("speed", 0f);
				toriel.Play("WalkUp", 0, 0f);
			}
			if (frames == 45)
			{
				if (hardmode)
				{
					StartText(new string[8] { "* 哈...?", "* 我很抱歉，\n^05  但还是要警告你们，\n  这里的怪物。", "* 不是。", "* 我很确定你没忘我早些\n  时候说了什么。", "* 这里的怪物既自私\n  又危险。", "* 我很确定你已经在旅途中\n  受了不少折磨。", "* 我的孩子，^05若是你不想\n  在未来的旅途中收到磨难...", "* 我可以让你和我一同\n  居住。" }, new string[10] { "snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[8] { "su_surprised", "tori_worry", "su_inquisitive", "tori_worry", "tori_sad", "tori_sad", "tori_worry", "tori_worry" }, 0);
				}
				else
				{
					StartText(new string[10] { "* 哈...?", "* 我忘警告你了...\n  ^10在这里住过的怪物。", "* 不是。", "* 我只能假设，\n  在你那边的世界里...", "* 人类与怪物和平共处。", "* 但那套规则在这个世界可\n  不适用。", "* 我们怪物已经被封印在了\n  地底。", "* <color=#FF0000FF>ASGORE</color>，那个暴君发誓\n  要夺走每一位人类的灵魂。", "* 如果你们在旅途中\n  改变主意了...", "* ..." }, new string[10] { "snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[10] { "su_surprised", "tori_worry", "su_inquisitive", "tori_worry", "tori_worry", "tori_sad", "tori_sad", "tori_sad", "tori_worry", "tori_worry" }, 0);
				}
				state = 1;
				frames = 0;
			}
		}
		if (state == 1 && !txt)
		{
			frames++;
			if (frames == 30)
			{
				if (hardmode)
				{
					StartText(new string[5] { "* Dreemurr女士，^05我很确定\n  你的好意他收到了...", "* 但我认为他也不是很想\n  待在这里。", "* 不知道你是否注意到了，\n^05  但我一直紧随他其后。", "* 他知道他该在哪里。", "* 而那个地方绝不会是这。" }, new string[5] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[5] { "su_side", "su_annoyed", "su_side", "su_neutral", "su_annoyed" }, 0);
				}
				else
				{
					StartText(new string[1] { "* 如果我们改变主意了，^10\n  然后...？" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_inquisitive" }, 0);
				}
			}
			if (frames == 80)
			{
				toriel.Play("WalkDownSad", 0, 0f);
			}
			if (frames == 110)
			{
				StartText(new string[4]
				{
					hardmode ? "* 我理解。" : "* 还是算了吧。",
					"* 祝你们好运。",
					"* 做个好人，^15好吗？",
					"* 我的孩子..."
				}, new string[4] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18]
				{
					0, 0, 1, 2, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0
				}, new string[4] { "tori_sad", "tori_sad", "tori_sad", "tori_sad" }, 0);
				frames = 0;
				state = 2;
			}
		}
		if (state == 2 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				toriel.SetFloat("speed", 1f);
			}
			toriel.transform.position = Vector3.Lerp(new Vector3(0f, -2.5f), new Vector3(0f, -7f), (float)frames / 30f);
			if (frames == 45)
			{
				susie.EnableAnimator();
				kris.ChangeDirection(-susie.GetDirection());
				if (hardmode)
				{
					StartText(new string[5] { "* ...", "* 我感觉不太好。", "* 但我想我们没得选了。", "* 我是说，^05只在这里站着也解决\n  不了任何问题。", "* 我们走吧。" }, new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[6] { "su_side", "su_dejected", "su_dejected", "su_side", "su_neutral", "su_smile" }, 0);
				}
				else
				{
					StartText(new string[6] { "* Kris..?", "* 那可真够怪的。", "* 你觉得她本来是不是\n  想让我们留下来来着？", "* ...", "* 好吧，^10 \n  如果她就这样抛弃了我们，\n  我们就不应该让她失望。", "* 我们回家吧。" }, new string[6] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[6] { "su_neutral", "su_side_sweat", "su_dejected", "su_dejected", "su_smirk", "su_smile" }, 0);
				}
				state = 3;
			}
		}
		if (state == 3 && !txt)
		{
			kris.ChangeDirection(Vector2.up);
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		toriel = GameObject.Find("Toriel").GetComponent<Animator>();
		base.StartCutscene(par);
		gm.SetFlag(56, 1);
		hardmode = (int)gm.GetFlag(108) == 1;
		StartText(new string[1] { "* 且慢！" }, new string[4] { "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[1] { "" }, 0);
	}
}

