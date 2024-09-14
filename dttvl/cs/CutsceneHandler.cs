using System;
using UnityEngine;

public class CutsceneHandler : UnityEngine.Object
{
	private static Type[] cutscenes = new Type[106]
	{
		typeof(KrisDefeatCutscene),
		typeof(FirstCutscene),
		typeof(FloweyIntroCutscene),
		typeof(FloweyIntroCutscenePt2),
		typeof(TorielQuicklyEscapeCutscene),
		typeof(SusieNoticesDummyCutscene),
		typeof(DummyDefeatCutscene),
		typeof(TorielConfrontationCutscene),
		typeof(RunReminder),
		typeof(CinnamonOrBscotchCallCutscene),
		typeof(ThrowRockCutscene),
		typeof(NapstablookCutscene),
		typeof(NapstaDefeatCutscene),
		typeof(MossCutsceneRuins),
		typeof(ToriOutisdeHomeCutscene),
		typeof(ToriInsideCutscene),
		typeof(ToriBedCutscene),
		typeof(KrisDreamSequenceRuins),
		typeof(RuinsGenoRemind),
		typeof(TorielInterveneCutscene),
		typeof(FloweyBossIntro),
		typeof(FloweyDefeatCutscene),
		typeof(Section1EndCutscene),
		typeof(NoelleJoinCutscene),
		typeof(StickCutscene),
		typeof(GreyDoorSection1),
		typeof(TorielCall2),
		typeof(GreyDoorTrailer),
		typeof(EarthboundFirstCutscene),
		typeof(EarthboundFirstCutscenePt2),
		typeof(ToriCallEBCutscene),
		typeof(PencilStatueCutscene),
		typeof(CoilSnakeDefeatCutscene),
		typeof(HHFirstCutscene),
		typeof(FirstCultistDefeatCutscene),
		typeof(PaulaCutscene),
		typeof(FirstPorkyCutscene),
		typeof(PorkyDuoCultistDefeatCutscene),
		typeof(DoctorCutscene),
		typeof(CarpainterCutscene),
		typeof(CarpainterDefeatCutscene),
		typeof(TorielSwitchesHardModeCutscene),
		typeof(ToriForceHandCutscenePt1),
		typeof(ToriForceHandCutscenePt2),
		typeof(TorielDefeatCutscene),
		typeof(FoundKrisKnifeCutscene),
		typeof(FloweyDefeatHardmode),
		typeof(KnightDetectHMCutscene),
		typeof(GasterCutsceneHardmode),
		typeof(MondoMoleDefeatCutscene),
		typeof(LilliputStepsPrebossCutscene),
		typeof(TripleCultistCutscene),
		typeof(TripleCultistDefeat),
		typeof(PorkyDefeatCutscene),
		typeof(UFFirstCutscene),
		typeof(SansPapUFFirstCutscene),
		typeof(NessDefeatCutscene),
		typeof(GreyDoorSection2Oblit),
		typeof(SnowyDiesCutscene),
		typeof(GasterSection3Cutscene),
		typeof(PostGaster3Cutscene),
		typeof(DoggoPrefightCutscene),
		typeof(DoggoPostfightCutscene),
		typeof(ElecMazeStartCutscene),
		typeof(ElecMazeEndCutscene),
		typeof(LetterStartCutscene),
		typeof(LetterPickUpCutscene),
		typeof(LetterEndCutscene),
		typeof(DeepForestFirstCutscene),
		typeof(FirstFeraldrakeCutscene),
		typeof(FirstFeralPostCutscene),
		typeof(QCFirstCutscene),
		typeof(SusieAndNoelleGoToBed),
		typeof(Section3DreamSequencePt1),
		typeof(Section3DreamSequencePt2),
		typeof(Section3DreamSequencePt3),
		typeof(GasterWrongWarpSection3),
		typeof(MazeChaseStartCutscene),
		typeof(SansMazeCatchCutscene),
		typeof(PreChilldrakeCutscene),
		typeof(PostChilldrakeCutscene),
		typeof(DogiCutscene),
		typeof(PapXOPuzzleStart),
		typeof(PapXOPuzzleENd),
		typeof(TileMazeStartCutscene),
		typeof(TileMazeEndCutscene),
		typeof(DogiPostCutscene),
		typeof(LesserDogDefeatCutscene),
		typeof(IceBridgeCutscene),
		typeof(IceXOFallCutscene),
		typeof(JerryDefeatCutscene),
		typeof(SusiePullKrisAwayCutscene),
		typeof(GreaterDogIntroCutscene),
		typeof(GreaterDogDefeatCutscene),
		typeof(GauntletCutscene),
		typeof(PostGauntletCutscene),
		typeof(SansPrefightCutscene),
		typeof(SansPostfightCutscene),
		typeof(SnowdinInnCutscene),
		typeof(WrongNumberSong),
		typeof(NoelleNoticeKrisWorry),
		typeof(EndUnoCutscene),
		typeof(UndyneBeginCutscene),
		typeof(UndyneMiddleCutscene),
		typeof(UndyneEndCutscene),
		typeof(SpamtonNoCutscene)
	};

	public static CutsceneBase GetCutscene(int id)
	{
		return new GameObject("Cutscene", cutscenes[id]).GetComponent<CutsceneBase>();
	}

	public static int GetCutsceneCount()
	{
		return cutscenes.Length;
	}
}

