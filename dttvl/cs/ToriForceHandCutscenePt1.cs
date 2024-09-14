using UnityEngine;

public class ToriForceHandCutscenePt1 : CutsceneBase
{
	private bool sound;

	private bool horizontal = true;

	private bool movingUp;

	private int curXTarget;

	private float[] xTargets = new float[4] { 30.35f, 32.78f, 37.06f, 44.28f };

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if (state == 0)
		{
			if ((bool)txt)
			{
				if (txt.GetCurrentStringNum() == 4)
				{
					susie.SetSelfAnimControl(setAnimControl: false);
					gm.StopMusic();
					susie.ChangeDirection(Vector2.up);
				}
				if (txt.GetCurrentStringNum() == 7 && !sound)
				{
					susie.DisableAnimator();
					susie.SetSprite("spr_su_wtf");
					GameObject.Find("Toriel").GetComponent<Animator>().enabled = false;
					GameObject.Find("Toriel").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/spr_toriel_right_unhappy_0");
					PlaySFX("sounds/snd_sussurprise");
					sound = true;
				}
				if (txt.GetCurrentStringNum() == 9)
				{
					susie.SetSprite("spr_su_throw_ready");
				}
			}
			else
			{
				state = 1;
			}
		}
		if (state != 1)
		{
			return;
		}
		frames++;
		if (frames == 1)
		{
			kris.SetCollision(onoff: true);
			GameObject.Find("Toriel").GetComponent<SpriteRenderer>().enabled = false;
			kris.SetSelfAnimControl(setAnimControl: false);
			kris.GetComponent<Animator>().Play("ToriRight");
			susie.SetSprite("spr_su_surprise_right");
		}
		if (horizontal)
		{
			kris.transform.position = Vector3.MoveTowards(kris.transform.position, new Vector3(xTargets[curXTarget], kris.transform.position.y), 0.125f);
			if (kris.transform.position.x == xTargets[curXTarget] && curXTarget < 3)
			{
				horizontal = false;
				movingUp = !movingUp;
				if (movingUp)
				{
					kris.GetComponent<Animator>().Play("ToriUp");
				}
				else
				{
					kris.GetComponent<Animator>().Play("ToriDown");
				}
			}
		}
		else
		{
			float num = (movingUp ? 0.186f : (-1.48f));
			kris.transform.position = Vector3.MoveTowards(kris.transform.position, new Vector3(kris.transform.position.x, num), 0.125f);
			if (kris.transform.position.y == num)
			{
				kris.GetComponent<Animator>().Play("ToriRight");
				horizontal = true;
				curXTarget++;
			}
		}
		if (frames == 20)
		{
			susie.SetSprite("spr_su_wtf");
			StartText(new string[1] { "* 你要上哪去？！？！？？！" }, new string[1] { "snd_txtsus" }, new int[18], new string[1] { "su_wtf" });
		}
	}

	public override void StartCutscene(params object[] par)
	{
		GameObject.Find("Toriel").GetComponent<SpriteRenderer>().flipX = true;
		gm.SetCheckpoint(12);
		base.StartCutscene(par);
		StartText(new string[12]
		{
			"* 这就是谜题了，^05\n  但是...", "* 但是怎么着...？", "* 这个谜题好像\n  对这个小孩来说\n  有点太危险了。", "* ...", "* 诶我", "* 操", "* 了！！！！！", "* 你的分身是特么有什么\n  毛病吗？？？？？", "* 还有，^05你对我是有什么\n  意见吗？！？？！", "* 我怎么你了？？？？？",
			"* ...", "* 我的孩子，^15牵着我的手，^15\n  来吧？"
		}, new string[12]
		{
			"snd_txttor", "snd_txtsus", "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txtsus",
			"snd_txttor", "snd_txttor"
		}, new int[18], new string[12]
		{
			"tori_worry", "su_inquisitive", "tori_worry", "su_disappointed", "su_pissed", "su_angry", "su_wtf", "su_pissed", "su_pissed", "su_angry",
			"tori_weird", "tori_weird"
		});
	}
}

