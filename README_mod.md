# PSOutertale-CN
当前汉化构建对应游戏版本: Beta V23

## PS! Outertale Mod Collection - 汉化组诚意之作
（这些Mod会考虑增加一个总语言选项，提供英语菜单和说明，供国外玩家体验。）
### Flavored Character Mod - 彩色战斗角色Mod
【效果】可以给战斗中的人物立绘上色，不同的怪物将分配不同的颜色（并可能会有渐变色的怪物）。
【菜单】
- 彩色战斗角色        [开/关]
- 配色方案            [默认/预设1/预设2/自定义]   PS. 将考虑提供多种预设配色方案风格，会起一些特别的名字
  (以下选项开启自定义配色后显示，只提供主要角色的自定义配色)
    - Toriel              []
    - Sans                []
    - Papyrus             []
    - Undyne              []
    - Alphys              []
    - Mettaton            []  (各种形态是否统一颜色还不确定)
    - Asgore              []
    - Twinkly             []
    - Asriel              []  (会考虑提供彩虹色)
    - Monster Kid         []
    - Napstablook         []
    - 其他怪物             [默认/预设1/预设2]

### Colorful Border Mod - 游戏边框Mod
【效果】可以提供简单、固定场景、动态等多种游戏边框。
【菜单】
- 开启游戏边框        [开/关]
- 边框风格            [简单/动态/静态]
  (选择静态后显示)
    - 边框样式            [星空/外域/星港/铸厂/空境/核心/首塔/档案箱/新家园] （完成对应的剧情节点后逐步解锁）

### Story Mode - 故事模式

【介绍】该模式将移除非必要的随机遭遇战与部分谜题，提升剧情沉浸感。适合给想连贯体验主线剧情的玩家开启，推荐同步开启“真正的死亡”。

【菜单】

- 开启故事模式	 [开启/关闭/自定义]
  (以下选项开启自定义时显示)
    - 随机遭遇战     [减少/大幅减少/移除(默认)]（减少=2倍时间，大幅减少=4倍时间，当关闭随机遭遇战后，将在Outlands设置4场固定位置的战斗用来开启动乱线。）
    - 杀戮数要求     [默认/减少/无(默认)]   （减少=1/2数量要求，如果移除随机战时锁定无）
    - 减少谜题       [开启(默认)/关闭]    (开启后一些推柱子、按钮、激光谜题会自动为已解开的状态)

#### --- 真正的死亡 ---

【介绍】此模式下，你将只有一次生命。存活的时候可以任意存读档。一旦死亡存档将被瞬间清空并无法复活，只能旁观或完全重置。推荐同步开启“故事模式”达到最大的剧情沉浸感。

- 开启“真正的死亡” [开启/关闭/自定义]
  (开启自定义时显示)
    - 生命条数        [1(默认)/2/3/5]     （生命条数耗尽时彻底死亡清除存档）

### Difficulty Workshop Mod - 难度工坊Mod

【效果】提供各种增强游戏可玩性的难度模式。

#### --- 难度辅助 ---
【介绍】可以在此处降低(或提升)游戏难度，避免由于BOSS战难度过高或过低而卡关。

- 开启难度辅助    [开启/关闭]
- 基础攻击       [刮痧模式/降低/默认/增加/秒杀] （分别对应：任意攻击造成1伤/-10/0/+10/秒杀）
- 基础防御       [无伤模式/大幅降低/降低/默认/增加/大幅增加/手残模式] (分别对应：受伤立即死亡/-10/-5/0/+5/+10/固定伤害1)
- 无敌时间       [帧伤/减少/默认/增加/大幅增加]（无敌时间分别为：1帧/15帧/30帧/60帧/90帧）（默认无敌时间为1s，30帧，Papyrus为90帧）
- 限时关卡       [默认/延长时间]（对应twinkly战灵魂回合默认30s时间，开启延长时间后加长至45s）
- 自动回血       [关闭/缓慢/快速]（当前回合为敌人回合时缓慢可以每秒恢复1HP，快速可以每秒恢复3HP）
- 濒死弹幕降速    [关闭/降速/大幅降速]（当前血量低于满血量的1/5时，分别降速为0.85x, 0.7x, 可以和物品效果叠加使用）

#### --- 旧伤难愈 ---
【介绍】此模式下，累计失血量达一定程度后将导致不可恢复的创伤。模拟真实世界中频繁受伤的结果。
（初始复活次数：10）
- 开启“旧伤难愈”  [开启/关闭]
- 受伤至死       [开启/关闭(默认)]     
- 创伤方式       [扣除HP上限/扣除复活次数/降低防御]
- 心理素质       [铁人/坚强/正常/脆弱/玻璃心/扭曲(谨慎尝试)]  (扭曲是特别属性)
（速度暴增、无法复活、HP拉满，视野模糊，视野自带滤镜等等）
（为了方便玩家，每次死亡后会显示可以复活的次数，同时受到创伤会有动效，比如视野突然闪红扭曲很快正常）
（残血可以让视野亮度轻微闪烁）

