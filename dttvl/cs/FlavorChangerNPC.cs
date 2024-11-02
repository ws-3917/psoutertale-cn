using UnityEngine;

public class FlavorChangerNPC : InteractSelectionBase
{
	[SerializeField]
	protected string[] adviceLines = new string[1] { "" };

	[SerializeField]
	protected string[] adviceSounds = new string[1] { "snd_text" };

	[SerializeField]
	protected int[] adviceSpeed = new int[1];

	[SerializeField]
	protected string[] advicePortraits;

	public override void DoInteract()
	{
		if (!Util.GameManager().SusieInParty() && !Util.GameManager().NoelleInParty())
		{
			lines[0] = "* 你们好啊，^05年轻的旅者们！";
		}
		if ((int)Util.GameManager().GetFlag(224) == 1)
		{
			lines = new string[2]
			{
				lines[0],
				"* 你想要换新的边框颜色吗？"
			};
		}
		else
		{
			if (Util.GameManager().GetCurrentZone() < 72)
			{
				Util.GameManager().SetFlag(225, 1);
			}
			if ((int)Util.GameManager().GetFlag(225) == 0)
			{
				lines[2] = "* I don't believe that we've\n  met in the previous world,^05\n  but I followed you here anyway.";
				lines[3] = "* 我想给你的旅程添加一点\n  趣味。";
				lines[4] = "* Or would you prefer advice?\n^05* I'm happy to help regardless!";
			}
			Util.GameManager().SetFlag(224, 1);
		}
		if (adviceLines.Length == 1 && adviceLines[0] == "")
		{
			up = "";
		}
		base.DoInteract();
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		selectActivated = false;
		if (index == Vector2.left)
		{
			Object.Instantiate(Resources.Load<GameObject>("ui/FlavorChanger"), Vector3.zero, Quaternion.identity, GameObject.Find("Canvas").transform).transform.localPosition = Vector3.zero;
		}
		else if (index == Vector2.up)
		{
			txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(adviceLines, adviceSounds, adviceSpeed, giveBackControl: true, advicePortraits);
			if (Util.GameManager().GetCurrentZone() == 56)
			{
				Util.GameManager().SetFlag(251, 1);
			}
		}
		else
		{
			txt = new GameObject("InteractTextBoxSelection", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(new string[1] { "* 改变心意了就来找我！" }, giveBackControl: true);
		}
	}

	private void SetInteractText()
	{
	}
}

