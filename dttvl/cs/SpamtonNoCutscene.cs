using System.Collections.Generic;
using UnityEngine;

public class SpamtonNoCutscene : CutsceneBase
{
	private Transform spamton;

	private List<int> itemList = new List<int>();

	private List<int> removedItems = new List<int>();

	private int delayedReaction;

	private float siner;

	private Vector3 spamPos = Vector3.zero;

	private bool b;

	private int c;

	private bool tookFromBox;

	private SpriteRenderer greyDoor;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			if (delayedReaction < 10)
			{
				delayedReaction++;
				if (delayedReaction == 10)
				{
					SetSprite(kris, "spr_kr_surprise");
					SetSprite(susie, "spr_su_surprise_right");
					SetSprite(noelle, "spr_no_right_shocked_0");
				}
			}
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() > 1)
				{
					txt.MakeSkippable();
				}
				if (AtLine(2) || AtLine(4))
				{
					SetSprite(spamton, "overworld/npcs/spr_spamton_grab");
					spamPos = spamton.position;
				}
				else if (AtLine(3))
				{
					SetSprite(spamton, "overworld/npcs/spr_spamton_hand");
				}
				if (AtLineRepeat(1))
				{
					siner += 0.1f;
					spamton.position += new Vector3(Mathf.Sin(siner) / 24f, 0f);
				}
				else if (AtLineRepeat(2))
				{
					if (b)
					{
						spamton.position = spamPos + new Vector3(Random.Range(-1, 2), Random.Range(-1, 2)) / 48f;
						b = false;
					}
					else
					{
						b = true;
					}
				}
				else if (AtLineRepeat(3) && c < 4)
				{
					c++;
					spamton.position -= new Vector3(0.125f, 0f);
				}
				else if (AtLineRepeat(4))
				{
					spamton.position = spamPos + new Vector3(Random.Range(-1, 2), Random.Range(-1, 2)) / 24f;
				}
			}
			else
			{
				if (MoveTo(spamton, kris.transform.position, 6f))
				{
					return;
				}
				PlaySFX("sounds/snd_hypnosis");
				SetSprite(noelle, "spr_no_surprise_right");
				SetSprite(susie, "spr_su_freaked");
				state = 1;
				string text = "* Spamton absorbed the\n  ";
				int num = 0;
				int[] array = new int[removedItems.Count];
				bool flag = false;
				if (removedItems.Contains(24))
				{
					array[num] = 24;
					num++;
				}
				if (removedItems.Contains(45))
				{
					array[num] = 45;
					num++;
					if (array.Length == 2)
					{
						flag = true;
					}
				}
				if (removedItems.Contains(44))
				{
					array[num] = 44;
					num++;
				}
				if (removedItems.Contains(-2))
				{
					array[num] = -2;
				}
				for (num = 0; num < array.Length; num++)
				{
					string text2 = ((array[num] == -2) ? "Silver Key" : Items.ItemName(array[num]));
					text += text2;
					text = ((num + 1 != array.Length) ? ((array.Length != 2) ? (text + ((num == 1) ? ",\n  " : ", ")) : (text + (flag ? "\n  and " : " and "))) : ((array.Length != 1 || !tookFromBox) ? (text + ".") : (text + "\n  from the dimensional box.")));
				}
				List<string> list = new List<string> { text };
				if (array.Length > 1 && tookFromBox)
				{
					list.Add("* He somehow absorbed the ones\n  from the dimensional box.");
				}
				StartText(list.ToArray(), new string[1] { "snd_text" }, new int[1], new string[1] { "" });
			}
		}
		else if (state == 1)
		{
			spamton.position = kris.transform.position + new Vector3(Random.Range(-1, 2), Random.Range(-1, 2)) / 24f;
			frames++;
			kris.GetComponent<SpriteRenderer>().flipX = frames % 10 >= 5;
			if (!txt)
			{
				SetSprite(susie, "spr_su_surprise_right");
				SetSprite(noelle, "spr_no_surprise");
				SetSprite(kris, "spr_kr_sit");
				spamton.GetComponent<Animator>().enabled = true;
				PlaySFX("sounds/snd_spamton_laugh");
				frames = 0;
				state = 2;
			}
		}
		else if (state == 2)
		{
			frames++;
			if (frames < 10)
			{
				spamton.position += new Vector3(0.25f, 0f);
			}
			if (frames == 40)
			{
				greyDoor.transform.position = new Vector3(spamton.transform.position.x + 0.1f, -0.676f);
				StartText(new string[1] { "* [[Adiós]] B[[uckaroos!]]^10\n* I M3AN  BITCH !!" }, new string[1] { "snd_txtspam" }, new int[1], new string[1] { "spamton_insane" });
				frames = 0;
				state = 3;
			}
		}
		else if (state == 3)
		{
			if (frames < 30 || !txt)
			{
				frames++;
			}
			greyDoor.color = new Color(1f, 1f, 1f, (float)frames / 30f);
			if (frames == 45)
			{
				spamton.GetComponent<SpriteRenderer>().maskInteraction = SpriteMaskInteraction.VisibleInsideMask;
				greyDoor.sprite = Resources.Load<Sprite>("overworld/spr_grey_door_1");
				PlaySFX("sounds/snd_elecdoor_shutheavy");
			}
			if (frames >= 75)
			{
				if (frames == 75)
				{
					PlaySFX("sounds/snd_fall");
					gm.StopMusic(30f);
				}
				spamton.position += new Vector3(0f, -0.125f);
			}
			if (frames == 105)
			{
				greyDoor.transform.position = new Vector3(100f, 0f);
				PlaySFX("sounds/snd_mysterygo");
			}
			if (frames == 150)
			{
				StartText(new string[3] { "* W-^05well,^05 uhh...^10 THAT just\n  happened!", "* 让我捋捋...", "* I'm not gonna question\n  this at all." }, new string[2] { "snd_txtnoe", "snd_txtsus" }, new int[1], new string[3] { "no_confused_side", "su_inquisitive", "su_annoyed" });
				state = 4;
				frames = 0;
				kris.EnableAnimator();
				noelle.EnableAnimator();
				susie.EnableAnimator();
				ChangeDirection(noelle, Vector2.right);
				ChangeDirection(susie, Vector2.left);
				ChangeDirection(kris, Vector2.left);
			}
		}
		else if (state == 4 && !txt)
		{
			gm.PlayMusic("zoneMusic");
			ChangeDirection(susie, Vector2.right);
			ChangeDirection(kris, Vector2.down);
			EndCutscene();
		}
	}

	public override void StartCutscene(params object[] par)
	{
		bool flag = false;
		itemList = new List<int>(gm.GetItemList());
		BoxUI boxUI = Object.FindObjectOfType<BoxUI>();
		if (boxUI != null)
		{
			boxUI.WriteBoxItems();
			Object.Destroy(boxUI.gameObject);
		}
		if (gm.GetFlagInt(292) == 1 && gm.GetFlagInt(303) == 0 && gm.GetFlagInt(87) >= 7)
		{
			removedItems.Add(-2);
			flag = true;
			gm.SetFlag(292, 0);
			gm.SetFlag(315, 1);
		}
		for (int i = 0; i < 18; i++)
		{
			bool flag2 = false;
			int i2 = i;
			int num = -1;
			if (i < 8)
			{
				flag2 = true;
				num = itemList[i];
			}
			else if (gm.GetFlagInt(156) == 1)
			{
				i2 = 149 + i;
				num = gm.GetFlagInt(i2);
			}
			if (num <= -1)
			{
				continue;
			}
			bool flag3 = false;
			if (num == 24 && gm.GetFlagInt(87) >= 5)
			{
				flag3 = true;
			}
			else if ((num == 44 || num == 45) && gm.GetFlagInt(87) >= 7)
			{
				flag3 = true;
			}
			if (flag3)
			{
				flag = true;
				removedItems.Add(num);
				if (flag2)
				{
					gm.RemoveItemByID(num);
					continue;
				}
				tookFromBox = true;
				gm.SetFlag(i2, -1);
			}
		}
		if (flag)
		{
			base.StartCutscene(par);
			GameObject.Find("EchoFish").GetComponent<InteractTextBox>().ModifyContents(new string[1] { "* I...^10 I'll pretend I didn't see\n  that..." }, new string[1] { "snd_text" }, new int[1], new string[1] { "" });
			spamton = GameObject.Find("Spamton").transform;
			spamton.position = new Vector3(15.479f, 0f);
			gm.PlayMusic("music/mus_spamton_meeting");
			StartText(new string[4] { "* HEY YOU LITTLE [[FunGuy]]\n!", "* [[Did I just catch you\n  having fun?!]]", "* WELL 2 IN 3 [[Teens]]\n  THINK [[ChildEndanger]]\n  SHOULDN\"T HAVE [[\"Fun\"]]", "* SO THAT [[\"Fun\"]] IS\n  OFFICIALLY\n  [[Eviction Notice]]" }, new string[1] { "snd_txtspam" }, new int[1], new string[4] { "spamton_neutral", "spamton_insane", "spamton_laugh", "spamton_stare" });
			greyDoor = GameObject.Find("FakeDoor").GetComponent<SpriteRenderer>();
			txt.MakeUnskippable();
			gm.SetFlag(314, 1);
		}
		else
		{
			state = 66;
			EndCutscene(enablePlayerMovement: false);
		}
	}
}

