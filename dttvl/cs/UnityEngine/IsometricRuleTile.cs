using System;

namespace UnityEngine
{
	public class IsometricRuleTile<T> : IsometricRuleTile
	{
		public sealed override Type m_NeighborType => typeof(T);
	}
	[Serializable]
	[CreateAssetMenu(fileName = "New Isometric Rule Tile", menuName = "Tiles/Isometric Rule Tile")]
	public class IsometricRuleTile : RuleTile
	{
	}
}

