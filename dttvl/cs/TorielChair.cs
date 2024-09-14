using System;
using UnityEngine;

public class TorielChair : Interactable
{
	private bool torielInChair;

	private int torielDialogue;

	private bool talkedToBefore;

	private void Awake()
	{
		if ((int)UnityEngine.Object.FindObjectOfType<GameManager>().GetFlag(53) == 1 && (int)UnityEngine.Object.FindObjectOfType<GameManager>().GetFlag(56) == 0)
		{
			torielInChair = true;
			GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/toriel_home/spr_chairiel_withtoriel");
		}
		torielDialogue = (int)UnityEngine.Object.FindObjectOfType<GameManager>().GetFlag(55);
	}

	public override void DoInteract()
	{
		if ((bool)txt)
		{
			return;
		}
		TextBox component = new GameObject("InteractTextBox", typeof(TextBox)).GetComponent<TextBox>();
		if (torielInChair)
		{
			if (torielDialogue == 0)
			{
				component.CreateBox(new string[6]
				{
					"* 天啊，^10看看是谁醒了！",
					"* 你看起来休息的很好。",
					"* 所以，^10你们俩接下来\n  有什么计划？",
					((int)Util.GameManager().GetFlag(108) == 1) ? "* 不知道。" : "* 我不到。^10\n* 我基本就跟着Kris走。",
					"* 那也不错其实。",
					"* 我希望你们走之前可以\n  跟我说一声。"
				}, new string[6] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor" }, new int[9], new string[6] { "tori_happy", "tori_happy", "tori_neutral", "su_side", "tori_worry", "tori_worry" });
			}
			else if (torielDialogue == 1)
			{
				if ((int)Util.GameManager().GetFlag(108) == 1)
				{
					component.CreateBox(new string[6] { "* 离别之音...", "* I have an errand\n  of my own to tend\n  to.", "* 你们俩摔在花之床上了，\n^10  不是吗？", "* 对...？", "* 我待会回去还得照看它们。", "* Flowers are quite\n  fragile,^05 you know." }, new string[9] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[14], new string[6] { "tori_neutral", "tori_neutral", "tori_worry", "su_smirk_sweat", "tori_worry", "tori_wack" });
				}
				else
				{
					component.CreateBox(new string[9] { "* 离别之音...", "* I have an errand\n  of my own to tend\n  to.", "* 你们俩摔在花之床上了，\n^10  不是吗？", "* 对...？", "* 我待会回去还得照看它们。", "* ...你们走之前...？", "* 不，^10你们不用担心。", "* 也就只是施肥浇水的事。", "* 我祝愿你们的旅途上不再有\n  苦难。" }, new string[9] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[14], new string[9] { "tori_neutral", "tori_neutral", "tori_worry", "su_smirk_sweat", "tori_worry", "tori_blush", "tori_worry", "tori_wack", "tori_worry" });
				}
			}
			else if (torielDialogue == 2)
			{
				if ((int)Util.GameManager().GetFlag(108) == 1)
				{
					component.CreateBox(new string[1] { "* My child,^05 I hope that\n  you are making good\n  decisions." }, new string[9] { "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[14], new string[6] { "tori_worry", "tori_neutral", "tori_worry", "su_smirk_sweat", "tori_worry", "tori_wack" });
				}
				else
				{
					component.CreateBox(new string[2] { "* Kris，^10你母亲一定在为你着急。", "* 是时候启程了。" }, new string[2] { "snd_txttor", "snd_txttor" }, new int[14], new string[2] { "tori_worry", "tori_worry" });
				}
			}
			component.gameObject.AddComponent<TorielGlasses>();
			if (torielDialogue < 2)
			{
				torielDialogue++;
				UnityEngine.Object.FindObjectOfType<GameManager>().SetFlag(55, torielDialogue);
			}
		}
		else
		{
			if ((int)Util.GameManager().GetFlag(108) == 1)
			{
				component.CreateBox(new string[1] { "* (Seems like the right size\n  for Toriel.)" });
			}
			else if (talkedToBefore)
			{
				component.CreateBox(new string[1] { "* (You refuse to believe that\n  this is not Chairiel.)" });
			}
			else
			{
				component.CreateBox(new string[2] { "* (It's Toriel's most\n  comfortable sitting chair.)", "* (It's so cozy,^10 that it's hard\n  to believe that this isn't\n  this world's Chairiel.)" });
			}
			talkedToBefore = true;
		}
		UnityEngine.Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
	}

	public override int GetEventData()
	{
		throw new NotImplementedException();
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		throw new NotImplementedException();
	}
}

