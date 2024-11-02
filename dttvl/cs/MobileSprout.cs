using UnityEngine;

public class MobileSprout : EnemyBase
{
	private int bodyFrames;

	private Sprite[] bodySprites;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Mobile Sprout";
		fileName = "sprout";
		checkDesc = "* A small, wandering plant\n  in dire need of water.";
		maxHp = 220;
		hp = maxHp;
		hpPos = new Vector2(2f, 122f);
		hpWidth = 101;
		atk = 10;
		def = 8;
		flavorTxt = new string[4] { "* Mobile Sprout在战场上闲逛。", "* Mobile Sprout看起来没有\n  显示意识的标志。", "* 闻起来像野草。", "* Mobile Sprout看起来很干燥。" };
		dyingTxt = new string[1] { "* Mobile Sprout在慢下来。" };
		satisfyTxt = new string[1] { "* Mobile Sprout looks hydrated." };
		actNames = new string[2] { "Water", "SN!WaterX" };
		defaultChatSize = "RightSmall";
		exp = 12;
		gold = 6;
		tired = true;
		attacks = new int[1] { 32 };
		bodySprites = new Sprite[2]
		{
			Resources.Load<Sprite>("battle/enemies/Mobile Sprout/spr_b_sprout_0"),
			Resources.Load<Sprite>("battle/enemies/Mobile Sprout/spr_b_sprout_1")
		};
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "Water")
		{
			if (satisfied < 100)
			{
				AddActPoints(50);
			}
			return new string[1] { "* You threw some river water\n  onto Mobile Sprout." };
		}
		if (GetActNames()[i] == "SN!WaterX")
		{
			if (satisfied < 100)
			{
				AddActPoints(100);
			}
			return new string[1] { "* 每个人都给Mobile Sprout\n  浇水。" };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		if (spared)
		{
			return base.PerformAssistAct(i);
		}
		if (satisfied < 100)
		{
			AddActPoints(25);
		}
		switch (i)
		{
		case 1:
			return new string[1] { "* Susie spit on Mobile Spout." };
		case 2:
			return new string[1] { "* Noelle threw a little\n  bit of river water onto\n  Mobile Sprout." };
		default:
			return base.PerformAssistAct(i);
		}
	}

	protected override void Update()
	{
		if (!gotHit)
		{
			bodyFrames++;
			if (bodyFrames >= 20)
			{
				bodyFrames = 0;
			}
			GetPart("body").transform.GetComponent<SpriteRenderer>().sprite = bodySprites[bodyFrames / 10 % 2];
		}
		base.Update();
	}

	public override void Chat()
	{
	}

	public override void TurnToDust()
	{
		aud.clip = Resources.Load<AudioClip>("sounds/snd_dust");
		aud.Play();
		CombineParts();
		obj.transform.Find("mainbody").GetComponent<ParticleDuplicator>().Activate(includeBlack: true, Vector2.zero);
	}
}

