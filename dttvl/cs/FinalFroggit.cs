using System;
using UnityEngine;

public class FinalFroggit : EnemyBase
{
	private int bodyFrames;

	private int lastAct = -1;

	private int attackOffset;

	private int attackType;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Final Froggit";
		fileName = "ffroggit";
		checkDesc = "* 他的前途看起来无比明亮。";
		maxHp = 100;
		hp = maxHp;
		hpPos = new Vector2(2f, 122f);
		hpWidth = 101;
		atk = 7;
		def = 6;
		flavorTxt = new string[4] { "* Final Froggit完全知道\n  他为什么在这。", "* Final Froggit不祥的上窜下跳。", "* The battlefield is filled\n  with the smell of\n  mustard seed.", "* 你被Froggit的原始力量\n  吓到了。" };
		dyingTxt = new string[1] { "* Final Froggit站稳了脚跟。" };
		satisfyTxt = new string[1] { "* Final Froggit看起来不想和你战斗。" };
		chatter = new string[4] { "咕呱，\n咕呱。", "吱咕，\n吱咕。", "蹦蹦，\n跳跳。", "Woof." };
		actNames = new string[3] { "鼓励", "威胁", "S!Mystify" };
		hurtSound = "sounds/snd_ehurt1";
		canSpareViaFight = false;
		defaultChatSize = "RightSmall";
		exp = 4;
		gold = 4;
		attacks = new int[1] { 47 };
	}

	protected override void Start()
	{
		base.Start();
		defaultChatPos = new Vector2(Mathf.RoundToInt(GetEnemyObject().transform.position.x * 48f) + 100, 51f);
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		base.Hit(partyMember, rawDmg, playSound);
		if (hp <= 0)
		{
			gold = 2;
		}
	}

	public override string[] PerformAct(int i)
	{
		lastAct = i;
		if (GetActNames()[i] == "查看")
		{
			return new string[1] { "* FINAL FROGGIT - " + (30 + attackOffset) + " ATK " + (18 + def) + " DEF\n" + checkDesc };
		}
		if (GetActNames()[i] == "鼓励")
		{
			attackOffset--;
			return new string[1] { "* 你称赞Final Froggit。\n* 它彻底理解了你的意思。\n* 它的攻击力下降了。" };
		}
		if (GetActNames()[i] == "威胁")
		{
			def -= 2;
			return new string[1] { "* 你威胁Final Froggit。\n* 它彻底理解了你的意思。\n* 它的防御力下降了。" };
		}
		if (GetActNames()[i] == "S!Mystify")
		{
			if (satisfied < 100)
			{
				AddActPoints(100);
				return new string[2] { "* You and Susie did something\n  mysterious.", "* Final Froggit意识到\n  这个世界还有更多他不知道\n  的东西。" };
			}
			return new string[1] { "* You and Susie did something\n  mysterious.\n* But nothing happened." };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		if (spared)
		{
			return base.PerformAssistAct(i);
		}
		if (i == 1)
		{
			tired = true;
			return new string[2] { "* Susie摩拳擦掌。", "* Final Froggit知道你在威胁它。\n* 它变得疲惫了。" };
		}
		return base.PerformAssistAct(i);
	}

	public override string GetChatter()
	{
		attackType = UnityEngine.Random.Range(0, 2);
		if (UnityEngine.Random.Range(0, 2) == 0)
		{
			if (attackType != 0)
			{
				return chatter[0];
			}
			return chatter[2];
		}
		if (UnityEngine.Random.Range(0, 2) != 0)
		{
			return chatter[3];
		}
		return chatter[1];
	}

	public int GetAttackType()
	{
		return attackType;
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		if (lastAct > 0)
		{
			string[] array = new string[3] { "点头，\n点头。", "颤颤，\n抖抖。", "(深思熟虑\n的咕呱叫。)" };
			text = new string[1] { array[lastAct - 1] };
			lastAct = -1;
		}
		base.Chat(text, type, sound, pos, canSkip, 1);
		chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
	}

	public int GetAttackOffset()
	{
		return attackOffset;
	}

	protected override void Update()
	{
		if (!gotHit)
		{
			bodyFrames++;
			if (bodyFrames >= 38)
			{
				bodyFrames = 0;
			}
			float num = 0f - Mathf.Sin((float)bodyFrames * 18.947369f * ((float)Math.PI / 180f));
			float num2 = 0f - Mathf.Sin((float)bodyFrames * 9.473684f * ((float)Math.PI / 180f));
			GetPart("body").transform.localScale = new Vector3(1f, 1f + num * 0.0875f, 1f);
			float x = 0.138f + num2 * 0.148f;
			float y = 1.792f + 0.102f * num;
			GetPart("head").transform.localPosition = new Vector3(x, y);
			GetPart("head").transform.eulerAngles = new Vector3(0f, 0f, -3f * num2);
		}
		base.Update();
	}

	public override bool IsTired()
	{
		if (!tired)
		{
			return (float)hp / (float)maxHp <= 0.2f;
		}
		return true;
	}
}

