using System.Collections.Generic;
using UnityEngine;

public class ElectricMazeHandler : MonoBehaviour
{
	private OverworldPlayer kris;

	private OverworldPartyMember susie;

	private OverworldPartyMember noelle;

	private Vector3 collisionPos;

	private List<Vector3> prevPos;

	private bool hitWall;

	private int frames;

	private int iFrames;

	private bool oblit;

	private bool leave;

	private bool lookAtKris;

	private bool altDialogue;

	private bool niceNoelleVer;

	private void Awake()
	{
		if ((int)Util.GameManager().GetFlag(189) == 1)
		{
			Object.Destroy(base.gameObject);
			return;
		}
		kris = Object.FindObjectOfType<OverworldPlayer>();
		susie = GameObject.Find("Susie").GetComponent<OverworldPartyMember>();
		noelle = GameObject.Find("Noelle").GetComponent<OverworldPartyMember>();
		prevPos = new List<Vector3> { kris.transform.position };
		if (!Util.GameManager().SusieInParty())
		{
			oblit = true;
			leave = true;
			susie.transform.position = new Vector3(-5.4f, 0.84f);
			susie.GetComponent<Animator>().enabled = false;
			susie.SetSprite("spr_su_crossed_down");
			noelle.transform.position = new Vector3(-4.25f, 0.84f);
			noelle.GetComponent<Animator>().enabled = false;
			noelle.SetSprite("spr_no_sit_depressed");
			base.transform.Find("SusieTalk").transform.position = new Vector3(-5.4f, 0.3f);
			base.transform.Find("NoelleTalk").transform.position = new Vector3(-4.25f, 0.3f);
		}
		else
		{
			oblit = (int)Util.GameManager().GetFlag(172) == 1;
			niceNoelleVer = oblit && Util.GameManager().GetFlagInt(12) == 0 && Util.GameManager().GetFlagInt(184) == 1;
		}
		GameObject.Find("Papyrus").GetComponent<Animator>().SetFloat("dirY", 1f);
	}

	private void Update()
	{
		if (iFrames > 0)
		{
			iFrames--;
		}
		if (hitWall)
		{
			frames++;
			if (frames >= 25)
			{
				Vector3 vector = prevPos[0];
				kris.transform.position = vector;
				kris.SetCollision(onoff: true);
				kris.SetMovement(newMove: true);
				GetComponent<AudioSource>().Stop();
				Util.GameManager().PlayGlobalSFX("sounds/snd_hurt");
				Object.FindObjectOfType<CameraController>().StartHitShake();
				int num = Util.GameManager().GetHP(0) - Util.GameManager().HandleDamageCalculations(7, 1f, applyDamageImmediately: false)[0];
				Util.GameManager().Damage(0, num);
				Object.Instantiate(Resources.Load<GameObject>("battle/dr/DamageNumber"), new Vector3(500f, 0f), Quaternion.identity).GetComponent<DamageNumber>().StartNumber(num, Color.white, kris.transform.position);
				Object.FindObjectOfType<ActionPartyPanels>().UpdateHP(Util.GameManager().GetHPArray());
				Object.FindObjectOfType<ActionPartyPanels>().SetActivated(activated: true);
				Object.FindObjectOfType<ActionPartyPanels>().Raise();
				hitWall = false;
				iFrames = 10;
				prevPos.Clear();
				prevPos.Add(vector);
			}
			else
			{
				kris.transform.position = collisionPos + new Vector3(Random.Range(-3, 4), Random.Range(-3, 4)) / 48f;
			}
		}
		else if ((bool)kris && kris.ProperlyMoved())
		{
			prevPos.Add(kris.transform.position);
			if (prevPos.Count >= 5)
			{
				prevPos.RemoveAt(0);
			}
		}
	}

	private void LateUpdate()
	{
		if (!lookAtKris)
		{
			return;
		}
		susie.ChangeDirection(kris.transform.position - susie.transform.position);
		noelle.ChangeDirection(kris.transform.position - noelle.transform.position);
		if (kris.transform.position.x > 0.25f && !altDialogue)
		{
			altDialogue = true;
			GameObject.Find("SusieTalk").GetComponent<InteractTextBox>().ModifyContents(new string[2] { "* ...^05你特么回来干什么？？？", "* 你都快到了！！！" }, new string[2] { "snd_txtsus", "snd_txtsus" }, new int[1], new string[2] { "su_angry", "su_wtf" });
			if (!oblit)
			{
				GameObject.Find("NoelleTalk").GetComponent<InteractTextBox>().ModifyContents(new string[2] { "* 你走的是正确的，Kris！", "* 只是...^05做你以前做过的把此事完结了。" }, new string[1] { "snd_txtnoe" }, new int[1], new string[2] { "no_happy", "no_playful" });
			}
			else if (niceNoelleVer)
			{
				GameObject.Find("NoelleTalk").GetComponent<InteractTextBox>().ModifyContents(new string[1] { "* Kris，^05求求你完成这个谜题吧..." }, new string[1] { "snd_txtnoe" }, new int[1], new string[1] { "no_depressed_side" });
			}
			else
			{
				GameObject.Find("NoelleTalk").GetComponent<InteractTextBox>().ModifyContents(new string[2] { "* 我的老天，^05你为什么还在\n  浪费时间，^05Kris？？？", "* ..." }, new string[2] { "snd_txtnoe", "snd_txtsus" }, new int[1], new string[2] { "no_angry", "su_concerned" });
			}
		}
	}

	public void WallCollision()
	{
		if (!hitWall && iFrames == 0)
		{
			GetComponent<AudioSource>().Play();
			kris.SetMovement(newMove: false);
			kris.SetCollision(onoff: false);
			hitWall = true;
			collisionPos = kris.transform.position;
			frames = 0;
		}
	}

	public void StartLook()
	{
		lookAtKris = true;
	}

	public void StopLook()
	{
		lookAtKris = false;
	}

	public bool IsLeave()
	{
		return leave;
	}
}

