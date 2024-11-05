import { asrielinter } from '../../../code/common';
import { toriCheck, toriSV } from '../../../code/outlands/extras';
import { game } from '../../../code/systems/core';
import {
   battler,
   choicer,
   iFancyYourVilliany,
   instance,
   outlandsKills,
   pager,
   postSIGMA,
   resetThreshold,
   roomKills,
   saver,
   world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';
import { CosmosKeyed, CosmosProvider } from '../../../code/systems/storyteller';

// START-TRANSLATE

const toriel_aerialis = () =>
   SAVE.data.n.plot < 49
      ? [
         '<25>{#p/toriel}{#f/1}* 听说空境那儿\n  有种特殊的液体...',
         '<25>{#f/0}* 主要用于隔绝电流。',
         '<25>{#f/1}* 要是你能带着这种液体，\n  你会带到哪儿去？',
         '<25>{#f/1}* 会一直带到首塔吗？',
         '<25>{#f/1}* 还是直接扔到垃圾站？',
         '<25>{#f/0}* 要是那样可就太没劲了。'
      ]
      : SAVE.data.n.plot < 51
         ? world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
            ? [
               '<25>{#p/toriel}{#f/1}* 说不定，\n  等我以后当上老师...',
               '<25>{#f/0}* 可以带学生\n  去皇家实验室参观。',
               "<25>{#f/0}* 当然了，\n  前提是艾菲斯博士同意。",
               '<25>{#f/1}* 那里肯定做了\n  不少有意思的实验...',
               "<25>{#f/0}* 对孩子们来说，这可是\n  难得的学习机会。"
            ]
            : [
               '<25>{#p/toriel}{#f/0}* 小家伙，\n  你上电视的事\n  已经传遍啦！',
               '<25>{#f/0}* 不过我没有电视，\n  所以没能看到。',
               '<25>{#f/1}* 我听说这事的时候，\n  还是挺惊讶的...',
               SAVE.data.n.state_aerialis_talentfails === 0
                  ? '<25>{#f/2}* 你居然一次也没有漏击！'
                  : '<25>{#f/6}* 你居然跳舞跳得那么棒！'
            ]
         : SAVE.data.n.plot < 56
            ? [
               '<25>{#p/toriel}{#f/1}* 嗯...\n* 空境的皇家守卫们啊...',
               '<25>{#f/0}* 我听说他们\n  最喜欢吃... 鲑鱼。',
               '<25>{#f/1}* 还是... 冰淇淋？',
               '<25>{#f/2}* 不对，我记得是披萨！',
               '<25>{#f/0}* 这些东西都离不开\n  那不起眼的复制器。',
               '<25>{#f/1}* 话说...\n  那些新兵喜欢吃这些，\n  是不是有点怪啊？'
            ]
            : SAVE.data.n.plot < 59
               ? [
                  world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
                     ? '<25>{#p/toriel}{#f/0}* 小家伙，\n  听说你上电视啦。'
                     : '<25>{#p/toriel}{#f/0}* 小家伙，\n  听说你又上电视啦。',
                  '<25>{#f/1}* 而且你还做了件\n  惊天动地的事...',
                  iFancyYourVilliany()
                     ? '<25>{#f/2}* 居然把材料掉包\n  来制作塑性炸药！'
                     : SAVE.data.n.state_aerialis_crafterresult === 0
                        ? '<25>{#f/2}* 居然毫不退缩地\n  直面爆炸的威胁！'
                        : '<25>{#f/2}* 居然擅自使用一次性的\n  便携式喷气背包！',
                  '<25>{#f/3}* ...你啊...',
                  '<25>{#f/4}* 你这是在玩命吗？'
               ]
               : SAVE.data.n.plot < 60
                  ? [
                     '<25>{#p/toriel}{#f/1}* 空境的谜题\n  都是些啥样的啊？',
                     '<25>{#f/1}* 是激光那种的吗？',
                     '<25>{#f/1}* 失败了会把你\n  送回起点吗？',
                     '<25>{#f/1}* ...话说，那些谜题\n  真的能“失败”吗？',
                     '<25>{#f/0}* 嗯...\n* 抱歉一下子\n  问了这么多问题。',
                     '<25>{#f/1}* 我这种喜欢谜题的\n  忍不住就想东想西...'
                  ]
                  : SAVE.data.n.plot < 61
                     ? [
                        '<25>{#p/toriel}{#f/1}* 听说你和镁塔顿\n  发生的这些趣事后...',
                        '<25>{#f/0}* 我突然想到一个问题。',
                        '<25>{#f/1}* AI程序不是被禁了吗？\n  那像他这样的机器人\n  是怎么搞的？',
                        '<25>{#f/5}* 艾菲斯博士肯定不会\n  违反这样既定的规则。',
                        '<25>{#f/0}* 嗯...\n* 肯定是有别的原因。'
                     ]
                     : SAVE.data.n.plot < 63
                        ? [
                           '<25>{#p/toriel}{#f/1}* 嗯...\n* 空境的皇家守卫们啊...',
                           '<25>{#f/0}* 我听说她们才刚升职。',
                           '<25>{#f/1}* 我还听说她们\n  对武器特别挑剔...',
                           '<25>{#f/5}* 明明有更好的武器，\n  她们却不愿意换。',
                           '<25>{#f/0}* 倒也不是说\n  我希望她们换武器啦。',
                           '<25>{#f/2}* 我已经够担心你的了！'
                        ]
                        : SAVE.data.n.plot < 65
                           ? SAVE.data.b.a_state_hapstablook
                              ? [
                                 '<25>{#p/toriel}{#f/1}* 有只叫匿罗的幽灵\n  最近跟我谈起了\n  一些家里的事。',
                                 '<25>{#f/5}* 看来这事\n  困扰那幽灵很久了。',
                                 '<25>{#f/0}* 还好，\n  那幽灵说\n  应该很快就能解决了。',
                                 '<25>{#f/1}* 而且还是在\n  你的帮助下？',
                                 '<25>{#f/0}* 那可真是太好了。\n* 小家伙，\n  我真为你感到骄傲。'
                              ]
                              : [
                                 '<25>{#p/toriel}{#f/1}* 有只叫匿罗的幽灵\n  最近跟我谈起了\n  一些家里的事。',
                                 '<25>{#f/5}* 看来这事\n  困扰那幽灵很久了。',
                                 '<25>{#f/1}* 那幽灵说它的表亲\n  本想找你帮忙...',
                                 '<25>{#f/5}* 但当时你没空。',
                                 '<25>{#f/1}* ...你肯定是在\n  忙些什么吧？'
                              ]
                           : SAVE.data.n.plot < 66
                              ? [
                                 '<25>{#p/toriel}{#f/1}* 没想到一个机器人\n  唱歌居然这么好听！',
                                 "<25>{#f/0}* 听了镁塔顿的新歌之后，\n  我都不敢相信\n  自己的耳朵了。",
                                 '<26>{#f/1}* 不过，\n  有些歌词有点... 暴力，\n  不太符合我的口味。',
                                 '<25>{#f/5}* ...',
                                 '<25>{#f/0}* 孩子，别担心。\n* 没人会把你\n  流放到太空里去的。'
                              ]
                              : SAVE.data.n.plot < 68
                                 ? [
                                    '<25>{#p/toriel}{#f/0}* 衫斯说他很喜欢\n  去“休闲回廊”。',
                                    '<25>{#p/toriel}{#f/1}* 那里有美术班、\n  音乐部、图书馆...',
                                    '<25>{#p/toriel}{#f/5}* 可惜那片区域\n  还有一些地方\n  对小孩子来说不太安全。',
                                    '<25>{#p/toriel}{#f/3}* 他们就不能多花点心思，\n  把环境弄好一点吗？',
                                    '<25>{#p/toriel}{#f/2}* 这些艺术类的活动\n  可是能给孩子们\n  带来宝贵的成长体验啊！'
                                 ]
                                 : SAVE.data.n.plot < 70
                                    ? world.bad_robot
                                       ? [
                                          '<25>{#p/toriel}{#f/0}* 我认识的人都对\n  “压轴好戏”的取消\n  感到很失望。',
                                          '<25>{#p/toriel}{#f/0}* 他们说那本会是\n  一场非常精彩的战斗。',
                                          '<25>{#p/toriel}{#f/1}* 虽然我很庆幸\n  你不用参加那种战斗...',
                                          '<25>{#p/toriel}{#f/5}* 但我还是忍不住担心\n  接下来你会遇到什么。'
                                       ]
                                       : SAVE.data.b.killed_mettaton
                                          ? [
                                             '<25>{#p/toriel}{#f/0}* 我认识的人都在讨论着\n  “压轴好戏”。',
                                             '<25>{#p/toriel}{#f/1}* 他们说镁塔顿\n  为了演好节目\n  献出了生命...',
                                             '<25>{#p/toriel}{#f/0}* 但我心里清楚得很。',
                                             '<25>{#p/toriel}{#f/1}* 机器人坏了还能再修嘛，\n  对吧？'
                                          ]
                                          : [
                                             '<25>{#p/toriel}{#f/0}* 我认识的人都在讨论着\n  “压轴好戏”。',
                                             '<25>{#p/toriel}{#f/0}* 他们说看到\n  你和镁塔顿的表演，\n  他们都很开心。',
                                             '<25>{#p/toriel}{#f/1}* 我很高兴\n  你们似乎玩得很愉快...',
                                             '<25>{#p/toriel}{#f/5}* 但我还是忍不住担心\n  接下来你会遇到什么。'
                                          ]
                                    : [
                                       '<25>{#p/toriel}{#f/1}* 小家伙，\n  你在外面还好吗？',
                                       '<25>{#p/toriel}{#f/5}* 你应该已经\n  去过首塔了吧？',
                                       '<25>{#p/toriel}{#f/9}* ...',
                                       "<25>{#p/toriel}{#f/10}* 要乖啊，好吗？"
                                    ];

export default {
   a_outlands: {
      darktorielcall: [
         '<26>{#p/toriel}{#f/5}* I apologize, little one.\n* I have once again turned off my phone.',
         '<25>{#p/toriel}{#f/9}* Please, leave me here for the time being.',
         '<25>{#p/toriel}{#f/10}* I will return to you and the others in due time.'
      ],
      secret1: () => [
         '<32>{#p/basic}* 这里有一扇门。\n* 锁住了。',
         ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* 也许... 你能在哪找到钥匙？"])
      ],
      secret2: ['<32>{#p/human}* （你使用了秘密钥匙。）'],
      exit: () => [choicer.create('* （离开外域吗？）', "离开", "再等等")],
      nosleep: ['<32>{#p/human}* （好像有什么打扰了你休息。）'],
      noequip: ['<32>{#p/human}* （你打算不这么做。）'],
      finaltext: {
         a: ["<32>{#p/basic}* 他肯定就在附近..."],
         b: ['<32>{#p/basic}* 等等...？', '<32>{#p/basic}* 那边站着的...\n* 是他吗？'],
         c: [
            "<32>{#p/basic}* ...真的是他。",
            "<32>* ...\n* 弗里斯克，如果你准备好了...",
            "<32>* 如果你已见过每一位想见的人...",
            '<32>* ...',
            '<32>* 就做你该做的事吧。',
            "<32>* 如果你还有事要做，\n  我会耐心等你准备好。"
         ],
         d1: ['<32>{#p/basic}* 艾斯利尔。'],
         d2: ['<25>{#p/asriel1}{#f/13}* ...弗里斯克？\n* 是你吗？'],
         d3: ["<32>{#p/basic}* 艾斯利尔，是我啊，你最好的朋友...", '<32>{#p/basic}* 还记得我吗？'],
         d4: [
            '<25>{#p/asriel1}{#f/25}* ...！',
            '<25>{#f/25}* $(name)...？',
            "<25>{#f/13}* 可是... 你...",
            "<25>{#f/23}* ...你已经..."
         ],
         d5: ['<32>{#p/basic}* 死了？'],
         d6: [
            '<32>{#p/basic}* 呵。\n* 很长一段时间里...\n  我真想死了算了。',
            '<32>{#p/basic}* 我那么对待你，我...\n  我就活该去死。'
         ],
         d7: ["<25>{#p/asriel1}{#f/7}* 住口，$(name)！", "<25>{#f/6}* ...你错了！"],
         d8: [
            '<33>{#p/basic}* 哈哈... 面前的小家伙。\n  前不久还逞强说“别担心我，\n  去找爱你的人”呢。',
            '<32>* 但是，艾斯利尔...\n  是时候告诉你真相了。',
            '<32>* 关于我的，我的一切。'
         ],
         d9: ['<25>{#p/asriel1}{#f/23}* ...', '<25>{#f/23}* 但是...'],
         d10: ['<25>{#p/asriel1}{#f/13}* $(name)...', '<25>{#f/15}* 你是怎么...'],
         d11: [
            '<32>{#p/basic}* ...那重要吗？',
            '<32>* 我一直都不是什么好人，\n  这才是最重要的。',
            "<32>* 所以，你之前把我遗忘... \n  我不怪你。",
            "<32>* 而且，我也不配做\n  你的朋友，你的亲人。"
         ],
         d12: ['<25>{#p/asriel1}{#f/13}* $(name)，我...'],
         d13: ["<32>{#p/basic}* 别伤心，艾斯利尔。", "<32>* 没必要逼自己认为\n  我是个好人。"],
         d14: ['<25>{#p/asriel1}{#f/22}* ...', '<25>{#f/22}* ...为什么现在说这些？'],
         d15: [
            '<32>{#p/basic}* 曾经...',
            '<32>* 我一直觉得人性本恶。',
            '<32>* 也就是说...',
            '<32>* 只要你是个人类，\n  不管经历什么，最终必定堕入黑暗。',
            '<32>* 但我目睹了弗里斯克的整段旅程，\n  见证了弗里斯克所做的一切...',
            '<32>* 我才知道，我错了。',
            '<32>* 别的人类，他们伤害怪物，\n  折磨怪物。\n* 更有甚者，把他们...',
            "<33>* 所以，我一直对自己的错误\n  视而不见。",
            '<32>* 但弗里斯克不是。',
            '<32>* 无论面对什么困难，\n  弗里斯克总是施以善意，报以仁慈。',
            '<32>* 是弗里斯克... \n  让我看清自己的错误。',
            "<32>* 所以，我不该继续逃避责任。",
            '<32>* 都怪我，才让你遭那么多罪，\n  失去那些重要的东西。',
            "<32>* 对不起。"
         ],
         d16: ['<25>{#p/asriel1}{#f/13}* $(name)...', '<25>{#f/15}* 这段时间里，\n  你一直都有自己的意识吗？'],
         d17: [
            '<32>{#p/basic}* ...对，应该是这样。',
            '<32>* 我们死后，我就是以这种形态\n  继续“活着”的。',
            "<32>* 而且，我还有些话想跟你说。"
         ],
         d18: ['<25>{#p/asriel1}{#f/21}* 你说吧。'],
         d19: [
            '<32>{#p/basic}* 还记得吗？',
            '<32>* 咱们一起穿过力场，\n  到达故园的废墟时，\n  被那伙人类发现了。',
            '<32>* 那时，我打算用咱们的力量\n  消灭他们...\n* 但你阻止了我，还记得吗？'
         ],
         d20: ['<25>{#p/asriel1}{#f/16}* ...当然。'],
         d21: [
            "<32>{#p/basic}* 那时，我不理解\n  你为什么要那么做...",
            '<32>* 但现在，我明白了。',
            '<32>* 你不想让我铸成大错。'
         ],
         d22: ['<25>{#p/asriel1}{#f/15}* $(name)...'],
         d23: [
            "<32>{#p/basic}* 如果没有你，\n  前哨站就会在又一次战争中\n  彻底毁灭。",
            '<32>* 如果没有你，\n  那些我想拯救的怪物们...',
            '<32>* ...就要和我们一同陪葬。'
         ],
         d24: ['<25>{#p/asriel1}{#f/25}* $(name)，我...'],
         d25: [
            '<32>{#p/basic}* 你用我们的牺牲，\n  换来了怪物们如今的安稳生活。',
            '<32>* 时至今日，\n  你仍是我最棒的兄弟。',
            "<32>* 而我... 却不配做\n  你最棒的亲人。"
         ],
         d26: [
            '<25>{#p/asriel1}{#f/25}* 我原谅你，$(name)！',
            "<25>{#f/23}* 别这样，好不好？\n* 求你了...",
            '<25>{#f/22}* 我知道，那时你很难受，\n  很痛苦...',
            "<25>{#f/15}* 你千万别为了我，就..."
         ],
         d27: [
            '<32>{#p/basic}* 不。\n* 我不会再犯同样的错误了。',
            '<32>* 艾斯利尔，你不是一直相信着...',
            "<32>* “只要肯努力，人人都能改变”吗？"
         ],
         d28: ['<25>{#p/asriel1}{#f/13}* ...是的。'],
         d29: [
            "<32>{#p/basic}* 过去的一百年中，\n  我一直在自责。",
            "<32>* 过去的一百年中，\n  我一直怀恨在心。",
            '<32>* 那段时间，我一直在想\n  是什么让我活着...',
            '<32>* 现在，我终于知道答案了。'
         ],
         d30: ['<25>{#p/asriel1}{#f/15}* ...？'],
         d31: ["<32>{#p/basic}* ...是你，艾斯利尔。", "<32>* 是你一直在支撑我活下去。"],
         d32: [
            '<32>{#p/basic}* 像是一种... \n  没有兑现的承诺。',
            '<32>* 怀恨在心... \n  像我一样想着你...',
            "<32>* 知道我本可以为你付出\n  比最终更多的努力。",
            "<32>* 一直以来，这就是\n  阻止我前进的原因。"
         ],
         d33: ['<25>{#p/asriel1}{#f/23}* $(name)...'],
         d34: ['<32>{#p/basic}* 艾斯利尔。\n* 我的兄弟。', '<32>* 你应该知道真相。'],
         d35: ['<25>{*}{#p/asriel1}{#f/25}* 嗯？\n* 但是你早就- {%}'],
         d36: ['<32>{#p/basic}* 我也原谅你。'],
         d37: ['<25>{#p/asriel1}{#f/30}{#i/4}* ...！', '<25>{#p/asriel1}{#f/26}{#i/4}* $(name)...'],
         d38: ['<32>{#p/basic}* 嘘...', "<32>* It's alright.", "<32>* 我懂你了，好吗？"],
         d39: ['<25>{#p/asriel1}{#f/25}{#i/4}* 我...'],
         d40: ["<32>{#p/basic}* 我懂你，艾斯利尔。"],
         d41: [
            '<32>{#p/basic}* ...我能感觉到。',
            '<32>* 即使过去了一百年...',
            "<32>* 他还在这，对吧？",
            '<32>* 就像个小天使一样...',
            '<32>* 守护我，保护我\n  不受错误决定影响...',
            '<32>* ...所有这些，\n  都是为了有一天我能报答他。'
         ],
         d42: ["<32>{#p/basic}* 这一切开始有意义了。", '<32>* 我知道我该怎么做。'],
         d43: ['<25>{*}{#p/asriel1}{#f/25}* 哈？\n* 你要... {^60}{%}'],
         d44: ['<25>{*}{#f/25}* 不...！{^60}{%}', '<25>{*}{#f/26}* 让... 让我走！{^60}{%}'],
         d45: ['<32>{*}{#p/basic}* 呵...{^60}{%}', '<32>{*}* ...替我照顾好爸爸妈妈，\n  好吗？{^60}{%}'],
         d46: ['<25>{#p/asriel1}{#f/25}* 弗里斯克，你在那里吗？', '<25>{#f/22}* 拜托了... 醒来吧...'],
         d47: ["<25>{#p/asriel1}{#f/23}* 我...\n* 我也不想失去你..."],
         d48: ['<25>{#p/asriel1}{#f/17}* ... there you are.'],
         d49: [
            "<25>{#p/asriel1}{#f/23}* Ha... I thought I'd lost you for a minute there.",
            "<25>{#f/22}* Don't scare me like that again, okay?",
            '<25>{#f/13}* ...'
         ],
         d50: [
            '<25>{#p/asriel1}{#f/13}* Well...\n* I have my SOUL back inside of me now.',
            '<25>{#f/15}* My original one.',
            '<25>{#f/16}* ...',
            "<26>{#f/16}* When $(name) and I died, they must've wrapped themselves around me...",
            '<25>{#f/13}* ... keeping me safe until I could be brought back here.',
            '<26>{#f/17}* They held on that whole time, just for a chance to see me, Frisk...',
            '<25>{#f/13}* ... so, the least I can do is honor it.',
            '<25>{#f/15}* Live the life they always wanted me to have.'
         ],
         d51: [
            '<25>{#p/asriel1}{#f/23}* ...弗里斯克。',
            "<25>{#f/23}* I'm going to stay with you from now on.",
            "<25>{#f/17}* Wherever you go... I'll follow you.",
            '<25>{#f/13}* I feel like...\n* I can trust you with that sort of thing.',
            "<25>{#f/13}* Even if we don't know much about each other.",
            "<25>{#f/15}* ... I don't know.",
            '<25>{#f/15}* ...',
            '<25>{#f/13}* Frisk... are you really sure about this?',
            "<25>{#f/13}* All the times I've hurt you, hurt your friends...",
            "<25>{#f/22}* It's... all I can think about right now.",
            '<25>{#f/21}* Seeing them die like that in my mind, over and over...',
            "<25>{#f/22}* Knowing that I'm the one who did it.",
            '<25>{#f/15}* ...',
            '<25>{#f/15}* Are you really sure you can be there for someone like that?',
            '<32>{#p/human}* (...)',
            '<25>{#p/asriel1}{#f/15}* ...',
            "<25>{#f/17}* ... I guess I just don't understand you, Frisk.",
            "<25>{#f/23}* No matter what I do to you... you just won't give in.",
            '<25>{#f/22}* ...',
            "<25>{#f/13}* Hey.\n* Maybe it won't be so bad.",
            "<25>{#f/17}* Having you there with me definitely won't hurt matters.",
            '<25>{#f/13}* ...\n* The thing is...\n* If I stayed here now...',
            "<25>{#f/15}* It wouldn't be right by $(name)... you know?",
            '<25>{#f/13}* And besides, with my SOUL back inside of me...',
            "<25>{#f/13}* I won't turn back into a star.",
            "<25>{#f/13}* So... there's no point in me staying here."
         ],
         d52: [
            '<25>{#p/asriel1}{#f/17}* Well.\n* Better get going.',
            '<25>{#f/20}* Your friends are probably worried sick about you by now.'
         ],
         e1: [
            '<25>{#p/asriel1}{#f/15}* ...',
            "<25>{#f/16}* I don't know what's going to happen to $(name) after this.",
            "<25>{#f/13}* They held on for a chance to see me, but that's...",
            '<25>{#f/15}* ... in the past now.'
         ],
         e2: [
            "<25>{#p/asriel1}{#f/13}* I still can't believe they waited all that time just to see me...",
            '<25>{#f/23}* Stubborn idiot.',
            '<25>{#f/17}* ... is what I would have said, if I was still a talking star.',
            "<25>{#f/13}* But... I don't really think they're an idiot."
         ],
         e3: [
            "<25>{#p/asriel1}{#f/13}* $(name)'s not stupid.\n* And I...",
            '<25>{#f/13}* I agreed with a lot of what they said about themselves...',
            '<25>{#f/15}* About them not being the kind of friend I wish I had...',
            "<25>{#f/7}* ... but it doesn't mean I wanted them gone!"
         ],
         e4: [
            "<25>{#p/asriel1}{#f/13}* It's not like $(name) has to go away...",
            "<25>{#f/17}* If they wanted to, they could stay with us.\n* I'd like them to.",
            "<25>{#f/15}* But I'd understand if they wanted to go.",
            '<25>{#f/16}* They \"won\" their game.\n* They shouldn\'t want to \"play\" with me anymore.'
         ],
         e5: [
            "<25>{#p/asriel1}{#f/13}* ... $(name)...\n* If you're still there, listening...",
            '<25>{#f/15}* I want you to know that I love you.',
            '<25>{#f/23}* You might not have been the greatest person...',
            '<25>{#f/22}* But, deep down, you still cared about me.'
         ],
         e6: [
            '<25>{#p/asriel1}{#f/23}* Ha...',
            '<25>{#f/22}* I probably seem like a crazy person right now.',
            '<25>{#f/15}* Obsessing over someone I should have moved on from already...',
            '<26>{#f/17}* ... I guess $(name) and I really are just a \n  pair of stubborn idiots.'
         ],
         e7: [
            '<25>{#p/asriel1}{#f/13}* One time, $(name) and I were fighting over a bed...',
            "<25>{#f/10}* 'Cause, both of us wanted the one with the nightstand next to it.",
            '<26>{#f/15}* We were both pushing each other off the side, trying to make room...',
            '<25>{#f/4}* All that fighting got us so tired, that we fell asleep.',
            '<25>{#f/13}* But when we woke up...',
            '<25>{#f/17}* We were lying right next to each other.',
            "<25>{#f/13}* I tried to get up, but... they didn't want to let go.",
            '<26>{#f/15}* They just kept saying...',
            '<25>{#f/15}* \"... warm...\"',
            '<25>{#f/15}* \"... fluffy...\"',
            '<25>{#f/20}* I would have complained about it, but...',
            "<25>{#f/17}* ... at that point, I was just happy we weren't fighting."
         ],
         e8: [
            '<25>{#p/asriel1}{#f/13}* This other time, $(name) and I were making dinner for Mom and Dad.',
            '<25>{#f/15}* They kept wanting to make it more spicy...',
            '<25>{#f/3}* To be honest, if they insisted on that now, I would not complain.',
            '<25>{#f/20}* I could go for something spicy right about now.',
            '<25>{#f/13}* But, back then, I was more into sweets.\n* Most monsters are.',
            '<25>{#f/15}* We ended up playing tug-of-war with the mixing bowl, and...',
            '<25>{#f/20}* You can imagine how that turned out.',
            '<25>{#f/17}* Mom made us clean up the mess, of course.',
            '<25>{#f/13}* Then, Dad took us out to eat, and we both got what we wanted.'
         ],
         e9: [
            "<25>{#p/asriel1}{#f/15}* $(name) and I...\n* It's like we couldn't agree on anything...",
            '<25>{#f/20}* Besides spending time together, that is.',
            '<26>{#f/17}* Despite our differences, $(name) and I really were inseparable.',
            "<25>{#f/13}* Even death itself couldn't keep us apart forever."
         ],
         e10: [
            "<25>{#p/asriel1}{#f/17}* ... do you think they're still around, Frisk?",
            '<25>{#f/17}* For all you know, they could be watching us right now.',
            "<25>{#f/23}* Wouldn't that be something.",
            "<25>{#f/22}* But it's impossible to know for sure."
         ],
         e11: [
            "<25>{#p/asriel1}{#f/17}* Golly.\n* For someone who'll be staying with you...",
            "<25>{#f/20}* I sure am making it sound like I'd rather be with $(name).",
            "<25>{#f/13}* But... it's not like that at all.",
            "<25>{#f/17}* I just can't help but reminisce about someone I used to know."
         ],
         e12: () => [
            '<25>{#p/asriel1}{#f/17}* Frisk...\n* I want you to know.',
            '<25>{#f/13}* Thanks to you...',
            '<25>{#f/23}* I feel like I have a future again.',
            '<25>{#f/22}* ...',
            ...(!SAVE.flag.b.pacifist_marker_forgive
               ? ["<25>{#f/22}* Even though you couldn't forgive me for what I'd done..."]
               : SAVE.flag.n.killed_sans > 0
                  ? ['<25>{#f/22}* Even though I wanted you to do all those terrible things...']
                  : ['<25>{#f/22}* Even though I tortured you, and threatened everyone you love...']),
            "<25>{#f/13}* You're still willing to help me move past it all.",
            '<25>{#f/23}* ... it means a lot.',
            '<25>{#f/22}* ...',
            '<25>{#f/13}* Mom, Dad...',
            '<25>{#f/13}* Sans, Papyrus, Undyne, Alphys...',
            "<25>{#f/15}* Everyone I've killed in past realities...",
            "<25>{#f/16}* ... it's going to be difficult for me to face them.",
            '<25>{#f/13}* ...',
            "<25>{#f/17}* But I'll try.",
            "<25>{#f/23}* I'll try to be a better person.",
            '<25>{#f/22}* And, If I ever screw up...',
            "<25>{#f/13}* ... I know you'll be there to help me pick up the pieces."
         ],
         e13: [
            '<25>{#p/asriel1}{#f/17}* Ha... $(name).',
            "<25>{#f/23}* I won't let you down, okay?",
            "<25>{#f/22}* I'll make the most out of this chance you've given me.",
            "<25>{#f/17}* I'll make it count."
         ]
      },
      evac: ['<32>{#p/human}* （你感觉周围的怪物越来越少了。）'],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （你发现漫画上\n  “附赠”了一块口香糖...）',
               choicer.create('* （嚼它吗？）', "嚼", "不嚼")
            ]
            : [
               '<32>{#p/basic}* 漫画封面上附了一块口香糖。',
               choicer.create('* （嚼它吗？）', "嚼", "不嚼")
            ],
      stargum2: ['<32>{#p/human}* （你决定不嚼。）'],
      stargum3: ['<32>{#p/human}* （你回复了$(x) HP。）'],
      stargum4: ['<32>{#p/human}* （HP已回满。）'],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （壁炉的温暖让你无法抗拒...）',
               choicer.create('* （爬进去吗？）', '是', '否')
            ]
            : [
               SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? '<32>{#p/basic}* 一个普通的壁炉。'
                  : "<32>{#p/basic}* 托丽尔的壁炉。\n* 里面并不烫，而是暖暖的，\n  很舒服。",
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
               ? ["<25>{#p/asriel1}{#f/13}* 呃，我会在这等你出来的。"]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
               ? ["<25>{#p/asriel2}{#f/15}* 呃，我就在这等你出来吧..."]
               : [])
      ],
      fireplace2c: ["<25>{#p/toriel}{#f/1}{#npc/a}* 别在里面待太久了..."],
      fireplace2d: ['<32>{#p/basic}* ...', '<32>* 挺舒服的。'],
      noticereturn: ['<25>{#p/asriel2}{#f/10}* 之前有什么东西\n  忘在这了吗？'],
      noticestart: [
         '<25>{#p/asriel2}{#f/3}* 啊，这就是一切开始的地方。',
         "<25>{#p/asriel2}{#f/4}* $(name)，记得吗？\n  从那以后，无论去哪里，\n  我们都是在一起的。"
      ],
      noticedummy: ['<25>{#p/asriel2}{#f/3}* ...', "<25>{#p/asriel2}{#f/10}* 这里以前\n  应该有个人偶吧...？"],
      afrog: {
         a: [
            '<32>{#p/basic}{#n1}* 偷偷告诉你一件事...',
            '<32>* 刚才我看到那位羊女士\n  从这经过。',
            '<32>* 她买了很多吃的，于是我问她\n  这些是用来干什么的。她说...',
            "<32>* 嘿嘿，有惊喜等着你哦。"
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#n1}* 偷偷告诉你一件事...',
                  '<32>* I saw that goat lady come through here earlier.',
                  '<32>* She said it was time to \"confront her fears.\"',
                  "<32>* Well, whatever she did clearly led to something!\n* We're all free now!"
               ]
               : SAVE.data.n.plot === 71.2
                  ? [
                     '<32>{#p/basic}{#n1}* Did you see her?\n* She just came through here right now!',
                     '<32>* She said it was time to \"confront her fears.\"',
                     '<32>* I wonder what she could have meant...?\n* She seemed determined.'
                  ]
                  : SAVE.data.b.w_state_lateleave
                     ? [
                        '<32>{#p/basic}{#n1}* 偷偷告诉你一件事...',
                        '<32>* 刚才我看到那位羊女士\n  坐运输船买东西去了。',
                        "<32>* 她说买完牛奶就回来，\n  结果到现在也没回来...",
                        "<32>* 希望她没事。"
                     ]
                     : [
                        '<32>{#p/basic}{#n1}* 偷偷告诉你一件事...',
                        "<32>* 有时候，当我一个人的时候，\n  我喜欢坐运输船去市场。",
                        "<32>* 店小巧精致，\n  但卖的东西很多。",
                        "<32>* 也许我可以找个时间带你去...\n  你肯定会喜欢的！"
                     ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#n1}* 偷偷告诉你一件事...',
                  "<32>* I'm not a fan of how you beat us all up at first.",
                  '<32>* We were all so scared and confused...',
                  '<32>* ... at least you did something good in the end.'
               ]
               : [
                  '<32>{#p/basic}{#n1}* 偷偷告诉你一件事...',
                  "<32>* The people you've been beating up aren't happy about it.",
                  "<32>* Just be glad I'm off-duty...\n* 'Cause otherwise...",
                  "<32>* I'd have your head."
               ],
         d: ['<32>{#p/basic}{#n1}* 不要... 不要！', '<32>* 离-离我远点！']
      },
      asriel0: [
         "<25>{#p/asriel2}{#f/5}* ...没事！\n  我知道你很守时的！",
         "<25>{#p/asriel2}{#f/1}* 别让我失望哦。"
      ],
      asriel1: () =>
         [
            [
               "<25>{#p/asriel2}{#f/2}* 对不起，耽搁了一会。\n  我刚才用托丽尔的手机\n  喊了个人。",
               "<25>{#p/asriel2}{#f/1}* 别着急，马上你就懂了。",
               "<25>{#p/asriel2}{#f/2}* 嘻嘻嘻...\n* 我到前面等你。"
            ],
            ["<25>{#p/asriel2}{#f/4}* 我到前面等你。"],
            ['<25>{#p/asriel2}{#f/3}* ...']
         ][Math.min(SAVE.flag.n.ga_asrielNegative1++, 1)],
      asriel2: () => [
         '<25>{#p/asriel2}{#f/1}* 准备好了吗，\n  $(name)？',
         "<25>{#f/2}* 迈出这一步后，\n  可就再也没有回头路了。",
         choicer.create('* （跟上他吗？）', "跟上他", "再等等")
      ],
      asriel2b: () => ['<25>{#p/asriel2}{#f/1}* 准备好了？', choicer.create('* （跟上他吗？）', "跟上他", "再等等")],
      asriel3: ['<25>{#p/asriel2}{#f/2}* 好...', "<25>{#f/1}* 我们前进吧。"],
      asriel4: ["<25>{#p/asriel2}{#f/4}* 我会等你准备好的。"],
      asrielDiary: [
         [
            '<32>{#p/human}* （你翻到第一页...）\n* （上面的字歪歪扭扭，难以辨认。）',
            '<32>{#p/asriel1}{#v/2}* “今天我 yào 开女台 xiě 日计了\n   妈妈 shuō 日计 hěn好玩”',
            '<32>* “今天 bàbà 叫wǒ\n   zěn 么在花园 bō种”',
            '<32>* “bàbà shuō 花会长大\n   但是 yào 灯 hěn长 时间”',
            '<32>* “妈妈 wǎn上\n   yào给我坐 wō 牛 pài\n   我 hěn 高兴”',
            '<32>* “今天过的 hěn 开心”'
         ],
         [
            '<32>{#p/human}* （你翻到第二页...）',
            '<32>{#p/asriel1}{#v/2}* “艾利的日计 kè历 504年”',
            '<32>* “妈妈shuō 我应gāi 把 日qī 写上\n   不rán 别人不知到\n   我nǎ 天写的日计”',
            '<32>* “我的 xīngxīng 花还是没有开\n   但 bàbà shuō 马上jiù会开”',
            '<32>* “我 xiǎng 在我的 fáng 间\n   放一个 chuāng户\n   bàbà shuō 那里有 guǎn子”',
            '<32>* “但是会在 kè tīng里\n   放一个 chuāng户”',
            '<32>* “今天也 hěn 开心”'
         ],
         [
            '<32>{#p/human}* （你翻到第三页...）\n* （看起来，两年过去了。）',
            '<32>{#p/asriel1}{#v/2}* “艾利的日记，克历506年 3月”',
            '<32>* “我今天在 fān 我的玩具时\n   找到了日记\n   xiǎng 多写一点”',
            '<32>* “好像上次 日qī\n   我 wàng 了写月”',
            '<32>* “对了 我之前 bō 种的星星花\n   长出来一点了”',
            '<32>* “但是 今天我和 朋友打jià了\n   tā不理我了。”',
            '<32>* “我很担心... \n   希忘tā 别生我的气。”'
         ],
         [
            '<32>{#p/human}* （你翻到第四页...）',
            '<32>{#p/asriel1}{#v/2}* “艾利的日记，克历506年3月”',
            '<32>* “我和朋友 liáo了一下，\n   朋友不生我的气了，\n   太好了。”',
            '<32>* “今天，妈妈和我到外面看星空。\n   我们看到了liú星。”',
            '<32>* “妈妈让我许个原，\n   我希望...\n   有一天，我能在这里见到人lèi。”',
            '<32>* “妈妈和爸爸给我讲了\n   很多他们的故是...”',
            '<32>* “人lèi中，一定有好人\n   对吧？”'
         ],
         [
            '<32>{#p/human}* （你翻到了第五页...）',
            '<32>{#p/asriel1}{#v/2}* “艾利的日记，克历506年3月”',
            '<32>* “今天没什么想写的。”',
            '<32>* “我有点tǎo厌写日记了。”',
            '<32>* “妈妈前两天看到我\n   又在写日记，\n   她说她很高兴。”',
            '<32>* “写日记真有那么 zhòng 要吗？”'
         ],
         [
            '<32>{#p/human}* （你翻到了第六页...）\n* （看起来，又过去了好几年。）',
            '<32>{#p/asriel1}{#v/1}* “艾利的日记，克历510年8月”',
            '<32>* “感觉自己写日记，\n   总是写不了多久就放弃了。”',
            '<32>* “今天偶然间又翻出了日记本，\n   打算再多写一点。”',
            '<32>* “过去几年，过的都挺不错的。\n   我上了学，学到了很多知识。”',
            '<32>* “我学会了加减乘除，\n   学会了打字上网。”',
            '<32>* “不过，妈妈说我现在还太小。\n   不能住册自己的账号。”',
            '<32>* “等我再大一点，\n   应该就能有自己的号了。”'
         ],
         [
            '<32>{#p/human}* （你翻到了第七页...）',
            '<32>{#p/asriel1}{#v/1}* “艾利的日记，克历510年8月”',
            '<32>* “那个天才今天又来我家串门了，\n   他说，自己刚做了个恶梦，\n   一个关于人类的恶梦。”',
            '<32>* “哦，忘了介绍他了。\n   他是一名皇家科学员，\n   经常和爸爸聊天。”',
            '<32>* “物质复制仪、钠米构造机、\n   重力模拟器... \n   这些装置，我们每天都要用到。”',
            '<32>* “而它们，都出自这位天才之手。”',
            '<32>* “但是今天，\n   他却用一种很异样的眼神看着我，\n   仿佛见了鬼一样。”',
            '<32>* “我做了什么错事吗？”'
         ],
         [
            '<32>{#p/human}* （你翻到了第八页...）',
            '<32>{#p/asriel1}{#v/1}* “艾利的日记，克历510年8月”',
            '<32>* “今天，天空中突然出现\n   一颗很耀眼的星星。”',
            '<32>* “超级耀眼。”',
            '<32>* “我很奇怪，为什么大部分星星\n   平时都没有那么亮呢？”',
            '<32>* “对了，我们马上就要搬到\n   首塔的新家了。”',
            '<32>* “光看首塔的蓝图，我就觉得，\n   那里真漂亮啊！”',
            '<32>* “住在那里，\n   肯定比住厂房舒服多了。”'
         ],
         [
            '<32>{#p/human}* （你翻到了第九页...\n   看起来，又过去了两天。）',
            '<32>{#p/asriel1}{#v/1}* “艾利的日记，克历510年9月”',
            '<32>* “昨天，我见到了真正的人类。\n   那人类的飞船一头撞到了\n   我家附近的垃圾站。”',
            '<32>* “我将人类从废墟中拉了出来，\n   那人类对我道了谢。”',
            '<32>* “我都没想到有一天\n   居然真的见到了人类。”',
            '<32>* “而且，人类{#p/basic}闂彞{#p/asriel1}{#v/1}瓠{#p/basic}監哈哈哈艾利\n   你真是个大hún求掓{#p/asriel1}{#v/1}銊簦{#p/basic}燹{#p/asriel1}{#v/1}瀲{#p/basic}潏{#p/asriel1}{#v/1}甕”',
            '<32>* “好，现在我躲到被窝里\n   $(name)应该没法再\n   乱写乱画了。”',
            '<32>* “有时，\n   $(name)会稍微有点淘气，\n   不过我不介意。”',
            '<32>* “妈妈让$(name)进入战斗，发现\n   $(name)的心心是红色的，\n   方向也是反的。”',
            '<32>* “多个能每天陪我聊天的伙伴\n   真是太棒了。”'
         ],
         [
            '<32>{#p/human}* （你翻到了第十页...）',
            '<32>{#p/asriel1}{#v/1}* “艾利的日记，克历510年9月”',
            '<32>* “妈妈说，\n   她决定收养$(name)，\n   把$(name)当成自己的孩子。”',
            '<32>* “我还不太懂‘收养’是什么意思，\n   但妈妈说，现在$(name)\n   就是我的亲人了。”',
            '<32>* “太好了，我可以和$(name)\n   待得更久啦。”',
            '<32>* “无论做什么，去哪里，\n   我俩都要在一起！”',
            '<32>* “哦对了，昨天乱写乱画的事，\n   $(name)跟我道了歉。”',
            '<32>* “我嘴上没说，\n   但心里已经原谅了。”',
            '<32>{#p/basic}* ...'
         ],
         [
            '<32>{#p/human}* （你翻到了第十一页。）',
            '<32>{#p/asriel1}* “艾斯利尔的日记，克历515年9月”',
            '<32>* “$(name)说，\n   是时候执行计划了。”',
            '<32>* “我很害怕，\n   但$(name)相信我能行的。”',
            '<32>* “这篇写完之后，\n   我就等人类吃掉\n   我们亲手做的毒派...”',
            '<32>* “然后，我们一起拯救所有怪物。”',
            '<32>* “但是，$(name)。\n   如果真出了事，计划失败了...\n   如果你看到了这篇日记...”',
            '<32>* “我想对你说，你是最棒的。”',
            '<32>{#p/basic}* ...',
            '<32>{#p/human}* （你听到有人在哭...）'
         ]
      ],
      backdesk: {
         a: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 衣架上挂了个背包。"]),
            '<32>{#p/human}* （你往背包里瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? ['<32>{#p/human}* （但里面什么都没有。）']
               : ['<32>{#p/basic}* 没有其他东西了。'])
         ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 衣架上挂了个背包。"]),
            '<32>{#p/human}* （你往背包里瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            '<32>{#s/equip}{#p/human}* （你获得了《超级星之行者2》。）'
         ],
         b2: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 衣架上挂了个背包。"]),
            '<32>{#p/human}* （你往背包里瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            "<32>{#p/human}* （你带的东西太多，装不下它了。）"
         ]
      },
      midsleep: () => [
         '<32>{#p/human}* （如果你现在睡觉，\n  你可能会错过一些重要的事情。）',
         choicer.create('* （要睡觉吗？）', '是', '否')
      ],
      bedfailToriel: [
         '<25>{#p/toriel}{#f/5}* 哦，天哪...',
         '<25>{#f/1}* 我是不是刚刚对这孩子\n  下手太狠了...',
         '<25>{#f/0}* ...\n* 别担心，孩子。',
         "<25>* 好好休息。\n  然后，以饱满的状态\n  去迎接之后的旅程。",
         '<32>{#p/human}* （托丽尔唱了一首优美的摇篮曲\n  伴你入睡。）'
      ],
      blooky1: () => [
         '<32>{#p/napstablook}* Zzz... Zzz...',
         '<32>* Zzz... Zzz...',
         "<32>{#p/basic}* 这只幽灵不停地大声说“z”，\n  假装自己在睡觉。",
         choicer.create('* （“踩”过去吗？）', '是', '否')
      ],
      blooky2: () => [
         '<32>{#p/basic}* 幽灵还是把路挡着。',
         choicer.create('* （“踩”过去吗？）', '是', '否')
      ],
      blooky3: [
         '<32>{#p/napstablook}* 我经常来这边\n  因为这里很宁静...',
         '<32>* 但是今天我碰到了很好的人...',
         "<32>* 哦，我不挡你路了",
         '<32>* 回见...'
      ],
      blooky4: [
         '<32>{#p/napstablook}* 呃，所以...\n* 你真的挺喜欢我的，是吧',
         '<32>* 嘿... 谢谢你...',
         '<32>* 还有，嗯... \n  对不起之前挡了你的路...',
         "<32>* 我要去其他地方了",
         "<32>* 不过... 别担心...",
         "<32>* 如果你想见我的话...",
         '<32>* 之后还有机会的...',
         '<32>* 那，回见了...'
      ],
      blooky5: [
         '<32>{#p/napstablook}* 呃，好吧...\n  看来，你打心底里厌恶我',
         "<32>* 这样... 也挺好的...",
         "<32>* 好吧，我要忙自己的事去了",
         '<32>* 拜拜...'
      ],
      blooky6: [
         '<32>{#p/napstablook}* 呃... 发生了什么...',
         '<32>* ...',
         '<32>* 哦... 我得走了',
         '<32>* 回见...'
      ],
      blooky7: [
         "<32>{#p/napstablook}* 你甚至连句话都没有...？",
         "<32>* 你... 我都不知道\n  你到底怎么了...",
         "<32>* 好吧，我走了",
         '<32>* 拜拜...'
      ],
      breakfast: ['<32>{#p/human}* （你得到了焗蜗牛。）'],
      breakslow: ["<32>{#p/human}* （你带的东西太多，装不下它了。）"],
      candy1: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （你走近了自动售货机。）',
               choicer.create('* （你想合成什么呢？）', '怪物糖果', '水', '大麻素', '放弃')
            ]
            : [
               '<32>{#p/basic}* 要用这台机器合成什么呢？',
               choicer.create('* （你想合成什么呢？）', '怪物糖果', '水', '大麻素', '放弃')
            ],
      candy2: ['<32>{#p/human}* （你得到了$(x)。）\n* （按[C]打开菜单。）'],
      candy3: ['<32>{#p/human}* （你得到了$(x)。）'],
      candy4: () => [
         '<32>{#p/human}* （你得到了$(x)。）',
         ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* 机器开始出故障了。'])
      ],
      candy5: () => [
         '<32>{#p/human}* （你得到了$(x)。）',
         ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* 机器坏掉了。'])
      ],
      candy6: () =>
         SAVE.data.b.svr
            ? [
               [
                  '<25>{#p/asriel1}{#f/13}* Out of service again?',
                  "<25>{#f/17}* Yeah, that's... by design, actually.",
                  "<25>{#f/13}* This machine runs on the Outlands' own power supply, so...",
                  '<25>{#f/15}* To avoid using too much power, Toriel just made it break itself.',
                  "<26>{#f/20}* Not that she'd tell you."
               ],
               [
                  '<25>{#p/asriel1}{#f/13}* The reason that power supply is so small, though...',
                  "<25>{#f/17}* It's because, unlike the CORE, it only uses background radiation.",
                  "<25>{#f/13}* To put it into numbers, I'd say...",
                  '<25>{#f/15}* It generates about ten- thousandths of the power the CORE does.'
               ],
               [
                  '<25>{#p/asriel1}{#f/13}* Hmm...',
                  '<25>{#f/15}* I wonder if, despite its low capacity...',
                  '<25>{#f/13}* This generator would be enough to power a small atmospheric system.',
                  '<25>{#f/17}* If the CORE was destroyed, could people survive here...?'
               ],
               ['<26>{#p/asriel1}{#f/20}* ... asking for a friend.']
            ][Math.min(asrielinter.candy6++, 3)]
            : ["<32>{#p/basic}* 完全不运转了。"],
      candy7: ['<32>{#p/human}* （你打算什么也不合成。）'],
      candy8: ["<32>{#p/human}* （你带的东西太多了。）"],
      chair1a: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 怎么了，孩子？\n* 饿了吗？',
         '<25>{#f/0}* 还是，对我看的这本书\n  比较感兴趣？',
         choicer.create('{#n1!}* （你要怎么回答？）', '我饿了', '想看书', '想回家', '没啥事')
      ],
      chair1b: () => [
         '<25>{#p/toriel}{#n1}* 怎么了，孩子？',
         choicer.create('{#n1!}* （你要怎么回答？）', '我饿了', '想看书', '想回家', '没啥事')
      ],
      chair1c: ['<25>{#p/toriel}{#n1}* 需要任何东西随时告诉我哦。'],
      chair1d: ['<25>{#p/toriel}{#n1}* 如果改变主意的话\n  随时告诉我哦。'],
      chair1e: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 睡不着吗？',
         '<25>{#f/1}* ...\n* 如果你喜欢的话，\n  我可以给你读这本书...',
         '<25>{#f/0}* 书名叫《慷慨的怪物》，\n  是一个人类写的。',
         choicer.create('{#n1!}* （要听吗？）', "听", "不听")
      ],
      chair1f: pager.create(
         0,
         ['<25>{#p/toriel}{#n1}{#f/1}* 哦，回来看我了吗？', '<25>{#f/0}* 想待多久都可以的。'],
         ['<26>{#p/toriel}{#n1}{#f/5}* 我不想离开这里了，\n  待惯了...']
      ),
      chair2a1: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 你饿了吗？\n* 我给你做点早餐吧。',
         choicer.create('{#n1!}* （现在吃早餐吗？）', '是', '否')
      ],
      chair2a2: ['<25>{#p/toriel}{#n1}* 太好了！\n* 我会在厨房做饭。'],
      chair2a3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 现在想吃早饭了吗？',
         choicer.create('{#n1!}* （现在吃早餐吗？）', '是', '否')
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
               '<25>{#p/toriel}{#f/3}{#n1}* 把我做好的早饭扔了，\n  还想让我再给你做一份？',
               '<25>{#f/4}* 这小子...',
               '<25>{#f/0}* 休想，小子。\n* 我不会再给你做了。'
            ]
            : [
               '<25>{#p/toriel}{#n1}* 我已经做过早饭了，小家伙。',
               '<25>{#f/1}* 我们不能一天吃两顿早饭，\n  对吧？',
               '<25>{#f/0}* 不然，就会让人觉得很奇怪。'
            ],
      chair2c1: () => [
         '<25>{#p/toriel}{#n1}* 啊，你说这本书啊！\n* 对，这小书可有意思了。',
         '<25>{#f/0}* 书名叫《慷慨的怪物》，\n  是一个人类写的。',
         '<25>{#f/1}* 想让我把它读给你听吗？',
         choicer.create('{#n1!}* （要听吗？）', "听", "不听")
      ],
      chair2c2: ['<25>{#p/toriel}{#n1}* 太好了！', '<25>{#g/torielCompassionSmile}* ...'],
      chair2c3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 现在想听这本小书了吗？',
         choicer.create('{#n1!}* （要听吗？）', "听", "不听")
      ],
      chair2c4: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 你想再听我读一遍吗？',
         choicer.create('{#n1!}* （要听吗？）', "听", "不听")
      ],
      chair2c5: ['<25>{#p/toriel}{#f/1}{#n1}* 好，故事从这里开始...', '<25>{#p/toriel}{#g/torielCompassionSmile}* ...'],
      chair2c6: [
         '<25>{#f/1}{#n1}* “从前，有一只怪物...”',
         '<25>{#f/0}* “这个怪物爱上了\n   一个小小的人类。”',
         '<25>{#f/1}* “每天，\n   这个人类都会去找她...”',
         '<25>{#f/0}* “他们一起在田野上\n   奔跑，玩耍。”',
         '<25>{#f/1}* “他们一起唱歌，\n   一起分享故事...”',
         '<25>{#f/0}* “还会一起捉迷藏。”',
         '<25>{#f/1}* “人类玩累了，\n   怪物就会哄人类入睡，\n   帮人类盖上被子...”',
         '<25>{#f/0}* “人类非常喜欢这个怪物。”',
         '<25>{#f/0}* “怪物也因此感到快乐。”',
         '<25>{#f/1}* “但是，随着时间流逝，\n   人类渐渐长大，\n   离开了怪物...”',
         '<25>{#f/0}* “怪物则只能孤身一人。”',
         '<25>{#f/1}* “突然有一天，\n   人类回来了...”',
         '<25>{#f/0}* “怪物对人类说：\n  ‘来吧，一起来玩吧！’”',
         '<25>{#f/5}* “‘我已经长大，\n    不能再玩了。’\n   人类这样回答。”',
         '<25>{#f/1}* “‘我想有一辆车，\n    开着它找一个新家。’”',
         "<25>{#f/5}* “‘对不起，’怪物说道，\n   ‘但是我太穷了，\n    买不起车。’”",
         '<25>{#f/5}* “‘我只有两条腿，’”',
         '<25>{#f/0}* “‘爬到我的背上，\n    我可以带你去你\n    想去的地方。’”',
         '<25>{#f/0}* “‘这样，\n    你就能去到城镇，\n    感到快乐。’”',
         '<25>{#f/1}* “于是人类爬到\n   怪物的背上...”',
         '<25>{#f/0}* “怪物带他们去了一个新家。”',
         '<25>{#f/0}* “怪物也因此感到快乐。”',
         '<25>{#f/1}* “但是，\n   人类再次离开了怪物，\n   很久都没有回来看她。”',
         '<25>{#f/5}* “怪物十分难过。”',
         '<25>{#f/0}* “突然有一天，\n   人类又回来了。”',
         '<25>{#f/1}* “怪物笑得合不拢嘴，\n   她说...”',
         '<25>{#f/1}* “‘来吧，人类！\n    骑在我的背上，\n    让我带你去任何地方。’”',
         '<25>{#f/5}* “‘我现在很伤心，\n    没心情到处转悠。’\n    人类这样说道。”',
         '<25>{#f/1}* “‘我想有一个家庭，\n    有自己的孩子...’”',
         "<25>{#f/5}* “‘对不起，\n    但是我给不了你这些。’”",
         '<25>{#f/5}* “‘我只是一只怪物。’\n   怪物这样说道，”',
         '<25>{#f/0}* “‘但是，你可以留下来\n    和我待一会，我可以帮你\n    找到一个约会对象。’”',
         '<25>{#f/0}* “‘这样，你就可以\n    找到心爱之人，\n    感到快乐。’”',
         '<25>{#f/1}* “于是人类留下来，\n   和老朋友待了一会儿...”',
         '<25>{#f/0}* “怪物为其找到了\n   可能喜欢的人。”',
         '<25>{#f/0}* “怪物也因此感到快乐。”',
         '<25>{#f/5}* “人类又一次离开了怪物，\n   很久之后才回来。”',
         '<25>{#f/1}* “当人类最终回来的时候，\n   怪物欣喜若狂...”',
         '<25>{#f/9}* “但她已经连说话\n   都十分困难。”',
         '<25>{#f/1}* “‘来吧，人类。’\n    她低声说道...”',
         '<25>{#f/1}* “‘让我带你去找\n    约会对象吧。’”',
         '<25>{#f/5}* “‘我年岁大了，而且很忙，\n    没空操心这些。’\n   人类这样回答。”',
         '<25>{#f/1}* “‘我只是想找个\n    今晚过夜的地方...’”',
         "<25>{#f/5}* “‘对不起，’怪物说，\n   ‘但我没有适合你的床。’”",
         '<25>{#f/5}* “‘我还是太穷了，\n    连一张床都买不起。’”',
         '<25>{#f/0}* “‘和我一起睡吧。’”',
         '<25>{#f/0}* “‘这样，\n    你就可以获得休息，\n    感到快乐。’”',
         '<25>{#f/1}* “于是，人类躺在了\n   怪物怀里...”',
         '<25>{#f/0}* “怪物伴着人类入睡。”',
         '<25>{#f/0}* “怪物也因此感到快乐。”',
         '<25>{#f/5}* “...但心中另有所思。”',
         '<25>{#f/9}* “...很久很久以后，\n   人类终于回到了怪物身边。”',
         "<25>{#f/5}* “‘对不起，人类。’怪物说，\n   ‘但我的生命快走到\n    尽头了。’”",
         '<25>{#f/5}* “‘我的腿脚不听使唤了，\n    没法带你去任何地方。’”',
         '<25>{#f/10}* “‘我哪儿也不想去了，’\n   人类说。”',
         '<26>{#f/5}* “‘我找不到约会对象了，\n    我认识的人都不在了。’”',
         '<25>{#f/10}* “‘我不需要什么约会了。’”',
         '<25>{#f/5}* “‘我身体很虚弱，\n    你也不能睡在我身上了。’”',
         '<25>{#f/10}* “‘我不需要多少休息了。’”',
         "<25>{#f/5}* “‘我很抱歉，’怪物叹息道。”",
         '<25>{#f/5}* “‘我希望我还能为你做什么，\n    但我已经一无所有。’”',
         '<25>{#f/9}* “‘我现在只是一个\n    快要死去的老怪物。’”',
         '<25>{#f/5}* “‘对不起...’”',
         '<25>{#f/10}* “‘我现在不需要太多，’\n   人类说。”',
         '<25>{#f/10}* “‘只想在死前拥抱一下\n    我最好的朋友。’”',
         '<25>{#f/1}* “‘好，’怪物挺直腰板...”',
         '<25>{#f/0}* “‘你的朋友，这只老怪物\n    永远在这里等着你。’”',
         '<25>{#f/0}* “‘来吧，人类，到我这里来。\n    最后一次和我在一起。’”',
         '<25>{#f/9}* “人类走了过去。”',
         '<25>{#f/10}* “怪物... 十分快乐。”'
         
      ],
      chair2c7: ['<25>{#f/0}{#n1}* 嗯，故事讲完了。', '<25>{#f/1}* 希望你能喜欢这个故事...'],
      chair2c8: ['<25>{#f/0}{#n1}* 嗯，讲完了。'],
      chair2d1: [
         '<25>{#p/toriel}{#f/1}{#n1}* 回家...？\n* 能说的具体点吗？',
         '<99>{#p/human}{#n1!}* （你要怎么回答？）{!}\n§shift=160§什么时候\n§shift=48§别放在心上§shift=37§可以回家？{#c/0/6/4}'
      ],
      chair2d2: [
         '<25>{#p/toriel}{#f/1}{#n1}* 但... 这里就是你的家啊，\n  不是吗？',
         '<99>{#p/human}{#n1!}* （你要怎么回答？）{!}\n§shift=144§怎么才能\n§shift=64§对不起§shift=35§离开外域{#c/0/8/2}'
      ],
      chair2d3: [
         '<25>{#p/toriel}{#f/5}{#n1}* 请你... 理解一下...',
         '<25>{#p/toriel}{#f/5}{#n1}* 我这么做都是为了你好。'
      ],
      chair2d4: [
         '<25>{#p/toriel}{#f/5}{#n1}* 我的孩子...',
         '<99>{#p/human}{#n1!}* （你要怎么回答？）{!}\n§shift=144§怎么才能\n§shift=64§对不起§shift=35§离开外域{#c/0/8/2}'
      ],
      chair2d5: ['<25>{#p/toriel}{#f/5}{#n1}* ...'],
      chair2d6: [
         '<25>{#p/toriel}{#f/9}{#n1}* ...',
         '<25>{#p/toriel}{#f/9}* 拜托，在这里等着。',
         '<25>{#p/toriel}{#f/5}* 有件事情我必须去处理一下。'
      ],
      chair3: () =>
         SAVE.data.b.svr
            ? [
               [
                  "<25>{#p/asriel1}{#f/20}* I still can't believe she moved this all the way from the Citadel.",
                  "<25>{#f/17}* But... I understand why she'd want to.",
                  '<25>{#f/13}* Mom and this chair of hers go pretty far back..'
               ],
               [
                  '<25>{#p/asriel1}{#f/13}* One time, she told me something...',
                  '<25>{#f/17}* \"This chair reminds me of home.\"',
                  '<25>{#f/13}* But she was already at home, so I asked her what she meant.',
                  '<25>{#f/17}* Turns out she had this at her home...',
                  '<25>{#f/23}* ... on the old homeworld.'
               ],
               [
                  "<25>{#p/asriel1}{#f/13}* I don't know much about that world, Frisk...",
                  '<25>{#f/17}* But I hear it was very... idyllic.',
                  '<25>{#f/20}* Sure, there were lots of advances in magic and technology...',
                  '<25>{#f/17}* But people loved it, because life was so... simple.'
               ],
               ["<25>{#p/asriel1}{#f/23}* What I wouldn't give to have a simple life."]
            ][Math.min(asrielinter.chair3++, 3)]
            : world.darker
               ? ['<32>{#p/basic}* 一把扶椅。']
               : ['<32>{#p/basic}* 一把舒适的扶椅。', '<32>* 大小正好适合托丽尔。'],
      chair4: ['<25>{#p/toriel}{#n1}* 啊，来得正好。', '<25>* 我已经把你的那份早餐\n  放在桌子上了。'],
      closetrocket: {
         a: () => [
            '<32>{#p/human}* （你往箱子里瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? [
                  [
                     "<25>{#p/asriel1}{#f/13}* Yeah, uh, that's about all you'll find in there.",
                     "<25>{#f/17}* I'm not sure why Toriel put this here.",
                     '<25>{#f/17}* $(name) and I were never interested in comic books.'
                  ],
                  ['<25>{#p/asriel1}{#f/10}* I guess she just wanted to pretend we were living here...?'],
                  ['<25>{#p/asriel1}{#f/13}* The things a mother does to make herself feel better...']
               ][Math.min(asrielinter.closetrocket_a++, 2)]
               : ['<32>{#p/basic}* 没有其他东西了。'])
         ],
         b: () => [
            '<32>{#p/human}* （你往箱子里瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            '<32>{#s/equip}{#p/human}* （你获得了《超级星之行者3》。）'
         ],
         b2: () => [
            '<32>{#p/human}* （你往箱子里瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 这是什么？\n* 限量版的《超级星之行者》漫画？"]),
            "<32>{#p/human}* （你带的东西太多，装不下它了。）"
         ]
      },
      goner: {
         a1: () =>
            SAVE.flag.b.$svr
               ? [
                  "<32>{#p/human}* I've seen the effect you've had on this world...",
                  '<32>* A perfect ending, where everyone gets to be happy...',
                  "<32>* 某种特别之物，于此独自闪耀。"
               ]
               : [
                  '<32>{#p/human}* 一片未被凡俗所羁绊的宇宙...',
                  '<32>* 仅为了那纯洁无瑕之美，\n  而存在于斯...',
                  "<32>* 某种特别之物，于此独自闪耀。"
               ],
         a2: () =>
            SAVE.flag.b.$svr
               ? ['<32>* That being said...', "<32>* It seems it wasn't enough to satisfy your... curiosity."]
               : ['<32>* 告诉我...', '<32>* 此情此景... 可曾引起过你的好奇？']
      },
      danger_puzzle1: () => [
         '<25>{#p/toriel}* 这个房间里的谜题\n  和之前的都不太一样。',
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#f/3}* 说不定，比起应付人偶...\n  这个谜题更合你胃口？'
            : '<25>{#f/1}* 有信心解决它吗？'
      ],
      danger_puzzle2: () =>
         world.darker
            ? ["<32>{#p/basic}* 这台终端太高了，你够不到。"]
            : ["<32>{#p/basic}* 终端高高地耸立在你的面前，\n  挡住了你急切的脚步。"],
      danger_puzzle3: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#p/toriel}{#f/3}* 又怎么了...'
            : '<25>{#p/toriel}{#f/1}* 怎么了？\n* 需要帮忙吗？'
      ],
      danger_puzzle4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ['<25>{#p/toriel}{#f/5}* 唉... 我知道了。', '<25>{#f/5}* 这台终端太高了，\n  你够不到。']
            : [
               '<25>{#p/toriel}{#f/7}* ...天哪。',
               '<25>{#f/6}* 这应该是个设计上的小失误。',
               '<25>{#f/1}* 这台终端太高了，\n  你够不到是吗？'
            ]),
         '<25>{#f/0}* 没关系。\n* 我可以替你操作。',
         '<25>{#f/0}* ...',
         '<25>{#f/0}* 密码是一个谜语的谜底。\n* 想猜猜看吗？',
         choicer.create('* （猜谜吗？）', "试试看", "算了吧")
      ],
      danger_puzzle5a: [
         '<25>{#p/toriel}* 太好了！\n* 对你这么大的孩子来说...',
         '<25>{#f/0}* 热爱学习，渴求知识\n  是尤为重要的。'
      ],
      danger_puzzle5b: [
         '<25>{#p/toriel}{#f/0}* 谜面是个问题。',
         "<25>{#p/toriel}{#f/1}* “源自小麦，圆圆不赖。\n   名字带水，小孩最爱。\n   （打一单字食物名）”"
      ],
      danger_puzzle5c: [
         '<32>{#p/human}* （...）\n* （你把答案告诉了托丽尔。）',
         '<25>{#p/toriel}{#f/0}* ...啊，想法不错！\n* 学习态度也很积极！'
      ],
      danger_puzzle5d: [
         '<32>{#p/human}* （...）\n* （你告诉托丽尔，你猜不出来。）',
         '<25>{#p/toriel}{#f/1}* ...怎么了，孩子？\n* 有什么心事吗？',
         '<25>{#f/5}* ...嗯...',
         '<25>{#f/0}* 哦，好吧。\n* 我来帮你解开这个迷题吧。'
      ],
      danger_puzzle5e: () =>
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ['<25>{#p/toriel}{#f/5}* ...', '<25>{#f/5}* 知道了。']
            : ['<25>{#p/toriel}{#f/0}* ...', '<25>{#f/0}* 这次的谜题，我替你解吧。'],
      danger_puzzle6: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* 还有... {#x1}这个。\n* ...可以继续前进了。'
            : '<25>{#p/toriel}* 还有... {#x1}这个！\n* 可以继续前进了。'
      ],
      danger_puzzle7: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* 我等着你来下个房间。'
            : '<25>{#p/toriel}* 要是你准备好了，\n  就可以来下个房间了。'
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* （但你还是够不到终端。）"]
            : ['<32>{#p/basic}* 即便是现在，那台终端\n  依然高高耸立在这里。'],
      denie: ["<32>{#p/human}* （你带的东西太多，装不下它了。）"],
      dipper: {
         a: () => [
            '<32>{#p/human}* （你捡起了“小熊座”。）',
            choicer.create('* （装备上小熊座吗？）', '是', '否')
         ],
         b: ["<32>{#p/human}* （你带的东西太多，装不下它了。）"]
      },
      drop_pie: ['<25>{#p/toriel}{#f/1}* 派粥是用来喝的，\n  不是让你往地上倒的。'],
      drop_pie3: ['<25>{#p/toriel}{#f/1}* 请你别把好好的食物\n  往地上扔，好吗？'],
      drop_snails: ['<25>{#p/toriel}{#f/1}* 这些可怜的焗蜗牛\n  又怎么你了？'],
      drop_soda: ["<32>{#p/basic}{#n1}* 啊，你干嘛 ;)", '<32>* 那可是我全部的心血啊！;)'],
      drop_steak: ['<32>{#p/basic}{#n1}* 认真的吗？;)', '<32>* 那牛排可是无价之宝！;)'],
      dummy1: [
         '<25>{#p/toriel}{#f/0}* 接下来，我要教你\n  如何应对其他怪物的攻击。',
         '<25>{#f/1}* 身为人类，在前哨站走动时，\n  怪物们很可能袭击你...',
         '<25>{#f/0}* 这时，你就会进入\n  称作“战斗”的环节。',
         '<25>{#f/0}* 幸好，你可以\n  通过多种方式解决。',
         '<25>{#f/1}* 眼下，我建议\n  友好地和他们对话...',
         '<25>{#f/0}* ...好给我机会\n  出面解决冲突。'
      ],
      dummy2: ['<25>{#p/toriel}* 你可以从试着\n  和那边的人偶说说话开始。'],
      dummy3: [
         '<25>{#p/toriel}{#f/7}* ...你觉得\n  我就是训练人偶？',
         '<25>{#f/6}* 哈哈哈！\n* 你真是太可爱了！',
         '<25>{#f/0}* 但很遗憾，我只是个\n  喜欢瞎操心的老阿姨哦。'
      ],
      dummy4: [
         '<25>{#p/toriel}* 孩子，没有什么好担心的。',
         '<25>* 区区一个人偶也不会伤害你，\n  对吧？'
      ],
      dummy5: ['<25>{#p/toriel}{#f/1}* 不要怕，小家伙...'],
      dummy6: [
         '<25>{#p/toriel}{#f/2}* 住手啊，孩子！\n* 人偶不是用来打的！',
         '<25>{#f/1}* 而且，我们可不想\n  伤害任何人，对吗？',
         '<25>{#f/0}* 来吧。'
      ],
      dummy7: ['<25>{#p/toriel}* 非常棒！\n* 你学得真快！'],
      dummy8: [
         '<25>{#p/toriel}{#f/1}* 怎么逃跑了...？',
         '<25>{#f/0}* 好吧，其实这样也不差。',
         '<26>{#f/1}* 不管对手是想欺负你，\n  还是像这个人偶一样\n  想和你聊天...',
         '<25>{#f/0}* 只要你跑的够快，\n  什么都能避免。'
      ],
      dummy9: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/0}* 咱们去下一个房间吧。'],
      dummy9a: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/6}* 咱们去下一个房间吧。'],
      dummy10: [
         '<25>{#p/toriel}{#f/7}* 天哪，孩子...',
         '<25>{#f/0}* 我第一次看到\n  这么有爱的场面啊...',
         '<25>{#f/0}* 总之，你已经出色地掌握了\n  教给你的东西。',
         '<25>{#f/0}* 咱们去下一个房间吧。'
      ],
      dummy11: ['<25>{#p/toriel}* 咱们去下一个房间吧。'],
      dummy12: [
         '<25>{#p/toriel}{#f/2}* 我的天哪！\n* 孩子，快住手！',
         '<25>{#f/1}* ...',
         '<25>{#f/0}* 幸好，\n  打的只是一个训练人偶。',
         '<25>{#f/1}* 但是，以后再遇到这种情况...',
         '<25>{#f/0}* ...请不要\n  把对手打得半死了！',
         '<26>{#f/0}* 没事，去下个房间吧。'
      ],
      eat_pie: ['<25>{#p/toriel}{#f/1}{#n1}* 好吃吗？'],
      eat_snails: ['<25>{#p/toriel}{#f/0}{#n1}* 希望早餐合你胃口。'],
      eat_soda: [
         '<32>{#p/basic}* 亚伦举起手机，\n  把你喝汽水的瞬间拍了下来。',
         '<32>{#p/basic}{#n1}* 哦豁，海报大头贴的素材有了 ;)'
      ],
      eat_steak: [
         '<32>{#p/basic}* 亚伦给你抛了个媚眼。',
         '<32>{#p/basic}{#n1}* 喜欢我们的产品吗，亲？;)'
      ],
      endtwinkly2: [
         '<32>{#p/basic}* 那星星是不是觉得\n  自己可了不起了？',
         "<32>* 你明明对每个怪物都那么友好，\n  一点错事都没做。",
         '<32>* 他真能多管闲事...'
      ],
      endtwinklyA1: [
         '<25>{#p/twinkly}{#f/12}* 你个蠢货...',
         "<25>* 你没听到我之前\n  说的吗？",
         '<25>* 我不是告诉过你\n  别搞砸了吗！',
         "<25>* 看看你对我们的计划\n  做了什么。",
         '<25>{#f/8}* ...',
         '<25>{#f/6}* 你最好能解决现在的处境，\n  $(name).',
         "<25>{#f/5}* 这关乎我们的命运。"
      ],
      endtwinklyA2: () =>
         SAVE.flag.n.genocide_milestone < 1
            ? [
               '<25>{#p/twinkly}{#f/5}* 哈喽，$(name)。',
               "<25>{#f/5}* 你好像\n  不再想和我一起玩了。",
               '<25>{#f/6}* 我已经很努力地\n  对你保持耐心了，\n  但你看...',
               '<25>{#f/6}* 我们又回到了起点。',
               '<25>{#f/8}* 一次，又一次...',
               '<25>{#f/5}* 你肯定觉得\n  这一切都很好笑吧。',
               '<25>{#f/7}* 给我希望后却又夺走它，\n  你这是在耍我吗...',
               "<25>{#f/5}* 好吧，没关系。",
               "<25>{#f/5}* 如果你想玩这种游戏，\n  那就继续吧。",
               "<25>{#f/11}* 但别指望\n  你能一直掌控局面...",
               "<25>{#f/7}* 你迟早会后悔\n  你所做的一切。"
            ]
            : [
               '<25>{#p/twinkly}{#f/6}* 哈喽，$(name)。',
               ...(SAVE.flag.n.genocide_milestone < 7
                  ? [
                     "<25>{#f/6}* I've had some time to think about what happened.",
                     '<25>{#f/5}* It was thrilling, at first...',
                     '<25>* The thought of taking the outpost by force together...',
                     "<25>{#f/6}* But now, I'm not sure.",
                     '<25>{#f/8}* ...',
                     '<25>{#f/8}* I guess... I got a bit carried away back there.',
                     "<25>{#f/5}* But that's okay, right?\n* You'll forgive me, won't you?"
                  ]
                  : [
                     "<25>{#f/6}* I'm still not really sure what happened back there...",
                     "<25>{#f/5}* It's... kinda scaring me, haha...",
                     '<25>{#f/8}* ...',
                     '<25>{#f/8}* Maybe... we should hold off on things for now.',
                     "<25>{#f/5}* But that's okay, right?\n* You'll be fine with that, won't you?"
                  ]),
               '<25>{#f/6}* ...',
               '<25>{#f/8}* Goodbye, $(name)...',
               ...(SAVE.flag.n.genocide_milestone < 7 ? ["<25>{#f/5}* I'll be back before you know it."] : [])
            ],
      endtwinklyAreaction: [
         '<32>{#p/basic}* Sorry, did I miss something?',
         "<32>* I've never talked to him in my life, let alone go on some mission with him.",
         "<32>* Oh well.\n* It wouldn't be the first time he's made up stories about me."
      ],
      endtwinklyB: () =>
         SAVE.data.b.w_state_lateleave
            ? [
               '<25>{#p/twinkly}{#f/5}{#v/0}* 呵。\n* 没想到你就这么跑了。',
               "<25>{#f/11}{#v/0}* 以为规矩这么好打破吗？",
               '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
               "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。"
            ]
            : [
               '<25>{#p/twinkly}{#f/5}{#v/0}* 聪明。\n* 非-常聪明。',
               "<25>{#f/11}{#v/0}* 你是真觉得自己\n  很聪明，是吗？",
               '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
               "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。"
            ],
      endtwinklyB2: [
         '<25>{#f/8}{#v/0}* 只要你再多杀几只怪物...',
         "<25>{#f/9}{#v/0}* 呵，现在把计划告诉你\n  还为时过早。",
         '<25>{#f/7}{#v/0}* 别忘了，$(name)...',
         "<25>{#f/5}{#v/0}* 我们俩久别重逢，强强联手\n  只是时间问题。",
         '<25>{#f/6}{#v/0}* 下次长点心，狠一点，\n  说不定...',
         "<25>{#f/5}{#v/0}* 你就能看到好戏了。",
         '<25>{#f/11}{#v/0}* 那么，回见...'
      ],
      endtwinklyB3: [
         '<25>{#f/8}{#v/0}* 只要你再多杀{@fill=#ff0}一只{@fill=#fff}怪物...',
         "<25>{#f/9}{#v/0}* 呵，现在把计划告诉你\n  还为时过早。",
         '<25>{#f/7}{#v/0}* 别忘了，$(name)...',
         "<25>{#f/5}{#v/0}* 我们俩久别重逢，强强联手\n  只是时间问题。",
         '<25>{#f/6}{#v/0}* 下次长点心，狠一点，\n  说不定...',
         "<25>{#f/5}{#v/0}* 你就能看到好戏了。",
         '<25>{#f/11}{#v/0}* 那么，回见...'
      ],
      endtwinklyBA: () => [
         SAVE.data.n.state_wastelands_napstablook === 5
            ? '<25>{#p/twinkly}{#f/6}{#v/0}* 所以，你最终谁也没杀掉。'
            : '<25>{#p/twinkly}{#f/6}{#v/0}* 所以你放过了\n  每一只你遇到的怪物。',
         '<25>{#f/5}{#v/0}* 我打赌你觉得很棒。',
         '<25>{#f/2}{#v/1}* 但如果你遇到了一个\n  连环杀人犯呢？',
         "<25>{#f/9}{#v/0}* 你除了死，还是死，\n  还是死。",
         "<25>{#f/5}{#v/0}* 最后，你会疲于尝试。",
         '<25>{#f/11}{#v/0}* 那时候你该怎么办呢，\n  嗯哼？',
         '<25>{#f/2}{#v/1}* 你会因为沮丧\n  而大开杀戒吗？',
         '<25>{#f/14}{#v/1}* 或者只是单纯地放弃呢？',
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/7}{#v/0}* 那一定会很好玩的。',
         "<25>{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyBB1: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of a few measly people's way."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a few measly people.',
         '<25>{#f/11}{#v/0}* But what about the others, huh?',
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/6}{#v/0}* Don'tcha think any of them have families?",
         "<25>{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         "<25>{#f/5}{#v/0}* Each one could've been someone else's Toriel.",
         '<25>{#f/5}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Selfish brat.',
         '<25>{#f/0}{#v/1}* Monsters are dead because of you.'
      ],
      endtwinklyBB2: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of one person's way."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a single person.',
         '<25>{#f/11}{#v/0}* But what about everyone else, huh?',
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/0}{#v/0}* They're all gone now.",
         "<25>{#f/11}{#v/0}* What's Toriel gonna do when she finds out, huh?",
         '<25>{#f/2}{#v/1}* What if she KILLS herself out of grief?',
         "<25>{#f/11}{#v/0}* If you think you're saving her just by SPARING her...",
         "<25>{#f/7}{#v/0}* Then you're even dumber than I thought.",
         '<25>{#f/9}* Well, see ya!'
      ],
      endtwinklyBB3: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of almost everyone's way."
            : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of almost everyone.',
         SAVE.data.b.w_state_lateleave
            ? '<25>{#p/twinkly}{#f/11}{#v/0}* But what about the one you DID get in the way of, huh?'
            : "<25>{#p/twinkly}{#f/11}{#v/0}* But what about the one you DIDN'T spare, huh?",
         '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
         "<25>{#f/6}{#v/0}* Don'tcha think any of them have families?",
         "<25>{#f/8}{#v/0}* Don'tcha think any of them have friends?",
         "<25>{#f/5}{#v/0}* The one you killed could've been someone else's Toriel.",
         '<25>{#f/5}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* Selfish brat.',
         "<25>{#f/0}{#v/1}* Someone's dead because of you."
      ],
      endtwinklyBC: [
         "<25>{#p/twinkly}{#f/5}{#v/0}* 我知道你很清楚这一点，\n  不过...",
         "<25>{#f/6}{#v/0}* 考虑到你已经\n  杀了托丽尔一次。",
         "<25>{#f/7}{#v/0}* 不是吗，小子？",
         '<25>{#f/2}{#v/1}* 你杀了她。',
         "<25>{#f/7}{#v/0}* 然后，你感到抱歉...\n* 不是吗？",
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/11}{#v/0}* 你以为\n  只有你拥有这种能力吗？",
         '<25>{#f/6}{#v/0}* 凭借你的决心，就能拥有\n  重塑宇宙的能力...',
         '<25>{#f/8}{#v/0}* 保存的能力...',
         '<25>{#f/7}{#v/0}* 你可知道，\n  那曾是属于我的能力。',
         '<25>{#f/6}{#v/0}* 似乎你对这个世界的渴求\n  凌驾于我。',
         '<25>{#f/5}{#v/0}* 好吧。\n* 趁你还有这种能力\n  好好享受吧。',
         "<25>{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyC: [
         '<25>{#f/7}{#v/0}* After all, this used to be MY power.',
         '<25>{#f/6}{#v/0}* 凭借你的决心，就能拥有\n  重塑宇宙的能力...',
         '<25>{#f/8}{#v/0}* 保存的能力...',
         '<25>{#f/6}{#v/0}* I thought I was the only one who could do that.',
         '<25>{#f/6}{#v/0}* 似乎你对这个世界的渴求\n  凌驾于我。',
         '<25>{#f/5}{#v/0}* 好吧。\n* 趁你还有这种能力\n  好好享受吧。',
         "<25>{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyD: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* 你倒是挺会找乐子的嘛。",
         '<25>{#f/8}{#v/0}* 把一路上的怪物都痛扁一顿，\n  等他们快咽气了，\n  又放他们一条生路...',
         "<25>{#f/7}{#v/0}* 我倒要看看，\n  要是谁打死不要你可怜，\n  你打算咋办？",
         '<25>{#f/6}{#v/0}* 你要撕了他那张犟嘴？',
         '<25>{#f/5}{#v/0}* 还是动动脑子，\n  发现当个假“好人”\n  屁用没有呢？',
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/7}{#v/0}* 那一定会很好玩的。',
         "<25>{#f/9}{#v/0}* 我会好好看你的好戏的！"
      ],
      endtwinklyE: [
         "<25>{#p/twinkly}{#f/7}{#v/0}* Wow, you're utterly repulsive.",
         '<26>{#f/11}{#v/0}* You got by peacefully...',
         "<25>{#f/5}{#v/0}* Then, you figured that wasn't good enough for you.",
         '<25>{#f/2}{#v/1}* So you KILLED her just to see what would happen.',
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/0}{#v/0}* You did it out of BOREDOM.'
      ],
      endtwinklyEA: ["<25>{#f/11}{#v/0}* Don't think I don't know how this works..."],
      endtwinklyEB: ["<25>{#f/6}{#v/0}* It's sad, though..."],
      endtwinklyF: ['<25>{#p/twinkly}{#f/11}{#v/0}* Look at you, playing with her life like this...'],
      endtwinklyFA: ['<25>{#f/7}{#v/0}* Killing her, leaving her, killing her again...'],
      endtwinklyFB: ['<25>{#f/7}{#v/0}* Leaving her, killing her, leaving her again...'],
      endtwinklyFXA: [
         "<25>{#f/11}{#v/0}* It's fun, isn't it?",
         '<25>{#f/6}{#v/0}* Endlessly toying with the lives of others...',
         '<25>{#f/8}{#v/0}* Watching how they react to every possible decision...',
         "<25>{#f/11}{#v/0}* Isn't it thrilling?",
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/9}{#v/0}* I wonder what you'll do next.",
         "<25>{#f/5}{#v/0}* I'll be watching..."
      ],
      endtwinklyG: [
         "<25>{#p/twinkly}{#f/10}{#v/0}* You just can't get enough, can you~",
         '<25>{#f/11}{#v/0}* How many more times will you KILL her, eh?',
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/0}{#v/1}* You kinda remind me of myself.',
         '<25>{#f/9}{#v/0}* Well, cya!'
      ],
      endtwinklyG1: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Again?\n* Golly...',
         '<25>{#f/0}{#v/1}* You REALLY remind me of myself.'
      ],
      endtwinklyG2: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Again!?',
         "<25>{#f/8}{#v/0}* Wow, you're even worse than I thought."
      ],
      endtwinklyH: () => [
         SAVE.data.b.w_state_lateleave
            ? "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally gotten by peacefully, huh?"
            : "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally decided to show mercy, huh?",
         '<25>{#f/5}{#v/0}* And after all that KILLING...',
         '<25>{#f/11}{#v/0}* Say, was this your idea all along?',
         '<25>{#f/2}{#v/1}* To get a rush out of her death, then spare her once you got bored?',
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/11}{#v/0}* What a saint you must think you are.',
         "<25>{#f/5}{#v/0}* But hey, it's not as if I don't know how this works..."
      ],
      endtwinklyI: [
         '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/7}{#v/0}* I hope you like your choice.',
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。",
         '<25>{#f/5}{#v/0}* That old woman thought she could break the rules.',
         '<25>{#f/8}{#v/0}* She tried so hard to save you humans...',
         "<25>{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
      ],
      endtwinklyIX: [
         '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/11}{#v/0}* So you finally caved in and killed someone, huh?',
         '<25>{#f/7}{#v/0}* Well, I hope you like your choice.',
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* 在这个世界上...\n  不是杀人就是被杀。",
         "<25>{#f/8}{#v/0}* ... what's wrong?\n* Did she not last as long as you thought?",
         '<26>{#f/6}{#v/0}* Oh, how terrible.\n* Guess not everyone can be beat into submission.'
      ],
      endtwinklyIA: ['<25>{#f/11}{#v/0}* What an idiot!'],
      endtwinklyIAX: ['<25>{#f/7}{#v/0}* What a shame for her.'],
      endtwinklyIB: ['<25>{#f/6}{#v/0}* As for you...'],
      endtwinklyJ: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Wow.',
         '<25>{#f/7}{#v/0}* And here I thought you were the righteous one for showing mercy.',
         '<25>{#f/11}{#v/0}* Hah!\n* What a joke.',
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/6}{#v/0}* How did it feel to finally satisfy your violent side?',
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/0}{#v/1}* I bet it felt GOOD, didn't it?",
         '<25>{#f/11}{#v/0}* I mean, I should know...'
      ],
      endtwinklyK: [
         '<25>{#p/twinkly}{#f/5}{#v/0}* 很高兴再次见到你。',
         "<25>{#f/6}{#v/0}* 顺便说一句，\n  你怕不是宇宙间\n  最无聊的人。",
         '<25>{#f/12}{#v/0}* 和平地过了一段时间之后，\n  还要回去再来一遍？',
         '<25>{#f/8}{#v/0}* 得了吧...',
         "<25>{#f/2}{#v/1}* 你和我都知道，\n  不是杀人就是被杀。"
      ],
      endtwinklyK1: [
         "<25>{#p/twinkly}{#f/6}* Aren't you getting tired of this?",
         '<25>{#f/8}{#v/0}* 得了吧...',
         '<25>{#f/2}{#v/1}* You KNOW deep down that part of you wants to hurt her.',
         "<25>{#f/14}{#v/1}* A few good hits, and she'd be dead before your very eyes.",
         "<25>{#f/11}{#v/0}* Wouldn't that be exciting?",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyK2: [
         '<25>{#p/twinkly}{#f/8}{#v/0}* Are you doing this just to see how I react?',
         '<25>{#f/6}{#v/0}* Is that what this is about?',
         "<25>{#f/7}{#v/0}* Well, don't expect to get anything else outta me.",
         '<25>{#f/6}{#v/0}* All this boring pacifism is getting tiresome.',
         '<25>{#f/11}{#v/0}* Now, if something more interesting were to happen...',
         "<25>{#f/9}{#v/0}* Perhaps I'd be more inclined to talk.",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyKA: [
         "<25>{#f/7}{#v/0}* 你迟早会不得不\n  意识到这一点的。",
         '<25>{#f/11}{#v/0}* 等到那时候... \n  又会发生什么呢？',
         "<25>{#f/5}{#v/0}* 喏，我真的很期待\n  看到那一刻呢。",
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/9}{#v/0}* 祝你好运！'
      ],
      endtwinklyKB: [
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/7}{#v/0}* Maybe that's why you killed that one monster.",
         '<25>{#f/8}{#v/0}* I mean, you went almost the whole way without killing anyone...',
         '<25>{#f/6}{#v/0}* But somewhere along the line, you screwed up.',
         '<25>{#f/5}{#v/0}* All that good karma you had went straight down the toilet.',
         "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
         '<25>{#f/11}{#v/0}* What a joke!'
      ],
      endtwinklyKC: [
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/7}{#v/0}* Maybe that's why you killed those other monsters.",
         '<25>{#f/8}{#v/0}* I mean, you had a good run, but...',
         "<25>{#f/6}{#v/0}* What's the point in mercy if it doesn't mean anything?",
         '<25>{#f/7}{#v/0}* And believe me, after you did what you did...',
         "<25>{#f/2}{#v/1}* It doesn't mean JACK.",
         '<25>{#f/6}{#v/0}* ...',
         '<25>{#f/8}{#v/0}* ...',
         '<25>{#f/7}{#v/0}* See ya, idiot.'
      ],
      endtwinklyKD: [
         "<25>{#f/11}{#v/0}* 杀托丽尔有什么不对啊？\n* 那不可太好了吗？",
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/2}{#v/1}* 我知道你仍然坏到了骨子里。",
         '<25>{#f/11}{#v/0}* 我是说，你设法干掉了\n  所有挡了路的人。',
         '<25>{#f/6}{#v/0}* 但在最后一关，你失败了。',
         "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
         '<25>{#f/11}{#v/0}* What a joke!'
      ],
      endtwinklyL: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Back again, huh?\n* Golly...',
         "<25>{#f/8}{#v/0}* You've changed the timeline around so much...",
         "<25>{#f/6}{#v/0}* I don't even know what to think now.",
         '<25>{#f/8}{#v/0}* Are you good?\n* Evil?\n* Just curious?',
         '<25>{#f/6}{#v/0}* I dunno.',
         '<25>{#f/5}{#v/0}* There is one thing, though...',
         "<25>{#f/5}{#v/0}* One thing I KNOW you haven't done yet.",
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/7}{#v/0}* That's right.",
         "<25>{#f/7}{#v/0}* You haven't killed everyone here in one run yet.",
         "<25>{#f/11}{#v/0}* Aren't you at least a LITTLE curious?",
         '<25>{#f/8}{#v/0}* Come on, $(name)...',
         "<25>{#f/5}{#v/0}* I know you're in there somewhere."
      ],
      endtwinklyL1: [
         '<25>{#p/twinkly}{#f/6}{#v/0}* Well well, we meet again.',
         '<25>{#f/8}{#v/0}* How many times is this now?',
         "<25>{#f/6}{#v/0}* Whatever.\n* Doesn't matter.",
         '<25>{#f/6}{#v/0}* You KNOW what you have to do, $(name).',
         '<25>{#f/8}{#v/0}* ...',
         "<25>{#f/5}{#v/0}* I'll be waiting."
      ],
      exit1: [
         '<25>{#p/toriel}{#f/13}* 你想要回“家”，\n  对吗？',
         '<25>{#f/9}* ...',
         '<25>{#f/9}* 如果你离开这里，\n  我就没办法保护你了。',
         '<25>{#f/9}* 我就没办法\n  在你直面危险的时候\n  拯救你了。',
         '<25>{#f/13}* 所以，拜托了，孩子...',
         '<25>{#f/9}* 回去吧。'
      ],
      exit2: [
         '<25>{#p/toriel}{#f/13}* 每个来到这里的人类\n  最终的命运都一模一样。',
         '<25>{#f/9}* 我已经见证了一次又一次。',
         '<25>{#f/13}* 他们到来。',
         '<25>{#f/13}* 他们离开。',
         '<25>{#f/9}* ...他们死去。',
         '<25>{#f/13}* 我的孩子...',
         '<25>{#f/13}* 如果你离开外域...',
         '<25>{#f/9}* 那个人...\n* {@fill=#f00}艾斯戈尔{@fill=#fff}...\n* 会取走你的灵魂。'
      ],
      exit3: [
         '<25>{#p/toriel}{#f/9}* ...',
         '<25>{#f/13}* 我虽然不想这么说，但...',
         '<25>{#f/11}* 我不能允许你继续往前走。',
         '<25>{#f/9}* 这都是为了你好，孩子...',
         '<25>{#f/9}* 不要跟着我进下一个房间。'
      ],
      exit4: [
         '<25>{#p/toriel}{#p/toriel}{#f/13}* ...',
         '<25>{#f/10}* ...果然。',
         '<25>{#f/9}* 也许事情总是注定\n  要走到这一步。',
         '<25>{#f/9}* 也许我就是愚蠢到\n  觉得你和他们不一样。',
         '<25>{#f/9}* ...',
         '<25>{#f/13}* 恐怕现在我没什么\n  选择的余地了。',
         '<25>{#f/13}* 请原谅我，我的孩子...',
         '<25>{#f/11}* 我不能让你离开。'
      ],
      exitfail1: (lateleave: boolean, sleep: boolean) =>
         world.postnoot
            ? [
               [
                  sleep
                     ? "<32>{#p/twinkly}{#f/19}* 妈咪趁你回家睡觉时\n  去买东西了。"
                     : "<32>{#p/twinkly}{#f/19}* 妈咪在你逃回家后\n  去买东西了。",
                  '<32>{#x1}* 可是... 真不幸啊！\n* 运输船半路爆炸，\n  把她炸得魂都不剩啦！',
                  '<32>* 嘻嘻，真没想到\n  这等百年一遇的事\n  居然真的发生啦。',
                  '<32>{*}{#x2}* ...',
                  "<25>{*}{#f/7}* $(name)，真是遗憾呢。\n* 想要好结局的话，\n  你还得再加把劲咯。"
               ],
               [
                  sleep
                     ? "<32>{#p/twinkly}{#f/19}* 妈咪趁你回家睡觉时\n  去买东西了。"
                     : "<32>{#p/twinkly}{#f/19}* 妈咪在你逃回家后\n  去买东西了。",
                  '<32>{#x1}* 可是... 真不幸啊！\n* 某个会说话的小星星\n  把她千刀万剐、折磨死啦！',
                  "<32>* 嘻嘻，好像比上次还惨哦！",
                  '<32>{*}{#x2}* ...',
                  "<25>{*}{#f/6}* $(name)，\n  别浪费时间了。\n* 快回来干正事。"
               ],
               [
                  '<25>{*}{#p/twinkly}{#f/5}* $(name)，你可真傻...',
                  sleep
                     ? "<25>{*}{#f/7}* 想靠那点小把戏蒙混过关？\n  做梦去吧！"
                     : "<25>{*}{#f/7}* 你跑啊，你使劲跑\n  跑断腿了也别想赢得了我。"
               ],
               ['<25>{*}{#p/twinkly}{#f/6}* 只要你还这么干，\n  我就一直阻止你。'],
               ['<25>{*}{#p/twinkly}{#f/8}* ...']
            ][Math.min(SAVE.flag.n.postnoot_exitfail++, 4)]
            : [
               sleep
                  ? "<32>{#p/basic}* 当你在托丽尔的家里睡下后，\n  她随即摧毁了离开外域\n  唯一的出口。"
                  : "<32>{#p/basic}* 在你回到托丽尔家后，\n  她随即摧毁了离开外域\n  唯一的出口。",
               ...(outlandsKills() > 10
                  ? [
                     "<32>* 日子一天天过去，\n  她很快就发现\n  许多怪物都是因你而死。",
                     '<32>* 她彻底陷入了绝望。\n  万念俱灰，最后...',
                     '<32>* ...',
                     '<32>* ...与-与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。'
                  ]
                  : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                     ? [
                        '<32>* 日子一天天过去，\n  托丽尔尽己所能关心你，照顾你。',
                        '<32>* 带你读书，给你做派...',
                        '<32>* 每晚睡前，帮你盖好被子...',
                        ...(lateleave
                           ? ['<32>* ...然而，她心底里仍担心\n  你会再度逃跑。']
                           : ["<32>* ...尽力不去想那些\n  失踪的怪物。"]),
                        '<32>* 与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。'
                     ]
                     : [
                        '<32>* 日子一天天过去，\n  托丽尔尽己所能关心你，照顾你。',
                        '<32>* 带你读书，给你做派...',
                        '<32>* 每晚睡前，帮你盖好被子...',
                        ...(lateleave
                           ? ['<32>* 她总是紧紧抱住你，\n  仿佛这么做你就不会再度逃跑。']
                           : ['<32>* 只要你想拥抱，\n  她都会无条件给你。']),
                        '<32>* 与此同时，\n  前哨站的其他居民苦苦等待着\n  下一个人类去解救他们。'
                     ]),
               '<32>* ...然而，这个人类\n  永远都不会到来了。',
               '<32>* 这是你希望的结果吗？',
               '<32>* 前哨站的怪物，\n  活该接受这样的命运吗？'
            ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
               '<25>{#p/toriel}{#f/1}* 抱歉让你久等了...',
               '<25>{#f/3}* 估计那只小白狗\n  又洗劫我的厨房了。',
               '<25>{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...',
               '<26>{#f/0}* 不说这个了。\n* 我给你做好了一盘焗蜗牛。'
            ]
            : ['<25>{#p/toriel}* 早餐做好啦！', '<26>* 我给你做了一盘焗蜗牛。']),
         '<25>{#f/1}* 我把吃的放在桌上吧...'
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
                  ? ["<32>{#p/basic}* 你对冰箱里的东西不感兴趣。"]
                  : ['<32>{#p/basic}* 冰箱里有一条名牌巧克力。'],
         b: () => [
            ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* ...', '<32>* 你想尝尝吗？']),
            choicer.create('* （拿走它吗？）', '是', '否')
         ],
         b1: ['<32>{#p/human}* （你决定什么也不拿。）'],
         b2: () => [
            '<32>{#p/human}* （你拿走了巧克力。）',
            ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/17}* 啊... 是巧克力。', '<25>{#p/asriel1}{#f/13}* ...'] : [])
         ],
         c: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （但里面什么都没有。）',
                  ...[
                     [
                        '<25>{#p/asriel1}{#f/23}* 噢...\n  $(name)以前\n  总是喜欢翻冰箱。',
                        '<25>{#f/13}* 那家伙觉得，\n  只要翻得够深...',
                        '<25>{#f/13}* 就能找到又一条巧克力。',
                        '<25>{#f/17}* ...真笨啊。'
                     ],
                     ['<25>{#p/asriel1}{#f/20}* 那会儿都还没装上\n  巧克力复制机呢。']
                  ][Math.min(asrielinter.fridgetrap_c++, 1)]
               ]
               : ['<32>{#p/basic}* 没有巧克力可拿了。'],
         d: ["<32>{#p/human}* （你带的东西太多了。）"]
      },
      front1: [
         '<25>{#p/toriel}{#f/1}* ...你想演奏一首\n  自己的曲子？',
         '<25>{#f/0}* 好的，我看看能帮上什么忙。'
      ],
      front1x: ['<25>{#p/toriel}{#f/1}* ...喂？'],
      front2: () => [
         ...(world.postnoot
            ? [
               '<25>{#p/toriel}{#f/2}* 这么早就起来了！？',
               '<25>{#f/1}* 你都没睡多久...',
               '<25>{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? '<25>{#f/1}* 供气系统应该还没修好。'
                  : '<25>{#f/1}* 供气系统好像坏掉了。',
               '<25>{#f/1}* 要是觉得困，就再睡一会吧。',
               '<26>{#f/0}* ...顺便一提...'
            ]
            : [
               '<25>{#p/toriel}{#f/2}* 你站在这里多久了！？',
               '<25>{#f/5}* ...',
               '<25>{#f/0}* 没事，顺带一提...'
            ]),
         '<25>{#f/0}* 一位叫纳普斯特的客人\n  想在这里演奏自己的音乐。',
         '<25>{#f/0}* 而且，它特别邀请你\n  一起上台演出！',
         '<25>{#f/1}* 你想去活动室见见它吗？',
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               '<25>{#f/3}* 对了，不好意思\n  派变成了那副样子。',
               '<25>{#f/4}* 估计是那只小白狗\n  又去洗劫我的厨房了...'
            ]
            : 3 <= SAVE.data.n.cell_insult
               ? [
                  '<25>{#f/5}* 对了，不好意思\n  把派做成了那副样子。',
                  '<25>{#f/9}* 我已经尽力去抢救了...'
               ]
               : []),
         choicer.create("* （参加纳普斯特的演出吗？）", '是', '否')
      ],
      front2a: ['<25>{#p/toriel}{#f/0}* 太好了！\n* 我会转告给它的。'],
      front2b: ['<25>{#p/toriel}{#f/5}* ...', '<25>{#p/toriel}{#f/5}* 需要我的话，\n  随时可以到客厅找我。'],
      front3: () => [
         ...(world.postnoot
            ? [
               '<25>{#p/toriel}{#f/0}* 哦，早安，小家伙。\n* 你起的真早。',
               '<25>{#f/1}* 确定睡足了吗？',
               '<25>{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? '<25>{#f/1}* 供气系统应该还没修好。'
                  : '<25>{#f/1}* 供气系统好像坏掉了。',
               '<25>{#f/1}* 要是觉得困，就再睡一会吧。',
               '<26>{#f/0}* ...顺便一提...'
            ]
            : ['<25>{#p/toriel}* 早上好，小家伙。']),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               '<25>{#f/3}* 估计那只小白狗\n  又洗劫我的厨房了。',
               '<25>{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...',
               '<25>{#f/0}* 不过，为了你能吃上派\n  我还是尽力抢救了一下。'
            ]
            : ['<25>{#f/1}* 今天的星星看起来格外美丽，\n  不是吗？']),
         '<25>{#f/5}* ...',
         '<25>{#f/5}* 需要我的话，\n  随时可以到客厅找我。'
      ],
      front4: () => [
         ...(world.postnoot
            ? [
               '<25>{#p/toriel}{#f/0}* 哦，早安，小家伙。\n* 你起的真早。',
               '<25>{#f/1}* 确定睡足了吗？',
               '<25>{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? '<25>{#f/1}* 供气系统应该还没修好。'
                  : '<25>{#f/1}* 供气系统好像坏掉了。',
               '<25>{#f/1}* 要是觉得困，就再睡一会吧。'
            ]
            : ['<25>{#p/toriel}* 早上好，小家伙。']),
         '<25>{#f/5}* ...',
         ...(world.bullied
            ? [
               '<25>* 今天外域格外喧嚣呢。',
               '<25>* 听说有个恶霸四处游荡，\n  惹是生非。',
               '<25>* 最好别离家太远。'
            ]
            : [
               '<25>* 今天外域格外安静呢。',
               '<25>* 我刚才给一个人\n  打了个电话，但是...',
               '<25>* 只有一片死寂。'
            ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               world.bullied
                  ? '<26>{#f/3}* 而且，那只小白狗\n  又洗劫了我的厨房。'
                  : '<25>{#f/3}* 以及洗劫我厨房的小白狗。',
               '<25>{#f/4}* 你应该也看到好好的派\n  现在被糟蹋成什么样了...',
               '<25>{#f/0}* 不过，为了你能吃上派\n  我还是尽力抢救了一下。',
               '<25>{#f/1}* 希望你能喜欢它...'
            ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
               ? []
               : ['<25>{#f/1}* 真令人担心...']),
         '<25>{#f/0}* 顺便一提，如果需要我的话，\n  随时可以到客厅找我。'
      ],
      goodbye1a: ['<25>{#p/toriel}{#f/10}* ...', '<25>{#f/20}{|}* 过来- {%}'],
      goodbye1b: ['<25>{#p/toriel}{#f/9}* ...', '<25>{#f/19}{|}* 过来- {%}'],
      goodbye2: [
         '<25>{#p/toriel}{#f/5}* 我很抱歉让你遭这些罪，\n  孩子。',
         '<25>{#f/9}* 我早就该明白我没办法\n  一直把你留在这里。',
         '<25>{#f/5}* ...不过，\n  如果你想找人聊天的话...',
         '<25>{#f/1}* 欢迎你随时打电话给我。',
         '<25>{#f/0}* 只要电话信号能覆盖到，\n  我肯定会接的。'
      ],
      goodbye3: [
         '<25>{#p/toriel}{#f/5}* 我很抱歉让你遭这些罪，\n  孩子。',
         '<25>{#f/9}* 我早就该明白我没办法\n  一直把你留在这里。',
         '<25>{#f/10}* ...',
         '<25>{#f/14}* 要乖啊，好吗？'
      ],
      goodbye4: ['<25>{#p/toriel}{#f/1}* 要乖啊，好吗？'],
      goodbye5a: [
         '<25>{#p/toriel}{#f/5}* ...嗯？\n* 你改变主意了吗？',
         '<25>{#f/9}* ...',
         '<25>{#f/10}* 看来你这孩子真挺奇怪的。',
         '<25>{#f/0}* ...罢了。',
         '<25>{#f/0}* 我把这里的事处理完，\n  然后回房间见你。',
         '<25>{#f/0}* 谢谢你愿意听话，孩子。',
         '<25>{#f/0}* 这下好办多了。'
      ],
      goodbye5b: [
         '<25>{#p/toriel}{#f/5}* ...嗯？\n* 你改变主意了吗？',
         '<25>{#f/10}* ...\n* 对不起，孩子。',
         '<25>{#f/9}* 我可能一时情绪失控了。',
         '<25>{#f/0}* ...别担心我。',
         '<25>{#f/0}* 我把这里的事处理完，\n  然后回房间见你。',
         '<25>{#f/0}* 谢谢你愿意听话，孩子。',
         '<25>{#f/0}* 这下好办多了。'
      ],
      halo: {
         a: () => ['<32>{#p/human}* （你捡起了光环。）', choicer.create('* （戴上光环吗？）', '是', '否')],
         b: ["<32>{#p/human}* （你带的东西太多，装不下它了。）"]
      },
      indie1: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '<25>{#p/toriel}{#f/5}* 之前的教学都不太顺利...',
               '<25>{#f/5}* 希望这次能有所改善。'
            ]
            : ['<26>{#p/toriel}* 好。\n* 现在教你第三项，\n  也是最后一项本领。']),
         '<25>{#f/1}* 有信心只靠自己...',
         '<25>{#f/1}* 走到房间的尽头吗？',
         choicer.create('* （你要怎么回答？）', "有信心", "我不敢")
      ],
      indie1a: () => [
         '<25>{#p/toriel}{#f/1}* 你确定吗...？',
         '<25>{#f/0}* 这段路其实并不长...',
         choicer.create('* （改变主意吗？）', '是', '否')
      ],
      indie1b: () => [
         '<25>{#p/toriel}{#f/5}* 我的孩子。',
         '<25>{#f/1}* 学会独立\n  是非常非常重要的，\n  对吧？',
         '<32>{#p/basic}* 如果你坚持不改变主意，说不定\n  托丽尔就亲自带你回家了。',
         choicer.create('* （改变主意吗？）', '是', '否')
      ],
      indie2a: ['<25>{#p/toriel}{#f/1}* 好的...', '<25>{#f/0}* 祝你好运！'],
      indie2b: ['<25>{#p/toriel}{#f/5}* ...', '<25>{#f/9}* ...明白了。'],
      indie2b1: [
         '<25>{#p/toriel}{#f/10}* 别害怕，孩子。',
         '<25>{#f/1}* 如果你真的不想\n  离开我的身边，那么...',
         '<25>{#f/0}* 我会陪你穿过\n  外域的其他地方的。',
         '<25>{#f/5}* ...',
         '<25>{#f/5}* 孩子，握住我的手...',
         '<25>{#f/5}* 我们一起回家。'
      ],
      indie2f: ['<32>{#p/human}{#s/equip}* （你得到了一部手机。）'],
      indie3a: ['<25>{#p/toriel}* 你做到了！'],
      indie3b: [
         '<25>{#p/toriel}{#f/3}* 我的乖乖，你怎么\n  花了这么长时间才到！？',
         '<25>{#f/4}* 是迷路了吗？',
         '<25>{#f/1}* ...\n* 应该没事...'
      ],
      indie4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '<25>{#f/0}* 说实话，你能自己走到这里\n  我都挺意外的。',
               '<25>{#f/3}* 之前表现成那样，\n  我都怀疑...',
               '<25>{#f/4}* ...你一直在故意整我，\n  是不是？',
               '<25>{#f/23}* 告诉你，\n  我现在可没空跟你胡闹。'
            ]
            : [
               '<25>{#p/toriel}{#f/0}* 别担心，孩子。\n  这只是个给你准备的\n  独立性测试！',
               '<25>{#f/0}* 一路上并没有什么危险。',
               '<25>{#f/1}* 其实呢...'
            ]),
         '<25>{#f/5}* 我要去忙一些重要的事了。',
         '<25>{#f/0}* 在我不在时，\n  希望你能好好表现。',
         '<25>{#f/1}* 前面有些谜题，\n  还没来得及给你解释。\n* 而且...',
         '<25>{#f/0}* 如果你擅自离开房间的话，\n  可能会遇到危险。',
         '<25>{#f/10}* 来，这个手机给你。',
         '<32>{#p/human}{#s/equip}* （你得到了一部手机。）',
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '<25>{#p/toriel}{#f/1}* 我不在的时候...',
               '<25>{#f/0}* 如果遇到任何事情...\n  就给我打电话。',
               '<25>{#f/5}* ...',
               '<26>{#f/23}* 还有，别惹麻烦。'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 我不在的时候...',
               '<25>{#f/0}* 如果遇到任何事情...\n  就给我打电话。',
               '<25>{#f/5}* ...',
               '<25>{#f/1}* 乖乖的，好吗？'
            ])
      ],
      indie5: [
         [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<25>{#p/toriel}* 嗨！\n* 我是托丽尔。',
            '<25>* 办事的时间\n  比我预想的要长一些。',
            '<25>* 你得再等一会儿了。',
            '<25>{#f/1}* 孩子，\n  谢谢你这么耐心...',
            '<25>{#f/0}* 你真是太乖了。'
         ],
         [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<25>{#p/toriel}* 嗨...\n* 我是托丽尔。',
            '<25>{#f/1}* 我找到想要的东西了...',
            '<25>{#f/0}* 但有只小白狗\n  把它给叼走了！\n* 真奇怪啊。',
            '<25>{#f/1}* 狗狗还喜欢面粉吗？',
            '<25>{#f/0}* 呃，当然，\n  这是个无关紧要的问题。',
            '<25>* 我得再多花点时间\n  才能回来了。',
            '<25>{#f/1}* 再次感谢你这么耐心...'
         ],
         [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<32>{#p/basic}* （...）',
            '<32>{#p/human}* （你听到电话那头\n  传来急促的喘息声。）',
            '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
            '<32>{#p/human}* （你听到远处传来一个声音。）',
            '<25>{#p/toriel}{#f/2}* 拜托，别跑了！',
            '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
            '<25>{#p/toriel}{#f/1}* 快回来，\n  把我的手机还给我！'
         ],
         [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<32>{#p/basic}* （...）',
            '<32>{#p/human}* （听起来，一只小白狗\n  在手机上睡着了。）',
            '<32>{#p/basic}* （呼噜... 呼噜...）',
            '<32>{#p/human}* （你听到远处传来一个声音。）',
            '<25>{#p/toriel}{#f/1}* 喂——？\n* 小狗狗...？',
            '<25>{#f/1}* 你在哪里呀——？',
            '<25>{#f/0}* 乖乖回来，\n  我给你摸摸头！',
            '<32>{#p/human}* （呼噜声停止了。）',
            '<25>{#p/toriel}* ...只要你把我的手机\n  还回来就行。',
            '<32>{#p/human}* （呼噜声又响起来了。）'
         ],
         [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<32>{#p/basic}* （...）',
            '<32>{#p/basic}* （啊嚏！）',
            '<32>{#p/human}* （听起来，一只小白狗\n  在睡梦中打了个喷嚏。）',
            '<32>{#p/human}* （你听到远处传来一个声音。）',
            '<25>{#p/toriel}{#f/1}* 啊哈！\n* 小家伙，我听到你的声音了...',
            '<25>{#f/6}* 我这就来找你！',
            '<32>{#p/human}* （呼噜声停止了。）\n* （那只狗好像在躲着什么。）',
            '<25>{#p/toriel}{#f/8}* 嘻嘻，你逃不掉的！'
         ],
         [
            '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
            '<32>{#p/human}* （你听到远处传来一个声音。）',
            '<25>{#p/toriel}{#f/1}* 嗨...\n* 我是... 托丽尔...',
            '<32>{#s/bark}{#p/event}* 汪汪！\n* 汪汪！',
            '<25>{#p/toriel}{#f/2}* 不行，坏狗狗！',
            '<32>{#p/basic}* （呜咽... 呜咽...）',
            '<25>{#p/toriel}* 好啦，好啦...\n* 我会再给你找部手机的。',
            '<25>{#f/1}* 这样行吗？',
            '<32>{#p/basic}* （...）',
            '<32>{#s/bark}{#p/event}* 汪汪！',
            '<25>{#p/toriel}* 那就好。',
            '<32>{#p/human}* （可以听到小狗走开的声音。）',
            '<25>{#p/toriel}* 出了这么多状况，\n  非常抱歉。',
            '<25>{#f/1}* 我很快就会回去接你的...'
         ]
      ],
      indie6: (early: boolean) => [
         '<32>{#s/phone}{#p/event}* 铃铃，铃铃...',
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               early
                  ? '<25>{#p/toriel}{#g/torielTired}* ...出来了？'
                  : '<25>{#p/toriel}{#g/torielTired}* ...待得不耐烦了吗？',
               '<25>{#f/9}* 没事，我已经猜到了。',
               '<25>{#f/5}* 只是，提醒你一下，\n  外面有很多危险等着你...',
               '<25>{#f/1}* 保护好自己，别受伤了。'
            ]
            : [
               '<25>{#p/toriel}* 喂？\n* 我是托丽尔。',
               '<25>{#f/1}* 你没离开房间吧？',
               '<25>{#f/0}* 外面非常危险，\n  受伤了可就不好了。',
               '<25>{#f/1}* 乖乖的，好吗？'
            ])
      ],
      indie7: ['<32>{#p/basic}* 几分钟后...'],
      indie8: [
         '<25>{#p/toriel}* 我回来啦！',
         '<25>* 你一直这么耐心等待，\n  真是太棒了。\n* 连我都没想到你会这么乖！',
         '<25>{#f/0}* 好啦。\n* 现在我该带你回家了。',
         '<25>{#f/1}* 来吧，\n  请跟我走吧...'
      ],
      lobby_puzzle1: [
         '<25>{#p/toriel}{#f/0}* 欢迎来到我们简陋的前哨站，\n  单纯的孩子。',
         '<25>{#f/0}* 我必须教给你一些本领。\n* 学会这些，\n  你才能在这里生存下去。',
         '<25>{#f/1}* 第一样要学的...',
         '<25>{#f/0}* 当然是谜题了！',
         '<25>{#f/0}* 我来给你快速演示一下。'
      ],
      lobby_puzzle2: [
         '<25>{#p/toriel}{#f/1}* 现在，你可能还觉得很奇怪。\n* 不过...',
         '<25>{#f/0}* 在前哨站，\n  解谜就是我们的家常便饭。',
         '<25>{#f/0}* 只要有人指导，时间久了，\n  解起谜来就能轻车熟路。'
      ],
      lobby_puzzle3: ['<25>{#p/toriel}* 等你准备好，\n  我们就可以继续前进了。'],
      loox: {
         a: [
            "<32>{#p/basic}{#n1}* 我听说，\n  作为人类的你很喜欢调情。",
            "<32>* 每当你向各式各样的怪物{@fill=#cf7fff}调情{@fill=#fff}时，\n  他们名字的右上角\n  就会出现一颗心{@fill=#cf7fff}\u4dc1{@fill=#fff}。",
            "<32>* 你{@fill=#cf7fff}调情{@fill=#fff}的怪物种类越多，\n  你获得的心也就越多。",
            '<32>* 我寻思着...',
            '<32>* 你能在这条道上走多远呢？',
            '<32>* 也许，我的朋友，\n  你会成为一个... 传奇。'
         ],
         b: [
            '<32>{#p/basic}{#n1}* 嘿，人类！\n  你有尝试过调情吗？',
            "<32>* 哈！\n* 一看你的表情我就知道\n  你肯定没试过。",
            "<32>* 我得跟你说，\n  调情超级好玩的。",
            "<32>* 这样会让你的敌人\n  不知道怎么办才好！",
            '<32>* 那个那个...\n  如果你真的试过调情了，\n  我会告诉你更多事情哦。',
            '<32>* 祝你好运！'
         ],
         c: [
            "<32>{#p/basic}{#n1}* 嘿人类，\n  现在你已经开始调情了...",
            '<32>* 感觉如何？',
            "<32>* 非常好，对吧？",
            "<32>* 每当你向各式各样的怪物{@fill=#cf7fff}调情{@fill=#fff}时，\n  他们名字的右上角\n  就会出现一颗心{@fill=#cf7fff}\u4dc1{@fill=#fff}。",
            "<32>* 你{@fill=#cf7fff}调情{@fill=#fff}的怪物种类越多，\n  你获得的心也就越多。",
            '<32>* 我寻思着...',
            '<32>* 你能在这条道上走多远呢？',
            '<32>* 也许，我的朋友，\n  你会成为一个... 传奇。'
         ],
         d: [
            "<32>{#p/basic}{#n1}* 我听说你在这一带\n  有点霸道。",
            '<32>* 哈！\n* 加入我们吧，伙计。',
            "<32>* 你在跟这片的头号恶霸说话呢。",
            "<32>* 如果你{@fill=#3f00ff}欺负{@fill=#fff}了某几种怪物，\n  你就会在它们的名字旁边\n  看到一把剑{@fill=#3f00ff}\u4dc2{@fill=#fff}。",
            "<32>* 你{@fill=#3f00ff}欺负{@fill=#fff}的怪物的种类越多，\n  剑也会越来越多。",
            '<32>* 不过，我事先跟你说一声，\n  有些怪物是不吃这一套的。',
            "<32>* 这就像调情...\n  不过是玩命的那种。",
            '<32>* 挺有意思，是吧？'
         ],
         e: pager.create(
            0,
            () => [
               ...(30 <= SAVE.data.n.bully
                  ? [
                     "<32>{#p/basic}{#n1}* 我听说你现在是这一带的恶霸。",
                     "<32>* 大家都很怕你，嗯？"
                  ]
                  : 20 <= world.flirt
                     ? [
                        "<32>{#p/basic}{#n1}* 我听说你现在\n  是这里最浪漫的人。",
                        '<32>* 大家都很爱你，嗯？'
                     ]
                     : [
                        "<32>{#p/basic}{#n1}* 我听说你现在是这一带的大英雄。",
                        '<32>* 大家都很喜欢你，嗯？'
                     ]),
               '<32>* 嗯... 仅我个人观点，\n  我觉得你的空闲时间太多了。'
            ],
            ['<32>{#p/basic}{#n1}* 怎么？\n* 我说错了吗？']
         )
      },
      manana: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     "<32>{#p/basic}{#n1}* 所以，你就是那个\n  一起主持了音乐节目的家伙，嗯？",
                     "<32>* 也许现在你有办法接受我的提议了。",
                     "<32>* 我只是想让人买我这本\n  限量版《超级星之行者》漫画。",
                     "<32>* 不过，我挺喜欢你那场表演的。\n  给你打个折吧。\n* 5G，买还是不买？",
                     choicer.create('{#n1!}* （花5G买下这本\n  《超级星之行者1》漫画吗？）', '是', '否')
                  ]
                  : [
                     ...(world.postnoot
                        ? [
                           "<32>{#p/basic}{#n1}* 嘿，你有没有注意到\n  这附近有啥奇怪的事儿在发生？",
                           "<32>* 我敢说刚才\n  所有的谜题都自动关闭了。",
                           "<32>* 对了，我想为我这本\n  限量版《超级星之行者》漫画\n  找个买家。"
                        ]
                        : [
                           '<32>{#p/basic}{#n1}* 终于有人跟我说话了！',
                           "<32>* 我在这里站了好久，\n  都没人接受我的提议。",
                           "<32>* 我只是想让人买我这本\n  限量版《超级星之行者》漫画。"
                        ]),
                     "<32>* 感兴趣吗？\n* 我只收10G。",
                     choicer.create('{#n1!}* （花10G买下这本\n  《超级星之行者1》漫画吗？）', '是', '否')
                  ],
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     "<32>{#p/basic}{#n1}* 有兴趣买我的\n  限量版《超级星之行者》漫画吗？",
                     "<32>* 我只收5G。",
                     choicer.create('{#n1!}* （花5G买下这本\n  《超级星之行者1》漫画吗？）', '是', '否')
                  ]
                  : [
                     "<32>{#p/basic}{#n1}* 有兴趣买我的\n  限量版《超级星之行者》漫画吗？",
                     "<32>* 我只收10G。",
                     choicer.create('{#n1!}* （花10G买下这本\n  《超级星之行者1》漫画吗？）', '是', '否')
                  ]
         ),
         b: () => [
            "<32>{#p/human}{#n1!}* （你的钱不够。）",
            SAVE.data.b.napsta_performance
               ? "<32>{#p/basic}{#n1}* 我就直说了，\n  你那点钱可不够5G..."
               : "<32>{#p/basic}{#n1}* 我就直说了，\n  你那点钱可不够10G..."
         ],
         c: ['<32>{#p/basic}{#n1}* 不感兴趣，对吗？', "<32>* 那好吧。\n* 我再找找其他人..."],
         d: [
            '<32>{#s/equip}{#p/human}{#n1!}* （你获得了《超级星之行者1》。）',
            '<32>{#p/basic}{#n1}* 太好了！\n* 尽情欣赏吧。'
         ],
         e: ['<32>{#p/basic}{#n1}* 又回来了，嗯？', "<32>* 不好意思哈，\n  我没什么别的东西可卖了。"],
         f: [
            "<32>{#p/human}{#n1!}* （你带的东西太多了。）",
            "<32>{#p/basic}{#n1}* 你的口袋鼓鼓囊囊的，\n  装了不少东西嘛..."
         ],
         g: [
            "<32>{#p/basic}{#n1}* 我听说他们要\n  重启那个漫画系列了...",
            '<32>* 新的主角好像是条戴墨镜的蛇\n  还是啥的。',
            "<32>* 要我说，就该搞个\n  关于那个跟班的外传...",
            '<32>* 是叫Gumbert还是啥来着？'
         ],
         h: [
            "<32>{#p/basic}{#n1}* 现在咱们自由了，\n  他们终于能开始做\n  那个计划中的重启版了。",
            "<32>* 那玩意叫啥来着？\n* 哦，我已经给忘了..."
         ]
      },
      mananaX: () =>
         [
            [
               '<32>{#p/basic}{#n1}* 呃，刚才什么动静？',
               "<32>{#p/basic}{#n1}* 唉... \n  现在不行啦，眼睛花了。"
            ],
            ['<32>{#p/basic}{#n1}* 啊？\n* 怎么又整出这动静了？\n  现在的孩子啊...'],
            ['<32>{#p/basic}{#n1}* 现在的孩子啊...']
         ][Math.min(roomKills().w_puzzle4++, 2)],
      afrogX: (k: number) =>
         [
            ["<32>{#p/basic}{#n1}* 如... \n* 如果你再-再那么做的话... \n  我-我会站出来阻止你的！"],
            ['<32>{#p/basic}{#n1}* 住-住手...\n* 别伤害他们了...']
         ][k],
      patron: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? 6 <= world.population
                     ? [
                        "<32>{#p/basic}{#n1}* 我很伤心。\n* 他们把打碟机搬走了，\n  说是以后搞什么俗气的表演要用。",
                        '<32>* ...等等，那好像还蛮酷的嘛。'
                     ]
                     : [
                        "<32>{#p/basic}{#n1}* 我很伤心。\n* 之前来的那个恶霸...",
                        '<32>* ...居然是你。',
                        '<32>* 虽然你最后拯救了大家，\n  但为什么一路上都要使用暴力呢？'
                     ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        "<32>{#p/basic}{#n1}* 我很伤心。\n* 这段时间，音乐家们\n  都把自己逼得好紧...",
                        '<32>* 我个人真的很喜欢他们的曲子。',
                        "<32>* 真可惜，\n  我们可能再也听不到第二次了。",
                        '<32>{#n1!}{#n2}* 至少你还有牛排作伴，\n  对吧？;)',
                        '<32>{#n2!}{#n1}* ...别再提这个了。'
                     ]
                     : [
                        "<32>{#p/basic}{#n1}* 我很伤心。\n* 这几天的伙食真的是每况愈下...",
                        '<32>* 他们当初承诺会给一些\n  “货真价实”的东西。\n* 但我所得的都是些伪劣仿制品。',
                        '<32>{#n1!}{#n2}* 嘿！;)\n* 别在顾客面前\n  说我店面的坏话！;)',
                        '<32>* 再说了，如果是你的味觉\n  出了些毛病呢 ;)',
                        '<32>{#n2!}{#n1}* ...一点都没变。'
                     ],
            () => [
               SAVE.data.n.plot === 72 && 6 <= world.population
                  ? "<32>{#p/basic}{#n1}* ...不是这么回事？"
                  : '<32>{#p/basic}{#n1}* ...就是这么回事。'
            ]
         )
      },
      pie: () =>
         3 <= SAVE.data.n.cell_insult
            ? ['<32>{#p/human}* （你捡起了烤糊的派。）']
            : SAVE.data.n.state_wastelands_mash === 1
               ? ['<32>{#p/human}* （你带走了派粥。）']
               : SAVE.data.b.snail_pie
                  ? ['<32>{#p/human}* （你捡起了蜗牛派。）']
                  : ['<32>{#p/human}* （你捡起了奶油糖肉桂派。）'],
      plot_call: {
         a: () => [
            '<32>{#p/event}* 铃铃，铃铃...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* 孩子，你好。'
               : '<25>{#p/toriel}* 喂？\n* 我是托丽尔。',
            '<25>{#f/1}* 不是啥大事，\n  只是想问一下...',
            '<25>{#f/0}* 你更喜欢肉桂，\n  还是奶油糖呢？',
            choicer.create('* （你更喜欢哪个？）', '肉桂', '奶油糖'),
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* 我知道了。'
               : '<25>{#p/toriel}* 哦，我知道了！\n* 十分感谢！'
         ],
         b: () => [
            '<32>{#p/event}* 铃铃，铃铃...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* 孩子，你好。'
               : '<25>{#p/toriel}* 喂？\n* 我是托丽尔。',
            [
               '<25>{#f/1}* 你不讨厌奶油糖吧？',
               '<25>{#f/1}* 你不讨厌肉桂吧？'
            ][SAVE.data.n.choice_flavor],
            '<25>{#f/1}* 我知道你更喜欢另一种，\n  只是...',
            '<25>{#f/1}* 假如食物里放了它，\n  你还愿意吃吗？',
            choicer.create('* （你要怎么回答？）', "愿意吃", "不吃了")
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* 知道了。'
               : '<25>{#p/toriel}* 好的，好的，没问题。',
            '<25>{#f/1}* 那我先挂了...'
         ],
         b2: () => [
            '<25>{#p/toriel}{#f/5}* ...',
            '<25>{#f/0}* 好吧。',
            '<25>{#f/1}* ...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#f/0}* 我看看怎么办吧。'
               : '<25>{#f/0}* 我会回头再打给你的，\n  孩子。'
         ],
         c: [
            '<32>{#p/event}* 铃铃，铃铃...',
            '<25>{#p/toriel}{#f/1}* 你没什么过敏的东西吧？',
            '<25>{#f/5}* ...',
            '<25>{#f/5}* 我感觉人类不该\n  对怪物的食物过敏。',
            '<25>{#f/0}* 嘻嘻。\n* 刚问的别放在心上！'
         ],
         d: [
            '<32>{#p/event}* 铃铃，铃铃...',
            '<25>{#p/toriel}{#f/1}* 嗨，小家伙。',
            '<25>{#f/0}* 我想起来\n  好久没收拾这地方了。',
            '<25>{#f/1}* 所以，这里可能\n  四处散落着各种东西。',
            '<25>{#f/0}* 你可以把它们捡起来，\n  带在身上，但别带太多。',
            '<25>{#f/1}* 万一以后碰到什么\n  真正想要的东西呢？',
            '<25>{#f/0}* 那时，你就会希望\n  自己的口袋里还有空地方了。'
         ]
      },
      puzzle1A: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* （开关好像卡住了。）']
            : ['<32>{#p/basic}* 开关卡住了。'],
      puzzle3A: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* （开关好像卡住了。）']
            : ['<32>{#p/basic}* 开关卡住了。'],
      return1: () => [
         SAVE.data.n.cell_insult < 3
            ? '<25>{#p/toriel}{#f/1}* 你是怎么到这里的，\n  我的孩子？'
            : '<25>{#p/toriel}{#f/1}* 哦... 你到了。',
         '<25>* 你还好吗？'
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? ['<25>{#p/toriel}* 一点伤都没有！\n* 很厉害！']
            : ['<25>{#p/toriel}{#f/10}* 没有受伤...\n* 挺好的。'],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? ['<25>{#p/toriel}{#f/4}* 你好像受伤了...', '<25>{#f/10}* 乖，乖。\n* 让我帮你疗伤。']
            : ['<25>{#p/toriel}{#f/9}* 你受伤了。', '<25>{#f/10}* 请让我帮你疗伤。'],
      return2c: [
         '<25>{#p/toriel}{#f/3}* ...',
         '<25>{#f/11}* 是谁把你弄成这样的？\n* 他该为此付出代价。'
      ],
      return3: () => [
         '<25>{#p/toriel}* 孩子，对不起。\n* 我真是个笨蛋，居然把你\n  一个人扔下这么长时间。',
         ...(world.postnoot
            ? [
               '<25>{#f/1}* ...是我的错觉吗？\n  感觉空气不太对劲。',
               '<25>{#f/5}* 估计是供气系统出故障了。',
               '<25>{#f/5}* ...',
               '<25>{#f/0}* 别担心。\n* 很快就会有人解决的。'
            ]
            : []),
         '<25>{#f/1}* 来吧！\n* 我给你准备了个惊喜。'
      ],
      return4: () => [
         '<25>{#p/toriel}* 欢迎来到我的住所！',
         ...(3 <= SAVE.data.n.cell_insult
            ? [
               '<25>{#f/1}* 你闻到...',
               '<25>{#p/toriel}{#f/2}* ...哎呀，\n  忘了看烤箱了！',
               '<25>{#p/toriel}{#f/5}* 刚刚我全顾着去想你\n  之前为什么那么做，我...',
               '<25>{#p/toriel}{#f/1}* 我得马上去看看派怎么样了，\n  请别到处乱跑！'
            ]
            : [
               '<25>{#f/1}* 闻到了吗？',
               ...(SAVE.data.b.snail_pie
                  ? ['<25>{#f/0}* 惊喜！\n* 是我亲手做的蜗牛派。']
                  : [
                     '<25>{#f/0}* 惊喜！\n* 我做了个奶油糖肉桂派。',
                     '<25>{#f/0}* 今晚我原本是想做蜗牛派的，\n  但我猜你更喜欢这个。'
                  ]),
               '<25>{#f/1}* 嗯，尽管我很久\n  没有照顾过其他人了...',
               '<25>{#f/0}* 但还是希望\n  你能在这里过得开心。',
               '<25>{#f/0}* 跟我来！\n* 还有个惊喜等着你。'
            ])
      ],
      return5: [
         "<25>{#p/toriel}* 快看！\n* 这是属于你自己的房间。",
         '<25>{#f/1}* 希望你能喜欢它...'
      ],
      return6: [
         '<25>{#p/toriel}{#f/1}* 嗯，我得去看一下派\n  烤得怎么样了。',
         '<25>{#f/0}* 请四处走走，熟悉下吧！'
      ],
      runaway1: [
         ['<25>{#p/toriel}{#f/1}* 你是不是应该在屋里玩呢？', '<25>{#f/0}* 来吧。'],
         ['<25>{#p/toriel}{#f/9}* 在这里玩很危险的，\n  孩子。', '<25>{#f/5}* 相信我。'],
         ['<26>{#p/toriel}{#f/5}* 这里的重力很小。\n* 你会飘走的。'],
         ['<25>{#p/toriel}{#f/5}* 这里的空气系统很脆弱。\n* 你会窒息的。'],
         ['<25>{#p/toriel}{#f/23}* 这里真的没有什么\n  值得你看的东西。'],
         ['<25>{#p/toriel}{#f/1}* 想跟我一起读本书吗？'],
         ['<25>{#p/toriel}{#f/1}* 你想再去看看外域的\n  其他地方吗？'],
         ['<25>{#p/toriel}{#f/5}* 我不会让你一个人\n  遇到危险的。'],
         ['<25>{#p/toriel}{#f/3}* 你想让我一整天都这样子吗？'],
         ['<25>{#p/toriel}{#f/4}* ...'],
         ['<25>{#p/toriel}{#f/17}* ...', '<25>{#f/15}* 我不喜欢你玩这种游戏。'],
         ['<25>{#p/toriel}{#f/17}* ...']
      ],
      runaway2: [
         '<25>{#p/toriel}{#f/1}* 回屋里去吧，孩子...',
         '<25>{#f/0}* 我要给你看样东西！'
      ],
      runaway3: [
         '<25>{#p/toriel}{#f/2}* 孩子，快回去！\n* 这里非常不安全！',
         '<25>{#f/0}* 跟我来吧。\n  早餐已经做好了。'
      ],
      runaway4: ['<25>{#p/toriel}{#f/2}* 孩子！\n* 为什么要来这里！？'],
      runaway5: [
         '<25>{#p/toriel}{#f/1}* 你想过离开外域之后\n  等待你的是什么吗？',
         '<25>{#f/5}* 对不起，我...\n  我之前对你太冷淡了...',
         '<25>{#f/9}* 是不是因为我不够关心你，\n  你才逃跑的呢...'
      ],
      runaway6: [
         '<25>{#g/torielStraightUp}* 说实话... 我不敢离开这里。',
         '<25>{#f/9}* 外面非常危险，那些怪物\n  足以威胁到你我的生命。',
         '<25>{#g/torielSincere}* 我也想尽力保护你，\n  不让他们伤害到你...',
         '<25>{#g/torielStraightUp}* 可要是我跟你一起离开，\n  他们会把我也当成一种威胁。',
         '<25>{#f/9}* 等待你的，\n  只会是更大的危险。'
      ],
      runaway7: [
         '<25>{#p/toriel}{#f/5}* 求求你...',
         '<25>{#f/1}* 跟我回家吧，\n  我保证会好好照顾你的。',
         '<25>{#f/5}* 你说什么我都答应，好吗？',
         '<25>{#f/18}* 求你了...\n  不要像他们一样抛下我...'
      ],
      runaway7a: [
         '<25>{#p/toriel}{#f/18}* ...',
         '<25>{#g/torielCompassionSmile}* 没事啦，没事啦，孩子。\n* 一切都会好起来的。',
         '<25>{#f/1}* 你先回家，\n  我要在这处理些事情。',
         '<25>{#f/5}* 很快就回去。'
      ],
      runaway7b: [
         '<25>{#p/toriel}{#f/21}* 真可悲啊...',
         '<25>* 我连一个人类孩子...\n  都保护不了...',
         '<32>{#p/human}* （脚步声逐渐远去。）'
      ],
      silencio: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#n1}* 嘿，你好啊。\n* 很高兴又在这儿见到你。',
                     "<32>* 我决定回来看看\n  我这块老地盘...",
                     "<32>* 而且这里相对安静。\n* 就跟我一个样。",
                     "<32>* 哦对了，我不在核心工作了。",
                     '<32>* 你瞧，我当初加入工程队的时候...',
                     "<32>* 可没想过还得临时客串当守卫啊。",
                     '<32>* ...看来就算是料事如神的我，\n  也没预料到公司会来这套。'
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        '<32>{#p/basic}{#n1}* 嘿，你好。\n* 很高兴能在演出看到你。',
                        "<32>* 我叫默之蟑...\n  但我觉得你应该听过了。",
                        '<32>* 这里的人都知道我的名字，\n  连那个DJ都知道。',
                        '<32>* 我曾经在这里表演过\n  我自己的音乐剧。',
                        '<32>* 名字叫“默之蟑的大逃亡”。',
                        '<32>* 结束了之后，\n  观众还没来得及叹口气，我就走了。'
                     ]
                     : [
                        '<32>{#p/basic}{#n1}* 嘿，你好。\n* 很高兴见到你。',
                        "<32>* 我叫默之蟑...\n  好吧，这称呼是其他人给我取的。",
                        '<32>* 想知道为什么他们\n  这样叫我吗？',
                        "<32>* 我寂静如最沉寂的星辰，\n  好似一位星际忍者。",
                        '<32>* 我能在任何危机中逃出生天，\n  从未失手。',
                        "<32>* 不信是吧？\n* 你试着整点动静，反正我肯定是\n  跑得比谁都快的。"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#n1}* 啊，对哦，\n  我好像可以离开这个星系了。",
                     "<32>* ...不过，我或许会留下来呢。"
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        '<32>{#p/basic}{#n1}* 你甚至可以说，我的演出...',
                        '<32>* 让人“叹为观止”。'
                     ]
                     : [
                        '<32>{#p/basic}{#n1}* 你为什么还要继续找我搭话，嗯？',
                        "<32>* 我已经说完了我想说的。"
                     ]
         )
      },
      
      socks0: ['<32>{#p/human}* （你往里面瞅了瞅。）', '<32>{#p/human}* （看来抽屉里是空的。）'],
      socks1: () =>
         world.darker
            ? ['<32>{#p/human}* （你往里面瞅了瞅。）', "<32>{#p/basic}* 只是个放袜子的抽屉。"]
            : [
               '<32>{#p/human}* （你往里面瞅了瞅。）',
               '<32>{#p/basic}* 真羞人！',
               "<32>* 这里面全是托丽尔收藏的袜子。\n* 有点乱...",
               world.meanie
                  ? choicer.create('* （让它们更乱点吗？）', "弄乱", "算了")
                  : choicer.create('* （整理一下吗？）', "整理", "算了")
            ],
      socks2: () =>
         world.meanie
            ? ['<33>{#p/human}* （你把袜子弄得一团糟。）']
            : [
               '<32>{#p/human}* （你把袜子整理成一双一双的。）',
               ...(SAVE.data.b.oops
                  ? []
                  : [
                     "<32>{#p/human}* （...）\n* （抽屉里好像藏着一把钥匙。）",
                     choicer.create('* （拿走钥匙吗？）', "拿走", "不拿")
                  ])
            ],
      socks3: () => [
         "<32>{#p/human}* （...）\n* （抽屉里好像藏着一把钥匙。）",
         choicer.create('* （拿走钥匙吗？）', "拿走", "不拿")
      ],
      socks4: ['<32>{#p/human}* （你打算不这么做。）'],
      socks5: [
         '<32>{#s/equip}{#p/human}* （你把秘密钥匙挂到了钥匙串上。）',
         '<32>{#p/basic}* ...能用这钥匙开什么呢？'
      ],
      socks6: ['<32>{#p/human}* （你决定什么也不拿。）'],
      socks7: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （你盯着袜子抽屉，\n  回想起从这里开始的漫长旅程。）',
               "<32>{#p/human}* （你不禁想象，如果没有它，\n  你现在会身处何方。）"
            ]
            : world.darker
               ? ["<32>{#p/basic}* 只是个放袜子的抽屉。"]
               : SAVE.data.n.plot < 72
                  ? ["<32>{#p/basic}* 你的视线没办法从袜子上挪开。"]
                  : SAVE.data.b.oops
                     ? [
                        "<32>{#p/basic}* 你大老远跑回来，\n  就只是为了再看一眼\n  托丽尔的袜子抽屉...？",
                        '<32>* 你这人生规划得可真不错。'
                     ]
                     : [
                        "<32>{#p/basic}* 你大老远跑回来，\n  就只是为了再看一眼\n  托丽尔的袜子抽屉...？",
                        '<32>* ...不过这确实挺有意义的。'
                     ],
      steaksale: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     '<32>{#p/basic}{#n1}* 您好，亲 ;)',
                     "<32>* 能在演出看到你真的很开心，\n  你懂吧 ;)",
                     '<32>* 你真的超级出彩 ;)',
                     "<32>* 反正，无论如何，\n  我觉得我得给你一个特别待遇 ;)",
                     '<32>* 在一段时间之内，\n  我将我们的产品注入了“优质”成分 ;)',
                     "<32>* 相信我，亲，\n  这可就跟以前的东西\n  完全不一样了 ;)",
                     '<32>* 这东西可是货真价实的哟 ;)',
                     "<32>* 会有一点贵，希望你不要介意 ;)",
                     "<32>* 那么... \n  稍微看看我们这的东西吧？;)"
                  ]
                  : [
                     '<32>{#p/basic}{#n1}* 您好，亲 ;)',
                     '<32>* 为了看看你们这群乡下佬在忙什么，\n  上头特地派我来这里，知道吧？;)',
                     "<32>* 你可以认为我们正在\n  进行业务扩张 ;)",
                     "<32>* 你问什么是我们的业务？;)",
                     "<32>* 嗯，其实很简单...\n  卖牛排而已 ;)",
                     "<32>* 这可不是什么赝品，嗯哼？;)",
                     '<32>* 这牛排可是真货哟 ;)',
                     '<32>* 所有质疑这是假货的人都在骗你，\n  懂我的意思吧？;)',
                     "<32>* 话虽如此，\n  要不稍微看看我们这的东西吧？;)"
                  ],
            ["<32>{#p/basic}{#n1}* 稍微看看我们这的东西吧？;)"]
         ),
         a1: ['<32>{#p/basic}{#n1}* 谢谢惠顾，亲 ;)'],
         b: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '<32>{#p/basic}{#n1!}* “滋滋牛排” - 售价40G。'
                  : '<32>{#p/basic}{#n1!}* 上面写着“滋滋牛排”，售价40G。\n* 闻起来过于夸张。'
               : world.darker
                  ? '<32>{#p/basic}{#n1!}* “滋滋牛排” - 售价20G。'
                  : '<32>{#p/basic}{#n1!}* 上面写着“滋滋牛排”，售价20G。\n* 闻起来很夸张。',
            SAVE.data.b.napsta_performance
               ? choicer.create('* （花40G买下滋滋牛排吗？）', '是', '否')
               : choicer.create('* （花20G买下滋滋牛排吗？）', '是', '否')
         ],
         b1: ['<32>{#p/human}{#n1!}* （你得到了滋滋牛排。）', '<32>{#p/basic}{#n1}* 绝佳的选择，亲 ;)'],
         b2: ['<32>{#p/human}{#n1!}* （你决定先不买。）'],
         c: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '<32>{#p/basic}{#n1!}* “呲呲汽水” - 售价10G。'
                  : '<32>{#p/basic}{#n1!}* 上面写着“呲呲汽水”，售价10G。\n* 究竟谁会去买这种东西啊？'
               : world.darker
                  ? '<32>{#p/basic}{#n1!}* “呲呲汽水” - 售价5G。'
                  : '<32>{#p/basic}{#n1!}* 上面写着“呲呲汽水”，售价5G。\n* 谁会去买这种东西啊？',
            SAVE.data.b.napsta_performance
               ? choicer.create('* （花10G买下呲呲汽水吗？）', '是', '否')
               : choicer.create('* （花5G买下呲呲汽水吗？）', '是', '否')
         ],
         c1: ['<32>{#p/human}{#n1!}* （你得到了呲呲汽水。）', "<32>{#p/basic}{#n1}* 小心点，挺甜的 ;)"],
         c2: ['<32>{#p/human}{#n1!}* （你决定先不买。）'],
         d: pager.create(
            0,
            () => [
               "<32>{#p/human}{#n1!}* （你的钱不够。）",
               '<32>{#p/basic}{#n1}* 钱不够，是吗？;)',
               SAVE.data.b.napsta_performance
                  ? '<32>{#p/basic}* 没关系的，亲 ;)\n* 不是每个人都买得起“高端”食材的 ;)'
                  : "<32>{#p/basic}* 没关系的，亲 ;)\n* 搞到一些之后再过来就好 ;)"
            ],
            ["<32>{#p/human}{#n1!}* （你的钱不够。）"]
         ),
         e: pager.create(
            0,
            [
               "<32>{#p/human}{#n1!}* （你带的东西太多了。）",
               '<32>{#p/basic}{#n1}* 也许你该过一会再来看看 ;)'
            ],
            ["<32>{#p/human}{#n1!}* （你带的东西太多了。）"]
         ),
         f: ['<32>{#p/human}{#n1!}* （你得到了滋滋牛排。）'],
         g: ['<32>{#p/human}{#n1!}* （你得到了呲呲汽水。）'],
         h: ["<32>{#p/human}{#n1!}* （你带的东西太多了。）"],
         i: [
            "<32>{#p/basic}{#n1}* 顺便说下，我们缺货了 ;)",
            "<32>* 看起来你对我们的商品情有独钟 ;)",
            '<32>* 如果-\n* 不，当你见到我们上司的时候...\n  记得和他说一声 ;)',
            '<32>{#p/human}{#n1!}* （亚伦在你耳边低语了几句。）',
            '<32>{#p/basic}{#n1}* 一路顺风，亲 ;)'
         ]
      },
      supervisor: {
         a: ['<32>{#p/basic}* 过了一阵子...'],
         b: [
            '<32>{#p/napstablook}* 嘿各位...',
            '<32>* 这是我不久前写的一首小调...',
            "<32>* 我还在尝试各种音乐风格...\n  所以...",
            "<32>* 希望各位能喜欢这首曲子",
            '<32>* ...',
            '<32>* 那，我们开始吧...'
         ],
         c1: ['<32>{*}{#p/basic}* 哇，爵士乐的味道。{^30}{%}'],
         c2: [
            '<25>{*}{#p/toriel}{#f/7}* 为什么纳普斯特之前\n  完全没提过呢？？\n* 真的好厉害！{^30}{%}',
            "<32>{*}{#p/basic}* 是啊，可能它只是有点害羞吧。{^30}{%}"
         ],
         c3: ['<32>{*}{#p/basic}* 哦，好棒 ;){^30}{%}'],
         c4: ['<32>{*}{#p/basic}* 高潮要来了！{^30}{%}'],
         c5: ['<32>{*}{#p/basic}* 哇哦，真是... 难以置信啊。{^30}{%}'],
         d: [
            '<32>{#p/napstablook}* 是啊，难以置信',
            '<32>{#p/napstablook}* 好吧...\n* 估计是我的表演太烂\n  让你们无聊了...',
            '<32>{#p/napstablook}* 对不起...'
         ],
         e: [
            '<25>{|}{#p/toriel}{#f/2}* 不，等等！\n* 我很喜...',
            "<32>{#p/basic}* 它已经走了，托丽尔。",
            '<25>{#p/toriel}{#f/9}* ...\n* 每次都是这样...'
         ]
      },
      terminal: {
         a: () =>
            postSIGMA()
               ? ["<32>{#p/human}* （你激活了终端。）\n* （上面什么消息也没有。）"]
               : SAVE.data.n.plot === 72
                  ? !world.runaway
                     ? [
                        '<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）',
                        "<32>{#p/alphys}* 各位！咱们自由啦！\n* 这不是在开玩笑，\n  那个力场真的消失啦！",
                        "<32>* 说真的，\n  他们过几天就要关闭核心了，\n  咱们得赶紧离开这儿！",
                        "<32>* 你们可不想死在这儿吧，啊？"
                     ]
                     : [
                        '<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）',
                        "<32>{#p/alphys}* 那道力场破碎了。\n* 请喊上全体居民迅速撤离。",
                        "<32>* ...你们都很害怕，我懂，\n  但很快就没事了。",
                        "<32>* 把那个人类丢下后，\n  那家伙伤不到我们的。"
                     ]
                  : 37.2 <= SAVE.data.n.plot
                     ? [
                        '<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）',
                        "<32>{#p/alphys}* 铸厂的流体网络修好了，\n  这多亏了我们... \n  那-那些非常热心的工人。",
                        '<32>* ...',
                        "<32>* 对了，说起来...\n  我们还-还在招募新人。"
                     ]
                     : [
                        '<32>{#p/human}* （你激活了终端。）\n* （上面有一条新消息。）',
                        "<32>{#p/alphys}* 铸厂的流体网络又-又断了。",
                        '<32>* 工人们承诺\n  很快就会恢复正常，\n  但真实情况看起来并不乐观。',
                        '<32>* 如-如果这附近现在有人，\n  请赶紧过来帮忙...'
                     ]
      },
      torieldanger: {
         a: ['<25>{#p/toriel}{#f/1}* 去看看那边的终端吧。'],
         b: ['<25>{#p/toriel}{#f/1}* 小家伙，终端就在那里。\n  去输下密码吧。']
      },
      latetoriel1: [
         '<25>{#p/toriel}{#npc/a}{#f/2}* ...！',
         '<25>{#f/5}* 你在这儿干什么，\n  我的孩...',
         '<25>{#f/9}* ...孩子...',
         '<25>{#f/5}* 孩子，\n  我不能再照顾你了。\n* 也不应该再照顾你了。',
         '<25>{#f/5}* 你还有很多地方要去，\n  很多事情要做...',
         '<25>{#f/10}* 我怎么能阻止你呢？',
         '<25>{#f/9}* ...',
         '<25>{#f/5}* 求你了，不要管我，\n  继续前进吧...',
         '<25>{#f/1}* ...我相信你会\n  做出正确的事的...'
      ],
      latetoriel2: ['<25>{#p/toriel}{#npc/a}{#f/5}* ...去吧...'],
      
      lateasriel: () =>
         [
            ['<25>{#p/asriel1}{#f/13}* 就让我一个人待着吧，\n  弗里斯克...', "<25>{#f/15}* 我不能跟你一起回去，\n  明白吗？"],
            [
               "<25>{#p/asriel1}{#f/16}* 我不想再伤他们的心了。",
               "<25>{#f/13}* 如果他们\n  永远都再见不到我，\n  那就更好了。"
            ],
            [
               '<25>{#p/asriel1}{#f/15}* ...你在干什么？',
               '<25>{#f/15}* 你是想陪陪我吗？',
               '<25>{#f/23}* 弗里斯克...',
               '<25>{#f/22}* ...',
               '<25>{#f/13}* 嘿。',
               '<25>{#f/13}* 我想问你个问题。',
               '<25>{#f/15}* 弗里斯克...\n* 你为什么要来这里？',
               '<25>{#f/13}* 大家都知道那个传说，\n  对吧...?',
               '<25>{#f/23}* “据说\n  飞进伊波特星域的飞船\n  都会消失不见。”',
               '<25>{#f/22}* ...',
               '<32>{#p/human}* （...）\n* （你告诉了艾斯利尔真相。）',
               '<25>{#p/asriel1}{#f/25}* ...',
               '<25>{#f/25}* 弗里斯克... 你...',
               '<25>{#f/23}* ...',
               "<25>{#f/23}* 你不用再孤身一人了，\n  好吗？",
               "<25>{#f/17}* 你在这里\n  交到了很多好朋友...",
               "<25>{#f/17}* 他们会照顾你的，好吗？"
            ],
            [
               '<25>{#p/asriel1}{#f/15}* ...',
               '<25>{#f/15}* 我知道为什么$(name)\n  要飞来这里。',
               "<25>{#f/16}* 那原因并不愉快。",
               "<25>{#f/13}* 弗里斯克。\n* 我跟你说实话吧。",
               '<25>{#f/15}* $(name)不想跟人类\n  有任何瓜葛。',
               '<25>{#f/16}* 至于为什么，\n  那家伙从来没说过。',
               '<25>{#f/15}* 但那种情绪非常强烈。'
            ],
            [
               "<25>{#p/asriel1}{#f/17}* 弗里斯克，没关系的。\n* 你和$(name)\n  一点也不一样。",
               '<25>{#f/15}* 说实话，\n  虽然你们的，\n  呃，穿衣风格很像...',
               "<25>{#f/13}* 但我也不知道\n  为什么以前会把你们\n  当成同一个人。",
               '<25>{#f/15}* 也许...\n* 真相是...',
               "<25>{#f/16}* $(name)和\n  我理想中的那种人\n  不太一样。",
               '<25>{#f/13}* 而你，弗里斯克...',
               "<25>{#f/17}* 你才是\n  我一直想要的那种朋友。",
               '<25>{#f/20}* 所以，我大概是把\n  对那家伙的期望\n  强加在你身上了。',
               "<25>{#f/17}* 是这样的。\n* 我变成星星的时候，\n  确实做了一些怪事。"
            ],
            [
               "<25>{#p/asriel1}{#f/13}* 我觉得还应该告诉你\n  最后一件事。",
               '<25>{#f/15}* 当时$(name)和我的\n  灵魂融合在一起时...',
               '<25>{#f/16}* 那副身躯的控制权\n  实际上是我们共有的。',
               '<25>{#f/15}* 是那个家伙抬起了\n  自己的那具空壳。',
               "<25>{#f/13}* 后来，当我们到达\n  星球的遗址时...",
               '<25>{#f/13}* 也是那家伙想要...',
               '<25>{#f/16}* ...使出我们的全部力量。',
               '<25>{#f/13}* 我拼尽全力\n  才阻止了那家伙。',
               '<25>{#f/15}* 再然后，因为我，\n  我们...',
               "<25>{#f/22}* 嗯，这就是为什么\n  我最后会变得那样。",
               '<25>{#f/23}* ...弗里斯克。',
               "<25>{#f/17}* 一直以来，我都在\n  因为那个决定而自责。",
               "<25>{#f/13}* 这就是为什么我会有\n  那种可怕的世界观。",
               '<25>{#f/13}* “不是杀人就是被杀。”',
               '<25>{#f/17}* 但现在...\n* 遇见你之后...',
               "<25>{#f/23}* 弗里斯克，\n  我不再后悔那个决定了。",
               '<25>{#f/22}* 我做了正确的事。',
               "<25>{#f/13}* 如果我们杀了那些人类...",
               '<25>{#f/15}* 我们就免不了\n  和全人类掀起战争了。',
               '<25>{#f/17}* 况且，\n  大家最后都自由了，\n  对吧？',
               '<25>{#f/17}* 甚至其他\n  来到这里的人类\n  也都活着出去了。',
               '<25>{#f/13}* ...',
               '<25>{#f/15}* 但是，$(name)...',
               "<25>{#f/16}* ...我不确定那家伙\n  在我们死后发生了什么。",
               '<25>{#f/15}* 什么都被没找到... \n  甚至连那家伙的灵魂\n  都没有。',
               "<25>{#f/15}* 所以... 我总是会想，\n  那家伙是否... \n  还活在某个地方。",
               '<32>{#p/basic}* ...',
               '<32>{#p/human}* （你听到有人在哭...）'
            ],
            [
               '<25>{#p/asriel1}{#f/17}* 弗里斯克，\n  谢谢你听我说了这么多。',
               '<25>{#f/17}* 你现在真的应该\n  去找你的朋友们了，\n  好吗？',
               '<25>{#f/13}* 哦，还有，\n  拜托了...',
               '<25>{#f/20}* 在未来的某一刻，\n  如果你，呃，\n  见到我的话...',
               "<25>{#f/15}* ...不要把他看作是我，\n  好吗？",
               '<25>{#f/16}* 我只希望你记住...\n  现在这样的我。',
               '<25>{#f/17}* 那个曾在你生命中\n  短暂出现过，作为\n  你的朋友而存在的我。',
               '<25>{#f/13}* ...',
               '<32>{|}{#p/human}* （你告诉艾斯利尔你真的{%}',
               "<25>{#p/asriel1}{#f/23}* 没关系的，弗里斯克。",
               "<25>{#f/22}* 你不是需要拯救所有人\n  才能成为好人的。",
               '<25>{#f/13}* 况且...\n  就算我能保持这个形态...',
               "<25>{#f/15}* 我也不知道我能不能\n  从过去的事中走出来。",
               "<25>{#f/17}* ...答应我\n  你会照顾好自己，\n  好吗？",
               '<25>{#f/13}* ...',
               '<25>{#f/15}* 嗯，再见。'
            ],
            ['<25>{#p/asriel1}{#f/13}* 弗里斯克...', "<25>{#f/15}* 你就没有更重要的事\n  可做吗？"],
            []
         ][Math.min(SAVE.data.n.lateasriel++, 8)],
      securefield: ['<33>{#p/basic}* 这里有一道安保屏障。\n* 已被激活。'],
      trivia: {
         w_security: ["<32>{#p/basic}* 一道安保屏障。"],
         photoframe: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* 空相框啊...',
                     '<25>{#f/16}* 以前，这些相框里\n  也都是有照片的。',
                     '<25>{#f/15}* 然后，\n  她把它们取出来了，\n  就再也没有放回去。',
                     "<25>{#f/16}* ...那些照片\n  即是只是看一两眼\n  也会很难受吧。"
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 空空的相框\n  就像消逝的记忆...',
                     '<25>{#p/asriel1}{#f/15}* 这地方有太多\n  这样的相框了。'
                  ],
                  ['<25>{#p/asriel1}{#f/22}* 这个怪地方\n  实在太多空相框了。']
               ][Math.min(asrielinter.photoframe++, 1)]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? ['<32>{#p/basic}* 仍然是个空相框。']
                  : ['<32>{#p/basic}* 一个空相框。'],
         w_paintblaster: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （这个装置看上去\n  已经过时好几十年了。）']
               : world.darker
                  ? ['<32>{#p/basic}* 毫无价值的摆设。']
                  : ['<32>{#p/basic}* 一台老旧的燃油喷射装置。'],
         w_candy: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （标牌上写着要小心机器故障。）']
               : ['<32>{#p/basic}* “请注意：\n   有的机器可能看起来没问题，\n   但内部已经坏了。”'],
         w_djtable: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你碰了碰打碟机。）\n* （它发出了一种莫名让人\n  感觉很爽的搓碟声。)']
               : world.darker
                  ? ["<32>{#p/basic}* 一台打碟机。"]
                  : SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}* 一台花哨的打碟机。\n  现在没人在用，有点出人意料。']
                     : ['<32>{#p/basic}* 一台花哨的打碟机，\n  装有各式各样的旋钮与滑块。'],
         w_froggit: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （打扰一下，人类。）',
                  '<32>* （看来你已经成为\n  一个很会为他人着想，\n  又很有担当的人了。）',
                  "<32>* （不管这有没有我的功劳...）\n* （我都为你感到骄傲。）",
                  '<32>* 呱呱。'
               ]
               : [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （打扰一下，人类...）',
                  '<32>* （我想给你几点对战怪物的建议。）',
                  '<32>* （如果你采取特定的{@fill=#ff0}行动{@fill=#fff}，\n  或用{@fill=#3f00ff}战斗{@fill=#fff}把他们揍到濒死...）',
                  '<32>* （他们估计就不想战斗了。）',
                  '<32>* （如果一个怪物不想战斗，那么...）',
                  '<32>* （就对它{@fill=#ff0}仁慈{@fill=#fff}一点吧，人类。）\n* 呱呱。'
               ],
         w_froggit_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你若有所思地望着\n  那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 真是奇怪啊，\n  盯着外太空看...",
                        '<32>* 居然是整理思绪的好办法。'
                     ]
                     : [
                        "<32>{#p/basic}* 这是外太空的一景。",
                        '<32>* 这附近肯定不缺这种东西，\n  是吧？'
                     ],
         w_kitchenwall: () =>
            SAVE.data.n.plot === 9
               ? ['<26>{#p/toriel}{#f/1}* 再等等就好，我的孩子！']
               : ['<26>{#p/toriel}{#f/1}* 给我点时间...'],
         w_lobby1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （标牌上写着\n  在困境中要保持意志坚定。）']
               : ['<32>{#p/basic}* “纵使曲折难行，\n   亦当砥砺奋进。”'],
         w_pacing_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你开心地望着那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 走了这么远的路后，\n  你似乎一点也不怕这块玻璃。",
                        '<32>* 其实你根本就从来没怕过吧。'
                     ]
                     : [
                        '<32>{#p/basic}* 想想看，\n  在你和无边无际的宇宙之间，\n  只有一块玻璃...',
                        "<32>* 尽管违背了常识，\n  但这似乎并没有困扰到你。"
                     ],
         w_pacing1: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （不久前有个人从这儿经过了。）',
                  '<32>* （他跟我说\n  别告诉你他要去哪儿。）',
                  "<32>* （我本来也不打算告诉你的，\n  但，他看起来太难过了...）",
                  "<32>* （他现在大概在\n  入口过去一点的那个平台上。）",
                  '<32>* （去吧。去跟他聊聊。\n  肯定会有好事发生的。）\n* 呱呱。',
                  '<32>{#p/basic}* ...艾斯利尔...'
               ]
               : [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （唉...）',
                  '<32>* （我的“朋友”并不愿意善待我。）',
                  '<32>* （相反，只要逮着机会，\n  他就会伤害我。）',
                  "<32>* （没错.......）\n* （伤害我吧............）\n* （................）",
                  "<32>* （至少你愿意善待我。）\n* 呱呱。"
               ],
         w_pacing2: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.b.oops
                  ? [
                     '<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）',
                     '<32>* （你有看到我的朋友吗？）',
                     '<32>* （几天前它还在这，\n  就站在我的左边...）',
                     '<32>* （但自打你来之后，\n  从某个时刻起，它就不见了。）',
                     "<32>* （它说过，如果你伤害了怪物\n  就会离开这里...）",
                     SAVE.data.n.exp <= 0
                        ? "<32>* （真奇怪，因为你根本\n  没伤害任何怪物啊。）\n* 呱呱。"
                        : '<32>* （如果有机会，\n  下次对他们好一点。如何？）\n* 呱呱。'
                  ]
                  : [
                     '<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）',
                     "<32>* （我的朋友现在开心得不得了。）",
                     "<32>* （它说过，如果你伤害了怪物\n  就会离开这里，\n  但你一直都没有这么做。）",
                     "<32>* （你猜怎么着，\n  它决定要永远留在我的左边。）",
                     '<32>* （至于它那个\n  总是想伤害它的“朋友”...）',
                     '<32>* （哦，他好像把自己\n  变成了一只羊。）\n* 呱呱。'
                  ]
               : [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人类...）',
                  '<32>* （你有尝试查看过\n  自己的“物品栏”吗？）',
                  "<32>* （你捡到过的东西，\n  都能在那里找到。）",
                  '<32>* （你问，我的物品栏都有什么？）',
                  "<32>* （哦，你可真傻... \n  怪物根本没有“物品栏”！）\n* 呱呱。"
               ],
         w_pacing3: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.n.bully < 1
                  ? [
                     '<32>{#p/basic}* 呱呱，呱呱。\n* （感谢你一直\n  对我们怪物这么宽容。）',
                     '<32>* （我知道我之前跟你说过\n  怎么安全地揍人...）',
                     "<32>* （但那不是说\n  我希望你真的去打架。）",
                     '<32>* （你真是个善良的人类。）\n* 呱呱。'
                  ]
                  : SAVE.data.n.bully < 15
                     ? [
                        '<32>{#p/basic}* 呱呱，呱呱。\n* （感谢你下手还算轻。）',
                        '<32>* （我知道我之前跟你说过\n  怎么安全地揍人...）',
                        "<32>* （但那不是说\n  我希望你真的去打架。）",
                        "<32>* （作为一个人类，\n  你还不算太糟糕。）\n* 呱呱。"
                     ]
                     : [
                        '<32>{#p/basic}* 呱呱，呱呱。\n* （看来你确实\n  是个危险的家伙啊。）',
                        "<32>* （但是，不知怎么，\n  我还是不怕你...）",
                        '<32>* （可能是因为在最后关头，\n  你明明都可以继续打下去，\n  却还是手下留情了吧。）',
                        '<32>* （你能控制住自己，\n  这一点我还是要感谢你。）\n* 呱呱。'
                     ]
               : [
                  "<32>{#p/basic}* 呱呱，呱呱。\n* （如果你把一只怪物打到了\n  濒死的程度...）",
                  '<32>* （它的名字就会变成{@fill=#3f00ff}蓝色{@fill=#fff}。）',
                  '<32>* （很奇怪，对吧？）\n* （但我听说，人类被打了之后\n  也会变{@fill=#3f00ff}蓝{@fill=#fff}受呢。）',
                  '<32>* （所以我觉得，\n  你应该是可以联想得到的。）',
                  '<32>* （那么，感谢你花时间\n  听我唠叨这些。）\n* 呱呱。'
               ],
         w_puzzle1_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你投入地望着那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}* 到头来，\n  这些房间除了当瞭望台，\n  好像也没啥别的用处了。']
                     : [
                        '<32>{#p/basic}* 为什么总感觉有些房间...',
                        '<32>* ...单纯是用来当瞭望区的呢？'
                     ],
         w_puzzle2: () =>
            SAVE.data.b.svr
               ? world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                     '<32>{#p/human}* （标牌上写着\n  解谜对于太空探索来说没啥用。）',
                     ...[
                        [
                           '<25>{#p/asriel1}{#f/13}* 不像别的标牌，\n  这块标牌写的可是大实话。',
                           "<25>{#f/15}* 我可不是因为这是我写的\n  才这么说的啊。"
                        ],
                        ["<25>{#p/asriel1}{#f/3}* ...别告诉我\n  你真喜欢这些谜题。"],
                        ["<25>{#p/asriel1}{#f/10}* 弗里斯克，\n  就算是你\n  也不会怪到这种地步吧。"]
                     ][Math.min(asrielinter.w_puzzle2++, 2)]
                  ]
                  : ['<32>{#p/human}* （标牌上写着\n  耐心在太空中的重要性。）']
               : world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                     '<32>{#p/basic}* “浩渺长空，恰似深邃海洋。”',
                     '<32>* “探索这片海洋的时候，可不能被\n   那些糟糕透顶的谜题给难住！”'
                  ]
                  : [
                     '<32>{#p/basic}* “浩渺长空，恰似深邃海洋。”',
                     '<32>{#p/basic}* “风平浪静，{@fill=#00a2e8}静待{@fill=#fff}暗流涌动，\n   波涌潮启，{@fill=#ff993d}启程{@fill=#fff}无垠长空。”'
                  ],
         w_puzzle3_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你陷入沉思，\n  望着那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}* 景色... 曾经... 确实不错。']
                     : ['<32>{#p/basic}* 景色确实不错。'],
         w_puzzle4: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （标牌上写着\n  关于牛排促销的过时广告）']
               : [
                  '<32>{#p/basic}* “赶紧前往活动室品尝\n   老滑头的招牌牛排(TM)吧！”'
               ],
         w_ta_box: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/20}* 是啊... \n  托丽尔从来不收拾\n  这些东西。',
                     '<25>{#f/21}* 连我的那些\n  星际飞船模型的仿制品\n  都被弄坏了...'
                  ],
                  [
                     "<25>{#f/13}* 我是挺意外的。\n* 她平时可是个\n  很有条理的人。",
                     '<25>{#p/asriel1}{#f/17}* ...她那天心情肯定很不好。'
                  ],
                  ['<25>{#p/asriel1}{#f/13}* 这种事难免啊...']
               ][Math.min(asrielinter.w_ta_box++, 2)]
               : world.darker
                  ? ["<32>{#p/basic}* 一个玩具盒。\n* 里面的星际飞船模型\n  都被砸得粉碎。"]
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/basic}* 盒子里的飞船一直没被修好。',
                        "<32>* 如果这是在艾斯戈尔房子里的\n  那些飞船，可就会完好无损。"
                     ]
                     : [
                        '<32>{#p/basic}* 一盒星际飞船模型！\n* 以及... 玻璃碎片？',
                        '<32>* 看起来应该有人把小飞船摔碎了。'
                     ],
         w_ta_cabinet: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你在这里面找到了\n  几套一模一样的衣服，\n  除此之外什么也没有。）"]
               : [
                  '<32>{#p/basic}* 衣柜里挂满了黄蓝条纹衫。',
                  ...(SAVE.data.n.plot === 72 ? ["<32>* 看来这永远也不会换换样啊。"] : [])
               ],
         w_ta_frame: () =>
            SAVE.data.b.svr
               ? [["<25>{#p/asriel1}{#f/21}* ...不见了..."], ['<25>{#p/asriel1}{#f/21}* ...']][
               Math.min(asrielinter.w_ta_frame++, 1)
               ]
               : SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}* 一个空相框。', "<32>* 仍然没什么好说的。"]
                  : ['<32>{#p/basic}* 一个空相框。', "<32>* 没什么好说的。"],
         w_ta_paper: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* （这幅画看上去没什么特别的。）",
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/13}* 虽然现在找不到了，\n  不过我以前\n  在这里画的画...",
                        '<25>{#f/17}* ...基本上就是我\n  “主宰死亡的绝对神祇”\n  形态的设计图。',
                        '<25>{#f/17}* 裂空飞星，泰坦巨刃...',
                        '<25>{#f/20}* 当然了，\n  还有那个传奇般的\n  “终极毁灭”。'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/17}* 是啊...\n  看来我那时候\n  就全都计划好了。',
                        '<25>{#f/20}* 我那时候总是想出\n  各种稀奇古怪的东西...',
                        '<25>{#f/1}* 噢，你肯定会喜欢\n  我设计的\n  泛银河系星舰的。'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/17}* 弗里斯克，我希望...',
                        '<25>{#f/23}* 我真的希望我们也能有\n  像那样的时刻。',
                        '<25>{#f/22}* 以前和$(name)\n  在一起的时候，\n  总是会...',
                        '<25>{#f/15}* ...很难相处。'
                     ],
                     ["<25>{#p/asriel1}{#f/20}* 别担心。\n* 如果你不会画画，\n  我可以教你。"]
                  ][Math.min(asrielinter.w_ta_paper++, 3)]
               ]
               : world.darker
                  ? ['<32>{#p/basic}* 平平无奇的画。\n* 和原型一点都不像。']
                  : [
                     "<32>{#p/basic}* 这是一幅儿童画，\n  上面画了一个长着彩虹翅膀的\n  巨大怪物。",
                     "<32>* 很像家里的那只..."
                  ],
         w_tf_couch: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （这张沙发看起来从来没被用过。）']
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* 估计这辈子\n  都不会有人来这儿坐了。"]
                  : world.darker
                     ? ["<32>{#p/basic}* 一张沙发。\n* 难道你还有别的事要做吗？"]
                     : [
                        '<32>{#p/basic}* 一张看起来很舒适的沙发。',
                        '<32>* 很难抗拒陷入柔软坐垫的\n  甜蜜诱惑中。'
                     ],
         w_tf_table: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你瞥了一眼茶几，\n  不过它好像没看回你。）"]
               : [
                  '<32>{#p/basic}* 一张毫不起眼的茶几。',
                  "<32>{#p/basic}* 不可思议的是，它几乎是崭新的。"
               ],
         w_tf_window: () =>
            SAVE.data.b.svr
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ['<32>{#p/human}* （你憧憬地望着那浩瀚的宇宙...）']
                  : ['<32>{#p/human}* （你惆怅地望着那浩瀚的宇宙...）']
               : world.darker
                  ? ["<32>{#p/basic}* 又一扇窗而已。"]
                  : SAVE.data.n.plot === 72
                     ? ["<32>{#p/basic}* 外太空的景色跟以往一样不错。"]
                     : ["<32>{#p/basic}* 外太空的景色真不错。"],
         w_th_door: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （标牌上写着\n  这里的房间还没翻修完。）',
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/3}* 如果这是\n  原型的那座房子的话...\n  那位置就是爸爸的房间了。",
                        '<25>{#f/4}* 你应该能猜到这房间\n  为啥一直没翻修完吧。'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* ...',
                        '<25>{#f/15}* 那场演讲对妈妈的影响...\n  不太好。',
                        '<25>{#f/4}* 那会儿我变成星星的时候，\n  有时候... \n  会偷偷看着她。',
                        "<25>{#f/3}* 她说话的样子，\n  感觉就像\n  还停留在那一刻似的。",
                        '<25>{#f/13}* 后来你来了，\n  一切都变了...'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* ...',
                        "<25>{#f/15}* 气氛有点尴尬啊。\n* 我还是假装\n  我们没来过这里吧。"
                     ],
                     ['<25>{#p/asriel1}{#f/13}* ...']
                  ][Math.min(asrielinter.w_th_door++, 3)]
               ]
               : ['<32>{#p/basic}* “房间翻修中。”'],
         w_th_mirror: () =>
            SAVE.data.b.svr
               ? ["<25>{#p/asriel1}{#f/24}* 这是我们..."]
               : world.genocide
                  ? ['<32>{#p/basic}* ...']
                  : world.darker
                     ? ["<32>{#p/basic}* 这是你。"]
                     : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
                        ? ["<32>{#p/basic}* 这是你...", '<32>{#p/basic}* ...而且，永远都会是你。']
                        : ["<32>{#p/basic}* 这是你！"],
         w_th_plant: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你感谢这株植物\n  每天都带来了温暖。）']
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* 这株植物很高兴看到你还活着。"]
                  : world.darker
                     ? ['<32>{#p/basic}* 这株植物不想见到你。']
                     : SAVE.data.b.oops
                        ? ['<32>{#p/basic}* 这株植物很开心见到你。']
                        : ['<32>{#p/basic}* 这株植物见到你非常激动！'],
         w_th_sausage: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你拨弄了一下\n  这株忧玉的植物。）']
               : ['<32>{#p/basic}* 这株忧玉的植物一点都不米人。'],
         w_th_table1: () => [
            '<32>{#p/human}* （你在桌子底下找到了一套蜡笔。）',
            ...(SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/24}* 我感觉$(name)可能\n  把蓝色的蜡笔弄丢了。',
                     '<25>{#f/7}* ...不对，不是可能。\n* 是肯定弄丢了。',
                     '<25>{#f/6}* 后来那根蜡笔\n  在食物箱里找到了，\n  但谁也没想到要去那里找。',
                     '<25>{#f/16}* 那家伙肯定是想\n  把食物箱占为己有。'
                  ],
                  [
                     "<26>{#p/asriel1}{#f/4}* 要是以后\n  我们再买新的蜡笔，\n  我可得盯紧点。",
                     '<25>{#f/3}* 你要是敢打蜡笔的主意...',
                     "<26>{#f/8}* 我就会在第一时间\n  打碎你的小算盘。",
                     '<25>{#f/2}* 你就等着瞧吧。'
                  ],
                  ["<25>{#p/asriel1}{#f/31}* 我可在用眼睛\n  死死盯着你呢，\n  弗里斯克。", '<25>{#f/8}* 以及...\n  可能还得竖起耳朵听着。'],
                  ['<25>{#p/asriel1}{#f/10}* 你又在盯着我的耳朵看？\n* 你怎么老这样！']
               ][Math.min(asrielinter.w_th_table1++, 3)]
               : world.edgy
                  ? ['<32>{#p/basic}* 少了两支。']
                  : world.darker
                     ? ['<32>{#p/basic}* 少了一支。']
                     : [
                        '<32>{#p/basic}* 那支永远不知所踪的蓝色蜡笔，\n  已经丢了一百年了...',
                        '<32>{#p/basic}* 真可谓我们这时代的传奇。'
                     ])
         ],
         w_th_table2: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                  ...[
                     [
                        '<25>{#p/asriel1}{#f/27}* $(name)和我其实\n  从来都不怎么玩这种东西。',
                        '<25>{#p/asriel1}{#f/15}* 呃...\n  好吧，也不能说是“从来”。',
                        "<25>{#p/asriel1}{#f/15}* 算了，\n  还是别提这茬了。"
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* ...',
                        '<25>{#p/asriel1}{#f/13}* 上次我们玩这个，\n  桌子都给掀翻了。',
                        '<25>{#p/asriel1}{#f/17}* 亲人之间嘛。\n* 你懂的，\n  玩牌的时候就容易这样。'
                     ],
                     ['<25>{#p/asriel1}{#f/17}* ...']
                  ][Math.min(asrielinter.w_th_table2++, 2)]
               ]
               : world.darker
                  ? [
                     '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                     "<33>{#p/basic}* 你不想浪费时间玩牌。"
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                        "<33>{#p/basic}* 很快，我们就再也不用想这些事了。"
                     ]
                     : [
                        '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                        "<33>{#p/basic}* 当然是全息款式的。"
                     ],
         w_tk_counter: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （你用手摸了摸砧板，\n  感觉上面坑坑洼洼的。）'
               ]
               : world.darker
                  ? ["<32>{#p/basic}* 一块砧板。"]
                  : ["<32>{#p/basic}* 托丽尔的砧板。\n  上面已经有一些使用的痕迹了。"],
         w_tk_sink: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/21}* $(name)总是说\n  有毛掉进下水道里\n  超级恶心。',
                     '<25>{#f/15}* 不过我一直觉得\n  这很正常啊...'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 难道人类不掉毛吗？\n* 这事$(name)\n  从来都没跟我说清楚。'
                  ],
                  ["<25>{#p/asriel1}{#f/17}* 我有理由相信\n  人类也会掉毛的。\n* 不掉毛也得掉点别的。"]
               ][Math.min(asrielinter.w_tk_sink++, 2)]
               : SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}* 到现在还能看到\n  那时候堵在这儿的白色的毛。']
                  : ['<32>{#p/basic}* 一团白色的毛堵在下水管里。'],
         w_tk_stove: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* 我真搞不懂她为啥觉得\n  买这玩意儿好。',
                     "<25>{#f/10}* 难道是想还原\n  艾斯戈尔的厨房...？",
                     "<25>{#f/17}* 明明说不喜欢他，\n  结果还整这出，\n  她真够奇怪的。"
                  ],
                  [
                     '<25>{#p/asriel1}{#f/15}* 有时候我真希望\n  托丽尔和艾斯戈尔\n  能重归于好。',
                     "<25>{#f/16}* ...仔细想想，\n  也许分开才是最好的。"
                  ],
                  ["<25>{#p/asriel1}{#f/13}* 弗里斯克，\n  有些事情\n  就是强求不来的..."]
               ][Math.min(asrielinter.w_tk_stove++, 2)]
               : SAVE.data.n.state_wastelands_toriel === 2
                  ? ["<32>{#p/basic}* 只是个灶台。\n* 没人会再用它了。"]
                  : world.darker
                     ? ["<32>{#p/basic}* 只是个灶台。"]
                     : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* 灶台非常干净。\n* 托丽尔到了新世界\n  也不用换新的了。']
                        : ['<32>{#p/basic}* 灶台非常干净。\n* 托丽尔肯定是用火魔法做饭的。'],
         w_tk_trash: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...)"]
               : SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}* 垃圾桶被清空了，\n  还挺有象征意义的。']
                  : ['<32>{#p/basic}* 里面有一张揉皱的星花茶配方。'],
         
         w_tl_azzychair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你注意到这把餐椅相当之大。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 大餐椅。']
                  : ["<32>{#p/basic}* 托丽尔家有几把餐椅，\n  这把，是王后的餐椅。"],
         w_tl_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （书架上放着关于蜗牛冷知识的书，\n  关于一个祖传秘方的书，\n  以及关于园艺技巧的书。）'
                  ]
                  : [
                     "<32>{#p/basic}* 一个书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* “你知道吗？\n   蜗牛的齿舌长得像链锯一样。”',
                     '<32>* “这可是个冷知识。”',
                     '<32>* “还有个趣事：蜗牛成熟后\n   会把自己的消化系统翻出来。”',
                     '<32>* “哦，顺带一提...”',
                     '<32>* “蜗牛的 {^5}说 {^5}话 {^5}速 {^5}度 {^5}很 {^5}慢。”',
                     '<32>* “开玩笑的，它们才不会说话。”',
                     '<32>* “你能想象，在某个世界，\n   那里的蜗牛会说话吗？”\n* “反正我是想象不出来。”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （书架上放着关于蜗牛冷知识的书，\n  关于一个祖传秘方的书，\n  以及关于园艺技巧的书。）'
                  ]
                  : [
                     "<32>{#p/basic}* 一个书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* 《逐梦家族的美味秘笈：蜗牛派》',
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
                  ? [
                     '<32>{#p/human}* （书架上放着关于蜗牛冷知识的书，\n  关于一个祖传秘方的书，\n  以及关于园艺技巧的书。）'
                  ]
                  : [
                     "<32>{#p/basic}* 一个书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* “哈喽，热爱园艺的朋友们！”',
                     '<32>* “说到星花，它们生长与否的关键...”',
                     '<32>* “在于能否直接接触到宇宙射线。”',
                     '<32>* “所以它们多生长于空境。”',
                     '<32>* “毕竟在整个空间站中，\n   当属那里最为开阔。”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ]
         ),
         
         w_tl_goreychair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你注意到这把餐椅比较小。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 小餐椅。']
                  : world.genocide
                     ? ["<32>{#p/basic}* 托丽尔家有几把餐椅，\n  这把，是恶魔的餐椅。"]
                     : world.darker
                        ? ["<32>{#p/basic}* 托丽尔家有几把餐椅，\n  这把，是王子的餐椅。"]
                        : SAVE.data.b.oops
                           ? ["<32>{#p/basic}* 托丽尔家有几把餐椅，\n  这把，是小孩的餐椅。\n* 很适合你！"]
                           : ["<32>{#p/basic}* 托丽尔家有几把餐椅，\n  这把... 是某个小天使的餐椅。\n* 说的就是你！"],
         w_tl_table: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （这株植物好像\n  只是用来观赏的。）']
               : world.darker
                  ? ['<32>{#p/basic}* 一株观赏植物。\n* 仅此而已。']
                  : ["<32>{#p/basic}* 一株摆在托丽尔餐桌上的\n  观赏植物。"],
         w_tl_tools: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/20}* $(name)以前总喜欢\n  把这些东西当成乐器玩。',
                     '<25>{#f/17}* 这人会把它们拿出来，\n  然后开始“演奏”...',
                     '<25>{#f/20}* 有一次，我跟着一起玩，\n  我们还用拨火棍\n  来了个二重奏。',
                     '<26>{#f/13}* 我们开始用嗓子\n  模仿乐器的声音，\n  然后...',
                     '<25>{#f/17}* 爸爸妈妈也走了进来，\n  给我们唱起了和声！'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 结果，\n  不知道谁在外面\n  听到了我们的演奏。',
                     '<25>{#f/15}* 没过多久，\n  一大群怪物\n  就涌进了我们家里...',
                     '<25>{#f/17}* $(name)和我还在房间中央，\n  继续“演奏”着。',
                     '<25>{#f/20}* 但我们身后一下子\n  多了一整支乐队！',
                     '<25>{#f/17}* We must have performed half of the Harmonexus Index that day.',
                     "<25>{#f/17}* ...那是一本古老的歌集，\n  里面都是\n  我们的传统歌曲。"
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 这一切都源于\n  我们把拨火棍\n  当成了乐器...',
                     '<25>{#f/17}* 人们常说任何东西\n  都能变成乐器。',
                     '<25>{#f/13}* ...',
                     "<25>{#f/15}* 等下...\n* 我也是个“东西”..." 
                  ],
                  ["<25>{#p/asriel1}{#f/20}* 拜托，\n  可别把我也当成乐器了。"]
               ][Math.min(asrielinter.w_tl_tools++, 3)]
               : world.darker
                  ? ['<32>{#p/basic}* 拨火棍。']
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 它们只是些拨火棍...\n* ...吗？",
                        "<32>* 想想看，\n  托丽尔的火焰一点也不烫，\n  反而很温暖。",
                        '<32>* 她根本不需要这些东西啊？',
                        '<32>* 看吧，通过排除法就能发现\n  这些东西其实是高级乐器。'
                     ]
                     : [
                        '<32>{#p/basic}* 一架高级的乐器。',
                        '<32>* 但仔细一看，你会发现\n  这就是一些拨火棍。',
                        "<32>* 很难说，这些工具给人的感觉好像...",
                        '<32>* 是在前哨站建立之前就做出来了的。'
                     ],
         
         w_tl_torichair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你注意到这把餐椅异常之大。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 餐椅王。']
                  : ["<32>{#p/basic}* 托丽尔家有几把餐椅，\n  这把，是国王的餐椅。"],
         w_toriel_toriel: () => [
            "<32>{#p/basic}* 锁住了。",
            toriSV()
               ? SAVE.data.n.plot < 17.001
                  ? '<32>{#p/basic}* 听起来托丽尔在哭...'
                  : '<32>{#p/basic}* 听起来托丽尔睡着了...'
               : '<32>{#p/basic}* 听起来托丽尔在写东西...'
         ],
         w_tt_bed: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （这张床看起来比以前小了不少。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ["<32>{#p/basic}* 一张床。"]
                  : SAVE.data.n.plot < 72 || world.runaway
                     ? [
                        "<32>{#p/basic}* 托丽尔的床。",
                        ...(world.darker ? [] : ['<32>* 对你来说有点太大了。'])
                     ]
                     : [
                        "<32>{#p/basic}* 托丽尔的床。",
                        "<32>* 你现在对于这床来讲还是小了点，\n  不过你以后会长大的。"
                     ],
         w_tt_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （书架上放着历史学书、生物学书，\n  以及关于一个不祥的可能性的书。）'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "<32>{#p/basic}* 一个书架。"
                        : "<32>{#p/basic}* 这是托丽尔的私人书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* “我们家破人亡，生灵涂炭，\n   但这一切的起因是什么呢？”',
                     '<32>* “人类不会无缘无故攻击我们。”',
                     '<32>* “但是，我们潜在的力量\n   真的如此强大...”',
                     '<32>* “强大到可以对人类\n   造成实质威胁的地步吗？”',
                     '<32>* “不管真相如何，\n   此时我们已经走投无路，陷入绝境。”',
                     '<32>* “唯有投降，才有一丝生的希望。”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （书架上放着历史学书、生物学书，\n  以及关于一个不祥的可能性的书。）'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "<32>{#p/basic}* 一个书架。"
                        : "<32>{#p/basic}* 这是托丽尔的私人书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* “‘王级怪物’出生时，\n   会与父母之间建立起一条魔法纽带。”',
                     '<32>* “靠着这条纽带，王级怪物\n   获得自己的灵魂，他的父母则会\n   随着孩子成长而逐渐衰老。”',
                     '<32>* “成年王级怪物的灵魂，\n   具有怪物界最强大的力量。”',
                     '<32>* “强大到足以在肉体死后\n   仍能短暂存续。”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （书架上放着历史学书、生物学书，\n  以及关于一个不祥的可能性的书。）'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "<32>{#p/basic}* 一个书架。"
                        : "<32>{#p/basic}* 这是托丽尔的私人书架。",
                     '<32>{#p/human}* （你取下了一本书...）',
                     '<32>{#p/basic}* “我们常常担心，面对人类突然袭击，\n   会是何种后果。”',
                     '<33>* “但却很少想过，倘若同胞自相残杀，\n   又该如何应对。',
                     '<32>* “即使联合起来，能否彻底平息叛乱，\n   仍是个未知数。”',
                     '<32>* “不过此等担忧，\n   或许只是杞人忧天？”',
                     '<32>{#p/human}* （你把书放回了书架。）'
                  ]
         ),
         w_tt_cactus: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （这株仙人掌好像让你想起了\n  某个以前认识的人。）']
               : SAVE.data.n.plot < 72
                  ? world.darker
                     ? ['<32>{#p/basic}* 终于，发现一株很像我们的植物。']
                     : ['<32>{#p/basic}* 啊，是仙人掌。\n* 确实是最傲娇的植物。']
                  : ["<32>{#p/basic}* 这仙人掌又不是在等你回来什么的..."],
         w_tt_chair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （对它的主人来说，\n  这个椅子似乎有点小。）']
               : world.darker
                  ? ["<32>{#p/basic}* 一把靠椅。"]
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 托丽尔的专用阅读椅...",
                        "<32>* ...至少在艾斯戈尔看上它之前是。",
                        "<32>* 他一直想要这个靠椅。\n* 如果他不打算把它带走，\n  我反倒觉得奇怪呢。"
                     ]
                     : ["<32>{#p/basic}* 托丽尔的专用阅读椅。", '<32>* 懒骨头的味道扑面而来。'],
         w_tt_diary: pager.create(
            0,
            ...[
               [
                  '<32>{#p/human}* （你看了看圈起来的段落。）',
                  '<32>{#p/toriel}{#f/21}* “提问：为什么骷髅\n   想交朋友呢？”',
                  '<32>* “答案：因为他感觉很骨独...”',
                  '<32>{#p/basic}* 再往下的笑话也是同样的水准。'
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  '<32>{#p/toriel}{#f/21}* “提问：骷髅的坏习惯\n   又可以叫做什么？”',
                  '<32>* “答案：对髅空的追求...”',
                  "<32>{#p/basic}* 再读下去就没有意义了。"
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  '<32>{#p/toriel}{#f/21}* “提问：骷髅是怎么\n   跟别人道别的呢？”',
                  '<32>* “答案：骨德拜...”',
                  "<32>{#p/basic}* 这个感觉一点都不好笑。"
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  "<32>{#p/basic}* 这些蹩脚的双关笑话\n  你怎么看都不嫌多。",
                  '<32>{#p/toriel}{#f/21}* “提问：为什么骷髅睡觉时\n   会流口水？”',
                  '<32>* “答案：因为它正在做\n   ‘骨’感的梦...”',
                  '<32>{#p/basic}* 这笑话已经过时了...'
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  "<32>{#p/basic}* 你还是看不够这些\n  蹩脚的双关笑话。",
                  '<32>{#p/toriel}{#f/21}* “提问：骷髅打架之前\n   会说什么呢？”',
                  '<32>* “答案：我要把你揍到骨质疏松...”',
                  "<32>{#p/basic}* 什么鬼？\n* 这个都不是双关了好吧！"
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  "<32>{#p/basic}* 我们的脑细胞要不够用了...",
                  "<32>{#p/toriel}{#f/21}* “‘把门带上了吗？’\n   一位骷髅问。”",
                  '<32>* “‘我正扛着呢。’”',
                  '<32>{#p/basic}* ...\n* 我没话可说了。'
               ],
               [
                  '<32>{#p/human}* （你看向书中最后的段落。）',
                  "<32>{#p/basic}* 嗯？\n* 这一段不是笑话...",
                  '<32>{#p/toriel}{#f/21}* “就在今天，\n   一个人类抵达了外域。”',
                  '<32>* “我相信衫斯能照看好这个人类，\n   但我不太想拿这事为难他...”',
                  '<32>* “而且...”',
                  '<32>* “前哨站其他地方都危险重重... \n   区区一个皇家哨兵，\n   真的能保护好人类吗？”',
                  '<32>* “希望这些疑虑随时间\n   烟消云散吧。”',
                  '<32>{#p/basic}* ...'
               ],
               ['<32>{#p/human}* （再往后，就都是空白了。）']
            ].map(
               lines => () =>
                  SAVE.data.b.svr
                     ? ['<32>{#p/human}* （这本日记里好像都是些\n  关于骷髅的离谱双关笑话。）']
                     : SAVE.data.n.plot === 72
                        ? [
                           '<32>{#p/human}* （你读了读新写的段落。）',
                           '<32>{#p/toriel}{#f/21}* “看来我之前误解艾斯戈尔了。”',
                           '<32>* “我没有去勇敢地面对他，\n   也就没能弄清楚\n   事实上发生了什么。”',
                           '<32>* “我果然不配做一个母亲。”',
                           '<32>* “不过现在...\n   我可以学着去体会母爱的真谛。”',
                           '<32>* “这事不能让别人插手，\n   得我自己慢慢来。”'
                        ]
                        : world.darker
                           ? ["<32>{#p/basic}* 这是本日记，\n  你在里面找不到任何笑点。"]
                           : SAVE.data.n.plot < 14
                              ? lines
                              : [
                                 '<32>{#p/human}* （你读了读最近写的段落。）',
                                 ...(world.edgy
                                    ? ["<32>{#p/basic}* 已经被用蜡笔涂掉了。"]
                                    : toriSV()
                                       ? [
                                          '<32>{#p/toriel}{#f/21}* “今天并不顺遂。”',
                                          '<32>* “又有一个人类失去了\n   我的照顾...”',
                                          '<32>* “他需要第七个，\n   也就是最后一个人类灵魂\n   来打破力场。”',
                                          '<32>* “我不应该允许\n   这样的事情发生。”',
                                          '<32>* “赌注如此之高，\n   冲突可能已经无法避免...”'
                                       ]
                                       : [
                                          '<32>{#p/toriel}{#f/21}* “坦率来讲，今天是有趣的一天。”',
                                          '<32>* “一个人类来到了这里...”',
                                          '<32>* “接着，试图离开...”',
                                          '<32>* “然后，最奇怪的事情发生了。”',
                                          '<32>* “我一直都很需要这句提醒啊...”'
                                       ])
                              ]
            )
         ),
         w_tt_plant: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （这盆栽在你看来\n  真是普通得不能再普通了。）']
               : ["<32>{#p/basic}* 这是个盆栽。", '<32>* 有必要说别的吗？'],
         w_tt_trash: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...)"]
                  : world.darker
                     ? ['<32>{#p/basic}* 蜗牛。']
                     : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* 这些蜗牛开始散发出...\n  幽灵般的气味。', '<32>* ...这意味着什么呢？']
                        : [
                           "<32>{#p/basic}* 这是托丽尔的私人垃圾桶，\n  里面有...",
                           '<32>* 蜗牛。',
                           '<32>* 更多的蜗牛。'
                        ],
            pager.create(
               1,
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蜗牛。']
                        : SAVE.data.n.plot === 72
                           ? ['<32>{#p/basic}* 也许这就是蜗牛\n  过了保质期后的\n  生存方式。']
                           : ['<32>{#p/basic}* 除了蜗牛就没别的了。'],
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蜗牛。']
                        : SAVE.data.n.plot === 72
                           ? ["<32>{#p/basic}* 或者可能是我彻底疯了。"]
                           : ['<32>{#p/basic}* ...\n* 我刚刚说到了蜗牛吗？'],
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蜗牛。']
                        : SAVE.data.n.plot === 72
                           ? ['<32>{#p/basic}* 又或者...', '<32>* ...等等，我刚才说到哪儿了？']
                           : ['<32>{#p/basic}* 蜗牛。'],
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出来垃圾桶里有什么...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蜗牛。']
                        : SAVE.data.n.plot === 72
                           ? ["<32>{#p/basic}* 哦，对了。\n* 蜗牛们这股幽灵般的气味\n  到底意味着什么。"]
                           : ['<32>* 更多的蜗牛。']
            )
         ),
         w_tutorial_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你兴奋地望着那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : ['<32>{#p/basic}* 这是外域这一带的第一扇窗。'],
         w_tutorial1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （标牌上写着一段好的关系\n  应该具备怎样的品质。）']
               : [
                  '<32>{#p/basic}* “有了信任与善意，\n   方能携手并进，共筑友谊。”',
                  ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                     ? ['<26>{#p/asriel2}{#f/8}* 真是够矫情的。']
                     : [])
               ]
      },
      piecheck: () =>
         SAVE.data.b.svr
            ? [
               [
                  "<25>{#p/asriel1}{#f/17}* 妈妈做的派\n  永远是最好吃的...",
                  '<25>{#f/13}* 我到现在还记得\n  第一次吃她做的派时\n  是什么感觉。',
                  "<25>{#f/15}* 我从来没有\n  因为吃一口东西\n  而感到那么幸福过...",
                  "<25>{#f/17}* ...好吃到\n  我都感觉自己要升天了。"
               ],
               [
                  "<25>{#p/asriel1}{#f/20}* 呃，\n  我说的可能有点夸张了。",
                  "<25>{#f/17}* 但是弗里斯克啊，\n  我跟你讲...",
                  '<25>{#f/13}* ...无论爸爸妈妈\n  会怎么样...',
                  '<25>{#f/17}* 你都一定要让她\n  帮我做个派。',
                  "<25>{#f/20}* 我... 有点好奇，\n  经历了这么多事之后，\n  我还爱不爱吃她的派。"
               ],
               ['<25>{#p/asriel1}{#f/15}* 毕竟，\n  确实过了很久了嘛...']
            ][Math.min(asrielinter.piecheck++, 2)]
            : SAVE.data.n.plot < 8
               ? world.darker
                  ? ["<32>{#p/basic}* 这只是个台面。"]
                  : ['<32>{#p/basic}* 台面上有一块\n  几乎看不见的环形污渍。']
               : SAVE.data.n.state_wastelands_mash === 1 && SAVE.data.n.plot > 8
                  ? ['<32>{#p/basic}* 一块被打烂的派的幽灵\n  在台面上萦绕着。']
                  : SAVE.data.n.plot === 72
                     ? SAVE.data.n.state_wastelands_mash > 0
                        ? ['<32>{#p/basic}* 无论过了多久时间，\n  这桩暴行都不会被抹去。']
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? ['<32>{#p/basic}* 一种强烈的念头阻止了你，\n  你只能让派保持原样。']
                           : world.runaway
                              ? [
                                 '<32>{#p/basic}* 你可能曾是个恶霸，\n  但这个派依然完好无损。',
                                 '<32>{#p/basic}* 可能即使对你来说，\n  有些东西也是神圣不可侵犯的。'
                              ]
                              : [
                                 world.meanie
                                    ? '<32>{#p/basic}* 这个派可能被你吓到了，\n  但过了这么久...'
                                    : '<32>{#p/basic}* 这个派的尺寸\n  可能不再让你感到害怕了，\n  但过了这么久...',
                                 "<32>{#p/basic}* 你已经对这个派\n  产生了一种敬畏之情，\n  让你无法下口。"
                              ]
                     : SAVE.data.n.state_wastelands_mash > 0
                        ? ['<32>{#p/basic}* 这里已经没有什么可做的了。']
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? ['<32>{#p/basic}* 一种强烈的念头阻止了你，\n  你只能让派保持原样。']
                           : world.meanie
                              ? [
                                 '<32>{#p/basic}* 这个派的尺寸\n  根本吓不到你。',
                                 '<32>{#p/basic}* 事实上，\n  你可能都吓到它了...',
                                 choicer.create('* （要打烂它吗？）', "打烂", "算了")
                              ]
                              : ['<32>{#p/basic}* 这个派的尺寸吓得你完全不敢吃它。'],
      piesmash1: ['<32>{#p/human}* （你放了它一马。）'],
      piesmash2: ['<32>{#p/human}* （你挥下了你的武器...）'],
      piesmash3: ["<32>{#p/basic}* 派已经被彻底毁掉了。"],
      tutorial_puzzle1: [
         '<25>{#p/toriel}* 跟之前的不一样，\n  这个谜题稍稍有一些不同。',
         '<25>{#f/1}* 虽然不算特别常见，\n  但前哨站的一些谜题...'
      ],
      tutorial_puzzle2: [
         '<25>{#p/toriel}* ...需要另一个怪物的协助\n  才能解决。',
         '<25>{#f/1}* 你知道接下来该怎么办吗？'
      ],
      tutorial_puzzle2a: ['<25>{#p/toriel}{#f/1}* 你知道接下来该怎么办吗？'],
      tutorial_puzzle3: ['<25>{#p/toriel}* 非常好，小家伙！\n* 非常棒。'],
      tutorial_puzzle4: ['<25>{#p/toriel}{#f/1}* 轮到你了...'],
      tutorial_puzzle4a: ['<25>{#p/toriel}{#f/0}* 到你了。'],
      tutorial_puzzle5: ['<25>{#p/toriel}* 干得漂亮！\n* 只剩下一道障碍了。'],
      tutorial_puzzle6: ['<25>{#p/toriel}{#f/1}* 太棒了！\n* 孩子，你真令我骄傲！'],
      tutorial_puzzle7: ['<25>{#p/toriel}* 等你准备好了，\n  我们就去下个房间，\n  我会教你下一项本领。'],
      tutorial_puzzle8a: ['<25>{#p/toriel}* 答案不在我身上，小家伙。'],
      tutorial_puzzle8b: ['<25>{#p/toriel}* 刚才怎么做的，\n  再做一次就好。'],
      tutorial_puzzle8c: ['<25>{#p/toriel}{#f/1}* 试试看...'],
      twinkly1: [
         "<25>{#p/twinkly}{#f/5}* 哈喽！\n* 我叫{@fill=#ff0}闪闪{@fill=#fff}。\n* 星界的{@fill=#ff0}闪亮明星{@fill=#fff}！"
      ],
      twinkly2: [
         '<25>{#f/5}* 是哪阵风把你吹到\n  这前哨站来的呢，伙伴？',
         '<25>{#f/5}* ...',
         "<25>{#f/8}* 你是不是迷路了...",
         "<25>{#f/5}* 好啦，算你走运，\n  我会帮你的！",
         "<25>{#f/8}* 我最近不是很在状态，\n  不过...",
         '<25>{#f/5}* ...总得有人教你\n  这里的游戏规则！',
         '<25>{#f/10}* 看来，只能我闪闪献丑，\n  承担这个任务了。',
         "<25>{#f/5}* 我们开始吧，好吗？"
      ],
      twinkly3: [
         "<25>{#f/7}* 但你早就知道了，对吧？",
         '<25>{#f/8}* ...',
         "<25>{#f/5}* 不过，还得由我来给你\n  传授点经验。",
         "<25>* 准备好了吗？我们开始吧！"
      ],
      twinkly4: [
         "<25>{#p/twinkly}{#f/6}* 好了，我受够了。",
         '<25>{#f/8}* 你想一直重置下去，\n  那就随你的便...',
         '<25>{#f/6}* 你可以随便重置。',
         "<25>{#f/7}* 但别想轻易过我这关。"
      ],
      twinkly5: ["<25>{#p/twinkly}{#f/6}* 你是闲得没别的事可做吗？"],
      twinkly6: [
         "<25>{#p/twinkly}{#f/6}* 刚挨了一击就马上重置，\n  是吧？",
         '<25>{#f/7}* 真是可悲。'
      ],
      twinkly6a: [
         "<25>{#p/twinkly}{#f/11}* 你以为我忘了你刚刚\n  干了什么吗？",
         '<25>{#f/7}* 肮脏的碎片闪避手。'
      ],
      twinkly7: ['<25>{#p/twinkly}{#f/7}* 我能在这儿陪你玩一整天，\n  白痴。'],
      twinkly8: ["<25>{#f/11}* 不过，既然你都知道接下来\n  会发生什么了...{%15}"],
      twinkly9: [
         '<25>{#p/twinkly}{#f/6}* 哈喽。',
         "<25>* 感觉我再待下去\n  就要引火上身了。",
         '<25>{#f/8}* 真是遗憾...',
         '<25>{#f/7}* 我本来想跟你好好玩玩的。',
         '<25>{#f/6}* ...',
         '<25>{#f/5}* 好啦，回见！'
      ],
      twinkly9a: [
         '<25>{#p/twinkly}{#f/12}{#v/0}* $(name)，\n  你到底在干什么？',
         '<25>{#f/12}{#v/0}* 我们本来就要\n  拿下这个前哨站了！'
      ],
      twinkly9a1: ['<25>{#f/6}{#v/0}* 我们只需要\n  按照计划行事。'],
      twinkly9a2: [
         '<25>{#f/6}{#v/0}* 我们只需要穿过铸厂...',
         '<25>* 干掉那些守卫...',
         '<25>* 然后前往首塔！'
      ],
      twinkly9a3: [
         '<25>{#f/6}{#v/0}* 我们只需要\n  干掉那些守卫...',
         '<25>* 然后穿过首塔！'
      ],
      twinkly9a4: [
         '<25>{#f/6}{#v/0}*  我们只需要杀掉\n  那个愚蠢的机器人...',
         '<25>* 然后穿过首塔！'
      ],
      twinkly9a5: ['<25>{#f/6}{#v/0}* 我们只需要穿过首塔！'],
      twinkly9a6: ['<25>{#f/6}{#v/0}* 我们只需要杀掉\n  那个呆子一样的垃圾袋！'],
      twinkly9a7: ['<25>{#f/6}{#v/0}* 我们只需要\n  继续走到终点！', '<25>* 我们就快成功了！'],
      twinkly9a8: ['<25>{#f/8}{#v/0}* 你个懦夫...'],
      twinkly9b: [
         '<25>{#p/twinkly}{#f/5}* $(name)...？',
         "<25>{#f/6}* 到底发生啥了？",
         '<25>{#f/8}* 咱们刚上了飞船，\n  然后...',
         '<25>{#f/8}* ...',
         '<25>{#f/6}* 我...',
         '<25>{#f/8}* 我得走了...'
      ],
      twinkly9c: [
         "<25>{#p/twinkly}{#f/7}* 所以，\n  我们又回到起点了，\n  对吧？",
         "<26>{#f/5}* 我一直在等你。\n* 倒要看看\n  你这次会怎么做。",
         "<25>{#f/11}* ...谁知道呢？\n* 也许那样做对你而言\n  更加容易吧。",
         '<25>{#f/7}* 我还拥有着你的力量时，\n  确实是更容易了。',
         '<25>{#f/6}* ...',
         '<25>{#f/5}* 嗯... 祝你好运！'
      ],
      twinkly10: [
         "<20>{#f/5}看见这颗心了吗？\n这是你的灵魂，\n是你生命的精华所在！",
         '<20>{#f/5}你的灵魂是你\n不可或缺的一部分，\n你需要LOVE来维持\n它的存在。'
      ],
      twinkly11: [
         "<20>{*}{#x2}{#f/5}在这太空，\nLOVE是通过...{#f/8}\n这些白色的...{#f/11}\n“幸福碎片”传递的。",
         "<20>{*}{#f/5}为了让你在正确的\n道路上启程，我会分你\n一点我自己的LOVE。",
         '<20>{*}{#f/5}能接多少就接多少！{^20}{*}{#x1}{%}'
      ],
      twinkly12: [
         "<20>{*}{#f/8}哦呦，\n看来你好像没接住...",
         "<20>{*}{#f/5}没关系！",
         '<20>{*}{#x2}{#f/10}来，我再送你点！{^20}{*}{#x1}{%}'
      ],
      twinkly13: [
         '<20>{*}{#f/12}搞什... \n你是脑残还是怎么着？？',
         '<20>{*}{#x2}给{^4} 我{^4} 撞{^4} 子弹！！！{^20}{*}{#x1}{^999}'
      ],
      twinkly14: '给 我 撞 幸福碎片~',
      twinkly15: [
         '<20>{#v/1}嘻嘻嘻...',
         "<20>在这个世界中...\n不是杀人就是被杀。",
         '<20>你该不会天真地以为，\n面对这自投罗网\n送上门来的灵魂...',
         "<20>我会蠢到放弃\n这大好机会吧？"
      ],
      twinkly16: [
         "<20>{#f/7}啧，你知道会发生什么，\n是不是？",
         "<20>你只想好好折磨一下\n楚楚可怜的闪闪，\n是不是？",
         "<20>天啦噜...\n你知道你惹的是谁吗？",
         '<20>{#f/11}嘻嘻嘻...'
      ],
      twinkly17: ["<20>{#v/1}那么我们就直奔主题吧。", '<20>嘻嘻嘻...'],
      twinkly18: ['<20>{*}{#f/2}{#v/1}{@random=1.1/1.1}死吧。{^20}{%}'],
      twinkly19: ['<20>{#p/toriel}真是个残忍的家伙，\n居然折磨这么一个\n弱小无助的孩子...'],
      twinkly20: [
         '<20>不要害怕，孩子。',
         '<20>我是{@fill=#003cff}托丽尔{@fill=#000}，\n{@fill=#f00}外域{@fill=#000}的管理员。',
         '<20>我每天都会来看看\n有没有人被困在这里。',
         '<20>跟我来，孩子。\n我有很多东西要教你。'
      ],
      twinkly21: [
         '<25>{#p/toriel}{#f/1}* 哦我的天！\n* 你是从哪里来的，小家伙？',
         '<25>{#f/1}* 受伤了吗？',
         '<25>{#f/0}* ...\n* 请原谅我问了这么多问题。',
         '<25>{#f/0}* 我是{@fill=#003cff}托丽尔{@fill=#fff}，\n  {@fill=#f00}外域{@fill=#fff}的管理员。',
         '<26>{#f/0}* 我每天都会来看看\n  有没有人被困在这里。',
         '<25>{#f/0}* 跟我来，孩子。\n* 我有很多东西要教你。'
      ],
      twinkly22: ['<25>{#f/0}* 跟我来。'],
      w_coffin0: () => [
         '<32>{#p/human}* （你觉得还是不要再看了。）',
         ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/13}* ...'] : [])
      ],
      w_coffin1: () => [
         '<32>{#p/basic}* 一口很旧的棺材，没什么特别的。',
         ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
            ? [
               '<25>{#p/asriel2}{#f/13}* 快看，他们还专门给你\n  做了口棺材呢，\n  $(name)。',
               '<25>{#p/asriel2}{#f/5}* 真感动。'
            ]
            : [])
      ],
      w_coffin2: pager.create(
         0,
         () => [
            '<32>{#p/basic}* 这是一口早在251X年12月\n  就做好的棺材。',
            '<32>* 在它旁边，藏着一本\n  像是日记的小册子...',
            choicer.create('* （翻阅一下吗？）', '是', '否')
         ],
         () => [
            '<32>{#p/human}* （你又捡起了那本小册子。）',
            choicer.create('* （翻阅一下吗？）', '是', '否')
         ]
      ),
      w_coffin3: () => [choicer.create('* （看下一页？）', '是', '否')],
      w_coffin4: ['<32>{#p/human}* （然而，这页之后什么都没有了。）'],
      w_coffin5: ['<32>{#p/human}* （你把册子放回了原处。）'],
      w_dummy1: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* （你把手放在了假人身上。）\n* （它看起来很旧了。）']
            : ['<32>{#p/basic}* 一个标准规格的训练人偶，\n  皇家出品。\n* 大约于251X年制成。'],
      wonder1: [
         '<32>{#p/basic}* 你听到了\n* 那来自群星的歌声了吗？',
         "<32>* 这歌声在前哨站的诸多地方响彻。\n  这里，便是其中一处...",
         '<32>* 你只需要，去聆听。',
         '<32>* 很酷吧？'
      ]
   },

   b_group_outlands: {
      froggitWhimsun: ['<32>{#p/story}* 太空青蛙和星际飞虫！\n* 或者跟这差不多的东西。'],
      froggitWhimsun2a: ['<32>{#p/story}* 太空青蛙...？'],
      froggitWhimsun2b: ['<32>{#p/story}* 星际飞虫...？'],
      looxMigospWhimsun: ["<32>{#p/story}* 挑事三人组来了！"],
      looxMigospWhimsun2: ['<32>{#p/story}* 三人组变成两人组了。'],
      looxMigospWhimsun3: ['<32>{#p/story}* 现在，只剩一个了。'],
      moldsmalMigosp: ['<32>{#p/story}* 忍术蟑螂和他的同伙一同现身了！']
   },

   b_opponent_froggit: {
      act_check: ['<32>{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活并不轻松。'],
      act_check2: ['<32>{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活逐渐向好。'],
      act_check3: ["<32>{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活仍不好过。"],
      act_check4: ['<32>{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活浑浑噩噩。'],
      act_check5: ['<32>{#p/story}* 蛙吉特 - 攻击4 防御5\n* 这只怪物的生活颇为惬意。'],
      act_threat: [
         '<32>{#p/human}* （你对蛙吉特发出威胁。）',
         "<32>{#p/basic}* 但蛙吉特并不明白你在说什么..."
      ],
      act_threat2: [
         '<32>{#p/human}* （你再一次对蛙吉特发出威胁。）',
         "<32>{#p/basic}* 蛙吉特想起了\n  你先前的恐吓，\n  决定撒腿跑路。"
      ],
      act_compliment: [
         '<32>{#p/human}* （你称赞了蛙吉特一番。）',
         "<32>{#p/basic}* 但蛙吉特并不明白你在说什么..."
      ],
      act_flirt: [
         '<32>{#p/human}* （你向蛙吉特调情。）',
         "<32>{#p/basic}* 但蛙吉特并不明白你在说什么..."
      ],
      act_translate0: ["<32>{#p/human}* （但你还什么都没说，没法翻译。）"],
      act_translate1: [
         '<32>{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）',
         '<32>{#p/basic}* 蛙吉特受宠若惊。'
      ],
      act_translate1x: [
         '<32>{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）',
         '<32>{#p/basic}* 蛙吉特更加顾虑，\n  不知该不该继续战斗。'
      ],
      act_translate1y: [
         '<32>{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）',
         '<32>* 蛙吉特吓破了胆，扭头就跑！'
      ],
      act_translate1z: [
         '<32>{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）',
         '<32>{#p/basic}* 蛙吉特面不改色，毫无畏惧之情。'
      ],
      act_translate2: [
         '<32>{#p/human}* （你把你想说的话翻译了一下。）\n* （蛙吉特好像听懂你在说什么了。）',
         '<32>{#p/basic}* 蛙吉特脸红了，\n  虽然只是在内心里。'
      ],
      confuseText: ['<08>{#p/basic}{~}呱呱，\n呱呱？'],
      flirtText: ['<08>{#p/basic}{~}（脸涨得\n通红。）\n呱呱..'],
      idleText1: ['<08>{#p/basic}{~}呱呱，\n呱呱。'],
      idleText2: ['<08>{#p/basic}{~}咕呱，\n咕呱。'],
      idleText3: ['<08>{#p/basic}{~}跳跳，\n跳跳。'],
      idleText4: ['<08>{#p/basic}{~}喵。'],
      mercyStatus: ['<32>{#p/story}* 蛙吉特似乎不愿意和你战斗了。'],
      name: '* 蛙吉特',
      meanText: ['<08>{#p/basic}{~}（缩缩，\n抖抖。）\n呱呱..'],
      niceText: ['<08>{#p/basic}{~}（脸微微\n泛红。）\n呱呱..'],
      perilStatus: ['<32>{#p/story}* 蛙吉特正试图逃跑。'],
      status1: ['<32>{#p/story}* 蛙吉特蹦了过来！'],
      status2: ['<32>{#p/story}* 战场弥漫着曜菊的芬芳。'],
      status3: ["<32>{#p/story}* 蛙吉特看起来并不知道\n  自己为什么在这里。"],
      status4: ['<32>{#p/story}* 蛙吉特跳来跳去。']
   },
   b_opponent_whimsun: {
      act_check: ['<32>{#p/story}* 飘游虫虫 - 攻击5 防御0\n* 这只怪物才刚学会飞...'],
      act_check2: ['<32>{#p/story}* 飘游虫虫 - 攻击5 防御0\n* 这只怪物后悔学习飞翔了。'],
      act_console: [
         '<32>{#p/human}* （你帮飘游虫虫飞得更高。）',
         '<32>{#p/basic}* 飘游虫虫很感谢你，\n  然后飞走了...'
      ],
      act_flirt: [
         '<32>{#p/human}* （你向飘游虫虫调情。）',
         '<32>{#p/basic}* 飘游虫虫无法接受你的赞美，\n  泪流满面地飞走了...'
      ],
      act_terrorize: [
         '<32>{#p/human}* （你呲牙咧嘴，\n  发出一阵鬼哭狼嚎。）',
         '<32>{#p/basic}* 飘游虫虫吓坏了，\n  赶忙飞走了。'
      ],
      idleTalk1: ['<08>{#p/basic}{~}为什么\n这么难..'],
      idleTalk2: ['<08>{#p/basic}{~}请帮帮\n我..'],
      idleTalk3: ["<08>{#p/basic}{~}我好怕.."],
      idleTalk4: ["<08>{#p/basic}{~}我做\n不到..."],
      idleTalk5: ['<08>{#p/basic}{~}\x00*呜呜*\n*呜呜*'],
      name: '* 飘游虫虫',
      perilStatus: ['<32>{#p/story}* 飘游虫虫快要从空中掉下来了。'],
      status1: ['<32>{#p/story}* 飘游虫虫飘飘悠悠地飞了过来！'],
      status2: ['<32>{#p/story}* 飘游虫虫继续咕哝着道歉。'],
      status3: ['<32>{#p/story}* 飘游虫虫悠悠地徘徊。'],
      status4: ['<32>{#p/story}* 空气中弥漫着\n  新鲜桃子的香味。'],
      status5: ['<32>{#p/story}* 飘游虫虫气喘吁吁。'],
      status6: ['<32>{#p/story}* 飘游虫虫眼神闪躲。']
   },
   b_opponent_loox: {
      act_check: ['<32>{#p/story}* 干瞪眼 - 攻击6 防御6\n* 瞪大眼行家。\n* 姓：眼行家'],
      act_check2: [
         "<32>{#p/story}* 干瞪眼 - 攻击6 防御6\n* 这个恶霸很努力地\n  假装没有受宠若惊。"
      ],
      act_check3: ['<32>{#p/story}* 干瞪眼 - 攻击6 防御6\n* 这只怪物很荣幸\n  能出现在你的视线里。'],
      act_dontpick: [
         '<32>{#p/human}* （你瞪了干瞪眼一眼。）\n* （干瞪眼使劲瞪了回来。）',
         "<32>{#p/human}* （干瞪眼越瞪越用力...）",
         '<32>{#p/human}* （...最后它受不了，投降了。）'
      ],
      act_flirt: ['<32>{#p/human}* （你向干瞪眼调情。）'],
      act_pick: ['<32>{#p/human}* （你粗鲁地告诫干瞪眼\n  不要盯着别人看。）'],
      checkTalk1: ['<08>{#p/basic}{~}你敢盯着\n看吗？'],
      dontDeny1: ['<08>{#p/basic}{~}看看谁\n变卦了。'],
      dontTalk1: ['<99>{#p/basic}{~}这货还\n真挺能\n盯的。'],
      flirtDeny1: ['<08>{#p/basic}{~}死傲娇。'],
      flirtTalk1: ['<08>{#p/basic}{~}啥？\n没-没门！'],
      hurtStatus: ['<32>{#p/story}* 干瞪眼在流泪。'],
      idleTalk1: ["<08>{#p/basic}{~}盯上你了。"],
      idleTalk2: ["<08>{#p/basic}{~}我想干啥\n不用你管。"],
      idleTalk3: ['<08>{#p/basic}{~}盯着你\n意味着\n在意你。'],
      idleTalk4: ['<08>{#p/basic}{~}真碍眼。'],
      idleTalk5: ['<08>{#p/basic}{~}来个\n盯人比赛\n如何？'],
      name: '* 干瞪眼',
      pickTalk1: ['<08>{#p/basic}{~}你怎么敢\n质疑我们的\n生活方式！'],
      spareStatus: ["<32>{#p/story}* 干瞪眼完全不想战斗了。"],
      status1: ['<32>{#p/story}* 一对干瞪眼向你走来！'],
      status2: ['<32>{#p/story}* 干瞪眼紧盯着你看。'],
      status3: ['<32>{#p/story}* 干瞪眼咬牙切齿。'],
      status4: ['<32>{#p/story}* 闻起来像眼药水。'],
      status5: ['<32>{#p/story}* 干瞪眼充血了。'],
      status6: ['<32>{#p/story}* 干瞪眼正凝视着你。'],
      status7: ['<32>{#p/story}* 干瞪眼现在孤身一人了。']
   },
   b_opponent_migosp: {
      act_check: ["<32>{#p/story}* 忍术蟑螂 - 攻击7 防御5\n* 它看起来很邪恶，但其实\n  只是被集体意识冲昏了头脑。"],
      act_check2: ['<32>{#p/story}* 忍术蟑螂 - 攻击7 防御5\n* 现在它独自一人，\n  开心地以舞明志。'],
      act_check3: ['<32>{#p/story}* 忍术蟑螂 - 攻击7 防御5\n* 它感觉和你在一起很舒服。\n* 特别舒服。'],
      act_check4: ["<32>{#p/story}* 忍术蟑螂 - 攻击7 防御5\n* 尽管它表现得很坚强，\n  但一看就知道很痛苦..."],
      act_flirt: ['<32>{#p/human}* （你向忍术蟑螂调情。）'],
      flirtTalk: ['<08>{#p/basic}{~}嗨呀~'],
      groupInsult: ["<32>{#p/human}* （你骂了忍术蟑螂几句，\n  但它正忙着拉拢其他怪物，\n  没听到你的话。）"],
      groupStatus1: ['<32>{#p/story}* 忍术蟑螂在跟别人说悄悄话。'],
      groupStatus2: ["<32>{#p/story}* 战场上飘来阵阵蟑螂屋的味道。"],
      groupTalk1: ['<08>{#p/basic}肮脏卑鄙，\n一心一意\n..'],
      groupTalk2: ['<08>{#p/basic}服从于\n无上主宰\n..'],
      groupTalk3: ['<08>{#p/basic}军团！\n我们是\n军团！'],
      groupTalk4: ['<08>{#p/basic}当心虫群\n..'],
      groupTalk5: ['<08>{#p/basic}现在，\n保持一致\n..'],
      groupTalk6: ["<08>{#p/basic}我不在乎。"],
      name: '* 忍术蟑螂',
      perilStatus: ['<32>{#p/story}* 忍术蟑螂不打算放弃。'],
      soloInsult: ["<32>{#p/human}* （你想把忍术蟑螂臭骂一顿，\n  可它开心得飞起，压根不在乎。）"],
      soloStatus: ["<32>{#p/story}* 忍术蟑螂在这宇宙中无忧无虑。"],
      soloTalk1: ["<08>{#p/basic}{~}做自己\n才是\n最好的！"],
      soloTalk2: ['<08>{#p/basic}{~}啦啦~\n做自己\n就好~'],
      soloTalk3: ["<08>{#p/basic}{~}独处时间\n最棒了！"],
      soloTalk4: ['<08>{#p/basic}{~}呣，\n恰恰恰！'],
      soloTalk5: ['<08>{#p/basic}{~}挥动你的\n手臂，宝贝~']
   },
   b_opponent_mushy: {
      act_challenge: [
         '<32>{#p/human}* （你向蘑西发起决斗挑战。）',
         "<33>{#p/story}* 本回合，蘑西的攻击速度加快！"
      ],
      act_check: ['<32>{#p/story}* 蘑西 - 攻击6 防御6\n* 是星际牛仔的忠实粉丝。\n  也是一位枪术高手。'],
      act_check2: ['<32>{#p/story}* 蘑西 - 攻击6 防御6\n* 是星际牛仔的忠实粉丝。\n  包括性感牛仔。'],
      act_check3: ['<32>{#p/story}* 蘑西 - 攻击6 防御6\n* 在拼尽全力之后，\n  这个枪手对你的印象已是刻骨铭心。'],
      act_flirt: ['<32>{#p/human}* （你向蘑西调情。）'],
      act_taunt: ['<32>{#p/human}* （你对着蘑西一通嘲讽。）'],
      challengeStatus: ['<32>{#p/story}* 蘑西正等着你的下个挑战。'],
      challengeTalk1: ["<08>{#p/basic}{~}让我\n见识一下\n你有什么\n能耐。"],
      challengeTalk2: ['<08>{#p/basic}{~}是想着\n要把我\n打败吗？'],
      flirtStatus1: ['<32>{#p/story}* 蘑西既困惑又兴奋。'],
      flirtTalk1: ['<08>{#p/basic}{~}嘿，\n别-别闹了！'],
      hurtStatus: ['<32>{#p/story}* 蘑西准备拼死一搏。'],
      idleTalk1: ['<08>{#p/basic}{~}砰！\n砰！\n砰！'],
      idleTalk2: ['<08>{#p/basic}{~}上马！'],
      idleTalk3: ["<08>{#p/basic}{~}不足为惧。"],
      name: '* 蘑西',
      spareStatus: ['<32>{#p/story}* 蘑西浅鞠一躬，以表敬意。'],
      status1: ['<32>{#p/story}* 刹那间，蘑西已至！'],
      status2: ['<32>{#p/story}* 蘑西稍微调整了一下姿势。'],
      status3: ['<32>{#p/story}* 蘑西正为这场盛大的对决做准备。'],
      status4: ['<32>{#p/story}* 蘑西伸手向腰，直奔枪套。'],
      status5: ['<32>{#p/story}* 闻起来像雨后泥土的气息。'],
      tauntStatus1: ["<32>{#p/story}* 蘑西假装没听到你的嘲讽。"],
      tauntTalk1: ["<08>{#p/basic}{~}雕虫小技，\n能奈我何？"]
   },
   b_opponent_napstablook: {
      act_check: ["<32>{#p/story}* 纳普斯特 - 攻击10 防御255\n* 这位是纳普斯特。"],
      act_check2: [
         "<32>{#p/story}* 纳普斯特 - 攻击10 防御255\n* 看起来它完全不想呆在这里。"
      ],
      act_check3: ['<32>{#p/story}* 纳普斯特 - 攻击10 防御255\n* 已经有许久没像这样感到希望了...'],
      act_check4: ['<32>{#p/story}* 纳普斯特 - 攻击10 防御255\n* 浪漫的紧张气氛空前高涨。'],
      awkwardTalk: ['<11>{#p/napstablook}{~}呃...', '<11>{#p/napstablook}{~}okay, i guess...?'],
      checkTalk: ["<11>{#p/napstablook}{~}是我..."],
      cheer0: ['<32>{#p/human}* （你试图安慰纳普斯特。）'],
      cheer1: ['<32>{#p/human}* （你给纳普斯特一个\n  耐心的微笑。）'],
      cheer2: ['<32>{#p/human}* （你给纳普斯特讲了一个\n  小小的笑话。）'],
      cheer3: ["<32>{#p/human}* （你赞美纳普斯特的大礼帽。）"],
      cheerTalk1: ['<11>{#p/napstablook}{~}...？'],
      cheerTalk2: ['<11>{#p/napstablook}{~}嘿嘿...'],
      cheerTalk3: [
         '<11>{*}{#p/napstablook}{~}让我{#x1}试试...{^20}{#x2}{^20}{%}',
         "<11>{*}{#p/napstablook}{~}我管这个叫{#x3}\n“纳普斯文”{^40}{%}",
         '<11>{*}{#p/napstablook}{~}你喜欢吗？{^40}{%}'
      ],
      cheerTalk4: ['<11>{#p/napstablook}{~}哦天啊.....'],
      consoleTalk1: ['<11>{#p/napstablook}{~}是啊，是啊...'],
      consoleTalk2: ['<11>{#p/napstablook}{~}不信...'],
      consoleTalk3: ["<11>{#p/napstablook}{~}你并不感到\n抱歉..."],
      deadTalk: [
         "<11>{#p/napstablook}{~}嗯... 你知道\n你没办法杀死\n幽灵，对吧...",
         "<11>{~}我们没有实体\n之类的",
         "<11>{~}我降低我的hp\n只是不希望我\n显得太粗鲁",
         '<11>{~}对不起...\n我把事情变得\n更尴尬了...',
         '<11>{~}假装你把我\n打败了吧...',
         '<11>{~}哦哦哦哦哦'
      ],
      flirt1: ['<32>{#p/human}* （你向纳普斯特调情。）'],
      flirt2: ['<32>{#p/human}* （你向纳普斯特用\n  最好的方式搭讪。）'],
      flirt3: ['<32>{#p/human}* （你由衷地夸赞纳普斯特。）'],
      flirt4: ['<32>{#p/human}* （你向纳普斯特表露\n  你对它的感觉。）'],
      flirtTalk1: ["<11>{#p/napstablook}{~}我只会\n拖累你"],
      flirtTalk2: ["<11>{#p/napstablook}{~}哦.....\n我听过这个....."],
      flirtTalk3: ['<11>{#p/napstablook}{~}呃... 你真\n这样想吗？'],
      flirtTalk4: ["<11>{#p/napstablook}{~}哦，你是\n认真的...", '<11>{~}哦不.....'],
      idleTalk1: ["<11>{#p/napstablook}{~}我很好，谢谢"],
      idleTalk2: ['<11>{#p/napstablook}{~}再坚持下...'],
      idleTalk3: ['<11>{#p/napstablook}{~}只是做我\n该做的事...'],
      insultTalk1: ['<11>{#p/napstablook}{~}我就知道...'],
      insultTalk2: ['<11>{#p/napstablook}{~}随便了...'],
      insultTalk3: ['<11>{#p/napstablook}{~}随你\n怎么说...'],
      insultTalk4: ['<11>{#p/napstablook}{~}尽情\n发泄吧...'],
      name: '* 纳普斯特',
      silentTalk: ['<11>{#p/napstablook}{~}...'],
      sincere: ["<32>{#p/human}* （你对纳普斯特的大礼帽\n  发表了暧昧的评论。）"],
      sincereTalk: ['<11>{#p/napstablook}{~}嘿... 谢谢'],
      status1: ['<32>{#p/story}* 纳普斯特来了。'],
      status2: ['<32>{#p/story}* 纳普斯特看起来好受了一点。'],
      status3: ['<32>{#p/story}* 纳普斯特想给你展示些什么。'],
      status3a: ['<32>{#p/story}* 纳普斯特等待着你的回应。'],
      status4: ["<32>{#p/story}* 纳普斯特的眼睛闪闪发光。"],
      status5: ['<32>{#p/story}* 纳普斯特显然不确定\n  该怎么应对这种情况。'],
      status5a: ['<32>{#p/story}* 纳普斯特正在质疑自己的存在。'],
      status6: ['<32>{#p/story}* 纳普斯特正在伺机而动。'],
      status7: ['<32>{#p/story}* 纳普斯特正在等待\n  你下一步的行动。'],
      status8: ['<32>{#p/story}* 纳普斯特正凝视着远方。'],
      status9: ["<32>{#p/story}* 纳普斯特希望它自己不在这里。"],
      status10: ['<32>{#p/story}* 纳普斯特正在尽力将你忽视。'],
      suck: ['<32>{#p/human}* （你告诉纳普斯特\n  它的帽子很难看。）'],
      threat: ['<32>{#p/human}* （你威胁纳普斯特。）']
   },
   b_opponent_toriel: {
      spannerText: ['<32>{#p/human}* （你把扳手扔了出去。）\n* （托丽尔捡起扳手，还给了你。）'],
      spannerTalk: ['<11>{#p/toriel}{#f/22}孩子，扔扳手\n解决不了\n任何问题。'],
      spannerTalkRepeat: ['<11>{#p/toriel}{#f/22}...'],
      act_check: ['<32>{#p/story}* 托丽尔 - 攻击80 防御80\n* 最了解你的人。'],
      act_check2: ['<32>{#p/story}* 托丽尔 - 攻击80 防御80\n* 看起来有所克制。'],
      act_check3: ['<32>{#p/story}* 托丽尔 - 攻击80 防御80\n* 看起来心不在焉。'],
      act_check4: ['<32>{#p/story}* 托丽尔 - 攻击80 防御80\n* 只想把最好的给你。'],
      act_check5: ['<32>{#p/story}* 托丽尔 - 攻击80 防御80\n* 觉得你很“天真可爱”。'],
      precrime: ['<20>{#p/asriel2}...'],
      criminal1: (reveal: boolean) => [
         '<20>{#p/asriel2}{#f/3}哈喽，\n$(name)。',
         "<20>{#f/1}重获新生的感觉\n真是太棒了。",
         "<20>{#f/2}为啥露出那副表情？\n没想到我会回来吗？",
         '<20>{#f/13}...\n其实，$(name)...',
         ...(reveal
            ? ["<20>{#f/1}这一刻，\n我等了好久。"]
            : [
               "<20>{#f/15}我一直被困在\n那颗星星里，\n我...",
               '<20>{#f/15}...',
               "<20>{#f/16}罢了，\n先不说这个。",
               '<20>{#f/1}眼前，最重要的是，\n一切终于重回正轨了。'
            ]),
         '<20>{#f/1}嘻嘻嘻...',
         "<20>{#f/2}我知道你的内在是\n空虚的，就像我一样。",
         "<20>{#f/5}过了这么多年，\n我们之间的纽带\n依然无法分割...",
         "<20>{#f/1}听着，我有个计划，\n能让我们变得亲密无间。",
         '<20>{#f/1}有了你和我的力量，\n再加上一起偷来的\n灵魂...',
         "<20>{#f/1}我们就能一举摧毁\n这该死前哨站的一切。",
         '<21>{#f/2}让我们把胆敢阻拦我们\n走向美好未来的家伙...',
         "<20>{#f/1}都变为尘埃吧。"
      ],
      criminal2: ['<20>{#p/asriel2}{#f/3}欢迎回来，\n$(name)。', '<20>{#f/1}准备好再大干一番了吗？'],
      criminal3: ['<20>{#p/asriel2}{#f/3}那么...', '<20>{#f/3}...', "<20>{#f/4}出发吧。"],
      cutscene1: [
         "<32>{#p/basic}* 也许是因为...\n  只有我说的话，你才听得进去吧。",
         '<25>{#p/toriel}{#f/16}* ...！？',
         "<32>{#p/basic}* 但我一个天真懵懂的小孩，\n  能讲出什么大道理呢？"
      ],
      cutscene2: [
         '<25>{#p/toriel}{#f/3}* ...',
         '<25>{#p/toriel}{#f/4}* 不可能...',
         '<25>{#f/0}* 我是不是没睡醒，\n  还是出现幻觉了？\n* 或者...',
         '<32>{#p/basic}* 不。',
         '<32>{#p/basic}* 这里，就是现实。',
         '<25>{#p/toriel}{#f/5}* 但你不是早就死了吗，\n  $(name)？',
         '<25>{#f/5}* 你绝对不可能\n  像这样开口说话。',
         "<32>{#p/basic}* 你要是还接受不了...",
         '<32>{#p/basic}* 就把这当成一场梦吧。',
         '<25>{#p/toriel}{#f/5}* ...',
         '<25>{#p/toriel}{#f/9}* 你想说什么？',
         '<32>{#p/basic}* 托丽尔...',
         "<32>{#p/basic}* 你应该知道\n  我对人类是什么态度吧？",
         '<25>{#p/toriel}{#f/13}* 知道。',
         '<32>{#p/basic}* 你不知道。',
         '<32>{#p/basic}* ...我对这个人类可不是那态度。',
         "<32>* 自从这个孩子坠落于此，\n  我就一直跟着他...",
         "<32>* 刚刚，这孩子求我帮忙，\n  让我说服你。",
         '<32>* 你明白，这意味着什么吗？',
         '<25>{#p/toriel}{#f/13}* ...',
         '<32>{#p/basic}* 这意味着\n  你应该马上放这孩子走。',
         '<25>{#p/toriel}{#f/12}* ...你不知道外面多危险吗？',
         '<25>{#f/11}* 我要是心软，\n  那孩子肯定会死在外头。',
         '<32>{#p/basic}* ...好好想想。',
         "<32>{#p/basic}* 你根本不是因为这个\n  才不让他走，对吧？",
         '<25>{#p/toriel}{#f/12}* 这股叛逆的劲\n  倒真像$(name)。',
         '<25>{#p/toriel}{#f/11}* 你老是爱挑战我的权威。',
         '<32>{#p/basic}* 因为我够格。',
         '<32>{#p/basic}* 你是自己害怕外域之外的未知，\n  所以才想把那孩子留在这，对吧？',
         "<33>{#p/basic}* 但是，过了一百年，\n  外面的世界早就不一样了。",
         "<33>{#p/basic}* 你不敢走出去看看，画地为牢。\n  才对这些视而不见。",
         '<25>{#p/toriel}{#f/13}* ...',
         "<25>{#p/toriel}{#f/13}* ...但我要是放这孩子走，\n  就没法...",
         '<32>{#p/basic}* 陪伴他，保护他了？',
         '<32>{#p/basic}* 呵，我明白那是什么滋味。',
         '<32>{#p/basic}* 但是，把那孩子\n  强行束缚在这一亩三分地，\n  他也会活不下去。',
         "<32>{#p/basic}* 不做点有意义的事，\n  那活着还有什么意义？",
         '<25>{#p/toriel}{#f/13}* ...',
         '<25>{#p/toriel}{#f/13}* $(name)，我...',
         '<32>{#p/basic}* 你之前不是给过这孩子\n  一部手机吗？',
         "<32>{#p/basic}* 别切断联络，保持电话畅通。\n  那孩子会给你打电话的。",
         '<25>{#p/toriel}{#f/9}* ...那你呢？',
         "<32>{#p/basic}* 别担心我。\n* 我没事的。",
         "<32>{#p/basic}* 我只希望，那孩子走后，\n  一定，一定不要忘了他。",
         '<25>{#p/toriel}{#f/13}* ...',
         '<32>{#p/basic}* 再见，托丽尔。',
         '<25>{#p/toriel}{#f/14}* ...再见，$(name)。'
      ],
      death1: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}趁我\n毫无防备时\n杀了我...',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/9}{#x2}{@random=1.1/1.1}哈...\n哈...',
         '<11>{#v/2}{#i/9}{#x2}{@random=1.1/1.1}现在看来，\n年轻人...',
         '<11>{#v/3}{#i/12}{#x2}{@random=1.2/1.2}一路上一直\n相信你的我，\n才是真正的\n傻子啊...'
      ],
      death2: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}本以为，\n自己努力\n保护的人，\n是你...',
         '<11>{#v/1}{#i/6}{#x4}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/9}{#x2}{@random=1.1/1.1}哈...\n哈...',
         '<11>{#v/2}{#i/9}{#x1}{@random=1.1/1.1}现在看来，\n年轻人...',
         '<11>{#v/3}{#i/12}{#x2}{@random=1.2/1.2}我真正\n保护的，\n是他们啊...'
      ],
      death3: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}没想到，\n你这么强...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}听我说，\n孩子...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}很快，\n我就会变成\n一堆灰烬...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}到那时，\n请你... \n马上吸收\n我的灵魂。',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}只有这样...\n你才能\n逃出这里。',
         "<11>{#v/2}{#i/9}{#x3}{@random=1.1/1.1}绝不能...\n让... \n艾斯戈尔...\n计划得逞...",
         '<11>{#v/2}{#i/9}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/3}{#i/12}{#x2}{@random=1.2/1.2}孩子...',
         "<11>{#v/3}{#i/12}{#x4}{@random=1.2/1.2}要乖啊... \n好吗？"
      ],
      magic1: ['<20>{#p/asriel2}{#f/3}跟我来。'],
      name: '* 托丽尔',
      spareTalk1: ['<11>{#p/toriel}{#f/11}...'],
      spareTalk2: ['<11>{#p/toriel}{#f/11}...\n...'],
      spareTalk3: ['<11>{#p/toriel}{#f/11}...\n...\n...'],
      spareTalk4: ['<11>{#p/toriel}{#f/17}...？'],
      spareTalk5: ['<11>{#p/toriel}{#f/17}你这是\n在做什么？'],
      spareTalk6: ['<11>{#p/toriel}{#f/17}...'],
      spareTalk7: ['<11>{#p/toriel}{#f/17}你这样做，\n究竟想\n证明什么？'],
      spareTalk8: ['<11>{#p/toriel}{#f/17}...'],
      spareTalk9: ['<11>{#p/toriel}{#f/12}要么战斗，\n要么离开！'],
      spareTalk10: ['<11>{#p/toriel}{#f/12}不要用\n那种眼神看我！'],
      spareTalk11: ['<11>{#p/toriel}{#f/12}走开！'],
      spareTalk12: ['<11>{#p/toriel}{#f/13}...'],
      spareTalk13: ['<11>{#p/toriel}{#f/13}...\n...'],
      spareTalk14: ['<11>{#p/toriel}{#f/13}...\n...\n...'],
      spareTalk15: [
         '<11>{#p/toriel}{#f/13}我明白\n你想要回家\n的心情...',
         '<11>{#p/toriel}{#f/9}但路上可能\n会有危险。'
      ],
      spareTalk16: ['<11>{#p/toriel}{#f/14}所以... 求你\n现在回去吧。'],
      spareTalk17: [
         '<11>{#p/toriel}{#f/13}我知道这里\n没有多少\n东西...',
         '<11>{#p/toriel}{#f/10}但我们\n仍可以幸福\n生活下去。'
      ],
      spareTalk18: [
         '<11>{#p/toriel}{#f/13}有你有我，\n就像\n一家人一样...',
         '<11>{#p/toriel}{#f/10}这样生活\n不好吗？'
      ],
      spareTalk19: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk20: ['<11>{#p/toriel}{#f/18}你为什么\n要让事情变得\n这么难办呢？'],
      spareTalk21: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk22: ['<11>{#p/toriel}{#f/18}求你了，\n回去吧...', '<11>{#p/toriel}{#f/9}回到我们的\n房间去吧。'],
      spareTalk23: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk24: ['<11>{#p/toriel}{#f/18}哦，孩子...'],
      spareTalk28b: [
         '<11>{#p/toriel}{#f/9}也许\n真正糊涂的\n是我...',
         '<11>{#f/13}用这种方法\n试图阻止你...',
         '<11>{#f/9}也许我应该\n让你走。'
      ],
      spareTalk28c: ['<11>{#p/toriel}{#f/17}...？', '<11>{#f/17}你为什么喊\n“$(name)”\n的名字呢？'],
      status1: ['<32>{#p/story}* 托丽尔现在正站在你面前。'],
      status2: ['<32>{#p/story}* 托丽尔准备着魔法攻击。'],
      status3: ['<32>{#p/story}* 托丽尔板着脸，\n  冷冷地看着你。'],
      status4: ['<32>{#p/story}* 托丽尔看穿了你。'],
      status5: ['<32>{#p/story}* ...'],
      assistStatus: ['<32>{#p/basic}* 肯定有其他办法的...'],
      talk1: ['<32>{#p/human}* （你请求托丽尔让你过去。）\n* （没有效果。）'],
      talk2: ["<32>{#p/human}* （你问托丽尔为什么要这么做。）\n* （她的身体轻轻颤抖了一下。）"],
      talk3: ['<32>{#p/human}* （你求托丽尔停下。）\n* （她犹豫了。）'],
      talk4: [
         '<32>{#p/human}* （你再次求托丽尔停下。）',
         '<32>{#p/basic}* ...也许这么做对她来说风险太大了。'
      ],
      talk5: ['<32>{#p/human}* （你冲托丽尔大喊。）\n* （她闭上眼睛，深吸一口气。）'],
      talk6: [
         '<32>{#p/human}* （你再次冲托丽尔大喊。）',
         "<32>{#p/basic}* ...或许交谈并不能有什么进展。"
      ],
      talk7: ["<32>{#p/human}* （但你想不到什么别的话可说。）"],
      talk8: ['<32>{#p/human}* （但这么做已经没有意义了。）'],
      theft: ['<20>{*}{#p/twinkly}归我了。{^15}{%}']
   },

   c_name_outlands: {
      hello: '打招呼',
      about: '介绍下自己',
      mom: '叫她“妈妈”',
      flirt: '调情',
      toriel: "给托丽尔打电话",
      puzzle: '谜题求助',
      insult: '辱骂'
   },

   c_call_outlands: {
      about1: [
         '<25>{#p/toriel}{#f/1}* 你是想更深入的了解我...\n  对吗？',
         '<25>{#f/0}* 嗯，我怕我没有什么\n  可以跟你讲的。',
         '<25>{#f/0}* 我只不过是一位\n  爱瞎操心的老阿姨罢了！'
      ],
      about2: [
         '<25>{#p/toriel}{#f/1}* 如果你想深入了解我的话...',
         '<25>{#f/1}* 可以四处瞧瞧\n  这些建筑与陈设。',
         '<25>{#f/0}* 它们都是由我\n  直接或间接参与建造的。'
      ],
      about3: [
         '<25>{#p/toriel}{#f/1}* 如果你想深入了解我的话...',
         '<25>{#f/2}* 之前就别在电话里骂我！'
      ],
      flirt1: [
         '<25>{#p/toriel}{#f/7}* ...嗯？',
         '<25>{#f/1}* 哦，嘻... 嘻嘻...',
         '<25>{#f/6}* 哈哈哈！\n* 让我捏捏你的小脸蛋！',
         '<25>{#f/0}* 你肯定能找到\n  比我这种老阿姨更好的人！'
      ],
      flirt2: [
         '<25>{#p/toriel}{#f/7}* ...\n* 哦亲爱的，你是认真的吗...？',
         '<25>{#f/1}* 我实在不知道是喜还是悲，\n  我的孩子。'
      ],
      flirt3: [
         '<25>{#p/toriel}{#f/7}* ...\n* 哦亲爱的，你是认真的吗...？',
         '<25>{#f/5}* 先前你还叫我\n  “妈妈”来着...',
         '<25>{#f/1}* 好吧。\n* 你可真是个“有趣”的孩子。'
      ],
      flirt4: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#p/toriel}{#f/4}* 我真是想不通你的脑回路。'],
      hello: [
         [
            '<25>{#p/toriel}* 这里是托丽尔。',
            '<25>{#f/1}* 你只是想和我打声招呼...？',
            '<25>{#f/0}* 那好吧。\n* “你好！”',
            '<25>{#f/0}* 希望这一句招呼就足够了。\n* 嘻嘻。'
         ],
         [
            '<25>{#p/toriel}* 这里是托丽尔。',
            '<25>{#f/1}* 你还想和我打声招呼吗？',
            '<25>{#f/0}* 那就，“向你致意”吧！',
            '<25>{#f/1}* 足够了吗？'
         ],
         [
            '<25>{#p/toriel}{#f/1}* 你现在是觉得很无聊吗？',
            '<25>{#f/0}* 对不起。\n* 我应该给你找些事情做的。',
            '<25>{#f/1}* 试着放空大脑尽情想象，\n  来分散你的注意力，\n  如何？',
            '<25>{#f/0}* 假装你是一名...\n  战斗机飞行员！',
            '<25>{#f/1}* 上下旋转，左右摇摆，\n  以光速做着横滚侧翻...',
            '<25>{#f/1}* 能为我试着做一遍吗？'
         ],
         [
            '<25>{#p/toriel}{#f/5}* 你好，小家伙。',
            '<25>{#f/9}* 我很抱歉，因为我已经\n  没什么东西可说了。',
            '<25>{#f/1}* 但我很高兴\n  能听到你的声音...'
         ]
      ],
      helloX: ['<25>{#p/toriel}{#g/torielLowConcern}* 嗯？'],
      mom1: [
         '<25>{#p/toriel}* ...',
         '<25>{#f/7}* 嗯？\n* 你刚才是不是叫我\n  “妈妈”了？',
         '<25>{#f/1}* 嗯...\n* 我想...',
         '<25>{#f/1}* 你叫我“妈妈”...',
         '<25>{#f/1}* 会不会让你...\n* 开心一点？',
         '<25>{#f/0}* 那就...\n* 随你怎么称呼吧！'
      ],
      mom2: ['<25>{#p/toriel}{#f/7}* ...\n* 我的天... 又来？', '<25>{#f/0}* 嘻嘻嘻...\n* 你真是个小可爱。'],
      mom3: [
         '<25>{#p/toriel}{#f/7}* ...\n* 我的天... 又来？',
         '<25>{#f/5}* 先前你还跟我调情来着...',
         '<25>{#f/1}* 好吧。\n* 你可真是个“有趣”的孩子。'
      ],
      mom4: ['<25>{#p/toriel}{#f/5}* ...'],
      puzzle1: [
         '<25>{#p/toriel}{#f/1}* 被谜题难住了吗？',
         '<25>{#f/1}* 你还在那个房间，对吧？',
         '<25>{#f/0}* 再等我几分钟，\n  等我回去了，咱们一起解开它。'
      ],
      puzzle2: [
         '<25>{#p/toriel}{#f/1}* 被谜题难住了吗？',
         '<25>{#f/23}* ...我感觉你应该不需要\n  我的帮助。'
      ],
      puzzle3: [
         '<25>{#p/toriel}{#f/1}* 被谜题难住了吗？',
         '<25>{#f/5}* ...\n* 恐怕我现在帮不了你。',
         '<25>{#f/0}* 再等我几分钟，\n  等我回去了，咱们一起解开它。'
      ],
      insult1: (sus: boolean) =>
         sus
            ? [
               '<25>{#p/toriel}{#f/0}* 喂？\n* 我是...',
               '<25>{#f/2}* ...！',
               '<25>{#f/3}* 你有本事再说一遍？'
            ]
            : [
               '<25>{#p/toriel}{#f/0}* 喂？\n* 我是...',
               '<25>{#f/2}* ...！',
               '<25>{#f/1}* 我的孩子... \n  我觉得那不是你的本意。'
            ],
      insult2: (sus: boolean) =>
         sus
            ? ['<25>{#p/toriel}{#f/15}* ...', '<25>{#f/12}* 我会当作没听见的。']
            : ['<25>{#p/toriel}{#f/1}* 我的孩子...']
   },

   i_candy: {
      battle: {
         description: '有一种独特的，非甘草的味道。',
         name: '怪物糖果'
      },
      drop: ['<32>{#p/human}* （你把怪物糖果扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （10 HP。）']
            : ['<32>{#p/basic}* “怪物糖果” 回复10 HP\n* 有一种独特的，非甘草的味道。'],
      name: '怪物糖果',
      use: ['<32>{#p/human}* （你吃掉了怪物糖果。）']
   },
   i_water: {
      battle: {
         description: '它的气味很像一氧化二氢。',
         name: '水'
      },
      drop: ['<32>{#p/human}* （你把水倒掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （12 HP。）']
            : ['<32>{#p/basic}* “水” 回复12 HP\n* 它的气味很像一氧化二氢。'],
      name: '水',
      use: () => [
         '<32>{#p/human}* （你喝了一瓶水。）',
         ...(SAVE.data.b.ufokinwotm8 ? [] : ["<33>{#p/human}* （你充满了一氧化二氢的力量。）"]) 
      ]
   },
   i_chocolate: {
      battle: {
         description: '辛劳一路，犒劳下自己吧。',
         name: '巧克力'
      },
      drop: () => [
         '<32>{#p/human}* （你把巧克力扔掉了。）',
         ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* ...唉，行吧。'])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （19 HP。它让你想起了某个人。）']
            : ['<32>{#p/basic}* “巧克力” 回复19 HP\n* 辛劳一路，犒劳下自己吧。'],
      name: '巧克力',
      use: () => [
         '<32>{#p/human}* （你吃掉了巧克力。）',
         ...(battler.active && battler.alive[0].opponent.metadata.reactChocolate
            ? ['<32>{#p/basic}* 托丽尔也闻到了巧克力的香味，\n  露出了微笑。']
            : [])
      ]
   },
   i_delta: {
      battle: {
         description: '据说它能让你“飘飘欲仙”。',
         name: '大麻素'
      },
      drop: ['<32>{#p/human}* （你把大麻素扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （5 HP. 你觉得它非常地奇怪。）']
            : ['<32>{#p/basic}* “大麻素” 回复5 HP\n* 据说它能让你“飘飘欲仙”。'],
      name: '大麻素',
      use: ['<32>{#p/human}* （你吸食了大麻素。）']
   },
   i_halo: {
      battle: {
         description: '一条头带，自带重力场。',
         name: '光环'
      },
      drop: ['<32>{#p/human}* （你像丢飞盘一般\n  把光环扔得老远。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （3防御。）']
            : ['<32>{#p/basic}* “光环” （3防御）\n* 一条头带，自带重力场。'],
      name: '光环',
      use: () => [
         '<32>{#p/human}* （你戴上了光环。）',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom && asrielinter.i_halo_use++ < 1
            ? ['<25>{#p/asriel1}{#f/20}* 我觉得，它和你蛮配的。']
            : [])
      ]
   },
   i_little_dipper: {
      battle: {
         description: '一把大勺子。',
         name: '小熊座'
      },
      drop: ['<32>{#p/human}* （你把小熊座扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （3攻击。）']
            : ['<32>{#p/basic}* “小熊座” （3攻击）\n* 一把大勺子。'],
      name: '小熊座',
      use: ['<32>{#p/human}* （你装备上了小熊座。）']
   },
   i_pie: {
      battle: {
         description: '一小块自家做的奶油糖肉桂派。',
         name: '派'
      },
      drop: ['<32>{#p/human}* （你把奶油糖肉桂派扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （99 HP。）']
            : ['<32>{#p/basic}* “奶油糖肉桂派” 回复99 HP\n* 一小块自家做的奶油糖肉桂派。'],
      name: '奶油糖肉桂派',
      use: ['<32>{#p/human}* （你吃掉了奶油糖肉桂派。）']
   },
   i_pie2: {
      battle: {
         description: '一道传统家常美食。',
         name: '蜗牛派'
      },
      drop: ['<32>{#p/human}* （你把蜗牛派扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （99 HP。）']
            : ['<32>{#p/basic}* “蜗牛派” 回复99 HP\n* 一道传统家常美食。'],
      name: '蜗牛派',
      use: ['<32>{#p/human}* （你吃掉了蜗牛派。）']
   },
   i_pie3: {
      battle: {
         description: '变粥的派，也还是周到的派。',
         name: '派粥'
      },
      drop: ['<32>{#p/human}* （你把派粥全倒掉了，\n  勺子也一起扔了。）'],
      info: ['<32>{#p/basic}* “派粥” 回复49 HP\n* 变{@fill=#ff0}粥{@fill=#fff}的派，也还是{@fill=#ff0}周{@fill=#fff}到的派。'],
      name: '派粥',
      use: ['<32>{#p/human}* （你用附带的勺子喝光了派粥。）']
   },
   i_pie4: {
      battle: {
         description: '真是恶有恶报...',
         name: '糊派'
      },
      drop: ['<32>{#p/human}* （你把烤糊的派随手扔在一边，\n  置之不理。）'],
      info: ['<32>{#p/basic}* “糊派” 回复39 HP\n* 真是恶有恶报...'],
      name: '糊派',
      use: ['<32>{#p/human}* （你吃掉了烤糊的派。）']
   },
   i_snails: {
      battle: {
         description: '一盘焗蜗牛。\n当然，是当做早餐的。',
         name: '焗蜗牛'
      },
      drop: ['<32>{#p/human}* （你把焗蜗牛扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （19 HP。）']
            : ['<32>{#p/basic}* “焗蜗牛” 回复19 HP\n* 一盘焗蜗牛。\n* 当然，是当做早餐的。'],
      name: '焗蜗牛',
      use: ['<32>{#p/human}* （你吃掉了焗蜗牛。）']
   },
   i_soda: {
      battle: {
         description: '恶心的暗黄色液体。',
         name: '呲呲汽水'
      },
      drop: () => [
         '<32>{#p/human}* （你把呲呲汽水扔掉了。）',
         ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* 谢天谢地。'])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （8 HP。）']
            : ['<32>{#p/basic}* “呲呲汽水” 回复8 HP\n* 恶心的暗黄色液体。'],
      name: '呲呲汽水',
      use: () => [
         '<32>{#p/human}* （你喝掉了呲呲汽水。）',
         ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* 好恶心！'])
      ]
   },
   i_spacesuit: {
      battle: {
         description: '在你坠毁的飞船上找到的。',
         name: '宇航服'
      },
      drop: ['<32>{#p/human}* （你把破损的宇航服扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （20 HP。一艘背井离乡的飞船上\n  残存的最后碎片。）']
            : ['<32>{#p/basic}* “破损的宇航服” 回复20 HP\n* 在你坠毁的飞船上找到的。'],
      name: '破损的宇航服',
      use: ['<33>{#p/human}* （在用完最后一个治疗包后，\n  破损的宇航服散架了。）']
   },
   i_spanner: {
      battle: {
         description: '一把生锈的旧扳手。',
         name: '旧扳手'
      },
      drop: ['<32>{#p/human}* （你把生锈的扳手扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （一把来自星河边际外的\n  可靠工具。）"]
            : ['<32>{#p/basic}* 一把生锈的旧扳手。'],
      name: '生锈的扳手',
      use: () => [
         ...(battler.active && battler.alive[0].opponent.metadata.reactSpanner
            ? []
            : ['<32>{#p/human}* （你把扳手抛向了空中。）\n* （什么都没发生。）'])
      ]
   },
   i_starbertA: {
      battle: {
         description: '限量版《超级星之行者》连载漫画\n第1期。',
         name: '星之行者1'
      },
      drop: ['<32>{#p/human}* （你把《超级星之行者1》扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （这似乎是一段旅程的开始。）']
            : ['<32>{#p/basic}* 限量版《超级星之行者》连载漫画。\n* 共有3期，这是第1期。'],
      name: '《超级星之行者1》',
      use: () => (battler.active ? ['<32>{#p/human}* （你看了看《超级星之行者1》。）', '<32>* （什么都没发生。）'] : [])
   },
   i_starbertB: {
      battle: {
         description: '限量版《超级星之行者》连载漫画\n第2期。',
         name: '星之行者2'
      },
      drop: ['<32>{#p/human}* （你把《超级星之行者2》扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （这似乎是一段旅程的中途。）']
            : ['<32>{#p/basic}* 限量版《超级星之行者》连载漫画。\n* 共有3期，这是第2期。'],
      name: '《超级星之行者2》',
      use: () =>
         battler.active
            ? [
               '<32>{#p/human}* （你看了看《超级星之行者2》。）',
               ...(SAVE.data.b.stargum
                  ? ['<32>* （什么都没发生。）']
                  : [
                     '<32>* （你发现漫画上\n  “附赠”了一块口香糖...）',
                     choicer.create('* （嚼它吗？）', "嚼", "不嚼")
                  ])
            ]
            : []
   },
   i_starbertC: {
      battle: {
         description: '限量版《超级星之行者》连载漫画\n第3期。',
         name: '星之行者3'
      },
      drop: ['<32>{#p/human}* （你把《超级星之行者3》扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （这似乎是一段旅程的终点...\n  亦或是一个新的开始？）']
            : ['<32>{#p/basic}* 限量版《超级星之行者》连载漫画。\n* 共有3期，这是最后一期。'],
      name: '《超级星之行者3》',
      use: () => (battler.active ? ['<32>{#p/human}* （你看了看《超级星之行者3》。）', '<32>* （什么都没发生。）'] : [])
   },
   i_steak: {
      battle: {
         description: '买它真是亏爆了。',
         name: '滋滋牛排'
      },
      drop: () => [
         '<32>{#p/human}* （你把滋滋牛排扔掉了。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : ["<32>{#p/basic}* 哼，没人会稀罕它的。"])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （14 HP。）']
            : ['<32>{#p/basic}* “滋滋牛排” 回复14 HP\n* 质量存疑。'],
      name: '滋滋牛排',
      use: () => [
         '<32>{#p/human}* （你吃掉了滋滋牛排。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : ['<32>{#p/basic}* 真难吃！'])
      ]
   },

   k_coffin: {
      name: '秘密钥匙',
      description: () =>
         SAVE.data.b.w_state_secret
            ? '用它解锁了外域的隐藏房间。'
            : "在托丽尔房间的袜子抽屉中找到的。"
   },

   c_call_toriel: <Partial<CosmosKeyed<CosmosProvider<string[]>, string>>>{
      w_start: [
         '<25>{#p/toriel}{#f/0}* 啊，当然。\n* 那一定是你迫降的地方。',
         '<25>{#f/0}* 其他来这里的人类\n  也是在那里降落的。',
         '<25>{#f/0}* 到来的飞船总是沿着\n  这个航线飞进这里...',
         '<25>{#f/1}* ...这肯定和力场有关系。'
      ],
      w_twinkly: () =>
         SAVE.data.b.toriel_twinkly
            ? [
               '<25>{#p/toriel}{#f/1}* 那是我找到你的地方吗？',
               '<25>{#f/5}* 那个折磨你的\n  会说话的星星，\n  一直是个讨厌鬼。',
               '<25>{#f/1}* 我以前试过跟他讲道理，\n  但...',
               '<25>{#f/9}* 我的努力\n  从未真正奏效过。'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 那是我找到你的地方吗？',
               '<25>{#f/5}* 就你一个人独自在外面...',
               '<25>{#f/0}* 幸好当时我在那里，\n  把你给带进来了。'
            ],
      w_entrance: [
         '<25>{#p/toriel}{#f/1}* 外域的入口啊...',
         '<25>{#f/0}* 在这之前的区域\n  确实不算外域的一部分。',
         '<25>{#f/5}* 那边... \n  更像是一个无名坠落点。',
         '<25>{#f/1}* 在第一个人类\n  直接坠入外域之后...',
         '<25>{#f/0}* 添加一个独立的平台\n  就显得很有必要了。'
      ],
      w_lobby: [
         '<25>{#p/toriel}{#f/0}* 这个房间里的谜题\n  很适合用来做演示。',
         '<25>{#f/1}* 不然，我还能\n  因为什么而制作它？',
         '<25>{#f/5}* 不幸的是，\n  并非所有人类\n  都明白这一点。',
         '<25>{#f/3}* 其中一个甚至试图\n  往安保屏障上冲...',
         '<25>{#f/0}* ...我只能说，\n  治疗魔法是必需的。'
      ],
      w_tutorial: [
         '<25>{#p/toriel}* 如果这都不能算作\n  我最喜欢的谜题，\n  我就不知道什么才算了！',
         '<25>* 它所教导的团队精神，\n  是一种最宝贵的品质。',
         '<25>{#f/1}* 由于我梦想\n  成为一名教师...',
         '<25>{#f/0}* 所以总想找机会将这些\n  重要的东西教给别人。'
      ],
      w_dummy: () => [
         '<25>{#p/toriel}{#f/1}* 训练室吗...？',
         ...(SAVE.data.n.plot < 42
            ? [
               [
                  '<25>{#f/0}* 嘻嘻，我还是很高兴\n  你按照我教的方法\n  完成了任务。',
                  '<25>{#f/1}* 友好的交谈\n  比其它选择更可取...',
                  '<25>{#f/0}* 可不仅仅是因为\n  那样能帮你交朋友！'
               ],
               [],
               [
                  '<25>{#f/5}* ...',
                  '<25>{#f/5}* 虽然你没按我教的去做...',
                  '<25>{#f/0}* 但至少你避免了冲突。',
                  '<25>{#f/0}* 考虑到还有其它选择，\n  这算是... \n  一个较好的结果。'
               ],
               [
                  '<25>{#f/0}* ...嗯。',
                  '<25>{#f/0}* 老实说，\n  我到现在还不知道\n  该怎么应对这事。',
                  '<25>{#f/1}* 长时间看着某物\n  是容易入迷，\n  但是...',
                  '<25>{#f/3}* 就你们俩这样...\n* 一直盯着对方...',
                  '<25>{#f/4}* ...'
               ],
               [
                  '<25>{#f/1}* 我不能说我预料到了\n  会发生这种事，\n  但是...',
                  '<25>{#f/0}* 这还是挺可爱的。',
                  '<25>{#f/0}* 意外的是，\n  你竟然是第一个\n  尝试这种方法的人类。',
                  '<25>{#f/1}* 现在看来，\n  这种解决办法\n  好像再明显不过了...'
               ],
               [],
               [
                  '<25>{#f/5}* ...',
                  '<25>{#f/7}* ...',
                  '<25>{#f/8}* 哈哈哈！\n* 啊，我忍不住笑了！',
                  '<25>{#f/6}* 你那\n  毫不掩饰的调情方式...',
                  '<25>{#f/1}* 确实让我吃了一惊！',
                  '<25>{#f/0}* 听我说，孩子。',
                  '<25>{#f/9}* 向对手调情\n  可不一定总是好主意。',
                  '<25>{#f/10}* 不过，\n  要是你能再像刚才那样...',
                  '<25>{#f/0}* 谁知道\n  你还能用这种方式\n  做到什么呢。'
               ]
            ][SAVE.data.n.state_wastelands_dummy]
            : [
               '<25>{#p/toriel}{#f/0}* 噢，对了，关于这个。',
               '<25>{#p/toriel}{#f/0}* 我最近发现有个幽灵\n  藏在这个假人里。',
               '<25>{#p/toriel}{#f/1}* 那幽灵看起来\n  在为什么事烦恼，\n  不过...',
               '<25>{#p/toriel}{#f/0}* 聊了一会儿后，\n  我帮那幽灵冷静了下来。',
               '<25>{#p/toriel}{#f/1}* 嗯...\n  不知道匿罗\n  现在在哪里呢。'
            ])
      ],
      w_coffin: [
         '<25>{#p/toriel}{#f/5}* ...',
         '<25>{#f/5}* 在这种时候，\n  我们应当表现出尊重。',
         '<25>{#f/10}* ...明白吗？',
         '<25>{#f/9}* 刚刚教你的东西，\n  比什么谜题和战斗技巧\n  重要得多。'
      ],
      w_danger: () =>
         SAVE.data.n.state_wastelands_froggit === 3
            ? [
               '<25>{#p/toriel}{#f/1}* 这房间终端上的谜题...',
               '<25>{#f/0}* 改编自我从一个\n  古老的地球传说里\n  看到的内容。',
               '<25>{#f/1}* 那个传说里包含了\n  一系列复杂的谜题...',
               '<25>{#f/0}* 其中有个烹饪谜题，\n  大伙总猜错，\n  但我觉得很巧妙。',
               SAVE.data.b.w_state_riddleskip
                  ? '<25>{#f/5}* 你没有解谜可真是遗憾。'
                  : '<25>{#f/0}* 很高兴看到你愿意解谜。'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 作为外域的管理者...',
               '<25>{#f/0}* 我自然得保证\n  其他怪物不会伤害你。',
               '<25>{#f/0}* 我和他们之间\n  已经达成了一个共识。',
               '<25>{#f/0}* 所以那只蛙吉特\n  才乖乖地走开了。'
            ],
      w_zigzag: [
         '<25>{#p/toriel}{#f/1}* 之所以把这个房间\n  建得如此蜿蜒曲折...',
         '<25>{#f/0}* ...是因为我觉得\n  直来直去太没意思了。',
         '<25>{#f/1}* 毕竟，谁会想\n  一辈子都走直线呢？',
         '<25>{#f/0}* 偶尔拐个弯，\n  换换心情也不错嘛。'
      ],
      w_froggit: [
         '<25>{#p/toriel}* 从这个房间开始，\n  你可能会碰上更多怪物。',
         '<25>{#f/0}* 他们喜欢在这里“闲逛”。\n* 感觉还不错吧？',
         '<25>{#f/1}* 之前这里一直很安静，\n  直到最近啊...',
         '<25>{#f/0}* 有个家伙\n  开始教其他怪物\n  怎么调情。',
         '<25>{#f/0}* 这下一来，\n  这帮家伙的社交方式\n  都变了不少。'
      ],
      w_candy: () => [
         SAVE.data.n.state_wastelands_candy < 4
            ? '<25>{#p/toriel}{#f/1}* 这个自动售货机\n  还没坏吗？'
            : '<25>{#p/toriel}{#f/1}* 天啊，\n  这个自动售货机\n  又坏了吗？',
         '<25>{#f/5}* 哎，我都数不清\n  我修了这玩意多少次了。',
         '<25>{#f/3}* 不过往好处想，\n  它这样确实省电了...',
         '<25>{#f/0}* ...也算是有利有弊吧。'
      ],
      w_puzzle1: [
         '<25>{#p/toriel}{#f/1}* 为了方便你\n  重试这个谜题...',
         '<25>{#f/0}* 我装了个传送系统，\n  能直接把你送回起点。',
         '<25>{#f/5}* 帮我装这玩意的科学员\n  已经不在了...',
         '<25>{#f/0}* 但他留下的作品\n  还在造福着大家呢。'
      ],
      w_puzzle2: [
         '<25>{#p/toriel}{#f/1}* 啊，\n  这里有个特别的谜题。',
         '<25>{#f/0}* 它主要考验的是耐心，\n  而不是记忆力。',
         '<25>{#f/1}* 大部分人类\n  都对此抱怨连连...',
         '<25>{#f/0}* 不过，\n  倒是有一个人类\n  很欣赏它背后的价值。'
      ],
      w_puzzle3: [
         '<25>{#p/toriel}{#f/1}* 告诉你个小窍门...',
         '<25>{#f/0}* 在这个谜题\n  开始显示序列时，\n  你就可以开始移动了。',
         '<25>{#f/5}* ...我猜这现在对你\n  已经没什么用了。',
         '<25>{#f/1}* 但如果你哪天\n  需要再解一遍的话...',
         '<25>{#f/0}* 不妨试试\n  我刚刚给你的建议。'
      ],
      w_puzzle4: [
         '<25>{#p/toriel}{#f/1}* 我注意到...\n  最近有人在卖\n  已经停刊的旧漫画书。',
         
         '<25>{#f/0}* 要是你闲着没事干，\n  可以去买一本看看。',
         '<25>{#f/0}* 你这个年纪的孩子\n  一般都挺喜欢\n  这些东西的！'
      ],
      w_mouse: [
         '<25>{#p/toriel}{#f/1}* 我觉得吧...',
         '<25>{#f/0}* 专门弄个房间出来\n  让人休息放松，\n  还是蛮重要的。',
         '<25>{#f/0}* 我自己就经常休息，\n  感觉对我的身心健康\n  很有帮助。',
         '<25>{#f/1}* 住在这里的小䗌螨\n  肯定也赞同我的观点...'
      ],
      w_blooky: () =>
         SAVE.data.b.killed_mettaton
            ? [
               '<25>{#p/toriel}{#f/1}* 不知为何，\n  那个常来这里的幽灵...',
               '<25>{#f/5}* 最近心情变得更差了。',
               '<25>{#f/1}* 我问过那幽灵怎么了，\n  那幽灵也不肯说...',
               '<25>{#f/5}* ...那之后我就\n  再也没见过那幽灵了。'
            ]
            : !SAVE.data.b.a_state_hapstablook || SAVE.data.n.plot < 68
               ? [
                  '<25>{#p/toriel}{#f/0}* 之前打电话来的\n  那个幽灵\n  经常在这附近晃悠。',
                  ...(SAVE.data.b.napsta_performance
                     ? ['<25>{#f/1}* 我本来以为\n  它表演完了后\n  心情会好点...']
                     : ['<25>{#f/1}* 我之前试着\n  让它开心一点...']),
                  '<25>{#f/5}* 但如今看来，\n  那幽灵的心结是\n  没那么容易解开的。',
                  '<25>{#f/1}* 我要是知道\n  那幽灵在纠结什么\n  就好了...'
               ]
               : [
                  '<25>{#p/toriel}{#f/1}* 不知为何，\n  那个常来这里的幽灵...',
                  '<25>{#f/0}* 最近心情好了很多。',
                  '<25>{#f/0}* 那幽灵甚至跑到我家里\n  来跟我说这事。',
                  '<25>{#f/1}* 看起来，\n  这是你的功劳...？',
                  '<25>{#f/0}* 那可真是太好了。\n* 孩子，\n  我真为你感到骄傲。'
               ],
      w_party: [
         '<25>{#p/toriel}{#f/0}* 活动室啊。\n* 我们在那里\n  举办各种活动。',
         '<25>{#f/0}* 什么戏剧啊，舞会啊...\n* 当然啦，\n  最重要的还是才艺表演！',
         '<25>{#f/0}* 看到大家尽情展现自我，\n  感觉再好不过了。',
         '<25>{#f/1}* 我之前去那儿\n  看过一场喜剧表演。',
         '<25>{#f/0}* 笑得肚子都疼了，\n  这辈子都没那么开心过！'
      ],
      w_pacing: () => [
         SAVE.data.b.toriel_twinkly
            ? '<25>{#p/toriel}{#f/0}* 我听说这里有谁\n  和那个会说话的星星\n  交上了“朋友”。'
            : '<25>{#p/toriel}{#f/0}* 我听说这里有谁\n  和一个会说话的星星\n  交上了“朋友”。',
         '<25>{#f/1}* 估计是某只蛙吉特吧...？',
         "<25>{#f/1}* 说实话，\n  我很担心\n  那个怪物的安危...",
         '<25>{#f/5}* 可不是一般的担心。'
      ],
      w_junction: [
         '<25>{#p/toriel}{#f/1}* 枢纽房啊...',
         '<25>{#f/0}* 我们本来打算在这里\n  弄个类似\n  社区公园的地方。',
         '<25>{#f/0}* 让来外域的访客们\n  感受到热情友好的氛围。',
         '<25>{#f/1}* 但我们后来发现，\n  压根没几个人来...',
         '<25>{#f/0}* 所以呢，就改成了\n  你现在看到的这副模样。',
         '<25>{#f/5}* 是有点单调，\n  不过也不能指望\n  每个房间都富丽堂皇吧...'
      ],
      w_annex: [
         '<25>{#p/toriel}* 从这里就能走到\n  运输船停靠站了，\n  那是个非常重要的设施。',
         '<25>{#f/1}* 不但能前往\n  前哨站的其他地方...',
         '<25>{#f/0}* 还能去\n  外域的其他区域呢。',
         '<25>{#f/1}* 不过，\n  你还只是个小孩子...',
         '<25>{#f/5}* 司机大概\n  不会让你去那些地方。',
         '<25>{#f/0}* 毕竟那边的\n  商店和公司什么的，\n  都是大人才会去的地方。'
      ],
      w_wonder: () => [
         
         SAVE.data.b.snail_pie
            ? '<25>{#p/toriel}{#f/0}* 我买完做蜗牛派的材料\n  回来的时候...\n  碰到了个小蘑菇。'
            : '<25>{#p/toriel}{#f/0}* 我买完做奶油糖肉桂派的\n  材料，回来的时候...\n  碰到了个小蘑菇。',
         '<25>{#f/3}* 不过，\n  它能飘在门口那里\n  确实蛮奇怪的...',
         '<25>{#f/0}* 那房间里的引力\n  估计变弱了点。',
         '<25>{#f/1}* 说不定是运输船\n  停在那里导致的...？'
      ],
      w_courtyard: [
         '<25>{#p/toriel}{#f/0}* 啊。\n* 那个空地啊。',
         '<25>{#f/1}* 呃，确实啊...',
         '<25>{#f/5}* 对像你这样的小孩来说，\n  这里确实没啥好玩的。',
         '<25>{#f/1}* 我每次都想在\n  有人类来了后\n  好好改造一下...',
         '<25>{#f/5}* 但他们总是\n  还没等我开干就走了。'
      ],
      w_alley1: [
         '<25>{#p/toriel}{#f/9}* ...是我劝你\n  不要离开的\n  那个房间。',
         '<25>{#f/5}* 我那时候想着，\n  如果跟你说说力场的事...',
         '<25>{#f/5}* 说不定就能\n  把你留下来了。',
         '<25>{#f/1}* ...我记得我也跟其他人类\n  说过同样的话，可是...',
         '<25>{#f/5}* 你也跟他们一样，\n  根本不听我的。'
      ],
      w_alley2: [
         '<25>{#p/toriel}{#f/9}* ...是我警告你\n  前方有危险的\n  那个房间。',
         '<25>{#f/5}* 有人跟我说，\n  我对那些危险\n  的看法是错的...',
         '<25>{#f/5}* 但我还是觉得\n  不应冒这个险。',
         '<25>{#f/9}* ...也许我真该重新想想了。'
      ],
      w_alley3: [
         '<25>{#p/toriel}{#f/9}* ...我真后悔\n  之前在这里对你做的事。',
         '<25>{#f/5}* 我不该强迫你留下来的...',
         '<25>{#f/5}* 那只是\n  我的一厢情愿罢了。',
         '<25>{#f/1}* 我知道你已经原谅我了...',
         '<25>{#f/5}* 就算我以前这么对你...'
      ],
      w_alley4: () =>
         SAVE.data.b.w_state_fightroom
            ? [
               '<32>{#s/phone}{#p/event}* 拨号中...',
               '<25>{#p/toriel}{#f/1}* 虽然那个房间\n  可能会勾起我们\n  不大愉快的回忆...',
               '<25>{#f/0}* 但这依然是我在外域里\n  最喜欢的地方之一。',
               '<25>{#f/1}* 某个伙计\n  偶尔会来到这里...',
               '<25>{#f/6}* ...也许你已经认识他了。',
               '<32>{#s/equip}{#p/event}* 滴...'
            ]
            : instance('main', 'toriButNotGarb') === void 0 // NO-TRANSLATE

               ? [
                  '<32>{#s/phone}{#p/event}* 拨号中...',
                  '<25>{#p/toriel}{#f/1}* 这么快就打过来了...？',
                  '<25>{#f/0}* ...我都还没回到家呢！',
                  '<25>{#f/0}* 请稍等一会再打过来。',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]
               : [
                  '<32>{#w.stopThatGoat}{#s/phone}{#p/event}* 拨号中...',
                  '<25>{#p/toriel}{#f/1}* 这么快就打过来了...？',
                  '<25>{#f/0}* ...我都还没\n  走出这房间呢！',
                  '<25>{#f/2}* 让我喘口气吧！',
                  '<32>{#w.startThatGoat}{#s/equip}{#p/event}* 滴...'
               ],
      w_bridge: [
         '<25>{#p/toriel}{#f/1}* 通往前哨站\n  其它地方的桥啊...',
         '<25>{#f/5}* 我之前差点把它给毁了，\n  想想就后怕。',
         '<25>{#f/0}* 当然啦，就算没有桥，\n  也可以乘坐运输船。',
         '<25>{#f/3}* 不过，那样估计\n  就没那么方便了。',
         '<25>{#f/1}* 庆幸这座桥还在吧。'
      ],
      w_exit: () =>
         SAVE.data.n.plot < 16
            ? [
               '<25>{#p/toriel}{#f/1}* 你要离开外域了吗，孩子...',
               '<25>{#f/0}* 那么...\n  我希望你记住一件事。',
               '<25>{#f/1}* 无论发生什么事，\n  无论遇到什么困难...',
               '<25>{#f/0}* 都要记住，\n  我相信你。',
               '<25>{#f/0}* 我相信你会\n  做出正确的事。',
               '<25>{#f/1}* 记住我的话，好吗？'
            ]
            : SAVE.data.n.plot < 17.001
               ? [
                  '<25>{#p/toriel}{#f/1}* 这么快就回来了...？',
                  '<25>{#f/0}* 也行吧。\n* 我当然不会反对。',
                  '<25>{#f/1}* 你想什么时候走\n  都没关系...',
                  '<25>{#f/0}* 不过，你能回来看看，\n  我还是很高兴的。'
               ]
               : [
                  '<25>{#p/toriel}{#f/2}* 你在那里\n  站了多久了！？',
                  '<25>{#f/1}* 你大老远跑回来，\n  只是为了\n  给我打个电话吗？',
                  '<25>{#f/0}* ...小傻瓜。',
                  '<25>{#f/0}* 你若只是想打个电话，\n  用不着往回走这么远的。'
               ],
      w_toriel_front: [
         '<25>{#p/toriel}{#f/1}* 你知道吗？\n  这座房子其实是仿造的。',
         '<25>{#f/1}* 以前我住在首塔...',
         '<25>{#f/0}* 这房子就是照着\n  那边的房子建的。',
         '<25>{#f/5}* 有时候我还会恍惚，\n  以为自己还在那里呢...'
      ],
      w_toriel_hallway: [
         '<25>{#p/toriel}{#f/0}* 走廊这里\n  没啥好说的。',
         '<26>{#f/1}* 不过，你要是愿意，\n  可以照照镜子...',
         '<25>{#f/0}* 我听说没事照照镜子，\n  能让人有所感悟。'
      ],
      w_toriel_asriel: [
         '<25>{#p/toriel}{#f/0}* 啊，这是你的房间！',
         '<25>{#f/5}* 你的... 房间...',
         '<25>{#f/9}* ...',
         '<25>{#f/5}* 也可能已经不是了。',
         '<25>{#f/1}* ...',
         '<25>{#f/1}* 其实，\n  你自己决定就好...',
         '<25>{#f/0}* 你要是想休息，\n  随时都可以来。'
      ],
      w_toriel_toriel: [
         '<25>{#p/toriel}{#f/0}* 你跑来我房间了啊。',
         '<25>{#f/0}* 想看书的话，\n  随便拿就是了。',
         '<25>{#f/0}* 不过看完记得放回去。',
         "<25>{#f/23}* 还有啊，\n  不许乱翻袜子抽屉！"
      ],
      w_toriel_living: () =>
         toriCheck()
            ? ['<25>{#p/toriel}{#f/3}* 我就在这呢，\n  用不着打电话，小家伙。']
            : [
               '<25>{#p/toriel}{#f/1}* 你这是\n  在客厅里翻箱倒柜呢？',
               '<25>{#f/0}* 我说，\n* 那些书你都看完了吗？',
               '<25>{#f/1}* 我本来想给你读读\n  那本关于蜗牛的书...',
               '<25>{#f/0}* 不过想了想，\n  你可能已经\n  不想再听到“蜗牛”了。'
            ],
      w_toriel_kitchen: [
         '<25>{#p/toriel}{#f/1}* 厨房啊...',
         '<25>{#f/0}* 我在冰箱里\n  给你留了条巧克力。',
         '<25>{#f/0}* 听说... \n  你们人类都爱吃这个。',
         '<25>{#f/1}* 希望你能喜欢它...'
      ],
      s_start: () =>
         SAVE.data.n.plot < 17.001
            ? [
               '<25>{#p/toriel}{#f/0}* 如果我没猜错的话，\n  我的某个朋友\n  应该就在前面。',
               '<26>{#f/0}* 别害怕，小家伙。',
               '<25>{#f/1}* 继续往前走...'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 我记得...',
               '<26>{#f/0}* ...这条长路，本来是打算\n  建星港的城郊小镇的。',
               '<25>{#f/0}* 当然啦，\n  后来没有建成。',
               '<25>{#f/2}* 一个镇子已经够多了！'
            ],
      s_sans: () =>
         SAVE.data.n.plot < 17.001
            ? [
               '<25>{#p/toriel}{#f/0}* 如果我没猜错的话，\n  我的某个朋友\n  应该就在前面。',
               '<26>{#f/0}* 别害怕，小家伙。',
               '<25>{#f/1}* 继续往前走...'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 你应该听说过\n  “重力转换器”吧？',
               '<26>{#f/0}* 衫斯跟我说了不少\n  有关这玩意儿的事。',
               '<25>{#f/1}* 似乎这上面\n  还有另一个世界...',
               '<25>{#f/0}* 那里的东西\n  都是反着长的。'
            ],
      s_crossroads: [
         '<25>{#p/toriel}{#f/1}* 这个老停靠点以前\n  就像个繁忙的十字路口...',
         '<25>{#f/1}* 补给飞船来来往往...',
         '<25>{#f/1}* 随时准备支援\n  下一个建设项目...',
         '<25>{#f/5}* 可惜，这个前哨站\n  好像不再扩张了。',
         '<25>{#f/0}* 想当年，建设新区域\n  可是我们的文化标志啊！'
      ],
      s_human: [
         "<25>{#p/toriel}* 听说衫斯的兄弟\n  以后想加入皇家卫队。",
         '<25>{#f/1}* 这小骷髅还挺有志向的...',
         '<25>{#f/0}* 虽然我对卫队不太感冒，\n  但他有梦想是好事。',
         '<25>{#f/5}* 最近有好多人\n  都放弃梦想了...',
         '<25>{#f/0}* 但他没有！\n* 这小骷髅知道\n  什么对他自己最好。'
      ],
      s_papyrus: [
         '<25>{#p/toriel}* 衫斯跟我说了好多\n  帕派瑞斯在他岗位上\n  加装的小玩意儿。',
         '<25>{#f/1}* 有一个把手，\n  说是能方便他\n  “大摇大摆”地上岗...',
         '<25>{#f/1}* 有一个所谓的\n  “天空扳手”，\n  说是用来“锁定”星星的...',
         '<25>{#f/0}* 还有一个附加的屏幕，\n  说是用来记录\n  他那堆职责的。',
         '<25>{#f/6}* 他搞这些发明，\n  不知道的还以为\n  他在实验室上班呢。'
      ],
      s_doggo: [
         '<25>{#p/toriel}{#f/5}* 皇家卫队是不是\n  老找你麻烦？',
         '<25>{#f/0}* 衫斯说他会提醒你\n  可能会碰上他们。',
         '<25>{#f/1}* ...',
         '<25>{#f/1}* 也许我该多操点心，\n  不过...',
         '<25>{#f/0}* 直觉告诉我\n  你不会有事的。',
         '<25>{#f/0}* 我相信\n  那家伙会照顾好你的。'
      ],
      s_robot: [
         '<25>{#p/toriel}{#f/1}* 啊，这声音真好听...',
         '<25>{#f/0}* 我无论到了哪都能认出\n  建筑机器人的声音。',
         '<25>{#f/5}* 自从AI程序被禁用后，\n  我们就停用了\n  大部分建筑机器人。',
         '<25>{#f/1}* 不过有两个\n  产生了自我意识，\n  但没有出问题的机器人...',
         '<25>{#f/0}* 得到了体面的退休。',
         '<25>{#f/0}* 很高兴知道\n  它们现在还活着。'
      ],
      s_maze: [
         "<25>{#p/toriel}* 衫斯跟我讲过\n  他的兄弟有多爱谜题。",
         '<25>{#f/1}* 听说他的兄弟\n  还自己设计了一些...？',
         '<25>{#f/0}* 我最好奇的是\n  那个“躲避烈火之墙”。',
         '<25>{#f/1}* 那火烫不烫？\n* 还是说只是暖烘烘的？',
         '<25>{#f/5}* 为了你好，\n  我希望是后者。'
      ],
      s_dogs: [
         '<25>{#p/toriel}{#f/1}* 听说有一对狗夫妇\n  加入了皇家卫队。',
         '<25>{#f/3}* 又是皇家守卫\n  又是夫妻...',
         '<25>{#f/4}* That relationship must have some \"interesting\" motivations.',
         '<25>{#f/6}* But what do I know.\n* As Sans would say, I am merely a \"goat!\"'
      ],
      s_lesser: [
         '<25>{#p/toriel}* 也不知道现在\n  星港都流行吃啥。',
         '<25>{#f/1}* 我上次到那儿时，\n  大家都爱吃幽灵水果...',
         '<25>{#f/0}* 那玩意儿挺奇怪的，\n  是不是幽灵都能吃。',
         '<26>{#f/0}* 现在流行啥\n  我肯定猜不到，\n  估计我做梦都想不到。'
      ],
      s_bros: [
         "<25>{#p/toriel}{#f/1}* 衫斯居然喜欢玩\n  那种“找不同”的谜题...",
         '<25>{#f/0}* ...我一直都没搞明白。',
         '<25>{#f/1}* 那么简单的谜题，\n  他怎么会觉得有意思呢？',
         '<26>{#f/3}* ...更具体来说...',
         '<25>{#f/1}* 这种谜题到底\n  哪里好笑了？'
      ],
      s_spaghetti: [
         "<25>{#p/toriel}* 衫斯常说他兄弟帕派瑞斯\n  特喜欢意大利面。",
         '<25>{#f/6}* 但为啥只吃一种呢？\n* 想想还有那么多种\n  意大利面...',
         '<25>{#f/8}* 斜管面！\n* 宽面！\n* 珍珠面！',
         '<25>{#f/0}* 吃吃蝴蝶面\n  才能展翅高飞嘛。',
         '<25>{#f/2}* ...换句话说，要么\n  像粗面一样做大做强，\n  要么回家歇着！'
      ],
      s_puzzle1: [
         '<25>{#p/toriel}{#f/1}* 星港现在的那些谜题，\n  不管啥样吧...',
         '<25>{#f/0}* 我估计肯定跟\n  我以前离开的时候\n  不一样了。',
         '<25>{#f/5}* 以前的谜题\n  难度高得离谱...',
         '<25>{#f/5}* 也不知道那时候\n  到底有没有人能解开。'
      ],
      s_puzzle2: [
         '<25>{#p/toriel}{#f/1}* 有人说一些谜题\n  有隐藏的解法...',
         '<25>{#f/0}* ...我觉得纯属扯淡！',
         '<25>{#f/0}* 藏着什么秘密解法，\n  不是完全违背了\n  解谜的初衷吗？',
         '<25>{#f/1}* 谜题啊，至少那种\n  难度正常的谜题...',
         '<25>{#f/2}* 就应该按照\n  设计者的思路去解！'
      ],
      s_jenga: [
         '<25>{#p/toriel}* 据我所知，\n  现在的皇家科学员\n  是艾菲斯博士。',
         '<25>{#f/1}* 虽然她可能比不上前任\n  那么经验丰富...',
         '<25>{#f/0}* 但我相信她完全有能力\n  走出自己的一条路。',
         '<25>{#f/0}* 你可能会觉得意外，\n  但我其实挺佩服\n  那些科学员的。',
         '<25>{#f/2}* 他们的脑袋\n  实在太聪明了！'
      ],
      s_pacing: [
         '<25>{#p/toriel}{#f/1}* 我劝你还是离那些\n  可疑的商人远点...',
         '<25>{#f/0}* 鬼知道他们\n  葫芦里卖的什么药。',
         '<25>{#f/0}* 你可能会被忽悠\n  而买了一堆破石头。',
         '<25>{#f/3}* 很不幸，\n  我就是吃了这亏\n  才明白这个道理的...'
      ],
      s_puzzle3: [
         '<25>{#p/toriel}{#f/1}* 这个房间的谜题\n  是考验记忆力的吧？',
         '<25>{#f/1}* 衫斯说他的兄弟\n  经常更换它的图案...',
         '<25>{#f/0}* ...只为了维持\n  “滚动密码”的安全性。',
         '<25>{#f/6}* 真是搞笑！',
         '<25>{#f/0}* 在我们外域，\n  考验记忆力的谜题\n  都是能现改现玩的。'
      ],
      s_greater: [
         '<25>{#p/toriel}{#f/1}* 那个狗窝以前\n  是帝犬座的...',
         '<25>{#f/0}* ...它早就从卫队退休了。',
         '<25>{#f/7}* 好在现在住那儿的小狗\n  也特别活泼！',
         '<25>{#f/0}* 看来它从\n  它英明神武的师父那儿\n  学到了不少东西。'
      ],
      s_math: [
         '<25>{#p/toriel}{#f/1}* 拜托，\n  谁能给我解释解释\n  啥叫“狗子的公道”啊？',
         '<25>{#f/0}* 我时不时就听到\n  这个奇怪的说法。',
         '<25>{#f/5}* 我倒是知道有只小狗狗\n  偶尔会来外域逛逛...',
         '<25>{#f/0}* 说不定就是它\n  需要主持公道。'
      ],
      s_bridge: [
         '<25>{#p/toriel}{#f/1}* 这座桥刚建好的时候，\n  它摇摇欲坠...',
         "<25>{#f/0}* 导致前哨站的系统\n  不得不升级。",
         '<25>{#f/0}* 没多久，\n  他们就加装了一个\n  叫“重力护栏”的东西。',
         '<25>{#f/0}* 就是这玩意没让你\n  从平台上掉下去。'
      ],
      s_town1: [
         '<25>{#p/toriel}{#f/0}* 啊...\n* 这是星港的小镇。',
         '<25>{#f/1}* 我听说那儿有个\n  叫“烤尔比”的餐馆...',
         '<25>{#f/0}* ...里面有很多\n  千奇百怪的新老顾客。',
         '<25>{#f/0}* 衫斯也经常去那儿吃饭。',
         '<25>{#f/7}* 听说那儿的酒保\n  很“烧”。'
      ],
      s_taxi: [
         '<25>{#p/toriel}{#f/1}* 小镇附近\n  有个运输船停靠站吗？',
         '<25>{#f/1}* ...嗯...',
         '<25>{#f/0}* 不知道那个\n  跟外域的这个停靠站\n  有啥不一样。',
         '<25>{#f/1}* 当然啦，\n  不亲眼看看我哪知道啊...',
         '<25>{#f/0}* 但我又没有高档望远镜，\n  这可怎么咋看呢？',
         '<25>{#f/0}* 也不知道上哪儿\n  才能搞到一个。'
      ],
      s_town2: [
         '<25>{#p/toriel}{#f/1}* 纳普斯特最近跟我说\n  它开了个店...',
         '<25>{#f/5}* ...在镇子“南边”\n  开了个店。',
         '<25>{#f/1}* 这是怎么回事？',
         '<25>{#f/0}* 我记得当初规划的时候，\n  整个小镇就是\n  一个大方块啊。',
         '<25>{#f/1}* 难道后来给分成两半了？',
         '<25>{#f/5}* 要真是那样就太可惜了，\n  毕竟当初的设想\n  可不是这样的...'
      ],
      s_battle: [
         '<25>{#p/toriel}{#f/1}* 衫斯跟我反复强调...',
         '<25>{#f/0}* 一定要小心他的兄弟的\n  什么“特殊攻击”。',
         '<25>{#f/1}* 要是帕派瑞斯找你切磋，\n  你一定要避开\n  他的特殊攻击。',
         '<25>{#f/2}* 再说一遍，一定要避开\n  他的特殊攻击！\n* 千万别被打到！',
         '<25>{#f/0}* 关于这事我就说这么多。'
      ],
      s_exit: [
         '<25>{#p/toriel}{#f/1}* 如果你打算离开星港，\n  你得明白...',
         '<25>{#f/5}* 我的手机太老了，\n  只能打到\n  工厂里的个别房间。',
         '<25>{#f/9}* 你找到出去的路之前，\n  可能联系不上我。',
         '<25>{#f/1}* 请别见怪。\n* 但我觉得应该\n  提前跟你说一声。'
      ],
      f_entrance: [
         '<25>{#p/toriel}{#f/7}* 你找到\n  信号好的地方啦...？',
         '<25>{#f/1}* ...看来那里比较开阔...',
         '<25>{#f/0}* 附近还有\n  人工合成的灌木丛。',
         '<25>{#f/3}* 要是钻进了那玩意...',
         '<25>{#f/4}* 浑身上下会又痒又难受...',
         '<25>{#f/0}* 不过我相信\n  你肯定不会傻到往里钻的。'
      ],
      f_bird: () =>
         SAVE.data.n.plot !== 47.2 && SAVE.data.n.plot > 42 && SAVE.data.s.state_foundry_deathroom !== 'f_bird' // NO-TRANSLATE

            ? [
               '<25>{#p/toriel}{#f/0}* 没有什么比得上\n  那只无畏小鸟的啾啾声。',
               '<25>{#f/1}* 就算是当年\n  它还在水桶里住着时...',
               '<25>{#f/1}* 它也会扑腾着\n  它那小小的翅膀...',
               '<25>{#f/1}* 带着我们到处跑...',
               '<25>{#f/0}* 我经常让它\n  帮忙运送杂货。',
               '<25>{#f/5}* ...那会儿我们这个物种\n  还都挤在\n  那个旧工厂里生活呢。'
            ]
            : [
               '<25>{#p/toriel}{#f/5}* 你那边听起来好寂静啊...',
               '<25>{#f/5}* 总感觉少了点什么。',
               '<25>{#f/5}* 少了点什么重要的东西...',
               '<25>{#f/0}* 算了，别在意。\n* 我可能想太多了。',
               '<25>{#f/1}* ...',
               '<25>{#f/1}* 啾，啾，\n  啾，啾，\n  啾...'
            ],
      f_taxi: [
         "<25>{#p/toriel}{#f/1}* 这么说你找着了\n  工厂的运输船停靠站...？",
         '<25>{#f/0}* 那儿说不定可以用来\n  躲开皇家卫队队长呢。',
         '<25>{#f/1}* 之前有个访客跟我说过，\n  卫队长她\n  特别痴迷于长矛...',
         '<25>{#f/0}* 真奇怪。\n* 我认识的那个卫队长\n  明明喜欢的是佩刀啊。'
      ],
      f_battle: [
         '<25>{#p/toriel}{#f/0}* 啊，你终于到了。',
         "<25>{#f/0}* 你现在在工厂的边缘了。",
         '<26>{#f/1}* 从这里往前，\n  我就不知道\n  前面是什么地方了...',
         '<25>{#f/5}* 我离开的时候，\n  那儿只有\n  通往首塔的电梯。',
         '<25>{#f/1}* 不过现在嘛，\n  好像多了个\n  叫“空境”的地方...',
         '<25>{#f/23}* ...也不知道是谁\n  取的这么个名字。'
      ],
      f_exit: toriel_aerialis,
      a_start: toriel_aerialis,
      a_path1: toriel_aerialis,
      a_path2: toriel_aerialis,
      a_path3: toriel_aerialis,
      a_rg1: toriel_aerialis,
      a_path4: toriel_aerialis,
      a_barricade1: toriel_aerialis,
      a_puzzle1: toriel_aerialis,
      a_mettaton1: toriel_aerialis,
      a_elevator1: toriel_aerialis,
      a_elevator2: toriel_aerialis,
      a_sans: toriel_aerialis,
      a_pacing: toriel_aerialis,
      a_prepuzzle: toriel_aerialis,
      a_puzzle2: toriel_aerialis,
      a_mettaton2: toriel_aerialis,
      a_rg2: toriel_aerialis,
      a_barricade2: toriel_aerialis,
      a_split: toriel_aerialis,
      a_offshoot1: toriel_aerialis,
      a_elevator3: toriel_aerialis,
      a_elevator4: toriel_aerialis,
      a_auditorium: toriel_aerialis,
      a_aftershow: toriel_aerialis,
      a_hub1: toriel_aerialis,
      a_hub2: toriel_aerialis,
      a_lookout: toriel_aerialis,
      a_hub3: toriel_aerialis,
      a_plaza: toriel_aerialis,
      a_elevator5: toriel_aerialis,
      a_hub4: toriel_aerialis,
      a_sleeping1: toriel_aerialis,
      a_hub5: toriel_aerialis
   },
   c_call_toriel_early: () =>
      game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

         ? ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* 现在，立刻，马上\n  回家里来！']
         : [
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/23}* 你那样对待我，\n  难道不累吗？'
               : SAVE.data.n.state_wastelands_napstablook === 5
                  ? '<25>{#p/toriel}{#f/1}* 你等了那么久，\n  难道不累吗？'
                  : '<25>{#p/toriel}{#f/1}* 你经历了那么多，\n  难道不累吗？',
            3 <= SAVE.data.n.cell_insult
               ? game.room.startsWith('w_toriel') // NO-TRANSLATE

                  ? '<25>{#f/0}* 要不要去看看\n  我在客房里\n  为你准备的床？'
                  : '<25>{#f/0}* 要不要去看看\n  我在房子里\n  为你准备的床？'
               : game.room.startsWith('w_toriel') // NO-TRANSLATE

                  ? '<25>{#f/0}* 来走廊这边，\n  我给你看点东西。'
                  : '<25>{#f/0}* 来房子这边，\n  我给你看点东西。'
         ],
   c_call_toriel_late: () =>
      SAVE.data.n.plot === 8.1
         ? ['<32>{#p/human}* （对方忙线中。）']
         : game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

            ? ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* 现在，立刻，马上\n  回家里来！']
            : [
               '<25>{#p/toriel}{#f/1}* 孩子，用不着给我打电话。',
               3 <= SAVE.data.n.cell_insult
                  ? '<26>{#f/23}* 你打算说什么，\n  我们都清楚得很。'
                  : game.room === 'w_toriel_living' // NO-TRANSLATE

                     ? toriCheck()
                        ? '<25>{#f/0}* 毕竟，我现在和你\n  在一间屋子里呢。'
                        : '<25>{#f/0}* 我马上就搞定了。'
                     : game.room.startsWith('w_toriel') // NO-TRANSLATE

                        ? toriCheck()
                           ? '<25>{#f/0}* 如果你想见我，\n  可以来客厅。'
                           : '<25>{#f/0}* 如果你想见我，\n  可以在客厅等着。'
                        : '<25>{#f/0}* 如果你想见我，\n  可以来我的房子这边。'
            ],
   c_call_asriel: () =>
      [
         [
            "<25>{#p/asriel2}{#f/3}* 知道了吧，我不会接的。",
            '<25>{#p/asriel2}{#f/4}* 咱可没闲工夫打电话玩。'
         ],
         ['<25>{#p/asriel2}{#f/4}* ...'],
         ['<25>{#p/asriel2}{#f/4}* ...开玩笑吗？'],
         ['<25>{#p/asriel2}{#f/3}* 吃饱了撑的。'],
         []
      ][Math.min(SAVE.flag.n.ga_asrielCall++, 4)],
   s_save_outlands: {
      w_courtyard: {
         name: '外域 - 空地',
         text: () =>
            SAVE.data.n.plot > 16
               ? [
                  6 <= world.population
                     ? '<32>{#p/human}* （即使只是来拜访这个小小的家，\n  这也使你充满了决心。）'
                     : '<32>{#p/human}* （即使只是来拜访这个小屋，\n  这也使你充满了决心。）'
               ]
               : 6 <= world.population
                  ? ['<32>{#p/human}* （面前是一座温馨的小房子，\n  这使你充满了决心。）']
                  : ['<32>{#p/human}* （四周都是金属围墙，\n  眼前却有一座小屋，\n  这使你充满了决心。）']
      },
      w_entrance: {
         name: '外域 - 入口',
         text: () =>
            world.runaway
               ? [
                  '<32>{#p/human}* （繁忙的外域如今一片死寂，\n  这使你充满了决心。）',
                  '<32>{#p/human}* （HP已回满。）'
               ]
               : SAVE.data.n.plot < 48
                  ? [
                     '<32>{#p/human}* （繁忙的外域就在前方，\n  这使你充满了决心。）',
                     '<32>{#p/human}* （HP已回满。）'
                  ]
                  : [
                     '<32>{#p/human}* （过了这么久，\n  你回到了一切开始的地方...）',
                     '<32>{#p/human}* （这使你充满了决心。）',
                     '<32>{#p/human}* （HP已回满。）'
                  ]
      },
      w_froggit: {
         name: '外域 - 休息区',
         text: () =>
            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway || roomKills().w_froggit > 0
               ? SAVE.data.n.plot < 8.1
                  ? [
                     '<32>{#p/human}* （空气变得浑浊了起来。）\n* （不知怎地，这使你充满了决心。）',
                     '<32>{#p/human}* （HP已回满。）'
                  ]
                  : [
                     '<32>{#p/human}* （这里变得死气沉沉。）\n* （当然，这使你充满了决心。）',
                     '<32>{#p/human}* （HP已回满。）'
                  ]
               : SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （这里虽然已经空无一人，\n  但空气依然清新。）',
                     '<32>{#p/human}* （当然，这使你充满了决心。）',
                     '<32>{#p/human}* （HP已回满。）'
                  ]
                  : [
                     '<32>{#p/human}* （见到这些奇异的生物\n  使你充满了决心。）',
                     '<32>{#p/human}* （HP已回满。）'
                  ]
      },
      w_mouse: {
         name: '外域 - 䗌螨巢',
         text: () =>
            world.population > 5 && !SAVE.data.b.svr && !world.runaway
               ? [
                  '<32>{#p/human}* （想到䗌螨有朝一日会探出头来...）',
                  '<32>{#p/human}* （你充满了蚗心。）'
               ]
               : [
                  '<32>{#p/human}* （就算䗌螨大概\n  再也不会探出头来...）',
                  '<32>{#p/human}* （你还是充满了蚗心。）'
               ]
      },
      w_start: {
         name: '坠落点',
         text: []
      }
   }
};


// END-TRANSLATE
