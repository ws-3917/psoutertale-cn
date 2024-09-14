using UnityEngine;

public class GreaterDogIntroCutscene : CutsceneBase
{
	private bool depressed;

	private void Update()
	{
		if (!isPlaying)
		{
			return;
		}
		if ((bool)txt)
		{
			if (depressed)
			{
				if (AtLine(2))
				{
					kris.EnableAnimator();
					susie.EnableAnimator();
					noelle.EnableAnimator();
				}
			}
			else if (AtLine(2))
			{
				kris.EnableAnimator();
				noelle.EnableAnimator();
			}
			else if (AtLine(9))
			{
				SetSprite(susie, "spr_su_shrug", flipX: true);
			}
			else if (AtLine(11))
			{
				susie.EnableAnimator();
				susie.GetComponent<SpriteRenderer>().flipX = false;
			}
			else if (AtLine(13))
			{
				Util.GameManager().PlayGlobalSFX("sounds/snd_weaponpull");
				SetSprite(susie, "spr_su_threaten_stick");
			}
		}
		else
		{
			kris.InitiateBattle(72);
			EndCutscene(enablePlayerMovement: false);
		}
	}

	public override void StartCutscene(params object[] par)
	{
		base.StartCutscene(par);
		RevokePlayerControl();
		SetMoveAnim(kris, isMoving: false);
		SetMoveAnim(susie, isMoving: false);
		SetMoveAnim(noelle, isMoving: false);
		SetSprite(kris, "spr_kr_surprise");
		SetSprite(noelle, "spr_no_surprise");
		ChangeDirection(kris, Vector2.right);
		ChangeDirection(susie, Vector2.right);
		ChangeDirection(noelle, Vector2.right);
		susie.UseUnhappySprites();
		noelle.UseUnhappySprites();
		depressed = Util.GameManager().GetFlagInt(87) >= 7;
		if (depressed)
		{
			StartText(new string[7] { "* 站住。\n^05* 你有什么要事。", "* Okay,^05 we don't have\n  time for this.", "* Are you gonna try\n  to fight us if we\n  go anyway?", "* That would violate the lockdown\n  associated with PROTOCOL 727.", "* Such a violation would be\n  punishable by force.", "* Then just get this\n  over with.", "* Understood,^05 human sympathizers." }, new string[7] { "snd_txtmtt", "snd_txtsus", "snd_txtsus", "snd_txtmtt", "snd_txtmtt", "snd_txtsus", "snd_txtmtt" }, new int[1], new string[7] { "", "su_annoyed", "su_side", "", "", "su_annoyed", "" });
		}
		else
		{
			StartText(new string[13]
			{
				"* 站住。\n^05* 你有什么要事。", "* 额...", "* 我建议你抓紧给我让开。", "* 该区域已被封锁。", "* 有人在森林里发现了一个人类，\n  我们可不能让它穿过雪镇。", "* 第727条条令 - ^10任何人类目击\n  事件都必须立即处理。", "* 必须不惜一切代价夺取它的灵魂。", "* 人类到底怎么你们了？", "* 就好像人类把你困在这里，\n  让你挨饿或怎的一样。", "* 也许你们是一群同情人类\n  的人。",
				"* 我不能容忍像你这样的败类。", "* 我将亲自处理你。", "* 好啊，^05混蛋，^05给你能的！！！"
			}, new string[13]
			{
				"snd_txtmtt", "snd_txtsus", "snd_txtsus", "snd_txtmtt", "snd_txtmtt", "snd_txtmtt", "snd_txtmtt", "snd_txtsus", "snd_txtsus", "snd_txtmtt",
				"snd_txtmtt", "snd_txtmtt", "snd_txtsus"
			}, new int[1], new string[13]
			{
				"", "su_side", "su_annoyed", "", "", "", "", "su_annoyed", "su_smirk_sweat", "",
				"", "", "su_angry"
			});
		}
	}
}

