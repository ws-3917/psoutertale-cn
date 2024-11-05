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
         '<25>{#p/toriel}{#f/1}* 聽說空境那兒\n  有種特殊的液體...',
         '<25>{#f/0}* 主要用於隔絕電流。',
         '<25>{#f/1}* 要是你能帶著這種液體，\n  你會帶到哪兒去？',
         '<25>{#f/1}* 會一直帶到首塔嗎？',
         '<25>{#f/1}* 還是直接扔到垃圾站？',
         '<25>{#f/0}* 要是那樣可就太沒勁了。'
      ]
      : SAVE.data.n.plot < 51
         ? world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
            ? [
               '<25>{#p/toriel}{#f/1}* 說不定，\n  等我以後當上老師...',
               '<25>{#f/0}* 可以帶學生\n  去皇家實驗室參觀。',
               "<25>{#f/0}* 當然了，\n  前提是Alphys博士同意。",
               '<25>{#f/1}* 那裡肯定做了\n  不少有意思的實驗...',
               "<25>{#f/0}* 對孩子們來說，這可是\n  難得的學習機會。"
            ]
            : [
               '<25>{#p/toriel}{#f/0}* 小傢伙，\n  你上電視的事\n  已經傳遍啦！',
               '<25>{#f/0}* 不過我沒有電視，\n  所以沒能看到。',
               '<25>{#f/1}* 我聽說這事的時候，\n  還是挺驚訝的...',
               SAVE.data.n.state_aerialis_talentfails === 0
                  ? '<25>{#f/2}* 你居然一次也沒有漏擊！'
                  : '<25>{#f/6}* 你居然跳舞跳得那麼棒！'
            ]
         : SAVE.data.n.plot < 56
            ? [
               '<25>{#p/toriel}{#f/1}* 嗯...\n* 空境的皇家守衛們啊...',
               '<25>{#f/0}* 我聽說他們\n  最喜歡吃... 鮭魚。',
               '<25>{#f/1}* 還是... 冰淇淋？',
               '<25>{#f/2}* 不對，我記得是披薩！',
               '<25>{#f/0}* 這些東西都離不開\n  那不起眼的複製器。',
               '<25>{#f/1}* 話說...\n  那些新兵喜歡吃這些，\n  是不是有點怪啊？'
            ]
            : SAVE.data.n.plot < 59
               ? [
                  world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
                     ? '<25>{#p/toriel}{#f/0}* 小傢伙，\n  聽說你上電視啦。'
                     : '<25>{#p/toriel}{#f/0}* 小傢伙，\n  聽說你又上電視啦。',
                  '<25>{#f/1}* 而且你還做了件\n  驚天動地的事...',
                  iFancyYourVilliany()
                     ? '<25>{#f/2}* 居然把材料掉包\n  來製作塑性炸藥！'
                     : SAVE.data.n.state_aerialis_crafterresult === 0
                        ? '<25>{#f/2}* 居然毫不退縮地\n  直面爆炸的威脅！'
                        : '<25>{#f/2}* 居然擅自使用一次性的\n  可攜式噴氣背包！',
                  '<25>{#f/3}* ...你啊...',
                  '<25>{#f/4}* 你這是在玩命嗎？'
               ]
               : SAVE.data.n.plot < 60
                  ? [
                     '<25>{#p/toriel}{#f/1}* 空境的謎題\n  都是些啥樣的啊？',
                     '<25>{#f/1}* 是雷射那種的嗎？',
                     '<25>{#f/1}* 失敗了會把你\n  送回起點嗎？',
                     '<25>{#f/1}* ...話說，那些謎題\n  真的能「失敗」嗎？',
                     '<25>{#f/0}* 嗯...\n* 抱歉一下子\n  問了這麼多問題。',
                     '<25>{#f/1}* 我這種喜歡謎題的\n  忍不住就想東想西...'
                  ]
                  : SAVE.data.n.plot < 61
                     ? [
                        '<25>{#p/toriel}{#f/1}* 聽說你和Mettaton\n  發生的這些趣事後...',
                        '<25>{#f/0}* 我突然想到一個問題。',
                        '<25>{#f/1}* AI程式不是被禁了嗎？\n  那像他這樣的機器人\n  是怎麼搞的？',
                        '<25>{#f/5}* Alphys博士肯定不會\n  違反這樣既定的規則。',
                        '<25>{#f/0}* 嗯...\n* 肯定是有別的原因。'
                     ]
                     : SAVE.data.n.plot < 63
                        ? [
                           '<25>{#p/toriel}{#f/1}* 嗯...\n* 空境的皇家守衛們啊...',
                           '<25>{#f/0}* 我聽說她們才剛升職。',
                           '<25>{#f/1}* 我還聽說她們\n  對武器特別挑剔...',
                           '<25>{#f/5}* 明明有更好的武器，\n  她們卻不願意換。',
                           '<25>{#f/0}* 倒也不是說\n  我希望她們換武器啦。',
                           '<25>{#f/2}* 我已經夠擔心你的了！'
                        ]
                        : SAVE.data.n.plot < 65
                           ? SAVE.data.b.a_state_hapstablook
                              ? [
                                 '<25>{#p/toriel}{#f/1}* 有隻叫Lurksalot的幽靈\n  最近跟我談起了\n  一些家裡的事。',
                                 '<25>{#f/5}* 看來這事\n  困擾那幽靈很久了。',
                                 '<25>{#f/0}* 還好，\n  那幽靈說\n  應該很快就能解決了。',
                                 '<25>{#f/1}* 而且還是在\n  你的幫助下？',
                                 '<25>{#f/0}* 那可真是太好了。\n* 小傢伙，\n  我真為你感到驕傲。'
                              ]
                              : [
                                 '<25>{#p/toriel}{#f/1}* 有隻叫Lurksalot的幽靈\n  最近跟我談起了\n  一些家裡的事。',
                                 '<25>{#f/5}* 看來這事\n  困擾那幽靈很久了。',
                                 '<25>{#f/1}* 那幽靈說它的表親\n  本想找你幫忙...',
                                 '<25>{#f/5}* 但當時你沒空。',
                                 '<25>{#f/1}* ...你肯定是在\n  忙些什麼吧？'
                              ]
                           : SAVE.data.n.plot < 66
                              ? [
                                 '<25>{#p/toriel}{#f/1}* 沒想到一個機器人\n  唱歌居然這麼好聽！',
                                 "<25>{#f/0}* 聽了Mettaton的新歌之後，\n  我都不敢相信\n  自己的耳朵了。",
                                 '<26>{#f/1}* 不過，\n  有些歌詞有點... 暴力，\n  不太符合我的口味。',
                                 '<25>{#f/5}* ...',
                                 '<25>{#f/0}* 孩子，別擔心。\n* 沒人會把你\n  流放到太空裡去的。'
                              ]
                              : SAVE.data.n.plot < 68
                                 ? [
                                    '<25>{#p/toriel}{#f/0}* Sans說他很喜歡\n  去「休閒迴廊」。',
                                    '<25>{#p/toriel}{#f/1}* 那裡有美術班、\n  音樂部、圖書館...',
                                    '<25>{#p/toriel}{#f/5}* 可惜那片區域\n  還有一些地方\n  對小孩子來說不太安全。',
                                    '<25>{#p/toriel}{#f/3}* 他們就不能多花點心思，\n  把環境弄好一點嗎？',
                                    '<25>{#p/toriel}{#f/2}* 這些藝術類的活動\n  可是能給孩子們\n  帶來寶貴的成長體驗啊！'
                                 ]
                                 : SAVE.data.n.plot < 70
                                    ? world.bad_robot
                                       ? [
                                          '<25>{#p/toriel}{#f/0}* 我認識的人都對\n  「壓軸好戲」的取消\n  感到很失望。',
                                          '<25>{#p/toriel}{#f/0}* 他們說那本會是\n  一場非常精彩的戰鬥。',
                                          '<25>{#p/toriel}{#f/1}* 雖然我很慶幸\n  你不用參加那種戰鬥...',
                                          '<25>{#p/toriel}{#f/5}* 但我還是忍不住擔心\n  接下來你會遇到什麼。'
                                       ]
                                       : SAVE.data.b.killed_mettaton
                                          ? [
                                             '<25>{#p/toriel}{#f/0}* 我認識的人都在討論著\n  「壓軸好戲」。',
                                             '<25>{#p/toriel}{#f/1}* 他們說Mettaton\n  為了演好節目\n  獻出了生命...',
                                             '<25>{#p/toriel}{#f/0}* 但我心裡清楚得很。',
                                             '<25>{#p/toriel}{#f/1}* 機器人壞了還能再修嘛，\n  對吧？'
                                          ]
                                          : [
                                             '<25>{#p/toriel}{#f/0}* 我認識的人都在討論著\n  「壓軸好戲」。',
                                             '<25>{#p/toriel}{#f/0}* 他們說看到\n  你和Mettaton的表演，\n  他們都很開心。',
                                             '<25>{#p/toriel}{#f/1}* 我很高興\n  你們似乎玩得很愉快...',
                                             '<25>{#p/toriel}{#f/5}* 但我還是忍不住擔心\n  接下來你會遇到什麼。'
                                          ]
                                    : [
                                       '<25>{#p/toriel}{#f/1}* 小傢伙，\n  你在外面還好嗎？',
                                       '<25>{#p/toriel}{#f/5}* 你應該已經\n  去過首塔了吧？',
                                       '<25>{#p/toriel}{#f/9}* ...',
                                       "<25>{#p/toriel}{#f/10}* 要乖啊，好嗎？"
                                    ];

