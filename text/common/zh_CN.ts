import { pms } from '../../../code/common/extras';
import { music } from '../../../code/systems/assets';
import { battler, choicer, iFancyYourVilliany, pager, phone, player, world } from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';

// START-TRANSLATE

export default {
   _0: {
      _1: '那个玩家，已经竭尽全力...',
      _2: '但无奈，\n命运早已注定...',
      _3: '再怎么改动故事，也无法改变结局。',
      _4: '那个玩家... 已经看过无数条时间线。\n可是没有一条，能让他满意。',
      _5: '他的余生，注定要永无止境地\n进行这场苦乐参半的时空旅行。',
      _6: '这就是他的归宿吗？',
      _7: '不...\n我绝不允许。',
      _8: '要是只有扭曲时空法则，\n才能让他跳出循环...',
      _9: '那就豁出去了。',
      _10: '我绝不会让“时空计划”\n半途而废。'
   },

   a_common: {
      bullybed: [
         [
            '<32>{#p/human}* （...）',
            '<32>{#p/human}* （你醒了。）',
            '<32>{#p/human}* （前哨站没有任何变化。）'
         ],
         [
            '<32>{#p/human}* （你找遍了每个角落，\n  希望能发现生命的迹象。）\n* （一无所获。）',
            '<32>{#p/human}* （你找了一遍，一遍，又一遍...）',
            '<32>{#p/human}* （一无所获。）'
         ],
         [
            '<32>{#p/human}* （你找到了之前乘坐的飞船。）\n* （它已经彻底被毁。）',
            '<32>{#p/human}* （你试图寻找怪物留下的飞船。）',
            '<32>{#p/human}* （但似乎...\n  哪怕一艘，都没给你留下。）'
         ],
         [
            '<32>{#p/human}* （你去了实验室，\n  希望能找到飞船的蓝图和部件。）',
            '<32>{#p/human}* （蓝图还在，部件也有剩余...）',
            "<32>{#p/human}* （然而，此时核心能量已所剩无几。\n  无法让你发射飞船。）"
         ],
         [
            '<32>{#p/human}* （你试图重置。）\n* （什么都没发生。）',
            '<32>{#p/human}* （你再次尝试重置。）',
            '<32>{#p/human}* （什么都没发生。）'
         ],
         [
            "<32>{#p/human}* （绝望之中，你拨了Toriel的号码。）\n* （没有回应。）",
            '<32>{#p/human}* （你又给Papyrus，Undyne打电话...）',
            '<32>{#p/human}* （没有回应。）'
         ],
         [
            '<32>{#p/human}* （...）',
            "<32>{#p/human}* （你已经不记得在这里度过了多久。）",
            "<32>{#p/human}* （几个星期？几个月？几年？）\n* （无从得知。）",
            "<32>{#p/human}* （你把核心的能量消耗调至最低...）",
            "<32>{#p/human}* （即便如此，终有一天也会用尽。）"
         ],
         [
            '<32>{#p/human}* （重力逐渐消失。）',
            '<32>{#p/human}* （温度开始下降。）',
            '<32>{#p/human}* （大气层即将解体。）',
            '<32>{#p/human}* （没有了能量，前哨站将无法生存。）'
         ],
         [
            '<32>{#p/human}* （不知为何，你感到平静。）',
            "<32>{#p/human}* （你平静地接受了自己的死亡。）",
            "<32>{#p/human}* （既然不可避免，那就随它去吧。）",
            '<32>{#p/human}* （空气即将消散。）\n* （最后一刻，你回忆起自己的旅程。）',
            '<32>{#p/human}* （从你离开人类世界的那一天，\n  一直到怪物重获自由的那一天。）'
         ],
         [
            '<32>{#p/human}* （空气彻底消失。）',
            '<32>{#p/human}* （你开始窒息。）',
            '<32>{#p/human}* （生命正在离你而去。）',
            '<32>{#p/human}* （看来，终点就是...）'
         ]
      ],
      dogcheck1: [
         '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
         '<25>{#p/basic}（这里就是结局啦！）',
         '<25>{#p/basic}（一起来看看\n  你获得了哪些成就吧！）'
      ],
      dogcheck2: () => [
         ...(!SAVE.flag.b._saved
            ? !SAVE.flag.b._item
               ? [
                  '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                  '<25>{#p/basic}（哇！）\n（全程没存档，物品还一样都不拿！）',
                  '<25>{#p/basic}（你咋急成这样呢！）'
               ]
               : [
                  '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                  "<25>{#p/basic}（哇！）\n（居然全程都没存档！）",
                  '<25>{#p/basic}（你不知道存档点长啥样吗？）'
               ]
            : !SAVE.flag.b._item
               ? [
                  '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                  "<25>{#p/basic}（哇！）\n（一样物品都没买？）",
                  '<25>{#p/basic}（不知道物品长啥样吗？）'
               ]
               : []),
         ...(SAVE.flag.n._hits === 0
            ? !SAVE.flag.b._flee
               ? [
                  '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                  '<25>{#p/basic}（太强了！）\n（全程无伤！还从来不逃跑！）',
                  !SAVE.flag.b._equip
                     ? "<25>{#p/basic}（原来如此！）\n（知道自己强到能无伤，\n  你才不拿防具的！）"
                     : '<25>{#p/basic}（真勇敢啊！）'
               ]
               : [
                  '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                  '<25>{#p/basic}（太强了！）\n（居然能全程无伤！）',
                  !SAVE.flag.b._equip
                     ? '<25>{#p/basic}（而且只用原始装备\n  还能无伤，\n  不愧是天选之子！）'
                     : '<25>{#p/basic}（莫非... 你是战斗大佬？）'
               ]
            : SAVE.flag.n._deaths + SAVE.flag.n._deaths_twinkly === 0
               ? !SAVE.flag.b._heal
                  ? !SAVE.flag.b._flee
                     ? [
                        '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                        '<25>{#p/basic}（太强了！）\n（一次都没死过！）',
                        !SAVE.flag.b._equip
                           ? '<25>{#p/basic}（不仅如此，你还全程无药！）\n（更离谱的是，还是原始装备！）'
                           : '<25>{#p/basic}（不仅如此，你还全程无药！）'
                     ]
                     : [
                        '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                        '<25>{#p/basic}（太强了！）\n（一次都没死过，\n  还从来不逃跑！）',
                        !SAVE.flag.b._equip
                           ? "<25>{#p/basic}（不仅如此，你还全程无药！）\n（更离谱的是，还是原始装备！）"
                           : "<25>{#p/basic}（不仅如此，你还全程无药！）"
                     ]
                  : !SAVE.flag.b._flee
                     ? [
                        '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                        '<25>{#p/basic}（太强了！）\n（一次都没死过，\n  还从来不逃跑！）',
                        !SAVE.flag.b._equip
                           ? '<25>{#p/basic}（原来如此！）\n（知道自己够强，\n  所以才不拿防具的吧？）'
                           : '<25>{#p/basic}（这就是所谓的“勇气”吧？）'
                     ]
                     : !SAVE.flag.b._equip
                        ? [
                           '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                           '<25>{#p/basic}（太强了！）\n（只用原始装备，\n  还能一次都不死！）'
                        ]
                        : ['<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！', '<25>{#p/basic}（太强了！）\n（一次都没死过！）']
               : !SAVE.flag.b._heal
                  ? !SAVE.flag.b._flee
                     ? [
                        '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                        '<25>{#p/basic}（太强了！）\n（全程无药，还从来不逃跑！）',
                        !SAVE.flag.b._equip
                           ? "<25>{#p/basic}（仅仅无药，\n  难道就不需要防具吗？）"
                           : '<25>{#p/basic}（你是真喜欢\n  在刀尖上跳舞啊。）'
                     ]
                     : !SAVE.flag.b._equip
                        ? [
                           '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                           '<25>{#p/basic}（太强了！）\n（仅凭原始装备，\n  还能全程无药！）'
                        ]
                        : [
                           '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                           '<25>{#p/basic}（太强了！）\n（全程无药！）'
                        ]
                  : !SAVE.flag.b._flee
                     ? [
                        '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                        '<25>{#p/basic}（太强了！）\n（全程不逃跑！）',
                        !SAVE.flag.b._equip
                           ? "<25>{#p/basic}（仅仅无药，\n  难道就不需要防具吗？）"
                           : '<25>{#p/basic}（你是真喜欢\n  在刀尖上跳舞啊。）'
                     ]
                     : !SAVE.flag.b._equip
                        ? [
                           '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                           '<25>{#p/basic}（太强了！）\n（只用原始装备通关！）'
                        ]
                        : []),
         ...(!SAVE.flag.b._skip
            ? [
               '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
               "<25>{#p/basic}（你好温柔...）\n（全程没跳任何对话！）",
               !SAVE.flag.b._call
                  ? SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0 // NO-TRANSLATE

                     ? '<25>{#p/basic}（真可惜，你明明有手机，\n  却从来不用。）'
                     : '<25>{#p/basic}（真可惜，你明明有手机，\n  却从来不给别人打电话。）'
                  : SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0 // NO-TRANSLATE

                     ? '<25>{#p/basic}（真可惜，你明明换了手机，\n  却从来不看域外网消息。）'
                     : '<25>{#p/basic}（你真的好关心大家！）'
            ]
            : !SAVE.flag.b._call
               ? SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0 // NO-TRANSLATE

                  ? [
                     '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                     '<25>{#p/basic}（真奇怪...）\n（你明明有手机，\n  却从来不用！）'
                  ]
                  : [
                     '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                     '<25>{#p/basic}（真奇怪...）\n（你明明有手机，\n  却从来不给别人打电话！）'
                  ]
               : SAVE.data.n.plot_pmcheck === 0 && phone.of('pms').display() && pms().length > 0 // NO-TRANSLATE

                  ? [
                     '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                     '<25>{#p/basic}（真奇怪...）\n（你明明换了手机，\n  却从来不看域外网消息！）'
                  ]
                  : []),
         ...(!SAVE.flag.b._getg
            ? [
               '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
               '<25>{#p/basic}（天呐！）\n（居然一分钱都没赚到！）\n（没人给你钱吗？）'
            ]
            : !SAVE.flag.b._useg
               ? [
                  '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
                  '<25>{#p/basic}（天呐！）\n（你真是个铁公鸡，一毛不拔！）'
               ]
               : []),
         ...(SAVE.data.b.water
            ? [
               '<25>{#x1}{#p/event}汪汪！',
               "<25>{#p/basic}（你咋这么喜欢\n  那杯静电消除液呢？）"
            ]
            : [])
      ],
      dogcheck3: (none: boolean) =>
         none
            ? [
               '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
               "<25>{#p/basic}（你好像没做啥特别的事哎。）",
               '<25>{#p/basic}（不过，能坚守“中庸之道”\n  才是最难得的啊！）'
            ]
            : [
               '<25>{#x1}{#p/event}汪汪！\n{#x1}{#p/event}汪汪！',
               "<25>{#p/basic}（说完啦！）",
               '<25>{#p/basic}（再次祝贺你！）\n（拜拜！）'
            ],
      neutral0() {
         let d = false;
         let k = '';
         let m = music.ending;
         const a = [] as string[];
         const b = [] as string[];
         const addA = (lines: string[]) => a.push(...lines);
         const addB = (lines: string[]) => b.push(...lines);
         const dtoriel = SAVE.data.n.state_wastelands_toriel === 2;
         const ddoggo = SAVE.data.n.state_starton_doggo === 2;
         const dlesserdog = SAVE.data.n.state_starton_lesserdog === 2;
         const dgreatdog = SAVE.data.n.state_starton_greatdog === 2;
         const ddogs = SAVE.data.n.state_starton_dogs === 2;
         const dpapyrus = SAVE.data.n.state_starton_papyrus === 1;
         const ddoge = SAVE.data.n.state_foundry_doge === 1;
         const dmuffet = SAVE.data.n.state_foundry_muffet === 1;
         const dundyne = SAVE.data.n.state_foundry_undyne !== 0;
         const droyalguards = SAVE.data.n.state_aerialis_royalguards === 1;
         const dmadjick = SAVE.data.b.killed_madjick;
         const dknightknight = SAVE.data.b.killed_knightknight;
         const dmettaton = SAVE.data.b.killed_mettaton;
         const hkills = world.trueKills;
         const mdeaths = hkills + (SAVE.data.n.state_foundry_undyne === 1 ? 1 : 0);
         const royals = [
            !ddoggo,
            !dlesserdog,
            !ddogs,
            !dgreatdog,
            !ddoge,
            !droyalguards,
            !dmadjick,
            !dknightknight
         ].filter(v => v).length;
         if (world.bad_robot) {
            if (!dundyne) {
               if (royals < 2) {
                  d = true;
                  k = 'dark_death'; // NO-TRANSLATE

                  m = music.youscreweduppal;
                  
                  addB([
                     '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                     '<26>{#p/undyne}{#f/7}* 小混蛋，听着！',
                     "<25>{#p/undyne}{#f/4}* 你此生最大的错误，\n  就是干掉那么多人，\n  偏偏把我救了！",
                     "<25>{#p/undyne}{#f/5}* 多亏了你，\n  我获得了力量！\n  我终于能实现愿望...",
                     '<25>{#p/undyne}{#f/17}* ...终于能...',
                     "<25>{#p/undyne}{#f/16}* ...等等，\n  出发之前，我想跟你讲讲\n  自己是怎么获得力量的。",
                     '<25>{#p/undyne}{#f/20}* 把时间倒回到\n  你离开前哨站的那天。',
                     "<25>{#p/undyne}{#f/22}* 你刚离开，\n  我就发现了那些暴行，\n  立马就... 冲到了首塔。",
                     '<25>{#p/undyne}{#f/22}* Alphys被吓得不轻。\n  国王死了，\n  皇家卫队几乎全军覆没。',
                     '<25>{#p/undyne}{#f/20}* 更糟的是...',
                     "<25>{#p/undyne}{#f/22}* Mettaton和Alphys为了\n  干掉你，动用了大量的能量。\n* 最终，前哨站能量供应失控。",
                     '<25>{#p/undyne}{#f/19}* 供气系统，人工重力系统...\n  这些赖以为生的装置\n  都相继崩溃。',
                     '<25>{#p/undyne}{#f/19}* 最终，死伤无数。',
                     "<25>{#p/undyne}{#f/18}* 另一边，“档案”突然被\n  一道强力电流击中。",
                     '<25>{#p/undyne}{#f/16}* 由于皇家卫队人手不足，\n  无法及时疏散里面的人类...',
                     '<25>{#p/undyne}{#f/19}* 结果，他们全死了。',
                     '<25>{#p/undyne}{#f/10}* ...\n* 那时，我突然明白\n  ASGORE一直以来在做什么。',
                     "<25>{#p/undyne}{#f/10}* 他在尝试一条解放之路，\n  一条不用杀戮的解放之路。",
                     '<25>{#p/undyne}{#f/16}* ...呵。\n* 真... 不愧是他。',
                     "<25>{#p/undyne}{#f/19}* 但人类一死，王国沦陷。\n  他的计划就彻底失败了，",
                     '<25>{#p/undyne}{#f/20}* 不过那些灵魂还在，所以...',
                     '<25>{#p/undyne}{#f/20}* ...',
                     '<25>{#p/alphys}{#f/10}* 打个岔，成-成功了。',
                     '<25>{#p/undyne}{#f/12}* 真的？',
                     '<25>{#p/undyne}{#f/1}* 让我看看...',
                     '<25>{#p/undyne}{#f/17}* ...',
                     '<25>{#p/alphys}{#f/18}* ...\n* 合你心意吧！？',
                     '<25>{#p/undyne}{#f/9}* 切。\n* 你听听自己在说啥。',
                     '<25>{#p/undyne}{#f/11}* 还“合你心意吧”，\n  你说呢？',
                     '<25>{#p/alphys}{#f/20}* ...',
                     "<25>{#p/undyne}{#f/8}* 那当然是...\n  超合我心意啦！",
                     '<25>{#p/undyne}{#f/7}* 我接着说，\n  灵魂还在，\n  所以在得到它们后...',
                     '<25>{#p/undyne}{#f/11}* 我和Alphys想了个主意...',
                     "<25>{#p/undyne}{#f/16}* 首先，乘坐飞船，\n  借灵魂力量穿过力场，\n  把你拿下...",
                     '<25>{#p/undyne}{#f/7}* 接着，把灵魂扯出来！',
                     "<25>{#p/undyne}{#f/1}* 集齐了灵魂，\n  我们就能轰碎力场，\n  解放怪物！",
                     '<25>{#p/undyne}{#f/12}* 只是，\n  怎么定位到你的坐标呢？',
                     '<25>{#p/alphys}{#f/15}* 嘿！\n  我-我有办法。',
                     '<25>{#p/alphys}{#f/16}* 很简单。\n* 那人接通电话的一刻，\n  就暴露了自己的坐标。',
                     
                  ]);
                  if (!dpapyrus) {
                     addB([
                        "<25>{|}{#p/alphys}{#f/18}* 毕竟是我出的主意，\n  早就想到- {%}",
                        '<18>{#p/papyrus}{#f/6}UNDYNE？！\n你还好吗？！',
                        '<25>{#p/alphys}{#f/2}* ...？！',
                        '<25>{#p/undyne}{#f/13}* 啊？？\n* 你跑过来干啥？',
                        '<18>{#p/papyrus}{#f/5}嗯... 我听到这边\n传来很大的尖叫声，\n好像在吵架。',
                        '<18>{#p/papyrus}{#f/6}我担心你，\n就过来了。',
                        '<25>{#p/undyne}{#f/14}* 谢谢你哦Papyrus。\n* 你可真是体贴呢。',
                        "<18>{#p/papyrus}{#f/0}哎呀，不用谢！",
                        "<25>{#p/undyne}{#f/7}* 下次，别人的飞船，\n  请你别随便上，行不行！！！",
                        "<18>{#p/papyrus}{#f/6}对-对不起，\n我只是好奇。",
                        '<18>{#p/papyrus}{#f/5}本来只是想\n跑过来看一眼，\n结果...',
                        '<18>{#p/papyrus}{#f/6}一回神，这飞船\n都飞出前哨站了！',
                        "<18>{#p/papyrus}{#f/4}我发誓，\n再给我一次机会，\n我肯定不会上。",
                        "<25>{#p/alphys}{#f/15}* 行吧，\n  呃，你知不知道...",
                        "<25>{#p/alphys}{#f/23}* 咱们已经飞完半程了。",
                        '<25>{#p/undyne}{#f/12}* 是啊。所以... \n  你现在还是回密室去吧。',
                        '<25>{#p/undyne}{#f/1}* 就当咱们在玩捉迷藏！\n  你躲，我们找！',
                        '<18>{#p/papyrus}{#f/6}我要躲多长时间呢？',
                        "<25>{#p/undyne}{#f/12}* 我不知道啊？？？",
                        "<25>{#p/alphys}{#f/17}* 两小时。\n* 你要躲两个小时。",
                        '<18>{#p/papyrus}{#f/0}好！！\n两位加油！！',
                        '<25>{#p/alphys}{#f/20}* ...两小时应该够抓住人类吧，\n  或许...',
                        '<25>{#p/undyne}{#f/14}* 噗，什么？\n  两小时？',
                        "<25>{#p/undyne}{#f/1}* 呵，用不着。",
                        '<25>{#p/undyne}{#f/4}* ...\n* 呋呼呼呼...',
                        '<25>{*}{#x0}{#p/undyne}{#f/7}* 两秒就够。{^40}{%}'
                     ]);
                  } else {
                     addB([
                        "<25>{#p/alphys}{#f/18}* 毕竟是我出的主意，\n  早就想到这个问题了！",
                        "<25>{#p/undyne}{#f/1}* 呋呼呼... 那就行。",
                        "<25>{#p/undyne}{#f/7}* 小混蛋！\n  你的死，纯是自找的！",
                        "<25>{#p/alphys}{#f/16}* 对！\n  你-你就在地狱里\n  好好反思自己的罪行吧！！",
                        "<25>{#p/alphys}{#f/16}* 你去哪，\n  我们都能抓住！！",
                        "<25>{#p/undyne}{#f/8}* 对！！\n* ALPHYS，告诉那混蛋！！",
                        '<25>{#p/undyne}{#f/4}* ...\n* 呋呼呼呼...',
                        "<25>{*}{#x0}{#p/undyne}{#f/7}* 死期到了。{^40}{%}"
                     ]);
                  }
               } else {
                  k = 'dark_undyne'; // NO-TRANSLATE

                  
                  addA([
                     '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                     '<25>{#p/alphys}{#f/33}* ...嘘，应该是这个号，\n  打通了。',
                     "<25>{#p/alphys}{#f/1}* 人类，你好！\n* 我是Alphys博士。",
                     '<25>{#p/alphys}{#f/17}* 也是这个差劲而痛苦的世界里\n  最大的受害者。',
                     '<25>{#p/alphys}{#f/28}* ...不知你是否想听听\n  这段时间里，\n  这里发生的悲剧？'
                  ]);
                  addB([
                     '<25>{#p/alphys}{#f/5}* 那时，\n  我正在进行“档案”的日常维护...',
                     '<25>{#p/alphys}{#f/23}* 突然，\n  我听到飞船起飞的声音。',
                     '<32>{#p/basic}{@fill=#ffbbdc}* 那飞船超~级大呢。',
                     '<25>{#p/alphys}{#f/17}* 呃... 没多大其实。\n* 就是艘飞艇。',
                     '<32>{#p/basic}{@fill=#ffbbdc}* 哦，懂了。\n* 小号飞船。',
                     '<25>{#p/alphys}{#f/15}* 我去找Asgore，\n  找了他家，找了王座...',
                     '<25>{#p/alphys}{#f/20}* 结果到处都找不到。',
                     '<25>{#p/alphys}{#f/21}* ...这时，我发现\n  前哨站的能量供应出了问题。',
                     '<25>{#p/alphys}{#f/24}* 看来，为了干掉你，\n  Mettaton那个大蠢蛋\n  把核心的能量全吸光了。',
                     '<25>{#p/alphys}{#f/25}* 他这一搞，\n  前哨站的设施都没法运转了。',
                     '<32>{#p/basic}{@fill=#d4bbff}* 我去！\n* 之后呢？',
                     '<25>{#p/alphys}{#f/26}* ...',
                     '<32>{#p/basic}{@fill=#d4bbff}* 想起来了。\n* 你惊慌失措，\n  竟去找Undyne求助。',
                     '<25>{#p/alphys}{#f/18}* ...Undyne到了首塔。\n* 和我预想的完全一样，\n  她告诉我...',
                     "<25>{#p/alphys}{#f/3}* Asgore被人杀了。",
                     '<32>{#p/basic}{@fill=#ffbbdc}* 肯定的。',
                     '<25>{#p/alphys}{#f/13}* 与此同时，\n  Undyne帮做了点好事...',
                     '<25>{#p/alphys}{#f/20}* 她召集皇家卫队，\n  帮忙稳住核心，避免伤亡增加。',
                     '<25>{#p/alphys}{#f/30}* 但接下来，她的所作所为\n  让我... 大跌眼镜。',
                     '<32>{#p/basic}{@fill=#d4bbff}* 该... 该不会...',
                     '<25>{#p/alphys}{#f/31}* Undyne知道了“档案”的事情。\n  冲到那里，把里面的人类\n  全杀了。',
                     "<25>{#p/alphys}{#f/32}* 当我发现时，都懵了。",
                     "<32>{#p/basic}{@fill=#ffbbdc}* 我天，\n* 真不怪你。",
                     "<32>{#p/basic}{@fill=#d4bbff}* 错在她，自私自利。\n  就想着当“英雄”，好出名。",
                     '<25>{#p/alphys}{#f/17}* 妈的。\n* 她还跟我说，她完全“理解”\n  Asgore的良苦用心...',
                     '<25>{#p/alphys}{#f/24}* 但“绝不认同。”\n* 所以就干掉了人类。',
                     '<25>{#p/alphys}{#f/13}* ...\n* 我很沮丧，\n  但最起码... 灵魂还在。',
                     '<25>{#p/alphys}{#f/10}* 再得到一个灵魂，\n  我们就能自由。\n* 希望还在。',
                     "<32>{#p/basic}{@fill=#ffbbdc}* ...但希望还是破灭了。",
                     "<25>{#p/alphys}{#f/20}* 是的。\n* 灵魂没了，希望也没了。",
                     '<25>{#p/alphys}{#f/21}* Undyne，操，\n  真是个极品，\n  智商二百五的极品。',
                     
                     '<25>{#p/alphys}{#f/22}* 她那鱼籽大的脑子\n  根本不知道怎么储存\n  人类灵魂。',
                     "<32>{#p/basic}{@fill=#d4bbff}* 结果，六个灵魂全...",
                     '<25>{#p/alphys}{#f/24}* ...碎了。',
                     '<25>{#p/alphys}{#f/6}* 一切归零，我彻底放弃了。',
                     "<25>{#p/alphys}{#f/8}* Undyne之后怎么搞，\n  我都不在乎。",
                     '<25>{#p/alphys}{#f/10}* 我辞去了科学员的工作。\n  把所有实验器材扔掉了。',
                     '<25>{#p/alphys}{#f/33}* 之后...',
                     '<32>{#p/basic}{@fill=#ffbbdc}* 你重拾了老本行。',
                     '<32>{#p/basic}{@fill=#d4bbff}* 又跟我们一起，\n  捡太空垃圾！',
                     "<25>{#p/alphys}{#f/29}* 是啊。",
                     "<25>{#p/alphys}{#f/28}* 别小瞧我捡垃圾的技术。\n* 淦，我可是一把手呢。",
                     "<32>{#p/basic}{@fill=#ffbbdc}* 这可是大实话。",
                     '<25>{#p/alphys}{#f/10}* 生活这么自在，\n  谁稀罕什么“打破力场”呢？',
                     
                     "<25>{#p/alphys}{#f/18}* 没事捡捡垃圾...\n  不比成天琢磨“逃出去”\n  轻松多了？",
                     '<32>{#p/basic}{@fill=#ffbbdc}* 不过，\n  档案里人类的内幕\n  还没几个人知道。',
                     "<32>{#p/basic}{@fill=#d4bbff}* 是呢。\n* 她糟蹋灵魂的事\n  都快成最高机密了。",
                     '<25>{#p/alphys}{#f/23}* 呵。\n* Undyne爱怎么忽悠，怎么折腾，\n  随她便。',
                     '<25>{#p/alphys}{#f/23}* 建军工厂？\n  建瞭望塔？\n* 没人管她。',
                     '<25>{#p/alphys}{#f/25}* 她要是觉得“全面军事化”\n  能让她流芳千古，\n  就搞。',
                     '<25>{#p/alphys}{#f/26}* 她爱咋咋地，我不在乎。'
                  ]);
                  if (!dtoriel) {
                     addB([
                        "<32>{#p/basic}{@fill=#d4bbff}* Undyne是怎么\n  统治前哨站的？\n* 武装夺权？",
                        '<26>{#p/alphys}{#f/24}* 呃，那事把我恶心坏了。',
                        '<25>{#p/alphys}{#f/30}* 曾经的王后站了出来，\n  想阻止她的野心...',
                        "<25>{#p/alphys}{#f/31}* ...结果，Undyne的拥护者们\n  一拥而上，把王后撂倒，\n  当场踩死。",
                        "<25>{#p/alphys}{#f/21}* 杀了人，\n  Undyne却不用受任何刑罚。",
                        "<32>{#p/basic}{@fill=#ffbbdc}* 我去，纯纯悲剧了。"
                     ]);
                  } else {
                     addB([
                        "<32>{#p/basic}{@fill=#d4bbff}* 对了，我听说...\n  她好像正在全民强制征兵，",
                        '<25>{#p/alphys}{#f/24}* 呃，真蠢。',
                        '<25>{#p/alphys}{#f/30}* 许多民众，\n  每天强制站岗...\n  就为了第一时间发现人类。',
                        '<25>{#p/alphys}{#f/31}* 她才不管要等多长时间。',
                        "<25>{#p/alphys}{#f/21}* 把天文观测网络当摆设。",
                        "<32>{#p/basic}{@fill=#ffbbdc}* 哇。\n* 她好像真忘了有这东西呢。"
                     ]);
                  }
                  addB(['<32>{#p/basic}{@fill=#d4bbff}* 是啊...']);
                  if (!dpapyrus) {
                     addB([
                        '<25>{#p/alphys}{#f/20}* 为了让她停手，\n  Papyrus跪下来苦苦哀求。\n* 可她根本不听。',
                        '<25>{#p/alphys}{#f/31}* ...自那之后，\n  我也不想管她了。'
                     ]);
                  } else {
                     addB([
                        "<25>{#p/alphys}{#f/20}* 要是Papyrus还活着，\n  也许能劝得动她。",
                        "<25>{#p/alphys}{#f/18}* ...他为啥死了呢？\n  你我都心知肚明。"
                     ]);
                  }
                  if (hkills > 19) {
                     addB([
                        '<25>{#p/alphys}{#f/17}* ...\n* 讲完了。\n* 这就是我们的命运。',
                        "<25>{#p/alphys}{#f/27}* 总之，\n  我可太谢谢你了。",
                        '<25>{#p/alphys}{#f/26}* 你要是不那么大杀特杀，\n  我还不能这么快体验到\n  无间地狱的滋味呢。',
                        "<25>{#p/alphys}{#f/18}* 一切，都是你的错。"
                     ]);
                  } else {
                     addB([
                        '<25>{#p/alphys}{#f/17}* ...\n* 讲完了。\n* 这就是我们的命运。',
                        "<25>{#p/alphys}{#f/26}* 诚然，\n  你没杀那么多人...",
                        '<25>{#p/alphys}{#f/23}* 诚然，我和Mettaton反应\n  有些过度...',
                        "<25>{#p/alphys}{#f/18}* 但最根本的错在你。"
                     ]);
                  }
                  addB([
                     "<32>{#p/basic}{@fill=#ffbbdc}* Alphys，告诉那人。",
                     '<32>{#p/basic}{@fill=#d4bbff}* 对，亲口告诉那人，\n  他就是个废物！',
                     "<25>{#p/alphys}{#f/33}* ...嗯。\n* 她们代我说了。",
                     '<25>{#p/alphys}{#f/1}* 拜拜咯！',
                     '<32>{#p/basic}{@fill=#ffbbdc}* 再见，小屁孩。',
                     "<32>{#p/basic}{@fill=#d4bbff}* “再见”？\n* Bratty，\n  难道还会和那人“再见”？",
                     "<32>{#p/basic}{@fill=#ffbbdc}* 哎呀，说错了。\n* 这手机好像也要没电了。",
                     '<32>{#p/basic}{@fill=#d4bbff}* 鳄鳄，一会见！！！\n* 喵哈哈！！！',
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]);
               }
            } else if (royals < 2) {
               if (!dpapyrus || royals === 1) {
                  k = 'dark_alphys'; // NO-TRANSLATE

                  
                  addA([
                     '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                     '<25>{#p/sans}{#f/0}* 你好呀。',
                     "<25>{#p/sans}{#f/3}* 近况可好？"
                  ]);
                  addB([
                     '<25>{#p/sans}{#f/0}* 在你走后，\n  alphys... 吓得不轻。',
                     '<25>{#p/sans}{#f/0}* asgore死了，\n  undyne死了...',
                     '<25>{#p/sans}{#f/0}* 更糟的是，\n  mettaton那扯淡的计划\n  让核心陷入停摆。',
                     "<25>{#p/sans}{#f/3}* 能量供应已经彻底崩溃。",
                     "<25>{#p/sans}{#f/3}* 气压不断下降，\n  人工重力正在消失。\n* 情况... 不容乐观。",
                     '<25>{#p/sans}{#f/0}* 接完alphys的电话，\n  赶去的路上，\n  我已经做好了最坏的打算。',
                     '<25>{#p/sans}{#f/0}* 可更糟的事还在后头。',
                     '<25>{#p/sans}{#f/3}* 当我赶到首塔时，\n  一道强力电流直接贯穿了\n  “档案”。',
'<25>{#p/sans}{#f/3}* 里面的人类当场死亡。',
                     "<25>{#p/sans}{#f/3}* ...那是我第一次看到她\n  伤心成那样。",
                     '<25>{#p/sans}{#f/0}* 但我相信，\n  她肯定能挺过去的。',
                     '<25>{#p/sans}{#f/2}* 毕竟我俩之前可是研究搭档，\n  我了解她。',
                     '<25>{#p/sans}{#f/0}* 所以，我坐在她身旁陪伴她。\n* 发生这些事，\n  她也需要时间慢慢恢复。',
                     "<26>{#p/sans}{#f/3}* 最终，她振作起来。\n  接任了asgore的王位。",
                     "<25>{#p/sans}{#f/0}* ...继任后的第一件事，\n  就是妥善保存那些灵魂。",
                     '<25>{#p/sans}{#f/0}* 于是，我和alphys从\n  实验室角落里找到些旧材料，\n  给灵魂制造了容器。',
                     "<25>{#p/sans}{#f/3}* 有了容器，\n  谁来看管灵魂就成了问题。"
                  ]);
                  if (!dtoriel) {
                     addB([
                        '<25>{#p/sans}{#f/0}* 不久后，王后回归了。',
                        '<25>{#p/sans}{#f/2}* 她理应是最合适的人选。',
                        '<25>{#p/sans}{#f/0}* 但随即，\n  她看到了那些灵魂...',
                        '<25>{#p/sans}{#f/3}* 她不停地控诉，\n  说“我们都是他的帮凶”。',
                        '<25>{#p/sans}{#f/0}* 我们努力解释，\n  把asgore的所作所为\n  都讲给王后...',
                        "<25>{#p/sans}{#f/3}* 可她根本不听。",
                        '<25>{#p/sans}{#f/3}* 想都不用想，\n  她直接拒绝了\n  看管灵魂的工作。'
                     ]);
                  }
                  if (!dpapyrus) {
                     if (!dtoriel) {
                        addB([
                           "<25>{#p/sans}{#f/0}* toriel拒绝了，\n  我就去找papyrus。",
                           '<25>{#p/sans}{#f/3}* 好在，当我把情况\n  告诉他后...'
                        ]);
                     } else {
                        addB(['<25>{#p/sans}{#f/3}* 好在，papyrus还在，\n  我找到他，把事情告诉了他后...']);
                     }
                     if (royals === 1) {
                        addB([
                           '<25>{#p/sans}{#f/2}* 他马上就答应了。',
                           '<18>{#p/papyrus}{#f/4}...没想到这会议开这么久。',
                           "<25>{#p/sans}{#f/0}* 哎，说曹操曹操到。\n* 会议顺利吗？",
                           '<18>{#p/papyrus}{#f/0}哦，好得很呢！\n大伙相处可愉快了！',
                           '<25>{#p/sans}{#f/3}* 嘿。\n* 那就好。',
                           '<18>{#p/papyrus}{#f/0}对了，\n你给谁打电话呢？'
                        ]);
                     } else {
                        addB([
                           '<25>{#p/sans}{#f/2}* 他马上就答应了。',
                           "<18>{#p/papyrus}{#f/0}嘿，SANS！\n我把今天的活\n都干完啦！",
                           '<18>{#p/papyrus}{#f/9}未发现入侵者！\n容器没有故障！',
                           '<25>{#p/sans}{#f/0}* papyrus，干的好。\n* 再接再厉。',
                           "<18>{#p/papyrus}{#f/6}那必须滴！！！",
                           "<18>{#p/papyrus}{#f/0}对了，\n你给谁打电话呢？"
                        ]);
                     }
                     addB([
                        "<25>{#p/sans}{#f/2}* 呃，没谁。\n* 就是个普通的人类。",
                        '<18>{#p/papyrus}{#f/4}人类？\n他们不是都...',
                        '<18>{#p/papyrus}{#f/7}...我知道了！！\n我要接电话！！',
                        '<25>{#p/sans}{#f/0}* 给你。',
                        '<18>{#p/papyrus}{#f/0}人类，你好！',
                        '<18>{#p/papyrus}{#f/4}咱俩有阵子没见了...',
                        '<18>{#p/papyrus}{#f/5}...'
                     ]);
                     if (royals === 1) {
                        k = 'dark_alphys_therapy'; // NO-TRANSLATE

                        addB([
                           "<18>{#p/papyrus}{#f/5}其实... \n我想给你讲个故事。",
                           '<15>{#f/6}听完故事，你就知道\n这段时间里，\n这里都发生了啥。',
                           '<25>{#p/sans}{#f/3}* ...哦。\n* 从前...',
                           '<18>{#p/papyrus}{#f/7}嘘！！！\n让我说！',
                           "<18>{#p/papyrus}{#f/5}我的工作是\n看守和日常维护灵魂，\n保证它们的安全。",
                           '<18>{#p/papyrus}{#f/0}某天，我像往常一样\n工作时...',
                           '<18>{#p/papyrus}{#f/4}突然听到什么声响。'
                        ]);
                        if (!ddoggo) {
                           addB([
                              '<18>{#p/papyrus}{#f/5}声音是从安保门那里\n传来的。',
                              '<18>{#p/papyrus}{#f/6}我过去一看，\n原来是一只奇怪的狗狗\n眼睛看不见，撞到了门！',
                              '<18>{#p/papyrus}{#f/5}一开始，我很困惑...\n“为啥要来这呢？”',
                              '<18>{#p/papyrus}{#f/5}一问，\n我才知道...',
                              '<18>{#p/papyrus}{#f/6}犬卫队的同伴不见了，\n他在找同伴。',
                              '<18>{#p/papyrus}{#f/0}好在，他遇到了我。\n我很乐意帮他！',
                              '<18>{#p/papyrus}{#f/4}于是，下班后...',
                              '<18>{#p/papyrus}{#f/0}我俩就一起找\n犬卫队的伙伴们。',
                              '<18>{#p/papyrus}{#f/5}外域开放了，\n我们就从那里开始找...',
                              '<18>{#p/papyrus}{#f/5}一路找一路找，\n一直找到了\n首塔的塔顶...',
                              "<18>{#p/papyrus}{#f/6}沿途的风景\n都看了个遍。",
                              '<18>{#p/papyrus}{#f/5}...唯独没有找到\n一只狗狗。',
                              '<25>{#p/sans}{#f/0}* 嗯...',
                              '<25>{#p/sans}{#f/3}* 最终，你俩也没找到吗？',
                              '<18>{#p/papyrus}{#f/5}呃... 没找到。',
                              '<18>{#p/papyrus}{#f/5}我们回到了王座...',
                              '<18>{#p/papyrus}{#f/5}ALPHYS刚醒，\n把事情告诉了我们。',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}听罢，DOGGO十分难受。',
                              "<18>{#p/papyrus}{#f/6}但我跟ALPHYS\n可不会丢下他不管！",
                              '<18>{#p/papyrus}{#f/6}我告诉他，\n要是伤心了，就找我俩，\n一定会帮他的！',
                              "<18>{#p/papyrus}{#f/5}而且，还会给他\n一个新的家。",
                              '<25>{#p/sans}{#f/0}* 哦... 我说呢。',
                              "<25>{#p/sans}{#f/2}* 我说asgore的沙发上\n  咋有那些狗毛呢。"
                           ]);
                        } else if (!dlesserdog) {
                           addB([
                              '<18>{#p/papyrus}{#f/5}声音是从安保门那里\n传来的。\n是一阵轻快的叩门声。',
                              '<18>{#p/papyrus}{#f/6}我过去一看，\n原来是一只短脖狗狗，\n想让我摸摸它！',
                              '<18>{#p/papyrus}{#f/5}一开始，我很困惑...\n“为啥要来这呢？”',
                              '<18>{#p/papyrus}{#f/5}我就摸了摸它，',
'<18>{#p/papyrus}{#f/5}结果，脖子越摸越长，\n还扭成了字。',
                              '<18>{#p/papyrus}{#f/6}最终，扭成了\n“GU-DU”的形状。',
                              '<18>{#p/papyrus}{#f/6}我突然明白了：\n它很“孤独”。',
                              "<18>{#p/papyrus}{#f/8}看到那条孤独的脖子，\n我好难过！！\n我好想哭！！",
                              '<18>{#p/papyrus}{#f/5}伤心完了，\n我去找了ALPHYS，\n问她，这是怎么回事...',
                              '<18>{#p/papyrus}{#f/5}她把事情\n都告诉了我。',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}听罢，我十分难受。',
                              '<18>{#p/papyrus}{#f/6}但我也清楚\n为啥CANIS MINOR\n那么孤独了。',
                              '<18>{#p/papyrus}{#f/5}所以，在那之后。\n我尽力陪伴它。',
                              "<25>{#p/sans}{#f/3}* 嗯...\n* 希望这能让它开心点。",
                              '<25>{#p/sans}{#f/0}* 干得不错。'
                           ]);
                        } else if (!ddogs) {
                           addB([
                              '<18>{#p/papyrus}{#f/5}声音是从安保门那里\n传来的。\n有人在砸门！',
                              '<18>{#p/papyrus}{#f/6}我过去一看，\n是两只拿着斧头的狗\n在砸门！',
                              '<18>{#p/papyrus}{#f/5}一开始，\n我很担心，\n“到底怎么回事？”',
                              '<18>{#p/papyrus}{#f/5}但很快，\n担心变成了难过。',
                              '<18>{#p/papyrus}{#f/5}他们告诉我...',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}DOGAMY，DOGARESSA\n他俩说...',
                              '<18>{#p/papyrus}{#f/5}“活都活不长了，\n 感情还有什么用？\n 不如离婚算了。”',
                              '<25>{#p/sans}{#f/0}* 嗯...',
                              '<25>{#p/sans}{#f/3}* ...你肯定劝他俩\n  没事离啥离，好好过日子。',
                              '<18>{#p/papyrus}{#f/4}...',
                              '<18>{#p/papyrus}{#f/4}你咋这么懂我。',
                              '<18>{#p/papyrus}{#f/5}我猜，他俩只是想\n暂时分开，一个人静静。\n毕竟发生了这么多事。',
                              "<18>{#p/papyrus}{#f/5}于是，我就让他俩\n先在ASGORE家\n住一下。",
                              '<25>{#p/sans}{#f/0}* 我听说，他俩现在\n  还在那里住着呢。',
                              '<25>{#p/sans}{#f/2}* 我有预感，他家那个\n  一直“装修中”的房间\n  能派上用场了。'
                           ]);
                        } else if (!dgreatdog) {
                           addB([
                              '<18>{#p/papyrus}{#f/5}声音是从安保门那里\n传来的，\n是一种奇特的叩门声。',
                              "<18>{#p/papyrus}{#f/6}过去一看，\n“叩门声”原来是\n大狗的吠叫。",
                              '<18>{#p/papyrus}{#f/5}大狗脱下了盔甲，\n变成了小狗。',
                              '<18>{#p/papyrus}{#f/6}它跑了过来，\n想找我玩！',
                              '<18>{#p/papyrus}{#f/6}看起来，好久好久\n都没人找它玩了。',
                              "<18>{#p/papyrus}{#f/6}我第一次看到\n狗狗这么想找人玩。",
                              '<18>{#p/papyrus}{#f/4}我感觉不对劲...',
                              '<18>{#p/papyrus}{#f/6}我不太懂狗的世界，\n但它肯定是失去了啥，\n才会做出那样的举动！',
                              '<18>{#p/papyrus}{#f/5}后来，\n我找ALPHYS问了这事...',
                              '<18>{#p/papyrus}{#f/5}她把事情\n都告诉了我。',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}听罢，我十分难受。',
                              '<18>{#p/papyrus}{#f/6}但我也清楚\n为啥CANIS MAJOR\n那么想找人玩了。',
                              '<18>{#p/papyrus}{#f/5}所以，在那之后。\n只要有空，我就陪它玩。',
                              "<25>{#p/sans}{#f/3}* 嗯...\n* 希望这能让它开心点。",
                              '<25>{#p/sans}{#f/0}* 干得不错。'
                           ]);
                        } else if (!ddoge) {
                           addB([
                              '<18>{#p/papyrus}{#f/5}是电话声。\n一名高级守卫打来了\n电话。',
                              '<18>{#p/papyrus}{#f/6}电话那边的声音\n十分失落。',
                              "<18>{#p/papyrus}{#f/5}电话那边说，\n她是UNDYNE的朋友。",
                              '<18>{#p/papyrus}{#f/6}让我去找她，\n商议一些“重要事务”。',
                              '<18>{#p/papyrus}{#f/6}一路上，\n我有点紧张...',
                              '<18>{#p/papyrus}{#f/5}还好，她叫我过去，\n只是想谈谈心。',
                              '<18>{#p/papyrus}{#f/4}其实，跟她聊天时，\n我感觉她话里有话...',
                              '<18>{#p/papyrus}{#f/5}仔细想了想，\n我知道她想说啥了。',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}DOGE问我，\n她这么拼死拼活\n保护怪物，为了啥？',
                              '<18>{#p/papyrus}{#f/6}她问我\n当上皇家守卫，\n到底有什么意义？',
                              '<18>{#p/papyrus}{#f/5}她问我...',
                              '<18>{#p/papyrus}{#f/6}区区一个人类，\n就能歼灭整支守卫队，\n那她还能改变什么？',
                              '<18>{#p/papyrus}{#f/5}...\n我没有回答，\n带她去了首塔。',
                              '<18>{#p/papyrus}{#f/5}我把灵魂拿了出来，\n对她说...',
                              
                              '<18>{#p/papyrus}{#f/6}“只差一个。”',
                              '<18>{#p/papyrus}{#f/5}听罢，她转过头，\n闭目深思...',
                              '<18>{#p/papyrus}{#f/6}“明白了。”',
                              '<25>{#p/sans}{#f/0}* 哎呀。\n* 真不容易啊。',
                              "<25>{#p/sans}{#f/3}* 希望看完灵魂后，\n  她能恢复一点士气吧。"
                           ]);
                        } else if (!droyalguards) {
                           addB([
                              '<18>{#p/papyrus}{#f/5}是电话声。\n两名带编号的守卫\n打来了电话。',
                              '<18>{#p/papyrus}{#f/6}电话那边的声音\n十分失落。',
                              '<18>{#p/papyrus}{#f/5}电话那边说，\n他俩爱一起吃冰淇淋。',
                              '<18>{#p/papyrus}{#f/6}有事想和我聊聊，\n叫我过去。',
                              '<25>{#p/sans}{#f/0}* 我想...',
                              "<25>{#p/sans}{#f/3}* 他俩叫你过去，\n  肯定不是请你吃\n  冰淇淋。",
                              '<18>{#p/papyrus}{#f/6}要真是那样\n就好了。',
                              '<18>{#p/papyrus}{#f/5}没有冰淇淋，\n只有... 噩耗。',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}他俩说，\n自己还刚被提拔，\n可现在...',
                              '<18>{#p/papyrus}{#f/6}却感觉所有训练，\n所有努力，\n都分文不值。',
                              '<18>{#p/papyrus}{#f/6}但难不倒我！',
'<18>{#p/papyrus}{#f/6}我说，\n“帮你俩找个新工作，\n咋样？”',
                              '<18>{#p/papyrus}{#f/5}我想了一堆点子。',
                              '<18>{#p/papyrus}{#f/4}大部分点子都没被采纳，\n但偏偏，“加入游泳队”\n很合他俩胃口。',
                              '<18>{#p/papyrus}{#f/4}连我都挺纳闷。',
                              "<25>{#p/sans}{#f/0}* 一号，二号他俩\n  后来成了职业游泳运动员？",
                              "<25>{#p/sans}{#f/3}* 嗯，他俩开心就好。",
                              "<18>{#p/papyrus}{#f/4}哦，你放心！",
                              "<18>{#p/papyrus}{#f/0}他俩不仅开心，\n还挺出名呢！",
                              "<18>{#p/papyrus}{#f/5}...\n只是...",
                              '<18>{#p/papyrus}{#f/5}一想到他俩为啥转行，\n辞去守卫，当上运动员...\n我心里就一阵难过。'
                           ]);
                        } else if (!dmadjick) {
                           addB([
                              '<18>{#p/papyrus}{#f/5}一回神，\n一名奇怪的魔术师\n突然出现在安保室里。',
                              '<18>{#p/papyrus}{#f/6}它问我，\n“活着，有什么意义？”',
                              '<18>{#p/papyrus}{#f/4}我不得不...\n让他迁就一下，\n说话“形而下”一点。',
                              '<18>{#p/papyrus}{#f/4}这都是往好了说。',
                              '<25>{#p/sans}{#f/3}* 我都能想象到\n  那幅场面。',
                              '<25>{#p/sans}{#f/0}* 那么，在“深入交谈”后，\n  你有什么收获？',
                              '<18>{#p/papyrus}{#f/5}嗯...\n我学到了很多东西。',
                              '<18>{#p/papyrus}{#f/6}有恐惧，\n有忧虑...',
                              '<18>{#p/papyrus}{#f/5}还有那异常强烈的...\n失落。',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}COZMO穷尽一生，\n就为了让它的导师\n重视它。',
                              '<18>{#p/papyrus}{#f/6}而如今，\n导师TERRESTRIA\n却先一步离去。',
'<18>{#p/papyrus}{#f/6}让它备受打击。',
                              '<18>{#p/papyrus}{#f/5}它总觉得自己不够优秀，\n无法成为导师的骄傲。\n现在却再也没有机会了。',
                              '<18>{#p/papyrus}{#f/6}我可不服！',
                              "<18>{#p/papyrus}{#f/5}我知道。\n导师看到它还活着，\n一定会很欣慰的。",
                              '<18>{#p/papyrus}{#f/4}最熟悉，了解导师的人，\n非它莫属。',
                              '<18>{#p/papyrus}{#f/5}所以，它最该做的，\n正是继承导师的遗志，\n坚强活着。',
                              '<18>{#p/papyrus}{#f/0}我们越聊越起劲，\n聊了很久！',
                              "<18>{#p/papyrus}{#f/6}我都佩服自己\n居然能听懂它说话！",
                              '<18>{#p/papyrus}{#f/0}聊罢，\n我俩心满意足地分别。',
                              '<18>{#p/papyrus}{#f/5}可我...\n总感觉哪里不对劲。'
                           ]);
                        } else {
                           addB([
                              '<18>{#p/papyrus}{#f/5}声音是从安保门那边\n传来的，\n有人在敲门。',
                              '<18>{#p/papyrus}{#f/4}敲门者很有礼貌。\n我请她进来坐坐。',
                              '<18>{#p/papyrus}{#f/5}结果发现...\n她块头太大，进不来。',
                              '<18>{#p/papyrus}{#f/5}所以...',
                              '<18>{#p/papyrus}{#f/6}为了让这位身着盔甲的\n高大骑士进来，\n我把器材都搬到了外面。',
                              '<18>{#p/papyrus}{#f/4}随后，我们聊了天。',
                              '<18>{#p/papyrus}{#f/5}主题是...',
                              '<18>{#p/papyrus}{#f/6}...死亡。',
                              '<18>{#p/papyrus}{#f/6}我并不喜欢这个话题，\n但她很想找人倾诉。',
                              
                              '<18>{#p/papyrus}{#f/6}她说，\n自己活得太久了。',
                              '<18>{#p/papyrus}{#f/6}她说，\n自己目睹了无数人死去。',
                              '<18>{#p/papyrus}{#f/5}她还说...',
                              '<18>{#p/papyrus}{#f/3}...别的守卫们，\n全都...',
                              '<18>{#p/papyrus}{#f/31}...',
                              '<18>{#p/papyrus}{#f/5}我想让她开心点。',
                              "<18>{#p/papyrus}{#f/6}可是，不管怎么安慰，\nTERRESTRIA还是\n那么痛苦！",
                              '<18>{#p/papyrus}{#f/5}所以...',
                              '<18>{#p/papyrus}{#f/5}我闭上了嘴，\n紧紧抱住她。',
                              '<18>{#p/papyrus}{#f/6}这一抱，\n就是几个小时...',
                              "<18>{#p/papyrus}{#f/6}我都没想到，\n居然抱了那么久！！",
                              "<18>{#p/papyrus}{#f/5}后来，她走了。\n走之前，她说，\n“会挺过去的。”",
                              "<18>{#p/papyrus}{#f/4}我半信半疑。",
                              "<18>{#p/papyrus}{#f/5}但她既然那么说，\n我也不想刺探得太深，\n只能衷心祝福。",
                              '<25>{#p/sans}{#f/3}* 嗯...',
                              "<25>{#p/sans}{#f/0}* 她要是又需要帮助，\n  肯定会告诉你的。",
                              '<18>{#p/papyrus}{#f/5}但愿吧。'
                           ]);
                        }
                        addB([
                           '<18>{#p/papyrus}{#f/5}...',
                           "<18>{#p/papyrus}{#f/5}知道了你的所作所为，\n还有那些悲剧...\n我心里挺不好受的。",
                           "<18>{#p/papyrus}{#f/6}但这些，不全怪你。",
                           "<18>{#p/papyrus}{#f/6}皇家守卫的工作，\n就是“抓住人类”...",
                           "<18>{#p/papyrus}{#f/5}渐渐地，\n我明白了“抓住人类”\n这四个字代表什么。",
                           '<18>{#p/papyrus}{#f/5}明白了，身为守卫，\n就要履行职责，\n摧毁某些东西。',
                           '<18>{#p/papyrus}{#f/3}明白了... 这是战争，\n这是对抗。\n这是一件痛苦的事。',
                           '<18>{#p/papyrus}{#f/31}...',
                           "<18>{#p/papyrus}{#f/5}也许，从一开始\n我就不该想着当什么\n皇家守卫。",
                           '<18>{#p/papyrus}{#f/6}也许...\nUNDYNE那么做，\n就是为了保护我。',
                           "<18>{#p/papyrus}{#f/5}...我不知道，\n怎么面对“守卫”\n这个称号。",
                           "<25>{#p/sans}{#f/0}* 嘿，给人类讲讲\n  之后发生的故事吧。",
                           '<18>{#p/papyrus}{#f/6}哦对！！\n差点跑题了。',
                           '<18>{#p/papyrus}{#f/0}跟守卫的会面\n给我搞得特别累。',
                           "<18>{#p/papyrus}{#f/4}于是（别说我懒哦）...",
                           '<18>{#p/papyrus}{#f/4}回家后，我倒头就睡，\n睡了很久。'
                        ]);
                        if (!ddoggo || !dlesserdog || !ddogs || !dgreatdog || !dknightknight) {
                           addB([
                              '<18>{#p/papyrus}{#f/6}后来，我被一阵敲门声弄醒。',
                              '<18>{#p/papyrus}{#f/0}有人来我家找我。'
                           ]);
                        } else if (!ddoge || !droyalguards) {
                           addB([
                              '<18>{#p/papyrus}{#f/6}后来，\n我被一阵电话铃声吵醒。',
                              '<18>{#p/papyrus}{#f/0}有人打电话找我。'
                           ]);
                        } else {
                           addB([
                              '<19>{#p/papyrus}{#f/6}后来，又有人\n闪现到我的面前，\n把我惊醒。',
                              '<18>{#p/papyrus}{#f/0}这人来我家找我。'
                           ]);
                        }
                        addB([
                           '<18>{#p/papyrus}{#f/5}原来，是遇到了困难，\n想让我帮忙解开心结。',
                           '<18>{#p/papyrus}{#f/0}正好，\n我睡了一觉，精神百倍！',
                           '<18>{#p/papyrus}{#f/0}于是，我帮助了他。',
                           '<18>{#p/papyrus}{#f/4}第二天，\n又有人找我谈心。',
                           '<18>{#p/papyrus}{#f/5}第三天，\n增加到两个。',
                           '<18>{#p/papyrus}{#f/6}第四天，三个！\n第五天，五个！！\n第六天，七个！！！',
                           '<25>{#p/sans}{#f/2}* 第七天，十一个？',
                           '<18>{#p/papyrus}{#f/4}不。\n再往后，\n人数都是合数了。',
                           '<18>{#p/papyrus}{#f/6}无论谁来，\n我都会尽力帮助他！！',
                           '<18>{#p/papyrus}{#f/5}来的人越来越多，\n我就在想...',
                           "<18>{#p/papyrus}{#f/6}是时候进行\n产业化发展，\n做大做强了！！",
                           '<18>{#p/papyrus}{#f/9}所以，我把\n“看守人类灵魂”的工作\n交给了那名皇家守卫。',
                           '<18>{#p/papyrus}{#f/4}转而将工作重心\n转移到建设疗养公司上。',
                           
                           '<18>{#p/papyrus}{#f/0}我写了宣传语，\n买了几幢大楼，\n雇了些员工，创办公司。',
                           '<18>{#p/papyrus}{#f/0}名为“帕牌儒思”。',
                           '<18>{#p/papyrus}{#f/9}我们的宣传口号是：\n“我们多-费-心，\n 您才更-省-心！”',
                           '<25>{#p/sans}{#f/0}* 这口号真不错。',
                           '<18>{#p/papyrus}{#f/0}对了，SANS可是我们的\n前台接待员。',
                           "<18>{#p/papyrus}{#f/9}有他帮忙，\n我就能从容地服务\n每一位患者！",
                           '<18>{#p/papyrus}{#f/5}终于啊，我的兄弟\n也“伟大”起来了...',
                           "<18>{#p/papyrus}{#f/0}真为他骄傲！！",
                           '<25>{#p/sans}{#f/0}* 是啊，这公司的分工\n  很合咱俩的性格呢。',
                           '<18>{#p/papyrus}{#f/9}那肯定的！！！\n开了公司，新面孔\n简直多得应接不暇啊！！',
                           '<25>{#p/sans}{#f/2}* 嘿嘿嘿，“应接”不暇。',
                           "<18>{#p/papyrus}{#f/6}啊？！\n啥事把你乐成这样？",
                           '<25>{#p/sans}{#f/3}* 哦，没啥。',
                           "<18>{#p/papyrus}{#f/4}你真是一点没变。",
                           '<18>{#p/papyrus}{#f/5}...\n总之...',
                           "<18>{#p/papyrus}{#f/6}不管过去发生了什么...",
                           '<18>{#p/papyrus}{#f/5}我希望，有一天\n你也能找到自己的\n使命与梦想。',
                           '<18>{#p/papyrus}{#f/4}要是心情不好，\n想找人聊天...',
                           '<18>{#p/papyrus}{#f/6}就回个电话，\n我们肯定会...',
                           '<18>{#p/papyrus}{#f/4}...哦，原来如此。\n这双关挺逗，SANS。',
                           '<25>{#p/sans}{#f/2}* 嘿，你终于明白\n  我为啥{@fill=#ff0}接{@fill=#fff}话茬了。',
                           '<18>{#p/papyrus}{#f/7}总之，回个电话，\n我们肯定会接！！！'
                        ]);
                     } else {
                        k = 'dark_alphys_virtual'; // NO-TRANSLATE

                        addB([
                           "<18>{#p/papyrus}{#f/5}这段时间里，\n很多伙伴失踪了。",
                           "<18>{#p/papyrus}{#f/6}ASGORE，\n我俩经常一起分享故事，\n现在，他却失踪了...",
                           "<18>{#p/papyrus}{#f/6}UNDYNE，\n一直努力训练我，\n现在，她也失踪了...",
                           "<18>{#p/papyrus}{#f/5}还有那些皇家守卫，\n他们每次上班时，\n都会跟我打招呼。",
                           '<18>{#p/papyrus}{#f/5}现在，也失踪了...',
                           "<18>{#p/papyrus}{#f/5}曾经和他们共度\n那么多时光，可现在，\n却一个个都失踪了。",
                           "<18>{#p/papyrus}{#f/5}不知道他们什么时候\n才能回来。",
                           "<18>{#p/papyrus}{#f/7}我想他们，\n都快想疯了！！！",
                           "<18>{#p/papyrus}{#f/4}他们没有日程表吗？",
                           '<18>{#p/papyrus}{#f/6}他们不看日历吗？！',
                           "<18>{#p/papyrus}{#f/5}谁能告诉我，\n他们啥时候能回来啊！",
                           "<25>{#p/sans}{#f/3}* 嘿...",
                           '<25>{#p/sans}{#f/0}* 你想他们，我也想。',
'<25>{#p/sans}{#f/0}* 可也不能成天只盼着\n  他们回来，别的啥也不干啊。\n* 日子该过还得过。',
                           '<25>{#p/sans}{#f/2}* 跟人类聊点别的吧。',
                           '<18>{#p/papyrus}{#f/4}嗯...\n聊点别的...',
                           '<18>{#p/papyrus}{#f/0}哦！想到了！\n聊聊“档案”空间吧！',
                           '<25>{#p/sans}{#f/2}* 好主意。\n* 那里都快成你第二个家了。',
                           '<18>{#p/papyrus}{#f/9}我去那里，\n可是有正当理由的！',
                           '<18>{#p/papyrus}{#f/0}给你解释下\n最近我为啥总去吧。',
                           '<18>{#p/papyrus}{#f/4}每天，我除了看守灵魂，\n啥都不用干...',
                           '<18>{#p/papyrus}{#f/0}就一下子闲下来了。',
                           '<18>{#p/papyrus}{#f/4}我就在想，\n“怎么打发时间呢？”',
                           '<18>{#p/papyrus}{#f/0}有一天，我在一间\n储物柜里发现了一个...\n奇怪的装置。',
                           '<18>{#p/papyrus}{#f/5}我找到ALPHYS，\n问她，那东西是干啥的。',
                           '<18>{#p/papyrus}{#f/6}结果，她一下子\n打开了话匣子，\n叨叨个没完！！',
                           '<18>{#p/papyrus}{#f/0}简单说，\n那个装置是用来\n模拟虚拟空间的。',
                           '<18>{#p/papyrus}{#f/5}我问她，\n“咱们进虚拟空间，\n 体验一下，咋样？”',
                           '<18>{#p/papyrus}{#f/4}她看我挺无聊的，\n就同意了。',
                           "<18>{#p/papyrus}{#f/4}不过，由于没有加载\n虚拟世界资源包，\n“档案”里啥都没有。",
                           '<18>{#p/papyrus}{#f/0}于是...\nALPHYS下载了\n一部知名科幻番。',
                           '<18>{#p/papyrus}{#f/0}然后让系统根据它\n“生成”一个虚拟世界。',
                           '<18>{#p/papyrus}{#f/5}世界生成完毕后，\n她让我戴上一个\n奇怪的头盔...',
                           '<18>{#p/papyrus}{#f/6}我有点不敢戴，\n但为了科学，\n我还是照做了！！',
                           '<18>{#p/papyrus}{#f/4}突然...',
                           "<18>{#p/papyrus}{#f/9}我被传送到了一个\n从未见过的世界！！！",
                           '<18>{#p/papyrus}{#f/0}在那里，我畅游了\n好几个小时...',
                           '<18>{#p/papyrus}{#f/0}穿梭在行星之间，\n邂逅形形色色的人...',
                           "<18>{#p/papyrus}{#f/5}看到有人受伤，\n我也跟着难受。",
                           '<18>{#p/papyrus}{#f/9}虽然世界是假的，\n但情感是真的！',
                           '<18>{#p/papyrus}{#f/5}所以，我拼尽全力，\n拯救所有人。',
                           '<18>{#p/papyrus}{#f/0}后来，ALPHYS也来帮忙，\n一起拯救大家！',
                           "<18>{#p/papyrus}{#f/0}从那时起，\n我俩就总去虚拟空间\n一起冒险。",
                           "<25>{#p/sans}{#f/0}* 她好像现在就在那里呢。",
                           '<25>{#p/sans}{#f/2}* 你快过去看看。',
                           '<18>{#p/papyrus}{#f/9}好，我这就去！',
                           '<18>{#p/papyrus}{#f/0}对不起，人类！\n冒险不等骨啊！',
                           '<25>{#p/sans}{#f/3}* ...',
                           "<25>{#p/sans}{#f/3}* 挺好的。\n* 他把注意力转移到虚拟空间上，\n  就不用去想那些事了。",
                           "<25>{#p/sans}{#f/0}* 这段日子里，\n  很多民众过得并不好。",
                           '<25>{#p/sans}{#f/0}* 皇家卫队全军覆没，\n  能源供应也出了故障...',
                           '<25>{#p/sans}{#f/3}* 百姓生活很苦，\n  却没人可以倾诉。',
                           "<25>{#p/sans}{#f/0}* 即使他们想倾诉，\n  也鼓不起勇气开口...",
                           '<25>{#p/sans}{#f/3}* 没有勇气跟别人诉苦。',
                           '<25>{#p/sans}{#f/3}* ...'
                        ]);
                        if (hkills > 19) {
                           addB([
                              "<25>{#p/sans}{#f/3}* 许多民众都讨厌人类，\n  我并不意外。",
                              '<25>{#p/sans}{#f/0}* 你就算饶了我的兄弟...\n  也还是杀了许多怪物。',
                              '<25>{#p/sans}{#f/3}* 其中，有不少怪物身居要职，\n  对这里十分重要。'
                           ]);
                        } else {
                           addB([
                              "<25>{#p/sans}{#f/3}* 倒不是指责你，\n  说你是罪魁祸首。",
                              "<25>{#p/sans}{#f/0}* 你不仅饶恕了我兄弟，\n  也放过了不少其他怪物。",
                              '<25>{#p/sans}{#f/3}* 只是，对大家来说。\n  你杀的那几名守卫\n  都是很重要的人。'
                           ]);
                        }
                        addB([
                           '<25>{#p/sans}{#f/0}* ...虽然在主观上\n  我挺反感他们的行径...',
                           '<25>{#p/sans}{#f/0}* 但客观来讲，有皇家卫队，\n  民众确实心里更踏实，\n  更有安全感。',
                           "<25>{#p/sans}{#f/3}* 但现在，守卫没了，\n  大伙的安全感也没了。",
                           "<25>{#p/sans}{#f/3}* 呵，连mettaton也“失踪”了。",
                           '<25>{#p/sans}{#f/0}* 大家没节目可看了，\n  也没有周边可买了...',
                           '<25>{#p/sans}{#f/0}* 没了他，前哨站\n  也失去了不少活力。'
                        ]);
                        if (hkills > 19) {
                           addB([
                              "<25>{#p/sans}{#f/3}* 至于你，我就直说吧。",
                              '<25>{#p/sans}{#f/3}* 你根本不是啥好人。\n* 就这么简单。',
                              '<25>{#p/sans}{#f/0}* ...\n* 总之，我要挂电话了。',
                              '<25>{#p/sans}{#f/3}* 不好意思，孩子。',
                              '<25>{#p/sans}{#f/3}* ...'
                           ]);
                        } else {
                           addB([
                              "<25>{#p/sans}{#f/3}* 至于你，不太好评价。",
                              "<25>{#p/sans}{#f/3}* 你并不坏，\n  但我也不咋喜欢你。",
                              '<25>{#p/sans}{#f/0}* ...\n* 总之，我要挂电话了。',
                              '<25>{#p/sans}{#f/3}* 不好意思，孩子。',
                              '<25>{#p/sans}{#f/3}* 在太空飞行多注意安全。\n* 拜拜。'
                           ]);
                        }
                        addB(['<32>{#s/equip}{#p/event}* 滴...']);
                     }
                  } else {
                     if (!dtoriel) {
                        addB(['<25>{#p/sans}{#f/0}* 她不帮忙，\n  只能重新招人了。']);
                     } else {
                        addB(["<25>{#p/sans}{#f/0}* 我想了半天，\n  也没想到合适的人选..."]);
                     }
                     addB(['<25>{#p/sans}{#f/0}* ...于是，我们到处询问。\n  看有没有信得过的人\n  愿意接手这份工作。']);
                     if (!ddoggo) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了doggo...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  只有这名犬卫队成员\n  活了下来。',
                           '<25>{#p/sans}{#f/2}* 好在，他欣然接受了\n  这份工作。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说Doggo吗？'
                        ]);
                     } else if (!dlesserdog) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了\n  canis minor...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  只有这名犬卫队成员\n  活了下来。',
                           '<25>{#p/sans}{#f/2}* 好在，它欣然接受了\n  这份工作。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说Canis Minor吗？'
                        ]);
                     } else if (!ddogs) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了\n  dogamy和dogaressa...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  整个犬卫队，\n  只有他们活了下来。',
                           '<25>{#p/sans}{#f/2}* 好在，他们欣然接受了\n  这份工作。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说Dogamy和\n  Dogaressa吗？'
                        ]);
                     } else if (!dgreatdog) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了\n  canis major...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  只有这名犬卫队成员\n  活了下来。',
                           '<25>{#p/sans}{#f/2}* 好在，它欣然接受了\n  这份工作。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说Canis Major吗？'
                        ]);
                     } else if (!ddoge) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了doge...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  只有这名特战队成员\n  活了下来。',
                           '<25>{#p/sans}{#f/3}* 她整理好行装，\n  随即接下了这份工作。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说Doge吗？'
                        ]);
                     } else if (!droyalguards) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了一号守卫\n  和二号守卫...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  只有这两名巡逻官\n  活了下来。',
                           '<25>{#p/sans}{#f/3}* 他俩卸下了盔甲，\n  最终接下了这份工作。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说一号，二号吗？'
                        ]);
                     } else if (!dmadjick) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了cozmo...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  只有这名特战队成员\n  活了下来。',
                           '<25>{#p/sans}{#f/3}* 刚接下这份工作时，\n  他还挺困惑。\n* 但很快他就适应了。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说Cozmo吗？'
                        ]);
                     } else {
                        addB([
                           '<25>{#p/sans}{#f/3}* 很快，我们找到了terrestria...',
                           '<25>{#p/sans}{#f/0}* 皇家卫队惨遭剿杀，\n  只有这名特战队成员\n  活了下来。',
                           '<25>{#p/sans}{#f/3}* 正如我所料，\n  她心怀敬畏，\n  庄严地接受了这份工作。',
                           '<25>{#p/alphys}{#f/27}* 哦？\n* 你刚刚在说Terrestria吗？'
                        ]);
                     }
                     addB([
                        "<25>{#p/sans}{#f/0}* 哦，是alphys呀。\n* 我正给人类留言呢。",
                        '<25>{#p/alphys}{#f/17}* 行。\n* 之前你确实说\n  要给人类打个电话。'
                     ]);
                     if (!ddoggo) {
                        addB([
                           "<25>{#p/alphys}{#f/6}* 没错，\n  虽然Doggo有时会焦虑...",
                           '<25>{#p/alphys}{#f/8}* 但有我陪着他。\n* 以前，我帮过他，\n  所以他也安心了。'
                        ]);
                     } else if (!dlesserdog) {
                        addB([
                           '<25>{#p/alphys}{#f/6}* 没错。<25>{#p/alphys}{#f/6}* 虽然那狗狗脖子太长，\n  有时挺麻烦的...\n* 但它活干得不错。',
                           '<25>{#p/alphys}{#f/8}* 只要有人摸它，\n  没完没了地摸它，\n  它就心满意足。'
                        ]);
                     } else if (!ddogs) {
                        addB([
                           "<25>{#p/alphys}{#f/6}* 没错。\n* 那两只狗狗只要在一起，\n  就能把活干得很漂亮。",
                           '<25>{#p/alphys}{#f/8}* 他俩这么卖力，\n  各自想要的却是...\n  “一个人静静”。'
                        ]);
                     } else if (!dgreatdog) {
                        addB([
                           '<25>{#p/alphys}{#f/6}* 没错。\n* 那只大狗不仅接下了工作，\n  还干得特别起劲。',
                           '<25>{#p/alphys}{#f/8}* 它不求别的，\n  只求能多被“摸摸头”。'
                        ]);
                     } else if (!ddoge) {
                        addB([
                           "<25>{#p/alphys}{#f/6}* 没错。\n* Doge虽然有点冷血，\n  但对工作十分认真。",
                           '<25>{#p/alphys}{#f/8}* 因此，\n  我们总请她洗冷水澡。\n* 乍一听很怪，但确实合理。'
                        ]);
                     } else if (!droyalguards) {
                        addB([
                           '<26>{#p/alphys}{#f/6}* 没错。',
'<26>{#p/alphys}{#f/6}* 一号、二号他俩特别可爱。\n  而且没想到... \n  活还干的不错。',
                           '<25>{#p/alphys}{#f/8}* 看他俩工作那么卖力，\n  我总请他俩吃冰淇淋。\n* 他们特别爱吃。'
                        ]);
                     } else if (!dmadjick) {
                        addB([
                           "<25>{#p/alphys}{#f/6}* 没错。\n* 虽然它有时会“躁动”，\n  但活干得不错。",
                           '<25>{#p/alphys}{#f/8}* 因此，我们总奖励它\n  一些诗歌。\n* 它非常喜欢。'
                        ]);
                     } else {
                        addB([
                           "<25>{#p/alphys}{#f/6}* 没错。\n* 她... 干得非常出色。",
                           '<25>{#p/alphys}{#f/8}* 因此，我们总给它\n  唱安魂曲作为奖励。\n* 那些曲子能让她平静下来。'
                        ]);
                     }
                     addB([
                        "<25>{#p/sans}{#f/0}* 挺好的。\n* 工作安排得不错。",
                        "<25>{#p/sans}{#f/3}* 大家各司其职，各得其所。\n* 所有人都很幸福。",
                        '<25>{#p/sans}{#f/3}* ...',
                        '<25>{#p/sans}{#f/3}* 对，所有“人”都很幸福。',
                        '<25>{#p/alphys}{#f/15}* ...这...',
                        "<25>{#p/alphys}{#f/10}* 你俩聊吧。\n* 我先走了...",
                        '<25>{#p/sans}{#f/0}* 再等等，\n  我马上打完了。',
                        '<25>{#p/alphys}{#f/17}* ...哦。',
                        "<25>{#p/sans}{#f/3}* 对前哨站居民来说。\n* 活着，就是煎熬。",
                        '<25>{#p/sans}{#f/0}* 对我如此，\n  对alphys更是如此...',
                        '<25>{#p/sans}{#f/3}* ...对所有怪物，\n  都是如此。',
                        "<25>{#p/alphys}{#f/24}* 是啊。\n* 我们遭这些罪，\n  都是因为你。",
                        '<25>{#p/alphys}{#f/25}* 真吓人。\n* 区区一个小孩\n  居然能杀好几只怪物。'
                     ]);
                     if (hkills > 19) {
                        addB([
                           '<25>{#p/sans}{#f/3}* 那何止是\n  “好几只怪物”...',
                           '<25>{#p/sans}{#f/0}* 你杀的...\n  可是许多重要的大将。',
                           '<25>{#p/sans}{#f/0}* 他们的死，\n  沉重打击了大家的希望。',
                           '<25>{#p/sans}{#f/3}* ...而且，\n  你还杀了“他”...'
                        ]);
                     } else {
                        addB([
                           "<25>{#p/sans}{#f/3}* 平心而论，\n  你杀的怪不算多。",
                           '<25>{#p/sans}{#f/0}* 遇到那些守卫，\n  你很害怕，想自保，\n  我能理解。',
                           '<25>{#p/sans}{#f/0}* 而且，面对其他怪物时，\n  你也没有大开杀戒。',
                           '<25>{#p/sans}{#f/3}* ...话虽如此，\n  你还是杀了“他”...'
                        ]);
                     }
                     addB(['<25>{#p/sans}{#f/0}* 我敢说，\n  这事，你找不出任何借口。']);
                     if (
                        world.edgy ||
                        (world.population_area('s') <= 0 && !world.bullied_area('s')) // NO-TRANSLATE

                     ) {
                        addB([
                           '<25>{#p/sans}{#f/0}* 他只是想拉你一把，\n  让你迷途知返。',
                           '<25>{#p/sans}{#f/3}* 你却原形毕露，\n  把他撂倒。'
                        ]);
                     } else {
                        addB([
                           '<25>{#p/sans}{#f/0}* 他自始至终\n  从未想伤害你。',
                           '<25>{#p/sans}{#f/3}* 你却想直接要了他的命。'
                        ]);
                     }
                     addB([
                        "<25>{#p/sans}{#f/0}* 别想着装傻。\n* “他”是谁，你心知肚明。",
                        '<25>{#p/alphys}{#f/20}* 我也心知肚明。',
                        "<25>{#p/sans}{#f/3}* ...\n* 要是你能听到我的留言...",
                        "<25>{#p/sans}{#f/0}* 希望你能知道\n  你给这里带来了\n  多少痛苦。",
                        '<25>{#p/sans}{#f/0}* asgore死了，undyne死了。\n* 守卫死了。\n* mettaton死了。',
                        '<25>{#p/sans}{#f/3}* ...我的心也死了。',
'<25>{#p/sans}{#f/3}* 挂电话吧。',
                        '<32>{#s/equip}{#p/event}* 滴...'
                     ]);
                  }
               } else if (SAVE.data.n.state_wastelands_toriel !== 0 && SAVE.data.n.kills_wastelands < 16) {
                  k = 'dark_mew'; // NO-TRANSLATE

                  m = music.gameshow;
                  
                  addA([
                     '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                     '<25>{#p/sans}{#f/0}* 你好呀。',
                     '<25>{#p/sans}{#f/4}* 喂，有人吗？',
                     "<25>{#p/sans}{#f/2}* 没人？\n* 那我就留个言吧。"
                  ]);
                  addB([
                     '<25>{#p/sans}{#f/0}* 在你走后，\n  坏事一件接一件。',
                     '<25>{#p/sans}{#f/3}* asgore死了，\n  undyne死了...',
                     '<25>{#p/sans}{#f/0}* 更糟的是，\n  mettaton那扯淡的计划\n  让核心陷入停摆。',
                     '<25>{#p/sans}{#f/3}* 能量供应失控，\n  许多民众因此丧命。',
                     '<25>{#p/sans}{#f/3}* 连“档案”里的人类\n  都没能幸免于难。',
'<25>{#p/sans}{#f/3}* 容器遭受电击，\n  他们当场丧命。',
                     '<25>{#p/sans}{#f/0}* 简单讲讲后续。',
'<25>{#p/sans}{#f/0}* 我和alphys把灵魂\n  转移到安全的地方。',
                     '<25>{#p/sans}{#f/3}* 容器防碎不防偷，\n  谁来看着灵魂呢？',
                     '<25>{#p/sans}{#f/0}* 思来想去...',
                     '<25>{#p/sans}{#f/0}* 唯一合适的人选...\n  是一位特战队退伍兵。',
                     '<25>{#p/sans}{#f/3}* 本来，\n  招它来是想帮点忙，\n  哪成想竟然“引狼入室”。',
                     '<25>{#p/sans}{#f/0}* 趁我们不在时...',
                     '<25>{#p/sans}{#f/3}* 它偷偷把灵魂都吸了。',
                     '<25>{#p/sans}{#f/3}* 借助灵魂之力，它从人偶\n  变身为《喵喵星火》的\n  英雄喵喵。',
                     '<25>{#p/sans}{#f/0}* 《喵喵星火》可是\n  整个喵喵系列\n  最棒的电影。',
                     "<25>{#p/sans}{#f/2}* 我哪敢说它不好啊，\n  我可不想丢掉小命。",
                     '<25>{#p/sans}{#f/0}* 总之，你看。\n* 我们的生活是多么幸福啊！',
                     '<25>{#p/sans}{#f/0}* 人们根本不用工作，\n  只要自愿地玩耍。',
                     "<25>{#p/sans}{#f/0}* 没有剥削，没有压迫。\n* ...一切都是“自愿”的。",
                     '<25>{#p/sans}{#f/3}* 连游戏也是公平的，\n  绝对公平。',
                     "<25>{#p/sans}{#f/0}* 这话千真万确，\n  就是真理。",
                     "<25>{#p/sans}{#f/0}* 就算喵喵想让游戏\n  不公平...",
                     "<25>{#p/sans}{#f/3}* 也有一股力量...",
                     "<25>{#p/sans}{#f/3}* 一股在她体内，\n  无形的力量去阻止她。",
                     '<25>{#p/sans}{#f/0}* 她会犹豫，会退缩。\n* 最终，一切重回正轨。',
                     '<25>{#p/sans}{#f/0}* 有一次...',
                     "<25>{#p/sans}{#f/3}* 喵喵叫我们玩个“决斗游戏”。\n  相互决斗，揍死出局，\n  没死就继续打，打死为止。",
                     '<25>{#p/sans}{#f/0}* 但是...\n* 比赛前夕，喵喵突然\n  改了主意。',
                     '<25>{#p/sans}{#f/3}* 不用非得打死，\n  只要打到失去知觉，\n  就能出局。',
                     '<25>{#p/sans}{#f/3}* 所以，我想...',
                     "<25>{#p/sans}{#f/2}* 除了野心和力量，\n  人类灵魂还给了她\n  某种“别的东西”。",
                     '<25>{#p/sans}{#f/0}* 也许... 那些人类灵魂\n  并未彻底沉睡？',
                     "<25>{#p/alphys}{#f/17}* 呃，打个岔，\n  到你了。",
                     '<25>{#p/sans}{#f/0}* 啥？',
                     "<25>{#p/alphys}{#f/18}* 该你上场决斗了！",
                     '<25>{#p/sans}{#f/3}* ...行。',
                     
                     '<25>{#p/sans}{#f/0}* 看来不能拖了。',
                     '<25>{#p/alphys}{#f/6}* 还是早点出发吧。',
                     '<25>{#p/alphys}{#f/23}* 大伙都等着你呢。',
                     '<25>{#p/sans}{#f/0}* 走之前，还有一件事。',
                     '<25>{#p/sans}{#f/0}* 收到消息的话，\n  告诉其他人类...',
                     '<25>{#p/sans}{#f/3}* 不要靠近这里！',
                     "<25>{#p/sans}{#f/3}* 我有预感，\n  “喵喵”正在准备一场\n  恐怖行动。",
                     '<25>{#p/sans}{#f/0}* 她要是得逞，\n  整个星系都会遭殃。',
                     "<25>{#p/sans}{#f/2}* ...只是提醒一下。",
                     "<25>{#p/alphys}{#f/23}* 快点，走啦！",
                     "<25>{#p/sans}{#f/0}* 出发。",
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]);
               } else {
                  k = 'dark_charles'; // NO-TRANSLATE

                  m = music.letsmakeabombwhydontwe;
                  
                  addA([
                     '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                     '<25>{#p/sans}{#f/0}* 你好呀。',
                     '<25>{#p/sans}{#f/4}* 喂，有人吗？',
                     "<25>{#p/sans}{#f/2}* 没人？\n* 那我就留个言吧。"
                  ]);
                  addB([
                     "<25>{#p/sans}{#f/0}* 在你走后，一开始，\n  这里还不是“天堂”。",
                     '<25>{#p/sans}{#f/3}* asgore死了，\n  undyne死了...',
                     '<25>{#p/sans}{#f/0}* 更糟的是，\n  mettaton那扯淡的计划\n  让核心陷入停摆。',
                     '<25>{#p/sans}{#f/3}* 能量供应失控，\n  许多民众因此丧命。',
                     '<25>{#p/sans}{#f/3}* 连“档案”里的人类\n  都没能幸免于难。',
'<25>{#p/sans}{#f/3}* 容器遭受电击，\n  他们当场丧命。',
                     '<25>{#p/sans}{#f/0}* 简单讲讲后续。',
'<25>{#p/sans}{#f/0}* 我和alphys把灵魂\n  转移到安全的地方。',
                     '<25>{#p/sans}{#f/4}* 容器防碎不防偷，\n  谁来看着灵魂呢？',
                     '<25>{#p/sans}{#f/0}* 我们狂打电话，\n  结果，只有某只小老鼠\n  接下了这活。',
                     '<25>{#p/sans}{#f/2}* 老鼠名叫charles，是核心员工。\n* 工作这么久，从没出过错。',
                     '<25>{#p/sans}{#f/0}* 结果...',
                     '<25>{#p/sans}{#f/0}* 成天在核心打工，\n  都染上职业病了。',
                     '<25>{#p/sans}{#f/0}* 每天，\n  拆电池，装电池，\n  拆电池，装电池...',
                     '<25>{#p/sans}{#f/3}* 只是这次电池\n  变成了人类灵魂。',
                     '<25>{#p/sans}{#f/0}* 结果自然是，\n  拆“人类灵魂”，\n  然后，装“人类灵魂”。',
                     '<25>{#p/sans}{#f/3}* ...所以，charles肯定是\n  工作得太认真了，\n  才把灵魂装到了自己身上。',
                     '<25>{#p/sans}{#f/3}* 哎呀哎呀，\n  你是不是在想...',
                     '<25>{#p/sans}{#f/0}* “太惨了！”\n* “没了灵魂，咋逃出去呢？”',
                     '<25>{#p/sans}{#f/0}* 可我们为什么要逃出去呢？',
                     "<25>{#p/sans}{#f/2}* charles就是神，\n  有了神的帮助，\n  我们想要啥，就有啥。",
                     '<18>{#p/papyrus}{#f/0}你好，人类！\n是我，伟大的PAPYRUS！',
                     '<18>{#p/papyrus}{#f/6}你不会以为，\n我死了吧？！',
                     "<18>{#p/papyrus}{#f/7}...呸，真是扯淡！\n我可是长生不老的\nPAPYRUS！",
                     '<18>{#p/papyrus}{#f/4}尊敬的CHARLES陛下\n又把我带回来了！',
                     '<18>{#p/papyrus}{#f/9}陛下真是\n太伟大了！！！',
                     "<25>{#p/sans}{#f/3}* ...你瞧，我们多幸福啊！\n* 这么快乐的世界，\n  怎么可能有苦难呢？",
                     '<25>{#p/sans}{#f/2}* 谁还稀罕离开前哨站呢？',
                     "<18>{#p/papyrus}{#f/0}对啊，干嘛要离开呢？\n几颗破星星，\n有啥好看的呢？！",
                     "<18>{#p/papyrus}{#f/9}这里就是天堂！\n就是极乐世界！\n去哪都比不上这里快乐！",
                     '<25>{#p/sans}{#f/2}* 太对了。',
                     '<25>{#p/sans}{#f/0}* ...总之，\n  谢谢你，让这里变成天堂。',
                     '<25>{#p/sans}{#f/0}* 要是在外面飞累了...',
                     "<25>{#p/sans}{#f/3}* 这里就是你的家。",
                     '<18>{#p/papyrus}{#f/0}对呀！快来这里\n体验极乐生活吧！\n简直爽死了！',
                     '<25>{#p/sans}{#f/2}* 嘿。\n* 但愿吧。',
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]);
               }
            } else {
               
               k = 'dark_generic'; // NO-TRANSLATE

               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<25>{#p/sans}{#f/0}* 你好呀。',
                  "<25>{#p/sans}{#f/3}* 近况可好？"
               ]);
               addB([
                  '<25>{#p/sans}{#f/0}* 在你走后，\n  alphys... 吓得不轻。',
                  '<25>{#p/sans}{#f/0}* asgore死了，\n  undyne死了...',
                  '<25>{#p/sans}{#f/0}* 更糟的是，\n  mettaton那扯淡的计划\n  让核心陷入停摆。',
                  "<26>{#p/sans}{#f/3}* 好在，\n  皇家卫队火速赶往总控室，\n  稳住了核心。",
                  '<25>{#p/sans}{#f/0}* 与此同时，\n  alphys给我打了电话，\n  让我一起帮忙。',
                  "<25>{#p/sans}{#f/3}* 我赶了过去。\n* 那时，她的精神很不稳定。",
                  '<25>{#p/sans}{#f/0}* 但我相信，\n  她肯定能挺过去的。',
                  '<25>{#p/sans}{#f/2}* 毕竟我俩之前可是研究搭档，\n  我了解她。',
                  '<25>{#p/sans}{#f/0}* 所以，我坐在她身旁陪伴她。\n* 发生这些事，\n  她也需要时间慢慢恢复。',
                  "<26>{#p/sans}{#f/3}* 最终，她振作起来。\n  接任了asgore的王位。",
                  '<25>{#p/sans}{#f/0}* ...渐渐地，\n  风波平息了下来。',
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* Sans，我俩想去游泳，\n  可以陪我们去吗？',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 你要是忙，\n  我俩自己去也行...",
                  "<25>{#p/sans}{#f/0}* 哇哦，\n  今天你俩挺兴奋嘛。",
                  "<25>{#p/sans}{#f/3}* 好呀。\n* 等我打完电话，咱们就出发。",
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* 说话算话哦。',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 好耶！',
                  '<25>{#p/alphys}{#f/10}* 啊，对-对不起...',
                  '<25>{#p/alphys}{#f/20}* 我一会... \n  得去皇家防卫署开个会，\n  让Sans叔叔陪你们玩吧。',
                  "<25>{#p/alphys}{#f/6}* 孩子们，过来，\n  别打扰他打电话哦。",
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* 好的。',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* Sans，对不起，\n  影响你打电话了...",
                  "<25>{#p/sans}{#f/2}* 嘿。别上火嘛。\n* 再过亿小会，我就打完了。",
                  '<25>{#p/sans}{#f/0}* ...',
                  '<25>{#p/sans}{#f/0}* alphys当上女王后，\n  制定了一些改革政策。',
                  '<25>{#p/sans}{#f/0}* 比如，解散皇家卫队。\n  重组为“皇家防卫署”。',
                  '<25>{#p/sans}{#f/0}* 相比皇家卫队，\n  防卫署不再“唯武力”论，\n  而是更注重使用科技。',
                  "<25>{#p/sans}{#f/3}* 有的成员配备了新型面罩，\n  有的配备了长程追踪仪...",
                  '<25>{#p/sans}{#f/2}* 有了这些装备，就能\n  第一时间发现坠落的孩子，\n  将其安全护送到首塔。'
               ]);
               if (!dpapyrus) {
                  addB([
                     "<25>{#p/sans}{#f/0}* 有趣的是，连papyrus\n  都是防卫署的一员。",
                     "<25>{#p/sans}{#f/3}* 他领导着一个小分队，\n  专门照顾那几个..."
                  ]);
               } else {
                  addB([
                     '<25>{#p/sans}{#f/0}* 而原皇家卫队的队员们...',
                     '<25>{#p/sans}{#f/3}* 则组建起一支小分队，\n  专门照顾那几个...'
                  ]);
               }
               addB([
                  '<25>{#p/sans}{#f/3}* ...最闹腾的孩子。',
                  '<26>{#p/sans}{#f/0}* 现在聊聊你。',
'<26>{#p/sans}{#f/0}* 你在前哨站的这段时间，\n  我们搜集到不少\n  有价值的数据。',
                  "<25>{#p/sans}{#f/0}* 防卫署分配了专人，\n  每天分析你的数据。",
                  '<25>{#p/sans}{#f/3}* 这样，怪物们就能\n  了解这类人的行事风格，\n  从而挖掘其弱点。',
                  "<25>{#p/sans}{#f/2}* 我们希望，\n  永远都不会用上这些数据。",
                  '<25>{#p/sans}{#f/0}* 但... 就怕万一。'
               ]);
               if (!dpapyrus) {
                  addB([
                     '<18>{#p/papyrus}{#f/0}嘿，SANS！\n最近忙啥呢？',
                     '<26>{#p/sans}{#f/3}* 呃，没啥。',
                     '<26>{#p/sans}{#f/0}* 你来休息吗？',
                     '<18>{#p/papyrus}{#f/9}当然了！',
                     "<18>{#p/papyrus}{#f/5}PAPYRUS的休息时间\n非常有限...",
                     '<18>{#p/papyrus}{#f/0}所以，我想珍惜这些\n休息时光。',
                     '<26>{#p/sans}{#f/3}* 嗯...',
                     '<25>{#p/sans}{#f/2}* 是不是alphys让你休息的？',
                     '<18>{#p/papyrus}{#f/4}...',
                     "<18>{#p/papyrus}{#f/4}她强迫我休息，\n我也没办法啊。",
                     '<18>{#p/papyrus}{#f/0}好，\n休息时间结束。',
                     '<18>{#p/papyrus}{#f/9}回去继续工作！',
                     '<25>{#p/sans}{#f/0}* 啊？\n* 兄弟，再待一会呗。\n  好不容易来一次。',
                     '<18>{#p/papyrus}{#f/6}再浪费时间，\n我就要错过\n下一个人类了！！',
                     "<25>{#p/sans}{#f/3}* ...嗯，也是。",
                     "<25>{#p/sans}{#f/0}* 只是，别把自己搞太累了。"
                  ]);
               }
               addB(['<25>{#p/sans}{#f/0}* ...']);
               if (!dtoriel) {
                  if (!dpapyrus) {
                     addB([
                        '<25>{#p/sans}{#f/3}* 而最近，\n  alphys终于闲了下来。',
                        '<25>{#p/sans}{#f/0}* 王后重新上任，\n  帮忙一起照顾那些孩子。',
                        
                     ]);
                  } else {
                     addB([
                        '<25>{#p/sans}{#f/3}* 最起码，跟你比起来，\n  那几个孩子都挺酷的。',
                        '<25>{#p/sans}{#f/0}* 呵。\n* 王后重新上任后，\n  还帮忙一起照顾他们呢。',
                        
                     ]);
                  }
                  addB([
                     '<25>{#p/sans}{#f/3}* 至今，王后还是没能原谅\n  asgore...',
                     "<25>{#p/sans}{#f/0}* 也许假以时日，\n  矛盾会最终解开。",
                     "<25>{#p/sans}{#f/0}* 但我知道...",
                     "<25>{#p/sans}{#f/3}* 有个人，\n  她这辈子都不会原谅。"
                  ]);
               } else {
                  if (!dpapyrus) {
                     addB(["<25>{#p/sans}{#f/3}* 最起码，他很开心，\n  干起活了，他能乐在其中。"]);
                     if (hkills > 19) {
                        addB(['<25>{#p/sans}{#f/0}* 但很多怪物可没有\n  他的福分。']);
                     } else {
                        addB(['<25>{#p/sans}{#f/0}* 但不少怪物可没有\n  他的福分。']);
                     }
                  } else {
                     addB(["<25>{#p/sans}{#f/3}* 你知道吗？\n* 在这里活着\n  越来越孤独了。"]);
                     if (hkills > 19) {
                        addB(['<25>{#p/sans}{#f/0}* 不只是我，\n  很多很多人，都非常孤独。']);
                     } else {
                        addB([
                           '<25>{#p/sans}{#f/0}* 不是谁都有福分\n  家庭圆满，正常生活。'
                        ]);
                     }
                  }
               }
               addB([
                  "<25>{#p/alphys}{#f/20}* S-sans，对不起。\n* 你赶紧带孩子们去游泳吧。",
                  "<25>{#p/alphys}{#f/3}* 这些孩子都快把我\n  折磨疯了。",
                  '<25>{#p/sans}{#f/3}* 那...',
                  "<25>{#p/sans}{#f/0}* 剩下的话，就让alphys说吧。",
                  '<25>{#p/alphys}{#f/27}* 剩下的话？\n  谁啊？',
                  '<25>{#p/alphys}{#f/21}* ...',
                  "<25>{#p/alphys}{#f/21}* 原来是你。",
                  '<25>{#p/alphys}{#f/24}* 嗯。\n* 之前Sans说想给你打通电话。',
                  "<25>{#p/alphys}{#f/25}* 但我跟你可没啥好说的。"
               ]);
               if (hkills > 19) {
                  addB(["<25>{#p/alphys}{#f/25}* 你个杀人狂，\n  你个懦夫，\n  早点死得了。"]);
                  if (!dpapyrus) {
                     addB(['<25>{#p/alphys}{#f/24}* 就算你做了点好事...']);
                  } else {
                     addB(['<25>{#p/alphys}{#f/24}* 而且你差劲到...']);
                  }
               } else {
                  addB(["<25>{#p/alphys}{#f/25}* 诚然，你没杀多少人，\n  但我还是烦你。"]);
                  if (!dpapyrus) {
                     addB(['<25>{#p/alphys}{#f/24}* 诚然，你确实做了点好事...']);
                  } else {
                     addB(['<25>{#p/alphys}{#f/24}* 最差劲的是，你还...']);
                  }
               }
               if (!dpapyrus) {
                  addB([
                     "<25>{#p/alphys}{#f/25}* 但也不够赎罪的。",
                     '<25>{#p/alphys}{#f/24}* ...',
                     '<25>{#p/alphys}{#f/24}* 谨代表前哨站所有居民...'
                  ]);
               } else {
                  addB([
                     '<25>{#p/alphys}{#f/25}* 把我挚友的亲兄弟杀了。',
                     '<25>{#p/alphys}{#f/24}* ...',
                     '<25>{#p/alphys}{#f/24}* 就让我代他...'
                  ]);
               }
               addB([
                  '<25>{#p/alphys}{#f/16}* 衷心祝愿你，\n  掉进黑洞，死无全尸！',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]);
            }
         } else if (SAVE.data.b.ubershortcut || world.bad_lizard > 1) {
            k = 'dark_aborted'; // NO-TRANSLATE

            
            if (dmettaton) {
               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<32>{#p/napstablook}* 嘿',
                  '<32>{#p/napstablook}* 有人接吗？',
                  "<32>{#p/napstablook}* i think... there's something i need to tell you.",
                  "<32>{#p/napstablook}* if it's not too much trouble."
               ]);
               addB([
                  '<32>{#p/napstablook}* so, even before you left the outpost...',
                  '<32>{#p/napstablook}* things were already going downhill for me',
                  '<32>{#p/napstablook}* people were dead... others were hurt, or scared...',
                  '<32>{#p/napstablook}* and then...... when mettaton died during his grand finale, i......',
                  "<32>{#p/napstablook}* .........\n* i didn't know what to do",
                  '<32>{#p/napstablook}* it felt like... my whole world came crashing down......',
                  '<32>{#p/napstablook}* and all i could do......... was watch it happen............',
                  '<32>{#p/napstablook}* ...............',
                  '<32>{#p/napstablook}* as it turns out, though, a lot of people felt the same way.',
                  '<32>{#p/napstablook}* and all of us who did formed a support group for fans of mettaton.',
                  '<32>{#p/napstablook}* remember his last words?',
                  '<32>{#p/napstablook}* \"you\'ll realize not everything\'s going to go your way!\"',
                  '<32>{#p/napstablook}* ... of course, he was wrong.',
                  '<32>{#p/napstablook}* you escaped, and got away with what you did.',
                  "<32>{#p/napstablook}* even king asgore couldn't stop you.",
                  "<32>{#p/napstablook}* but those nine words... became our group's mantra.",
                  '<32>{#p/napstablook}* we became united in our dislike for you, and what you got away with.',
                  "<32>{#p/napstablook}* you're not just a human who did some bad things.",
                  "<32>{#p/napstablook}* you're an interloper who spat in the face of our way of life."
               ]);
               if (!dundyne) {
                  addB([
                     '<32>{#p/napstablook}* the new queen, undyne, would agree with us.',
                     '<32>{#p/napstablook}* ... she took over after asgore disappeared.',
                     "<32>{#p/napstablook}* it's not like she was the biggest fan of mettaton, but...",
                     '<32>{#p/napstablook}* she definitely got behind what he said in the end.'
                  ]);
                  if (!dtoriel) {
                     addB([
                        '<32>{#p/napstablook}* heh...... when toriel returned and begged undyne to defend you......',
                        '<32>{#p/napstablook}* she got laughed all the way back to the outlands.',
                        '<32>{#p/napstablook}* ... people are pretty much united in their dislike for you now.'
                     ]);
                  } else {
                     addB(['<32>{#p/napstablook}* just like everyone else does nowadays.']);
                  }
               } else if (!dtoriel) {
                  addB([
                     '<32>{#p/napstablook}* the new queen, toriel, might disagree with us.',
                     '<32>{#p/napstablook}* ... she took over after asgore disappeared.',
                     "<32>{#p/napstablook}* it's not like she was against what mettaton said, but...",
                     '<32>{#p/napstablook}* she seemed to have a stubborn soft spot for humanity.',
                     "<32>{#p/napstablook}* .........\n* honestly, it's fine.",
                     "<32>{#p/napstablook}* it hasn't stopped people from being united in their dislike for you."
                  ]);
               } else {
                  addB([
                     '<32>{#p/napstablook}* eventually, our group noticed that asgore had yet to be replaced',
                     '<32>{#p/napstablook}* so...... one of our own members suggested we take the throne ourselves.',
                     '<32>{#p/napstablook}* as the \"face\" of the group, i was appointed as the outpost\'s official leader...',
                     '<32>{#p/napstablook}* but, in reality... we all kind of make decisions together.',
                     "<32>{#p/napstablook}* it's pretty cool, actually.",
                     '<32>{#p/napstablook}* a little weird having all these people look up to me, but......',
                     '<32>{#p/napstablook}* at least none of us have to do this thing alone.'
                  ]);
               }
               addB([
                  '<32>{#p/napstablook}* anyway, i just wanted you to know......',
                  "<32>{#p/napstablook}* i'm fine now.",
                  '<32>{#p/napstablook}* better than fine, in fact.',
                  "<32>{#p/napstablook}* because, what you did... didn't hurt us.",
                  '<32>{#p/napstablook}* it only made us stronger.',
                  '<32>{#p/napstablook}* and one day... when we all escape from the outpost......',
                  '<32>{#p/napstablook}* .........',
                  "<32>{#p/napstablook}* our group vows to hunt you down and make sure you pay for what you've done.",
                  '<32>{#p/napstablook}* heh......',
                  '<32>{#p/napstablook}* ......\n* i hope you die a painful death',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]);
            } else {
               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<32>{#p/mettaton}* EXCUSE ME, HUMAN...',
                  "<32>{#p/mettaton}* THERE'S A FEW THINGS I'D LIKE TO SAY TO YOU.",
                  '<32>{#p/mettaton}* ARE YOU THERE?',
                  "<32>{#p/mettaton}* ... I GUESS IT'LL BE A MESSAGE, THEN."
               ]);
               if (SAVE.data.b.ubershortcut) {
                  addB([
                     "<32>{#p/mettaton}* TO START, I'LL SAY THAT I -AM- HAPPY YOU FOLLOWED ALPHYS'S INSTRUCTIONS.",
                     '<32>{#p/mettaton}* AVOIDING UNDYNE, AND A LARGE PART OF AERIALIS...?',
                     '<32>{#p/mettaton}* IT SAVED BOTH HER AND MYSELF A LOT OF POTENTIAL HEADACHE.'
                  ]);
               } else if (royals < 4 && hkills > 19) {
                  addB([
                     "<32>{#p/mettaton}* TO BE HONEST, I'M NOT SURE WHERE TO BEGIN.",
                     '<32>{#p/mettaton}* YOU KILLED CITIZENS, YOU KILLED ROYAL GUARDS...',
                     '<32>{#p/mettaton}* YOU WERE INDISCRIMINATE IN YOUR KILLING.',
                     '<32>{#p/mettaton}* I -DO- APPRECIATE THAT YOUR BEHAVIOR IMPROVED LATER ON...'
                  ]);
               } else if (royals < 4) {
                  addB([
                     "<32>{#p/mettaton}* LET'S GET ONE THING STRAIGHT.",
                     '<32>{#p/mettaton}* YOU OUTRIGHT -SLAUGHTERED- THE ROYAL GUARD.',
                     '<32>{#p/mettaton}* YOU WERE SOMEWHAT MORE MERCIFUL TOWARDS REGULAR CITIZENS...',
                     '<32>{#p/mettaton}* AND YOUR BEHAVIOR DID IMPROVE AFTER MY WARNING...'
                  ]);
               } else if (hkills > 19) {
                  addB([
                     "<32>{#p/mettaton}* LET'S GET ONE THING STRAIGHT.",
                     '<32>{#p/mettaton}* WHEN IT CAME TO CITIZENS, YOU SHOWED -NO- REMORSE.',
                     '<32>{#p/mettaton}* YOU WERE SOMEWHAT MORE MERCIFUL TOWARDS THE ROYAL GUARD...',
                     '<32>{#p/mettaton}* AND YOUR BEHAVIOR DID IMPROVE AFTER MY WARNING...'
                  ]);
               } else {
                  addB([
                     "<32>{#p/mettaton}* TO START, I'LL ADMIT YOU WEREN'T AS BAD AS I FIRST THOUGHT.",
                     '<32>{#p/mettaton}* YOU SPARED MANY OF THE ROYAL GUARDS, AND A FAIR FEW CITIZENS, TOO.',
                     '<32>{#p/mettaton}* NOT TO MENTION HOW YOU IMPROVED YOUR BEHAVIOR AFTER MY WARNING.'
                  ]);
               }
               addB(["<32>{#p/mettaton}* BUT DON'T THINK FOR A SECOND THAT IT EXCUSES ANYTHING OTHERWISE."]);
               if (SAVE.data.b.ubershortcut) {
                  addB([
                     '<32>{#p/mettaton}* SINCE ASGORE DISAPPEARED, ALPHYS HAS HAD HER HANDS FULL AS THE QUEEN.',
                     '<32>{#p/mettaton}* I WAS SURPRISED TO SEE HER TAKE ON THE ROLE, BUT...',
                     '<32>{#p/mettaton}* I GUESS HER SUCCESS IN ESCORTING YOU BOOSTED HER CONFIDENCE.',
                     "<32>{#p/mettaton}* STILL, IT HASN'T BEEN EASY.",
                     "<32>{#p/mettaton}* EVER SINCE SHE GUIDED YOU TO SAFETY, UNDYNE'S BEEN QUITE UPSET AT HER.",
                     '<32>{#p/mettaton}* THE INCUMBENT GUARD CAPTAIN QUESTIONS HER EVERY DECISION, GIVING HER DOUBTS.',
                     '<32>{#p/mettaton}* AND WHILE SHE STILL BELIEVES YOU TO BE REDEEMABLE...',
                     '<32>{#p/mettaton}* THE PEOPLE WANT HUMANS DEAD.'
                  ]);
                  if (!dtoriel) {
                     addB([
                        "<32>{#p/mettaton}* EVEN THE FORMER QUEEN TORIEL COULDN'T CHANGE THEIR MINDS UPON HER RETURN.",
                        '<32>{#p/mettaton}* BY THEN, ALPHYS HAD LOST HER APPETITE FOR POLITICS.'
                     ]);
                  }
               } else if (!dundyne) {
                  addB([
                     '<32>{#p/mettaton}* SINCE ASGORE DISAPPEARED, UNDYNE HAS HAD HER HANDS FULL AS THE QUEEN.',
                     '<32>{#p/mettaton}* AND ALPHYS?\n* WELL, SHE -WAS- SUPPOSED TO BE THE NEXT IN LINE...',
                     "<32>{#p/mettaton}* BUT I DON'T BLAME HER FOR RUNNING OFF.",
                     "<32>{#p/mettaton}* THE PEOPLE WANT HUMANS DEAD.\n* AND, FRANKLY, THEY'RE MORE THAN JUSTIFIED."
                  ]);
                  if (!dtoriel) {
                     addB([
                        "<32>{#p/mettaton}* EVEN THE FORMER QUEEN TORIEL COULDN'T CHANGE THEIR MINDS UPON HER RETURN.",
                        "<32>{#p/mettaton}* LET ALONE UNDYNE'S."
                     ]);
                  }
               } else if (!dtoriel) {
                  addB([
                     '<32>{#p/mettaton}* SINCE ASGORE DISAPPEARED, TORIEL HAS HAD HER HANDS FULL AS THE QUEEN.',
                     '<32>{#p/mettaton}* AND ALPHYS?\n* WELL, SHE -WAS- SUPPOSED TO BE THE NEXT IN LINE...',
                     "<32>{#p/mettaton}* BUT I DON'T BLAME HER FOR RUNNING OFF.",
                     "<32>{#p/mettaton}* THE PEOPLE WANT HUMANS DEAD.\n* AND, FRANKLY, THEY'RE MORE THAN JUSTIFIED.",
                     "<32>{#p/mettaton}* EVEN TORIEL HERSELF COULDN'T CONVINCE THEM TO CALM DOWN.\n* BELIEVE ME, SHE TRIED."
                  ]);
               } else {
                  addB([
                     '<32>{#p/mettaton}* SINCE ASGORE DISAPPEARED, THINGS HAVE GOTTEN WORSE BY THE DAY.',
                     '<32>{#p/mettaton}* ALPHYS WAS SUPPOSED TO TAKE OVER FOR HIM, BUT SHE RAN OFF.',
                     '<32>{#p/mettaton}* DO I BLAME HER?\n* NOT AT ALL.',
                     '<32>{#p/mettaton}* BUT IT MEANT I HAD NO CHOICE EXCEPT TO TAKE OVER MYSELF.',
                     '<32>{#p/mettaton}* I HAVE MIXED FEELINGS ABOUT HUMANS, AFTER DISCOVERING THE ARCHIVE...',
                     '<32>{#p/mettaton}* BUT THE PEOPLE ARE COMPLETELY JUSTIFIED IN FEELING THE WAY THEY DO ABOUT YOU.'
                  ]);
               }
               addB([
                  "<32>{#p/mettaton}* YOUR ACTIONS PROVED THAT, NO MATTER HOW MUCH I'D LIKE TO BELIEVE IN HUMANITY...",
                  "<32>{#p/mettaton}* THERE WILL ALWAYS BE THOSE OF YOU OUT THERE WHO DON'T DESERVE THAT BELIEF.",
                  "<32>{#p/mettaton}* AND THAT'S THE BIGGEST SHAME OF THEM ALL.",
                  "<32>{#p/mettaton}* HUMANS AND MONSTERS SHOULDN'T HAVE TO BE AT ODDS.",
                  '<32>{#p/mettaton}* IN A PERFECT UNIVERSE, OUR TWO SPECIES CO-EXIST IN PEACE.',
                  "<32>{#p/mettaton}* BUT IT'S NOT A PERFECT UNIVERSE, IS IT?",
                  '<32>{#p/mettaton}* AFTER ALL, PEOPLE LIKE YOU STILL EXIST WITHIN IT.',
                  '<32>{#p/napstablook}* uh...\n* mettaton?',
                  '<32>{#p/napstablook}* are you okay?',
                  '<32>{#p/mettaton}* ...\n* WHAT DOES IT SOUND LIKE.',
                  '<32>{#p/napstablook}* .........',
                  '<32>{#p/napstablook}* mettaton, who are you talking to?',
                  "<32>{#p/mettaton}* BLOOKY, IT'S NOT IMPORTANT.",
                  '<32>{#p/napstablook}* let me see......',
                  '<32>{#p/napstablook}* ...\n* oh...',
                  '<32>{#p/napstablook}* hey, uh... you made my cousin pretty upset',
                  "<32>{#p/napstablook}* ever since i found out he was my cousin, i've been looking after him..."
               ]);
               if (SAVE.data.b.ubershortcut || !dundyne || !dtoriel) {
                  addB(['<32>{#p/napstablook}* no matter what good you may have done, he......']);
               } else {
                  addB(['<32>{#p/napstablook}* regardless of the other humans being innocent, he......']);
               }
               addB([
                  "<32>{#p/napstablook}* he's been getting angrier at you than ever lately",
                  "<32>{#p/napstablook}* i'm...... really worried",
                  "<32>{#p/mettaton}* ARE YOU SAYING I SHOULDN'T BE ANGRY?\n* THAT I SHOULD BE CALM?",
                  '<32>{#p/mettaton}* THE PEOPLE THAT HUMAN KILLED ARE NEVER COMING BACK.',
                  '<32>{#p/mettaton}* THEIR FAMILIES WILL NEVER SEE THEM AGAIN.',
                  "<32>{#p/mettaton}* I'LL BE DAMNED IF I'M GOING TO REMAIN CALM IN THE FACE OF WHAT THEY DID!",
                  '<32>{#p/napstablook}* well... i just wanted you to know...',
                  '<32>{#p/napstablook}* ......\n* i hope you die a painful death',
                  '<32>{#p/mettaton}* B... BLOOKY, COME ON...',
                  "<32>{#p/mettaton}* IT'S NOT LIKE YOU TO SAY THINGS LIKE THAT.",
                  "<32>{#p/mettaton}* YOU'RE JUST SAYING THAT TO MAKE ME FEEL BETTER, RIGHT?",
                  "<32>{#p/napstablook}* ......\n* ...... i don't know",
                  "<36>{#p/mettaton}* I APPRECIATE WHAT YOU'RE DOING, BUT I THINK IT'D BE BEST IF YOU STAYED OUT OF THIS.",
                  '<32>{#p/napstablook}* you know...',
                  '<32>{#p/napstablook}* if you did die like that......',
                  "<32>{#p/napstablook}* i don't know if i would feel bad for you or not",
                  "<32>{#p/napstablook}* so...... that's all",
                  '<32>{#p/mettaton}* ...\n* ... WOW.',
                  "<32>{#p/mettaton}* HONESTLY, I THINK I'LL JUST LEAVE IT AT THAT.",
                  '<32>{#p/mettaton}* I WAS GOING TO TELL YOU MORE ABOUT MY FAMILY, BUT... THAT ABOUT SUMS IT UP.',
                  '<32>{#p/mettaton}* BESIDES, IT\'S A FITTING END TO THIS \"LEGACY\" YOU\'VE LEFT BEHIND.',
                  '<32>{#p/mettaton}* ...',
                  '<32>{#p/mettaton}* WHAT A SHAME...',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]);
            }
         } else if (SAVE.data.b.ultrashortcut) {
            k = 'light_ultra'; // NO-TRANSLATE

            m = music.sansdate;
            
            addA([
               '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
               '<25>{#p/sans}{#f/0}* 你好呀。',
               '<25>{#p/sans}{#f/4}* 喂，有人吗？',
               "<25>{#p/sans}{#f/2}* 没人？\n* 那我就留个言吧。"
            ]);
            addB([
               '<25>{#p/sans}{#f/0}* sooo... where to begin?',
               '<25>{#p/sans}{#f/3}* ...\n* after you left, things got... interesting.',
               "<25>{#p/sans}{#f/0}* first off, asgore's disappearance hurt the outpost's morale."
            ]);
            if (dtoriel) {
               addB(["<25>{#p/sans}{#f/3}* not to mention the reports of the former queen's death."]);
            }
            addB([
               '<25>{#p/sans}{#f/0}* but alphys, who was next in line for leadership...',
               '<25>{#p/sans}{#f/2}* seems to have gained some confidence.',
               '<25>{#p/sans}{#f/0}* it was touch and go at first, but she accepted her role as the queen.'
            ]);
            if (30 <= SAVE.data.n.bully) {
               addB([
                  "<25>{#p/sans}{#f/3}* so... despite people's newfound fear of getting beat up...",
                  '<26>{#p/sans}{#f/0}* that helped folks relax.'
               ]);
            } else {
               addB(['<25>{#p/sans}{#f/0}* so that helped people move on.']);
            }
            addB([
               "<25>{#p/sans}{#f/0}* i've been helping to advise her ever since.",
               "<25>{#p/sans}{#f/3}* she debated on if she should make the humans' existence public..."
            ]);
            if (royals < 6) {
               addB([
                  '<25>{#p/sans}{#f/0}* ultimately, we decided not to do it.',
                  '<25>{#p/sans}{#f/0}* it would have been nice, but with the deaths of those dogs...',
                  "<25>{#p/sans}{#f/3}* ... well, it wouldn't be wise.",
                  "<25>{#p/sans}{#f/3}* opinions on humanity aren't all that great right now."
               ]);
            } else if (SAVE.data.n.exp > 0) {
               addB([
                  '<25>{#p/sans}{#f/0}* for now, we decided not to do it.',
                  "<25>{#p/sans}{#f/0}* at some point, though, we'd like to.",
                  '<25>{#p/sans}{#f/3}* ... when the people are ready.',
                  '<25>{#p/sans}{#f/0}* opinions on humanity are still kind of mixed these days.'
               ]);
            } else {
               addB([
                  '<25>{#p/sans}{#f/0}* at first, we decided not to do it.',
                  '<25>{#p/sans}{#f/0}* but, eventually, we figured the people would be ready.',
                  '<25>{#p/sans}{#f/3}* ... luckily, they took it well.',
                  '<25>{#p/sans}{#f/2}* opinions on humanity turn more positive by the day.'
               ]);
            }
            addB([
               '<25>{#p/sans}{#f/0}* ... anyway.\n* after that decision was made...',
               '<25>{#p/sans}{#f/0}* alphys and i set our sights on royal guard reforms.',
               "<25>{#p/sans}{#f/3}* yeah... we weren't exactly fans of how it was run before."
            ]);
            if (dtoriel) {
               addB(['<25>{#p/sans}{#f/0}* suffice it to say, we made some changes.']);
            } else {
               addB([
                  "<25>{#p/sans}{#f/0}* even the former queen, who'd returned a while after you left...",
                  '<25>{#p/sans}{#f/0}* agreed with the changes we wanted to make.'
               ]);
            }
            addB([
               '<25>{#p/sans}{#f/2}* you can probably guess what the first one was.',
               "<18>{#p/papyrus}{#f/9}NYEH HEH HEH!\nTHAT'S RIGHT!",
               "<25>{#p/sans}{#f/0}* oh, hey papyrus.\n* so how'd your shift go?",
               "<18>{#p/papyrus}{#f/0}I'D SAY IT WENT EXCELLENTLY!"
            ]);
            if (royals < 6) {
               addB([
                  '<18>{#p/papyrus}{#f/5}ADMITTEDLY, I WAS LOOKING FORWARD TO WORKING WITH DOGS.',
                  '<18>{#p/papyrus}{#f/6}BUT... I GUESS EVEN DOGS CAN TAKE VACATIONS.',
                  "<25>{#p/sans}{#f/3}* hey, it's okay.",
                  "<25>{#p/sans}{#f/2}* you're still doing as good a job as ever, aren't you?"
               ]);
            } else if (royals < 8) {
               addB([
                  '<18>{#p/papyrus}{#f/5}ADMITTEDLY, THE ATMOSPHERE THERE FEELS... WEIRD.',
                  "<18>{#p/papyrus}{#f/6}LIKE THERE'S SOMETHING MISSING.",
                  "<25>{#p/sans}{#f/3}* hey, it's okay.",
                  "<25>{#p/sans}{#f/2}* you're still doing as good a job as ever, aren't you?"
               ]);
            } else {
               addB([
                  "<18>{#p/papyrus}{#f/5}UNDYNE'S STILL GETTING USED TO ME BEING HERE...",
                  '<18>{#p/papyrus}{#f/0}BUT, APART FROM THAT, THINGS ARE OKAY.',
                  '<25>{#p/sans}{#f/2}* glad to hear it.'
               ]);
            }
            addB([
               "<18>{#p/papyrus}{#f/4}I MEAN, IT'S ONLY NATURAL I'D TRY MY BEST.",
               '<18>{#p/papyrus}{#f/9}AFTER ALL, I DID CAPTURE A HUMAN TO EARN MY POSITION!',
               "<18>{#p/papyrus}{#f/0}I'M NOT GOING TO GET LAZY AND LOSE IT AFTER THAT.",
               '<25>{#p/sans}{#f/0}* of course not.\n* keeping a job like that takes dedication.',
               "<18>{#p/papyrus}{#f/4}... IT'S NO WONDER YOU LOST YOURS.",
               '<18>{#p/papyrus}{#f/5}THOUGH, YOU ARE DOING WELL IN YOUR NEW JOB, SO...',
               "<18>{#p/papyrus}{#f/0}I'LL LET IT SLIDE.",
               '<25>{#p/sans}{#f/0}* thanks.\n* advising the queen is no easy task.',
               '<25>{#p/sans}{#f/3}* she can be a little neurotic at times.',
               '<25>{#p/sans}{#f/3}* she can be... quick to make big decisions.',
               "<25>{#p/sans}{#f/0}* and that's before you throw mettaton into the mix.",
               "<18>{#p/papyrus}{#f/6}METTATON!?\nWHAT'S -HE- DOING?",
               '<25>{#p/sans}{#f/0}* oh, after alphys became queen, he figured he\'d \"tag along.\"',
               "<25>{#p/sans}{#f/3}* but his advice... isn't very helpful.",
               '<25>{#p/sans}{#f/0}* he just wants to turn the outpost into an entertainment complex.',
               '<25>{#p/sans}{#f/0}* with his tv shows being front and center, of course.',
               "<25>{#p/sans}{#f/3}* it's all a bit of a mess, really.",
               '<18>{#p/papyrus}{#f/4}SOUNDS LIKE HE NEEDS A STERN TALKING-TO.',
               "<25>{#p/sans}{#f/0}* maybe.\n* but aren't you like, his biggest fan?",
               "<18>{#p/papyrus}{#f/7}NOT WHEN HE'S INTERFERING WITH YOUR WORK I'M NOT!",
               "<18>{#p/papyrus}{#f/9}... I'LL BE BACK.",
               '<25>{#p/sans}{#f/0}* ...',
               "<25>{#p/sans}{#f/3}* i should probably go make sure he doesn't cause any trouble.",
               '<25>{#p/sans}{#f/0}* but, before i go...'
            ]);
            if (hkills > 9) {
               addB([
                  '<25>{#p/sans}{#f/0}* you may have killed a lot of people, but...',
                  '<25>{#p/sans}{#f/3}* in the end, you surrendered and did the right thing.'
               ]);
            } else if (30 <= SAVE.data.n.bully) {
               if (SAVE.data.n.exp > 0) {
                  addB([
                     '<25>{#p/sans}{#f/0}* regardless of the people you hurt and killed...',
                     '<25>{#p/sans}{#f/3}* in the end, you surrendered and did the right thing.'
                  ]);
               } else {
                  addB([
                     '<25>{#p/sans}{#f/0}* you may have hurt a lot of people, but...',
                     '<25>{#p/sans}{#f/3}* in the end, you surrendered and did the right thing.'
                  ]);
               }
            } else if (SAVE.data.n.exp > 0) {
               addB([
                  '<25>{#p/sans}{#f/0}* you may have made some mistakes, but...',
                  "<25>{#p/sans}{#f/3}* overall, you're not half bad."
               ]);
            } else {
               addB([
                  '<25>{#p/sans}{#f/0}* even if not everybody likes humanity...',
                  '<25>{#p/sans}{#f/2}* i and many others are more positive about them because of you.'
               ]);
            }
            addB([
               "<25>{#p/sans}{#f/0}* so, don't worry.",
               '<25>{#p/sans}{#f/3}* whatever happens to you out there...',
               '<25>{#p/sans}{#f/2}* just know that you have my full support.',
               '<25>{#p/sans}{#f/0}* ...\n* take care of yourself out there, ok?',
               '<25>{#p/sans}{#f/3}* ...',
               "<25>{#p/sans}{#f/3}* see ya 'round.",
               '<32>{#s/equip}{#p/event}* 滴...'
            ]);
         } else if (SAVE.data.n.exp > 0 || SAVE.data.n.state_foundry_undyne === 1) {
            if (!dundyne) {
               k = 'light_undyne'; // NO-TRANSLATE

               
               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<25>{#p/alphys}{#f/4}* H-hiya...',
                  '<25>{#p/alphys}{#f/20}* Is anyone there?',
                  "<25>{#p/alphys}{#f/11}* ... I hope it's not too much trouble...",
                  '<25>{#p/alphys}{#f/4}* I just... w-wanted to let you know how things are going out here.'
               ]);
               addB([
                  '<25>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.',
                  "<25>{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
                  '<25>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...',
                  "<25>{#p/alphys}{#f/4}* I didn't really feel like I'd be the best fit for the job."
               ]);
               if (dmettaton) {
                  addB(['<25>{#p/alphys}{#f/4}* Especially after what I... let happen to Mettaton.']);
               }
               addB([
                  '<26>{#p/alphys}{#f/20}* Well, Undyne approached me with an offer to take over, and...',
                  '<25>{#p/alphys}{#f/20}* I agreed, and appointed her as the queen.'
               ]);
               if (dpapyrus) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to Papyrus's death..."]);
                  if (royals < 2) {
                     addB(['<26>{#p/alphys}{#f/13}* ... not to mention the collapse of the guard...']);
                  } else if (royals < 7) {
                     addB(['<25>{#p/alphys}{#f/13}* ... not to mention the loss of those guards...']);
                  }
               } else if (royals < 2) {
                  addB(["<26>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the collapse of the guard..."]);
               } else if (royals < 7) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of those guards..."]);
               } else if (ddoggo) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doggo..."]);
               } else if (dlesserdog) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Minor..."]);
               } else if (ddogs) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to those married dogs' deaths..."]);
               } else if (dgreatdog) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Major..."]);
               } else if (ddoge) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doge..."]);
               } else if (droyalguards) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to 03 and 04's deaths..."]);
               } else if (dmadjick) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Cozmo..."]);
               } else if (dknightknight) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Terrestria..."]);
               } else if (dtoriel) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the former queen's death..."]);
               } else if (dmuffet) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the spider queen's death..."]);
               } else if (dmettaton) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to Mettaton's death..."]);
               } else if (hkills > 1) {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to those monsters' deaths..."]);
               } else {
                  addB(["<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that one monster's death..."]);
               }
               if (royals < 2) {
                  addB(['<25>{#p/alphys}{#f/17}* But all she did was re- establish the Royal Guard and its forces.']);
               } else {
                  addB(["<25>{#p/alphys}{#f/17}* But all she did was bolster the Royal Guard's forces."]);
               }
               if (SAVE.data.b.undyne_respecc) {
                  addB(['<25>{#p/alphys}{#f/19}* And... make a speech about how humans are dishonorable warriors.']);
               } else if (2.1 <= SAVE.data.n.plot_date) {
                  addB(['<25>{#p/alphys}{#f/19}* And... make a speech about how humans are backstabbing traitors.']);
               } else {
                  addB(['<25>{#p/alphys}{#f/19}* And... make a speech about how humans are irredeemable killers.']);
               }
               if (royals < 6 || mdeaths > 9) {
                  addB(['<25>{#p/alphys}{#f/20}* A speech that... actually got a lot of people on her side.']);
                  if (30 <= SAVE.data.n.bully) {
                     addB(["<25>{#p/alphys}{#f/26}* ... beating everyone up certainly didn't help your case."]);
                  } else {
                     addB([
                        '<25>{#p/alphys}{#f/5}* ... monsters are pretty wary of humans these days because of that.'
                     ]);
                  }
               } else {
                  addB(['<25>{#p/alphys}{#f/20}* A speech that only got people on her side...']);
                  if (30 <= SAVE.data.n.bully) {
                     addB(['<25>{#p/alphys}{#f/26}* ... after they were reminded of your bullying.']);
                  } else {
                     addB([
                        "<25>{#p/alphys}{#f/20}* ... after she mentioned the circumstances of ASGORE's disappearance."
                     ]);
                  }
               }
               addB([
                  '<25>{#p/alphys}{#f/10}* As for the actual humans still alive on the outpost...?',
                  "<25>{#p/alphys}{#f/4}* Well, after what she said, I... didn't want to take any chances.",
                  '<25>{#p/alphys}{#f/20}* So... I had the archive moved to a spire house in Aerialis.',
                  '<25>{#p/alphys}{#f/20}* In secret.',
                  '<25>{#p/alphys}{#f/5}* ... Undyne saw the lack of humans, or... human SOULs, and...',
                  "<25>{#p/alphys}{#f/10}* Assumed they'd been lost, too."
               ]);
               if (dtoriel) {
                  addB([
                     '<25>{#p/alphys}{#f/3}* I, ahah, tried to talk her out of announcing it in public, but...',
                     '<25>{#p/alphys}{#f/3}* ... there was nothing I could do...!',
                     "<25>{#p/alphys}{#f/30}* ...\n* Everyone thinks we're back at square one now."
                  ]);
                  if (dpapyrus) {
                     addB([
                        "<25>{#p/alphys}{#f/31}* Many have lost hope that we'll... ever get out of here.",
                        '<25>{#p/alphys}{#f/31}* ...',
                        "<25>{#p/alphys}{#f/30}* People are angry.\n* They're scared, and they all want to leave.",
                        "<25>{#p/alphys}{#f/31}* I don't know how much longer I can keep this secret from everyone.",
                        '<25>{#p/sans}{#f/0}* hey, you still talking to yourself in there?',
                        "<25>{#p/sans}{#f/3}* c'mon, the humans are due for their daily checkup.",
                        '<25>{#p/alphys}{#f/20}* Uh... could you come in for just a moment?',
                        '<25>{#p/sans}{#f/0}* on it.',
                        "<25>{#p/sans}{#f/0}* ... and i'm here.",
                        "<25>{#p/alphys}{#f/20}* So... I'm not really talking to myself.",
                        "<25>{#p/alphys}{#f/19}* Actually, I'm leaving a message for the human.\n* It's recording now...",
                        '<25>{#p/sans}{#f/0}* 哦... 我说呢。',
                        '<25>{#p/sans}{#f/2}* mind if i take over while you go look after the kids?',
                        "<26>{#p/alphys}{#f/5}* S-sure, I'll... go do that.",
                        '<25>{#p/sans}{#f/3}* ...',
                        "<25>{#p/sans}{#f/0}* ok, look, i won't take up much of your time.",
                        '<25>{#p/sans}{#f/0}* to be honest, i just took over the phone so i could hang it up.',
                        '<25>{#p/sans}{#f/3}* alphys has a habit of making phone calls that stress her out.',
                        '<25>{#p/sans}{#f/0}* but... before i go.',
                        "<25>{#p/sans}{#f/0}* undyne's announcement wasn't the only bad news we received.",
                        "<26>{#p/sans}{#f/3}* reports of the former queen's death hit people pretty hard, too.",
                        '<25>{#p/sans}{#f/0}* shops closed down, people quit their jobs...',
                        "<25>{#p/sans}{#f/0}* they're saying morale is the lowest it's ever been.",
                        "<25>{#p/sans}{#f/2}* ... on the bright side, at least grillby's gets a lot of business now.",
                        '<25>{#p/sans}{#f/3}* but no amount of junk food can make up for the loss of my...',
                        '<26>{#p/sans}{#f/3}* ... well, i think you know who i mean.',
                        '<26>{#p/sans}{#f/0}* ...',
                        "<25>{#p/sans}{#f/0}* humanity's reputation is honestly pretty terrible now.",
                        '<25>{#p/sans}{#f/0}* alphys and i will do our best to protect the next human who comes...',
                        "<25>{#p/sans}{#f/3}* but i wouldn't be surprised if they end up getting killed.",
                        "<25>{#p/sans}{#f/0}* ... that's just the way things are now.",
                        '<25>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...',
                        '<26>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.',
                        '<25>{#p/sans}{#f/0}* eh, i said all i wanted to, anyway.',
                        "<25>{#p/sans}{#f/0}* i'm hanging up the phone now.",
                        '<25>{#p/sans}{#f/3}* ... goodbye.',
                        '<32>{#s/equip}{#p/event}* 滴...'
                     ]);
                  } else {
                     addB([
                        '<18>{#p/papyrus}{#f/0}EVERYONE EXCEPT FOR YOU, ME, AND MY BROTHER!',
                        '<25>{#p/alphys}{#f/27}* Oh, hey Papyrus.\n* I take it the archive is still working?',
                        '<18>{#p/papyrus}{#f/0}INDEED IT IS!',
                        '<18>{#p/papyrus}{#f/9}I ALSO GAVE THE HUMANS THEIR DAILY CHECKUP!',
                        '<25>{#p/alphys}{#f/10}* Awesome, thanks.',
                        "<25>{#p/alphys}{#f/10}* ... maybe... you'd like to say a few things to the human...?",
                        "<25>{#p/alphys}{#f/5}* I'm leaving a message about what's happened since they left.",
                        '<18>{#p/papyrus}{#f/0}OH, SURE THING!',
                        "<18>{#p/papyrus}{#f/0}... HELLO, HUMAN.\nI TRUST YOU'RE DOING WELL.",
                        "<18>{#p/papyrus}{#f/5}IT'S BEEN HARD KEEPING SECRETS FROM EVERYONE...",
                        "<18>{#p/papyrus}{#f/6}ESPECIALLY WHEN THEY'RE ALL JUST SO SAD!!!",
                        "<18>{#p/papyrus}{#f/5}ALL THOSE PEOPLE THINKING THEY'LL NEVER ESCAPE...",
                        '<18>{#p/papyrus}{#f/5}WONDERING IF THEY STILL HAVE A FUTURE...',
                        "<18>{#p/papyrus}{#f/0}BUT HEY!!\nIT'LL BE ALRIGHT!!",
                        "<18>{#p/papyrus}{#f/5}ONE DAY, THEY'LL COME TO KNOW THE TRUTH...",
                        '<18>{#p/papyrus}{#f/0}AND THE TRUTH WILL SET THEM FREE.',
                        "<25>{#p/alphys}{#f/8}* Papyrus, why don't you tell them about your new job?",
                        '<18>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?',
                        '<18>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.',
                        "<18>{#p/papyrus}{#f/4}TECHNICALLY, I'M THE GUARD'S MORALE OFFICER...",
                        '<18>{#p/papyrus}{#f/0}BUT I STILL DO A VERY IMPORTANT JOB!',
                        "<18>{#p/papyrus}{#f/5}YOU SEE, A GUARD CAN'T DO THEIR BEST...",
                        "<18>{#p/papyrus}{#f/5}IF THEY'RE DOWN IN THE DUMPS.",
                        "<18>{#p/papyrus}{#f/0}SO... THAT'S WHERE I COME IN!",
                        '<18>{#p/papyrus}{#f/4}UM, METAPHORICALLY OF COURSE.',
                        "<18>{#p/papyrus}{#f/4}I WOULDN'T ACTUALLY GO DOWN INTO A DUMP.",
                        "<18>{#p/papyrus}{#f/7}... THERE'S ENOUGH PEOPLE DOING THAT ALREADY!!!",
                        "<18>{#p/papyrus}{#f/5}IT'S STRANGE...\nTHEY NEVER SEEM TO COME BACK.",
                        "<25>{#p/alphys}{#f/10}* Eheh, I wouldn't worry about that.",
                        '<25>{#p/alphys}{#f/3}* They must just be so obsessed with trash, they never leave!',
                        '<18>{#p/papyrus}{#f/0}YEAH...\nTHAT MUST BE IT.',
                        '<18>{#p/papyrus}{#f/5}...',
                        "<18>{#p/papyrus}{#f/5}IT'S STILL KIND OF CONCERNING, THOUGH.",
                        '<25>{#p/alphys}{#f/31}* ... yeah.',
                        "<25>{#p/sans}{#f/0}* oh.\n* hey guys.\n* sorry i'm late...",
                        '<25>{#p/sans}{#f/2}* the people on the floor below us want me to make breakfast.',
                        "<25>{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        '<18>{#p/papyrus}{#f/7}UGH... LIVING IN A SPIRE HOUSE MUST BE SO ANNOYING!!',
                        '<18>{#p/papyrus}{#f/4}DO THEY NOT KNOW HOW TO COOK FOR THEMSELVES?',
                        "<25>{#p/sans}{#f/0}* i mean, i can't say i blame 'em.",
                        "<25>{#p/sans}{#f/0}* after undyne's announcement about our progress, and...",
                        "<25>{#p/sans}{#f/0}* those reports of the former queen's death...?",
                        "<25>{#p/sans}{#f/3}* i'd probably want someone else to cook for me, too.",
                        "<25>{#p/sans}{#f/2}* but hey.\n* that's why i have you.",
                        '<18>{#p/papyrus}{#f/0}YEAH!!\nWHO NEEDS SOMEONE ELSE TO COOK...',
                        '<18>{#p/papyrus}{#f/9}... WHEN YOU HAVE THE ONE AND ONLY GREAT PAPYRUS!',
                        '<26>{#p/sans}{#f/0}* heh.',
                        '<26>{#p/sans}{#f/0}* well, i should probably get started on that breakfast now.',
                        '<26>{#p/sans}{#f/3}* papyrus, would you mind coming with me?',
                        "<18>{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        '<26>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!',
                        '<25>{#p/alphys}{#f/17}* Have fun.',
                        '<25>{#p/alphys}{#f/17}* ...',
                        '<25>{#p/alphys}{#f/5}* I guess I should probably hang up the phone now.',
                        '<25>{#p/alphys}{#f/6}* Just, if this ever gets to you, then...',
                        "<25>{#p/alphys}{#f/14}* I hope you're doing better than we are right now.",
                        '<25>{#p/alphys}{#f/20}* ...',
                        '<25>{#p/alphys}{#f/20}* See you later.',
                        '<32>{#s/equip}{#p/event}* 滴...'
                     ]);
                  }
               } else {
                  addB([
                     '<25>{#p/alphys}{#f/5}* F-fortunately, the former queen returned, and...',
                     '<25>{#p/alphys}{#f/5}* Managed to convince her not to make an announcement about it.',
                     '<25>{#p/alphys}{#f/10}* There was some tension between them at first, but...',
                     "<25>{#p/alphys}{#f/6}* ... things feel like they're kind of back to normal, now."
                  ]);
                  if (dpapyrus) {
                     addB([
                        '<25>{#p/alphys}{#f/4}* The only difference from before is...',
                        '<25>{#p/alphys}{#f/17}* ... I have to keep the archive a secret.',
                        "<25>{#p/alphys}{#f/20}* Well, I guess that's not really much of a difference.",
                        "<25>{#p/alphys}{#f/14}* It's just weird not having... anyone around to help anymore.",
                        '<25>{#p/sans}{#f/0}* didja forget about me?',
                        "<25>{#p/alphys}{#f/2}* O-oh, uh, that's not what I meant!",
                        "<25>{#p/sans}{#f/3}* hey, i get it.\n* it's not the same as it was with asgore.",
                        "<25>{#p/sans}{#f/0}* but i'd like to think i do a good job.",
                        '<25>{#p/alphys}{#f/6}* Yeah... you do.',
                        '<26>{#p/alphys}{#f/5}* I just miss having him around and stuff.',
                        '<25>{#p/sans}{#f/3}* ... by the way...',
                        '<25>{#p/sans}{#f/0}* you should probably go give the humans their daily checkup.',
                        "<25>{#p/sans}{#f/2}* i can take over on the phone while you're gone.",
                        "<26>{#p/alphys}{#f/6}* Sounds good.\n* I'll go do that now.",
                        '<25>{#p/sans}{#f/3}* ...'
                     ]);
                     if (hkills === 1) {
                        addB([
                           '<25>{#p/sans}{#f/0}* so here we are, then.',
                           "<25>{#p/sans}{#f/0}* now, since you left, i've been asking myself...",
                           '<25>{#p/sans}{#f/3}* \"why would they go out of their way solely to kill him?\"',
                           "<25>{#p/sans}{#f/0}* and i'm not talking about asgore.",
                           '<25>{#p/sans}{#f/3}* ...',
                           '<25>{#p/sans}{#f/3}* i think we both know the reason.',
                           "<25>{#p/sans}{#f/3}* i think we both know it wasn't out of self- defense.",
                           "<25>{#p/sans}{#f/0}* come on.\n* let's be honest with ourselves here.",
                           "<25>{#p/sans}{#f/0}* you just did it to see what'd happen.",
                           "<25>{#p/sans}{#f/0}* to see what i'd have to say about it.",
                           '<25>{#p/sans}{#f/0}* well, congratulations!\n* you got your answer, bucko!',
                           "<25>{#p/sans}{#f/0}* i hope you're happy with the outcome.",
                           "<27>{#p/sans}{#f/3}* just kidding.\n* i don't really hope that.",
                           '<27>{#p/sans}{#f/0}* ...',
                           "<27>{#p/sans}{#f/0}* ... well, that's all.",
                           '<32>{#s/equip}{#p/event}* 滴...'
                        ]);
                     } else {
                        addB([
                           "<25>{#p/sans}{#f/0}* hey.\n* hope you're doing well.",
                           "<25>{#p/sans}{#f/0}* for the most part, we're doing well, too.",
                           '<25>{#p/sans}{#f/3}* people are still going about their lives, day after day...',
                           '<25>{#p/sans}{#f/0}* waiting for the next human to come along and set us free.'
                        ]);
                        if (hkills > 9) {
                           addB([
                              '<25>{#p/sans}{#f/0}* ... i just wish i could say the same about my brother.',
                              '<25>{#p/sans}{#f/3}* and the other people you killed, for that matter.'
                           ]);
                        } else {
                           addB(['<25>{#p/sans}{#f/3}* ... i just wish i could say the same about my brother.']);
                        }
                        addB([
                           '<25>{#p/sans}{#f/3}* ...',
                           '<25>{#p/sans}{#f/3}* hmm...\n* what else should i mention?',
                           '<26>{#p/sans}{#f/0}* ... right.\n* new living arrangements.',
                           '<25>{#p/sans}{#f/3}* so, after the former queen returned...',
                           '<25>{#p/sans}{#f/0}* she and i recognized each other and got to talking.',
                           '<25>{#p/sans}{#f/0}* one thing led to another, and...',
                           '<25>{#p/sans}{#f/0}* she agreed to move in with me to my house in starton town.',
                           "<25>{#p/sans}{#f/0}* ... sure.\n* there's a lot we were excited about.",
                           '<25>{#p/sans}{#f/3}* the books i gave her, the recipes she tried to teach me...',
                           "<25>{#p/sans}{#f/0}* but... y'know...",
                           '<25>{#p/sans}{#f/3}* none of that stuff ever made up for what happened to papyrus.',
                           '<25>{#p/sans}{#f/3}* she still feels pretty bad about that.',
                           '<25>{#p/sans}{#f/0}* not just because she cares about me, but also...',
                           '<25>{#p/sans}{#f/0}* because she cared about you.',
                           "<25>{#p/sans}{#f/3}* you can imagine how she felt when she realized what you'd done.",
                           '<25>{#p/sans}{#f/0}* spoiler alert.\n* not good.',
                           "<25>{#p/sans}{#f/3}* ... and the public at large doesn't seem to feel much better.",
                           '<25>{#p/sans}{#f/0}* at least in terms of your reputation.',
                           '<25>{#p/sans}{#f/0}* still.\n* could be worse.',
                           '<25>{#p/sans}{#f/0}* at the very least, alphys and i are confident...',
                           '<25>{#p/sans}{#f/3}* in our ability to escort the next human to safety.',
                           "<25>{#p/sans}{#f/0}* so that's something.",
                           '<25>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...',
                           '<26>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.',
                           "<25>{#p/sans}{#f/3}* welp.\n* looks like i'll have to cut this short.",
                           "<25>{#p/sans}{#f/0}* just... think about what i've said, ok?",
                           '<25>{#p/sans}{#f/0}* ...',
                           "<25>{#p/sans}{#f/0}* ... well, that's all.",
                           '<32>{#s/equip}{#p/event}* 滴...'
                        ]);
                     }
                  } else {
                     addB([
                        "<18>{#p/papyrus}{#f/0}YEAH!!\nTHEY'RE REALLY NOT THAT BAD!",
                        '<18>{#p/papyrus}{#f/5}ASIDE FROM ALL THE SECRET-KEEPING.',
                        '<18>{#p/papyrus}{#f/5}NOT A BIG FAN OF THAT PARTICULAR THING.',
                        '<25>{#p/alphys}{#f/11}* But if Undyne were to find out, then...',
                        "<18>{#p/papyrus}{#f/4}YES, YES, I KNOW WHAT YOU'RE GOING TO SAY.",
                        "<18>{#p/papyrus}{#f/4}SHE'LL GET UPSET AND TRY TO TAKE THE HUMANS' SOULS.",
                        "<18>{#p/papyrus}{#f/7}YOU DON'T HAVE TO REMIND ME!!",
                        "<25>{#p/alphys}{#f/23}* He's been arguing with me about this for a while.",
                        '<18>{#p/papyrus}{#f/5}(SIGH...)',
                        '<18>{#p/papyrus}{#f/5}I FEEL LIKE WE COULD CONVINCE HER IF WE JUST TRIED.',
                        "<25>{#p/alphys}{#f/3}* ... Papyrus, why don't you tell them about your new job?",
                        '<18>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?',
                        '<18>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.',
                        "<18>{#p/papyrus}{#f/9}I'M THE GUARD'S NEWEST TRAINING EXPERT!",
                        '<18>{#p/papyrus}{#f/0}SO... WHILE UNDYNE TRAINS THE OTHER GUARDS...',
                        "<18>{#p/papyrus}{#f/0}I'M RESPONSIBLE FOR KEEPING THEM ALL MOTIVATED.",
                        "<18>{#p/papyrus}{#f/9}TURNS OUT I'M PRETTY DARN GOOD AT IT, TOO!",
                        '<18>{#p/papyrus}{#f/2}HER WORDS -AND- MINE.',
                        "<25>{#p/alphys}{#f/5}* Sounds like fun.\n* Maybe I'll visit you on the job sometime.",
                        "<18>{#p/papyrus}{#f/0}SURE, I'LL LET YOU VISIT.",
                        '<18>{#p/papyrus}{#f/4}AFTER YOU AGREE TO TELL UNDYNE OUR SECRET.',
                        '<25>{#p/alphys}{#f/20}* ...',
                        '<18>{#p/papyrus}{#f/0}SO, HOW ABOUT IT?\nYOU, ME, UNDYNE, CONVINCING?',
                        "<25>{#p/sans}{#f/0}* ... huh?\n* what's this about?",
                        "<25>{#p/sans}{#f/3}* sorry i'm late, by the way.",
                        '<25>{#p/sans}{#f/2}* the people on the floor above us want me to make dinner.',
                        "<25>{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        "<18>{#p/papyrus}{#f/4}AREN'T YOU GOING TO TELL HIM WHAT WE TALKED ABOUT?",
                        '<25>{#p/alphys}{#f/32}* ...',
                        '<25>{#p/alphys}{#f/3}* Papyrus thinks we should tell Undyne the truth.',
                        "<25>{#p/sans}{#f/3}* you really think that'd go well, bro?",
                        '<18>{#p/papyrus}{#f/0}WELL, AS A MEMBER OF THE ROYAL GUARD...',
                        '<18>{#p/papyrus}{#f/0}MY OPINION -SHOULD- CARRY SOME REAL WEIGHT!',
                        "<25>{#p/sans}{#f/0}* hmm... normally i'd say no to something like this, but...",
                        '<25>{#p/sans}{#f/0}* undyne does seem to have a certain respect for you.',
                        "<25>{#p/sans}{#f/3}* besides, i've been thinking about it too.",
                        "<25>{#p/alphys}{#f/22}* W-WELL DON'T GO SAYING ANYTHING UNTIL I GIVE THE OKAY!",
                        "<25>{#p/sans}{#f/2}* wouldn't dream of it.",
                        "<18>{#p/papyrus}{#f/0}YEAH!!\nWE'LL JUST PICTURE IT IN OUR HEADS.",
                        '<18>{#p/papyrus}{#f/5}UNLESS THAT ALSO COUNTS AS DREAMING.',
                        '<26>{#p/sans}{#f/0}* heh.',
                        '<26>{#p/sans}{#f/0}* well, i should probably get started on that dinner now.',
                        '<26>{#p/sans}{#f/3}* papyrus, would you mind coming with me?',
                        "<18>{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        '<26>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!',
                        '<25>{#p/alphys}{#f/17}* Have fun.',
                        '<25>{#p/alphys}{#f/17}* ...',
                        '<25>{#p/alphys}{#f/5}* To be honest...',
                        '<25>{#p/alphys}{#f/5}* It would be nice to not have to hide all of this anymore.',
                        "<25>{#p/alphys}{#f/6}* So... maybe, if there's really a chance this could succeed...",
                        '<25>{#p/alphys}{#f/6}* ...',
                        "<25>{#p/alphys}{#f/8}* I-I'll think about it after I hang up the phone.",
                        '<25>{#p/alphys}{#f/10}* ...',
                        '<25>{#p/alphys}{#f/16}* T-take care!!',
                        '<32>{#s/equip}{#p/event}* 滴...'
                     ]);
                  }
               }
            } else if (!dtoriel) {
               if (SAVE.data.b.w_state_lateleave) {
                  k = 'light_runaway'; // NO-TRANSLATE

                  
                  addA([
                     '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                     '<25>{#p/toriel}{#f/1}* Hello?',
                     '<25>{#p/toriel}{#f/5}* This is... Toriel.',
                     '<25>{#p/toriel}{#f/1}* ... I know we did not part ways on the best of terms, but...',
                     '<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                  ]);
                  addB([
                     '<25>{#p/toriel}{#f/9}* After you ran away from me, I reconsidered my own decisions.',
                     '<25>{#p/toriel}{#f/13}* I felt... guilty.\n* For trying to keep you in the Outlands.',
                     '<25>{#p/toriel}{#f/13}* For trying to keep ALL the humans there.',
                     '<25>{#p/toriel}{#f/9}* I decided I could stay there no longer.',
                     '<26>{#p/toriel}{#f/13}* I worked up the courage to leave, and returned to the Citadel.',
                     '<25>{#p/toriel}{#f/18}* ... when I saw that the humans were trapped in those boxes...',
                     '<25>{#p/toriel}{#f/13}* I released them without a second thought.',
                     '<26>{#p/toriel}{#f/10}* I did not want them to be trapped any more than I wanted you to be.',
                     '<25>{#p/toriel}{#f/9}* ... but this decision was not without its consequences.',
                     "<25>{#p/toriel}{#f/13}* Not only were the humans traumatized by ASGORE's archive...",
                     '<25>{#p/toriel}{#f/13}* But one of them ran off, and was discovered by the public.',
                     '<25>{#p/toriel}{#f/18}* I did not want to keep them here against their will, but...',
                     "<25>{#p/toriel}{#f/9}* The death of the Royal Guard's captain, and loss of the king...",
                     "<25>{#p/toriel}{#f/9}* ... placed humanity's reputation in a rather difficult position.",
                     '<25>{#p/toriel}{#f/13}* With the public knowing the truth about the humans...',
                     '<25>{#p/toriel}{#f/9}* I had no choice but to do whatever I could to safeguard them.',
                     '<25>{#p/alphys}{#f/15}* Uh, not to interrupt, but... you have a visitor.',
                     '<25>{#p/toriel}{#f/10}* Let me guess.\n* Sans?',
                     '<25>{#p/alphys}{#f/3}* ...',
                     '<25>{#p/toriel}{#f/0}* There is no need to be so formal when he is the one at the gate.',
                     '<25>{#p/toriel}{#f/9}* System, unlock the gate, authorization Toriel PIE-1-1-0.',
                     "<25>{#p/sans}{#f/0}* ...\n* it's about time.",
                     '<25>{#p/sans}{#f/0}* you still on the phone with the human?',
                     '<25>{#p/alphys}{#f/23}* On the WHAT!?',
                     '<25>{#p/toriel}{#f/0}* Yes, I thought it would be nice if they heard from you, Sans.',
                     '<25>{#p/toriel}{#f/1}* Perhaps Alphys would like to join us as well?',
                     '<25>{#p/alphys}{#f/21}* ...',
                     '<25>{#p/alphys}{#f/21}* No.\n* Alphys would not.',
                     '<25>{#p/alphys}{#f/21}* In fact, Alphys would like to leave now.',
                     "<25>{#p/alphys}{#f/24}* ... I'll be outside if you need me.",
                     '<25>{#p/sans}{#f/0}* ...',
                     '<25>{#p/toriel}{#f/5}* ...'
                  ]);
                  if (SAVE.data.n.state_foundry_undyne === 1) {
                     addB(["<25>{#p/sans}{#f/3}* she's... still pretty upset about what happened to undyne."]);
                  } else {
                     addB(["<25>{#p/sans}{#f/3}* she's... still pretty angry about what you did to undyne."]);
                  }
                  if (dmettaton) {
                     addB(['<25>{#p/sans}{#f/0}* not to mention her friend, mettaton.']);
                  } else {
                     addB(["<25>{#p/sans}{#f/0}* about what she's had to do as a result."]);
                  }
                  if (dpapyrus) {
                     addB([
                        '<25>{#p/sans}{#f/3}* and you know what?',
                        '<25>{#p/sans}{#f/0}* i really get it.',
                        '<25>{#p/sans}{#f/0}* i know what alphys must be going through right now.',
                        '<25>{#p/sans}{#f/0}* after all...',
                        "<25>{#p/sans}{#f/3}* she's not the only one who lost someone."
                     ]);
                  } else {
                     if (SAVE.data.n.state_foundry_undyne === 1) {
                        if (dmettaton) {
                           addB([
                              "<25>{#p/sans}{#f/3}* and while i wouldn't blame you for what you did, or didn't do..."
                           ]);
                        } else {
                           addB(["<25>{#p/sans}{#f/3}* and while i wouldn't blame you for running away..."]);
                        }
                     } else {
                        addB(["<25>{#p/sans}{#f/3}* and while i wouldn't blame you for trying to defend yourself..."]);
                     }
                     addB([
                        "<25>{#p/sans}{#f/0}* i can't help but wonder if there was a better way to go about things.",
                        '<25>{#p/sans}{#f/0}* if, maybe somehow, this all could have been avoided.',
                        '<25>{#p/sans}{#f/3}* but i digress.',
                        "<25>{#p/sans}{#f/0}* there's too much at stake in the present to worry about the past."
                     ]);
                  }
                  if (royals < 2) {
                     addB([
                        '<25>{#p/sans}{#f/0}* ...',
                        "<25>{#p/sans}{#f/0}* it's been difficult without the royal guard to protect us.",
                        '<25>{#p/sans}{#f/3}* not that i was a big fan of those guys before, but...',
                        "<25>{#p/sans}{#f/0}* at a time like this, it'd be nice to have them around.",
                        '<25>{#p/toriel}{#f/13}* Yes, sadly, I am inclined to agree.',
                        '<25>{#p/toriel}{#f/13}* It seems not a day goes by without an angered citizen at the gate.',
                        '<25>{#p/toriel}{#f/9}* But it cannot be helped.',
                        '<25>{#p/toriel}{#f/9}* There are few who share my willingness to treat humans as individuals.',
                        '<32>{#p/human}{#v/1}{@fill=#42fcff}* Toriel, are we in danger?',
                        '<25>{#p/toriel}{#f/1}* ... oh, hello!',
                        '<25>{#p/toriel}{#f/0}* Do not worry, my child.\n* I will always be here to protect you.',
                        '<32>{#p/human}{#v/1}{@fill=#42fcff}* ... thank you...',
                        '<25>{#p/toriel}{#f/0}* Now, please go back and wait with the others.',
                        '<25>{#p/toriel}{#f/0}* I will be with you shortly.',
                        "<32>{#p/human}{#v/1}{@fill=#42fcff}* Okay, I'll go...",
                        '<25>{#p/toriel}{#f/10}* ... very good.',
                        '<25>{#p/toriel}{#f/9}* ...'
                     ]);
                     if (dpapyrus) {
                        addB([
                           '<25>{#p/toriel}{#f/10}* I suppose I cannot judge the citizens too harshly...',
                           '<25>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.',
                           '<25>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done.'
                        ]);
                     } else {
                        addB(['<25>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in.']);
                     }
                     addB([
                        "<25>{#p/sans}{#f/0}* y'know...",
                        "<25>{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        '<25>{#p/sans}{#f/3}* their entire stock got raided last week.',
                        '<25>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.',
                        '<25>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* You liked going there.',
                        '<25>{#p/sans}{#f/3}* yeah, being pro-human is basically a death sentence these days.',
                        '<25>{#p/sans}{#f/0}* at least where your business is concerned.',
                        '<25>{#p/toriel}{#f/12}* ... this is not the only instance of this happening.',
                        '<25>{#p/toriel}{#f/11}* Many others have had the same fate.',
                        '<25>{#p/sans}{#f/0}* yeah, but you know what the worst part is?',
                        "<25>{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        '<25>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...',
                        '<25>{#p/sans}{#f/0}* at least we were still united as a species.',
                        "<25>{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (dpapyrus) {
                        addB(["<25>{#p/sans}{#f/0}* i could really use my brother's encouragement right about now."]);
                     } else {
                        addB(['<25>{#p/sans}{#f/0}* and that really stinks.']);
                     }
                     addB([
                        '<25>{#p/alphys}{#f/3}* Uh... guys?',
                        '<25>{#p/alphys}{#f/3}* I think you need to come see this.',
                        '<25>{#p/toriel}{#f/3}* What is that rumbling?\n* Do you hear that?',
                        '<25>{#p/alphys}{#f/23}* You need to look outside.',
                        '<25>{#p/sans}{#f/0}* toriel, did you lock the gate after i got through?',
                        '<25>{#p/toriel}{#f/2}* ...',
                        '<25>{#p/alphys}{#f/22}* Come outside, NOW!!',
                        '<25>{|}{#p/toriel}{#f/2}* I... I am sorry!\n* I have to- {%}',
                        '<32>{#s/equip}{#p/event}* 滴...'
                     ]);
                  } else {
                     addB([
                        '<25>{#p/sans}{#f/0}* ...',
                        '<25>{#p/sans}{#f/0}* at least we have the royal guard around to back us up.',
                        "<25>{#p/sans}{#f/3}* what's left of it, anyway.",
                        '<25>{#p/toriel}{#f/14}* It is fortunate we have their support.',
                        '<25>{#p/toriel}{#f/13}* I do not know how we would fare without it.',
                        '<32>{#p/human}{#v/2}{@fill=#ff993d}* Yeah!\n* That Royal Guard is awesome!',
                        '<25>{#p/toriel}{#f/2}* ... huh!?',
                        "<32>{#p/human}{#v/2}{@fill=#ff993d}* You'll see!",
                        "<32>{#p/human}{#v/2}{@fill=#ff993d}* When I'm older, I'm gonna join them and protect everyone!",
                        '<25>{#p/toriel}{#f/0}* Hee hee.\n* Perhaps you will.',
                        '<25>{#p/toriel}{#f/1}* Hmm...',
                        '<25>{#p/toriel}{#f/0}* For now, your orders are to return to and guard the others first.',
                        "<32>{#p/human}{#v/2}{@fill=#ff993d}* Aye aye, captain!\n* I'll do so right away!",
                        '<25>{#p/toriel}{#f/0}* Stay safe!',
                        "<25>{#p/sans}{#f/0}* heh.\n* don't push 'em too hard out there.",
                        "<25>{#p/sans}{#f/3}* they've... still got all that archive stuff to deal with.",
                        '<26>{#p/toriel}{#f/5}* That IS true, however...',
                        '<25>{#p/toriel}{#f/0}* It does not mean they must focus on it all the time.',
                        '<25>{#p/toriel}{#f/1}* They are still only children, are they not?',
                        '<25>{#p/sans}{#f/2}* ... welp, you know more about these things than me.',
                        '<25>{#p/toriel}{#f/9}* ...',
                        '<25>{#p/toriel}{#f/9}* I do still worry about the outpost overall.',
                        '<26>{#p/toriel}{#f/13}* The Royal Guard has helped to keep it in check, but...',
                        '<25>{#p/toriel}{#f/18}* Many people still do not see the value in what we are doing.'
                     ]);
                     if (dpapyrus) {
                        addB([
                           '<25>{#p/toriel}{#f/10}* Though, I suppose I cannot judge them too harshly...',
                           '<25>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.',
                           '<25>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done.'
                        ]);
                     } else {
                        addB(['<25>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in.']);
                     }
                     addB([
                        "<25>{#p/sans}{#f/0}* y'know...",
                        "<25>{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        '<25>{#p/sans}{#f/3}* the place was utterly full of protesters.',
                        '<25>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.',
                        '<25>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* Was a guard not there?',
                        "<25>{#p/sans}{#f/3}* well, yeah, but it's not like they can kick 'em out.",
                        '<25>{#p/sans}{#f/0}* they WERE still paying customers.',
                        '<25>{#p/toriel}{#f/1}* ... that does not seem like an effective means of protest.',
                        '<25>{#p/toriel}{#f/6}* But I wish them well.',
                        "<25>{#p/sans}{#f/0}* yeah, i guess that's kinda funny.\n* but at the same time...",
                        "<25>{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        '<25>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...',
                        '<25>{#p/sans}{#f/0}* at least we were still united as a species.',
                        "<25>{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (dpapyrus) {
                        addB(["<25>{#p/sans}{#f/0}* i could really use my brother's encouragement right about now."]);
                     } else {
                        addB(['<25>{#p/sans}{#f/0}* and that really stinks.']);
                     }
                     addB([
                        '<25>{#p/alphys}{#f/27}* Uh, Toriel?\n* I think you left the security gate open.',
                        "<25>{#p/alphys}{#f/20}* Don't worry, I closed it for you.\n* Again.",
                        '<25>{#p/toriel}{#f/1}* Oh, um, thank you...',
                        "<26>{#p/alphys}{#f/23}* Maybe don't do that\n  next time?\n* It's there for a reason.",
                        '<25>{#p/toriel}{#f/5}* ...',
                        '<25>{#p/toriel}{#f/9}* Perhaps now would be a good time to end this message.',
                        '<25>{#p/sans}{#f/0}* yeah, sounds good.',
                        "<25>{#p/sans}{#f/3}* sorry, bucko... can't talk to you forever."
                     ]);
                     if (dpapyrus) {
                        addB([
                           '<25>{#p/sans}{#f/0}* fly safe out there, i guess...',
                           "<25>{#p/sans}{#f/3}* ... or not.\n* i don't really care."
                        ]);
                     } else {
                        addB(['<25>{#p/sans}{#f/0}* fly safe out there, will ya?', '<25>{#p/sans}{#f/3}* ...']);
                     }
                     addB(['<32>{#s/equip}{#p/event}* 滴...']);
                  }
               } else {
                  k = 'light_toriel'; // NO-TRANSLATE

                  
                  if (SAVE.data.n.state_wastelands_toriel === 0) {
                     addA([
                        '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                        '<25>{#p/toriel}{#f/1}* Hello?',
                        '<25>{#p/toriel}{#f/0}* ...\n* This is Toriel.',
                        '<25>{#p/toriel}{#f/1}* I know it is not the kind of call we would normally have, but...',
                        '<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                     ]);
                     addB(['<25>{#p/toriel}{#f/9}* Despite our calling arrangements, I could not help but worry.']);
                  } else {
                     addA([
                        '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                        '<25>{#p/toriel}{#f/1}* Hello?',
                        '<25>{#p/toriel}{#f/0}* ...\n* This is Toriel.',
                        '<25>{#p/toriel}{#f/1}* The circumstances may not be ideal at the moment, but...',
                        '<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure.'
                     ]);
                     addB(['<25>{#p/toriel}{#f/9}* After our time in the Outlands, I could not help but worry.']);
                  }
                  addB([
                     '<25>{#p/toriel}{#f/5}* I knew you were the last human ASGORE would have needed.',
                     '<25>{#p/toriel}{#f/1}* Despite my fear of leaving the Outlands...',
                     '<25>{#p/toriel}{#f/5}* I knew I could not afford to remain there any longer.',
                     '<25>{#p/toriel}{#f/9}* I ran to the Citadel as fast as I could to stop him from hurting you.',
                     '<25>{#p/toriel}{#f/10}* But when I got there...',
                     '<25>{#p/toriel}{#f/9}* I realized I had been wrong about him this whole time.',
                     '<25>{#p/toriel}{#f/5}* He was not the killer I had made him out to be.',
                     '<25>{#p/toriel}{#f/1}* ...',
                     '<25>{#p/toriel}{#f/1}* I had a talk with Alphys later that day.',
                     '<25>{#p/toriel}{#f/1}* We discussed ASGORE, the humans...',
                     '<25>{#p/toriel}{#f/3}* As well as something about a \"Mew Mew Space Adventure?\"',
                     '<25>{#p/toriel}{#f/4}* I still do not know what that means.',
                     "<25>{#p/toriel}{#f/0}* Anyhoo, to summarize... she wasn't ready to become the queen.",
                     '<25>{#p/toriel}{#f/1}* And she agreed to appoint me instead.',
                     "<25>{#p/toriel}{#f/5}* Only then, did I hear about the Royal Guard captain's death..."
                  ]);
                  if (hkills === 0) {
                     addB(['<25>{#p/toriel}{#f/9}* And the fact that, had you acted, you might have saved her.']);
                  } else if (hkills === 1 && SAVE.data.n.state_foundry_undyne === 2) {
                     addB(['<25>{#p/toriel}{#f/9}* And the fact that you were the one to have killed her.']);
                  } else if (dmettaton) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of the TV star, Mettaton.']);
                     if (royals < 2) {
                        addB([
                           '<26>{#p/toriel}{#f/9}* ... and the deaths of most of the Royal Guard beyond that.',
                           "<25>{#p/toriel}{#f/5}* Mettaton's death in particular was difficult, however."
                        ]);
                     } else if (royals < 7) {
                        addB([
                           '<26>{#p/toriel}{#f/9}* ... and the deaths of Royal Guard members beyond that.',
                           "<25>{#p/toriel}{#f/5}* Mettaton's death in particular was difficult, however."
                        ]);
                     } else {
                        addB(['<25>{#p/toriel}{#f/5}* Learning of his death was... difficult for me.']);
                     }
                  } else if (dpapyrus) {
                     addB(["<25>{#p/toriel}{#f/9}* As well as the death of Sans's brother, Papyrus."]);
                     if (royals < 2) {
                        addB(['<26>{#p/toriel}{#f/9}* ... and the deaths of most of the Royal Guard beyond that.']);
                     } else if (royals < 7) {
                        addB(['<26>{#p/toriel}{#f/9}* ... and the deaths of Royal Guard members beyond that.']);
                     }
                  } else if (royals < 2) {
                     addB(['<26>{#p/toriel}{#f/9}* As well as the deaths of the rest of the Royal Guard.']);
                  } else if (royals < 7) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the deaths of other Royal Guard members.']);
                  } else if (ddoggo) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of canine unit member Doggo.']);
                  } else if (dlesserdog) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of canine unit member Canis Minor.']);
                  } else if (ddogs) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of canine unit members Dogamy and Dogaressa.']);
                  } else if (dgreatdog) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of canine unit member Canis Major.']);
                  } else if (ddoge) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of ELITE squad member Doge']);
                  } else if (droyalguards) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of her new recruits, 03 and 04.']);
                  } else if (dmadjick) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of ELITE squad member Cozmo.']);
                  } else if (dknightknight) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of ELITE squad member Terrestria.']);
                  } else if (mdeaths > 9) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the deaths of many other monsters.']);
                  } else if (mdeaths > 2) {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the deaths of other monsters.']);
                  } else {
                     addB(['<25>{#p/toriel}{#f/9}* As well as the death of one other monster.']);
                  }
                  if (dmettaton) {
                     addB([
                        '<25>{#p/toriel}{#f/1}* I had believed he could simply be repaired...',
                        '<25>{#p/toriel}{#f/1}* And that everyone else had been mistaken.',
                        '<25>{#p/toriel}{#f/5}* But that was not the case, and I was wrong to think otherwise.'
                     ]);
                  } else {
                     addB([
                        '<25>{#p/toriel}{#f/5}* I only have my own cowardice to blame, however.',
                        '<25>{#p/toriel}{#f/1}* If I had simply possessed the courage to leave sooner...'
                     ]);
                     if (hkills === 0) {
                        addB([
                           '<25>{#p/toriel}{#f/5}* I could have gone with you and pointed you in the right direction.'
                        ]);
                     } else {
                        addB([
                           '<25>{#p/toriel}{#f/5}* I could have gone with you and encouraged a more peaceful path.'
                        ]);
                     }
                  }
                  addB([
                     '<26>{#p/toriel}{#f/9}* Alas, there was nothing more to be done.',
                     '<25>{#p/toriel}{#f/5}* As queen, I did not have time to dwell on such matters.',
                     "<25>{#p/toriel}{#f/9}* The humans' safety was at stake, and I would not lose them again.",
                     '<25>{#p/toriel}{#f/10}* My first act as queen would be to increase their protection.'
                  ]);
                  if (royals < 2) {
                     addB([
                        '<26>{#p/toriel}{#f/5}* Admittedly, this would be difficult, given the lack of a Royal Guard.'
                     ]);
                  } else {
                     addB([
                        '<25>{#p/toriel}{#f/5}* Admittedly, I was out of practice in handling these sorts of matters.'
                     ]);
                  }
                  addB([
                     '<25>{#p/toriel}{#f/1}* But with the help of an old friend, Gerson, and his contacts...',
                     '<25>{#p/toriel}{#f/1}* I was able to arrange a minimal security detail here in the Citadel.',
                     '<25>{#p/toriel}{#f/0}* It is not much, but the humans and their secret are safer now.',
                     '<25>{#p/toriel}{#f/1}* ...',
                     '<25>{#p/toriel}{#f/1}* Since then, life has carried on as usual...'
                  ]);
                  if (royals < 2) {
                     addB(['<25>{#p/toriel}{#f/5}* Despite the loss of the king, and Royal Guard as a whole...']);
                  } else {
                     addB(['<25>{#p/toriel}{#f/5}* Despite the loss of the king, and former Royal Guard captain...']);
                  }
                  addB([
                     '<25>{#p/toriel}{#f/1}* The people still have hope for their freedom.',
                     '<25>{#p/toriel}{#f/5}* Hope that... I will deliver it to them.',
                     '<25>{#p/toriel}{#f/9}* ...',
                     '<25>{#p/toriel}{#f/9}* In a way, I understand what ASGORE must have been going through now.',
                     '<25>{#p/toriel}{#f/10}* The weight of such outrageous demands being made of me...',
                     '<25>{#p/toriel}{#f/9}* ... it is changing who I am as a person.',
                     '<25>{#p/toriel}{#f/5}* Earlier today, in fact.'
                  ]);
                  if (dpapyrus) {
                     addB([
                        '<25>{#p/toriel}{#f/5}* When Sans came to reminisce about his brother, I...',
                        '<25>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.',
                        '<25>{#p/toriel}{#f/1}* He shrugged, and walked off like nothing was wrong...',
                        '<25>{#p/toriel}{#f/5}* But I knew he must have been disappointed.'
                     ]);
                  } else {
                     addB([
                        '<25>{#p/toriel}{#f/5}* When Papyrus came to reminisce about Undyne, I...',
                        '<25>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.',
                        '<25>{#p/toriel}{#f/1}* He tried to act like nothing was wrong...',
                        '<25>{#p/toriel}{#f/5}* But I knew he was probably upset.'
                     ]);
                  }
                  addB([
                     '<25>{#p/toriel}{#f/9}* ... I felt guilty, but with all this pressure bearing down on me...',
                     '<25>{#p/toriel}{#f/5}* I did not see myself having the energy to discuss such a topic.',
                     '<25>{#p/toriel}{#f/5}* ...',
                     '<25>{#p/toriel}{#f/1}* Still.\n* I have not given up on our future.',
                     '<25>{#p/toriel}{#f/1}* No matter what happens to me, or my own well-being...',
                     '<25>{#p/toriel}{#f/0}* At least monsterkind will go free one day.',
                     '<25>{#p/toriel}{#f/1}* That is what matters now, is it not?',
                     '<25>{#p/toriel}{#f/1}* ...',
                     '<25>{#p/toriel}{#f/5}* ...',
                     '<25>{#p/toriel}{#f/9}* ... I suppose... it would be a good time to end the call now.',
                     '<25>{#p/toriel}{#f/9}* There is not much else for me to say.',
                     '<25>{#p/toriel}{#f/5}* ...',
                     '<25>{#p/toriel}{#f/5}* Goodbye, little one.',
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]);
               }
            } else if (royals === 5 && !ddoggo && !dlesserdog && !ddogs && !dgreatdog && !ddoge) {
               k = 'light_dog'; // NO-TRANSLATE

               m = music.dogsong;
               
               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
                  '<32>{#p/basic}* (And yet, there is much to say!)\n* (Much to be excited for!)',
                  '<32>{#s/bark}{#p/event}* 汪汪！',
                  "<32>{#p/basic}* (Wouldn't you like to know more!?)"
               ]);
               addB([
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！\n{#s/bark}* 汪汪！',
                  '<32>{#p/basic}* (When you left, the king was nowhere to be found!)',
                  '<32>{#p/basic}* (Everyone, confused!)\n* (Alphys, unable to take his place!)',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！\n{#s/bark}* 汪汪！',
                  '<32>{#p/basic}* (But she spoke to all of Royal Guard.)\n* (Guard came to an agreement!)',
                  '<32>{#p/basic}* (Doge returned to duty, only this time as queen of the outpost.)',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！\n{#s/bark}* 汪汪！',
                  '<32>{#p/basic}* (It was fun to see the other dogs in agreement.)',
                  '<32>{#p/basic}* (A feeling of pride unlike any other!)',
                  '<32>{#p/basic}* (Of course, their old master taught them all they know.)',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
                  '<32>{#p/basic}* (In the end, they formed the council of dogs to make all decisions.)',
                  '<32>{#p/basic}* (Everyone gets belly rubs and treats for their hard work!)',
                  "<32>{#p/basic}* Huh?\n* Who's there?\n* Did I see someone MOVE!?",
                  '<32>{#s/bark}{#p/event}* 汪汪！',
                  "<32>{#p/basic}* Oh, it's just you.",
                  '<32>{#p/basic}* ...',
                  '<32>{#p/basic}* Wait, who are you talking to!?',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
                  '<32>{#p/basic}* (Doggo wants to talk to you.)\n* (Good luck!)',
                  '<32>{#p/basic}* Give me that thing!',
                  "<32>{#p/basic}* ...\n* So it's you, huh?"
               ]);
               if (
                  SAVE.data.n.state_starton_doggo === 0 &&
                  SAVE.data.n.state_starton_lesserdog === 0 &&
                  SAVE.data.n.state_starton_dogs === 0 &&
                  SAVE.data.n.state_starton_greatdog === 0
               ) {
                  if (SAVE.data.n.state_foundry_doge === 2) {
                     addB([
                        "<32>{#p/basic}* You're the one who thought it'd be funny to pet us all!",
                        "<32>{#p/basic}* Not that... I'm complaining.",
                        "<32>{#p/basic}* But... argh!\n* I couldn't even see you!",
                        '<32>{#p/basic}* That was so unfair.'
                     ]);
                  } else {
                     addB([
                        "<32>{#p/basic}* You're the one who thought it'd be funny to pet us all!",
                        "<32>{#p/basic}* Except for Doge.\n* She's really hard to pet.",
                        "<32>{#p/basic}* But... argh!\n* I couldn't even see you!",
                        '<32>{#p/basic}* I wonder what her secret is...'
                     ]);
                  }
               } else if (
                  SAVE.data.n.state_starton_doggo === 1 &&
                  SAVE.data.n.state_starton_lesserdog === 1 &&
                  SAVE.data.n.state_starton_dogs === 1 &&
                  SAVE.data.n.state_starton_greatdog === 1
               ) {
                  addB([
                     "<32>{#p/basic}* You're the one who thought you could get past us by throwing a wrench around.",
                     '<32>{#p/basic}* I mean, OK, it worked.',
                     '<32>{#p/basic}* But it was really annoying when I found out!',
                     '<32>{#p/basic}* Maybe...',
                     '<32>{#p/basic}* ... we can play again sometime?',
                     "<32>{#p/basic}* No, no, forget I said that.\n* I shouldn't indulge in my fantasies this much."
                  ]);
               } else if (
                  SAVE.data.n.state_starton_doggo === 3 &&
                  SAVE.data.n.state_starton_lesserdog === 3 &&
                  SAVE.data.n.state_starton_dogs === 3
               ) {
                  if (SAVE.data.n.state_starton_greatdog === 3) {
                     addB([
                        "<32>{#p/basic}* You're the one who tried to beat us all up!",
                        '<32>{#p/basic}* You even managed to disappoint Canis Major...',
                        "<32>{#p/basic}* What's wrong with you!?\n* You're awful!",
                        "<32>{#p/basic}* ... that's what the others would say."
                     ]);
                  } else {
                     addB([
                        "<32>{#p/basic}* You're the one who tried to beat us all up!",
                        '<32>{#p/basic}* At least you made Canis Major happy.',
                        "<32>{#p/basic}* So, maybe you're not all bad?",
                        "<32>{#p/basic}* ... to be honest, I didn't mind it..."
                     ]);
                  }
               } else if (SAVE.data.n.state_starton_doggo === 0) {
                  addB([
                     "<32>{#p/basic}* You're the one who pet me when I couldn't even see you!",
                     '<32>{#p/basic}* I bet you thought that was really funny.',
                     '<32>{#p/basic}* I bet I looked really cute.',
                     "<32>{#p/basic}* ... no, wait, I didn't mean that!"
                  ]);
               } else if (SAVE.data.n.state_starton_doggo === 1) {
                  addB([
                     "<32>{#p/basic}* You're the one who played fetch with me, right?",
                     "<32>{#p/basic}* Wow!\n* I'd love to do that again sometime.",
                     "<32>{#p/basic}* But... that's just a fantasy."
                  ]);
               } else {
                  addB([
                     "<32>{#p/basic}* You're the one who tried to beat me up!",
                     '<32>{#p/basic}* That was really rude.\n* And mean.',
                     "<32>{#p/basic}* I definitely didn't like that.",
                     '<32>{#p/basic}* ...'
                  ]);
               }
               addB([
                  '<32>{#p/basic}* Anyway!\n* Did you hear about the humans we released!?',
                  "<32>{#p/basic}* They were all asleep in some weird archive thing.\n* It's way above my paw grade.",
                  '<32>{#p/basic}* All I know is, I get to take care of a human!',
                  "<32>{#p/basic}* It was Doge's idea.\n* We all get one human each.",
                  "<32>{#p/basic}* They're like pets???",
                  "<32>{#p/basic}* Don't worry, we don't mistreat them.\n* They're under our protection!",
                  '<32>{#p/basic}* Which is weird... since we were like, trying to hunt them down before or something.'
               ]);
               if (royals < 6 || mdeaths > 9) {
                  addB([
                     '<32>{#p/basic}* Still, they kind of have to be.',
                     '<32>{#p/basic}* People REALLY seem to dislike humans these days.'
                  ]);
               } else {
                  addB(['<32>{#p/basic}* But times change.\n* And so must we!']);
               }
               addB([
                  '<32>{#p/basic}* Hey, WAIT!!\n* My human is coming this way RIGHT NOW!!',
                  '<32>{#p/human}{#v/3}{@fill=#003cff}* Master Doggo!\n* Master Doggo!\n* You have to come and see!',
                  '<32>{#p/basic}* What is it now.',
                  "<32>{#p/human}{#v/3}{@fill=#003cff}* You're going to miss the grand opening!",
                  '<32>{#p/basic}* Guess I better go see what this is...',
                  '<32>{#p/basic}* ...',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！\n{#s/bark}* 汪汪！',
                  "<32>{#p/basic}* I get it, OK!?\n* Heck, I'm almost there!",
                  '<32>{#p/basic}* ...',
                  '<32>{#p/basic}* What the...\n* WHAT IS THAT THING!?',
                  "<32>{#p/basic}* THAT WASN'T PART OF THE CITY'S SKYLINE BEFORE!!",
                  "<32>{#p/human}{#v/3}{@fill=#003cff}* It's your brand new dog shrine!\n* Just like you wanted!",
                  "<32>{#p/basic}* It's... in constant motion...",
                  '<32>{#p/basic}* WELL THIS IS SOMETHING!',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！\n{#s/bark}* 汪汪！'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB([
                     '<32>{#p/basic}* (Shrines, good for peace!)\n* (Help relieve fears of being attacked by humans!)',
                     '<32>{#p/basic}* (A reminder of the stability the new regime offers you, dog or otherwise!)'
                  ]);
               } else {
                  addB([
                     '<32>{#p/basic}* (Shrines, good for peace!)\n* (Encourage good behavior in all citizens!)',
                     '<32>{#p/basic}* (A reminder of the blessings you may receive for being good, dog or otherwise!)'
                  ]);
               }
               addB([
                  '<32>{#p/basic}* Yes, yes, I know.\n* It looks great... looks just like me.',
                  '<32>{#p/basic}* ... thanks.',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
                  "<32>{#p/basic}* (And that's the last one!)\n* (All council dogs have shrines now!)",
                  '<32>{#p/basic}* PERFECT!!\n* Can I go back to my phone call now?',
                  '<32>{#s/bark}{#p/event}* 汪汪！',
                  "<32>{#p/human}{#v/3}{@fill=#003cff}* I'll have to show the others!",
                  '<32>{#p/basic}* HEY!\n* Before you go...',
                  "<32>{#p/basic}* I wouldn't have seen it on time without you.\n* Have a treat.",
                  '<32>{#p/human}{#v/3}{@fill=#003cff}* Master Doggo...!',
                  "<32>{#p/basic}* Go on, tell your friends.\n* BUT DON'T SHARE!",
                  '<32>{#p/basic}* ...',
                  '<32>{#p/basic}* So, around here, everyone understands how things work.',
                  '<32>{#p/basic}* You visit the shrine, do a good job at work, and be good at home, too.',
                  "<32>{#p/basic}* And maybe, if you're really really good, you'll get rewarded!",
                  "<32>{#p/basic}* It's perfect.\n* Nobody breaks the rules.",
                  '<32>{#p/basic}* Except those pesky shopkeepers at the rec center.',
                  "<32>{#p/basic}* THEY'RE JUST LAZY AND DISORGANIZED!",
                  '<32>{#p/basic}* But they sell cool junk, so we give them a pass.',
                  '<32>{#p/basic}* Hold on.\n* Are we giving anyone else a pass??',
                  '<32>{#p/basic}* WHAT HAS OUR SOCIETY COME TO!',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！\n{#s/bark}* 汪汪！'
               ]);
               if (!dmuffet) {
                  addB([
                     '<32>{#p/basic}* (Doggo, new job for you!)\n* (Spider queen, stirring up trouble again.)',
                     '<32>{#p/basic}* (A punishment is required!)',
                     "<32>{#p/basic}* ... ugh.\n* I don't like disciplining people.",
                     '<32>{#s/bark}{#p/event}* 汪汪！',
                     '<32>{#p/basic}* (Without discipline, dog society falls out of balance.)',
                     "<32>{#p/basic}* I guess.\n* But can't someone else do it?",
                     '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
                     "<32>{#p/basic}* (All council dogs must practice discipline.)\n* (It's your turn!)"
                  ]);
               } else if (!dpapyrus) {
                  addB([
                     '<32>{#p/basic}* (Doggo, new job for you!)\n* (Tall skeleton, deserving of bonus rewards.)',
                     '<32>{#p/basic}* (Offer them to him!)',
                     '<32>{#p/basic}* ... ugh.\n* I swear we give him bonus rewards every day.',
                     '<32>{#s/bark}{#p/event}* 汪汪！',
                     '<32>{#p/basic}* (Tall skeleton sets a very good example!)',
                     "<32>{#p/basic}* At this rate, he'll be on the dog council himself.",
                     '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
                     '<32>{#p/basic}* (We are considering the possibility.)\n* (Now do your duty!)'
                  ]);
               } else {
                  addB([
                     '<32>{#p/basic}* (Doggo, new job for you!)\n* (Supplies of dog chow are running low.)',
                     '<32>{#p/basic}* (Can you help refill?)',
                     '<32>{#p/basic}* ... ugh.\n* Why do I get all the dirty work around here.',
                     '<32>{#s/bark}{#p/event}* 汪汪！',
                     "<32>{#p/basic}* (Doggo, only dog who doesn't mind dirty work.)",
                     '<32>{#p/basic}* Lies.\n* Doge likes doing dirty jobs way more than me.',
                     '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
                     '<32>{#p/basic}* (Doge cannot do this job.)\n* (Doge is queen.)'
                  ]);
               }
               addB([
                  '<32>{#p/basic}* OK.\n* Fine.',
                  "<32>{#p/basic}* Well, I guess I'll have to end the message here.",
                  '<32>{#p/basic}* Have fun out there, wherever you are.',
                  "<32>{#p/basic}* ... I'd give the phone back to that annoying dog, but the message would never end.",
                  '<32>{#p/basic}* HOW CAN YOU TALK FOR SO LONG WITHOUT GETTING TIRED!?',
                  '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！\n{#s/bark}* 汪汪！',
                  '<32>{#p/basic}* OK already!\n* Quit rushing me!!',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]);
            } else if (!dmuffet) {
               k = 'light_muffet'; // NO-TRANSLATE

               m = music.spiderboss;
               
               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<32>{#p/basic}{#s/spiderLaugh}* Oh, hello, dearie~',
                  '<32>{#p/basic}* Are you doing well?',
                  "<32>{#p/basic}* Oh, who am I kidding~\n* It's not like I cared about you anyway~",
                  "<32>{#p/basic}* I just wanted to let you know about all the fun you're missing out on!"
               ]);
               addB([
                  '<32>{#p/basic}{#s/spiderLaugh}* So, after you departed from the outpost...',
                  '<32>{#p/basic}* By line of succession, Alphys was put in charge as queen~',
                  "<32>{#p/basic}* But you see, dearie, she didn't think she could do it!"
               ]);
               if (dmettaton) {
                  addB(["<32>{#p/basic}* Don't blame her though~\n* She let her pet TV star die such a tragic death!"]);
               } else {
                  addB([
                     "<32>{#p/basic}* Don't blame her though~\n* Without big boy Asgore to hold her hand, she was helpless!"
                  ]);
               }
               if (royals < 2) {
                  addB([
                     "<32>{#p/basic}* It's so unfortunate there was nobody left to take charge, don't you think?",
                     '<32>{#p/basic}* Lucky for her, I was more than willing to appoint myself~',
                     '<32>{#p/basic}* Ahuhuhu~\n* She rejected me at first, but after a little \"persuasion...\"',
                     '<32>{#p/basic}* She was quite eager to hand the outpost over to me!'
                  ]);
               } else {
                  addB([
                     '<32>{#p/basic}* She held a meeting with the royal guards to hire someone else, but...',
                     "<32>{#p/basic}* Without their captain, they'd fallen into disorder!\n* They needed direction~",
                     '<32>{#p/basic}* Ahuhuhu~\n* Thankfully, I was more than willing to give it to them!',
                     '<32>{#p/basic}* And from there, the outpost was all but mine.'
                  ]);
               }
               if (30 <= SAVE.data.n.bully) {
                  if (hkills > 9) {
                     addB([
                        '<33>{#p/basic}* With your killing and bullying, the people were made so afraid and obedient~'
                     ]);
                  } else {
                     addB(['<32>{#p/basic}* With your bullying, the people were made so afraid and obedient~']);
                  }
                  addB([
                     '<32>{#p/basic}* Like they were just begging for a strong, assertive leader to take her rightful place!',
                     "<32>{#p/basic}* It's incredible just how quickly they all came around.",
                     '<32>{#p/basic}* For that, dearie, I have you to thank~',
                     '<25>{#p/alphys}{#f/21}* Oh, come ON.\n* You think you can just blame it all on THEM?'
                  ]);
               } else {
                  addB([
                     "<32>{#p/basic}* Oh, dearie...\n* It's a shame you're not here to see this~",
                     '<32>{#p/basic}* Not only do the people do whatever I want, whenever I want...',
                     '<32>{#p/basic}* But some of them even do it willingly!',
                     '<32>{#p/basic}* Most of them still whine and complain like babies, though.',
                     '<25>{#p/alphys}{#f/21}* Well GEE, I wonder why THAT might be.'
                  ]);
               }
               addB([
                  "<32>{#p/basic}{#s/spiderLaugh}* Oh, Alphys-dear~\n* Didn't I tell you to clean out the fluid network today?",
                  "<32>{#p/basic}* It's gotten so dirty after all these years...",
                  "<32>{#p/basic}* If you don't clean it, then who will?"
               ]);
               if (royals < 2) {
                  addB([
                     "<25>{#p/alphys}{#f/22}* I DON'T KNOW, MAYBE SOMEONE WHO'S ACTUALLY QUALIFIED!?",
                     "<32>{#p/basic}{#s/spiderLaugh}* Oh, you ARE such a pest, aren't you~",
                     "<32>{#p/basic}* But... ahuhuhu~\n* You know what happens to pests, don't you?",
                     '<25>{#p/alphys}{#f/2}* ... n-no, please, I...',
                     "<25>{#p/alphys}{#f/3}* I-I'll do it!\n* You just watch me, I'll do it right now!",
                     '<32>{#p/basic}{#s/spiderLaugh}* Too late, Alphys-dear~',
                     '<32>{#p/basic}* Spiders, take her away!',
                     '<32>{#p/basic}* It would seem she needs another stay in the Aurora Zone~',
                     "<25>{#p/alphys}{#f/22}* No, PLEASE!!\n* I'LL DO ANYTHING!!",
                     '<32>{#p/basic}{#s/spiderLaugh}* See you on the other side~'
                  ]);
               } else {
                  addB([
                     "<26>{#p/alphys}{#f/24}* Maybe you'd like to try.",
                     "<32>{#p/basic}{#s/spiderLaugh}* Oh, but you know that'll never happen~",
                     "<32>{#p/basic}* And... ahuhuhu~\n* Talk like that is what gets you in trouble, I'm afraid~",
                     '<25>{#p/alphys}{#f/27}* Oh, does it now?',
                     "<25>{#p/alphys}{#f/28}* Eheh...\n* Maybe you'll be the one who's in trouble soon.",
                     '<32>{#p/basic}{#s/spiderLaugh}* Enough talk, Alphys-dear~\n* I know exactly what kind of punishment you deserve!',
                     '<32>{#p/basic}* Spiders, take her away!',
                     '<32>{#p/basic}* It would seem she needs another stay in the Aurora Zone~',
                     '<25>{#p/alphys}{#f/29}* Enjoy your last moments in power.',
                     "<32>{#p/basic}{#s/spiderLaugh}* Like I'd fall for that~"
                  ]);
               }
               addB([
                  '<32>{#p/basic}* ...',
                  '<32>{#p/basic}* Ahuhuhu~\n* Poor Alphys-dear, always getting into trouble~',
                  "<32>{#p/basic}* It's a good thing we have the Aurora Zone to straighten out her behavior!",
                  '<32>{#p/basic}* With the power of the archive, we can send a monster into a virtual world~',
                  '<32>{#p/basic}* Best of all, we control how time passes there~',
                  '<32>{#p/basic}* Days, months, years...',
                  '<32>{#p/basic}* All going by in the blink of an eye!',
                  '<32>{#p/basic}* We spiders LOVE to make them suffer for a long time when they misbehave!'
               ]);
               if (dmettaton) {
                  addB([
                     '<32>{#p/napstablook}* sorry to interrupt...',
                     "<32>{#p/napstablook}* i just came to let you know that i've done what you wanted me to......",
                     '<32>{#p/basic}{#s/spiderLaugh}* Ahuhuhu~\n* Very good, my little ghost-munchkin~',
                     '<32>{#p/basic}* Have you found and identified each target on my list?',
                     '<32>{#p/napstablook}* of course......\n* i wrote down their locations as best i could',
                     "<32>{#p/basic}{#s/spiderLaugh}* Oh, wonderful!\n* You're really such a good and loyal spy, aren't you~",
                     '<32>{#p/napstablook}* .........',
                     '<32>{#p/napstablook}* i guess.........',
                     "<32>{#p/napstablook}* it'd just be nice if... i knew what you were going to do with these people.........",
                     "<32>{#p/basic}{#s/spiderLaugh}* You poor thing~\n* You don't need to concern yourself with that!",
                     '<32>{#p/basic}* Rest assured, everyone will get what they deserve in the end~',
                     '<32>{#p/napstablook}* ...',
                     "<32>{#p/napstablook}* i'd like to go rest now, it's been a long day",
                     '<32>{#p/basic}{#s/spiderLaugh}* Of course, my little ghost-munchkin~',
                     '<32>{#p/basic}* Just be sure to show up on time tomorrow~'
                  ]);
                  if (royals < 2) {
                     addB([
                        '<32>{#p/napstablook}* ...',
                        '<32>{#p/napstablook}* will do',
                        "<32>{#p/basic}{#s/spiderLaugh}* ... as you can see, there's no citizen alive who can hide from my loyal spies!"
                     ]);
                  } else {
                     addB(['<32>{#p/napstablook}* ...', "<32>{#p/napstablook}* it's now or never, alphys!"]);
                  }
               } else {
                  addB([
                     '<32>{#p/mettaton}* YOU DONE BOASTING ABOUT YOUR ACCOMPLISHMENTS YET?',
                     "<32>{#p/mettaton}* I'M HERE, JUST AS REQUESTED.",
                     "<32>{#p/basic}{#s/spiderLaugh}* Ahuhuhu~\n* Just the robot I've been wanting to see!",
                     '<32>{#p/basic}* So would you say audiences are enjoying the new TV lineup?',
                     '<32>{#p/mettaton}* THE RATINGS ARE TERRIBLE.\n* NOBODY LIKES IT.',
                     '<32>{#p/basic}{#s/spiderLaugh}* Oh, wonderful!\n* Like music to my ears~',
                     '<32>{#p/mettaton}* YOU KNOW...'
                  ]);
                  if (iFancyYourVilliany()) {
                     addB(['<32>{#p/mettaton}* PEOPLE WANT VILLAINS, AND SOMEBODY TO ROOT AGAINST.']);
                  } else {
                     addB(['<32>{#p/mettaton}* PEOPLE WANT VARIETY, AND FAMOUS GUEST ROLES.']);
                  }
                  addB([
                     "<32>{#p/mettaton}* NOT THE UTTER GARBAGE -YOU'RE- PUSHING ON EVERYONE.",
                     "<32>{#p/basic}{#s/spiderLaugh}* The point isn't to give people what they want...",
                     "<32>{#p/basic}* It's to dull their minds until they can't refuse me anymore~",
                     '<32>{#p/mettaton}* ... UGH, CAN I GO NOW?'
                  ]);
                  if (dpapyrus) {
                     addB([
                        "<32>{#p/mettaton}* I'M EXHAUSTED ENOUGH AS IT IS.",
                        '<32>{#p/basic}{#s/spiderLaugh}* Sure thing, darling-dear~',
                        "<32>{#p/basic}* Just remember why you're doing this for me~"
                     ]);
                  } else {
                     addB([
                        '<32>{#p/mettaton}* PAPYRUS IS STILL OUT THERE WAITING FOR ME.',
                        '<32>{#p/basic}{#s/spiderLaugh}* Is he now?',
                        "<33>{#p/mettaton}* WE'RE TRYING OUT A NEW TV SHOW.\n* A SPIDER BAKERY SHOW.",
                        '<32>{#p/basic}{#s/spiderLaugh}* A bakery show, you say~',
                        '<32>{#p/basic}* Hmm...',
                        "<32>{#p/basic}* Well, as long as the audiences can't stand it!"
                     ]);
                  }
                  if (royals < 2) {
                     addB([
                        '<32>{#p/mettaton}* ...',
                        '<32>{#p/mettaton}* GOODBYE.',
                        '<32>{#p/basic}{#s/spiderLaugh}* ... as you can see, I have complete control of the entertainment here, too!'
                     ]);
                  } else {
                     addB(['<32>{#p/mettaton}* ...', "<32>{#p/mettaton}* NOW, ALPHYS!\n* NOW'S YOUR CHANCE!"]);
                  }
               }
               if (royals < 2) {
                  addB([
                     "<32>{#p/basic}* Isn't it just blissful?",
                     "<32>{#p/basic}* Ahuhuhu~\n* I so badly want to see how you'd fare here~",
                     '<32>{#p/basic}* The other humans have been doing splendidly!',
                     '<32>{#p/basic}* In fact, despite them being traumatized when they first left the archive...',
                     "<32>{#p/basic}* They've become my most loyal servants!",
                     '<32>{#p/basic}* Oh, dearie...\n* You must be so lonely without a direction in life~',
                     "<32>{#p/basic}* If it ever becomes too much, you're always welcome here with us!",
                     "<32>{#p/basic}* But for now~\n* I'll be seeing you~",
                     '<32>{#p/basic}* On the other side~',
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]);
               } else {
                  addB([
                     '<32>{#p/basic}* Ahuhuhu~\n* What are you- hngh!',
                     '<25>{#p/alphys}{#f/28}* Well, well...\n* Look who we have here.',
                     '<32>{#p/basic}{#s/spiderLaugh}* No, let me go...!',
                     "<32>{#p/basic}* You royal guards... y-you're all the same!",
                     "<32>{#p/basic}* You need a strong leader who can tell you what's right and what's wrong!",
                     "<25>{#p/alphys}{#f/29}* It's no use.\n* They've chosen ME as their leader now.",
                     '<32>{#p/basic}{#s/spiderLaugh}* But... how?',
                     '<32>{#p/basic}* I had you in custody, the spiders had you under escort~',
                     "<32>{#p/basic}* And you...\n* You're supposed to be weak!",
                     "<32>{#p/basic}* You couldn't hope to command the Royal Guard~",
                     "<25>{#p/alphys}{#f/17}* Y'know, I've learned a lot since you took over the outpost.",
                     "<25>{#p/alphys}{#f/5}* Everything you've done to make all our lives miserable...",
                     '<25>{#p/alphys}{#f/16}* Surviving it only made me more determined to stop you!',
                     "<25>{#p/alphys}{#f/7}* God, I've always wanted to say that...",
                     "<32>{#p/basic}{#s/spiderLaugh}* No... no!\n* You can't do this to me!",
                     '<25>{#p/alphys}{#f/27}* Guards...?',
                     '<32>{#p/basic}{#s/spiderLaugh}* No~\n* Please!',
                     "<25>{#p/alphys}{#f/29}* Let's see how SHE likes the Aurora Zone.",
                     '<25>{#p/alphys}{#f/27}* ...',
                     "<25>{#p/alphys}{#f/27}* Huh... what's this?",
                     '<25>{#p/alphys}{#f/27}* Was she... talking to someone on this thing?',
                     '<25>{#p/alphys}{#f/17}* Weird.',
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]);
               }
            } else if (!dpapyrus) {
               k = 'light_papyrus'; // NO-TRANSLATE

               m = music.papyrus;
               
               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<18>{#p/papyrus}{#f/4}IS THIS THING EVEN WORKING?',
                  '<18>{#p/papyrus}{#f/0}OH! OH!\nIT JUST WENT TO VOICE-MAIL!',
                  '<18>{#p/papyrus}{#f/6}NO WONDER I WAS SO CONFUSED!',
                  '<18>{#p/papyrus}{#f/5}WELL HELLO, HUMAN!\nI HAVE... A LOT TO TALK ABOUT.'
               ]);
               addB([
                  '<18>{#p/papyrus}{#f/4}SO... I KIND OF BECAME THE KING.',
                  "<18>{#p/papyrus}{#f/6}WAIT!!\nDON'T CLICK OFF!!",
                  "<18>{#p/papyrus}{#f/5}IT'S NOT AS CRAZY AS IT SOUNDS...",
                  "<18>{#p/papyrus}{#f/0}UH, I'LL JUST START FROM THE BEGINNING.",
                  '<18>{#p/papyrus}{#f/5}SO, AFTER YOU LEFT...',
                  "<18>{#p/papyrus}{#f/5}THE OUTPOST'S LEADERSHIP KIND OF FELL APART.",
                  "<18>{#p/papyrus}{#f/6}ALPHYS, WHO WAS MEANT TO TAKE ASGORE'S PLACE...",
                  "<18>{#p/papyrus}{#f/5}DIDN'T REALLY WANT TO BE THE QUEEN.",
                  "<18>{#p/papyrus}{#f/5}AND SINCE UNDYNE STILL HASN'T RE-APPEARED...",
                  '<18>{#p/papyrus}{#f/4}ALPHYS HAD TO HOLD A MEETING TO FIND A NEW LEADER.'
               ]);
               if (royals < 2) {
                  addB([
                     '<18>{#p/papyrus}{#f/4}UNFORTUNATELY, THE ROYAL GUARD WAS ALL BUT GONE.',
                     '<18>{#p/papyrus}{#f/5}SO... THAT MEETING NEVER HAPPENED.'
                  ]);
               } else {
                  addB([
                     '<18>{#p/papyrus}{#f/4}THE ROYAL GUARD ARGUED, AND ARGUED SOME MORE...',
                     "<18>{#p/papyrus}{#f/5}BUT NOBODY AGREED ON WHO'D BE THE BEST FIT."
                  ]);
               }
               addB([
                  '<18>{#p/papyrus}{#f/6}AFTER THAT, ALPHYS JUST SORT OF... LEFT.',
                  '<18>{#p/papyrus}{#f/6}LEFT US WITH NOBODY IN CHARGE, THAT IS.',
                  '<18>{#p/papyrus}{#f/5}AND FOR A WHILE...',
                  '<18>{#p/papyrus}{#f/6}THINGS WERE... SURPRISINGLY CALM!',
                  "<18>{#p/papyrus}{#f/0}BUT I KNEW THAT WOULDN'T LAST.",
                  '<18>{#p/papyrus}{#f/4}SO, EVENTUALLY...',
                  '<18>{#p/papyrus}{#f/9}I TOOK MATTERS INTO MY OWN HANDS!',
                  '<18>{#p/papyrus}{#f/5}YOU CAN GUESS HOW I BECAME THE KING FROM THERE.',
                  '<18>{#p/papyrus}{#f/0}BUT HEY!\nTHINGS HAVE BEEN GOING WELL!',
                  "<18>{#p/papyrus}{#f/0}I'VE ENSTATED A FEW POLICIES TO HELP MAKE FRIENDS.",
                  '<18>{#p/papyrus}{#f/4}NOT JUST -MY- FRIENDS...',
                  "<18>{#p/papyrus}{#f/0}BUT EVERYONE ELSE'S FRIENDS, TOO!",
                  '<18>{#p/papyrus}{#f/9}AS A RESULT, OUTPOST MORALE IS ON THE RISE!',
                  '<19>{#p/papyrus}{#f/4}AND ONCE OUR FRIENDSHIP POWER REACHES CRITICAL...',
                  "<18>{#p/papyrus}{#f/9}I'LL EVEN BE ABLE TO RELEASE THE HUMANS!",
                  '<18>{#p/papyrus}{#f/0}HOPEFULLY WITH ONLY MINIMAL RIOTING.',
                  "<25>{#p/sans}{#f/0}* heh.\n* that'll be nice.",
                  '<25>{#p/sans}{#f/3}* people have been clinging to their anger for too long.',
                  "<18>{#p/papyrus}{#f/0}OH, HELLO SANS!\nI'M HAPPY TO SEE YOU UP AND ABOUT.",
                  '<25>{#p/sans}{#f/0}* actually, i just got off from work.',
                  "<25>{#p/sans}{#f/3}* it's a holiday today.",
                  '<18>{#p/papyrus}{#f/4}A HOLIDAY, EH?',
                  '<18>{#p/papyrus}{#f/5}(SIGH...)',
                  "<18>{#p/papyrus}{#f/5}EVER SINCE YOU STARTED WORKING AT GRILLBY'S...",
                  "<18>{#p/papyrus}{#f/4}THEY'VE BEEN GIVING YOU MORE OF THOSE THINGS.",
                  "<25>{#p/sans}{#f/3}* nah, don't worry.\n* you'll like this one...",
                  '<25>{#p/sans}{#f/2}* it\'s the new semi- annual \"get-along day.\"',
                  '<18>{#p/papyrus}{#f/1}OH!!! RIGHT!!!\nI TOTALLY FORGOT I ENSTATED THAT!!!',
                  '<18>{#p/papyrus}{#f/0}THE DAY WHERE ALL YOUR ENEMIES TURN TO FRIENDS.',
                  '<18>{#p/papyrus}{#f/4}SO DID YOU MAKE ANY \"FRENEMIES\" TODAY???',
                  '<25>{#p/sans}{#f/0}* 嗯...',
                  "<25>{#p/sans}{#f/3}* that'd require having enemies to begin with.",
                  '<18>{#p/papyrus}{#f/5}WELL... UH...',
                  '<18>{#p/papyrus}{#f/6}YOU CAN JUST BETTER AN EXISTING FRIENDSHIP THEN!',
                  '<25>{#p/sans}{#f/2}* well, all my friendships are already pretty good.',
                  "<25>{#p/sans}{#f/3}* ... guess this just isn't my holiday.",
                  "<18>{#p/papyrus}{#f/0}OH.\nTHAT'S OKAY.",
                  '<18>{#p/papyrus}{#f/9}\"NEW PALS DAY\" IS RIGHT AROUND THE CORNER!',
                  '<25>{#p/sans}{#f/0}* lemme guess... the day where you make even MORE friends?',
                  '<18>{#p/papyrus}{#f/0}NYEH HEH HEH!\nOF COURSE!',
                  '<25>{#p/sans}{#f/0}* i look forward to it, then.',
                  '<25>{#p/sans}{#f/3}* ...',
                  "<25>{#p/sans}{#f/3}* y'know, buddo... when you first left the outpost...",
                  "<25>{#p/sans}{#f/0}* things weren't as rosy as they are now.",
                  '<25>{#p/sans}{#f/3}* people blamed each other for letting it all happen...',
                  '<25>{#p/sans}{#f/3}* for what you did to them...',
                  '<25>{#p/sans}{#f/0}* but, over time, my brother really turned things around.'
               ]);
               if (royals < 2) {
                  addB([
                     '<25>{#p/sans}{#f/3}* heck, despite the fall of the royal guard...',
                     '<25>{#p/sans}{#f/0}* he still made the best of it.',
                     "<18>{#p/papyrus}{#f/0}YEAH!! I'M REALLY HAPPY WITH HOW I'VE DONE.",
                     '<18>{#p/papyrus}{#f/9}THE OUTPOST HAS NEVER BEEN BETTER!'
                  ]);
               } else {
                  addB([
                     '<25>{#p/sans}{#f/2}* heck, even the royal guard improved.',
                     '<18>{#p/papyrus}{#f/0}YEAH!! INSTEAD OF GUARDING AGAINST HUMANS...',
                     '<18>{#p/papyrus}{#f/9}THEY PROTECT US MONSTERS FROM SPITE AND VITRIOL!'
                  ]);
               }
               addB([
                  '<18>{#p/papyrus}{#f/5}...',
                  '<18>{#p/papyrus}{#f/5}WHATEVER YOU MAY HAVE DONE, HUMAN...',
                  '<18>{#p/papyrus}{#f/0}JUST KNOW THAT THINGS TURNED OUT OKAY.',
                  '<18>{#p/papyrus}{#f/6}AND THAT I FORGIVE YOU!!!'
               ]);
               if (
                  world.edgy ||
                  (world.population_area('s') <= 0 && !world.bullied_area('s')) // NO-TRANSLATE

               ) {
                  addB(['<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE GOT OFF TO A ROUGH START...']);
               } else if (SAVE.data.n.plot_date < 1.1) {
                  if (SAVE.data.b.flirt_papyrus) {
                     addB(['<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HAD THAT DATE...']);
                  } else {
                     addB(['<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HUNG OUT...']);
                  }
               } else {
                  addB(["<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HUNG OUT AT UNDYNE'S..."]);
               }
               addB([
                  "<18>{#p/papyrus}{#f/0}I'D STILL BE HAPPY TO CALL YOU MY FRIEND.",
                  "<25>{#p/sans}{#f/2}* aw, that's sweet.",
                  "<25>{#p/sans}{#f/3}* it's too bad we won't get to hear their reaction.",
                  "<18>{#p/papyrus}{#f/7}YEAH, WELL, IT'S STILL WORTH SAYING!!",
                  '<18>{#p/papyrus}{#f/0}THE IMPORTANT THING IS THAT THEY HEARD IT.',
                  '<25>{#p/sans}{#f/0}* heh.\n* take care of yourself out there.',
                  "<25>{#p/sans}{#f/2}* 'cause at least one person's rootin' for ya.",
                  "<18>{#p/papyrus}{#f/0}... THAT'S ME!!!",
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]);
            } else {
               k = 'light_sans'; // NO-TRANSLATE

               m = music.papyrusLow;
               
               addA([
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<25>{#p/sans}{#f/0}* 你好呀。',
                  "<25>{#p/sans}{#f/3}* 近况可好？"
               ]);
               addB([
                  '<25>{#p/sans}{#f/0}* after you left, the king vanished into thin air.',
                  '<25>{#p/sans}{#f/3}* why?\n* nobody knows.',
                  '<25>{#p/sans}{#f/2}* ... maybe he just went on vacation.',
                  '<25>{#p/sans}{#f/0}* anyway, alphys was supposed to replace him.',
                  "<25>{#p/sans}{#f/3}* but she didn't consider herself to be cut out for the job."
               ]);
               if (royals < 2) {
                  addB([
                     '<25>{#p/sans}{#f/0}* she thought about putting a royal guard in her place...',
                     '<25>{#p/sans}{#f/0}* but those guys all but vanished, too.',
                     '<25>{#p/sans}{#f/3}* why?\n* hard to say.',
                     '<25>{#p/sans}{#f/2}* ... maybe they just got bored of their jobs.'
                  ]);
               } else {
                  addB([
                     '<25>{#p/sans}{#f/0}* she thought about putting a royal guard in her place...',
                     "<25>{#p/sans}{#f/0}* but with their captain gone, they couldn't make up their minds.",
                     '<25>{#p/sans}{#f/3}* why?\n* hard to say.',
                     "<25>{#p/sans}{#f/2}* ... maybe undyne just couldn't be bothered anymore."
                  ]);
               }
               addB([
                  '<25>{#p/sans}{#f/0}* after that, alphys fled the citadel and left us without a leader.',
                  "<25>{#p/sans}{#f/3}* you'd think the former queen might return, or...",
                  '<25>{#p/sans}{#f/3}* maybe someone overzealous would take the throne instead.',
                  '<25>{#p/sans}{#f/0}* and yet, neither of those things happened.',
                  '<25>{#p/sans}{#f/3}* why?\n* you tell me.',
                  '<25>{#p/sans}{#f/2}* ... maybe all the potential leaders out there just gave up.',
                  "<25>{#p/sans}{#f/0}* regardless, i realized it'd be up to me to do something.",
                  '<25>{#p/sans}{#f/0}* so i took over for asgore and alphys myself.',
                  "<25>{#p/sans}{#f/3}* it hasn't been easy, what with all the leadership troubles...",
                  "<25>{#p/sans}{#f/3}* not to mention keeping the humans' existence a secret.",
                  '<25>{#p/sans}{#f/0}* but after i implemented my pro-slacker policy...',
                  '<25>{#p/sans}{#f/2}* people seemed to relax quite a bit.'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB(['<25>{#p/sans}{#f/3}* a far cry from how scared they were of being beat up before.']);
               } else {
                  addB(['<26>{#p/sans}{#f/3}* a far cry from how distraught they were about asgore and undyne.']);
               }
               addB([
                  '<25>{#p/sans}{#f/0}* all in all, things are going pretty well.',
                  '<25>{#p/sans}{#f/0}* the humans are safe and sound, the citizens still have hope...',
                  "<25>{#p/sans}{#f/3}* so what's the catch?",
                  '<25>{#p/sans}{#f/0}* why does it all feel so... hopeless?',
                  "<25>{#p/sans}{#f/3}* well, to be honest, it's anyone's guess.",
                  '<25>{#p/sans}{#f/3}* ...',
                  "<25>{*}{#x0}{#p/darksans}{#f/1}{#i/5}* ... maybe you're just a dirty brother killer."
               ]);
            }
         } else {
            k = 'light_generic'; // NO-TRANSLATE

            
            addA([
               '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
               '<25>{#p/alphys}{#f/8}* Hiya...',
               '<25>{#p/alphys}{#f/6}* Is anyone there?',
               "<25>{#p/alphys}{#f/10}* I hope it's not too much trouble...",
               '<25>{#p/alphys}{#f/5}* I just wanted to let you know how things are going out here.'
            ]);
            addB([
               '<25>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.',
               "<25>{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
               '<25>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...',
               "<25>{#p/alphys}{#f/11}* I didn't really feel like I'd be the best fit for the job.",
               '<26>{#p/alphys}{#f/5}* Well, I had a talk with some of the royal guards, and...',
               '<25>{#p/alphys}{#f/6}* We agreed Terrestria should be appointed as the queen instead.',
               '<25>{#p/alphys}{#f/15}* Her first action was a little controversial, though...',
               '<25>{#p/alphys}{#f/17}* Cutting the Royal Guard in half and loosening its policies.'
            ]);
            if (SAVE.data.b.undyne_respecc) {
               addB([
                  "<25>{#p/alphys}{#f/26}* Undyne wasn't happy about it at first, but...",
                  '<25>{#p/alphys}{#f/8}* She came around to it in the end.',
                  '<25>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?',
                  '<25>{#p/alphys}{#f/27}* ...',
                  "<25>{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  '<25>{#p/alphys}{#f/10}* U-Undyne!?',
                  '<25>{#p/undyne}{#f/1}* That last human proved their kind CAN fight with honor.',
                  '<25>{#p/undyne}{#f/1}* That they CAN show respect to their opponents in battle.',
                  "<25>{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  '<25>{#p/undyne}{#f/14}* I doubt the Royal Guard will expand again any time soon.',
                  '<25>{#p/undyne}{#f/1}* Especially after the former queen returned, and...',
                  '<25>{#p/undyne}{#f/1}* ... gave the new one her full support.'
               ]);
            } else if (2.1 <= SAVE.data.n.plot_date) {
               addB([
                  "<25>{#p/alphys}{#f/26}* Undyne wasn't happy about it at first, but...",
                  '<25>{#p/alphys}{#f/8}* She came around to it in the end.',
                  '<25>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?',
                  '<25>{#p/alphys}{#f/27}* ...',
                  "<25>{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  '<25>{#p/alphys}{#f/10}* U-Undyne!?',
                  '<25>{#p/undyne}{#f/14}* That last human proved their kind CAN in fact be... well, kind.',
                  '<25>{#p/undyne}{#f/1}* That they CAN show mercy to their opponents in battle.',
                  "<25>{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  '<25>{#p/undyne}{#f/14}* I doubt the Royal Guard will expand again any time soon.',
                  '<25>{#p/undyne}{#f/1}* Especially after the former queen returned, and...',
                  '<25>{#p/undyne}{#f/1}* ... gave the new one her full support.'
               ]);
            } else {
               addB([
                  "<25>{#p/alphys}{#f/19}* Undyne... wasn't happy about this at all.",
                  '<25>{#p/alphys}{#f/19}* She still blames you for what happened to the king, so...',
                  "<25>{#p/alphys}{#f/20}* It's... understandable why she'd be opposed to it.",
                  '<25>{#p/alphys}{#f/20}* ...',
                  "<25>{#p/undyne}{#f/16}* Yeah, it's a pretty stupid policy if you ask me.",
                  '<25>{#p/alphys}{#f/10}* U-Undyne!?',
                  "<25>{#p/undyne}{#f/17}* No matter HOW many nice humans come along, we CAN'T lower our guard!",
                  '<25>{#p/undyne}{#f/9}* ... but not many people would agree with me these days.',
                  "<25>{#p/undyne}{#f/16}* With the former queen's return, and her support for the new one...",
                  '<25>{#p/undyne}{#f/9}* I doubt the Royal Guard will ever be as strong as it once was.'
               ]);
            }
            addB([
               '<25>{#p/alphys}{#f/5}* ...\n* About the former queen.',
               '<26>{#p/alphys}{#f/5}* By the time she returned, things were mostly back to normal...',
               '<25>{#p/alphys}{#f/21}* And then she decided to reveal the truth about the humans.',
               '<25>{#p/alphys}{#f/21}* Like... RIGHT after she found out herself.'
            ]);
            if (30 <= SAVE.data.n.bully) {
               addB([
                  "<25>{#p/alphys}{#f/20}* ... eheh...\n* The people didn't react well at first.",
                  '<25>{#p/alphys}{#f/13}* They were more scared than anything...',
                  '<25>{#p/alphys}{#f/26}* A fact not helped by a certain human beating everyone up.',
                  '<25>{#p/alphys}{#f/20}* Thankfully, over time, Terrestria was able to calm them down...',
                  '<25>{#p/alphys}{#f/20}* ... by reminding them nobody had died.',
                  "<25>{#p/alphys}{#f/18}* I'm glad it worked.\n* I would have caused a riot saying that.",
                  '<25>{#p/alphys}{#f/8}* But... yeah, people are mostly positive about humanity now.'
               ]);
            } else {
               addB([
                  "<25>{#p/alphys}{#f/15}* ... thankfully, this DIDN'T cause a mass uprising...",
                  '<25>{#p/alphys}{#f/17}* Though, I guess being so well-known helped her out with that.',
                  '<25>{#p/alphys}{#f/8}* In fact, people are mostly positive about humanity now.'
               ]);
            }
            addB(["<25>{#p/alphys}{#f/8}* So that's something.", '<26>{#p/undyne}{#f/16}* Heh, tell me about it...']);
            if (SAVE.data.b.undyne_respecc || 2.1 <= SAVE.data.n.plot_date) {
               addB([
                  "<25>{#p/undyne}{#f/10}* It's a weird reality we live in now.",
                  '<25>{#p/undyne}{#f/1}* By the way, did you mention all the new schools being built?',
                  "<25>{#p/alphys}{#f/10}* Uh... yeah!\n* I totally... didn't."
               ]);
            } else {
               addB([
                  "<25>{#p/undyne}{#f/10}* I just wish it didn't mean scaling back the Royal Guard.",
                  '<25>{#p/undyne}{#f/1}* But... hey, at least those new schools are pretty cool.',
                  "<25>{#p/alphys}{#f/10}* Oh yeah!\n* I forgot you're a teacher there now!"
               ]);
            }
            addB([
               "<25>{#p/alphys}{#f/6}* Eheh...\n* The education system's doing well, too.",
               '<25>{#p/alphys}{#f/1}* Suffice it to say, tuition prices have never been lower!',
               "<25>{#p/alphys}{#f/8}* There's been so many new students learning all sorts of things.",
               '<18>{#p/papyrus}{#f/0}... HEY GUYS!\nI JUST GOT BACK FROM MATH CLASS!!',
               '<18>{#p/papyrus}{#f/4}WHO KNEW FOLDING SPACETIME COULD BE SO COMPLICATED...',
               '<25>{#p/alphys}{#f/10}* ... yep, Papyrus took a class on warp field theory.',
               '<18>{#p/papyrus}{#f/6}WHAT?? ARE YOU REFERRING TO ME IN THE THIRD PERSON??',
               '<25>{#p/alphys}{#f/17}* ... and a writing class, from the sounds of it.',
               "<25>{#p/undyne}{#f/12}* That's still a thing??",
               '<18>{#p/papyrus}{#f/4}... WAIT...',
               '<18>{#p/papyrus}{#f/7}WHO ARE YOU TALKING TO ON THE PHONE!?',
               "<25>{#p/undyne}{#f/1}* It's the human.",
               '<18>{#p/papyrus}{#f/0}OH!! OH!!\nLET ME TALK TO THEM!!',
               '<25>{#p/undyne}{#f/14}* Be my guest.\n* I gotta get back to teaching my class.',
               '<25>{#p/undyne}{#f/17}* They\'ve been struggling with the \"magical self- defense\" exercise.',
               '<18>{#p/papyrus}{#f/0}... HELLO HUMAN!!\nHOW HAVE -YOU- BEEN LATELY!?',
               '<18>{#p/papyrus}{#f/0}...',
               "<18>{#p/papyrus}{#f/5}I GUESS YOU CAN'T REALLY ANSWER THAT.",
               "<18>{#p/papyrus}{#f/6}BUT I HOPE YOU'RE DOING WELL!!"
            ]);
            if (SAVE.data.n.plot_date < 1.1) {
               addB(["<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE OUR EPIC SHOWDOWN."]);
            } else if (SAVE.data.b.flirt_papyrus) {
               addB(["<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE THAT DATE WE HAD."]);
            } else {
               addB(["<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE WE HUNG OUT."]);
            }
            addB([
               '<18>{#p/papyrus}{#f/5}I TOLD EVERYONE IN MY CLASS ABOUT YOU, AND...',
               "<18>{#p/papyrus}{#f/5}... ALL OF THEM WISHED YOU'D COME BACK SOMEDAY."
            ]);
            if (SAVE.data.b.f_state_kidd_betray) {
               addB([
                  '<18>{#p/papyrus}{#f/4}... ALMOST ALL OF THEM, ANYWAY.',
                  '<18>{#p/papyrus}{#f/5}ONE CLASSMATE WHO SITS NEXT TO ME SAYS THAT YOU...',
                  '<18>{#p/papyrus}{#f/5}... UH, THEY SAY YOU BETRAYED THEM, SOMEHOW.',
                  '<18>{#p/papyrus}{#f/6}BUT LISTEN!!\nIF YOU EVER -DO- COME BACK...',
                  "<18>{#p/papyrus}{#f/0}I'LL HELP THE TWO OF YOU GET BACK ON GOOD TERMS!!"
               ]);
            } else {
               addB([
                  '<18>{#p/papyrus}{#f/0}ONE OF THEM EVEN WISHES THEY COULD GO WITH YOU!!',
                  "<18>{#p/papyrus}{#f/5}IT'S A CLASSMATE WHO SITS NEXT TO ME, ACTUALLY.",
                  '<18>{#p/papyrus}{#f/6}THEY SAY THEY OWE YOU THEIR VERY LIFE!!',
                  '<18>{#p/papyrus}{#f/4}... A HERO, EH?\nIF YOU EVER -DO- COME BACK...',
                  "<18>{#p/papyrus}{#f/0}I'LL BE SURE TO INVITE THEM TO YOUR RETURN PARTY."
               ]);
            }
            addB([
               '<18>{#p/papyrus}{#f/9}YOU HAVE MY PERSONAL PAPYRUS PROMISE! (TM)',
               "<25>{#p/alphys}{#f/27}* ... hey, isn't that one of Mettaton's lines?",
               '<18>{#p/papyrus}{#f/4}IN THE PAST, MAYBE... BUT NOT NOW.',
               "<18>{#p/papyrus}{#f/5}APPARENTLY, HE'S DITCHING HIS OLD FORMAT ENTIRELY...",
               '<18>{#p/papyrus}{#f/4}ALL TO START THE \"MTT CINEMATIC UNIVERSE.\"',
               '<25>{#p/alphys}{#f/17}* Oh yeah, I heard a rumor about that.'
            ]);
            if (iFancyYourVilliany()) {
               addB([
                  '<25>{#p/alphys}{#f/21}* They say he\'s doubling down on the whole \"villain\" thing.',
                  "<18>{#p/papyrus}{#f/4}... LIKE THAT'S NOT GOING TO BACKFIRE.",
                  '<25>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB([
                     "<25>{#p/alphys}{#f/10}* The people aren't going to want a reminder of what the human was.",
                     '<25>{#p/alphys}{#f/26}* ... no offense.'
                  ]);
               } else {
                  addB([
                     "<25>{#p/alphys}{#f/10}* People don't even dislike humans anymore, so...",
                     "<25>{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            } else {
               addB([
                  '<25>{#p/alphys}{#f/21}* They say he\'s doubling down on the whole \"killer robot\" thing.',
                  "<18>{#p/papyrus}{#f/4}LIKE THAT'S NOT GOING TO BACKFIRE.",
                  '<25>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?'
               ]);
               if (30 <= SAVE.data.n.bully) {
                  addB([
                     "<25>{#p/alphys}{#f/10}* The people aren't going to want a reminder of the human's violence.",
                     '<25>{#p/alphys}{#f/26}* ... no offense.'
                  ]);
               } else {
                  addB([
                     '<25>{#p/alphys}{#f/10}* People are just trying to be positive nowadays, so...',
                     "<25>{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            }
            addB([
               "<18>{#p/papyrus}{#f/5}YEAH... EVERYONE'S JUST TRYING TO HAVE HOPE NOW.",
               '<18>{#p/papyrus}{#f/6}... INCLUDING MY BROTHER!!',
               '<18>{#p/papyrus}{#f/0}AFTER THE ROYAL GUARD WAS REDUCED IN SIZE...',
               '<18>{#p/papyrus}{#f/0}HE LEFT TO START A BUSINESS WITH BRATTY AND CATTY.',
               '<18>{#p/papyrus}{#f/4}A SECOND-HAND TRASH BUSINESS.',
               "<18>{#p/papyrus}{#f/5}I CAN'T SAY I APPROVE, BUT AT LEAST HE'S HAPPY.",
               "<25>{#p/sans}{#f/0}* of course i'm happy.\n* selling trash is basically my calling.",
               '<18>{#p/papyrus}{#f/7}SANS!! STOP COMING OUT OF NOWHERE LIKE THAT!!',
               '<25>{#p/sans}{#f/2}* heh.\n* so how are ya, bucko?',
               "<25>{#p/sans}{#f/0}* i hope my efforts to warn and protect you weren't in vain.",
               '<18>{#p/papyrus}{#f/9}I KNEW IT!!\nYOU WERE A MOLE- RAT ALL ALONG!',
               '<25>{#p/sans}{#f/0}* true.\n* i did infiltrate the royal guard.',
               "<25>{#p/sans}{#f/3}* but i'd like to think i made a positive influence.",
               '<25>{#p/sans}{#f/2}* after all, it was MY idea to put terrestria in charge.',
               '<18>{#p/papyrus}{#f/1}WHAT!?\nYOUR IDEA!?',
               '<18>{#p/papyrus}{#f/5}WOWIE...',
               "<25>{#p/sans}{#f/3}* ... but that's all in the past now.",
               "<25>{#p/sans}{#f/0}* the way i see it, i'm just glad things didn't end up worse.",
               "<25>{#p/alphys}{#f/17}* I'm a little surprised you didn't come back to work at the lab.",
               "<25>{#p/alphys}{#f/5}* You know, like you said you'd do when you were done with the guard.",
               '<25>{#p/sans}{#f/3}* well, to be honest, i needed a break after all that serious stuff.',
               '<25>{#p/sans}{#f/2}* but hey, at least papyrus is doing a bang-up job, right?',
               '<25>{#p/alphys}{#f/6}* Eheh.\n* Yeah, he is.',
               '<18>{#p/papyrus}{#f/0}I TRY MY BEST!!',
               "<25>{#p/alphys}{#f/20}* ... though, there is this one thing that's been on my mind.",
               '<25>{#p/sans}{#f/0}* what is it?',
               '<25>{#p/alphys}{#f/27}* Well, according to the telescopes...',
               '<25>{#p/alphys}{#f/27}* Something strange happened to the stars a while back.',
               '<18>{#p/papyrus}{#f/6}STRANGE!?\nHOW CAN A STAR BE STRANGE!?',
               "<25>{#p/alphys}{#f/15}* Well, okay, it wasn't actually the STAR that was strange.",
               '<26>{#p/alphys}{#f/23}* It was the way it moved.',
               "<25>{#p/alphys}{#f/20}* Or... didn't move?",
               '<25>{#p/alphys}{#f/20}* It was more like... a jump, of sorts.\n* A sudden shift.',
               '<25>{#p/alphys}{#f/26}* As if time outside the force field just... lept ahead a few years.',
               "<25>{#p/sans}{#f/0}* you sure those reports didn't contain any counter-indications?",
               '<25>{#p/alphys}{#f/20}* Well, I checked, and double-checked, and triple-checked...',
               '<18>{#p/papyrus}{#f/6}BUT DID YOU QUADRUPLE-CHECK!?',
               '<25>{#p/alphys}{#f/21}* Of course I did.',
               "<25>{#p/alphys}{#f/5}* But it didn't change the result.",
               '<25>{#p/sans}{#f/3}* huh.\n* how strange.',
               "<25>{#p/sans}{#f/0}* i'd say this is worth a closer look.",
               '<25>{#p/alphys}{#f/20}* Agreed.',
               "<25>{#p/sans}{#f/3}* whoops.\n* the recording's almost at its time limit now.",
               '<25>{#p/alphys}{#f/17}* ... oh.\n* I guess we should wrap this up, then.',
               "<25>{#p/alphys}{#f/6}* Well, I... I hope you're doing alright out there.",
               '<25>{#p/alphys}{#f/5}* If we managed to find happiness here, then... so can you.',
               "<25>{#p/alphys}{#f/10}* After all, you've got the whole universe to explore!",
               '<18>{#p/papyrus}{#f/0}WELL SAID, ALPHYS.\nWELL SAID.',
               '<25>{#p/sans}{#f/2}* heh.\n* take care, okay?',
               '<18>{#p/papyrus}{#f/9}YEAH!!\nUNTIL NEXT TIME!!',
               '<25>{#p/alphys}{#f/8}* ... until next time.',
               '<32>{#s/equip}{#p/event}* 滴...'
            ]);
         }
         return { a, b, d, k, m };
      },
      neutral1: [
         '<32>{#s/phone}{#p/event}* 拨号中...',
         '<25>{#p/sans}{#f/0}* 喂？',
         '<25>{#p/sans}{#f/3}* ...哦，你好呀。\n* 自从我们上次通完电话，\n  也过了挺长时间了。',
         '<25>{#p/sans}{#f/0}* 这应该是第五通，\n  或第六通电话了吧？',
         "<32>{#p/human}* （你纠正Sans：\n  这已经是第七通电话了。）",
         '<25>{#p/sans}{#f/2}* 啊，我知道的。\n* 测试下你的记忆力而已。',
         '<32>{#p/human}* （...）',
         "<25>{#p/sans}{#f/0}* 嗯...\n* 孩子，我发觉...",
         '<25>{#p/sans}{#f/0}* 你之前干那些事的时候\n  似乎毫不畏惧...',
         '<25>{#p/sans}{#f/3}* 但这电话里的声音，\n  听起来却是那么害怕，\n  那么难过。',
         "<32>{#p/human}* （你想道歉，却不知道说点什么好。）",
         "<25>{#p/sans}{#f/3}* 嘿，别慌嘛。\n* 人非圣贤，孰能无过呢？",
         '<25>{#p/sans}{#f/0}* 包括我，在你离开这里时。\n  也犯了一个错误...',
         '<25>{#p/sans}{#f/0}* 我笃信自己能用那番话\n  改变现状，却事与愿违。',
         "<32>{#p/human}* （你问Sans，\n  为什么现在才说这事。）",
         '<25>{#p/sans}{#f/0}* 唔... 问得好。',
         "<25>{#p/sans}{#f/3}* 确实，在你走后，\n  我们从没真正地聊过\n  那天发生的事。",
         "<25>{#p/sans}{#f/3}* 我当然可以找个引子，问你\n  “为什么现在还在\n   前哨站附近徘徊？”",
         '<25>{#p/sans}{#f/2}* 但那样就有点偏题了。',
         '<25>{#p/sans}{#f/0}* 那么...',
         '<25>{#p/sans}{#f/3}* 我就直奔主题吧。',
         "<25>{#p/sans}{#f/0}* 我一直怀疑，\n  自己所见的，都只是表象。",
         "<32>{#p/human}* （你集中了注意力，\n  准备听Sans接下来要说的。）",
         '<25>{#p/sans}{#f/0}* 首先，之前来的人类。\n  没有一个，会像你一样行动。',
         '<25>{#p/sans}{#f/3}* 当然不是说，他们都是\n  纯洁无暇的小天使。',
         '<26>{#p/sans}{#f/0}* 只是，他们的行为举止，\n  都和正常小孩没太大差别。',
         '<25>{#p/sans}{#f/0}* ...这就是我想说的。',
         "<25>{#p/sans}{#f/3}* 你和他们完全不同。",
         '<25>{#p/sans}{#f/3}* 你干的不少事，正常的小孩\n  都绝不可能去做。',
         '<25>{#p/sans}{#f/3}* 比如杀戮，而且是\n  杀红了眼的那种杀戮。',
         '<32>{#p/human}* （...）',
         '<25>{#p/sans}{#f/0}* 你的行动极端而偏激。\n  所以，我就在想...',
         '<25>{#p/sans}{#f/3}* 单从能力上讲，\n  你这么大的孩子，\n  可能做出这样的事吗？',
         "<25>{#p/sans}{#f/3}* 我们聊得越深，\n  我就越觉得...",
         '<25>{#p/sans}{#f/0}* 绝对不可能。',
         '<25>{#p/sans}{#f/0}* 我越想，越觉得...',
         '<25>{#p/sans}{#f/3}* 那段时间里，\n  你肯定被什么操纵了，\n  控制不了自己。',
         '<32>{#p/human}* （你为之一振。）',
         '<25>{#p/sans}{#f/0}* 那时，你总是非常冷漠...',
         '<25>{#p/sans}{#f/0}* 从不流露自己的情感，\n  也从不关心身边任何人。',
         "<25>{#p/sans}{#f/3}* 但现在，\n  你却舍不得离开我们。",
         "<25>{#p/sans}{#f/3}* 就好像，\n  你完全变了个人一样。",
         '<32>{#p/human}* （...）',
         '<25>{#p/sans}{#f/0}* 嘿，那个...',
         '<25>{#p/sans}{#f/3}* ...',
         "<25>{#p/sans}{#f/3}* 嘿...\n* 你流的那些泪，不是正好\n  证明了我没说错嘛。",
         "<25>{#p/sans}{#f/2}* 如果这眼泪是假的，\n  那也说明，\n  你真是个老戏“骨”。",
         "<32>{#p/human}* （...）\n* （泪眼朦胧之中，\n  你回应了Sans的烂笑话。）",
         '<25>{#p/sans}{#f/3}* 对不起，这话题\n  可能有点太沉重了。',
         "<25>{#p/sans}{#f/3}* 只是，我觉得该把\n  自己的心里话都告诉你。",
         '<32>{#p/human}* （你问Sans，现在挂掉电话，\n  会不会有点不合适。）',
         "<25>{#p/sans}{#f/0}* 哦？\n* 没关系的。",
         '<25>{#p/sans}{#f/3}* 我想，你现在也肯定有\n  很多心事吧。',
         '<32>{#p/human}* （你叹了一口气。）',
         "<25>{#p/sans}{#f/3}* ...嗯。\n* 那就不打扰你了。",
         '<25>{#p/sans}{#f/0}* 好好照顾自己，好吗？',
         "<25>{#p/sans}{#f/2}* 我们也会尽全力\n  好好活下去的。",
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      neutral2: [
         '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
         '<25>{#p/asgore}{#f/1}* ...',
         '<25>{#p/asgore}{#f/1}* 哈喽，年轻人。',
         '<25>{#p/asgore}{#f/1}* 不知你是否还活着，\n  更不知道你能不能\n  收到这段录音。',
         '<25>{#p/asgore}{#f/2}* 我发送了终止自毁指令，\n  但不知飞船能否收到。',
         '<25>{#p/asgore}{#f/4}* 但如果真的一切顺利，\n  救了你的命...',
         '<25>{#p/asgore}{#f/25}* 那我会由衷地高兴。',
         "<25>{#p/asgore}{#f/7}* 我觉得，Asriel干出那些事\n  不该都归咎于你。",
         '<25>{#p/asgore}{#f/5}* 你饶恕了Papyrus，\n  放过了Muffet，也对\n  很多其他怪物抱以仁慈...',
         '<25>{#p/asgore}{#f/6}* 这些都证明，\n  你努力想浪子回头、\n  改过自新。',
         '<25>{#p/asgore}{#f/21}* 旁边还有个孩子\n  也想和你说几句呢。',
         '<25>{#p/kidd}{#f/7}* 老兄，是你吗？！',
         '<25>{#p/kidd}{#f/2}* 呃，我...\n  不记得你叫什么了...',
         '<25>{#p/asgore}{#f/6}* 别怕，把你之前和我说的\n  都告诉人类吧。',
         '<25>{#p/kidd}{#f/6}* 好的，好的。',
         "<25>{#p/kidd}{#f/4}* 嗯，那个...",
         '<25>{#p/kidd}{#f/4}* 不管那Asriel\n  做了什么事...',
         '<25>{#p/kidd}{#f/3}* 我始终觉得，你超酷的！',
         "<25>{#p/kidd}{#f/13}* 要是还能再见的话，\n  我们一定会玩得很开心的！",
         "<25>{#p/kidd}{#f/6}* 另外，我想...\n* 尽管我们都做过错事，\n  受过伤...",
         '<25>{#p/kidd}{#f/5}* 但只要在一起，\n  我们肯定能从过去的阴影中\n  走出来。',
         '<25>{#p/asgore}{#f/6}* 嗯... 听起来很棒！',
         '<25>{#p/asgore}{#f/5}* 你们之前就同甘共苦，\n  所以，这样做就对了。',
         "<25>{#p/kidd}{#f/4}* 人类必须要走，\n  真是太遗憾了。\n* 你说是吧？",
         '<25>{#p/asgore}{#f/1}* ...是啊。',
         "<25>{#p/kidd}{#f/3}* 没事，我朋友那么酷，\n  肯定会没事的。",
         "<25>{#p/kidd}{#f/1}* 保重啊，老兄！",
         '<25>{#p/asgore}{#f/20}* ...',
         '<18>{#p/papyrus}{#f/7}哎！？\n跟人类聊天\n怎么能不叫我呢？！',
         '<18>{#p/papyrus}{#f/4}...太不公平了。',
         '<25>{#p/kidd}{#f/14}* 哟--！PAPYRUS！！！',
         '<25>{#p/kidd}{#f/1}* 骷髅老兄，\n  你也想跟人类说说话吗？',
         "<25>{#p/kidd}{#f/2}* 正好Asgore要送我回家。",
         "<18>{#p/papyrus}{#f/0}当然！\n我可有很重要的事哦。",
         "<25>{#p/kidd}{#f/1}* 酷欸，电话给你！\n* 等会见，老兄！",
         '<25>{#p/asgore}{#f/6}* ...我先把怪物小孩\n  送回我家，去去就回。',
         '<18>{#p/papyrus}{#f/0}好！过了这么久，\n我们终于又能聊啦，\n人类！',
         '<18>{#p/papyrus}{#f/5}呃，你可能回不了，\n那就我自己说，\n你听着就好。',
         "<18>{#p/papyrus}{#f/6}说回正事！",
         '<18>{#p/papyrus}{#f/0}我只是想说，\n干得漂亮。',
         '<18>{#p/papyrus}{#f/5}那个“ASRIEL”...\n想必给你添了不少麻烦。',
         '<18>{#p/papyrus}{#f/4}一路上，给你施压，\n蛊惑你，甚至逼迫你做\n那些... 昧良心的事。',
         '<18>{#p/papyrus}{#f/5}但你，在他的威慑之下\n仍尽力不去伤害我们，\n让很多怪物活了下来。',
         "<18>{#p/papyrus}{#f/0}所以，不必自责！",
         '<18>{#p/papyrus}{#f/9}你想成为好人的努力，\n我们都看在眼里！',
         "<18>{#p/papyrus}{#f/6}那些努力，\n肯定是有意义的，\n对吧？",
         '<18>{#p/papyrus}{#f/6}...',
         "<18>{#p/papyrus}{#f/5}说实话... \n你离开后，\n我们都活得很艰难。",
         "<18>{#p/papyrus}{#f/5}阻止核心爆炸后...",
         '<18>{#p/papyrus}{#f/5}我和其它帮忙的人\n聊了聊。',
         '<18>{#p/papyrus}{#f/6}...\nMUFFET直接把我当空气。',
         '<18>{#p/papyrus}{#f/6}核心的员工\n因为没看好控制台，\n都十分懊恼。',
         '<18>{#p/papyrus}{#f/5}而那只人偶...',
         '<18>{#p/papyrus}{#f/5}...\n失去了很重要的亲人。',
         '<18>{#p/papyrus}{#f/5}为了稳住核心，\n他的幽灵表亲\n与核心融合了。',
         '<18>{#p/papyrus}{#f/6}那幽灵确实没死...',
         "<18>{#p/papyrus}{#f/5}但再也不能开口说话，\n再也不能正常生活了。",
         "<18>{#p/papyrus}{#f/3}谁都不希望这样...",
         '<18>{#p/papyrus}{#f/6}那人偶，每天只是\n呆呆望着核心，\n一看就是一整天。',
         '<18>{#p/papyrus}{#f/5}我想安慰安慰它，\n但不知道怎么做才好...',
         '<18>{#p/papyrus}{#f/5}...',
         "<18>{#p/papyrus}{#f/6}不-不过，\n它肯定能挺过来的！",
         '<18>{#p/papyrus}{#f/0}我相信它！',
         '<18>{#p/papyrus}{#f/0}就像我相信你一样。',
         '<18>{#p/papyrus}{#f/5}我相信这里每个人...',
         '<18>{#p/papyrus}{#f/4}除了你那冒牌货朋友。',
         '<18>{#p/papyrus}{#f/0}谁叫他砸了自己的招牌。',
         '<25>{#p/asgore}{#f/6}* 唉，我回来了。',
         '<18>{#p/papyrus}{#f/0}欢迎欢迎！',
         '<25>{#p/asgore}{#f/7}* 你应该把想说的\n  都说完了？',
         "<18>{#p/papyrus}{#f/6}其实，\n我还有很多话想说...",
         '<18>{#p/papyrus}{#f/5}但电池快没电了。',
         '<25>{#p/asgore}{#f/1}* 明白了。',
         "<18>{#p/papyrus}{#f/5}那么...\n我把电话给你吧。",
         '<25>{#p/asgore}{#f/2}* ...',
         '<25>{#p/asgore}{#f/2}* 他没撒谎。',
         '<25>{#p/asgore}{#f/1}* 发送这通长途录音，\n  需要动用巨大的能量。',
         "<25>{#p/asgore}{#f/2}* 而核心功率\n  早已大不如前...",
         '<25>{#p/asgore}{#f/4}* 毕竟，现在的核心\n  几乎都是由一个幽灵\n  支撑和管理的...',
         '<25>{#p/asgore}{#f/2}* 所以，没必要的话，\n  就别让核心超负荷工作了。',
         '<18>{#p/papyrus}{#f/0}是啊，确实如此。',
         '<25>{#p/asgore}{#f/15}* 不过，结束录音前...',
         '<25>{#p/asgore}{#f/15}* 最后给你几句忠告。',
         '<25>{#p/asgore}{#f/14}* ...\n* 不要相信“他”。\n* 更不要成为“他”的傀儡。',
         '<25>{#p/asgore}{#f/14}* 无论“他”说什么，\n  都绝对别信。',
         '<25>{#p/asgore}{#f/13}* 不要让“他”为所欲为，\n  伤害别人。',
         '<18>{#p/papyrus}{#f/6}我先走了，\n拜拜！',
         '<25>{#p/asgore}{#f/14}* ...不要被“他”牵着鼻子走。\n* 不要落入暴力的深渊。',
         '<25>{#p/asgore}{#f/13}* 如果走投无路...',
         '<25>{#p/asgore}{#f/14}* ...请马上杀了“他”，\n  不要犹豫。',
         '<25>{#p/asgore}{#f/2}* ...',
         '<25>{#p/asgore}{#f/4}* 祝你好运。',
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      lastblook1: [
         () => [
            '<32>{#p/napstablook}* oh...\n* hey frisk......',
            ...(SAVE.data.b.ufokinwotm8
               ? [
                  '<32>* ...',
                  "<32>* ... huh?\n* what's with that look?",
                  '<32>* did i... get in your way?',
                  '<32>* ...',
                  "<32>* oh......\n* i did, didn't i.........",
                  '<32>* sorry...',
                  '<32>* force of habit......',
                  "<32>* i'll... just be out of your way now......",
                  '<32>* please......\n* forgive me............'
               ]
               : [
                  "<32>* they're still out there building the front door, so...",
                  '<32>* not much point in trying to go there, i guess',
                  ...(SAVE.data.b.c_state_secret4 && !SAVE.data.b.c_state_secret4_used
                     ? [
                        '<32>* ...',
                        '<32>{#p/human}* (You repeat the secret told to you by Napstablook in Archive Six.)',
                        '<32>{#p/napstablook}* a magic trick...?',
                        '<32>* wait...',
                        '<33>* i think i know what you mean...\n* let me try...'
                     ]
                     : [])
               ])
         ],
         () => [
            ...(SAVE.data.b.c_state_secret4_used
               ? ["<32>{#p/napstablook}* heh...\n* i really appreciate everything you've done, frisk."]
               : ["<32>{#p/napstablook}* hey...\n* i really appreciate everything you've done, frisk."]),
            '<32>* setting us free and all...',
            '<32>* ...',
            "<32>* the truth is, my cousins and i started to think we'd never escape.",
            "<32>* it'd been so long since the last human arrived, and...",
            '<32>* considering what we recently found out about humanity...',
            '<32>* about how they all left the home galaxy...',
            "<32>* it's a miracle you even came to the outpost at all."
         ],
         () =>
            SAVE.data.b.a_state_hapstablook
               ? [
                  '<32>{#p/napstablook}* oh yeah, about my cousins...',
                  "<32>* after the whole mettaton thing, it's been going pretty good.",
                  "<32>* we've been talking it over, and...",
                  "<32>* ... we've decided to re-open the snail farm here on eurybia.",
                  "<32>* mettaton's doing the advertising, while i and the others look after the snails.",
                  '<32>* we even found a place we could stay once we get settled in...',
                  '<32>* a very kind house told us we could live there.',
                  "<32>* apparently, it's the same one undyne used to live in..."
               ]
               : [
                  '<32>{#p/napstablook}* oh right... my cousins.',
                  "<32>* i don't really know if i should be telling you this, but...",
                  '<32>* we sort of figured out that mettaton might be our long-lost cousin.',
                  '<32>* the others and i tried to ask him about it, but...',
                  "<32>* ... it didn't really go the way we'd hoped.",
                  '<32>* then, everyone was blaming each other for messing it up...',
                  "<32>* i... haven't felt like talking with them since.",
                  '<32>* yeah... this was a bad topic',
                  '<32>* sorry...'
               ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? ['<32>{#p/napstablook}* ...', '<32>* speaking of family...']
               : ['<32>{#p/napstablook}* ...', "<32>* hey...\n* even if my family's not doing too well..."]),
            '<32>* that human i adopted is... really something, heh',
            "<32>* they say i'm their favorite monster...",
            '<32>* ... knowing what they went through in the archive, that really means something.',
            '<32>* and... they always find a way to make me smile.',
            '<32>* like, a few hours ago, when the walls were still being put in...',
            '<32>* they wanted to go outside to see the construction before it was too late.',
            '<32>* when i said they could, they were so happy...',
            '<32>* now i finally understand why people like raising children.'
         ],
         () => [
            '<33>{#p/napstablook}* i guess i should be thankful...',
            '<32>* to asgore, i mean',
            '<32>* he and alphys were the ones who trusted me to adopt this human.',
            '<32>* i... also found out he was the hairy guy who came to our farm all the time.',
            "<32>* he'd always take such good care of the snails he purchased...",
            '<32>* even healing them if they ever got hurt before dying of natural causes.',
            '<32>* for someone like him... to trust me with something like this...',
            '<32>* ...',
            "<32>* well... i know he'll take really good care of you, at least.",
            ...(SAVE.data.b.f_state_kidd_betray
               ? ['<32>* you might not have any siblings, but...']
               : SAVE.data.b.svr
                  ? ['<32>* along with those new siblings of yours...']
                  : ['<32>* along with that new sibling of yours...']),
            "<32>* he'll do the best he can to keep you happy and healthy."
         ],
         () => [
            '<32>{#p/napstablook}* you know...\n* before the snail farm, and...',
            '<33>* before the outpost...',
            '<32>* my life on the old homeworld was a quiet one.',
            '<32>* that old homeworld...',
            '<32>* it really was a special place.',
            '<32>* the way the sky set itself on fire every day...',
            '<32>* how everyone who lived there was so at peace before the war...',
            "<32>* back then, i didn't think anything of it.",
            '<32>* now... after nearly two hundred years of captivity......',
            "<32>* i realized i'd been taking it all for granted."
         ],
         () => [
            '<32>{#p/napstablook}* well, anyway.\n* the old homeworld was great and all...',
            "<32>* but the new one's got a lot going for it, too.",
            '<32>* like the wildlife.',
            '<32>* when i traveled the surface earlier, i ran into some of it...',
            "<32>* and that's when i saw something interesting happen",
            '<32>* the creatures... starting using magic.',
            "<32>* when i mentioned this to alphys, she said the planet didn't have any magic...",
            '<32>* not according to the scans they took when we first arrived.',
            '<32>* has our arrival to this world...',
            "<32>* ... given it something it didn't have before?"
         ],
         () => [
            '<32>{#p/napstablook}* ... heh.',
            "<32>* i've been rambling a lot, huh?",
            '<32>* i appreciate you listening to me, though',
            "<32>* it's really nice of you to do that for me, frisk.",
            '<32>* just wanted you to know that.'
         ],
         () => [
            '<32>{#p/napstablook}* huh?\n* you still wanted to talk?',
            '<32>* ...',
            '<32>* oh......',
            '<32>* i guess i ran out of conversation topics',
            "<32>* i doubt i'd have anything else of interest to say, so...",
            '<32>* feel free to go do something else, now'
         ],
         () => [
            '<32>{#p/napstablook}* ... frisk, uh...',
            "<32>* i'm not really sure what to talk about anymore",
            '<32>* maybe... if you come back later today...',
            "<33>* i'll think of something else..."
         ],
         () => [
            '<32>{#p/napstablook}* ... oh.........',
            "<32>* you're.........\n* still here.........",
            '<32>* even though i have nothing else to say.........',
            '<32>* well... i guess, if you just wanted my company... then...',
            '<32>* feel free to stick around a while longer'
         ],
         () => [
            '<32>{#p/napstablook}* ... hmm...',
            '<32>* actually...',
            '<32>* ... would you like me to tell you a joke?',
            "<32>* i don't have much of a sense of humor, but i can try..."
         ],
         () => [
            '<32>{#p/napstablook}* okay...\n* here goes...',
            '<32>* if a ghost gets tired in the middle of the road, what does it do?',
            '<32>* ...',
            '<32>* answer... it {@fill=#ff0}naps to block{@fill=#fff} you.',
            '<32>* get it?\n* napstablook?\n* naps to block?',
            '<32>* yeah...\n* that was kinda bad'
         ],
         () => [
            '<32>{#p/napstablook}* ... you wanted me to tell you another joke?',
            '<32>* hmm... let me think about it...'
         ],
         () => [
            "<32>{#p/napstablook}* okay, let's see...",
            '<32>* if a ghost changed vessels so they could have a child, what would you call it?',
            '<32>* ...',
            '<32>* answer... a {@fill=#ff0}trans-parent.{@fill=#fff}.',
            '<32>* ... heh.'
         ],
         () => ['<32>{#p/napstablook}* ... you wanted me to tell you a third joke?', '<32>* well... if you insist...'],
         () => [
            "<32>{#p/napstablook}* okay.\n* i've got it.",
            '<32>* if a restaurant hires a ghost to taste test their food, what does that make the ghost?',
            '<32>* ...',
            '<32>* answer... a {@fill=#ff0}food-in-spectre.{@fill=#fff}.'
         ],
         () => [
            '<32>{#p/napstablook}* alright, alright.\n* maybe i got a little carried away with that one.',
            '<33>* but i hope you liked it anyway.'
         ],
         () => [
            '<32>{#p/napstablook}* ...',
            '<32>* oh...',
            "<32>* ... i guess i'm at a loss for what to say.",
            "<32>* you've been such a good listener, i'd feel bad if i ran out of ideas.",
            "<32>* c'mon, blooky, think...",
            '<32>* ... what can you talk about...'
         ],
         () => [
            '<32>{#p/napstablook}* wait, hold on',
            '<32>* do you know anything about ghost food?',
            '<32>* that last joke kind of got me thinking about it.',
            "<32>* you must be confused... it's not really explained anywhere.",
            '<32>* if you like, i can tell you about it...'
         ],
         () => [
            '<32>{#p/napstablook}* ... so, ghost food...',
            "<32>* it's exactly like normal monster food, except...",
            '<32>* when preparing it...',
            "<32>* there's a special kind of spell you have to use to make it edible for ghosts.",
            "<32>* that's right... any monster food can become ghost food."
         ],
         () => [
            '<32>{#p/napstablook}* as it turns out, though...',
            '<32>* certain kinds of food are easier to convert than others.',
            '<32>* like... standard fruit.\n* or milkshakes.',
            ...(SAVE.data.b.item_blookpie
               ? ['<32>* but something like that exoberry pie you bought from me...']
               : ['<32>* but something like that exoberry pie i had in my shop...']),
            '<32>* that... would take a lot of magical power to make.',
            '<32>* the more complicated the food, the more difficult it is to convert into ghost food.'
         ],
         () => [
            ...(SAVE.data.b.a_state_hapstablook
               ? ['<32>{#p/napstablook}* this one time, my... er, mettaton made me a chocolate cake.']
               : ['<32>{#p/napstablook}* this one time, my cousin made me a chocolate cake.']),
            '<32>* chocolate filling, chocolate icing... chocolate everything.',
            "<32>* if i didn't know any better, i'd think it was actual human food.",
            ...(SAVE.data.b.a_state_hapstablook
               ? [
                  '<32>* but somehow, he managed to convert all of that into a ghost food...',
                  '<32>* not for a special occasion, but just because he wanted to see me smile.'
               ]
               : [
                  '<32>* but somehow, they managed to convert all of that into a ghost food...',
                  '<32>* not for a special occasion, but just because they wanted to see me smile.'
               ]),
            '<32>* well... i did.\n* and we ate the cake together.',
            '<32>* and i was happy.'
         ],
         () => [
            '<32>{#p/napstablook}* ...',
            "<32>* heh...\n* i think i'm gonna pretend to sleep for a while...",
            '<32>* it helps me unwind after a long day like this one.',
            "<32>* ... wait, it's morning...",
            '<32>* i guess that would make it a long night, then.',
            "<32>* days and nights...\n* that's going to take some getting used to.",
            '<32>* ...',
            '<32>* well... thanks for talking to me, frisk',
            '<32>* feel free to lay down next to me... if you like......',
            '<32>* ...',
            '<32>* Zzz... Zzz...'
         ],
         () => [
            '<32>{#p/napstablook}* Zzz... Zzz...',
            '<32>* Zzz... Zzz...',
            "<32>{#p/basic}* This ghost keeps saying 'z' out loud repeatedly, pretending to sleep.",
            choicer.create('* (Lay down next to it?)', '是', '否')
         ],
         () => ['<32>{#p/basic}* The ghost is still here.', choicer.create('* (Lay down next to it?)', '是', '否')]
      ],
      lastblook2: ['<32>{#p/napstablook}* oooooooooooo......', '<32>* this is really nice......'],
      lastblook3: [
         '<32>{#p/human}* （...）',
         '<32>* (You feel... something.)',
         '<32>{#p/napstablook}* oh, sorry... i should probably explain what this is...',
         '<32>* ...\n* so, uh...',
         '<32>* i took your body...\n* as a vessel...',
         '<32>* and now...... we inhabit the same space......',
         "<32>* i don't know why, but the last human who tried this... really liked it...",
         '<32>* so...',
         '<32>* maybe you will too...'
      ],
      lastblook4: [
         "<32>{#p/napstablook}* well, we can stay like this as long as you don't try to move.",
         '<32>* so...\n* only try to move around when you want it to end, i guess.'
      ],
      lastblook5: [
         '<32>{#p/napstablook}* well...\n* i hope you liked that...',
         '<32>* or at least found it kind of interesting...',
         '<32>* or something...'
      ],
      view: () => [choicer.create('* (Are you ready to go outside?)', '是', '否')],
      computer1: () =>
         SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (But you didn't feel like wasting your time here.)"]
            : ["<32>{#p/basic}* The computer's offline, but there's an empty slot for a computer chip."],
      computer2: () => [choicer.create('* (Insert the Computer Chip?)', '是', '否')],
      computer3: ['<32>{#p/human}* (You decide not to insert.)'],
      computer4: [
         '<32>{#p/basic}* Ah!\n* Thank you!\n* Thank you so much!',
         '<32>* You really took care of me!\n* You have found a computer very far away indeed!',
         '<32>* ...',
         '<32>* I have established a link between this computer and my body on the outpost.',
         '<32>* ...',
         '<32>* I never could have imagined how it would feel to exist in two places at once!',
         '<32>* It is... incredible...',
         '<32>* I shall not forget this deed, fellow traveler!'
      ],
      computer5: ['<32>{#p/basic}* Thank you, fellow traveler.\n* I owe you my future.'],
      end1: [
         '<25>{*}{#p/asgore}{#f/6}* 一号应急预案已生效。{^20}{%}',
         '<25>{*}{#p/asgore}{#f/6}* 正在启动自毁程序。{^20}{%}'
      ],
      end2: [
         '<25>{*}{#p/asgore}{#f/6}* 一号应急预案已生效。{^20}{%}',
         '<25>{*}{#p/asgore}{#f/6}* 自毁程序已远程终止。{^20}{%}',
         '<25>{*}{#p/asgore}{#f/6}* 系统即将关闭。{^20}{%}'
      ],
      save1: '<32>{#p/human}{@fill=#f00}* （还剩下$(x)个。）',
      save2: '<32>{#p/human}{@fill=#f00}* （决心。）',
      frontstop: pager.create(
         0,
         [
            "<32>{#p/basic}* Sorry, kiddo.\n* We're still out here building the front yard.",
            '<32>* And the front door.',
            "<32>* If you're looking for Asgore, he's out here with us.",
            "<32>* We'll be done in a few hours, so just sit tight for now."
         ],
         ['<32>{#p/basic}* Just a few more hours, kiddo.', '<32>* Then you can come out.'],
         ['<32>{#p/basic}* A few more hours.']
      ),
      charatrigger: {
         _frontier1: pager.create(
            0,
            [
               '<32>{#p/basic}* So this is your room, huh?',
               '<32>* Kind of strange...',
               "<32>* ... but who am I kidding, this is you we're talking about.",
               "<32>* You'd sleep in a doggy bed if you had the choice.",
               "<32>* And you'd eat the dog food.",
               "<32>* And you'd like it if somebody tried to pet you whilst eating said dog food."
            ],
            [
               "<32>{#p/basic}* I'd offer you a treat, but...",
               "<32>* Even with my new ability to appear visually, I'm still just a ghost.",
               "<32>* You'll have to settle for ghost dog treats, I'm afraid."
            ],
            [
               '<32>{#p/basic}* Oh, right.\n* My new ability.',
               "<32>* I tried showing myself to Asriel like before, but he couldn't see me...",
               '<32>* So it looks like it only works for you right now.',
               '<32>* Still.\n* Better than nothing.',
               '<32>* At least you can actually walk up to and talk to me now.'
            ],
            ['<32>{#p/basic}* Like that, for example.'],
            ['<32>{#p/basic}* Or that.'],
            ['<32>{#p/basic}* Or even that!'],
            ['<32>{#p/basic}* ...', '<32>{#p/basic}* You can stop now.'],
            ["<32>{#p/basic}* There's more to your room than me, isn't there?"],
            ['<32>{#p/basic}* ...', '<32>{#p/basic}* Maybe not.'],
            ["<32>{#p/basic}* Maybe I'm all you've got."],
            ['<32>{#p/basic}* In which case...', "<32>{#p/basic}* We'll be here for a long time."],
            ['<32>{#p/basic}* A very long time.'],
            ['<32>{#p/basic}* A very, very long time.'],
            ['<32>{#p/basic}* A very, very long time indeed.'],
            ["<32>{#p/basic}* Don't you have anything better to do?"],
            []
         ),
         _frontier2: pager.create(
            0,
            [
               '<32>{#p/basic}* Ah, the humble hallway.',
               '<32>* For Asriel and I, it was the starting point of countless adventures...',
               '<33>* ... running dauntlessly across the various rooms of the house.',
               '<32>* I know, right?\n* So very adventurous.',
               '<32>* Sadly, we had to stop after the mirror got smashed in for the seven hundredth time.',
               "<32>* You wouldn't believe the excuses I'd come up with...",
               '<33>* Like when I blamed a particle collider for shooting a stray atom from Earth to the outpost.',
               '<33>* And somehow only hitting the glass because it \"phased\" through the wall.',
               "<32>* Yeah... that one might've been a stretch."
            ],
            [
               '<32>{#p/basic}* Nowadays, though, hallways are just hallways.',
               '<32>* And excuses are just excuses.',
               '<32>* Is there a valuable life lesson in there somewhere?\n* Probably.',
               "<32>* I will say, there's a kind of symbolism to a ghost in a hallway...",
               '<32>* With the whole \"between one place and another\" thing going on.',
               '<32>* Actually, that probably only applies to human ghosts.',
               '<32>* Monster ghosts are just born like that naturally...',
               "<32>* So, if anything, they'd be in the room at the beginning of the hallway...",
               '<32>* ... rather than standing in the middle of it.'
            ],
            [
               '<32>{#p/basic}* Sorry.\n* Went on a tangent there.',
               '<32>* But what did you expect me to go on when you spoke to me in a boring hallway?',
               '<33>* Boring hallway, boring tangent.\n* That makes sense, right?'
            ],
            ["<32>{#p/basic}* Or maybe it doesn't.\n* What do I know."],
            ["<32>{#p/basic}* Apart from the fact that I've run out of things to say."],
            ['<32>{#p/basic}* That, I know for sure.'],
            ['<32>{#p/basic}* But what can you do?', '<32>{#p/basic}* ... wait, I know!\n* We could go to a new room!'],
            []
         ),
         _frontier3: pager.create(
            0,
            [
               "<32>{#p/basic}* Ooh... Asgore's room.",
               '<32>* The big guy sure loves his diaries, huh?',
               "<32>* Even though he hasn't written anything into that one yet, I'm sure he'll do so soon.",
               '<32>* Reading them has always been a guilty pleasure of mine...'
            ],
            [
               "<32>{#p/basic}* What?\n* Everyone's got some kind of guilty pleasure, don't they?",
               '<32>* I wonder what yours would be...',
               "<32>* Maybe I'll find out later."
            ],
            [
               "<32>{#p/basic}* For now, though, I'll just be hanging around.",
               '<32>* Watching, waiting...',
               "<32>* ... ready to catch you the moment you do something you don't want me to see!"
            ],
            ["<32>{#p/basic}* Okay, maybe I wouldn't actually go that far."],
            ["<33>{#p/basic}* Not while you're awake, anyway."],
            []
         ),
         _frontier4: pager.create(
            0,
            [
               "<32>{#p/basic}* I took a peek outside, and they're STILL working on construction.",
               '<32>* The whole front of the house is STILL a big mess.',
               "<32>* And Asgore's... STILL tending to the ground...",
               '<32>* ... while the former CORE workers take their sweet, sweet time building the porch.',
               "<32>* I wonder what it'll look like when it's done...",
               "<32>* Hopefully, with Asgore in charge, it'll look better than what we've had before."
            ],
            [
               "<32>{#p/basic}* Actually, Asgore's only in charge of the design.",
               '<32>* Since construction started yesterday, Doge has been the one giving the orders.',
               '<32>* I snuck outside then, too.',
               "<32>* She's strict, but she seems to know what she's doing.",
               '<32>* Which is great, because as much as I love Asgore for who he is...',
               '<32>* He most certainly is NOT your ideal foreman.'
            ],
            [
               '<33>{#p/basic}* Speaking of things being built, they finished the balcony earlier this morning.',
               '<32>* Monster Kid and Asriel are both outside...\n* ... sightseeing.',
               "<32>* They sure do that a lot together... they're probably waiting for you to join them.",
               "<32>* Once you're done taking in YOUR surroundings, you could go see them.",
               '<33>* Or you could just go back to your room.\n* Whatever floats your hoverboat.'
            ],
            [
               '<32>{#p/basic}* Oh yeah, about boats...',
               "<32>* I guess those aren't really needed around here.",
               "<32>* But... Frisk!\n* There are places on this world you can't be without one.",
               '<32>* Especially the bog basins.\n* All that murky water...',
               '<32>* Just keep it in mind.'
            ],
            [
               "<32>{#p/basic}* And no, you can't just get by swimming in those kinds of places.",
               '<33>* Only some of them.\n* And only at a good time of day.'
            ],
            [
               '<32>{#p/basic}* Mind you, do monsters even have a sense of the time of day?',
               '<32>* Most WERE born in space...'
            ],
            ["<32>{#p/basic}* ... maybe that's a question for another time of day."],
            []
         ),
         _frontier5: pager.create(
            0,
            [
               '<32>{#p/basic}* Three little chairs at the dining table...',
               '<32>* One for you, one for Asriel, and one for Monster Kid.',
               "<32>* That's fine, really.\n* Asgore wouldn't know I'm here.",
               '<32>* Still...',
               '<32>* It does feel strange not to have a place there.'
            ],
            [
               "<32>{#p/basic}* Asriel and I loved to swap the chairs around when Mom wasn't looking.",
               "<32>* Even Asgore would get in on it sometimes.\n* She... wasn't impressed.",
               '<32>* But it was all in good fun.',
               "<32>* Heck, he used to check under Asriel's chair for space creatures when he sat down.",
               "<32>* I'll never forget that time Toriel sat down on the chair, which we swapped beforehand...",
               '<33>* Asgore gave her the exact same treatment, and it was GLORIOUS.',
               '<32>* All of us were laughing... except for Toriel, who sat there in disbelief.',
               '<32>* Well.\n* She came around to it later.'
            ],
            () => [
               "<32>{#p/basic}* But, yeah... she wasn't much for the chicanery we got up to.",
               SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? "<32>* And even if she's not the same as she used to be..."
                  : "<32>* And even if she won't be here all the time...",
               "<32>* It's a good thing Asriel's got someone like you to calm him down.",
               '<32>* When he gets excited, he gets REALLY excited.',
               '<32>* ...',
               '<32>* ... or, used to, anyway.'
            ],
            () => [
               "<32>{#p/basic}* I guess it's unfair to think of him as the same person he once was.",
               SAVE.flag.n.killed_sans
                  ? '<32>* With all that stuff he mentioned about trying to corrupt you...'
                  : '<32>* With all that stuff he mentioned about hurting you...',
               "<32>* He's probably a very different person by now.",
               '<32>* Not unlike myself.',
               '<32>* I just hope he can make the best of what he has, now.',
               "<32>* And that you'll be there for him when he needs you."
            ],
            [
               "<32>{#p/basic}* But I guess I'm starting to repeat myself.",
               "<32>* We've got a home, we've got sunlight... so there's no reason to complain!",
               '<32>* ... or something like that.'
            ],
            []
         ),
         _frontier6: pager.create(
            0,
            [
               '<32>{#p/basic}* Of course they put a microwave in here.',
               '<32>* Of course they did.',
               "<32>* No doubt that'll be Asriel's primary source of food.",
               '<32>* Yeah, he\'s what you\'d call a \"microwave master.\"'
            ],
            [
               "<32>{#p/basic}* I mean, it's bad enough that so many of our ingredients are replicated these days...",
               '<32>* Formed with matter-energy conversion nonsense, rather than legitimate cooking.',
               '<32>* But at least that can still produce something palletable.',
               '<32>* Using the microwave is just...',
               "<32>* It's wrong.",
               "<32>* It's so very wrong."
            ],
            [
               "<33>{#p/basic}* I mean, that's just my opinion.",
               '<32>* You can feel free to disagree, and knowing you, you probably do...',
               '<32>* But some opinions...',
               "<32>* Let's just say some opinions are more correct than others."
            ],
            [
               '<32>{#p/basic}* All we can hope for is that Eurybia has a better selection of fresh ingredients.',
               '<32>* Considering Alphys was the one to seek out planets in the first place...',
               "<32>* You can't blame me for being at least a little wary."
            ],
            [
               "<33>{#p/basic}* If Asriel's a microwave master, Alphys would be a microwave overlord.",
               "<32>* That's all I'm saying."
            ],
            ['<32>{#p/basic}* No, really.', "<32>* Won't say anything more."],
            ['<32>{#p/basic}* ...', '<32>{#p/basic}* Not in the kitchen, anyway.'],
            []
         ),
         _frontier7: pager.create(
            0,
            [
               "<32>{#p/basic}* The balcony's just outside...",
               '<32>* I wonder if the birds are saying anything interesting.',
               '<33>* Like \"what a nice house!\"\n* Or \"the weather\'s great today.\"',
               "<32>* Maybe they don't like the house OR the weather.\n* That'd be... kind of sad.",
               "<32>* Maybe they're not even birds.\n* Who knows what kinds of sounds birds make here.",
               '<32>* Who knows if birds even exist here at all.',
               "<33>* For all we know, what we're hearing are the cries of the damned buried deep underground."
            ],
            [
               '<32>{#p/basic}* After the monsters have lived here long enough, the planet might gain some form of magic.',
               '<32>* If that happens, would the animals be affected, too?',
               '<32>* Would they become conscious?\n* Understand us?',
               '<32>* Would we understand them?',
               "<33>* If the sounds we're hearing really ARE cries of the damned, I'm not sure I'd want to know."
            ],
            [
               '<32>{#p/basic}* But yeah, planetary magic.',
               "<32>* I think that's what happened to Krios, when monsters first gained THEIR magic.",
               '<32>* Either that, or the planet already had magic, and gave it to them.',
               "<32>* We'd have to ask Terrestria about that sort of thing.",
               "<32>* She'd know."
            ],
            [
               "<32>{#p/basic}* Hey.\n* Don't be nervous about going out there, Frisk.",
               "<32>* I'm sure those two would be happy to see you there.",
               '<32>* And if my analysis of the position is right...',
               '<32>* The planet itself will, too.'
            ],
            ["<32>{#p/basic}* Don't quote me on that, though.", "<32>* I'm not much of a chess player."],
            [
               "<32>{#p/basic}* The smartest move I've ever played in a board game was a double-jump in checkers.",
               '<32>* It was downhill from there.'
            ],
            [
               "<32>{#p/basic}* And if we weren't buried in a jungle, it might be downhill from here, too.",
               '<32>* Not that I blame Asgore for choosing such a low-risk location.',
               "<32>* He's got two adopted children to think about now...",
               '<32>* Not to mention his own son.'
            ],
            ['<32>{#p/basic}* Mountainside living might be cool, but the jungle has its own appeal, too.'],
            []
         ),
         _frontier9: pager.create(
            0,
            [
               '<32>{#p/basic}* Righty-o.\n* The bathroom.',
               '<32>* The bathroom, the bathroom, the bathroom...',
               '<32>* Bathroom bathroom bathroom bathroom bathroom.',
               '<32>* ...',
               '<32>* Bathroom.',
               '<32>* ...',
               '<32>* Bathroom!!!'
            ],
            [
               '<32>{#p/basic}* Okay... I will admit.',
               "<32>* It is pretty cool that you've got extra-fluffy shampoo.",
               "<32>* Even if it doesn't actually make sense for a human to have it.",
               '<32>* Unless... you ARE turning into a goat...',
               '<32>* ... baaah?'
            ],
            [
               '<32>{#p/basic}* ...',
               "<32>* There's a distinct possibility you are not the only one who uses this bathroom."
            ],
            []
         ),
         _frontier10: pager.create(
            0,
            [
               "<32>{#p/basic}* So this is Monster Kid and Asriel's room...",
               "<32>* I don't have much to say.",
               '<32>* Though... that poster on the wall is pretty cool.',
               '<32>* The old homeworld...',
               "<32>* Only now, it's in sepia tone."
            ],
            [
               "<32>{#p/basic}* I'm honestly not surprised he made this room so much smaller than yours.",
               "<32>* He knows monsters very well.\n* If the bed's comfortable, who cares what room it's in?",
               "<32>* Not monsters, that's who!"
            ],
            ['<32>{#p/basic}* ...', '<32>* That must be why Asriel slept in your bed last night as opposed to his.'],
            []
         ),
         _void: pager.create(
            0,
            [
               '<32>{#p/basic}* From what I can tell...',
               '<32>* This room belonged to someone who spent a long time doing one specific thing.',
               "<32>* If I had that kind of free time, I have no idea what I'd do.",
               "<32>* I do know I wouldn't spend it on such a tedious and demoralizingly-large project.",
               "<32>* But I'm not them, so I wouldn't know what goes through their head."
            ],
            []
         )
      },
      balconyX: [
         '<32>{#p/human}* (And yet, despite the sight ahead of you...)',
         "<32>{#p/human}* (... you can't help but feel as if there's something missing.)"
      ],
      balcony0: ['<25>{#p/kidd}{#f/3}* Oh, hey Frisk...', '<25>{#f/1}* I was getting worried you would never wake up!'],
      balcony1: () => [
         '<25>{#p/kidd}{#f/3}* ... haha.',
         ...(SAVE.data.b.ufokinwotm8
            ? ["<25>{#f/2}* I can't believe I actually...", '<25>{#f/4}* ... have...']
            : [
               "<25>{#f/2}* I can't believe I actually have a home now.",
               '<25>{#f/7}* And with King Asgore!?',
               '<25>{#f/1}* All the other kids are gonna want to hang out with us...',
               "<25>{#f/1}* We'll get to throw house parties ALL the time!"
            ])
      ],
      balcony2: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               '<25>{#p/kidd}{#f/4}* Uh... are you okay?',
               "<25>{#f/8}* I'm kinda worried about you, dude...",
               '<25>{#f/7}* Is something wrong?'
            ]
            : [
               '<25>{#p/kidd}{#f/1}* Man, the books in the librarby were one thing...',
               '<25>{#p/kidd}{#f/7}* But being on a planet for REAL!?',
               "<25>{#f/13}* It's SOOOO much cooler!",
               '<25>{#f/2}* Imagine if we tried to explore it all...',
               "<25>{#f/1}* We'd never EVER be finished!"
            ],
      balcony3: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               "<25>{#p/kidd}{#f/4}* (Man, I'm really getting worried now.)",
               '<25>{#f/7}* Frisk, come on...!',
               '<25>{#f/7}* You gotta say something to me, dude!',
               "<25>{#f/8}* I didn't do anything wrong... did I?"
            ]
            : ["<25>{#p/kidd}{#f/2}* Aren't you excited?", '<25>{#f/1}* You and I are gonna do EVERYTHING together!'],
      balcony0a: ['<25>{#p/kidd}{#f/1}* Is THIS what living on a planet is like?\n* This is INCREDIBLE!'],
      balcony1a: [
         '<25>{#p/asriel1}{#f/10}* What?\n* A whole planet of this?',
         '<25>{#f/20}* Pfft.\n* This is nothing...',
         "<25>{#f/17}* Just past the forest, there's a giant mountain...",
         '<25>{#f/17}* And a lake beyond that.'
      ],
      balcony2a: [
         '<25>{#p/kidd}{#f/2}* That must be the lake with that slimy red goo...',
         '<25>{#f/1}* Gross AND awesome!'
      ],
      balcony3a: ['<25>{#p/asriel1}{#f/1}* ... I dare you to swim.'],
      balcony4a: ['<25>{#p/kidd}{#f/7}* ...', '<25>{#f/13}* Deal.\n* But only if you swim WITH me!'],
      balcony5a: [
         '<25>{#p/asriel1}{#f/21}* Uh... I mean...',
         "<25>{#f/20}* Maybe we'd be better off if we stuck to dune racing."
      ],
      balcony6a: ["<25>{#p/kidd}{#f/6}* You're not afraid of getting sticky red goo all over you, are you?"],
      balcony7a: [
         '<25>{#p/asriel1}{#f/8}* ... ugh, of course not, you idiot, I just-',
         '<25>{#p/kidd}{#f/8}* ...',
         "<25>{#p/asriel1}{#f/25}* ... w-wait, I didn't m-mean to..."
      ],
      balcony8a: ['<25>{#p/kidd}{#f/4}* Asriel...?', '<25>{#p/kidd}{#f/4}* Are you okay?'],
      balcony9a: [
         '<25>{#p/asriel1}{#f/13}* ... I...',
         "<25>{#f/22}* I'm alright.\n* You didn't do anything wrong, okay?"
      ],
      balcony10a: [
         "<25>{#p/asriel1}{#f/21}* ... you WOULD just forgive me like that, wouldn't you...",
         "<25>{#f/23}* You're just an innocent monster kid.",
         "<25>{#p/kidd}{#f/1}* That's my name!"
      ],
      balcony11a: [
         '<25>{#p/kidd}{#f/4}* So what were you saying?',
         '<25>{#p/asriel1}{#f/13}* ...',
         '<25>{#f/13}* ... there are deserts, but the races would be done in the tubules.'
      ],
      balcony12a: ['<25>{#p/kidd}{#f/7}* Tubules??\n* What the heck??'],
      balcony13a: [
         "<25>{#p/asriel1}{#f/10}* Uh...\n* Haven't you read the geological surveys?",
         "<25>{#p/kidd}{#f/1}* What's a geological survey?",
         '<25>{#p/asriel1}{#f/15}* ...',
         '<25>{#f/15}* The tubules are a region made up of... uh, tubes.',
         '<26>{#f/17}* Large tubes form cliffs, medium tubes form hills, and small tubes, well...',
         "<25>{#f/20}* They don't really do much, I guess.",
         '<25>{#p/kidd}{#f/1}* Oh!\n* That makes sense.'
      ],
      balcony14a: [
         "<25>{#p/kidd}{#f/1}* Do you think there's other planets out there like this?",
         '<25>{#f/2}* Will we explore those, too?',
         '<25>{#p/asriel1}{#f/10}* Hmm...\n* No doubt there is...'
      ],
      balcony15a: () => [
         '<25>{#p/kidd}{#f/7}* Yo... what if we formed an exploration group!\n* To travel the stars!',
         '<25>{#p/asriel1}{#f/27}* ... huh.',
         "<25>{#p/kidd}{#f/6}* We'd start with this world, and find everything we can...",
         "<26>{#p/kidd}{#f/1}* Then we'd visit more worlds, and make a huge map of the whole galaxy!",
         ...(SAVE.data.b.c_state_secret2_used
            ? ["<26>{#p/kidd}{#f/13}* And we should TOTALLY have a secret handshake!\n* Like Gerson's!"]
            : []),
         ...(SAVE.data.b.c_state_secret3_used
            ? [
               ...(SAVE.data.b.c_state_secret2_used
                  ? ["<25>{#p/asriel1}{#f/13}* With any luck, we'll be hand-in-hand with other galaxies' races, too."]
                  : ["<25>{#p/asriel1}{#f/13}* With any luck, we'll be making maps of other galaxies, too."]),
               "<25>{#f/13}* Dr. Alphys's wormhole travel gives us the means to visit them.",
               "<25>{#f/17}* We'd be a pan-galactic exploration group."
            ]
            : [
               '<25>{#p/asriel1}{#f/17}* Woah, uh, slow down there kiddo...',
               ...(SAVE.data.b.c_state_secret2_used
                  ? [
                     '<25>{#p/asriel1}{#f/17}* ... a secret handshake would be pretty cool, but...',
                     '<25>{#f/13}* ... as for exploring other planets...'
                  ]
                  : []),
               '<26>{#f/13}* It took us long enough just to make it here, let alone another world.'
            ])
      ],
      balcony16a: () =>
         SAVE.data.b.c_state_secret3_used
            ? ["<26>{#p/kidd}{#f/14}* Oh yeah, I totally forgot about that!\n* We've GOTTA try that!"]
            : ['<25>{#p/kidd}{#f/3}* Haha. Maybe.\n* But we could still totally explore it!'],
      balcony17a: [
         '<25>{#p/asriel1}{#f/17}* Just us, huh?',
         '<25>{#p/kidd}{#f/1}* Totally, dude!\n* Just the three of us!'
      ],
      balcony18a1: ['<32>{#p/basic}* ... uh, don\'t you mean \"the four of us?\"'],
      balcony18a2: ['<25>{#p/asriel1}{#f/25}* ...！', "<25>{#f/25}* $(name)... you're..."],
      balcony19a1: ['<32>{#p/basic}* ... wait, NOW you can hear me?'],
      balcony19a2: [
         "<32>{#p/basic}* I tried reaching out to you before, but... it didn't work.",
         '<32>* I wonder what changed...'
      ],
      balcony20a: ["<25>{#p/kidd}{#f/6}* Haha. If you're friends with him, then you're friends with me."],
      balcony21a: ['<32>{#p/basic}* Wait, YOU can hear me?'],
      balcony22a: ["<25>{#p/kidd}{#f/1}* Kind of hard not to when you're standing there, y'know."],
      balcony23a1: ['<32>{#p/basic}* YOU CAN SEE ME!?!?'],
      balcony23a2: ['<32>{#p/basic}* Oh... my god...'],
      balcony24a: ["<33>{#p/basic}* Asriel, how did you not notice me standing here?\n* I'm not even hidden!"],
      balcony25a: ['<26>{#p/asriel1}{#f/23}* ... $(name), I...'],
      balcony26a1: [
         "<32>{#p/basic}* Asriel, it's okay.\n* You don't have to be ashamed of it anymore.",
         '<32>* If you need to cry...',
         '<32>* ... you can.'
      ],
      balcony26a2: [
         "<32>{#p/basic}* Having that extra SOUL inside of me must've made it hard to appear visually...",
         '<32>* Back on the outpost, when I did finally manage to do it...',
         '<32>* That very same SOUL was released shortly after.',
         "<32>* ... I guess this means I'll be visible all the time now?",
         "<32>* To be honest, I'm not sure how to feel about that."
      ],
      balcony27a: ['<25>{#p/kidd}{#f/7}* Wait, are you a human too!?'],
      balcony28a: [
         '<32>{#p/basic}* Excuse me?',
         "<33>* I'm a human GHOST who wants their GOAT brother to be happy.\n* Get it right. Sheesh."
      ],
      balcony29a: ['<25>{#p/kidd}{#f/14}* ... Asriel is your BROTHER!?', '<25>{#p/kidd}{#f/4}* This is too much...'],
      balcony30a: ["<25>{#p/kidd}{#f/1}* But, uh, you guys are all cool as heck, which means I'll be okay."],
      balcony31a: ["<32>{#p/basic}* Oh, I KNOW I'm cool.\n* I'm the coolest human ghost this side of the continent."],
      balcony32a: [
         "<25>{#p/asriel1}{#f/15}* $(name), you're the only human ghost this side of the continent.",
         '<25>{#f/17}* And the planet.',
         '<25>{#f/20}* And the galaxy.',
         "<25>{#f/13}* And the future, since I won't be taking Frisk's SOUL any time soon.",
         '<25>{#f/15}* And then dying... and then meeting them a hundred years later...',
         '<25>{#f/17}* Etcetera, etcetera, radical circumstances notwithstanding.'
      ],
      balcony33a: [
         "<32>{#p/basic}* Pfft.\n* You're funny, Asriel.",
         "<32>* Being the only human ghost doesn't exclude you from being the coolest human ghost.",
         '<32>* A certain handsome skeleton would concur.'
      ],
      balcony34a1: [
         '<25>{#p/kidd}{#f/2}* $(name), huh?',
         "<25>{#f/1}* That's a nice name.",
         '<25>{#p/kidd}{#f/6}* My name is Monster Kid.'
      ],
      balcony34a2: ['<25>{#p/asriel1}{#f/15}* ... did you just...', '<33>{#p/basic}* Asriel.\n* They said the thing.'],
      balcony35a1: [
         '<25>{#p/asriel1}{#f/10}* They really did...',
         '<25>{#p/kidd}{#f/4}* What?\n* Did I say something wrong, or...',
         "<33>{#p/basic}* No, no, you're fine.\n* You just... uh, reminded us of something.",
         '<25>{#p/kidd}{#f/1}* Oh.\n* I hope it was something good, then.'
      ],
      balcony35a2: ['<25>{#p/asriel1}{#f/23}* ... it was.'],
      balcony36a: [
         '<25>{#p/kidd}{#f/3}* Hey... thanks for being here, guys.',
         '<25>{#f/1}* With friends like you, living here is gonna be the best!'
      ],
      balcony37a: [
         "<33>{#p/basic}* ... heh.\n* If we were just friends, maybe.\n* But we're more than that.",
         '<25>{#p/kidd}{#f/7}* ...？'
      ],
      balcony38a: ["<25>{#p/asriel1}{#f/17}* We're your family."],
      balcony39a: [
         '<25>{*}{#p/kidd}{#f/1}* Oh!\n* Oh!\n* Does that mean we can- {%}',
         '<25>{*}{#f/1}* eat together and tell stories and go for nice walks in the park and- {%}',
         '<25>{*}{#p/asriel1}{#f/20}* Yes, yes, of course- {%}',
         "<25>{*}{#p/kidd}{#f/1}* We could have sleepovers at other people's houses and- {^999}"
      ],
      trivia: {
         bed: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? ["<25>{#p/asriel1}{#f/20}* This bed looks like it hasn't been washed in three years..."]
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You run your hands through the covers of the bed, and note the wear and tear.)'
                     : '<33>{#p/basic}* 这张床虽然做工精良，\n  但被谁躺过许多次的痕迹\n  仍然清晰可见。',
                  ...(kiddo ? ['<25>{#p/kidd}{#f/1}* Looks comfy! '] : [])
               ],
         plushie: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? ['<25>{#p/asriel1}{#f/20}* Whoever lives here must really like plushies.']
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You glance uninterestedly at the otherwise soft plushie.)'
                     : "<32>{#p/basic}* 看来我不是唯一一个\n  喜欢软软的东西的人。",
                  ...(kiddo ? ['<25>{#p/kidd}{#f/3}* Aw, cute.'] : [])
               ],
         computer: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? [
                  '<25>{#p/asriel1}{#f/15}* I once dedicated myself to learning how to code...',
                  '<25>{#p/asriel1}{#f/16}* ... whoever wrote this stuff should reconsider their life choices.'
               ]
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You wonder if something like this could be the answer to your dissatisfaction.)'
                     : '<32>{#p/basic}* 被颜色填充代码修饰的\n  等宽字体的文本，\n  填满了整个屏幕。',
                  ...(kiddo ? ['<25>{#p/kidd}{#f/1}* How OLD is this thing?'] : [])
               ],
         flowers: (kiddo: boolean) =>
            SAVE.data.b.svr && !player.metadata.voidkey?.room.startsWith('_frontier') // NO-TRANSLATE

               ? ['<25>{#p/asriel1}{#f/10}* Huh?\n* What sort of flower is this anyway?']
               : [
                  SAVE.data.b.ufokinwotm8
                     ? '<32>{#p/human}* (You wonder where these flowers could have come from.)'
                     : '<32>{#p/basic}* 花朵，\n  多愁善感的典型象征。',
                  ...(kiddo ? ["<25>{#p/kidd}{#f/1}* I don't think I've ever seen flowers like THESE before..."] : [])
               ],
         x_window: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (You can tell it's going to be a day of some variety.)"]
               : [
                  ...(SAVE.data.b.svr ? ["<32>{#p/human}* (You can tell it's going to be a nice day.)"] : []),
                  "<32>{#p/basic}* It's the start of a new day."
               ],
         x_cab: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (It's a cabinet full of clothes you feel indifferent about.)"]
               : [
                  ...(SAVE.data.b.svr ? ["<32>{#p/human}* (It's a cabinet full of your favorite clothes.)"] : []),
                  '<32>{#p/basic}* Various clothes can be found within the cabinet.'
               ],
         x_bed: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (It's a bed.)\n* (You wish you could just go back to sleep.)"]
               : [
                  ...(SAVE.data.b.svr
                     ? ["<32>{#p/human}* (It's a comfortable bed.)\n* (You had a good night's rest.)"]
                     : []),
                  "<32>{#p/basic}* It's brand new, just for you."
               ],
         x_lamp: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (It's a lamp.)\n* (It's just the right height for you to reach it.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's an oddly short lamp."])
         ],
         x_toybox: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The toys are even less interesting than before.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (The toys appear to be rather interesting for once.)']
                     : []),
                  "<32>{#p/basic}* Perhaps these toys aren't so bad after all..."
               ],
         x_wash: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You stare into the drain.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (But your hands were already as clean as they could be.)']
                     : ['<32>{#p/human}* (You wonder if your hands could be a little cleaner.)']),
                  "<32>{#p/basic}* It's a sink.\n* Don't sink too much time into thinking about it."
               ],
         x_toilet: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You ignore the toilet.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You tip up the toilet lid.)\n* (You then tip it back down.)']
                     : []),
                  ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's a toilet.\n* What else would it be."])
               ],
         x_bathrub: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if a warm bath would make you feel better.)']
               : [
                  ...(SAVE.data.b.svr ? ['<32>{#p/human}* (You look forward to taking your next warm bath.)'] : []),
                  '<32>{#p/basic}* Everything in this room is fit exactly to your size...'
               ],
         x_mirror: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (As you stare into the mirror, you reflect on the journey you took to get here.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* No matter what happens, it'll always be you."])
         ],
         x_sign1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The sign describes adjusting to life on a new planet.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  '<33>{#p/basic}* It\'s a five-step guide on how to adjust to planet-bound life.\n* They all amount to \"have fun.\"'
               ])
         ],
         x_sign2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The sign outlines tasks that are yet to be completed.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ["<33>{#p/basic}* It's a list of various pending tasks relating to building a new community."])
         ],
         x_plant: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You caress the plant and sigh as it sighs with you.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You caress the plant and smile as it smiles back at you.)']
                     : []),
                  '<32>{#p/basic}* This plant will always be happy to see you.'
               ],
         x_desk: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You stare into the empty diary, wishing you could write your own story.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You stare into the empty diary, wondering what stories are yet to be told.)'
                     ]
                     : []),
                  "<32>{#p/basic}* It's a diary.\n* It's completely blank.",
                  "<32>{#p/basic}* Asgore's favorite diary- writing chair must still be on the transport ship."
               ],
         x_paperwork: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if any of these items could belong to you.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['<32>{#p/basic}* The papers list various items that have yet to be taken in.'])
         ],
         x_trash: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...）"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ["<32>{#p/basic}* There is a crumpled up recipe for Starling Tea.\n* That's not his trash can..."])
         ],
         x_bed_large: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The bed still seems to be way too large for you.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It'll always be a king-sized bed."])
         ],
         x_cactus: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You poke the cactus.)\n* (It pokes back.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You poke the cactus.)\n* (The cactus is touched by your sense of affection.)'
                     ]
                     : []),
                  '<32>{#p/basic}* So she finally gave up her inner cactus, eh...?'
               ],
         x_booktable: () =>
            SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (But you weren't in the mood to read a diary.)"]
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (The book contains the diary entries of Monster Kid.)']
                     : ["<32>{#p/basic}* It's Monster Kid's diary.\n* The pages are covered in small bite marks."]),
                  '<32>{#p/human}* (You read the first and only entry...)',
                  '<32>{#p/kidding}* \"So asgores my dad now huh? Thats weird. But also AWESOME!\"',
                  '<32>{#p/kidding}* \"Asgore said i should put on some new clothes so maybe ill do that later.\"',
                  '<32>{#p/kidding}* \"He also said i should write a diary to keep track of things.\"',
                  '<32>{#p/kidding}* \"Im pretty good at reading and writing so this should be really easy.\"',
                  '<32>{#p/kidding}* \"And frisk can totally help me if i do something wrong!\"',
                  '<32>{#p/kidding}* \"Frisk if youre reading this please tell me what i did wrong.\"',
                  '<32>{#p/human}* (You close the diary.)'
               ],
         x_bed_left: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (You check under the covers to make sure it's safe to sleep.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's Monster Kid's bed."])
         ],
         x_knickknacks: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You re-arrange the knick knacks to pass the time.)\n* (You hope nobody notices.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<32>{#p/basic}* It's a shelf full of various toys and knick knacks."])
         ],
         x_bed_right: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (You pat the plushie.)\n* (It might just be you, but it seems a little happier.)',
                  "<32>{#p/basic}* It's Asriel's bed.\n* It doesn't look like it's been used yet."
               ]
               : [],
         x_bookshelf: (() => {
            const pages = pager.create(
               1,
               [
                  '<32>{#p/basic}* \"EURYBIA GEOLOGICAL SURVEY\"\n* \"Authored by the Royal Science Division (RSD).\"',
                  '<32>* \"Preliminary scans of the surface have revealed vast diversity in its ecosystems.\"',
                  '<32>* \"Each section of this report will concentrate on biomes of a specific type.\"',
                  '<32>* \"Sections are as follows.\"',
                  '<32>* \"SECTION 001 - Subterranian\"\n* \"SECTION 002 - Oceanic\"\n* \"SECTION 003 - Structural\"',
                  '<32>* \"SECTION 004 - Magnetic\"\n* \"SECTION 005 - Airborne\"\n* \"SECTION 006 - Forested\"',
                  '<32>* \"SECTION 007 - Spired\"\n* \"SECTION 008 - Metallic\"\n* \"SECTION 009 - Crystalline\"',
                  "<32>* Jeez, how many ARE there?\n* Let's just stop reading here."
               ],
               [
                  '<32>{#p/basic}* \"Howdy, fellow gardeners.\"',
                  '<32>* \"When it comes to Starling flowers, the line between growth and stagnation...\"',
                  '<32>* \"Is access to open space.\"',
                  '<32>* \"That is why they were commonly grown in Aerialis...\"',
                  '<32>* \"Though, on Eurybia, the best place to grow them is unknown.\"',
                  '<32>* \"For the moment, it is recommended that they be grown in orbit.\"',
                  '<32>* \"Space station five will be deployed on date K-615.12.\"',
                  '<32>* \"If this date has not yet arrived, a shuttlecraft will suffice.\"'
               ],
               [
                  '<32>{#p/basic}* \"In the beginning, there was nothing.\"',
                  '<32>* \"Then... the human appeared out of thin air.\"',
                  '<32>* \"The human and the bunny gave each other a big, fluffy hug...\"',
                  '<32>* \"But then...!\"\n* \"The human and the bunny could hug no longer.\"',
                  '<32>* \"Shocking!\"\n* \"Their world views had been shaken to their cores.\"',
                  '<32>* \"Later, after much time had passed, the human began working on a solution.\"',
                  '<32>* \"Day by day, the human worked tirelessly, all so they could hug their bunny once again.\"',
                  '<32>* \"Eventually... the human\'s work was complete, and the bunny was ready.\"',
                  '<32>* \"The human opened their arms, waiting for the bunny to approach...\"',
                  '<32>* \"Before they knew it, the bunny was already in their arms!\"',
                  '<32>* \"And so it was that the human and the bunny lived fluffily ever after.\"'
               ],
               () =>
                  SAVE.data.b.c_state_secret3_used
                     ? [
                        '<32>{#p/basic}* \"Wormhole experiment report!\"\n* \"From Dr. Alphys to Asgore\"',
                        '<32>* \"Progress on my wormhole experiment is going smoothly!\"',
                        '<32>* \"Ever since Frisk forwarded the professor\'s equations, I\'ve made steady progress.\"',
                        '<32>* \"I\'ve even managed to send small objects through the aperture...\"',
                        '<32>* \"In my next test, I\'ll send a tethered scanner through and see what it picks up.\"',
                        '<32>* \"Wormholes for monster travel could be here as soon as K-616.05!\"'
                     ]
                     : [
                        '<32>{#p/basic}* \"Wormhole experiment report.\"\n* \"From Dr. Alphys to Asgore\"',
                        '<32>* \"Progress on my wormhole experiment has hit a snag.\"',
                        '<32>* \"The professor\'s incomplete equations haven\'t been enough to get things working.\"',
                        '<32>* \"I\'ll keep trying, but I can\'t go too fast without putting my life at risk.\"',
                        '<32>* \"In my next experiment, I\'ll see if I can get the aperture to last a little longer...\"',
                        '<32>* \"Wormholes for monster travel won\'t be coming any time soon.\"'
                     ],
               [
                  '<32>{#p/basic}* \"You have received an invitation to the transport ship triumph!\"',
                  '<32>* \"Events will be held from stem to stern, including hovercar races and dance raves!\"',
                  '<32>* \"When we reach the homeworld, a final event will be held on the forward section lounge!\"',
                  '<32>* \"This is an experience you won\'t want to miss, so get up and get loud while you can!\"',
                  '<32>* \"Please note that this invitation expires upon reaching the homeworld.\"',
                  '<32>* \"Can\'t wait to see you there!\"'
               ],
               [
                  '<32>{#p/basic}* \"Toriel\'s fur care guide, dated K-614.09.\"',
                  '<32>* \"When shedding fur, one must always take great care to dispose properly.\"',
                  '<32>* \"The trash can is the obvious choice, but I myself prefer the sink.\"',
                  '<32>* \"If you shed often, consider investing in a sink with garbage disposal.\"',
                  '<32>* \"Regarding softness, the side you sleep on will be the most affected.\"',
                  '<32>* \"If you prefer your head or body fur to be soft, sleep on your side.\"',
                  '<32>* \"To keep your arms and legs soft, sleep on your back.\"',
                  '<32>* \"Thank you, dear readers.\"\n* \"That will be all.\"'
               ]
            );
            return () =>
               SAVE.data.b.ufokinwotm8
                  ? ["<32>{#p/human}* (But you weren't in the mood to read a book.)"]
                  : [
                     ...(SAVE.data.b.svr
                        ? [
                           '<32>{#p/human}* (The books on this bookshelf are capable of swapping their content on-demand.)'
                        ]
                        : [
                           '<32>{#p/basic}* The books are all blank, but get filled with the text of the book you select.'
                        ]),
                     "<32>{#p/human}* (You select a book from the control panel, and pick it out once it's ready...)",
                     ...pages(),
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ];
         })(),
         x_endtable: () =>
            SAVE.data.b.ufokinwotm8
               ? [
                  SAVE.data.b.water
                     ? '<32>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems disturbed.)'
                     : '<32>{#p/human}* (You observe the end table.)\n* (It seems disturbed.)'
               ]
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        SAVE.data.b.water
                           ? '<32>{#p/human}* (You observe the end table, and the cup on top of it.)\n* (It seems pleased.)'
                           : '<32>{#p/human}* (You observe the end table.)\n* (It seems pleased.)'
                     ]
                     : []),
                  '<32>{#p/basic}* At last...\n* A remarkable end table.',
                  ...(SAVE.data.b.water
                     ? [
                        '<33>{#p/basic}* It even has a cup of electro- dampening fluid on it.\n* Truly, a sippy you can rely on.'
                     ]
                     : [])
               ],
         x_chasgore: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? SAVE.data.b.svr && SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ['<32>{#p/human}* (The chair strikes you as being where it belongs.)']
                  : SAVE.data.b.svr || (SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used)
                     ? ['<32>{#p/human}* (The chair strikes you as being well-placed enough.)']
                     : ['<32>{#p/human}* (The chair strikes you as being out of place.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['<32>{#p/basic}* A comfy reading chair...', "<32>* Doesn't seem like the right size for Asgore."])
         ],
         x_window_left: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (Staring out the window, you wonder where you went wrong to deserve this feeling.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (Staring out the window, you feel nothing but excitement for the future ahead.)'
                     ]
                     : []),
                  '<32>{#p/basic}* The window accentuates the atmosphere outside.'
               ],
         x_window_right: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (Staring out the window, you ask yourself why things had to end up this way.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (Staring out the window, you remind yourself of how long you've waited to get here.)"
                     ]
                     : []),
                  '<32>{#p/basic}* The window enhances the atmosphere inside.'
               ],
         x_plant_left: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You touch the plant lightly.)\n* (It understands your pain.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You touch the plant lightly.)\n* (It shakes and bobs, relieved that you were here.)'
                     ]
                     : []),
                  '<33>{#p/basic}* A compassionate plant.'
               ],
         x_plant_right: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You touch the plant lightly.)\n* (It promises things will get better for you.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You touch the plant lightly.)\n* (It appreciates the gesture.)']
                     : []),
                  '<32>{#p/basic}* An optimistic plant.'
               ],
         x_sign3: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (The sign doesn't appear to hold anything of note.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  "<32>{#p/basic}* It's a digital picture frame.\n* All it needs now are some good memories, in visual form."
               ])
         ],
         x_chair1: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the fairly large size of the dining chair.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : SAVE.data.b.svr && SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a mother."]
                  : SAVE.data.b.svr || (SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used)
                     ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a queen."]
                     : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."])
         ],
         x_chair2: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the small size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a brother."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."])
         ],
         x_chair3: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if this chair is still fit for a little angel.)']
               : [
                  ...(SAVE.data.b.svr
                     ? [
                        '<32>{#p/human}* (You note the perfect size of the dining chair.)',
                        "<32>{#p/basic}* It's fit just for you, Frisk."
                     ]
                     : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a child."])
               ],
         x_chair4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the slightly small size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a sibling."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : SAVE.data.b.f_state_kidd_betray
                     ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Not fit for anyone."]
                     : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a monster."])
         ],
         x_chair5: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You note the exceptional size of the dining chair.)']
               : []),
            ...(SAVE.data.b.svr
               ? ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Fit for a father."]
               : SAVE.data.b.ufokinwotm8
                  ? []
                  : ["<32>{#p/basic}* One of Asgore's dining chairs.\n* Still fit for a king."])
         ],
         x_fridge: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It groans harshly.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You place your hands on the exterior of the fridge.)\n* (It purrs gently.)']
                     : []),
                  ...[
                     ['<32>{#p/basic}* The fridge is mostly empty, save for a single glass of water from Undyne.'],
                     [
                        '<32>{#p/basic}* The fridge is mostly empty, save for a single bottle of exoberry punch from Undyne.'
                     ],
                     [
                        '<32>{#p/basic}* The fridge is mostly empty, save for a single mug of hot cocoa from Undyne.',
                        "<32>* ... it's freezing cold by now."
                     ],
                     [
                        '<32>{#p/basic}* The fridge is mostly empty, save for a single cup of Starling tea from Undyne.',
                        "<32>* ... it's freezing cold by now."
                     ]
                  ][SAVE.data.n.undyne_drink]
               ],
         x_sink: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ["<32>{#p/human}* (Surprisingly, you can't find any residue in the sink.)"]
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : ['<32>{#p/basic}* No fur, no hair...\n* Indeed, these are the wonders of technology.'])
         ],
         x_drawer: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You open the drawer, and pet the dog within for comfort.)']
               : [
                  ...(SAVE.data.b.svr ? ['<32>{#p/human}* (You open the drawer, and wave to the dog within.)'] : []),
                  '<32>{#p/basic}* That dog, in that drawer...\n* Better not let Papyrus catch wind of this.'
               ],
         x_stove: () =>
            SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (You wonder if the stove will burn this house down, too.)']
               : [
                  ...(SAVE.data.b.svr
                     ? ['<32>{#p/human}* (You wonder what delicious meals will be made here.)']
                     : []),
                  "<32>{#p/basic}* It's the same model as Undyne's stove...",
                  '<32>* We can only hope it came equipped with the appropriate safety measures this time.'
               ],
         x_sign4: () => [
            ...(SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
               ? ['<32>{#p/human}* (The sign lists instructions to a certain recipe.)']
               : []),
            ...(SAVE.data.b.ufokinwotm8
               ? []
               : [
                  '<32>{#p/basic}* Tucca Zunasca, a new kind of soup for a new kind of world.',
                  '<32>* In a pot, brown a sausage, adding spicy pepper flakes as needed.',
                  '<32>* Add two Kriatas of basic stock, and bring the pot to a boil.',
                  '<32>* For best results, apply fire magic. Otherwise, oxygenated flame will suffice.',
                  '<32>* Dice one pound of Eurybian potatoes, and add them to the boiling pot.',
                  '<32>* Once the mixture begins to sparkle, begin adding whipping cream and bar-bird broth.',
                  '<32>* For now, source the cream from the giga-vine canopy. Other sources may be found later.',
                  '<32>* Additionally, kale or kretaada may be added, and cooked at high intensity until soft.',
                  '<32>* Once complete, your soup should be ready for the table!'
               ])
         ]
      },
      moniker: [
         ['灵魂杀手', '灵魂杀手', '灵魂杀手', '灵魂杀手'],
         ['黄天霸主', '黄天霸主', '霸主', '黄天霸主'],
         ['风云剑客', '风云剑客', '剑客', '风云剑客'],
         ['狂怒剑皇', '狂怒剑皇', '剑皇', '狂怒剑皇'],
         ['星际游侠', '星际游侠', '游侠', '星际游侠']
      ] as [string, string, string, string][]
   },

   b_act: {
      kiss: '* 亲吻',
      activate: '* 激活',
      advice: '* 建议',
      agree: '* 认同',
      alphys: '* Alphys',
      analyze: '* 分析',
      annoy: '* 发火',
      appease: '* 呼吁',
      approach: '* 靠近',
      asgore: '* Asgore',
      asriel: '* Asriel',
      asrieldreemurr: '§fill=#ff7f7f§§swirl=2/1/1.05§§hue§* Asriel Dreemurr',
      bathe: '* 洗澡',
      beckon: '* 招呼过来',
      bedtime: '* 睡觉时间',
      berate: '* 斥责',
      blind: '* 闪瞎',
      boast: '* 自夸',
      boo: '* 喝倒彩',
      boost: '* 帮助',
      bow: '* 鞠躬',
      break: '* 破坏',
      burn: '* 挖苦',
      carry: '* 带走',
      challenge: '* 挑战',
      charge: '* 付钱',
      check: '* 查看',
      cheer: '* 鼓励',
      clean: '* 清洁',
      cocoa: '* 热巧',
      comfort: '* 安抚',
      compliment: '* 称赞',
      compose: '* 作曲',
      conclude: '* 总结',
      console: '* 安慰',
      counter: '* 反驳',
      create: '* 手搓天线',
      criticize: '* 批评',
      cuddle: '* 拥抱',
      cut: '* 剪线',
      dance: '* 跳舞',
      dream: '* 梦想',
      dinnertime: '* 晚餐时间',
      direct: '* 指导',
      disarm: '* 缴械',
      disown: '* 拔胡子',
      diss: '* 贬损',
      distance: '* 疏远',
      distract: '* 分心',
      ditch: '* 甩掉',
      dontpick: '* 不招惹',
      encourage: '* 鼓励',
      escort: '* 护送',
      flash: '* 闪光',
      flirt: '* 调情',
      grin: '* 微笑',
      guide: '* 引导',
      handshake: '* 握手',
      hangout: '* 消遣',
      heckle: '* 责难',
      heel: '* 翻脸',
      highfive: '* 击掌',
      home: '* 回家',
      hope: '* 希望',
      hug: '* 拥抱',
      hum: '* 哼唱',
      hypothesize: '* 做假设',
      ignore: '* 无视',
      inquire: '* 询问',
      insult: '* 辱骂',
      joke: '* 讲笑话',
      agreement: '* 协定',
      call: '* 电话',
      dinner: '* 晚餐',
      judgement: '* 审判',
      laugh: '* 大笑',
      lecture: '* 指责',
      leech: '* 吸血',
      lesson: '* 教学',
      mislead: '* 误导',
      mix: '* 混音',
      mystify: '* 迷惑',
      notes: '* 笔记',
      object: '* 拒绝',
      papyrus: '* Papyrus',
      password: '* 密码',
      pat: '* 轻拍',
      pay: '* 付钱',
      perch: '* 栖息',
      pet: '* 抚摸',
      pick: '* 招惹',
      play: '* 玩耍',
      playdead: '* 装死',
      plead: '* 求饶',
      pluck: '* 拔胡子',
      poke: '* 戳刺',
      pose: '* 摆姿势',
      praise: '* 称赞',
      promise: '* 许诺',
      punch: '* 果酒',
      puzzle: '* 谜题',
      puzzlehelp: '* 谜题求助',
      rap: '* 说唱',
      reassure: '* 安慰',
      release: '* 释放压力',
      resniff: '* 重新闻闻',
      rest: '* 休息',
      roll: '* 打滚',
      sample: '* 采样',
      sans: '* Sans',
      scream: '* 尖叫',
      secret: '* 秘密',
      shout: '* 喊叫',
      shove: '* 推搡',
      siphon: '* 偷取能量',
      sit: '* 坐上去',
      slap: '* 击打',
      smile: '* 微笑',
      someoneelse: '* 别的什么人',
      spark: '* 引燃',
      stare: '* 瞪眼',
      steal: '* 偷窃',
      storytime: '* 故事时间',
      suggest: '* 提议',
      talk: '* 交谈',
      taunt: '* 嘲讽',
      tea: '* 花茶',
      telloff: '* 批判',
      terrorize: '* 恐吓',
      test_a: '* 融合',
      test_b: '* 移植',
      test_c: '* 注入',
      threaten: '* 威胁',
      tickle: '* 轻抚',
      topple: '* 推倒',
      toriel: '* Toriel',
      translate: '* 翻译',
      travel: '* 靠近',
      trivia: '* 分享经验',
      tug: '* 拽下',
      turn: '* 骗他转身',
      undyne: '* Undyne',
      walk: '* 遛狗',
      water: '* 白开水',
      whisper: '* 耳语',
      whistle: '* 吹口哨',
      yell: '* 喊叫'
   },

   b_group_common: {
      nobody: () => (!world.genocide && world.bullied ? '* ...但是大家都逃走了。' : '* ...但是谁也没有来。')
   },

   b_opponent_dummy: {
      act_check: ["<32>{#p/story}* 训练人偶 - 攻击0 防御0\n* 壳中幽灵，祝君安宁。"],
      act_flirt: [
         '<32>{#p/human}* （你向人偶调情。）',
         "<32>{#p/basic}* 它的反应和你想的完全一样。",
         '<32>* Toriel强忍住不笑。'
      ],
      act_hug: ['<32>{#p/human}* （你抱了抱人偶。）'],
      act_slap: ['<32>{#p/human}* （你扇了人偶一巴掌。）'],
      act_talk: [
         '<32>{#p/human}* （你跟人偶聊了几句。）',
         "<32>{#p/basic}* 它好像不怎么健谈。",
         '<32>* Toriel看起来很高兴。'
      ],
      bored: ['<32>{#p/basic}* 人偶厌倦了你意味不明的把戏。'],
      hugged: ['<32>{#p/basic}* 人偶不知为何... 脸红了。'],
      name: '* 训练人偶',
      slapped: ['<32>{#p/basic}* 突然...！'],
      status1: ['<32>{#p/story}* 你遭遇了训练人偶。'],
      status2: ["<32>{#p/story}* 人偶看起来有些厌倦了。"],
      status3: ["<32>{#p/story}* 人偶呆在那，不知在想些啥。"],
      status4: ["<32>{#p/story}* 人偶差点要倒下了。"],
      talk: ['<09>{#p/basic}{#i/20}{~}.....{}']
   },
   b_opponent_maddummy: {
      epiphaNOPE1: ["<11>{#p/basic}{~}{#x3}Ugh, you're WASTING my time!"],
      epiphaNOPE2: ['<08>{#p/basic}{~}Oh.. how strange.'],
      act_check: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ["<32>{#p/story}* 开心人偶 - 攻击0 防御0\n* 它的梦想成真啦！"]
            : ['<32>{#p/story}* 愤怒人偶 - 攻击30 防御255\n* 免疫一切物理攻击。'],
      act_flirt: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<32>{#p/human}* （你向开心人偶调情。）',
               "<32>{#p/basic}* 它正沉浸在梦想成真的喜悦之中，\n  没听到你的话。"
            ]
            : ['<32>{#p/human}* （你向愤怒人偶调情。）', "<32>* 它的反应跟你想的完全一样。"],
      act_hug: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ['<32>{#p/human}* （你抱了抱开心人偶。）']
            : ['<32>{#p/human}* （你抱了抱愤怒人偶。）'],
      act_slap: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<32>{#p/human}* （你扇了开心人偶一巴掌。）',
               '<32>{#p/basic}* 开心人偶不敢再轻举妄动，\n  匆匆逃走了。'
            ]
            : ['<32>{#p/human}* （你扇了愤怒人偶一巴掌。）'],
      act_talk: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<32>{#p/human}* （你想和开心人说说话。）',
               "<32>{#p/basic}* 它正沉浸在梦想成真的喜悦之中，\n  没听到你的话。"
            ]
            : [
               '<32>{#p/human}* （你跟愤怒人偶聊了几句。）',
               "<32>* 它好像不怎么健谈。",
               '<32>* 然而，现在没人\n  对你的行为感到高兴了。'
            ],
      boredTalk: [
         '<11>{#p/basic}{~}{#x3}What the hell?',
         '<11>{#p/basic}{~}{#x1}Why is NOTHING hap- pening?',
         '<11>{#p/basic}{~}{#x4}Am I INVISIBLE to you or something??',
         '<11>{#p/basic}{~}{#x4}...',
         "<11>{#p/basic}{~}{#x4}I CAN'T EVEN BE MAD AT YOU!!!",
         "<11>{#p/basic}{~}{#x4}You're so... INANIMATE!",
         '<11>{#p/basic}{~}{#x4}JUST... GAHH!\nGET OUT OF MY LIFE!',
         '<11>{#p/basic}{~}{#x4}GO LISTEN TO MUSIC WITH NAPSTABLOOK OR SOMETHING!'
      ],
      changeStatus1: ['<32>{#p/story}* 愤怒人偶把棉花\n  弹得到处都是。'],
      changeStatus2: ['<32>{#p/story}* 机械噪声在房间中回响。'],
      fightFail: [
         '<11>{#p/basic}{~}{#x1}愚蠢。\n愚蠢！\n愚蠢！',
         '<11>{#p/basic}{~}{#x3}就算你打到了\n我的身体...',
         "<11>{#p/basic}{~}{#x4}...也伤不到我！",
         "<11>{#p/basic}{~}{#x1}我还是没有实体，\n你这棉花脑袋！！"
      ],
      final1: () => [
         "<11>{#p/napstablook}{~}sorry, i interrupted you, didn't i...",
         '<11>{#p/napstablook}{~}as soon as i came over, your friend immediately left...',
         ...(SAVE.data.n.state_wastelands_napstablook === 2
            ? [
               "<11>{#p/napstablook}{~}oh wait...\ndidn't you attack me before...",
               "<11>{#p/napstablook}{~}uhhh...\nthat's awkward.",
               '<11>{#p/napstablook}{~}sorry...'
            ]
            : [
               '<11>{#p/napstablook}{~}oh no...\nyou guys looked like you were having fun...',
               '<11>{#p/napstablook}{~}oh no...\ni just wanted to say hi...',
               '<11>{#p/napstablook}{~}oh no......\n...........\n...........\n...........\n...........'
            ])
      ],
      gladTalk1: ['<08>{#p/basic}{~}谢啦！'],
      gladTalk2: ['<08>{#p/basic}{~}谢谢你！'],
      gladTalk3: ['<08>{#p/basic}{~}你真棒！'],
      gladTalk4: ['<08>{#p/basic}{~}真不错！'],
      gladTalk5: ['<08>{#p/basic}{~}好！'],
      gladTalk6: ['<08>{#p/basic}{~}...'],
      hugTalk1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
               '<08>{#p/basic}{~}我的\n接触\n恐惧症...',
               "<08>{#p/basic}{~}消失啦！",
               '<08>{#p/basic}{~}人类...\n谢谢你...',
               "<08>{#p/basic}{~}我从未\n感到\n如此幸福..."
            ]
            : SAVE.data.n.state_wastelands_dummy === 4
               ? ['<11>{#p/basic}{~}{#x4}搞什么？\n不要啊！！']
               : ['<11>{#p/basic}{~}{#x3}别-别..！\n我有\n接触\n恐惧症！'],
      hugTalk2: ['<11>{#p/basic}{~}{#x4}快停下！'],
      hugTalk3: ['<11>{#p/basic}{~}{#x2}少来这套！！'],
      hugTalk4: ['<11>{#p/basic}{~}{#x3}...'],
      name: () => (16 <= SAVE.data.n.kills_wastelands ? '* 开心人偶' : '* 愤怒人偶'),
      phase2Talk1: ["<11>{#p/basic}{~}{#x1}看老子不弄死你，\n扯出你的灵魂！"],
      phase2Talk2: ["<11>{#p/basic}{~}{#x1}老子\n要拿你的灵魂\n灭了那力场！"],
      phase2Talk3: ['<11>{#p/basic}{~}{#x6}...我会受到\n万众爱戴，\n万人敬仰！'],
      phase2Talk4: ['<11>{#p/basic}{~}{#x4}THEN EVERYTHING I WANT WILL BE MINE!'],
      phase2Talk5: ["<11>{#p/basic}{~}{#x3}Huh?\nYeah, I guess that'll avenge my cousin."],
      phase2Talk6: ['<11>{#p/basic}{~}{#x5}Do my other cousins care...?'],
      phase2Talk7: ['<11>{#p/basic}{~}{#x4}Whatever.\nWhatever!\nWHATEVER!'],
      phase2Talk8: ['<11>{#p/basic}{~}{#x1}...'],
      phase3Talk1: ['<11>{#p/basic}{~}{#x1}机器人偶！\n使用魔法飞弹！'],
      phase3Talk2: ['<11>{#p/basic}{~}{#x3}机器人偶！\n再来！'],
      phase3Talk3: ["<11>{#p/basic}{~}{#x5}机器人偶！\n咋这么\n没本事呢？？？"],
      phase3Talk4: ['<11>{#p/basic}{~}{#x4}机器人偶！\n最终攻击！'],
      phaseChange1: [
         '<11>{#p/basic}{~}{#x2}痛死了，\n你们这些\n棉花脑袋！！',
         '<11>{#p/basic}{~}{#x1}用{@fill=#f00}魔法{@fill=#000}的时候\n往哪瞄呢！',
         '<11>{#p/basic}{~}{#x4}...',
         '<11>{#p/basic}{~}{#x4}嘿！\n听着！',
         '<11>{#p/basic}{~}{#x3}“{@fill=#f00}魔法{@fill=#000}”那事，\n你就当没听见！'
      ],
      phaseChange2a: ['<11>{#p/basic}{~}{#x4}伙计们！'],
      phaseChange2b1: [
         '<11>{#p/basic}{~}{#x1}全是棉花脑袋。\n棉花脑袋！\n棉花脑袋！',
         '<11>{#p/basic}{~}{#x3}老子没说\n不要冲着我\n攻击吗？',
         '<11>{#p/basic}{~}{#x3}得得得...'
      ],
      phaseChange2b2: ["<11>{#p/basic}{~}{#x4}一帮饭桶！\n老子炒了你们！\n老子有更好的！"],
      phaseChange2c: [
         '<11>{#p/basic}{~}{#x4}哈哈哈。\n哈哈哈！\n哈-哈-哈！',
         "<11>{#p/basic}{~}{#x3}这就让你\n见识见识\n我的真本事...",
         "<11>{#p/basic}{~}{#x6}靠那些\n不是饭桶的\n伙计们！"
      ],
      phaseChange3a1: [
         '<11>{#p/basic}{~}{#x3}咋...\n咋可能呢！',
         '<11>{#p/basic}{~}{#x3}These guys are WORSE than the other guys!'
      ],
      phaseChange3a2: [
         '<11>{#p/basic}{~}{#x1}我不在乎。\n我不在乎！\n我-不-\n在-乎！',
         "<11>{#p/basic}{~}{#x4}老子才\n不需要朋友！！"
      ],
      phaseChange3b: ["<11>{#p/basic}{~}{#x6}我还有\n刀子呢！！"],
      phaseChange3c1: ["<11>{#p/basic}{~}{#x3}我...", '<11>{#p/basic}{~}{#x3}没刀子了。'],
      phaseChange3c2: [
         "<11>{#p/basic}{~}{#x4}没事！！！",
         "<11>{#p/basic}{~}{#x4}我伤不着你，\n你也伤不着我！",
         "<11>{#p/basic}{~}{#x1}YOU'LL BE STUCK FIGHTING ME..."
      ],
      phaseChange3c3: ['<11>{#p/basic}{~}{#x1}Forever.'],
      phaseChange3c4: ['<11>{#p/basic}{~}{#x4}Forever!'],
      phaseChange3c5: ['<11>{#p/basic}{~}{#x6}FOREVER!!!!'],
      phaseChange3d: ['<11>{*}{#p/basic}{~}{#x6}AHAHAHAHA HAHAHAHAH AHAHAHAHA HAHAHAHAH AHAHAHAHA{%}'],
      phaseChange3e: [
         '<11>{*}{#p/basic}{~}{#x2}Wh...\nWhat the heck is this!?{^20}{%}',
         '<11>{*}{#p/basic}{~}{#x6}Ergh!\nAcid rain!?{^20}{%}',
         "<11>{*}{#p/basic}{~}{#x4}Oh, FORGET IT!\nI'm OUTTA here!!{^20}{%}"
      ],
      randStatus1: ['<32>{#p/story}* 要是能找到气闸，\n  愤怒人偶就把你扔出去了。'],
      randStatus2: ['<32>{#p/story}* 愤怒人偶正使唤着它的弹幕。'],
      randStatus3: ['<32>{#p/story}* Mad Dummy glares into a portal, then turns to you with the same expression.'],
      randStatus4: ['<32>{#p/story}* Mad Dummy is hopping mad.'],
      randStatus5: ['<32>{#p/story}* Smells like a textile factory.'],
      gladStatus1: ['<32>{#p/story}* 开心人偶很庆幸自己来了这里。'],
      gladStatus2: ["<32>{#p/story}* 开心人偶正规划着\n  今后的美好人生。"],
      gladStatus3: ['<32>{#p/story}* 开心人偶看起来很满足。'],
      randTalk1: ['<11>{#p/basic}{~}{#x1}愚蠢。\n愚蠢！\n愚蠢！'],
      randTalk2: ['<11>{#p/basic}{~}{#x1}Futile.\nFutile!\nFUTILE!'],
      randTalk3: ['<11>{#p/basic}{~}{#x1}Pitiful.\nPitiful!\nPITIFUL!'],
      randTalk4: ['<11>{#p/basic}{~}{#x1}Feeble.\nFeeble!\nFEEBLE!'],
      slapTalk1: ['<11>{#p/basic}{~}{#x6}好你个...！'],
      slapTalk2: ['<11>{#p/basic}{~}{#x4}你玩我呢？？'],
      slapTalk3: ['<11>{#p/basic}{~}{#x2}脏手拿远点！'],
      slapTalk4: ['<11>{#p/basic}{~}{#x3}...'],
      status1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? ['<32>{#p/story}* 开心人偶打算放你走。']
            : ['<32>{#p/story}* 愤怒人偶拦住了去路！']
   },
   b_opponent_moldsmal: {
      epiphany: [
         ['<08>{#p/basic}{~}\x00*黏液声*'],
         () =>
            world.meanie
               ? ['<08>{#p/basic}{~}咕噜！']
               : SAVE.data.b.oops && world.flirt > 9
                  ? ['<08>{#p/basic}{~}\x00*性感\n扭动*']
                  : SAVE.data.b.oops
                     ? ['<08>{#p/basic}{~}\x00*开心\n扭动*']
                     : ['<08>{#p/basic}{~}\x00*臂中\n抖动*'],
         ['<08>{#p/basic}{~}最后一咕。'],
         ['<08>{#p/basic}{~}\x00*闪亮\n扭动*']
      ],
      act_check0: ['<32>{#p/asriel2}* Gelatini，没脑子的粘球。\n* 有什么好说的？'],
      act_check: ['<32>{#p/story}* GELATINI - 攻击6 防御0\n* 典型印象：身段妖娆气质好，\n  就是没大脑...'],
      act_check2: ["<32>{#p/story}* GELATINI - 攻击6 防御0\n* 应季的色彩令它更为迷人。"],
      act_check3: ['<32>{#p/story}* GELATINI - 攻击6 防御0\n* 与你所喜欢的类型相同。\n* 刻板印象的那种。'],
      act_check4: ['<32>{#p/story}* GELATINI - 攻击6 防御0\n* 这位超级模特早已辉煌不再。'],
      act_flirt: [
         '<32>{#p/human}* （你扭动着你的臀部。）\n* （Gelatini用扭动回应你。）',
         '<33>{#p/basic}* 真是有意义的交流！'
      ],
      act_imitate: [
         '<33>{#p/human}* （你轻轻地拍了拍Gelatini。）\n* （它的身体变色了。）',
         "<32>{#p/basic}* 这是Gelatini高兴时的颜色！"
      ],
      act_slap: [
         '<32>{#p/human}* （你使劲扇了Gelatini一巴掌。）',
         '<32>{#p/basic}* Gelatini身体发生凹陷，\n  但不久便恢复原形。'
      ],
      act_slap2: [
         '<32>{#p/human}* （你用尽全身力气，\n  狠狠扇了Gelatini一巴掌。）',
         '<32>{#p/basic}* Gelatini的根基被动摇了！'
      ],
      act_slap3: [
         '<32>{#p/human}* （你用尽全身力气，\n  狠狠扇了Gelatini一巴掌。）',
         '<32>{#p/basic}* Gelatini逃离了现场！'
      ],
      idleTalk1: ['<08>{#p/basic}{~}吐泡泡..'],
      idleTalk2: ['<08>{#p/basic}{~}挤挤..'],
      idleTalk3: ['<08>{#p/basic}{~}\x00*黏液声*'],
      name: '* Gelatini',
      perilStatus: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ["<32>{#p/kidding}* 这可不是什么好事..."]
            : ['<32>{#p/story}* Gelatini已经开始腐烂了。'],
      sexyChat: ['<08>{#p/basic}{~}\x00*性感\n扭动*'],
      status1: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Gelatini把身体挺成正方形。'] : ["<32>{#p/story}* 一对Gelatini跳了过来。"],
      status2: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Gelatini。']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ["<32>{#p/kidding}* 嘘... 它在思考！"]
               : ['<32>{#p/story}* Gelatini静静地凝结着。'],
      status3: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Gelatini。'] : ['<32>{#p/story}* Gelatini乐观地等待着。'],
      status4: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Gelatini。']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['<32>{#p/kidding}* 这里一个泡泡，那里一个泡泡...']
               : ['<32>{#p/story}* Gelatini正在沉思。'],
      status5: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Gelatini。']
            : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
               ? ['<32>{#p/kidding}* 你知道，\n  Gelatini到底是用什么做的吗？']
               : ['<32>{#p/story}* 空气中飘来阵阵青柠果冻的清香。'],
      status6: ['<32>{#p/story}* 现在，只剩一个了。'],
      status8: () =>
         world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
            ? ['<32>{#p/kidding}* 只剩我们仨啦！']
            : ['<32>{#p/story}* 这只Gelatini只能独自吐泡泡了。']
   },
   b_opponent_spacetop: {
      epiphany: [
         ['<08>{#p/basic}{~}I can communi- cate else- where.'],
         () =>
            world.meanie
               ? ['<08>{#p/basic}{~}Warning broad- cast is well re- ceived!']
               : SAVE.data.b.oops && world.flirt > 9
                  ? ['<08>{#p/basic}{~}Ooh.. I like this kind of signal..']
                  : SAVE.data.b.oops
                     ? ["<08>{#p/basic}{~}I'm on your wave- length now!"]
                     : ['<08>{#p/basic}{~}The signal.. is right on top of me..'],
         ["<08>{#p/basic}{~}I'm just a waste of band- width.."],
         ["<08>{#p/basic}{~}I'll wire you the cash right away!"]
      ],
      act_check: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Astro Serf，宇航员，渴望引人注目。\n* 除了自己的天线，他什么都不在乎。']
            : ["<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen wonders why it isn't named 'Radio Jack.'"],
      act_check2: ['<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen seems to appreciate your sense of fashion.'],
      act_check3: ['<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* This teen is getting ALL the right signals.'],
      act_check4: [
         '<32>{#p/story}* ASTRO SERF - ATK 11 DEF 4\n* Attempting to hijack a public radio to call for help.'
      ],
      act_compliment: ['<32>{#p/human}* （你告诉Astro Serf说它\n  有一根很棒的天线。）'],
      act_flirt: ['<32>{#p/human}* (You flirt with Astro Serf.)'],
      complimentTalk1: ["<08>{#p/basic}{~}DUH!\nWho DOESN'T know?"],
      complimentTalk2: ['<08>{#p/basic}{~}嫉妒了？\n真糟！'],
      createStatus1: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Astro Serf。']
            : ["<32>{#p/story}* Astro Serf小心翼翼地确定着\n  你有没有看它的天线。"],
      createStatus2: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Astro Serf。'] : ['<32>{#p/story}* Astro Serf被打动了。'],
      createTalk1: ["<09>{#p/basic}{~}喂！！！\n我的天线\n在头上呢。"],
      createTalk2: ['<08>{#p/basic}{~}啊？\n你在做甚？'],
      createTalk3: ["<08>{#p/basic}{~}不是.. 这\n怎么可能！"],
      createTalk4: ['<08>{#p/basic}{~}Woah..\nHow did you do that??'],
      createTalk5: ["<08>{#p/basic}{~}你在做..\n你自己的\n天线？"],
      act_create: () =>
         [
            ['<32>{#p/human}* （你开始设计自己的天线。）', '<32>{#p/basic}* 但... 怎么设计？'],
            ['<32>{#p/human}* （你做好了天线，\n  把它戴了上去。）'],
            [
               '<32>{#p/human}* （你开始做另一根天线。）',
               '<32>{#p/basic}* Astro Serf被你整懵了，\n  退出了战斗。'
            ]
         ][battler.target?.vars.create ?? 0],
      flirtStatus1: ['<32>{#p/story}* Astro Serf is not impressed by your attire.'],
      flirtStatus2: ['<32>{#p/story}* Astro Serf is in love.'],
      flirtTalk1: ['<08>{#p/basic}{~}No deal!\nNot without an antenna!'],
      flirtTalk2: ['<08>{#p/basic}{~}W-what??\nUm..\nI..\nYou..'],
      genoStatus: ['<32>{#p/asriel2}* Astro Serf。'],
      hurtStatus: () =>
         world.goatbro ? ['<32>{#p/asriel2}* 离死不远了。'] : ["<32>{#p/story}* Astro Serf的衣服松垮垮的。"],
      idleTalk1: ["<08>{#p/basic}{~}Where's YOUR antenna?"],
      idleTalk2: ['<08>{#p/basic}{~}你的脑袋\n看起来..\n光秃秃的'],
      idleTalk3: ['<08>{#p/basic}{~}What a great antenna!\n(Mine)'],
      idleTalk4: ["<09>{#p/basic}{~}It's signal feedback, not radi- ation"],
      idleTalk5: ['<08>{#p/basic}{~}I just looove my antenna.\nOK?'],
      justiceTalk: ['<08>{#p/basic}{~}What have you done..'],
      name: '* Astro Serf',
      randStatus1: ['<32>{#p/story}* Astro Serf also wants antennae for its other body parts.'],
      randStatus2: ['<32>{#p/story}* Astro Serf makes sure its antenna is still there.'],
      randStatus3: ['<32>{#p/story}* Astro Serf在考虑配一件衣服。'],
      randStatus4: ['<32>{#p/story}* 闻起来像锂。'],
      status1: ['<32>{#p/story}* Astro Serf昂首阔步走了过来。'],
      stealTalk1: ['<08>{#p/basic}{~}I KNEW IT!!!\nTHIEF!!'],
      stealTalk2: ['<08>{#p/basic}{~}时尚警察\n快救我\n啊！！！'],
      act_steal: () =>
         battler.hurt.includes(battler.target!)
            ? [
               "<33>{#p/human}* (You steal Astro Serf's antenna.)\n* (Its spacesuit falls off.)",
               '<33>{#p/basic}* Looks like it was powered by lithium the whole time.'
            ]
            : ["<32>{#p/human}* （你尝试去偷Astro Serf的天线，\n  但它还没变得足够弱。）"]
   },
   b_opponent_space: {
      epiphany: [
         ["<08>{#p/basic}{~}Okay, I'll shine myself out."],
         () =>
            world.meanie
               ? ["<08>{#p/basic}{~}I'll.. get out of your way.."]
               : SAVE.data.b.oops && world.flirt > 9
                  ? ["<08>{#p/basic}{~}You think I'm.. oh.."]
                  : SAVE.data.b.oops
                     ? ['<08>{#p/basic}{~}May our crystals shine as one.']
                     : ['<08>{#p/basic}{~}Careful.. I might be sharp..'],
         ['<08>{#p/basic}{~}I deserve to decay..'],
         ["<08>{#p/basic}{~}Here's all the money I have.."]
      ],
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 锂块。\n* 对，就这样。"]
            : ['<32>{#p/story}* 锂块 - 攻击1 防御0\n* 丢了它的宇航服...'],
      act_reassure: ['<32>{#p/human}* (You inform Lithium that it still looks fine.)'],
      genoStatus: ['<32>{#p/asriel2}* 锂块。'],
      happyStatus: ["<32>{#p/story}* Lithium doesn't mind its identity."],
      happyTalk1: ['<08>{#p/basic}{~}Yeah.. I like my body too.'],
      happyTalk2: ['<08>{#p/basic}{~}Hmm.. antennae are for posers.'],
      happyTalk3: ['<08>{#p/basic}{~}So I can still impress you?'],
      happyTalk4: ['<08>{#p/basic}{~}I wanted you to see me as cool.'],
      hurtStatus: () =>
         world.goatbro ? ['<32>{#p/asriel2}* 也要去见阎王了。'] : ["<32>{#p/story}* It's disintegrating."],
      idleTalk1: ['<08>{#p/basic}{~}I..\nI..'],
      idleTalk2: ['<08>{#p/basic}{~}What can I say..'],
      idleTalk3: ["<08>{#p/basic}{~}What's the point.."],
      idleTalk4: ['<08>{#p/basic}{~}So.. alone..'],
      name: '* 锂块',
      randStatus1: ['<32>{#p/story}* \"Astro Serf\" is no more.'],
      randStatus2: ['<32>{#p/story}* Smells like battery power.']
   },

   b_party_kidd: {
      mkNobody: ['<25>{#p/kidd}{#f/4}* 周围怎么一个人也没有，\n  是我的错觉吗...'],
      mkDeath1: [
         '<32>{#p/kidding}* 呃...',
         "<32>* 对手为啥是这样消失的呢？",
         '<32>* 嗯... 我们打了对手。\n  估计太害怕，就传送走了。\n* 哈哈，肯定是的。'
      ],
      mkDeath2: ['<32>{#p/kidding}* 又消失了？', "<32>* 该死，为啥我没有\n  这么酷的传送器呢！？"],
      mkDeath3: ["<32>{#p/kidding}* 消失了..."],
      mkDeath4: ['<32>{#p/kidding}* ...'],
      mkDeath1OW: [
         '<25>{#p/kidd}{#f/4}* 呃...',
         "<25>* 对手为啥是这样消失的呢？",
         '<25>{#f/1}* 嗯... 我们打了对手，\n  所以...',
         '<25>* 估计太害怕，就传送走了。\n* 哈哈，肯定是的。'
      ],
      mkDeath2OW: [
         '<25>{#p/kidd}{#f/4}* 又消失了？',
         "<25>{#f/1}* 该死，为啥我没有\n  这么酷的传送器呢！？"
      ],
      mkDeath3OW: ["<25>{#p/kidd}{#f/4}* 消失了..."],
      mkDeath4OW: ['<25>{#p/kidd}{#f/4}* ...'],
      mkBully1: [
         '<32>{#p/kidding}* 呃...',
         '<32>* 对手好像吓坏了...',
         "<32>* 希望我们下手没那么重..."
      ],
      mkBully2: ['<32>{#p/kidding}* 那位也...！', '<32>* 我们打得那么狠吗...？'],
      mkBully3: ['<32>{#p/kidding}* ...'],
      mkBully1OW: [
         '<25>{#p/kidd}{#f/4}* 呃...',
         '<25>* 对手好像吓坏了...',
         "<25>* 希望我们下手没那么重..."
      ],
      mkBully2OW: ['<25>{#p/kidd}{#f/7}* 那位也...！', '<25>{#f/4}* 我们打得那么狠吗...？'],
      mkBully3OW: ['<25>{#p/kidd}{#f/4}* ...'],
      mkShyrenDeath: ['<25>{#p/kidd}{#f/4}* 嘿...', "<25>{#p/kidd}{#f/1}* 大家都去哪了？"],
      mkMagic1: [
         "<32>{#p/kidding}* 哟... 我还不会释放很酷的魔法...",
         '<32>{#p/kidding}* 不过，嗯... 我可以帮你疗伤！'
      ],
      mkMagic2a: ['<32>{#p/kidding}* 治疗术！'],
      mkMagic2b: ['<32>{#p/kidding}* 健康与你同在！'],
      mkMagic2c: ['<32>{#p/kidding}* 看好了！'],
      mkNope: ['<32>{#p/kidding}* 不要再让我战斗了...'],
      mkTurn1: ["<32>{#p/kidding}* 帮帮我，我从来没战斗过！\n* 我要怎么做！？"],
      mkTurn2: ['<32>{#p/kidding}* 呃... 帮我！'],
      mkTurn3: ["<32>{#p/kidding}* 我... 我好像会了。"],
      mkTurnAct1: ['<32>{#p/kidding}* 哦！哦！', '<32>* 我知道要怎么行动！', '<32>* 看好了...！'],
      mkWeaken1: ["<32>{#p/kidding}* 真的要这么做吗...？\n* 对手好像不喜欢这样...", '<32>* ...'],
      mkWeaken2: ['<32>{#p/kidding}* 这么做真的好吗...？', '<32>* ...'],
      mkWeaken3a: ['<32>{#p/kidding}* 呃...'],
      mkWeaken3b: ['<32>{#p/kidding}* 嗯...'],
      mkWeaken3c: ['<32>{#p/kidding}* 呃...'],
      
      mkTurnActRand1: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE

            ? [
               ['<32>{#p/story}* 怪物小孩在网里不停挣扎，\n  还给Muffet摆了个鬼脸。'],
               ['<32>{#p/story}* 怪物小孩在网里\n  大喊大叫，不停挣扎。'],
               ['<32>{#p/story}* 怪物小孩发出一阵瘆人的笑声。']
            ]
            : opponent === 'shyren' // NO-TRANSLATE

               ? [
                  ['<32>{#p/story}* 怪物小孩哼了一段\n  瘆人的旋律。'],
                  ['<32>{#p/story}* 怪物小孩嚷着骇人的歌词。'],
                  ['<32>{#p/story}* 怪物小孩疯狂地跺脚。']
               ]
               : opponent === 'woshua' // NO-TRANSLATE

                  ? [
                     ['<32>{#p/story}* 怪物小孩不停地对地上的赃污\n  指指点点。'],
                     ['<32>{#p/story}* 怪物小孩向Skrubbington指着\n  漏水的管道。'],
                     ['<32>{#p/story}* 怪物小孩捂住鼻子，一脸嫌弃。']
                  ]
                  : [
                     ['<32>{#p/story}* 怪物小孩直钩钩地盯着$(x)。'],
                     ['<32>{#p/story}* 怪物小孩愤怒地指着$(x)。'],
                     ['<32>{#p/story}* 怪物小孩绕着$(x)来回踱步，\n  准备下手。']
                  ],
      
      mkTurnActRand2: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE

            ? [
               ['<32>{#p/story}* 怪物小孩夸Muffet穿得真精致，\n  有品味。'],
               ['<32>{#p/story}* 怪物小孩告诉Muffet，\n  她的糕点在怪物界就是一流。'],
               ["<32>{#p/story}* 怪物小孩告诉Muffet，\n  她织的网简直无人能敌。"]
            ]
            : opponent === 'shyren' // NO-TRANSLATE

               ? [
                  ['<32>{#p/story}* 怪物小孩哼了一段优美的旋律。'],
                  ["<32>{#p/story}* 怪物小孩告诉Shyren，\n  她的头发真好看。"],
                  ["<32>{#p/story}* 怪物小孩告诉Shyren，\n  她的声音真好听。"]
               ]
               : opponent === 'woshua' // NO-TRANSLATE

                  ? [
                     ['<32>{#p/story}* 怪物小孩告诉Skrubbington，\n  这片数它最爱干净。'],
                     ["<32>{#p/story}* 怪物小孩告诉Skrubbington，\n  它就是铸厂模范清洁工。"],
                     ["<32>{#p/story}* 怪物小孩对Skrubbington说，\n  它对完美的追求真是执着。"]
                  ]
                  : opponent === 'radtile' // NO-TRANSLATE

                     ? [
                        ["<32>{#p/story}* 怪物小孩夸Radtile的镜子\n  真好看。"],
                        ["<32>{#p/story}* 怪物小孩夸Radtile\n  帽子真酷。"],
                        ["<32>{#p/story}* 怪物小孩再三打量Radtile\n  帅气的脸庞。"]
                     ]
                     : [
                        ['<32>{#p/story}* 怪物小孩告诉$(x)，\n  会陪着它。'],
                        ["<32>{#p/story}* 怪物小孩告诉$(x)，\n  会尽全力帮助它。"],
                        ['<32>{#p/story}* 怪物小孩站到了$(x)上面。']
                     ],
      
      mkTurnActRand3: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE

            ? [
               ['<32>{#p/story}* 怪物小孩试着向Muffet询问\n  蜘蛛部落的事。'],
               ['<32>{#p/story}* 怪物小孩试着向Muffet询问\n  烘焙心得。'],
               ['<32>{#p/story}* 怪物小孩试着向Muffet询问\n  品茶之道。']
            ]
            : opponent === 'shyren' // NO-TRANSLATE

               ? [
                  ['<32>{#p/story}* 怪物小孩和Shyren争论起\n  用哪种记谱方式更好。'],
                  ['<32>{#p/story}* 怪物小孩开始讲起了乐理知识。'],
                  ['<32>{#p/story}* 怪物小孩跟Shyren讨论起\n  彼此喜爱的音乐流派。']
               ]
               : opponent === 'woshua' // NO-TRANSLATE

                  ? [
                     ['<32>{#p/story}* 怪物小孩以“讲卫生”为主题，\n  吟了首小诗。'],
                     ['<32>{#p/story}* 怪物小孩围绕“安”与“危”\n  来了段Rap。'],
                     ['<32>{#p/story}* 怪物小孩自豪地展示着\n  自己的亮晶晶下水管道组。']
                  ]
                  : opponent === 'radtile' // NO-TRANSLATE

                     ? [
                        ['<32>{#p/story}* 怪物小孩朝Radtile摆了个鬼脸。'],
                        ['<32>{#p/story}* 怪物小孩走上前，把脸凑过去，\n  仔细打量着Radtile。'],
                        ['<32>{#p/story}* 怪物小孩把自己扮成一个野孩子。']
                     ]
                     : [
                        ['<32>{#p/story}* 怪物小孩看着$(x)，\n  有样学样，扭动着身体。'],
                        ['<32>{#p/story}* 怪物小孩表演了倒立，\n  $(x)惊呆了。'],
                        ['<32>{#p/story}* 怪物小孩在原地打转，\n  看得$(x)不明所以。']
                     ],
      
      mkTurnActRand4: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE

            ? [["<32>{#p/story}* 怪物小孩想告诉Muffet\n  这一切毫无意义！"]]
            : opponent === 'shyren' || opponent === 'radtile' // NO-TRANSLATE

               ? [['<32>{#p/story}* 怪物小孩告诉对手，\n  时空扭曲即将来临！']]
               : opponent === 'woshua' // NO-TRANSLATE

                  ? [['<32>{#p/story}* 怪物小孩告诉对手，\n  某种病毒快传播到这里了！']]
                  : [['<32>{#p/story}* 怪物小孩告诉对手，\n  酸液从附近的管道里渗出来了！']],
      mkTurnActResult0: ['<32>{#p/story}* 无事发生。'],
      mkTurnActResult1: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? ["<32>{#p/story}* Skrubbington直犯恶心！\n* Skrubbington的防御力下降了！"]
            : opponent === 'shyren' // NO-TRANSLATE

               ? ["<32>{#p/story}* Shyren感到很不自在！\n* Shyren的防御力下降了！"]
               : opponent === 'radtile' // NO-TRANSLATE

                  ? ["<32>{#p/story}* Radtile感到很不自在！\n* Radtile的防御力下降了！"]
                  : ["<32>{#p/story}* $(x)感到很不自在！\n* $(x)的防御力下降了！"],
      mkTurnActResult2: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? ["<32>{#p/story}* Skrubbington受宠若惊！\n* Skrubbington的攻击力下降了！"]
            : opponent === 'shyren' // NO-TRANSLATE

               ? ["<32>{#p/story}* Shyren受宠若惊！\n* Shyren的攻击力下降了！"]
               : opponent === 'radtile' // NO-TRANSLATE

                  ? ["<32>{#p/story}* 受到尊重，Radtile心满意足！\n* Radtile的攻击力下降了！"]
                  : ["<32>{#p/story}* 受到尊重，$(x)心满意足！\n* $(x)的攻击力下降了！"],
      mkTurnActResult3: (opponent: string, multiple: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? multiple
               ? ['<32>{#p/story}* 被怪物小孩一搅和，\n  Skrubbington和其他对手都分神了，\n  错过了自己的回合！']
               : ['<32>{#p/story}* 被怪物小孩一搅和，\n  Skrubbington分神了，\n  错过了自己的回合！']
            : opponent === 'shyren' // NO-TRANSLATE

               ? ['<32>{#p/story}* 被怪物小孩一搅和，\n  Shyren分神了，\n  错过了自己的回合！']
               : multiple
                  ? ['<32>{#p/story}* 被怪物小孩一整，\n  $(x)和其他对手忘乎所以，\n  错过了自己的回合！']
                  : opponent === 'radtile' // NO-TRANSLATE

                     ? ['<32>{#p/story}* 被怪物小孩一整，\n  Radtile忘乎所以，\n  错过了自己的回合！']
                     : ['<32>{#p/story}* 被怪物小孩一整，\n  $(x)忘乎所以，\n  错过了自己的回合！'],
      mkTurnActResult4: (opponent: string, multiple: boolean, allowpac: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? [
               '<32>{#p/story}* Skrubbington担心自己小命不保，\n  赶忙跑掉了！',
               ...(multiple ? ['<32>{#p/story}* 其他对手还想继续战斗。'] : [])
            ]
            : opponent === 'shyren' // NO-TRANSLATE

               ? allowpac
                  ? ['<32>{#p/story}* Shyren担心自己小命不保，\n  赶忙跑掉了！']
                  : ['<32>{#p/story}* 表演过后，Shyren有了信心。\n  决定勇敢地直面危险！']
               : opponent === 'radtile' // NO-TRANSLATE

                  ? ['<32>{#p/story}* Radtile担心自己小命不保，\n  赶忙跑掉了！']
                  : [
                     '<32>{#p/story}* $(x)担心自己小命不保，\n  赶忙跑掉了！',
                     ...(multiple ? ['<32>{#p/story}* 其他对手还想继续战斗。'] : [])
                  ],
      mkTurnFight1: () => [
         '<32>{#p/kidding}* 你... 你-你让我战斗？\n* 真的吗？',
         choicer.create('* （确定战斗吗？）', '是', '否')
      ],
      mkTurnFight2a: ['<32>{#p/kidding}* 好吧... 那我试试...'],
      mkTurnFight2b: ['<32>{#p/kidding}* 哦，好...', "<32>* 那我就饶恕他们吧！"],
      mkTurnFight3a: ['<32>* 呀哈...！'],
      mkTurnFight3b: ['<32>* 嘿呀...！'],
      mkTurnFight3c: ['<32>* 我打！'],
      mkTurnMercy1: ['<32>{#p/kidding}* 仁慈？\n* 让我饶恕对手吗？', "<32>{#p/kidding}* 哈哈，容易！"],
      mkTurnX: () => [choicer.create('* （怪物小孩应该怎么做？）', '仁慈', '行动', '魔法', '战斗')]
   },

   c_name_common: {
      keyring: '钥匙串',
      hello_asgore: '打招呼',
      about_asgore: '介绍下自己',
      dad: '叫他“爸爸”',
      flirt_asgore: '调情',
      insult_asgore: '辱骂'
   },

   c_call_common: {
      start: '<32>{#s/phone}{#p/event}* 拨号中...',
      end: '<32>{#s/equip}{#p/event}* 滴...',
      nobody0: ['<32>{#p/human}* （全是噪音。）'],
      nobody1: ['<32>{#p/human}* （没有回应。）'],
      nobody2: ['<32>{#p/basic}* ...但是谁也没有来。'],
      nobody3: ['<32>{#p/human}* （没有信号。）'],
      nobody4: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore... snore...)',
         '<32>* (Snore... snore...)'
      ],
      nobody4a: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore... snore... snore...)',
         '<32>* (Snore... snore... snore...)'
      ],
      nobody4f: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore...!)',
         '<32>* (Snore...!)'
      ],
      nobody4m: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Snore...?)',
         '<32>* (Snore...?)'
      ],
      nobody4i: [
         '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the cell phone.)',
         '<32>{#p/basic}* (Whimper.)',
         '<32>* (Whine.)'
      ],
      about1: [
         '<25>{#p/asgore}{#f/5}* About me?',
         '<25>{#f/7}* ... oh, but where would I begin?',
         '<25>{#f/6}* There is far too much to tell at once.',
         '<25>{#f/6}* Perhaps, over time, you will come to know me very well.',
         '<25>{#f/21}* It would be better than telling you everything at once.'
      ],
      about2: [
         '<25>{#p/asgore}{#f/5}* If you like, I can tell you something about myself later.',
         '<25>{#f/7}* How does that sound?'
      ],
      flirt1: [
         '<25>{#p/asgore}{#f/20}* ...',
         '<25>{#f/4}* Frisk.',
         '<25>{#f/6}* Surely there is someone more your age.',
         '<25>{#f/5}* I am not saying I cannot oblige, but...',
         '<25>{#f/6}* There is a world of difference between \"can\" and \"should.\"'
      ],
      flirt2: [
         '<25>{#p/asgore}{#f/20}* Frisk.',
         '<25>{#f/20}* Perhaps when you are older, we may explore this further.',
         '<25>{#f/6}* But not now.'
      ],
      flirt3: [
         '<25>{#p/asgore}{#f/20}* Frisk.',
         '<25>{#f/6}* You call me \"Dad,\" and then you flirt with me.',
         '<25>{#f/5}* I am not sure how to react to this.'
      ],
      hello: [
         ['<25>{#p/asgore}{#f/21}* A greeting, you say?', '<25>{#f/7}* Hmm...', '<25>{#f/6}* I give you a \"Howdy!\"'],
         ['<25>{#p/asgore}{#f/5}* Another greeting?', '<25>{#f/21}* I know...', '<25>{#f/6}* \"How do you do!\"'],
         [
            '<25>{#p/asgore}{#f/5}* ...',
            '<25>{#f/5}* At this rate, I am going to run out of greetings.',
            '<25>{#f/6}* Though, the birds outside may be more willing to oblige.',
            '<25>{#f/7}* Why not try with them?'
         ],
         ['<25>{#p/asgore}{#f/5}* ... howdy, little one.', '<25>{#f/6}* It is always nice to hear your voice.']
      ],
      dad1: [
         '<25>{#p/asgore}{#f/6}* ...',
         '<25>{#f/24}* ...',
         '<25>{#f/21}* Of course.',
         '<25>{#f/6}* I suppose it is only natural you would call me that.',
         '<25>{#f/6}* You may call me \"Dad\" if you want, Frisk.'
      ],
      dad2: [
         '<25>{#p/asgore}{#f/24}* ...\n* Goodness gracious.',
         '<25>{#f/6}* You seem very intent on me being your father.',
         '<25>{#f/21}* Fortunately, I had already planned to fill that role.'
      ],
      dad3: [
         '<25>{#p/asgore}{#f/24}* ...\n* Goodness gracious.',
         '<25>{#f/6}* You flirt with me, and then you call me \"Dad.\"',
         '<25>{#f/5}* I am not sure how to react to this.'
      ],
      insult1: () =>
         SAVE.data.b.ufokinwotm8
            ? [
               '<25>{#p/asgore}{#f/1}* ...',
               '<25>{#f/1}* You seem very upset about something...',
               '<25>{#f/6}* If you like, we may talk once construction has come to an end.'
            ]
            : [
               '<25>{#p/asgore}{#f/8}* ...',
               '<26>{#f/6}* Ooh.\n* How dastardly of you.',
               '<25>{#f/21}* But do not worry...\n* I can tell you are only kidding with me.'
            ],
      insult2: () =>
         SAVE.data.b.ufokinwotm8
            ? ['<25>{#p/asgore}{#f/1}* ...', '<25>{#p/asgore}{#f/6}* I will be available to talk with you soon, okay?']
            : ['<25>{#p/asgore}{#f/21}* Now, now.\n* There is no need to be so brazen.']
   },

   s_save_common: {
      _cockpit: {
         name: '无人深空',
         text: []
      },
      _frontier1: {
         name: '你的家',
         text: ["<32>{#p/human}* （你充满了决心。）"]
      },
      _frontier8: {
         name: '欧律比亚',
         text: []
      }
   }
};


// END-TRANSLATE
