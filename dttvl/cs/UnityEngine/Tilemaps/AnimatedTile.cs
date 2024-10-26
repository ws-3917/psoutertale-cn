using System;

namespace UnityEngine.Tilemaps
{
	[Serializable]
	[CreateAssetMenu(fileName = "New Animated Tile", menuName = "Tiles/Animated Tile")]
	public class AnimatedTile : TileBase
	{
		public Sprite[] m_AnimatedSprites;

		public float m_MinSpeed = 1f;

		public float m_MaxSpeed = 1f;

		public float m_AnimationStartTime;

		public Tile.ColliderType m_TileColliderType;

		public override void GetTileData(Vector3Int location, ITilemap tileMap, ref TileData tileData)
		{
			tileData.transform = Matrix4x4.identity;
			tileData.color = Color.white;
			if (m_AnimatedSprites != null && m_AnimatedSprites.Length != 0)
			{
				tileData.sprite = m_AnimatedSprites[m_AnimatedSprites.Length - 1];
				tileData.colliderType = m_TileColliderType;
			}
		}

		public override bool GetTileAnimationData(Vector3Int location, ITilemap tileMap, ref TileAnimationData tileAnimationData)
		{
			if (m_AnimatedSprites.Length != 0)
			{
				tileAnimationData.animatedSprites = m_AnimatedSprites;
				tileAnimationData.animationSpeed = Random.Range(m_MinSpeed, m_MaxSpeed);
				tileAnimationData.animationStartTime = m_AnimationStartTime;
				return true;
			}
			return false;
		}
	}
}

