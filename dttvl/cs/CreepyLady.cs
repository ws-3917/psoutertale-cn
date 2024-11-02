using UnityEngine;
using UnityEngine.UI;

public class CreepyLady : OverworldPartyMember
{
	protected bool selectActivated;

	private int detectFrames;

	private bool detecting;

	private bool following;

	protected UIBackground shopBG;

	private string prefix = "";

	protected override void Awake()
	{
		base.Awake();
		isPlayer = false;
	}

	private void Start()
	{
		if ((int)Util.GameManager().GetFlag(116) != 0)
		{
			prefix = "_normal";
		}
	}

	protected override void Update()
	{
		if ((bool)txt)
		{
			HandleTextExist();
		}
		if (!txt && (bool)shopBG)
		{
			Object.Destroy(shopBG.gameObject);
		}
		if (detecting)
		{
			detectFrames++;
			if (detectFrames == 30)
			{
				base.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = false;
				DoInteract();
			}
		}
		else
		{
			base.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = false;
		}
		base.Update();
	}

	private void LateUpdate()
	{
		if (GetComponent<SpriteRenderer>().sprite.name != curSpriteName && prefix != "")
		{
			Sprite sprite = Resources.Load<Sprite>("overworld/npcs/hhvillage/" + GetComponent<SpriteRenderer>().sprite.name + prefix);
			if (sprite != null)
			{
				GetComponent<SpriteRenderer>().sprite = sprite;
			}
		}
		curSpriteName = GetComponent<SpriteRenderer>().sprite.name;
	}

