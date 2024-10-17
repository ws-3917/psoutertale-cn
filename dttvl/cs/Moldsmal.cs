using UnityEngine;

public class Moldsmal : EnemyBase
{
	private bool susieBiteAttempt;

	private bool down = true;

	private int bounceFrames;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Moldsmal";
		fileName = "moldsmal";
		checkDesc = "^10* 典型印象：身段妖娆 \n  气质好，就是没大脑...";
		maxHp = 100;
		hp = maxHp;
		hpPos = new Vector2(2f, 122f);
		hpWidth = 101;
		atk = 6;
		def = 0;
		flavorTxt = new string[4] { "* Moldsmal静静的冒泡。", "* Moldsmal若有所思地等待着。", "* Moldsmal正在反思。", "* 青柠明胶的香气飘散而来。" };
		dyingTxt = new string[1] { "* Moldsmal开始腐烂。" };
		satisfyTxt = flavorTxt;
		satisfied = 100;
		chatter = new string[4] { "Burble \nburb...", "Squorch\n...", "*Slime \nsounds*", "*Sexy \nwiggle*" };
		actNames = new string[2] { "Imitate", "Flirt" };
		defaultChatSize = "RightSmall";
		exp = 4;
		gold = 0;
		attacks = new int[1] { 10 };
	}

	protected override void Update()
	{
		base.Update();
		if (gotHit)
		{
			return;
		}
		if (down)
		{
			bounceFrames++;
			if (bounceFrames == 23)
			{
				down = false;
			}
		}
		else
		{
			bounceFrames--;
			if (bounceFrames == 0)
			{
				down = true;
			}
		}
		GetPart("body").transform.localScale = Vector3.Lerp(new Vector3(1f, 1.15f), new Vector3(1f, 0.85f), (float)bounceFrames / 23f);
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
			gold = 3;
		}
	}

	public override void Chat(string[] text, string type, string sound, Vector2 pos, bool canSkip, int speed)
	{
		speed = 1;
		base.Chat(text, type, sound, pos, canSkip, speed);
		chatbox.gameObject.GetComponent<SwirlingText>().StartSwirl("speechbubble");
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "Imitate")
		{
			return new string[1] { "* 你和Moldsmal一动不动地躺在一起。^05\n* 你感觉自己对这个世界有了一点儿了解。" };
		}
		if (GetActNames()[i] == "Flirt")
		{
			if (susieBiteAttempt)
			{
				gold = 5;
				return new string[2] { "* 你扭动臀部。^05\n* Moldsmal也亲切地扭动着身子！", "su_inquisitive`snd_txtsus`* 你特么干啥呢？" };
			}
			gold = 1;
			return new string[1] { "* 你扭动臀部。^05\n* Moldsmal也扭动着身子。^05\n* 多么有意义的社交啊！" };
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
			if (!susieBiteAttempt)
			{
				susieBiteAttempt = true;
				gold = 3;
				return new string[2] { "* Susie试图咬一口Moldsmal。^05\n* Moldsmal变得亲热起来！", "su_wtf`snd_txtsus`* 嘿，离我远点！" };
			}
			return new string[1] { "* Moldsmal仍然很亲热。\n^05* 而且还无法食用。" };
		}
		return base.PerformAssistAct(i);
	}
}