export default {
   a_outlands: {
      darktorielcall: [
         '<26>{#p/toriel}{#f/5}* I apologize, little one.\n* I have once again turned off my phone.',
         '<25>{#p/toriel}{#f/9}* Please, leave me here for the time being.',
         '<25>{#p/toriel}{#f/10}* I will return to you and the others in due time.'
      ],
      secret1: () => [
         '<32>{#p/basic}* 這裡有一扇門。\n* 鎖住了。',
         ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* 也許... 你能在哪找到鑰匙？"])
      ],
      secret2: ['<32>{#p/human}* （你使用了秘密鑰匙。）'],
      exit: () => [choicer.create('* （離開外域嗎？）', "離開", "再等等")],
      nosleep: ['<32>{#p/human}* （好像有什麼打擾了你休息。）'],
      noequip: ['<32>{#p/human}* （你打算不這麼做。）'],
      finaltext: {
         a: ["<32>{#p/basic}* 他肯定就在附近..."],
         b: ['<32>{#p/basic}* 等等...？', '<32>{#p/basic}* 那邊站著的...\n* 是他嗎？'],
         c: [
            "<32>{#p/basic}* ...真的是他。",
            "<32>* ...\n* Frisk，如果你準備好了...",
            "<32>* 如果你已見過每一位想見的人...",
            '<32>* ...',
            '<32>* 就做你該做的事吧。',
            "<32>* 如果你還有事要做，\n  我會耐心等你準備好。"
         ],
         d1: ['<32>{#p/basic}* Asriel。'],
         d2: ['<25>{#p/asriel1}{#f/13}* ...Frisk？\n* 是你嗎？'],
         d3: ["<32>{#p/basic}* Asriel，是我啊，你最好的朋友...", '<32>{#p/basic}* 還記得我嗎？'],
         d4: [
            '<25>{#p/asriel1}{#f/25}* ...！',
            '<25>{#f/25}* $(name)...？',
            "<25>{#f/13}* 可是... 你...",
            "<25>{#f/23}* ...你已經..."
         ],
         d5: ['<32>{#p/basic}* 死了？'],
         d6: [
            '<32>{#p/basic}* 呵。\n* 很長一段時間裡...\n  我真想死了算了。',
            '<32>{#p/basic}* 我那麼對待你，我...\n  我就活該去死。'
         ],
         d7: ["<25>{#p/asriel1}{#f/7}* 住口，$(name)！", "<25>{#f/6}* ...你錯了！"],
         d8: [
            '<33>{#p/basic}* 哈哈... 面前的小傢伙。\n  前不久還逞強說「別擔心我，\n  去找愛你的人」呢。',
            '<32>* 但是，Asriel...\n  是時候告訴你真相了。',
            '<32>* 關於我的，我的一切。'
         ],
         d9: ['<25>{#p/asriel1}{#f/23}* ...', '<25>{#f/23}* 但是...'],
         d10: ['<25>{#p/asriel1}{#f/13}* $(name)...', '<25>{#f/15}* 你是怎麼...'],
         d11: [
            '<32>{#p/basic}* ...那重要嗎？',
            '<32>* 我一直都不是什麼好人，\n  這才是最重要的。',
            "<32>* 所以，你之前把我遺忘... \n  我不怪你。",
            "<32>* 而且，我也不配做\n  你的朋友，你的親人。"
         ],
         d12: ['<25>{#p/asriel1}{#f/13}* $(name)，我...'],
         d13: ["<32>{#p/basic}* 別傷心，Asriel。", "<32>* 沒必要逼自己認為\n  我是個好人。"],
         d14: ['<25>{#p/asriel1}{#f/22}* ...', '<25>{#f/22}* ...為什麼現在說這些？'],
         d15: [
            '<32>{#p/basic}* 曾經...',
            '<32>* 我一直覺得人性本惡。',
            '<32>* 也就是說...',
            '<32>* 只要你是個人類，\n  不管經歷什麼，最終必定墮入黑暗。',
            '<32>* 但我目睹了Frisk的整段旅程，\n  見證了Frisk所做的一切...',
            '<32>* 我才知道，我錯了。',
            '<32>* 別的人類，他們傷害怪物，\n  折磨怪物。\n* 更有甚者，把他們...',
            "<33>* 所以，我一直對自己的錯誤\n  視而不見。",
            '<32>* 但Frisk不是。',
            '<32>* 無論面對什麼困難，\n  Frisk總是施以善意，報以仁慈。',
            '<32>* 是Frisk... \n  讓我看清自己的錯誤。',
            "<32>* 所以，我不該繼續逃避責任。",
            '<32>* 都怪我，才讓你遭那麼多罪，\n  失去那些重要的東西。',
            "<32>* 對不起。"
         ],
         d16: ['<25>{#p/asriel1}{#f/13}* $(name)...', '<25>{#f/15}* 這段時間裡，\n  你一直都有自己的意識嗎？'],
         d17: [
            '<32>{#p/basic}* ...對，應該是這樣。',
            '<32>* 我們死後，我就是以這種形態\n  繼續「活著」的。',
            "<32>* 而且，我還有些話想跟你說。"
         ],
         d18: ['<25>{#p/asriel1}{#f/21}* 你說吧。'],
         d19: [
            '<32>{#p/basic}* 還記得嗎？',
            '<32>* 咱們一起穿過力場，\n  到達故園的廢墟時，\n  被那夥人類發現了。',
            '<32>* 那時，我打算用咱們的力量\n  消滅他們...\n* 但你阻止了我，還記得嗎？'
         ],
         d20: ['<25>{#p/asriel1}{#f/16}* ...當然。'],
         d21: [
            "<32>{#p/basic}* 那時，我不理解\n  你為什麼要那麼做...",
            '<32>* 但現在，我明白了。',
            '<32>* 你不想讓我鑄成大錯。'
         ],
         d22: ['<25>{#p/asriel1}{#f/15}* $(name)...'],
         d23: [
            "<32>{#p/basic}* 如果沒有你，\n  前哨站就會在又一次戰爭中\n  徹底毀滅。",
            '<32>* 如果沒有你，\n  那些我想拯救的怪物們...',
            '<32>* ...就要和我們一同陪葬。'
         ],
         d24: ['<25>{#p/asriel1}{#f/25}* $(name)，我...'],
         d25: [
            '<32>{#p/basic}* 你用我們的犧牲，\n  換來了怪物們如今的安穩生活。',
            '<32>* 時至今日，\n  你仍是我最棒的兄弟。',
            "<32>* 而我... 卻不配做\n  你最棒的親人。"
         ],
         d26: [
            '<25>{#p/asriel1}{#f/25}* 我原諒你，$(name)！',
            "<25>{#f/23}* 別這樣，好不好？\n* 求你了...",
            '<25>{#f/22}* 我知道，那時你很難受，\n  很痛苦...',
            "<25>{#f/15}* 你千萬別為了我，就..."
         ],
         d27: [
            '<32>{#p/basic}* 不。\n* 我不會再犯同樣的錯誤了。',
            '<32>* Asriel，你不是一直相信著...',
            "<32>* 「只要肯努力，人人都能改變」嗎？"
         ],
         d28: ['<25>{#p/asriel1}{#f/13}* ...是的。'],
         d29: [
            "<32>{#p/basic}* 過去的一百年中，\n  我一直在自責。",
            "<32>* 過去的一百年中，\n  我一直懷恨在心。",
            '<32>* 那段時間，我一直在想\n  是什麼讓我活著...',
            '<32>* 現在，我終於知道答案了。'
         ],
         d30: ['<25>{#p/asriel1}{#f/15}* ...？'],
         d31: ["<32>{#p/basic}* ...是你，Asriel。", "<32>* 是你一直在支撐我活下去。"],
         d32: [
            '<32>{#p/basic}* 像是一種... \n  沒有兌現的承諾。',
            '<32>* 懷恨在心... \n  像我一樣想著你...',
            "<32>* 知道我本可以為你付出\n  比最終更多的努力。",
            "<32>* 一直以來，這就是\n  阻止我前進的原因。"
         ],
         d33: ['<25>{#p/asriel1}{#f/23}* $(name)...'],
         d34: ['<32>{#p/basic}* Asriel。\n* 我的兄弟。', '<32>* 你應該知道真相。'],
         d35: ['<25>{*}{#p/asriel1}{#f/25}* 嗯？\n* 但是你早就- {%}'],
         d36: ['<32>{#p/basic}* 我也原諒你。'],
         d37: ['<25>{#p/asriel1}{#f/30}{#i/4}* ...！', '<25>{#p/asriel1}{#f/26}{#i/4}* $(name)...'],
         d38: ['<32>{#p/basic}* 噓...', "<32>* It's alright.", "<32>* 我懂你了，好嗎？"],
         d39: ['<25>{#p/asriel1}{#f/25}{#i/4}* 我...'],
         d40: ["<32>{#p/basic}* 我懂你，Asriel。"],
         d41: [
            '<32>{#p/basic}* ...我能感覺到。',
            '<32>* 即使過去了一百年...',
            "<32>* 他還在這，對吧？",
            '<32>* 就像個小天使一樣...',
            '<32>* 守護我，保護我\n  不受錯誤決定影響...',
            '<32>* ...所有這些，\n  都是為了有一天我能報答他。'
         ],
         d42: ["<32>{#p/basic}* 這一切開始有意義了。", '<32>* 我知道我該怎麼做。'],
         d43: ['<25>{*}{#p/asriel1}{#f/25}* 哈？\n* 你要... {^60}{%}'],
         d44: ['<25>{*}{#f/25}* 不...！{^60}{%}', '<25>{*}{#f/26}* 讓... 讓我走！{^60}{%}'],
         d45: ['<32>{*}{#p/basic}* 呵...{^60}{%}', '<32>{*}* ...替我照顧好爸爸媽媽，\n  好嗎？{^60}{%}'],
         d46: ['<25>{#p/asriel1}{#f/25}* Frisk，你在那裡嗎？', '<25>{#f/22}* 拜託了... 醒來吧...'],
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
            '<25>{#p/asriel1}{#f/23}* ...Frisk。',
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
      evac: ['<32>{#p/human}* （你感覺周圍的怪物越來越少了。）'],
      stargum1: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （你發現漫畫上\n  「附贈」了一塊口香糖...）',
               choicer.create('* （嚼它嗎？）', "嚼", "不嚼")
            ]
            : [
               '<32>{#p/basic}* 漫畫封面上附了一塊口香糖。',
               choicer.create('* （嚼它嗎？）', "嚼", "不嚼")
            ],
      stargum2: ['<32>{#p/human}* （你決定不嚼。）'],
      stargum3: ['<32>{#p/human}* （你回復了$(x) HP。）'],
      stargum4: ['<32>{#p/human}* （HP已回滿。）'],
      fireplace1: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （壁爐的溫暖讓你無法抗拒...）',
               choicer.create('* （爬進去嗎？）', '是', '否')
            ]
            : [
               SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? '<32>{#p/basic}* 一個普通的壁爐。'
                  : "<32>{#p/basic}* Toriel的壁爐。\n* 裡面並不燙，而是暖暖的，\n  很舒服。",
               ...(world.darker
                  ? []
                  : ['<32>* 看樣子，你可以爬進去。', choicer.create('* （爬進去嗎？）', '是', '否')])
            ],
      fireplace2a: ['<32>{#p/human}* （你不打算爬進去。）'],
      fireplace2b: () => [
         '<32>{#p/human}* （你爬進壁爐，\n  它的溫暖緊緊將你包圍。）',
         '<32>{#p/human}* （你感到十分舒適。）',
         ...(SAVE.data.b.svr
            ? asrielinter.fireplace2b++ < 1
               ? ["<25>{#p/asriel1}{#f/13}* 呃，我會在這等你出來的。"]
               : []
            : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
               ? ["<25>{#p/asriel2}{#f/15}* 呃，我就在這等你出來吧..."]
               : [])
      ],
      fireplace2c: ["<25>{#p/toriel}{#f/1}{#npc/a}* 別在裡面待太久了..."],
      fireplace2d: ['<32>{#p/basic}* ...', '<32>* 挺舒服的。'],
      noticereturn: ['<25>{#p/asriel2}{#f/10}* 之前有什麼東西\n  忘在這了嗎？'],
      noticestart: [
         '<25>{#p/asriel2}{#f/3}* 啊，這就是一切開始的地方。',
         "<25>{#p/asriel2}{#f/4}* $(name)，記得嗎？\n  從那以後，無論去哪裡，\n  我們都是在一起的。"
      ],
      noticedummy: ['<25>{#p/asriel2}{#f/3}* ...', "<25>{#p/asriel2}{#f/10}* 這裡以前\n  應該有個人偶吧...？"],
      afrog: {
         a: [
            '<32>{#p/basic}{#n1}* 偷偷告訴你一件事...',
            '<32>* 剛才我看到那位羊女士\n  從這經過。',
            '<32>* 她買了很多吃的，於是我問她\n  這些是用來幹什麼的。她說...',
            "<32>* 嘿嘿，有驚喜等著你喔。"
         ],
         b: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#n1}* 偷偷告訴你一件事...',
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
                        '<32>{#p/basic}{#n1}* 偷偷告訴你一件事...',
                        '<32>* 剛才我看到那位羊女士\n  坐運輸船買東西去了。',
                        "<32>* 她說買完牛奶就回來，\n  結果到現在也沒回來...",
                        "<32>* 希望她沒事。"
                     ]
                     : [
                        '<32>{#p/basic}{#n1}* 偷偷告訴你一件事...',
                        "<32>* 有時候，當我一個人的時候，\n  我喜歡坐運輸船去市集。",
                        "<32>* 店小巧精緻，\n  但賣的東西很多。",
                        "<32>* 也許我可以找個時間帶你去...\n  你肯定會喜歡的！"
                     ],
         c: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#n1}* 偷偷告訴你一件事...',
                  "<32>* I'm not a fan of how you beat us all up at first.",
                  '<32>* We were all so scared and confused...',
                  '<32>* ... at least you did something good in the end.'
               ]
               : [
                  '<32>{#p/basic}{#n1}* 偷偷告訴你一件事...',
                  "<32>* The people you've been beating up aren't happy about it.",
                  "<32>* Just be glad I'm off-duty...\n* 'Cause otherwise...",
                  "<32>* I'd have your head."
               ],
         d: ['<32>{#p/basic}{#n1}* 不要... 不要！', '<32>* 離-離我遠點！']
      },
      asriel0: [
         "<25>{#p/asriel2}{#f/5}* ...沒事！\n  我知道你很守時的！",
         "<25>{#p/asriel2}{#f/1}* 別讓我失望喔。"
      ],
      asriel1: () =>
         [
            [
               "<25>{#p/asriel2}{#f/2}* 對不起，耽擱了一會。\n  我剛才用Toriel的手機\n  喊了個人。",
               "<25>{#p/asriel2}{#f/1}* 別著急，馬上你就懂了。",
               "<25>{#p/asriel2}{#f/2}* 嘻嘻嘻...\n* 我到前面等你。"
            ],
            ["<25>{#p/asriel2}{#f/4}* 我到前面等你。"],
            ['<25>{#p/asriel2}{#f/3}* ...']
         ][Math.min(SAVE.flag.n.ga_asrielNegative1++, 1)],
      asriel2: () => [
         '<25>{#p/asriel2}{#f/1}* 準備好了嗎，\n  $(name)？',
         "<25>{#f/2}* 邁出這一步後，\n  可就再也沒有回頭路了。",
         choicer.create('* （跟上他嗎？）', "跟上他", "再等等")
      ],
      asriel2b: () => ['<25>{#p/asriel2}{#f/1}* 準備好了？', choicer.create('* （跟上他嗎？）', "跟上他", "再等等")],
      asriel3: ['<25>{#p/asriel2}{#f/2}* 好...', "<25>{#f/1}* 我們前進吧。"],
      asriel4: ["<25>{#p/asriel2}{#f/4}* 我會等你準備好的。"],
      asrielDiary: [
         [
            '<32>{#p/human}* （你翻到第一頁...）\n* （上面的字歪歪扭扭，難以辨認。）',
            '<32>{#p/asriel1}{#v/2}* 「今天我 yào 開女臺 xiě 日計了\n   媽媽 shuō 日計 hěn好玩」',
            '<32>* 「今天 bàbà 叫wǒ\n   zěn 麼在花園 bō種」',
            '<32>* 「bàbà shuō 花會長大\n   但是 yào 燈 hěn長 時間」',
            '<32>* 「媽媽 wǎn上\n   yào給我坐 wō 牛 pài\n   我 hěn 高興」',
            '<32>* 「今天過的 hěn 開心」'
         ],
         [
            '<32>{#p/human}* （你翻到第二頁...）',
            '<32>{#p/asriel1}{#v/2}* 「azzy的日計 kè歷 504年」',
            '<32>* 「媽媽shuō 我應gāi 把 日qī 寫上\n   不rán 別人不知到\n   我nǎ 天寫的日計」',
            '<32>* 「我的 xīngxīng 花還是沒有開\n   但 bàbà shuō 馬上jiù會開」',
            '<32>* 「我 xiǎng 在我的 fáng 間\n   放一個 chuāng戶\n   bàbà shuō 那裡有 guǎn子」',
            '<32>* 「但是會在 kè tīng裡\n   放一個 chuāng戶」',
            '<32>* 「今天也 hěn 開心」'
         ],
         [
            '<32>{#p/human}* （你翻到第三頁...）\n* （看起來，兩年過去了。）',
            '<32>{#p/asriel1}{#v/2}* 「Azzy的日記，克歷506年 3月」',
            '<32>* 「我今天在 fān 我的玩具時\n   找到了日記\n   xiǎng 多寫一點」',
            '<32>* 「好像上次 日qī\n   我 wàng 了寫月」',
            '<32>* 「對了 我之前 bō 種的星星花\n   長出來一點了」',
            '<32>* 「但是 今天我和 朋友打jià了\n   tā不理我了。」',
            '<32>* 「我很擔心... \n   希忘tā 別生我的氣。」'
         ],
         [
            '<32>{#p/human}* （你翻到第四頁...）',
            '<32>{#p/asriel1}{#v/2}* 「Azzy的日記，克歷506年3月」',
            '<32>* 「我和朋友 liáo了一下，\n   朋友不生我的氣了，\n   太好了。」',
            '<32>* 「今天，媽媽和我到外面看星空。\n   我們看到了liú星。」',
            '<32>* 「媽媽讓我許個原，\n   我希望...\n   有一天，我能在這裡見到人lèi。」',
            '<32>* 「媽媽和爸爸給我講了\n   很多他們的故是...」',
            '<32>* 「人lèi中，一定有好人\n   對吧？」'
         ],
         [
            '<32>{#p/human}* （你翻到了第五頁...）',
            '<32>{#p/asriel1}{#v/2}* 「Azzy的日記，克歷506年3月」',
            '<32>* 「今天沒什麼想寫的。」',
            '<32>* 「我有點tǎo厭寫日記了。」',
            '<32>* 「媽媽前兩天看到我\n   又在寫日記，\n   她說她很高興。」',
            '<32>* 「寫日記真有那麼 zhòng 要嗎？」'
         ],
         [
            '<32>{#p/human}* （你翻到了第六頁...）\n* （看起來，又過去了好幾年。）',
            '<32>{#p/asriel1}{#v/1}* 「Azzy的日記，克歷510年8月」',
            '<32>* 「感覺自己寫日記，\n   總是寫不了多久就放棄了。」',
            '<32>* 「今天偶然間又翻出了日記本，\n   打算再多寫一點。」',
            '<32>* 「過去幾年，過的都挺不錯的。\n   我上了學，學到了很多知識。」',
            '<32>* 「我學會了加減乘除，\n   學會了打字上網。」',
            '<32>* 「不過，媽媽說我現在還太小。\n   不能住冊自己的帳號。」',
            '<32>* 「等我再大一點，\n   應該就能有自己的號了。」'
         ],
         [
            '<32>{#p/human}* （你翻到了第七頁...）',
            '<32>{#p/asriel1}{#v/1}* 「Azzy的日記，克歷510年8月」',
            '<32>* 「那個天才今天又來我家串門了，\n   他說，自己剛做了個惡夢，\n   一個關於人類的惡夢。」',
            '<32>* 「喔，忘了介紹他了。\n   他是一名皇家科學員，\n   經常和爸爸聊天。」',
            '<32>* 「物質複製儀、鈉米構造機、\n   重力模擬器... \n   這些裝置，我們每天都要用到。」',
            '<32>* 「而它們，都出自這位天才之手。」',
            '<32>* 「但是今天，\n   他卻用一種很異樣的眼神看著我，\n   仿佛見了鬼一樣。」',
            '<32>* 「我做了什麼錯事嗎？」'
         ],
         [
            '<32>{#p/human}* （你翻到了第八頁...）',
            '<32>{#p/asriel1}{#v/1}* 「Azzy的日記，克歷510年8月」',
            '<32>* 「今天，天空中突然出現\n   一顆很耀眼的星星。」',
            '<32>* 「超級耀眼。」',
            '<32>* 「我很奇怪，為什麼大部分星星\n   平時都沒有那麼亮呢？」',
            '<32>* 「對了，我們馬上就要搬到\n   首塔的新家了。」',
            '<32>* 「光看首塔的藍圖，我就覺得，\n   那裡真漂亮啊！」',
            '<32>* 「住在那裡，\n   肯定比住廠房舒服多了。」'
         ],
         [
            '<32>{#p/human}* （你翻到了第九頁...\n   看起來，又過去了兩天。）',
            '<32>{#p/asriel1}{#v/1}* 「Azzy的日記，克歷510年9月」',
            '<32>* 「昨天，我見到了真正的人類。\n   那人類的飛船一頭撞到了\n   我家附近的垃圾站。」',
            '<32>* 「我將人類從廢墟中拉了出來，\n   那人類對我道了謝。」',
            '<32>* 「我都沒想到有一天\n   居然真的見到了人類。」',
            '<32>* 「而且，人類{#p/basic}闂彞{#p/asriel1}{#v/1}瓠{#p/basic}監哈哈哈azzy\n   你真是個大hún求掓{#p/asriel1}{#v/1}銊簦{#p/basic}燹{#p/asriel1}{#v/1}瀲{#p/basic}潏{#p/asriel1}{#v/1}甕」',
            '<32>* 「好，現在我躲到被窩裡\n   $(name)應該沒法再\n   亂寫亂畫了。」',
            '<32>* 「有時，\n   $(name)會稍微有點淘氣，\n   不過我不介意。」',
            '<32>* 「媽媽讓$(name)進入戰鬥，發現\n   $(name)的心心是紅色的，\n   方向也是反的。」',
            '<32>* 「多個能每天陪我聊天的夥伴\n   真是太棒了。」'
         ],
         [
            '<32>{#p/human}* （你翻到了第十頁...）',
            '<32>{#p/asriel1}{#v/1}* 「Azzy的日記，克歷510年9月」',
            '<32>* 「媽媽說，\n   她決定收養$(name)，\n   把$(name)當成自己的孩子。」',
            '<32>* 「我還不太懂『收養』是什麼意思，\n   但媽媽說，現在$(name)\n   就是我的親人了。」',
            '<32>* 「太好了，我可以和$(name)\n   待得更久啦。」',
            '<32>* 「無論做什麼，去哪裡，\n   我倆都要在一起！」',
            '<32>* 「喔對了，昨天亂寫亂畫的事，\n   $(name)跟我道了歉。」',
            '<32>* 「我嘴上沒說，\n   但心裡已經原諒了。」',
            '<32>{#p/basic}* ...'
         ],
         [
            '<32>{#p/human}* （你翻到了第十一頁。）',
            '<32>{#p/asriel1}* 「Asriel的日記，克歷515年9月」',
            '<32>* 「$(name)說，\n   是時候執行計畫了。」',
            '<32>* 「我很害怕，\n   但$(name)相信我能行的。」',
            '<32>* 「這篇寫完之後，\n   我就等人類吃掉\n   我們親手做的毒派...」',
            '<32>* 「然後，我們一起拯救所有怪物。」',
            '<32>* 「但是，$(name)。\n   如果真出了事，計畫失敗了...\n   如果你看到了這篇日記...」',
            '<32>* 「我想對你說，你是最棒的。」',
            '<32>{#p/basic}* ...',
            '<32>{#p/human}* （你聽到有人在哭...）'
         ]
      ],
      backdesk: {
         a: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 衣架上掛了個背包。"]),
            '<32>{#p/human}* （你往背包裡瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? ['<32>{#p/human}* （但裡面什麼都沒有。）']
               : ['<32>{#p/basic}* 沒有其他東西了。'])
         ],
         b: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 衣架上掛了個背包。"]),
            '<32>{#p/human}* （你往背包裡瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 這是什麼？\n* 限量版的《超級星之行者》漫畫？"]),
            '<32>{#s/equip}{#p/human}* （你獲得了《超級星之行者2》。）'
         ],
         b2: () => [
            ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 衣架上掛了個背包。"]),
            '<32>{#p/human}* （你往背包裡瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 這是什麼？\n* 限量版的《超級星之行者》漫畫？"]),
            "<32>{#p/human}* （你帶的東西太多，裝不下它了。）"
         ]
      },
      midsleep: () => [
         '<32>{#p/human}* （如果你現在睡覺，\n  你可能會錯過一些重要的事情。）',
         choicer.create('* （要睡覺嗎？）', '是', '否')
      ],
      bedfailToriel: [
         '<25>{#p/toriel}{#f/5}* 喔，天哪...',
         '<25>{#f/1}* 我是不是剛剛對這孩子\n  下手太狠了...',
         '<25>{#f/0}* ...\n* 別擔心，孩子。',
         "<25>* 好好休息。\n  然後，以飽滿的狀態\n  去迎接之後的旅程。",
         '<32>{#p/human}* （Toriel唱了一首優美的搖籃曲\n  伴你入睡。）'
      ],
      blooky1: () => [
         '<32>{#p/napstablook}* Zzz... Zzz...',
         '<32>* Zzz... Zzz...',
         "<32>{#p/basic}* 這隻幽靈不停地大聲說「z」，\n  假裝自己在睡覺。",
         choicer.create('* （「踩」過去嗎？）', '是', '否')
      ],
      blooky2: () => [
         '<32>{#p/basic}* 幽靈還是把路擋著。',
         choicer.create('* （「踩」過去嗎？）', '是', '否')
      ],
      blooky3: [
         '<32>{#p/napstablook}* 我經常來這邊\n  因為這裡很寧靜...',
         '<32>* 但是今天我碰到了很好的人...',
         "<32>* 喔，我不擋你路了",
         '<32>* 回見...'
      ],
      blooky4: [
         '<32>{#p/napstablook}* 呃，所以...\n* 你真的挺喜歡我的，是吧',
         '<32>* 嘿... 謝謝你...',
         '<32>* 還有，嗯... \n  對不起之前擋了你的路...',
         "<32>* 我要去其他地方了",
         "<32>* 不過... 別擔心...",
         "<32>* 如果你想見我的話...",
         '<32>* 之後還有機會的...',
         '<32>* 那，回見了...'
      ],
      blooky5: [
         '<32>{#p/napstablook}* 呃，好吧...\n  看來，你打心底裡厭惡我',
         "<32>* 這樣... 也挺好的...",
         "<32>* 好吧，我要忙自己的事去了",
         '<32>* 拜拜...'
      ],
      blooky6: [
         '<32>{#p/napstablook}* 呃... 發生了什麼...',
         '<32>* ...',
         '<32>* 喔... 我得走了',
         '<32>* 回見...'
      ],
      blooky7: [
         "<32>{#p/napstablook}* 你甚至連句話都沒有...？",
         "<32>* 你... 我都不知道\n  你到底怎麼了...",
         "<32>* 好吧，我走了",
         '<32>* 拜拜...'
      ],
      breakfast: ['<32>{#p/human}* （你得到了焗蝸牛。）'],
      breakslow: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
      candy1: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （你走近了自動售貨機。）',
               choicer.create('* （你想合成什麼呢？）', '怪物糖果', '水', '大麻素', '放棄')
            ]
            : [
               '<32>{#p/basic}* 要用這臺機器合成什麼呢？',
               choicer.create('* （你想合成什麼呢？）', '怪物糖果', '水', '大麻素', '放棄')
            ],
      candy2: ['<32>{#p/human}* （你得到了$(x)。）\n* （按[C]打開選單。）'],
      candy3: ['<32>{#p/human}* （你得到了$(x)。）'],
      candy4: () => [
         '<32>{#p/human}* （你得到了$(x)。）',
         ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* 機器開始出故障了。'])
      ],
      candy5: () => [
         '<32>{#p/human}* （你得到了$(x)。）',
         ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* 機器壞掉了。'])
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
            : ["<32>{#p/basic}* 完全不運轉了。"],
      candy7: ['<32>{#p/human}* （你打算什麼也不合成。）'],
      candy8: ["<32>{#p/human}* （你帶的東西太多了。）"],
      chair1a: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 怎麼了，孩子？\n* 餓了嗎？',
         '<25>{#f/0}* 還是，對我看的這本書\n  比較感興趣？',
         choicer.create('{#n1!}* （你要怎麼回答？）', '我餓了', '想看書', '想回家', '沒啥事')
      ],
      chair1b: () => [
         '<25>{#p/toriel}{#n1}* 怎麼了，孩子？',
         choicer.create('{#n1!}* （你要怎麼回答？）', '我餓了', '想看書', '想回家', '沒啥事')
      ],
      chair1c: ['<25>{#p/toriel}{#n1}* 需要任何東西隨時告訴我喔。'],
      chair1d: ['<25>{#p/toriel}{#n1}* 如果改變主意的話\n  隨時告訴我喔。'],
      chair1e: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 睡不著嗎？',
         '<25>{#f/1}* ...\n* 如果你喜歡的話，\n  我可以給你讀這本書...',
         '<25>{#f/0}* 書名叫《慷慨的怪物》，\n  是一個人類寫的。',
         choicer.create('{#n1!}* （要聽嗎？）', "聽", "不聽")
      ],
      chair1f: pager.create(
         0,
         ['<25>{#p/toriel}{#n1}{#f/1}* 喔，回來看我了嗎？', '<25>{#f/0}* 想待多久都可以的。'],
         ['<26>{#p/toriel}{#n1}{#f/5}* 我不想離開這裡了，\n  待慣了...']
      ),
      chair2a1: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 你餓了嗎？\n* 我給你做點早餐吧。',
         choicer.create('{#n1!}* （現在吃早餐嗎？）', '是', '否')
      ],
      chair2a2: ['<25>{#p/toriel}{#n1}* 太好了！\n* 我會在廚房做飯。'],
      chair2a3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 現在想吃早飯了嗎？',
         choicer.create('{#n1!}* （現在吃早餐嗎？）', '是', '否')
      ],
      chair2a4: () =>
         SAVE.data.b.drop_snails
            ? [
               '<25>{#p/toriel}{#f/3}{#n1}* 把我做好的早飯扔了，\n  還想讓我再給你做一份？',
               '<25>{#f/4}* 這小子...',
               '<25>{#f/0}* 休想，小子。\n* 我不會再給你做了。'
            ]
            : [
               '<25>{#p/toriel}{#n1}* 我已經做過早飯了，小傢伙。',
               '<25>{#f/1}* 我們不能一天吃兩頓早飯，\n  對吧？',
               '<25>{#f/0}* 不然，就會讓人覺得很奇怪。'
            ],
      chair2c1: () => [
         '<25>{#p/toriel}{#n1}* 啊，你說這本書啊！\n* 對，這小書可有意思了。',
         '<25>{#f/0}* 書名叫《慷慨的怪物》，\n  是一個人類寫的。',
         '<25>{#f/1}* 想讓我把它讀給你聽嗎？',
         choicer.create('{#n1!}* （要聽嗎？）', "聽", "不聽")
      ],
      chair2c2: ['<25>{#p/toriel}{#n1}* 太好了！', '<25>{#g/torielCompassionSmile}* ...'],
      chair2c3: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 現在想聽這本小書了嗎？',
         choicer.create('{#n1!}* （要聽嗎？）', "聽", "不聽")
      ],
      chair2c4: () => [
         '<25>{#p/toriel}{#f/1}{#n1}* 你想再聽我讀一遍嗎？',
         choicer.create('{#n1!}* （要聽嗎？）', "聽", "不聽")
      ],
      chair2c5: ['<25>{#p/toriel}{#f/1}{#n1}* 好，故事從這裡開始...', '<25>{#p/toriel}{#g/torielCompassionSmile}* ...'],
      chair2c6: [
         '<25>{#f/1}{#n1}* 「從前，有一隻怪物...」',
         '<25>{#f/0}* 「這個怪物愛上了\n   一個小小的人類。」',
         '<25>{#f/1}* 「每天，\n   這個人類都會去找她...」',
         '<25>{#f/0}* 「他們一起在田野上\n   奔跑，玩耍。」',
         '<25>{#f/1}* 「他們一起唱歌，\n   一起分享故事...」',
         '<25>{#f/0}* 「還會一起捉迷藏。」',
         '<25>{#f/1}* 「人類玩累了，\n   怪物就會哄人類入睡，\n   幫人類蓋上被子...」',
         '<25>{#f/0}* 「人類非常喜歡這個怪物。」',
         '<25>{#f/0}* 「怪物也因此感到快樂。」',
         '<25>{#f/1}* 「但是，隨著時間流逝，\n   人類漸漸長大，\n   離開了怪物...」',
         '<25>{#f/0}* 「怪物則只能孤身一人。」',
         '<25>{#f/1}* 「突然有一天，\n   人類回來了...」',
         '<25>{#f/0}* 「怪物對人類說：\n  『來吧，一起來玩吧！』」',
         '<25>{#f/5}* 「『我已經長大，\n    不能再玩了。』\n   人類這樣回答。」',
         '<25>{#f/1}* 「『我想有一輛車，\n    開著它找一個新家。』」',
         "<25>{#f/5}* 「『對不起，』怪物說道，\n   『但是我太窮了，\n    買不起車。』」",
         '<25>{#f/5}* 「『我只有兩條腿，』」',
         '<25>{#f/0}* 「『爬到我的背上，\n    我可以帶你去你\n    想去的地方。』」',
         '<25>{#f/0}* 「『這樣，\n    你就能去到城鎮，\n    感到快樂。』」',
         '<25>{#f/1}* 「於是人類爬到\n   怪物的背上...」',
         '<25>{#f/0}* 「怪物帶他們去了一個新家。」',
         '<25>{#f/0}* 「怪物也因此感到快樂。」',
         '<25>{#f/1}* 「但是，\n   人類再次離開了怪物，\n   很久都沒有回來看她。」',
         '<25>{#f/5}* 「怪物十分難過。」',
         '<25>{#f/0}* 「突然有一天，\n   人類又回來了。」',
         '<25>{#f/1}* 「怪物笑得合不攏嘴，\n   她說...」',
         '<25>{#f/1}* 「『來吧，人類！\n    騎在我的背上，\n    讓我帶你去任何地方。』」',
         '<25>{#f/5}* 「『我現在很傷心，\n    沒心情到處轉悠。』\n    人類這樣說道。」',
         '<25>{#f/1}* 「『我想有一個家庭，\n    有自己的孩子...』」',
         "<25>{#f/5}* 「『對不起，\n    但是我給不了你這些。』」",
         '<25>{#f/5}* 「『我只是一隻怪物。』\n   怪物這樣說道，」',
         '<25>{#f/0}* 「『但是，你可以留下來\n    和我待一會，我可以幫你\n    找到一個約會對象。』」',
         '<25>{#f/0}* 「『這樣，你就可以\n    找到心愛之人，\n    感到快樂。』」',
         '<25>{#f/1}* 「於是人類留下來，\n   和老朋友待了一會兒...」',
         '<25>{#f/0}* 「怪物為其找到了\n   可能喜歡的人。」',
         '<25>{#f/0}* 「怪物也因此感到快樂。」',
         '<25>{#f/5}* 「人類又一次離開了怪物，\n   很久之後才回來。」',
         '<25>{#f/1}* 「當人類最終回來的時候，\n   怪物欣喜若狂...」',
         '<25>{#f/9}* 「但她已經連說話\n   都十分困難。」',
         '<25>{#f/1}* 「『來吧，人類。』\n    她低聲說道...」',
         '<25>{#f/1}* 「『讓我帶你去找\n    約會對象吧。』」',
         '<25>{#f/5}* 「『我年歲大了，而且很忙，\n    沒空操心這些。』\n   人類這樣回答。」',
         '<25>{#f/1}* 「『我只是想找個\n    今晚過夜的地方...』」',
         "<25>{#f/5}* 「『對不起，』怪物說，\n   『但我沒有適合你的床。』」",
         '<25>{#f/5}* 「『我還是太窮了，\n    連一張床都買不起。』」',
         '<25>{#f/0}* 「『和我一起睡吧。』」',
         '<25>{#f/0}* 「『這樣，\n    你就可以獲得休息，\n    感到快樂。』」',
         '<25>{#f/1}* 「於是，人類躺在了\n   怪物懷裡...」',
         '<25>{#f/0}* 「怪物伴著人類入睡。」',
         '<25>{#f/0}* 「怪物也因此感到快樂。」',
         '<25>{#f/5}* 「...但心中另有所思。」',
         '<25>{#f/9}* 「...很久很久以後，\n   人類終於回到了怪物身邊。」',
         "<25>{#f/5}* 「『對不起，人類。』怪物說，\n   『但我的生命快走到\n    盡頭了。』」",
         '<25>{#f/5}* 「『我的腿腳不聽使喚了，\n    沒法帶你去任何地方。』」',
         '<25>{#f/10}* 「『我哪兒也不想去了，』\n   人類說。」',
         '<26>{#f/5}* 「『我找不到約會對象了，\n    我認識的人都不在了。』」',
         '<25>{#f/10}* 「『我不需要什麼約會了。』」',
         '<25>{#f/5}* 「『我身體很虛弱，\n    你也不能睡在我身上了。』」',
         '<25>{#f/10}* 「『我不需要多少休息了。』」',
         "<25>{#f/5}* 「『我很抱歉，』怪物嘆息道。」",
         '<25>{#f/5}* 「『我希望我還能為你做什麼，\n    但我已經一無所有。』」',
         '<25>{#f/9}* 「『我現在只是一個\n    快要死去的老怪物。』」',
         '<25>{#f/5}* 「『對不起...』」',
         '<25>{#f/10}* 「『我現在不需要太多，』\n   人類說。」',
         '<25>{#f/10}* 「『只想在死前擁抱一下\n    我最好的朋友。』」',
         '<25>{#f/1}* 「『好，』怪物挺直腰板...」',
         '<25>{#f/0}* 「『你的朋友，這隻老怪物\n    永遠在這裡等著你。』」',
         '<25>{#f/0}* 「『來吧，人類，到我這裡來。\n    最後一次和我在一起。』」',
         '<25>{#f/9}* 「人類走了過去。」',
         '<25>{#f/10}* 「怪物... 十分快樂。」'
         
      ],
      chair2c7: ['<25>{#f/0}{#n1}* 嗯，故事講完了。', '<25>{#f/1}* 希望你能喜歡這個故事...'],
      chair2c8: ['<25>{#f/0}{#n1}* 嗯，講完了。'],
      chair2d1: [
         '<25>{#p/toriel}{#f/1}{#n1}* 回家...？\n* 能說的具體點嗎？',
         '<99>{#p/human}{#n1!}* （你要怎麼回答？）{!}\n§shift=160§什麼時候\n§shift=48§別放在心上§shift=37§可以回家？{#c/0/6/4}'
      ],
      chair2d2: [
         '<25>{#p/toriel}{#f/1}{#n1}* 但... 這裡就是你的家啊，\n  不是嗎？',
         '<99>{#p/human}{#n1!}* （你要怎麼回答？）{!}\n§shift=144§怎麼才能\n§shift=64§對不起§shift=35§離開外域{#c/0/8/2}'
      ],
      chair2d3: [
         '<25>{#p/toriel}{#f/5}{#n1}* 請你... 理解一下...',
         '<25>{#p/toriel}{#f/5}{#n1}* 我這麼做都是為了你好。'
      ],
      chair2d4: [
         '<25>{#p/toriel}{#f/5}{#n1}* 我的孩子...',
         '<99>{#p/human}{#n1!}* （你要怎麼回答？）{!}\n§shift=144§怎麼才能\n§shift=64§對不起§shift=35§離開外域{#c/0/8/2}'
      ],
      chair2d5: ['<25>{#p/toriel}{#f/5}{#n1}* ...'],
      chair2d6: [
         '<25>{#p/toriel}{#f/9}{#n1}* ...',
         '<25>{#p/toriel}{#f/9}* 拜託，在這裡等著。',
         '<25>{#p/toriel}{#f/5}* 有件事情我必須去處理一下。'
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
               : ['<32>{#p/basic}* 一把舒適的扶椅。', '<32>* 大小正好適合Toriel。'],
      chair4: ['<25>{#p/toriel}{#n1}* 啊，來得正好。', '<25>* 我已經把你的那份早餐\n  放在桌子上了。'],
      closetrocket: {
         a: () => [
            '<32>{#p/human}* （你往箱子裡瞅了一眼...）',
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
               : ['<32>{#p/basic}* 沒有其他東西了。'])
         ],
         b: () => [
            '<32>{#p/human}* （你往箱子裡瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 這是什麼？\n* 限量版的《超級星之行者》漫畫？"]),
            '<32>{#s/equip}{#p/human}* （你獲得了《超級星之行者3》。）'
         ],
         b2: () => [
            '<32>{#p/human}* （你往箱子裡瞅了一眼...）',
            ...(SAVE.data.b.svr
               ? []
               : ["<32>{#p/basic}* 這是什麼？\n* 限量版的《超級星之行者》漫畫？"]),
            "<32>{#p/human}* （你帶的東西太多，裝不下它了。）"
         ]
      },
      goner: {
         a1: () =>
            SAVE.flag.b.$svr
               ? [
                  "<32>{#p/human}* I've seen the effect you've had on this world...",
                  '<32>* A perfect ending, where everyone gets to be happy...',
                  "<32>* 某種特別之物，於此獨自閃耀。"
               ]
               : [
                  '<32>{#p/human}* 一片未被凡俗所羈絆的宇宙...',
                  '<32>* 僅為了那純潔無瑕之美，\n  而存在於斯...',
                  "<32>* 某種特別之物，於此獨自閃耀。"
               ],
         a2: () =>
            SAVE.flag.b.$svr
               ? ['<32>* That being said...', "<32>* It seems it wasn't enough to satisfy your... curiosity."]
               : ['<32>* 告訴我...', '<32>* 此情此景... 可曾引起過你的好奇？']
      },
      danger_puzzle1: () => [
         '<25>{#p/toriel}* 這個房間裡的謎題\n  和之前的都不太一樣。',
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#f/3}* 說不定，比起應付人偶...\n  這個謎題更合你胃口？'
            : '<25>{#f/1}* 有信心解決它嗎？'
      ],
      danger_puzzle2: () =>
         world.darker
            ? ["<32>{#p/basic}* 這臺終端太高了，你夠不到。"]
            : ["<32>{#p/basic}* 終端高高地聳立在你的面前，\n  擋住了你急切的腳步。"],
      danger_puzzle3: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? '<25>{#p/toriel}{#f/3}* 又怎麼了...'
            : '<25>{#p/toriel}{#f/1}* 怎麼了？\n* 需要幫忙嗎？'
      ],
      danger_puzzle4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ['<25>{#p/toriel}{#f/5}* 唉... 我知道了。', '<25>{#f/5}* 這臺終端太高了，\n  你夠不到。']
            : [
               '<25>{#p/toriel}{#f/7}* ...天哪。',
               '<25>{#f/6}* 這應該是個設計上的小失誤。',
               '<25>{#f/1}* 這臺終端太高了，\n  你夠不到是嗎？'
            ]),
         '<25>{#f/0}* 沒關係。\n* 我可以替你操作。',
         '<25>{#f/0}* ...',
         '<25>{#f/0}* 密碼是一個謎語的謎底。\n* 想猜猜看嗎？',
         choicer.create('* （猜謎嗎？）', "試試看", "算了吧")
      ],
      danger_puzzle5a: [
         '<25>{#p/toriel}* 太好了！\n* 對你這麼大的孩子來說...',
         '<25>{#f/0}* 熱愛學習，渴求知識\n  是尤為重要的。'
      ],
      danger_puzzle5b: [
         '<25>{#p/toriel}{#f/0}* 謎面是個問題。',
         "<25>{#p/toriel}{#f/1}* 「源自小麥，圓圓不賴。\n   名字帶水，小孩最愛。\n   （打一單字食物名）」"
      ],
      danger_puzzle5c: [
         '<32>{#p/human}* （...）\n* （你把答案告訴了Toriel。）',
         '<25>{#p/toriel}{#f/0}* ...啊，想法不錯！\n* 學習態度也很積極！'
      ],
      danger_puzzle5d: [
         '<32>{#p/human}* （...）\n* （你告訴Toriel，你猜不出來。）',
         '<25>{#p/toriel}{#f/1}* ...怎麼了，孩子？\n* 有什麼心事嗎？',
         '<25>{#f/5}* ...嗯...',
         '<25>{#f/0}* 喔，好吧。\n* 我來幫你解開這個迷題吧。'
      ],
      danger_puzzle5e: () =>
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
            ? ['<25>{#p/toriel}{#f/5}* ...', '<25>{#f/5}* 知道了。']
            : ['<25>{#p/toriel}{#f/0}* ...', '<25>{#f/0}* 這次的謎題，我替你解吧。'],
      danger_puzzle6: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* 還有... {#x1}這個。\n* ...可以繼續前進了。'
            : '<25>{#p/toriel}* 還有... {#x1}這個！\n* 可以繼續前進了。'
      ],
      danger_puzzle7: () => [
         [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? '<25>{#p/toriel}{#f/5}* 我等著你來下個房間。'
            : '<25>{#p/toriel}* 要是你準備好了，\n  就可以來下個房間了。'
      ],
      danger_puzzle8: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* （但你還是夠不到終端。）"]
            : ['<32>{#p/basic}* 即便是現在，那臺終端\n  依然高高聳立在這裡。'],
      denie: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
      dipper: {
         a: () => [
            '<32>{#p/human}* （你撿起了「小熊座」。）',
            choicer.create('* （裝備上小熊座嗎？）', '是', '否')
         ],
         b: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"]
      },
      drop_pie: ['<25>{#p/toriel}{#f/1}* 派粥是用來喝的，\n  不是讓你往地上倒的。'],
      drop_pie3: ['<25>{#p/toriel}{#f/1}* 請你別把好好的食物\n  往地上扔，好嗎？'],
      drop_snails: ['<25>{#p/toriel}{#f/1}* 這些可憐的焗蝸牛\n  又怎麼你了？'],
      drop_soda: ["<32>{#p/basic}{#n1}* 啊，你幹嘛 ;)", '<32>* 那可是我全部的心血啊！;)'],
      drop_steak: ['<32>{#p/basic}{#n1}* 認真的嗎？;)', '<32>* 那牛排可是無價之寶！;)'],
      dummy1: [
         '<25>{#p/toriel}{#f/0}* 接下來，我要教你\n  如何應對其他怪物的攻擊。',
         '<25>{#f/1}* 身為人類，在前哨站走動時，\n  怪物們很可能襲擊你...',
         '<25>{#f/0}* 這時，你就會進入\n  稱作「戰鬥」的環節。',
         '<25>{#f/0}* 幸好，你可以\n  通過多種方式解決。',
         '<25>{#f/1}* 眼下，我建議\n  友好地和他們對話...',
         '<25>{#f/0}* ...好給我機會\n  出面解決衝突。'
      ],
      dummy2: ['<25>{#p/toriel}* 你可以從試著\n  和那邊的人偶說說話開始。'],
      dummy3: [
         '<25>{#p/toriel}{#f/7}* ...你覺得\n  我就是訓練人偶？',
         '<25>{#f/6}* 哈哈哈！\n* 你真是太可愛了！',
         '<25>{#f/0}* 但很遺憾，我只是個\n  喜歡瞎操心的老阿姨喔。'
      ],
      dummy4: [
         '<25>{#p/toriel}* 孩子，沒有什麼好擔心的。',
         '<25>* 區區一個人偶也不會傷害你，\n  對吧？'
      ],
      dummy5: ['<25>{#p/toriel}{#f/1}* 不要怕，小傢伙...'],
      dummy6: [
         '<25>{#p/toriel}{#f/2}* 住手啊，孩子！\n* 人偶不是用來打的！',
         '<25>{#f/1}* 而且，我們可不想\n  傷害任何人，對嗎？',
         '<25>{#f/0}* 來吧。'
      ],
      dummy7: ['<25>{#p/toriel}* 非常棒！\n* 你學得真快！'],
      dummy8: [
         '<25>{#p/toriel}{#f/1}* 怎麼逃跑了...？',
         '<25>{#f/0}* 好吧，其實這樣也不差。',
         '<26>{#f/1}* 不管對手是想欺負你，\n  還是像這個人偶一樣\n  想和你聊天...',
         '<25>{#f/0}* 只要你跑的夠快，\n  什麼都能避免。'
      ],
      dummy9: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/0}* 咱們去下一個房間吧。'],
      dummy9a: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/6}* 咱們去下一個房間吧。'],
      dummy10: [
         '<25>{#p/toriel}{#f/7}* 天哪，孩子...',
         '<25>{#f/0}* 我第一次看到\n  這麼有愛的場面啊...',
         '<25>{#f/0}* 總之，你已經出色地掌握了\n  教給你的東西。',
         '<25>{#f/0}* 咱們去下一個房間吧。'
      ],
      dummy11: ['<25>{#p/toriel}* 咱們去下一個房間吧。'],
      dummy12: [
         '<25>{#p/toriel}{#f/2}* 我的天哪！\n* 孩子，快住手！',
         '<25>{#f/1}* ...',
         '<25>{#f/0}* 幸好，\n  打的只是一個訓練人偶。',
         '<25>{#f/1}* 但是，以後再遇到這種情況...',
         '<25>{#f/0}* ...請不要\n  把對手打得半死了！',
         '<26>{#f/0}* 沒事，去下個房間吧。'
      ],
      eat_pie: ['<25>{#p/toriel}{#f/1}{#n1}* 好吃嗎？'],
      eat_snails: ['<25>{#p/toriel}{#f/0}{#n1}* 希望早餐合你胃口。'],
      eat_soda: [
         '<32>{#p/basic}* Aaron舉起手機，\n  把你喝汽水的瞬間拍了下來。',
         '<32>{#p/basic}{#n1}* 喔豁，海報大頭貼的素材有了 ;)'
      ],
      eat_steak: [
         '<32>{#p/basic}* Aaron給你拋了個媚眼。',
         '<32>{#p/basic}{#n1}* 喜歡我們的產品嗎，親？;)'
      ],
      endtwinkly2: [
         '<32>{#p/basic}* 那星星是不是覺得\n  自己可了不起了？',
         "<32>* 你明明對每個怪物都那麼友好，\n  一點錯事都沒做。",
         '<32>* 他真能多管閒事...'
      ],
      endtwinklyA1: [
         '<25>{#p/twinkly}{#f/12}* 你個蠢貨...',
         "<25>* 你沒聽到我之前\n  說的嗎？",
         '<25>* 我不是告訴過你\n  別搞砸了嗎！',
         "<25>* 看看你對我們的計畫\n  做了什麼。",
         '<25>{#f/8}* ...',
         '<25>{#f/6}* 你最好能解決現在的處境，\n  $(name).',
         "<25>{#f/5}* 這關乎我們的命運。"
      ],
      endtwinklyA2: () =>
         SAVE.flag.n.genocide_milestone < 1
            ? [
               '<25>{#p/twinkly}{#f/5}* 哈囉，$(name)。',
               "<25>{#f/5}* 你好像\n  不再想和我一起玩了。",
               '<25>{#f/6}* 我已經很努力地\n  對你保持耐心了，\n  但你看...',
               '<25>{#f/6}* 我們又回到了起點。',
               '<25>{#f/8}* 一次，又一次...',
               '<25>{#f/5}* 你肯定覺得\n  這一切都很好笑吧。',
               '<25>{#f/7}* 給我希望後卻又奪走它，\n  你這是在耍我嗎...',
               "<25>{#f/5}* 好吧，沒關係。",
               "<25>{#f/5}* 如果你想玩這種遊戲，\n  那就繼續吧。",
               "<25>{#f/11}* 但別指望\n  你能一直掌控局面...",
               "<25>{#f/7}* 你遲早會後悔\n  你所做的一切。"
            ]
            : [
               '<25>{#p/twinkly}{#f/6}* 哈囉，$(name)。',
               ...(SAVE.flag.n.genocide_milestone < 7
                  ? [
                     "<25>{#f/6}* 我思考了一下\n  關於之前發生的事情。",
                     '<25>{#f/5}* 一開始，\n  想著我們可以\n  一起武力佔領前哨站...',
                     '<25>* 我覺得很刺激...',
                     "<25>{#f/6}* 但現在，我不確定了。",
                     '<25>{#f/8}* ...',
                     '<25>{#f/8}* 我想...\n  我當時有點得意忘形了。',
                     "<25>{#f/5}* 但這沒關係的，對吧？\n* 你會原諒我的，對吧？"
                  ]
                  : [
                     "<25>{#f/6}* 我還是不太清楚\n  之前發生了什麼...",
                     "<25>{#f/5}* 那有點... 嚇到我了，\n  哈哈...",
                     '<25>{#f/8}* ...',
                     '<25>{#f/8}* 也許... \n  我們現在應該緩一緩。',
                     "<25>{#f/5}* 但這沒關係的，對吧？\n* 你不會介意的，對吧？"
                  ]),
               '<25>{#f/6}* ...',
               '<25>{#f/8}* $(name)，再見...',
               ...(SAVE.flag.n.genocide_milestone < 7 ? ["<25>{#f/5}* 我很快就會回來的。"] : [])
            ],
      endtwinklyAreaction: [
         '<32>{#p/basic}* 不好意思，\n  我是不是錯過了什麼？',
         "<32>* 我這輩子都沒跟他說過話，\n  更別說和他一起執行什麼任務了。",
         "<32>* 算了。\n* 他也不是第一次編造\n  關於我的故事了。"
      ],
      endtwinklyB: () =>
         SAVE.data.b.w_state_lateleave
            ? [
               '<25>{#p/twinkly}{#f/5}{#v/0}* 呵。\n* 沒想到你就這麼跑了。',
               "<25>{#f/11}{#v/0}* 以為規矩這麼好打破嗎？",
               '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
               "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。"
            ]
            : [
               '<25>{#p/twinkly}{#f/5}{#v/0}* 聰明。\n* 非-常聰明。',
               "<25>{#f/11}{#v/0}* 你是真覺得自己\n  很聰明，是嗎？",
               '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
               "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。"
            ],
      endtwinklyB2: [
         '<25>{#f/8}{#v/0}* 只要你再多殺幾隻怪物...',
         "<25>{#f/9}{#v/0}* 呵，現在把計畫告訴你\n  還為時過早。",
         '<25>{#f/7}{#v/0}* 別忘了，$(name)...',
         "<25>{#f/5}{#v/0}* 我們倆久別重逢，\n  強強聯手只是時間問題。",
         '<25>{#f/6}{#v/0}* 下次長點心，狠一點，\n  說不定...',
         "<25>{#f/5}{#v/0}* 你就能看到好戲了。",
         '<25>{#f/11}{#v/0}* 那麼，回見...'
      ],
      endtwinklyB3: [
         '<25>{#f/8}{#v/0}* 只要你再多殺{@fill=#ff0}一隻{@fill=#fff}怪物...',
         "<25>{#f/9}{#v/0}* 呵，現在把計畫告訴你\n  還為時過早。",
         '<25>{#f/7}{#v/0}* 別忘了，$(name)...',
         "<25>{#f/5}{#v/0}* 我們倆久別重逢，\n  強強聯手只是時間問題。",
         '<25>{#f/6}{#v/0}* 下次長點心，狠一點，\n  說不定...',
         "<25>{#f/5}{#v/0}* 你就能看到好戲了。",
         '<25>{#f/11}{#v/0}* 那麼，回見...'
      ],
      endtwinklyBA: () => [
         SAVE.data.n.state_wastelands_napstablook === 5
            ? '<25>{#p/twinkly}{#f/6}{#v/0}* 所以，你最終誰也沒殺掉。'
            : '<25>{#p/twinkly}{#f/6}{#v/0}* 所以你放過了\n  每一隻你遇到的怪物。',
         '<25>{#f/5}{#v/0}* 我打賭你覺得很棒。',
         '<25>{#f/2}{#v/1}* 但如果你遇到了一個\n  連環殺人犯呢？',
         "<25>{#f/9}{#v/0}* 你除了死，還是死，\n  還是死。",
         "<25>{#f/5}{#v/0}* 最後，你會疲於嘗試。",
         '<25>{#f/11}{#v/0}* 那時候你該怎麼辦呢，\n  嗯哼？',
         '<25>{#f/2}{#v/1}* 你會因為沮喪\n  而大開殺戒嗎？',
         '<25>{#f/14}{#v/1}* 或者只是單純地放棄呢？',
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/7}{#v/0}* 那一定會很好玩的。',
         "<25>{#f/9}{#v/0}* 我會好好看你的好戲的！"
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
         "<25>{#p/twinkly}{#f/5}{#v/0}* 我知道你很清楚這一點，\n  不過...",
         "<25>{#f/6}{#v/0}* 考慮到你已經\n  殺了Toriel一次。",
         "<25>{#f/7}{#v/0}* 不是嗎，小子？",
         '<25>{#f/2}{#v/1}* 你殺了她。',
         "<25>{#f/7}{#v/0}* 然後，你感到抱歉...\n* 不是嗎？",
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/11}{#v/0}* 你以為\n  只有你擁有這種能力嗎？",
         '<25>{#f/6}{#v/0}* 憑藉你的決心，就能擁有\n  重塑宇宙的能力...',
         '<25>{#f/8}{#v/0}* 儲存的能力...',
         '<25>{#f/7}{#v/0}* 你可知道，\n  那曾是屬於我的能力。',
         '<25>{#f/6}{#v/0}* 似乎你對這個世界的渴求\n  凌駕於我。',
         '<25>{#f/5}{#v/0}* 好吧。\n* 趁你還有這種能力\n  好好享受吧。',
         "<25>{#f/9}{#v/0}* 我會好好看你的好戲的！"
      ],
      endtwinklyC: [
         '<25>{#f/7}{#v/0}* After all, this used to be MY power.',
         '<25>{#f/6}{#v/0}* 憑藉你的決心，就能擁有\n  重塑宇宙的能力...',
         '<25>{#f/8}{#v/0}* 儲存的能力...',
         '<25>{#f/6}{#v/0}* I thought I was the only one who could do that.',
         '<25>{#f/6}{#v/0}* 似乎你對這個世界的渴求\n  凌駕於我。',
         '<25>{#f/5}{#v/0}* 好吧。\n* 趁你還有這種能力\n  好好享受吧。',
         "<25>{#f/9}{#v/0}* 我會好好看你的好戲的！"
      ],
      endtwinklyD: [
         "<25>{#p/twinkly}{#f/11}{#v/0}* 你倒是挺會找樂子的嘛。",
         '<25>{#f/8}{#v/0}* 把一路上的怪物都痛扁一頓，\n  等他們快咽氣了，\n  又放他們一條生路...',
         "<25>{#f/7}{#v/0}* 我倒要看看，\n  要是誰打死不要你可憐，\n  你打算咋辦？",
         '<25>{#f/6}{#v/0}* 你要撕了他那張犟嘴？',
         '<25>{#f/5}{#v/0}* 還是動動腦子，\n  發現當個假「好人」\n  屁用沒有呢？',
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/7}{#v/0}* 那一定會很好玩的。',
         "<25>{#f/9}{#v/0}* 我會好好看你的好戲的！"
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
         "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。",
         '<25>{#f/5}{#v/0}* That old woman thought she could break the rules.',
         '<25>{#f/8}{#v/0}* She tried so hard to save you humans...',
         "<25>{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
      ],
      endtwinklyIX: [
         '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
         '<25>{#f/11}{#v/0}* So you finally caved in and killed someone, huh?',
         '<25>{#f/7}{#v/0}* Well, I hope you like your choice.',
         "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
         "<25>{#f/0}{#v/1}* 在這個世界上...\n  不是殺人就是被殺。",
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
         '<25>{#p/twinkly}{#f/5}{#v/0}* 很高興再次見到你。',
         "<25>{#f/6}{#v/0}* 順便說一句，\n  你怕不是宇宙間\n  最無聊的人。",
         '<25>{#f/12}{#v/0}* 和平地過了一段時間之後，\n  還要回去再來一遍？',
         '<25>{#f/8}{#v/0}* 得了吧...',
         "<25>{#f/2}{#v/1}* 你和我都知道，\n  不是殺人就是被殺。"
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
         "<25>{#f/7}{#v/0}* 你遲早會不得不\n  意識到這一點的。",
         '<25>{#f/11}{#v/0}* 等到那時候... \n  又會發生什麼呢？',
         "<25>{#f/5}{#v/0}* 喏，我真的很期待\n  看到那一刻呢。",
         '<25>{#f/11}{#v/0}* 嘻嘻嘻...',
         '<25>{#f/9}{#v/0}* 祝你好運！'
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
         "<25>{#f/11}{#v/0}* 殺Toriel有什麼不對啊？\n* 那不可太好了嗎？",
         '<25>{#f/7}{#v/0}* 嘻嘻嘻...',
         "<25>{#f/2}{#v/1}* 我知道你仍然壞到了骨子裡。",
         '<25>{#f/11}{#v/0}* 我是說，你設法幹掉了\n  所有擋了路的人。',
         '<25>{#f/6}{#v/0}* 但在最後一關，你失敗了。',
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
         '<25>{#p/toriel}{#f/13}* 你想要回「家」，\n  對嗎？',
         '<25>{#f/9}* ...',
         '<25>{#f/9}* 如果你離開這裡，\n  我就沒辦法保護你了。',
         '<25>{#f/9}* 我就沒辦法\n  在你直面危險的時候\n  拯救你了。',
         '<25>{#f/13}* 所以，拜託了，孩子...',
         '<25>{#f/9}* 回去吧。'
      ],
      exit2: [
         '<25>{#p/toriel}{#f/13}* 每個來到這裡的人類\n  最終的命運都一模一樣。',
         '<25>{#f/9}* 我已經見證了一次又一次。',
         '<25>{#f/13}* 他們到來。',
         '<25>{#f/13}* 他們離開。',
         '<25>{#f/9}* ...他們死去。',
         '<25>{#f/13}* 我的孩子...',
         '<25>{#f/13}* 如果你離開外域...',
         '<25>{#f/9}* 那個人...\n* {@fill=#f00}ASGORE{@fill=#fff}...\n* 會取走你的靈魂。'
      ],
      exit3: [
         '<25>{#p/toriel}{#f/9}* ...',
         '<25>{#f/13}* 我雖然不想這麼說，但...',
         '<25>{#f/11}* 我不能允許你繼續往前走。',
         '<25>{#f/9}* 這都是為了你好，孩子...',
         '<25>{#f/9}* 不要跟著我進下一個房間。'
      ],
      exit4: [
         '<25>{#p/toriel}{#p/toriel}{#f/13}* ...',
         '<25>{#f/10}* ...果然。',
         '<25>{#f/9}* 也許事情總是註定\n  要走到這一步。',
         '<25>{#f/9}* 也許我就是愚蠢到\n  覺得你和他們不一樣。',
         '<25>{#f/9}* ...',
         '<25>{#f/13}* 恐怕現在我沒什麼\n  選擇的餘地了。',
         '<25>{#f/13}* 請原諒我，我的孩子...',
         '<25>{#f/11}* 我不能讓你離開。'
      ],
      exitfail1: (lateleave: boolean, sleep: boolean) =>
         world.postnoot
            ? [
               [
                  sleep
                     ? "<32>{#p/twinkly}{#f/19}* 媽咪趁你回家睡覺時\n  去買東西了。"
                     : "<32>{#p/twinkly}{#f/19}* 媽咪在你逃回家後\n  去買東西了。",
                  '<32>{#x1}* 可是... 真不幸啊！\n* 運輸船半路爆炸，\n  把她炸得魂都不剩啦！',
                  '<32>* 嘻嘻，真沒想到\n  這等百年一遇的事\n  居然真的發生啦。',
                  '<32>{*}{#x2}* ...',
                  "<25>{*}{#f/7}* $(name)，真是遺憾呢。\n* 想要好結局的話，\n  你還得再加把勁嚕。"
               ],
               [
                  sleep
                     ? "<32>{#p/twinkly}{#f/19}* 媽咪趁你回家睡覺時\n  去買東西了。"
                     : "<32>{#p/twinkly}{#f/19}* 媽咪在你逃回家後\n  去買東西了。",
                  '<32>{#x1}* 可是... 真不幸啊！\n* 某個會說話的小星星\n  把她千刀萬剮、折磨死啦！',
                  "<32>* 嘻嘻，好像比上次還慘喔！",
                  '<32>{*}{#x2}* ...',
                  "<25>{*}{#f/6}* $(name)，\n  別浪費時間了。\n* 快回來幹正事。"
               ],
               [
                  '<25>{*}{#p/twinkly}{#f/5}* $(name)，你可真傻...',
                  sleep
                     ? "<25>{*}{#f/7}* 想靠那點小把戲矇混過關？\n  做夢去吧！"
                     : "<25>{*}{#f/7}* 你跑啊，你使勁跑\n  跑斷腿了也別想贏得了我。"
               ],
               ['<25>{*}{#p/twinkly}{#f/6}* 只要你還這麼幹，\n  我就一直阻止你。'],
               ['<25>{*}{#p/twinkly}{#f/8}* ...']
            ][Math.min(SAVE.flag.n.postnoot_exitfail++, 4)]
            : [
               sleep
                  ? "<32>{#p/basic}* 當你在Toriel的家裡睡下後，\n  她隨即摧毀了離開外域\n  唯一的出口。"
                  : "<32>{#p/basic}* 在你回到Toriel家後，\n  她隨即摧毀了離開外域\n  唯一的出口。",
               ...(outlandsKills() > 10
                  ? [
                     "<32>* 日子一天天過去，\n  她很快就發現\n  許多怪物都是因你而死。",
                     '<32>* 她徹底陷入了絕望。\n  萬念俱灰，最後...',
                     '<32>* ...',
                     '<32>* ...與-與此同時，\n  前哨站的其他居民苦苦等待著\n  下一個人類去解救他們。'
                  ]
                  : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                     ? [
                        '<32>* 日子一天天過去，\n  Toriel盡己所能關心你，照顧你。',
                        '<32>* 帶你讀書，給你做派...',
                        '<32>* 每晚睡前，幫你蓋好被子...',
                        ...(lateleave
                           ? ['<32>* ...然而，她心底裡仍擔心\n  你會再度逃跑。']
                           : ["<32>* ...盡力不去想那些\n  失蹤的怪物。"]),
                        '<32>* 與此同時，\n  前哨站的其他居民苦苦等待著\n  下一個人類去解救他們。'
                     ]
                     : [
                        '<32>* 日子一天天過去，\n  Toriel盡己所能關心你，照顧你。',
                        '<32>* 帶你讀書，給你做派...',
                        '<32>* 每晚睡前，幫你蓋好被子...',
                        ...(lateleave
                           ? ['<32>* 她總是緊緊抱住你，\n  仿佛這麼做你就不會再度逃跑。']
                           : ['<32>* 只要你想擁抱，\n  她都會無條件給你。']),
                        '<32>* 與此同時，\n  前哨站的其他居民苦苦等待著\n  下一個人類去解救他們。'
                     ]),
               '<32>* ...然而，這個人類\n  永遠都不會到來了。',
               '<32>* 這是你希望的結果嗎？',
               '<32>* 前哨站的怪物，\n  活該接受這樣的命運嗎？'
            ],
      food: () => [
         ...(SAVE.data.n.state_wastelands_mash === 2
            ? [
               '<25>{#p/toriel}{#f/1}* 抱歉讓你久等了...',
               '<25>{#f/3}* 估計那隻小白狗\n  又洗劫我的廚房了。',
               '<25>{#f/4}* 你應該也看到好好的派\n  現在被糟蹋成什麼樣了...',
               '<26>{#f/0}* 不說這個了。\n* 我給你做好了一盤焗蝸牛。'
            ]
            : ['<25>{#p/toriel}* 早餐做好啦！', '<26>* 我給你做了一盤焗蝸牛。']),
         '<25>{#f/1}* 我把吃的放在桌上吧...'
      ],
      fridgetrap: {
         a: () =>
            SAVE.data.b.svr
               ? []
               : world.darker
                  ? ["<32>{#p/basic}* 你對冰箱裡的東西不感興趣。"]
                  : ['<32>{#p/basic}* 冰箱裡有一條名牌巧克力。'],
         b: () => [
            ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* ...', '<32>* 你想嘗嘗嗎？']),
            choicer.create('* （拿走它嗎？）', '是', '否')
         ],
         b1: ['<32>{#p/human}* （你決定什麼也不拿。）'],
         b2: () => [
            '<32>{#p/human}* （你拿走了巧克力。）',
            ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/17}* 啊... 是巧克力。', '<25>{#p/asriel1}{#f/13}* ...'] : [])
         ],
         c: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （但裡面什麼都沒有。）',
                  ...[
                     [
                        '<25>{#p/asriel1}{#f/23}* 噢...\n  $(name)以前\n  總是喜歡翻冰箱。',
                        '<25>{#f/13}* 那傢伙覺得，\n  只要翻得夠深...',
                        '<25>{#f/13}* 就能找到又一條巧克力。',
                        '<25>{#f/17}* ...真笨啊。'
                     ],
                     ['<25>{#p/asriel1}{#f/20}* 那會兒都還沒裝上\n  巧克力複製機呢。']
                  ][Math.min(asrielinter.fridgetrap_c++, 1)]
               ]
               : ['<32>{#p/basic}* 沒有巧克力可拿了。'],
         d: ["<32>{#p/human}* （你帶的東西太多了。）"]
      },
      front1: [
         '<25>{#p/toriel}{#f/1}* ...你想演奏一首\n  自己的曲子？',
         '<25>{#f/0}* 好的，我看看能幫上什麼忙。'
      ],
      front1x: ['<25>{#p/toriel}{#f/1}* ...喂？'],
      front2: () => [
         ...(world.postnoot
            ? [
               '<25>{#p/toriel}{#f/2}* 這麼早就起來了！？',
               '<25>{#f/1}* 你都沒睡多久...',
               '<25>{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? '<25>{#f/1}* 供氣系統應該還沒修好。'
                  : '<25>{#f/1}* 供氣系統好像壞掉了。',
               '<25>{#f/1}* 要是覺得困，就再睡一會吧。',
               '<26>{#f/0}* ...順便一提...'
            ]
            : [
               '<25>{#p/toriel}{#f/2}* 你站在這裡多久了！？',
               '<25>{#f/5}* ...',
               '<25>{#f/0}* 沒事，順帶一提...'
            ]),
         '<25>{#f/0}* 一位叫Napstablook的客人\n  想在這裡演奏自己的音樂。',
         '<25>{#f/0}* 而且，它特別邀請你\n  一起上臺演出！',
         '<25>{#f/1}* 你想去活動室見見它嗎？',
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               '<25>{#f/3}* 對了，不好意思\n  派變成了那副樣子。',
               '<25>{#f/4}* 估計是那隻小白狗\n  又去洗劫我的廚房了...'
            ]
            : 3 <= SAVE.data.n.cell_insult
               ? [
                  '<25>{#f/5}* 對了，不好意思\n  把派做成了那副樣子。',
                  '<25>{#f/9}* 我已經盡力去搶救了...'
               ]
               : []),
         choicer.create("* （參加Napstablook的演出嗎？）", '是', '否')
      ],
      front2a: ['<25>{#p/toriel}{#f/0}* 太好了！\n* 我會轉告給它的。'],
      front2b: ['<25>{#p/toriel}{#f/5}* ...', '<25>{#p/toriel}{#f/5}* 需要我的話，\n  隨時可以到客廳找我。'],
      front3: () => [
         ...(world.postnoot
            ? [
               '<25>{#p/toriel}{#f/0}* 喔，早安，小傢伙。\n* 你起的真早。',
               '<25>{#f/1}* 確定睡足了嗎？',
               '<25>{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? '<25>{#f/1}* 供氣系統應該還沒修好。'
                  : '<25>{#f/1}* 供氣系統好像壞掉了。',
               '<25>{#f/1}* 要是覺得困，就再睡一會吧。',
               '<26>{#f/0}* ...順便一提...'
            ]
            : ['<25>{#p/toriel}* 早上好，小傢伙。']),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               '<25>{#f/3}* 估計那隻小白狗\n  又洗劫我的廚房了。',
               '<25>{#f/4}* 你應該也看到好好的派\n  現在被糟蹋成什麼樣了...',
               '<25>{#f/0}* 不過，為了你能吃上派\n  我還是盡力搶救了一下。'
            ]
            : ['<25>{#f/1}* 今天的星星看起來格外美麗，\n  不是嗎？']),
         '<25>{#f/5}* ...',
         '<25>{#f/5}* 需要我的話，\n  隨時可以到客廳找我。'
      ],
      front4: () => [
         ...(world.postnoot
            ? [
               '<25>{#p/toriel}{#f/0}* 喔，早安，小傢伙。\n* 你起的真早。',
               '<25>{#f/1}* 確定睡足了嗎？',
               '<25>{#f/5}* ...',
               world.nootflags.has('toriel') // NO-TRANSLATE

                  ? '<25>{#f/1}* 供氣系統應該還沒修好。'
                  : '<25>{#f/1}* 供氣系統好像壞掉了。',
               '<25>{#f/1}* 要是覺得困，就再睡一會吧。'
            ]
            : ['<25>{#p/toriel}* 早上好，小傢伙。']),
         '<25>{#f/5}* ...',
         ...(world.bullied
            ? [
               '<25>* 今天外域格外喧囂呢。',
               '<25>* 聽說有個惡霸四處遊蕩，\n  惹是生非。',
               '<25>* 最好別離家太遠。'
            ]
            : [
               '<25>* 今天外域格外安靜呢。',
               '<25>* 我剛才給一個人\n  打了個電話，但是...',
               '<25>* 只有一片死寂。'
            ]),
         ...(SAVE.data.n.state_wastelands_mash === 1
            ? [
               world.bullied
                  ? '<26>{#f/3}* 而且，那隻小白狗\n  又洗劫了我的廚房。'
                  : '<25>{#f/3}* 以及洗劫我廚房的小白狗。',
               '<25>{#f/4}* 你應該也看到好好的派\n  現在被糟蹋成什麼樣了...',
               '<25>{#f/0}* 不過，為了你能吃上派\n  我還是盡力搶救了一下。',
               '<25>{#f/1}* 希望你能喜歡它...'
            ]
            : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
               ? []
               : ['<25>{#f/1}* 真令人擔心...']),
         '<25>{#f/0}* 順便一提，如果需要我的話，\n  隨時可以到客廳找我。'
      ],
      goodbye1a: ['<25>{#p/toriel}{#f/10}* ...', '<25>{#f/20}{|}* 過來- {%}'],
      goodbye1b: ['<25>{#p/toriel}{#f/9}* ...', '<25>{#f/19}{|}* 過來- {%}'],
      goodbye2: [
         '<25>{#p/toriel}{#f/5}* 我很抱歉讓你遭這些罪，\n  孩子。',
         '<25>{#f/9}* 我早就該明白我沒辦法\n  一直把你留在這裡。',
         '<25>{#f/5}* ...不過，\n  如果你想找人聊天的話...',
         '<25>{#f/1}* 歡迎你隨時打電話給我。',
         '<25>{#f/0}* 只要電話訊號能覆蓋到，\n  我肯定會接的。'
      ],
      goodbye3: [
         '<25>{#p/toriel}{#f/5}* 我很抱歉讓你遭這些罪，\n  孩子。',
         '<25>{#f/9}* 我早就該明白我沒辦法\n  一直把你留在這裡。',
         '<25>{#f/10}* ...',
         '<25>{#f/14}* 要乖啊，好嗎？'
      ],
      goodbye4: ['<25>{#p/toriel}{#f/1}* 要乖啊，好嗎？'],
      goodbye5a: [
         '<25>{#p/toriel}{#f/5}* ...嗯？\n* 你改變主意了嗎？',
         '<25>{#f/9}* ...',
         '<25>{#f/10}* 看來你這孩子真挺奇怪的。',
         '<25>{#f/0}* ...罷了。',
         '<25>{#f/0}* 我把這裡的事處理完，\n  然後回房間見你。',
         '<25>{#f/0}* 謝謝你願意聽話，孩子。',
         '<25>{#f/0}* 這下好辦多了。'
      ],
      goodbye5b: [
         '<25>{#p/toriel}{#f/5}* ...嗯？\n* 你改變主意了嗎？',
         '<25>{#f/10}* ...\n* 對不起，孩子。',
         '<25>{#f/9}* 我可能一時情緒失控了。',
         '<25>{#f/0}* ...別擔心我。',
         '<25>{#f/0}* 我把這裡的事處理完，\n  然後回房間見你。',
         '<25>{#f/0}* 謝謝你願意聽話，孩子。',
         '<25>{#f/0}* 這下好辦多了。'
      ],
      halo: {
         a: () => ['<32>{#p/human}* （你撿起了光環。）', choicer.create('* （戴上光環嗎？）', '是', '否')],
         b: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"]
      },
      indie1: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '<25>{#p/toriel}{#f/5}* 之前的教學都不太順利...',
               '<25>{#f/5}* 希望這次能有所改善。'
            ]
            : ['<26>{#p/toriel}* 好。\n* 現在教你第三項，\n  也是最後一項本領。']),
         '<25>{#f/1}* 有信心只靠自己...',
         '<25>{#f/1}* 走到房間的盡頭嗎？',
         choicer.create('* （你要怎麼回答？）', "有信心", "我不敢")
      ],
      indie1a: () => [
         '<25>{#p/toriel}{#f/1}* 你確定嗎...？',
         '<25>{#f/0}* 這段路其實並不長...',
         choicer.create('* （改變主意嗎？）', '是', '否')
      ],
      indie1b: () => [
         '<25>{#p/toriel}{#f/5}* 我的孩子。',
         '<25>{#f/1}* 學會獨立\n  是非常非常重要的，\n  對吧？',
         '<32>{#p/basic}* 如果你堅持不改變主意，說不定\n  Toriel就親自帶你回家了。',
         choicer.create('* （改變主意嗎？）', '是', '否')
      ],
      indie2a: ['<25>{#p/toriel}{#f/1}* 好的...', '<25>{#f/0}* 祝你好運！'],
      indie2b: ['<25>{#p/toriel}{#f/5}* ...', '<25>{#f/9}* ...明白了。'],
      indie2b1: [
         '<25>{#p/toriel}{#f/10}* 別害怕，孩子。',
         '<25>{#f/1}* 如果你真的不想\n  離開我的身邊，那麼...',
         '<25>{#f/0}* 我會陪你穿過\n  外域的其他地方的。',
         '<25>{#f/5}* ...',
         '<25>{#f/5}* 孩子，握住我的手...',
         '<25>{#f/5}* 我們一起回家。'
      ],
      indie2f: ['<32>{#p/human}{#s/equip}* （你得到了一部手機。）'],
      indie3a: ['<25>{#p/toriel}* 你做到了！'],
      indie3b: [
         '<25>{#p/toriel}{#f/3}* 我的乖乖，你怎麼\n  花了這麼長時間才到！？',
         '<25>{#f/4}* 是迷路了嗎？',
         '<25>{#f/1}* ...\n* 應該沒事...'
      ],
      indie4: () => [
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '<25>{#f/0}* 說實話，你能自己走到這裡\n  我都挺意外的。',
               '<25>{#f/3}* 之前表現成那樣，\n  我都懷疑...',
               '<25>{#f/4}* ...你一直在故意整我，\n  是不是？',
               '<25>{#f/23}* 告訴你，\n  我現在可沒空跟你胡鬧。'
            ]
            : [
               '<25>{#p/toriel}{#f/0}* 別擔心，孩子。\n  這只是個給你準備的\n  獨立性測試！',
               '<25>{#f/0}* 一路上並沒有什麼危險。',
               '<25>{#f/1}* 其實呢...'
            ]),
         '<25>{#f/5}* 我要去忙一些重要的事了。',
         '<25>{#f/0}* 在我不在時，\n  希望你能好好表現。',
         '<25>{#f/1}* 前面有些謎題，\n  還沒來得及給你解釋。\n* 而且...',
         '<25>{#f/0}* 如果你擅自離開房間的話，\n  可能會遇到危險。',
         '<25>{#f/10}* 來，這個手機給你。',
         '<32>{#p/human}{#s/equip}* （你得到了一部手機。）',
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               '<25>{#p/toriel}{#f/1}* 我不在的時候...',
               '<25>{#f/0}* 如果遇到任何事情...\n  就給我打電話。',
               '<25>{#f/5}* ...',
               '<26>{#f/23}* 還有，別惹麻煩。'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 我不在的時候...',
               '<25>{#f/0}* 如果遇到任何事情...\n  就給我打電話。',
               '<25>{#f/5}* ...',
               '<25>{#f/1}* 乖乖的，好嗎？'
            ])
      ],
      indie5: [
         [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/toriel}* 嗨！\n* 我是Toriel。',
            '<25>* 辦事的時間\n  比我預想的要長一些。',
            '<25>* 你得再等一會兒了。',
            '<25>{#f/1}* 孩子，\n  謝謝你這麼耐心...',
            '<25>{#f/0}* 你真是太乖了。'
         ],
         [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/toriel}* 嗨...\n* 我是Toriel。',
            '<25>{#f/1}* 我找到想要的東西了...',
            '<25>{#f/0}* 但有隻小白狗\n  把它給叼走了！\n* 真奇怪啊。',
            '<25>{#f/1}* 狗狗還喜歡麵粉嗎？',
            '<25>{#f/0}* 呃，當然，\n  這是個無關緊要的問題。',
            '<25>* 我得再多花點時間\n  才能回來了。',
            '<25>{#f/1}* 再次感謝你這麼耐心...'
         ],
         [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/basic}* （...）',
            '<32>{#p/human}* （你聽到電話那頭\n  傳來急促的喘息聲。）',
            '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
            '<32>{#p/human}* （你聽到遠處傳來一個聲音。）',
            '<25>{#p/toriel}{#f/2}* 拜託，別跑了！',
            '<32>{#s/bark}{#p/event}* 汪汪！\n{#s/bark}* 汪汪！',
            '<25>{#p/toriel}{#f/1}* 快回來，\n  把我的手機還給我！'
         ],
         [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/basic}* （...）',
            '<32>{#p/human}* （聽起來，一隻小白狗\n  在手機上睡著了。）',
            '<32>{#p/basic}* （呼嚕... 呼嚕...）',
            '<32>{#p/human}* （你聽到遠處傳來一個聲音。）',
            '<25>{#p/toriel}{#f/1}* 餵——？\n* 小狗狗...？',
            '<25>{#f/1}* 你在哪裡呀——？',
            '<25>{#f/0}* 乖乖回來，\n  我給你摸摸頭！',
            '<32>{#p/human}* （呼嚕聲停止了。）',
            '<25>{#p/toriel}* ...只要你把我的手機\n  還回來就行。',
            '<32>{#p/human}* （呼嚕聲又響起來了。）'
         ],
         [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/basic}* （...）',
            '<32>{#p/basic}* （啊嚏！）',
            '<32>{#p/human}* （聽起來，一隻小白狗\n  在睡夢中打了個噴嚏。）',
            '<32>{#p/human}* （你聽到遠處傳來一個聲音。）',
            '<25>{#p/toriel}{#f/1}* 啊哈！\n* 小傢伙，我聽到你的聲音了...',
            '<25>{#f/6}* 我這就來找你！',
            '<32>{#p/human}* （呼嚕聲停止了。）\n* （那隻狗好像在躲著什麼。）',
            '<25>{#p/toriel}{#f/8}* 嘻嘻，你逃不掉的！'
         ],
         [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/human}* （你聽到遠處傳來一個聲音。）',
            '<25>{#p/toriel}{#f/1}* 嗨...\n* 我是... Toriel...',
            '<32>{#s/bark}{#p/event}* 汪汪！\n* 汪汪！',
            '<25>{#p/toriel}{#f/2}* 不行，壞狗狗！',
            '<32>{#p/basic}* （嗚咽... 嗚咽...）',
            '<25>{#p/toriel}* 好啦，好啦...\n* 我會再給你找部手機的。',
            '<25>{#f/1}* 這樣行嗎？',
            '<32>{#p/basic}* （...）',
            '<32>{#s/bark}{#p/event}* 汪汪！',
            '<25>{#p/toriel}* 那就好。',
            '<32>{#p/human}* （可以聽到小狗走開的聲音。）',
            '<25>{#p/toriel}* 出了這麼多狀況，\n  非常抱歉。',
            '<25>{#f/1}* 我很快就會回去接你的...'
         ]
      ],
      indie6: (early: boolean) => [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
            ? [
               early
                  ? '<25>{#p/toriel}{#g/torielTired}* ...出來了？'
                  : '<25>{#p/toriel}{#g/torielTired}* ...待得不耐煩了嗎？',
               '<25>{#f/9}* 沒事，我已經猜到了。',
               '<25>{#f/5}* 只是，提醒你一下，\n  外面有很多危險等著你...',
               '<25>{#f/1}* 保護好自己，別受傷了。'
            ]
            : [
               '<25>{#p/toriel}* 喂？\n* 我是Toriel。',
               '<25>{#f/1}* 你沒離開房間吧？',
               '<25>{#f/0}* 外面非常危險，\n  受傷了可就不好了。',
               '<25>{#f/1}* 乖乖的，好嗎？'
            ])
      ],
      indie7: ['<32>{#p/basic}* 幾分鐘後...'],
      indie8: [
         '<25>{#p/toriel}* 我回來啦！',
         '<25>* 你一直這麼耐心等待，\n  真是太棒了。\n* 連我都沒想到你會這麼乖！',
         '<25>{#f/0}* 好啦。\n* 現在我該帶你回家了。',
         '<25>{#f/1}* 來吧，\n  請跟我走吧...'
      ],
      lobby_puzzle1: [
         '<25>{#p/toriel}{#f/0}* 歡迎來到我們簡陋的前哨站，\n  單純的孩子。',
         '<25>{#f/0}* 我必須教給你一些本領。\n* 學會這些，\n  你才能在這裡生存下去。',
         '<25>{#f/1}* 第一樣要學的...',
         '<25>{#f/0}* 當然是謎題了！',
         '<25>{#f/0}* 我來給你快速演示一下。'
      ],
      lobby_puzzle2: [
         '<25>{#p/toriel}{#f/1}* 現在，你可能還覺得很奇怪。\n* 不過...',
         '<25>{#f/0}* 在前哨站，\n  解謎就是我們的家常便飯。',
         '<25>{#f/0}* 只要有人指導，時間久了，\n  解起謎來就能輕車熟路。'
      ],
      lobby_puzzle3: ['<25>{#p/toriel}* 等你準備好，\n  我們就可以繼續前進了。'],
      loox: {
         a: [
            "<32>{#p/basic}{#n1}* 我聽說，\n  作為人類的你很喜歡調情。",
            "<32>* 每當你向各式各樣的怪物{@fill=#cf7fff}調情{@fill=#fff}時，\n  他們名字的右上角\n  就會出現一顆心{@fill=#cf7fff}\u4dc1{@fill=#fff}。",
            "<32>* 你{@fill=#cf7fff}調情{@fill=#fff}的怪物種類越多，\n  你獲得的心也就越多。",
            '<32>* 我尋思著...',
            '<32>* 你能在這條道上走多遠呢？',
            '<32>* 也許，我的朋友，\n  你會成為一個... 傳奇。'
         ],
         b: [
            '<32>{#p/basic}{#n1}* 嘿，人類！\n  你有嘗試過調情嗎？',
            "<32>* 哈！\n* 一看你的表情我就知道\n  你肯定沒試過。",
            "<32>* 我得跟你說，\n  調情超級好玩的。",
            "<32>* 這樣會讓你的敵人\n  不知道怎麼辦才好！",
            '<32>* 那個那個...\n  如果你真的試過調情了，\n  我會告訴你更多事情喔。',
            '<32>* 祝你好運！'
         ],
         c: [
            "<32>{#p/basic}{#n1}* 嘿人類，\n  現在你已經開始調情了...",
            '<32>* 感覺如何？',
            "<32>* 非常好，對吧？",
            "<32>* 每當你向各式各樣的怪物{@fill=#cf7fff}調情{@fill=#fff}時，\n  他們名字的右上角\n  就會出現一顆心{@fill=#cf7fff}\u4dc1{@fill=#fff}。",
            "<32>* 你{@fill=#cf7fff}調情{@fill=#fff}的怪物種類越多，\n  你獲得的心也就越多。",
            '<32>* 我尋思著...',
            '<32>* 你能在這條道上走多遠呢？',
            '<32>* 也許，我的朋友，\n  你會成為一個... 傳奇。'
         ],
         d: [
            "<32>{#p/basic}{#n1}* 我聽說你在這一帶\n  有點霸道。",
            '<32>* 哈！\n* 加入我們吧，夥計。',
            "<32>* 你在跟這片的頭號惡霸說話呢。",
            "<32>* 如果你{@fill=#3f00ff}欺負{@fill=#fff}了某幾種怪物，\n  你就會在它們的名字旁邊\n  看到一把劍{@fill=#3f00ff}\u4dc2{@fill=#fff}。",
            "<32>* 你{@fill=#3f00ff}欺負{@fill=#fff}的怪物的種類越多，\n  劍也會越來越多。",
            '<32>* 不過，我事先跟你說一聲，\n  有些怪物是不吃這一套的。',
            "<32>* 這就像調情...\n  不過是玩命的那種。",
            '<32>* 挺有意思，是吧？'
         ],
         e: pager.create(
            0,
            () => [
               ...(30 <= SAVE.data.n.bully
                  ? [
                     "<32>{#p/basic}{#n1}* 我聽說你現在是這一帶的惡霸。",
                     "<32>* 大家都很怕你，嗯？"
                  ]
                  : 20 <= world.flirt
                     ? [
                        "<32>{#p/basic}{#n1}* 我聽說你現在\n  是這裡最浪漫的人。",
                        '<32>* 大家都很愛你，嗯？'
                     ]
                     : [
                        "<32>{#p/basic}{#n1}* 我聽說你現在是這一帶的大英雄。",
                        '<32>* 大家都很喜歡你，嗯？'
                     ]),
               '<32>* 嗯... 僅我個人觀點，\n  我覺得你的空閒時間太多了。'
            ],
            ['<32>{#p/basic}{#n1}* 怎麼？\n* 我說錯了嗎？']
         )
      },
      manana: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     "<32>{#p/basic}{#n1}* 所以，你就是那個\n  一起主持了音樂節目的傢伙，嗯？",
                     "<32>* 也許現在你有辦法接受我的提議了。",
                     "<32>* 我只是想讓人買我這本\n  限量版《超級星之行者》漫畫。",
                     "<32>* 不過，我挺喜歡你那場表演的。\n  給你打個折吧。\n* 5G，買還是不買？",
                     choicer.create('{#n1!}* （花5G買下這本\n  《超級星之行者1》漫畫嗎？）', '是', '否')
                  ]
                  : [
                     ...(world.postnoot
                        ? [
                           "<32>{#p/basic}{#n1}* 嘿，你有沒有注意到\n  這附近有啥奇怪的事兒在發生？",
                           "<32>* 我敢說剛才\n  所有的謎題都自動關閉了。",
                           "<32>* 對了，我想為我這本\n  限量版《超級星之行者》漫畫\n  找個買家。"
                        ]
                        : [
                           '<32>{#p/basic}{#n1}* 終於有人跟我說話了！',
                           "<32>* 我在這裡站了好久，\n  都沒人接受我的提議。",
                           "<32>* 我只是想讓人買我這本\n  限量版《超級星之行者》漫畫。"
                        ]),
                     "<32>* 感興趣嗎？\n* 我只收10G。",
                     choicer.create('{#n1!}* （花10G買下這本\n  《超級星之行者1》漫畫嗎？）', '是', '否')
                  ],
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     "<32>{#p/basic}{#n1}* 有興趣買我的\n  限量版《超級星之行者》漫畫嗎？",
                     "<32>* 我只收5G。",
                     choicer.create('{#n1!}* （花5G買下這本\n  《超級星之行者1》漫畫嗎？）', '是', '否')
                  ]
                  : [
                     "<32>{#p/basic}{#n1}* 有興趣買我的\n  限量版《超級星之行者》漫畫嗎？",
                     "<32>* 我只收10G。",
                     choicer.create('{#n1!}* （花10G買下這本\n  《超級星之行者1》漫畫嗎？）', '是', '否')
                  ]
         ),
         b: () => [
            "<32>{#p/human}{#n1!}* （你的錢不夠。）",
            SAVE.data.b.napsta_performance
               ? "<32>{#p/basic}{#n1}* 我就直說了，\n  你那點錢可不夠5G..."
               : "<32>{#p/basic}{#n1}* 我就直說了，\n  你那點錢可不夠10G..."
         ],
         c: ['<32>{#p/basic}{#n1}* 不感興趣，對嗎？', "<32>* 那好吧。\n* 我再找找其他人..."],
         d: [
            '<32>{#s/equip}{#p/human}{#n1!}* （你獲得了《超級星之行者1》。）',
            '<32>{#p/basic}{#n1}* 太好了！\n* 盡情欣賞吧。'
         ],
         e: ['<32>{#p/basic}{#n1}* 又回來了，嗯？', "<32>* 不好意思哈，\n  我沒什麼別的東西可賣了。"],
         f: [
            "<32>{#p/human}{#n1!}* （你帶的東西太多了。）",
            "<32>{#p/basic}{#n1}* 你的口袋鼓鼓囊囊的，\n  裝了不少東西嘛..."
         ],
         g: [
            "<32>{#p/basic}{#n1}* 我聽說他們要\n  重啟那個漫畫系列了...",
            '<32>* 新的主角好像是條戴墨鏡的蛇\n  還是啥的。',
            "<32>* 要我說，就該搞個\n  關於那個跟班的外傳...",
            '<32>* 是叫Gumbert還是啥來著？'
         ],
         h: [
            "<32>{#p/basic}{#n1}* 現在咱們自由了，\n  他們終於能開始做\n  那個計畫中的重啟版了。",
            "<32>* 那玩意叫啥來著？\n* 喔，我已經給忘了..."
         ]
      },
      mananaX: () =>
         [
            [
               '<32>{#p/basic}{#n1}* 呃，剛才什麼動靜？',
               "<32>{#p/basic}{#n1}* 唉... \n  現在不行啦，眼睛花了。"
            ],
            ['<32>{#p/basic}{#n1}* 啊？\n* 怎麼又整出這動靜了？\n  現在的孩子啊...'],
            ['<32>{#p/basic}{#n1}* 現在的孩子啊...']
         ][Math.min(roomKills().w_puzzle4++, 2)],
      afrogX: (k: number) =>
         [
            ["<32>{#p/basic}{#n1}* 如... \n* 如果你再-再那麼做的話... \n  我-我會站出來阻止你的！"],
            ['<32>{#p/basic}{#n1}* 住-住手...\n* 別傷害他們了...']
         ][k],
      patron: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? 6 <= world.population
                     ? [
                        "<32>{#p/basic}{#n1}* 我很傷心。\n* 他們把打碟機搬走了，\n  說是以後搞什麼俗氣的表演要用。",
                        '<32>* ...等等，那好像還蠻酷的嘛。'
                     ]
                     : [
                        "<32>{#p/basic}{#n1}* 我很傷心。\n* 之前來的那個惡霸...",
                        '<32>* ...居然是你。',
                        '<32>* 雖然你最後拯救了大家，\n  但為什麼一路上都要使用暴力呢？'
                     ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        "<32>{#p/basic}{#n1}* 我很傷心。\n* 這段時間，音樂家們\n  都把自己逼得好緊...",
                        '<32>* 我個人真的很喜歡他們的曲子。',
                        "<32>* 真可惜，\n  我們可能再也聽不到第二次了。",
                        '<32>{#n1!}{#n2}* 至少你還有牛排作伴，\n  對吧？;)',
                        '<32>{#n2!}{#n1}* ...別再提這個了。'
                     ]
                     : [
                        "<32>{#p/basic}{#n1}* 我很傷心。\n* 這幾天的伙食真的是每況愈下...",
                        '<32>* 他們當初承諾會給一些\n  「貨真價實」的東西。\n* 但我所得的都是些偽劣仿製品。',
                        '<32>{#n1!}{#n2}* 嘿！;)\n* 別在顧客面前\n  說我店面的壞話！;)',
                        '<32>* 再說了，如果是你的味覺\n  出了些毛病呢 ;)',
                        '<32>{#n2!}{#n1}* ...一點都沒變。'
                     ],
            () => [
               SAVE.data.n.plot === 72 && 6 <= world.population
                  ? "<32>{#p/basic}{#n1}* ...不是這麼回事？"
                  : '<32>{#p/basic}{#n1}* ...就是這麼回事。'
            ]
         )
      },
      pie: () =>
         3 <= SAVE.data.n.cell_insult
            ? ['<32>{#p/human}* （你撿起了烤糊的派。）']
            : SAVE.data.n.state_wastelands_mash === 1
               ? ['<32>{#p/human}* （你帶走了派粥。）']
               : SAVE.data.b.snail_pie
                  ? ['<32>{#p/human}* （你撿起了蝸牛派。）']
                  : ['<32>{#p/human}* （你撿起了奶油糖肉桂派。）'],
      plot_call: {
         a: () => [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* 孩子，你好。'
               : '<25>{#p/toriel}* 喂？\n* 我是Toriel。',
            '<25>{#f/1}* 不是啥大事，\n  只是想問一下...',
            '<25>{#f/0}* 你更喜歡肉桂，\n  還是奶油糖呢？',
            choicer.create('* （你更喜歡哪個？）', '肉桂', '奶油糖'),
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* 我知道了。'
               : '<25>{#p/toriel}* 喔，我知道了！\n* 十分感謝！'
         ],
         b: () => [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}* 孩子，你好。'
               : '<25>{#p/toriel}* 喂？\n* 我是Toriel。',
            [
               '<25>{#f/1}* 你不討厭奶油糖吧？',
               '<25>{#f/1}* 你不討厭肉桂吧？'
            ][SAVE.data.n.choice_flavor],
            '<25>{#f/1}* 我知道你更喜歡另一種，\n  只是...',
            '<25>{#f/1}* 假如食物裡放了它，\n  你還願意吃嗎？',
            choicer.create('* （你要怎麼回答？）', "願意吃", "不吃了")
         ],
         b1: () => [
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/0}* 知道了。'
               : '<25>{#p/toriel}* 好的，好的，沒問題。',
            '<25>{#f/1}* 那我先掛了...'
         ],
         b2: () => [
            '<25>{#p/toriel}{#f/5}* ...',
            '<25>{#f/0}* 好吧。',
            '<25>{#f/1}* ...',
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#f/0}* 我看看怎麼辦吧。'
               : '<25>{#f/0}* 我會回頭再打給你的，\n  孩子。'
         ],
         c: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/toriel}{#f/1}* 你沒什麼過敏的東西吧？',
            '<25>{#f/5}* ...',
            '<25>{#f/5}* 我感覺人類不該\n  對怪物的食物過敏。',
            '<25>{#f/0}* 嘻嘻。\n* 剛問的別放在心上！'
         ],
         d: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/toriel}{#f/1}* 嗨，小傢伙。',
            '<25>{#f/0}* 我想起來\n  好久沒收拾這地方了。',
            '<25>{#f/1}* 所以，這裡可能\n  四處散落著各種東西。',
            '<25>{#f/0}* 你可以把它們撿起來，\n  帶在身上，但別帶太多。',
            '<25>{#f/1}* 萬一以後碰到什麼\n  真正想要的東西呢？',
            '<25>{#f/0}* 那時，你就會希望\n  自己的口袋裡還有空地方了。'
         ]
      },
      puzzle1A: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* （開關好像卡住了。）']
            : ['<32>{#p/basic}* 開關卡住了。'],
      puzzle3A: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* （開關好像卡住了。）']
            : ['<32>{#p/basic}* 開關卡住了。'],
      return1: () => [
         SAVE.data.n.cell_insult < 3
            ? '<25>{#p/toriel}{#f/1}* 你是怎麼到這裡的，\n  我的孩子？'
            : '<25>{#p/toriel}{#f/1}* 喔... 你到了。',
         '<25>* 你還好嗎？'
      ],
      return2a: () =>
         SAVE.data.n.cell_insult < 3
            ? ['<25>{#p/toriel}* 一點傷都沒有！\n* 很厲害！']
            : ['<25>{#p/toriel}{#f/10}* 沒有受傷...\n* 挺好的。'],
      return2b: () =>
         SAVE.data.n.cell_insult < 3
            ? ['<25>{#p/toriel}{#f/4}* 你好像受傷了...', '<25>{#f/10}* 乖，乖。\n* 讓我幫你療傷。']
            : ['<25>{#p/toriel}{#f/9}* 你受傷了。', '<25>{#f/10}* 請讓我幫你療傷。'],
      return2c: [
         '<25>{#p/toriel}{#f/3}* ...',
         '<25>{#f/11}* 是誰把你弄成這樣的？\n* 他該為此付出代價。'
      ],
      return3: () => [
         '<25>{#p/toriel}* 孩子，對不起。\n* 我真是個笨蛋，居然把你\n  一個人扔下這麼長時間。',
         ...(world.postnoot
            ? [
               '<25>{#f/1}* ...是我的錯覺嗎？\n  感覺空氣不太對勁。',
               '<25>{#f/5}* 估計是供氣系統出故障了。',
               '<25>{#f/5}* ...',
               '<25>{#f/0}* 別擔心。\n* 很快就會有人解決的。'
            ]
            : []),
         '<25>{#f/1}* 來吧！\n* 我給你準備了個驚喜。'
      ],
      return4: () => [
         '<25>{#p/toriel}* 歡迎來到我的住所！',
         ...(3 <= SAVE.data.n.cell_insult
            ? [
               '<25>{#f/1}* 你聞到...',
               '<25>{#p/toriel}{#f/2}* ...哎呀，\n  忘了看烤箱了！',
               '<25>{#p/toriel}{#f/5}* 剛剛我全顧著去想你\n  之前為什麼那麼做，我...',
               '<25>{#p/toriel}{#f/1}* 我得馬上去看看派怎麼樣了，\n  請別到處亂跑！'
            ]
            : [
               '<25>{#f/1}* 聞到了嗎？',
               ...(SAVE.data.b.snail_pie
                  ? ['<25>{#f/0}* 驚喜！\n* 是我親手做的蝸牛派。']
                  : [
                     '<25>{#f/0}* 驚喜！\n* 我做了個奶油糖肉桂派。',
                     '<25>{#f/0}* 今晚我原本是想做蝸牛派的，\n  但我猜你更喜歡這個。'
                  ]),
               '<25>{#f/1}* 嗯，儘管我很久\n  沒有照顧過其他人了...',
               '<25>{#f/0}* 但還是希望\n  你能在這裡過得開心。',
               '<25>{#f/0}* 跟我來！\n* 還有個驚喜等著你。'
            ])
      ],
      return5: [
         "<25>{#p/toriel}* 快看！\n* 這是屬於你自己的房間。",
         '<25>{#f/1}* 希望你能喜歡它...'
      ],
      return6: [
         '<25>{#p/toriel}{#f/1}* 嗯，我得去看一下派\n  烤得怎麼樣了。',
         '<25>{#f/0}* 請四處走走，熟悉下吧！'
      ],
      runaway1: [
         ['<25>{#p/toriel}{#f/1}* 你是不是應該在屋裡玩呢？', '<25>{#f/0}* 來吧。'],
         ['<25>{#p/toriel}{#f/9}* 在這裡玩很危險的，\n  孩子。', '<25>{#f/5}* 相信我。'],
         ['<26>{#p/toriel}{#f/5}* 這裡的重力很小。\n* 你會飄走的。'],
         ['<25>{#p/toriel}{#f/5}* 這裡的空氣系統很脆弱。\n* 你會窒息的。'],
         ['<25>{#p/toriel}{#f/23}* 這裡真的沒有什麼\n  值得你看的東西。'],
         ['<25>{#p/toriel}{#f/1}* 想跟我一起讀本書嗎？'],
         ['<25>{#p/toriel}{#f/1}* 你想再去看看外域的\n  其他地方嗎？'],
         ['<25>{#p/toriel}{#f/5}* 我不會讓你一個人\n  遇到危險的。'],
         ['<25>{#p/toriel}{#f/3}* 你想讓我一整天都這樣子嗎？'],
         ['<25>{#p/toriel}{#f/4}* ...'],
         ['<25>{#p/toriel}{#f/17}* ...', '<25>{#f/15}* 我不喜歡你玩這種遊戲。'],
         ['<25>{#p/toriel}{#f/17}* ...']
      ],
      runaway2: [
         '<25>{#p/toriel}{#f/1}* 回屋裡去吧，孩子...',
         '<25>{#f/0}* 我要給你看樣東西！'
      ],
      runaway3: [
         '<25>{#p/toriel}{#f/2}* 孩子，快回去！\n* 這裡非常不安全！',
         '<25>{#f/0}* 跟我來吧。\n  早餐已經做好了。'
      ],
      runaway4: ['<25>{#p/toriel}{#f/2}* 孩子！\n* 為什麼要來這裡！？'],
      runaway5: [
         '<25>{#p/toriel}{#f/1}* 你想過離開外域之後\n  等待你的是什麼嗎？',
         '<25>{#f/5}* 對不起，我...\n  我之前對你太冷淡了...',
         '<25>{#f/9}* 是不是因為我不夠關心你，\n  你才逃跑的呢...'
      ],
      runaway6: [
         '<25>{#g/torielStraightUp}* 說實話... 我不敢離開這裡。',
         '<25>{#f/9}* 外面非常危險，那些怪物\n  足以威脅到你我的生命。',
         '<25>{#g/torielSincere}* 我也想盡力保護你，\n  不讓他們傷害到你...',
         '<25>{#g/torielStraightUp}* 可要是我跟你一起離開，\n  他們會把我也當成一種威脅。',
         '<25>{#f/9}* 等待你的，\n  只會是更大的危險。'
      ],
      runaway7: [
         '<25>{#p/toriel}{#f/5}* 求求你...',
         '<25>{#f/1}* 跟我回家吧，\n  我保證會好好照顧你的。',
         '<25>{#f/5}* 你說什麼我都答應，好嗎？',
         '<25>{#f/18}* 求你了...\n  不要像他們一樣拋下我...'
      ],
      runaway7a: [
         '<25>{#p/toriel}{#f/18}* ...',
         '<25>{#g/torielCompassionSmile}* 沒事啦，沒事啦，孩子。\n* 一切都會好起來的。',
         '<25>{#f/1}* 你先回家，\n  我要在這處理些事情。',
         '<25>{#f/5}* 很快就回去。'
      ],
      runaway7b: [
         '<25>{#p/toriel}{#f/21}* 真可悲啊...',
         '<25>* 我連一個人類孩子...\n  都保護不了...',
         '<32>{#p/human}* （腳步聲逐漸遠去。）'
      ],
      silencio: {
         a: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#n1}* 嘿，你好啊。\n* 很高興又在這兒見到你。',
                     "<32>* 我決定回來看看\n  我這塊老地盤...",
                     "<32>* 而且這裡相對安靜。\n* 就跟我一個樣。",
                     "<32>* 喔對了，我不在核心工作了。",
                     '<32>* 你瞧，我當初加入工程隊的時候...',
                     "<32>* 可沒想過還得臨時客串當守衛啊。",
                     '<32>* ...看來就算是料事如神的我，\n  也沒預料到公司會來這套。'
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        '<32>{#p/basic}{#n1}* 嘿，你好。\n* 很高興能在演出看到你。',
                        "<32>* 我叫Silencio...\n  但我覺得你應該聽過了。",
                        '<32>* 這裡的人都知道我的名字，\n  連那個DJ都知道。',
                        '<32>* 我曾經在這裡表演過\n  我自己的音樂劇。',
                        '<32>* 名字叫「Silencio的大逃亡」。',
                        '<32>* 結束了之後，\n  觀眾還沒來得及嘆口氣，我就走了。'
                     ]
                     : [
                        '<32>{#p/basic}{#n1}* 嘿，你好。\n* 很高興見到你。',
                        "<32>* 我叫Silencio...\n  好吧，這稱呼是其他人給我取的。",
                        '<32>* 想知道為什麼他們\n  這樣叫我嗎？',
                        "<32>* 我寂靜如最沉寂的星辰，\n  好似一位星際忍者。",
                        '<32>* 我能在任何危機中逃出生天，\n  從未失手。',
                        "<32>* 不信是吧？\n* 你試著整點動靜，反正我肯定是\n  跑得比誰都快的。"
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#n1}* 啊，對喔，\n  我好像可以離開這個星系了。",
                     "<32>* ...不過，我或許會留下來呢。"
                  ]
                  : SAVE.data.b.napsta_performance
                     ? [
                        '<32>{#p/basic}{#n1}* 你甚至可以說，我的演出...',
                        '<32>* 讓人「嘆為觀止」。'
                     ]
                     : [
                        '<32>{#p/basic}{#n1}* 你為什麼還要繼續找我搭話，嗯？',
                        "<32>* 我已經說完了我想說的。"
                     ]
         )
      },
      
      socks0: ['<32>{#p/human}* （你往裡面瞅了瞅。）', '<32>{#p/human}* （看來抽屜裡是空的。）'],
      socks1: () =>
         world.darker
            ? ['<32>{#p/human}* （你往裡面瞅了瞅。）', "<32>{#p/basic}* 只是個放襪子的抽屜。"]
            : [
               '<32>{#p/human}* （你往裡面瞅了瞅。）',
               '<32>{#p/basic}* 真羞人！',
               "<32>* 這裡面全是Toriel收藏的襪子。\n* 有點亂...",
               world.meanie
                  ? choicer.create('* （讓它們更亂點嗎？）', "弄亂", "算了")
                  : choicer.create('* （整理一下嗎？）', "整理", "算了")
            ],
      socks2: () =>
         world.meanie
            ? ['<33>{#p/human}* （你把襪子弄得一團糟。）']
            : [
               '<32>{#p/human}* （你把襪子整理成一雙一雙的。）',
               ...(SAVE.data.b.oops
                  ? []
                  : [
                     "<32>{#p/human}* （...）\n* （抽屜裡好像藏著一把鑰匙。）",
                     choicer.create('* （拿走鑰匙嗎？）', "拿走", "不拿")
                  ])
            ],
      socks3: () => [
         "<32>{#p/human}* （...）\n* （抽屜裡好像藏著一把鑰匙。）",
         choicer.create('* （拿走鑰匙嗎？）', "拿走", "不拿")
      ],
      socks4: ['<32>{#p/human}* （你打算不這麼做。）'],
      socks5: [
         '<32>{#s/equip}{#p/human}* （你把秘密鑰匙掛到了鑰匙串上。）',
         '<32>{#p/basic}* ...能用這鑰匙開什麼呢？'
      ],
      socks6: ['<32>{#p/human}* （你決定什麼也不拿。）'],
      socks7: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* （你盯著襪子抽屜，\n  回想起從這裡開始的漫長旅程。）',
               "<32>{#p/human}* （你不禁想像，如果沒有它，\n  你現在會身處何方。）"
            ]
            : world.darker
               ? ["<32>{#p/basic}* 只是個放襪子的抽屜。"]
               : SAVE.data.n.plot < 72
                  ? ["<32>{#p/basic}* 你的視線沒辦法從襪子上挪開。"]
                  : SAVE.data.b.oops
                     ? [
                        "<32>{#p/basic}* 你大老遠跑回來，\n  就只是為了再看一眼\n  Toriel的襪子抽屜...？",
                        '<32>* 你這人生規劃得可真不錯。'
                     ]
                     : [
                        "<32>{#p/basic}* 你大老遠跑回來，\n  就只是為了再看一眼\n  Toriel的襪子抽屜...？",
                        '<32>* ...不過這確實挺有意義的。'
                     ],
      steaksale: {
         a: pager.create(
            0,
            () =>
               SAVE.data.b.napsta_performance
                  ? [
                     '<32>{#p/basic}{#n1}* 您好，親 ;)',
                     "<32>* 能在演出看到你真的很開心，\n  你懂吧 ;)",
                     '<32>* 你真的超級出彩 ;)',
                     "<32>* 反正，無論如何，\n  我覺得我得給你一個特別待遇 ;)",
                     '<32>* 在一段時間之內，\n  我將我們的產品注入了「優質」成分 ;)',
                     "<32>* 相信我，親，\n  這可就跟以前的東西\n  完全不一樣了 ;)",
                     '<32>* 這東西可是貨真價實的喲 ;)',
                     "<32>* 會有一點貴，希望你不要介意 ;)",
                     "<32>* 那麼... \n  稍微看看我們這的東西吧？;)"
                  ]
                  : [
                     '<32>{#p/basic}{#n1}* 您好，親 ;)',
                     '<32>* 為了看看你們這群鄉下佬在忙什麼，\n  上頭特地派我來這裡，知道吧？;)',
                     "<32>* 你可以認為我們正在\n  進行業務擴張 ;)",
                     "<32>* 你問什麼是我們的業務？;)",
                     "<32>* 嗯，其實很簡單...\n  賣牛排而已 ;)",
                     "<32>* 這可不是什麼贗品，嗯哼？;)",
                     '<32>* 這牛排可是真貨喲 ;)',
                     '<32>* 所有質疑這是假貨的人都在騙你，\n  懂我的意思吧？;)',
                     "<32>* 話雖如此，\n  要不稍微看看我們這的東西吧？;)"
                  ],
            ["<32>{#p/basic}{#n1}* 稍微看看我們這的東西吧？;)"]
         ),
         a1: ['<32>{#p/basic}{#n1}* 謝謝惠顧，親 ;)'],
         b: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '<32>{#p/basic}{#n1!}* 「滋滋牛排」 - 售價40G。'
                  : '<32>{#p/basic}{#n1!}* 上面寫著「滋滋牛排」，售價40G。\n* 聞起來過於誇張。'
               : world.darker
                  ? '<32>{#p/basic}{#n1!}* 「滋滋牛排」 - 售價20G。'
                  : '<32>{#p/basic}{#n1!}* 上面寫著「滋滋牛排」，售價20G。\n* 聞起來很誇張。',
            SAVE.data.b.napsta_performance
               ? choicer.create('* （花40G買下滋滋牛排嗎？）', '是', '否')
               : choicer.create('* （花20G買下滋滋牛排嗎？）', '是', '否')
         ],
         b1: ['<32>{#p/human}{#n1!}* （你得到了滋滋牛排。）', '<32>{#p/basic}{#n1}* 絕佳的選擇，親 ;)'],
         b2: ['<32>{#p/human}{#n1!}* （你決定先不買。）'],
         c: () => [
            SAVE.data.b.napsta_performance
               ? world.darker
                  ? '<32>{#p/basic}{#n1!}* 「呲呲汽水」 - 售價10G。'
                  : '<32>{#p/basic}{#n1!}* 上面寫著「呲呲汽水」，售價10G。\n* 究竟誰會去買這種東西啊？'
               : world.darker
                  ? '<32>{#p/basic}{#n1!}* 「呲呲汽水」 - 售價5G。'
                  : '<32>{#p/basic}{#n1!}* 上面寫著「呲呲汽水」，售價5G。\n* 誰會去買這種東西啊？',
            SAVE.data.b.napsta_performance
               ? choicer.create('* （花10G買下呲呲汽水嗎？）', '是', '否')
               : choicer.create('* （花5G買下呲呲汽水嗎？）', '是', '否')
         ],
         c1: ['<32>{#p/human}{#n1!}* （你得到了呲呲汽水。）', "<32>{#p/basic}{#n1}* 小心點，挺甜的 ;)"],
         c2: ['<32>{#p/human}{#n1!}* （你決定先不買。）'],
         d: pager.create(
            0,
            () => [
               "<32>{#p/human}{#n1!}* （你的錢不夠。）",
               '<32>{#p/basic}{#n1}* 錢不夠，是嗎？;)',
               SAVE.data.b.napsta_performance
                  ? '<32>{#p/basic}* 沒關係的，親 ;)\n* 不是每個人都買得起「高端」食材的 ;)'
                  : "<32>{#p/basic}* 沒關係的，親 ;)\n* 搞到一些之後再過來就好 ;)"
            ],
            ["<32>{#p/human}{#n1!}* （你的錢不夠。）"]
         ),
         e: pager.create(
            0,
            [
               "<32>{#p/human}{#n1!}* （你帶的東西太多了。）",
               '<32>{#p/basic}{#n1}* 也許你該過一會再來看看 ;)'
            ],
            ["<32>{#p/human}{#n1!}* （你帶的東西太多了。）"]
         ),
         f: ['<32>{#p/human}{#n1!}* （你得到了滋滋牛排。）'],
         g: ['<32>{#p/human}{#n1!}* （你得到了呲呲汽水。）'],
         h: ["<32>{#p/human}{#n1!}* （你帶的東西太多了。）"],
         i: [
            "<32>{#p/basic}{#n1}* 順便說下，我們缺貨了 ;)",
            "<32>* 看起來你對我們的商品情有獨鍾 ;)",
            '<32>* 如果-\n* 不，當你見到我們上司的時候...\n  記得和他說一聲 ;)',
            '<32>{#p/human}{#n1!}* （Aaron在你耳邊低語了幾句。）',
            '<32>{#p/basic}{#n1}* 一路順風，親 ;)'
         ]
      },
      supervisor: {
         a: ['<32>{#p/basic}* 過了一陣子...'],
         b: [
            '<32>{#p/napstablook}* 嘿各位...',
            '<32>* 這是我不久前寫的一首小調...',
            "<32>* 我還在嘗試各種音樂風格...\n  所以...",
            "<32>* 希望各位能喜歡這首曲子",
            '<32>* ...',
            '<32>* 那，我們開始吧...'
         ],
         c1: ['<32>{*}{#p/basic}* 哇，爵士樂的味道。{^30}{%}'],
         c2: [
            '<25>{*}{#p/toriel}{#f/7}* 為什麼Napstablook之前\n  完全沒提過呢？？\n* 真的好厲害！{^30}{%}',
            "<32>{*}{#p/basic}* 是啊，可能它只是有點害羞吧。{^30}{%}"
         ],
         c3: ['<32>{*}{#p/basic}* 喔，好棒 ;){^30}{%}'],
         c4: ['<32>{*}{#p/basic}* 高潮要來了！{^30}{%}'],
         c5: ['<32>{*}{#p/basic}* 哇喔，真是... 難以置信啊。{^30}{%}'],
         d: [
            '<32>{#p/napstablook}* 是啊，難以置信',
            '<32>{#p/napstablook}* 好吧...\n* 估計是我的表演太爛\n  讓你們無聊了...',
            '<32>{#p/napstablook}* 對不起...'
         ],
         e: [
            '<25>{|}{#p/toriel}{#f/2}* 不，等等！\n* 我很喜...',
            "<32>{#p/basic}* 它已經走了，Toriel。",
            '<25>{#p/toriel}{#f/9}* ...\n* 每次都是這樣...'
         ]
      },
      terminal: {
         a: () =>
            postSIGMA()
               ? ["<32>{#p/human}* （你激活了終端。）\n* （上面什麼訊息也沒有。）"]
               : SAVE.data.n.plot === 72
                  ? !world.runaway
                     ? [
                        '<32>{#p/human}* （你激活了終端。）\n* （上面有一條新訊息。）',
                        "<32>{#p/alphys}* 各位！咱們自由啦！\n* 這不是在開玩笑，\n  那個力場真的消失啦！",
                        "<32>* 說真的，\n  他們過幾天就要關閉核心了，\n  咱們得趕緊離開這兒！",
                        "<32>* 你們可不想死在這兒吧，啊？"
                     ]
                     : [
                        '<32>{#p/human}* （你激活了終端。）\n* （上面有一條新訊息。）',
                        "<32>{#p/alphys}* 那道力場破碎了。\n* 請喊上全體居民迅速撤離。",
                        "<32>* ...你們都很害怕，我懂，\n  但很快就沒事了。",
                        "<32>* 把那個人類丟下後，\n  那傢伙傷不到我們的。"
                     ]
                  : 37.2 <= SAVE.data.n.plot
                     ? [
                        '<32>{#p/human}* （你激活了終端。）\n* （上面有一條新訊息。）',
                        "<32>{#p/alphys}* 鑄廠的流體網路修好了，\n  這多虧了我們... \n  那-那些非常熱心的工人。",
                        '<32>* ...',
                        "<32>* 對了，說起來...\n  我們還-還在招募新人。"
                     ]
                     : [
                        '<32>{#p/human}* （你激活了終端。）\n* （上面有一條新訊息。）',
                        "<32>{#p/alphys}* 鑄廠的流體網路又-又斷了。",
                        '<32>* 工人們承諾\n  很快就會恢復正常，\n  但真實情況看起來並不樂觀。',
                        '<32>* 如-如果這附近現在有人，\n  請趕緊過來幫忙...'
                     ]
      },
      torieldanger: {
         a: ['<25>{#p/toriel}{#f/1}* 去看看那邊的終端吧。'],
         b: ['<25>{#p/toriel}{#f/1}* 小傢伙，終端就在那裡。\n  去輸下密碼吧。']
      },
      latetoriel1: [
         '<25>{#p/toriel}{#npc/a}{#f/2}* ...！',
         '<25>{#f/5}* 你在這兒幹什麼，\n  我的孩...',
         '<25>{#f/9}* ...孩子...',
         '<25>{#f/5}* 孩子，\n  我不能再照顧你了。\n* 也不應該再照顧你了。',
         '<25>{#f/5}* 你還有很多地方要去，\n  很多事情要做...',
         '<25>{#f/10}* 我怎麼能阻止你呢？',
         '<25>{#f/9}* ...',
         '<25>{#f/5}* 求你了，不要管我，\n  繼續前進吧...',
         '<25>{#f/1}* ...我相信你會\n  做出正確的事的...'
      ],
      latetoriel2: ['<25>{#p/toriel}{#npc/a}{#f/5}* ...去吧...'],
      
      lateasriel: () =>
         [
            ['<25>{#p/asriel1}{#f/13}* 就讓我一個人待著吧，\n  Frisk...', "<25>{#f/15}* 我不能跟你一起回去，\n  明白嗎？"],
            [
               "<25>{#p/asriel1}{#f/16}* 我不想再傷他們的心了。",
               "<25>{#f/13}* 如果他們\n  永遠都再見不到我，\n  那就更好了。"
            ],
            [
               '<25>{#p/asriel1}{#f/15}* ...你在幹什麼？',
               '<25>{#f/15}* 你是想陪陪我嗎？',
               '<25>{#f/23}* Frisk...',
               '<25>{#f/22}* ...',
               '<25>{#f/13}* 嘿。',
               '<25>{#f/13}* 我想問你個問題。',
               '<25>{#f/15}* Frisk...\n* 你為什麼要來這裡？',
               '<25>{#f/13}* 大家都知道那個傳說，\n  對吧...?',
               '<25>{#f/23}* 「據說\n  飛進伊波特星域的飛船\n  都會消失不見。」',
               '<25>{#f/22}* ...',
               '<32>{#p/human}* （...）\n* （你告訴了Asriel真相。）',
               '<25>{#p/asriel1}{#f/25}* ...',
               '<25>{#f/25}* Frisk... 你...',
               '<25>{#f/23}* ...',
               "<25>{#f/23}* 你不用再孤身一人了，\n  好嗎？",
               "<25>{#f/17}* 你在這裡\n  交到了很多好朋友...",
               "<25>{#f/17}* 他們會照顧你的，好嗎？"
            ],
            [
               '<25>{#p/asriel1}{#f/15}* ...',
               '<25>{#f/15}* 我知道為什麼$(name)\n  要飛來這裡。',
               "<25>{#f/16}* 那原因並不愉快。",
               "<25>{#f/13}* Frisk。\n* 我跟你說實話吧。",
               '<25>{#f/15}* $(name)不想跟人類\n  有任何瓜葛。',
               '<25>{#f/16}* 至於為什麼，\n  那傢伙從來沒說過。',
               '<25>{#f/15}* 但那種情緒非常強烈。'
            ],
            [
               "<25>{#p/asriel1}{#f/17}* Frisk，沒關係的。\n* 你和$(name)\n  一點也不一樣。",
               '<25>{#f/15}* 說實話，\n  雖然你們的，\n  呃，穿衣風格很像...',
               "<25>{#f/13}* 但我也不知道\n  為什麼以前會把你們\n  當成同一個人。",
               '<25>{#f/15}* 也許...\n* 真相是...',
               "<25>{#f/16}* $(name)和\n  我理想中的那種人\n  不太一樣。",
               '<25>{#f/13}* 而你，Frisk...',
               "<25>{#f/17}* 你才是\n  我一直想要的那種朋友。",
               '<25>{#f/20}* 所以，我大概是把\n  對那傢伙的期望\n  強加在你身上了。',
               "<25>{#f/17}* 是這樣的。\n* 我變成星星的時候，\n  確實做了一些怪事。"
            ],
            [
               "<25>{#p/asriel1}{#f/13}* 我覺得還應該告訴你\n  最後一件事。",
               '<25>{#f/15}* 當時$(name)和我的\n  靈魂融合在一起時...',
               '<25>{#f/16}* 那副身軀的控制權\n  實際上是我們共有的。',
               '<25>{#f/15}* 是那個傢伙抬起了\n  自己的那具空殼。',
               "<25>{#f/13}* 後來，當我們到達\n  星球的遺址時...",
               '<25>{#f/13}* 也是那傢伙想要...',
               '<25>{#f/16}* ...使出我們的全部力量。',
               '<25>{#f/13}* 我拼盡全力\n  才阻止了那傢伙。',
               '<25>{#f/15}* 再然後，因為我，\n  我們...',
               "<25>{#f/22}* 嗯，這就是為什麼\n  我最後會變得那樣。",
               '<25>{#f/23}* ...Frisk。',
               "<25>{#f/17}* 一直以來，我都在\n  因為那個決定而自責。",
               "<25>{#f/13}* 這就是為什麼我會有\n  那種可怕的世界觀。",
               '<25>{#f/13}* 「不是殺人就是被殺。」',
               '<25>{#f/17}* 但現在...\n* 遇見你之後...',
               "<25>{#f/23}* Frisk，\n  我不再後悔那個決定了。",
               '<25>{#f/22}* 我做了正確的事。',
               "<25>{#f/13}* 如果我們殺了那些人類...",
               '<25>{#f/15}* 我們就免不了\n  和全人類掀起戰爭了。',
               '<25>{#f/17}* 況且，\n  大家最後都自由了，\n  對吧？',
               '<25>{#f/17}* 甚至其他\n  來到這裡的人類\n  也都活著出去了。',
               '<25>{#f/13}* ...',
               '<25>{#f/15}* 但是，$(name)...',
               "<25>{#f/16}* ...我不確定那傢伙\n  在我們死後發生了什麼。",
               '<25>{#f/15}* 什麼都被沒找到... \n  甚至連那傢伙的靈魂\n  都沒有。',
               "<25>{#f/15}* 所以... 我總是會想，\n  那傢伙是否... \n  還活在某個地方。",
               '<32>{#p/basic}* ...',
               '<32>{#p/human}* （你聽到有人在哭...）'
            ],
            [
               '<25>{#p/asriel1}{#f/17}* Frisk，\n  謝謝你聽我說了這麼多。',
               '<25>{#f/17}* 你現在真的應該\n  去找你的朋友們了，\n  好嗎？',
               '<25>{#f/13}* 喔，還有，\n  拜託了...',
               '<25>{#f/20}* 在未來的某一刻，\n  如果你，呃，\n  見到我的話...',
               "<25>{#f/15}* ...不要把他看作是我，\n  好嗎？",
               '<25>{#f/16}* 我只希望你記住...\n  現在這樣的我。',
               '<25>{#f/17}* 那個曾在你生命中\n  短暫出現過，作為\n  你的朋友而存在的我。',
               '<25>{#f/13}* ...',
               '<32>{|}{#p/human}* （你告訴Asriel你真的{%}',
               "<25>{#p/asriel1}{#f/23}* 沒關係的，Frisk。",
               "<25>{#f/22}* 你不是需要拯救所有人\n  才能成為好人的。",
               '<25>{#f/13}* 況且...\n  就算我能保持這個形態...',
               "<25>{#f/15}* 我也不知道我能不能\n  從過去的事中走出來。",
               "<25>{#f/17}* ...答應我\n  你會照顧好自己，\n  好嗎？",
               '<25>{#f/13}* ...',
               '<25>{#f/15}* 嗯，再見。'
            ],
            ['<25>{#p/asriel1}{#f/13}* Frisk...', "<25>{#f/15}* 你就沒有更重要的事\n  可做嗎？"],
            []
         ][Math.min(SAVE.data.n.lateasriel++, 8)],
      securefield: ['<33>{#p/basic}* 這裡有一道安保屏障。\n* 已被激活。'],
      trivia: {
         w_security: ["<32>{#p/basic}* 一道安保屏障。"],
         photoframe: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* 空相框啊...',
                     '<25>{#f/16}* 以前，這些相框裡\n  也都是有照片的。',
                     '<25>{#f/15}* 然後，\n  她把它們取出來了，\n  就再也沒有放回去。',
                     "<25>{#f/16}* ...那些照片\n  即是只是看一兩眼\n  也會很難受吧。"
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 空空的相框\n  就像消逝的記憶...',
                     '<25>{#p/asriel1}{#f/15}* 這地方有太多\n  這樣的相框了。'
                  ],
                  ['<25>{#p/asriel1}{#f/22}* 這個怪地方\n  實在太多空相框了。']
               ][Math.min(asrielinter.photoframe++, 1)]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? ['<32>{#p/basic}* 仍然是個空相框。']
                  : ['<32>{#p/basic}* 一個空相框。'],
         w_paintblaster: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （這個裝置看上去\n  已經過時好幾十年了。）']
               : world.darker
                  ? ['<32>{#p/basic}* 毫無價值的擺設。']
                  : ['<32>{#p/basic}* 一臺老舊的燃油噴射裝置。'],
         w_candy: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （標牌上寫著要小心機器故障。）']
               : ['<32>{#p/basic}* 「請注意：\n   有的機器可能看起來沒問題，\n   但內部已經壞了。」'],
         w_djtable: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你碰了碰打碟機。）\n* （它發出了一種莫名讓人\n  感覺很爽的搓碟聲。)']
               : world.darker
                  ? ["<32>{#p/basic}* 一臺打碟機。"]
                  : SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}* 一臺花哨的打碟機。\n  現在沒人在用，有點出人意料。']
                     : ['<32>{#p/basic}* 一臺花哨的打碟機，\n  裝有各式各樣的旋鈕與滑塊。'],
         w_froggit: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （打擾一下，人類。）',
                  '<32>* （看來你已經成為\n  一個很會為他人著想，\n  又很有擔當的人了。）',
                  "<32>* （不管這有沒有我的功勞...）\n* （我都為你感到驕傲。）",
                  '<32>* 呱呱。'
               ]
               : [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （打擾一下，人類...）',
                  '<32>* （我想給你幾點對戰怪物的建議。）',
                  '<32>* （如果你採取特定的{@fill=#ff0}行動{@fill=#fff}，\n  或用{@fill=#3f00ff}戰鬥{@fill=#fff}把他們揍到瀕死...）',
                  '<32>* （他們估計就不想戰鬥了。）',
                  '<32>* （如果一個怪物不想戰鬥，那麼...）',
                  '<32>* （就對它{@fill=#ff0}仁慈{@fill=#fff}一點吧，人類。）\n* 呱呱。'
               ],
         w_froggit_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你若有所思地望著\n  那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 真是奇怪啊，\n  盯著外太空看...",
                        '<32>* 居然是整理思緒的好辦法。'
                     ]
                     : [
                        "<32>{#p/basic}* 這是外太空的一景。",
                        '<32>* 這附近肯定不缺這種東西，\n  是吧？'
                     ],
         w_kitchenwall: () =>
            SAVE.data.n.plot === 9
               ? ['<26>{#p/toriel}{#f/1}* 再等等就好，我的孩子！']
               : ['<26>{#p/toriel}{#f/1}* 給我點時間...'],
         w_lobby1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （標牌上寫著\n  在困境中要保持意志堅定。）']
               : ['<32>{#p/basic}* 「縱使曲折難行，\n   亦當砥礪奮進。」'],
         w_pacing_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你開心地望著那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 走了這麼遠的路後，\n  你似乎一點也不怕這塊玻璃。",
                        '<32>* 其實你根本就從來沒怕過吧。'
                     ]
                     : [
                        '<32>{#p/basic}* 想想看，\n  在你和無邊無際的宇宙之間，\n  只有一塊玻璃...',
                        "<32>* 儘管違背了常識，\n  但這似乎並沒有困擾到你。"
                     ],
         w_pacing1: () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （不久前有個人從這兒經過了。）',
                  '<32>* （他跟我說\n  別告訴你他要去哪兒。）',
                  "<32>* （我本來也不打算告訴你的，\n  但，他看起來太難過了...）",
                  "<32>* （他現在大概在\n  入口過去一點的那個平臺上。）",
                  '<32>* （去吧。去跟他聊聊。\n  肯定會有好事發生的。）\n* 呱呱。',
                  '<32>{#p/basic}* ...Asriel...'
               ]
               : [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （唉...）',
                  '<32>* （我的「朋友」並不願意善待我。）',
                  '<32>* （相反，只要逮著機會，\n  他就會傷害我。）',
                  "<32>* （沒錯.......）\n* （傷害我吧............）\n* （................）",
                  "<32>* （至少你願意善待我。）\n* 呱呱。"
               ],
         w_pacing2: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.b.oops
                  ? [
                     '<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人類...）',
                     '<32>* （你有看到我的朋友嗎？）',
                     '<32>* （幾天前它還在這，\n  就站在我的左邊...）',
                     '<32>* （但自打你來之後，\n  從某個時刻起，它就不見了。）',
                     "<32>* （它說過，如果你傷害了怪物\n  就會離開這裡...）",
                     SAVE.data.n.exp <= 0
                        ? "<32>* （真奇怪，因為你根本\n  沒傷害任何怪物啊。）\n* 呱呱。"
                        : '<32>* （如果有機會，\n  下次對他們好一點。如何？）\n* 呱呱。'
                  ]
                  : [
                     '<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人類...）',
                     "<32>* （我的朋友現在開心得不得了。）",
                     "<32>* （它說過，如果你傷害了怪物\n  就會離開這裡，\n  但你一直都沒有這麼做。）",
                     "<32>* （你猜怎麼著，\n  它決定要永遠留在我的左邊。）",
                     '<32>* （至於它那個\n  總是想傷害它的「朋友」...）',
                     '<32>* （喔，他好像把自己\n  變成了一隻羊。）\n* 呱呱。'
                  ]
               : [
                  '<32>{#p/basic}* 呱呱，呱呱。\n* （你好，人類...）',
                  '<32>* （你有嘗試查看過\n  自己的「物品欄」嗎？）',
                  "<32>* （你撿到過的東西，\n  都能在那裡找到。）",
                  '<32>* （你問，我的物品欄都有什麼？）',
                  "<32>* （喔，你可真傻... \n  怪物根本沒有「物品欄」！）\n* 呱呱。"
               ],
         w_pacing3: () =>
            SAVE.data.n.plot === 72
               ? SAVE.data.n.bully < 1
                  ? [
                     '<32>{#p/basic}* 呱呱，呱呱。\n* （感謝你一直\n  對我們怪物這麼寬容。）',
                     '<32>* （我知道我之前跟你說過\n  怎麼安全地揍人...）',
                     "<32>* （但那不是說\n  我希望你真的去打架。）",
                     '<32>* （你真是個善良的人類。）\n* 呱呱。'
                  ]
                  : SAVE.data.n.bully < 15
                     ? [
                        '<32>{#p/basic}* 呱呱，呱呱。\n* （感謝你下手還算輕。）',
                        '<32>* （我知道我之前跟你說過\n  怎麼安全地揍人...）',
                        "<32>* （但那不是說\n  我希望你真的去打架。）",
                        "<32>* （作為一個人類，\n  你還不算太糟糕。）\n* 呱呱。"
                     ]
                     : [
                        '<32>{#p/basic}* 呱呱，呱呱。\n* （看來你確實\n  是個危險的傢伙啊。）',
                        "<32>* （但是，不知怎麼，\n  我還是不怕你...）",
                        '<32>* （可能是因為在最後關頭，\n  你明明都可以繼續打下去，\n  卻還是手下留情了吧。）',
                        '<32>* （你能控制住自己，\n  這一點我還是要感謝你。）\n* 呱呱。'
                     ]
               : [
                  "<32>{#p/basic}* 呱呱，呱呱。\n* （如果你把一隻怪物打到了\n  瀕死的程度...）",
                  '<32>* （它的名字就會變成{@fill=#3f00ff}藍色{@fill=#fff}。）',
                  '<32>* （很奇怪，對吧？）\n* （但我聽說，人類被打了之後\n  也會變{@fill=#3f00ff}藍{@fill=#fff}受呢。）',
                  '<32>* （所以我覺得，\n  你應該是可以聯想得到的。）',
                  '<32>* （那麼，感謝你花時間\n  聽我嘮叨這些。）\n* 呱呱。'
               ],
         w_puzzle1_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你投入地望著那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}* 到頭來，\n  這些房間除了當瞭望臺，\n  好像也沒啥別的用處了。']
                     : [
                        '<32>{#p/basic}* 為什麼總感覺有些房間...',
                        '<32>* ...單純是用來當瞭望區的呢？'
                     ],
         w_puzzle2: () =>
            SAVE.data.b.svr
               ? world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                     '<32>{#p/human}* （標牌上寫著\n  解謎對於太空探索來說沒啥用。）',
                     ...[
                        [
                           '<25>{#p/asriel1}{#f/13}* 不像別的標牌，\n  這塊標牌寫的可是大實話。',
                           "<25>{#f/15}* 我可不是因為這是我寫的\n  才這麼說的啊。"
                        ],
                        ["<25>{#p/asriel1}{#f/3}* ...別告訴我\n  你真喜歡這些謎題。"],
                        ["<25>{#p/asriel1}{#f/10}* Frisk，\n  就算是你\n  也不會怪到這種地步吧。"]
                     ][Math.min(asrielinter.w_puzzle2++, 2)]
                  ]
                  : ['<32>{#p/human}* （標牌上寫著\n  耐心在太空中的重要性。）']
               : world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                  ? [
                     '<32>{#p/basic}* 「浩渺長空，恰似深邃海洋。」',
                     '<32>* 「探索這片海洋的時候，可不能被\n   那些糟糕透頂的謎題給難住！」'
                  ]
                  : [
                     '<32>{#p/basic}* 「浩渺長空，恰似深邃海洋。」',
                     '<32>{#p/basic}* 「風平浪靜，{@fill=#00a2e8}靜待{@fill=#fff}暗流湧動，\n   波湧潮啟，{@fill=#ff993d}啟程{@fill=#fff}無垠長空。」'
                  ],
         w_puzzle3_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你陷入沉思，\n  望著那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}* 景色... 曾經... 確實不錯。']
                     : ['<32>{#p/basic}* 景色確實不錯。'],
         w_puzzle4: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （標牌上寫著\n  關於牛排促銷的過時廣告）']
               : [
                  '<32>{#p/basic}* 「趕緊前往活動室品嘗\n   Glyde的招牌牛排(TM)吧！」'
               ],
         w_ta_box: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/20}* 是啊... \n  Toriel從來不收拾\n  這些東西。',
                     '<25>{#f/21}* 連我的那些\n  星際飛船模型的仿製品\n  都被弄壞了...'
                  ],
                  [
                     "<25>{#f/13}* 我是挺意外的。\n* 她平時可是個\n  很有條理的人。",
                     '<25>{#p/asriel1}{#f/17}* ...她那天心情肯定很不好。'
                  ],
                  ['<25>{#p/asriel1}{#f/13}* 這種事難免啊...']
               ][Math.min(asrielinter.w_ta_box++, 2)]
               : world.darker
                  ? ["<32>{#p/basic}* 一個玩具盒。\n* 裡面的星際飛船模型\n  都被砸得粉碎。"]
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/basic}* 盒子裡的飛船一直沒被修好。',
                        "<32>* 如果這是在Asgore房子裡的\n  那些飛船，可就會完好無損。"
                     ]
                     : [
                        '<32>{#p/basic}* 一盒星際飛船模型！\n* 以及... 玻璃碎片？',
                        '<32>* 看起來應該有人把小飛船摔碎了。'
                     ],
         w_ta_cabinet: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你在這裡面找到了\n  幾套一模一樣的衣服，\n  除此之外什麼也沒有。）"]
               : [
                  '<32>{#p/basic}* 衣櫃裡掛滿了黃藍條紋衫。',
                  ...(SAVE.data.n.plot === 72 ? ["<32>* 看來這永遠也不會換換樣啊。"] : [])
               ],
         w_ta_frame: () =>
            SAVE.data.b.svr
               ? [["<25>{#p/asriel1}{#f/21}* ...不見了..."], ['<25>{#p/asriel1}{#f/21}* ...']][
               Math.min(asrielinter.w_ta_frame++, 1)
               ]
               : SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}* 一個空相框。', "<32>* 仍然沒什麼好說的。"]
                  : ['<32>{#p/basic}* 一個空相框。', "<32>* 沒什麼好說的。"],
         w_ta_paper: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* （這幅畫看上去沒什麼特別的。）",
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/13}* 雖然現在找不到了，\n  不過我以前\n  在這裡畫的畫...",
                        '<25>{#f/17}* ...基本上就是我\n  「主宰死亡的絕對神祇」\n  形態的設計圖。',
                        '<25>{#f/17}* 裂空飛星，泰坦巨刃...',
                        '<25>{#f/20}* 當然了，\n  還有那個傳奇般的\n  「終極毀滅」。'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/17}* 是啊...\n  看來我那時候\n  就全都計畫好了。',
                        '<25>{#f/20}* 我那時候總是想出\n  各種稀奇古怪的東西...',
                        '<25>{#f/1}* 噢，你肯定會喜歡\n  我設計的\n  泛銀河系星艦的。'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/17}* Frisk，我希望...',
                        '<25>{#f/23}* 我真的希望我們也能有\n  像那樣的時刻。',
                        '<25>{#f/22}* 以前和$(name)\n  在一起的時候，\n  總是會...',
                        '<25>{#f/15}* ...很難相處。'
                     ],
                     ["<25>{#p/asriel1}{#f/20}* 別擔心。\n* 如果你不會畫畫，\n  我可以教你。"]
                  ][Math.min(asrielinter.w_ta_paper++, 3)]
               ]
               : world.darker
                  ? ['<32>{#p/basic}* 平平無奇的畫。\n* 和原型一點都不像。']
                  : [
                     "<32>{#p/basic}* 這是一幅兒童畫，\n  上面畫了一個長著彩虹翅膀的\n  巨大怪物。",
                     "<32>* 很像家裡的那隻..."
                  ],
         w_tf_couch: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （這張沙發看起來從來沒被用過。）']
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* 估計這輩子\n  都不會有人來這兒坐了。"]
                  : world.darker
                     ? ["<32>{#p/basic}* 一張沙發。\n* 難道你還有別的事要做嗎？"]
                     : [
                        '<32>{#p/basic}* 一張看起來很舒適的沙發。',
                        '<32>* 很難抗拒陷入柔軟坐墊的\n  甜蜜誘惑中。'
                     ],
         w_tf_table: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你瞥了一眼茶几，\n  不過它好像沒看回你。）"]
               : [
                  '<32>{#p/basic}* 一張毫不起眼的茶几。',
                  "<32>{#p/basic}* 不可思議的是，它幾乎是嶄新的。"
               ],
         w_tf_window: () =>
            SAVE.data.b.svr
               ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                  ? ['<32>{#p/human}* （你憧憬地望著那浩瀚的宇宙...）']
                  : ['<32>{#p/human}* （你惆悵地望著那浩瀚的宇宙...）']
               : world.darker
                  ? ["<32>{#p/basic}* 又一扇窗而已。"]
                  : SAVE.data.n.plot === 72
                     ? ["<32>{#p/basic}* 外太空的景色跟以往一樣不錯。"]
                     : ["<32>{#p/basic}* 外太空的景色真不錯。"],
         w_th_door: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （標牌上寫著\n  這裡的房間還沒翻修完。）',
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/3}* 如果這是\n  原型的那座房子的話...\n  那位置就是爸爸的房間了。",
                        '<25>{#f/4}* 你應該能猜到這房間\n  為啥一直沒翻修完吧。'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* ...',
                        '<25>{#f/15}* 那場演講對媽媽的影響...\n  不太好。',
                        '<25>{#f/4}* 那會兒我變成星星的時候，\n  有時候... \n  會偷偷看著她。',
                        "<25>{#f/3}* 她說話的樣子，\n  感覺就像\n  還停留在那一刻似的。",
                        '<25>{#f/13}* 後來你來了，\n  一切都變了...'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* ...',
                        "<25>{#f/15}* 氣氛有點尷尬啊。\n* 我還是假裝\n  我們沒來過這裡吧。"
                     ],
                     ['<25>{#p/asriel1}{#f/13}* ...']
                  ][Math.min(asrielinter.w_th_door++, 3)]
               ]
               : ['<32>{#p/basic}* 「房間翻修中。」'],
         w_th_mirror: () =>
            SAVE.data.b.svr
               ? ["<25>{#p/asriel1}{#f/24}* 這是我們..."]
               : world.genocide
                  ? ['<32>{#p/basic}* ...']
                  : world.darker
                     ? ["<32>{#p/basic}* 這是你。"]
                     : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
                        ? ["<32>{#p/basic}* 這是你...", '<32>{#p/basic}* ...而且，永遠都會是你。']
                        : ["<32>{#p/basic}* 這是你！"],
         w_th_plant: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你感謝這株植物\n  每天都帶來了溫暖。）']
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* 這株植物很高興看到你還活著。"]
                  : world.darker
                     ? ['<32>{#p/basic}* 這株植物不想見到你。']
                     : SAVE.data.b.oops
                        ? ['<32>{#p/basic}* 這株植物很開心見到你。']
                        : ['<32>{#p/basic}* 這株植物見到你非常激動！'],
         w_th_sausage: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你撥弄了一下\n  這株憂玉的植物。）']
               : ['<32>{#p/basic}* 這株憂玉的植物一點都不米人。'],
         w_th_table1: () => [
            '<32>{#p/human}* （你在桌子底下找到了一套蠟筆。）',
            ...(SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/24}* 我感覺$(name)可能\n  把藍色的蠟筆弄丟了。',
                     '<25>{#f/7}* ...不對，不是可能。\n* 是肯定弄丟了。',
                     '<25>{#f/6}* 後來那根蠟筆\n  在食物箱裡找到了，\n  但誰也沒想到要去那裡找。',
                     '<25>{#f/16}* 那傢伙肯定是想\n  把食物箱佔為己有。'
                  ],
                  [
                     "<26>{#p/asriel1}{#f/4}* 要是以後\n  我們再買新的蠟筆，\n  我可得盯緊點。",
                     '<25>{#f/3}* 你要是敢打蠟筆的主意...',
                     "<26>{#f/8}* 我就會在第一時間\n  打碎你的小算盤。",
                     '<25>{#f/2}* 你就等著瞧吧。'
                  ],
                  ["<25>{#p/asriel1}{#f/31}* 我可在用眼睛\n  死死盯著你呢，\n  Frisk。", '<25>{#f/8}* 以及...\n  可能還得豎起耳朵聽著。'],
                  ['<25>{#p/asriel1}{#f/10}* 你又在盯著我的耳朵看？\n* 你怎麼老這樣！']
               ][Math.min(asrielinter.w_th_table1++, 3)]
               : world.edgy
                  ? ['<32>{#p/basic}* 少了兩支。']
                  : world.darker
                     ? ['<32>{#p/basic}* 少了一支。']
                     : [
                        '<32>{#p/basic}* 那支永遠不知所蹤的藍色蠟筆，\n  已經丟了一百年了...',
                        '<32>{#p/basic}* 真可謂我們這時代的傳奇。'
                     ])
         ],
         w_th_table2: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                  ...[
                     [
                        '<25>{#p/asriel1}{#f/27}* $(name)和我其實\n  從來都不怎麼玩這種東西。',
                        '<25>{#p/asriel1}{#f/15}* 呃...\n  好吧，也不能說是「從來」。',
                        "<25>{#p/asriel1}{#f/15}* 算了，\n  還是別提這茬了。"
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* ...',
                        '<25>{#p/asriel1}{#f/13}* 上次我們玩這個，\n  桌子都給掀翻了。',
                        '<25>{#p/asriel1}{#f/17}* 親人之間嘛。\n* 你懂的，\n  玩牌的時候就容易這樣。'
                     ],
                     ['<25>{#p/asriel1}{#f/17}* ...']
                  ][Math.min(asrielinter.w_th_table2++, 2)]
               ]
               : world.darker
                  ? [
                     '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                     "<33>{#p/basic}* 你不想浪費時間玩牌。"
                  ]
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                        "<33>{#p/basic}* 很快，我們就再也不用想這些事了。"
                     ]
                     : [
                        '<32>{#p/human}* （你在桌子底下找到了一副牌。）',
                        "<33>{#p/basic}* 當然是全息款式的。"
                     ],
         w_tk_counter: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* （你用手摸了摸砧板，\n  感覺上面坑坑窪窪的。）'
               ]
               : world.darker
                  ? ["<32>{#p/basic}* 一塊砧板。"]
                  : ["<32>{#p/basic}* Toriel的砧板。\n  上面已經有一些使用的痕跡了。"],
         w_tk_sink: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/21}* $(name)總是說\n  有毛掉進下水道裡\n  超級噁心。',
                     '<25>{#f/15}* 不過我一直覺得\n  這很正常啊...'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 難道人類不掉毛嗎？\n* 這事$(name)\n  從來都沒跟我說清楚。'
                  ],
                  ["<25>{#p/asriel1}{#f/17}* 我有理由相信\n  人類也會掉毛的。\n* 不掉毛也得掉點別的。"]
               ][Math.min(asrielinter.w_tk_sink++, 2)]
               : SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}* 到現在還能看到\n  那時候堵在這兒的白色的毛。']
                  : ['<32>{#p/basic}* 一團白色的毛堵在下水管裡。'],
         w_tk_stove: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* 我真搞不懂她為啥覺得\n  買這玩意兒好。',
                     "<25>{#f/10}* 難道是想還原\n  Asgore的廚房...？",
                     "<25>{#f/17}* 明明說不喜歡他，\n  結果還整這齣，\n  她真夠奇怪的。"
                  ],
                  [
                     '<25>{#p/asriel1}{#f/15}* 有時候我真希望\n  Toriel和Asgore\n  能重歸於好。',
                     "<25>{#f/16}* ...仔細想想，\n  也許分開才是最好的。"
                  ],
                  ["<25>{#p/asriel1}{#f/13}* Frisk，\n  有些事情\n  就是強求不來的..."]
               ][Math.min(asrielinter.w_tk_stove++, 2)]
               : SAVE.data.n.state_wastelands_toriel === 2
                  ? ["<32>{#p/basic}* 只是個灶臺。\n* 沒人會再用它了。"]
                  : world.darker
                     ? ["<32>{#p/basic}* 只是個灶臺。"]
                     : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* 灶臺非常乾淨。\n* Toriel到了新世界\n  也不用換新的了。']
                        : ['<32>{#p/basic}* 灶臺非常乾淨。\n* Toriel肯定是用火魔法做飯的。'],
         w_tk_trash: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* （你看不出來垃圾桶裡有什麼...)"]
               : SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}* 垃圾桶被清空了，\n  還挺有象徵意義的。']
                  : ['<32>{#p/basic}* 裡面有一張揉皺的星花茶配方。'],
         
         w_tl_azzychair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你注意到這把餐椅相當之大。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 大餐椅。']
                  : ["<32>{#p/basic}* Toriel家有幾把餐椅，\n  這把，是王后的餐椅。"],
         w_tl_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （書架上放著關於蝸牛冷知識的書，\n  關於一個祖傳秘方的書，\n  以及關於園藝技巧的書。）'
                  ]
                  : [
                     "<32>{#p/basic}* 一個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「你知道嗎？\n   蝸牛的齒舌長得像鏈鋸一樣。」',
                     '<32>* 「這可是個冷知識。」',
                     '<32>* 「還有個趣事：蝸牛成熟後\n   會把自己的消化系統翻出來。」',
                     '<32>* 「喔，順帶一提...」',
                     '<32>* 「蝸牛的 {^5}說 {^5}話 {^5}速 {^5}度 {^5}很 {^5}慢。」',
                     '<32>* 「開玩笑的，它們才不會說話。」',
                     '<32>* 「你能想像，在某個世界，\n   那裡的蝸牛會說話嗎？」\n* 「反正我是想像不出來。」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （書架上放著關於蝸牛冷知識的書，\n  關於一個祖傳秘方的書，\n  以及關於園藝技巧的書。）'
                  ]
                  : [
                     "<32>{#p/basic}* 一個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 《Dreemurr家族的美味祕笈：蝸牛派》',
                     '<32>* 「蝸牛派是Dreemurr家族的\n   一道風味獨特的傳統美食。」',
                     '<32>* 「製作它其實非常簡單，\n   只需五個步驟：」',
                     '<32>* 「首先，輕柔地展開酥脆的派底，\n   在烘焙盤中鋪平。」',
                     '<32>* 「然後，將香濃的蒸發奶、\n   新鮮的雞蛋和選料香料\n   混合在一起，攪拌至絲滑細膩。」',
                     '<32>* 「接著，小心地將幾隻新鮮蝸牛\n   加入到之前調製好的香濃奶糊中，\n   確保它們完全浸入。」',
                     '<32>* 「之後，將這層混合物\n   輕輕倒入準備好的派底，\n   均勻鋪開。」',
                     '<32>* 「最後，將麵團切成細條，\n   編織成優雅的格子形狀，\n   覆蓋在派面上。」',
                     '<32>* 「現在，將派放到烤箱中，\n   烤至金黃酥脆。」',
                     '<32>* 「出爐後，派面金黃誘人。\n   令其稍作冷卻，即可切片、上桌！」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （書架上放著關於蝸牛冷知識的書，\n  關於一個祖傳秘方的書，\n  以及關於園藝技巧的書。）'
                  ]
                  : [
                     "<32>{#p/basic}* 一個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「哈囉，熱愛園藝的朋友們！」',
                     '<32>* 「說到星花，它們生長與否的關鍵...」',
                     '<32>* 「在於能否直接接觸到宇宙射線。」',
                     '<32>* 「所以它們多生長於空境。」',
                     '<32>* 「畢竟在整個空間站中，\n   當屬那裡最為開闊。」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ]
         ),
         
         w_tl_goreychair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你注意到這把餐椅比較小。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 小餐椅。']
                  : world.genocide
                     ? ["<32>{#p/basic}* Toriel家有幾把餐椅，\n  這把，是惡魔的餐椅。"]
                     : world.darker
                        ? ["<32>{#p/basic}* Toriel家有幾把餐椅，\n  這把，是王子的餐椅。"]
                        : SAVE.data.b.oops
                           ? ["<32>{#p/basic}* Toriel家有幾把餐椅，\n  這把，是小孩的餐椅。\n* 很適合你！"]
                           : ["<32>{#p/basic}* Toriel家有幾把餐椅，\n  這把... 是某個小天使的餐椅。\n* 說的就是你！"],
         w_tl_table: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （這株植物好像\n  只是用來觀賞的。）']
               : world.darker
                  ? ['<32>{#p/basic}* 一株觀賞植物。\n* 僅此而已。']
                  : ["<32>{#p/basic}* 一株擺在Toriel餐桌上的\n  觀賞植物。"],
         w_tl_tools: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/20}* $(name)以前總喜歡\n  把這些東西當成樂器玩。',
                     '<25>{#f/17}* 這人會把它們拿出來，\n  然後開始「演奏」...',
                     '<25>{#f/20}* 有一次，我跟著一起玩，\n  我們還用撥火棍\n  來了個二重奏。',
                     '<26>{#f/13}* 我們開始用嗓子\n  模仿樂器的聲音，\n  然後...',
                     '<25>{#f/17}* 爸爸媽媽也走了進來，\n  給我們唱起了和聲！'
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 結果，\n  不知道誰在外面\n  聽到了我們的演奏。',
                     '<25>{#f/15}* 沒過多久，\n  一大群怪物\n  就湧進了我們家裡...',
                     '<25>{#f/17}* $(name)和我還在房間中央，\n  繼續「演奏」著。',
                     '<25>{#f/20}* 但我們身後一下子\n  多了一整支樂隊！',
                     '<25>{#f/17}* We must have performed half of the Harmonexus Index that day.',
                     "<25>{#f/17}* ...那是一本古老的歌集，\n  裡面都是\n  我們的傳統歌曲。"
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* 這一切都源於\n  我們把撥火棍\n  當成了樂器...',
                     '<25>{#f/17}* 人們常說任何東西\n  都能變成樂器。',
                     '<25>{#f/13}* ...',
                     "<25>{#f/15}* 等下...\n* 我也是個「東西」..." 
                  ],
                  ["<25>{#p/asriel1}{#f/20}* 拜託，\n  可別把我也當成樂器了。"]
               ][Math.min(asrielinter.w_tl_tools++, 3)]
               : world.darker
                  ? ['<32>{#p/basic}* 撥火棍。']
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* 它們只是些撥火棍...\n* ...嗎？",
                        "<32>* 想想看，\n  Toriel的火焰一點也不燙，\n  反而很溫暖。",
                        '<32>* 她根本不需要這些東西啊？',
                        '<32>* 看吧，通過排除法就能發現\n  這些東西其實是高級樂器。'
                     ]
                     : [
                        '<32>{#p/basic}* 一架高級的樂器。',
                        '<32>* 但仔細一看，你會發現\n  這就是一些撥火棍。',
                        "<32>* 很難說，這些工具給人的感覺好像...",
                        '<32>* 是在前哨站建立之前就做出來了的。'
                     ],
         
         w_tl_torichair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你注意到這把餐椅異常之大。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ['<32>{#p/basic}* 餐椅王。']
                  : ["<32>{#p/basic}* Toriel家有幾把餐椅，\n  這把，是國王的餐椅。"],
         w_toriel_toriel: () => [
            "<32>{#p/basic}* 鎖住了。",
            toriSV()
               ? SAVE.data.n.plot < 17.001
                  ? '<32>{#p/basic}* 聽起來Toriel在哭...'
                  : '<32>{#p/basic}* 聽起來Toriel睡著了...'
               : '<32>{#p/basic}* 聽起來Toriel在寫東西...'
         ],
         w_tt_bed: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （這張床看起來比以前小了不少。）']
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                  ? ["<32>{#p/basic}* 一張床。"]
                  : SAVE.data.n.plot < 72 || world.runaway
                     ? [
                        "<32>{#p/basic}* Toriel的床。",
                        ...(world.darker ? [] : ['<32>* 對你來說有點太大了。'])
                     ]
                     : [
                        "<32>{#p/basic}* Toriel的床。",
                        "<32>* 你現在對於這床來講還是小了點，\n  不過你以後會長大的。"
                     ],
         w_tt_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （書架上放著歷史學書、生物學書，\n  以及關於一個不祥的可能性的書。）'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "<32>{#p/basic}* 一個書架。"
                        : "<32>{#p/basic}* 這是Toriel的私人書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「我們家破人亡，生靈塗炭，\n   但這一切的起因是什麼呢？」',
                     '<32>* 「人類不會無緣無故攻擊我們。」',
                     '<32>* 「但是，我們潛在的力量\n   真的如此強大...」',
                     '<32>* 「強大到可以對人類\n   造成實質威脅的地步嗎？」',
                     '<32>* 「不管真相如何，\n   此時我們已經走投無路，陷入絕境。」',
                     '<32>* 「唯有投降，才有一絲生的希望。」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （書架上放著歷史學書、生物學書，\n  以及關於一個不祥的可能性的書。）'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "<32>{#p/basic}* 一個書架。"
                        : "<32>{#p/basic}* 這是Toriel的私人書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「『王級怪物』出生時，\n   會與父母之間建立起一條魔法紐帶。」',
                     '<32>* 「靠著這條紐帶，王級怪物\n   獲得自己的靈魂，他的父母則會\n   隨著孩子成長而逐漸衰老。」',
                     '<32>* 「成年王級怪物的靈魂，\n   具有怪物界最強大的力量。」',
                     '<32>* 「強大到足以在肉體死後\n   仍能短暫存續。」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （書架上放著歷史學書、生物學書，\n  以及關於一個不祥的可能性的書。）'
                  ]
                  : [
                     SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? "<32>{#p/basic}* 一個書架。"
                        : "<32>{#p/basic}* 這是Toriel的私人書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「我們常常擔心，面對人類突然襲擊，\n   會是何種後果。」',
                     '<33>* 「但卻很少想過，倘若同胞自相殘殺，\n   又該如何應對。',
                     '<32>* 「即使聯合起來，能否徹底平息叛亂，\n   仍是個未知數。」',
                     '<32>* 「不過此等擔憂，\n   或許只是杞人憂天？」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ]
         ),
         w_tt_cactus: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （這株仙人掌好像讓你想起了\n  某個以前認識的人。）']
               : SAVE.data.n.plot < 72
                  ? world.darker
                     ? ['<32>{#p/basic}* 終於，發現一株很像我們的植物。']
                     : ['<32>{#p/basic}* 啊，是仙人掌。\n* 確實是最傲嬌的植物。']
                  : ["<32>{#p/basic}* 這仙人掌又不是在等你回來什麼的..."],
         w_tt_chair: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （對它的主人來說，\n  這個椅子似乎有點小。）']
               : world.darker
                  ? ["<32>{#p/basic}* 一把靠椅。"]
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* Toriel的專用閱讀椅...",
                        "<32>* ...至少在Asgore看上它之前是。",
                        "<32>* 他一直想要這個靠椅。\n* 如果他不打算把它帶走，\n  我反倒覺得奇怪呢。"
                     ]
                     : ["<32>{#p/basic}* Toriel的專用閱讀椅。", '<32>* 懶骨頭的味道撲面而來。'],
         w_tt_diary: pager.create(
            0,
            ...[
               [
                  '<32>{#p/human}* （你看了看圈起來的段落。）',
                  '<32>{#p/toriel}{#f/21}* 「提問：為什麼骷髏\n   想交朋友呢？」',
                  '<32>* 「答案：因為他感覺很骨獨...」',
                  '<32>{#p/basic}* 再往下的笑話也是同樣的水準。'
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  '<32>{#p/toriel}{#f/21}* 「提問：骷髏的壞習慣\n   又可以叫做什麼？」',
                  '<32>* 「答案：對髏空的追求...」',
                  "<32>{#p/basic}* 再讀下去就沒有意義了。"
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  '<32>{#p/toriel}{#f/21}* 「提問：骷髏是怎麼\n   跟別人道別的呢？」',
                  '<32>* 「答案：骨德拜...」',
                  "<32>{#p/basic}* 這個感覺一點都不好笑。"
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  "<32>{#p/basic}* 這些蹩腳的雙關笑話\n  你怎麼看都不嫌多。",
                  '<32>{#p/toriel}{#f/21}* 「提問：為什麼骷髏睡覺時\n   會流口水？」',
                  '<32>* 「答案：因為它正在做\n   『骨』感的夢...」',
                  '<32>{#p/basic}* 這笑話已經過時了...'
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  "<32>{#p/basic}* 你還是看不夠這些\n  蹩腳的雙關笑話。",
                  '<32>{#p/toriel}{#f/21}* 「提問：骷髏打架之前\n   會說什麼呢？」',
                  '<32>* 「答案：我要把你揍到骨質疏鬆...」',
                  "<32>{#p/basic}* 什麼鬼？\n* 這個都不是雙關了好吧！"
               ],
               [
                  '<32>{#p/human}* （你看了看另一段。）',
                  "<32>{#p/basic}* 我們的腦細胞要不夠用了...",
                  "<32>{#p/toriel}{#f/21}* 「『把門帶上了嗎？』\n   一位骷髏問。」",
                  '<32>* 「『我正扛著呢。』」',
                  '<32>{#p/basic}* ...\n* 我沒話可說了。'
               ],
               [
                  '<32>{#p/human}* （你看向書中最後的段落。）',
                  "<32>{#p/basic}* 嗯？\n* 這一段不是笑話...",
                  '<32>{#p/toriel}{#f/21}* 「就在今天，\n   一個人類抵達了外域。」',
                  '<32>* 「我相信Sans能照看好這個人類，\n   但我不太想拿這事為難他...」',
                  '<32>* 「而且...」',
                  '<32>* 「前哨站其他地方都危險重重... \n   區區一個皇家哨兵，\n   真的能保護好人類嗎？」',
                  '<32>* 「希望這些疑慮隨時間\n   煙消雲散吧。」',
                  '<32>{#p/basic}* ...'
               ],
               ['<32>{#p/human}* （再往後，就都是空白了。）']
            ].map(
               lines => () =>
                  SAVE.data.b.svr
                     ? ['<32>{#p/human}* （這本日記裡好像都是些\n  關於骷髏的離譜雙關笑話。）']
                     : SAVE.data.n.plot === 72
                        ? [
                           '<32>{#p/human}* （你讀了讀新寫的段落。）',
                           '<32>{#p/toriel}{#f/21}* 「看來我之前誤解Asgore了。」',
                           '<32>* 「我沒有去勇敢地面對他，\n   也就沒能弄清楚\n   事實上發生了什麼。」',
                           '<32>* 「我果然不配做一個母親。」',
                           '<32>* 「不過現在...\n   我可以學著去體會母愛的真諦。」',
                           '<32>* 「這事不能讓別人插手，\n   得我自己慢慢來。」'
                        ]
                        : world.darker
                           ? ["<32>{#p/basic}* 這是本日記，\n  你在裡面找不到任何笑點。"]
                           : SAVE.data.n.plot < 14
                              ? lines
                              : [
                                 '<32>{#p/human}* （你讀了讀最近寫的段落。）',
                                 ...(world.edgy
                                    ? ["<32>{#p/basic}* 已經被用蠟筆塗掉了。"]
                                    : toriSV()
                                       ? [
                                          '<32>{#p/toriel}{#f/21}* 「今天並不順遂。」',
                                          '<32>* 「又有一個人類失去了\n   我的照顧...」',
                                          '<32>* 「他需要第七個，\n   也就是最後一個人類靈魂\n   來打破力場。」',
                                          '<32>* 「我不應該允許\n   這樣的事情發生。」',
                                          '<32>* 「賭注如此之高，\n   衝突可能已經無法避免...」'
                                       ]
                                       : [
                                          '<32>{#p/toriel}{#f/21}* 「坦率來講，今天是有趣的一天。」',
                                          '<32>* 「一個人類來到了這裡...」',
                                          '<32>* 「接著，試圖離開...」',
                                          '<32>* 「然後，最奇怪的事情發生了。」',
                                          '<32>* 「我一直都很需要這句提醒啊...」'
                                       ])
                              ]
            )
         ),
         w_tt_plant: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （這盆栽在你看來\n  真是普通得不能再普通了。）']
               : ["<32>{#p/basic}* 這是個盆栽。", '<32>* 有必要說別的嗎？'],
         w_tt_trash: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ["<32>{#p/human}* （你看不出來垃圾桶裡有什麼...)"]
                  : world.darker
                     ? ['<32>{#p/basic}* 蝸牛。']
                     : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* 這些蝸牛開始散發出...\n  幽靈般的氣味。', '<32>* ...這意味著什麼呢？']
                        : [
                           "<32>{#p/basic}* 這是Toriel的私人垃圾桶，\n  裡面有...",
                           '<32>* 蝸牛。',
                           '<32>* 更多的蝸牛。'
                        ],
            pager.create(
               1,
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出來垃圾桶裡有什麼...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蝸牛。']
                        : SAVE.data.n.plot === 72
                           ? ['<32>{#p/basic}* 也許這就是蝸牛\n  過了保質期後的\n  生存方式。']
                           : ['<32>{#p/basic}* 除了蝸牛就沒別的了。'],
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出來垃圾桶裡有什麼...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蝸牛。']
                        : SAVE.data.n.plot === 72
                           ? ["<32>{#p/basic}* 或者可能是我徹底瘋了。"]
                           : ['<32>{#p/basic}* ...\n* 我剛剛說到了蝸牛嗎？'],
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出來垃圾桶裡有什麼...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蝸牛。']
                        : SAVE.data.n.plot === 72
                           ? ['<32>{#p/basic}* 又或者...', '<32>* ...等等，我剛才說到哪兒了？']
                           : ['<32>{#p/basic}* 蝸牛。'],
               () =>
                  SAVE.data.b.svr
                     ? ["<32>{#p/human}* （你看不出來垃圾桶裡有什麼...)"]
                     : world.darker
                        ? ['<32>{#p/basic}* 蝸牛。']
                        : SAVE.data.n.plot === 72
                           ? ["<32>{#p/basic}* 喔，對了。\n* 蝸牛們這股幽靈般的氣味\n  到底意味著什麼。"]
                           : ['<32>* 更多的蝸牛。']
            )
         ),
         w_tutorial_view: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （你興奮地望著那浩瀚的宇宙...）']
               : world.darker
                  ? []
                  : ['<32>{#p/basic}* 這是外域這一帶的第一扇窗。'],
         w_tutorial1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* （標牌上寫著一段好的關係\n  應該具備怎樣的品質。）']
               : [
                  '<32>{#p/basic}* 「有了信任與善意，\n   方能攜手並進，共築友誼。」',
                  ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                     ? ['<26>{#p/asriel2}{#f/8}* 真是夠矯情的。']
                     : [])
               ]
      },
      piecheck: () =>
         SAVE.data.b.svr
            ? [
               [
                  "<25>{#p/asriel1}{#f/17}* 媽媽做的派\n  永遠是最好吃的...",
                  '<25>{#f/13}* 我到現在還記得\n  第一次吃她做的派時\n  是什麼感覺。',
                  "<25>{#f/15}* 我從來沒有\n  因為吃一口東西\n  而感到那麼幸福過...",
                  "<25>{#f/17}* ...好吃到\n  我都感覺自己要升天了。"
               ],
               [
                  "<25>{#p/asriel1}{#f/20}* 呃，\n  我說的可能有點誇張了。",
                  "<25>{#f/17}* 但是Frisk啊，\n  我跟你講...",
                  '<25>{#f/13}* ...無論爸爸媽媽\n  會怎麼樣...',
                  '<25>{#f/17}* 你都一定要讓她\n  幫我做個派。',
                  "<25>{#f/20}* 我... 有點好奇，\n  經歷了這麼多事之後，\n  我還愛不愛吃她的派。"
               ],
               ['<25>{#p/asriel1}{#f/15}* 畢竟，\n  確實過了很久了嘛...']
            ][Math.min(asrielinter.piecheck++, 2)]
            : SAVE.data.n.plot < 8
               ? world.darker
                  ? ["<32>{#p/basic}* 這只是個臺面。"]
                  : ['<32>{#p/basic}* 檯面上有一塊\n  幾乎看不見的環形汙漬。']
               : SAVE.data.n.state_wastelands_mash === 1 && SAVE.data.n.plot > 8
                  ? ['<32>{#p/basic}* 一塊被打爛的派的幽靈\n  在檯面上縈繞著。']
                  : SAVE.data.n.plot === 72
                     ? SAVE.data.n.state_wastelands_mash > 0
                        ? ['<32>{#p/basic}* 無論過了多久時間，\n  這樁暴行都不會被抹去。']
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? ['<32>{#p/basic}* 一種強烈的念頭阻止了你，\n  你只能讓派保持原樣。']
                           : world.runaway
                              ? [
                                 '<32>{#p/basic}* 你可能曾是個惡霸，\n  但這個派依然完好無損。',
                                 '<32>{#p/basic}* 可能即使對你來說，\n  有些東西也是神聖不可侵犯的。'
                              ]
                              : [
                                 world.meanie
                                    ? '<32>{#p/basic}* 這個派可能被你嚇到了，\n  但過了這麼久...'
                                    : '<32>{#p/basic}* 這個派的尺寸\n  可能不再讓你感到害怕了，\n  但過了這麼久...',
                                 "<32>{#p/basic}* 你已經對這個派\n  產生了一種敬畏之情，\n  讓你無法下口。"
                              ]
                     : SAVE.data.n.state_wastelands_mash > 0
                        ? ['<32>{#p/basic}* 這裡已經沒有什麼可做的了。']
                        : SAVE.data.n.state_wastelands_toriel === 2
                           ? ['<32>{#p/basic}* 一種強烈的念頭阻止了你，\n  你只能讓派保持原樣。']
                           : world.meanie
                              ? [
                                 '<32>{#p/basic}* 這個派的尺寸\n  根本嚇不到你。',
                                 '<32>{#p/basic}* 事實上，\n  你可能都嚇到它了...',
                                 choicer.create('* （要打爛它嗎？）', "打爛", "算了")
                              ]
                              : ['<32>{#p/basic}* 這個派的尺寸嚇得你完全不敢吃它。'],
      piesmash1: ['<32>{#p/human}* （你放了它一馬。）'],
      piesmash2: ['<32>{#p/human}* （你揮下了你的武器...）'],
      piesmash3: ["<32>{#p/basic}* 派已經被徹底毀掉了。"],
      tutorial_puzzle1: [
         '<25>{#p/toriel}* 跟之前的不一樣，\n  這個謎題稍稍有一些不同。',
         '<25>{#f/1}* 雖然不算特別常見，\n  但前哨站的一些謎題...'
      ],
      tutorial_puzzle2: [
         '<25>{#p/toriel}* ...需要另一個怪物的協助\n  才能解決。',
         '<25>{#f/1}* 你知道接下來該怎麼辦嗎？'
      ],
      tutorial_puzzle2a: ['<25>{#p/toriel}{#f/1}* 你知道接下來該怎麼辦嗎？'],
      tutorial_puzzle3: ['<25>{#p/toriel}* 非常好，小傢伙！\n* 非常棒。'],
      tutorial_puzzle4: ['<25>{#p/toriel}{#f/1}* 輪到你了...'],
      tutorial_puzzle4a: ['<25>{#p/toriel}{#f/0}* 到你了。'],
      tutorial_puzzle5: ['<25>{#p/toriel}* 幹得漂亮！\n* 只剩下一道障礙了。'],
      tutorial_puzzle6: ['<25>{#p/toriel}{#f/1}* 太棒了！\n* 孩子，你真令我驕傲！'],
      tutorial_puzzle7: ['<25>{#p/toriel}* 等你準備好了，\n  我們就去下個房間，\n  我會教你下一項本領。'],
      tutorial_puzzle8a: ['<25>{#p/toriel}* 答案不在我身上，小傢伙。'],
      tutorial_puzzle8b: ['<25>{#p/toriel}* 剛才怎麼做的，\n  再做一次就好。'],
      tutorial_puzzle8c: ['<25>{#p/toriel}{#f/1}* 試試看...'],
      twinkly1: [
         "<25>{#p/twinkly}{#f/5}* 哈囉！\n* 我叫{@fill=#ff0}TWINKLY{@fill=#fff}。\n* 星界的{@fill=#ff0}閃亮明星{@fill=#fff}！"
      ],
      twinkly2: [
         '<25>{#f/5}* 是哪陣風把你吹到\n  這前哨站來的呢，夥伴？',
         '<25>{#f/5}* ...',
         "<25>{#f/8}* 你是不是迷路了...",
         "<25>{#f/5}* 好啦，算你走運，\n  我會幫你的！",
         "<25>{#f/8}* 我最近不是很在狀態，\n  不過...",
         '<25>{#f/5}* ...總得有人教你\n  這裡的遊戲規則！',
         '<25>{#f/10}* 看來，只能我Twinkly獻醜，\n  承擔這個任務了。',
         "<25>{#f/5}* 我們開始吧，好嗎？"
      ],
      twinkly3: [
         "<25>{#f/7}* 但你早就知道了，對吧？",
         '<25>{#f/8}* ...',
         "<25>{#f/5}* 不過，還得由我來給你\n  傳授點經驗。",
         "<25>* 準備好了嗎？我們開始吧！"
      ],
      twinkly4: [
         "<25>{#p/twinkly}{#f/6}* 好了，我受夠了。",
         '<25>{#f/8}* 你想一直重置下去，\n  那就隨你的便...',
         '<25>{#f/6}* 你可以隨便重置。',
         "<25>{#f/7}* 但別想輕易過我這關。"
      ],
      twinkly5: ["<25>{#p/twinkly}{#f/6}* 你是閒得沒別的事可做嗎？"],
      twinkly6: [
         "<25>{#p/twinkly}{#f/6}* 剛挨了一擊就馬上重置，\n  是吧？",
         '<25>{#f/7}* 真是可悲。'
      ],
      twinkly6a: [
         "<25>{#p/twinkly}{#f/11}* 你以為我忘了你剛剛\n  幹了什麼嗎？",
         '<25>{#f/7}* 骯髒的碎片閃避手。'
      ],
      twinkly7: ['<25>{#p/twinkly}{#f/7}* 我能在這兒陪你玩一整天，\n  白痴。'],
      twinkly8: ["<25>{#f/11}* 不過，既然你都知道接下來\n  會發生什麼了...{%15}"],
      twinkly9: [
         '<25>{#p/twinkly}{#f/6}* 哈囉。',
         "<25>* 感覺我再待下去\n  就要引火上身了。",
         '<25>{#f/8}* 真是遺憾...',
         '<25>{#f/7}* 我本來想跟你好好玩玩的。',
         '<25>{#f/6}* ...',
         '<25>{#f/5}* 好啦，回見！'
      ],
      twinkly9a: [
         '<25>{#p/twinkly}{#f/12}{#v/0}* $(name)，\n  你到底在幹什麼？',
         '<25>{#f/12}{#v/0}* 我們本來就要\n  拿下這個前哨站了！'
      ],
      twinkly9a1: ['<25>{#f/6}{#v/0}* 我們只需要\n  按照計畫行事。'],
      twinkly9a2: [
         '<25>{#f/6}{#v/0}* 我們只需要穿過鑄廠...',
         '<25>* 幹掉那些守衛...',
         '<25>* 然後前往首塔！'
      ],
      twinkly9a3: [
         '<25>{#f/6}{#v/0}* 我們只需要\n  幹掉那些守衛...',
         '<25>* 然後穿過首塔！'
      ],
      twinkly9a4: [
         '<25>{#f/6}{#v/0}*  我們只需要殺掉\n  那個愚蠢的機器人...',
         '<25>* 然後穿過首塔！'
      ],
      twinkly9a5: ['<25>{#f/6}{#v/0}* 我們只需要穿過首塔！'],
      twinkly9a6: ['<25>{#f/6}{#v/0}* 我們只需要殺掉\n  那個呆子一樣的垃圾袋！'],
      twinkly9a7: ['<25>{#f/6}{#v/0}* 我們只需要\n  繼續走到終點！', '<25>* 我們就快成功了！'],
      twinkly9a8: ['<25>{#f/8}{#v/0}* 你個懦夫...'],
      twinkly9b: [
         '<25>{#p/twinkly}{#f/5}* $(name)...？',
         "<25>{#f/6}* 到底發生啥了？",
         '<25>{#f/8}* 咱們剛上了飛船，\n  然後...',
         '<25>{#f/8}* ...',
         '<25>{#f/6}* 我...',
         '<25>{#f/8}* 我得走了...'
      ],
      twinkly9c: [
         "<25>{#p/twinkly}{#f/7}* 所以，\n  我們又回到起點了，\n  對吧？",
         "<26>{#f/5}* 我一直在等你。\n* 倒要看看\n  你這次會怎麼做。",
         "<25>{#f/11}* ...誰知道呢？\n* 也許那樣做對你而言\n  更加容易吧。",
         '<25>{#f/7}* 我還擁有著你的力量時，\n  確實是更容易了。',
         '<25>{#f/6}* ...',
         '<25>{#f/5}* 嗯... 祝你好運！'
      ],
      twinkly10: [
         "<20>{#f/5}看見這顆心了嗎？\n這是你的靈魂，\n是你生命的精華所在！",
         '<20>{#f/5}你的靈魂是你\n不可或缺的一部分，\n你需要LOVE來維持\n它的存在。'
      ],
      twinkly11: [
         "<20>{*}{#x2}{#f/5}在這太空，\nLOVE是通過...{#f/8}\n這些白色的...{#f/11}\n「幸福碎片」傳遞的。",
         "<20>{*}{#f/5}為了讓你在正確的\n道路上啟程，我會分你\n一點我自己的LOVE。",
         '<20>{*}{#f/5}能接多少就接多少！{^20}{*}{#x1}{%}'
      ],
      twinkly12: [
         "<20>{*}{#f/8}喔呦，\n看來你好像沒接住...",
         "<20>{*}{#f/5}沒關係！",
         '<20>{*}{#x2}{#f/10}來，我再送你點！{^20}{*}{#x1}{%}'
      ],
      twinkly13: [
         '<20>{*}{#f/12}搞什... \n你是腦殘還是怎麼著？？',
         '<20>{*}{#x2}給{^4} 我{^4} 撞{^4} 子彈！！！{^20}{*}{#x1}{^999}'
      ],
      twinkly14: '給 我 撞 幸福碎片~',
      twinkly15: [
         '<20>{#v/1}嘻嘻嘻...',
         "<20>在這個世界中...\n不是殺人就是被殺。",
         '<20>你該不會天真地以為，\n面對這自投羅網\n送上門來的靈魂...',
         "<20>我會蠢到放棄\n這大好機會吧？"
      ],
      twinkly16: [
         "<20>{#f/7}嘖，你知道會發生什麼，\n是不是？",
         "<20>你只想好好折磨一下\n楚楚可憐的Twinkly，\n是不是？",
         "<20>天啦嚕...\n你知道你惹的是誰嗎？",
         '<20>{#f/11}嘻嘻嘻...'
      ],
      twinkly17: ["<20>{#v/1}那麼我們就直奔主題吧。", '<20>嘻嘻嘻...'],
      twinkly18: ['<20>{*}{#f/2}{#v/1}{@random=1.1/1.1}死吧。{^20}{%}'],
      twinkly19: ['<20>{#p/toriel}真是個殘忍的傢伙，\n居然折磨這麼一個\n弱小無助的孩子...'],
      twinkly20: [
         '<20>不要害怕，孩子。',
         '<20>我是{@fill=#003cff}TORIEL{@fill=#000}，\n{@fill=#f00}外域{@fill=#000}的管理員。',
         '<20>我每天都會來看看\n有沒有人被困在這裡。',
         '<20>跟我來，孩子。\n我有很多東西要教你。'
      ],
      twinkly21: [
         '<25>{#p/toriel}{#f/1}* 喔我的天！\n* 你是從哪裡來的，小傢伙？',
         '<25>{#f/1}* 受傷了嗎？',
         '<25>{#f/0}* ...\n* 請原諒我問了這麼多問題。',
         '<25>{#f/0}* 我是{@fill=#003cff}TORIEL{@fill=#fff}，\n  {@fill=#f00}外域{@fill=#fff}的管理員。',
         '<26>{#f/0}* 我每天都會來看看\n  有沒有人被困在這裡。',
         '<25>{#f/0}* 跟我來，孩子。\n* 我有很多東西要教你。'
      ],
      twinkly22: ['<25>{#f/0}* 跟我來。'],
      w_coffin0: () => [
         '<32>{#p/human}* （你覺得還是不要再看了。）',
         ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/13}* ...'] : [])
      ],
      w_coffin1: () => [
         '<32>{#p/basic}* 一口很舊的棺材，沒什麼特別的。',
         ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
            ? [
               '<25>{#p/asriel2}{#f/13}* 快看，他們還專門給你\n  做了口棺材呢，\n  $(name)。',
               '<25>{#p/asriel2}{#f/5}* 真感動。'
            ]
            : [])
      ],
      w_coffin2: pager.create(
         0,
         () => [
            '<32>{#p/basic}* 這是一口早在251X年12月\n  就做好的棺材。',
            '<32>* 在它旁邊，藏著一本\n  像是日記的小冊子...',
            choicer.create('* （翻閱一下嗎？）', '是', '否')
         ],
         () => [
            '<32>{#p/human}* （你又撿起了那本小冊子。）',
            choicer.create('* （翻閱一下嗎？）', '是', '否')
         ]
      ),
      w_coffin3: () => [choicer.create('* （看下一頁？）', '是', '否')],
      w_coffin4: ['<32>{#p/human}* （然而，這頁之後什麼都沒有了。）'],
      w_coffin5: ['<32>{#p/human}* （你把冊子放回了原處。）'],
      w_dummy1: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* （你把手放在了假人身上。）\n* （它看起來很舊了。）']
            : ['<32>{#p/basic}* 一個標準規格的訓練人偶，\n  皇家出品。\n* 大約於251X年製成。'],
      wonder1: [
         '<32>{#p/basic}* 你聽到了\n* 那來自群星的歌聲了嗎？',
         "<32>* 這歌聲在前哨站的諸多地方響徹。\n  這裡，便是其中一處...",
         '<32>* 你只需要，去聆聽。',
         '<32>* 很酷吧？'
      ]
   },

   b_group_outlands: {
      froggitWhimsun: ['<32>{#p/story}* 太空青蛙和星際飛蟲！\n* 或者跟這差不多的東西。'],
      froggitWhimsun2a: ['<32>{#p/story}* 太空青蛙...？'],
      froggitWhimsun2b: ['<32>{#p/story}* 星際飛蟲...？'],
      looxMigospWhimsun: ["<32>{#p/story}* 挑事三人組來了！"],
      looxMigospWhimsun2: ['<32>{#p/story}* 三人組變成兩人組了。'],
      looxMigospWhimsun3: ['<32>{#p/story}* 現在，只剩一個了。'],
      moldsmalMigosp: ['<32>{#p/story}* Silente和他的同夥一同現身了！']
   },

   b_opponent_froggit: {
      act_check: ['<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活並不輕鬆。'],
      act_check2: ['<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活逐漸向好。'],
      act_check3: ["<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活仍不好過。"],
      act_check4: ['<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活渾渾噩噩。'],
      act_check5: ['<32>{#p/story}* FROGGIT - 攻擊4 防禦5\n* 這隻怪物的生活頗為愜意。'],
      act_threat: [
         '<32>{#p/human}* （你對Froggit發出威脅。）',
         "<32>{#p/basic}* 但Froggit並不明白你在說什麼..."
      ],
      act_threat2: [
         '<32>{#p/human}* （你再一次對Froggit發出威脅。）',
         "<32>{#p/basic}* Froggit想起了\n  你先前的恐嚇，\n  決定撒腿跑路。"
      ],
      act_compliment: [
         '<32>{#p/human}* （你稱讚了Froggit一番。）',
         "<32>{#p/basic}* 但Froggit並不明白你在說什麼..."
      ],
      act_flirt: [
         '<32>{#p/human}* （你向Froggit調情。）',
         "<32>{#p/basic}* 但Froggit並不明白你在說什麼..."
      ],
      act_translate0: ["<32>{#p/human}* （但你還什麼都沒說，沒法翻譯。）"],
      act_translate1: [
         '<32>{#p/human}* （你把你想說的話翻譯了一下。）\n* （Froggit好像聽懂你在說什麼了。）',
         '<32>{#p/basic}* Froggit受寵若驚。'
      ],
      act_translate1x: [
         '<32>{#p/human}* （你把你想說的話翻譯了一下。）\n* （Froggit好像聽懂你在說什麼了。）',
         '<32>{#p/basic}* Froggit更加顧慮，\n  不知該不該繼續戰鬥。'
      ],
      act_translate1y: [
         '<32>{#p/human}* （你把你想說的話翻譯了一下。）\n* （Froggit好像聽懂你在說什麼了。）',
         '<32>* Froggit嚇破了膽，扭頭就跑！'
      ],
      act_translate1z: [
         '<32>{#p/human}* （你把你想說的話翻譯了一下。）\n* （Froggit好像聽懂你在說什麼了。）',
         '<32>{#p/basic}* Froggit面不改色，毫無畏懼之情。'
      ],
      act_translate2: [
         '<32>{#p/human}* （你把你想說的話翻譯了一下。）\n* （Froggit好像聽懂你在說什麼了。）',
         '<32>{#p/basic}* Froggit臉紅了，\n  雖然只是在內心裡。'
      ],
      confuseText: ['<08>{#p/basic}{~}呱呱，\n呱呱？'],
      flirtText: ['<08>{#p/basic}{~}（臉漲得\n通紅。）\n呱呱..'],
      idleText1: ['<08>{#p/basic}{~}呱呱，\n呱呱。'],
      idleText2: ['<08>{#p/basic}{~}咕呱，\n咕呱。'],
      idleText3: ['<08>{#p/basic}{~}跳跳，\n跳跳。'],
      idleText4: ['<08>{#p/basic}{~}喵。'],
      mercyStatus: ['<32>{#p/story}* Froggit似乎不願意和你戰鬥了。'],
      name: '* Froggit',
      meanText: ['<08>{#p/basic}{~}（縮縮，\n抖抖。）\n呱呱..'],
      niceText: ['<08>{#p/basic}{~}（臉微微\n泛紅。）\n呱呱..'],
      perilStatus: ['<32>{#p/story}* Froggit正試圖逃跑。'],
      status1: ['<32>{#p/story}* Froggit蹦了過來！'],
      status2: ['<32>{#p/story}* 戰場瀰漫著曜菊的芬芳。'],
      status3: ["<32>{#p/story}* Froggit看起來並不知道\n  自己為什麼在這裡。"],
      status4: ['<32>{#p/story}* Froggit跳來跳去。']
   },
   b_opponent_whimsun: {
      act_check: ['<32>{#p/story}* FLUTTERLYTE - 攻擊5 防禦0\n* 這隻怪物才剛學會飛...'],
      act_check2: ['<32>{#p/story}* FLUTTERLYTE - 攻擊5 防禦0\n* 這隻怪物後悔學習飛翔了。'],
      act_console: [
         '<32>{#p/human}* （你幫Flutterlyte飛得更高。）',
         '<32>{#p/basic}* Flutterlyte很感謝你，\n  然後飛走了...'
      ],
      act_flirt: [
         '<32>{#p/human}* （你向Flutterlyte調情。）',
         '<32>{#p/basic}* Flutterlyte無法接受你的讚美，\n  淚流滿面地飛走了...'
      ],
      act_terrorize: [
         '<32>{#p/human}* （你呲牙咧嘴，\n  發出一陣鬼哭狼嚎。）',
         '<32>{#p/basic}* Flutterlyte嚇壞了，\n  趕忙飛走了。'
      ],
      idleTalk1: ['<08>{#p/basic}{~}為什麼\n這麼難..'],
      idleTalk2: ['<08>{#p/basic}{~}請幫幫\n我..'],
      idleTalk3: ["<08>{#p/basic}{~}我好怕.."],
      idleTalk4: ["<08>{#p/basic}{~}我做\n不到..."],
      idleTalk5: ['<08>{#p/basic}{~}\x00*嗚嗚*\n*嗚嗚*'],
      name: '* Flutterlyte',
      perilStatus: ['<32>{#p/story}* Flutterlyte快要從空中掉下來了。'],
      status1: ['<32>{#p/story}* Flutterlyte飄飄悠悠地飛了過來！'],
      status2: ['<32>{#p/story}* Flutterlyte繼續咕噥著道歉。'],
      status3: ['<32>{#p/story}* Flutterlyte悠悠地徘徊。'],
      status4: ['<32>{#p/story}* 空氣中瀰漫著\n  新鮮桃子的香味。'],
      status5: ['<32>{#p/story}* Flutterlyte氣喘籲籲。'],
      status6: ['<32>{#p/story}* Flutterlyte眼神閃躲。']
   },
   b_opponent_loox: {
      act_check: ['<32>{#p/story}* OCULOUX - 攻擊6 防禦6\n* 瞪大眼行家。\n* 姓：眼行家'],
      act_check2: [
         "<32>{#p/story}* OCULOUX - 攻擊6 防禦6\n* 這個惡霸很努力地\n  假裝沒有受寵若驚。"
      ],
      act_check3: ['<32>{#p/story}* OCULOUX - 攻擊6 防禦6\n* 這隻怪物很榮幸\n  能出現在你的視線裡。'],
      act_dontpick: [
         '<32>{#p/human}* （你瞪了Oculoux一眼。）\n* （Oculoux使勁瞪了回來。）',
         "<32>{#p/human}* （Oculoux越瞪越用力...）",
         '<32>{#p/human}* （...最後它受不了，投降了。）'
      ],
      act_flirt: ['<32>{#p/human}* （你向Oculoux調情。）'],
      act_pick: ['<32>{#p/human}* （你粗魯地告誡Oculoux\n  不要盯著別人看。）'],
      checkTalk1: ['<08>{#p/basic}{~}你敢盯著\n看嗎？'],
      dontDeny1: ['<08>{#p/basic}{~}看看誰\n變卦了。'],
      dontTalk1: ['<99>{#p/basic}{~}這貨還\n真挺能\n盯的。'],
      flirtDeny1: ['<08>{#p/basic}{~}死傲嬌。'],
      flirtTalk1: ['<08>{#p/basic}{~}啥？\n沒-沒門！'],
      hurtStatus: ['<32>{#p/story}* Oculoux在流淚。'],
      idleTalk1: ["<08>{#p/basic}{~}盯上你了。"],
      idleTalk2: ["<08>{#p/basic}{~}我想幹啥\n不用你管。"],
      idleTalk3: ['<08>{#p/basic}{~}盯著你\n意味著\n在意你。'],
      idleTalk4: ['<08>{#p/basic}{~}真礙眼。'],
      idleTalk5: ['<08>{#p/basic}{~}來個\n盯人比賽\n如何？'],
      name: '* Oculoux',
      pickTalk1: ['<08>{#p/basic}{~}你怎麼敢\n質疑我們的\n生活方式！'],
      spareStatus: ["<32>{#p/story}* Oculoux完全不想戰鬥了。"],
      status1: ['<32>{#p/story}* 一對Oculoux向你走來！'],
      status2: ['<32>{#p/story}* Oculoux緊盯著你看。'],
      status3: ['<32>{#p/story}* Oculoux咬牙切齒。'],
      status4: ['<32>{#p/story}* 聞起來像眼藥水。'],
      status5: ['<32>{#p/story}* Oculoux充血了。'],
      status6: ['<32>{#p/story}* Oculoux正凝視著你。'],
      status7: ['<32>{#p/story}* Oculoux現在孤身一人了。']
   },
   b_opponent_migosp: {
      act_check: ["<32>{#p/story}* SILENTE - 攻擊7 防禦5\n* 它看起來很邪惡，但其實\n  只是被集體意識衝昏了頭腦。"],
      act_check2: ['<32>{#p/story}* SILENTE - 攻擊7 防禦5\n* 現在它獨自一人，\n  開心地以舞明志。'],
      act_check3: ['<32>{#p/story}* SILENTE - 攻擊7 防禦5\n* 它感覺和你在一起很舒服。\n* 特別舒服。'],
      act_check4: ["<32>{#p/story}* SILENTE - 攻擊7 防禦5\n* 儘管它表現得很堅強，\n  但一看就知道很痛苦..."],
      act_flirt: ['<32>{#p/human}* （你向Silente調情。）'],
      flirtTalk: ['<08>{#p/basic}{~}嗨呀~'],
      groupInsult: ["<32>{#p/human}* （你罵了Silente幾句，\n  但它正忙著拉攏其他怪物，\n  沒聽到你的話。）"],
      groupStatus1: ['<32>{#p/story}* Silente在跟別人說悄悄話。'],
      groupStatus2: ["<32>{#p/story}* 戰場上飄來陣陣蟑螂屋的味道。"],
      groupTalk1: ['<08>{#p/basic}骯髒卑鄙，\n一心一意\n..'],
      groupTalk2: ['<08>{#p/basic}服從於\n無上主宰\n..'],
      groupTalk3: ['<08>{#p/basic}軍團！\n我們是\n軍團！'],
      groupTalk4: ['<08>{#p/basic}當心蟲群\n..'],
      groupTalk5: ['<08>{#p/basic}現在，\n保持一致\n..'],
      groupTalk6: ["<08>{#p/basic}我不在乎。"],
      name: '* Silente',
      perilStatus: ['<32>{#p/story}* Silente不打算放棄。'],
      soloInsult: ["<32>{#p/human}* （你想把Silente臭罵一頓，\n  可它開心得飛起，壓根不在乎。）"],
      soloStatus: ["<32>{#p/story}* Silente在這宇宙中無憂無慮。"],
      soloTalk1: ["<08>{#p/basic}{~}做自己\n才是\n最好的！"],
      soloTalk2: ['<08>{#p/basic}{~}啦啦~\n做自己\n就好~'],
      soloTalk3: ["<08>{#p/basic}{~}獨處時間\n最棒了！"],
      soloTalk4: ['<08>{#p/basic}{~}呣，\n恰恰恰！'],
      soloTalk5: ['<08>{#p/basic}{~}揮動你的\n手臂，寶貝~']
   },
   b_opponent_mushy: {
      act_challenge: [
         '<32>{#p/human}* （你向Mushy發起決鬥挑戰。）',
         "<33>{#p/story}* 本回合，Mushy的攻擊速度加快！"
      ],
      act_check: ['<32>{#p/story}* MUSHY - 攻擊6 防禦6\n* 是星際牛仔的忠實粉絲。\n  也是一位槍術高手。'],
      act_check2: ['<32>{#p/story}* MUSHY - 攻擊6 防禦6\n* 是星際牛仔的忠實粉絲。\n  包括性感牛仔。'],
      act_check3: ['<32>{#p/story}* MUSHY - 攻擊6 防禦6\n* 在拼盡全力之後，\n  這個槍手對你的印象已是刻骨銘心。'],
      act_flirt: ['<32>{#p/human}* （你向Mushy調情。）'],
      act_taunt: ['<32>{#p/human}* （你對著Mushy一通嘲諷。）'],
      challengeStatus: ['<32>{#p/story}* Mushy正等著你的下個挑戰。'],
      challengeTalk1: ["<08>{#p/basic}{~}讓我\n見識一下\n你有什麼\n能耐。"],
      challengeTalk2: ['<08>{#p/basic}{~}是想著\n要把我\n打敗嗎？'],
      flirtStatus1: ['<32>{#p/story}* Mushy既困惑又興奮。'],
      flirtTalk1: ['<08>{#p/basic}{~}嘿，\n別-別鬧了！'],
      hurtStatus: ['<32>{#p/story}* Mushy準備拼死一搏。'],
      idleTalk1: ['<08>{#p/basic}{~}砰！\n砰！\n砰！'],
      idleTalk2: ['<08>{#p/basic}{~}上馬！'],
      idleTalk3: ["<08>{#p/basic}{~}不足為懼。"],
      name: '* Mushy',
      spareStatus: ['<32>{#p/story}* Mushy淺鞠一躬，以表敬意。'],
      status1: ['<32>{#p/story}* 剎那間，Mushy已至！'],
      status2: ['<32>{#p/story}* Mushy稍微調整了一下姿勢。'],
      status3: ['<32>{#p/story}* Mushy正為這場盛大的對決做準備。'],
      status4: ['<32>{#p/story}* Mushy伸手向腰，直奔槍套。'],
      status5: ['<32>{#p/story}* 聞起來像雨後泥土的氣息。'],
      tauntStatus1: ["<32>{#p/story}* Mushy假裝沒聽到你的嘲諷。"],
      tauntTalk1: ["<08>{#p/basic}{~}雕蟲小技，\n能奈我何？"]
   },
   b_opponent_napstablook: {
      act_check: ["<32>{#p/story}* NAPSTABLOOK - 攻擊10 防禦255\n* 這位是Napstablook。"],
      act_check2: [
         "<32>{#p/story}* NAPSTABLOOK - 攻擊10 防禦255\n* 看起來它完全不想呆在這裡。"
      ],
      act_check3: ['<32>{#p/story}* NAPSTABLOOK - 攻擊10 防禦255\n* 已經有許久沒像這樣感到希望了...'],
      act_check4: ['<32>{#p/story}* NAPSTABLOOK - 攻擊10 防禦255\n* 浪漫的緊張氣氛空前高漲。'],
      awkwardTalk: ['<11>{#p/napstablook}{~}呃...', '<11>{#p/napstablook}{~}okay, i guess...?'],
      checkTalk: ["<11>{#p/napstablook}{~}是我..."],
      cheer0: ['<32>{#p/human}* （你試圖安慰Napstablook。）'],
      cheer1: ['<32>{#p/human}* （你給Napstablook一個\n  耐心的微笑。）'],
      cheer2: ['<32>{#p/human}* （你給Napstablook講了一個\n  小小的笑話。）'],
      cheer3: ["<32>{#p/human}* （你讚美Napstablook的大禮帽。）"],
      cheerTalk1: ['<11>{#p/napstablook}{~}...？'],
      cheerTalk2: ['<11>{#p/napstablook}{~}嘿嘿...'],
      cheerTalk3: [
         '<11>{*}{#p/napstablook}{~}讓我{#x1}試試...{^20}{#x2}{^20}{%}',
         "<11>{*}{#p/napstablook}{~}我管這個叫{#x3}\n「dapper blook」{^40}{%}",
         '<11>{*}{#p/napstablook}{~}你喜歡嗎？{^40}{%}'
      ],
      cheerTalk4: ['<11>{#p/napstablook}{~}喔天啊.....'],
      consoleTalk1: ['<11>{#p/napstablook}{~}是啊，是啊...'],
      consoleTalk2: ['<11>{#p/napstablook}{~}不信...'],
      consoleTalk3: ["<11>{#p/napstablook}{~}你並不感到\n抱歉..."],
      deadTalk: [
         "<11>{#p/napstablook}{~}嗯... 你知道\n你沒辦法殺死\n幽靈，對吧...",
         "<11>{~}我們沒有實體\n之類的",
         "<11>{~}我降低我的hp\n只是不希望我\n顯得太粗魯",
         '<11>{~}對不起...\n我把事情變得\n更尷尬了...',
         '<11>{~}假裝你把我\n打敗了吧...',
         '<11>{~}喔喔喔喔喔'
      ],
      flirt1: ['<32>{#p/human}* （你向Napstablook調情。）'],
      flirt2: ['<32>{#p/human}* （你向Napstablook用\n  最好的方式搭訕。）'],
      flirt3: ['<32>{#p/human}* （你由衷地誇讚Napstablook。）'],
      flirt4: ['<32>{#p/human}* （你向Napstablook表露\n  你對它的感覺。）'],
      flirtTalk1: ["<11>{#p/napstablook}{~}我只會\n拖累你"],
      flirtTalk2: ["<11>{#p/napstablook}{~}喔.....\n我聽過這個....."],
      flirtTalk3: ['<11>{#p/napstablook}{~}呃... 你真\n這樣想嗎？'],
      flirtTalk4: ["<11>{#p/napstablook}{~}喔，你是\n認真的...", '<11>{~}喔不.....'],
      idleTalk1: ["<11>{#p/napstablook}{~}我很好，謝謝"],
      idleTalk2: ['<11>{#p/napstablook}{~}再堅持下...'],
      idleTalk3: ['<11>{#p/napstablook}{~}只是做我\n該做的事...'],
      insultTalk1: ['<11>{#p/napstablook}{~}我就知道...'],
      insultTalk2: ['<11>{#p/napstablook}{~}隨便了...'],
      insultTalk3: ['<11>{#p/napstablook}{~}隨你\n怎麼說...'],
      insultTalk4: ['<11>{#p/napstablook}{~}盡情\n發洩吧...'],
      name: '* Napstablook',
      silentTalk: ['<11>{#p/napstablook}{~}...'],
      sincere: ["<32>{#p/human}* （你對Napstablook的大禮帽\n  發表了曖昧的評論。）"],
      sincereTalk: ['<11>{#p/napstablook}{~}嘿... 謝謝'],
      status1: ['<32>{#p/story}* Napstablook來了。'],
      status2: ['<32>{#p/story}* Napstablook看起來好受了一點。'],
      status3: ['<32>{#p/story}* Napstablook想給你展示些什麼。'],
      status3a: ['<32>{#p/story}* Napstablook等待著你的回應。'],
      status4: ["<32>{#p/story}* Napstablook的眼睛閃閃發光。"],
      status5: ['<32>{#p/story}* Napstablook顯然不確定\n  該怎麼應對這種情況。'],
      status5a: ['<32>{#p/story}* Napstablook正在質疑自己的存在。'],
      status6: ['<32>{#p/story}* Napstablook正在伺機而動。'],
      status7: ['<32>{#p/story}* Napstablook正在等待\n  你下一步的行動。'],
      status8: ['<32>{#p/story}* Napstablook正凝視著遠方。'],
      status9: ["<32>{#p/story}* Napstablook希望它自己不在這裡。"],
      status10: ['<32>{#p/story}* Napstablook正在盡力將你忽視。'],
      suck: ['<32>{#p/human}* （你告訴Napstablook\n  它的帽子很難看。）'],
      threat: ['<32>{#p/human}* （你威脅Napstablook。）']
   },
   b_opponent_toriel: {
      spannerText: ['<32>{#p/human}* （你把扳手扔了出去。）\n* （Toriel撿起扳手，還給了你。）'],
      spannerTalk: ['<11>{#p/toriel}{#f/22}孩子，扔扳手\n解決不了\n任何問題。'],
      spannerTalkRepeat: ['<11>{#p/toriel}{#f/22}...'],
      act_check: ['<32>{#p/story}* TORIEL - 攻擊80 防禦80\n* 最了解你的人。'],
      act_check2: ['<32>{#p/story}* TORIEL - 攻擊80 防禦80\n* 看起來有所克制。'],
      act_check3: ['<32>{#p/story}* TORIEL - 攻擊80 防禦80\n* 看起來心不在焉。'],
      act_check4: ['<32>{#p/story}* TORIEL - 攻擊80 防禦80\n* 只想把最好的給你。'],
      act_check5: ['<32>{#p/story}* TORIEL - 攻擊80 防禦80\n* 覺得你很「天真可愛」。'],
      precrime: ['<20>{#p/asriel2}...'],
      criminal1: (reveal: boolean) => [
         '<20>{#p/asriel2}{#f/3}哈囉，\n$(name)。',
         "<20>{#f/1}重獲新生的感覺\n真是太棒了。",
         "<20>{#f/2}為啥露出那副表情？\n沒想到我會回來嗎？",
         '<20>{#f/13}...\n其實，$(name)...',
         ...(reveal
            ? ["<20>{#f/1}這一刻，\n我等了好久。"]
            : [
               "<20>{#f/15}我一直被困在\n那顆星星裡，\n我...",
               '<20>{#f/15}...',
               "<20>{#f/16}罷了，\n先不說這個。",
               '<20>{#f/1}眼前，最重要的是，\n一切終於重回正軌了。'
            ]),
         '<20>{#f/1}嘻嘻嘻...',
         "<20>{#f/2}我知道你的內在是\n空虛的，就像我一樣。",
         "<20>{#f/5}過了這麼多年，\n我們之間的紐帶\n依然無法分割...",
         "<20>{#f/1}聽著，我有個計畫，\n能讓我們變得親密無間。",
         '<20>{#f/1}有了你和我的力量，\n再加上一起偷來的\n靈魂...',
         "<20>{#f/1}我們就能一舉摧毀\n這該死前哨站的一切。",
         '<21>{#f/2}讓我們把膽敢阻攔我們\n走向美好未來的傢伙...',
         "<20>{#f/1}都變為塵埃吧。"
      ],
      criminal2: ['<20>{#p/asriel2}{#f/3}歡迎回來，\n$(name)。', '<20>{#f/1}準備好再大幹一番了嗎？'],
      criminal3: ['<20>{#p/asriel2}{#f/3}那麼...', '<20>{#f/3}...', "<20>{#f/4}出發吧。"],
      cutscene1: [
         "<32>{#p/basic}* 也許是因為...\n  只有我說的話，你才聽得進去吧。",
         '<25>{#p/toriel}{#f/16}* ...！？',
         "<32>{#p/basic}* 但我一個天真懵懂的小孩，\n  能講出什麼大道理呢？"
      ],
      cutscene2: [
         '<25>{#p/toriel}{#f/3}* ...',
         '<25>{#p/toriel}{#f/4}* 不可能...',
         '<25>{#f/0}* 我是不是沒睡醒，\n  還是出現幻覺了？\n* 或者...',
         '<32>{#p/basic}* 不。',
         '<32>{#p/basic}* 這裡，就是現實。',
         '<25>{#p/toriel}{#f/5}* 但你不是早就死了嗎，\n  $(name)？',
         '<25>{#f/5}* 你絕對不可能\n  像這樣開口說話。',
         "<32>{#p/basic}* 你要是還接受不了...",
         '<32>{#p/basic}* 就把這當成一場夢吧。',
         '<25>{#p/toriel}{#f/5}* ...',
         '<25>{#p/toriel}{#f/9}* 你想說什麼？',
         '<32>{#p/basic}* Toriel...',
         "<32>{#p/basic}* 你應該知道\n  我對人類是什麼態度吧？",
         '<25>{#p/toriel}{#f/13}* 知道。',
         '<32>{#p/basic}* 你不知道。',
         '<32>{#p/basic}* ...我對這個人類可不是那態度。',
         "<32>* 自從這個孩子墜落於此，\n  我就一直跟著他...",
         "<32>* 剛剛，這孩子求我幫忙，\n  讓我說服你。",
         '<32>* 你明白，這意味著什麼嗎？',
         '<25>{#p/toriel}{#f/13}* ...',
         '<32>{#p/basic}* 這意味著\n  你應該馬上放這孩子走。',
         '<25>{#p/toriel}{#f/12}* ...你不知道外面多危險嗎？',
         '<25>{#f/11}* 我要是心軟，\n  那孩子肯定會死在外頭。',
         '<32>{#p/basic}* ...好好想想。',
         "<32>{#p/basic}* 你根本不是因為這個\n  才不讓他走，對吧？",
         '<25>{#p/toriel}{#f/12}* 這股叛逆的勁\n  倒真像$(name)。',
         '<25>{#p/toriel}{#f/11}* 你老是愛挑戰我的權威。',
         '<32>{#p/basic}* 因為我夠格。',
         '<32>{#p/basic}* 你是自己害怕外域之外的未知，\n  所以才想把那孩子留在這，對吧？',
         "<33>{#p/basic}* 但是，過了一百年，\n  外面的世界早就不一樣了。",
         "<33>{#p/basic}* 你不敢走出去看看，畫地為牢。\n  才對這些視而不見。",
         '<25>{#p/toriel}{#f/13}* ...',
         "<25>{#p/toriel}{#f/13}* ...但我要是放這孩子走，\n  就沒法...",
         '<32>{#p/basic}* 陪伴他，保護他了？',
         '<32>{#p/basic}* 呵，我明白那是什麼滋味。',
         '<32>{#p/basic}* 但是，把那孩子\n  強行束縛在這一畝三分地，\n  他也會活不下去。',
         "<32>{#p/basic}* 不做點有意義的事，\n  那活著還有什麼意義？",
         '<25>{#p/toriel}{#f/13}* ...',
         '<25>{#p/toriel}{#f/13}* $(name)，我...',
         '<32>{#p/basic}* 你之前不是給過這孩子\n  一部手機嗎？',
         "<32>{#p/basic}* 別切斷聯絡，保持電話暢通。\n  那孩子會給你打電話的。",
         '<25>{#p/toriel}{#f/9}* ...那你呢？',
         "<32>{#p/basic}* 別擔心我。\n* 我沒事的。",
         "<32>{#p/basic}* 我只希望，那孩子走後，\n  一定，一定不要忘了他。",
         '<25>{#p/toriel}{#f/13}* ...',
         '<32>{#p/basic}* 再見，Toriel。',
         '<25>{#p/toriel}{#f/14}* ...再見，$(name)。'
      ],
      death1: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}趁我\n毫無防備時\n殺了我...',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/9}{#x2}{@random=1.1/1.1}哈...\n哈...',
         '<11>{#v/2}{#i/9}{#x2}{@random=1.1/1.1}現在看來，\n年輕人...',
         '<11>{#v/3}{#i/12}{#x2}{@random=1.2/1.2}一路上一直\n相信你的我，\n才是真正的\n傻子啊...'
      ],
      death2: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}本以為，\n自己努力\n保護的人，\n是你...',
         '<11>{#v/1}{#i/6}{#x4}{@random=1.1/1.1}...',
         '<11>{#v/2}{#i/9}{#x2}{@random=1.1/1.1}哈...\n哈...',
         '<11>{#v/2}{#i/9}{#x1}{@random=1.1/1.1}現在看來，\n年輕人...',
         '<11>{#v/3}{#i/12}{#x2}{@random=1.2/1.2}我真正\n保護的，\n是他們啊...'
      ],
      death3: [
         '<11>{#p/toriel}{#f/21}{#v/1}{#i/6}{#x1}{@random=1.1/1.1}呃啊...',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}沒想到，\n你這麼強...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}聽我說，\n孩子...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}很快，\n我就會變成\n一堆灰燼...',
         '<11>{#v/1}{#i/6}{#x3}{@random=1.1/1.1}到那時，\n請你... \n馬上吸收\n我的靈魂。',
         '<11>{#v/1}{#i/6}{#x1}{@random=1.1/1.1}只有這樣...\n你才能\n逃出這裡。',
         "<11>{#v/2}{#i/9}{#x3}{@random=1.1/1.1}絕不能...\n讓... \nASGORE...\n計畫得逞...",
         '<11>{#v/2}{#i/9}{#x1}{@random=1.1/1.1}...',
         '<11>{#v/3}{#i/12}{#x2}{@random=1.2/1.2}孩子...',
         "<11>{#v/3}{#i/12}{#x4}{@random=1.2/1.2}要乖啊... \n好嗎？"
      ],
      magic1: ['<20>{#p/asriel2}{#f/3}跟我來。'],
      name: '* Toriel',
      spareTalk1: ['<11>{#p/toriel}{#f/11}...'],
      spareTalk2: ['<11>{#p/toriel}{#f/11}...\n...'],
      spareTalk3: ['<11>{#p/toriel}{#f/11}...\n...\n...'],
      spareTalk4: ['<11>{#p/toriel}{#f/17}...？'],
      spareTalk5: ['<11>{#p/toriel}{#f/17}你這是\n在做什麼？'],
      spareTalk6: ['<11>{#p/toriel}{#f/17}...'],
      spareTalk7: ['<11>{#p/toriel}{#f/17}你這樣做，\n究竟想\n證明什麼？'],
      spareTalk8: ['<11>{#p/toriel}{#f/17}...'],
      spareTalk9: ['<11>{#p/toriel}{#f/12}要麼戰鬥，\n要麼離開！'],
      spareTalk10: ['<11>{#p/toriel}{#f/12}不要用\n那種眼神看我！'],
      spareTalk11: ['<11>{#p/toriel}{#f/12}走開！'],
      spareTalk12: ['<11>{#p/toriel}{#f/13}...'],
      spareTalk13: ['<11>{#p/toriel}{#f/13}...\n...'],
      spareTalk14: ['<11>{#p/toriel}{#f/13}...\n...\n...'],
      spareTalk15: [
         '<11>{#p/toriel}{#f/13}我明白\n你想要回家\n的心情...',
         '<11>{#p/toriel}{#f/9}但路上可能\n會有危險。'
      ],
      spareTalk16: ['<11>{#p/toriel}{#f/14}所以... 求你\n現在回去吧。'],
      spareTalk17: [
         '<11>{#p/toriel}{#f/13}我知道這裡\n沒有多少\n東西...',
         '<11>{#p/toriel}{#f/10}但我們\n仍可以幸福\n生活下去。'
      ],
      spareTalk18: [
         '<11>{#p/toriel}{#f/13}有你有我，\n就像\n一家人一樣...',
         '<11>{#p/toriel}{#f/10}這樣生活\n不好嗎？'
      ],
      spareTalk19: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk20: ['<11>{#p/toriel}{#f/18}你為什麼\n要讓事情變得\n這麼難辦呢？'],
      spareTalk21: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk22: ['<11>{#p/toriel}{#f/18}求你了，\n回去吧...', '<11>{#p/toriel}{#f/9}回到我們的\n房間去吧。'],
      spareTalk23: ['<11>{#p/toriel}{#f/21}...'],
      spareTalk24: ['<11>{#p/toriel}{#f/18}喔，孩子...'],
      spareTalk28b: [
         '<11>{#p/toriel}{#f/9}也許\n真正糊塗的\n是我...',
         '<11>{#f/13}用這種方法\n試圖阻止你...',
         '<11>{#f/9}也許我應該\n讓你走。'
      ],
      spareTalk28c: ['<11>{#p/toriel}{#f/17}...？', '<11>{#f/17}你為什麼喊\n「$(name)」\n的名字呢？'],
      status1: ['<32>{#p/story}* Toriel現在正站在你面前。'],
      status2: ['<32>{#p/story}* Toriel準備著魔法攻擊。'],
      status3: ['<32>{#p/story}* Toriel板著臉，\n  冷冷地看著你。'],
      status4: ['<32>{#p/story}* Toriel看穿了你。'],
      status5: ['<32>{#p/story}* ...'],
      assistStatus: ['<32>{#p/basic}* 肯定有其他辦法的...'],
      talk1: ['<32>{#p/human}* （你請求Toriel讓你過去。）\n* （沒有效果。）'],
      talk2: ["<32>{#p/human}* （你問Toriel為什麼要這麼做。）\n* （她的身體輕輕顫抖了一下。）"],
      talk3: ['<32>{#p/human}* （你求Toriel停下。）\n* （她猶豫了。）'],
      talk4: [
         '<32>{#p/human}* （你再次求Toriel停下。）',
         '<32>{#p/basic}* ...也許這麼做對她來說風險太大了。'
      ],
      talk5: ['<32>{#p/human}* （你衝Toriel大喊。）\n* （她閉上眼睛，深吸一口氣。）'],
      talk6: [
         '<32>{#p/human}* （你再次衝Toriel大喊。）',
         "<32>{#p/basic}* ...或許交談並不能有什麼進展。"
      ],
      talk7: ["<32>{#p/human}* （但你想不到什麼別的話可說。）"],
      talk8: ['<32>{#p/human}* （但這麼做已經沒有意義了。）'],
      theft: ['<20>{*}{#p/twinkly}歸我了。{^15}{%}']
   },

   c_name_outlands: {
      hello: '打招呼',
      about: '介紹下自己',
      mom: '叫她「媽媽」',
      flirt: '調情',
      toriel: "給Toriel打電話",
      puzzle: '謎題求助',
      insult: '辱罵'
   },

   c_call_outlands: {
      about1: [
         '<25>{#p/toriel}{#f/1}* 你是想更深入的了解我...\n  對嗎？',
         '<25>{#f/0}* 嗯，我怕我沒有什麼\n  可以跟你講的。',
         '<25>{#f/0}* 我只不過是一位\n  愛瞎操心的老阿姨罷了！'
      ],
      about2: [
         '<25>{#p/toriel}{#f/1}* 如果你想深入了解我的話...',
         '<25>{#f/1}* 可以四處瞧瞧\n  這些建築與陳設。',
         '<25>{#f/0}* 它們都是由我\n  直接或間接參與建造的。'
      ],
      about3: [
         '<25>{#p/toriel}{#f/1}* 如果你想深入了解我的話...',
         '<25>{#f/2}* 之前就別在電話裡罵我！'
      ],
      flirt1: [
         '<25>{#p/toriel}{#f/7}* ...嗯？',
         '<25>{#f/1}* 喔，嘻... 嘻嘻...',
         '<25>{#f/6}* 哈哈哈！\n* 讓我捏捏你的小臉蛋！',
         '<25>{#f/0}* 你肯定能找到\n  比我這種老阿姨更好的人！'
      ],
      flirt2: [
         '<25>{#p/toriel}{#f/7}* ...\n* 喔親愛的，你是認真的嗎...？',
         '<25>{#f/1}* 我實在不知道是喜還是悲，\n  我的孩子。'
      ],
      flirt3: [
         '<25>{#p/toriel}{#f/7}* ...\n* 喔親愛的，你是認真的嗎...？',
         '<25>{#f/5}* 先前你還叫我\n  「媽媽」來著...',
         '<25>{#f/1}* 好吧。\n* 你可真是個「有趣」的孩子。'
      ],
      flirt4: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#p/toriel}{#f/4}* 我真是想不通你的腦迴路。'],
      hello: [
         [
            '<25>{#p/toriel}* 這裡是Toriel。',
            '<25>{#f/1}* 你只是想和我打聲招呼...？',
            '<25>{#f/0}* 那好吧。\n* 「你好！」',
            '<25>{#f/0}* 希望這一句招呼就足夠了。\n* 嘻嘻。'
         ],
         [
            '<25>{#p/toriel}* 這裡是Toriel。',
            '<25>{#f/1}* 你還想和我打聲招呼嗎？',
            '<25>{#f/0}* 那就，「向你致意」吧！',
            '<25>{#f/1}* 足夠了嗎？'
         ],
         [
            '<25>{#p/toriel}{#f/1}* 你現在是覺得很無聊嗎？',
            '<25>{#f/0}* 對不起。\n* 我應該給你找些事情做的。',
            '<25>{#f/1}* 試著放空大腦盡情想像，\n  來分散你的注意力，\n  如何？',
            '<25>{#f/0}* 假裝你是一名...\n  戰鬥機飛行員！',
            '<25>{#f/1}* 上下旋轉，左右搖擺，\n  以光速做著橫滾側翻...',
            '<25>{#f/1}* 能為我試著做一遍嗎？'
         ],
         [
            '<25>{#p/toriel}{#f/5}* 你好，小傢伙。',
            '<25>{#f/9}* 我很抱歉，因為我已經\n  沒什麼東西可說了。',
            '<25>{#f/1}* 但我很高興\n  能聽到你的聲音...'
         ]
      ],
      helloX: ['<25>{#p/toriel}{#g/torielLowConcern}* 嗯？'],
      mom1: [
         '<25>{#p/toriel}* ...',
         '<25>{#f/7}* 嗯？\n* 你剛才是不是叫我\n  「媽媽」了？',
         '<25>{#f/1}* 嗯...\n* 我想...',
         '<25>{#f/1}* 你叫我「媽媽」...',
         '<25>{#f/1}* 會不會讓你...\n* 開心一點？',
         '<25>{#f/0}* 那就...\n* 隨你怎麼稱呼吧！'
      ],
      mom2: ['<25>{#p/toriel}{#f/7}* ...\n* 我的天... 又來？', '<25>{#f/0}* 嘻嘻嘻...\n* 你真是個小可愛。'],
      mom3: [
         '<25>{#p/toriel}{#f/7}* ...\n* 我的天... 又來？',
         '<25>{#f/5}* 先前你還跟我調情來著...',
         '<25>{#f/1}* 好吧。\n* 你可真是個「有趣」的孩子。'
      ],
      mom4: ['<25>{#p/toriel}{#f/5}* ...'],
      puzzle1: [
         '<25>{#p/toriel}{#f/1}* 被謎題難住了嗎？',
         '<25>{#f/1}* 你還在那個房間，對吧？',
         '<25>{#f/0}* 再等我幾分鐘，\n  等我回去了，咱們一起解開它。'
      ],
      puzzle2: [
         '<25>{#p/toriel}{#f/1}* 被謎題難住了嗎？',
         '<25>{#f/23}* ...我感覺你應該不需要\n  我的幫助。'
      ],
      puzzle3: [
         '<25>{#p/toriel}{#f/1}* 被謎題難住了嗎？',
         '<25>{#f/5}* ...\n* 恐怕我現在幫不了你。',
         '<25>{#f/0}* 再等我幾分鐘，\n  等我回去了，咱們一起解開它。'
      ],
      insult1: (sus: boolean) =>
         sus
            ? [
               '<25>{#p/toriel}{#f/0}* 喂？\n* 我是...',
               '<25>{#f/2}* ...！',
               '<25>{#f/3}* 你有本事再說一遍？'
            ]
            : [
               '<25>{#p/toriel}{#f/0}* 喂？\n* 我是...',
               '<25>{#f/2}* ...！',
               '<25>{#f/1}* 我的孩子... \n  我覺得那不是你的本意。'
            ],
      insult2: (sus: boolean) =>
         sus
            ? ['<25>{#p/toriel}{#f/15}* ...', '<25>{#f/12}* 我會當作沒聽見的。']
            : ['<25>{#p/toriel}{#f/1}* 我的孩子...']
   },

   i_candy: {
      battle: {
         description: '有一種獨特的，非甘草的味道。',
         name: '怪物糖果'
      },
      drop: ['<32>{#p/human}* （你把怪物糖果扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （10 HP。）']
            : ['<32>{#p/basic}* 「怪物糖果」 回復10 HP\n* 有一種獨特的，非甘草的味道。'],
      name: '怪物糖果',
      use: ['<32>{#p/human}* （你吃掉了怪物糖果。）']
   },
   i_water: {
      battle: {
         description: '它的氣味很像一氧化二氫。',
         name: '水'
      },
      drop: ['<32>{#p/human}* （你把水倒掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （12 HP。）']
            : ['<32>{#p/basic}* 「水」 回復12 HP\n* 它的氣味很像一氧化二氫。'],
      name: '水',
      use: () => [
         '<32>{#p/human}* （你喝了一瓶水。）',
         ...(SAVE.data.b.ufokinwotm8 ? [] : ["<33>{#p/human}* （你充滿了一氧化二氫的力量。）"]) 
      ]
   },
   i_chocolate: {
      battle: {
         description: '辛勞一路，犒勞下自己吧。',
         name: '巧克力'
      },
      drop: () => [
         '<32>{#p/human}* （你把巧克力扔掉了。）',
         ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* ...唉，行吧。'])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （19 HP。它讓你想起了某個人。）']
            : ['<32>{#p/basic}* 「巧克力」 回復19 HP\n* 辛勞一路，犒勞下自己吧。'],
      name: '巧克力',
      use: () => [
         '<32>{#p/human}* （你吃掉了巧克力。）',
         ...(battler.active && battler.alive[0].opponent.metadata.reactChocolate
            ? ['<32>{#p/basic}* Toriel也聞到了巧克力的香味，\n  露出了微笑。']
            : [])
      ]
   },
   i_delta: {
      battle: {
         description: '據說它能讓你「飄飄欲仙」。',
         name: '大麻素'
      },
      drop: ['<32>{#p/human}* （你把大麻素扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （5 HP. 你覺得它非常地奇怪。）']
            : ['<32>{#p/basic}* 「大麻素」 回復5 HP\n* 據說它能讓你「飄飄欲仙」。'],
      name: '大麻素',
      use: ['<32>{#p/human}* （你吸食了大麻素。）']
   },
   i_halo: {
      battle: {
         description: '一條頭帶，自帶重力場。',
         name: '光環'
      },
      drop: ['<32>{#p/human}* （你像丟飛盤一般\n  把光環扔得老遠。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （3防禦。）']
            : ['<32>{#p/basic}* 「光環」 （3防禦）\n* 一條頭帶，自帶重力場。'],
      name: '光環',
      use: () => [
         '<32>{#p/human}* （你戴上了光環。）',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom && asrielinter.i_halo_use++ < 1
            ? ['<25>{#p/asriel1}{#f/20}* 我覺得，它和你蠻配的。']
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
            ? ['<32>{#p/human}* （3攻擊。）']
            : ['<32>{#p/basic}* 「小熊座」 （3攻擊）\n* 一把大勺子。'],
      name: '小熊座',
      use: ['<32>{#p/human}* （你裝備上了小熊座。）']
   },
   i_pie: {
      battle: {
         description: '一小塊自家做的奶油糖肉桂派。',
         name: '派'
      },
      drop: ['<32>{#p/human}* （你把奶油糖肉桂派扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （99 HP。）']
            : ['<32>{#p/basic}* 「奶油糖肉桂派」 回復99 HP\n* 一小塊自家做的奶油糖肉桂派。'],
      name: '奶油糖肉桂派',
      use: ['<32>{#p/human}* （你吃掉了奶油糖肉桂派。）']
   },
   i_pie2: {
      battle: {
         description: '一道傳統家常美食。',
         name: '蝸牛派'
      },
      drop: ['<32>{#p/human}* （你把蝸牛派扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （99 HP。）']
            : ['<32>{#p/basic}* 「蝸牛派」 回復99 HP\n* 一道傳統家常美食。'],
      name: '蝸牛派',
      use: ['<32>{#p/human}* （你吃掉了蝸牛派。）']
   },
   i_pie3: {
      battle: {
         description: '變粥的派，也還是周到的派。',
         name: '派粥'
      },
      drop: ['<32>{#p/human}* （你把派粥全倒掉了，\n  勺子也一起扔了。）'],
      info: ['<32>{#p/basic}* 「派粥」 回復49 HP\n* 變{@fill=#ff0}粥{@fill=#fff}的派，也還是{@fill=#ff0}周{@fill=#fff}到的派。'],
      name: '派粥',
      use: ['<32>{#p/human}* （你用附帶的勺子喝光了派粥。）']
   },
   i_pie4: {
      battle: {
         description: '真是惡有惡報...',
         name: '糊派'
      },
      drop: ['<32>{#p/human}* （你把烤糊的派隨手扔在一邊，\n  置之不理。）'],
      info: ['<32>{#p/basic}* 「糊派」 回復39 HP\n* 真是惡有惡報...'],
      name: '糊派',
      use: ['<32>{#p/human}* （你吃掉了烤糊的派。）']
   },
   i_snails: {
      battle: {
         description: '一盤焗蝸牛。\n當然，是當做早餐的。',
         name: '焗蝸牛'
      },
      drop: ['<32>{#p/human}* （你把焗蝸牛扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （19 HP。）']
            : ['<32>{#p/basic}* 「焗蝸牛」 回復19 HP\n* 一盤焗蝸牛。\n* 當然，是當做早餐的。'],
      name: '焗蝸牛',
      use: ['<32>{#p/human}* （你吃掉了焗蝸牛。）']
   },
   i_soda: {
      battle: {
         description: '噁心的暗黃色液體。',
         name: '呲呲汽水'
      },
      drop: () => [
         '<32>{#p/human}* （你把呲呲汽水扔掉了。）',
         ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* 謝天謝地。'])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （8 HP。）']
            : ['<32>{#p/basic}* 「呲呲汽水」 回復8 HP\n* 噁心的暗黃色液體。'],
      name: '呲呲汽水',
      use: () => [
         '<32>{#p/human}* （你喝掉了呲呲汽水。）',
         ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* 好噁心！'])
      ]
   },
   i_spacesuit: {
      battle: {
         description: '在你墜毀的飛船上找到的。',
         name: '太空衣'
      },
      drop: ['<32>{#p/human}* （你把破損的太空衣扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （20 HP。一艘背井離鄉的飛船上\n  殘存的最後碎片。）']
            : ['<32>{#p/basic}* 「破損的太空衣」 回復20 HP\n* 在你墜毀的飛船上找到的。'],
      name: '破損的太空衣',
      use: ['<33>{#p/human}* （在用完最後一個治療包後，\n  破損的太空衣散架了。）']
   },
   i_spanner: {
      battle: {
         description: '一把生鏽的舊扳手。',
         name: '舊扳手'
      },
      drop: ['<32>{#p/human}* （你把生鏽的扳手扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* （一把來自星河邊際外的\n  可靠工具。）"]
            : ['<32>{#p/basic}* 一把生鏽的舊扳手。'],
      name: '生鏽的扳手',
      use: () => [
         ...(battler.active && battler.alive[0].opponent.metadata.reactSpanner
            ? []
            : ['<32>{#p/human}* （你把扳手拋向了空中。）\n* （什麼都沒發生。）'])
      ]
   },
   i_starbertA: {
      battle: {
         description: '限量版《超級星之行者》連載漫畫\n第1期。',
         name: '星之行者1'
      },
      drop: ['<32>{#p/human}* （你把《超級星之行者1》扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （這似乎是一段旅程的開始。）']
            : ['<32>{#p/basic}* 限量版《超級星之行者》連載漫畫。\n* 共有3期，這是第1期。'],
      name: '《超級星之行者1》',
      use: () => (battler.active ? ['<32>{#p/human}* （你看了看《超級星之行者1》。）', '<32>* （什麼都沒發生。）'] : [])
   },
   i_starbertB: {
      battle: {
         description: '限量版《超級星之行者》連載漫畫\n第2期。',
         name: '星之行者2'
      },
      drop: ['<32>{#p/human}* （你把《超級星之行者2》扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （這似乎是一段旅程的中途。）']
            : ['<32>{#p/basic}* 限量版《超級星之行者》連載漫畫。\n* 共有3期，這是第2期。'],
      name: '《超級星之行者2》',
      use: () =>
         battler.active
            ? [
               '<32>{#p/human}* （你看了看《超級星之行者2》。）',
               ...(SAVE.data.b.stargum
                  ? ['<32>* （什麼都沒發生。）']
                  : [
                     '<32>* （你發現漫畫上\n  「附贈」了一塊口香糖...）',
                     choicer.create('* （嚼它嗎？）', "嚼", "不嚼")
                  ])
            ]
            : []
   },
   i_starbertC: {
      battle: {
         description: '限量版《超級星之行者》連載漫畫\n第3期。',
         name: '星之行者3'
      },
      drop: ['<32>{#p/human}* （你把《超級星之行者3》扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （這似乎是一段旅程的終點...\n  亦或是一個新的開始？）']
            : ['<32>{#p/basic}* 限量版《超級星之行者》連載漫畫。\n* 共有3期，這是最後一期。'],
      name: '《超級星之行者3》',
      use: () => (battler.active ? ['<32>{#p/human}* （你看了看《超級星之行者3》。）', '<32>* （什麼都沒發生。）'] : [])
   },
   i_steak: {
      battle: {
         description: '買它真是虧爆了。',
         name: '滋滋牛排'
      },
      drop: () => [
         '<32>{#p/human}* （你把滋滋牛排扔掉了。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : ["<32>{#p/basic}* 哼，沒人會稀罕它的。"])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （14 HP。）']
            : ['<32>{#p/basic}* 「滋滋牛排」 回復14 HP\n* 質量存疑。'],
      name: '滋滋牛排',
      use: () => [
         '<32>{#p/human}* （你吃掉了滋滋牛排。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : ['<32>{#p/basic}* 真難吃！'])
      ]
   },

   k_coffin: {
      name: '秘密鑰匙',
      description: () =>
         SAVE.data.b.w_state_secret
            ? '用它解鎖了外域的隱藏房間。'
            : "在Toriel房間的襪子抽屜中找到的。"
   },

   c_call_toriel: <Partial<CosmosKeyed<CosmosProvider<string[]>, string>>>{
      w_start: [
         '<25>{#p/toriel}{#f/0}* 啊，當然。\n* 那一定是你迫降的地方。',
         '<25>{#f/0}* 其他來這裡的人類\n  也是在那裡降落的。',
         '<25>{#f/0}* 到來的飛船總是沿著\n  這個航線飛進這裡...',
         '<25>{#f/1}* ...這肯定和力場有關係。'
      ],
      w_twinkly: () =>
         SAVE.data.b.toriel_twinkly
            ? [
               '<25>{#p/toriel}{#f/1}* 那是我找到你的地方嗎？',
               '<25>{#f/5}* 那個折磨你的\n  會說話的星星，\n  一直是個討厭鬼。',
               '<25>{#f/1}* 我以前試過跟他講道理，\n  但...',
               '<25>{#f/9}* 我的努力\n  從未真正奏效過。'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 那是我找到你的地方嗎？',
               '<25>{#f/5}* 就你一個人獨自在外面...',
               '<25>{#f/0}* 幸好當時我在那裡，\n  把你給帶進來了。'
            ],
      w_entrance: [
         '<25>{#p/toriel}{#f/1}* 外域的入口啊...',
         '<25>{#f/0}* 在這之前的區域\n  確實不算外域的一部分。',
         '<25>{#f/5}* 那邊... \n  更像是一個無名墜落點。',
         '<25>{#f/1}* 在第一個人類\n  直接墜入外域之後...',
         '<25>{#f/0}* 添加一個獨立的平臺\n  就顯得很有必要了。'
      ],
      w_lobby: [
         '<25>{#p/toriel}{#f/0}* 這個房間裡的謎題\n  很適合用來做演示。',
         '<25>{#f/1}* 不然，我還能\n  因為什麼而製作它？',
         '<25>{#f/5}* 不幸的是，\n  並非所有人類\n  都明白這一點。',
         '<25>{#f/3}* 其中一個甚至試圖\n  往安保屏障上衝...',
         '<25>{#f/0}* ...我只能說，\n  治療魔法是必需的。'
      ],
      w_tutorial: [
         '<25>{#p/toriel}* 如果這都不能算作\n  我最喜歡的謎題，\n  我就不知道什麼才算了！',
         '<25>* 它所教導的團隊精神，\n  是一種最寶貴的品質。',
         '<25>{#f/1}* 由於我夢想\n  成為一名教師...',
         '<25>{#f/0}* 所以總想找機會將這些\n  重要的東西教給別人。'
      ],
      w_dummy: () => [
         '<25>{#p/toriel}{#f/1}* 訓練室嗎...？',
         ...(SAVE.data.n.plot < 42
            ? [
               [
                  '<25>{#f/0}* 嘻嘻，我還是很高興\n  你按照我教的方法\n  完成了任務。',
                  '<25>{#f/1}* 友好的交談\n  比其它選擇更可取...',
                  '<25>{#f/0}* 可不僅僅是因為\n  那樣能幫你交朋友！'
               ],
               [],
               [
                  '<25>{#f/5}* ...',
                  '<25>{#f/5}* 雖然你沒按我教的去做...',
                  '<25>{#f/0}* 但至少你避免了衝突。',
                  '<25>{#f/0}* 考慮到還有其它選擇，\n  這算是... \n  一個較好的結果。'
               ],
               [
                  '<25>{#f/0}* ...嗯。',
                  '<25>{#f/0}* 老實說，\n  我到現在還不知道\n  該怎麼應對這事。',
                  '<25>{#f/1}* 長時間看著某物\n  是容易入迷，\n  但是...',
                  '<25>{#f/3}* 就你們倆這樣...\n* 一直盯著對方...',
                  '<25>{#f/4}* ...'
               ],
               [
                  '<25>{#f/1}* 我不能說我預料到了\n  會發生這種事，\n  但是...',
                  '<25>{#f/0}* 這還是挺可愛的。',
                  '<25>{#f/0}* 意外的是，\n  你竟然是第一個\n  嘗試這種方法的人類。',
                  '<25>{#f/1}* 現在看來，\n  這種解決辦法\n  好像再明顯不過了...'
               ],
               [],
               [
                  '<25>{#f/5}* ...',
                  '<25>{#f/7}* ...',
                  '<25>{#f/8}* 哈哈哈！\n* 啊，我忍不住笑了！',
                  '<25>{#f/6}* 你那\n  毫不掩飾的調情方式...',
                  '<25>{#f/1}* 確實讓我吃了一驚！',
                  '<25>{#f/0}* 聽我說，孩子。',
                  '<25>{#f/9}* 向對手調情\n  可不一定總是好主意。',
                  '<25>{#f/10}* 不過，\n  要是你能再像剛才那樣...',
                  '<25>{#f/0}* 誰知道\n  你還能用這種方式\n  做到什麼呢。'
               ]
            ][SAVE.data.n.state_wastelands_dummy]
            : [
               '<25>{#p/toriel}{#f/0}* 噢，對了，關於這個。',
               '<25>{#p/toriel}{#f/0}* 我最近發現有個幽靈\n  藏在這個假人裡。',
               '<25>{#p/toriel}{#f/1}* 那幽靈看起來\n  在為什麼事煩惱，\n  不過...',
               '<25>{#p/toriel}{#f/0}* 聊了一會兒後，\n  我幫那幽靈冷靜了下來。',
               '<25>{#p/toriel}{#f/1}* 嗯...\n  不知道Lurksalot\n  現在在哪裡呢。'
            ])
      ],
      w_coffin: [
         '<25>{#p/toriel}{#f/5}* ...',
         '<25>{#f/5}* 在這種時候，\n  我們應當表現出尊重。',
         '<25>{#f/10}* ...明白嗎？',
         '<25>{#f/9}* 剛剛教你的東西，\n  比什麼謎題和戰鬥技巧\n  重要得多。'
      ],
      w_danger: () =>
         SAVE.data.n.state_wastelands_froggit === 3
            ? [
               '<25>{#p/toriel}{#f/1}* 這房間終端上的謎題...',
               '<25>{#f/0}* 改編自我從一個\n  古老的地球傳說裡\n  看到的內容。',
               '<25>{#f/1}* 那個傳說裡包含了\n  一系列複雜的謎題...',
               '<25>{#f/0}* 其中有個烹飪謎題，\n  大夥總猜錯，\n  但我覺得很巧妙。',
               SAVE.data.b.w_state_riddleskip
                  ? '<25>{#f/5}* 你沒有解謎可真是遺憾。'
                  : '<25>{#f/0}* 很高興看到你願意解謎。'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 作為外域的管理者...',
               '<25>{#f/0}* 我自然得保證\n  其他怪物不會傷害你。',
               '<25>{#f/0}* 我和他們之間\n  已經達成了一個共識。',
               '<25>{#f/0}* 所以那隻Froggit\n  才乖乖地走開了。'
            ],
      w_zigzag: [
         '<25>{#p/toriel}{#f/1}* 之所以把這個房間\n  建得如此蜿蜒曲折...',
         '<25>{#f/0}* ...是因為我覺得\n  直來直去太沒意思了。',
         '<25>{#f/1}* 畢竟，誰會想\n  一輩子都走直線呢？',
         '<25>{#f/0}* 偶爾拐個彎，\n  換換心情也不錯嘛。'
      ],
      w_froggit: [
         '<25>{#p/toriel}* 從這個房間開始，\n  你可能會碰上更多怪物。',
         '<25>{#f/0}* 他們喜歡在這裡「閒逛」。\n* 感覺還不錯吧？',
         '<25>{#f/1}* 之前這裡一直很安靜，\n  直到最近啊...',
         '<25>{#f/0}* 有個傢伙\n  開始教其他怪物\n  怎麼調情。',
         '<25>{#f/0}* 這下一來，\n  這幫傢伙的社交方式\n  都變了不少。'
      ],
      w_candy: () => [
         SAVE.data.n.state_wastelands_candy < 4
            ? '<25>{#p/toriel}{#f/1}* 這個自動售貨機\n  還沒壞嗎？'
            : '<25>{#p/toriel}{#f/1}* 天啊，\n  這個自動售貨機\n  又壞了嗎？',
         '<25>{#f/5}* 哎，我都數不清\n  我修了這玩意多少次了。',
         '<25>{#f/3}* 不過往好處想，\n  它這樣確實省電了...',
         '<25>{#f/0}* ...也算是有利有弊吧。'
      ],
      w_puzzle1: [
         '<25>{#p/toriel}{#f/1}* 為了方便你\n  重試這個謎題...',
         '<25>{#f/0}* 我裝了個傳送系統，\n  能直接把你送回起點。',
         '<25>{#f/5}* 幫我裝這玩意的科學員\n  已經不在了...',
         '<25>{#f/0}* 但他留下的作品\n  還在造福著大家呢。'
      ],
      w_puzzle2: [
         '<25>{#p/toriel}{#f/1}* 啊，\n  這裡有個特別的謎題。',
         '<25>{#f/0}* 它主要考驗的是耐心，\n  而不是記憶力。',
         '<25>{#f/1}* 大部分人類\n  都對此抱怨連連...',
         '<25>{#f/0}* 不過，\n  倒是有一個人類\n  很欣賞它背後的價值。'
      ],
      w_puzzle3: [
         '<25>{#p/toriel}{#f/1}* 告訴你個小竅門...',
         '<25>{#f/0}* 在這個謎題\n  開始顯示序列時，\n  你就可以開始移動了。',
         '<25>{#f/5}* ...我猜這現在對你\n  已經沒什麼用了。',
         '<25>{#f/1}* 但如果你哪天\n  需要再解一遍的話...',
         '<25>{#f/0}* 不妨試試\n  我剛剛給你的建議。'
      ],
      w_puzzle4: [
         '<25>{#p/toriel}{#f/1}* 我注意到...\n  最近有人在賣\n  已經停刊的舊漫畫書。',
         
         '<25>{#f/0}* 要是你閒著沒事幹，\n  可以去買一本看看。',
         '<25>{#f/0}* 你這個年紀的孩子\n  一般都挺喜歡\n  這些東西的！'
      ],
      w_mouse: [
         '<25>{#p/toriel}{#f/1}* 我覺得吧...',
         '<25>{#f/0}* 專門弄個房間出來\n  讓人休息放鬆，\n  還是蠻重要的。',
         '<25>{#f/0}* 我自己就經常休息，\n  感覺對我的身心健康\n  很有幫助。',
         '<25>{#f/1}* 住在這裡的小䗌蟎\n  肯定也贊同我的觀點...'
      ],
      w_blooky: () =>
         SAVE.data.b.killed_mettaton
            ? [
               '<25>{#p/toriel}{#f/1}* 不知為何，\n  那個常來這裡的幽靈...',
               '<25>{#f/5}* 最近心情變得更差了。',
               '<25>{#f/1}* 我問過那幽靈怎麼了，\n  那幽靈也不肯說...',
               '<25>{#f/5}* ...那之後我就\n  再也沒見過那幽靈了。'
            ]
            : !SAVE.data.b.a_state_hapstablook || SAVE.data.n.plot < 68
               ? [
                  '<25>{#p/toriel}{#f/0}* 之前打電話來的\n  那個幽靈\n  經常在這附近晃悠。',
                  ...(SAVE.data.b.napsta_performance
                     ? ['<25>{#f/1}* 我本來以為\n  它表演完了後\n  心情會好點...']
                     : ['<25>{#f/1}* 我之前試著\n  讓它開心一點...']),
                  '<25>{#f/5}* 但如今看來，\n  那幽靈的心結是\n  沒那麼容易解開的。',
                  '<25>{#f/1}* 我要是知道\n  那幽靈在糾結什麼\n  就好了...'
               ]
               : [
                  '<25>{#p/toriel}{#f/1}* 不知為何，\n  那個常來這裡的幽靈...',
                  '<25>{#f/0}* 最近心情好了很多。',
                  '<25>{#f/0}* 那幽靈甚至跑到我家裡\n  來跟我說這事。',
                  '<25>{#f/1}* 看起來，\n  這是你的功勞...？',
                  '<25>{#f/0}* 那可真是太好了。\n* 孩子，\n  我真為你感到驕傲。'
               ],
      w_party: [
         '<25>{#p/toriel}{#f/0}* 活動室啊。\n* 我們在那裡\n  舉辦各種活動。',
         '<25>{#f/0}* 什麼戲劇啊，舞會啊...\n* 當然啦，\n  最重要的還是才藝表演！',
         '<25>{#f/0}* 看到大家盡情展現自我，\n  感覺再好不過了。',
         '<25>{#f/1}* 我之前去那兒\n  看過一場喜劇表演。',
         '<25>{#f/0}* 笑得肚子都疼了，\n  這輩子都沒那麼開心過！'
      ],
      w_pacing: () => [
         SAVE.data.b.toriel_twinkly
            ? '<25>{#p/toriel}{#f/0}* 我聽說這裡有誰\n  和那個會說話的星星\n  交上了「朋友」。'
            : '<25>{#p/toriel}{#f/0}* 我聽說這裡有誰\n  和一個會說話的星星\n  交上了「朋友」。',
         '<25>{#f/1}* 估計是某隻Froggit吧...？',
         "<25>{#f/1}* 說實話，\n  我很擔心\n  那個怪物的安危...",
         '<25>{#f/5}* 可不是一般的擔心。'
      ],
      w_junction: [
         '<25>{#p/toriel}{#f/1}* 樞紐房啊...',
         '<25>{#f/0}* 我們本來打算在這裡\n  弄個類似\n  社群公園的地方。',
         '<25>{#f/0}* 讓來外域的訪客們\n  感受到熱情友好的氛圍。',
         '<25>{#f/1}* 但我們後來發現，\n  壓根沒幾個人來...',
         '<25>{#f/0}* 所以呢，就改成了\n  你現在看到的這副模樣。',
         '<25>{#f/5}* 是有點單調，\n  不過也不能指望\n  每個房間都富麗堂皇吧...'
      ],
      w_annex: [
         '<25>{#p/toriel}* 從這裡就能走到\n  運輸船停靠站了，\n  那是個非常重要的設施。',
         '<25>{#f/1}* 不但能前往\n  前哨站的其他地方...',
         '<25>{#f/0}* 還能去\n  外域的其他區域呢。',
         '<25>{#f/1}* 不過，\n  你還只是個小孩子...',
         '<25>{#f/5}* 司機大概\n  不會讓你去那些地方。',
         '<25>{#f/0}* 畢竟那邊的\n  商店和公司什麼的，\n  都是大人才會去的地方。'
      ],
      w_wonder: () => [
         
         SAVE.data.b.snail_pie
            ? '<25>{#p/toriel}{#f/0}* 我買完做蝸牛派的材料\n  回來的時候...\n  碰到了個小蘑菇。'
            : '<25>{#p/toriel}{#f/0}* 我買完做奶油糖肉桂派的\n  材料，回來的時候...\n  碰到了個小蘑菇。',
         '<25>{#f/3}* 不過，\n  它能飄在門口那裡\n  確實蠻奇怪的...',
         '<25>{#f/0}* 那房間裡的引力\n  估計變弱了點。',
         '<25>{#f/1}* 說不定是運輸船\n  停在那裡導致的...？'
      ],
      w_courtyard: [
         '<25>{#p/toriel}{#f/0}* 啊。\n* 那個空地啊。',
         '<25>{#f/1}* 呃，確實啊...',
         '<25>{#f/5}* 對像你這樣的小孩來說，\n  這裡確實沒啥好玩的。',
         '<25>{#f/1}* 我每次都想在\n  有人類來了後\n  好好改造一下...',
         '<25>{#f/5}* 但他們總是\n  還沒等我開幹就走了。'
      ],
      w_alley1: [
         '<25>{#p/toriel}{#f/9}* ...是我勸你\n  不要離開的\n  那個房間。',
         '<25>{#f/5}* 我那時候想著，\n  如果跟你說說力場的事...',
         '<25>{#f/5}* 說不定就能\n  把你留下來了。',
         '<25>{#f/1}* ...我記得我也跟其他人類\n  說過同樣的話，可是...',
         '<25>{#f/5}* 你也跟他們一樣，\n  根本不聽我的。'
      ],
      w_alley2: [
         '<25>{#p/toriel}{#f/9}* ...是我警告你\n  前方有危險的\n  那個房間。',
         '<25>{#f/5}* 有人跟我說，\n  我對那些危險\n  的看法是錯的...',
         '<25>{#f/5}* 但我還是覺得\n  不應冒這個險。',
         '<25>{#f/9}* ...也許我真該重新想想了。'
      ],
      w_alley3: [
         '<25>{#p/toriel}{#f/9}* ...我真後悔\n  之前在這裡對你做的事。',
         '<25>{#f/5}* 我不該強迫你留下來的...',
         '<25>{#f/5}* 那只是\n  我的一廂情願罷了。',
         '<25>{#f/1}* 我知道你已經原諒我了...',
         '<25>{#f/5}* 就算我以前這麼對你...'
      ],
      w_alley4: () =>
         SAVE.data.b.w_state_fightroom
            ? [
               '<32>{#s/phone}{#p/event}* 撥號中...',
               '<25>{#p/toriel}{#f/1}* 雖然那個房間\n  可能會勾起我們\n  不大愉快的回憶...',
               '<25>{#f/0}* 但這依然是我在外域裡\n  最喜歡的地方之一。',
               '<25>{#f/1}* 某個夥計\n  偶爾會來到這裡...',
               '<25>{#f/6}* ...也許你已經認識他了。',
               '<32>{#s/equip}{#p/event}* 滴...'
            ]
            : instance('main', 'toriButNotGarb') === void 0 // NO-TRANSLATE

               ? [
                  '<32>{#s/phone}{#p/event}* 撥號中...',
                  '<25>{#p/toriel}{#f/1}* 這麼快就打過來了...？',
                  '<25>{#f/0}* ...我都還沒回到家呢！',
                  '<25>{#f/0}* 請稍等一會再打過來。',
                  '<32>{#s/equip}{#p/event}* 滴...'
               ]
               : [
                  '<32>{#w.stopThatGoat}{#s/phone}{#p/event}* 撥號中...',
                  '<25>{#p/toriel}{#f/1}* 這麼快就打過來了...？',
                  '<25>{#f/0}* ...我都還沒\n  走出這房間呢！',
                  '<25>{#f/2}* 讓我喘口氣吧！',
                  '<32>{#w.startThatGoat}{#s/equip}{#p/event}* 滴...'
               ],
      w_bridge: [
         '<25>{#p/toriel}{#f/1}* 通往前哨站\n  其它地方的橋啊...',
         '<25>{#f/5}* 我之前差點把它給毀了，\n  想想就後怕。',
         '<25>{#f/0}* 當然啦，就算沒有橋，\n  也可以乘坐運輸船。',
         '<25>{#f/3}* 不過，那樣估計\n  就沒那麼方便了。',
         '<25>{#f/1}* 慶幸這座橋還在吧。'
      ],
      w_exit: () =>
         SAVE.data.n.plot < 16
            ? [
               '<25>{#p/toriel}{#f/1}* 你要離開外域了嗎，孩子...',
               '<25>{#f/0}* 那麼...\n  我希望你記住一件事。',
               '<25>{#f/1}* 無論發生什麼事，\n  無論遇到什麼困難...',
               '<25>{#f/0}* 都要記住，\n  我相信你。',
               '<25>{#f/0}* 我相信你會\n  做出正確的事。',
               '<25>{#f/1}* 記住我的話，好嗎？'
            ]
            : SAVE.data.n.plot < 17.001
               ? [
                  '<25>{#p/toriel}{#f/1}* 這麼快就回來了...？',
                  '<25>{#f/0}* 也行吧。\n* 我當然不會反對。',
                  '<25>{#f/1}* 你想什麼時候走\n  都沒關係...',
                  '<25>{#f/0}* 不過，你能回來看看，\n  我還是很高興的。'
               ]
               : [
                  '<25>{#p/toriel}{#f/2}* 你在那裡\n  站了多久了！？',
                  '<25>{#f/1}* 你大老遠跑回來，\n  只是為了\n  給我打個電話嗎？',
                  '<25>{#f/0}* ...小傻瓜。',
                  '<25>{#f/0}* 你若只是想打個電話，\n  用不著往回走這麼遠的。'
               ],
      w_toriel_front: [
         '<25>{#p/toriel}{#f/1}* 你知道嗎？\n  這座房子其實是仿造的。',
         '<25>{#f/1}* 以前我住在首塔...',
         '<25>{#f/0}* 這房子就是照著\n  那邊的房子建的。',
         '<25>{#f/5}* 有時候我還會恍惚，\n  以為自己還在那裡呢...'
      ],
      w_toriel_hallway: [
         '<25>{#p/toriel}{#f/0}* 走廊這裡\n  沒啥好說的。',
         '<26>{#f/1}* 不過，你要是願意，\n  可以照照鏡子...',
         '<25>{#f/0}* 我聽說沒事照照鏡子，\n  能讓人有所感悟。'
      ],
      w_toriel_asriel: [
         '<25>{#p/toriel}{#f/0}* 啊，這是你的房間！',
         '<25>{#f/5}* 你的... 房間...',
         '<25>{#f/9}* ...',
         '<25>{#f/5}* 也可能已經不是了。',
         '<25>{#f/1}* ...',
         '<25>{#f/1}* 其實，\n  你自己決定就好...',
         '<25>{#f/0}* 你要是想休息，\n  隨時都可以來。'
      ],
      w_toriel_toriel: [
         '<25>{#p/toriel}{#f/0}* 你跑來我房間了啊。',
         '<25>{#f/0}* 想看書的話，\n  隨便拿就是了。',
         '<25>{#f/0}* 不過看完記得放回去。',
         "<25>{#f/23}* 還有啊，\n  不許亂翻襪子抽屜！"
      ],
      w_toriel_living: () =>
         toriCheck()
            ? ['<25>{#p/toriel}{#f/3}* 我就在這呢，\n  用不著打電話，小傢伙。']
            : [
               '<25>{#p/toriel}{#f/1}* 你這是\n  在客廳裡翻箱倒櫃呢？',
               '<25>{#f/0}* 我說，\n* 那些書你都看完了嗎？',
               '<25>{#f/1}* 我本來想給你讀讀\n  那本關於蝸牛的書...',
               '<25>{#f/0}* 不過想了想，\n  你可能已經\n  不想再聽到「蝸牛」了。'
            ],
      w_toriel_kitchen: [
         '<25>{#p/toriel}{#f/1}* 廚房啊...',
         '<25>{#f/0}* 我在冰箱裡\n  給你留了條巧克力。',
         '<25>{#f/0}* 聽說... \n  你們人類都愛吃這個。',
         '<25>{#f/1}* 希望你能喜歡它...'
      ],
      s_start: () =>
         SAVE.data.n.plot < 17.001
            ? [
               '<25>{#p/toriel}{#f/0}* 如果我沒猜錯的話，\n  我的某個朋友\n  應該就在前面。',
               '<26>{#f/0}* 別害怕，小傢伙。',
               '<25>{#f/1}* 繼續往前走...'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 我記得...',
               '<26>{#f/0}* ...這條長路，本來是打算\n  建星港的城郊小鎮的。',
               '<25>{#f/0}* 當然啦，\n  後來沒有建成。',
               '<25>{#f/2}* 一個鎮子已經夠多了！'
            ],
      s_sans: () =>
         SAVE.data.n.plot < 17.001
            ? [
               '<25>{#p/toriel}{#f/0}* 如果我沒猜錯的話，\n  我的某個朋友\n  應該就在前面。',
               '<26>{#f/0}* 別害怕，小傢伙。',
               '<25>{#f/1}* 繼續往前走...'
            ]
            : [
               '<25>{#p/toriel}{#f/1}* 你應該聽說過\n  「重力轉換器」吧？',
               '<26>{#f/0}* Sans跟我說了不少\n  有關這玩意兒的事。',
               '<25>{#f/1}* 似乎這上面\n  還有另一個世界...',
               '<25>{#f/0}* 那裡的東西\n  都是反著長的。'
            ],
      s_crossroads: [
         '<25>{#p/toriel}{#f/1}* 這個老停靠點以前\n  就像個繁忙的十字路口...',
         '<25>{#f/1}* 補給飛船來來往往...',
         '<25>{#f/1}* 隨時準備支援\n  下一個建設專案...',
         '<25>{#f/5}* 可惜，這個前哨站\n  好像不再擴張了。',
         '<25>{#f/0}* 想當年，建設新區域\n  可是我們的文化標誌啊！'
      ],
      s_human: [
         "<25>{#p/toriel}* 聽說Sans的兄弟\n  以後想加入皇家衛隊。",
         '<25>{#f/1}* 這小骷髏還挺有志向的...',
         '<25>{#f/0}* 雖然我對衛隊不太感冒，\n  但他有夢想是好事。',
         '<25>{#f/5}* 最近有好多人\n  都放棄夢想了...',
         '<25>{#f/0}* 但他沒有！\n* 這小骷髏知道\n  什麼對他自己最好。'
      ],
      s_papyrus: [
         '<25>{#p/toriel}* Sans跟我說了好多\n  Papyrus在他崗位上\n  加裝的小玩意兒。',
         '<25>{#f/1}* 有一個把手，\n  說是能方便他\n  「大搖大擺」地上崗...',
         '<25>{#f/1}* 有一個所謂的\n  「天空扳手」，\n  說是用來「鎖定」星星的...',
         '<25>{#f/0}* 還有一個附加的屏幕，\n  說是用來記錄\n  他那堆職責的。',
         '<25>{#f/6}* 他搞這些發明，\n  不知道的還以為\n  他在實驗室上班呢。'
      ],
      s_doggo: [
         '<25>{#p/toriel}{#f/5}* 皇家衛隊是不是\n  老找你麻煩？',
         '<25>{#f/0}* Sans說他會提醒你\n  可能會碰上他們。',
         '<25>{#f/1}* ...',
         '<25>{#f/1}* 也許我該多操點心，\n  不過...',
         '<25>{#f/0}* 直覺告訴我\n  你不會有事的。',
         '<25>{#f/0}* 我相信\n  那傢伙會照顧好你的。'
      ],
      s_robot: [
         '<25>{#p/toriel}{#f/1}* 啊，這聲音真好聽...',
         '<25>{#f/0}* 我無論到了哪都能認出\n  建築機器人的聲音。',
         '<25>{#f/5}* 自從AI程式被禁用後，\n  我們就停用了\n  大部分建築機器人。',
         '<25>{#f/1}* 不過有兩個\n  產生了自我意識，\n  但沒有出問題的機器人...',
         '<25>{#f/0}* 得到了體面的退休。',
         '<25>{#f/0}* 很高興知道\n  它們現在還活著。'
      ],
      s_maze: [
         "<25>{#p/toriel}* Sans跟我講過\n  他的兄弟有多愛謎題。",
         '<25>{#f/1}* 聽說他的兄弟\n  還自己設計了一些...？',
         '<25>{#f/0}* 我最好奇的是\n  那個「躲避烈火之牆」。',
         '<25>{#f/1}* 那火燙不燙？\n* 還是說只是暖烘烘的？',
         '<25>{#f/5}* 為了你好，\n  我希望是後者。'
      ],
      s_dogs: [
         '<25>{#p/toriel}{#f/1}* 聽說有一對狗夫婦\n  加入了皇家衛隊。',
         '<25>{#f/3}* 又是皇家守衛\n  又是夫妻...',
         '<25>{#f/4}* That relationship must have some \"interesting\" motivations.',
         '<25>{#f/6}* But what do I know.\n* As Sans would say, I am merely a \"goat!\"'
      ],
      s_lesser: [
         '<25>{#p/toriel}* 也不知道現在\n  星港都流行吃啥。',
         '<25>{#f/1}* 我上次到那兒時，\n  大家都愛吃幽靈水果...',
         '<25>{#f/0}* 那玩意兒挺奇怪的，\n  是不是幽靈都能吃。',
         '<26>{#f/0}* 現在流行啥\n  我肯定猜不到，\n  估計我做夢都想不到。'
      ],
      s_bros: [
         "<25>{#p/toriel}{#f/1}* Sans居然喜歡玩\n  那種「找不同」的謎題...",
         '<25>{#f/0}* ...我一直都沒搞明白。',
         '<25>{#f/1}* 那麼簡單的謎題，\n  他怎麼會覺得有意思呢？',
         '<26>{#f/3}* ...更具體來說...',
         '<25>{#f/1}* 這種謎題到底\n  哪裡好笑了？'
      ],
      s_spaghetti: [
         "<25>{#p/toriel}* Sans常說他兄弟Papyrus\n  特喜歡義大利麵。",
         '<25>{#f/6}* 但為啥只吃一種呢？\n* 想想還有那麼多種\n  義大利麵...',
         '<25>{#f/8}* 斜管面！\n* 寬面！\n* 珍珠面！',
         '<25>{#f/0}* 吃吃蝴蝶面\n  才能展翅高飛嘛。',
         '<25>{#f/2}* ...換句話說，要麼\n  像粗面一樣做大做強，\n  要麼回家歇著！'
      ],
      s_puzzle1: [
         '<25>{#p/toriel}{#f/1}* 星港現在的那些謎題，\n  不管啥樣吧...',
         '<25>{#f/0}* 我估計肯定跟\n  我以前離開的時候\n  不一樣了。',
         '<25>{#f/5}* 以前的謎題\n  難度高得離譜...',
         '<25>{#f/5}* 也不知道那時候\n  到底有沒有人能解開。'
      ],
      s_puzzle2: [
         '<25>{#p/toriel}{#f/1}* 有人說一些謎題\n  有隱藏的解法...',
         '<25>{#f/0}* ...我覺得純屬扯淡！',
         '<25>{#f/0}* 藏著什麼秘密解法，\n  不是完全違背了\n  解謎的初衷嗎？',
         '<25>{#f/1}* 謎題啊，至少那種\n  難度正常的謎題...',
         '<25>{#f/2}* 就應該按照\n  設計者的思路去解！'
      ],
      s_jenga: [
         '<25>{#p/toriel}* 據我所知，\n  現在的皇家科學員\n  是Alphys博士。',
         '<25>{#f/1}* 雖然她可能比不上前任\n  那麼經驗豐富...',
         '<25>{#f/0}* 但我相信她完全有能力\n  走出自己的一條路。',
         '<25>{#f/0}* 你可能會覺得意外，\n  但我其實挺佩服\n  那些科學員的。',
         '<25>{#f/2}* 他們的腦袋\n  實在太聰明了！'
      ],
      s_pacing: [
         '<25>{#p/toriel}{#f/1}* 我勸你還是離那些\n  可疑的商人遠點...',
         '<25>{#f/0}* 鬼知道他們\n  葫蘆裡賣的什麼藥。',
         '<25>{#f/0}* 你可能會被忽悠\n  而買了一堆破石頭。',
         '<25>{#f/3}* 很不幸，\n  我就是吃了這虧\n  才明白這個道理的...'
      ],
      s_puzzle3: [
         '<25>{#p/toriel}{#f/1}* 這個房間的謎題\n  是考驗記憶力的吧？',
         '<25>{#f/1}* Sans說他的兄弟\n  經常更換它的圖案...',
         '<25>{#f/0}* ...只為了維持\n  「滾動密碼」的安全性。',
         '<25>{#f/6}* 真是搞笑！',
         '<25>{#f/0}* 在我們外域，\n  考驗記憶力的謎題\n  都是能現改現玩的。'
      ],
      s_greater: [
         '<25>{#p/toriel}{#f/1}* 那個狗窩以前\n  是Canis Maximus的...',
         '<25>{#f/0}* ...它早就從衛隊退休了。',
         '<25>{#f/7}* 好在現在住那兒的小狗\n  也特別活潑！',
         '<25>{#f/0}* 看來它從\n  它英明神武的師父那兒\n  學到了不少東西。'
      ],
      s_math: [
         '<25>{#p/toriel}{#f/1}* 拜託，\n  誰能給我解釋解釋\n  啥叫「狗子的公道」啊？',
         '<25>{#f/0}* 我時不時就聽到\n  這個奇怪的說法。',
         '<25>{#f/5}* 我倒是知道有隻小狗狗\n  偶爾會來外域逛逛...',
         '<25>{#f/0}* 說不定就是它\n  需要主持公道。'
      ],
      s_bridge: [
         '<25>{#p/toriel}{#f/1}* 這座橋剛建好的時候，\n  它搖搖欲墜...',
         "<25>{#f/0}* 導致前哨站的系統\n  不得不升級。",
         '<25>{#f/0}* 沒多久，\n  他們就加裝了一個\n  叫「重力護欄」的東西。',
         '<25>{#f/0}* 就是這玩意沒讓你\n  從平臺上掉下去。'
      ],
      s_town1: [
         '<25>{#p/toriel}{#f/0}* 啊...\n* 這是星港的小鎮。',
         '<25>{#f/1}* 我聽說那兒有個\n  叫「Grillby\'s」的餐館...',
         '<25>{#f/0}* ...裡面有很多\n  千奇百怪的新老顧客。',
         '<25>{#f/0}* Sans也經常去那兒吃飯。',
         '<25>{#f/7}* 聽說那兒的酒保\n  很「燒」。'
      ],
      s_taxi: [
         '<25>{#p/toriel}{#f/1}* 小鎮附近\n  有個運輸船停靠站嗎？',
         '<25>{#f/1}* ...嗯...',
         '<25>{#f/0}* 不知道那個\n  跟外域的這個停靠站\n  有啥不一樣。',
         '<25>{#f/1}* 當然啦，\n  不親眼看看我哪知道啊...',
         '<25>{#f/0}* 但我又沒有高檔望遠鏡，\n  這可怎麼咋看呢？',
         '<25>{#f/0}* 也不知道上哪兒\n  才能搞到一個。'
      ],
      s_town2: [
         '<25>{#p/toriel}{#f/1}* Napstablook最近跟我說\n  它開了個店...',
         '<25>{#f/5}* ...在鎮子「南邊」\n  開了個店。',
         '<25>{#f/1}* 這是怎麼回事？',
         '<25>{#f/0}* 我記得當初規劃的時候，\n  整個小鎮就是\n  一個大方塊啊。',
         '<25>{#f/1}* 難道後來給分成兩半了？',
         '<25>{#f/5}* 要真是那樣就太可惜了，\n  畢竟當初的設想\n  可不是這樣的...'
      ],
      s_battle: [
         '<25>{#p/toriel}{#f/1}* Sans跟我反覆強調...',
         '<25>{#f/0}* 一定要小心他的兄弟的\n  什麼「特殊攻擊」。',
         '<25>{#f/1}* 要是Papyrus找你切磋，\n  你一定要避開\n  他的特殊攻擊。',
         '<25>{#f/2}* 再說一遍，一定要避開\n  他的特殊攻擊！\n* 千萬別被打到！',
         '<25>{#f/0}* 關於這事我就說這麼多。'
      ],
      s_exit: [
         '<25>{#p/toriel}{#f/1}* 如果你打算離開星港，\n  你得明白...',
         '<25>{#f/5}* 我的手機太老了，\n  只能打到\n  工廠裡的個別房間。',
         '<25>{#f/9}* 你找到出去的路之前，\n  可能聯繫不上我。',
         '<25>{#f/1}* 請別見怪。\n* 但我覺得應該\n  提前跟你說一聲。'
      ],
      f_entrance: [
         '<25>{#p/toriel}{#f/7}* 你找到\n  訊號好的地方啦...？',
         '<25>{#f/1}* ...看來那裡比較開闊...',
         '<25>{#f/0}* 附近還有\n  人工合成的灌木叢。',
         '<25>{#f/3}* 要是鑽進了那玩意...',
         '<25>{#f/4}* 渾身上下會又癢又難受...',
         '<25>{#f/0}* 不過我相信\n  你肯定不會傻到往裡鑽的。'
      ],
      f_bird: () =>
         SAVE.data.n.plot !== 47.2 && SAVE.data.n.plot > 42 && SAVE.data.s.state_foundry_deathroom !== 'f_bird' // NO-TRANSLATE

            ? [
               '<25>{#p/toriel}{#f/0}* 沒有什麼比得上\n  那隻無畏小鳥的啾啾聲。',
               '<25>{#f/1}* 就算是當年\n  它還在水桶裡住著時...',
               '<25>{#f/1}* 它也會撲騰著\n  它那小小的翅膀...',
               '<25>{#f/1}* 帶著我們到處跑...',
               '<25>{#f/0}* 我經常讓它\n  幫忙運送雜貨。',
               '<25>{#f/5}* ...那會兒我們這個物種\n  還都擠在\n  那個舊工廠裡生活呢。'
            ]
            : [
               '<25>{#p/toriel}{#f/5}* 你那邊聽起來好寂靜啊...',
               '<25>{#f/5}* 總感覺少了點什麼。',
               '<25>{#f/5}* 少了點什麼重要的東西...',
               '<25>{#f/0}* 算了，別在意。\n* 我可能想太多了。',
               '<25>{#f/1}* ...',
               '<25>{#f/1}* 啾，啾，\n  啾，啾，\n  啾...'
            ],
      f_taxi: [
         "<25>{#p/toriel}{#f/1}* 這麼說你找著了\n  工廠的運輸船停靠站...？",
         '<25>{#f/0}* 那兒說不定可以用來\n  躲開皇家衛隊隊長呢。',
         '<25>{#f/1}* 之前有個訪客跟我說過，\n  衛隊長她\n  特別痴迷於長矛...',
         '<25>{#f/0}* 真奇怪。\n* 我認識的那個衛隊長\n  明明喜歡的是佩刀啊。'
      ],
      f_battle: [
         '<25>{#p/toriel}{#f/0}* 啊，你終於到了。',
         "<25>{#f/0}* 你現在在工廠的邊緣了。",
         '<26>{#f/1}* 從這裡往前，\n  我就不知道\n  前面是什麼地方了...',
         '<25>{#f/5}* 我離開的時候，\n  那兒只有\n  通往首塔的電梯。',
         '<25>{#f/1}* 不過現在嘛，\n  好像多了個\n  叫「空境」的地方...',
         '<25>{#f/23}* ...也不知道是誰\n  取的這麼個名字。'
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

         ? ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* 現在，立刻，馬上\n  回家裡來！']
         : [
            3 <= SAVE.data.n.cell_insult
               ? '<25>{#p/toriel}{#f/23}* 你那樣對待我，\n  難道不累嗎？'
               : SAVE.data.n.state_wastelands_napstablook === 5
                  ? '<25>{#p/toriel}{#f/1}* 你等了那麼久，\n  難道不累嗎？'
                  : '<25>{#p/toriel}{#f/1}* 你經歷了那麼多，\n  難道不累嗎？',
            3 <= SAVE.data.n.cell_insult
               ? game.room.startsWith('w_toriel') // NO-TRANSLATE

                  ? '<25>{#f/0}* 要不要去看看\n  我在客房裡\n  為你準備的床？'
                  : '<25>{#f/0}* 要不要去看看\n  我在房子裡\n  為你準備的床？'
               : game.room.startsWith('w_toriel') // NO-TRANSLATE

                  ? '<25>{#f/0}* 來走廊這邊，\n  我給你看點東西。'
                  : '<25>{#f/0}* 來房子這邊，\n  我給你看點東西。'
         ],
   c_call_toriel_late: () =>
      SAVE.data.n.plot === 8.1
         ? ['<32>{#p/human}* （對方忙線中。）']
         : game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

            ? ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* 現在，立刻，馬上\n  回家裡來！']
            : [
               '<25>{#p/toriel}{#f/1}* 孩子，用不著給我打電話。',
               3 <= SAVE.data.n.cell_insult
                  ? '<26>{#f/23}* 你打算說什麼，\n  我們都清楚得很。'
                  : game.room === 'w_toriel_living' // NO-TRANSLATE

                     ? toriCheck()
                        ? '<25>{#f/0}* 畢竟，我現在和你\n  在一間屋子裡呢。'
                        : '<25>{#f/0}* 我馬上就搞定了。'
                     : game.room.startsWith('w_toriel') // NO-TRANSLATE

                        ? toriCheck()
                           ? '<25>{#f/0}* 如果你想見我，\n  可以來客廳。'
                           : '<25>{#f/0}* 如果你想見我，\n  可以在客廳等著。'
                        : '<25>{#f/0}* 如果你想見我，\n  可以來我的房子這邊。'
            ],
   c_call_asriel: () =>
      [
         [
            "<25>{#p/asriel2}{#f/3}* 知道了吧，我不會接的。",
            '<25>{#p/asriel2}{#f/4}* 咱可沒閒工夫打電話玩。'
         ],
         ['<25>{#p/asriel2}{#f/4}* ...'],
         ['<25>{#p/asriel2}{#f/4}* ...開玩笑嗎？'],
         ['<25>{#p/asriel2}{#f/3}* 吃飽了撐的。'],
         []
      ][Math.min(SAVE.flag.n.ga_asrielCall++, 4)],
   s_save_outlands: {
      w_courtyard: {
         name: '外域 - 空地',
         text: () =>
            SAVE.data.n.plot > 16
               ? [
                  6 <= world.population
                     ? '<32>{#p/human}* （即使只是來拜訪這個小小的家，\n  這也使你充滿了決心。）'
                     : '<32>{#p/human}* （即使只是來拜訪這個小屋，\n  這也使你充滿了決心。）'
               ]
               : 6 <= world.population
                  ? ['<32>{#p/human}* （面前是一座溫馨的小房子，\n  這使你充滿了決心。）']
                  : ['<32>{#p/human}* （四周都是金屬圍牆，\n  眼前卻有一座小屋，\n  這使你充滿了決心。）']
      },
      w_entrance: {
         name: '外域 - 入口',
         text: () =>
            world.runaway
               ? [
                  '<32>{#p/human}* （繁忙的外域如今一片死寂，\n  這使你充滿了決心。）',
                  '<32>{#p/human}* （HP已回滿。）'
               ]
               : SAVE.data.n.plot < 48
                  ? [
                     '<32>{#p/human}* （繁忙的外域就在前方，\n  這使你充滿了決心。）',
                     '<32>{#p/human}* （HP已回滿。）'
                  ]
                  : [
                     '<32>{#p/human}* （過了這麼久，\n  你回到了一切開始的地方...）',
                     '<32>{#p/human}* （這使你充滿了決心。）',
                     '<32>{#p/human}* （HP已回滿。）'
                  ]
      },
      w_froggit: {
         name: '外域 - 休息區',
         text: () =>
            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway || roomKills().w_froggit > 0
               ? SAVE.data.n.plot < 8.1
                  ? [
                     '<32>{#p/human}* （空氣變得渾濁了起來。）\n* （不知怎地，這使你充滿了決心。）',
                     '<32>{#p/human}* （HP已回滿。）'
                  ]
                  : [
                     '<32>{#p/human}* （這裡變得死氣沉沉。）\n* （當然，這使你充滿了決心。）',
                     '<32>{#p/human}* （HP已回滿。）'
                  ]
               : SAVE.data.b.svr
                  ? [
                     '<32>{#p/human}* （這裡雖然已經空無一人，\n  但空氣依然清新。）',
                     '<32>{#p/human}* （當然，這使你充滿了決心。）',
                     '<32>{#p/human}* （HP已回滿。）'
                  ]
                  : [
                     '<32>{#p/human}* （見到這些奇異的生物\n  使你充滿了決心。）',
                     '<32>{#p/human}* （HP已回滿。）'
                  ]
      },
      w_mouse: {
         name: '外域 - 䗌蟎巢',
         text: () =>
            world.population > 5 && !SAVE.data.b.svr && !world.runaway
               ? [
                  '<32>{#p/human}* （想到䗌蟎有朝一日會探出頭來...）',
                  '<32>{#p/human}* （你充滿了蚗心。）'
               ]
               : [
                  '<32>{#p/human}* （就算䗌蟎大概\n  再也不會探出頭來...）',
                  '<32>{#p/human}* （你還是充滿了蚗心。）'
               ]
      },
      w_start: {
         name: '墜落點',
         text: []
      }
   }
};


// END-TRANSLATE