HP上限告急、剩余复活次数不多会出现闪烁。
心情：所有心理素质初始心情为0，心情下降到-10, -20, -30等会扣除一点血量上限；心情下降到-20, -40, -60等会同时扣除一点（基础）防御值和攻击值。

玻璃心：每次受伤扣除0.5点心情，HP会扣除至死（复活后恢复至10），基础防御和攻击扣除到-5为止。负面行动（辱骂、欺负、威胁怪物）会减少6点心情，正面行动（鼓励、帮助、支持怪物）会增加3点心情（可以恢复扣除的HP上限、防御等）；当心情为正时每上升10可以增加1次复活次数，最多增加5次；初始有效复活次数为10，最多可以增加到15。

脆弱：每次受伤扣除0.3点心情，HP会扣除至死（复活后恢复至10），基础防御和攻击扣除到-2为止。负面行动会减少3点心情，正面行动会增加1.5点心情（可以恢复扣除的HP上限、防御等）；心情为正时无特殊效果，有效复活次数为10。

正常：每次受伤扣除0.2点心情，HP会扣除至10（复活后不变），不扣除基础攻击，基础防御扣除到-2为止。负面行动会减少2点心情，正面行动无效果；有效复活次数为10。

坚强：每次受伤扣除0.1点心情，HP会扣除至满血量的1/2（复活后不变），不扣除基础攻击，基础防御扣除到-2为止。负面行动会减少1点心情，正面行动（鼓励、帮助、支持怪物）无效果；有效复活次数为8。

铁人：每次受伤扣除0.1点心情，HP会扣除至满血量的3/4（复活后不变），不扣除基础攻击和防御。负面行动和正面行动均无效果；有效复活次数为5。

#### --- 因果报应 ---
【介绍】此模式下，杀戮怪物增加LV会导致无敌时间下降，当LV增加到一定程度受伤几乎等同于帧伤。如果开启“和平的暴力”，暴力饶恕太多怪物也会降低无敌时间。
如果觉得难度过高可配合“难度辅助”提升基础防御。

- 开启“因果报应” 开启/关闭 （初始基础无敌时间为30帧，每升高一级LV无敌时间下降2帧，以此类推，当LV>=16时受伤效果等同帧伤）
- 和平的暴力     开启/关闭 （会统计Bully数，暴力饶恕怪物数每增加10，无敌时间下降2帧，效果等同LV+1）
- 我是无辜的！   开启/关闭 你的兄弟将与你共同分担罪孽。 (开启此模式后，动乱线下每升高一级LV，无敌时间只下降1帧，可以理解为你的LV有一半让小羊分了。)

### Alternative Music Mod - 备用音乐Mod
【效果】开启后，可以将部分场景的游戏音乐替换成废稿音乐，并添加独立的未使用音乐。
- 启动备用音乐  [开启/关闭] （注: 可能要重启后生效）
- 替换场景音乐  [全部/推荐/关闭/自定义]
  （选择自定义时显示下方列表）
    - Homw          [原版/替代] （Home替换后Home-alt同步替换，不可分离）
    - Outlands      [原版/替代]
    - DJ Beat       [原版/替代]
    - Determination [原版/替代]
    - ...
      （其他音乐想到再进行补充）
- 独立废稿音乐  [全部/推荐/关闭/自定义]
  （选择自定义时显示下方列表）
    - Wonder        [开启/关闭]
    - ...

### Real Asgore Fight - 真正的Asgore战
Y'know one I idea I did have for LV15+ Dark Neutral's endgame was an actual Asgore fight, but not in the way you'd expect. And I mainly got this idea from the new ending where Frisk initiates the attack instead of Twinkly. And basically, when Frisk attacked Asgore, he would block the initial slash with his Trident and then a battle ensued from there.

And throughout the fight, Asgore would question your motives and also try reasoning with you to get you to stop fighting, he really doesn't want to be fighting you and his attacks would likely reflect that, and if you tried to use the Mercy button, Frisk would slash the button, breaking it for the fight. And so you'd be forced to keep attacking Asgore until he is fatally wounded at the end, like in UT. Then at that point he would understand this is his fate and wishes for you to absorb his soul and leave the Outpost like in the usual ending.

Now such a fight wouldn't really be feasible to add to the game anyways due to the shortish development time remaining, but this all still a neat idea that would add a nice amount of depth to Asgore's character on a really murderous route.

## 手动调整内容

这部分需要在源码发布后手动修改对应的代码，一般是打字机代码，合并冲突等。
