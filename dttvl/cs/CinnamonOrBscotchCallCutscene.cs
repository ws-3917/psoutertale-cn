using System.Collections.Generic;
using UnityEngine;

public class CinnamonOrBscotchCallCutscene : CutsceneBase
{
	private bool selecting;

	private string krisChoice;

	private string susieChoice;

	public override Dictionary<string, string[]> GetDefaultStrings()
	{
		Dictionary<string, string[]> dictionary = new Dictionary<string, string[]>();
		dictionary.Add("choices", new string[4] { "Cinnamon", "Butterscotch", "cinnamon", "butterscotch" });
		dictionary.Add("call_0", new string[5] { "* （嘀嘀嘀，嘀嘀嘀…）", "* 你好。^10\n* 这里是TORIEL。", "* 我想你已经知道我\n  很喜欢吃派了，^10对吧？", "* 嗯，我想了解一下你喜欢\n  什么口味。", "* Kris，^10你喜欢肉桂还是奶油糖？" });
		dictionary.Add("call_1", new string[8] { "* {0}是吗？^10\n* 我明白了。", "* 那么Susie你呢？^10\n* 你更喜欢哪个？", "* ...我吗？", "* （如果没有粉笔或者蜗牛的\n  选项的话，那就...）", "* 我选{1}吧。", "* 啊，我明白了！", "* {0}还有{1}是吧。\n^10* 感谢你们的耐心！", "* 滴..." });
		dictionary.Add("call_hardmode_0", new string[4] { "* （嘀嘀嘀，嘀嘀嘀…）", "* 你好。^10\n* 这里是TORIEL。", "* 就只是问问...^05\n* 你更喜欢哪一个？", "* 肉桂还是奶油糖？" });
		return dictionary;
	}

	private void Update()
	{
		if (state == 0 && (bool)txt && txt.CanLoadSelection() && !selecting)
		{
			InitiateDeltaSelection();
			select.SetupChoice(Vector2.left, GetString("choices", 0), Vector3.zero);
			select.SetupChoice(Vector2.right, GetString("choices", 1), new Vector3(-90f, 0f));
			select.SetCenterOffset(new Vector2(-11f, 0f));
			select.Activate(this, 0, txt.gameObject);
			selecting = true;
		}
		if (state == 1 && !txt)
		{
			EndCutscene();
		}
	}

	public override void MakeDecision(Vector2 index, int id)
	{
		if (index == Vector2.right)
		{
			gm.SetFlag(18, 1);
			krisChoice = GetString("choices", 1);
			susieChoice = GetString("choices", 2);
		}
		else
		{
			gm.SetFlag(18, 0);
		}
		StartText(GetStringArrayFormatted("call_1", krisChoice, susieChoice), new string[8] { "snd_txttor", "snd_txttor", "snd_txtsus", "snd_txtsus", "snd_txtsus", "snd_txttor", "snd_txttor", "snd_text" }, new int[18], new string[8] { "tori_happy", "tori_neutral", "su_surprised", "su_side_sweat", "su_smile", "tori_happy", "tori_happy", "" });
		state = 1;
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		krisChoice = GetString("choices", 0);
		susieChoice = GetString("choices", 3);
		PlaySFX("sounds/snd_dial");
		StartText(GetStringArray(((int)gm.GetFlag(108) == 1) ? "call_hardmode_0" : "call_0"), new string[5] { "snd_text", "snd_txttor", "snd_txttor", "snd_txttor", "snd_txttor" }, new int[18], new string[5]
		{
			"",
			"tori_neutral",
			((int)gm.GetFlag(108) == 1) ? "tori_neutral" : "tori_worry",
			"tori_neutral",
			"tori_neutral"
		});
		txt.EnableSelectionAtEnd();
		gm.SetFlag(17, 1);
	}
}