	public override void DoInteract()
	{
		GetComponent<Animator>().SetFloat("dirX", Object.FindObjectOfType<OverworldPlayer>().transform.position.x - base.transform.position.x);
		GetComponent<Animator>().SetFloat("dirY", Object.FindObjectOfType<OverworldPlayer>().transform.position.y - base.transform.position.y);
		if ((bool)txt || !base.enabled)
		{
			return;
		}
		if ((int)Object.FindObjectOfType<GameManager>().GetFlag(115) == 2)
		{
			txt = new GameObject("CreepyLadyInteract", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(new string[1] { "* 我应该把宗教收获的资金投入\n  到慈善机构里。" });
			Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
		}
		else if ((int)Object.FindObjectOfType<GameManager>().GetFlag(116) != 0)
		{
			txt = new GameObject("CreepyLadyInteract", typeof(TextBox)).GetComponent<TextBox>();
			if ((int)Object.FindObjectOfType<GameManager>().GetFlag(115) == 0)
			{
				if (Object.FindObjectOfType<GameManager>().NumItemFreeSpace() == 0)
				{
					txt.CreateBox(new string[3] { "* 终于，^05我有个道歉的机会了。", "* ...^05呃...我对我的诡异行为\n  感到抱歉。", "* 我应该给你个东西的，但是\n  你背包已经满了。" });
				}
				else
				{
					txt.CreateBox(new string[4] { "* 终于，^05我有个道歉的机会了。", "* ...^05呃...我对我的诡异行为\n  感到抱歉。", "* 作为赔偿，^05你可以拥有\n  这个奇怪的卡片。", "* （你获得了集点卡。）" });
					Util.GameManager().AddItem(24);
					Util.GameManager().SetFlag(115, 2);
				}
			}
			else
			{
				txt.CreateBox(new string[4] { "* 终于，^05我有个道歉的机会了。", "* ...^05呃...我对我的诡异行为\n  感到抱歉。", "* 我会还你的钱的。", "* （你得到了1G。）" });
				Util.GameManager().AddGold(1);
				Util.GameManager().SetFlag(115, 2);
			}
			Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
		}
		else if ((int)Object.FindObjectOfType<GameManager>().GetFlag(115) == 0)
		{
			txt = new GameObject("CreepyLadyInteract", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(new string[3] { "* 打扰一下，旅行者。", "* 我正在为帮助保护世界免受\n  污染侵害而收集捐款。", "* 如果你想的话，\n  我希望你捐一点。" }, giveBackControl: false);
			shopBG = new GameObject("ShopMenu").AddComponent<UIBackground>();
			shopBG.transform.parent = GameObject.Find("Canvas").transform;
			shopBG.CreateElement("space", new Vector2(189f, 2f), new Vector2(202f, 108f));
			Text component = Object.Instantiate(Resources.Load<GameObject>("ui/SelectionBase"), shopBG.transform).GetComponent<Text>();
			component.gameObject.name = "SpaceInfo";
			component.transform.localScale = new Vector3(1f, 1f, 1f);
			component.transform.localPosition = new Vector3(116f, -71f);
			component.text = "$ - " + Object.FindObjectOfType<GameManager>().GetGold() + "G\nSPACE - " + (8 - Object.FindObjectOfType<GameManager>().NumItemFreeSpace()) + "/8";
			component.lineSpacing = 1.3f;
			Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
			txt.EnableSelectionAtEnd();
		}
		else
		{
			txt = new GameObject("CreepyLadyInteract", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(new string[1] { "* 感谢你的赞助。" });
			Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		if (index == Vector2.right || (index == Vector2.left && Object.FindObjectOfType<GameManager>().GetGold() == 0))
		{
			following = true;
			string[] array = new string[2] { "* 起开，^05怪胎。", "* ...^10\n* 那你可就走不掉了。" };
			if (index == Vector2.left)
			{
				array[0] = "* 我们没钱，^10怪人。";
			}
			txt = new GameObject("CreepyLadyInteract", typeof(TextBox)).GetComponent<TextBox>();
			txt.CreateBox(array, new string[2] { "snd_txtsus", "snd_text" }, new int[2], giveBackControl: true, new string[2] { "su_annoyed", "" });
			GameObject.Find("Noelle").GetComponent<OverworldPartyMember>().UseUnhappySprites();
		}
		else
		{
			following = false;
			Deactivate();
			if (Object.FindObjectOfType<GameManager>().NumItemFreeSpace() == 0)
			{
				txt = new GameObject("CreepyLadyInteract", typeof(TextBox)).GetComponent<TextBox>();
				txt.CreateBox(new string[6] { "* 好人一定会有好报的。", "* 给你一张奇怪的卡片...", "* 等下，^05你背包没有任何空余空间。", "* 那我过会再打扰你吧...", "* 把你的钱拿回去。", "* （你得到了1G。）" }, giveBackControl: true);
			}
			else
			{
				txt = new GameObject("CreepyLadyInteract", typeof(TextBox)).GetComponent<TextBox>();
				txt.CreateBox(new string[3] { "* 好人一定会有好报的。", "* 给你一个奇怪的卡片。", "* （你获得了集点卡。）" }, giveBackControl: true);
				Object.FindObjectOfType<GameManager>().RemoveGold(1);
				Object.FindObjectOfType<GameManager>().AddItem(24);
				Object.FindObjectOfType<GameManager>().SetFlag(115, 1);
				shopBG.transform.Find("SpaceInfo").GetComponent<Text>().text = "$ - " + Object.FindObjectOfType<GameManager>().GetGold() + "G\nSPACE - " + (8 - Object.FindObjectOfType<GameManager>().NumItemFreeSpace()) + "/8";
			}
			GameObject.Find("Noelle").GetComponent<OverworldPartyMember>().UseHappySprites();
		}
		selectActivated = false;
	}

	public bool IsFollowing()
	{
		return following;
	}

	protected virtual void HandleTextExist()
	{
		if (txt.CanLoadSelection() && !selectActivated)
		{
			selectActivated = true;
			DeltaSelection component = Object.Instantiate(Resources.Load<GameObject>("ui/DeltaSelection"), Vector3.zero, Quaternion.identity, txt.GetUIBox().transform).GetComponent<DeltaSelection>();
			component.SetupChoice(Vector2.left, "给1G", Vector3.zero);
			component.SetupChoice(Vector2.right, "No", new Vector3(20f, 0f));
			component.Activate(this, 0, txt.gameObject);
		}
	}

	public void DetectPlayer()
	{
		detecting = true;
		Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
		base.transform.Find("Exclaim").GetComponent<SpriteRenderer>().enabled = true;
		base.transform.Find("Exclaim").GetComponent<AudioSource>().Play();
		GetComponent<Animator>().SetFloat("dirX", Object.FindObjectOfType<OverworldPlayer>().transform.position.x - base.transform.position.x);
		GetComponent<Animator>().SetFloat("dirY", Object.FindObjectOfType<OverworldPlayer>().transform.position.y - base.transform.position.y);
	}
}

