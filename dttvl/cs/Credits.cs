using UnityEngine;
using UnityEngine.UI;

public class Credits : MonoBehaviour
{
	private int frames;

	private Transform credits;

	private Transform bg;

	private bool doSonaStuff = true;

	private AudioClip castletown;

	private readonly int CREDITS_LENGTH = 5683;

	private void Awake()
	{
		credits = base.transform.GetChild(0);
		bg = GameObject.Find("BG").transform;
		if (PlayerPrefs.GetInt("MBUnlocked", 0) == 0)
		{
			Text component = credits.Find("CreditPage4").Find("SpecialThanksCredits").GetComponent<Text>();
			component.text = component.text.Replace("Mario Bros. Title Background", "***** **** 标题背景");
		}
		if (Util.GameManager().GetFlagInt(12) == 1 && Util.GameManager().GetFlagInt(13) == 10)
		{
			doSonaStuff = false;
			Object.Destroy(credits.Find("Sonas").gameObject);
		}
		castletown = Resources.Load<AudioClip>("music/mus_castletown");
	}

	private void Update()
	{
		frames++;
		if (frames == 1)
		{
			if (!doSonaStuff)
			{
				GetComponent<AudioSource>().pitch = 0.6f;
			}
			GetComponent<AudioSource>().Play();
		}
		if (!GetComponent<AudioSource>().isPlaying)
		{
			GetComponent<AudioSource>().clip = castletown;
			GetComponent<AudioSource>().Play();
			GetComponent<AudioSource>().loop = true;
		}
		credits.localPosition = Vector3.Lerp(Vector3.zero, new Vector3(0f, CREDITS_LENGTH), (float)(frames - 150) / (float)CREDITS_LENGTH);
		GetComponent<AudioSource>().volume = Mathf.Lerp(1f, 0f, (float)(frames - 150 - CREDITS_LENGTH) / 60f);
		bg.transform.position = new Vector3(Mathf.Lerp(-5.9f, 6.7f, (float)(frames - 1800) / 2220f), 0f);
		if (doSonaStuff)
		{
			if (frames <= 1900)
			{
				bg.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, Mathf.Lerp(0f, 0.17f, (float)(frames - 1800) / 100f));
			}
			else if (frames <= 4020)
			{
				bg.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, Mathf.Lerp(0.17f, 0f, (float)(frames - 3920) / 100f));
			}
			if (frames == 505)
			{
				credits.Find("Sonas").Find("Sarah").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 1050)
			{
				credits.Find("Sonas").Find("Gabbo").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 1142)
			{
				credits.Find("Sonas").Find("Cubic").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 1144)
			{
				credits.Find("Sonas").Find("Cyber").GetComponent<Animator>()
					.enabled = false;
				credits.Find("Sonas").Find("Cyber").GetComponent<SpriteRenderer>()
					.sprite = Resources.Load<Sprite>("overworld/npcs/staff/spr_cyber_surprise");
			}
			else if (frames == 1481)
			{
				credits.Find("Sonas").Find("Jevilhumor").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 1496)
			{
				credits.Find("Sonas").Find("Shaunt").GetComponent<Animator>()
					.Play("shaunt_wake", 0, 0f);
			}
			else if (frames == 1729)
			{
				credits.Find("Sonas").Find("Scoot").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 1990)
			{
				credits.Find("Sonas").Find("RealisticExplosion").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 2000)
			{
				credits.Find("Sonas").Find("Beethovenus").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 2075)
			{
				credits.Find("Sonas").Find("Hue").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 2360)
			{
				credits.Find("Sonas").Find("Sonnakai").GetComponent<Animator>()
					.SetFloat("speed", 2f);
			}
			else if (frames == 2390)
			{
				credits.Find("Sonas").Find("Sonnakai").GetComponent<Animator>()
					.SetFloat("speed", 3f);
			}
			else if (frames == 2420)
			{
				credits.Find("Sonas").Find("Sonnakai").GetComponent<Animator>()
					.SetFloat("speed", 4f);
			}
			else if (frames == 2450)
			{
				credits.Find("Sonas").Find("Diddy").GetComponent<SpriteRenderer>()
					.sprite = Resources.Load<Sprite>("overworld/npcs/staff/spr_diddy_1");
			}
			else if (frames == 2664)
			{
				credits.Find("Sonas").Find("Huecycles").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 2878)
			{
				credits.Find("Sonas").Find("Lexi").GetComponent<Animator>()
					.Play("lexi_shoot", 0, 0f);
			}
			else if (frames == 3000)
			{
				credits.Find("Sonas").Find("Valor").GetComponent<Animator>()
					.Play("Human", 0, 0f);
			}
			else if (frames == 3150)
			{
				credits.Find("Sonas").Find("Sophie").GetComponent<Animator>()
					.enabled = true;
			}
			else if (frames == 3824)
			{
				credits.Find("Sonas").Find("Mari").GetComponent<Animator>()
					.Play("Silly", 0, 0f);
			}
			else if (frames == 4280)
			{
				credits.Find("Sonas").Find("Marxvee").GetComponent<Animator>()
					.enabled = true;
			}
			MonoBehaviour.print(frames);
		}
		if (frames >= CREDITS_LENGTH + 150)
		{
			GetComponent<AudioSource>().volume = Mathf.Lerp(1f, 0f, (float)(frames - (CREDITS_LENGTH + 150)) / 60f);
		}
		if (frames != CREDITS_LENGTH + 240)
		{
			return;
		}
		if (Util.GameManager().GetEnding() == -1)
		{
			if (Util.GameManager().GetFlagInt(58) == 1)
			{
				PlayerPrefs.SetInt("FloweyKilledLastTime", 3);
				if (Util.GameManager().GetFlagInt(12) == 1)
				{
					Util.GameManager().ForceLoadArea(129);
				}
				else
				{
					Util.GameManager().ForceLoadArea(6);
				}
			}
			else
			{
				Util.GameManager().ForceLoadArea(77);
			}
		}
		else
		{
			Util.GameManager().ForceLoadArea(6);
		}
	}
}

