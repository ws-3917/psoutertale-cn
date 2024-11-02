using UnityEngine;

public class ExplosiveOak : EnemyBase
{
	private bool alone;

	private Vector3 basePos;

	private bool explode;

	protected override void Awake()
	{
		base.Awake();
		enemyName = "Explosive Oak";
		fileName = "oak";
		checkDesc = "* 易燃，领土意识很强。\n* 免疫冰冻伤害。";
		maxHp = 350;
		hp = maxHp;
		hpPos = new Vector2(2f, 122f);
		hpWidth = 101;
		atk = 10;
		def = 10;
		flavorTxt = new string[3] { "* Explosive Oak不知道为什么它在这里。", "* 闻起来像苹果。", "* Explosive Oak看起来真的很无能。" };
		dyingTxt = new string[1] { "* Explosive Oak开始发热了。" };
		actNames = new string[2] { "Hug", "SN!交流" };
		defaultChatSize = "RightSmall";
		exp = 14;
		gold = 6;
		attacks = new int[1] { 32 };
	}

	protected override void Start()
	{
		base.Start();
		basePos = GetEnemyObject().transform.position;
	}

	protected override void Update()
	{
		if (explode && !killed)
		{
			GetEnemyObject().transform.position = basePos + new Vector3(Random.Range(-1, 2), Random.Range(-1, 2)) * 2f / 48f;
		}
		base.Update();
	}

	public override void Hit(int partyMember, float rawDmg, bool playSound)
	{
		if ((bool)Object.FindObjectOfType<PKFreezeEffect>() || (bool)Object.FindObjectOfType<IceShock>())
		{
			rawDmg = 5f;
		}
		if ((bool)Object.FindObjectOfType<PKFireEffect>())
		{
			rawDmg = 100f;
		}
		base.Hit(partyMember, rawDmg, playSound);
		if (killed)
		{
			killed = false;
			explode = true;
		}
	}

	public override int CalculateDamage(int partyMember, float rawDmg, bool forceMagic = false)
	{
		if (partyMember == 2 && (bool)Object.FindObjectOfType<IceShock>())
		{
			return Mathf.FloorToInt((float)base.CalculateDamage(partyMember, rawDmg, forceMagic) * 0.166f);
		}
		return base.CalculateDamage(partyMember, rawDmg, forceMagic);
	}

	public override string[] PerformAct(int i)
	{
		if (GetActNames()[i] == "Hug")
		{
			tired = true;
			if (!((float)hp / (float)maxHp <= 0.2f))
			{
				return new string[1] { "* 你抱了抱这棵树。\n* 树感到更放松了。\n* 它变得疲倦了。" };
			}
			return new string[1] { "* 你抱了抱这棵树。\n* 它感到很温暖。\n* 它变得疲倦了。" };
		}
		if (GetActNames()[i] == "SN!交流")
		{
			Spare();
			return new string[1] { "* 所有人以某种方式\n  说服了这棵树离开你。\n* Explosive Oak离开了战斗。" };
		}
		return base.PerformAct(i);
	}

	public override string[] PerformAssistAct(int i)
	{
		if (spared)
		{
			return base.PerformAssistAct(i);
		}
		switch (i)
		{
		case 1:
			return new string[1] { "su_annoyed`snd_txtsus`* 呃，^05你特么想让我干什么？" };
		case 2:
			return new string[1] { "no_happy`snd_txtnoe`* （这不就是一棵树吗？）" };
		default:
			return base.PerformAssistAct(i);
		}
	}

	public override bool CanSpare()
	{
		bool flag = true;
		EnemyBase[] array = Object.FindObjectsOfType<EnemyBase>();
		foreach (EnemyBase enemyBase in array)
		{
			if (enemyBase != this && !enemyBase.IsDone())
			{
				flag = false;
			}
		}
		if (flag)
		{
			return true;
		}
		return base.CanSpare();
	}

	public override void Chat()
	{
	}

	public bool IsGonnaExplode()
	{
		return explode;
	}

	public override int GetNextAttack()
	{
		if (explode)
		{
			return 32;
		}
		return base.GetNextAttack();
	}

	public void Explode()
	{
		aud.clip = Resources.Load<AudioClip>("sounds/snd_explosion_8bit");
		aud.Play();
		aud.volume = 1f;
		killed = true;
		explode = false;
		obj.transform.Find("mainbody").GetComponent<SpriteRenderer>().enabled = false;
		for (int i = 0; i < 54; i++)
		{
			ExplosionFlameBullet component = Object.Instantiate(Resources.Load<GameObject>("battle/attacks/bullets/eb/ExplosionFlameBullet"), new Vector3(basePos.x, 1.24f), Quaternion.identity, Object.FindObjectOfType<AttackBase>().transform).GetComponent<ExplosionFlameBullet>();
			int num = i * 20;
			component.Activate(num, num / 360);
		}
	}

	public override void TurnToDust()
	{
	}
}

