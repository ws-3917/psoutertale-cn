using UnityEngine;

public class FakeRiverboat : MonoBehaviour
{
    private int frames;

    [SerializeField]
    private GameManager gm;
    private Sprite[] sprites;

    private float yBase;


    private void Awake()
    {
        gm = Util.GameManager(); 

        yBase = transform.position.y;
        if (gm.GetFlagInt(290) == 1)
        {
            RepositionLoadingZone();
            Destroy(gameObject);
        }
        else if (Random.Range(0, 10) == 0 && (gm.GetFlagInt(87) != 10 || gm.GetFlagInt(281) != 1 || (gm.GetFlagInt(270) != 0 && gm.GetFlagInt(270) != 1)))
        {
            transform.Find("Goku").GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("overworld/npcs/spr_goku_d");
        }
    }

    private void Update()
    {
        frames++;
        float num = (Mathf.Sin((float)frames / 10f) - 1f) / 24f;
        transform.position = new Vector3(transform.position.x - 1f / 12f, yBase + num);
        transform.Find("BoatWater").GetComponent<SpriteRenderer>().sprite = sprites[frames / 10 % 2];
        transform.Find("BoatWater").localPosition = new Vector3(1f / 48f, -0.535f - num);
        if (frames == 30)
        {
            Util.GameManager().SetFlag(290, 1);
            RepositionLoadingZone();
            if (gm.GetFlagInt(87) != 10 || gm.GetFlagInt(281) != 1 || (gm.GetFlagInt(270) != 0 && gm.GetFlagInt(270) != 1))
            {
                CutsceneHandler.GetCutscene(99).StartCutscene();
            }
        }
    }

    public void RepositionLoadingZone()
    {
        Destroy(GameObject.Find("COLD"));
        var loadingZone = FindObjectOfType<LoadingZone>();
        if (loadingZone != null)
        {
            loadingZone.transform.position = new Vector3(0f, loadingZone.transform.position.y);
        }
    }
}



