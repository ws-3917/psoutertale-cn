using System;
using UnityEngine;
using UnityEngine.Tilemaps;

public class SansPrefightCutscene : CutsceneBase
{
	private Animator sans;

	private Transform greyDoor;

	private int krisPrejumpFrames;

	private bool fastVersion;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			bool num = MoveTo(kris, new Vector3(-1.6f, 4.13f), 4f);
			bool flag = MoveTo(susie, new Vector3(0f, 3.76f), 4f);
			bool flag2 = MoveTo(noelle, new Vector3(1.6f, 4.27f), 4f);
			MoveTo(cam, new Vector3(0f, 6.29f, -10f), 4f);
			if (!num)
			{
				SetMoveAnim(kris, isMoving: false);
			}
			if (!flag)
			{
				SetMoveAnim(susie, isMoving: false);
			}
			if (!flag2)
			{
				SetMoveAnim(noelle, isMoving: false);
			}
			if (num || flag || flag2)
			{
				return;
			}
			if (fastVersion)
			{
				state = 1;
				return;
			}
			frames++;
			if (frames == 40)
			{
				GameObject.Find("Sign").GetComponent<SpriteRenderer>().sortingOrder = -101;
				StartText(new string[10] { "* 哈。", "* 我没想到会在这找到这玩意。", "* 还挺...^10方便？", "* ...", "* 我们...^05该跳进去了。", "* 但如果我们到了\n  某个更疯狂的地方\n  怎么办？", "* 我的意思是，^05\n  不然我们可就走不掉了。", "* 除非你能从悬崖上爬上去。", "* 我想我没得选了。", "* 走吧。" }, new string[10] { "snd_txtsus", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtnoe", "snd_txtnoe", "snd_txtsus", "snd_txtsus" }, new int[1], new string[10] { "su_side", "su_side", "no_curious", "no_thinking", "no_weird", "su_annoyed", "no_happy", "no_tease_finger", "su_side", "su_annoyed" });
				state = 1;
				frames = 0;
			}
		}
		else if (state == 1)
		{
			if ((bool)txt)
			{
				if (AtLine(6))
				{
					ChangeDirection(susie, Vector2.right);
					ChangeDirection(noelle, Vector2.left);
				}
				else if (AtLine(10))
				{
					ChangeDirection(susie, Vector2.up);
					ChangeDirection(noelle, Vector2.up);
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				SetMoveAnim(kris, isMoving: true);
				SetMoveAnim(susie, isMoving: true);
				SetMoveAnim(noelle, isMoving: true);
				PlayAnimation(sans, "AttackRight");
				sans.GetComponent<AudioSource>().volume = 0f;
				sans.GetComponent<AudioSource>().Play();
			}
			if (frames >= 20 && frames <= 30)
			{
				sans.transform.position = new Vector3(Mathf.Lerp(-7.13f, -2.52f, (float)(frames - 20) / 10f), 5.27f);
				sans.GetComponent<AudioSource>().volume = (float)(frames - 20) / 10f;
			}
			if (frames < 30)
			{
				kris.transform.position += new Vector3(0f, 1f / 24f);
				susie.transform.position += new Vector3(0f, 1f / 24f);
				noelle.transform.position += new Vector3(0f, 1f / 24f);
			}
			if (frames >= 30 && frames < 65)
			{
				if (frames == 30)
				{
					gm.PauseMusic();
					GameObject.Find("White").GetComponent<SpriteRenderer>().enabled = true;
					PlaySFX("sounds/snd_grab");
					Util.GameManager().PlayGlobalSFX("sounds/snd_damage");
					sans.GetComponent<AudioSource>().Stop();
					UnityEngine.Object.Instantiate(Resources.Load<GameObject>("vfx/SOULRemoveEffect"), kris.transform.position, Quaternion.identity);
					susie.GetComponent<SpriteRenderer>().enabled = false;
					noelle.GetComponent<SpriteRenderer>().enabled = false;
					sans.GetComponent<SpriteRenderer>().enabled = false;
					greyDoor.position = new Vector3(10f, greyDoor.position.y);
					TilemapRenderer[] array = UnityEngine.Object.FindObjectsOfType<TilemapRenderer>();
					for (int i = 0; i < array.Length; i++)
					{
						array[i].enabled = false;
					}
					SetSprite(kris, "spr_kr_grabbed_sans_0", flipX: true);
					cam.SetFollowPlayer(follow: false);
				}
				if (frames <= 40)
				{
					float t = Mathf.Sin((float)(frames - 30) / 10f * (float)Math.PI * 0.5f);
					kris.transform.position = new Vector3(Mathf.Lerp(-1.6f, -1.1f, t), 5.39f);
				}
				else
				{
					if (frames == 41 || frames == 51 || frames == 61)
					{
						Util.GameManager().PlayGlobalSFX("sounds/snd_hurt");
					}
					float num2 = 0f;
					if (frames >= 41 && frames <= 44)
					{
						int num3 = ((frames % 2 == 0) ? 1 : (-1));
						num2 = (float)(44 - frames) * (float)num3 / 24f;
					}
					if (frames >= 51 && frames <= 54)
					{
						int num4 = ((frames % 2 == 0) ? 1 : (-1));
						num2 = (float)(54 - frames) * (float)num4 / 24f;
					}
					if (frames >= 61 && frames <= 64)
					{
						int num5 = ((frames % 2 == 0) ? 1 : (-1));
						num2 = (float)(64 - frames) * (float)num5 / 24f;
					}
					kris.transform.position = new Vector3(-1.1f + num2, kris.transform.position.y);
				}
			}
			if (frames < 70)
			{
				return;
			}
			if (frames == 70)
			{
				gm.ResumeMusic();
				susie.GetComponent<SpriteRenderer>().enabled = true;
				noelle.GetComponent<SpriteRenderer>().enabled = true;
				sans.GetComponent<SpriteRenderer>().enabled = true;
				greyDoor.position = new Vector3(1f / 24f, greyDoor.position.y);
				TilemapRenderer[] array = UnityEngine.Object.FindObjectsOfType<TilemapRenderer>();
				for (int i = 0; i < array.Length; i++)
				{
					array[i].enabled = true;
				}
				GameObject.Find("White").GetComponent<SpriteRenderer>().enabled = false;
				SetSprite(noelle, "spr_no_surprise_left");
				PlayAnimation(susie, "AttackStick");
				susie.GetComponent<SpriteRenderer>().flipX = true;
				PlaySFX("sounds/snd_attack");
				susie.transform.position = new Vector3(0f, 5.52f);
				SetSprite(sans, "overworld/npcs/underfell/spr_ufsans_reach_right");
				SetSprite(kris, "spr_kr_ko");
				gm.PlayGlobalSFX("sounds/snd_damage");
			}
			float num6 = (float)(frames - 70) / 30f;
			if (num6 > 1f)
			{
				num6 = 1f;
			}
			num6 = Mathf.Sin(num6 * (float)Math.PI * 0.5f);
			kris.transform.position = Vector3.Lerp(new Vector3(-1.1f, 5.39f), new Vector3(-2.4f, 3.43f), num6);
			if (frames < 85)
			{
				float num7 = (float)(frames - 70) / 15f;
				num7 = Mathf.Sin(num7 * (float)Math.PI * 0.5f);
				sans.transform.position = new Vector3(Mathf.Lerp(-2.52f, -3.53f, num7), 5.27f);
			}
			else if (frames >= 85 && frames <= 95)
			{
				if (frames == 85)
				{
					SetSprite(sans, "overworld/npcs/underfell/spr_ufsans_punch_0");
					ChangeDirection(sans, Vector2.right);
					PlaySFX("sounds/snd_criticalswing");
				}
				float num8 = (float)(frames - 85) / 10f;
				num8 = num8 * num8 * num8;
				sans.transform.position = new Vector3(Mathf.Lerp(-3.53f, -0.7f, num8), 5.27f);
			}
			if (frames >= 95 && frames <= 120)
			{
				if (frames == 95)
				{
					SetSprite(sans, "overworld/npcs/underfell/spr_ufsans_punch_1");
					SetSprite(susie, "spr_su_surprise_right", flipX: true);
					gm.PlayGlobalSFX("sounds/snd_damage");
					PlaySFX("sounds/snd_hurt");
				}
				float num9 = (float)(frames - 95) / 25f;
				num9 = Mathf.Sin(num9 * (float)Math.PI * 0.5f);
				susie.transform.position = Vector3.Lerp(new Vector3(0f, 5.52f), new Vector3(2.94f, 5.33f), num9);
				if (frames == 100)
				{
					SetSprite(sans, "overworld/npcs/underfell/spr_ufsans_punch_2");
					SetSprite(susie, "spr_su_kneel", flipX: true);
					SetSprite(noelle, "spr_no_kneel_left");
					PlaySFX("sounds/snd_bump");
				}
				float num10 = (float)(frames - 100) / 20f;
				num10 = Mathf.Sin(num9 * (float)Math.PI * 0.5f);
				noelle.transform.position = Vector3.Lerp(new Vector3(1.6f, 5.52f), new Vector3(3.55f, 6.85f), num10);
			}
			if (frames == (fastVersion ? 120 : 150))
			{
				PlayAnimation(sans, "idle");
				StartText(new string[18]
				{
					"*\t得了吧，^05susie。", "*\t你觉得我注意不到吗？", "* 你...^10你是怎么...", "*\t嘿嘿嘿嘿...", "*\t我可没忘了那从城里来\n\t的可怜孤儿。", "*\t她跟你看着很相像。^05\n*\t连名字都一样。", "*\t我当初看见她的时候，^05\n\t他还敢瞪我...", "*\t呃，^05这么说吧，\n\t她现在化为风中飘雪了。", "* ...!", "* 你...^10\n* 你杀了她！？",
					"*\t你可算听懂了。", "*\t呵呵呵呵...", "*\t可惜，^05我不想亲眼目睹\n\t她的死亡。", "*\t毕竟，^05我可不想要那么多\n\t目击证人。", "*\t但是你们仨嘛...", "*\t可得老有意思了吧。", "*\t呵呵呵呵呵呵呵...", "*\t该杀了你们了。"
				}, new string[16]
				{
					"snd_txtsans", "snd_txtsans", "snd_txtsus", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsus", "snd_txtsus",
					"snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans"
				}, new int[1], new string[18]
				{
					"ufsans_side", "ufsans_closed", "su_depressed", "ufsans_closed", "ufsans_neutral", "ufsans_neutral", "ufsans_closed", "ufsans_empty", "su_worried", "su_determined",
					"ufsans_side", "ufsans_closed", "ufsans_side", "ufsans_side", "ufsans_empty", "ufsans_grin", "ufsans_sadistic", "ufsans_sadistic"
				});
				state = 2;
				frames = 0;
			}
		}
		else if (state == 2)
		{
			bool num11 = (!txt || txt.GetCurrentStringNum() > (fastVersion ? 5 : 9)) && frames < 100;
			if ((bool)txt && txt.GetCurrentStringNum() == (fastVersion ? 9 : 16))
			{
				krisPrejumpFrames++;
			}
			bool flag3 = !txt || txt.GetCurrentStringNum() > (fastVersion ? 9 : 16) || krisPrejumpFrames > 60;
			if (flag3 && frames < 101)
			{
				frames = 100;
			}
			if ((bool)txt)
			{
				if (AtLine(8))
				{
					gm.StopMusic();
				}
				else if (AtLine(9))
				{
					gm.PlayMusic("music/mus_prebattle1", 0.24f);
				}
			}
			if (!(num11 || flag3))
			{
				return;
			}
			frames++;
			if (frames < 45)
			{
				if (frames == 1)
				{
					SetSprite(kris, "spr_kr_up_soul_yeet_5", flipX: true);
				}
				float num12 = 0f;
				if (frames <= 3)
				{
					int num13 = ((frames % 2 == 0) ? 1 : (-1));
					num12 = (float)(3 - frames) * (float)num13 / 24f;
				}
				kris.transform.position = new Vector3(-2.4f + num12, kris.transform.position.y);
			}
			else if (frames < 101)
			{
				if (frames == 45)
				{
					kris.GetComponent<SpriteRenderer>().flipX = false;
					PlayAnimation(kris, "PullKnifeSans");
				}
				float num14 = 0f;
				if (frames <= 48)
				{
					int num15 = ((frames % 2 == 0) ? 1 : (-1));
					num14 = (float)(48 - frames) * (float)num15 / 24f;
				}
				kris.transform.position = new Vector3(-2.4f + num14, kris.transform.position.y);
			}
			else if (frames == 101)
			{
				SetSprite(kris, "spr_kr_jump_at_sans_0");
			}
			else if (frames >= 105 && frames <= 120)
			{
				if (frames == 105)
				{
					PlaySFX("sounds/snd_jump");
					SetSprite(kris, "spr_kr_jump_at_sans_1");
					sans.GetComponent<SpriteRenderer>().sortingOrder = -50;
				}
				kris.transform.position = Vector3.Lerp(new Vector3(-2.4f, 3.43f), new Vector3(-1.282f, 5.416f), (float)(frames - 105) / 15f) + new Vector3(0f, Mathf.Sin((float)((frames - 105) * 12) * ((float)Math.PI / 180f)));
				if (frames == 120)
				{
					SetSprite(susie, "spr_su_surprise_right", flipX: true);
					SetSprite(noelle, "spr_no_surprise_left");
					SetSprite(kris, "spr_kr_stab_sans");
					sans.GetComponent<SpriteRenderer>().enabled = false;
					gm.StopMusic();
					if ((bool)txt)
					{
						UnityEngine.Object.Destroy(txt.gameObject);
					}
				}
			}
			else if (frames > 120 && frames <= 160)
			{
				float num16 = 0f;
				if (frames >= 121 && frames <= 124)
				{
					int num17 = ((frames % 2 == 0) ? 1 : (-1));
					num16 = (float)(124 - frames) * (float)num17 / 24f;
				}
				else if (frames >= 131 && frames <= 134)
				{
					int num18 = ((frames % 2 == 0) ? 1 : (-1));
					num16 = (float)(134 - frames) * (float)num18 / 24f;
				}
				else if (frames >= 141 && frames <= 144)
				{
					int num19 = ((frames % 2 == 0) ? 1 : (-1));
					num16 = (float)(144 - frames) * (float)num19 / 24f;
				}
				else if (frames >= 151 && frames <= 154)
				{
					int num20 = ((frames % 2 == 0) ? 1 : (-1));
					num16 = (float)(144 - frames) * (float)num20 / 24f;
				}
				if (frames == 121 || frames == 131 || frames == 141 || frames == 151)
				{
					UnityEngine.Object.Instantiate(Resources.Load<GameObject>("battle/dr/DamageNumber")).GetComponent<DamageNumber>().StartNumber(120, new Color(0.5f, 1f, 1f), sans.transform.position + new Vector3(0f, (float)((frames - 121) / 10 * 10) / 24f), 151 - frames);
					PlaySFX("sounds/snd_damage");
				}
				kris.transform.position = new Vector3(-1.282f + num16, kris.transform.position.y);
			}
			else
			{
				if (frames <= 160)
				{
					return;
				}
				if (frames == 161)
				{
					SetSprite(kris, "spr_kr_sit");
					SetSprite(sans, "overworld/npcs/underfell/spr_ufsans_elbow_kris");
					sans.GetComponent<SpriteRenderer>().enabled = true;
					PlaySFX("sounds/snd_bump");
				}
				float num21 = (float)(frames - 160) / 20f;
				if (num21 > 1f)
				{
					num21 = 1f;
				}
				num21 = Mathf.Sin(num21 * (float)Math.PI * 0.5f);
				kris.transform.position = new Vector3(Mathf.Lerp(-1.282f, -3.33f, num21), kris.transform.position.y);
				if (fastVersion)
				{
					if (frames == 180)
					{
						PlaySFX("sounds/snd_noise");
						PlayAnimation(sans, "Stance");
						StartText(new string[4] { "*\t哇，^05真快啊，^05kris。", "*\t你知道我刚刚在说\n\t什么吗？", "* 闭嘴！！！", "* 下地狱吧！" }, new string[4] { "snd_txtsans", "snd_txtsans", "snd_txtsus", "snd_txtsus" }, new int[1], new string[4] { "ufsans_empty", "ufsans_grin", "su_determined", "su_angry_hero" }, 0);
						state = 3;
						frames = 0;
					}
					return;
				}
				if (frames == 180)
				{
					gm.PlayMusic("music/mus_gallery");
				}
				if (frames == 190)
				{
					PlaySFX("sounds/snd_noise");
					PlayAnimation(sans, "Stance");
					StartText(new string[10] { "* KRIS???", "*\t小-^05小兔崽子...^10\n*\t次次都来烦我...", "* 你个猪狗不如的畜生！！", "* 你杀了孩子然后你特么还\n  有脸笑！？", "*\t哈？^10\n*\t我还不能乐了？", "*\t不然他要干什么？^05\n*\t去找他妈妈哭鼻子吗？", "*\t还有...", "*\t我也该过过瘾了，恁三个。", "* 闭嘴！！！", "* 我不管你要说什么了！" }, new string[10] { "snd_txtsus", "snd_txtsans", "snd_txtsus", "snd_txtsus", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsans", "snd_txtsus", "snd_txtsus" }, new int[1], new string[10] { "su_worried", "ufsans_empty", "su_pissed", "su_panic", "ufsans_neutral", "ufsans_empty", "ufsans_closed", "ufsans_grin", "su_determined", "su_angry_hero" }, 0);
					state = 3;
					frames = 0;
				}
			}
		}
		else if (state == 3)
		{
			if ((bool)txt)
			{
				if (fastVersion)
				{
					if (AtLine(3))
					{
						SetSprite(susie, "spr_su_wtf", flipX: true);
					}
					else if (AtLine(4))
					{
						SetSprite(susie, "spr_su_point_right_unhappy", flipX: true);
					}
				}
				else if (AtLine(3) || AtLine(9))
				{
					SetSprite(susie, "spr_su_wtf", flipX: true);
				}
				else if (AtLine(4) || AtLine(10))
				{
					SetSprite(susie, "spr_su_point_right_unhappy", flipX: true);
				}
				return;
			}
			frames++;
			if (frames == 1)
			{
				PlaySFX("sounds/snd_weaponpull");
				PlayAnimation(susie, "AttackStick");
				string text = "Attack";
				switch (gm.GetWeapon(0))
				{
				case 8:
					text += "RingEye";
					break;
				case 13:
					text += "ToyKnife";
					break;
				case 20:
					text += "Pan";
					break;
				case 21:
					text += "Bat";
					break;
				case 31:
					text += "AlBat";
					break;
				case 32:
					text += "Glove";
					break;
				case 34:
					text += "Icicle";
					break;
				case 41:
					text += "Katana";
					break;
				default:
					text += "Pencil";
					break;
				}
				PlayAnimation(kris, text);
				string text2 = "Attack";
				switch (gm.GetWeapon(2))
				{
				case 8:
					text2 += "Ring";
					break;
				case 13:
					text2 += "ToyKnife";
					break;
				case 20:
					text2 += "Pan";
					break;
				case 21:
					text2 += "Bat";
					break;
				case 31:
					text2 += "AlBat";
					break;
				case 32:
					text2 += "Glove";
					break;
				case 34:
					text2 += "Icicle";
					break;
				default:
					text2 += "Pencil";
					break;
				}
				noelle.GetComponent<SpriteRenderer>().flipX = true;
				PlayAnimation(noelle, text2);
			}
			if (fastVersion)
			{
				if (frames == 30)
				{
					kris.InitiateBattle(73);
					state = 5;
				}
			}
			else if (frames == 45)
			{
				StartText(new string[1] { "* 下地狱吧！" }, new string[1] { "snd_txtsus" }, new int[1], new string[1] { "su_teeth_determined" }, 0);
				state = 4;
				frames = 0;
			}
		}
		else if (state == 4 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				PlaySFX("sounds/snd_break2");
				gm.StopMusic();
			}
			if (frames == 30)
			{
				kris.InitiateBattle(73);
				state = 5;
			}
		}
	}

	public void LateUpdate()
	{
		if (state == 3 && kris.GetComponent<SpriteRenderer>().sprite.name.Contains("attack") && !kris.GetComponent<SpriteRenderer>().sprite.name.Contains("ring") && !kris.GetComponent<SpriteRenderer>().sprite.name.Contains("glove"))
		{
			string oldValue = kris.GetComponent<SpriteRenderer>().sprite.name.Substring(kris.GetComponent<SpriteRenderer>().sprite.name.LastIndexOf("_") + 1);
			string spriteName = "player/Kris/battle/normal/" + kris.GetComponent<SpriteRenderer>().sprite.name.Replace(oldValue, "eye");
			SetSprite(kris.transform.GetChild(1), spriteName);
		}
		if (state == 5 && !kris.GetComponent<SpriteRenderer>().enabled)
		{
			UnityEngine.Object.Destroy(kris.transform.GetChild(1).gameObject);
			state = 6;
			EndCutscene(enablePlayerMovement: false);
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		gm.SetCheckpoint();
		RevokePlayerControl();
		PlayAnimation(kris, "walk");
		PlayAnimation(susie, "walk");
		PlayAnimation(noelle, "walk");
		SetMoveAnim(kris, isMoving: true);
		SetMoveAnim(susie, isMoving: true);
		SetMoveAnim(noelle, isMoving: true);
		ChangeDirection(kris, Vector2.up);
		ChangeDirection(susie, Vector2.up);
		ChangeDirection(noelle, Vector2.up);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		sans = GameObject.Find("Sans").GetComponent<Animator>();
		greyDoor = GameObject.Find("GreyDoor").transform;
		fastVersion = gm.GetSessionFlagInt(16) == 1;
	}
}

