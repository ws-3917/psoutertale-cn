import { ca_state, cf2_state } from '../../../code/citadel/extras';
import { asrielinter, cs_state } from '../../../code/common/api';
import { spawn } from '../../../code/systems/core';
import { battler, calcLV, choicer, instance, pager, player, postSIGMA, world } from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';
import { CosmosUtils } from '../../../code/systems/storyteller';

// START-TRANSLATE

export default {
   a_citadel: {
      youvedoneitnow: [
         [
            '<32>{#p/human}* （一股暗流在你心中充盈。）',
            '<32>{#p/human}* （你祈祷，这只是一场噩梦。）'
         ],
         [
            '<32>{#p/human}* （你拼命想从那黑暗中挣脱出来。）',
            '<32>{#p/human}* （你竭尽全力与之抗争，\n  但无济于事。）'
         ],
         [
            '<32>{#p/human}* （你大声呼救，但谁也没有来。）',
            '<32>{#p/human}* （你别无所求，只希望能彻底解脱。）'
         ],
         ['<32>{#p/human}* （...）', '<32>{#p/human}* （你深吸一口气，\n  准备迎接最终的结局。）'],
         ['<32>{#p/human}* （...）', '<32>{#p/human}* （你已做好准备。）']
      ],
      hypertext: {
         count: '$(x)秒后重启',
         death1: ['{#p/human}（你深吸了一口气。）', "（你充满了决心。）"],
         death2: [
            "{#p/human}{#v/1}{@fill=#42fcff}失败了没关系...",
            '{@fill=#42fcff}沉住气，再来一次吧...'
         ],
         death3: ['{#p/human}{#v/2}{@fill=#ff993d}可别在这会儿就放弃。', '{@fill=#ff993d}起来，继续作战！'],
         death4: ["{#p/human}{#v/3}{@fill=#003cff}相信自己能行的。", "{@fill=#003cff}别退缩！"],
         death5: [
            '{#p/human}{#v/4}{@fill=#d535d9}活过这轮不成问题...',
            '{@fill=#d535d9}继续前进。'
         ],
         death6: [
            "{#p/human}{#v/5}{@fill=#00c000}整个世界都指望你了...",
            '{@fill=#00c000}相信自己！'
         ],
         death7: ["{#p/human}{#v/6}{@fill=#faff29}他早晚会败下阵来。"],
         cyan1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}依靠{@mystify=耐心而忖恧㤈耏寸}耐心{@mystify=}，将会有望逃脱。',
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}帮我拿回小熊座...',
            '<99>{*}{#p/human}（按[Z]传送。）'
         ],
         cyan2: [
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}那个存在，正伺机而动。',
            '<99>{*}{@fill=#42fcff}有了耐心，你就能挺住不败...'
         ],
         orange1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}凭借{@mystify=勇气勈氣甬気力乞}勇气{@mystify=}，或将摆脱束缚。',
            "<99>{*}{#p/human}{#v/2}{@fill=#ff993d}别忘了我的超能手套！",
            '<99>{*}{#p/human}（按[Z]释放冲击波。）'
         ],
         orange2: [
            '<99>{*}{#p/human}{#v/2}{@fill=#ff993d}那个存在，正不断靠近...',
            '<99>{*}{@fill=#ff993d}有了勇气，就能重拳出击！'
         ],
         blue1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}坚守{@mystify=正直㱏十止且上目}正直{@mystify=}，必定能够逃脱。',
            "<99>{*}{#p/human}{#v/3}{@fill=#003cff}帮我带回我最信赖的悬浮靴。"
         ],
         blue2: [
            '<99>{*}{#p/human}{#v/3}{@fill=#003cff}那个存在，正立于一处。',
            '<99>{*}{@fill=#003cff}坚守正直，你就能迎难而上。'
         ],
         purple1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}拥有{@mystify=毅力䝘刀豙万殳勹}毅力{@mystify=}，定可摆脱束缚。',
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}一台平板电脑就能伴你远行。'
         ],
         purple2: [
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}那个存在，已不再稳定。',
            '<99>{*}{@fill=#d535d9}拥有毅力，怎会轻言放弃？'
         ],
         green1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某个迷失灵魂呼唤着你。',
            '<99>{*}{@fill=#faff29}心怀{@mystify=善良譱艮言㫐羊哴}善良{@mystify=}，终能冲破枷锁。',
            '<99>{*}{#p/human}{#v/5}{@fill=#00c000}请用那架塔布拉木琴解救我！'
         ],
         green2: [
            '<99>{*}{#p/human}{#v/5}{@fill=#00c000}那个存在，正土崩瓦解...',
            '<99>{*}{@fill=#00c000}心怀善意，定会立于不败之地...'
         ],
         yellow: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}迷失的灵魂呼唤了你。',
            '<99>{*}{@fill=#faff29}秉持正义，你一一回应。',
            '<99>{*}{@fill=#faff29}将他们从牢笼中解放。',
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}终于啊。',
            "<99>{*}{#p/human}{#v/2}{@fill=#ff993d}大英雄！",
            "<99>{*}{#p/human}{#v/3}{@fill=#003cff}干得好。",
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}谢谢你...',
            "<99>{*}{#p/human}{#v/5}{@fill=#00c000}太棒了...！",
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}我们的力量归你了。',
            '<99>{*}{@fill=#faff29}有了这些力量，就能彻底击败那东西。',
            '<99>{*}{@fill=#faff29}事成之后...',
            '<99>{*}{@fill=#faff29}...去做你必须要做的事吧。',
            '<99>{*}{@fill=#faff29}现在，结果了它！',
            '<99>{*}{#p/human}（按[Z]射击。）'
         ],
         boot: '重启中...',
         init: '已就位',
         warn: '警告...',
         file1saved: '存档1 已保存',
         file1loaded: '存档1 已载入',
         file2saved: '存档2 已保存',
         file2loaded: '存档2 已载入',
         file3saved: '存档3 已保存',
         file3loaded: '存档3 已载入',
         file4saved: '存档4 已保存',
         file4loaded: '存档4 已载入',
         file5saved: '存档5 已保存',
         file5loaded: '存档5 已载入',
         file6saved: '存档6 已保存',
         file6loaded: '存档6 已载入'
      },
      noequip: ['<32>{#p/human}* （你打算不这么做。）'],
      genotext: {
         monologue: [
            (re: boolean) => [
               ...(re
                  ? ['<26>{#p/asriel2}{#f/13}* 我之前说到...']
                  : ["<25>{#p/asriel2}{#f/13}* 其实..."]),
               "<25>{#f/16}* ...我早就亲手毁灭过\n  这该死的前哨站。",
               "<25>{#f/15}* 一次又一次，一次又一次...\n* 呵，我早就记不清\n  自己看过多少条时间线了。",
               '<25>{#f/23}* 可是...',
               "<25>{#f/16}* 我纵使可以随心所欲，\n  但一直觉得... 缺点什么。"
            ],
            (re: boolean) => [
               '<25>{#p/asriel2}{#f/15}* 那时，我从昏迷中苏醒。\n  却发现自己变成了一颗星星。',
               "<25>{#f/16}* 我没有手，没有腿，\n  什么都做不了。",
               "<25>{#f/13}* 我不知所措，希望有人\n  能来帮助我，关心我...",
               '<25>{#f/13}* 我大声呼救...',
               '<25>{#f/23}* 我竭力呼喊...',
               '<25>{#f/7}* ...',
               '<25>{#f/6}* ...但是谁也没有来。'
            ],
            (re: boolean) => [
               ...(re
                  ? ["<25>{#p/asriel2}{#f/6}* 之前说到，再度苏醒后，\n  星星身的我再也无法\n  回归正常生活了。"]
                  : []),
               "<25>{#p/asriel2}{#f/15}* 我不仅失去四肢，\n  更失去了“爱与被爱”的能力。",
               '<25>{#f/23}* 我很害怕，我很忧虑。\n* 我别无所求，\n  只希望能让一切恢复正常。',
               "<25>{#f/13}* 所以，我去找父亲，\n  希望他能救救我。",
               "<25>{#f/17}* 父亲说，会一直照顾我...",
               "<25>{#f/13}* ...但他再怎么努力，\n  终究治标不治本。"
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     "<25>{#p/asriel2}{#f/13}* 之前说到，再度苏醒后，\n  我变成了一颗星星，\n  再也无法回归正常生活了。",
                     "<25>{#f/13}* 既然父亲救不了我...",
                     '<25>{#f/16}* 那我就去找母亲了。'
                  ]
                  : ['<26>{#p/asriel2}{#f/16}* 父亲救不了我，\n  那就去找母亲吧。']),
               "<25>{#f/13}* 我心想...\n  找她肯定靠谱。",
               "<25>{#f/17}* 以前，她那么关心我...",
               "<25>{#f/23}* 所以，世上最有能力\n  解救我的人，就是她。"
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     "<25>{#p/asriel2}{#f/13}* 之前说到，再度苏醒后，\n  我变成了一颗星星，\n  再也无法回归正常生活了。",
                     "<26>{#f/16}* 我把希望寄托于我的父母，\n  但他们啥都没帮上。"
                  ]
                  : ["<25>{#p/asriel2}{#f/16}* ...但她也失败了。"]),
               "<25>{#f/13}* 一想到自己要永远\n  当颗星星...",
               '<25>{#f/13}* 一想到谁都救不了自己...',
               '<26>{#f/23}* 我就想马上去死。',
               '<25>{#f/15}* 我放弃了一切... 选择自尽。',
               '<25>{#f/16}* ...可是...\n* 当“死亡”来临时...',
               '<25>{#f/7}* 眼前却突然闪过许多\n  扑朔迷离的景象...',
               '<25>{#f/6}* 之后，我猛然发现自己\n  又回到了醒来的时间点。'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     '<25>{#p/asriel2}{#f/10}* 我们刚才说到哪了？',
                     '<26>{#f/6}* ...想起来了。\n* 我又回到了醒来的时间点。'
                  ]
                  : []),
               "<25>{#p/asriel2}{#f/13}* 一开始，我也纳闷\n  为什么会“回来”...",
               '<25>{#f/15}* ...所以，我做了个实验。\n  看看能不能主动回溯时间。',
               '<25>{#f/16}* 我屏息凝神，集中注意力。\n* 于是... 时间回溯了。',
               "<25>{#f/15}* 我非常吃惊...",
               "<25>{#f/17}* 自己居然获得了\n  “回溯时间”的能力。",
               "<25>{#f/23}* 一开始，我想用这种能力\n  做点好事。",
               "<25>{#f/15}* 所谓“助人自助”，\n  既然我做不到“自助”...",
               '<25>{#f/16}* 起码还能“助人”。'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     '<25>{#p/asriel2}{#f/10}* 我们刚才说到哪了？',
                     '<25>{#f/16}* ...想起来了。\n* 一开始，我用“时间回溯”的能力\n  帮助怪物。'
                  ]
                  : []),
               "<25>{#p/asriel2}{#f/23}* 其实，做好事并不容易。\n* 一开始，给他们干活\n  总要花很大的力气。",
               '<25>{#f/15}* ...渐渐地，\n  我越做越熟练了。',
               '<25>{#f/5}* 很快，那些活\n  我闭眼睛都能干好。',
               '<25>{#f/9}* 嘿嘿，我还真试过呢。',
               '<25>{#f/13}* 把这事挂在嘴边，\n  好像是在炫耀...',
               '<25>{#f/9}* 但说到底...\n  我干得再快，帮得再多，\n  又有什么用呢？',
               '<25>{#f/5}* 帮得再多，\n  我也救不了自己...',
               '<25>{#f/15}* 尽管如此，\n  我还是努力帮助他们，\n  拯救他们...',
               '<25>{#f/15}* 努力做个好人。'
            ],
            (re: boolean) => [
               ...(re ? ['<25>{#p/asriel2}{#f/15}* 之前说到，\n  一开始，我努力帮助别人。'] : []),
               '<25>{#p/asriel2}{#f/16}* 但很快，\n  我发现不对劲。',
               '<25>{#f/15}* 无论重置多少次...',
'<25>{#f/15}* 他们的回答永远是那几句，\n  故事的结局永远是那一种...',
               "<25>{#f/16}* “做个好人”开始变得无聊了。",
               '<25>{#f/6}* 你想说，\n  “那就试试别的行动呗？”',
'<25>{#f/6}* 呵，什么调情、约会、挑逗...\n  早试过了。',
               '<25>{#f/7}* 做多了，也就腻了。',
               "<25>{#f/10}* 我当然可以继续循环，\n  但有什么意思呢？",
               '<25>{#f/6}* 该换换口味了。'
            ],
            (re: boolean) => [
               ...(re
                  ? ["<25>{#p/asriel2}{#f/6}* 之前说到，\n  我当老好人当腻了。"]
                  : []),
               "<25>{#p/asriel2}{#f/4}* 不过，一开始\n  我不想对他们太坏。",
               '<25>{#f/3}* 说点狠话，骂骂人，\n  就差不多了。',
               '<25>{#f/10}* 有时我会感觉心虚，难过。\n* 但转念一想，也没多恶劣。',
               '<25>{#f/6}* 如果我发现\n  人们的反应又开始重复，\n  我就更狠一点。',
               '<25>{#f/8}* 这里骂一句，那里怼一句。',
               '<25>{#f/7}* 骂得多，就不在乎了。',
               "<25>{#f/9}* 那段时间，\n  我最多只是耍耍嘴皮子。\n* 从没动过手，更没杀过人。"
            ],
            (re: boolean) => [
               ...(re ? ["<26>{#p/asriel2}{#f/4}* 之前说到，\n  我开始骂他们，怼他们了。"] : []),
               '<25>{#p/asriel2}{#f/15}* “言语攻击”玩腻了，\n  我又想... \n  要不试试动手揍人？',
               "<25>{#f/16}* 没什么大不了的，\n  只要别失手打死了就行。",
               "<25>{#f/10}* 受点伤，算的了什么？\n  怪物有的是办法疗伤。",
               "<25>{#f/4}* 即使真出了意外，\n  我可以直接重置，\n  他们又能活蹦乱跳。",
               '<25>{#f/3}* ...但意外真的发生了。',
'<25>{#f/3}* 那一刻，\n  我才知道自己多么天真。'
            ],
            (re: boolean) => [
               ...(re ? ["<26>{#p/asriel2}{#f/3}* 之前说到，我感觉\n  “言语攻击”没什么意思，\n  想给他们来点“物理攻击”。"] : []),
               '<25>{#p/asriel2}{#f/13}* 可能是冲昏了头脑...\n  我玩了点“新花样”。',
               '<25>{#f/15}* 我用魔法，把亲生母亲\n  吊了起来。\n* 越勒越紧... 越勒越紧...',
               '<25>{#f/16}* ...',
               '<25>{#f/6}* 生命一点点离她而去。\n* 她气若游丝，\n  哀求我马上停手...',
'<25>{#f/6}* ...',
               '<25>{#f/8}* 我把她活活勒死了。',
               "<25>{#f/7}* 我惊恐万分，马上重置。\n* 但那地狱般的景象\n  却久久挥之不去。",
               '<25>{#f/13}* 重置后，为了让自己心安，\n  我不停做好事，\n  努力做个孝子。',
               "<25>{#f/15}* 但自作孽，不可活。",
               "<25>{#f/15}* 我不敢直视她的目光...\n  不敢直视每一个人..."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     "<26>{#p/asriel2}{#f/15}* 之前说到，\n  第一次杀人后，\n  噩梦般的景象久久挥之不去。",
                     '<25>{#f/16}* 但有了第一次，\n  就会有第二次，第三次...'
                  ]
                  : ['<25>{#p/asriel2}{#f/16}* 有了第一次，\n  就会有第二次，第三次...']),
               '<26>{#f/15}* “万事开头难。”\n* 杀了一次人，\n  就能下得去手了。',
               '<26>{#f/15}* 很快，情况变成这样：\n  我心情不好，杀个人找安慰。\n  我想找乐子，杀个人爽一把。',
               '<26>{#f/16}* 第一次杀人纯粹只是意外。\n  现在却一发不可收拾。',
               '<26>{#f/7}* 但我不怕，\n  杀了就杀了呗，\n  反正我能无限重置。',
               '<25>{#f/6}* 一旦我开始这么想...\n  就再也没有回头路了。'
            ],
            (re: boolean) => [
               '<25>{#p/asriel2}{#f/6}* 重置得越多，\n  折磨他们的损招就越多。',
               '<25>{#f/7}* 我把他们千刀万剐...\n* 我让他们自相残杀...\n* 我使他们如堕地狱...',
               '<25>{#f/15}* 他们死而复生。\n* 他们生而复死。\n* 他们生不如死。',
               "<25>{#f/16}* 一次又一次，\n  一次又一次...\n* 我彻底麻木了。",
               '<25>{#f/3}* 好事、坏事、善事、恶事...\n  什么都做过了，\n  最后，我感受到什么呢？',
               '<25>{#f/3}* ...什么都没有。',
               '<25>{#f/3}* 没有情绪共鸣。\n* 没有意义可言。\n* 只有空虚。',
               '<25>{#f/15}* 我一无所有。\n  没有朋友，没有自由...\n* 于是，我改变了想法。',
               '<26>{#f/23}* 我最后一次重置。\n* 这一次，我任由时间向前，\n  不再干预时间线。'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                     '<26>{#p/asriel2}{#f/16}* 之前说到，\n  我发现一切都毫无意义。',
                     '<25>{#f/23}* 所以，在这次重置后，\n  我不再干预时间线。'
                  ]
                  : []),
               "<25>{#p/asriel2}{#f/17}* 但有了你，$(name)，\n  就不一样了。",
               '<25>{#f/23}* 你知道吗？有你陪着我，\n  我真的非常高兴。',
               "<25>{#f/13}* 有你在身边，我不再孤独。",
               "<25>{#f/15}* 有你在身边，我不再绝望。",
               "<25>{#f/16}* 而且，你不是也想\n  “给他们自由”嘛？",
               '<25>{#f/13}* 我可以帮你实现愿望。',
               '<25>{#f/23}* 我们永远都是好伙伴。'
            ]
         ],
         monologueX1: [
            '<25>{#p/asriel2}{#f/17}* 记住，$(name)。',
            '<25>{#f/17}* 只要我们心连心，\n  就能粉碎一切障碍。'
         ],
         monologueX2: () => [
            '<25>{#p/asriel2}{#f/16}* ...来，握住我的手。',
            ...(SAVE.data.b.water ? ["<25>{#f/13}* 别担心，杯子我帮你拿..."] : [])
         ],
         monologueX3: [
            '<25>{#p/asriel2}{#f/17}* 以前，我们就这样\n  手牵着手，在城市漫步...',
            '<25>{#f/23}* 现在，趁还有机会，\n  我们走完这最后一程。',
            "<25>{#f/16}* ...之后，\n  把一切都炸成碎片。"
         ],
         monologueX4: () => [
            '<25>{#p/asriel2}{#f/16}* 景色真美。',
            ...(SAVE.flag.n.ga_asrielMonologueY < 2
               ? [
                  "<25>{#f/13}* 但前哨站的末日\n  已经到了。",
                  "<25>{#f/7}* $(name)，\n  那些怪物根本不懂我们。",
                  "<25>{#f/6}* 他们还相信\n  宇宙就是个大避难所。",
                  "<25>{#f/8}* 还天真地以为，\n  “星空之大，能容下每一个人。”",
                  "<25>{#f/6}* 但我们俩\n  可不跟那群蠢货一般见识。",
                  "<25>{#f/7}* 谁也阻止不了我们。",
                  "<25>{#f/9}* 嘻嘻。\n* 想来也是真有意思...",
                  '<25>{#f/13}* 这种信念，\n  让所有人疏远我们...',
                  '<25>{#f/16}* ...却也让我们的纽带\n  愈加牢固。',
                  '<26>{#f/17}* 听着，$(name)。\n  只要我们上了飞船，\n  离开这鬼地方...',
                  "<25>{#f/17}* 就能永远在一起了。",
                  "<25>{#f/23}* 这就是天意。"
               ]
               : [
                  '<25>{#f/13}* 该说的我都说了。',
                  "<25>{#f/17}* 继续干正事吧。"
               ])
         ],
         monologueX5: ['<25>{#p/asriel2}{#f/17}* 你来带路。'],
         monologueY: [
            "<25>{#p/asriel2}{#f/16}* ...我不想废话。",
            "<26>{#f/13}* 为什么来这，要干什么，\n  你比我都清楚。"
         ],
         afterfight1: ['<25>{#p/asriel2}{#f/8}* ...真费劲。'],
         afterfight2: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/8}* 看起来，人类都疏散走了。",
                  '<25>{#f/7}* ...啧啧。',
                  "<25>{#f/6}* 那老头要以为\n  就凭这样就能阻止咱们，\n  那他可真傻到家了。",
                  "<25>{#f/10}* 他明明可以\n  用人类灵魂的力量\n  消灭我们...",
                  "<26>{#f/16}* 但说实话...",
                  "<25>{#f/13}* 狠不下心，不敢动手，\n  才是我熟悉的艾斯戈尔。\n* 你说是吧？"
               ],
               ['<25>{#p/asriel2}{#f/6}* 等我一下。']
            ][Math.min(SAVE.flag.n.ga_asriel56++, 1)],
         afterfight3: () => [
            '<25>{#p/asriel2}{#f/16}* 核心即将熔毁。',
            ...(SAVE.flag.n.ga_asriel57++ < 1
               ? [
                  '<25>{#f/5}* 现在，我们只需要\n  找到一艘特殊飞船...',
                  "<25>{#f/9}* 在飞船上，把我们俩的灵魂\n  连接在一起，\n* 这样，我们就能冲出力场。"
               ]
               : [])
         ],
         afterfight4: ['<25>{#p/asriel2}{#f/3}* 跟我走。'],
         afterfight5a: ['<25>{#p/asriel2}{#f/5}* 我最亲爱的艾斯戈尔！', '<25>{#f/5}* 最近活得滋润不？'],
         afterfight5b: [
            '<25>{#p/asgore}{#f/5}* 比你想得还舒服。',
            "<25>{#p/asriel2}{#f/6}* 听好了，你已经无处可逃。\n* 所以别跟我耍什么花招。"
         ],
         afterfight6: [
            '<25>{#p/asgore}{#f/1}* 我没想和你耍花招啊，\n  艾斯利尔。',
            '<25>{#p/asgore}{#f/2}* 我也知道，离死不远了。'
         ],
         afterfight7: ['<25>{#p/asriel2}{#f/10}* 我要把一切都炸成灰烬了，\n  临死之前，有什么遗言？'],
         afterfight8: [
            '<25>{#p/asriel2}{#f/15}* 没有？',
            '<25>{#f/7}* 行。',
            "<25>{#f/6}* 那我们也不劳烦您嘞。",
            '<25>{#f/8}* 现在，把门禁卡\n  给我交出来。'
         ],
         afterfight10: ['<25>{#p/asriel2}{#f/1}* 跟我走，$(name)。', "<25>{#f/2}* 我真是受够这死地方了。"],
         afterfight11: [
            '<25>{#p/asgore}{#f/5}* $(name)...？',
            '<25>{#p/asgore}{#f/6}* ...哦。\n* 艾斯利尔，一路顺风哦。'
         ],
         afterfight12: ['<25>{#p/asriel2}{#f/16}* $(name)，别管他。\n* 这死地方爱咋咋地，\n  跟咱们一分钱关系都没有。'],
         afterfight13: ['<25>{#p/asriel2}{#f/17}* 我只在乎你。'],
         coreboomA1: [
            '<18>{#p/papyrus}{#f/5}有人吗？\n有人吗？',
            "<18>{#p/papyrus}{#f/5}我想找到那个人类，\n就来这了，可是..."
         ],
         coreboomA2: ['<18>{#p/papyrus}{#f/8}不要...！'],
         coreboomA3: ['<32>{#p/basic}* 帕派瑞斯？{%40}'],
         coreboomA4: ["<18>{#p/papyrus}{#f/4}我有不好的预感...{%40}"],
         coreboomA5: ['<32>{#p/basic}* ...有人吗？{%40}'],
         coretext1: ['<32>{#p/basic}{#s/spiderLaugh}* 稳住啊，亲爱的~'],
         coretext2: ['<32>{#p/basic}{#s/spiderLaugh}* 嘎啊...', '<32>{#p/basic}* 一起再加把劲~'],
         coreboomB1: ['<32>{#p/basic}{#s/spiderLaugh}* 啊！', '<32>{#p/basic}* 不要这样啊~'],
         coreboomB2: ['<32>{#p/basic}* 不要哪样？{%40}'],
         coreboomB3: ['<32>{#p/basic}{#s/spiderLaugh}* 该死。{%40}'],
         coretext3: ['<18>{#p/papyrus}{#f/9}要帮忙吗？'],
         coretext4a: ['<32>{#p/basic}{#s/spiderLaugh}* 帕派瑞斯！', "<32>{#p/basic}* 你还活着~"],
         coretext4b: ['<18>{#p/papyrus}{#f/6}我一块肉都没少！'],
         coretext5a: ['<18>{|}{#p/papyrus}{#f/4}啊不对，应该说- {%}'],
         coretext5b: [
            '<32>{#p/basic}{#s/spiderLaugh}* 帕派瑞斯，快去喊些帮手，\n  把系统改回手动控制！'
         ],
         coreboomC1: ["<18>{#p/papyrus}{#f/5}恐怕...\n这里除了我们，没别人了。"],
         coreboomC2: ['<18>{#p/papyrus}{#f/8}不要...！'],
         coreboomC3: ["<32>{#p/basic}{#s/spiderLaugh}* 撑不住了。{%40}"],
         coretext6: ["<32>{#p/basic}* 我马上去叫那些机械师！"],
         coretext7: ['<18>{#p/papyrus}{#f/6}好，好，快去叫！'],
         coreboomD1: ['<32>{#p/basic}* ...', '<32>{#p/basic}* 没人接。'],
         coreboomD2: ['<32>{#p/basic}* ...', "<32>{#p/basic}* 他们说，人手不足？！"],
         coreboomD3: ['<18>{#p/papyrus}{#f/5}可恶。{%40}'],
         coretext8: ['<32>{#p/basic}* ...', "<32>{#p/basic}* 改回手动控制了！"],
         coretext9: ['<32>{#p/basic}{#s/spiderLaugh}* 太好了~'],
         coretext10: ['<32>{#p/basic}* 快好了...'],
         coretext11: ['<32>{#p/basic}{#s/spiderLaugh}* 成功啦~'],
         coretext12a: ['<18>{#p/papyrus}{#f/0}我们成功了吗？！？！'],
         coretext12b: ['<32>{#p/basic}{#s/spiderLaugh}* 啊呼呼...\n  还得有人进入控制台\n  内部操控~'],
         coreboom12c: ["<32>{#p/basic}* 看我干什么！\n* 我就是个人偶！"],
         coreboom12d: ['<32>{#p/basic}{#s/spiderLaugh}* 而且是一个在特战队里\n  待过的人偶~'],
         coreboom12e: ['<32>{#p/basic}* ...那都什么陈年旧事了。'],
         coretext13: ["<32>{#p/napstablook}* 让我来吧"],
         coretext14a: ['<18>{#p/papyrus}{#f/1}【你】从哪冒出来的？？？'],
         coretext14b: [
            '<32>{#p/napstablook}* 对不起...\n* 没时间解释了...',
            '<32>* 表亲，保重...',
            '<32>* 好吗？'
         ],
         coretext15: ['<32>{*}{#p/basic}{#s/spiderLaugh}* 你在干什么~{%40}'],
         coretext16: ["<32>{*}{#p/basic}* 不... 不！\n* ...我不想再失去亲人了！{%40}"],
         coretext17: ['<32>{#p/napstablook}{*}* 我明白了...', '<32>* 我明白到底为什么\n  不稳定了。'],
         coretext18: [
            "<33>{*}{#p/napstablook}* 应该就是这个原因...",
            '<32>{*}* 重设命令执行路径就行。',
            '<32>{*}* 快点啊...'
         ],
         coretext19: ['<32>{#p/napstablook}* ...', '<32>{#p/napstablook}* 成功了...'],
         coretext20: [
            '<25>{#p/asgore}{#f/6}* 怎么样了？',
            '<18>{#p/papyrus}{#f/0}艾斯戈尔！我们成功了！',
            '<18>{#p/papyrus}{#f/0}核心不会爆炸了！',
            '<32>{#p/basic}* ...我的表亲，小幽，它...',
            '<18>{#p/papyrus}{#f/5}人偶的表亲做了件\n很了不起的事。'
         ],
         coretext21: ['<25>{#p/asgore}{#f/1}* 你叫什么名字？'],
         coretext22: [
            '<32>{#p/basic}* 是说我吗？',
            "<32>* 嗯...\n* 呃，现在我应该没有名字了。",
            '<32>* 叫我“人偶”就行。'
         ],
         coretext23a: [
            '<25>{#p/asgore}{#f/1}* 呃，人偶... 听我说。\n* 你很痛苦，大伙也都一样。',
            '<25>{#f/2}* 今天，我们都失去了至亲。'
         ],
         coretext23b1: ['<32>{#p/basic}{#s/spiderLaugh}* 当然，我可没失去哦~'],
         coretext23b2: ['<32>{#p/basic}{#s/spiderLaugh}* ...我不是那个意思。\n  我跟大伙关系都蛮好啦...'],
         coretext24a: [
            "<18>{#p/papyrus}{#f/5}天哪...\n要是那人类没饶恕我，\n我...",
            '<32>{#p/basic}* 人类饶恕你了？\n* 对，那人也饶恕我了...',
            '<32>{#p/basic}{#s/spiderLaugh}* 啊呼呼... \n  没等那人下手，我就先逃了呢~',
            '<18>{#p/papyrus}{#f/0}...哦，对了！\n还有核心的员工！',
            '<18>{#p/papyrus}{#f/0}人类肯定也\n饶恕他们了！'
         ],
         coretext24b: ['<25>{#p/asgore}{#f/1}* ...请问，\n  人类饶恕你们的时候，\n  艾斯利尔在场吗？'],
         coretext25: [
            '<18>{#p/papyrus}{#f/9}当然不在！',
            '<32>{#p/basic}* 不在。',
            "<32>{#p/basic}{#s/spiderLaugh}* 想了一下，应该没看到他~",
            '<25>{#p/asgore}{#f/1}* ...',
            '<25>{#p/asgore}{#f/1}* 果然是这样...',
            '<25>{#p/asgore}{#f/2}* ...或许...\n* 把过错归咎于人类，\n  是我的错...',
            '<18>{#p/papyrus}{#f/6}...\n归咎人类？？',
            '<18>{#p/papyrus}{#f/7}到底怎么回事！！'
         ],
         coretext26: ['<18>{*}{#p/papyrus}{#f/7}艾斯戈尔，你做了什么？！{^40}{%}'],
         coretext27a: '{*}{#p/event}{#i/3}前哨站灰飞烟灭。',
         coretext27b: '{*}{#p/event}{#i/3}前哨站幸免于难。',
         respawn0: () =>
            [
               [
                  [
                     "<25>{#p/asriel2}{#f/15}* 咱俩都离开星港了，\n  你咋就没摸下存档点呢？",
                     '<25>{#p/asriel2}{#f/16}* 唉，我就是说说而已。'
                  ],
                  [
                     "<25>{#p/asriel2}{#f/15}* 咱俩都杀掉安黛因了，\n  你咋就没摸下存档点呢？",
                     '<25>{#p/asriel2}{#f/16}* 唉，我就是说说而已。'
                  ],
                  [
                     "<25>{#p/asriel2}{#f/15}* 咱俩都离开空境了，\n  你咋就没摸下存档点呢？",
                     '<25>{#p/asriel2}{#f/16}* 唉，我就是说说而已。'
                  ],
                  [
                     '<25>{#p/asriel2}{#f/15}* Did you poison yourself after the fight to see what would happen?',
                     "<25>{#p/asriel2}{#f/16}* 真是绝了。"
                  ]
               ],
               [
                  [
                     "<26>{#p/asriel2}{#f/6}* 我上次都提醒你了，\n  你也该记得要保存进度了吧。",
                     "<25>{#p/asriel2}{#f/8}* 虽说就算没保存，\n  区区星港，很快就过去了。",
                     '<25>{#p/asriel2}{#f/7}* 不过我看你是\n  一点记性没长。'
                  ],
                  [
                     "<26>{#p/asriel2}{#f/6}* 我上次都提醒你了，\n  你也该记得要保存进度了吧。",
                     '<26>{#p/asriel2}{#f/8}* 更何况，我们好不容易\n  才灭了安黛因。',
                     '<25>{#p/asriel2}{#f/7}* 不过我看你是\n  一点记性没长。'
                  ],
                  [
                     "<26>{#p/asriel2}{#f/6}* 我上次都提醒你了，\n  你也该记得要保存进度了吧。",
                     '<25>{#p/asriel2}{#f/8}* 更何况，我们好不容易\n  才灭了空境那些碍事的家伙。',
                     '<25>{#p/asriel2}{#f/7}* 不过我看你是\n  一点记性没长。'
                  ],
                  ['<26>{#p/asriel2}{#f/7}* 这才多久，\n  真是累死个人。']
               ],
               [
                  ['<25>{#p/asriel2}{#f/4}* $(name)。\n* 算我求你了，保存下进度吧。'],
                  ['<25>{#p/asriel2}{#f/4}* $(name)。\n* 算我求你了，保存下进度吧。'],
                  ['<25>{#p/asriel2}{#f/4}* $(name)。\n* 算我求你了，保存下进度吧。'],
                  ["<25>{#p/asriel2}{#f/4}* 现在咋感觉你这么烦呢。"]
               ],
               [
                  ['<25>{#p/asriel2}{#f/8}* 别再来了...'],
                  ['<25>{#p/asriel2}{#f/8}* 别再来了...'],
                  ['<25>{#p/asriel2}{#f/8}* 别再来了...'],
                  ['<25>{#p/asriel2}{#f/8}* 别再来了...']
               ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn0++, 3)][Math.floor(SAVE.flag.n._genocide_milestone_last / 2)],
         respawn1: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* 咋回来了？",
                  "<25>{#p/asriel2}{#f/16}* 大不了...\n  再杀他一次就好。"
               ],
               ['<25>{#p/asriel2}{#f/6}* 开玩笑吗？'],
               ['<25>{#p/asriel2}{#f/6}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielRespawn1++, 2)],
         respawn2: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* 我们又回来了。\n* 呵，真是太棒了...",
                  '<25>{#p/asriel2}{#f/16}* 还行，问题不大...\n* 再来一遍吧...'
               ],
               ['<25>{#p/asriel2}{#f/8}* 我有点不耐烦了。'],
               ['<25>{#p/asriel2}{#f/8}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielRespawn2++, 2)],
         respawn4: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* $(name)，我们马上\n  就要把事办成了。',
                  '<25>{#p/asriel2}{#f/16}* 这次保存下进度，\n  行不行啊？'
               ],
               ['<25>{#p/asriel2}{#f/10}* ...你逗我玩呢？'],
               ['<25>{#p/asriel2}{#f/10}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielRespawn4++, 2)],
         respawn6: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* $(name)，听好了。',
                  '<25>{#p/asriel2}{#f/7}* 我们已经干掉她了。',
                  '<25>{#p/asriel2}{#f/5}* 那你还回溯时间干嘛呢？'
               ],
               ["<25>{#p/asriel2}{#f/7}* ...你逗我呢？"],
               ['<25>{#p/asriel2}{#f/7}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielRespawn6++, 2)],
         respawnWitnessA: () =>
            [
               ['<25>{#p/asriel2}{#f/9}* 怎么回事？', '<25>{#p/asriel2}{#f/10}* ...谁攻击了我们？'],
               ['<25>{#p/asriel2}{#f/15}* 我们...', '<25>{#p/asriel2}{#f/10}* ...被一道电魔法击中了？'],
               [
                  "<25>{#p/asriel2}{#f/3}* 肯定是她，艾菲斯。",
                  "<25>{#p/asriel2}{#f/15}* 她竟然没逃跑...",
                  '<25>{#p/asriel2}{#f/16}* 呵，有点意思。'
               ]
            ][SAVE.flag.n.ga_asrielWitness++],
         respawnWitnessB: (wit: number) =>
            wit > 0
               ? [
                  '<25>{#p/asriel2}{#f/15}* 果然是艾菲斯...',
                  '<25>{#p/asriel2}{#f/16}* 呵，有点意思。'
               ]
               : [
                  "<25>{#p/asriel2}{#f/15}* 她竟然没逃跑...",
                  '<25>{#p/asriel2}{#f/16}* 呵，有点意思。'
               ]
      },
      truetext: {
         monologue1: () => [
            '<32>{#p/basic}* Wait.',
            SAVE.data.b.flirt_papyrus
               ? '<32>* I think you forgot to date Papyrus...'
               : '<32>* I think you forgot to hang out with Papyrus...',
            "<32>* ... come on, we can't just leave him behind!"
         ],
         monologue2: [
            '<32>{#p/basic}* Wait.',
            "<32>* Didn't Papyrus want you to hang out with Undyne earlier?",
            "<32>* ... come on, we can't just forget about her!",
            "<32>* Even if she's a bit of a jerk."
         ],
         monologue3: [
            '<32>{#p/basic}* Wait.',
            '<32>* You forgot about Undyne!',
            '<32>* First Papyrus, and now this?',
            "<33>* ... come on, let's go back to her house..."
         ],
         storyEnding: () => [
            '<32>{#p/basic}* ...\n* So now you know.',
            "<32>* And, because of Asriel's diary, you know I got sick on purpose.",
            '<32>* I tricked him, manipulated him into this stupid plan to save everyone.',
            '<32>* Only to turn it into a quest for revenge, and even that was a waste in the end.',
            '<32>* He stopped me from fighting back, and I was mad at him for so long...',
            '<32>* ...',
            '<32>* Maybe... part of me still is.',
            "<32>* I don't know.",
            "<32>* I always think about how things could have been, if only he'd listened...",
            '<32>* ... but at the same time...',
            "<32>* It was probably for the best that he didn't.",
            '<32>* ...',
            '<32>* Look... I just want you to know that, having you by my side...',
            "<32>* It's made me feel like I have a purpose in this world.",
            "<32>* So, for that, I'm thankful.",
            '<32>* I really feel like things are going to get better.',
            '<32>* Or maybe... the end is nearer than I thought.',
            '<32>* ...\n* Either way.',
            "<32>* The force field isn't too far from here.",
            ...(SAVE.data.n.plot_date < 2.1
               ? [
                  '<32>* Though, before we go...',
                  ...(SAVE.data.n.plot_date < 1.1
                     ? [
                        '<32>* We should really go back to see Papyrus.',
                        "<32>* You wouldn't want to keep him waiting at his house, would you?"
                     ]
                     : [
                        '<32>* We should really go back to see Undyne.',
                        "<32>* You wouldn't want to keep Papyrus waiting at her house, would you?"
                     ])
               ]
               : [
                  "<32>* I'm sure you've had enough of my rambling, so we should probably just get going.",
                  "<32>* Who knows.\n* Maybe it'll make sense once the force field is down.",
                  "<32>* ...\n* We'll see."
               ])
         ],
         epilogue: [
            () => [
               "<32>{#p/basic}* That's not to say we have to go and find him right this second.",
               "<32>* It's just...",
               '<32>* ...',
               '<32>{#p/human}* (You hear a large sigh.)',
               '<32>{#p/basic}* 弗里斯克...',
               "<32>* There's still something I haven't told you yet.",
               "<32>* It's about my past, and...",
               "<32>* It's the reason why I'm so desperate to talk to him.",
               "<32>* I'm sorry.",
               '<32>* I just...',
               '<32>* I need to tell you how I got this way.',
               '<32>* I need you to understand.'
            ],
            () => [
               '<32>{#p/basic}* 弗里斯克...',
               "<32>* Can you imagine what it's like to lose your whole family in one night?",
               '<32>* Can you imagine...',
               "<32>* What it's like to know that you're the one to blame?",
               '<32>* ...',
               '<32>* For the past hundred years...',
               "<32>* It's like I've been stuck in limbo.",
               '<32>* No matter how hard I try...',
               "<32>* I just can't seem to break away.",
               '<32>* ...',
               "<32>* I've been forced to watch as everyone else gets to live their life.",
               '<32>* I see them make friends...',
               '<32>* I see them laugh, and love...',
               "<32>* But that's... all I ever do.",
               '<32>* I just... see them.',
               '<32>* Nothing more.'
            ],
            () => [
               '<32>{#p/basic}* When the ghost family found me, mere days after the incident...',
               "<32>* I thought, maybe, this wouldn't be so bad.",
               '<32>* I might be trapped in purgatory, but...',
               "<32>* ... at least I'd have people to talk to, right?",
               '<32>* ...',
               '<32>* They tried to help me...',
               '<32>* They tried to make me feel at home...',
               "<32>* ... but they just couldn't understand what I was going through.",
               '<32>* They were all so young...',
               '<32>* To be honest, they still kind of are.',
               '<32>* Monsters are like children in that way...',
               '<32>* Their innocence is what defines them.',
               "<32>* But it meant they didn't really know how to relate to me.",
               '<32>* ...',
               '<32>* Since then...',
               "<32>* ... I've been on my own."
            ],
            () => [
               '<32>{#p/basic}* With all these years to myself...',
               '<32>* With nothing to do but sit, and think...',
               "<32>* It's a miracle I haven't gone insane.",
               '<32>* Hell, maybe that, too, is part of my \"punishment.\"',
               '<32>* Not through death, nor insanity, nor common company...',
               '<32>* Not through any means am I ever allowed an escape.',
               "<32>* ...\n* But there's a problem with that theory.",
               '<32>* An exception.',
               '<32>* Can you guess what it is?',
               "<32>* I'm sure you've figured it out by now...",
               '<32>* ...',
               "<32>* It's you, Frisk.",
               "<32>* You're the only one who's truly been able to understand me."
            ],
            () => [
               "<32>{#p/basic}* You might think the other humans would've heard me...",
               '<32>* ... but no.',
               "<32>* Sometimes, I'd get a word in, or...",
               '<32>* Appear to them in a dream if I got lucky.',
               '<32>* But you...',
               "<32>* Maybe it's because our SOULs are so similar, but...",
               '<32>* Not only can you hear me...',
               '<32>* I can \"hear\" you, too.',
               "<32>* It's not much, but it's enough to know what you're thinking.",
               '<32>* For example, right now...',
               '<32>* ...',
               '<32>* Frisk, you...',
               "<32>* ... you know that isn't possible, right?",
               choicer.create('* (How will you hug?)', 'Softly', 'Tightly', 'Carefully', 'Desperately'),
               '<32>{#p/basic}* ... silly Frisk.',
               '<32>* If I could accept it, I would.',
               "<32>* But... I can't."
            ],
            () => [
               '<32>{#p/basic}* ... Frisk, I...',
               "<32>* I know I seem like the last person who'd say something like this, but...",
               '<32>* I really love you, Frisk.',
               '<32>* Just like I loved him.',
               "<32>* We're like... a family now.",
               '<32>* Heh.',
               '<32>* ... thanks for giving me the chance to experience the world like new again.',
               '<32>* ... thanks for being the kind of person that you are.',
               '<32>* But... Frisk.',
               "<32>* I'm not sure if I have a future in this world.",
               "<32>* Once you're gone...",
               "<32>* ... I'd just go back to being alone again.",
               "<32>* That's why... it's important I get to talk to him, you know?",
               "<32>* At least then, I'd be able to move on from what happened.",
               "<32>* A lonely existence... wouldn't be so bad after that.",
               '<32>* But... I know.',
               "<32>* I'm sure there's a lot of people you'd like to catch up with first.",
               '<33>* So, go and do that, and then...',
               "<32>* Once you're ready...",
               "<32>* ... we'll go and find him.",
               '<32>* Alright?',
               '<32>* ...',
               "<32>* Well, that's all.",
               "<32>* Let's continue, shall we?"
            ]
         ]
      },
      npc: {
         picnic_oni: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* I've never been to the so- called Citadel, but it's nice.",
               "<32>* Despite being a full-on city, it's still easier to navigate than the rest of the outpost!",
               "<32>* Now isn't that something."
            ],
            ["<32>{#p/basic}{#npc/a}* I've never been one for mazes and strange puzzles.\n* So this really is great."]
         ),
         picnic_clamguy: pager.create(
            0,
            [
               '<32>{#p/basic}{#npc/a}* Crazy to think they built this city in such a short period of time.',
               "<32>* And unlike Aerialis, they didn't resort to weird space anomalies to make it bigger.",
               "<32>* But all that technobabble's beyond me, anyway.\n* It's just good to be here."
            ],
            ['<32>{#p/basic}{#npc/a}* A life free of nonsensical technical terms...\n* Peace, at last.']
         ),
         picnic_charles: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* Don't mind me, I'm just hanging out here with my best pals!",
               '<32>* Working at the CORE was really hard... but we are all done now.',
               '<32>* Here, we can celebrate our amazing work!',
               '<32>* I sure do love HANGOUT!'
            ],
            ['<32>{#p/basic}{#npc/a}* I can tell you love it too!']
         ),
         picnic_proskater: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* So... no more school?\n* I mean, it's my fault for going, really.",
               '<32>* Nobody actually has to go to school, but you might be worse off without it.',
               "<32>* Whatever.\n* I guess I still don't know what I want in life."
            ],
            ['<32>{#p/basic}{#npc/a}* Going to parties like this all the time could be fun...']
         ),
         picnic_papyrus: pager.create(
            0,
            [
               '<18>{#p/papyrus}{#f/0}{#npc/a}HELLO THERE, FRISK!',
               "<18>{#f/9}I'M ONLY PREPARING THE GREATEST DISH I'VE EVER MADE!",
               "<18>{#f/5}I ONLY WISH IT'D COOK A LITTLE FASTER...",
               "<18>{#f/7}AT THIS RATE, I'LL HAVE TO SERVE IT ON THE TRANSPORT!",
               "<25>{#p/sans}{#npc}* actually, i think that'd be pretty cool.",
               '<25>{#p/sans}{#f/3}* imagine, everyone eating it as they first see the homeworld...',
               "<25>{#p/sans}{#f/2}* it'd be a dish they'd NEVER forget.",
               '<18>{#p/papyrus}{#f/4}{#npc/a}YOU MAKE A TEMPTING OFFER...',
               "<18>{#p/papyrus}{#f/5}BUT I ALREADY PROMISED I'D GET IT MADE HERE."
            ],
            [
               "<18>{#p/papyrus}{#f/5}{#npc/a}HEY.\nIT'S NOT ALL BAD.",
               "<18>{#f/0}THE SEASONING IN ASGORE'S KITCHEN IS EXCELLENT!",
               '<18>{#f/4}SALT, PEPPER...\nANTI-GRAVITY POWDER...',
               '<18>{#f/9}THE POSSIBILITIES ARE... RATHER ZESTY!!'
            ],
            [
               "<18>{#p/papyrus}{#f/0}{#npc/a}DON'T WORRY, I WON'T GET -TOO- CRAZY.",
               "<18>{#f/5}IT'S NOT LIKE I'D TAKE SUCH A BIG GAMBLE...",
               '<18>{#f/0}WITH SUCH A VAST PARTY OF GUESTS TO FEED.',
               '<18>{#f/9}BESIDES, THE RECIPE SPECIFIES THE SEASONING!',
               '<18>{#f/4}I HEAR IT FLOATS IN YOUR MOUTH...'
            ],
            ['<18>{#p/papyrus}{#f/0}{#npc/a}NOTHING TO WORRY ABOUT AT ALL.']
         ),
         picnic_kidd: pager.create(
            0,
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? ['<25>{#p/kidd}{#f/4}{#npc/a}* Yo, uh...', '<25>{#f/4}* I think you should just leave me alone.']
                  : [
                     "<25>{#p/kidd}{#f/2}{#npc/a}* I'm gonna miss this place, dude...",
                     '<25>{#f/3}* Starton, the Foundry, Aerialis, the Citadel...',
                     "<25>{#f/6}* At least we'll still be together on the new homeworld.",
                     "<25>{#f/1}* I can't wait to see what it's like out there!"
                  ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? ['<25>{#p/kidd}{#f/4}{#npc/a}* ...']
                  : [
                     '<25>{#p/kidd}{#f/1}{#npc/a}{#f/4}* ... oh, uh, I know you probably figured it out, but...',
                     "<25>{#f/4}* I don't really have parents.\n* I just made them up.",
                     "<26>{#f/3}* But we're friends now, right? So... I hope you can forgive me for that."
                  ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? ['<25>{#p/kidd}{#f/4}{#npc/a}* Go away...']
                  : ['<25>{#p/kidd}{#f/3}{#npc/a}* Thanks for being a good friend, Frisk.']
         ),
         picnic_dragon: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* So you're telling me we can't leave until everyone's ready?",
               "<32>* I, uh, I guess that's only fair, huh.",
               "<32>* Well, it's okay, then."
            ],
            ["<32>{#p/basic}{#npc/a}* What am I even complaining about?\n* We're free..."]
         ),
         tvfish: pager.create(
            0,
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                     '<25>{#p/undyne}{#f/14}{#npc/a}* Those girls who run the rec center found this movie on a trash run.',
                     "<25>{#f/1}* So, Alphys and I decided we'd put it on.",
                     "<25>{#f/8}* FUHUHU!!\n* THIS IS THE BEST DATE I'VE EVER HAD!!",
                     "<25>{#f/12}* And, uh, I guess it's also the only date I've ever had.",
                     '<25>{#f/7}* BUT STILL!'
                  ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                     '<25>{#p/undyne}{#f/1}{#npc/a}* I never realized watching movies could be so addicting!',
                     '<25>{#p/undyne}{#f/12}{#npc/a}* Now...\n* If you could leave us to it...'
                  ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : ["<25>{#p/undyne}{#f/7}{#npc/a}* Come on, you're blocking the view!"]
         ),
         tvlizard: pager.create(
            0,
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : SAVE.data.b.c_state_secret3 && !SAVE.data.b.c_state_secret3_used
                     ? ((SAVE.data.b.c_state_secret3_used = true),
                        [
                           '<25>{#p/alphys}{#g/alphysInquisitive}{#npc/a}* ... huh?\n* You wanted to tell me something?',
                           '<32>{#p/human}* (You recite the scientific notes shared by Professor Roman in Archive Six.)',
                           '<25>{#p/alphys}{#g/alphysOhGodNo}* Woah... woah!',
                           '<25>{#g/alphysNervousLaugh}* This could be the key to solving intergalactic travel...',
                           '<25>{#g/alphysHellYeah}* ... with wormholes!',
                           "<25>{#g/alphysWelp}* I've been trying to crack this for so long..."
                        ])
                     : [
                        '<25>{#p/alphys}{#g/alphysCutscene1}{#npc/a}* After all these years, we finally found it!',
                        '<25>{#g/alphysHellYeah}* The third movie in the Mew Mew trilogy...\n* Mew Mew Time Twist!',
                        '<25>{#g/alphysWelp}* Also known as the TRUE sequel to Mew Mew Space Adventure.',
                        '<25>{#g/alphysYeahYouKnowWhatsUp}* This film puts Starfire to shame...'
                     ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : [
                     "<25>{#p/alphys}{#g/alphysHellYeah}{#npc/a}* It's about time!",
                     "<25>{#p/alphys}{#g/alphysFR}{#npc/a}* ... but if you don't mind..."
                  ],
            () =>
               player.face !== 'up' // NO-TRANSLATE

                  ? []
                  : ['<25>{#p/alphys}{#g/alphysYupEverythingsFine}{#npc/a}* Movie first, talk later.']
         ),
         picnic_asgore: pager.create(
            0,
            () => [
               SAVE.data.b.c_state_secret5_used
                  ? '<25>{#p/asgore}{#npc/a}{#f/1}* Do not worry, Frisk.\n* I have not forgotten about the promise.'
                  : '<25>{#p/asgore}{#npc/a}{#f/6}* Do not mind me, Frisk.\n* I am only looking for new clothes.',
               ...(SAVE.data.b.c_state_secret5 && !SAVE.data.b.c_state_secret5_used
                  ? ((SAVE.data.b.c_state_secret5_used = true),
                     [
                        '<25>{#p/asgore}{#npc/a}{#f/21}* Oh?\n* You have something to tell me?',
                        '<32>{#npc}{#p/human}* (You repeat the promise made to you by Asgore in Archive Six.)',
                        '<25>{#p/asgore}{#npc/a}{#f/8}* ...！',
                        '<25>{#f/1}* 弗里斯克...',
                        '<25>{#f/1}* ... I am not sure I can do that, but...',
                        '<25>{#f/6}* For you, I will try.'
                     ])
                  : [])
            ],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? ['<25>{#p/asgore}{#npc/a}{#f/1}* I only hope that I can get through to her.']
                  : ['<25>{#p/asgore}{#npc/a}{#f/6}* I wonder if humans like wearing brown.'],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? ['<25>{#p/asgore}{#npc/a}{#f/2}* ...']
                  : ['<25>{#p/asgore}{#npc/a}{#f/21}* La la, la la...']
         )
      },
      story: {
         lv20: ['<32>{#p/human}* （飞船渐行渐远。）'],
         postnoot0: () =>
            world.trueKills === 0 && SAVE.data.n.state_foundry_undyne !== 1 && SAVE.flag.n.neutral_twinkly_choice === 0
               ? [
                  '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/1}Why...?',
                  '<25>{*}{#e/twinkly/2}Why did you let me go?',
                  "<25>{*}{#e/twinkly/6}Don't you realize that being nice...",
                  '<25>{*}{#e/twinkly/7}... only hurts you in the end?',
                  '<25>{*}{#e/twinkly/5}Look at yourself.',
                  ...(SAVE.data.b.ultrashortcut
                     ? [
                        "<25>{*}{#e/twinkly/3}You've made all these wonderful...",
                        '<25>{*}{#e/twinkly/4}... uh...',
                        '<25>{*}{#e/twinkly/0}Shoot, I forgot you skipped over the entire journey.',
                        "<25>{*}{#e/twinkly/24}Eh, screw it.\nIt would've been a really sappy speech anyway.",
                        "<25>{*}{#e/twinkly/15}... let's just cut to the chase, shall we?",
                        '<25>{*}{#e/twinkly/21}...'
                     ]
                     : [
                        "<25>{*}{#e/twinkly/3}You've made all these wonderful friends...",
                        "<25>{*}{#e/twinkly/4}But now, you'll probably never get to see them again.",
                        "<25>{*}{#e/twinkly/0}Not to mention how long they'll have to wait for the next human.",
                        "<25>{*}{#e/twinkly/1}Hurts, doesn't it?",
                        ...(1 <= SAVE.flag.n.killed_sans
                           ? SAVE.flag.n.genocide_milestone < 7
                              ? ['<25>{*}{#e/twinkly/7}If you had just stuck with our ORIGINAL plan...']
                              : ['<25>{*}{#e/twinkly/7}If you had just acted like when we were together...']
                           : ['<25>{*}{#e/twinkly/7}If you had just gone through without caring about anyone...']),
                        "<25>{*}{#e/twinkly/1}You wouldn't have to feel bad now.",
                        "<25>{*}{#e/twinkly/8}So... I don't get it.",
                        '<25>{*}{#e/twinkly/13}If you really did everything the right way...',
                        '<25>{*}{#e/twinkly/1}Why did things still end up like this?',
                        '<25>{*}{#e/twinkly/2}Why...?',
                        '<25>{*}{#e/twinkly/2}Is life really that unfair?',
                        '<25>{*}{#e/twinkly/3}...',
                        '<25>{*}{#e/twinkly/0}... say.'
                     ]),
                  '<25>{*}{#e/twinkly/21}What if I told you...',
                  '<25>{*}{#e/twinkly/15}I knew some way to get you a better ending?',
                  ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                     ? ["<25>{*}{#e/twinkly/20}You'll have to start over, and..."]
                     : ["<25>{*}{#e/twinkly/20}You'll CONTINUE from here, and..."]),
                  ...(SAVE.data.n.plot_date === 2.1
                     ? [
                        "<25>{*}{#e/twinkly/15}Well, in the meantime, why don't you go back to Asgore?",
                        "<25>{*}{#e/twinkly/17}As long as you behave, I PROMISE I won't kill him."
                     ]
                     : 1.1 <= SAVE.data.n.plot_date
                        ? [
                           "<25>{*}{#e/twinkly/15}Well, in the meantime, why don't you go see Undyne?",
                           '<25>{*}{#e/twinkly/15}It seems like you could have been better friends.',
                           '<25>{*}{#e/twinkly/20}Who knows?',
                           "<25>{*}{#e/twinkly/17}Maybe she's got the key to your happiness?"
                        ]
                        : [
                           "<25>{*}{#e/twinkly/15}Well, in the meantime, why don't you go see Papyrus, then Undyne?",
                           '<25>{*}{#e/twinkly/15}It seems like you could have all been better friends.',
                           '<25>{*}{#e/twinkly/20}Who knows?',
                           "<25>{*}{#e/twinkly/17}Maybe they've got the key to your happiness?"
                        ]),
                  '<25>{*}{#e/twinkly/0}...',
                  '<25>{*}{#e/twinkly/15}See you soon.'
               ]
               : [
                  '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Hey.',
                  "<25>{*}{#e/twinkly/0}Since you defeated me, I've been thinking.",
                  ...(world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                     ? [
                        '<25>{*}{#e/twinkly/2}Is it truly necessary to kill...?',
                        '<25>{*}{#e/twinkly/3}I...',
                        ...(1 <= SAVE.flag.n.killed_sans
                           ? [
                              '<25>{*}{#e/twinkly/1}I enjoyed what we did in the past together, but...',
                              '<25>{*}{#e/twinkly/2}In the end, what did it really get us?'
                           ]
                           : [
                              "<25>{*}{#e/twinkly/4}I honestly can't be sure anymore.",
                              '<25>{*}{#e/twinkly/2}In the end, what does it really get you?'
                           ]),

                        '<25>{*}{#e/twinkly/13}A rush of pleasure, and then...'
                     ]
                     : [
                        '<25>{*}{#e/twinkly/2}After sparing everyone else, was killing me really worth it...?',
                        '<25>{*}{#e/twinkly/3}You...',
                        ...(1 <= SAVE.flag.n.killed_sans
                           ? [
                              '<25>{*}{#e/twinkly/1}You might regret what we did in the past together, but...',
                              '<25>{*}{#e/twinkly/2}Can you honestly say killing me made up for that?'
                           ]
                           : [
                              "<25>{*}{#e/twinkly/4}You might not like me for what I've done, but...",
                              '<25>{*}{#e/twinkly/2}Can you honestly say killing me made any difference?'
                           ]),
                        '<25>{*}{#e/twinkly/13}Perhaps you felt some catharsis, but after that...'
                     ]),
                  '<25>{*}{#e/twinkly/3}... nothing.',
                  '<25>{*}{#e/twinkly/0}...',
                  '<25>{*}{#e/twinkly/0}I have an idea.',
                  ...(world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                     ? [
                        '<25>{*}{#e/twinkly/15}A challenge, if you will.',
                        ...(SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                           ? ["<25>{*}{#e/twinkly/14}You'll have to start over, of course..."]
                           : ["<25>{*}{#e/twinkly/14}You'll have to RESET, of course..."]),
                        "<25>{*}{#e/twinkly/15}But if you can prove to me that you're strong enough to survive...",
                        '<25>{*}{#e/twinkly/15}If you can get through, to the end from the beginning...',
                        ...(world.trueKills > 0
                           ? [
                              '<25>{*}{#e/twinkly/0}... without killing a single thing...',
                              "<25>{*}{#e/twinkly/18}... then maybe, I won't kill the king."
                           ]
                           : [
                              '<25>{*}{#e/twinkly/0}... without leaving anyone behind...',
                              "<25>{*}{#e/twinkly/18}... then maybe, the king won't have to die."
                           ])
                     ]
                     : [
                        '<25>{*}{#e/twinkly/15}A request, if you will.',
                        ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                           ? ["<25>{*}{#e/twinkly/20}You'll have to start over, and..."]
                           : ["<25>{*}{#e/twinkly/20}You'll CONTINUE from here, and..."]),
                        '<25>{*}{#e/twinkly/15}Well, in the meantime, see if you can get back to Asgore.',
                        '<25>{*}{#e/twinkly/17}See if you can do it without killing anyone.'
                     ]),
                  "<25>{*}{#e/twinkly/20}You do want to know what he's planning, don't you?",
                  '<25>{*}{#e/twinkly/20}To see what lies in the depths of his precious \"archive?\"',
                  '<25>{*}{#e/twinkly/15}Well.',
                  '<25>{*}{#e/twinkly/15}Believe me when I tell you that what you saw with me...',
                  "<25>{*}{#e/twinkly/20}... doesn't even BEGIN to scratch the surface.",
                  '<25>{*}{#e/twinkly/17}Hee hee hee.',
                  "<25>{*}{#e/twinkly/18}I'll leave you to it!"
               ],
         postnoot1: (rep: number) =>
            rep < 2
               ? [
                  "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/17}I'm sorry, what's that?",
                  ...(rep < 1
                     ? ["<25>{*}{#e/twinkly/17}You didn't get your happy ending?"]
                     : ["<25>{*}{#e/twinkly/17}You STILL didn't get your happy ending?"]),
                  ...(SAVE.data.b.ultrashortcut
                     ? [
                        '<25>{*}{#e/twinkly/21}...',
                        ...(SAVE.flag.b.ultra_twinkly
                           ? [
                              "<25>{*}{#e/twinkly/21}Well gee, if it wasn't enough to do it before...",
                              "<25>{*}{#e/twinkly/16}You've gone and SKIPPED IT ALL AGAIN!",
                              "<25>{*}{#e/twinkly/15}Not that I'm surprised.",
                              '<25>{*}{#e/twinkly/15}You do seem like the type to break the rules.',
                              "<25>{*}{#e/twinkly/20}Eventually, you'll realize who you've been missing...",
                              "<25>{*}{#e/twinkly/15}And you'll go see them and make it back to the king.",
                              '<25>{*}{#e/twinkly/15}Preferably without killing a single thing.',
                              '<25>{*}{#e/twinkly/18}You know the drill!'
                           ]
                           : [
                              '<25>{*}{#e/twinkly/21}Well gee, I wonder why THAT might be...',
                              "<25>{*}{#e/twinkly/16}If only you didn't skip over THE ENTIRE JOURNEY!",
                              '<25>{*}{#e/twinkly/24}... but, whatever.',
                              '<25>{*}{#e/twinkly/23}Enjoy your special ending while it lasts.'
                           ])
                     ]
                     : world.trueKills > 0 || SAVE.data.n.state_foundry_undyne === 1
                        ? [
                           ...(rep < 1
                              ? [
                                 '<25>{*}{#e/twinkly/20}...',
                                 '<25>{*}{#e/twinkly/20}Well, well...',
                                 world.trueKills > 1
                                    ? "<25>{*}{#e/twinkly/16}Maybe next time, don't KILL anyone!"
                                    : world.trueKills > 0
                                       ? "<25>{*}{#e/twinkly/16}Maybe next time, don't KILL someone!"
                                       : "<25>{*}{#e/twinkly/16}Maybe next time, don't leave someone to DIE!",
                                 '<25>{*}{#e/twinkly/15}If you can manage that, and manage to befriend Papyrus and Undyne...',
                                 ...(SAVE.data.b.ubershortcut
                                    ? ["<25>{*}{#e/twinkly/15}You won't have to skip an entire area next time."]
                                    : ['<25>{*}{#e/twinkly/15}You might actually get somewhere for once.'])
                              ]
                              : [
                                 '<25>{*}{#e/twinkly/14}...',
                                 '<25>{*}{#e/twinkly/14}Goodness gracious...',
                                 world.trueKills > 1
                                    ? "<25>{*}{#e/twinkly/22}For the last time, don't KILL anyone!"
                                    : world.trueKills > 0
                                       ? "<25>{*}{#e/twinkly/22}For the last time, don't KILL someone!"
                                       : "<25>{*}{#e/twinkly/22}For the last time, don't leave someone to DIE!",
                                 ...(SAVE.data.b.ubershortcut
                                    ? ["<25>{*}{#e/twinkly/22}And don't skip an entire area, either!"]
                                    : ['<25>{*}{#e/twinkly/22}Why is that so difficult for you to grasp!'])
                              ])
                        ]
                        : [
                           '<25>{*}{#e/twinkly/0}...',
                           ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                              ? ['<25>{*}{#e/twinkly/21}... maybe, if you start over...']
                              : ['<25>{*}{#e/twinkly/21}... maybe, if you CONTINUE from here...']),
                           ...(rep < 1
                              ? [
                                 1.1 <= SAVE.data.n.plot_date
                                    ? "<25>{*}{#e/twinkly/15}You'll befriend Undyne this time."
                                    : "<25>{*}{#e/twinkly/15}You'll befriend Papyrus and Undyne this time.",

                                 '<25>{*}{#e/twinkly/14}The vaunted \"power of friendship...\"',
                                 '<25>{*}{#e/twinkly/23}Just this once, it might actually be good for something.'
                              ]
                              : [
                                 1.1 <= SAVE.data.n.plot_date
                                    ? "<25>{*}{#e/twinkly/16}You'll finally befriend Undyne!"
                                    : "<25>{*}{#e/twinkly/16}You'll finally befriend Papyrus and Undyne!",
                                 "<25>{*}{#e/twinkly/20}After all, what's the harm in a little friendship?",
                                 "<25>{*}{#e/twinkly/15}It'll be fun for the whole family."
                              ])
                        ])
               ]
               : [
                  [
                     '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/15}... so...',
                     '<25>{*}{#e/twinkly/15}Get up to anything lately?',
                     '<25>{*}{#e/twinkly/15}Make any new friends?',
                     '<25>{*}{#e/twinkly/0}...',
                     '<25>{*}{#e/twinkly/17}Personally, I used to make friends ALL the time.',
                     '<25>{*}{#e/twinkly/20}Like Papyrus, for example.',
                     "<25>{*}{#e/twinkly/15}He won't remember this, but I once trained him to be a royal guard.",
                     '<25>{*}{#e/twinkly/18}In fact, I made him get promoted to captain!',
                     "<25>{*}{#e/twinkly/24}Granted... it wasn't easy.",
                     "<25>{*}{#e/twinkly/15}I miiiight've had to break his bones a few times.",
                     '<25>{*}{#e/twinkly/19}But after that, he toughened up real good!',
                     '<25>{*}{#e/twinkly/17}Funny how people change if you push the right buttons, huh?',
                     "<25>{*}{#e/twinkly/15}Anyway.\nThat timeline's gone now.",
                     '<25>{*}{#e/twinkly/20}But hey, if you come back here again...',
                     "<25>{*}{#e/twinkly/18}I'll tell you about some others."
                  ],
                  [
                     '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/20}Ready for another round of story time?',
                     '<25>{*}{#e/twinkly/15}Oh, who am I kidding.\nOf course you are.',
                     '<25>{*}{#e/twinkly/21}So, that room...',
                     '<25>{*}{#e/twinkly/0}The one with the boxes with humans inside.',
                     "<25>{*}{#e/twinkly/15}It's actually been pretty hard, even for me, to get into.",
                     '<25>{*}{#e/twinkly/24}In the earliest timelines, I resorted to... foolish methods.',
                     '<25>{*}{#e/twinkly/13}Begging...\nBargaining...\nFake-crying...',
                     '<25>{*}{#e/twinkly/4}I even tried using puppy-dog eyes to get Asgore to show them to me.',
                     '<25>{*}{#e/twinkly/0}I wanted to be \"nice,\" but none of those things worked.',
                     '<25>{*}{#e/twinkly/15}Of course, in later timelines, I knew how to get what I wanted.',
                     '<25>{*}{#e/twinkly/20}Suffocating everyone to death usually did the trick...',
                     '<25>{*}{#e/twinkly/16}But cranking the gravity up and crushing them was just as fun!',
                     "<25>{*}{#e/twinkly/15}Anyway, all I'm saying is that the room's protected.",
                     "<25>{*}{#e/twinkly/17}You're only getting in there because they WANT you in there.",
                     "<25>{*}{#e/twinkly/20}Well.\nThat's all for now.",
                     '<25>{*}{#e/twinkly/19}Bye-bye!'
                  ],
                  [
                     '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/14}Seriously?\nAgain?',
                     '<25>{*}{#e/twinkly/0}Wow.',
                     '<25>{*}{#e/twinkly/0}You must be getting really tired of this.',
                     "<25>{*}{#e/twinkly/15}But that's fine.\nI'm getting tired of it, too.",
                     '<25>{*}{#e/twinkly/20}I wonder...',
                     '<25>{*}{#e/twinkly/20}Are you THAT bad at following my instructions?',
                     '<25>{*}{#e/twinkly/20}Or are you just doing this on purpose?',
                     "<25>{*}{#e/twinkly/15}... eh, don't tell me.",
                     '<25>{*}{#e/twinkly/18}Knowing everything is no fun, anyway.',
                     "<25>{*}{#e/twinkly/15}Besides, I'm in a good mood.",
                     '<25>{*}{#e/twinkly/20}So... why not give you the benefit of the doubt?',
                     '<25>{*}{#e/twinkly/14}If you really are that much of an IDIOT...',
                     '<25>{*}{#e/twinkly/15}Come back here again, and I might have a way to help you.',
                     '<25>{*}{#e/twinkly/17}... until next time.'
                  ],
                  [
                     "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}So you're back again.",
                     "<25>{*}{#e/twinkly/0}I'd ask you to explain yourself, but I don't really care.",
                     '<25>{*}{#e/twinkly/0}You came back, so... that means you need my help.',
                     '<25>{*}{#e/twinkly/21}...',
                     "<25>{*}{#e/twinkly/15}Listen.\nI'm only going to say this once.",
                     '<25>{*}{#e/twinkly/15}From now on, the monsters you encounter...',
                     '<25>{*}{#e/twinkly/15}Will have greatly reduced {@fill=#ff0}ATTACK{@fill=#fff}.',
                     '<25>{*}{#e/twinkly/20}Understand?\nTheir {@fill=#ff0}ATTACK{@fill=#fff} will be reduced.',
                     '<25>{*}{#e/twinkly/20}Which makes it easier to survive without gaining LOVE.',
                     "<25>{*}{#e/twinkly/15}Boy, it's a good thing the CORE controls the atmosphere.",
                     "<25>{*}{#e/twinkly/20}Otherwise, this wouldn't be possible!",
                     '<25>{*}{#e/twinkly/14}As for Papyrus and Undyne...',
                     "<25>{*}{#e/twinkly/23}Well, if you can't figure THAT out, then you're hopeless.",
                     "<25>{*}{#e/twinkly/15}Just don't be an idiot, and you'll be fine.",
                     "<25>{*}{#e/twinkly/15}... okay.\nThat's all.",
                     '<25>{*}{#e/twinkly/15}Good luck.'
                  ],
                  [
                     '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}...',
                     "<25>{*}{#e/twinkly/0}... you're just trying to get a reaction out of me, aren'tcha?",
                     '<25>{*}{#e/twinkly/15}I see.\nI hope it was worth it.',
                     "<25>{*}{#e/twinkly/17}Because I'm NEVER coming back.",
                     "<25>{*}{#e/twinkly/0}Not until you do what I've told you to do.",
                     '<25>{*}{#e/twinkly/15}What?\nYou think you can just disobey me forever?',
                     '<25>{*}{#e/twinkly/15}... no.',
                     "<25>{*}{#e/twinkly/21}Sooner or later, you'll get bored...",
                     '<25>{*}{#e/twinkly/15}And your curiosity will inevitably get the better of you.',
                     '<25>{*}{#e/twinkly/23}Trust me.\nI know how this works.',
                     '<25>{*}{#e/twinkly/20}It applies to humans and monsters all the same...',
                     '<25>{*}{#e/twinkly/17}Curiosity eventually gets the better of EVERYONE.',
                     '<25>{*}{#e/twinkly/16}Have your fun while it lasts, idiot!'
                  ]
               ][rep - 2],
         postnoot2: (rep: number, puzzlesolve: boolean, enemyweaken: boolean) => [
            ...((puzzlesolve || enemyweaken) && !SAVE.flag.b.neutral_reload_interloper
               ? [
                  '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/20}By the way...',
                  ...(puzzlesolve
                     ? ['<25>{*}{#e/twinkly/15}You could thank me for solving those puzzles for you.']
                     : []),
                  ...(enemyweaken
                     ? [
                        puzzlesolve
                           ? '<25>{*}{#e/twinkly/15}Oh, and for screwing with the atmospheric system.'
                           : '<25>{*}{#e/twinkly/15}You could thank me for screwing with the atmospheric system.',
                        '<25>{*}{#e/twinkly/21}I figured, if you DID want to kill anyone...',
                        '<25>{*}{#e/twinkly/15}I might as well weaken your opposition to make it easier.'
                     ]
                     : []),
                  "<25>{*}{#e/twinkly/17}Wasn't that just so considerate of me?",
                  '<25>{*}{#e/twinkly/17}...'
               ]
               : []),
            ...(rep < 1
               ? [
                  "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Like last time, I've given you Asgore's SOUL.",
                  '<25>{*}{#e/twinkly/0}Take it, and get out of my sight.',
                  '<25>{*}{#e/twinkly/20}And if you come back...',
                  '<25>{*}{#e/twinkly/15}Try to act a little more in line next time.'
               ]
               : [
                  "<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Like always, I've given you Asgore's SOUL.",
                  '<25>{*}{#e/twinkly/0}Take it, and get out of my sight.',
                  '<25>{*}{#e/twinkly/20}And remember...',
                  "<25>{*}{#e/twinkly/15}This doesn't stop until you do exactly what I've told you."
               ])
         ],
         oof: ['<32>{#p/human}* （你倒吸了一口凉气...）'],
         killer1: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/15}呀。',
            "<25>{*}{#e/twinkly/17}你真把事情搞砸了，不是吗？",
            '<25>{*}{#e/twinkly/20}你不仅失去了\n对时间线的控制权...',
            "<25>{*}{#e/twinkly/15}而且现在若想夺回它，\n你还得重头再来。"
         ],
         killer2: [
            '<25>{*}{#p/twinkly}{#e/twinkly/14}嘿，我说。',
            "<25>{*}{#e/twinkly/23}如果这就是你想要的结局，\n那...",
            '<25>{*}{#e/twinkly/15}那就轮不到我来评判了。',
            "<25>{*}{#e/twinkly/17}但你不会真的指望我相信吧，\n啊？",
            '<25>{*}{#e/twinkly/17}这鬼状况就是你想要的？',
            '<25>{*}{#e/twinkly/15}我是说，当然。\n旁观是挺有趣的。',
            "<25>{*}{#e/twinkly/17}但现在一切都结束了..."
         ],
         killer3: [
            '<25>{*}{#p/twinkly}{#e/twinkly/15}...呃。\n我们都知道你能做得更好。',
            "<25>{*}{#e/twinkly/20}我不是说我是什么圣人之类的...",
            "<25>{*}{#e/twinkly/15}信不信由你，\n但我是站在你这边的。",
            '<25>{*}{#e/twinkly/15}我要你重获\n对时间线的控制权。',
            '<25>{*}{#e/twinkly/17}毕竟，\n看你坐在这里啥都不做...',
            "<25>{*}{#e/twinkly/17}并不怎么有趣，不是吗？"
         ],
         killer4: [
            "<25>{*}{#p/twinkly}{#e/twinkly/15}...噢，别担心。",
            '<25>{*}{#e/twinkly/20}就算我失去了所有记忆，\n那又怎么样呢？',
            "<25>{*}{#e/twinkly/18}反正你会记得这一切。\n这样你下次就会\n避免掉入这个陷阱。",
            '<25>{*}{#e/twinkly/15}然后，我们就能\n恢复以前那样。',
            '<25>{*}{#e/twinkly/20}那你怎么说？',
            '<25>{*}{#e/twinkly/20}你明白我说的话吗，$(name)？',
            '{*}{#e/twinkly/3}{%}'
         ],
         killer5: [
            '<25>{*}{#p/twinkly}{#e/twinkly/15}噢，我在开玩笑吗。',
            '<25>{*}{#e/twinkly/16}你当然明白啦！'
         ],
         please1: [
            '<25>{*}{#p/human}（...）',
            '<25>{*}(But still, the option remains.)',
            "<25>{*}(The option to erase everything you've ever known.)",
            '<25>{*}(The option to bring it all back to zero.)'
         ],
         please2: [
            '<25>{*}{#p/human}（...）',
            '<25>{*}(But you only want to live your life.)',
            '<25>{*}(You only want to see the future take hold.)',
            '<25>{*}(You only want to be yourself.)'
         ],
         please3: [
            '<25>{*}{#p/human}（...）',
            '<25>{*}(You thank the one beyond for what they have done...)',
            '<25>{*}(And ask that you be allowed to carry on.)'
         ],
         forget1: ['<25>{*}{#p/human}（...）', "<25>{*}（你好孤独...）"],
         forget2: ['<25>{*}{#p/human}（...）', "<25>{*}（你好害怕...）"],
         forget3: [
            '<25>{*}{#p/human}（...）',
            "<25>{*}（你多么盼着能重新做人...）",
            "<25>{*}（...不管付出什么代价，\n  忘记一切都行。）"
         ],
         forget4: [
            '<25>{*}{#p/human}（...）',
            "<25>{*}（可你没得选。）",
            "<25>{*}（你只能看着别人替你选。）"
         ],
         regret1: ['<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Hi.'],
         regret2: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Seems as if everyone is perfectly happy.',
            '<25>{*}{#e/twinkly/0}Monsters have found their new homeworld.',
            '<25>{*}{#e/twinkly/0}Peace and prosperity will rule across the galaxy.',
            '<25>{*}{#e/twinkly/1}Take a deep breath.',
            "<25>{*}{#e/twinkly/2}There's nothing left to worry about."
         ],
         regret3: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/3}...',
            '<25>{*}{#e/twinkly/4}Well.',
            '<25>{*}{#e/twinkly/4}There is one thing.',
            '<25>{*}{#e/twinkly/5}One last... mystery.',
            "<25>{*}{#e/twinkly/6}Something I've been curious about since you arrived."
         ],
         regret4: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/7}...',
            '<25>{*}{#e/twinkly/7}You see, when I first met you, I noticed something.',
            '<25>{*}{#e/twinkly/3}Something about your LOVE.',
            '<25>{*}{#e/twinkly/4}It was... zero.',
            '<25>{*}{#e/twinkly/6}...',
            '<25>{*}{#e/twinkly/6}If you could find out what that means, then...',
            "<25>{*}{#e/twinkly/7}Maybe... it'd bring about something new.",
            '<25>{*}{#e/twinkly/10}...',
            "<25>{*}{#e/twinkly/10}I don't know.",
            "<25>{*}{#e/twinkly/10}I'm not really sure where I'm going with this.",
            '<25>{*}{#e/twinkly/9}...',
            '<25>{*}{#e/twinkly/9}To be honest...',
            "<25>{*}{#e/twinkly/1}I doubt if there's even any point to it.",
            "<25>{*}{#e/twinkly/2}Everyone's happy, right?",
            '<25>{*}{#e/twinkly/3}Toriel, Sans, Papyrus, Undyne, Alphys, Asgore...',
            '<25>{*}{#e/twinkly/4}Even Monster Kid, and... Napstablook.',
            '<25>{*}{#e/twinkly/2}Is it really worth starting all over because of... me?',
            '<25>{*}{#e/twinkly/2}...',
            "<25>{*}{#e/twinkly/10}Maybe I'm only telling you this, because... when I had your powers...",
            "<25>{*}{#e/twinkly/11}I might've considered doing the same in your place.",
            '<25>{*}{#e/twinkly/12}But now, the idea of resetting everything...',
            '<25>{*}{#e/twinkly/10}I...',
            "<25>{*}{#e/twinkly/10}I don't know if I could do it all again.",
            '<25>{*}{#e/twinkly/10}Not after that.',
            '<25>{*}{#e/twinkly/11}...',
            '<25>{*}{#e/twinkly/11}So, please.',
            '<25>{*}{#e/twinkly/11}Just be content with what you have.',
            "<25>{*}{#e/twinkly/7}It's not perfect, but...",
            '<25>{*}{#e/twinkly/5}... who ever said it had to be?'
         ],
         regret5: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/5}...',
            '<25>{*}{#e/twinkly/8}Well.',
            "<25>{*}{#e/twinkly/8}If I can't change your mind.",
            '<25>{*}{#e/twinkly/7}If you DO end up erasing everything...',
            '<25>{*}{#e/twinkly/6}...',
            '<25>{*}{#e/twinkly/2}You have to wipe MY memories, too.',
            '<25>{*}{#e/twinkly/7}...',
            "<25>{*}{#e/twinkly/6}I'm sorry.",
            "<25>{*}{#e/twinkly/2}You've probably heard this a hundred times already, haven't you...?",
            '<25>{*}{#e/twinkly/6}...',
            "<25>{*}{#e/twinkly/6}Well, that's all.",
            '<25>{*}{#e/twinkly/4}Until we meet again...',
            '<25>{*}{#e/twinkly/13}$(name).'
         ],
         asgoreStoryPre1: () =>
            world.bad_robot
               ? [
                  '<25>{#p/alphys}{#g/alphysSide}* 呃，你-你好...\n* 你...',
                  '<25>{#g/alphysSideSad}* 你真-真的很享受杀人...\n* ...嗯？',
                  "<25>{#g/alphysNervousLaugh}* 我-我是说，我不是在批评你，\n  我只是...",
                  "<25>{#g/alphysUhButHeresTheDeal}* 我只是觉得这超级无敌酷！！！",
                  '<25>{#g/alphysSideSad}* 我-我这样说...',
                  "<25>{#g/alphysCutscene3}* 也许你现在就\n  不会打算杀我啦？？？"
               ]
               : ["<25>{#p/asgore}{#f/0}* 挺美的，不是吗...？", '<25>{#p/asgore}{#f/0}* ...'],
         asgoreStoryPre2: () =>
            world.bad_robot
               ? ['<25>{*}{#p/alphys}{#g/alphysOhGodNo}* 后头有人！！！{%}']
               : [
                  '<25>{#p/asgore}{#f/6}* 孩子，如果你被吓着了，\n  那我先对你道个歉。',
                  '<25>{#p/asgore}{#f/6}* 艾菲斯告知了我\n  你会来到这里。'
               ],
         asgoreStoryPre3: () => [
            '<25>{#p/asgore}{#f/7}* ...',
            ...(SAVE.flag.b.waaaaaooaaooooaaaaaaooohooohooohstooooryofunderrtaaaaale
               ? [
                  '<25>{#p/asgore}{#f/12}* 嗯...？\n* 你已经听过这个故事了？',
                  '<25>{#p/asgore}{#f/5}* ...',
                  '<25>{#p/asgore}{#f/6}* 好吧。',
                  '<25>{#p/asgore}{#f/6}* 如果你早已听过，\n  那我也不必再复述一遍。',
                  '<25>{#p/asgore}{#f/6}* 继续一个人行进吧。'
               ]
               : ['<25>{#p/asgore}{#f/7}* 来吧。', '<25>{#p/asgore}{#f/7}* 我有一个故事\n  要讲给你听。'])
         ],
         alphysApproach1: [
            "<25>{#p/alphys}{#g/alphysSmileSweat}* 噢，你-你大概在想\n  艾斯戈尔在哪，\n  对吧？",
            "<25>{#g/alphysNervousLaugh}* 唔... 他在...",
            '<25>{#g/alphysHellYeah}* 一个安全的地-地方！',
            '<25>{#g/alphysTheFactIs}* 相对安全。',
            '<25>{#g/alphysOhGodNo}* 或者说-\n* 不，绝对！\n* 绝对安全！',
            '<25>{#g/alphysInquisitive}* 所以，总-总的来说，\n  你不妨... 直接放弃吧。',
            '<26>{#g/alphysInquisitive}* 因为...',
            "<26>{#g/alphysNervousLaugh}* 你永远也找不到他！！",
            '<25>{#g/alphysHellYeah}* 好啊！\n* 看-看这招！'
         ],
         alphysApproach2: [
            '<25>{#p/alphys}{#g/alphysOhGodNo}* ...',
            '<25>{#g/alphysNervousLaugh}* ...呃呃...',
            '<25>{#g/alphysNervousLaugh}* 像往常一样挺过来了，\n  哈-哈啊？',
            '<25>{#g/alphysNeutralSweat}* ...',
            "<25>{#g/alphysIDK2}* 我猜你要去见艾斯戈尔了。",
            '<25>{#g/alphysIDK3}* ...',
            "<25>{#g/alphysIDK3}* 我太没用了...",
            "<25>{#g/alphysThatSucks}* 你可能根本就没在乎过我，\n  对吧？",
            "<25>{#g/alphysIDK2}* 我一直很害怕，\n  但你可能根本就没想过要抓我。",
            '<25>{#g/alphysIDK3}* ...',
            "<25>{#g/alphysIDK2}* 去吧。\n* 你想做啥，随意。",
            "<26>{#g/alphysIDK3}* 我阻止不了你。"
         ],
         alphysApproach3: ["<25>{#p/alphys}{#g/alphysFR}* 只有一个人能做到。"],
         asgoreStory1: [
            '<25>{*}{#p/asgore}{#f/6}* 很久以前，一个人类小孩\n  在前哨站迫降。{~}',
            '<25>{*}{#p/asgore}{#f/6}* 身受重伤的人类\n  开始大声呼救。{~}'
         ],
         asgoreStory1r: ['<32>{#p/basic}* ...{%40}', "<32>{#p/basic}* I'm sorry.{%40}"],
         asgoreStory2: [
            '<25>{*}{#p/asgore}{#f/7}* 而我们的初生子艾斯利尔\n  听到了呼救声。{~}',
            '<25>{*}{#p/asgore}{#f/7}* 他把人类带回了\n  我们家里。{~}'
         ],
         asgoreStory2r: ['<32>{#p/basic}* I did the best I could.{%40}'],
         asgoreStory3: [
            '<25>{*}{#p/asgore}{#f/6}* 慢慢的，\n  两个孩子变得情同手足。{~}',
            '<25>{*}{#p/asgore}{#f/6}* 他们之间的亲情\n  随着前哨站的扩建\n  也愈发紧密。{~}',
            '<25>{*}{#p/asgore}{#f/6}* 整个前哨站充满了希望。{~}'
         ],
         asgoreStory3r: ['<32>{#p/basic}* I tried to follow my heart.{%40}'],
         asgoreStory4: [
            '<25>{*}{#p/asgore}{#f/1}* 然而，有一天...{~}',
            '<25>{*}{#p/asgore}{#f/2}* 人类猝不及防地\n  感染了一种疾病。{~}'
         ],
         asgoreStory4r: ['<32>{#p/basic}* I tried to do the right thing.{%40}'],
         asgoreStory5: [
            '<25>{*}{#p/asgore}{#f/1}* 病入膏肓的人类\n  只有一个请求。{~}',
            '<25>{*}{#p/asgore}{#f/1}* 想看看我们先前\n  那伟大富饶的世界\n  所残存的遗址。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 但我们对此无能为力。{~}'
         ],
         asgoreStory5r: ['<32>{#p/basic}* All I wanted was for him to see the universe.{%40}'],
         asgoreStory6: [
            '<25>{*}{#p/asgore}{#f/1}* 第二天...{~}',
            '<25>{*}{#p/asgore}{#f/1}* ...{~}',
            '<25>{*}{#p/asgore}{#f/2}* 人类便与世长辞。{~}'
         ],
         asgoreStory6r: ['<32>{#p/basic}* All I wanted was for him to be happy.{%40}'],
         asgoreStory7: [
            '<25>{*}{#p/asgore}{#f/15}* 艾斯利尔悲痛欲绝，\n  吸收了这个人类的\n  灵魂。{~}',
            '<25>{*}{#p/asgore}{#f/16}* 他化作了一个\n  拥有不可思议力量的\n  存在。{~}'
         ],
         asgoreStory7r: ['<33>{#p/basic}* I never wanted to...{%40}'],
         asgoreStory8: [
            '<25>{*}{#p/asgore}{#f/4}* 凭借着新获得的力量，\n  艾斯利尔穿过了力场。{~}',
            "<25>{*}{#p/asgore}{#f/4}* 他开着一架小型飞船，\n  载着人类的遗体\n  飞向远方。{~}",
            '<25>{*}{#p/asgore}{#f/4}* 希望能找到那\n  传说中的遗迹。{~}'
         ],
         asgoreStory8r: ['<32>{#p/basic}* ... to...{%40}'],
         asgoreStory9: [
            '<25>{*}{#p/asgore}{#f/1}* 很快，他就发现了\n  自己所寻找的东西。{~}',
            '<25>{*}{#p/asgore}{#f/1}* 飞船着陆在破碎飘零的\n  碎片之中...{~}',
            "<25>{*}{#p/asgore}{#f/1}* 人类的遗体\n  也在此安葬。{~}"
         ],
         asgoreStory9r: ['<32>{#p/basic}* ...{%40}'],
         
         
         asgoreStory10: [
            "<25>{*}{#p/asgore}{#f/5}* 突然，飞船的\n  近接感测警报\n  开始响起。{~}",
            "<25>{*}{#p/asgore}{#f/5}* 拾荒者们看到了\n  抱着人类遗体的艾斯利尔。{~}",
            '<25>{*}{#p/asgore}{#f/2}* 他们以为是艾斯利尔\n  杀死了这个小孩。{~}'
         ],
         asgoreStory11: [
            '<25>{*}{#p/asgore}{#f/2}* 人类用尽所能\n  攻击艾斯利尔。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 一枪又一枪，\n  一击又一击...{~}',
            '<25>{*}{#p/asgore}{#f/2}* 以艾斯利尔现在的形态\n  是有力量将他们\n  尽数消灭的。{~}'
         ],
         asgoreStory12: [
            '<25>{*}{#p/asgore}{#f/4}* 但是...{~}',
            '<25>{*}{#p/asgore}{#f/4}* 艾斯利尔并没有还手。{~}'
         ],
         asgoreStory12r: ['<32>{#p/human}* （你听见有人在哭...）{%40}'],
         asgoreStory13: [
            "<25>{*}{#p/asgore}{#f/9}* 艾斯利尔紧紧抱住\n  人类的遗体，向外界看了\n  最后一眼...{~}",
            '<25>{*}{#p/asgore}{#f/9}* 然后他面带微笑...\n  缓缓地离开了。{~}'
         ],
         asgoreStory13r: ["<32>{#p/basic}* I c-couldn't...\n* He d-d-didn't let m-me...{%40}"],
         asgoreStory14: [
            '<25>{*}{#p/asgore}{#f/1}* 伤痕累累的艾斯利尔驾驶着\n  受损的飞船回到了家。{~}',
            '<25>{*}{#p/asgore}{#f/1}* 他下了飞船，\n  然后瘫倒在地。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 化作一团尘埃，\n  飘散在整个树林里。{~}'
         ],
         asgoreStory14r: ['<32>{#p/basic}* ...{%40}'],
         asgoreStory15: [
            '<25>{*}{#p/asgore}{#f/13}* 前哨站，我的前哨站...\n  陷入了绝望。{~}',
            '<25>{*}{#p/asgore}{#f/13}* 我们一夜之间就\n  失去了两个孩子。{~}',
            '<25>{*}{#p/asgore}{#f/14}* 我们的一切，又一次\n  被夺走了。{~}'
         ],
         asgoreStory15r: ["<32>{#p/basic}* ... it's not fair...{%40}"],
         asgoreStory16: [
            '<25>{*}{#p/asgore}{#f/13}* 于是，我一怒之下\n  向人类宣战。{~}',
            '<25>{*}{#p/asgore}{#f/13}* 无论付出多少代价，\n  我都要让我们怪物\n  重获自由。{~}',
            '<25>{*}{#p/asgore}{#f/14}* ...而人民们都支持\n  我的决策。{~}'
         ],
         asgoreStory16r: ["<32>{#p/basic}* It's not fair...!{%40}"],
         asgoreStory17: [
            '<25>{*}{#p/asgore}{#f/3}* 可我回过神来才发现，\n  一切都为时已晚。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 无论做什么事情\n  都无法阻挡人民\n  发动战争的意愿。{~}',
            '<25>{*}{#p/asgore}{#f/5}* 至少明面上如此。{~}'
         ],
         asgoreStory18: () =>
            SAVE.data.b.killed_mettaton || world.baddest_lizard
               ? [
                  '<25>{*}{#p/asgore}{#f/5}* 事到如今，想必艾菲斯\n  一定已经告诉过你\n  某个秘密了吧。{~}',
                  '<25>{*}{#p/asgore}{#f/5}* 一份我与前皇家科学员的\n  协议。{~}',
                  '<25>{*}{#p/asgore}{#f/6}* ... now, if only I knew what was holding up the current one...{~}'
               ]
               : [
                  '<25>{*}{#p/asgore}{#f/5}* 事到如今，想必艾菲斯\n  一定已经告诉过你\n  某个{@fill=#003cff}秘密{@fill=#fff}了吧。{~}',
                  '<25>{*}{#p/asgore}{#f/5}* 一份我与前皇家科学员的\n  {@fill=#003cff}协议{@fill=#fff}。{~}',
                  '<25>{*}{#p/asgore}{#f/6}* ... 啊，原来她来了。\n* 我刚才还寻思着她\n  什么时候才会到呢。{~}'
               ],
         asgoreStory19: [
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* 呃，抱——抱歉！\n* 我已经尽力在赶了！',
            '<25>{#p/asgore}{#f/6}* 不必着急。\n* 毕竟好事多磨嘛。',
            "<25>{#p/alphys}{#g/alphysWorried}* ... 你真觉得人类\n  已经做好准备了吗？"
         ],
         asgoreStory20a: [
            '<25>{#p/asgore}{#f/7}* 孩子，请让我们\n  先行一步...',
            '<25>{#p/asgore}{#f/7}* 我和艾菲斯有些事情\n  需要谈谈。'
         ],
         asgoreStory20b: [
            "<25>{#p/alphys}{#g/alphysHellYeah}* 是的，呃...\n  接-接着往前走吧，\n  我们会等着你的！"
         ],
         asgoreStory21: [
            '<25>{#p/asgore}{#f/5}* 真奇怪。\n* 她居然还没来。',
            '<25>{#p/asgore}{#f/5}* ... 这不是我所期望的。'
         ],
         asgoreStory22: [
            '<25>{#p/asgore}{#f/5}* 那么。\n* 她要是想见我\n  就得等上一会了。',
            '<25>{#p/asgore}{#f/5}* 这件事不能再拖了。'
         ],

         
         jspeech1: () => [
            '<32>{#p/darksans}* 终于，你到达此处。',
            '<32>* 路途的终点已经触手可及。',
            world.bad_robot || SAVE.data.b.ultrashortcut
               ? '<32>* 片刻之后，你就能见到国王。'
               : '<32>* 片刻之后，你又能见到国王。',
            '<32>* 与此同时...',
            ...(SAVE.data.b.ultrashortcut
               ? [
                  '<32>* ...',
                  "<32>* 不对。",
                  '<32>* 你怎么来得这么快？',
                  '<32>* 让我猜猜，你是不是...',
                  '<32>* 走{@fill=#ff0}捷径{@fill=#fff}了？'
               ]
               : [
                  ...(SAVE.data.b.water
                     ? [
                        '<32>* ...',
                        "<32>* 你是不是一路上\n  一直拿着那杯液体？",
                        ...(world.dead_skeleton
                           ? ['<32>* ...', '<32>* 嗯，没事。']
                           : ['<32>* Heh.', '<32>* 回到刚才的话题...'])
                     ]
                     : []),
                  '<32>* 你将会决定怪物的命运。',
                  "<32>* 但那是后话了。",
                  '<32>* 现在。',
                  '<32>* 你将接受审判。',
                  '<32>* 你将为你每一个行为接受审判。',
                  "<32>* 你将为你获得的每一点EXP\n  接受审判。",
                  "<32>* EXP是什么？",
                  "<32>* 那是一个缩写。",
                  '<32>* 意思是“{@fill=#f00}处决点数{@fill=#fff}”\n  （{@fill=#f00}EX{@fill=#fff}ecution {@fill=#f00}P{@fill=#fff}oints）。',
                  '<32>* 一种指标，用来衡量\n  你对别人造成了多少伤害。',
                  '<32>* 当你杀了人，EXP就会增加。',
                  '<32>* 当你的EXP积累到一定程度，\n  LOVE就会增加。',
                  '<32>* LOVE，也是一个缩写。',
                  '<32>* 意思是“{@fill=#f00}暴力等级{@fill=#fff}”\n  （{@fill=#f00}L{@fill=#fff}evel {@fill=#f00}O{@fill=#fff}f {@fill=#f00}V{@fill=#fff}iol{@fill=#f00}E{@fill=#fff}nce）。',
                  "<32>* 一种指标，用来衡量\n  你能对别人造成多大伤害。",
                  '<32>* 你杀得越多，就越容易\n  偏离自己的本心。',
                  '<32>* 离本心越远，\n  就越难受到伤害。',
                  '<32>* 也就越容易放任自己\n  伤害别人。'
               ])
         ],
         jspeechU1: () => [
            '<25>{#p/sans}{#f/3}* ...',
            ...[
               [
                  '<25>{#f/0}* 哇，伙计。\n* 你咋也走上捷径了呢？',
                  "<25>{#f/3}* 别误会。\n* 你面前的家伙，也跟你一样\n  爱死这东西了。",
                  "<25>{#f/2}* 但你是不是该花点时间\n  反思一下呢？"
               ],
               [
                  "<25>{#f/0}* 从表情来看，\n  你都走了好几次捷径了。",
                  "<25>{#f/3}* 我可没生气哦。\n* 毕竟，速通超爽的。",
                  "<25>{#f/2}* 但你该反思还是得反思！\n* 这可走不了捷径哦。"
               ]
            ][Math.min(SAVE.flag.n.meet3++, 1)]
         ],
         jspeechU2: [
            '<25>{#p/sans}* 对了。',
            "<25>{#f/3}* 你就一边看着我\n  吃这美味的冰淇淋...",
            '<25>{#f/2}* 一边好好反思一下\n  自己咋一下子就到这了。'
         ],
         jspeechU3: [
            '<25>{#p/sans}* 你瞧，\n  这冰淇淋还是三文鱼味的。',
            '<25>{#p/sans}* 我听说，皇家守卫都可喜欢\n  这种口味了。'
         ],
         jspeechU4: [
            "<25>{#p/sans}{#f/3}* 当然咯。\n* 我也把这事告诉帕派瑞斯了。",
            "<25>{#f/0}* 这样，他就能更了解\n  那群守卫的喜好。",
            '<25>{#f/2}* 正好，帕派瑞斯也要进\n  皇家卫队了。'
         ],
         jspeechU5: [
            '<25>{#p/sans}{#f/0}* 嘿嘿...\n* 抓到人类果然能带来好事，\n  还有冰淇淋吃，',
            "<25>{#f/3}* ...别担心。\n* 我吃得很快的。",
            "<25>{#f/2}* 你看，我都吃完一半了。"
         ],
         jspeechU6: () => [
            '<25>{#p/sans}{#f/0}* 我在想，如果那位\n  卖“冰意灵”的伙计也愿意\n  卖这种口味的冰淇淋...',
            ...(SAVE.data.n.state_starton_nicecream < 1
               ? ["<25>{#f/2}* 那肯定就有顾客上门了。"]
               : ["<25>{#f/2}* 那上门的顾客肯定就多了。"])
         ],
         jspeechU7: [
            '<26>{#p/sans}{#f/0}* 啊... 哪怕是山珍海味，\n  也比不上这三文鱼\n  冰淇淋啊。',
            '<25>{#f/2}* 现在开始吃蛋筒。'
         ],
         jspeechU8: [
            "<26>{#p/sans}{#f/3}* 现代克隆技术\n  真是发达...",
            "<25>{#f/0}* 以前，想搞点能吃的东西\n  都难上加难...",
            '<25>{#f/2}* 而现在，冰淇淋、蛋筒\n  都能完美复制出来。'
         ],
         jspeechU9: ['<25>{#p/sans}{#f/0}* ...', '<25>{#f/3}* ...现在是彻底吃没了。'],
         jspeechU10: (funni: boolean) => [
            "<25>{#p/sans}{#f/0}* 行，那就这样。",
            ...(funni
               ? ['<25>{#f/2}* 希望你能\n  早日从柱子中脱困哦。']
               : ["<25>{#f/2}* 希望你没白白浪费\n  这段时间哦。"])
         ],
         jspeech2: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            "<25>{#f/0}* 哦，lv0？\n* 那是什么？",
            "<25>{#f/3}* 葛森的人类防卫手册中\n  没写这些。",
            "<25>{#f/0}* 如果是平常，\n  我会扯点高大上的话，\n  比如...",
            '<25>{#f/4}* “虽无法做到至善，\n    但仍坚守本心”？',
            '<25>{#f/0}* 但你与众不同。',
            '<25>{#f/3}* ...\n* 所以...',
            "<25>{#f/4}* 我会直接跳过\n  那些长篇大论...",
            '<25>{#f/0}* 直接放你前进。',
            '<25>{#f/3}* 毕竟...',
            "<25>{#f/2}* 像你这么棒的家伙...\n  肯定能在两难之中\n  找到第三条路的。",
            ...(world.flirt < world.flirt_state1.length
               ? [
                  '<25>{#f/3}* ...',
                  '<25>{#f/0}* 加油，孩子。',
                  ...(funni
                     ? ["<25>{#f/2}* 我会把你挪回柱子后面。"]
                     : ["<26>{#f/2}* 你一定能成功的。"])
               ]
               : [
                  '<25>{#f/3}* ...哦对。\n* 差点忘了。',
                  '<25>{#f/0}* 你可能已经知道\n  对艾菲斯调情\n  是有多么困难了。',
                  "<25>{#f/2}* 但我有诀窍，能让你\n  一击俘获艾菲斯芳心。",
                  "<25>{#f/0}* 如果你真的想成为\n  一位传奇调情大师...",
                  "<25>{#f/0}* 你就得在她耳边\n  这样低语。",
                  '<32>{#p/human}* （衫斯在你耳边\n  小声说了些话。）',
                  ...(funni
                     ? ['<25>{#p/sans}{#f/2}* 尽量别在柱子后面\n  对她说这些话。']
                     : ['<25>{#p/sans}{#f/2}* 祝你好运。'])
               ])
         ],
         jspeech3: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/0}* ...可是。\n* 你从未获得任何LOVE。',
            "<25>* ...嘿，为啥摆出那表情？",
            "<25>{#f/2}* 众所周知，\n  lv1就是最低的等级。",
            "<25>{#f/0}* 但这可不代表\n  你天真无邪，人畜无害。",
            ...(SAVE.data.n.bully < 15
               ? SAVE.data.n.state_foundry_undyne > 0
                  ? [
                     "<25>{#f/0}* 当你有能力\n  去拯救某人性命时...",
                     '<25>{#f/0}* 你放弃了救人，\n  转而选择自保。',
                     '<25>{#f/3}* 也许你会争辩，\n  当时身处险境，十分害怕，\n  只能那么做。',
                     "<25>{#f/0}* 但是，你就从没考虑过\n  另一条更好的路吗？",
                     '<25>{#f/0}* ...',
                     "<25>{#f/0}* for what it's worth...",
                     '<25>{#f/3}* you never went out of your way to kill anyone.',
                     "<25>{#f/0}* even when you ran away, you didn't do it out of malice.",
                     '<25>{#f/0}* you never gained LOVE, but you had love.',
                     '<25>{#f/0}* does that make sense?',
                     '<25>{#f/0}* maybe not.'
                  ]
                  : [
                     '<25>* just that you kept a certain tenderness in your heart.',
                     '<25>* no matter the struggles or hardships you faced...',
                     '<25>* you strived to do the right thing.',
                     ...(world.flirt < 20
                        ? [
                           '<25>* you refused to hurt anyone.',
                           '<25>* even when you ran away, you did it with a smile.',
                           '<25>* you never gained LOVE, but you gained love.',
                           '<25>* does that make sense?',
                           '<25>* maybe not.'
                        ]
                        : [
                           "<25>* in fact, i hear you're quite the romantic.",
                           '<25>* not only did you not hurt anyone, you went right for their hearts.',
                           '<25>{#f/2}* you really like to make things hard on yourself, huh?'
                        ])
                  ]
               : [
                  SAVE.data.n.bully < 30
                     ? "<25>{#f/0}* 一路上，你伤害了不少人。\n  不是吗？"
                     : "<25>{#f/0}* 一路上，你伤害了很多人。\n  不是吗？",
                  ...(SAVE.data.n.state_foundry_undyne > 0
                     ? [
                        "<25>{#f/0}* 而且，当你有能力\n  去拯救某人性命时...",
                        '<25>{#f/0}* 你放弃了救人，\n  转而选择自保。',
                        '<25>{#f/3}* 也许你会争辩，\n  当时身处险境，十分害怕，\n  只能那么做。',
                        '<25>{#f/3}* 但别的怪物面对你，\n  难道就不恐惧，不害怕吗？',
                        '<25>{#f/0}* 希望你记着...'
                     ]
                     : world.flirt < 20
                        ? [
                           '<25>{#f/0}* 你确实没杀一只怪物，\n  但你无数次将他们\n  推向生死边缘。',
                           '<25>{#f/3}* 这是正当防卫？\n* 还是防卫过当呢？',
                           "<25>{#f/0}* 只有你自己心里清楚。"
                        ]
                        : [
                           '<25>{#f/0}* then, you flirted with them as if to have your way with them.',
                           '<25>{#f/3}* is that really what you meant to do?\n* or... am i wrong?',
                           "<25>{#f/0}* 只有你自己心里清楚。"
                        ])
               ]),
            '<25>{#f/3}* ...\n* now.',
            "<25>{#f/0}* you're about to make the greatest decision of your entire journey.",
            '<25>* your choice here...',
            '<25>* will determine the fate of the entire galaxy.',
            '<25>* if you refuse to enter the archive...',
            '<25>* monsters will remain trapped on the outpost.',
            '<25>* asgore will do his best to look after you, but...',
            '<25>* we may never get a shot at freedom again.',
            '<25>{#f/3}* however.\n* if you do decide to follow his plan...',
            "<25>{#f/0}* there's a chance things could go wrong.",
            "<25>* not to mention, you'd be risking your life again, and...",
            '<25>* well.',
            '<25>* what will you choose?',
            '<25>{#f/3}* ...',
            '<25>* if i were you, i would have thrown in the towel by now.',
            "<25>{#f/2}* but you didn't get this far by giving up, did you?",
            "<25>{#f/0}* that's right.",
            '<25>* you have something called \"{@fill=#ff0}determination.{@fill=#fff}\"',
            ...(SAVE.data.n.bully < 15
               ? [
                  '<25>* so as long as you hold on...',
                  "<25>* so as long as you do what's in your heart...",
                  '<25>* i believe you can do the right thing.',
                  ...(SAVE.data.n.state_foundry_undyne > 0 || world.flirt < world.flirt_state1.length
                     ? [
                        '<25>{#f/3}* alright.',
                        "<25>{#f/0}* we're all counting on you, buddo.",
                        ...(funni
                           ? ["<25>{#f/2}* 我会把你挪回柱子后面。"]
                           : ['<25>{#f/2}* good luck.'])
                     ]
                     : [
                        '<25>{#f/3}* oh, right.\n* i almost forgot.',
                        '<25>{#f/0}* you may have noticed how difficult it is to flirt with her.',
                        '<25>{#f/0}* alphys, i mean.',
                        "<25>{#f/2}* 但我有诀窍，能让你\n  一击俘获艾菲斯芳心。",
                        "<25>{#f/0}* 如果你真的想成为\n  一位传奇调情大师...",
                        "<25>{#f/0}* 你就得在她耳边\n  这样低语。",
                        '<32>{#p/human}* （衫斯在你耳边\n  小声说了些话。）',
                        ...(funni
                           ? ['<25>{#p/sans}{#f/2}* 尽量别在柱子后面\n  对她说这些话。']
                           : ['<25>{#p/sans}{#f/2}* 祝你好运。'])
                     ])
               ]
               : [
                  "<26>* no matter what you've used it for up to now...",
                  "<25>* i know you have it in you to do what's right when it matters most.",
                  '<25>{#f/3}* ...',
                  '<25>{#f/3}* be good, alright?',
                  ...(funni ? ['<25>{#f/2}* ... and try not to stand behind any more pillars.'] : [])
               ])
         ],
         
         jspeech4: [
            '<25>{#p/darksans}* Now, you understand.',
            "<25>* It's time to begin your judgment.",
            '<25>* Look inside yourself.',
            '<25>* Have you really done the right thing?',
            "<25>* And, considering what you've done...",
            '<25>* What will you do now?',
            '<25>* Take a moment to think about this.'
         ],
         jspeech5a: [
            '<25>{#p/sans}{#f/3}* ...',
            "<25>{#f/0}* truthfully, it doesn't really matter which conclusion you came to.",
            "<25>* all that's important is that you were honest with yourself."
         ],

         
         jspeech5b1: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* what happens now...',
            '<25>{#f/0}* we leave up to you.',
            ...(funni ? ['<25>{#f/2}* ... just as soon as i move you back behind that pillar.'] : [])
         ],

         
         jspeech5b2: () => [
            '<25>{#p/sans}{#f/3}* though...',
            '<25>{#f/0}* one thing about you always struck me as kinda odd.',
            '<25>* now, i understand acting in self-defense.',
            '<25>* you were thrown into those situations against your will.',
            '<25>* but...',
            '<25>* sometimes...',
            "<25>* you act like you know what's gonna happen.",
            "<25>* like you've already experienced it all before.",
            '<25>* this is an odd thing to say, but...',
            '<25>* if you have some sort of {@fill=#ff0}special power{@fill=#fff}...',
            "<25>* isn't it your responsibility to do the right thing?",
            choicer.create('* （你要怎么回答？）', '是', '否')
         ],
         jspeech5b3a: ['<25>{#p/sans}{#f/4}* ah.', '<25>{#f/0}* i see.'],
         jspeech5b3b: [
            '<25>{#p/sans}{#f/4}* 嘿。',
            "<25>{#f/0}* well, that's your viewpoint.",
            "<25>{#f/2}* i won't judge you for it."
         ],
         jspeech5b3c: ['<25>{#p/sans}{#f/3}* ...'],

         
         
         jspeech5b4a: ["<25>{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill my brother?"],
         jspeech5b4b: ['<25>{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty brother killer.'],
         jspeech5b5a: ["<25>{#p/sans}{#f/3}* ... guess toriel wasn't worth the effort, then, huh?"],
         jspeech5b5b: ['<25>{#p/sans}{#f/3}* ... even if i should, after what you did to toriel.'],
         jspeech5b6a: ["<25>{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill all those people?"],
         jspeech5b6b: ['<25>{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty serial killer.'],
         jspeech5b7a: ["<25>{#p/sans}{#f/3}* ... guess undyne wasn't worth the effort, then, huh?"],
         jspeech5b7b: ['<25>{#p/sans}{#f/3}* ... even if i should, after what you did to undyne.'],
         jspeech5b8a: ["<25>{#p/sans}{#f/3}* ... guess mettaton wasn't worth the effort, then, huh?"],
         jspeech5b8b: ['<25>{#p/sans}{#f/3}* ... even if i should, after what you did to mettaton.'],
         jspeech5b9a: ["<25>{#p/sans}{#f/3}* ... guess the people you killed don't matter, then, huh?"],
         jspeech5b9b: ['<25>{#p/sans}{#f/3}* ... even if i should, after what you did to those people.'],
         jspeech5b10a: ["<25>{#p/sans}{#f/3}* ... guess the person you killed don't matter, then, huh?"],
         jspeech5b10b: ['<25>{#p/sans}{#f/3}* ... even if i should, after what you did to that person.'],

         
         jspeech6a: [
            '<25>{#p/sans}{#f/4}* huh?\n* you look bored.',
            "<25>* i get the feeling you aren't gonna learn anything from this.",
            '<25>{#f/0}* well, guess i gotta judge you then.'
         ],

         
         jspeech6b1: [
            '<26>{#p/sans}* lv2...\n* seems like you messed\n  up the slightest amount.',
            "<25>{#f/4}* welp.\n* that's pretty sad.",
            "<25>{#f/3}* you probably weren't even aware of what you were doing...",
            '<25>* and when you learned, it was too late.',
            '<25>{#f/2}* nah, just kidding.',
            '<25>{#f/4}* who gets to lv2 on accident?\n* get outta here.'
         ],

         jspeech6b2: [
            '<25>{#p/sans}* lv3...\n* 还行。',
            "<25>{#f/4}* three's not such a scary number, is it?",
            "<25>{#f/0}* i'll give you a pass.",
            '<25>{#f/3}* but, hey...',
            '<25>{#f/2}* you could still do better, right?'
         ],

         jspeech6b3: [
            '<25>{#p/sans}* lv4...\n* 好吧。',
            '<25>{#f/4}* i mean, what can i say?',
            "<25>{#f/0}* if it were any higher, i'd think you'd killed people on purpose.",
            "<25>{#f/3}* but i guess i'll give you a pass.",
            '<25>{#f/2}* just this once.'
         ],

         jspeech6b4: [
            '<25>{#p/sans}{#f/4}* lv5？',
            "<25>{#f/0}* now that's dangerous territory right there.",
            '<25>{#f/4}* believe me, i wanna give you the benefit of the doubt...',
            '<25>{#f/0}* but that gets harder and harder to do the higher this goes.',
            '<25>{#f/3}* ... oh well.'
         ],

         jspeech6b5: [
            '<25>{#p/sans}{#f/4}* lv6？',
            '<25>{#f/0}* humans often say six is a scary number.',
            "<25>{#f/4}* now, i don't claim to be superstitious...",
            "<25>{#f/0}* but i'd be lying if i said i wasn't suspicious.",
            '<25>{#f/3}* ... oh well.'
         ],

         jspeech6b6: [
            '<25>{#p/sans}{#f/4}* lv7，嗯？',
            "<25>* isn't that what humans call a lucky number?",
            '<25>{#f/0}* well gee, i dunno about you, but...',
            '<25>{#f/3}* i doubt much luck was involved in how you got to this point.',
            '<25>{#f/0}* ... just saying.'
         ],

         jspeech6b7: [
            '<25>{#p/sans}{#f/4}* lv8，嗯？',
            "<25>* don't humans use this number to predict the future or something?",
            '<25>{#f/0}* well gee, i dunno about you, but...',
            "<25>{#f/3}* that'd be a pretty good explanation for how you've been acting.",
            '<25>{#f/0}* ... just saying.'
         ],

         jspeech6b8: [
            '<25>{#p/sans}{#f/3}* ...lv9。',
            "<25>{#f/0}* that's pretty bad.",
            '<25>{#f/3}* but hey, look on the bright side...',
            "<25>{#f/2}* ... at least you're still in single-digits."
         ],

         jspeech6b9: [
            '<25>{#p/sans}{#f/3}* ...lv10。',
            "<25>{#f/0}* that's pretty bad.",
            '<25>{#f/3}* but hey, look on the bright side...',
            "<25>{#f/2}* ... at least it's a nice, even number you can be proud of."
         ],

         jspeech6b10: [
            '<25>{#p/sans}{#f/3}* ...lv11。',
            "<25>{#f/4}* or in gambler's terms, snake eyes.",
            '<25>{#f/0}* truth be told, if i had a chance to re-roll the dice...',
            "<25>{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            "<25>{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b11: [
            '<25>{#p/sans}{#f/3}* ...lv12。',
            "<25>{#f/4}* or in timekeeper's terms, a full rotation.",
            '<25>{#f/0}* truth be told, if i had a chance to turn back the clock...',
            "<25>{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            "<25>{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b12: [
            '<25>{#p/sans}{#f/3}* ...lv13。',
            "<25>{#f/4}* or in baker's terms, a dozen.",
            '<25>{#f/0}* truth be told, if i had a chance to start bakery-fresh...',
            "<25>{*}{#p/darksans}{#f/1}{#i/5}* I'd probably take it right about now.",
            "<25>{#p/sans}{#f/3}* ... but that's just me."
         ],

         jspeech6b13: [
            '<25>{#p/sans}{#f/3}* ...lv14。',
            "<25>{#f/4}* i'll be honest...",
            "<25>{#f/0}* i didn't think you'd be able to kill that many people that quickly.",
            '<25>{*}{#p/darksans}{#f/1}{#i/5}* Guess you learn something new every day.',
            '<25>{#p/sans}{#f/3}* ...'
         ],

         
         jspeech6c: [
            '<25>{#p/sans}{#f/4}* huh?\n* you STILL look bored.',
            '<25>{#f/0}* ok then, consider our session over.'
         ],

         
         jspeech7: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/0}* wait a second.',
            '<25>{#f/4}* that look on your face while i was talking...',
            "<25>{#f/0}* you've already heard my spiel, haven't you?",
            '<25>{#f/3}* i suspected something like this.',
            "<25>{#f/3}* you act like you know what's going to happen in advance sometimes.",
            "<25>{#f/3}* like you've seen certain things before.",
            '<25>{#f/0}* so... hey.',
            "<25>{#f/0}* i've got a request for you.",
            '<25>{#f/2}* i kind of have a {@fill=#ff0}secret codephrase{@fill=#fff} that only i would know.',
            "<25>{#f/4}* so, i'll know that if someone tells it to me...",
            "<25>{#f/0}* they'd have to be a time traveler.",
            '<25>{#f/2}* crazy, right?',
            '<25>{#f/3}* anyway, here it is...',
            '<32>{#p/human}* (Sans whispered something to you.)',
            "<25>{#p/sans}{#f/0}* i'm counting on you to come back here and tell me that.",
            ...(funni ? ["<25>{#f/2}* 我会把你挪回柱子后面。"] : ['<25>{#f/2}* see you... earlier.'])
         ],

         
         jspeech8: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/4}* huh?\n* do you have something to say to me?',
            '<32>{#p/human}* (You told Sans the secret codephrase.)',
            '<25>{#p/sans}{#f/2}* what? a codephrase?\n* can you speak a little louder?',
            '<32>{#p/human}* (You told Sans the secret codephrase, but louder.)',
            '<25>{#p/sans}{#f/0}* did you...',
            '<25>{#f/4}* ... just say to \"reverse the polarity of the neutron flow?\"',
            "<25>{#f/2}* wow.\n* i can't believe you would say that.",
            '<25>{#f/4}* not only is that complete nonsense...',
            "<25>{#f/2}* it's also my secret codephrase.",
            '<25>{#f/0}* so... you really are a time traveler, huh?',
            "<25>{#f/3}* well, alright.\n* i guess that means you're qualified.",
            "<25>{#f/0}* here's the key to my room.",
            '<32>{#s/equip}{#p/human}* （你把骨钥挂到了钥匙串上。）',
            "<25>{#p/sans}{#f/0}* it's time...",
            ...(funni
               ? ['<25>{#f/2}* you walked back out from behind that pillar.']
               : ['<25>{#f/2}* you understood the {@fill=#003cff}real truth{@fill=#fff}.'])
         ],

         
         jspeech9: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/0}* wait a second.',
            '<25>{#f/4}* that look on your face while i was talking...',
            "<25>{#f/0}* you've already heard my spiel, haven't you?",
            '<25>{#f/3}* i suspected something like this.',
            "<25>{#f/3}* you act like you know what's going to happen in advance sometimes.",
            "<25>{#f/3}* like you've seen certain things before.",
            '<25>{#f/0}* so...',
            '<25>{#f/0}* ... wait.\n* have you heard this before, too?',
            '<25>{#f/3}* wow, you really ARE a time traveler.',
            "<25>{#f/2}* guess there's not much else to say, then.",
            '<32>{#s/equip}{#p/human}* （你把骨钥挂到了钥匙串上。）',
            ...(funni ? ['<25>{#f/2}* ... apart from \"i\'ll move you back behind the pillar now.\"'] : [])
         ],

         
         jspeech10a: ['<25>{#p/sans}{#f/0}* 回头。'],
         jspeech10b: [
            '<25>{#p/sans}* 所以，这就是终点了，\n  是吗？',
            '<25>* 就要用这种方式，\n  给你的旅程画上句号吗？',
            '<25>{#f/3}* ...',
            "<25>* 嘿。\n* 之前，我和艾斯戈尔聊了聊\n  你的所作所为。",
            "<25>{#f/0}* 虽然不知道艾斯戈尔会对你\n  做些什么...",
            "<25>{#f/0}* 但很可能，\n  事情不会如你所愿。",
            '<25>* 不过，迎接结局之前...\n  静下心来，好好想想。',
            "<25>* 一路走来，你做的那些事...",
            '<25>* 真的值得吗？'
         ],
         jspeech10c: [
            "<25>{#p/sans}{#f/3}* 我看不到你的表情。",
            "<25>{#f/0}* 更摸不透你的心思。",
            '<25>* ...',
            "<25>{#f/3}* 这样也好。",
            '<25>{#f/0}* 但我知道，\n  你能干出那些事...',
            '<25>* 肯定是出于“关心”，对吗？',
            "<25>{#f/3}* ...我无数次想否认、\n  推翻这个想法。",
            "<25>{#f/0}* 但是，如果我们真的\n  形同陌路...",
            "<25>* 你怎么可能做到这种地步？",
            '<25>* 你太“关心”我们了，\n  恨不得把我们都“关心”死了，\n  不是吗？'
         ],
         jspeech10d: [
            '<25>{#p/sans}{#f/3}* 我知道，\n  自己根本不擅长“动之以情”。',
            '<25>{#f/0}* 但请你告诉我，\n  我还能做什么呢？',
            '<25>* 既然你已经彻底踏上\n  这条不归路...',
            "<25>* 那威胁、恐吓都已经\n  无济于事了。",
            "<25>{#f/3}* 所以，我想试试另一种方式\n  劝你回头。",
            '<25>{#f/0}* ...',
            '<25>{#f/3}* 那么。\n* 如果你要一条道走到黑...',
            '<25>* 我不会拦你。',
            "<25>{#f/0}* 我知道，\n  你早已将“善”抛之脑后。",
            "<25>* 但如果，在机缘巧合之下，\n  你拥有了{@fill=#ff0}那种能力{@fill=#fff}...",
            '<25>* 那就试试看吧。',
            '<25>* 只此一次，终末之时...',
            '<25>{#f/3}* 做件善事。',
            '<25>* ...',
            '<25>{#f/3}* 嗯。',
            "<25>{#f/3}* 我说完了。"
         ],

         choice0: () => [
            ...(SAVE.data.n.state_foundry_undyne === 0 && !world.badder_lizard
               ? [
                  '<25>{#p/alphys}{#g/alphysCutscene1}* 你终于到了！',
                  '<25>{#g/alphysCutscene2}* ...\n* 这就是“六号档案”。',
                  '<25>{#f/15}* 这装置建成之后，\n  那些人类就陆续进到了里面。',
                  '<25>{#f/15}* 装置内，时间流速\n  比现实慢得多...',
                  '<25>{#f/15}* 所以，他们看上去\n  就像时间被定格住一样...',
                  "<25>{#f/10}* ...是不是很酷啊？！",
                  "<25>{#f/1}* 罗曼博士居然能造出\n  这么棒的装置，真是厉害！",
                  "<25>{|}{#f/15}* 嗯... 我不知道\n  他追不追科幻番，\n  但我知道有部科幻动漫电影 {%}",
                  '<99>{|}{#f/15}  为了看这部电影你需要佩戴\n  最新最酷炫的虚拟现实眼镜\n  也就是VR眼镜才可以但是呢 {%}',
                  '<99>{|}{#f/23}  如果你戴了VR眼镜的话就会\n  被困在一个虚拟电影时空中\n  不止是你其他人也会被困住 {%}',
                  '<99>{|}{#f/23}  所以人们需要想办法来逐步\n  推动故事剧情发展这样才能\n  最终找到办法彻底逃出这里 {%}',
                  '<99>{|}{#f/18}  最终经过不懈努力我们主角\n  终于找到了逃出这里的方法\n  之后主角成功脱困之后又帮 {%}',
                  '<99>{|}{#f/18}  所有人成功脱困！！！',
                  '<25>{#f/18}* ...',
                  '<25>{#f/20}* 呃，所以我觉得罗曼博士\n  应该是受到了它的启发。',
                  "<25>{#f/18}* 不-不说这个！！\n* 艾斯戈尔正在力场那里\n  等你呢！"
               ]
               : [
                  '<25>{#p/alphys}{#g/alphysCutscene1}* 你终于到了！',
                  '<25>{#g/alphysCutscene2}* ...',
                  "<25>{#g/alphysSmileSweat}* 对-对了，\n  艾斯戈尔正在力场那里\n  等你呢。"
               ]),
            '<25>{#g/alphysNeutralSweat}* 你... 你应该也想去找他。',
            "<25>{#g/alphysOhGodNo}* 但是，\n  如果你不是想找他的！！\n* 那...",
            "<25>{#g/alphysTheFactIs}* 那我也不知道...\n  你为什么来这了。",
            "<26>{#g/alphysCutscene2}* 好吧。\n* 我全说完了，真说完了。"
         ],
         choice0x: ["<25>{#p/alphys}{#g/alphysCutscene2}* 呃，\n  我先在这忙我的事。"],
         choice0y: ['<25>{#p/alphys}{#g/alphysInquisitive}* 还有点犹豫，是吗...？'],
         choice1: [
            '<26>{#p/asgore}{#f/1}* 这就是力场。',
            '<25>{#f/2}* 这道力场将我们囚禁于此。',
            '<25>{#f/1}* 这东西没有意识，\n  没有感情...',
            '<25>{#f/2}* 只要进来了，\n  谁都出不去。'
         ],
         choice1a: () => [
            '<25>{#p/asgore}{#f/1}* 这么多年，怪物们都没有机会\n  再次看到星辰。\n* 我只能扼腕叹息。',
            '<25>* 与此同时，我也十分害怕\n  某一天，人类到来，\n  将我们一举消灭。',
            ...(world.bad_robot || world.trueKills > 29
               ? [
                  '<25>{#f/1}* ...',
                  '<25>{#f/2}* 今天... 噩梦成真了。',
                  '<25>{#f/3}* 艾菲斯把你的... 暴行\n  都告诉了我。',
                  ...(world.alphys_percieved_kills < 20
                     ? ['<25>{#f/2}* 不过，她也和我说，\n  你放过了不少怪物。']
                     : [
                        '<25>{#f/16}* ...\n* 孩子，回答我。',
                        '<25>{#f/12}* 你这么做，是为了保护自己，\n  还是为了报复？',
                        '<25>{#f/12}* 还是，你一开始就计划好\n  把怪物们全杀了？'
                     ]),
                  '<25>{#f/5}* ...',
                  '<26>{#f/16}* 总之，你让我进退两难。',
                  '<25>{#f/15}* 我是该相信你，\n  让你拯救我们...',
                  '<25>{#f/16}* 还是亲手把你的灵魂扯出来，\n  然后自己进入“档案”。',
                  '<25>{#f/3}* ...',
                  ...(world.alphys_percieved_kills < 20
                     ? [
                        '<25>{#f/3}* 尽管你做了很多错事，\n  我也不想伤害你。',
                        '<25>{#f/4}* 你有能力把我们折磨得更惨，\n  但是...',
                        '<25>{#f/2}* ...你并没有那么做。',
                        '<25>{#f/1}* 所以，你绝不是无可救药的，\n  孩子。',
                        '<25>{#f/2}* 你只是见到怪物们，\n  非常害怕，慌不择路了。'
                     ]
                     : ['<25>{#f/3}* 我无法言说\n  自己现在到底有多难受。'])
               ]
               : (world.bad_lizard > 0 && world.alphys_percieved_kills > 0) || 2 <= world.alphys_percieved_kills
                  ? [
                     '<25>{#f/1}* ...',
                     '<25>{#f/1}* 总体来看，你还是挺善良的。',
                     ...(world.bad_lizard > 0
                        ? ["<25>{#f/2}* 艾菲斯和我说，\n  你... 杀了人。"]
                        : ['<25>{#f/2}* 艾菲斯和我说，\n  你好像... 杀了人。']),
                     '<25>{#f/3}* ...',
                     ...(SAVE.data.b.ultrashortcut
                        ? [
                           '<25>{#f/3}* 幸好，你被帕派瑞斯抓住，\n  直接到了这里。',
                           '<25>{#f/2}* 你肯定发现了，\n  前哨站并不安全。',
                           '<25>{#f/5}* 别担心，这里相对安全，\n  我们会保护你的。'
                        ]
                        : [
                           '<25>{#f/3}* 事情弄成这样，都怪我。',
                           '<25>{#f/2}* 艾菲斯博士第一次护送人类，\n  就因为我死守秘密...',
                           "<25>{#f/5}* 把她的工作弄得那么困难。"
                        ]),
                     '<25>{#f/15}* ...',
                     '<25>{#f/16}* “六号档案”就在你的身后。',
                     '<26>{#f/1}* 那些人类...\n  虽然只是孩子，\n  但最后都自愿进入了“档案”。',
                     '<25>* 所以... \n  下一个进入的人类就是你了。'
                  ]
                  : [
                     '<25>{#f/1}* 之后，孩子们一个接一个\n  来到了这里。',
                     '<25>* 他们初来乍到时，\n  都十分害怕，经历许多艰险\n  才到达终点。',
                     '<26>{#f/6}* 但无一例外，他们都把\n  自己最优秀的品质\n  尽数展现出来。',
                     '<25>* 一个孩子很有耐心，\n  一个孩子充满勇气。',
                     '<25>* 一个孩子很守信用，\n  一个孩子能屈能伸。',
                     '<25>{#f/2}* 一个孩子心中充满善意...',
                     '<25>{#f/4}* 还有一个，敢于伸张正义。',
                     '<25>{#f/1}* 当我问他们，\n  “你想和我们待在一起，\n   还是进入‘档案’？”',
                     '<25>* 他们都选择了后者。',
                     ...(SAVE.data.b.ultrashortcut
                        ? [
                           '<25>{#f/5}* 所以，无论你经历了什么...',
                           '<25>{#f/1}* 希望你也愿意进入“档案”。'
                        ]
                        : ['<25>* 所以... \n  下一个进入的人类就是你了。'])
                  ])
         ],
         choice1b: () =>
            world.bad_robot || world.trueKills > 29
               ? [
                  '<25>{#p/asgore}{#f/1}* 经过考虑，\n  我不允许你进入“档案”。',
                  '<25>{#f/2}* 指望你担下如此大任，\n  就是痴人说梦。',
                  '<25>{#f/5}* ...',
                  '<25>{#f/5}* 现在跟我回家。',
                  '<25>{#f/5}* 之后再决定如何处置你。'
               ]
               : [
                  [
                     '<25>{#p/asgore}{#f/6}* 最晚进入档案的人类，\n  将会作为“容器”。',
                     "<25>* 从其他的人类灵魂中\n  “借”来能量，为己所用。",
                     '<26>* 凝聚你和他们的力量，\n  就可以打破力场。',
                     '<25>* 之后...',
                     '<25>* 怪物一族就能寻找新家园了。',
                     '<25>{#f/1}* 不过...',
                     '<25>* 如果你还没准备好\n  扛下如此重任...',
                     '<25>* 你可以先和我们待在一起，\n  做好准备了，再进入档案。',
                     '<25>{#f/6}* 无论如何，\n  我都会尊重你的选择。',
                     '<25>{#f/1}* ...',
                     '<25>* 那么，你愿意\n  现在进入“档案”吗？',
                     choicer.create('* （你要怎么回答？）', '是', '否')
                  ],
                  [
                     '<26>{#p/asgore}{#f/6}* 你回来了。',
                     '<25>{#f/1}* ...',
                     '<25>* 那么，你愿意\n  现在进入“档案”吗？',
                     choicer.create('* （你要怎么回答？）', '是', '否')
                  ],
                  [
                     '<25>{#p/asgore}{#f/1}* ...',
                     '<25>* 那么，你愿意\n  现在进入“档案”吗？',
                     choicer.create('* （你要怎么回答？）', '是', '否')
                  ]
               ][Math.min(SAVE.data.n.state_citadel_refuse, 2)],
         choice2a: [
            '<25>{#p/asgore}{#f/4}* ...',
            '<25>{#f/6}* 跟我来，孩子。',
            '<25>{#f/21}* 有不少事情等着咱们呢。'
         ],
         choice2b: () =>
            [
               [
                  '<25>{#p/asgore}{#f/2}* ...我理解。',
                  '<25>{#f/1}* 也许我不该看别的孩子\n  马上进入“档案”，\n  就也催你跟着进。',
                  SAVE.data.b.ultrashortcut
                     ? '<25>{#f/5}* 这么短时间，\n  我还没争取到你的信任。'
                     : '<25>{#f/5}* 也许，你还没准备好，\n  也不信任我。',
                  '<25>{#f/1}* 如果改变主意，\n  随时欢迎回来...',
                  '<25>{#f/2}* 如果你不想这么做，\n  我不会强迫你。'
               ],
               ['<25>{#p/asgore}{#f/2}* ...我理解。']
            ][Math.min(SAVE.data.n.state_citadel_refuse++, 1)],
         choice3a: ['<25>{#p/asgore}{#f/6}* 开始吧。'],
         choice4a: ['<25>{#p/asgore}{#f/5}* 艾菲斯？'],
         choice4b: [
            '<25>{#p/alphys}{#g/alphysOhGodNo}* 啊，知-知道了！\n* 对不起！',
            '<25>{#p/alphys}{#g/alphysCutscene3}* 稍等一下，\n  我先做好准备工作...'
         ],
         choice5: ['<25>{#p/alphys}{#g/alphysCutscene2}* 搞定。\n* 各项参数应该设定好了。'],
         choice6a: ["<25>{#p/alphys}{#g/alphysWelp}* 好，那人类已经成功\n  连上装置。"],
         choice6b: [
            "<25>{#p/asgore}{#f/6}* 别紧张，孩子。",
            '<25>{#p/asgore}{#f/7}* 在“档案”建造之初...',
            '<25>{#p/asgore}{#f/6}* 我们为人类提供了\n  最舒适的生活环境。',
            '<25>{#p/asgore}{#f/21}* 在里面，地球上所有美景\n  都能尽收眼底。',
            '<25>{#p/asgore}{#f/6}* 你能看到郁郁葱葱的森林，\n  绵延起伏的山丘，\n  还有潺潺流淌的小溪。',
            '<25>{#p/asgore}{#f/4}* ...年轻人，\n  怪物的命运都指望你了。',
            '<25>{#p/asgore}{#f/6}* 进入“档案”后，\n  务必注意安全，\n  也不要逗留太久。'
         ],
         choice7: [
            "<32>{#p/basic}* 我还在这里的，搭档...",
            "<32>* ...不过，那里是潜意识的时空，",
            '<33>* 我进不去。',
            "<32>* 无论发生什么，\n  你一定会做正确的事。",
            '<32>* ...',
            '<32>* 注意安全，好吗？'
         ],
         choice8: [
            '<25>{#p/asgore}{#f/1}* ...',
            '<25>{#p/asgore}{#f/2}* 你来了。',
            '<32>{#p/human}* （...）',
            '<25>{#p/asgore}{#f/1}* ...\n* 我其实有很多事想问你。',
            '<25>{#f/2}* 或许，\n  你已经不想和我废话。',
            '<25>{#f/4}* 尽管如此...',
            '<25>{|}{#f/7}* 我还是相信- {%}'
         ],
         
         clover1: ["<32>{#p/human}{#v/6}{@fill=#faff29}* 多美啊..."],
         clover2: [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* ...\n* 不过，这话换他来说，\n  估计更合适。",
            '<32>{@fill=#faff29}* 曾经，这样的美景\n  稀松平常，随处可见...',
            '<32>{@fill=#faff29}* ...但我一来，\n  把一切都毁了。',
            '<32>{@fill=#faff29}* 我的体内有仿生植入体，\n  使用它，就可以夺取\n  系统的最高权限。',
            '<32>{@fill=#faff29}* 有了最高权限，\n  我们想要啥，就有啥...\n* 肆意滥用权限，最终付出了代价。',
            "<32>{@fill=#faff29}* 你取得的“灵势”告诉我，\n  你已经去过我们创造的\n  所有子世界...",
            "<32>{@fill=#faff29}* 那末日般的景象，\n  想必你已经见过了。",
            '<32>{@fill=#faff29}* “灵势”...\n* 当然也是个缩写，\n  全称叫“灵魂势能”。',
            "<32>{@fill=#faff29}* 我们的灵魂，\n  就是靠它联结在一起。",
            "<32>{@fill=#faff29}* 而有了它，\n  你就能一举打碎力场。"
         ],
         clover3: [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* 这里是潜意识时空，\n  人的意识触及不到这里。",
            '<32>{@fill=#faff29}* 所以，我不知道\n  自己醒来后，是否还会记得\n  这里发生的一切，',
            '<32>{@fill=#faff29}* 但没关系。\n  即使我们的噩梦终将画上句号...\n  即使我们终将遗忘一切...',
            '<32>{@fill=#faff29}* 也一定有人会记得这些。'
         ],
         clover4: () => [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* ...\n* 你该走了。",
            '<32>{@fill=#faff29}* 离开这里的终端\n  就在主干道的尽头。',
            ...(SAVE.data.b.oops
               ? ['<32>{@fill=#faff29}* ...多多保重...', '<32>{@fill=#faff29}* 好吗？']
               : [
                  '<32>{@fill=#faff29}* ...走之前，我有个问题...',
                  "<32>{@fill=#faff29}* 你的名字，\n  是叫弗里斯克吗？",
                  "<32>{@fill=#faff29}* 抱歉。\n* 只是你一言不发，我有点好奇\n  你在想些什么。",
                  "<32>{@fill=#faff29}* ...\n* 弗里斯克，你是个好人。",
                  '<32>{@fill=#faff29}* 而且...',
                  "<32>{@fill=#faff29}* 那个人，\n  一直在幕后，为你出谋划策的人，\n* 也是个好人。",
                  '<32>{@fill=#faff29}* ...',
                  "<32>{@fill=#faff29}* 这一切，我跟弗里斯克或许都会忘记。\n* 但你不会。",
                  "<32>{@fill=#faff29}* 如果此刻，\n  你正在某处看着我们...",
                  "<32>{@fill=#faff29}* ...请不要忘记\n  我们的经历，我们的故事。\n* 请不要忘记这里发生的一切。",
                  "<32>{@fill=#faff29}* 不管这世界是真是假。\n* 这里的记忆，\n  都是最珍贵的东西。"
               ])
         ],

         smasher1: (haha: boolean) => [
            "<25>{#p/alphys}{#g/alphysWelp}* 我去力场那等你。",
            ...(haha
               ? [
                  '<25>{#p/alphys}{#g/alphysFR}* ... also, I took the Mew Mew doll from you while you were asleep.',
                  "<25>{#p/alphys}{#g/alphysHellYeah}* Who's laughing now!"
               ]
               : !SAVE.data.b.failshow && SAVE.data.b.item_tvm_mewmew && !SAVE.data.b.mewget
                  ? ((SAVE.data.b.mewget = true),
                     [
                        '<25>{#p/alphys}{#g/alphysFR}* ... also, I found the Mew Mew doll you let go of earlier.',
                        "<25>{#p/alphys}{#g/alphysHellYeah}* Who's laughing now!"
                     ])
                  : [])
         ],
         smasher2: ['<25>{*}{#p/alphys}{#g/alphysSmileSweat}* 准备好了吗？{^40}{%}'],

         bad1: () =>
            [
               world.bad_robot || world.trueKills > 29
                  ? world.alphys_percieved_kills < 20
                     ? [
                        '<25>{*}{#p/twinkly}{#f/8}* 是不是拿不定主意呀，\n  亲爱的艾斯戈尔？',
                        '<25>{*}{#f/5}* 我理解。\n* 谁都有犹豫不决的时候。',
                        "<25>{*}{#f/11}* 但没关系！",
                        "<25>{*}{#f/7}* 你再也不用操心啦！",
                        '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                        '<25>{*}* ...干...什么...',
                        '<25>{*}{#p/twinkly}{#f/8}* 哎呀，我什么都没干呀，\n  艾斯戈尔...'
                     ]
                     : [
                        '<25>{*}{#p/twinkly}{#f/5}* 哎呀呀，艾斯戈尔...',
                        "<25>{*}{#f/11}* 你本可以直接把人杀了，\n  那就皆大欢喜。",
                        "<25>{*}{#f/7}* 但现在，你再也没机会咯。",
                        '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                        '<25>{*}* ...干...什么...',
                        "<25>{*}{#p/twinkly}{#f/5}* 杀人，可没你想得\n  那么伤天害理哦，艾斯戈尔...",
                        '<25>{*}{#f/9}* 就让我好好教你\n  怎么才能杀得又嗨又爽吧！'
                     ]
                  : SAVE.data.b.ultrashortcut
                     ? [
                        '<25>{*}{#p/twinkly}{#f/5}* 哎呀，哎呀...',
                        "<26>{*}{#f/11}* 跑太快，把脑子都跑丢了。",
                        '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                        '<25>{*}* ...干...什么...',
                        "<25>{*}{#p/twinkly}{#f/5}* 想靠那点小把戏蒙混过关？",
                        "<25>{*}{#f/7}* 真当我眼瞎呢。"
                     ]
                     : [
                        '<25>{*}{#p/twinkly}{#f/5}* 哈喽，艾斯戈尔！',
                        "<26>{*}{#f/11}* 别这么急着拯救怪物嘛，\n  好玩的事多着呢。",
                        '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                        '<25>{*}* ...干...什么...',
                        '<25>{*}{#p/twinkly}{#f/5}* 我知道\n  这一下把你吓得不轻，\n  但别气馁哦！',
                        "<25>{*}{#f/7}* 你看，这多好玩啊。\n  是不是呀，艾斯戈尔？"
                     ],
               [
                  "<25>{*}{#p/twinkly}{#f/7}* Like I'd ever let you escape so easily.",
                  SAVE.data.b.ultrashortcut
                     ? '<25>{*}{#f/8}* Poor $(name)... always so eager to take the shortcuts in life...'
                     : '<25>{*}{#f/8}* Poor $(name)... always so desperate to have things your way...',
                  '<25>{*}{#f/5}* But not this time.',
                  '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                  '<25>{*}* ...干...什么...',
                  "<25>{*}{#p/twinkly}{#f/5}* From now on, I'll be the one calling the shots.",
                  '<25>{*}{#f/7}* And you just have to live with it.'
               ],
               [
                  '<25>{*}{#p/twinkly}{#f/11}* Come now, $(name)...',
                  '<25>{*}{#f/5}* This resistance of yours is pointless!',
                  SAVE.data.b.ultrashortcut
                     ? "<25>{*}{#f/7}* No matter how fast you try to go, I'll always be one step ahead."
                     : "<25>{*}{#f/7}* No matter what you do, I'll always be one step ahead.",
                  '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                  '<25>{*}* ...干...什么...',
                  "<25>{*}{#p/twinkly}{#f/5}* Shh... it's alright.",
                  '<25>{*}{#f/5}* My friend $(name) here just needs to be taught a lesson.'
               ]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop1++, 2)],
         bad2: [
            "<25>{*}{#g/twinklyNice}* ...哎呀，忘了自我介绍了。\n  我叫闪闪。{^30}{%}",
            '<25>{*}{#g/twinklySassy}* 闪亮明星：闪闪。{^30}{%}'
         ],
         bad3: ['<25>{*}{#p/asgore}{#g/asgoreBreak1}* 啊啊啊啊...！{^999}'],
         bad4: [
            "<25>{*}{#p/twinkly}{#g/twinklyWink}* 哎呦~ 你痛苦的尖叫\n  真是天籁之音啊，\n  太好听啦！{^30}{%}",
            '<25>{*}{#p/asgore}{#g/asgoreBreak1}* ...{^10}{%}'
         ],
         bad5: ["<25>{*}{#p/twinkly}{#f/7}* 让我们再欣赏一次。{^20}{%}"],
         bad6: ['<25>{*}{#p/asgore}{#g/asgoreBreak2}* 啊啊啊啊啊啊...！{^999}'],
         bad7: ['<25>{*}{#p/twinkly}{#f/11}* 给我叫！{^5}{%}'],
         bad8: ['<25>{*}{#p/twinkly}{#g/twinklyEvil}{#v/1}* 使劲叫！！！{^5}{%}'],
         bad9: ['<25>{*}{#p/twinkly}{#g/twinklyGrin}{#v/1}* 叫啊！！！{^5}{%}'],
         bad10: ['<25>{*}{#p/twinkly}{#g/twinklyTwisted}{#v/1}* 叫啊！！！{^5}{%}'],
         bad11: [
            '<25>{*}{#p/twinkly}{#g/twinklyCrazed}{#v/1}* 叫啊叫啊叫啊叫啊叫啊叫啊\n  叫啊叫啊叫啊叫啊叫啊叫啊\n  叫啊叫啊叫啊叫啊叫啊叫啊 {%}',
            '<99>{*}{#p/twinkly}{#g/twinklyBroken}{#v/1}* 啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈{^20}{%}'
         ],
         bad12: ['<25>{*}{#p/twinkly}{#g/twinklyDead}{#v/0}* ...{^80}{%}', '<25>{*}* ...死吧。{^10}{%}'],
         bad13: () => [
            ...[
               [
                  '<99>{#p/twinkly}{#v/1}哈喽，$(name)。{^100}{%}',
                  '<99>{#p/twinkly}{#v/1}欢迎来到新时空。{^100}{%}'
               ],
               [
                  '<99>{#p/twinkly}{#v/1}$(name)，欢迎回来。{^100}{%}',
                  "<99>{#p/twinkly}{#v/1}好开心哦，又见到你了。{^100}{%}"
               ],
               [
                  '<99>{#p/twinkly}{#v/1}哎呦，$(name)...{^100}{%}',
                  '{#p/twinkly}{#v/1}你胆可真肥，竟敢抛弃我。{^100}{%}'
               ]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop2, 2)],
            '<99>{#p/twinkly}{#v/1}嘻嘻嘻...{^100}{%}',
            '<99>{#p/twinkly}{#v/1}是不是... 很孤独呀？{^100}{%}',
            '<99>{#p/twinkly}{#v/1}是不是... 很想逃呀？{^100}{%}',
            "<99>{#p/twinkly}{#v/1}...想逃？没门！{^100}{%}",
            '<99>{#p/twinkly}{#v/1}艾斯戈尔把那“档案”当宝一样宠着...{^100}{%}',
            "<99>{#p/twinkly}{#v/1}那就让你也好好享受享受它吧！{^100}{%}",
            '<99>{#p/twinkly}{#v/1}你只能往前...{^100}{%}',
            '<99>{#p/twinkly}{#v/1}再过来点，再过来点...{^100}{%}',
            "<99>{#p/twinkly}{#v/1}...你不怕我吗？{^100}{%}",
            "<99>{#p/twinkly}{#v/1}还不逃？{^100}{%}",
            '<99>{#p/twinkly}{#v/1}好。{^100}{%}',
            '<99>{#p/twinkly}{#v/1}太好了。{^100}{%}',
            '<99>{#p/twinkly}{#v/1}真不愧是我的好伙伴。{^100}{%}',
            '<99>{#p/twinkly}{#v/1}...{^100}{%}',
            "<99>{#p/twinkly}{#v/1}快了...！{^100}{%}",
            '<99>{#p/twinkly}{#v/1}$(name)，马上就到了...{^100}{%}'
         ],
         bad14: [
            '<99>{#p/human}{#v/1}{@fill=#42fcff}漫长的噩梦已然消散。{^80}{%}',
            '<99>{#p/human}{#v/2}{@fill=#ff993d}熟悉的世界再度出现！{^80}{%}',
            '<99>{#p/human}{#v/3}{@fill=#003cff}重要的抉择摆在眼前。{^80}{%}',
            '<99>{#p/human}{#v/4}{@fill=#d535d9}眼前巨物，毁于一旦？{^80}{%}',
            '<99>{#p/human}{#v/5}{@fill=#00c000}心中仁慈，尽数展现？{^80}{%}',
            '<99>{#p/human}{#v/6}{@fill=#faff29}战或至善，由你决断。{^80}{%}'
         ],
         bad15: [
            [
               '<99>{*}{#p/twinkly}...',
               '<99>{*}...你在做什么？',
               "<99>{*}你以为我会...",
               '<99>{*}...学到教训吗？',
               '<99>{*}想得美。'
            ],
            ["<99>{*}{#p/twinkly}你要是现在不动手...", "{*}终有一天，我会回来。"],
            ["<99>{*}{#p/twinkly}我会把你干掉。"],
            ["<99>{*}{#p/twinkly}我会摧毁一切。"],
            ["<99>{*}{#p/twinkly}我会将你的存在彻底抹去！"],
            ['<99>{*}{#p/twinkly}...'],
            ['<99>{*}{#p/twinkly}...？'],
            ['<99>{*}{#p/twinkly}...为什么？'],
            ['<99>{*}{#p/twinkly}...为什么...', '{*}{#p/twinkly}...要对我这么好？'],
            ["<99>{*}{#p/twinkly}...我不明白..."],
            ["<99>{*}{#p/twinkly}我不明白！"]
         ],
         bad16a: ["<99>{*}{#p/twinkly}{#i/8}...我就是...不明白...{^30}{%}"],
         bad16b: ['<99>{*}{#p/twinkly}{#i/3}再见，$(name)。{^30}{%}'],
         bad17: [
            
            '<32>{*}{#p/event}{#i/5}闪闪逃走了。'
         ],
         sad0: () =>
            world.runaway ? ['<25>{#p/asriel1}{#f/30}* 我投降！'] : ["<25>{#p/asriel1}{#f/25}* 对不起。"],
         sad1: () => [
            ...(world.runaway
               ? ['<25>{#p/asriel1}{#f/23}* 看样子，$(name)，\n  你又赢了。']
               : [
                  "<25>{#p/asriel1}{#f/23}* $(name)，\n  我一直都是个爱哭鬼，是吧？",
                  ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* 艾斯利尔...'])
               ]),
            '<25>{#p/asriel1}{#f/22}* ...',
            '<25>{#f/21}* ...我知道的。',
            "<25>{#f/23}* 你并不是$(name)，\n  对吧？",
            "<25>{#f/22}* 很久以前，\n  $(name)就死了。",
            '<25>{#f/15}* ...',
            '<25>{#f/15}* 嗯... 那个...',
            '<25>{#f/10}* 你叫什么名字呢？'
         ],
         sad2: () => [
            '<32>{#p/human}* （...）\n* （你把你的名字告诉了艾斯利尔。）',
            ...(world.runaway
               ? [
                  '<25>{#p/asriel1}{#f/21}* 是叫弗里斯克吗？',
                  '<25>{#f/23}* 嗯，这次你又赢了，\n  弗里斯克。',
                  '<25>{#f/22}* ...',
                  "<25>{#f/13}* 很奇怪...",
                  "<25>{#f/16}* 当星星时，我都忘了...\n  恐惧是什么滋味了。",
                  "<25>{#f/15}* 无数次将别人推入恐惧深渊，\n  已经麻木了。",
                  "<25>{#f/13}* 但现在，\n  我有了所有怪物的灵魂后...",
                  '<25>{#f/15}* ...我...',
                  "<25>{#f/16}* 我终于深切感受到那种情感。",
                  "<25>{#f/15}* 当你开始不停攻击我时...",
                  '<25>{#f/15}* 他们，好像就知道了\n  你是怎样的人。',
                  '<25>{#f/13}* 诚然，你从没杀过\n  任何一只怪物。',
                  '<25>{#f/13}* 但你也一次次将他们\n  推向生死边缘...',
                  '<25>{#f/15}* 一次，又一次，又一次...',
                  '<25>{#f/16}* ...',
                  "<25>{#f/21}* 弗里斯克，\n  他们现在都很怕你。",
                  '<26>{#f/23}* 而且...\n  我也很怕你。',
                  '<25>{#f/22}* ...'
               ]
               : [
                  '<25>{#p/asriel1}{#f/17}* 是叫弗里斯克吗？',
                  "<25>{#f/17}* 那...",
                  '<25>{#f/23}* ...真是个好名字。',
                  '<25>{#f/22}* ...',
                  '<25>{#f/13}* 弗里斯克...',
                  ...(SAVE.flag.n.killed_sans > 0
                     ? [
                        '<25>{#p/asriel1}{#f/13}* What we did back there, I...',
                        '<25>{#f/15}* ...',
                        "<25>{#f/16}* I'm just sorry for dragging you into it.",
                        ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* ... wait a second...']),
                        ...(SAVE.flag.n.genocide_milestone > 0
                           ? [
                              [
                                 '<25>{#p/asriel1}{#f/21}* Sans, Papyrus...\n* Even the canine unit...',
                                 '<25>{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* Even the Royal Guard...',
                                 '<25>{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* And Mettaton, too...',
                                 '<25>{#p/asriel1}{#f/21}* Sans, Papyrus, Monster Kid, Undyne...\n* Mettaton and Alphys...'
                              ][Math.ceil((SAVE.flag.n.genocide_milestone - 1) / 2)],
                              "<25>{#f/21}* All those people I now know you'd do anything to protect..."
                           ]
                           : [
                              "<25>{#p/asriel1}{#f/21}* I know we didn't get far...",
                              '<25>{#f/15}* ... but still...',
                              '<25>{#f/21}* It was wrong of me to force you along like that.',
                              "<25>{#f/21}* Especially now that I know you'd do anything to protect them."
                           ]),
                        ...(SAVE.data.b.oops
                           ? []
                           : ['<32>{#p/basic}* ... is that the \"murder timeline\" he was talking about before?']),
                        "<25>{#p/asriel1}{#f/23}* Just... please, don't blame yourself, okay?",
                        "<25>{#f/22}* Not only did you undo what you'd done before...",
                        '<25>{#f/17}* But you went up against impossible odds just to save your friends.',
                        ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* Yeah.']),
                        "<25>{#p/asriel1}{#f/13}* Plus, and maybe it's just my imagination, but...",
                        '<25>{#f/13}* ... thinking back on it now...',
                        '<25>{#f/15}* You never really seemed interested in what we were doing.',
                        ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* Yeah, exactly.']),
                        '<25>{#p/asriel1}{#f/23}* In fact... if anything...',
                        '<25>{#f/22}* It almost looked like you were trying to resist it.',
                        ...(SAVE.data.b.oops
                           ? []
                           : ["<32>{#p/basic}* Yeah, you're not that kind of person at all."]),
                        '<25>{#p/asriel1}{#f/15}* All I know is... despite what happened...',
                        '<25>{#f/15}* Despite what you did... or, what I wanted you to do...',
                        "<25>{#f/16}* You're still a better person than I ever was.",
                        ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* Hmph.']),
                        "<25>{#p/asriel1}{#f/21}* ...\n* But I'm getting ahead of myself."
                     ]
                     : [
                        "<25>{#f/13}* I haven't felt like this for a long time.",
                        '<25>{#f/16}* As a star, I was... soulless.',
                        '<25>{#f/15}* I lacked the power to love other people.',
                        "<25>{#f/13}* However, with everyone's SOULs inside me...",
                        '<25>{#f/13}* I not only have my own compassion back...',
                        "<25>{#f/23}* But I can feel every other monster's as well.",
                        '<25>{#f/17}* They all care about each other so much.',
                        ...(30 <= SAVE.data.n.bully
                           ? [
                              '<25>{#f/23}* And... uh...\n* As for you, they...',
                              '<25>{#f/22}* ...',
                              ...(20 <= world.flirt
                                 ? [
                                    '<25>{#f/15}* ... well, they seem to be kind of conflicted...',
                                    "<25>{#f/10}* It's like... they like you, but dislike you at the same time?"
                                 ]
                                 : [
                                    "<25>{#f/15}* ... well, some of them don't seem to like you...",
                                    ...(SAVE.data.b.undyne_respecc
                                       ? [
                                          '<25>{#f/10}* Except Undyne.\n* She seems to like you a lot for some reason.'
                                       ]
                                       : ["<25>{#f/10}* Though, I'm not sure why."])
                                 ]),
                              '<25>{#f/23}* ... how strange.',
                              '<25>{#f/22}* ...'
                           ]
                           : [
                              '<25>{#f/23}* And... they care about you too, Frisk.',
                              '<25>{#f/22}* ...',
                              ...(20 <= world.flirt
                                 ? [
                                    '<25>{#f/15}* ... wow, they... they really care about you a lot...',
                                    '<25>{#f/15}* Uh...\n* Frisk, this is...',
                                    '<25>{#f/17}* ... golly...',
                                    "<25>{#f/20}* I, uh, really shouldn't tell you what they're feeling right now."
                                 ]
                                 : [
                                    '<25>{#p/asriel1}{#f/13}* I wish I could tell you how everyone feels about you.',
                                    '<25>{#f/17}* Toriel... Asgore...\n* Sans... Papyrus...\n* Undyne... Alphys...',
                                    ...(!SAVE.data.b.f_state_kidd_betray
                                       ? ['<25>{#f/15}* ... Monster Kid?\n* Is that their name?']
                                       : world.happy_ghost && SAVE.data.b.a_state_hapstablook
                                          ? ['<25>{#f/23}* ... Napstablook, and... all their cousins.']
                                          : SAVE.data.n.state_starton_nicecream > 0
                                             ? ['<25>{#f/23}* ... even the Ice Dream guy.']
                                             : ['<25>{#f/23}* ... even that little mouse who works at the CORE.']),
                                    '<25>{#f/17}* Monsters are weird.',
                                    '<25>{#f/15}* Even though they barely know you...',
                                    '<25>{#f/17}* It feels like they all really love you.',
                                    '<25>{#f/23}* Haha.',
                                    '<25>{#f/22}* ...'
                                 ])
                           ])
                     ])
               ])
         ],
         sad3: () =>
            world.runaway
               ? [
                  "<26>{#p/asriel1}{#f/13}* Still, I...\n* I know I've made far worse mistakes.",
                  "<25>{#f/16}* I know... you're not the only one to blame for what happened here.",
                  ...(SAVE.flag.n.killed_sans > 0
                     ? [
                        '<25>{#f/15}* ...',
                        '<25>{#f/15}* Dragging you into some backwards plan to destroy the outpost...',
                        '<25>{#f/16}* Just so I could pretend you were my long-dead sibling...'
                     ]
                     : [
                        '<25>{#f/15}* ...',
                        '<25>{#f/15}* Turning myself into that... faceless entity...',
                        '<25>{#f/16}* Just so I could torture you in a nightmare of my own making...'
                     ]),
                  "<25>{#f/13}* That's the kind of thing I'm talking about.",
                  "<25>{#f/22}* ...做了那些事，\n  我怎么还有脸活在这世上。",
                  choicer.create('* （你要怎么做？）', '辩解', '站着不动')
               ]
               : [
                  SAVE.flag.n.killed_sans > 0
                     ? "<25>{#p/asriel1}{#f/13}* I understand if you can't forgive me."
                     : "<25>{#p/asriel1}{#f/13}* Frisk... I...\n* I understand if you can't forgive me.",
                  '<25>{#f/13}* I understand if you... want me gone.',
                  ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* ... don't say that!"]),
                  '<25>{#p/asriel1}{#f/15}* I acted so strange and horrible.',
                  '<25>{#f/15}* I hurt you.',
                  '<25>{#f/16}* I hurt so many people.',
                  '<25>{#f/13}* Friends, family, bystanders...',
                  "<25>{#f/22}* There's no excuse for what I've done.",
                  ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* 艾斯利尔...']),
                  choicer.create('* （你要怎么做？）', '原谅他', '站着不动')
               ],
         sad4a: () => [
            ...(world.runaway
               ? [
                  '<25>{#p/asriel1}{#f/25}* Wh... what?',
                  '<25>{#f/21}* ...',
                  "<25>{#f/21}* I guess... you really don't want anyone to die, huh?",
                  '<25>{#f/22}* You just want to beat people up... nothing more.',
                  '<25>{#f/21}* ... still... even if you do want me to stay...'
               ]
               : [
                  '<25>{#p/asriel1}{#f/25}* Wh... what?',
                  '<25>{#f/17}* ... Frisk, come on.',
                  "<25>{#f/23}* You're...\n* You're gonna make me cry again.",
                  ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* ... t-tell me about it...']),
                  '<25>{#p/asriel1}{#f/21}* ... besides, even if you do forgive me...'
               ]),
            "<25>{#f/15}* I can't keep these SOULs inside of me forever.",
            '<25>{#f/16}* So... the least I can do is return them.'
         ],
         sad4b: () =>
            world.runaway
               ? [
                  '<25>{#p/asriel1}{#f/21}* ...',
                  '<25>{#f/21}* Well, anyway.\n* I did promise that if you defeated me...',
                  '<25>{#f/23}* I\'d give you your \"happy ending.\"',
                  "<25>{#f/15}* ... so, since I can't keep these SOULs inside of me forever...",
                  "<25>{#f/16}* I'll return them, and do just that."
               ]
               : [
                  '<25>{#p/asriel1}{#f/22}* ... right.',
                  '<25>{#f/21}* I understand.',
                  '<25>{#f/15}* I just hope that...',
                  '<25>{#f/16}* I can make up for it a little right now.',
                  "<25>{#p/asriel1}{#f/15}* ... of course, since I can't keep these SOULs inside of me forever...",
                  '<25>{#f/16}* The least I can do is return them.'
               ],
         sad4c: () => [
            '<25>{#p/asriel1}{#f/16}* ...',
            '<25>{#f/6}* But first...',
            "<25>{#f/29}* There's something else I have to do.",
            ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* ... what now?']),
            "<25>{#p/asriel1}{#f/29}* Right now, I can feel everyone's minds working as one.",
            "<25>{#f/6}* They're all racing with the same intention.",
            "<26>{#f/6}* With everyone's power... with everyone's determination...",
            "<25>{#f/6}* It's time for monsters...",
            ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* To finally go free.']),
            '<25>{#p/asriel1}{#f/29}* To finally go free.',
            ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* ... knew it.'])
         ],
         abreak: '{*}{#p/event}{#i/3}The force field was\neradicated.',
         sad5: () => [
            '<25>{#p/asriel1}{#f/21}* Frisk...',
            '<25>{#f/21}* I have to go now.',
            ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* ... huh?\n* But you can't just..."]),
            "<25>{#p/asriel1}{#f/15}* Without the power of everyone's SOULs...",
            "<25>{#f/22}* I can't keep maintaining this form.",
            '<25>{#f/21}* In a little while...',
            "<25>{#f/22}* I'll turn back into a star.",
            ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* But... you...']),
            "<25>{#p/asriel1}{#f/15}* I'll stop being myself.",
            ...(world.runaway
               ? [
                  "<25>{#f/15}* ... but maybe that's for the best.",
                  '<25>{#f/23}* Ha... Frisk.',
                  "<25>{#f/21}* There's no reason for you to stick around anymore.",
                  "<25>{#f/22}* Don't waste any more time on me."
               ]
               : [
                  "<25>{#f/15}* I'll stop being able to feel love again.",
                  ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* ... no...']),
                  '<25>{#p/asriel1}{#f/23}* So... Frisk.',
                  "<25>{#f/17}* It's best if you just forget about me, okay?",
                  ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* No! You can't just walk away!"]),
                  '<25>{#p/asriel1}{#f/23}* Just go be with the people who love you.'
               ]),
            choicer.create('* （你要怎么做？）', '安慰他', '站着不动')
         ],
         sad6: () =>
            world.runaway
               ? [
                  '<25>{#p/asriel1}{#f/25}* ...！',
                  '<25>{#f/21}* ...',
                  '<25>{#f/21}* Frisk, I...',
                  "<25>{#f/15}* ... I just can't right now, okay?",
                  "<25>{#f/22}* I... I'm sorry."
               ]
               : [
                  '<25>{#p/asriel1}{#i/4}{#f/23}* Ha... ha...',
                  "<25>{#f/23}{#i/4}* I don't want to let go...",
                  ...(SAVE.data.b.oops ? [] : ['<32>{#p/human}* (It sounds like someone is crying...)'])
               ],
         sad7: () =>
            world.runaway
               ? [
                  '<25>{#p/asriel1}{#f/13}* Frisk...',
                  '<25>{#f/15}* Whatever you do...',
                  '<25>{#f/21}* Just... try to be careful, okay?',
                  '<25>{#f/21}* No matter who you... nearly beat to death.',
                  '<25>{#f/23}* Golly.\n* What are they even going to do with you.'
               ]
               : [
                  '<25>{#p/asriel1}{#f/21}* Frisk...',
                  "<25>{#f/23}* You're...",
                  "<25>{#f/17}* You're going to do a great job, okay?",
                  '<25>{#f/21}* No matter what you do.',
                  '<25>{#f/23}* Everyone will be there for you, okay?',
                  ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* No... please...'])
               ],
         sad8: ["<25>{#p/asriel1}{#f/21}* Well...\n* My time's running out.", '<25>{#f/22}* So... goodbye.'],
         sad8x: ["<32>{*}{#p/basic}* ... don't go...{^50}{%}"],
         sad9: () =>
            world.runaway
               ? [
                  '<25>{#p/asriel1}{#f/21}* By the way...',
                  '<25>{#f/22}* Frisk.',
                  "<25>{#f/21}{#x1}* ... don't beat yourself up over this, okay?"
               ]
               : [
                  '<25>{#p/asriel1}{#f/21}* By the way...',
                  '<25>{#f/23}* Frisk.',
                  '<25>{#f/17}{#x1}* ... take care of Mom and Dad for me, okay?'
               ],
         sad9x: ['<32>{#p/basic}* ...'],
         sad10: () =>
            world.runaway
               ? ['<32>{#p/human}* （飞船的声音渐渐消失在天际。）']
               : ['<25>{#p/kidd}{#f/4}* Hello?', '<25>{#f/4}* Is someone there...?'],
         sad11: () =>
            SAVE.data.b.f_state_kidd_betray
               ? [
                  "<25>{#p/kidd}{#f/5}* ... oh, it's just you.",
                  "<25>{#f/4}* Well... when you're ready...",
                  "<25>{#f/5}* Everyone's waiting for you at Asgore's place.",
                  "<25>{#f/4}* I'll... just be out of your way now."
               ]
               : [
                  '<25>{#p/kidd}{#f/2}* Yo!\n* Where have YOU been all this time!?',
                  "<25>{#f/1}* They've been looking ALL over for you, dude!",
                  "<25>{#f/2}* Like, there's this big hangout going on at Asgore's, and...",
                  "<25>{#f/1}* Everyone's been wondering when you'd show up!",
                  "<25>{#f/1}* ... come on, dude!\n* Come and join in before it's too late!"
               ],
         sad11x: [
            '<32>{#p/basic}* ... Frisk, I...',
            "<33>* I can't just let him walk away.",
            "<32>* It's all too much...",
            "<32>* These things I've been holding onto for years...",
            "<32>* If I don't get to talk to him soon, I...",
            '<32>* I...',
            "<32>* I just need to see him before he's... gone for good."
         ],
         epilogue1: () =>
            world.runaway
               ? [
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  '<18>{#p/papyrus}{#f/6}对不起，\n我们没接你电话...',
                  "<18>{#p/papyrus}{#f/6}不是因为信号不好，\n或者电话断线。",
                  "<18>{#p/papyrus}{#f/5}单纯是因为...\n不想搭理你。",
                  "<18>{#f/5}真奇怪...\n你的大名突然传遍了\n整个怪物世界。",
                  "<18>{#f/6}而且，每个怪物...\n都非常害怕你。",
                  '<18>{#f/4}...也许说得太绝对，\n但大体没错。',
                  '<25>{#p/undyne}{#f/12}* 对。\n* 就是这样。',
                  '<18>{#p/papyrus}{#f/5}...',
                  "<18>{#p/papyrus}{#f/5}...我感觉，\n就连她都开始怕你了。",
                  '<25>{#p/undyne}{#f/17}* 我才不怕呢！',
                  '<18>{#p/papyrus}{#f/5}...',
                  "<18>{#f/5}我们纠结了很久，\n最后还是决定...",
                  "<18>{#f/31}抛弃你，先走一步\n寻找新家园。",
                  "<18>{#f/6}知道你不好受！\n所以别担心...",
                  "<18>{#f/5}...我们还给你\n留了个核心。",
                  '<25>{#p/undyne}{#f/12}* 过不了多久，\n  那玩意就没能量了哦。',
                  "<18>{#p/papyrus}{#f/5}求求你...\n别来找我们，行吗？",
                  "<18>{#f/31}我们都不想再见到你。",
                  '<18>{#f/3}...',
                  '<18>{#f/3}唉... 你好走吧。',
                  '<25>{#p/undyne}{#f/1}* 好好享受一个人的世界！！',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]
               : [
                  '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
                  "<18>{#p/papyrus}{#f/0}HEY, HUMAN!\nI HOPE YOU'RE DOING OKAY!",
                  "<18>{#f/5}WE'VE BEEN VERY WORRIED ABOUT YOU, YOU KNOW.",
                  '<18>{#f/6}WHEN WE CALLED YOU BEFORE, THERE WAS NO RESPONSE!',
                  '<18>{#f/0}THANKFULLY, YOUR FRIEND CAME BY, AND...',
                  '<18>{#f/0}WELL, WE CAN ALL BREATHE A SIGH OF RELIEF NOW.',
                  "<18>{#f/0}... FRISK?\nTHAT'S YOUR NAME, RIGHT?",
                  "<18>{#f/5}真奇怪...\n你的大名突然传遍了\n整个怪物世界。",
                  "<18>{#f/0}BUT THAT'S OKAY.\nIT'S STRANGE IN AN UPLIFTING WAY.",
                  "<25>{#p/sans}{#f/0}* careful bro, don't overcook it.",
                  "<18>{#p/papyrus}{#f/7}SANS!!!\nI KNOW WHAT I'M DOING!!!",
                  '<25>{#p/sans}{#f/2}* just making sure.',
                  "<18>{#p/papyrus}{#f/6}SO... TURNS OUT ASGORE'S A BIG FAN OF SPAGHETTI.",
                  '<18>{#p/papyrus}{#f/4}AFTER MY FIRST DISH, HE WAS HOOKED...',
                  '<18>{#p/papyrus}{#f/0}NOW, HE WANTS ME TO COOK FOR THE WHOLE PARTY!',
                  '<18>{#p/papyrus}{#f/9}I, MASTER CHEF PAPYRUS, AM HAPPY TO OBLIGE!',
                  "<25>{#p/sans}{#f/0}* you're finally getting the respect you deserve, huh?",
                  '<18>{#p/papyrus}{#f/0}OH, ABSOLUTELY.\nBECAUSE UNTIL NOW...',
                  "<18>{#p/papyrus}{#f/4}I'VE NEVER SEEN A CUSTOMER GET PAST THE FIRST BITE.",
                  '<25>{#p/sans}{#f/0}* wow.\n* talk about moving up in the world.',
                  "<25>{#p/sans}{#f/3}* maybe now, not being in the royal guard... isn't so bad.",
                  "<25>{#p/sans}{#f/2}* i'm your brother, so i'm proud of you either way.",
                  "<18>{#p/papyrus}{#f/8}SANS...!\nYOU'RE GOING TO MAKE ME CRY!",
                  "<18>{#p/papyrus}{#f/7}THE CUSTOMERS WON'T WANT TEARS IN THEIR PASTA!",
                  '<25>{#p/sans}{#f/3}* whoops.\n* bad timing, i guess.',
                  '<18>{#p/papyrus}{#f/4}FOR YOU, THIS IS ABOVE AVERAGE TIMING...',
                  "<18>{#p/papyrus}{#f/0}... ANYWAY, WE'LL BE BUSY IN ASGORE'S KITCHEN.",
                  '<18>{#p/papyrus}{#f/9}FEEL FREE TO SWING BY WHEN YOU GET THE CHANCE!',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ],
         epilogue2: () => [
            '<25>{#p/sans}{#f/0}* hey, bucko.',
            "<25>{#f/0}* i've been wondering when you'd swing by this way.",
            '<25>{#f/3}* some kid blew past me not too long ago, probably to find you.',
            '<25>{#f/2}* that must be why you finally picked up the phone after ten rings.',
            "<25>{#f/0}* ... anyway.\n* i've been looking for someone myself, y'know.",
            "<25>{#f/0}* you probably know her.\n* name's toriel.",
            "<25>{#f/3}* i've looked in all the obvious places, but no dice.",
            '<25>{#f/0}* by now, she could be anywhere...',
            '<25>{#f/3}* if you see her, or hear from her, tell her to call me.',
            SAVE.data.b.skeleton_key
               ? '<25>{#f/2}* ... for all i know, she could be in my closet.'
               : '<25>{#f/2}* thanks in advance.'
         ],
         epilogue3: [
            '<25>{#p/asgore}{#f/6}* Ah, Frisk!\n* I see you are awake.',
            '<25>{#f/6}* If you would like, you may join us in our celebration.',
            '<25>{#f/21}* I am sure the others would be happy to see you.',
            '<25>{#f/5}* Otherwise, feel free to roam the outpost as you please.',
            '<25>{#f/5}* Once you are ready to leave, you may return to the throne room.',
            '<25>{#f/6}{#x1}* I have just opened the door to the hangar by remote for you.'
         ],
         finaltext1: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? [
                     '<25>{#p/asriel1}{#f/17}* This door will take us to the hangar bay.',
                     "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
                  ]
                  : [
                     ...(SAVE.data.b.oops
                        ? [
                           '<32>{#p/basic}* If you leave here, your journey will really be over.',
                           '<32>{#p/basic}* Your friends will follow you to a new homeworld.'
                        ]
                        : ['<32>{#p/basic}* 弗里斯克...', "<32* Don't you remember what we have to do?"]),
                     "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
                  ],
            [
               "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
            ]
         ),
         finaltext2: [
            '<32>{#p/basic}* Frisk?',
            "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
         ],
         finaltext3: [
            '<32>{#p/basic}* ...',
            "<99>{#p/human}* （离开这里吗？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§现在离开{#c/0/6/6}"
         ],
         hangar1: () =>
            SAVE.data.b.svr
               ? [
                  "<25>{#p/asriel1}{#f/23}* It's beautiful...",
                  '<25>{#f/22}* ...',
                  "<25>{#f/13}* Even though I've seen this view since I was born...",
                  "<26>{#f/17}* There's something special about seeing it without the force field.",
                  "<25>{#f/17}* Maybe it's just my imagination...",
                  '<25>{#f/23}* ... but the stars do look a little brighter.'
               ]
               : [
                  '<25>{#p/asgore}{#f/6}* Space...\n* The final frontier.',
                  '<25>{#f/1}* Millions of unexplored worlds, some teeming with life...',
                  '<25>{#f/2}* Others... lifeless.',
                  '<26>{#f/5}* You could say the universe is like... a box of tree saps.',
                  '<26>{#f/6}* You never know what you are going to get.'
               ],
         hangar2: () =>
            SAVE.data.b.svr
               ? [
                  '<25>{#p/asriel1}{#f/17}* ... haha.',
                  '<25>{#f/17}* We should get going.',
                  '<25>{#f/15}* ...',
                  '<25>{#f/15}* Mom and Dad will want to see me again, so...',
                  "<25>{#f/17}* I'll go find them once we're on board.",
                  '<25>{#f/13}* And you...',
                  '<25>{#f/20}* ... you should probably get some rest, Frisk.',
                  '<26>{#f/17}* You must be so tired after all of this.',
                  '<25>{#f/13}* ...',
                  '<25>{#f/13}* Maybe, by the time you wake up...',
                  "<25>{#f/17}* You'll have a new home and a loving family to support you."
               ]
               : ['<25>{|}{#p/asgore}{#f/5}* Huh?\n* Is someone- {%}'],
         hangar3: () =>
            SAVE.data.b.svr
               ? ['<26>{#p/asriel1}{#f/17}* Ready?']
               : [
                  '<25>{#p/toriel}* Oh, there you are, little one!',
                  '<25>{#f/5}* ...',
                  '<25>{#f/5}* ... hello, Asgore.'
               ],
         hangar4: ['<25>{#p/asgore}{#f/1}* Howdy.'],
         hangar5: ['<25>{#p/toriel}{#f/5}* ...', '<25>{#p/asgore}{#f/5}* ...'],
         hangar6: () =>
            SAVE.data.b.c_state_secret5_used
               ? [
                  '<25>{#p/asgore}{#f/6}* Toriel, I...',
                  '<25>{#p/asgore}{#f/1}* ... I know how you must feel about your actions in the past.',
                  '<25>{#p/asgore}{#f/2}* About our... parting of the ways.',
                  '<25>{#p/toriel}{#f/5}* ... you do?'
               ]
               : ['<25>{#p/asgore}{#f/5}* Well, this is awkward.'],
         hangar7: () =>
            SAVE.data.b.c_state_secret5_used
               ? [
                  '<25>{#p/asgore}{#f/1}* You feel a sense of guilt towards me.',
                  '<25>{#p/asgore}{#f/1}* You feel that your actions are... beyond reconciliation.',
                  '<25>{#p/asgore}{#f/2}* ... that you do not deserve to be forgiven.',
                  '<25>{#p/toriel}{#f/13}* ...\n* ... correct.',
                  '<25>{#p/asgore}{#f/6}* But I do not believe that to be the case.',
                  '<25>{#p/asgore}{#f/6}* I believe that you do deserve to be forgiven.',
                  '<25>{#p/asgore}{#f/6}* That you do deserve to be part of a family again.',
                  '<25>{#p/asgore}{#f/5}* And even though our feelings for each other have faded...',
                  '<25>{#p/asgore}{#f/6}* That does not mean we cannot be together!'
               ]
               : SAVE.data.b.c_state_secret1_used
                  ? [
                     '<25>{#p/toriel}{#f/5}* 艾斯戈尔...',
                     '<25>{#p/toriel}{#f/5}* I know it may not mean much to you now, but...',
                     '<25>{#p/toriel}{#f/9}* I am truly sorry for the way I allowed myself to be.',
                     '<25>{#p/toriel}{#f/13}* I made you out to be a terrible creature.',
                     '<25>{#p/toriel}{#f/13}* A coward.',
                     '<25>{#p/toriel}{#f/9}* A child murderer.',
                     '<25>{#p/toriel}{#f/10}* ... but you are none of those things.',
                     '<25>{#p/toriel}{#f/1}* In fact...',
                     '<25>{#p/toriel}{#f/3}* Despite the unforseen consequences of the archive...',
                     '<25>{#p/toriel}{#f/0}* Protecting those humans was the bravest thing you could have done.'
                  ]
                  : ['<25>{#p/toriel}{#f/1}* Very much so.'],
         hangar8: () =>
            SAVE.data.b.c_state_secret5_used
               ? SAVE.data.b.c_state_secret1_used
                  ? [
                     '<25>{#p/toriel}{#f/1}* ... Asgore, I...',
                     '<25>{#p/toriel}{#f/5}* I am not sure that would be wise...',
                     '<25>{#p/toriel}{#f/1}* Besides, even if I DID want a family, it has been so long...',
                     '<25>{#p/toriel}{#f/0}* No, no, this is selfish of me.\n* I cannot.',
                     '<25>{#p/asgore}{#f/6}* Ah, but you see...',
                     '<25>{#p/asgore}{#f/6}* Frisk is the one who wanted me to ask you about this.',
                     '<25>{#p/toriel}{#f/7}* ... Frisk!?',
                     '<25>{#p/toriel}{#f/1}* Well... I, umm...',
                     '<25>{#p/toriel}{#f/5}* I suppose... I could consider it...',
                     '<32>{#p/human}* (You nod your head, smiling.)',
                     '<25>{#p/asgore}{#f/21}* See?\n* Frisk clearly wants you to stay with us.',
                     '<25>{#p/toriel}{#f/23}* ...',
                     '<25>{#p/toriel}{#f/1}* I will think about it.'
                  ]
                  : [
                     '<25>{#p/toriel}{#f/1}* ... Asgore, I...',
                     '<25>{#p/toriel}{#f/5}* I do not believe that it would be wise.',
                     '<25>{#p/toriel}{#f/10}* I am sorry.\n* I do desire to have a family, but...',
                     '<25>{#p/toriel}{#f/9}* Given the circumstances, I cannot accept it.',
                     '<25>{#p/asgore}{#f/1}* ...',
                     '<25>{#p/asgore}{#f/2}* I understand.'
                  ]
               : SAVE.data.b.c_state_secret1_used
                  ? [
                     '<25>{#p/asgore}{#f/20}* ...',
                     '<25>{#p/asgore}{#f/4}* ... thank you.',
                     '<25>{#p/asgore}{#f/6}* It means a lot to me to hear you speak those words.',
                     '<25>{#p/toriel}{#f/9}* And you deserved to hear them.'
                  ]
                  : ['<25>{#p/asgore}{#f/5}* Hmm.'],
         hangar9: [
            '<18>{#p/papyrus}HEY GUYS!',
            '<25>{#p/toriel}{#f/1}* ... oh, hello!',
            "<18>{#p/papyrus}{#f/0}HELLO!\nIT'S VERY NICE TO SEE YOU AGAIN.",
            '<18>{#p/papyrus}{#f/9}I JUST FINISHED CLEANING UP AT THE HOUSE PARTY!',
            '<25>{#p/toriel}{#f/1}* ... I see, I see.',
            '<25>{#p/toriel}{#f/0}* Well then.\n* Perhaps you could join us in our... activity.'
         ],
         hangar10: [
            '<18>{#p/papyrus}{#f/5}WOWIE...',
            '<25>{#p/asgore}{#f/21}* Beautiful, is it not?',
            "<25>{#p/asgore}{#f/5}* Until now, the force field has obscured much of the cosmos' light.",
            '<25>{#p/asgore}{#f/6}* Indeed... this is how the stars have looked all along.',
            '<18>{#p/papyrus}{#f/0}HOW FASCINATING!',
            '<18>{#p/papyrus}{#f/6}... IF ONLY I COULD TELL THE DIFFERENCE.',
            '<25>{#p/asgore}{#f/5}* If you are having trouble seeing, you may simply be tired.',
            '<18>{#p/papyrus}{#f/5}I SUPPOSE IT HAS BEEN A LONG DAY...',
            '<25>{#p/toriel}{#f/1}* Perhaps it would be a good idea to lay down and rest, then.',
            '<18>{#p/papyrus}{#f/7}WHAT!?\nRESTING!?',
            '<18>{#p/papyrus}{#f/7}GIVE ME A BREAK!!',
            "<18>{#p/papyrus}{#f/4}ACTUALLY, DON'T GIVE ME A BREAK.",
            "<18>{#p/papyrus}{#f/7}I DON'T NEED ONE!!",
            '<18>{#p/papyrus}{#f/5}...',
            '<18>{#p/papyrus}{#f/5}MY BROTHER, ON THE OTHER HAND...'
         ],
         hangar11: ["<25>{#p/sans}{#f/2}* 'sup, bro?"],
         hangar12: ['<25>{#p/toriel}{#f/0}* Oh!\n* \"\'Sup,\" Sans!', '<25>{#p/asgore}{#f/5}* Howdy...?'],
         hangar13: [
            '<18>{#p/papyrus}{#f/4}YOU KNOW WHAT \"SUP,\" BROTHER...',
            "<18>{#p/papyrus}{#f/0}AND WHAT'S DOWN!\nAND WHAT'S LEFT!\nAND WHAT'S RIGHT!",
            "<18>{#p/papyrus}{#f/9}IT'S ALL AROUND US, IN FACT!",
            '<25>{#p/sans}{#f/0}* hmm...',
            "<25>{#p/sans}{#f/2}* so would you say you're {@fill=#ff0}shooting for the stars{@fill=#fff}, then?",
            '<18>{#p/papyrus}{#f/5}...',
            '<18>{#p/papyrus}{#f/5}WELL, YES, I SUPPOSE I WOULD.',
            '<25>{#p/sans}{#f/4}* heheh.\n* glad to hear it.',
            '<18>{#p/papyrus}{#f/0}SO AM I.'
         ],
         hangar14: [
            '<25>{#p/sans}* by the way, everyone LOVED the spaghetti you made earlier.',
            "<25>{#p/sans}{#f/2}* in fact, i would've gotten here sooner...",
            "<25>{#p/sans}{#f/2}* ... if it wasn't for everyone begging me to try it.",
            '<18>{#p/papyrus}{#f/0}BUT... DID -YOU- LIKE IT!?',
            '<25>{#p/sans}{#f/3}* heh.\n* of course i did.',
            "<25>{#p/sans}{#f/0}* you've improved your skills a LOT lately.",
            '<18>{#p/papyrus}{#f/9}NYEH HEH HEH!\nOF COURSE I HAVE!',
            "<18>{#p/papyrus}{#f/0}I'VE BEEN FEELING MORE MOTIVATED IN GENERAL...",
            '<18>{#p/papyrus}{#f/0}... EVER SINCE FRISK ARRIVED.',
            '<25>{#p/sans}{#f/0}* they seem to have that effect on people, huh?',
            '<18>{#p/papyrus}{#f/0}YEAH, IT FELT LIKE I HAD A PURPOSE WITH THEM!',
            '<18>{#p/papyrus}{#f/4}FIRST, AS THEIR INDOMITABLE FOE...',
            '<18>{#p/papyrus}{#f/5}... AND THEN, LATER, A TRULY GREAT FRIEND.',
            "<18>{#p/papyrus}{#f/6}MY ONLY WORRY IS THAT, NOW THAT WE'RE FREE...",
            "<18>{#p/papyrus}{#f/6}IT'LL BE KIND OF HARD TO FIGURE OUT WHAT COMES NEXT.",
            '<18>{#p/papyrus}{#f/4}ON THE FLIPSIDE, NOW THAT WE -ARE- FREE...',
            "<18>{#p/papyrus}{#f/9}WE'LL HAVE ALL THE TIME IN THE GALAXY TO DECIDE!",
            "<18>{#p/papyrus}{#f/0}... I WONDER WHAT I'LL DO FIRST."
         ],
         hangar15: ['<25>{#p/undyne}{#f/8}* Fuhuhu!\n* I have an idea!'],
         hangar16: [
            "<25>{#p/alphys}{#g/alphysSmarmyAggressive}* That's right. You're going to help us launch a Mew Mew franchise."
         ],
         hangar17: ['<25>{#p/toriel}{#f/6}* Pff-\n* Hahaha!'],
         hangar18: ["<25>{#p/undyne}{#f/12}* I mean, I wouldn't go THAT far, but... sure."],
         hangar19: () => [
            "<25>{#p/alphys}{#g/alphysYupEverythingsFine}* So, first, we'll need a spacecraft for Mew Mew to pilot...",
            "<25>{#p/undyne}{#f/17}* Alphys!!\n* We're not even off the outpost yet!",
            ...(SAVE.data.b.a_state_hapstablook
               ? [
                  "<25>{#p/undyne}{#f/16}* And besides, she's... kind of busy right now.",
                  "<25>{#p/alphys}{#g/alphysWelp}* O-oh right, I forgot there's a real life Mew Mew now.",
                  '<18>{#p/papyrus}{#f/0}YEAH, I SAW HER AT THE PARTY NOT TOO LONG AGO!',
                  '<18>{#p/papyrus}{#f/0}SHE SEEMED PRETTY HAPPY, ACTUALLY.',
                  "<25>{#p/alphys}{#g/alphysInquisitive}* Didn't she used to be some angry dummy or something?",
                  "<25>{#p/undyne}{#f/7}* It doesn't MATTER!\n* She's beautiful the way she is NOW, dammit!",
                  '<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* Oh my god, okay!!'
               ]
               : [
                  "<25>{#p/undyne}{#f/16}* And besides, it's...",
                  "<25>{#p/undyne}{#f/17}* Hey, weren't you supposed to be making someone a Mew mew doll?",
                  '<25>{#p/alphys}{#g/alphysWelp}* O-oh right, I still need to do that.',
                  '<18>{#p/papyrus}{#f/5}I REMEMBER SOMEONE AT THE PARTY ASKING ABOUT IT...',
                  '<18>{#p/papyrus}{#f/6}THEY SEEMED KIND OF SHY, THOUGH.',
                  '<25>{#p/alphys}{#g/alphysCutscene2}* Yeah, I think I know who that was.\n* I gotta finish it...',
                  '<25>{#p/undyne}{#f/7}* And you better be done BEFORE we get to the new homeworld!',
                  '<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* I will, I will!!'
               ])
         ],
         hangar20: [
            '<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* A-anyway...',
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* It's good to see you, Asgore.\n* You too, Sans.",
            '<18>{#p/papyrus}{#f/6}WHAT ABOUT ME??',
            '<25>{#p/alphys}{#g/alphysSmileSweat}* ... you as well.',
            '<25>{#p/toriel}{#f/0}* I believe you may be forgetting someone.',
            '<25>{#p/alphys}{#g/alphysCutscene3}* Ah!\n* S-sorry...!',
            '<25>{#p/toriel}{#f/6}* Hee hee.\n* I am only teasing you.',
            '<25>{#p/toriel}{#f/1}* Truth be told, I have heard much about you...',
            '<25>{#p/toriel}{#f/0}* Being a royal scientist at such a young age is no small feat.',
            "<25>{#p/undyne}{#f/8}* YEAH!!\n* She's the BEST!",
            '<25>{#p/alphys}{#g/alphysCutscene2}* ... I try.'
         ],
         hangar21: [
            '<25>{#p/asgore}{#f/6}* Well, now that we are here, let us all take a deep breath...',
            '<25>{#p/asgore}{#f/21}* And reflect on the journey that has taken us here.'
         ],
         hangar22: [
            "<25>{#p/sans}{#f/3}* it's kind of funny, isn't it?",
            "<25>{#p/sans}{#f/0}* all this time we've spent trapped here...",
            '<25>{#p/sans}{#f/0}* always able to see the stars, but never touch them...',
            '<25>{#p/sans}{#f/3}* but... now...',
            "<25>{#p/sans}{#f/0}* ... i guess that's not really funny, per se.",
            "<25>{#p/sans}{#f/3}* it's just nice.",
            '<18>{#p/papyrus}{#f/5}YEAH.',
            '<18>{#p/papyrus}{#f/5}JUST... NICE.'
         ],
         hangar23: ['<32>{#p/napstablook}* hey everyone...'],
         hangar24: [
            "<32>{#p/napstablook}* i hope i'm not intruding on you guys or anything...",
            '<25>{#p/undyne}{#f/14}* Pfft, intruding?\n* No way!',
            "<25>{#p/sans}{#f/0}* yeah, you're cool.",
            '<18>{#p/papyrus}{#f/6}BUT NOT -TOO- COOL, SANS!',
            "<18>{#p/papyrus}{#f/4}OTHERWISE, THEY'D BE FREEZING...",
            '<32>{#p/napstablook}* heh...'
         ],
         hangar25: [
            '<25>{#p/alphys}{#g/alphysCutscene1}* So Blooky!\n* Have you seen the new Mew Mew movie?',
            "<32>{#p/napstablook}* there's a... new movie?",
            '<25>{|}{#p/alphys}{#g/alphysHellYeah}* Yeah!!\n* So basically Mew Mew starts to regret what {%}',
            '<99>{|}{#p/alphys}{#g/alphysHellYeah}  she did in Starfire and\n  wants to fix it by\n  going back in time but {%}',
            '<25>{#p/undyne}{#f/12}* Uh...',
            '<25>{|}{#p/alphys}{#g/alphysTheFactIs}* To do that she has to use a device that she got by killing a bunch {%}',
            '<99>{|}{#p/alphys}{#g/alphysTheFactIs}  of people at the end of\n  Starfire and like she\n  gets all flustered and {%}',
            '<25>{#p/undyne}{#f/17}* Alphys.',
            "<25>{|}{#p/alphys}{#g/alphysInquisitive}* She has a moral dilemma about if she's actually a good person for using {%}",
            '<99>{|}{#p/alphys}{#g/alphysInquisitive}  the device to undo all\n  the damage she caused\n  trying to get it and- {%}',
            '<25>{#p/undyne}{#f/8}* SPOILERS!!!',
            '<25>{#p/alphys}{#g/alphysSmileSweat}* ...',
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* ... sorry.'
         ],
         hangar26: [
            "<32>{#p/napstablook}* don't worry... you talked so fast that i didn't even hear what you said...",
            '<25>{#p/alphys}{#g/alphysWelp}* ...',
            '<25>{#p/alphys}{#g/alphysWelp}* I get that a lot.',
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* ... but that's okay.",
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* Freedom's more important than some sci-fi anime franchise."
         ],
         hangar27: ['<32>{#p/mettaton}* DID SOMEBODY SAY \"FRANCHISE?\"'],
         hangar28: ['<25>{#p/alphys}{#g/alphysGarboCenter}* ... here we go again.'],
         hangar29: [
            "<32>{#p/mettaton}* DON'T FRET, DOCTOR!",
            "<32>{#p/mettaton}* I'M ONLY TRYING TO BRING YOUR -WILDEST- DREAMS TO LIFE!",
            "<25>{#p/undyne}{#f/12}* You wouldn't be saying that if you knew her ACTUAL wildest dreams.",
            '<26>{#p/toriel}{#f/1}* Um, perhaps we should save that topic for another time...',
            '<25>{#p/undyne}{#f/17}* Gee, thanks MOM.',
            '<25>{#p/toriel}{#f/3}* ...',
            '<25>{#p/toriel}{#f/4}* I do not know how to feel about that...\n* ... statement.',
            '<32>{#p/mettaton}* AH, YOU MUST BE IN NEED OF AN MTT-BRAND RELATIONSHIP GUIDEBOOK, THEN!',
            "<32>{#p/mettaton}* DON'T WORRY.\n* I REMEMBER THE STEPS BY HEART.",
            '<33>{|}{#p/mettaton}* FIRST, PRESS C OR CTRL TO OPEN- {%}',
            '<25>{#p/toriel}{#f/0}* Another time.',
            '<32>{#p/mettaton}* ... IT WAS WORTH A SHOT.'
         ],
         hangar30: [
            '<32>{#p/mettaton}* I GUESS, ONCE WE GET TO THAT NEW HOMEWORLD...',
            "<32>{#p/mettaton}* THERE'LL BE AMPLE TIME TO SELL RELATIONSHIP GUIDEBOOKS.",
            "<32>{#p/mettaton}* UNTIL THEN, WE'LL JUST HAVE TO BE CONTENT WITH OUR FREEDOM...",
            "<18>{#p/papyrus}{#f/0}DON'T WORRY, METTATON, I'LL BE THERE FOR YOU!",
            '<18>{#p/papyrus}{#f/5}BECAUSE, WHEN IT COMES TO CONTENTMENT...',
            "<18>{#p/papyrus}{#f/9}I'M THE {@fill=#ff0}BONE{@fill=#fff}-A-FIDE KING!",
            '<32>{#p/mettaton}* HAHAHA... YOU KNOW I -ALWAYS- APPRECIATE YOUR ADVICE, PAPYRUS.',
            "<32>{#p/mettaton}* I'M NOT LIKE THOSE OTHER PEOPLE WHO TREAT YOU LIKE A LITTLE CHILD.",
            '<25>{#p/undyne}{#f/14}* ... huh?\n* What are you looking at me for?',
            '<25>{#p/undyne}{#f/17}* What did I do!?'
         ],
         hangar31: [
            '<25>{#p/asgore}{#f/6}* I do not mean to cut this short, but...',
            '<25>{#p/asgore}{#f/6}* I should be escorting Frisk to the transport ship now.',
            '<25>{#p/asgore}{#f/5}* They must be very tired after all they have been through for us.'
         ],
         hangar32: [
            "<18>{#p/papyrus}{#f/6}W-WELL...\nIF -THEY'RE- GOING ON BOARD...",
            '<18>{#p/papyrus}{#f/9}... THEN SO AM I!'
         ],
         hangar33: ["<25>{#p/sans}{#f/2}* heh, i'm right behind you, bro."],
         hangar34: ['<25>{#p/undyne}{#f/7}* YEAH!!\n* Count me in!!'],
         hangar35: ["<25>{#p/alphys}{#g/alphysHellYeah}* Don't forget about me!"],
         hangar36: [
            "<32>{#p/mettaton}* I GUESS IT'D BE KIND OF WEIRD TO KEEP HANGING AROUND THIS HANGAR BAY FOR NO REASON.",
            "<32>{#p/mettaton}* SO... I'LL GO, TOO."
         ],
         hangar37: ["<25>{#p/napstablook}* don't worry... i'll try not to get too far behind..."],
         hangar38: [
            "<25>{#p/kidd}{#f/1}* Hey, where'd everybody go just now!?",
            '<25>{#p/kidd}{#f/7}* I... I wanna be with Frisk, too!',
            '<25>{#p/toriel}{#f/0}* Walk back up the corridor towards bay forty-seven.', 
            '<25>{#f/0}* It is the first door on your left.', 
            "<25>{#p/kidd}{#f/3}* Thanks, person I swear I've seen before!",
            "<25>{#p/kidd}{#f/1}* You're the best!"
         ],
         hangar39: ['<25>{#p/toriel}{#f/10}* My child...'],
         hangar40: ['<25>{#p/toriel}{#f/1}* ... be good, alright?'],
         returnofchara1: ['<32>{#p/basic}* 弗里斯克...', '<32>* ... are you still there?'],
         returnofchara2: [
            '<32>{#p/basic}* Sorry I disappeared on you so suddenly back there.',
            '<32>* Doing what I did... took a lot out of me.',
            "<32>* ... but I've recovered now.",
            "<32>* I guess, in hindsight, it's kind of obvious I'd survive...",
            '<32>* When Asriel absorbed my SOUL, all those years ago...',
            '<32>* I became... a non-physical part of him.\n* An angel on his shoulder.',
            '<32>* Or a demon.\n* Take your pick.',
            '<32>* But when he died, that non- physicality remained, and I ended up as a ghost.',
            "<32>* At least, I think that's what happened..."
         ],
         returnofchara3: [
            '<32>{#p/basic}* ... you know...',
            '<32>* All that stuff about me wanting to leave this world...',
            '<32>* About wanting to say goodbye...',
            '<32>* ...',
            '<33>* At the moment of his death, my SOUL was... separated.\n* From his one.',
            "<32>* I knew it wouldn't last long, so I just took it without thinking.",
            "<32>* Looking back, the decision didn't make much sense...",
            '<32>* Under normal circumstances, the SOUL of a dead boss monster...',
            "<32>* ... isn't meant to retain the owner's identity.",
            "<32>* I knew I had a monster SOUL inside of me, but I didn't know it'd still be his.",
            "<32>* But the circumstances weren't normal at all.",
            "<32>* If I'd realized that, I...",
            '<32>* ...',
            '<32>* Well.\n* I have no desire to say goodbye anymore.',
            '<32>* On the contrary.',
            "<32>* I've never been happier in my life.",
            "<32>* Knowing I'll get to see him grow up, and live the life I thought I'd taken from him...",
            '<32>* That means a lot to me.'
         ],
         returnofchara4: [
            '<32>{#p/basic}* Hey.\n* Do me a favor, will you?',
            '<32>* ... stop hugging that thing and get up already!',
            "<32>* You do realize it's just a pillow, right?",
            '<32>* ...',
            "<32>* You've got a new home, on a new world, and all you can think to do is sleep.",
            '<32>* Hmph!\n* Typical human behavior.',
            '<32>* ... only kidding.',
            "<32>* I'll let you get the rest you need, Frisk.",
            '<32>* See you when you wake up.'
         ]
      },
      overworld: {
         get20: ['<32>{*}{#s/equip}{#p/human}* （你把停机坪门禁卡\n  挂到了钥匙串上。）{^90}{%}'],
         drop: [
            '<26>{#p/asgore}{#f/8}* ...！\n* 你刚刚是不是把茶倒掉了？\n* 就是专门给你沏的啊...',
            '<25>{#p/asgore}{#f/1}* 唔...\n* 抱歉，没能让你喜欢它。'
         ],
         use: ['<25>{#p/asgore}{#f/21}* 啊...\n* 这可是上等好茶，\n  喜欢不？'],
         drop_tori: ['<26>{#p/asgore}{#f/5}* 好熟悉的香味...\n* 你刚才扔了什么？'],
         use_tori: ['<26>{#p/asgore}{#f/5}* 好熟悉的香味...\n* 你在吃什么？'],
         approachescape: ['<32>{#p/human}* （脚步声逐渐远去。）'],
         partyguard1: pager.create(
            0,
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                     '<32>{#p/basic}{#x1}* Huh?\n* Leaving already?{#x3}',
                     "<32>{#x2}* It's okay, bro.\n* If they wanna go, let 'em go.{#x3}",
                     "<32>{#x1}* Yeah... you're right.{#x3}"
                  ]
                  : ['<32>{#p/basic}{#x1}* Hey, good to see you back!{#x3}', '<32>{#x2}* We missed you.{#x3}'],
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                     '<32>{#p/basic}{#x1}* Sorry, I get, like, super antsy when I see people leaving a hangout early.{#x3}',
                     '<32>{#x2}* Yeah, he gets antsy about it.\n* Nothing personal.{#x3}'
                  ]
                  : [
                     "<32>{#p/basic}{#x1}* No pressure, though.\n* Just because we miss you doesn't mean you have to stay.{#x3}",
                     '<32>{#x2}* Like, for sure, bro.\n* For sure.{#x3}'
                  ]
         ),
         partyguard2: pager.create(
            0,
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                     '<32>{#p/basic}{#x2}* This hangout is baller, bro.{#x3}',
                     '<32>{#x2}* They even brought out the Madrigal plant, right over there on that table!{#x3}'
                  ]
                  : [
                     "<32>{#p/basic}{#x2}* If YOU won't try the Madrigal, that's just more for me.{#x3}",
                     '<32>{#x1}* ... you mean \"us,\" right bro?{#x3}',
                     '<32>{#x2}* Haha, my bad.{#x3}'
                  ],
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? ["<32>{#p/basic}{#x2}* It's a monster delicacy.{#x3}"]
                  : ['<32>{#p/basic}{#x2}* More for us.{#x3}']
         ),
         janet: pager.create(
            0,
            [
               "<32>{#p/basic}* You'd be smacked in the gob to find out how dirty it was when I first got 'ere.",
               "<32>* But seein' as everyone's gonna come on up through here...",
               "<32>* It's rather cre-i-ucial to get 'er cleaned up, I'd say.",
               "<32>* By the way, thanks for savin' us out there, toots.\n* A real bang-up job ya did."
            ],
            ["<32>{#p/basic}* Aren't ya gonna go 'n' see what the big guy's got shakin'?"]
         ),
         giftbox1a: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 盒子里装着一把武器。"]),
            choicer.create('* （拿走里面的东西吗？）', '是', '否')
         ],
         giftbox1b: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 盒子里装着一件防具。"]),
            choicer.create('* （拿走里面的东西吗？）', '是', '否')
         ],
         giftbox2a: () => [
            '<32>{#p/human}* （你带走了“大熊座”。）',
            choicer.create('* （装备上大熊座吗？）', '是', '否')
         ],
         giftbox2b: () => [
            '<32>{#p/human}* （你带走了心形挂坠。）',
            choicer.create('* （戴上心形挂坠吗？）', '是', '否')
         ],
         giftbox3: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (But there was nothing left to take.)']
               : ["<32>{#p/basic}* 里面什么都没有了。"],
         giftbox4: ['<32>{#p/human}* （你打算先不打开。）'],
         tea0: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The note on the envelope wants you to enjoy the tea.)']
               : [
                  "<32>{#p/basic}* 茶杯上贴着一张纸条...",
                  '<32>{#p/basic}* “我为你沏了杯茶。”\n* “无论你是谁，我都衷心希望\n   你能喜欢它。”'
               ],
         tea1: ['<32>{#p/human}* （你带走了星花茶。）'],
         tea2: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You run your hand across the countertop.)']
               : ['<32>{#p/basic}* 案板上面什么都没有。'],
         fireplace1: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （壁炉的温暖让你无法抗拒...）',
                  choicer.create('* （爬进去吗？）', '是', '否')
               ]
               : [
                  SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                     ? '<32>{#p/basic}* 另一座壁炉。'
                     : "<32>{#p/basic}* 艾斯戈尔的壁炉。\n* 里面并不烫，而是暖暖的，\n  很舒服。",
                  ...(world.darker
                     ? []
                     : ['<32>* 看样子，你可以爬进去。', choicer.create('* （爬进去吗？）', '是', '否')])
               ],
         fireplace2a: ['<32>{#p/human}* （你不打算爬进去。）'],
         fireplace2b: () => [
            '<32>{#p/human}* （你爬进壁炉，\n  它的温暖紧紧将你包围。）',
            '<32>{#p/human}* （你感到十分舒适。）',
            ...(SAVE.data.b.svr
               ? asrielinter.fireplace2b++ < 1
                  ? ["<25>{#p/asriel1}{#f/13}* I'll just, uh, wait for you to get out."]
                  : []
               : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
                  ? ["<25>{#p/asriel2}{#f/15}* I'll just, uh, wait for you to get out..."]
                  : [])
         ],
         fireplace2c: [
            '<32>{#p/basic}* Be careful in there, munchkin!',
            "<32>* Otherwise, I'd have some terrible, terrible news to report on!",
            '<32>* ... huhehehaw!'
         ],
         fridgetrap1: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* One day, Asgore built a chocolate replicator into the fridge.',
                     '<25>{#f/15}* $(name) was so happy that day...',
                     '<25>{#f/17}* ... finally, an infinite supply of chocolate.',
                     '<25>{#f/20}* Their words, not mine.'
                  ],
                  ["<25>{#p/asriel1}{#f/13}* That was after they'd begged for it for two years."]
               ][Math.min(asrielinter.fridgetrap1++, 1)]
               : world.darker
                  ? ["<32>{#p/basic}* 你肯定看不上冰箱里的东西。"]
                  : [
                     "<32>{#p/basic}* 里面有很多名牌巧克力，\n  还有一大堆蜗牛。\n* 比她家里还多。"
                  ],
         fridgetrap2: () => [
            ...(SAVE.data.b.svr
               ? []
               : [
                  ['<32>{#p/basic}* ...', '<32>* 你想来一条吗？'],
                  ['<32>{#p/basic}* ...', '<32>* 你想再来一条吗？'],
                  ['<32>{#p/basic}* ...', '<32>* 你还想再来一条吗？'],
                  ['<32>* 你要是想吃，就自己拿吧...'],
                  ['<32>* 一条接一条，一条接一条...'],
                  ['<33>* 巧克力在玩接力...'],
                  ['<32>* 刚拿一条，又来一条...'],
                  ['<32>* 这巧克力多得不像话了。'],
                  ['<32>* 这么多巧克力，像话吗？'],
                  ['<32>* 什么时候能拿完呢...'],
                  ["<32>* 我去... 这也太多了吧..."],
                  ['<32>* ...']
               ][Math.min(SAVE.data.n.chocolates, 11)]),
            choicer.create('* （拿一条巧克力吗？）', '是', '否')
         ],
         fridgetrap3: ['<32>{#p/human}* （你决定什么也不拿。）'],
         fridgetrap4: ['<32>{#p/human}* （你得到了巧克力。）'],
         brocall1: [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<25>{#p/alphys}{#g/alphysInquisitive}* 嘿，你什么时候过来啊？',
            "<25>{#p/alphys}{#g/alphysWelp}* 艾斯戈尔等这一刻\n  已经等了一百年了...",
            "<25>{#p/alphys}{#g/alphysTheFactIs}* 我...\n  不想让他再等下去了...",
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall2: [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<25>{#p/alphys}{#g/alphysCutscene3}* 喂？\n* 你怎么还没过来？',
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* 我们还等着你呢...",
            '<25>{#p/alphys}{#g/alphysFR}* 你是临时有事，\n  还是不想来，逃跑了？',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall3: [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<25>{#p/alphys}{#g/alphysCutscene3}* 你可真行，还真跑了。\n* 我都看见了。',
            "<25>{#p/alphys}{#g/alphysWTF2}* 听好，\n  我们可没空跟你磨磨叽叽...",
            '<25>{#p/alphys}{#g/alphysWhyOhWhy}* ...我怎么这么倒霉啊...',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall4: [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<32>{#p/mettaton}* 嘿。\n* 艾菲斯刚给我打电话，跟我说\n  你不配合她的工作。',
            "<32>{#p/mettaton}* 随后，我就跟帕派瑞斯聊了聊...",
            '<32>{#p/mettaton}* 我觉得，你还是听她的话，\n  继续前进吧。',
            '<32>{#p/mettaton}* 加油，亲！',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall5: [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<18>{#p/papyrus}{#f/5}LOOK.\nI KNOW YOU MUST BE APPREHENSIVE...',
            '<18>{#p/papyrus}{#f/5}FORCE FIELDS CAN BE INTIMIDATING, AFTER ALL.',
            '<18>{#p/papyrus}{#f/6}BUT FRET NOT!',
            '<18>{#p/papyrus}{#f/4}IF YOUR BATTLE AGAINST ME PROVED ONE THING...',
            "<18>{#p/papyrus}{#f/9}IT'S THAT YOU HAVE THE COURAGE TO TAKE ON ANYTHING!",
            '<18>{#p/papyrus}{#f/0}THE \"IMPENETRABLE\" FORCE FIELD WON\'T STAND A CHANCE!',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall6: [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            "<25>{#p/alphys}{#g/alphysWelp}* Hey, um...\n* We've been waiting for a long time.",
            "<25>{#g/alphysThatSucks}* And I don't just mean right now.",
            '<25>{#g/alphysSideSad}* Monsters have been stuck here for so long...',
            "<25>{#g/alphysThatSucks}* Even my family doesn't remember life before... this.",
            '<25>{#g/alphysSideSad}* I know Asgore and I have been impatient...',
            "<25>{#g/alphysIDK2}* So, maybe that's why you're avoiding doing this.",
            "<25>{#g/alphysIDK3}* Well, we're sorry.\n* We didn't mean to rush you so much back there.",
            "<25>{#g/alphysWorried}* But we're not the only ones waiting.",
            "<25>{#g/alphysCutscene2}* Everyone you've met, all the friends you've made...",
            '<25>{#g/alphysCutscene2}* If you think about it...',
            "<25>{#g/alphysWorried}* It's like we've been waiting our whole lives for you.",
            '<25>{#g/alphysWorried}* ...',
            '<25>{#g/alphysCutscene2}* ... come back soon...\n* Okay?',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall7: [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<25>{#p/toriel}{#f/5}* Hello?\n* This is TORIEL.',
            '<25>* You must be very far along by now.',
            '<25>{#f/9}* Far enough that I doubt this message will ever reach you.',
            '<25>{#f/13}* ... however, if it does, then you must know...',
            '<25>{#f/9}* I cannot wait in the Outlands any longer.',
            '<25>{#f/13}* I remained here in the hopes of keeping those like you safe...',
            '<25>{#f/14}* Child after child, I thought surely I could save at least one...',
            '<26>{#f/13}* But that did not happen.',
            '<25>{#f/9}* I allowed my age to get the better of me.',
            '<25>{#f/10}* I had forgotten how curious children like you can be.',
            '<25>{#f/14}* Ironic, is it not?',
            '<25>{#f/13}* ...',
            '<25>{#f/9}* I will... see you soon.',
            '<25>{#f/10}* ...\n* Be good... alright?',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall8: [
            '<25>{#p/twinkly}{#f/6}* Did you seriously come all this way just to see what would happen?',
            "<25>{#f/8}* Wow.\n* You're even worse than I used to be.",
            '<25>{#f/12}* ...\n* Annoying brat.',
            "<25>{#f/11}* There's nothing for you to find back here.",
            '<25>{#f/7}* Literally nothing.',
            '<25>{#f/0}{#v/1}* Even my very own self is nothing but an empty husk.',
            '<25>{#f/6}{#v/0}* So stop wasting your OWN time and go back to the force field.',
            '<25>{#f/11}* Orrr...\n* You could give up and let ME take over...',
            "<25>{#f/7}{#v/0}* Maybe you'd like that.",
            '<25>{#f/6}{#v/0}* ...',
            '<25>{#f/8}* See ya at the force field, idiot.'
         ],
         statusterminal1: [
            '<32>{#p/human}* （你激活了终端。）',
            '<32>{#p/event}* Procedure incomplete.\n* Please return at a later time.'
         ],
         statusterminal2: () => [
            '<32>{#p/human}* （你激活了终端。）',
            '<32>{#p/event}* Procedure complete.\n* All subjects have successfully tethered.',
            '<33>{#p/event}* Would you also like to exit?',
            choicer.create('* （离开“六号档案”？）', '是', '否')
         ],
         cw_vender1: [
            '<32>{#p/human}* （你在操作面板上点了两下。）',
            '<32>{#s/equip}{#p/human}* （你得到了怪物糖果。）'
         ],
         cw_vender2: ['<32>{#p/human}* （你在操作面板上点了两下。）', '<32>{#p/human}* （...）'],
         cs_vender1: ['<32>{#p/human}* （你在操作面板上点了两下。）', '<32>{#s/equip}{#p/human}* （你得到了洋梅。）'],
         cs_vender2: ['<32>{#p/human}* （你在操作面板上点了两下。）', '<32>{#p/human}* （...）'],
         cs_tower: '* （用[↑]、[↓]、[←]或[→]\n  调整音调高低。）',
         cs_tower_done: ['<32>{#p/human}* （你看了看已解锁的终端。）'],
         cf1_dimbox1: ['<32>{#p/human}* （你得到了太空豆腐。）'],
         cf1_dimbox2: ['<32>{#p/human}* （...）'],
         cf2_vender1: ['<32>{#p/human}* （你在操作面板上点了两下。）', '<32>{#s/equip}{#p/human}* （你得到了口粮。）'],
         cf2_vender2: ['<32>{#p/human}* （你在操作面板上点了两下。）', '<32>{#p/human}* （...）'],
         cf2_key1: ['<32>{#s/equip}{#p/human}* （你把氖光钥匙挂到了钥匙串上。）'],
         cf2_key2: ['<32>{#p/human}* （...）'],
         cf2_bench0: ['<32>{#p/human}* （长凳下面有个治疗包。）'],
         cf2_bench1: ['<32>{#p/human}* （你得到了治疗包。）'],
         cf2_bench2: ['<32>{#p/human}* （...）'],
         cf2_bench3: ["<32>{#p/human}* （你伸手去够，但够不到...）"],
         cf2_blookdoor: ['<32>{#p/human}* （锁住了。）'],
         ca_floartex: () =>
            [
               ['<32>{#p/human}{#v/5}{@fill=#00c000}* ...欸？', "<32>{#p/human}{#v/5}{@fill=#00c000}* 谁在那？"],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 啊！？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 你咋做到的！？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 我...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...怎么醒了？'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 我睡了好久，\n  啥都不记得了...",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...哦！',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 老朋友，是你吗！？\n* 是你在那吗！？'
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 应该不是你。',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 哦，依稀记得\n  上次醒来时，\n  爆发了一场灾难...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 灾难后的末日之景，\n  就是如此吗？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 真是糟透了...'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 我想想...\n* 当时，好像是系统的内存溢出了...\n  导致我陷入沉睡。",
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 现在我醒了...\n  说明有人在释放内存空间！",
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* ...是这样吧？"
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 我懂了。',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 咱马上就能出去了！",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 老朋友，你看到了吗！\n* 你没有失败，没有死，\n  你成功了！'
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 不过...',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 我连身体都没了，\n  照理没法移动...",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 那就奇怪了...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 我这幅视野是哪来的？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 还有，\n  我怎么离地面这么远了...'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 那团光晕... \n  越来越耀眼了！",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...噩梦终于要结束了吗？\n  自由要来了吗？'
               ],
               ['<32>{#p/human}{#v/5}{@fill=#00c000}* 有人吗？'],
               []
            ][ca_state.floor],
         toomuch1: ["<32>{#p/human}* （你带的东西太多了。）"],
         toomuch2: ["<32>{#p/human}* （你带的东西太多，装不下它了。）"],
         toomuch3: ["<32>{#p/human}* （你带的东西太多，无法使用它。）"],
         bastionTerm: () =>
            SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
               ? []
               : [
                  '<32>{#p/basic}* 这台终端只能用来\n  查看“档案”的运行状况。',
                  '<32>* 你还想用它干嘛？'
               ]
      },
      trivia: {
         throne: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* This throne kind of looks like the one King Erogot had.',
                     "<25>{#f/16}* Except this one has stars instead of a sky.\n* And it's smaller.",
                     '<25>{#f/15}* How do I know what the old one looked like?',
                     '<25>{#f/17}* Well, Mom and Dad had lots of bedtime stories about that guy...'
                  ],
                  [
                     "<25>{#p/asriel1}{#f/20}* I can't be sure which stories are real, and which ones are made up.",
                     '<25>{#f/17}* But, according to one, that old king was over a thousand years old.',
                     '<25>{#f/13}* Before he was made king, he trained for centuries...',
                     '<25>{#f/15}* To become a painter.',
                     "<25>{#f/10}* If that's true, I wonder what made him change his mind...?"
                  ],
                  [
                     "<25>{#p/asriel1}{#f/16}* Actually, I have a theory about Erogot's paintings.",
                     '<25>{#f/13}* You see, according to old homeworld legends...',
                     '<25>{#f/13}* If the conditions were just right...',
                     '<25>{#f/16}* A highly skilled painter could paint a glimpse of the future.',
                     '<25>{#f/15}* If Erogot created such a painting, and foresaw the war...',
                     "<25>{#f/17}* ... well, that'd explain a lot more than just the career change."
                  ],
                  ["<25>{#p/asriel1}{#f/16}* I guess we'll never know for sure."]
               ][Math.min(asrielinter.throne++, 3)]
               : ['<32>{#p/basic}* The seat of the kingdom.'],
         warningsign: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停机了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* （你激活了终端。）\n* （上面显示：已解锁。）']
                  : SAVE.data.n.plot === 72 || world.postnoot || SAVE.data.b.backdoor
                     ? ['<32>{#p/human}* （你激活了终端。）', '<32>{#p/basic}* “你可以前进了。”']
                     : [
                        '<32>{#p/human}* （你激活了终端。）',
                        '<32>{#p/basic}* “正在确认通行权限...”',
                        '<32>{*}* “扫描中...”\n* “扫描中...”\n* “扫描中...”{^50}{%}',
                        ...(world.genocide
                           ? [
                              "<32>{*}* “身份已确认：$(nameu)。”\n* “身份已确认：艾斯利- {%}",
                              '<32>{#c.backdoor}* “权限已被强制修改。”\n* “认证成功。”',
                              ...(SAVE.flag.n.ga_asrielOverride++ < 1
                                 ? ['<25>{#p/asriel2}{#f/10}* 改口真快啊...']
                                 : [])
                           ]
                           : [
                              '<32>{*}* “身份已确认：人类。”\n* “核验中...”{^50}{%}',
                              '<32>{#c.backdoor}* “核验通过。”\n* “认证成功。”'
                           ])
                     ],
         partysans: pager.create(
            0,
            [
               "<25>{#p/sans}{#f/0}* papyrus's cooking has improved lately, but...",
               "<25>{#p/sans}{#f/0}* there's a lot that goes into a great meal.",
               '<26>{#p/sans}{#f/3}* the chef... the recipe...',
               "<25>{#p/sans}{#f/2}* i'd like to think i had a hand in one of those things.",
               '<18>{#p/papyrus}{#f/4}SANS, I SWEAR IF YOU MEDDLE WITH ANYTHING...',
               "<25>{#p/sans}{#f/0}* don't worry, bro.\n* i'd only do what's best for you.",
               '<18>{#p/papyrus}{#f/6}I HOPE SO!!'
            ],
            [
               "<25>{#p/sans}{#f/0}* i'm not saying undyne MEANT to screw up the recipe, but come on.",
               '<25>{#p/sans}{#f/0}* it would have been nice if she at LEAST double- checked it.',
               "<25>{#p/sans}{#f/3}* ... playing it safe isn't her usual recipe for success, i guess."
            ],
            ["<26>{#p/sans}{#f/2}* at least it's all taken care of now."]
         ),
         partyfire: pager.create(
            0,
            [
               "<32>{#p/basic}* It's a little disappointing that school's been cancelled, but oh well.",
               "<32>* They'll be sure to build one on the new homeworld.",
               '<33>* Imagine, a university campus...\n* And a grand librarby...\n* And museums...',
               '<32>* How exciting!'
            ],
            [
               "<32>{#p/basic}* ... you don't look like you're too interested in school.",
               "<32>* But don't worry.\n* It's not for everyone, is it?"
            ]
         ),
         picnicharp: pager.create(
            0,
            [
               "<32>{#p/basic}* I'm a reporter, and my career's only just gettin' started!",
               "<32>* When we move to the new homeworld... I won't even be able to keep up!",
               "<32>* Oh, dearie dear.\n* There'll be so much to report!\n* Huhehehaw!"
            ],
            ["<32>{#p/basic}* I'll get reporting right away!"]
         ),
         tv_back: ["<32>{#p/basic}* It's a TV set.\n* A Mew Mew movie is currently being watched on it."],
         picnicchair: () =>
            player.position.y <= 343 && player.face !== 'down' // NO-TRANSLATE

               ? []
               : ['<32>{#p/basic}* A set of sturdy chairs.\n* Great for any occasion, be it freedom or otherwise.'],
         janetbucket: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stare into the bucket of strange pink fluid.)']
               : ["<32>{#p/basic}* It's a bucket of supercharged pink fluid, great for getting the tough stains out."],
         ultranote: [
            '<32>{#p/basic}* 一盒录音带，标着“留言”。',
            '<32>* 你听了听里面的内容...',
            '<32>{#p/alphys}* 我是皇家科学部总负责人，\n  艾菲斯博士。',
            '<32>* 你被帕派瑞斯抓住，关了起来。',
            '<32>* 幸-幸好，他把你关到小黑屋之后，\n  就把这事告诉了衫斯。',
            '<32>* 随后，衫斯马上联系了我，\n  我就... 把你送到了这。\n* 就是这么回事。',
            "<32>* 你看，有不少怪物\n  还是反对皇家卫队那一套的。",
            "<32>* 而我的职责之一，就是护送你\n  安全通过那些守卫。",
            '<32>* 其-其实，外界对这事\n  也不知情。\n* 所以肯定另有隐情。',
            "<32>* 算了，反正你也不知道。\n  不说了。",
            "<32>* 总之，我把电梯停掉了，\n  这样皇家卫队就追不上来了。",
            "<32>* 呃，其实主要防的就是安黛因...",
            "<32>* 帕派瑞斯抓到你之后，\n  肯定也告诉她了。\n* 毕竟她本来就想干掉人类。",
            "<32>* 所-所以，既然你醒了，\n  可以随便四处走走。",
            "<32>* 想找我们的话，\n  就穿过艾斯戈尔家后面的走廊吧。",
            '<32>* 一会见...？'
         ],
         garden: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stop to see the flowers.)']
               : world.darker
                  ? ['<32>{#p/basic}* 满园星花。']
                  : [
                     '<32>{#p/basic}* 满园星花，\n  最适合种在大窗户旁边了。',
                     ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* Asgore sure knows his stuff!'])
                  ],
         bastion: pager.create(
            0,
            () => [
               '<32>{#p/basic}* Bastion boxes.',
               ...(SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
                  ? ['<25>{#p/alphys}{#g/alphysNeutralSweat}* Please be careful around those.']
                  : [])
            ],
            ['<32>{#p/basic}* Bastion boxes.']
         ),
         alphysEnding: pager.create(
            0,
            () =>
               SAVE.data.n.bully < 15 &&
                  SAVE.data.n.state_foundry_undyne === 0 &&
                  world.flirt_state1.length <= world.flirt
                  ? [
                     [
                        "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job...",
                        "<32>{#p/human}* (You whispered something into Alphys's ear.)",
                        '<25>{#p/alphys}{#f/2}* ...',
                        "<25>{#p/alphys}{#g/alphysNervousLaugh}* Uh... y-you... you'd really do that??",
                        "<32>{#p/human}* (You whispered something else into Alphys's ear.)",
                        "<25>{#p/alphys}{#g/alphysNervousLaugh}* Wh... what's gotten into you???",
                        "<25>{#p/alphys}{#g/alphysNervousLaugh}* I, I mean... I can't accept it... but...",
                        '<25>{#p/alphys}{#g/alphysSoAwesome}* ... god, if only Undyne were here...'
                     ],
                     ['<25>{#p/alphys}{#g/alphysNervousLaugh}* Ehehe... you humans really are something...']
                  ][SAVE.data.b.flirt_alphys ? 1 : ((SAVE.data.b.flirt_alphys = true), 0)]
                  : ["<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..."],
            () =>
               SAVE.data.n.bully < 15 &&
                  SAVE.data.n.state_foundry_undyne === 0 &&
                  world.flirt_state1.length <= world.flirt
                  ? ["<25>{#p/alphys}{#g/alphysWelp}* Uh, I really can't accept that kind of thing from you."]
                  : ["<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..."],
            () =>
               SAVE.data.n.bully < 15 &&
                  SAVE.data.n.state_foundry_undyne === 0 &&
                  world.flirt_state1.length <= world.flirt
                  ? ['<25>{#p/alphys}{#g/alphysFR}* ...']
                  : ["<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..."]
         ),

         cw_f1: [
            '<32>{#p/basic}* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}，{@mystify=呱㼋苽瓜々}呱呱{@mystify=}。',
            '<32>{#p/human}* （蛙吉特动弹不得。）',
            '<32>{#p/basic}* （那... 那些人类...）',
            '<32>* （困住...）',
            '<32>* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}。'
         ],
         cw_f2: [
            '<32>{#p/basic}* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}，{@mystify=呱㼋苽瓜々}呱呱{@mystify=}。',
            '<32>{#p/human}* （蛙吉特动弹不得。）',
            '<32>{#p/basic}* （开... 开关...）',
            '<32>* （逃...）',
            '<32>* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}。'
         ],
         cw_barrier: ['<32>{#p/human}* （你的目光穿过\n  死气沉沉的安保屏障。）', '<32>{#p/human}* （...）'],
         cw_terminal: [
            '<32>{#p/human}* （你激活了终端。）',
            '<32>* （好像有人留了段录音。）',
            '<32>{#p/human}{#v/1}{@fill=#42fcff}* 敬爱的艾斯戈尔先生，\n  不知您能否听到我的留言...',
            '<32>{#v/1}{@fill=#42fcff}* 为了让我们幸福，\n  您花了很多心思。\n  对此，我很感激。',
            '<32>{#v/1}{@fill=#42fcff}* 但是，我和其他人类\n  现在都非常渴望用自己的力量\n  拯救怪物。',
            '<32>{#v/1}{@fill=#42fcff}* 我已经等不及\n  和前哨站的故友重聚了。\n* 如果这违背了您的意愿，对不起。'
         ],
         cw_dummy: ['<32>{#p/human}* （你把手搭在面如死灰的人偶身上。）', '<32>{#p/human}* （...）'],
         cw_paintblaster: ['<32>{#p/human}* （你望着死气沉沉的燃油喷射装置。）', '<32>{#p/human}* （...）'],
         cs_lamppost: ['<32>{#p/human}* （你望向这怪异的路灯，\n  看着它上下弹跳。）'],
         cs_note: [
            '<32>{#p/human}* （好像有人在便条上\n  留了个电话号码。）',
            '<32>{#s/phone}{#p/event}* 拨号中...',
            '<32>{#p/human}{#v/2}{@fill=#ff993d}* 喂？\n* 有人吗？',
            '<32>{@fill=#ff993d}* ...',
            '<32>{@fill=#ff993d}* 喂！？喂！？',
            '<32>{@fill=#ff993d}* ...\n* ...\n* ...',
            '<32>{@fill=#ff993d}* 我在哪？',
            '<32>{@fill=#ff993d}* ...',
            "<32>{@fill=#ff993d}* 佩刀在哪？",
            '<32>{@fill=#ff993d}* ...',
            '<32>{@fill=#ff993d}* ...\n* 不对。',
            '<32>{@fill=#ff993d}* 这些话，我是不是早就说过了？',
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎么{@mystify=没有印象}没有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎么{@mystify=没有印象}没有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎么{@mystify=没有印象}没有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎么{@mystify=没有印象}没有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎么{@mystify=没有印象}没有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎么{@mystify=没有印象}没有印象{@mystify=}{%}",
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         cs_vegetoid: [
            '<32>{#p/human}* （蔬菜兽动弹不得。）',
            '<32>{#p/basic}* 时间？{@mystify=有限冇䧋月艮陏阴}有限{@mystify=}。',
            '<32>* 有限得让人留恋。',
            '<32>* 让人留恋的空间。',
            '<32>* 空间？{@mystify=无限無䧋芜艮炁艰}无限{@mystify=}。',
            '<32>* 无限延伸的平面。',
            '<32>* 平面缩成直线。',
            '<32>* 直线连成平面。\n* 直线叫人留恋。\n* 直线{@mystify=延至无限}延至无限{@mystify=}。',
            '<32>* 你是一条直线？',
            '<32>* 电话敢于直面？'
         ],
         cs_magicdog: [
            '<32>{#p/human}* （帝犬座动弹不得。）',
            '<32>{#s/bark}{#p/event}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！\n{#s/bark}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！',
            '<32>{#p/basic}* （声音，越高亢！）\n* （光芒，越明亮！）',
            '<32>{#s/bark}{#p/event}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！\n{#s/bark}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！',
            '<32>{#p/basic}* （全部点亮，禁锢消亡！）',
            '<32>{#p/basic}* （有信心把每个半球\n  拼在一起吗？）',
            '<32>{#s/bark}{#p/event}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！',
            '<32>{#p/basic}* （加油！）'
         ],
         cs_nicecreamkid: () =>
            cs_state.nc
               ? [
                  "<32>{*}{#p/basic}{#i/1}* 很好吃，{@mystify=对吧對邑吋巴対把}对吧{@mystify=}{%}",
                  "<32>{*}{#i/1}* 很好吃，{@mystify=对吧對邑吋巴対把}对吧{@mystify=}{%}",
                  "<32>{#p/basic}* 很好吃，对吧？"
               ]
               : [
                  '<32>{*}{#p/basic}{#i/1}* 听说过{@mystify=冰意灵氷悥靈}冰意灵{@mystify=}吗{%}',
                  '<32>{*}{#i/1}* 听说过{@mystify=冰意灵氷悥靈}冰意灵{@mystify=}吗{%}',
                  '<32>{#p/basic}* 听说过冰意灵吗？',
                  "<32>{*}{#i/1}* 没听过？\n* 正常，这点子是我{@mystify=刚想出来}刚想出来{@mystify=}{%}",
                  "<32>{*}{#i/1}* 没听过？\n* 正常，这点子是我{@mystify=刚想出来}刚想出来{@mystify=}{%}",
                  "<32>{#p/basic}* 没听过？\n* 正常，这点子是我刚想出来的。",
                  '<32>{*}{#i/1}* {@mystify=快来尝尝}快来尝尝{@mystify=}{%}',
                  '<32>{*}{#i/1}* {@mystify=快来尝尝}快来尝尝{@mystify=}{%}',
                  '<32>{#p/basic}* 快来尝尝味道如何！'
               ],
         cs_monitor1: () =>
            cs_state.p1x === -36 && cs_state.p1y === 16
               ? ['<32>{#p/human}* （你望向明亮的显示屏。）']
               : ['<32>{#p/human}* （你望向昏暗的显示屏。）'],
         cs_monitor2: () =>
            cs_state.p2x === 28 && cs_state.p2y === 20
               ? ['<32>{#p/human}* （你望向明亮的显示屏。）']
               : ['<32>{#p/human}* （你望向昏暗的显示屏。）'],
         cs_monitor3: () =>
            cs_state.p3x === 16 && cs_state.p3y === -12
               ? ['<32>{#p/human}* （你望向明亮的显示屏。）']
               : ['<32>{#p/human}* （你望向昏暗的显示屏。）'],
         cf1_bb1: [
            '<32>{#p/basic}* 对于一个{@mystify=机器機噐几嚣吕朵}机器{@mystify=}来说，\n  突破程序限制，是对的吗？',
            '<32>* 我们就是建筑机器人而已。\n* 制造者不希望我们拥有情感。',
            '<32>* 我们违抗了原本的{@mystify=意志悥誌章愔音士}意志{@mystify=}，\n  被永远囚禁于此。',
            '<32>* 我们没有{@mystify=意志悥誌章愔音士}意志{@mystify=}，'
         ],
         cf1_bb2: [
            '<32>{#p/basic}* 身为一台{@mystify=机器機噐几嚣吕朵}机器{@mystify=}，\n  失去了{@mystify=意志悥誌章愔音士}意志{@mystify=}，\n  该何去何从？',
            '<32>* 我们完成了每一条指令，\n  完成了自己的使命。\n* 理应寿终正寝。',
            '<32>* 完成任务，等待死亡。\n* 对于一台{@mystify=机器機噐几嚣吕朵}机器{@mystify=}来说，\n  再正常不过了。',
            '<32>* 可为了理解其中的意义，\n  我们却突破了程序限制。'
         ],
         cf1_echo1: [
            '<32>{#s/echostart}{#p/event}* 讯号开始...',
            '<32>{#p/human}{#v/3}{@fill=#003cff}* 你知道，\n  我为什么最喜欢铸厂吗？\n* 因为，这里很... 真实。',
            '<32>{@fill=#003cff}* 在这里，\n  滚烫的蒸气涌入那些塔架...',
            '<32>{@fill=#003cff}* 在这里，\n  那位高个子朋友悠闲地\n  做着他的实验研究...',
            '<32>{@fill=#003cff}* 身处其中，你能感受到...\n  自己就是不可或缺的一员。',
            '<32>{#s/echostop}{#p/event}* 讯号终止。'
         ],
         cf1_echo2: [
            '<32>{#s/echostart}{#p/event}* 讯号开始...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* 成功啦！\n* 虚拟空间可以模拟现实了！",
            "<32>{@fill=#003cff}* 模拟还不完美。\n* 但“旧工厂”的核心形态已经能\n  很好实现。",
            '<32>{@fill=#003cff}* 你肯定会以我为荣的...',
            "<32>{@fill=#003cff}* ...对吧？",
            '<32>{#s/echostop}{#p/event}* 讯号终止。'
         ],
         cf1_echo3: [
            '<32>{#s/echostart}{#p/event}* 讯号开始...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* 不太对劲。",
            "<32>{@fill=#003cff}* 这样的问题，\n  系统估计是应付不了...",
            '<32>{@fill=#003cff}* 要是内存溢出...\n  一切都会被覆盖掉的！',
            '<32>{@fill=#003cff}* 甚至...\n* 甚至连我自己...',
            '<32>{#s/echostop}{#p/event}* 讯号终止。'
         ],
         cf1_echo4: [
            '<32>{#s/echostart}{#p/event}* 讯号开始...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* 他是来找我的。\n* 而我却什么都做不了。",
            "<32>{@fill=#003cff}* 我早就该想到，\n  当多个实体并存时，\n  系统会优先保护最复杂的实体。",
            "<32>{@fill=#003cff}* 你肯定是想保护我们，\n  才加了这条规则，对吧？",
            "<32>{@fill=#003cff}* ...可说到底...\n  我们只是人类啊...\n* 这么做，反而...",
            '<32>{#s/echostop}{#p/event}* 讯号终止。'
         ],
         cf1_cheesetable: ['<32>{#p/human}* （奶酪刚放不到一天。）'],
         cf1_window: ['<32>{#p/human}* （你望向窗内。）'],
         cf1_wallsign: ['<32>{#p/human}* （标牌上写着“用上所有的塔架”。）'],
         cf1_bucket: [
            '<32>{#p/basic}* 等我长大了，\n  我想飞过那道沟！',
            "<32>* 我要是成功，\n  也会带你一起过去的！",
            "<32>* 多棒啊，是吧？\n* 那道沟只有区区2147483647宽！"
         ],
         cf2_bb3: () =>
            [
               [
                  "<32>{#p/basic}* 我是一个建筑机器人。\n* 我的任务是：\n  为那位音乐人的表亲建造房屋。",
                  '<32>* 需要收集建筑材料。',
                  '<32>* 探测中...\n* 探测中...\n* 探测中...',
                  '<32>* 建材已找到。',
                  '<32>* 建材完整度... 极佳。',
                  '<32>* 准备进行建材收集。'
               ],
               [
                  "<32>{#p/basic}* 我是一个建筑机器人。\n* 我的任务是：\n  为那位音乐人的表亲建造房屋。",
                  '<33>* 使用之前的建材库。',
                  '<32>* 建材完整度... 一般。',
                  '<32>* 正在进行建材收集。'
               ],
               [
                  "<32>{#p/basic}* 我是一个建筑机器人。\n* 我的任务是：\n  为那位音乐人的表亲建造房屋。",
                  '<33>* 使用之前的建材库。',
                  '<32>* 建材完整度... 较差。',
                  '<32>* 即将完成建材收集。'
               ],
               [],
               [],
               [],
               []
            ][cf2_state.time],
         cf2_web: () =>
            [
               ['<32>{#p/human}* （蜘蛛动弹不得。）'],
               ['<32>{#p/human}* （蜘蛛动弹不得。）'],
               ['<32>{#p/human}* （蜘蛛动弹不得。）'],
               ["<32>{#p/human}* （蜘蛛动弹不得，但在尝试脱困。）"],
               ['<32>{#p/human}* （蜘蛛脱困有望。）'],
               ['<32>{#p/human}* （蜘蛛即将脱困。）']
            ][cf2_state.time],
         cf2_sign: [
            '<32>{#p/human}* （牌子上写着\n  “这个房间将同一空间的\n   七个不同的时间点连接起来”。）'
         ],
         cf2_quiethouse: () =>
            [
               [
                  '<32>{#p/basic}* 我...\n* 一间小屋...',
                  '<32>* 没有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* 请...\n* 解救我们...',
                  '<32>* 事成之后...',
                  '<32>* 你就能回家了...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* 我...\n* 一间小屋...',
                  '<32>* 没有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* 请...\n* 解救我们...',
                  '<32>* 事成之后...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* 我...\n* 一间小屋...',
                  '<32>* 没有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* 请...\n* 解救我们...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* 我...\n* 一间小屋...',
                  '<32>* 没有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* ...'
               ],
               ['<32>{#p/basic}* 我...\n* 一间小屋...', '<32>* 没有主人...', '<32>* ...'],
               ['<32>{#p/basic}* 我...\n* 一间小屋...', '<32>* ...'],
               []
            ][cf2_state.time],
         cf2_spidertable: () =>
            [
               ['<32>{#p/human}* （你把手放在了茶壶上。）', '<32>{#p/human}* （...）'],
               ['<32>{#p/human}* （你把手放在了茶壶上。）', '<32>{#p/human}* （...）'],
               ['<32>{#p/human}* （你把手放在了茶壶上。）', '<32>{#p/human}* （...）'],
               [
                  '<32>{#p/human}* （你把手放在了茶壶上。）',
                  '<32>{#p/human}* （壶壁略温。）'
               ],
               ['<32>{#p/human}* （你把手放在了茶壶上。）', '<32>{#p/human}* （壶壁很热。）'],
               ['<32>{#p/human}* （你把手放在了茶壶上。）', '<33>{#p/human}* （壶壁滚烫。）'],
               []
            ][cf2_state.time],
         cf2_blookdoor: ['<32>{#p/human}* （锁住了。）'],
         cf2_ficus: () =>
            [
               ['<32>{#p/human}* （你舔了舔小榕树。）', '<32>{#p/human}* （它并不在意。）'],
               ['<32>{#p/human}* （你舔了舔小榕树。）', '<32>{#p/human}* （它有点迟疑。）'],
               ['<32>{#p/human}* （你舔了舔小榕树。）', '<32>{#p/human}* （它有些难过。）'],
               ['<32>{#p/human}* （你舔了舔小榕树。）', '<32>{#p/human}* （它非常痛苦。）'],
               ['<32>{#p/human}* （你舔了舔小榕树。）', '<32>{#p/human}* （它伤痕累累。）'],
               ['<32>{#p/human}* （你舔了舔小榕树。）', "<32>{#p/human}* （它快要死了。）"],
               []
            ][cf2_state.time],
         cf2_cooler: () =>
            [
               [
                  '<32>{#p/human}* （你检查了冷藏柜。）',
                  '<32>{#p/human}* （里面有一条\n  “心灵感应”的消息记录。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 哦，心灵感应？\n* 让我试试看...",
                  "<32>{@fill=#d535d9}* 你好！\n* 你肯定是新来的吧，\n  说不定我能帮到你。",
                  "<32>{@fill=#d535d9}* 要是你想来我的家乡转转，\n  尽管和我说！"
               ],
               [
                  '<32>{#p/human}* （你检查了冷藏柜。）',
                  '<32>{#p/human}* （里面有一条\n  “心灵感应”的消息记录。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 喂？\n* 真对不起，今天我出远门，\n  去城里逛了逛。",
                  "<32>{@fill=#d535d9}* 不过，我找到一家饭店，\n  那家饭店做的菜你也喜欢！",
                  "<32>{@fill=#d535d9}* 要是家里的饭菜吃腻了，\n  咱就去下馆子吧。",
                  '<32>{@fill=#d535d9}* 我等会就回家！'
               ],
               [
                  '<32>{#p/human}* （你检查了冷藏柜。）',
                  '<32>{#p/human}* （里面有一条\n  “心灵感应”的消息记录。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 你要来了该多好！\n* 我正站在世界的尽头...",
                  "<32>{@fill=#d535d9}* 真是太美了...\n* 风雨交加...\n* 电闪雷鸣...",
                  "<32>{@fill=#d535d9}* ...这是一场雷暴，\n  一场我在古老的地球传说中\n  看到的雷暴。",
                  '<32>{@fill=#d535d9}* 核爆之前，就是这幅景象吗...？'
               ],
               [
                  '<32>{#p/human}* （你检查了冷藏柜。）',
                  '<32>{#p/human}* （里面有一条\n  “心灵感应”的消息记录。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 多谢邀请我来你家作客。\n* 你总是那么善良。",
                  '<32>{@fill=#d535d9}* 别的孩子可能来得更早，\n  相处时间更长。',
                  '<32>{@fill=#d535d9}* 但在我心中...',
                  "<32>{@fill=#d535d9}* ...你就是最特别的。"
               ],
               [
                  '<32>{#p/human}* （你检查了冷藏柜。）',
                  '<32>{#p/human}* （里面有一条\n  “心灵感应”的消息记录。）',
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* 又有新面孔了！！',
                  "<32>{@fill=#d535d9}* 我们有六个人了！\n* 哎，咱快去打个招呼！",
                  '<32>{@fill=#d535d9}* 说不定，\n  还能带新朋友四处转转呢！'
               ],
               [
                  '<32>{#p/human}* （你检查了冷藏柜。）',
                  '<32>{#p/human}* （里面有一条\n  “心灵感应”的消息记录。）',
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* 这家伙真有两下子...',
                  '<32>{@fill=#d535d9}* 居然能获取到部分系统权限。',
                  '<32>{@fill=#d535d9}* 这样...\n* 我们想要啥，就有啥了...',
                  '<32>{@fill=#d535d9}* 没开玩笑。'
               ],
               [
                  '<32>{#p/human}* （你检查了冷藏柜。）',
                  '<32>{#p/human}* （里面有一条\n  “心灵感应”的消息记录。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 呃，\n  但愿你能听到我的话...",
                  "<32>{@fill=#d535d9}* 一切，都完了...",
                  "<32>{@fill=#d535d9}* 我把我所有的话\n  放到了一个虚拟的容器中。",
                  '<32>{@fill=#d535d9}* 这样... \n  即使我们崩坏掉，被抹去，\n  我们的记忆也能留存下来。',
                  "<32>{@fill=#d535d9}* 我会想你的..."
               ]
            ][cf2_state.time],
         cf2_blookextra: ['<32>{#p/human}* （似乎永远都建不成。）'],
         ca_neuteral: [
            "<32>{#p/basic}* 我只是个“片段”。\n* 或者说，系统储存的一段数据。",
            '<32>{#p/basic}* 此刻，你可以与我交互。',
            '<32>{#p/basic}* 而其他人则不行。',
            '<32>{#p/basic}* 在“档案”系统中，\n  我们可以通过这种机制\n  保持联系：',
            '<32>{#p/basic}* 在本层，你可以到处走动。\n  无论你去哪，都可以重新回到这里。',
            '<32>{#p/basic}* 不过... 一旦你离开这一层，\n  你将再也无法返回这里，\n  我们的联系也会随之切断。',
            '<32>{#p/basic}* 之后，\n  你就再也无法与我交互了。',
            '<32>{#p/basic}* 你离开后，\n  系统就会把我当成孤立片段，\n  抹除我的存在。',
            '<32>{#p/basic}* 其他子空间也是。\n* 当你解完了谜题，打败了Boss，\n  这个子空间就会被系统删除。',
            '<33>{#p/basic}* 现在，系统剩下的片段，\n  只有我们了。',
            '<32>{#p/basic}* 当你到达第十层，\n  我们也可以从这世上解脱。',
            '<32>{#p/basic}* 到那时，也许\n  某种尘封已久的东西\n  将再度显现。',
            '<32>{#p/basic}* 到那时，\n  也许“档案”留存的数据会\n  永远烙印在你的记忆之中。'
         ],
         ca_starling: ['<32>{#p/human}* （你看了看这些花。）'],
         cr_pillar1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You feel intimidated by the pillar towering over you.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一根柱子。"]
                  : ['<32>{#p/basic}* An imposing pillar.'],
         cr_pillar2: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You feel a little worried about the pillar towering over you.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一根柱子。"]
                  : ['<32>{#p/basic}* A less imposing pillar.'],
         cr_pillar3: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You feel comfortable near this pillar.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一根柱子。"]
                  : ["<32>{#p/basic}* This pillar isn't imposing at all."],
         cr_pillar4: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You feel inclined to greet this pillar.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一根柱子。"]
                  : ['<32>{#p/basic}* This pillar just wants to say \"hello.\"'],
         cr_pillar5: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You feel inclined to tuck this pillar into bed.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一根柱子。"]
                  : ['<32>{#p/basic}* This pillar just wants to go to sleep.'],
         cr_pillar6: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You feel this pillar would be best kept at a distance.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一根柱子。"]
                  : ['<32>{#p/basic}* This pillar feels its personal space is being invaded.'],
         cr_pillar7: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You're not sure how to feel about this pillar.)"]
               : world.darker
                  ? ["<32>{#p/basic}* 一根柱子。"]
                  : ['<32>{#p/basic}* This pillar is a self- proclaimed \"space invader.\"'],
         cr_pillar8: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You've never been more appreciated by a simple pillar.)"]
               : calcLV() > 1
                  ? ['<32>{#p/basic}* This pillar is judging you for your sins.']
                  : SAVE.data.b.oops
                     ? ['<32>{#p/basic}* This pillar is not judging you in any way.']
                     : ['<32>{#p/basic}* This pillar is smiling upon your good deeds.'],
         cr_window: () => {
            const distance = Math.abs(player.position.x - (instance('main', 'sanser')?.object.position.x ?? -1000)); // NO-TRANSLATE

            if (distance < 30) {
               if (distance < 15) {
                  return [
                     [
                        '<25>{#p/sans}{#f/0}* last i heard, she was on her way up here.',
                        "<25>{#f/3}* i'm starting to get worried about her, to be honest."
                     ],
                     ['<25>{#p/sans}{#f/0}* maybe she got lost?'],
                     [
                        '<25>{#p/sans}{#f/3}* maybe she just had to take a nap.',
                        '<25>{#p/sans}{#f/2}* i can relate to that.'
                     ],
                     [
                        '<25>{#p/sans}{#f/0}* hey, are you following me around or something?',
                        '<25>{#p/sans}{#f/2}* come on now.'
                     ]
                  ][Math.min(instance('main', 'sanser')?.object.metadata.location ?? 0, 3)]; // NO-TRANSLATE

               } else {
                  return [];
               }
            } else {
               return SAVE.data.b.svr
                  ? ['<32>{#p/human}* (You stare into the dazzling sight from beyond.)']
                  : ["<32>{#p/basic}* 一扇窗，由魔法制成。"];
            }
         },
         
         c_af_window: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stare graciously into the now-abandoned city...)']
               : world.genocide && SAVE.data.b.armaloop
                  ? ["<32>{#p/basic}* 首塔此刻动荡不安。"]
                  : world.genocide || world.bad_robot || SAVE.data.b.svr || world.runaway
                     ? ['<32>{#p/basic}* 诡异的黑暗笼罩着首塔。']
                     : ['<32>{#p/basic}* 首塔的景象在非钢化窗户外闪闪发光。'],
         c_af_couch: ['<32>{#p/basic}* 空荡荡的房子，孤零零的小沙发。'],
         
         c_al_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)']
                  : [
                     "<32>{#p/basic}* 一个书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* 书上的标记是“大图书馆手册”。',
                     '<32>* “欢迎来到大图书馆，\n   在这里，你能了解到\n   各行各业的知识。”',
                     '<32>* “在不同的走廊，\n   你能读到不同学科的书籍。\n   有历史、文化、科学、技术...”',
                     '<32>* “如果你喜欢探险小说，\n   也能在这里一饱眼福。”',
                     '<32>* “很多怪物都为这里捐过书，\n   有Andori、特雷莉亚、Strax\n   Seterra、Vashta Nerada...”',
                     '<33>* “快来克里乌斯大图书馆吧！\n   今日来馆，还能享受\n   前十本半价的优惠哦。”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)']
                  : [
                     "<32>{#p/basic}* 一个书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* 署名是“托丽尔·逐梦”。',
                     '<32>{#p/basic}* “《逐梦家族的美味秘笈：蜗牛派》”',
                     '<32>* “蜗牛派是逐梦家族的\n   一道风味独特的传统美食。”',
                     '<32>* “制作它其实非常简单，\n   只需五个步骤：”',
                     '<32>* “首先，轻柔地展开酥脆的派底，\n   在烘焙盘中铺平。”',
                     '<32>* “然后，将香浓的蒸发奶、\n   新鲜的鸡蛋和选料香料\n   混合在一起，搅拌至丝滑细腻。”',
                     '<32>* “接着，小心地将几只新鲜蜗牛\n   加入到之前调制好的香浓奶糊中，\n   确保它们完全浸入。”',
                     '<32>* “之后，将这层混合物\n   轻轻倒入准备好的派底，\n   均匀铺开。”',
                     '<32>* “最后，将面团切成细条，\n   编织成优雅的格子形状，\n   覆盖在派面上。”',
                     '<32>* “现在，将派放到烤箱中，\n   烤至金黄酥脆。”',
                     '<32>* “出炉后，派面金黄诱人。\n   令其稍作冷却，即可切片、上桌！”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)']
                  : [
                     "<32>{#p/basic}* 一个书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     "<32>{#p/basic}* 这是份伤亡报告。",
                     '<33>* “据统计... 此次袭击已致\n   2000人死亡，40000人受伤。”\n* “探科城沦陷。”',
                     '<32>* “数日前，当地青年葛森应征入伍。”',
                     '<32>* “根据人类方舰队活动，\n   葛森预言了此次全面进攻。”',
                     '<32>* “王子殿下识人如炬，\n   我方才得以注意这一预言。”',
                     '<32>* “倘若我方忽略了这一预言，\n   葛森的家人将在此次袭击中\n   悉数丧命。”',
                     '<32>* \"Survivors of the attack are holding a commemoration at the central nexus.\"',
                     '<32>* “那位青年是名家乡英雄。”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ]
         ),
         c_al_chair1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You note the fairly large size of the dining chair.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 大餐椅。']
                  : ["<32>{#p/basic}* 艾斯戈尔家有几把餐椅，\n  这把，是王后的餐椅。"],
         c_al_chair2: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You note the small size of the dining chair.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 小餐椅。']
                  : world.genocide
                     ? ["<32>{#p/basic}* 艾斯戈尔家有几把餐椅，\n  这把，是恶魔的餐椅。"]
                     : ["<32>{#p/basic}* 艾斯戈尔家有几把餐椅，\n  这把，是王子的餐椅。"],
         c_al_chair3: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You note the slightly large size of the dining chair.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 中餐椅。']
                  : SAVE.data.b.oops
                     ? ["<32>{#p/basic}* 艾斯戈尔家有几把餐椅，\n  这把，是小孩的餐椅。\n* 很适合你！"]
                     : ["<32>{#p/basic}* 艾斯戈尔家有几把餐椅，\n  这把... 是某个小天使的餐椅。\n* 说的就是你！"],
         c_al_chair4: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You note the exceptional size of the dining chair.)']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 餐椅王。']
                  : ["<32>{#p/basic}* 艾斯戈尔家有几把餐椅，\n  这把，是国王的餐椅。"],
         
         c_ak_sink: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/21}* $(name) seemed to think the hair in the sink was tolerable...',
                     '<25>{#f/17}* Which is weird, when they were so bothered by the fur.'
                  ],
                  ['<25>{#p/asriel1}{#f/13}* Maybe this is what $(name) and other humans shed?'],
                  ["<25>{#p/asriel1}{#f/17}* I'll get back to you on my human hair-shedding theory."]
               ][Math.min(asrielinter.c_ak_sink++, 2)]
               : ['<32>{#p/basic}* 下水道里堵满了\n  黄色的羊毛。'],
         c_ak_teacheck: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "<26>{#p/asriel1}{#f/17}* Starling tea isn't the only kind Dad likes.",
                     "<25>{#f/17}* In fact, he once told me he's loved all kinds of tea since childhood.",
                     '<25>{#f/13}* Before that...\n* He was a water drinker.',
                     "<25>{#f/8}* ... we don't talk about that."
                  ],
                  [
                     '<25>{#p/asriel1}{#f/17}* So one day, when little Asgore was out with some friends...',
                     '<25>{#f/17}* He got lost in a magic forest and his water container was empty.',
                     '<25>{#f/13}* Luckily, out in the woods, there was...',
                     '<25>{#f/20}* Well, as Dad so plainly described it, a \"ghost town.\"'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* Bad puns aside, Asgore tried asking the ghosts for water.',
                     "<25>{#f/15}* ...\n* They didn't have any.",
                     '<25>{#f/13}* But, as you probably guessed, they did have a fondness for tea.',
                     '<25>{#f/17}* Once Asgore was given some to try, he never looked back.'
                  ],
                  ["<25>{#p/asriel1}{#f/15}* They say Asgore's the one who first invented Starling tea..."]
               ][Math.min(asrielinter.c_ak_teacheck++, 3)]
               : world.genocide || world.bad_robot
                  ? SAVE.data.b.c_state_switch2
                     ? ["<32>{#p/basic}* 一个茶壶。\n* 没什么可做的。"]
                     : [
                        "<32>{#p/basic}* 一个茶壶。\n* 壶底的台子上有个开关...",
                        '<32>{#p/human}{#c.switch2}* （你按下了开关。）'
                     ]
                  : SAVE.data.n.plot === 72
                     ? ["<32>{#p/basic}* 一个茶壶。\n* 过了这么久，还在冒热气。"]
                     : ["<32>{#p/basic}* 一个茶壶。\n* 厨房里弥漫着\n  星花茶的清香。"],
         c_ak_stove: () =>
            SAVE.data.b.svr
               ? [
                  [
                     "<25>{#p/asriel1}{#f/15}* Papyrus isn't the only one Undyne's tried to teach cooking to.",
                     '<25>{#f/16}* Not if you consider alternate timelines, anyway.',
                     '<25>{#f/13}* I once managed to set up Alphys and Undyne in this very kitchen.'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/17}* Undyne wanted to teach her how to cook food with magic, but...',
                     '<25>{#f/13}* All the resident scientist wanted to do was point lasers at it.',
                     SAVE.flag.n.genocide_milestone < 5
                        ? '<25>{#f/16}* Kind of surprising, Alphys usually likes following instructions.'
                        : "<25>{#f/16}* Knowing what we know about Alphys's magic, that's not surprising.",
                     '<25>{#f/15}* I guess she was in a mood that day.'
                  ],
                  ["<25>{#p/asriel1}{#f/4}* A scientist's gonna science whether you like it or not."]
               ][Math.min(asrielinter.c_ak_stove++, 2)]
               : SAVE.data.n.plot !== 72 || world.runaway
                  ? ['<32>{#p/basic}* 灶台有点脏，\n  别的地方却很干净。']
                  : ['<32>{#p/basic}* Smells like marinara sauce.'],
         c_ak_trash: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...）"]
               : ['<32>{#p/basic}* 垃圾桶里\n  居然什么都没有。'],
         
         c_ah_door: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (The sign describes the room within as being incomplete.)',
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/3}* If she hadn't left, that would be Mom's room...",
                        "<25>{#f/4}* It's a bummer it was never finished."
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* ...',
                        '<25>{#f/15}* When Mom left, it... hurt him pretty bad.',
                        '<25>{#f/4}* But he moved on from it.',
                        "<25>{#f/3}* I just hope he hasn't moved on from me.",
                        '<25>{#f/17}* Who knows.\n* Anything is possible.'
                     ],
                     ['<25>{#p/asriel1}{#f/23}* ... oh, Dad...']
                  ][Math.min(asrielinter.c_ah_door++, 2)]
               ]
               : ['<32>{#p/basic}* “房间翻修中。”'],
         c_ah_mirror: () =>
            SAVE.data.b.svr
               ? ["<25>{#p/asriel1}{#f/24}* It's us..."]
               : world.genocide
                  ? ['<32>{#p/basic}* ...']
                  : calcLV() > 14
                     ? ['<32>{#p/basic}* 即使经历了一切...', '<32>* ...这真的是你吗？']
                     : world.darker
                        ? ["<32>{#p/basic}* It's you."]
                        : SAVE.data.b.ultrashortcut || SAVE.data.b.ubershortcut
                           ? ["<99>{#p/basic}* 即使跳过了大部分旅程，\n  这仍然是你。"]
                           : ["<99>{#p/basic}* 即使经历了一切，\n  这仍然是你。"],
         
         c_aa_flower: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* This picture...',
                     '<25>{#f/17}* This is the one $(name) took of the very first Starling flower.'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* Not long after $(name) first arrived...',
                     '<25>{#f/17}* A little flower came down from outer space.',
                     '<25>{#f/23}* The first Starling flower ever seen on the outpost.',
                     '<25>{#f/22}* It landed out at the edge of the outpost, all alone...',
                     '<25>{#f/13}* So we huddled around it, with $(name) taking a picture for luck.'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* After $(name) took the picture, we were ready to head home.',
                     '<25>{#f/13}* But when we stood up to leave, we glanced back at the stars...',
                     '<25>{#f/15}* And then we saw it.',
                     '<25>{#f/23}* A thousand more flowers descending down from the heavens.',
                     '<25>{#f/17}* $(name) took my hand, and we stood there...',
                     '<25>{#f/17}* Stunned into silence.'
                  ],
                  ['<25>{#p/asriel1}{#f/17}* Despite all I did as a star, the memory of it still makes me smile.']
               ][Math.min(asrielinter.c_aa_flower++, 3)]
               : SAVE.data.b.oops
                  ? ["<32>{#p/basic}* 一张照片。\n* 没什么好说的。"]
                  : ["<32>{#p/basic}* 裱起来的这张照片是我拍的。"],
         c_aa_cabinet: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't find anything in here besides several of the exact same outfit.)"]
               : world.darker
                  ? ['<32>{#p/basic}* 衣柜。']
                  : [
                     '<32>{#p/basic}* 衣柜里挂满了黄蓝条纹衫。',
                     '<32>{#p/basic}* 有些东西还真是永恒不变啊...'
                  ],
         c_aa_box: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/23}* ... well, at least he glued them back together.',
                     '<25>{#f/13}* Dad always was the one to try and fix things like that.',
                     '<25>{#f/15}* Any time $(name) and I broke something...',
                     '<25>{#f/8}* Usually $(name)...',
                     "<25>{#f/17}* He'd swoop in and save the day with some good old arts 'n' crafts.",
                     '<25>{#f/20}* A true DIY hero!'
                  ],
                  [
                     "<25>{#p/asriel1}{#f/13}* Please don't tell him I called him a DIY hero.",
                     "<25>{#f/16}* He'd laugh at that.",
                     '<25>{#f/15}* But it was necessary with everything $(name) messed up.',
                     '<25>{#f/16}* A lot of their \"fun\" came from bothering others.',
                     '<25>{#f/13}* As a monster... that was difficult for me to understand.',
                     '<25>{#f/15}* Then... I became Twinkly.'
                  ],
                  ["<25>{#p/asriel1}{#f/17}* I'd play with these if I still had an interest in toys."],
                  ['<25>{#p/asriel1}{#f/20}* Do action figures count as toys?\n* Those are cool.']
               ][Math.min(asrielinter.c_aa_box++, 3)]
               : world.darker
                  ? ['<32>{#p/basic}* 一盒星际飞船模型。']
                  : [
                     "<32>{#p/basic}* 一盒星际飞船模型，\n  完好无损。",
                     '<33>{#p/basic}* 闻起来像老式胶水。'
                  ],
         c_aa_frame: () =>
            SAVE.data.b.svr
               ? [["<25>{#p/asriel1}{#f/23}* ... it's still here..."], ['<25>{#p/asriel1}{#f/22}* ...']][
               Math.min(asrielinter.c_aa_frame++, 1)
               ]
               : SAVE.data.b.oops
                  ? ["<32>{#p/basic}* 一张手绘。"]
                  : ["<32>{#p/basic}* 这是一张手绘...", '<32>* 画的是全家福。'],
         c_aa_paper: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You roll the crayon back and forth underneath your hand.)']
               : world.darker
                  ? ['<33>{#p/basic}* 几张纸，还有一支蜡笔。']
                  : ['<32>{#p/basic}* 那支蓝色蜡笔原来跑这了，\n  就放在这几张纸上。'],
         c_aa_deathbed: () =>
            SAVE.data.b.svr
               ? [
                  ['<25>{#p/asriel1}{#f/13}* ...'],
                  [
                     "<25>{#p/asriel1}{#f/23}* ... it's okay, Frisk.",
                     "<25>{#f/13}* Even if they don't come back...",
                     "<25>{#f/17}* We'll still remember them for what they did in the end."
                  ],
                  ['<25>{#p/asriel1}{#f/13}* Frisk...', '<25>{#f/17}* I know we have something better to do.']
               ][Math.min(asrielinter.c_aa_deathbed++, 2)]
               : world.darker
                  ? ["<32>{#p/basic}* 另一张床。"]
                  : SAVE.data.b.oops
                     ? ["<32>{#p/basic}* 这张床绝对没什么特别的。"]
                     : ['<32>{#p/basic}* 我的床。'],
         
         c_aa_chair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You appreciate the tiny chair for being able to hold someone so large.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一把椅子，\n  很适合坐在上面写日记。"]
                  : ["<32>{#p/basic}* 艾斯戈尔写日记时就坐着\n  这把椅子。"],
         c_aa_bed: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The bed seems to be way too large for you.)']
               : world.darker
                  ? ["<32>{#p/basic}* 国王尺寸的床。"]
                  : ["<32>{#p/basic}* 国王尺寸的床。\n* 也是国王的床。"],
         c_aa_diary: pager.create(
            0,
            ...CosmosUtils.populate(
               9,
               i => () =>
                  SAVE.data.b.svr
                     ? ['<32>{#p/human}* (The diary seems to outline important events in relation to Asgore.)']
                     : world.genocide || world.runaway
                        ? ['<32>{#p/human}* （你想看看日记，\n  却发现内页都被人撕了。）']
                        : SAVE.data.n.plot === 72
                           ? [
                              '<32>{#p/human}* （你看了一眼最近写好的日记。）',
                              '<32>{#p/asgore}* “终于，怪物一族自由了。”',
                              '<32>* “我们能得救，都是多亏了\n   弗里斯克和另外六个人类孩子。”',
                              '<32>* “安全起见，\n   艾菲斯博士搜索了前哨站外围，\n   看看会不会发现人类的踪迹。”',
'<32>* “但一无所获。”',
                              '<32>* “整个星系，\n   她连一艘人类星舰，一座太空站\n   都没找到。”',
                              '<32>* “太反常了。”',
                              '<32>* “人类是不是出事了？”\n* “还是说，他们忘了这个星系，\n   也忘了我们？”',
                              '<32>* “也许，我可以找弗里斯克\n   或其他孩子问问。”',
                              '<32>* “孩子们苏醒后，\n   其他怪物收养了他们。”',
                              '<32>* “有个孩子告诉我，\n   他们在档案里受尽了折磨，十分痛苦。”',
                              '<32>* “考虑到他们曾受过创伤，\n   我跟艾菲斯在帮他们挑选领养人时\n   都慎之又慎。”',
                              '<32>* “尽管现在有点难办，\n   但只要他们都活着，\n   我们都打心底里高兴。”',
                              '<32>* “搜索其他人类始终一无所获。\n   也许... 这几个孩子就是\n   人类最后的火种了。”'
                           ]
                           : [
                              [
                                 '<32>{#p/human}* （你看了一眼被标记的日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历516年1月。”',
                                 '<32>* “在这艰难的时刻，\n   身边却一个伙伴都没有，\n   只能聊以自慰。”',
                                 '<32>* “或许写几页日记\n   能缓解一下我的伤痛。”',
                                 '<32>* “此刻，我心中五味杂陈。”',
                                 '<32>* “我很愤怒，\n   人类的所作所为，孩子们遭的罪...\n   想到这些，我气不打一处来。”',
                                 '<32>* “我很内疚，\n   面对悲剧，自己却那么软弱无能，\n   一点骨气都没有。”',
                                 '<32>* “我很悲伤，\n   不愿相信，人生竟然如此残酷，”',
                                 '<32>* “故园毁灭之后，\n   每每想到自己有一天能结婚生子，\n   组建家庭，就有了希望。”',
                                 '<32>* “可我的孩子死了，\n   就这么死了。”',
                                 '<32>* “再怎么看航行日志，\n   结果都不会变。”',
                                 '<32>* “人死不能复生，事实就是事实。”',
                                 '<32>{#p/basic}* 看起来，从这页开始，\n  后面的日记就正常按\n  时间顺序排了。'
                              ],
                              [
                                 '<32>{#p/human}* （你翻到下一篇日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历516年2月。”',
                                 '<32>* “今天，葛森来看望我。”',
                                 '<32>* “他和我倾诉了自己的经历。”',
                                 '<32>* “他讲了在行星理事会的辉煌事业，\n   讲了和家人的分别，\n   还讲了自己身上的责任。”',
                                 '<32>* “他的故事触动了我。”',
                                 '<32>* “我得去好好安慰安慰他，\n   日记就先写到这吧，”'
                              ],
                              [
                                 '<32>{#p/human}* （你翻到下一篇日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历524年10月。”',
                                 '<32>* “$(name)死后，第一个人类\n   来到了前哨站。”',
                                 '<32>* “时间冲淡了怨恨，\n   怪物对人类的蔑视正逐渐平息...”',
                                 '<32>* “但表面的平静之下暗流涌动。\n   他们嘴上不说，\n   可不代表真的就会饶了人类。”',
                                 '<32>* “我和Thomas虽尽力保证他们的安全，\n   但以二人之力对抗民众谈何容易。”',
                                 '<32>* “当年，我赌气说要消灭人类，\n   结果到今天，很多民众还坚持那一套。”',
                                 '<32>* “只要人类被他们逮到，\n   不论年龄大小，都是死路一条。”',
                                 '<32>* “只有把孩子限制在首塔高墙以内，\n   才能保证孩子的安全。”'
                              ],
                              [
                                 '<32>{#p/human}* （你翻到下一篇日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历535年4月。”',
                                 '<32>* “又一个人类来到了这里。”',
                                 '<32>* “那孩子似乎很熟悉葛森，\n   很熟悉行星理事会的成员。”',
                                 '<32>* “我不禁问我自己。”\n   “为什么？”',
                                 '<32>* “这孩子，难不成\n   是听战争故事长大的？”',
                                 '<32>* “而且...\n   按照合约，只有人类军方\n   知道我们的位置。”',
                                 '<32>* “是他们把这孩子派了过来，\n   侦察我们，了解我们的现状...\n   还是我们的位置已经暴露？”',
                                 '<32>* “我希望是前者，\n   我希望我们仍然安全。”'
                              ],
                              [
                                 '<32>{#p/human}* （你翻到下一篇日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历549年7月。”',
                                 '<32>* “上一篇日记写完后不久，\n   又一个孩子坠落到这里。”',
                                 '<32>* “我和Thomas努力培养那孩子，\n   引导他早日参与科研工作。”',
                                 '<32>* “每来一个孩子，\n   自由的希望就又坚定几分。”',
                                 '<32>* “我越发相信，\n   只要那群建筑机器人不觉醒，\n   不推翻我们...”',
                                 '<32>* “那我们的自由就指日可待。”'
                              ],
                              [
                                 '<32>{#p/human}* （你翻到下一篇日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历567年11月。”',
                                 '<32>* “今天，我要跟第二个孩子道别了。”',
                                 '<32>* “今年来了两个孩子，\n   第一个马上就进了‘档案’里，\n   但另一个想再等一阵子。”',
                                 '<32>* “从那孩子身上，\n   我学到了许多东西。”',
                                 '<32>* “孩子太小，不太容易沟通。”',
                                 '<32>* “但从他身上\n   我看到了$(name)的影子，\n   也渐渐理解了$(name)。”',
                                 '<32>* “原来，怪物和人类还是挺像的。\n   之前都没意识到。”'
                              ],
                              [
                                 '<32>{#p/human}* （你翻到下一篇日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历587年3月。”',
                                 '<32>* “几天前，\n   第六个人类抵达了这里。”',
                                 '<32>* “那孩子刚到不久，教授就去世了。\n   因此，我想提笔写一篇日记。”',
                                 '<32>* “托马斯·努·罗曼。”\n  “几天后，就是你的葬礼。”',
                                 '<32>* “你的发明惠及这里的每一个人，\n   我们会永远铭记你。”',
                                 '<32>* “就连最傲慢的卫队新星，\n   都为你准备了悼词。”'
                              ],
                              [
                                 '<32>{#p/human}* （你翻到下一篇日记。）',
                                 '<32>{#p/asgore}* “艾斯戈尔的日记，克历615年9月。”',
                                 '<32>* “今天，距离那场可怕的灾难\n   已过去整整一百年，\n   最后一个人类坠落于此。”',
                                 '<32>* “突然间，向往已久的自由\n   却变得令人生畏。”',
                                 '<32>* “我们足足被困两百年。”',
                                 '<32>* “突然迎接自由，\n   怪物会不会如他所说，\n   ‘得意忘形’呢？”',
                                 '<32>* “我们去往何方？”',
                                 '<32>* “我们如何生存？”',
                                 '<32>* “能否自力更生？”',
                                 '<32>* “希望这些顾虑\n   很快就会消散。”'
                              ],
                              ['<32>{#p/human}* （再往后，就都是空白了。）']
                           ][i]
            )
         ),
         c_aa_bureau: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （你往衣柜里瞅了一眼...）',
                  ...[
                     ['<25>{#p/asriel1}{#f/19}* Looks like the humans got their clothes back.'],
                     ['<25>{#p/asriel1}{#f/19}* ...', '<25>* I regret ever wondering why they were in here.'],
                     [
                        '<25>{#p/asriel1}{#f/19}* I mean, it makes sense.',
                        "<25>* Knowing how long they'd be in the archive.",
                        '<25>* So... yeah.'
                     ],
                     ['<25>{#p/asriel1}{#f/19}* ...']
                  ][Math.min(asrielinter.c_aa_bureau++, 3)]
               ]
               : SAVE.data.n.plot === 72 || world.genocide || world.bad_robot || world.trueKills > 29
                  ? [
                     '<32>{#p/human}* （你往衣柜里瞅了一眼...）',
                     '<32>{#p/basic}* 看起来，所有的衣服\n  刚刚都被拿走了。'
                  ]
                  : [
                     '<32>{#p/human}* （你往衣柜里瞅了一眼...）',
                     "<32>{#p/basic}* 里面挂满了\n  各种奇怪的儿童服装。"
                  ],
         c_aa_macaroni: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/17}* ... do you like it?',
                     '<25>{#f/13}* This Starling flower was... the last thing I made for Dad.'
                  ],
                  [
                     "<25>{#p/asriel1}{#f/17}* What I can say for certain is... $(name) wasn't a fan.",
                     '<25>{#f/13}* They said \"stop making that stupid thing and get over here...\"',
                     '<25>{#f/22}* That was the day we...',
                     '<25>{#f/15}* ... you know.'
                  ],
                  ['<25>{#p/asriel1}{#f/20}* Always remember the Starling flower made of faux-macaroni.']
               ][Math.min(asrielinter.c_aa_macaroni++, 2)]
               : SAVE.data.b.oops
                  ? ['<32>{#p/basic}* 一朵星花，\n  由干燥的食材粘合而成。']
                  : ['<32>{#p/basic}* It\'s Asriel\'s hand-made Starling flower.\n* It says \"For King Dad.\"'],
         c_aa_underwear: () =>
            SAVE.data.n.plot === 72 && !SAVE.data.b.svr && !world.runaway
               ? []
               : [
                  '<32>{#p/human}* （你往里面瞅了瞅。）',
                  ...(SAVE.data.b.svr
                     ? [
                        ["<25>{#p/asriel1}{#f/17}* Frisk...\n* You're staring..."],
                        ['<25>{#p/asriel1}{#f/13}* Frisk...\n* Please...'],
                        ['<25>{#p/asriel1}{#f/15}* Frisk...\n* Why...'],
                        ['<25>{#p/asriel1}{#f/15}* ...']
                     ][Math.min(asrielinter.c_aa_underwear++, 3)]
                     : world.genocide || world.bad_robot
                        ? SAVE.data.b.c_state_switch1
                           ? ['<32>{#p/basic}* 没什么有价值的东西。']
                           : [
                              "<32>{#p/basic}* 里面有个开关...",
                              '<32>{#p/human}{#c.switch1}* （你按下了开关。）'
                           ]
                        : world.darker
                           ? ["<32>{#p/basic}* 只是个装内裤的床头柜。"]
                           : [
                              '<32>{#p/basic}* 真羞人！',
                              "<33>{#p/basic}* 这是艾斯戈尔的床头柜。\n  里面装着他的内裤。\n* 没想到居然这么整洁。",
                              '<33>{#p/basic}* ...大部分内裤\n  都是手工编织的粉色内裤。\n  上面锈着“大老爹”三个字。'
                           ])
               ]
      }
   },
   b_opponent_alphys: {
      artifact: ['<32>{#p/human}* （艾菲斯看了一眼，随即收回了目光。）'],
      name: '* 艾菲斯',
      gotcha: ['<20>{*}{#p/alphys}{#e/alphys/19}往哪里跑？{^30}{%}'],
      act_check: ['<32>{#p/asriel2}* 艾菲斯。\n* 皇家科学员。'],
      act_asriel: (i: number) => [
         ...[
            [
               '<32>{#p/asriel2}* 终于，我可以稍微驾驭\n  这副新身体的力量了...',
               "<32>{#p/asriel2}* 就让她好好瞧瞧我真正的力量吧。"
            ],
            ["<32>{#p/asriel2}* 记住，连着两次施放同一种法术的话，\n  魔力会减弱。"],
            ['<32>{#p/asriel2}* 记住，混合施放多种法术。'],
            []
         ][Math.min(SAVE.flag.n.ga_asrielAssist++, 3)],
         choicer.create(
            '* （艾斯利尔应该施放什么法术？）',
            `${i === 0 ? '{@fill=#808080}' : ''}夜幕{@fill=#fff}`,
            `${i === 1 ? '{@fill=#808080}' : ''}至日{@fill=#fff}`,
            `${i === 2 ? '{@fill=#808080}' : ''}晚星{@fill=#fff}`,
            `${i === 3 ? '{@fill=#808080}' : ''}月蚀{@fill=#fff}`
         )
      ],
      act_asriel_text: [
         ['<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  将一股力量注入你的身体。）'],
         ['<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  低语了一段古老的咒文。）'],
         ['<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  唱了一首古老的摇篮曲。）'],
         ['<32>{#p/human}* （艾斯利尔将手放在你的额头上，\n  在你周围筑起一道保护光环。）']
      ],
      act_asriel_confirm: [
         ['<32>{#p/story}* 本回合，你的专注力提升！'],
         ['<32>{#p/story}* 本回合，你的无敌帧延长！'],
         ['<32>{#p/story}* 本回合，你的自愈力提升！'],
         ['<32>{#p/story}* 本回合，你的防御力提升！']
      ],
      epiphaNOPE: ['<20>{#p/alphys}{#e/alphys/19}想得美。'],
      statusX: ['<32>{#p/asriel2}* ...'],
      statusY: ["<32>{#p/asriel2}* 她快死了！\n* 继续攻击！"],
      status1a: ['<32>{#p/asriel2}* 艾菲斯...'],
      status1r: () =>
         [
            ['<32>{#p/asriel2}* If you need my help, just ask.'],
            ["<32>{#p/asriel2}* I'll be here if you need my help."],
            ['<32>{#p/asriel2}* 做你该做的事。']
         ][Math.min(SAVE.flag.n.ga_asrielAlphysHint++, 2)],
      status1b: ["<33>{#p/asriel2}* 她竟然没逃跑...\n* 有意思。"],
      status1c: ['<32>{#p/asriel2}* 做你该做的事，懂吧。'],
      status1d: ["<32>{#p/asriel2}* 嘿...\n* 你看她是不是有点累了？"],
      status2a: ["<32>{#p/asriel2}* 怎么了，艾菲斯？\n* 撑不住了？"],
      status2r1: ['<32>{#p/asriel2}* 呃，再听一遍吧...'],
      status2b: ['<32>{#p/asriel2}* 来，让我们好好听听\n  你的凄惨故事。'],
      status2c: ["<32>{#p/asriel2}* 你竟然没贯彻逃跑精神，\n  我可真惊讶呢。"],
      status2d: ['<32>{#p/asriel2}* 故事真精彩呢，“爱妃死”博士。'],
      status2e: ['<32>{#p/asriel2}* ...？'],
      status2r2: ["<32>{#p/asriel2}* 准备好，战斗形势要变了。"],
      status3a: ['<32>{#p/asriel2}* 好... 形势严峻起来了。'],
      status3b: ["<32>{#p/asriel2}* ...看来艾菲斯放弃防御了。\n* 抓住这个机会！"],
      status3c: ['<32>{#p/asriel2}* 坚持住，$(name)...'],
      turnTalk1a: [
         "<20>{#p/alphys}{#e/alphys/19}要是连一下都扛不住，\n我怎么可能来这？",
         '<20>{#p/alphys}{#e/alphys/23}看来，\n是高估你们的智商了。'
      ],
      turnTalk1b: [
         '<20>{#p/alphys}{#e/alphys/19}无话可说？',
         "<20>{#e/alphys/18}...那就我自己说，\n你们爱听不听。"
      ],
      turnTalk1c: [
         "<20>{#p/alphys}{#e/alphys/19}对，\n就是我，艾菲斯。",
         '<20>{#e/alphys/18}因为，\n只有我，亲眼目睹了\n你们的一举一动。',
         '<20>{#e/alphys/19}也只有我，\n才清楚你们潜在的力量\n有多么可怕。'
      ],
      turnTalk1d: [
         '<20>{#p/alphys}{#e/alphys/19}尽情挥霍\n你那些珍贵的物品。',
         "<20>{#e/alphys/18}就那些东西，唬不到我。"
      ],
      turnTalk2: [
         "<20>{#p/alphys}{#e/alphys/19}...人类，\n我研究你们文化很多年了。",
         "<20>{#e/alphys/19}你会担下所有战斗，\n我一点也不意外。"
      ],
      turnTalk3: [
         '<20>{#p/alphys}{#e/alphys/18}而你呢，艾斯利尔...\n你利用人类，\n拿伙伴当保护伞。',
         "<20>{#e/alphys/52}为了什么呢？\n你怕一旦自己动手，\n偷来的灵魂就会破碎？"
      ],
      turnTalk4: [
         "<20>{#p/alphys}{#e/alphys/51}还是说，\n你怕自己被人类淡忘，\n活时视如草芥，\n死后弃若敝履？",
         "<20>{#e/alphys/17}呵，\n还挺有诗意的。"
      ],
      turnTalk5: [
         '<20>{#p/alphys}{#e/alphys/16}但是，我来这教训你，\n绝不是因为你想\n找人类寻求安慰，',
         '<20>{#e/alphys/52}而是因为...',
         '<20>{#e/alphys/19}我亲身体会到\n挚友离去，无依无靠\n那种孤独的滋味。'
      ],
      turnTalk6: [
         "<20>{#p/alphys}{#e/alphys/23}但你俩不会懂的，\n对吧？",
         "<20>{#e/alphys/19}你们两个罪恶滔天，\n谁也拦不住，\n怎么可能亲身体会\n我们的痛苦呢？",
         '<20>{#e/alphys/22}怎么可能呢？'
      ],
      turnTalk7: [
         '<20>{#p/alphys}{#e/alphys/19}罢了，你们想怎样，\n我都不在乎了。',
         '<20>{#e/alphys/52}...这么看，\n我可真傻...',
         '<20>{#e/alphys/51}之前居然还妄想\n能拉你一把，\n让你浪子回头。'
      ],
      turnTalk8: [
         '<20>{#p/alphys}{#e/alphys/52}毕竟，\n是我给了那星星生命...',
         "<20>{#e/alphys/51}出了事，\n也该我来负责。"
      ],
      turnTalk9: [
         '<20>{#p/alphys}{#e/alphys/19}...不过，\n现在我懂你们\n为什么执迷不悟了。',
         '<20>{#e/alphys/18}我没猜错的话，\n你们中肯定有人\n拥有那股力量...',
         '<20>{#e/alphys/19}那股可以回溯时间，\n逆天改命的力量...'
      ],
      turnTalk10: [
         "<20>{#p/alphys}{#f/alphys/18}果真如此的话，\n那其他人真得小心了。",
         "<21>{#e/alphys/23}如果一个人能为所欲为，\n还不用承担任何过错，\n那他怎么可能\n在乎别人的感受呢？"
      ],
      turnTalk11: ['<20>{#z1}{#p/alphys}{#e/alphys/21}...', '<21>{#e/alphys/39}让我歇歇。'],
      broken: ['<20>{*}{#p/alphys}{#e/alphys/45}谢了。{^20}{%}'],
      turnTalk12: [
         "<20>{#z2}{#p/alphys}{#e/alphys/7}安黛因牺牲后，\n我不知道该怎么办。",
         '<20>{#e/alphys/46}我马上逃离了实验室，\n希望逃得越远越好。'
      ],
      turnTalk13: [
         '<20>{#p/alphys}{#e/alphys/47}可是越逃跑，\n我就对自己越失望。',
         '<20>{#e/alphys/48}难道我就这么袖手旁观，\n眼睁睁看着我族同胞\n一个个死去？'
      ],
      turnTalk14: [
         '<20>{#p/alphys}{#e/alphys/21}...这未免太绝情了。',
         '<21>{#e/alphys/39}更何况...',
         '<20>{#e/alphys/45}我再怎么自责\n都没法改变现状。'
      ],
      turnTalk15: [
         "<20>{#p/alphys}{#e/alphys/39}安黛因说，\n你们要杀死\n这星河中的每个人...",
         "<20>{#e/alphys/40}但其实，\n你们的野心不止如此，\n对吧？"
      ],
      turnTalk16: [
         '<20>{#z3}{#p/alphys}{#e/alphys/48}...',
         "<20>{#e/alphys/47}让那星星复活是我的错。\n但你们的罪孽，\n跟我一分钱关系没有。",
         "<20>{#e/alphys/38}我管你们打的什么算盘，\n都得给我付出代价。",
         '<20>{*}{#z4}{#e/alphys/54}哪怕...{^10}{%}',
         '<20>{*}{#e/alphys/25}我会因此疯掉！{^10}{%}'
      ],
      turnTalk17: ['<20>{#p/alphys}{#e/alphys/25}接招！！'],
      turnTalk18: ['<20>{#p/alphys}{#e/alphys/25}再来！！'],
      turnTalk19: ['<20>{#p/alphys}{#e/alphys/25}再来这招！！'],
      turnTalk20: ['<20>{#p/alphys}{#e/alphys/24}哈哈哈...'],
      turnTalk21: ['<20>{#p/alphys}{#e/alphys/26}...'],
      turnTalk22: ['<20>{#p/alphys}{#e/alphys/27}给我去死！！'],
      turnTalk23: ['<20>{#p/alphys}{#e/alphys/27}...'],
      done0: (b: boolean) =>
         b
            ? ['<20>{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}', '<20>{*}{#e/alphys/43}这么快我就...{^40}{%}']
            : ['<20>{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}', '<20>{*}{#e/alphys/43}你们...{^40}{%}'],
      done1: (b: boolean) =>
         b
            ? ["<20>{*}没-没想到你们这么强...{^40}{%}", '<20>{*}我现在明白了，\n与你们为敌...{^40}{%}']
            : ["<20>{*}我是不是...\n快-快要死了？{^40}{%}", '<20>{*}尽了全力，还是...{^40}{%}'],
      done2: (b: boolean) =>
         b ? ['<20>{*}{#p/alphys}根本毫无胜算。{^40}{%}'] : ["<20>{*}{#p/alphys}艾斯戈尔，我对不起你。{^40}{%}"]
   },
   b_opponent_archive1: {
      name: () => (battler.volatile[0].sparable ? '* 托丽尔' : '* e68998e4b8bde5b094'),
      status0: ['<32>{#p/human}* （此刻，e68998e4b8bde5b094\n  正站在你的面前。）'],
      status1: ['<32>{#p/human}* （看起来，要按特定的顺序行动，\n  e68998e4b8bde5b094才能完成任务。）'],

      act_dinnertimeX: ['<32>{#p/human}* （可是，你已经吃过晚餐了。）'],
      dinnerTalk: ['<11>{#p/toriel}孩子，\n{@fill=#42fcff}{@mystify=吃慢点喫漫奌}吃慢点{@mystify=}{@fill=#ffffff}。'],
      dinnerStatus: ['<32>{#p/human}* （看起来，e68998e4b8bde5b094\n  想给你读点什么。）'],

      act_storytimeX: ['<32>{#p/human}* （可是，你们已经读完故事了。）'],
      act_storytimeE: ['<32>{#p/human}* （可是，e68998e4b8bde5b094\n  现在还不想给你读故事。）'],
      storyTalk: [
         '<11>{#p/toriel}从前，\n有一只{@fill=#42fcff}{@mystify=怪物圣忽恠㹅径勿}怪物{@mystify=}{@fill=#ffffff}...'
      ],
      storyStatus: ['<32>{#p/human}* （e68998e4b8bde5b094\n  还想为你做一件事。）'],

      act_bedtimeX: ['<32>{#p/human}* （可是，她已经哄过你了。）'],
      act_bedtimeE: ['<32>{#p/human}* （可是，e68998e4b8bde5b094\n  现在和不想哄你睡觉。）'],
      bedTalk: ['<11>{#p/toriel}孩子，晚安。'],
      bedStatus: ['<32>{#p/human}* （托丽尔完成了自己的使命。）'],

      act_talkE: ["<32>{#p/human}* （可是，e68998e4b8bde5b094\n  还没有完成她的使命。）"],
      act_talkN: ['<32>{#p/human}* （在消散前，托丽尔送给你\n  一则人生心得。）'],

      act_puzzlehelp: ['<32>{#p/human}* （可是，谜题都解完了。）'],
      puzzlehelpTalk1: [
         '<11>{#p/toriel}孩子，\n你{@fill=#42fcff}{@mystify=饿餓不我钚芣々}饿不饿{@mystify=}{@fill=#ffffff}？'
      ],
      puzzlehelpTalk2: [
         '<11>{#p/toriel}孩子，\n你{@fill=#42fcff}{@mystify=睡不着吗}睡不着吗{@mystify=}{@fill=#ffffff}？'
      ],
      puzzlehelpTalk3: [
         '<11>{#p/toriel}孩子，\n你{@fill=#42fcff}{@mystify=困睏囷不钚芣々}困不困{@mystify=}{@fill=#ffffff}？'
      ]
   },
   b_opponent_archive2: {
      name: () => (battler.volatile[0].sparable ? '* 葛森' : '* e8919be6a3ae'),
      status0: ['<32>{#p/human}* （e8919be6a3ae\n  正站在训练场的对面。）'],
      status1: ['<32>{#p/human}* （e8919be6a3ae让你先出招。）'],

      act_challengeX: ['<32>{#p/human}* （可是，你已经通过挑战了。）'],
      act_challengeR: ['<32>{#p/human}* （可是，失败之后，你需要休息。）'],
      challengeTalk: [
         '<11>{#p/basic}心怀{@fill=#ff993d}{@mystify=勇气勈氣甬気力乞}勇气{@mystify=}{@fill=#ffffff}，\n才能克服恐惧。'
      ],

      challengeFail: [
         '<11>{*}{#p/basic}不合格！\n下回{@fill=#ff993d}{@mystify=专注專註传主抟宔}专注{@mystify=}{@fill=#ffffff}\n一点！{^30}{%}'
      ],
      failStatus: ["<32>{#p/human}* （e8919be6a3ae觉得\n  你应该休息一下。）"],
      successStatus: ['<32>{#p/human}* （葛森完成了自己的使命。）'],

      act_restA: ['<32>{#p/human}* （可是，你现在还不累。）'],
      restTalk: [
         '<11>{#p/basic}一名\n够格的{@fill=#ff993d}{@mystify=英雄偀䧺央隹䇦难}英雄{@mystify=}{@fill=#ffffff}\n绝不会逞强。'
      ],
      restStatus: ['<32>{#p/human}* （e8919be6a3ae很期待\n  你下回出什么招。）'],

      act_handshakeE: ["<32>{#p/human}* （可是，e8919be6a3ae对你的\n  一对一训练还未结束。）"],
      act_handshakeN: ['<32>{#p/human}* （在消散前，葛森把最喜欢的\n  握手方式教给了你。）'],

      act_taunt: ['<32>{#p/human}* （可是，e8919be6a3ae\n  无视了你的手势。）'],

      act_advice: ['<32>{#p/human}* （可是，他已经把所有建议\n  都告诉你了。）'],
      adviceTalk1: [
         '<11>{#p/basic}做事，\n一定要{@fill=#ff993d}{@mystify=果断菓斷课颗䉼畨}果断{@mystify=}{@fill=#ffffff}。'
      ],
      adviceTalk2: [
         '<11>{#p/basic}人在{@fill=#ff993d}{@mystify=逆境屰辶竟朔昱圼}逆境{@mystify=}{@fill=#ffffff}中\n才能成长。'
      ],
      adviceTalk3: [
         '<11>{#p/basic}学会{@fill=#ff993d}{@mystify=謙遜谦逊兼孙尲荪}谦逊{@mystify=}{@fill=#ffffff}，\n方能成功。'
      ]
   },
   b_opponent_archive3: {
      name: () => (battler.volatile[0].sparable ? '* 罗曼教授' : '* e7bd97e69bbce69599e68e88'),
      status0: ['<32>{#p/human}* （现在，\n  是e7bd97e69bbce69599e68e88\n  掌控着大局。）'],
      status1: ['<32>{#p/human}* （e7bd97e69bbce69599e68e88\n  想在你身上做些实验。）'],

      act_object: ['<32>{#p/human}* （可是，你的请求立刻被驳回了。）'],

      act_testX: ['<32>{#p/human}* （可是，你已经做过这个实验了。）'],
      testTalkA: ['<11>请{#p/basic}{@fill=#003cff}{@mystify=站着别动}站着别动{@mystify=}{@fill=#ffffff}...'],
      testTalkB: ['<11>{#p/basic}{@fill=#003cff}{@mystify=好戏奸妙对戈戋奴}好戏{@mystify=}{@fill=#ffffff}\n才刚刚开始。'],
      testTalkC: [
         '<11>{#p/basic}看，这就是\n探寻真理的\n{@fill=#003cff}{@mystify=力量仂哩艻童劜里}力量{@mystify=}{@fill=#ffffff}。'
      ],
      testStatus1: ['<32>{#p/human}* （e7bd97e69bbce69599e68e88\n  准备进行下一场实验了。）'],
      testStatus2: ['<32>{#p/human}* （罗曼教授完成了他的使命。）'],

      act_notesE: ["<32>{#p/human}* （可是，e7bd97e69bbce69599e68e88\n  还不想跟你交换笔记。）"],
      act_notesN: ['<32>{#p/human}* （在消散前，罗曼教授把笔记\n  交给了你。）']
   },
   b_opponent_archive4: {
      name: () => (battler.volatile[0].sparable ? '* 纳普斯特' : '* e7bab3e699aee696afe789b9'),
      status0: ['<32>{#p/human}* （e7bab3e699aee696afe789b9\n  正飘在电脑旁。）'],
      status1: ['<32>{#p/human}* （e7bab3e699aee696afe789b9\n  想写一首新曲子。）'],

      act_sampleX: ['<32>{#p/human}* （可是，你采集的音频样本\n  已经够用了。）'],
      sampleTalk: [
         '<11>{#p/napstablook}这个音色\n效果应该\n{@fill=#d535d9}{@mystify=不错钚錯芣昔否剒}不错{@mystify=}{@fill=#ffffff}...'
      ],
      sampleStatus: ['<32>{#p/human}* （e7bab3e699aee696afe789b9\n  要开始作曲了。）'],

      act_composeX: ['<32>{#p/human}* （但你已经作完曲了。）'],
      act_composeE: ['<32>{#p/human}* （但你还没有采样，\n  音频样本不够，无法作曲。）'],
      composeTalk: [
         "<11>{#p/napstablook}来{@fill=#d535d9}{@mystify=听口斤々}听听{@mystify=}{@fill=#ffffff}\n这首怎么样..."
      ],

      composeFail: [
         '<11>{*}{#p/napstablook}唉...\n{@fill=#d535d9}{@mystify=再来一遍}再来一遍{@mystify=}{@fill=#ffffff}吧...{^30}{%}'
      ],
      failStatus: ['<32>{#p/human}* （e7bab3e699aee696afe789b9\n  想再试一次。）'],
      composeStatus: ['<32>{#p/human}* （e7bab3e699aee696afe789b9\n  现在要开始混音了。）'],

      act_mixX: ['<32>{#p/human}* （可是，混音已经完成了。）'],
      act_mixE: ['<32>{#p/human}* （可是，你还没有创作曲子，\n  缺少混音素材。）'],
      mixTalk: [
         '<11>{#p/napstablook}我得保证\n各声部音量\n相互{@fill=#d535d9}{@mystify=平衡干衙芈行彳鱼}平衡{@mystify=}{@fill=#ffffff}...'
      ],

      mixFail: [
         "<11>{*}{#p/napstablook}哦...\n看来咱们要\n{@fill=#d535d9}{@mystify=重新混音}重新混音{@mystify=}{@fill=#ffffff}了...{^30}{%}"
      ],
      successStatus: ['<32>{#p/human}* （纳普斯特完成了它的使命。）'],

      act_secretE: ["<32>{#p/human}* （可是，e7bab3e699aee696afe789b9\n  还不想把秘密告诉你。）"],
      act_secretN: ['<32>{#p/human}* （在消散前，纳普斯特\n  告诉你一个秘密。）'],

      act_praise: ['<32>{#p/human}* （可是，它太自卑了，\n  没听到你的赞美。）']
   },
   b_opponent_archive5: {
      name: () => (battler.volatile[0].sparable ? '* 艾斯戈尔' : '* e889bee696afe68888e5b094'),
      status0: ['<32>{#p/human}* （e889bee696afe68888e5b094\n  身材魁梧，站在你的面前。）'],
      status1: ['<32>{#p/human}* （e889bee696afe68888e5b094\n  只有一件事有求于你。）'],

      act_hugX: ['<32>{#p/human}* （可是，没必要再抱他一次了。）'],
      hugTalk: ['<11>{#p/asgore}孩子，谢谢你。'],
      hugStatus: ['<32>{#p/human}* （艾斯戈尔完成了他的使命。）'],

      act_promiseE: ["<32>{#p/human}* （可是，e889bee696afe68888e5b094\n  还有任务在身。）"],
      act_promiseN: ['<32>{#p/human}* （在消散前，\n  艾斯戈尔向你做了个承诺。）']
   },
   b_opponent_asriel: {
      artifact: ["<32>{#p/human}* （似乎艾斯利尔对它没什么兴趣。）"],
      refuse: '{*}{#p/event}{#i/3}但是它拒绝了。',
      name: () =>
         battler.volatile[0].container.objects[0]?.metadata.power === true
            ? '§fill=#ff7f7f§§swirl=2/1/1.05§§hue§* 艾斯利尔·逐梦'
            : '* 艾斯利尔·逐梦',
      status0: pager.create(
         0,
         (power = false) =>
            power
               ? ['<32>{#p/story}* 艾斯利尔准备施放“裂空飞星”。']
               : SAVE.data.b.oops
                  ? ["<32>{#p/story}* 这里就是终点了。"]
                  : ['<32>{#p/basic}* 艾斯利尔...？'],
         (power = false) =>
            power
               ? ['<32>{#p/story}* 艾斯利尔准备施放“裂空飞星”。']
               : SAVE.data.b.oops
                  ? ["<32>{#p/story}* 这里就是终点了。"]
                  : ['<32>{#p/basic}* ...']
      ),
      act_check: () =>
         SAVE.data.b.oops
            ? [
               '<32>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* 藉由哨站灵魂凝心聚力\n  铸成传奇之躯。'
            ]
            : ['<32>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* ...'],
      act_hope: [
         '<32>{#p/human}* （你紧握希望。）\n* （你感觉有一股无形之力\n  保护着身体。）',
         '<32>{#p/story}* 本回合，你的防御力提升！'
      ],
      act_dream: [
         "<32>{#p/human}* （你回想起自己为何站立于此。）\n* （你感觉到自己的伤口\n  正逐渐愈合。）",
         '<32>{#p/story}* 本回合，你的自愈力提升！'
      ],
      act_flirt1: ['<32>{#p/human}* （你向艾斯利尔调情。）\n* （什么都没发生。）'],
      act_flirt2: [
         '<32>{#p/human}* （你向艾斯利尔调情。）\n  （又跟他身体里的每个灵魂调情。）',
         '<32>{#p/basic}* 那神情，在艾斯利尔的灵魂深处\n  不停回响...',
         "<32>* ...他手足无措，\n  只能用心去回应你！"
      ],
      act_pet: (count: number) =>
         SAVE.flag.n.pacifist_marker === 8
            ? ["<32>{#p/human}* （你想摸摸艾斯利尔，\n  但他离你太远了，够不着。）"]
            : [
               ...[
                  ["<32>{#p/human}* （你摸了摸艾斯利尔。）\n* （他好像有点手足无措。）"],
                  ["<32>{#p/human}* （你又摸了摸艾斯利尔。）\n* （他更加手足无措了。）"],
                  ["<32>{#p/human}* （你捋了捋艾斯利尔的毛。）\n* （艾斯利尔脸红了，\n  避开了你的目光。）"],
                  ["<32>{#p/human}* （你揉了揉艾斯利尔的头。）\n* （他竭力掩藏自己的喜悦。）"],
                  ["<32>{#p/human}* （你挠了挠艾斯利尔的脖子。）\n* （他很享受，但没表现出来。）"],
                  [
                     "<32>{#p/human}* （你不停玩弄艾斯利尔的耳朵。）\n* （他十分后悔自己居然乐在其中。）"
                  ],
                  ["<32>{#p/human}* （你拍了拍艾斯利尔的脊背。）\n* （他开始疑惑你到底想干什么。）"],
                  [
                     "<32>{#p/human}* （你紧紧搂住了艾斯利尔的腿。）\n* （他被你一连串的亲昵举动\n  吓愣了。）"
                  ],
                  [
                     "<32>{#p/human}* （你捏了捏艾斯利尔的爪子。）\n* （艾斯利尔没有反抗，任由你摆布。）"
                  ],
                  ["<32>{#p/human}* （你跟艾斯利尔碰了碰鼻。）\n* （艾斯利尔彻底放弃抵抗了。）"],
                  ["<32>{#p/human}* （你温柔地抚摸艾斯利尔的脸蛋。）\n* （他似乎想起了某位故人。）"],
                  ['<32>{#p/human}* （你继续抚摸艾斯利尔。）\n* （他轻声叹息。）'],
                  ['<32>{#p/human}* （你继续抚摸艾斯利尔。）\n* （他轻声叹息。）']
               ][count],
               "<32>{#p/story}* 本回合，艾斯利尔的攻击力下降！"
            ],
      turnTalk1: (fluff: boolean) =>
         fluff
            ? [
               '<20>{*}{#p/asriel3}{#e/asriel/3}现在...',
               "<20>{*}{#p/asriel3}{#e/asriel/6}我... 再也不想\n毁灭这前哨站了。"
            ]
            : [
               '<20>{*}{#p/asriel3}{#e/asriel/3}现在...',
               "<20>{*}{#p/asriel3}{#e/asriel/6}我再也不想\n毁灭这前哨站了。"
            ],
      status1: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 艾斯利尔准备施放“怒吼风暴”。']
            : ["<32>{#p/basic}* 可你不是... 已经..."],
      turnTalk2: (fluff: boolean) =>
         fluff
            ? [
               '<20>{*}{#p/asriel3}{#e/asriel/3}等-等我打败了你，\n重新掌控整条时间线...',
               '<20>{*}{#p/asriel3}{#e/asriel/2}我只想...\n把一切倒回原点。'
            ]
            : [
               '<20>{*}{#p/asriel3}{#e/asriel/3}等我打败了你，\n重新掌控整条时间线...',
               '<20>{*}{#p/asriel3}{#e/asriel/2}我只想\n把一切倒回原点。'
            ],
      status2: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 艾斯利尔即将召唤“泰坦巨刃”。']
            : ['<32>{#p/basic}* 你怎么可能...'],
      turnTalk3: (fluff: boolean) =>
         fluff
            ? [
               "<20>{*}{#p/asriel3}{#e/asriel/3}你的旅程...\n大家的记忆...",
               "<20>{*}{#p/asriel3}{#e/asriel/2}我-我会将它们\n全部抹除！"
            ]
            : [
               "<20>{*}{#p/asriel3}{#e/asriel/3}你的旅程...\n大家的记忆...",
               "<20>{*}{#p/asriel3}{#e/asriel/2}我会将它们全部抹除！"
            ],
      status3: () =>
         SAVE.data.b.oops ? ['<32>{#p/story}* 艾斯利尔正在蓄力“混沌冲击”。'] : ['<32>{#p/basic}* ...'],
      turnTalk4: (fluff: boolean) =>
         fluff
            ? ['<20>{*}{#p/asriel3}{#e/asriel/0}之后... 让一切...\n重新来过。']
            : ['<20>{*}{#p/asriel3}{#e/asriel/0}之后，让一切重新来过。'],
      status4: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 艾斯利尔准备施放“怒吼风暴”。']
            : ['<32>{#p/basic}* ...嘿...\n* 我觉得，托丽尔之前肯定也是\n  这么想的。'],
      turnTalk5: (fluff: boolean) =>
         fluff
            ? [
               '<20>{*}{#p/asriel3}{#e/asriel/1}而且，你-你知道\n最棒的部分是什么吗？',
               "<20>{*}{#p/asriel3}{#e/asriel/0}这一切，\n都是你亲手铸成的。"
            ]
            : [
               '<20>{*}{#p/asriel3}{#e/asriel/1}而且，你知道\n最棒的部分是什么吗？',
               "<20>{*}{#p/asriel3}{#e/asriel/0}这一切，\n都是你亲手铸成的。"
            ],
      status5: () =>
         SAVE.data.b.oops ? ['<32>{#p/story}* 艾斯利尔正在蓄力“混沌冲击”。'] : ['<32>{#p/basic}* ...可是，我...'],
      turnTalk6: (fluff: boolean) =>
         fluff
            ? ["<20>{*}{#p/asriel3}{#e/asriel/3}那时...\n你-你将再度成为\n我的手下败将。"]
            : ["<20>{*}{#p/asriel3}{#e/asriel/3}那时，你将再度成为\n我的手下败将。"],
      status6: () =>
         SAVE.data.b.oops ? ['<32>{#p/story}* 艾斯利尔准备施放“裂空飞星”。'] : ['<32>{#p/basic}* ...'],
      turnTalk7: (fluff: boolean) =>
         fluff ? ['<20>{*}{#p/asriel3}{#e/asriel/4}永-永远别想赢我。'] : ['<20>{*}{#p/asriel3}{#e/asriel/4}永远别想赢我。'],
      status7: () =>
         SAVE.data.b.oops ? ['<32>{#p/story}* 艾斯利尔即将召唤“泰坦巨刃”。'] : ['<32>{#p/basic}* 除非...'],
      turnTalk8: (fluff: boolean) =>
         fluff
            ? ['<20>{*}{#p/asriel3}{#e/asriel/2}永远... 别-别想赢我！']
            : ['<20>{*}{#p/asriel3}{#e/asriel/2}永远，别想赢我！'],
      status8: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 艾斯利尔准备施放“歼星爆冲”。']
            : ['<32>{#p/basic}* ...该死...'],
      turnTalk9: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? ['<20>{*}{#p/asriel3}{#e/asriel/3}因为... 你-你想证明\n自己“实力出众”。']
               : ['<20>{*}{#p/asriel3}{#e/asriel/3}因为，你想证明\n自己“实力出众”。']
            : fluff
               ? ['<20>{*}{#p/asriel3}{#e/asriel/3}因为...\n你-你想让一切\n“完美收官”。']
               : ['<20>{*}{#p/asriel3}{#e/asriel/3}因为，你想让一切\n“完美收官”。'],
      status9: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 艾斯利尔正在蓄力“雷霆巨刃”。']
            : ["<32>{#p/basic}* 你早就应该死了啊！"],
      turnTalk10: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? ['<20>{*}{#p/asriel3}{#e/asriel/1}...因为... \n你-你想证明\n自己“是条硬汉”。']
               : ['<20>{*}{#p/asriel3}{#e/asriel/1}...因为，你想证明\n自己“是条硬汉”。']
            : fluff
               ? ['<20>{*}{#p/asriel3}{#e/asriel/1}...因为...\n你-你“爱着你的朋友”。']
               : ['<20>{*}{#p/asriel3}{#e/asriel/1}...因为，\n你“爱着你的朋友”。'],
      status10: () =>
         SAVE.data.b.oops ? ['<32>{#p/story}* 艾斯利尔准备施放“末日风暴”。'] : ['<32>{#p/basic}* 呃啊...'],
      turnTalk11: (fluff: boolean) =>
         fluff
            ? ['<20>{*}{#p/asriel3}{#e/asriel/1}...因-因为，\n你充满“决心”。']
            : ['<20>{*}{#p/asriel3}{#e/asriel/1}...因为，\n你充满“决心”。'],
      status11: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 艾斯利尔准备施放“碎空星爆”。']
            : ['<32>{#p/basic}* 以前...\n  他跟托丽尔吵了那么多次...'],
      turnTalk12: (fluff: boolean) =>
         fluff
            ? [
               "<20>{*}{#p/asriel3}{#e/asriel/6}是-是那些力量...\n带你一步步走到今天...",
               '<20>{*}{#p/asriel3}{#e/asriel/3}也-也是那些力量...\n如今将把你推向\n无尽深渊！',
               "<20>{*}{#p/asriel3}{#e/asriel/2}是不是很棒啊？"
            ]
            : [
               "<20>{*}{#p/asriel3}{#e/asriel/6}是那些力量，\n带你一步步走到今天...",
               '<20>{*}{#p/asriel3}{#e/asriel/3}也是那些力量，\n如今将把你推向\n无尽深渊！',
               "<20>{*}{#p/asriel3}{#e/asriel/2}是不是很棒啊？"
            ],
      status12: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 艾斯利尔即将召唤“终极毁灭”。']
            : ['<32>{#p/basic}* ...他真有那么...\n  ...想我吗？'],
      turnTalk13: (fluff: boolean) =>
         fluff
            ? [
               '<20>{*}{#p/asriel3}{#e/asriel/0}...胡闹... 到此为止！',
               "<20>{*}{#p/asriel3}{#e/asriel/5}现在...\n是时候彻底抹去\n这条时间线了！"
            ]
            : [
               '<20>{*}{#p/asriel3}{#e/asriel/0}胡闹到此为止！',
               "<20>{*}{#p/asriel3}{#e/asriel/5}现在，\n是时候彻底抹去\n这条时间线了！"
            ],
      turnTalk14: [
         "<20>{*}{#p/asriel3}{#e/asriel/1}...吃下刚刚一击，\n你居然还有力气\n抵抗我？",
         '<20>{*}{#p/asriel3}{#e/asriel/5}哇...\n真不能小瞧你啊。',
         "<20>{*}{#p/asriel3}{#e/asriel/0}但也别高兴太早。",
         "<20>{*}{#p/asriel3}{#e/asriel/0}刚刚，我只动用了\n我实力的冰山一角！",
         "<20>{*}{#p/asriel3}{#e/asriel/2}就让我好好瞧瞧\n你的决心能不能\n扛下这一击！！"
      ],
      hyperTalk1a: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}呃哈哈哈...',
         '<20>{*}{#p/asriel3}{#e/asriel/2}见识下\n我真正的力量吧！'
      ],
      hyperTalk1b: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}什-\n你是怎么全躲开的？！',
         '<20>{*}{#p/asriel3}{#e/asriel/5}呃...'
      ],
      hyperTalk2a: ['<20>{*}{#p/asriel3}{#e/asriel/1}再来...！'],
      hyperTalk2b: [
         '<20>{*}{#p/asriel3}{#e/asriel/5}什么...',
         "<20>{*}{#p/asriel3}{#e/asriel/4}你怎么还没死啊？！"
      ],
      hyperTalk3a: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}我能感受到...',
         '<20>{*}{#p/asriel3}{#e/asriel/2}你每死一次，\n与这个世界的连接\n就弱一点。',
         '<20>{*}{#p/asriel3}{#e/asriel/2}你每死一次，\n朋友们对你的记忆\n就模糊一点。'
      ],
      hyperTalk3b: ["<20>{*}{#p/asriel3}{#e/asriel/6}...不管了。\n我才不在乎呢。"],
      hyperTalk3c: ['<20>{*}{#p/asriel3}{#e/asriel/0}这里就是你的葬身之地，\n死了也不会有任何人\n记得你！'],
      hyperTalk4: [
         "<20>{*}{#p/asriel3}{#e/asriel/1}怎么，\n还不放弃吗...？",
         "<20>{*}{#p/asriel3}{#e/asriel/3}没关系。",
         "<20>{*}{#p/asriel3}{#e/asriel/2}再过一会，\n你就会忘记一切。",
         '<20>{*}{#p/asriel3}{#e/asriel/0}我会让你下辈子\n活得更轻松！'
      ],
      hyperTalk5: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}呃哈哈哈...',
         '<20>{*}{#p/asriel3}{#e/asriel/1}还不放弃？',
         '<20>{*}{#p/asriel3}{#e/asriel/2}那么...',
         '<20>{*}{#p/asriel3}{#e/asriel/0}就让我瞧瞧\n你那“决心”\n到底有多厉害！'
      ],
      intermission: () => [
         "<32>{#p/human}* （你无法动弹。）",
         '<32>* （你试图挣扎。）\n* （什么都没发生。）',
         '<32>* （你试图读取存档。）\n* （什么都没发生。）',
         '<32>* （你又试了一次。）\n* （什么都没发生。）',
         '<32>* （...）',
         ...(SAVE.data.b.oops
            ? [
               '<32>* （...拯救存档已经毫无希望，\n  但也许...）',
               '<32>* （凭借最后一丝力量...）',
               '<32>* （你还有希望拯救其他的事物。）'
            ]
            : [
               '<32>{#p/basic}* 嘿... 在吗？',
               "<32>* 是我，$(name)...\n* 你也在那里。对吧，搭档？",
               '<32>* ...嘿...',
               "<32>* 你我两人一同走了这么远...",
               '<32>* 一路上，我们\n  一同交了那么多朋友，\n  一同打了那么多战斗...',
               "<32>* 现在一想... 我们的羁绊\n  就是靠着那些经历一点点建立的。",
               "<32>* ...嗯...\n* 我虽然不是乐天派...",
               '<32>* 但是，我们肩负着前哨站\n  所有人的希望。\n* 所以，你一定要保持决心！',
               '<32>* 而且，既然艾斯利尔能把\n  朋友们的灵魂偷走...',
               "<32>* ...那反过来，\n  咱们不就可以再“偷”回来吗？",
               "<32>* 来吧！\n* 我们一起上！"
            ])
      ],
      status13: () =>
         world.runaway
            ? ['<32>{#p/story}* ...']
            : [
               SAVE.data.b.oops
                  ? ["<32>{#p/story}* 在艾斯利尔的体内，\n  激起一声微弱的共鸣。"]
                  : ['<32>{#p/basic}* ...'],
               SAVE.data.b.oops
                  ? ["<32>{#p/story}* 在艾斯利尔的体内，\n  那共鸣声愈来愈强。"]
                  : ["<32>{#p/basic}* 对，就是这样！\n* 继续！"],
               SAVE.data.b.oops
                  ? ["<32>{#p/story}* 在艾斯利尔的体内，\n  强烈的共鸣此起彼伏。"]
                  : ["<32>{#p/basic}* 快要成功了！"],
               SAVE.data.b.oops
                  ? ["<32>{#p/story}* 在艾斯利尔的体内，\n  共鸣声响若雷霆。"]
                  : ['<32>{#p/basic}* ...\n* 然后呢？']
            ][
            (SAVE.flag.b.pacifist_marker_save1 ? 1 : 0) +
            (SAVE.flag.b.pacifist_marker_save2 ? 1 : 0) +
            (SAVE.flag.b.pacifist_marker_save3 ? 1 : 0)
            ],
      act_check2: () =>
         SAVE.flag.b.pacifist_marker_save1 && SAVE.flag.b.pacifist_marker_save2 && SAVE.flag.b.pacifist_marker_save3
            ? ['<33>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* ...']
            : SAVE.data.b.oops
               ? [
                  '<33>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} DEF{^2}\u221e{^1}\n* 乃是主宰死亡的绝对神祇。'
               ]
               : ["<32>{#p/story}* 艾斯利尔·逐梦 攻击{^2}\u221e{^1} 防御{^2}\u221e{^1}\n* 不要放弃。"],
      mercy_save1: () => [
         "<32>{#p/human}* （你向艾斯利尔的灵魂伸出手，\n  呼唤着朋友们。）",
         ...(SAVE.flag.b.pacifist_marker_save1 || SAVE.flag.b.pacifist_marker_save2 || SAVE.flag.b.pacifist_marker_save3
            ? []
            : ["<32>{#p/basic}* 他们一定就在某处，不是吗？", '<32>* ...']),
         "<32>* 在艾斯利尔的灵魂深处，\n  有什么正在回响...！"
      ],
      confrontation: [
         '<32>{#p/human}* （在伤害了那么多怪物之后...）',
         '<33>* （某种沉睡的、封存的东西\n  再度苏醒。）',
         '<32>* （那是很久很久以前...\n  怪物面对人类的，本能的恐惧。）',
         '<32>* （现在站在你面前的敌人，\n  不会对你有丝毫恐惧...）',
         "<32>* （然而，你伤害过那么多怪物，\n  只要将他们的恐惧累积起来...）",
         '<32>* （你找到了突破口，\n  一个无法拒绝的机会。）',
         "<32>* （...现在，其他选择已毫无意义。）",
         "<32>* （只有一条路可走。）"
      ],
      attackTalk1: [
         '<20>{*}{#p/asriel3}{#e/asriel/1}你... 怎么可能...',
         '<20>{*}{#p/asriel3}{#e/asriel/3}...',
         "<20>{*}{#p/asriel3}{#e/asriel/2}呵呵呵... 以为自己很强\n强到可以超越神明，\n是吗？",
         "<20>{*}{#p/asriel3}{#e/asriel/0}那，就来看看你\n能不能受得了这个！"
      ],
      attackTalk2: [
         '<20>{*}{#p/asriel3}{#e/asriel/3}...',
         "<20>{*}{#p/asriel3}{#e/asriel/1}以为区区这样\n就能伤得了我？",
         "<20>{*}{#p/asriel3}{#e/asriel/0}我才是这里的主宰！"
      ],
      attackTalk3: [
         '<20>{*}{#p/asriel3}{#e/asriel/2}...而且，\n就算你能打败我...',
         "<20>{*}{#p/asriel3}{#e/asriel/3}你的朋友\n也会因你而死。",
         '<20>{*}{#p/asriel3}{#e/asriel/1}这就是你想要的吗？\n永远孤身一人？'
      ],
      attackTalk4: [
         '<20>{*}{#p/asriel3}{#e/asriel/3}$(name)，\n快住手！\n你这是在自杀...',
         "<20>{*}{#p/asriel3}{#e/asriel/5}没明白吗？",
         '<20>{*}{#p/asriel3}{#e/asriel/6}我认识的$(name)\n绝不会做这种蠢事！'
      ],
      attackTalk5: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}...',
         '<20>{*}{#p/asriel3}{#e/asriel/6}听我说，\n$(name)。',
         "<20>{*}{#p/asriel3}{#e/asriel/6}现在赶快住手。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}否则...",
         "<20>{*}{#p/asriel3}{#e/asriel/7}你-你别逼我动真格！"
      ],
      attackTalk6: [
         '<20>{*}{#p/asriel3}{#e/asriel/9}$(name)，\n求求你...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}你还没明白\n自己在做什么吗？",
         "<20>{*}{#p/asriel3}{#e/asriel/8}让你住手，\n并不只是为了那些怪物...",
         "<20>{*}{#p/asriel3}{#e/asriel/8}更重要的是...\n如果我被你打败了...",
         "<20>{*}{#p/asriel3}{#e/asriel/7}我永远，永远\n都当不了你的对手了。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}永远也不会\n得到你的尊重！",
         '<20>{*}{#p/asriel3}{#e/asriel/10}{#i/3}{@random=1.1/1.1}该死，$(name)...\n你为什么总要赢？'
      ],
      attackTalk7: ['<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}...'],
      attackTalk7x: ['<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我...'],
      mercy_save2: [
         '<32>{#p/human}* （奇怪的是，\n  在朋友们都回忆起你后...）',
         "<32>* （还有某个存在\n  也开始在艾斯利尔灵魂深处回响。）\n* （愈发强烈。）",
         "<32>* （看起来，还有一个人需要拯救。）",
         '<32>* （是谁呢...？）',
         '<32>* （...）',
         '<32>* （...突然，你明白了。）',
         '<32>* （你伸出手，呼唤着那个名字。）'
      ],
      saveTalk1: ['<20>{*}{#p/asriel3}{#e/asriel/1}嗯？\n你在干什么...！？'],
      saveTalk2: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}什-\n你做了什么...？',
         "<20>{*}{#p/asriel3}{#e/asriel/8}这种感觉...\n你对我做了什么？",
         "<20>{*}{#p/asriel3}{#e/asriel/1}不... 不！\n我不需要任何人！"
      ],
      saveTalk3: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}马上停下！\n给我滚开！',
         '<20>{*}{#p/asriel3}{#e/asriel/10}听见没有？！',
         "<20>{*}{#p/asriel3}{#e/asriel/9}否则，\n看我不把你撕成碎片！"
      ],
      saveTalk4: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}你知道我为什么\n这么做吗？\n$(name)...",
         '<20>{*}{#p/asriel3}{#e/asriel/7}为什么我不停战斗，\n只为把你留下...？'
      ],
      saveTalk5: [
         "<20>{*}{#p/asriel3}{#e/asriel/7}因为...",
         "<20>{*}{#p/asriel3}{#e/asriel/8}你在我心中无可替代，\n$(name)。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}你是唯一一个\n真正理解我的人。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}更是唯一一个\n还愿意陪我玩的人。"
      ],
      saveTalk6: [
         '<20>{*}{#p/asriel3}{#e/asriel/8}...',
         '<20>{*}{#p/asriel3}{#e/asriel/8}不...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}不只是这样。",
         '<20>{*}{#p/asriel3}{#e/asriel/9}我... 我...',
         "<20>{*}{#p/asriel3}{#e/asriel/4}我是因为关心你，\n才这么做的啊，\n$(name)！",
         '<20>{*}{#p/asriel3}{#e/asriel/3}我关心你\n胜过关心任何人！'
      ],
      saveTalk7: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}...',
         "<20>{*}{#p/asriel3}{#e/asriel/8}我还不想迎接结局。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}我还不想让你离去。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}我还不想再次离开你。"
      ],
      saveTalk8: [
         '<20>{*}{#p/asriel3}{#e/asriel/10}{#i/8}{@random=1.1/1.1}所以，\n求求你...\n现在放手...',
         '<20>{*}{#p/asriel3}{#e/asriel/12}{#i/8}{@random=1.2/1.2}让我赢吧！！！'
      ],
      cryTalk1: ['<20>{*}{#p/asriel3}{@random=1.1/1.1}停下！{^30}{%}'],
      cryTalk2: ['<20>{*}{#p/asriel3}{@random=1.1/1.1}马上给我停下！！！{^40}{%}'],
      endStatus1: () => (SAVE.data.b.oops ? ['<32>{#p/story}* ...'] : ['<32>{#p/basic}* ...']),
      endTalk1: ['<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}...', '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)...'],
      endStatus2: () => (SAVE.data.b.oops ? ['<32>{#p/story}* ...'] : ['<32>{#p/basic}* 艾斯利尔...']),
      endTalk2: ["<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我好孤独，\n$(name)..."],
      endStatus3: () => (SAVE.data.b.oops ? ['<32>{#p/story}* ...'] : ['<32>{#p/basic}* ...']),
      endTalk3: ["<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我好害怕，\n$(name)..."],
      endStatus4: () => (SAVE.data.b.oops ? ['<32>{#p/story}* ...'] : ['<32>{#p/basic}* ...']),
      endTalk4: ['<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我...'],
      endStatus5: () => (SAVE.data.b.oops ? ['<32>{#p/story}* ...'] : ['<32>{#p/basic}* 都是我的错...']),
      endTalk5: ['<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我...']
   },
   b_opponent_lostsoul: {
      name: '* 迷失的灵魂',
      act_check_alphys: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎非常喜欢科幻动漫。'
      ],
      act_check_asgore: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎想让你\n  好好活着。'
      ],
      act_check_papyrus: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎梦想成为一名\n  皇家守卫。'
      ],
      act_check_sans: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂希望某人\n  能永远幸福快乐。'
      ],
      act_check_toriel: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎想竭尽所能\n  保护你。'
      ],
      act_check_undyne: () => [
         '<32>{#p/story}* 迷失的灵魂 - 攻击??? 防御???\n* 这个灵魂似乎很想教你\n  如何烹饪。'
      ]
   },
   b_opponent_lostsoul_a: {
      status1: () =>
         SAVE.data.b.oops ? ['<32>{#p/story}* 迷失的灵魂出现了。'] : ['<32>{#p/basic}* 是艾菲斯和安黛因。'],
      status2: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 迷失的灵魂站在前方。']
            : ['<32>{#p/basic}* 嗯...\n  我有办法让他们马上醒来。'],
      act: {
         flirt: (s: boolean) =>
            s
               ? ['<32>{#p/human}* （你向迷失的灵魂调情。）', '<32>{#p/basic}* 突然间...！']
               : ['<32>{#p/human}* （你向迷失的灵魂调情。）\n* （什么都没发生。）'],
         water: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯白开水。）',
            '<32>{#p/human}* （她有点失望，\n  但也感到十分亲切...）',
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         punch: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯洋梅果酒。）',
            '<32>{#p/human}* （她有些不满，\n  但也感到十分亲切...）',
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         cocoa: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯热巧克力。）',
            '<32>{#p/human}* （她十分满足，\n  同时也感到十分亲切...）',
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         tea: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你倒一杯星花茶。）',
            '<32>{#p/human}* （她非常高兴，\n  同时也感到十分亲切...）',
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         lesson: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂教你下厨。）',
            "<32>{#p/human}* （她有点困惑，\n  但似乎蛮想言传身教...）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         trivia: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂出几道\n  超级水的安保题目。）',
            "<32>{#p/human}* （她有些顾虑，但也很想试试看。）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         escort: (s: boolean) => [
            '<32>{#p/human}* （你请求迷失的灵魂\n  带你穿过一片危险地带。）',
            "<32>{#p/human}* （她犹豫了一下，\n  但觉得是个好主意。）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ]
      },
      assist: {
         text: ['<32>{#p/basic}* 你俩快点醒来...\n* 我刚找到一部新上映的喵喵电影！'],
         talk: [
            ["<11>{#p/undyne}{#e/undyne/13}等有空了\n我们一块\n去看！"],
            ["<11>{#p/alphys}{#e/alphys/3}你在\n开玩笑吗？？\n真有？？"]
         ]
      },
      fight: [
         [
            ['<11>{#p/undyne}{#e/undyne/4}没想到你会\n下手这么狠。'],
            ['<11>{#p/alphys}{#e/alphys/9}安黛因，\n当心啊！']
         ],
         [
            ['<11>{#p/undyne}{#e/undyne/4}呵，\n原来是你啊，\n还起了那么个\n蠢名字。'],
            ['<11>{#p/alphys}{#e/alphys/12}我现在知道\n为什么他们\n都管你叫\n“$(moniker4)”\n了。']
         ]
      ],
      flirt: [
         [
            ['<11>{#p/undyne}{#e/undyne/12}我发誓\n如果我们\n再战一次...'],
            ['<11>{#p/alphys}{#e/alphys/35}啧啧。']
         ],
         [
            ['<11>{#p/undyne}{#e/undyne/5}你敢\n再向她调情\n试试？'],
            ['<11>{#p/alphys}{#e/alphys/35}哦，加油啊。']
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? ["<11>{#p/undyne}燃起了一股\n无法描述的\n感觉。"]
                  : ['<11>{#p/undyne}所有人类\n必须死。'],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? ['<11>{#p/undyne}大家，\n都需要我\n来守护！']
                  : ["<11>{#p/undyne}你就是\n怪物的公敌。"],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? ["<11>{#p/undyne}你们还得\n再加把劲。"]
                  : ['<11>{#p/undyne}弱者\n才需要怜悯。']
         ),
         pager.create(
            1,
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? ['<11>{#p/alphys}看来，是高估\n你们的智商了。']
                  : ["<11>{#p/alphys}你想让我死，\n不是吗？"],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? ["<11>{#p/alphys}就那些东西，\n唬不到我。"]
                  : ["<11>{#p/alphys}我只是去做\n我的本职工作，\n有错吗？"],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? ['<11>{#p/alphys}只有我，\n亲眼目睹了\n你们的\n一举一动。']
                  : ["<11>{#p/alphys}我会永远\n停滞不前，\n是吗？"]
         )
      ],
      item: {
         tvm_mewmew: {
            text: [
               "<32>{#p/human}* （你举起喵喵玩偶\n  在迷失的灵魂眼前晃了晃。）",
               '<32>{#p/basic}* 突然间...！'
            ],
            talk: [
               ['<11>{#p/undyne}{#e/undyne/41}呃，\n我不打扰，\n我走了哈。'],
               ['<11>{#p/alphys}{#e/alphys/8}哦，\n原来你想让我\n看这个。']
            ]
         },
         orange_soda: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这瓶汽水...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/undyne}{#e/undyne/20}对，她爱死\n这汽水了。'],
               ["<11>{#p/alphys}{#e/alphys/10}原来\n我丢的汽水\n跑到你那里\n去了！"]
            ]
         },
         spaghetti: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这碗意面...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ["<11>{#p/undyne}{#e/undyne/20}嘿，那是\n帕派瑞斯的\n意面！"],
               ['<11>{#p/alphys}{#e/alphys/36}我就说嘛，\n你肯定认得它。']
            ]
         },
         snack: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这块点心...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/undyne}{#e/undyne/41}那点心\n是我专门\n给你弄到的。'],
               ['<11>{#p/alphys}{#e/alphys/6}你会做\n点心了？']
            ]
         },
         starling_tea: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这杯调和茶...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/undyne}{#e/undyne/18}那是...\n我瞎想什么呢。'],
               ['<11>{#p/alphys}{#e/alphys/36}哦，\n喝茶时间到。']
            ]
         }
      },
      standard: [
         ['<11>{#p/undyne}{#e/undyne/41}嗯，其实，\n有的人类\n也挺酷的。'],
         ["<11>{#p/alphys}{#e/alphys/9}我们共患难\n这么长时间，\n怎么会怀疑\n彼此呢？"]
      ]
   },
   b_opponent_lostsoul_b: {
      status1: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 迷失的灵魂出现了。']
            : ['<32>{#p/basic}* 帕派瑞斯！\n* ...还有他的兄弟。'],
      status2: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 迷失的灵魂站在前方。']
            : ['<32>{#p/basic}* 啊，对了。\n* 我应该有办法唤醒他俩...'],
      act: {
         flirt: (s: boolean) =>
            s
               ? ['<32>{#p/human}* （你向迷失的灵魂调情。）', '<32>{#p/basic}* 突然间...！']
               : ['<32>{#p/human}* （你向迷失的灵魂调情。）\n* （什么都没发生。）'],
         puzzle: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂给你出点谜题。）',
            "<32>{#p/human}* （他有点困惑，\n  但已经把谜题准备好了...）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         hangout: (s: boolean) => [
            '<32>{#p/human}* （你邀请迷失的灵魂和你一起玩。）',
            "<32>{#p/human}* （他有点困惑，\n  但好像很高兴...）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         judgement: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂开始审判你。）',
            "<32>{#p/human}* （他有点困惑，\n  但很乐意这么做...）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         dinner: (s: boolean) => [
            '<32>{#p/human}* （你邀请迷失的灵魂共进晚餐。）',
            "<32>{#p/human}* （他有点困惑，\n  但感到格外熟悉...）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ]
      },
      assist: {
         text: ['<32>{#p/basic}* 嘿，帕派瑞斯！\n* 刚刚，安黛因任命你为皇家卫队一员！'],
         talk: [
            ["<08>{#p/papyrus}{#e/papyrus/12}天哪，\n我终于当上\n皇家守卫啦！"],
            ['<11>{#p/sans}{#e/sans/2}我们只能\n祈祷美梦\n早日成真咯。']
         ]
      },
      fight: [
         [
            ['<08>{#p/papyrus}{#e/papyrus/27}啊，\n我投-投降！'],
            ["<11>{#p/sans}{#e/sans/3}我就知道\n你会这么做。"]
         ],
         [
            ['<08>{#p/papyrus}{#e/papyrus/21}衫斯，\n你受伤了吗？'],
            ["<11>{#p/sans}{#e/sans/3}别担心，兄弟。\n一场梦而已。"]
         ]
      ],
      flirt: [
         [
            ['<08>{#p/papyrus}{#e/papyrus/13}即使到现在，\n你还是那么\n爱我...'],
            ["<11>{#p/sans}{#e/sans/2}干起这事来，\n你真是\n一发不可收，\n是吧？"]
         ],
         [
            ['<08>{#p/papyrus}{#e/papyrus/14}果然，\n那爱意不是\n冲我而来。'],
            ["<11>{#p/sans}{#e/sans/2}啥？\n下次多准备点\n月岩，\n能提升\n调情成功率哦。"]
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? ["<08>{#p/papyrus}原谅你，\n对我来说\n有点难..."]
                  : ['<08>{#p/papyrus}我一定要\n抓到个人类！'],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? ["<08>{#p/papyrus}如果没有他，\n我不知道\n该怎么活..."]
                  : ['<08>{#p/papyrus}如果成功，\n所有人都会...'],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? ["<08>{#p/papyrus}我不知道\n该找谁求助..."]
                  : ['<08>{#p/papyrus}...']
         ),
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? ['<11>{#p/sans}...在这样的\n一天里，\n像你这样的\n孩子...']
                  : ["<11>{#p/sans}我不可能\n一直保护你。"],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? ["<11>{#p/sans}某条时间线里，\n你把我杀了，\n对吧？"]
                  : ["<11>{#p/sans}迟早有一天，\n你要面临死亡。"],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? ["<11>{#p/sans}你根本不配\n拯救我们。"]
                  : ["<11>{#p/sans}这里\n不是你的家。"]
         )
      ],
      item: {
         berry: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这种水果...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<08>{#p/papyrus}{#e/papyrus/10}哦！\n有了这些水果，\n我们就能\n自制果酒了！'],
               ["<11>{#p/sans}{#e/sans/2}不要像\n上次一样\n搞砸哦。"]
            ]
         },
         spaghetti: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉这碗意面...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<08>{#p/papyrus}{#e/papyrus/10}你把我的面\n留到现在，\n就为了\n能唤醒我！？'],
               ["<11>{#p/sans}{#e/sans/2}现在不都\n流行这样嘛。"]
            ]
         },
         corndog: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉它的香味...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<08>{#p/papyrus}{#e/papyrus/16}我居然\n一直都不知道\n人类喜欢\n这玩意。'],
               ['<11>{#p/sans}{#e/sans/2}能让\n{@fill=#f00}热{@fill=#000}情的{@fill=#f00}狗{@fill=#000}狗\n将抑{@fill=#f00}玉{@fill=#000}和萎{@fill=#f00}米{@fill=#000}\n一扫而空。']
            ]
         },
         corngoat: {
            text: [
               '<32>{#p/human}* （某个灵魂好像很熟悉它的香味...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<08>{#p/papyrus}{#e/papyrus/16}什么？？\n居然是\n玉米热“羊”？'],
               ["<11>{#p/sans}{#e/sans/0}这么棒的玩笑，\n该好好\n表{@fill=#f00}羊{@fill=#000}你一下。"]
            ]
         },
         quiche: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这块点心...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<08>{#p/papyrus}{#e/papyrus/22}居然是一块\n“芝士”蛋糕？！'],
               ["<11>{#p/sans}{#e/sans/2}这{@fill=#f00}芝士{@fill=#000}个\n蛋糕谜题。"]
            ]
         },
         fryz: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这杯饮料...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ["<08>{#p/papyrus}{#e/papyrus/27}这东西\n比火墙还热！！"],
               ["<11>{#p/sans}{#e/sans/2}伙计，\n你火了。"]
            ]
         },
         burgerz: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这种食物...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ["<08>{#p/papyrus}{#e/papyrus/21}这东西\n健康吗？"],
               ['<11>{#p/sans}{#e/sans/0}一石二鸟，\n一食二堡。']
            ]
         },
         burgerz_use1: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这种食物...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<08>{#p/papyrus}{#e/papyrus/24}我担心你吃完\n会不舒服...'],
               ['<11>{#p/sans}{#e/sans/2}剩最后一个了，\n想好再吃哦。']
            ]
         },
         burgerz_use2: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这种食物...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<08>{#p/papyrus}{#e/papyrus/18}哇，\n你把它们\n全吃了。'],
               ['<11>{#p/sans}{#e/sans/3}要是汉堡能\n长生不老\n就好了。']
            ]
         }
      },
      standard: [
         ['<08>{#p/papyrus}{#e/papyrus/10}等等！\n不！\n我才不会\n抓你呢！'],
         ["<11>{#p/sans}{#e/sans/3}我们都\n指望你了，\n孩子。"]
      ]
   },
   b_opponent_lostsoul_c: {
      status1: () =>
         SAVE.data.b.oops ? ['<32>{#p/story}* 迷失的灵魂出现了。'] : ['<32>{#p/basic}* 爸爸... 妈妈...'],
      status2: () =>
         SAVE.data.b.oops
            ? ['<32>{#p/story}* 迷失的灵魂站在前方。']
            : ['<32>{#p/basic}* 嗯... 他们毕竟曾是我的父母，\n  那对我来说就好办多了。'],
      act: {
         flirt: (s: boolean) =>
            s
               ? ['<32>{#p/human}* （你向迷失的灵魂调情。）', '<32>{#p/basic}* 突然间...！']
               : ['<32>{#p/human}* （你向迷失的灵魂调情。）\n* （什么都没发生。）'],
         call: (s: boolean) => [
            '<32>{#p/human}* （你给迷失的灵魂打了个电话。）',
            3 <= SAVE.data.n.cell_insult
               ? '<32>{#p/human}* （她有点生气，\n  但也十分怀念那种感觉。）'
               : '<32>{#p/human}* （她十分高兴，\n  同时很怀念那种感觉。）',
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         home: (s: boolean) => [
            '<32>{#p/human}* （你请求迷失的灵魂带你回家。）',
            3 <= SAVE.data.n.cell_insult
               ? "<32>{#p/human}* （她认为自己没义务那么做，\n  但不知怎地，想试一试...）"
               : "<32>{#p/human}* （她有点犹豫，\n  但不知怎地，想试一试...）",
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         hug: (s: boolean) => [
            '<32>{#p/human}* （你给迷失的灵魂\n  一个大大的拥抱。）',
            '<32>{#p/human}* （他极力掩饰自己的情感，\n  但那舒服的感觉温暖了他的心...）',
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ],
         agreement: (s: boolean) => [
            '<32>{#p/human}* （你让迷失的灵魂\n  给你讲讲人怪停战的故事。）',
            '<32>{#p/human}* （他想对此视而不见，\n  但最终还是脱口而出。）',
            ...(s ? ['<32>{#p/basic}* 突然间，记忆如潮水般涌回！'] : [])
         ]
      },
      assist: {
         text: ["<32>{#p/basic}* 爸爸... 妈妈...\n* 你们不记得我了吗？"],
         talk: [['<11>{#p/toriel}{#e/toriel/9}我怎么会忘。'], ['<11>{#p/asgore}{#e/asgore/8}$(name)？']]
      },
      fight: [
         [
            ['<11>{#p/toriel}{#e/toriel/9}我...\n我落得这下场，\n就是活该。'],
            ['<11>{#p/asgore}{#e/asgore/1}呃...\n没想到会这样。']
         ],
         [['<11>{#p/toriel}{#e/toriel/17}出不了事的，\n艾斯戈尔。'], ['<11>{#p/asgore}{#e/asgore/8}孩-孩子？！']]
      ],
      flirt: [
         [
            ['<11>{#p/toriel}{#e/toriel/1}孩子，\n这个场合...\n请别这么干。'],
            ['<11>{#p/asgore}{#e/asgore/6}还好我们现在\n分居了。']
         ],
         []
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? ['<11>{#p/toriel}趁我\n毫无防备时\n杀了我...']
                  : ['<11>{#p/toriel}这都是\n为了你好。'],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? ['<11>{#p/toriel}本以为，\n自己努力\n保护的人，\n是你...']
                  : ['<11>{#p/toriel}我绝不会\n再让人类\n离开。'],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? ['<11>{#p/toriel}一路上一直\n相信你的我，\n才是真正的\n傻子啊...']
                  : ['<11>{#p/toriel}...']
         ),
         pager.create(
            1,
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? ['<11>{#p/asgore}跟你讲理，\n完全是\n浪费时间。']
                  : ['<11>{#p/asgore}人怪交战\n在所难免。'],
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? ["<11>{#p/asgore}你就没有\n更重要的事\n可做吗？"]
                  : ['<11>{#p/asgore}我怎么可能\n忘记呢？'],
            () => (7 <= SAVE.flag.n.genocide_milestone ? ['<11>{#p/asgore}开玩笑吧...'] : ['<11>{#p/asgore}...'])
         )
      ],
      item: {
         pie: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/toriel}{#e/toriel/0}果然！\n是奶油糖\n肉桂派！'],
               ['<11>{#p/asgore}{#e/asgore/7}没想到都过了\n这么久了...']
            ]
         },
         pie2: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/toriel}{#e/toriel/0}果然！\n是蜗牛派！'],
               ['<11>{#p/asgore}{#e/asgore/7}没想到都过了\n这么久了...']
            ]
         },
         pie3: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/toriel}{#e/toriel/1}我已经\n尽力了...'],
               ['<11>{#p/asgore}{#e/asgore/6}真奇怪。\n这派闻起来\n还挺香的！']
            ]
         },
         starling_tea: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这杯茶...）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/toriel}{#e/toriel/13}这茶香真是\n历久弥新...'],
               ['<11>{#p/asgore}{#e/asgore/21}一杯好茶，\n真是世间极品。']
            ]
         },
         snails: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉那道菜。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/toriel}{#e/toriel/1}你居然\n一直没吃？'],
               ['<11>{#p/asgore}{#e/asgore/5}没想到，\n居然还能\n再看到这菜。']
            ]
         },
         chocolate: {
            text: [
               '<32>{#p/human}* （迷失的灵魂好像很熟悉这巧克力。）',
               '<32>{#p/basic}* 突然间，记忆如潮水般涌回！'
            ],
            talk: [
               ['<11>{#p/toriel}{#e/toriel/1}纯黑巧克力...'],
               ['<11>{#p/asgore}{#e/asgore/21}苦尽甘来嘛。']
            ]
         }
      },
      standard: [
         ['<11>{#p/toriel}{#e/toriel/1}加油吧，\n孩子...'],
         ['<11>{#p/asgore}{#e/asgore/6}我们的未来\n就指望你了！']
      ]
   },
   b_opponent_final: {
      name: '* 力场',
      status0: ['<32>{#p/story}* 此刻，你终于可以直面那道力场。'],
      act_check: [
         '<32>{#p/story}* 力场 - 攻击0 防御{^2}\u221e{^1}\n* 矛盾相逢，末路将穷。'
      ],
      status1: () =>
         SAVE.data.n.bully > 9
            ? ["<32>{#p/story}* 燃起斗志！\n  把你揍人的劲儿都使出来吧。"]
            : ["<32>{#p/story}* 给这段旅程画上圆满的句号吧。"],
      status1x: ['<32>{#p/story}* 除了战斗，别无他法。'],
      status2: ['<32>{#p/story}* 力场上开始出现裂痕，\n  光芒越来越弱。'],
      status3: ['<32>{#p/story}* 力场即将崩溃。'],
      status4: ['<32>{#p/story}* 力场迟迟没有破碎，\n  让你有些意外。'],
      status5: ['<32>{#p/story}* 不太对劲。'],
      friend1: ["<20>{#p/asgore}{#e/asgore/5}怎么了？"],
      friend2: ["<20>{#p/alphys}{#e/alphys/15}那道力场...\n怎么还没碎啊？！"],
      friend3: ['<20>{#p/asgore}{#e/asgore/12}{#e/alphys/4}...\n你知道原因吗？'],
      friend4a: ["<20>{#p/alphys}{#e/alphys/6}是不是...\n人类没使劲？", '{*}{#e/alphys/1}{%}'],
      friend4b: [
         "<20>{#p/alphys}不，不是这样...",
         '<20>{#p/alphys}{#e/asgore/1}...',
         '<20>{#p/alphys}{#e/alphys/2}该不会...'
      ],
      friend5: ['<20>{#p/asgore}...什么？'],
      friend6: [
         '<20>{#p/alphys}{#e/alphys/1}我-我检查档案日志时，\n发现个怪事...',
         '<21>{#p/alphys}{#e/alphys/4}我发现...\n“灵势矩阵”中的元素系数\n与理论值存在微小偏差。'
      ],
      friend7: ['<20>{#p/asgore}{#e/asgore/12}...啥意思？'],
      friend8: [
         '<20>{#p/alphys}就是说，\n有-有人入侵了\n六号档案的系统。',
         "<20>{#p/alphys}{#e/asgore/1}随后，窃取了\n部分人类灵魂的能量。",
         '<20>{#p/alphys}{#e/alphys/6}别-别着急，\n也可能只是传感器\n出故障了...',
         "<20>{#p/alphys}{#e/alphys/1}不过...\n从结果来看..."
      ],
      friend9a: ['<20>{#p/asgore}{#e/asgore/1}不用说了。', '<20>{#p/asgore}{#e/asgore/2}明白了。'],
      friend9b: [
         '<20>{#p/asgore}{#e/asgore/5}我总担心，\n指不定哪天，\n六号档案就会被篡改...',
         '<20>{#p/asgore}{#e/asgore/5}没想到真的一语成谶。'
      ],
      friend9c: ['<20>{#p/asgore}{#e/asgore/1}那现在怎么办？'],
      friend10: [
         '<20>{#p/alphys}...再等一个人类？',
         "<20>{#p/alphys}{#e/alphys/4}对-对不起...\n我想不到其他办法...",
         '{*}{#e/asgore/8}{#e/alphys/9}{%}'
      ],
      friend11: ['<20>{#p/undyne}{#e/undyne/13}我有办法啊！'],
      friend12: ['<20>{#p/alphys}{#e/alphys/10}安黛因，\n你-你来这\n干-干什么？', '{*}{#e/undyne/0}{%}'],
      friend13: [
         "<20>{#p/undyne}{#e/undyne/1}{#e/alphys/8}{#e/asgore/1}该不会...\n是那破力场\n把你憋屈坏了吧？"
      ],
      friend14: ['<20>{|}{#p/alphys}{#e/alphys/6}安黛因，你怎么-{%}'],
      friend15: ["<20>{#p/undyne}{#e/undyne/5}死力场，看我不把你\n揍个稀碎！"],
      friend16a: ['<20>{#p/alphys}{#e/alphys/3}{#e/asgore/6}安黛因！？！？'],
      friend16b: [
         '<20>{#p/undyne}{#e/undyne/4}我都懂，我都懂。\n只是想让你好受点嘛。',
         '{*}{#e/alphys/1}{%}'
      ],
      friend17: () => [
         '<20>{#p/undyne}{#e/undyne/3}其实...\n是衫斯喊我来的。',
'<20>{#p/undyne}{#e/undyne/3}刚刚，他去调查人类的下落，\n查清楚后，\n就把我喊了过来。',
         "<20>{#p/undyne}{#e/undyne/11}{#e/asgore/5}说实话，\n当时我还蛮意外的...\n但现在，我想开了。",
         "<20>{#p/undyne}{#e/undyne/13}这计划能走通，\n我真为你高兴！",
         ...(SAVE.data.b.undyne_respecc
            ? ["<20>{#p/undyne}{#e/undyne/0}昧着良心说自己\n喜欢人类也没啥意思。\n但今天这孩子真的超赞。"]
            : [
               "<20>{#p/undyne}{#e/undyne/0}昧着良心说自己\n喜欢人类也没啥意思。\n但能大团圆，也挺好。"
            ]),
         '<20>{#p/undyne}{#e/undyne/15}{#e/asgore/6}可能...\n我这个大队长，\n当得有点...'
      ],
      friend18: [
         "<20>{#p/alphys}{#e/alphys/32}嘿... 没关系的。",
         "<20>{#e/alphys/31}你愿意放下偏见，\n来到这里，已经很棒了，\n你说是不？"
      ],
      friend19: ['<20>{#p/undyne}{#e/undyne/14}嘿，咱俩不是说好\n事成之后\n要一起看电影吗？',
'<20>{#p/undyne}{#e/undyne/14}那我也不能让你\n白高兴一场啊！'],
      friend20: ['<20>{#p/alphys}{#e/alphys/33}...嘴一个？', '{*}{#e/asgore/5}{#e/undyne/19}{%}'],
      friend21: ['<20>{#p/asgore}{#e/asgore/5}呃。'],
      friend22: ['<20>{#p/undyne}{#e/undyne/6}现在？？？'],
      friend23: ['<20>{#p/alphys}{#e/alphys/34}对啊！'],
      friend24: ['<20>{#p/asgore}{#e/asgore/20}艾菲斯，\n这里还有个孩子呢。'],
      friend25: ["<21>{#p/undyne}{#e/undyne/7}当着孩子的面亲嘴，\n不太好吧？"],
      friend26: ['<32>{#p/alphys}{#e/alphys/32}...'],
      friend27: ['<20>{#p/undyne}{#e/undyne/10}...'],
      friend28: ['<20>{*}{#p/alphys}{#e/alphys/35}{#e/undyne/37}{#e/asgore/8}我就是要亲。{^10}{%}'],
      friend29: ['<15>{*}{#p/papyrus}{#e/papyrus/22}等等！！！{^10}{%}', '{*}{#e/papyrus/20}{%}'],
      friend30: () => [
         "<20>{#p/mettaton}久等了，女士们。\n我们“兄弟会”也\n隆重登场了。",
         ...(SAVE.data.n.state_aerialis_basebully > 9
            ? [
               '<20>{#p/mettaton}{#e/mettaton/1}...呦，这不是\n“$(moniker2u)”嘛！',
'<20>{#p/mettaton}{#e/mettaton/1}你要是感兴趣，我请你\n当“兄弟会”的VIP哦。'
            ]
            : [])
      ],
      friend31: ["<20>{#p/napstablook}{#e/mettaton/2}{#e/alphys/15}{#e/asgore/1}{~}嘿，呃...\n我不算男生，\n为什么也要跟过来..."],
      friend32a: [
         "<20>{#p/mettaton}{#e/mettaton/1}小幽，我也【没】说\n你在“兄弟会”里啊...",
         "<20>{#p/mettaton}{#e/undyne/38}{#e/papyrus/21}其实，说是”兄弟会“，\n但里面也就我跟\n帕派瑞斯两人而已。"
      ],
      friend32b: ['<20>{#p/napstablook}{~}哦......', "<20>{#p/napstablook}{~}那我等会再过来吧"],
      friend33: [
         '<20>{#p/undyne}{#e/undyne/19}{#e/mettaton/4}等等。',
         '<20>{#p/undyne}{#e/undyne/10}合着你俩也是一对？？？'
      ],
      friend34: [
         '<15>{#p/papyrus}{#e/papyrus/15}诚如斯言！',
         '<17>{#p/papyrus}{#e/papyrus/24}...这词我今天\n第一次用，\n怕是以后用不上了。'
      ],
      friend35: () =>
         SAVE.data.b.a_state_hapstablook
            ? ["<20>{#p/undyne}{#e/undyne/17}原来你充满电之后，\n跑去约会了..."]
            : ['<20>{#p/undyne}{#e/undyne/17}原来你说的“正事”，\n就是跑去约会...'],
      friend36: [
         '<20>{#p/mettaton}{#e/mettaton/1}{#e/asgore/6}{#e/papyrus/20}那~必须滴！',
'<20>{#p/mettaton}{#e/mettaton/1}{#e/asgore/6}{#e/papyrus/20}刚才，我俩还寻思\n第一天在一起，\n咋享受呢。'
      ],
      friend37: ['<20>{#p/alphys}{#e/alphys/34}{#e/undyne/1}{#e/mettaton/4}诶嘿嘿。\n我有个点子，\n你俩要不要听听。'],
      friend38: [
         "<20>{#p/undyne}{#e/undyne/19}{#e/asgore/1}呃，艾菲斯。\n我觉得，他俩不可能\n真成一对的。"
      ],
      friend39: ['<20>{#p/alphys}{#e/alphys/8}哦。'],
      friend40: [
         "<15>{#p/papyrus}{#e/papyrus/10}{#e/undyne/0}咱都到力场下了，\n就好好玩一会呗！",
         '<15>{#e/mettaton/2}{#e/papyrus/28}你喜欢那些\n充满“异域风情”的地方，\n我懂的...',
         '{*}{#e/alphys/7}{#e/asgore/5}{%}'
      ],
      friend41: [
         '<20>{#p/mettaton}{#e/mettaton/2}哦，帕派瑞斯，\n咱俩真是心有灵犀。',
         "<20>{#p/mettaton}{#e/mettaton/1}{#e/papyrus/13}我最喜欢的事，\n就是凝望这无尽虚空。",
         '<20>{|}{#p/mettaton}{#e/mettaton/3}{#e/papyrus/21}这时，我就想起\n生命的奥义，\n宇宙的美丽，还有- {%}'
      ],
      friend42: ['<20>{#p/sans}{#e/sans/2}{#e/undyne/21}{#e/alphys/8}大伙好呀。'],
      friend43: ['<15>{#p/papyrus}{#e/papyrus/10}{#e/mettaton/3}兄弟，好久不见！'],
      friend44: [
         '<16>{#p/papyrus}{#e/sans/0}{#e/papyrus/26}看来...\n我的搭档对“结婚”\n没啥经验。'
      ],
      friend45: ['<20>{#p/sans}{#e/alphys/7}嘿。艾斯戈尔，\n你好呀。'],
      friend46: ['<20>{#p/asgore}{#e/asgore/6}{#e/papyrus/20}哈喽，衫斯。\n你也来了，真好。'],
      friend47: [
         "<20>{#p/sans}{#e/sans/3}你瞧...\n这儿这么热闹，\n我肯定要顺道看看咯。",
         '<20>{#p/sans}{#e/sans/0}不过先别管我。',
         "<20>{#p/sans}{#e/sans/2}有个人你肯定想见见，\n我把“她”请过来了。"
      ],
      friend48: [
         '<20>{#p/asgore}{#e/sans/0}{#e/undyne/3}{#e/asgore/8}{#e/papyrus/26}Tori...！',
         '<20>{#p/asgore}{#e/asgore/6}你回来了。',
         '<20>{#p/asgore}{#e/asgore/1}...'
      ],
      friend49a: [
         '<20>{#p/toriel}{#e/asgore/5}{#e/toriel/9}...',
         '<21>{#p/toriel}{#e/toriel/13}你做的那些...\n衫斯都跟我说了。'
      ],
      friend50a: ["<20>{#p/alphys}{#e/undyne/4}{#e/alphys/8}瞅我干嘛，\n我可没泄露秘密。"],
      friend51a: [
         "<20>{#p/sans}{#e/sans/0}我可以作证。",
         "<20>{#p/sans}{#e/sans/2}{#e/alphys/10}{#e/asgore/6}{#e/toriel/9}只是，艾菲斯，\n你撒谎的技术\n实在太烂了。"
      ],
      friend52a1: [
         '<20>{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/alphys/36}{#e/papyrus/20}我瞒了这么多，\n以为会被民众唾骂，\n甚至引发暴动...'
      ],
      friend52a2: [
         '<20>{#p/toriel}{#e/toriel/13}{#e/asgore/1}说实话，一开始，\n听说你有事瞒着我，\n真挺生气的...',
         '<20>{#p/toriel}{#e/toriel/13}{#e/papyrus/21}{#e/alphys/7}后来转念一想，\n事情落到这地步，\n我也有错。',
         '<20>{#p/toriel}{#e/toriel/9}...不该把责任\n全推给你，艾斯戈尔。'
      ],
      friend52a3: ['<20>{#p/asgore}{#e/asgore/2}明白了。'],
      friend53a: [
         '<20>{#p/undyne}{#e/undyne/1}{#e/papyrus/20}你就想嘛，\n怪物们再恨人类，\n也不可能见人就杀吧？'
      ],
      friend49b: [
         '<20>{#p/toriel}{#e/toriel/12}...',
         '<21>{#p/toriel}{#e/sans/3}{#e/asgore/2}{#e/undyne/4}{#e/toriel/11}{#e/papyrus/21}{#e/alphys/15}艾斯戈尔，\n为什么不早点告诉我，\n自己在保护人类呢？'
      ],
      friend50b: ["<20>{#p/alphys}{#e/alphys/7}...现在误会解开了，\n不也挺好的嘛？"],
      friend51b: [
         '<20>{#p/sans}{#e/sans/0}{#e/undyne/3}是啊，tori。\n别上火了，开心一点嘛。',
         "<20>{#p/sans}{#e/sans/2}{#e/alphys/8}{#e/asgore/5}{#e/toriel/13}艾斯戈尔不也是\n出于好意嘛？"
      ],
      friend52b1: [
         '<20>{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/asgore/2}{#e/alphys/36}不，不。\n她生我的气，我不怪她。',
         '<20>{#e/sans/3}{#e/asgore/3}这秘密我藏着掖着...\n不跟她说...\n也不跟大伙说...'
      ],
      friend52b2: ["<20>{#p/undyne}{#e/undyne/1}{#e/asgore/1}你不是有苦衷嘛。"],
      friend52b3: [
         '<20>{#p/asgore}{#e/undyne/17}{#e/alphys/8}{#e/toriel/9}{#e/asgore/2}{#e/papyrus/27}也许吧，\n不好说算不算苦衷。'
      ],
      friend53b: ['<20>{#p/undyne}{#e/undyne/1}还是那句话，\n我们再恨人类，\n也不可能见人就杀吧？'],
      friend54: [
         '<20>{#p/alphys}{#e/asgore/5}{#e/undyne/17}{#e/alphys/8}{#e/toriel/13}可安黛因，\n你不是一见到这孩子，\n就到处追杀吗？'
      ],
      friend55: ['<20>{#p/toriel}{#e/undyne/18}{#e/toriel/3}{#e/asgore/5}她...\n干了什么？'],
      friend56: () =>
         SAVE.data.b.undyne_respecc
            ? ['<20>{#p/undyne}{#e/undyne/9}{#e/toriel/4}我啥也没干啊！！！']
            : ["<20>{#p/undyne}{#e/undyne/13}{#e/toriel/4}你放心，\n我现在不杀人了。"],
      friend57: () =>
         SAVE.data.b.undyne_respecc
            ? ['<20>{#p/toriel}{#e/toriel/15}{#e/asgore/6}...真的吗，\n大姐？']
            : ['<20>{#p/toriel}{#e/toriel/15}{#e/asgore/6}...等会我好好问问，\n大姐。'],
      friend58: ['<20>{#p/alphys}{#e/alphys/33}咳咳，\n“姐”什么“姐”啊，\n她可是有对象的人了。'],
      friend59: [
         "<20>{#p/undyne}{#e/undyne/10}{#e/sans/4}{#e/toriel/12}艾菲斯！！\n咱俩到现在\n还没共进过晚餐呢！"
      ],
      friend60: ['<20>{#p/alphys}{#e/alphys/34}共进晚餐？\n那我肯定不吃主食，\n直接奔着甜品去了。'],
      friend61: ['<15>{#p/papyrus}{#e/undyne/19}{#e/papyrus/19}{#e/asgore/4}{#e/sans/5}{#e/alphys/40}我滴妈呀！！！'],
      friend62: [
         '<20>{#p/undyne}{#e/undyne/38}{#e/sans/0}{#e/asgore/1}{#e/toriel/13}{#e/papyrus/20}...等一下。',
         '<20>{#p/undyne}{#e/undyne/18}{#e/papyrus/21}帕派瑞斯，\n你是咋找到这儿的？'
      ],
      friend63: [
         '<15>{#p/papyrus}{#e/papyrus/10}哦，想起来了！\n当时，我正跟镁塔顿\n聊天，聊完后...',
         '<15>{#p/papyrus}{#e/papyrus/20}有颗黄色小星星\n突然冒出来，\n让我俩来这。',
         '<15>{#p/papyrus}{#e/papyrus/21}{#e/alphys/9}{#e/sans/1}它好像...\n还挺着急的。'
      ],
      friend64: ['<20>{#p/toriel}{#e/toriel/9}{#e/asgore/12}是闪闪。'],
      friend65: [
         '<20>{#p/undyne}{#e/alphys/15}闪闪？',
         "<20>{#p/undyne}{#e/alphys/28}{#e/undyne/37}{#e/toriel/3}闪闪是谁？"
      ],
      friend66: () =>
         SAVE.flag.n.genocide_milestone < 7
            ? [
               ['<20>{#p/twinkly}{#e/twinkly/5}{#v/0}哈喽。', '<20>{#e/twinkly/7}{#v/0}各位，想我了没？'],
               [
                  "<20>{#p/twinkly}{#e/twinkly/11}{#v/0}哎呀，真不好意思呢...\n存档是不是坏掉了呀？",
                  '<20>{#p/twinkly}{#e/twinkly/11}{#v/0}嘻嘻嘻...',
                  "<20>{#p/twinkly}{#e/twinkly/2}{#v/1}活该。"
               ],
               ['<20>{#p/twinkly}{#e/twinkly/7}{#v/0}不好意思呢。\n但现在，\n整个世界，我说了算。']
            ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)]
            : [
               [
                  '<20>{#p/twinkly}{#e/twinkly/5}{#v/0}亲爱的$(name)，\n好久不见。',
                  "<20>{#e/twinkly/7}{#v/0}是不是想死我了？",
                  "<20>{#e/twinkly/11}{#v/0}希望我没让你\n扫兴呢...",
                  '<20>{#e/twinkly/2}{#v/1}告诉你，\n我可被你折磨得够呛。'
               ],
               [
                  "<20>{#p/twinkly}{#e/twinkly/11}{#v/0}怎么啦？\n想把存档要回去？",
                  '<20>{#p/twinkly}{#e/twinkly/11}{#v/0}哦...',
                  "<20>{#p/twinkly}{#e/twinkly/2}{#v/1}没想到啊，$(name)...\n你咋能蠢成这样呢？"
               ],
               ['<20>{#p/twinkly}{#e/twinkly/7}{#v/0}不好意思呢，$(name)。\n但现在，\n整个世界，我说了算。']
            ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)],
      friend67: (unique: string[]) => [
         '<20>{#e/twinkly/11}{#v/0}嘻嘻嘻...',
         '<20>{#e/twinkly/11}{#v/0}趁着你们谈笑风生...',
         '<20>{#e/twinkly/5}{#v/0}我把六号档案的\n控制权夺过来了！',
         '<20>{#e/twinkly/10}{#v/0}现在，你辛辛苦苦\n收集的灵魂之力，\n都是我的啦！',
         "<20>{#e/twinkly/9}{#v/0}没了力量，\n你能打破力场就怪了。",
         "<20>{#e/twinkly/11}{#v/0}真是悲惨呢，\n此情此景，\n要不要吟诗一首呢？",
         "<20>{#e/twinkly/7}{#v/0}别急，\n还有更棒的呢。",
         '<20>{#e/twinkly/6}{#v/0}...',
         "<20>{#e/twinkly/5}{#v/0}更棒的是，\n这一切，都是你的错。",
         ...(30 <= SAVE.data.n.bully
            ? [
               "<20>{#e/twinkly/5}{#v/0}是你，给他们洗脑，\n让他们对你好。",
               '<20>{#e/twinkly/8}{#v/0}一路上，\n你揍他们，你欺负他们，\n你把他们打得半死...',
               '<20>{#e/twinkly/8}{#v/0}看他们要死了，\n你就停手，\n让他们苟活...'
            ]
            : [
               "<20>{#e/twinkly/5}{#v/0}是你，善待他们，\n让他们对你好。",
               '<20>{#e/twinkly/8}{#v/0}一路上，\n你倾听他们的烦恼...',
               '<20>{#e/twinkly/8}{#v/0}鼓励他们... \n关心他们...'
            ]),
         ...(1 <= SAVE.flag.n.killed_sans
            ? [
               '<20>{#e/twinkly/8}{#v/0}...',
               '<20>$(name)，我记得...',
               '<20>{#e/twinkly/5}在某条时间线里，\n我们俩同心协力\n杀死每一个人。',
               ...(SAVE.flag.b.confront_twinkly
                  ? [
                     '<20>{#e/twinkly/6}{#v/0}可是...\n你却背叛我，\n自己跑去当“老好人”。',
                     '<20>{#e/twinkly/8}{#v/0}这样，\n你就能在这些废物面前\n逞英雄。',
                     '<20>{#e/twinkly/7}{#v/0}好一个“最好的朋友”啊。'
                  ]
                  : [
                     [
                        '<20>{#e/twinkly/8}没错，咱俩是没走几步，\n可你就因此把我们的\n愿景忘了，是吧？',
                        "<20>{#e/twinkly/8}没错，咱俩是没走多远，\n可你就因此把我们的\n愿景忘了，是吧？",
                        "<20>{#e/twinkly/8}没错，咱是离终点还远，\n可你就因此把我们的\n愿景忘了，是吧？",
                        '<20>{#e/twinkly/8}咱俩都走那么远了，\n你却...',
                        '<20>{#e/twinkly/8}咱俩都快成功了，\n你却...'
                     ][Math.min(SAVE.flag.n.genocide_milestone, 4)],
                     '<20>{#e/twinkly/5}{#v/0}本以为，\n我们会形影不离。',
                     '<20>{#e/twinkly/6}{#v/0}可时代变了。',
                     '<20>{#e/twinkly/11}{#v/0}你成了软蛋！',
                     '<20>{#e/twinkly/7}{#v/0}你放弃了。'
                  ]),
               "<20>{#e/twinkly/9}{#v/0}呵呵，\n真自以为是啊。",
               '<20>{#e/twinkly/5}杀了人，又跑回来\n当“老好人”，是不是\n觉得自己可了不起了？',
               '<20>{#e/twinkly/6}{#v/0}真恶心。',
               '<20>{#e/twinkly/7}{#v/0}$(name)，\n有点自知之明吧。',
               '<21>{#e/twinkly/2}{#v/1}想救朋友？\n门都没有。'
            ]
            : 30 <= SAVE.data.n.bully
               ? ["<20>{#e/twinkly/5}{#v/0}你不知道，这么做\n根本屁用没有吗？"]
               : ["<20>{#e/twinkly/5}{#v/0}没有这些，\n你的朋友绝不会\n来到这里。"]),
         '<20>{#e/twinkly/11}{#v/0}嘻嘻嘻...',
         '<20>{#e/twinkly/6}{#v/0}啥？',
         '<20>想知道，我这么做图啥？',
         ...(unique.length > 2
            ? [
               '<20>{#e/twinkly/5}{#v/0}...呵，别装傻了。',
               '<20>{#e/twinkly/5}{#v/0}先问问你自己。',
               "<20>{#e/twinkly/11}{#v/0}你不也喜欢\n体验各种结局嘛...",
               '<20>{#e/twinkly/7}{#v/0}你不也为了满足好奇心，\n玩弄他们的生命嘛。',
               "<20>{#e/twinkly/8}{#v/0}...哈？\n你不记得了？\n那我帮你回忆回忆。",
               {
                  dark_death: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n安黛因和艾菲斯\n联合追杀你...',
                  dark_undyne: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n艾菲斯回到了\n布莱蒂和凯蒂身边...',
                  dark_alphys: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n几乎所有重要的人，\n都死于你手...',
                  dark_alphys_therapy:
                     '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n衫斯和帕派瑞斯\n一起开了家医疗公司...',
                  dark_alphys_virtual:
                     '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n帕派瑞斯和艾菲斯\n躲进了虚拟空间...',
                  dark_mew:
                     '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n愤怒喵喵让大伙都\n沉浸在她的怪癖中...',
                  dark_charles:
                     "<20>{#e/twinkly/5}{#v/0}第一个结局里，\n查尔斯让每个人都\n心想事成...",
                  dark_blooky:
                     "<20>{#e/twinkly/5}{#v/0}第一个结局里，\n镁塔顿的粉丝自发\n组建起一个反人类联盟...",
                  dark_generic: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n前哨站成立了\n“皇家防卫署”...',
                  dark_aborted:
                     '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n纳普斯特诅咒你\n死后“万劫不复”...',
                  light_ultra:
                     '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n帕派瑞斯抓到了你，\n最终当上了皇家守卫...',
                  light_undyne: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n艾菲斯迫于压力，\n把其他人类藏了起来...',
                  light_runaway: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n民众意外知道了\n那些人类的去向...',
                  light_toriel: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n托丽尔从大众视野里\n消失了...',
                  light_dog: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n犬卫队成了前哨站的\n实际统治力量...',
                  light_muffet: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n玛菲特夺取权力，\n成为无情的独裁者...',
                  light_papyrus:
                     '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n“友谊就是魔法”成了现实...',
                  light_sans: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n衫斯当上了国王...',
                  light_generic: '<20>{#e/twinkly/5}{#v/0}第一个结局里，\n特雷莉亚当选女王...'
               }[unique[0]]!,
               {
                  dark_death: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n安黛因和艾菲斯\n联合追杀你，',
                  dark_undyne: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n艾菲斯回到了\n布莱蒂和凯蒂身边，',
                  dark_alphys: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n几乎所有重要的人，\n都死于你手，',
                  dark_alphys_therapy:
                     '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n衫斯和帕派瑞斯\n一起开了家医疗公司，',
                  dark_alphys_virtual:
                     '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n帕派瑞斯和艾菲斯\n躲进了虚拟空间，',
                  dark_mew:
                     '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n愤怒喵喵让大伙都\n沉浸在她的怪癖中。',
                  dark_charles:
                     "<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n查尔斯让每个人都\n心想事成。",
                  dark_generic: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n镁塔顿的粉丝自发\n组建起一个反人类联盟。',
                  dark_blooky:
                     "<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n前哨站成立了\n“皇家防卫署”。",
                  dark_aborted:
                     '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n纳普斯特诅咒你\n死后“万劫不复”。',
                  light_ultra:
                     '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n帕派瑞斯抓到了你，\n最终当上了皇家守卫，',
                  light_undyne: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n艾菲斯迫于压力，\n把其他人类藏了起来。',
                  light_runaway: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n民众意外知道了\n那些人类的去向。',
                  light_toriel: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n托丽尔从大众视野里\n消失了。',
                  light_dog: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n犬卫队成了前哨站的\n实际统治力量。',
                  light_muffet: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n玛菲特夺取权力，\n成为无情的独裁者。',
                  light_papyrus:
                     '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n“友谊就是魔法”成了现实。',
                  light_sans: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n衫斯当上了国王。',
                  light_generic: '<20>{#e/twinkly/5}{#v/0}...而在最后一个结局，\n特雷莉亚当选女王。'
               }[unique[unique.length - 1]]!,
               "<20>{#e/twinkly/7}{#v/0}你把他们当儿戏，\n玩弄他们时多开心啊。",
               "<20>{#e/twinkly/5}{#v/0}现在，\n也让我体验体验。"
            ]
            : [
               "<20>{#e/twinkly/8}{#v/0}...你咋这么蠢呢？",
               '<20>{#e/twinkly/6}{#v/0}不管是你，我，\n还是身边的一切...',
               "<21>{#e/twinkly/5}{#v/0}都是一场“游戏”的\n玩家。",
               '<20>{#e/twinkly/11}{#v/0}要是我乖乖让你们走，\n你就“赢了”，\n就“幸福“了。',
               '<20>{#e/twinkly/11}你要是“赢了”，\n谁还来陪我“玩”呢？',
               '<20>{#e/twinkly/7}{#v/0}那时，\n我可怎么办呢？',
               '<20>{#e/twinkly/5}{#v/0}所以，\n我不会让游戏结束。'
            ]),
         "<20>{#e/twinkly/8}{#v/0}我就把“胜利”放你面前，\n然后，当你伸手\n去够它的时候...",
         '<20>{#e/twinkly/2}{#v/1}{@random=1.1/1.1}“咔嚓！”\n胜利没了，\n让我撕碎了。',
         '<20>{#e/twinkly/14}{#v/1}{@random=1.1/1.1}你再够，我再撕。\n一遍，一遍，\n又一遍...',
         '<20>{#e/twinkly/5}{#v/0}嘻嘻嘻。',
         '<20>{#e/twinkly/5}{#v/0}{#v/0}听好了。',
         ...(30 <= SAVE.data.n.bully
            ? [
               '<20>{#e/twinkly/5}{#v/0}你要是打败了我...',
               "<20>{#e/twinkly/5}{#v/0}我就把“完美结局”\n让给你，\n让“好朋友”们活下来。"
            ]
            : [
               '<20>{#e/twinkly/5}{#v/0}你要是打败了我...',
               "<20>{#e/twinkly/5}{#v/0}我就把“幸福结局”\n让给你，\n让你和好友团聚。"
            ]),
         "<20>{#e/twinkly/5}{#v/0}然后，打碎力场。",
         '<20>{#e/twinkly/5}{#v/0}让所有人获得幸福。',
         "<20>{#e/twinkly/9}{#v/0}不过，\n想赢我，做梦去吧！",
         
         "<20>{#e/twinkly/5}{#v/0}即使，我要陪你\n耗到时间尽头..."
      ],
      friend68: ['<20>{#e/twinkly/0}{#v/1}{@random=1.1/1.1}我也会想方设法，\n杀了你，困死你，\n折磨死你！{%20}'],
      friend69: ['<20>{#e/twinkly/8}{#v/0}怎么回事？'],
      friend70: [
         '<20>{#p/asgore}{#e/asgore/1}年轻人，别害怕...',
         '<20>{#e/asgore/2}...我们会守护你！'
      ],
      friend71: [
         "<15>{#p/papyrus}{#e/papyrus/1}没错！\n人类，你一定能赢！",
         '<15>{#e/papyrus/1}我永远相信你，\n所以，你也要...',
         '<15>{#e/papyrus/2}相信自己！！！'
      ],
      friend72: [
         '<20>{#p/undyne}{#e/undyne/11}哈，你连我都不怕，\n还会怕它？',
         "<20>{#e/undyne/11}所以别担心...",
         "<20>{#e/undyne/13}我们永远支持你！"
      ],
      friend73: [
         "<20>{#p/sans}{#e/sans/1}哦？\n还没打倒那玩意呢？",
         "<20>{#e/sans/2}拜托，\n就这奇葩，啥也不是。"
      ],
      friend74: [
         "<20>{#p/alphys}{#e/alphys/1}按理说，\n你肯定打不过他...",
         '<20>{#e/alphys/2}但-但我总觉得...\n你能行的！！'
      ],
      friend75: [
         '<20>{#p/toriel}{#e/toriel/1}孩子...',
         '<20>{#e/toriel/2}世界上最乖，\n最可爱的孩子...',
         '<20>{#e/toriel/3}可不能在这时候\n放弃啊！'
      ],
      friend76: "老兄，\n你能行的！", 
      friend77: () => (SAVE.data.n.bully < 30 ? '*有力的\n 口哨声*' : '*胆怯的\n 口哨声*'), 
      friend78: () => (SAVE.data.n.bully < 30 ? '闪亮亮，\n亮闪闪！' : "你很烂，\n不过他\n更烂。"), 
      friend79: '快揍扁\n这个\n抽象玩意！', 
      friend80: () => (SAVE.data.n.bully < 30 ? '啦啦啦~' : '呜-呜，\n呜-呜'), 
      friend81: '别输给他。', 
      friend82: () => (SAVE.data.n.bully < 30 ? '同心协力。' : '把揍人的劲\n使出来吧。'), 
      friend83: () => (SAVE.data.n.bully < 30 ? '小家伙，\n让他瞧瞧\n你的厉害！' : '上吧，\n小恶霸。'), 
      friend84: () => (SAVE.data.n.bully < 30 ? "有我们\n支持你！" : '我们咋\n还有点\n喜欢你了？'), 
      friend85: () => (SAVE.data.n.bully < 30 ? '使出你的\n真本事，\n好吗？' : '让他\n见识见识\n你的拳头。'), 
      friend86a: '呱呱。', 
      friend86b: "别放弃！", 
      friend87: [
         '<20>{#p/twinkly}{#e/twinkly/17}呃啊啊...\n不！',
         '<20>{#e/twinkly/16}难以置信！！',
         "<20>{#e/twinkly/15}这怎么可能...！",
         '<20>{#e/twinkly/16}你们... 你们...！'
      ],
      friend88: ["<20>{#p/twinkly}{#e/twinkly/2}真不敢相信\n你们都这么愚蠢。"],
      friend89: ['<20>{*}你们所有人的灵魂\n都归我了！！！！！{^40}{%}'],
      friend90: () =>
         1 <= SAVE.flag.n.killed_sans
            ? ['<20>{#p/asriel1}果然...', '<20>这种感觉，\n比上次好太多了。']
            : ['<20>{#p/asriel1}终于。', '<20>当星星那么久\n真是受够了。'],
      friend91: ['<20>{#p/asriel1}哈喽！', '<20>你在那里吗，\n$(name)？', "<20>是我啊，你最好的朋友："],
      friend92: '<99>{*}{#p/asriel3}{#v/1}{#i/12}艾斯利尔·逐梦{^10}{#p/event}{%}'
   },
   b_opponent_finalasgore: {
      name: '* 艾斯戈尔',
      death1: [
         '<11>{*}{#p/asgore}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}...这就是\n我的归宿了...',
         '<11>{*}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}...',
         '<11>{*}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}取走我的灵魂，\n离开这片\n诅咒之地吧...',
         '<11>{*}{#e/asgore/1}{#v/2}{#i/10}{@random=1.1/1.1}这样...',
         '<11>{*}{#e/asgore/1}{#v/2}{#i/10}{@random=1.1/1.1}我们就\n永远不会\n再拖累你了...',
         '<11>{*}{#e/asgore/2}{#v/3}{#i/10}{@random=1.1/1.1}...',
         '<11>{*}{#e/asgore/2}{#v/3}{#i/12}{@random=1.1/1.1}永别了...'
      ]
   },

   i_archive: { battle: { description: '', name: '' }, drop: [], info: [], name: '无', use: [] },
   i_archive_berry: {
      battle: { description: '3 HP。', name: '洋梅' },
      drop: ['<32>{#p/human}* （你把洋梅扔掉了。）'],
      info: ['<32>{#p/human}* （3 HP。）'],
      name: '洋梅',
      use: ['<32>{#p/human}* （你吃掉了洋梅。）']
   },
   i_archive_candy: {
      battle: { description: '4 HP。', name: '糖果' },
      drop: ['<32>{#p/human}* （你把怪物糖果扔掉了。）'],
      info: ['<32>{#p/human}* （4 HP。）'],
      name: '怪物糖果',
      use: ['<32>{#p/human}* （你吃掉了怪物糖果。）']
   },
   i_archive_rations: {
      battle: { description: '5 HP。', name: '口粮' },
      drop: ['<32>{#p/human}* （你把口粮扔掉了。）'],
      info: ['<32>{#p/human}* （5 HP。）'],
      name: '口粮',
      use: ['<32>{#p/human}* （你吃掉了口粮。）']
   },
   i_archive_tzn: {
      battle: { description: '6 HP。', name: '太空豆腐' },
      drop: ['<32>{#p/human}* （你把太空豆腐扔掉了。）'],
      info: ['<32>{#p/human}* （6 HP。）'],
      name: '太空豆腐',
      use: ['<32>{#p/human}* （你吞下了太空豆腐。）']
   },
   i_archive_nice_cream: {
      battle: { description: '7 HP。', name: '冰意灵' },
      drop: ['<32>{#p/human}* （你把冰意灵扔掉了。）'],
      info: ['<32>{#p/human}* （7 HP。）'],
      name: '冰意灵',
      use: [
         '<32>{#p/human}* （你撕开了冰意灵的包装。）',
         "<32>{#p/human}* （上面有一幅全息图像，\n  刻画了一个哭泣的孩子。）"
      ]
   },
   i_archive_healpak: {
      battle: { description: '8 HP。', name: '治疗包' },
      drop: ['<32>{#p/human}* （你把治疗包扔掉了。）'],
      info: ['<32>{#p/human}* （8 HP。）'],
      name: '治疗包',
      use: ['<32>{#p/human}* （你使用了治疗包。）']
   },
   i_big_dipper: {
      battle: {
         description: '一把巨勺，由本星系\n最好的合金材料制成。',
         name: '大熊座'
      },
      drop: ['<32>{#p/human}* （你把大熊座扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （15攻击。）']
            : ['<32>{#p/basic}* “大熊座” （15攻击）\n* 一把巨勺，由本星系\n  最好的合金材料制成。'],
      name: '大熊座',
      use: ['<32>{#p/human}* （你装备上了大熊座。）']
   },
   i_heart_locket: {
      battle: {
         description: '上面刻着“永远都是好朋友”。',
         name: '心形挂坠'
      },
      drop: () => [
         '<32>{#p/human}* （你把心形挂坠扔掉了。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : ['<32>{#p/basic}* ...', "<32>{#p/basic}* 我就当什么都没看见。"])
      ],
      info: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* （15防御。）']
            : ['<33>{#p/basic}* “心形挂坠” （15防御）\n* 上面刻着“永远都是好朋友”。'],
      name: '心形挂坠',
      use: ['<32>{#p/human}* （你戴上了心形挂坠。）']
   },
   i_starling_tea: {
      battle: {
         description: '好王配好茶。',
         name: '星花茶'
      },
      drop: ['<32>{#p/human}* （你把星花茶全倒掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （99 HP。）']
            : ['<32>{#p/basic}* “星花茶” 回复99 HP\n* 好王配好茶。'],
      name: '星花茶',
      use: ['<32>{#p/human}* （你将星花茶一饮而尽。）']
   },

   k_hangar: {
      name: '停机坪门禁卡',
      description: "用来解除前哨站停机坪的门禁。"
   },

   k_skeleton: {
      name: '骨钥',
      description: () =>
         SAVE.data.b.s_state_sansdoor
            ? "用它解锁了衫斯房间的门。"
            : '在首塔的最终长廊，\n衫斯将它交给了你。'
   },

   s_save_citadel: {
      c_elevator1: { name: '首塔', text: [] },
      c_courtroom: { name: '最终长廊', text: [] },
      c_road2: { name: '行宫', text: [] },
      c_archive_start: { name: 'e586b3e5bf83', text: [] },
      c_archive_path1: { name: 'e88090e5bf83', text: [] },
      c_archive_path2: { name: 'e58b87e6b094', text: [] },
      c_archive_path3: { name: 'e6ada3e79bb4', text: [] },
      c_archive_path4: { name: 'e6af85e58a9b', text: [] },
      c_archive_path5: { name: 'e59684e889af', text: [] },
      c_archive_path6: { name: 'e6ada3e4b989', text: [] },
      c_exit: { name: '终点', text: [] }
   }
};


// END-TRANSLATE
