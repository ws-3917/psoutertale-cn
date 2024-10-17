using UnityEngine;

public class EchoFlower1 : InteractTextBox
{
	public override void DoInteract()
	{
		if (talkedToBefore && Util.GameManager().GetFlagInt(304) == 1)
		{
			Util.GameManager().SetFlag(304, 2);
		}
		else if (Util.GameManager().GetFlagInt(304) == 2)
		{
			txt = new GameObject("InteractTextBox", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(new string[2] { "* 至少我们并不住在沼泽旁边，^05哈哈！", "* （这仍然很...^05诡异。）" }, new string[2] { "snd_txtnoe", "snd_txtsus" }, new int[1], giveBackControl: true, new string[2] { "", "su_side_sweat" });
			Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
			return;
		}
		base.DoInteract();
	}
}

