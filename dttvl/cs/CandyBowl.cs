using UnityEngine;

public class CandyBowl : InteractSelectionBase
{
	[SerializeField]
	private Sprite spill;

	private int bowlState;

	private void Awake()
	{
		bowlState = (int)Object.FindObjectOfType<GameManager>().GetFlag(14);
		if ((int)Util.GameManager().GetFlag(108) == 1)
		{
			lines[1] = "* 嘿，^05我们还是全拿走吧。";
		}
		ReplaceText();
	}

	public override void DoInteract()
	{
		if ((bool)txt || !enabled)
		{
			return;
		}
		txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
		if (Object.FindObjectOfType<GameManager>().GetItemList().Contains(16))
		{
			Util.GameManager().SetFlag(126, 1);
			if (bowlState == 1)
			{
				Object.FindObjectOfType<GameManager>().RemoveItem(Object.FindObjectOfType<GameManager>().GetItemList().IndexOf(16));
				Object.FindObjectOfType<GameManager>().AddItem(17);
				lines = new string[4] { "* 你把手里的鸡蛋\n  换成了另一颗糖果。", "* 出于某些原因，^05\n  这个看起来与其他的并不同。", "* 你获得了巧克力糖果。", "* 这到底是在做什么？" };
				sounds = new string[4] { "snd_text", "snd_text", "snd_text", "snd_txtsus" };
				portraits = new string[4] { "", "", "", "su_inquisitive" };
			}
			else if (bowlState == 2)
			{
				Object.FindObjectOfType<GameManager>().RemoveItem(Object.FindObjectOfType<GameManager>().GetItemList().IndexOf(16));
				Object.FindObjectOfType<GameManager>().AddItem(17);
				bool num = (int)Util.GameManager().GetFlag(108) == 1;
				string text = (num ? "* 所以，^05在你打翻了那个该死的\n  碗以后，一个巧克力形成了。" : "* Kris,^05你看起来真的很开心。");
				string text2 = (num ? "* 你应该享受这毁灭所带来的\n  战利品。" : "* 你现在终于开始享受这毁灭\n  所带来的战利品了？");
				lines = new string[7] { "* 看看你都做了什么。", "* ...", "* 你把蛋放在了基座的\n  中心位置上。", "* 你短暂地移开视线，^05\n  发现原本该是蛋的地方\n  出现了一块巧克力。", "* 你获得了巧克力糖果。", text, text2 };
				sounds = new string[7] { "snd_text", "snd_text", "snd_text", "snd_text", "snd_text", "snd_txtsus", "snd_txtsus" };
				speed = new int[10];
				portraits = new string[7] { "", "", "", "", "", "su_smirk", "su_teeth_eyes" };
			}
		}
		txt.CreateBox(lines, sounds, speed, bowlState != 0, portraits);
		ReplaceText();
		Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
		if (bowlState == 0)
		{
			txt.EnableSelectionAtEnd();
		}
	}

	private void ReplaceText()
	{
		if (bowlState == 1)
		{
			lines = new string[1] { "* 你想着拿更多糖果，^10但一想到这点，\n  你就觉得很难受。" };
		}
		else if (bowlState == 2)
		{
			GetComponent<SpriteRenderer>().sprite = spill;
			lines = new string[1] { "* 看看你都做了什么。" };
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		selectActivated = false;
		if (index == Vector2.left)
		{
			if (Object.FindObjectOfType<GameManager>().NumItemFreeSpace() > 1)
			{
				Object.FindObjectOfType<GameManager>().AddItem(10);
				Object.FindObjectOfType<GameManager>().AddItem(10);
				Object.FindObjectOfType<GameManager>().SetFlag(14, 1);
				bowlState = 1;
				txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
				txt.CreateBox(new string[2] { "* 你得到了几块糖果。\n* (按下 ^C 打开菜单。)", "* 管他呢。^05\n* 至少东西我拿到了。" }, sounds, speed, giveBackControl: true, new string[2] { "", "su_annoyed" });
			}
			else
			{
				txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
				txt.CreateBox(new string[2] { "* 你没有足够的空间\n  给你和Susie放糖果。", "* 你怎么能带这么多东西了？？？" }, sounds, speed, giveBackControl: true, new string[2] { "", "su_angry" });
			}
		}
		else if (index == Vector2.up)
		{
			int num = Object.FindObjectOfType<GameManager>().NumItemFreeSpace();
			if (num > 1)
			{
				bool flag = (int)Util.GameManager().GetFlag(108) == 1;
				int num2 = ((num < 4) ? num : 4);
				if (flag && num2 == 4)
				{
					num2 = 3;
					num = 3;
				}
				for (int i = 0; i < num2; i++)
				{
					Object.FindObjectOfType<GameManager>().AddItem(10);
				}
				string text = "* 但拿四个之后，^10\n  那碟糖果洒到了地上。";
				string text2 = "* 我天。";
				string text3 = "su_wideeye";
				switch (num)
				{
				case 3:
					text = "* 但拿三个之后，^10\n  那碟糖果洒到了地上。";
					break;
				case 2:
					text = "* 但拿两个之后，^10\n  那碟糖果洒到了地上。";
					text2 = "* 如果你没地方放东西，^05\n  那你连试都不该试。";
					text3 = "su_annoyed";
					break;
				case 1:
					text = "* 但拿一个之后，^10\n  那碟糖果洒到了地上。";
					text2 = "* 真的吗，^05 Kris?";
					if (flag)
					{
						text2 = "* 当真吗，伙计？";
					}
					text3 = "su_pissed";
					break;
				}
				string text4 = "* 你想趁别人不注意，\n  尽可能多地拿走糖果。";
				if (flag)
				{
					text4 = "* 由于你的小身板， ^05\n  你几乎够不着碗。";
					text = text.Replace("But after", "After taking").Replace("one,", "candy,");
				}
				Object.FindObjectOfType<GameManager>().SetFlag(14, 2);
				bowlState = 2;
				txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
				txt.CreateBox(new string[3] { text4, text, text2 }, new string[3] { "snd_text", "snd_text", "snd_txtsus" }, speed, giveBackControl: true, new string[3] { "", "", text3 });
			}
			else
			{
				txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
				txt.CreateBox(new string[2] { "* 你没有足够的空间\n  给你和Susie放糖果。", "* 你怎么能带这么多东西了？？？" }, sounds, speed, giveBackControl: true, new string[2] { "", "su_angry" });
			}
		}
		else if (index == Vector2.right)
		{
			txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(new string[1] { "* 你决定不拿。" }, sounds, speed, giveBackControl: true);
		}
		ReplaceText();
	}
}

