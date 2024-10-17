using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class PunchCard : MonoBehaviour
{
	private bool canActivate;

	private bool activated;

	private int waitFrames;

	[SerializeField]
	private bool forceBit;

	private void Awake()
	{
		GetComponent<Image>().sprite = Util.PackManager().GetTranslatedSprite(GetComponent<Image>().sprite, "ui/spr_punch_card");
		if ((int)Util.GameManager().GetFlag(170) == 1 && (int)Util.GameManager().GetFlag(171) == 0)
		{
			Util.GameManager().SetFlag(171, 1);
			GetComponent<Image>().sprite = Resources.Load<Sprite>("ui/spr_punch_card_quest");
		}
		else
		{
			if (SceneManager.GetActiveScene().buildIndex != 123 && !forceBit)
			{
				return;
			}
			if (Util.GameManager().GetFlagInt(301) == 0 && Util.GameManager().GetPlayerName() == "SHAYY")
			{
				Util.GameManager().SetFlag(301, 1);
				Util.GameManager().PauseMusic();
				GetComponent<AudioSource>().Play();
				if (!forceBit)
				{
					GetComponent<Image>().sprite = Resources.Load<Sprite>("ui/spr_punch_card_thereturn");
				}
				else
				{
					int flagInt = Util.GameManager().GetFlagInt(312);
					if (flagInt == 1)
					{
						GetComponent<Image>().color = UnoCard.BLUE.color;
					}
					else
					{
						GetComponent<Image>().color = SOUL.GetSOULColorByID(flagInt, forceNormal: true);
					}
				}
				waitFrames = 30;
			}
			else
			{
				GetComponent<Image>().sprite = Resources.Load<Sprite>("ui/spr_punch_card_bnp");
			}
		}
	}

	private void Update()
	{
		if (waitFrames > 0)
		{
			waitFrames--;
			return;
		}
		if (!canActivate)
		{
			canActivate = true;
			return;
		}
		if (!activated)
		{
			activated = true;
			Object.FindObjectOfType<GameManager>().DisablePlayerMovement(deactivatePartyMembers: false);
		}
		if (UTInput.GetButtonDown("Z") || UTInput.GetButtonDown("X"))
		{
			if (GetComponent<AudioSource>().isPlaying)
			{
				Util.GameManager().ResumeMusic();
			}
			Object.FindObjectOfType<OverworldPlayer>().SetCollision(onoff: true);
			Object.FindObjectOfType<GameManager>().EnablePlayerMovement();
			Object.Destroy(base.gameObject);
		}
	}

	private void OnDestroy()
	{
		if ((bool)Object.FindObjectOfType<OverworldPlayer>())
		{
			Object.FindObjectOfType<OverworldPlayer>().SetCollision(onoff: true);
		}
	}
}

