using UnityEngine;

public class StickCutscene : CutsceneBase
{
	private Vector3 camInitPos;

	private bool susieGrabbedStick;

	private Vector3 noelleNewPos;

	private Animator sans;

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
				cam.SetFollowPlayer(follow: false);
				camInitPos = cam.transform.position;
				noelleNewPos = kris.transform.position - new Vector3(1.25f, 0f) + noelle.GetPositionOffset();
			}
			cam.transform.position = Vector3.Lerp(camInitPos, new Vector3(17f, 0f), (float)frames / 25f);
			if (noelle.transform.position != noelleNewPos)
			{
				noelle.GetComponent<Animator>().SetBool("isMoving", value: true);
				noelle.transform.position = Vector3.MoveTowards(noelle.transform.position, noelleNewPos, 1f / 12f);
			}
			else
			{
				noelle.GetComponent<Animator>().SetBool("isMoving", value: false);
			}
			if (susie.transform.position != new Vector3(16.27f, -2.17f))
			{
				susie.GetComponent<Animator>().SetBool("isMoving", value: true);
				susie.GetComponent<Animator>().SetFloat("speed", 3f);
				susie.transform.position = Vector3.MoveTowards(susie.transform.position, new Vector3(16.27f, -2.17f), 5f / 24f);
			}
			else if (!susieGrabbedStick)
			{
				susieGrabbedStick = true;
				PlaySFX("sounds/snd_grab");
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
				susie.GetComponent<Animator>().SetFloat("speed", 1f);
				susie.DisableAnimator();
				susie.SetSprite("spr_su_grab_stick");
				Object.Destroy(GameObject.Find("Stick"));
			}
			if (susieGrabbedStick && noelle.transform.position == noelleNewPos && frames >= 45)
			{
				noelle.GetComponent<Animator>().SetBool("isMoving", value: false);
				StartText(new string[7]
				{
					"* 我滴妈呀好酷的树枝",
					"* 去你的铅笔。",
					"* Susie equipped the\n  Heavy Branch.",
					Items.ItemDrop(6),
					"* Susie，^05 你...^10真的\n  对那根树枝很感兴趣。",
					"* 因为...^10你懂吗...^10\n  它不是根铅笔。",
					"* 好，^05当然，^05Susie。"
				}, new string[7] { "snd_txtsus", "snd_txtsus", "snd_text", "snd_text", "snd_txtnoe", "snd_txtsus", "snd_txtnoe" }, new int[7], new string[7] { "su_excited", "su_smile", "", "", "no_confused", "su_smirk_sweat", "no_playful" }, 0);
				state = 1;
				frames = 0;
				susieGrabbedStick = false;
			}
		}
		if (state == 1)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 3 && !susieGrabbedStick)
				{
					susieGrabbedStick = true;
					gm.ForceWeapon(1, 15);
					PlaySFX("sounds/snd_item");
				}
				if (txt.GetCurrentStringNum() == 5)
				{
					noelle.DisableAnimator();
					noelle.SetSprite("spr_no_blush");
				}
				if (txt.GetCurrentStringNum() == 6)
				{
					susie.DisableAnimator();
					susie.SetSprite("spr_su_embarrassed_0");
				}
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					susie.SetSprite("spr_su_right_unhappy_0");
					gm.PlayMusic("music/mus_snowwalk");
					sans.SetFloat("speed", 0.5f);
					sans.Play("WalkLeft");
					sans.GetComponent<SpriteRenderer>().color = Color.black;
				}
				sans.transform.position = Vector3.Lerp(new Vector3(25f, -2.52f), new Vector3(20f, -2.52f), (float)frames / 135f);
				if (frames == 60)
				{
					noelle.SetSprite("spr_no_right_unhappy_0");
				}
				if (frames == 135)
				{
					sans.SetFloat("speed", 0f);
					susie.SetSprite("spr_su_threaten_stick");
					gm.StopMusic();
					PlaySFX("sounds/snd_weaponpull");
				}
				if (frames > 135 && frames < 140)
				{
					susie.transform.position += new Vector3(1f / 12f, 0f);
				}
				if (frames == 150)
				{
					StartText(new string[40]
					{
						"* 再向前走一步你可就要\n  掉脑袋了。", "*\t天哪，^05抱歉，^05不是故意吓\n\t你们的。", "* ...好，^05是这家伙。", "*\t是啊，^05树林里是挺暗的。", "*\t明人不说暗话，^05你们几个\n\t干啥呢？", "* 你不是那个便利店老板吗？", "*\t...我什么时候改开便利店了。", "*\t我是sans。^10\n*\t骷髅sans。", "*\t你不是镇上那个蹄子\n\t女孩吗？", "*\t你在这干啥呢？",
						"* 你什么意思？", "* 你是来自我们那个世界\n  的还是怎么着？", "*\t...", "*\t那东西告诉了我我想\n\t知道的一切。", "* 你到底特么什么意思？", "*\t我的意思是，^05看到镇上的\n\t人与人类交往...", "*\t然后那人还把我忘了...", "*\t不管怎么说都很奇怪。", "* 等一下，^05你说的不是\n  我想你会说的话...？", "*\t呃，^05还是先别管了。",
						"*\t你现在想回家，^05对吧？\n", "* 对，我们要去热域找一个\n  什么玩意科学员。", "*\t热域的科学员？", "*\t你要是那么说的话\n\t应该是指alphys。", "*\t她或许能帮上忙。", "* （他特么跟我说的是\n  一个ALPHYS吗？？？？）", "* 我们该怎么去那里？", "*\t你得先穿过森林。", "*\t然后穿过湿地，\n\t才能抵达实验室。", "*\t只有在那你才能见到\n\talphys。",
						"* 听着不咋难。", "*\t别急啊，^05孩子。", "* 你得担心一下我的兄弟。", "* 他很危险吗？", "*\t不，^05但是他正在尝试\n\t抓捕人类。", "*\t他目前正在设置他的谜题。", "*\t在路上你可能会看见他。", "*\t如果你遇到他，\n\t^10就跟他玩玩吧。", "* 让我捋捋...", "*\t好了，^05我们前面见。"
					}, new string[40]
					{
						"snd_txtsus", "snd_txtsans", "snd_txtsus", "snd_txtsans", "snd_txtsans", "snd_txtnoe", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans",
						"snd_txtnoe", "snd_txtsus", "snd_txtsans", "snd_txtsans", "snd_txtsus", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtnoe", "snd_txtsans",
						"snd_txtsans", "snd_txtsus", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsus", "snd_txtnoe", "snd_txtsans", "snd_txtsans", "snd_txtsans",
						"snd_txtsus", "snd_txtsans", "snd_txtsans", "snd_txtnoe", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsus", "snd_txtsans"
					}, new int[40], new string[40]
					{
						"su_teeth", "sans_neutral", "su_annoyed", "sans_side", "sans_wink", "no_curious", "sans_closed", "sans_wink", "sans_side", "sans_neutral",
						"no_confused", "su_smirk_sweat", "sans_closed", "sans_closed", "su_inquisitive", "sans_rolleye", "sans_neutral", "sans_closed", "no_shocked", "sans_side",
						"sans_neutral", "su_annoyed", "sans_closed", "sans_neutral", "sans_side", "su_wtf", "no_curious", "sans_side", "sans_neutral", "sans_neutral",
						"su_smirk", "sans_neutral", "sans_wink", "no_confused", "sans_side", "sans_rolleye", "sans_neutral", "sans_wink", "su_inquisitive", "sans_wink"
					}, 0);
					state = 2;
					frames = 0;
					susieGrabbedStick = false;
				}
			}
		}
		if (state == 2)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 2)
				{
					sans.Play("WalkLeft", 0, 0f);
					sans.SetFloat("speed", 0f);
					sans.GetComponent<SpriteRenderer>().color = Color.white;
				}
				if (txt.GetCurrentStringNum() == 3 && !susieGrabbedStick)
				{
					susieGrabbedStick = true;
					susie.SetSprite("spr_su_right_unhappy_0");
					PlaySFX("sounds/snd_smallswing");
					gm.PlayMusic("music/mus_muscle");
				}
				if (txt.GetCurrentStringNum() == 13)
				{
					sans.Play("WalkUp");
				}
				if (txt.GetCurrentStringNum() == 16)
				{
					sans.Play("WalkLeft");
				}
				if (txt.GetCurrentStringNum() == 31)
				{
					susie.EnableAnimator();
				}
			}
			else
			{
				frames++;
				if (frames == 1)
				{
					gm.StopMusic(30f);
					sans.SetFloat("speed", 1f);
					sans.Play("WalkRight", 0, 0f);
				}
				sans.transform.position = Vector3.Lerp(new Vector3(20f, -2.52f), new Vector3(25f, -2.52f), (float)frames / 40f);
				cam.transform.position = Vector3.Lerp(new Vector3(17f, 0f), cam.GetClampedPos(), (float)(frames - 20) / 30f);
				if (frames == 50)
				{
					susie.ChangeDirection(Vector2.left);
					state = 3;
					StartText(new string[8] { "* 真是蠢到不行了。", "* ALPHYS是皇家科学员？？？", "* 这个世界...^10会不会也有\n  另外一个我...？", "* 可能有吧？", "* 那是不是...^10也存在一个...", "* ...", "* ...还是别了。^10\n* 走吧。", "* ...?" }, new string[8] { "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus" }, new int[8], new string[8] { "su_annoyed", "su_pissed", "no_confused", "su_inquisitive", "no_sad", "no_depressed", "no_happy", "su_neutral" }, 0);
				}
			}
		}
		if (state != 3)
		{
			return;
		}
		if (!txt)
		{
			cam.SetFollowPlayer(follow: true);
			susie.SetSelfAnimControl(setAnimControl: true);
			noelle.SetSelfAnimControl(setAnimControl: true);
			kris.ChangeDirection(Vector2.down);
			gm.PlayMusic("music/mus_snowy");
			Object.Destroy(sans.gameObject);
			Object.Instantiate(Resources.Load<GameObject>("overworld/npcs/StalkerFlowey"), new Vector3(3f, -2.69f), Quaternion.identity);
			EndCutscene();
		}
		else
		{
			if (txt.GetCurrentStringNum() == 5)
			{
				noelle.EnableAnimator();
				noelle.ChangeDirection(Vector2.up);
			}
			if (txt.GetCurrentStringNum() == 7)
			{
				noelle.ChangeDirection(Vector2.right);
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetFlag(60, 1);
		StartText(new string[1] { "* 大伙先等下" }, new string[1] { "snd_txtsus" }, new int[1], new string[1] { "su_surprised" }, 0);
		kris.ChangeDirection(Vector2.right);
		susie.ChangeDirection(Vector2.right);
		noelle.ChangeDirection(Vector2.right);
		susie.SetSelfAnimControl(setAnimControl: false);
		susie.GetComponent<Animator>().SetBool("isMoving", value: false);
		noelle.SetSelfAnimControl(setAnimControl: false);
		noelle.GetComponent<Animator>().SetBool("isMoving", value: false);
		sans = GameObject.Find("Sans").GetComponent<Animator>();
	}
}

