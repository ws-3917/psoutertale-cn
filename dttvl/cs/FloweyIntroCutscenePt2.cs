using UnityEngine;

public class FloweyIntroCutscenePt2 : CutsceneBase
{
	private Animator toriel;

	private bool hardmode;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			if (frames < 20)
			{
				frames++;
				if (frames == 20)
				{
					if (hardmode)
					{
						StartText(new string[2] { "* 哈，^05你看见没？", "* 是不是很酷啊？^05对吧？" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_confident", "su_teeth_eyes" }, 1);
					}
					else
					{
						StartText(new string[4] { "* 哈，^10我们让那朵\n  花知道谁才是老大了。", "* 但是，^10有点怪。\n  他想迷惑我们然后偷\n  走我们的... ^10灵魂？", "* 去他的不想那么多了。", "* 还有，^10我还以为魔法\n  只能在暗世界用呢...？" }, new string[4] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[4] { "su_smile", "su_smile_sweat", "su_smile_sweat", "su_inquisitive" }, 1);
					}
					susie.DisableAnimator();
					susie.SetSprite("spr_su_pose");
				}
			}
			else if (!txt)
			{
				frames++;
				int num = frames - 20;
				cam.transform.position = Vector3.Lerp(Vector3.zero, new Vector3(0f, 2.5f), (float)num / 30f);
				if (num == 1)
				{
					toriel.GetComponent<SpriteRenderer>().enabled = true;
					toriel.SetFloat("speed", 1f);
				}
				toriel.transform.position = Vector3.Lerp(new Vector3(0f, 6.71f), new Vector3(0f, 2.75f), (float)num / 30f);
				if (num == 30)
				{
					toriel.Play("WalkDown", 0, 0f);
					toriel.SetFloat("speed", 0f);
					if (hardmode)
					{
						StartText(new string[1] { "* 你们好...？^10\n* 发生什么事了吗？" }, new string[1] { "snd_txttor" }, new int[18], new string[1] { "tori_worry" }, 0);
					}
					else
					{
						StartText(new string[1] { "* 你们好...？^10\n* 发生什么-" }, new string[1] { "snd_txttor" }, new int[18], new string[1] { "tori_worry" }, 0);
					}
					frames = 0;
					state = 1;
				}
			}
			else if (txt.GetCurrentStringNum() == 4 && kris.GetDirection() != Vector2.right)
			{
				kris.ChangeDirection(Vector2.right);
				susie.EnableAnimator();
				susie.ChangeDirection(Vector2.left);
			}
		}
		if (state == 1 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				kris.ChangeDirection(Vector2.up);
				susie.ChangeDirection(Vector2.up);
				susie.DisableAnimator();
				susie.SetSprite("spr_su_surprise_up");
				susie.GetComponent<SpriteRenderer>().flipX = true;
				if (!hardmode)
				{
					toriel.Play("Shocked");
				}
			}
			if (frames <= 3)
			{
				int num2 = ((frames % 2 == 0) ? 1 : (-1));
				int num3 = 3 - frames;
				susie.transform.position = new Vector3(1.52f, 0.08f) + new Vector3((float)(num3 * num2) / 24f, 0f);
			}
			if (!hardmode)
			{
				toriel.transform.position = Vector3.Lerp(new Vector3(0f, 2.75f), new Vector3(0f, 3f), (float)frames / 5f);
			}
			if (frames == 20)
			{
				if (hardmode)
				{
					StartText(new string[15]
					{
						"* 天哪！\n^05* 孩子，^05你还好吗？", "* 我刚才在那边听见了一声\n  巨响，^05接着...", "* ...^05这个怪物没在找你麻烦，^05\n  对吧？", "* 哈-^05哈？！\n^05* 我没有？？？", "* 我怎么就...\n^10* 我刚认识这孩子！", "* ...", "* 你最好别碰那个孩子一根\n  毫毛。", "* 懂吗？", "* 是-^05是，女士...", "* ...",
						"* 哦，^05我还没有自我介绍呢，^05\n  是吧？", "* 我的名字是--", "* 额，^05Toriel没错吧？", "* ...^10对的，^05我叫<color=#0000FFFF>TORIEL</color>，^10\n  <color=#FF0000FF>遗迹</color>的管理人。", "* 现在，^05快跟上来吧，^05\n  我的孩子？"
					}, new string[15]
					{
						"snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor",
						"snd_txttor", "snd_txttor", "snd_txtsus", "snd_txttor", "snd_txttor"
					}, new int[18], new string[15]
					{
						"tori_worry", "tori_worry", "tori_weird", "su_shocked", "su_pissed", "tori_mad", "tori_mad", "tori_mad", "su_wideeye", "tori_annoyed",
						"tori_blush", "tori_neutral", "su_side", "tori_annoyed", "tori_neutral"
					}, 0);
					state = 6;
				}
				else
				{
					StartText(new string[2] { "* 那不是...^10\n  你妈妈吗？？？", "* （她跑这鬼地方\n  干什么来了？？？）" }, new string[4] { "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[4] { "su_surprised", "su_smile_sweat", "su_smile_sweat", "su_inquisitive" }, 0);
					state = 2;
				}
				frames = 0;
			}
		}
		if (state == 2 && !txt)
		{
			if (frames == 31)
			{
				state = 3;
				toriel.SetFloat("speed", 1.5f);
				frames = -1;
			}
			frames++;
			if (frames == 1)
			{
				susie.GetComponent<SpriteRenderer>().flipX = false;
				susie.EnableAnimator();
				toriel.Play("WalkUp");
				susie.SetSelfAnimControl(setAnimControl: false);
			}
			if (frames == 30)
			{
				StartText(new string[3] { "* 我...", "* ...", "* 失礼了。" }, new string[3] { "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], null, 0);
				frames++;
			}
		}
		if (state == 3)
		{
			if ((frames < 30 && (bool)txt) || !txt)
			{
				frames++;
			}
			toriel.transform.position = Vector3.Lerp(new Vector3(0f, 3f), new Vector3(0f, 6.71f), (float)frames / 15f);
			if (frames >= 15 && frames <= 25)
			{
				toriel.GetComponent<SpriteRenderer>().color = Color.Lerp(Color.white, new Color(1f, 1f, 1f, 0f), (float)(frames - 15) / 10f);
			}
			if (frames >= 10 && frames <= 25)
			{
				if (frames == 10)
				{
					susie.GetComponent<Animator>().SetBool("isMoving", value: true);
					susie.GetComponent<Animator>().Play("walk");
					susie.GetComponent<Animator>().SetFloat("speed", 2f);
					StartText(new string[1] { "* 嘿，等下！！！" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_shocked" }, 1);
				}
				susie.transform.position = Vector3.Lerp(new Vector3(1.52f, 0.08f), new Vector3(1.52f, 3f), (float)(frames - 10) / 15f);
				if (frames == 25)
				{
					susie.GetComponent<Animator>().SetBool("isMoving", value: false);
					susie.GetComponent<Animator>().Play("idle");
					susie.GetComponent<Animator>().SetFloat("speed", 1f);
				}
			}
			if (frames == 60)
			{
				if (hardmode)
				{
					StartText(new string[2] { "* Okay,^05 that's really\n  weird.", "* She looks EXACTLY like\n  my friend's mom." }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_neutral", "su_side_sweat" }, 0);
				}
				else
				{
					StartText(new string[2] { "* 到底是特么怎么一回事啊？", "* 我还以为她看见我们\n  会很高兴呢。" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[18], new string[2] { "su_side_sweat", "su_side_sweat" }, 0);
				}
				state = 4;
				frames = 0;
			}
		}
		if (state == 4 && !txt)
		{
			frames++;
			if (frames == 1)
			{
				susie.ChangeDirection(Vector2.down);
				susie.GetComponent<Animator>().SetBool("isMoving", value: true);
				susie.GetComponent<Animator>().Play("walk");
			}
			susie.transform.position = Vector3.Lerp(new Vector3(1.52f, 3f), new Vector3(1.52f, 0.08f), (float)frames / 40f);
			cam.transform.position = Vector3.Lerp(new Vector3(0f, 2.5f), cam.GetClampedPos(), (float)frames / 40f);
			if (frames == 40)
			{
				kris.ChangeDirection(Vector2.right);
				susie.ChangeDirection(Vector2.left);
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
				susie.GetComponent<Animator>().Play("idle");
			}
			if (frames == 50)
			{
				StartText(new string[1] { "* 我们应该试试追上她，\n  ^05是吧。" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_smile" }, 1);
				state = 5;
			}
		}
		if (state == 5 && !txt)
		{
			kris.ChangeDirection(Vector2.down);
			kris.SetSelfAnimControl(setAnimControl: true);
			susie.SetSelfAnimControl(setAnimControl: true);
			cam.SetFollowPlayer(follow: true);
			gm.SetFlag(4, 1);
			EndCutscene();
		}
		if (state == 6)
		{
			if (!txt)
			{
				frames++;
				toriel.Play("WalkUp");
				toriel.SetFloat("speed", 1.5f);
				toriel.transform.position = Vector3.Lerp(new Vector3(0f, 3f), new Vector3(0f, 6.71f), (float)frames / 30f);
				if (frames >= 30 && frames <= 405)
				{
					toriel.GetComponent<SpriteRenderer>().color = Color.Lerp(Color.white, new Color(1f, 1f, 1f, 0f), (float)(frames - 15) / 10f);
				}
				if (frames == 55)
				{
					StartText(new string[3] { "* 好了，^05她特么什么毛病？", "* 我啥也没干呢。", "* 我觉得她对Kris都不会这样。" }, new string[3] { "snd_txtsus", "snd_txtsus", "snd_txtsus" }, new int[18], new string[3] { "su_side", "su_side_sweat", "su_smirk_sweat" }, 0);
					state = 7;
					frames = 0;
				}
			}
			else if (txt.GetCurrentStringNum() == 3)
			{
				susie.GetComponent<SpriteRenderer>().flipX = false;
				susie.EnableAnimator();
			}
		}
		if (state == 7 && !txt)
		{
			frames++;
			cam.transform.position = Vector3.Lerp(new Vector3(0f, 2.5f), cam.GetClampedPos(), (float)frames / 20f);
			if (frames == 20)
			{
				kris.ChangeDirection(Vector2.right);
				susie.ChangeDirection(Vector2.left);
				susie.GetComponent<Animator>().SetBool("isMoving", value: false);
				susie.GetComponent<Animator>().Play("idle");
			}
			if (frames == 20)
			{
				StartText(new string[1] { "* 咱还是走吧。" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_neutral" }, 1);
				state = 5;
			}
		}
	}

	public override void StartCutscene(params object[] par)
	{
		hardmode = (int)gm.GetFlag(108) == 1;
		toriel = GameObject.Find("Toriel").GetComponent<Animator>();
		kris.transform.position = new Vector3(-1.52f, -0.085f);
		kris.GetComponent<Animator>().Play("idle", 0, 0f);
		kris.ChangeDirection(Vector2.up);
		susie.GetComponent<Animator>().Play("idle", 0, 0f);
		susie.ChangeDirection(Vector2.up);
		susie.transform.position = new Vector3(1.52f, 0.08f);
		base.StartCutscene(par);
		cam.SetFollowPlayer(follow: false);
	}
}

