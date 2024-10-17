using System.Collections.Generic;
using UnityEngine;

public class CarpainterIntroAttack : AttackBase
{
	public override Dictionary<string, string[]> GetDefaultStrings()
	{
		Dictionary<string, string[]> dictionary = new Dictionary<string, string[]>();
		dictionary.Add("intro", new string[2] { "不必说，^05你肯定有\n富兰克林徽章。", "现在，直面我\n<color=#0000FFFF>蓝色艺术</color>的怒火吧！" });
		return dictionary;
	}

	protected override void Awake()
	{
		base.Awake();
		SetStrings(GetDefaultStrings(), GetType());
	}

	protected override void Update()
	{
		if (!isStarted)
		{
			return;
		}
		if (state == 0)
		{
			frames++;
			if (frames == 10)
			{
				Object.FindObjectOfType<Carpainter>().Hit(3, 80f, playSound: true);
				state = 1;
				frames = 0;
			}
		}
		else if (state == 1 && !Object.FindObjectOfType<Carpainter>().IsShaking())
		{
			frames++;
			if (frames == 1)
			{
				frames = 1;
				Object.FindObjectOfType<Carpainter>().CombineParts();
			}
			if (frames == 20)
			{
				Object.FindObjectOfType<BattleManager>().PlayMusic("music/mus_sanctuary_challenge", 1f);
				state = 2;
				Object.FindObjectOfType<Carpainter>().Chat(GetStringArray("intro"), "RightWide", "snd_text", new Vector2(163f, 56f), canSkip: true, 0);
			}
		}
		else if (state == 2 && !Object.FindObjectOfType<TextBubble>())
		{
			Object.FindObjectOfType<Carpainter>().SeparateParts();
			Object.FindObjectOfType<BattleManager>().PlayMusic("music/mus_otherworldfoe", 1f, hasIntro: true);
			Object.Destroy(base.gameObject);
		}
	}

	public override void StartAttack()
	{
		base.StartAttack();
		Object.FindObjectOfType<BattleManager>().StopMusic();
	}
}

