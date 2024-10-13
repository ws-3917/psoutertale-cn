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
            '<32>{#p/human}* （你祈禱，這只是一場惡夢。）'
         ],
         [
            '<32>{#p/human}* （你拼命想從那黑暗中掙脫出來。）',
            '<32>{#p/human}* （你竭盡全力與之抗爭，\n  但無濟於事。）'
         ],
         [
            '<32>{#p/human}* （你大聲呼救，但誰也沒有來。）',
            '<32>{#p/human}* （你別無所求，只希望能徹底解脫。）'
         ],
         [ '<32>{#p/human}* （...）', '<32>{#p/human}* （你深吸一口氣，\n  準備迎接最終的結局。）' ],
         [ '<32>{#p/human}* （...）', '<32>{#p/human}* （你已做好準備。）' ]
      ],
      hypertext: {
         count: '$(x)秒後重啟',
         death1: [ '{#p/human}（你深吸了一口氣。）', "（你充滿了決心。）" ],
         death2: [
            "{#p/human}{#v/1}{@fill=#42fcff}失敗了沒關係...",
            '{@fill=#42fcff}沉住氣，再來一次吧...'
         ],
         death3: [ '{#p/human}{#v/2}{@fill=#ff993d}可別在這時候就放棄。', '{@fill=#ff993d}起來，繼續作戰！' ],
         death4: [ "{#p/human}{#v/3}{@fill=#003cff}相信自己能行的。", "{@fill=#003cff}別退縮！" ],
         death5: [
            '{#p/human}{#v/4}{@fill=#d535d9}活過這輪不成問題...',
            '{@fill=#d535d9}繼續前進。'
         ],
         death6: [
            "{#p/human}{#v/5}{@fill=#00c000}整個世界都指望你了...",
            '{@fill=#00c000}相信自己！'
         ],
         death7: [ "{#p/human}{#v/6}{@fill=#faff29}他早晚會敗下陣來。" ],
         cyan1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某個迷失靈魂呼喚著你。',
            '<99>{*}{@fill=#faff29}依靠{@mystify=耐心而忖恧㤈耏寸}耐心{@mystify=}，將會有望逃脫。',
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}幫我拿回小熊座...',
            '<99>{*}{#p/human}（按[Z]傳送。）'
         ],
         cyan2: [
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}那個存在，正伺機而動。',
            '<99>{*}{@fill=#42fcff}有了耐心，你就能挺住不敗...'
         ],
         orange1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某個迷失靈魂呼喚著你。',
            '<99>{*}{@fill=#faff29}憑藉{@mystify=勇氣勈氣甬気力乞}勇氣{@mystify=}，或將擺脫束縛。',
            "<99>{*}{#p/human}{#v/2}{@fill=#ff993d}別忘了我的超能手套！",
            '<99>{*}{#p/human}（按[Z]釋放衝擊波。）'
         ],
         orange2: [
            '<99>{*}{#p/human}{#v/2}{@fill=#ff993d}那個存在，正不斷靠近...',
            '<99>{*}{@fill=#ff993d}有了勇氣，就能重拳出擊！'
         ],
         blue1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某個迷失靈魂呼喚著你。',
            '<99>{*}{@fill=#faff29}堅守{@mystify=正直㱏十止且上目}正直{@mystify=}，必定能夠逃脫。',
            "<99>{*}{#p/human}{#v/3}{@fill=#003cff}幫我帶回我最信賴的懸浮靴。"
         ],
         blue2: [
            '<99>{*}{#p/human}{#v/3}{@fill=#003cff}那個存在，正立於一處。',
            '<99>{*}{@fill=#003cff}堅守正直，你就能迎難而上。'
         ],
         purple1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某個迷失靈魂呼喚著你。',
            '<99>{*}{@fill=#faff29}擁有{@mystify=毅力䝘刀豙萬殳勹}毅力{@mystify=}，定可擺脫束縛。',
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}一臺平板電腦就能伴你遠行。'
         ],
         purple2: [
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}那個存在，已不再穩定。',
            '<99>{*}{@fill=#d535d9}擁有毅力，怎會輕言放棄？'
         ],
         green1: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}某個迷失靈魂呼喚著你。',
            '<99>{*}{@fill=#faff29}心懷{@mystify=善良譱艮言㫐羊哴}善良{@mystify=}，終能衝破枷鎖。',
            '<99>{*}{#p/human}{#v/5}{@fill=#00c000}請用那架塔布拉木琴解救我！'
         ],
         green2: [
            '<99>{*}{#p/human}{#v/5}{@fill=#00c000}那個存在，正土崩瓦解...',
            '<99>{*}{@fill=#00c000}心懷善意，定會立於不敗之地...'
         ],
         yellow: [
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}迷失的靈魂呼喚了你。',
            '<99>{*}{@fill=#faff29}秉持正義，你一一回應。',
            '<99>{*}{@fill=#faff29}將他們從牢籠中解放。',
            '<99>{*}{#p/human}{#v/1}{@fill=#42fcff}終於啊。',
            "<99>{*}{#p/human}{#v/2}{@fill=#ff993d}大英雄！",
            "<99>{*}{#p/human}{#v/3}{@fill=#003cff}幹得好。",
            '<99>{*}{#p/human}{#v/4}{@fill=#d535d9}謝謝你...',
            "<99>{*}{#p/human}{#v/5}{@fill=#00c000}太棒了...！",
            '<99>{*}{#p/human}{#v/6}{@fill=#faff29}我們的力量歸你了。',
            '<99>{*}{@fill=#faff29}有了這些力量，就能徹底擊敗那東西。',
            '<99>{*}{@fill=#faff29}事成之後...',
            '<99>{*}{@fill=#faff29}...去做你必須要做的事吧。',
            '<99>{*}{@fill=#faff29}現在，結果了它！',
            '<99>{*}{#p/human}（按[Z]射擊。）'
         ],
         boot: '重啟中...',
         init: '已就位',
         warn: '警告...',
         file1saved: '存檔1 已儲存',
         file1loaded: '存檔1 已載入',
         file2saved: '存檔2 已儲存',
         file2loaded: '存檔2 已載入',
         file3saved: '存檔3 已儲存',
         file3loaded: '存檔3 已載入',
         file4saved: '存檔4 已儲存',
         file4loaded: '存檔4 已載入',
         file5saved: '存檔5 已儲存',
         file5loaded: '存檔5 已載入',
         file6saved: '存檔6 已儲存',
         file6loaded: '存檔6 已載入'
      },
      noequip: [ '<32>{#p/human}* （你打算不這麼做。）' ],
      genotext: {
         monologue: [
            (re: boolean) => [
               ...(re
                  ? [ '<26>{#p/asriel2}{#f/13}* 我之前說到...' ]
                  : [ "<25>{#p/asriel2}{#f/13}* 其實..." ]),
               "<25>{#f/16}* ...我早就親手毀滅過\n  這該死的前哨站。",
               "<25>{#f/15}* 一次又一次，一次又一次...\n* 呵，我早就記不清\n  自己看過多少條時間軸了。",
               '<25>{#f/23}* 可是...',
               "<25>{#f/16}* 我縱使可以隨心所欲，\n  但一直覺得... 缺點什麼。"
            ],
            (re: boolean) => [
               '<25>{#p/asriel2}{#f/15}* 那時，我從昏迷中甦醒。\n  卻發現自己變成了一顆星星。',
               "<25>{#f/16}* 我沒有手，沒有腿，\n  什麼都做不了。",
               "<25>{#f/13}* 我不知所措，希望有人\n  能來幫助我，關心我...",
               '<25>{#f/13}* 我大聲呼救...',
               '<25>{#f/23}* 我竭力呼喊...',
               '<25>{#f/7}* ...',
               '<25>{#f/6}* ...但是誰也沒有來。'
            ],
            (re: boolean) => [
               ...(re
                  ? [ "<25>{#p/asriel2}{#f/6}* 之前說到，再度甦醒後，\n  星星身的我再也無法\n  回歸正常生活了。" ]
                  : []),
               "<25>{#p/asriel2}{#f/15}* 我不僅失去四肢，\n  更失去了「愛與被愛」的能力。",
               '<25>{#f/23}* 我很害怕，我很憂慮。\n* 我別無所求，\n  只希望能讓一切恢復正常。',
               "<25>{#f/13}* 所以，我去找父親，\n  希望他能救救我。",
               "<25>{#f/17}* 父親說，會一直照顧我...",
               "<25>{#f/13}* ...但他再怎麼努力，\n  終究治標不治本。"
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       "<25>{#p/asriel2}{#f/13}* 之前說到，再度甦醒後，\n  我變成了一顆星星，\n  再也無法回歸正常生活了。",
                       "<25>{#f/13}* 既然父親救不了我...",
                       '<25>{#f/16}* 那我就去找母親了。'
                    ]
                  : [ '<26>{#p/asriel2}{#f/16}* 父親救不了我，\n  那就去找母親吧。' ]),
               "<25>{#f/13}* 我心想...\n  找她肯定靠譜。",
               "<25>{#f/17}* 以前，她那麼關心我...",
               "<25>{#f/23}* 所以，世上最有能力\n  解救我的人，就是她。"
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       "<25>{#p/asriel2}{#f/13}* 之前說到，再度甦醒後，\n  我變成了一顆星星，\n  再也無法回歸正常生活了。",
                       "<26>{#f/16}* 我把希望寄託於我的父母，\n  但他們啥都沒幫上。"
                    ]
                  : [ "<25>{#p/asriel2}{#f/16}* ...但她也失敗了。" ]),
               "<25>{#f/13}* 一想到自己要永遠\n  當顆星星...",
               '<25>{#f/13}* 一想到誰都救不了自己...',
               '<26>{#f/23}* 我就想馬上去死。',
               '<25>{#f/15}* 我放棄了一切... 選擇自盡。',
               '<25>{#f/16}* ...可是...\n* 當「死亡」來臨時...',
               '<25>{#f/7}* 眼前卻突然閃過許多\n  撲朔迷離的景象...',
               '<25>{#f/6}* 之後，我猛然發現自己\n  又回到了醒來的時間點。'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       '<25>{#p/asriel2}{#f/10}* 我們剛才說到哪了？',
                       '<26>{#f/6}* ...想起來了。\n* 我又回到了醒來的時間點。'
                    ]
                  : []),
               "<25>{#p/asriel2}{#f/13}* 一開始，我也納悶\n  為什麼會「回來」...",
               '<25>{#f/15}* ...所以，我做了個實驗。\n  看看能不能主動回溯時間。',
               '<25>{#f/16}* 我屏息凝神，集中注意力。\n* 於是... 時間回溯了。',
               "<25>{#f/15}* 我非常吃驚...",
               "<25>{#f/17}* 自己居然獲得了\n  「回溯時間」的能力。",
               "<25>{#f/23}* 一開始，我想用這種能力\n  做點好事。",
               "<25>{#f/15}* 所謂「助人自助」，\n  既然我做不到「自助」...",
               '<25>{#f/16}* 起碼還能「助人」。'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       '<25>{#p/asriel2}{#f/10}* 我們剛才說到哪了？',
                       '<25>{#f/16}* ...想起來了。\n* 一開始，我用「時間回溯」的能力\n  幫助怪物。'
                    ]
                  : []),
               "<25>{#p/asriel2}{#f/23}* 其實，做好事並不容易。\n* 一開始，給他們幹活\n  總要花很大的力氣。",
               '<25>{#f/15}* ...漸漸地，\n  我越做越熟練了。',
               '<25>{#f/5}* 很快，那些活\n  我閉眼睛都能幹好。',
               '<25>{#f/9}* 嘿嘿，我還真試過呢。',
               '<25>{#f/13}* 把這事掛在嘴邊，\n  好像是在炫耀...',
               '<25>{#f/9}* 但說到底...\n  我幹得再快，幫得再多，\n  又有什麼用呢？',
               '<25>{#f/5}* 幫得再多，\n  我也救不了自己...',
               '<25>{#f/15}* 儘管如此，\n  我還是努力幫助他們，\n  拯救他們...',
               '<25>{#f/15}* 努力做個好人。'
            ],
            (re: boolean) => [
               ...(re ? [ '<25>{#p/asriel2}{#f/15}* 之前說到，\n  一開始，我努力幫助別人。' ] : []),
               '<25>{#p/asriel2}{#f/16}* 但很快，\n  我發現不對勁。',
               '<25>{#f/15}* 無論重置多少次...',
'<25>{#f/15}* 他們的回答永遠是那幾句，\n  故事的結局永遠是那一種...',
               "<25>{#f/16}* 「做個好人」開始變得無聊了。",
               '<25>{#f/6}* 你想說，\n  「那就試試別的行動唄？」',
'<25>{#f/6}* 呵，什麼調情、約會、挑逗...\n  早試過了。',
               '<25>{#f/7}* 做多了，也就膩了。',
               "<25>{#f/10}* 我當然可以繼續循環，\n  但有什麼意思呢？",
               '<25>{#f/6}* 該換換口味了。'
            ],
            (re: boolean) => [
               ...(re
                  ? [ "<25>{#p/asriel2}{#f/6}* 之前說到，\n  我當老好人當膩了。" ]
                  : []),
               "<25>{#p/asriel2}{#f/4}* 不過，一開始\n  我不想對他們太壞。",
               '<25>{#f/3}* 說點狠話，罵罵人，\n  就差不多了。',
               '<25>{#f/10}* 有時我會感覺心虛，難過。\n* 但轉念一想，也沒多惡劣。',
               '<25>{#f/6}* 如果我發現\n  人們的反應又開始重複，\n  我就更狠一點。',
               '<25>{#f/8}* 這裡罵一句，那裡懟一句。',
               '<25>{#f/7}* 罵得多，就不在乎了。',
               "<25>{#f/9}* 那段時間，\n  我最多只是耍耍嘴皮子。\n* 從沒動過手，更沒殺過人。"
            ],
            (re: boolean) => [
               ...(re ? [ "<26>{#p/asriel2}{#f/4}* 之前說到，\n  我開始罵他們，懟他們了。" ] : []),
               '<25>{#p/asriel2}{#f/15}* 「言語攻擊」玩膩了，\n  我又想... \n  要不試試動手揍人？',
               "<25>{#f/16}* 沒什麼大不了的，\n  只要別失手打死了就行。",
               "<25>{#f/10}* 受點傷，算的了什麼？\n  怪物有的是辦法療傷。",
               "<25>{#f/4}* 即使真出了意外，\n  我可以直接重置，\n  他們又能活蹦亂跳。",
               '<25>{#f/3}* ...但意外真的發生了。',
'<25>{#f/3}* 那一刻，\n  我才知道自己多麼天真。'
            ],
            (re: boolean) => [
               ...(re ? [ "<26>{#p/asriel2}{#f/3}* 之前說到，我感覺\n  「言語攻擊」沒什麼意思，\n  想給他們來點「物理攻擊」。" ] : []),
               '<25>{#p/asriel2}{#f/13}* 可能是衝昏了頭腦...\n  我玩了點「新花樣」。',
               '<25>{#f/15}* 我用魔法，把親生母親\n  吊了起來。\n* 越勒越緊... 越勒越緊...',
               '<25>{#f/16}* ...',
               '<25>{#f/6}* 生命一點點離她而去。\n* 她氣若遊絲，\n  哀求我馬上停手...',
'<25>{#f/6}* ...',
               '<25>{#f/8}* 我把她活活勒死了。',
               "<25>{#f/7}* 我驚恐萬分，馬上重置。\n* 但那地獄般的景象\n  卻久久揮之不去。",
               '<25>{#f/13}* 重置後，為了讓自己心安，\n  我不停做好事，\n  努力做個孝子。',
               "<25>{#f/15}* 但自作孽，不可活。",
               "<25>{#f/15}* 我不敢直視她的目光...\n  不敢直視每一個人..."
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       "<26>{#p/asriel2}{#f/15}* 之前說到，\n  第一次殺人後，\n  惡夢般的景象久久揮之不去。",
                       '<25>{#f/16}* 但有了第一次，\n  就會有第二次，第三次...'
                    ]
                  : [ '<25>{#p/asriel2}{#f/16}* 有了第一次，\n  就會有第二次，第三次...' ]),
               '<26>{#f/15}* 「萬事開頭難。」\n* 殺了一次人，\n  就能下得去手了。',
               '<26>{#f/15}* 很快，情況變成這樣：\n  我心情不好，殺個人找安慰。\n  我想找樂子，殺個人爽一把。',
               '<26>{#f/16}* 第一次殺人純粹只是意外。\n  現在卻一發不可收拾。',
               '<26>{#f/7}* 但我不怕，\n  殺了就殺了唄，\n  反正我能無限重置。',
               '<25>{#f/6}* 一旦我開始這麼想...\n  就再也沒有回頭路了。'
            ],
            (re: boolean) => [
               '<25>{#p/asriel2}{#f/6}* 重置得越多，\n  折磨他們的損招就越多。',
               '<25>{#f/7}* 我把他們千刀萬剮...\n* 我讓他們自相殘殺...\n* 我使他們如墮地獄...',
               '<25>{#f/15}* 他們死而復生。\n* 他們生而復死。\n* 他們生不如死。',
               "<25>{#f/16}* 一次又一次，\n  一次又一次...\n* 我徹底麻木了。",
               '<25>{#f/3}* 好事、壞事、善事、惡事...\n  什麼都做過了，\n  最後，我感受到什麼呢？',
               '<25>{#f/3}* ...什麼都沒有。',
               '<25>{#f/3}* 沒有情緒共鳴。\n* 沒有意義可言。\n* 只有空虛。',
               '<25>{#f/15}* 我一無所有。\n  沒有朋友，沒有自由...\n* 於是，我改變了想法。',
               '<26>{#f/23}* 我最後一次重置。\n* 這一次，我任由時間向前，\n  不再幹預時間軸。'
            ],
            (re: boolean) => [
               ...(re
                  ? [
                       '<26>{#p/asriel2}{#f/16}* 之前說到，\n  我發現一切都毫無意義。',
                       '<25>{#f/23}* 所以，在這次重置後，\n  我不再幹預時間軸。'
                    ]
                  : []),
               "<25>{#p/asriel2}{#f/17}* 但有了你，$(name)，\n  就不一樣了。",
               '<25>{#f/23}* 你知道嗎？有你陪著我，\n  我真的非常高興。',
               "<25>{#f/13}* 有你在身邊，我不再孤獨。",
               "<25>{#f/15}* 有你在身邊，我不再絕望。",
               "<25>{#f/16}* 而且，你不是也想\n  「給他們自由」嘛？",
               '<25>{#f/13}* 我可以幫你實現願望。',
               '<25>{#f/23}* 我們永遠都是好夥伴。'
            ]
         ],
         monologueX1: [
            '<25>{#p/asriel2}{#f/17}* 記住，$(name)。',
            '<25>{#f/17}* 只要我們心連心，\n  就能粉碎一切障礙。'
         ],
         monologueX2: () => [
            '<25>{#p/asriel2}{#f/16}* ...來，握住我的手。',
            ...(SAVE.data.b.water ? [ "<25>{#f/13}* 別擔心，杯子我幫你拿..." ] : [])
         ],
         monologueX3: [
            '<25>{#p/asriel2}{#f/17}* 以前，我們就這樣\n  手牽著手，在城市漫步...',
            '<25>{#f/23}* 現在，趁還有機會，\n  我們走完這最後一程。',
            "<25>{#f/16}* ...之後，\n  把一切都炸成碎片。"
         ],
         monologueX4: () => [
            '<25>{#p/asriel2}{#f/16}* 景色真美。',
            ...(SAVE.flag.n.ga_asrielMonologueY < 2
               ? [
                    "<25>{#f/13}* 但前哨站的末日\n  已經到了。",
                    "<25>{#f/7}* $(name)，\n  那些怪物根本不懂我們。",
                    "<25>{#f/6}* 他們還相信\n  宇宙就是個大避難所。",
                    "<25>{#f/8}* 還天真地以為，\n  「星空之大，能容下每一個人。」",
                    "<25>{#f/6}* 但我們倆\n  可不跟那群蠢貨一般見識。",
                    "<25>{#f/7}* 誰也阻止不了我們。",
                    "<25>{#f/9}* 嘻嘻。\n* 想來也是真有意思...",
                    '<25>{#f/13}* 這種信念，\n  讓所有人疏遠我們...',
                    '<25>{#f/16}* ...卻也讓我們的紐帶\n  愈加牢固。',
                    '<26>{#f/17}* 聽著，$(name)。\n  只要我們上了飛船，\n  離開這鬼地方...',
                    "<25>{#f/17}* 就能永遠在一起了。",
                    "<25>{#f/23}* 這就是天意。"
                 ]
               : [
                    '<25>{#f/13}* 該說的我都說了。',
                    "<25>{#f/17}* 繼續幹正事吧。"
                 ])
         ],
         monologueX5: [ '<25>{#p/asriel2}{#f/17}* 你來帶路。' ],
         monologueY: [
            "<25>{#p/asriel2}{#f/16}* ...我不想廢話。",
            "<26>{#f/13}* 為什麼來這，要幹什麼，\n  你比我都清楚。"
         ],
         afterfight1: [ '<25>{#p/asriel2}{#f/8}* ...真費勁。' ],
         afterfight2: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/8}* 看起來，人類都疏散走了。",
                  '<25>{#f/7}* ...嘖嘖。',
                  "<25>{#f/6}* 那老頭要以為\n  就憑這樣就能阻止咱們，\n  那他可真傻到家了。",
                  "<25>{#f/10}* 他明明可以\n  用人類靈魂的力量\n  消滅我們...",
                  "<26>{#f/16}* 但說實話...",
                  "<25>{#f/13}* 狠不下心，不敢動手，\n  才是我熟悉的艾斯戈爾。\n* 你說是吧？"
               ],
               [ '<25>{#p/asriel2}{#f/6}* 等我一下。' ]
            ][Math.min(SAVE.flag.n.ga_asriel56++, 1)],
         afterfight3: () => [
            '<25>{#p/asriel2}{#f/16}* 核心即將熔毀。',
            ...(SAVE.flag.n.ga_asriel57++ < 1
               ? [
                    '<25>{#f/5}* 現在，我們只需要\n  找到一艘特殊飛船...',
                    "<25>{#f/9}* 在飛船上，把我們倆的靈魂\n  連接在一起，\n* 這樣，我們就能衝出力場。"
                 ]
               : [])
         ],
         afterfight4: [ '<25>{#p/asriel2}{#f/3}* 跟我走。' ],
         afterfight5a: [ '<25>{#p/asriel2}{#f/5}* 我最親愛的艾斯戈爾！', '<25>{#f/5}* 最近活得滋潤不？' ],
         afterfight5b: [
            '<25>{#p/asgore}{#f/5}* 比你想得還舒服。',
            "<25>{#p/asriel2}{#f/6}* 聽好了，你已經無處可逃。\n* 所以別跟我耍什麼花招。"
         ],
         afterfight6: [
            '<25>{#p/asgore}{#f/1}* 我沒想和你耍花招啊，\n  艾斯利爾。',
            '<25>{#p/asgore}{#f/2}* 我也知道，離死不遠了。'
         ],
         afterfight7: [ '<25>{#p/asriel2}{#f/10}* 我要把一切都炸成灰燼了，\n  臨死之前，有什麼遺言？' ],
         afterfight8: [
            '<25>{#p/asriel2}{#f/15}* 沒有？',
            '<25>{#f/7}* 行。',
            "<25>{#f/6}* 那我們也不勞煩您嘞。",
            '<25>{#f/8}* 現在，把門禁卡\n  給我交出來。'
         ],
         afterfight10: [ '<25>{#p/asriel2}{#f/1}* 跟我走，$(name)。', "<25>{#f/2}* 我真是受夠這死地方了。" ],
         afterfight11: [
            '<25>{#p/asgore}{#f/5}* $(name)...？',
            '<25>{#p/asgore}{#f/6}* ...喔。\n* 艾斯利爾，一路順風喔。'
         ],
         afterfight12: [ '<25>{#p/asriel2}{#f/16}* $(name)，別管他。\n* 這死地方愛咋咋地，\n  跟咱們一分錢關係都沒有。' ],
         afterfight13: [ '<25>{#p/asriel2}{#f/17}* 我只在乎你。' ],
         coreboomA1: [
            '<18>{#p/papyrus}{#f/5}有人嗎？\n有人嗎？',
            "<18>{#p/papyrus}{#f/5}我想找到那個人類，\n就來這了，可是..."
         ],
         coreboomA2: [ '<18>{#p/papyrus}{#f/8}不要...！' ],
         coreboomA3: [ '<32>{#p/basic}* 帕派瑞斯？{%40}' ],
         coreboomA4: [ "<18>{#p/papyrus}{#f/4}我有不好的預感...{%40}" ],
         coreboomA5: [ '<32>{#p/basic}* ...有人嗎？{%40}' ],
         coretext1: [ '<32>{#p/basic}{#s/spiderLaugh}* 穩住啊，親愛的~' ],
         coretext2: [ '<32>{#p/basic}{#s/spiderLaugh}* 嘎啊...', '<32>{#p/basic}* 一起再加把勁~' ],
         coreboomB1: [ '<32>{#p/basic}{#s/spiderLaugh}* 啊！', '<32>{#p/basic}* 不要這樣啊~' ],
         coreboomB2: [ '<32>{#p/basic}* 不要哪樣？{%40}' ],
         coreboomB3: [ '<32>{#p/basic}{#s/spiderLaugh}* 該死。{%40}' ],
         coretext3: [ '<18>{#p/papyrus}{#f/9}要幫忙嗎？' ],
         coretext4a: [ '<32>{#p/basic}{#s/spiderLaugh}* 帕派瑞斯！', "<32>{#p/basic}* 你還活著~" ],
         coretext4b: [ '<18>{#p/papyrus}{#f/6}我一塊肉都沒少！' ],
         coretext5a: [ '<18>{|}{#p/papyrus}{#f/4}啊不對，應該說- {%}' ],
         coretext5b: [
            '<32>{#p/basic}{#s/spiderLaugh}* 帕派瑞斯，快去喊些幫手，\n  把系統改回手動控制！'
         ],
         coreboomC1: [ "<18>{#p/papyrus}{#f/5}恐怕...\n這裡除了我們，沒別人了。" ],
         coreboomC2: [ '<18>{#p/papyrus}{#f/8}不要...！' ],
         coreboomC3: [ "<32>{#p/basic}{#s/spiderLaugh}* 撐不住了。{%40}" ],
         coretext6: [ "<32>{#p/basic}* 我馬上去叫那些機械師！" ],
         coretext7: [ '<18>{#p/papyrus}{#f/6}好，好，快去叫！' ],
         coreboomD1: [ '<32>{#p/basic}* ...', '<32>{#p/basic}* 沒人接。' ],
         coreboomD2: [ '<32>{#p/basic}* ...', "<32>{#p/basic}* 他們說，人手不足？！" ],
         coreboomD3: [ '<18>{#p/papyrus}{#f/5}可惡。{%40}' ],
         coretext8: [ '<32>{#p/basic}* ...', "<32>{#p/basic}* 改回手動控制了！" ],
         coretext9: [ '<32>{#p/basic}{#s/spiderLaugh}* 太好了~' ],
         coretext10: [ '<32>{#p/basic}* 快好了...' ],
         coretext11: [ '<32>{#p/basic}{#s/spiderLaugh}* 成功啦~' ],
         coretext12a: [ '<18>{#p/papyrus}{#f/0}我們成功了嗎？！？！' ],
         coretext12b: [ '<32>{#p/basic}{#s/spiderLaugh}* 啊呼呼...\n  還得有人進入控制臺\n  內部操控~' ],
         coreboom12c: [ "<32>{#p/basic}* 看我幹什麼！\n* 我就是個人偶！" ],
         coreboom12d: [ '<32>{#p/basic}{#s/spiderLaugh}* 而且是一個在特戰隊裡\n  待過的人偶~' ],
         coreboom12e: [ '<32>{#p/basic}* ...那都什麼陳年舊事了。' ],
         coretext13: [ "<32>{#p/napstablook}* 讓我來吧" ],
         coretext14a: [ '<18>{#p/papyrus}{#f/1}【你】從哪冒出來的？？？' ],
         coretext14b: [
            '<32>{#p/napstablook}* 對不起...\n* 沒時間解釋了...',
            '<32>* 表親，保重...',
            '<32>* 好嗎？'
         ],
         coretext15: [ '<32>{*}{#p/basic}{#s/spiderLaugh}* 你在幹什麼~{%40}' ],
         coretext16: [ "<32>{*}{#p/basic}* 不... 不！\n* ...我不想再失去親人了！{%40}" ],
         coretext17: [ '<32>{#p/napstablook}{*}* 我明白了...', '<32>* 我明白到底為什麼\n  不穩定了。' ],
         coretext18: [
            "<33>{*}{#p/napstablook}* 應該就是這個原因...",
            '<32>{*}* 重設命令執行路徑就行。',
            '<32>{*}* 快點啊...'
         ],
         coretext19: [ '<32>{#p/napstablook}* ...', '<32>{#p/napstablook}* 成功了...' ],
         coretext20: [
            '<25>{#p/asgore}{#f/6}* 怎麼樣了？',
            '<18>{#p/papyrus}{#f/0}艾斯戈爾！我們成功了！',
            '<18>{#p/papyrus}{#f/0}核心不會爆炸了！',
            '<32>{#p/basic}* ...我的表親，小幽，它...',
            '<18>{#p/papyrus}{#f/5}人偶的表親做了件\n很了不起的事。'
         ],
         coretext21: [ '<25>{#p/asgore}{#f/1}* 你叫什麼名字？' ],
         coretext22: [
            '<32>{#p/basic}* 是說我嗎？',
            "<32>* 嗯...\n* 呃，現在我應該沒有名字了。",
            '<32>* 叫我「人偶」就行。'
         ],
         coretext23a: [
            '<25>{#p/asgore}{#f/1}* 呃，人偶... 聽我說。\n* 你很痛苦，大夥也都一樣。',
            '<25>{#f/2}* 今天，我們都失去了至親。'
         ],
         coretext23b1: [ '<32>{#p/basic}{#s/spiderLaugh}* 當然，我可沒失去喔~' ],
         coretext23b2: [ '<32>{#p/basic}{#s/spiderLaugh}* ...我不是那個意思。\n  我跟大夥關係都蠻好啦...' ],
         coretext24a: [
            "<18>{#p/papyrus}{#f/5}天哪...\n要是那人類沒饒恕我，\n我...",
            '<32>{#p/basic}* 人類饒恕你了？\n* 對，那人也饒恕我了...',
            '<32>{#p/basic}{#s/spiderLaugh}* 啊呼呼... \n  沒等那人下手，我就先逃了呢~',
            '<18>{#p/papyrus}{#f/0}...喔，對了！\n還有核心的員工！',
            '<18>{#p/papyrus}{#f/0}人類肯定也\n饒恕他們了！'
         ],
         coretext24b: [ '<25>{#p/asgore}{#f/1}* ...請問，\n  人類饒恕你們的時候，\n  艾斯利爾在場嗎？' ],
         coretext25: [
            '<18>{#p/papyrus}{#f/9}當然不在！',
            '<32>{#p/basic}* 不在。',
            "<32>{#p/basic}{#s/spiderLaugh}* 想了一下，應該沒看到他~",
            '<25>{#p/asgore}{#f/1}* ...',
            '<25>{#p/asgore}{#f/1}* 果然是這樣...',
            '<25>{#p/asgore}{#f/2}* ...或許...\n* 把過錯歸咎於人類，\n  是我的錯...',
            '<18>{#p/papyrus}{#f/6}...\n歸咎人類？？',
            '<18>{#p/papyrus}{#f/7}到底怎麼回事！！'
         ],
         coretext26: [ '<18>{*}{#p/papyrus}{#f/7}艾斯戈爾，你做了什麼？！{^40}{%}' ],
         coretext27a: '{*}{#p/event}{#i/3}前哨站灰飛煙滅。',
         coretext27b: '{*}{#p/event}{#i/3}前哨站倖免於難。',
         respawn0: () =>
            [
               [
                  [
                     "<25>{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we left Starton.",
                     '<25>{#p/asriel2}{#f/16}* Just saying.'
                  ],
                  [
                     "<25>{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we killed Undyne.",
                     '<25>{#p/asriel2}{#f/16}* Just saying.'
                  ],
                  [
                     "<25>{#p/asriel2}{#f/15}* You probably should've used a SAVE point after we left Aerialis.",
                     '<25>{#p/asriel2}{#f/16}* Just saying.'
                  ],
                  [
                     '<25>{#p/asriel2}{#f/15}* Did you poison yourself after the fight to see what would happen?',
                     "<25>{#p/asriel2}{#f/16}* $(name), you're a real piece of work."
                  ]
               ],
               [
                  [
                     "<26>{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     "<25>{#p/asriel2}{#f/8}* Even if it's only Starton we have to go through again.",
                     '<25>{#p/asriel2}{#f/7}* But I guess not.'
                  ],
                  [
                     "<26>{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     '<26>{#p/asriel2}{#f/8}* Especially after taking out someone like Undyne.',
                     '<25>{#p/asriel2}{#f/7}* But I guess not.'
                  ],
                  [
                     "<26>{#p/asriel2}{#f/6}* You'd think after last time you would've\nlearnt to save progress.",
                     '<25>{#p/asriel2}{#f/8}* Especially after clearing an area like Aerialis.',
                     '<25>{#p/asriel2}{#f/7}* But I guess not.'
                  ],
                  [ '<26>{#p/asriel2}{#f/7}* This is becoming very tiresome, very quickly.' ]
               ],
               [
                  [ '<25>{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on.' ],
                  [ '<25>{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on.' ],
                  [ '<25>{#p/asriel2}{#f/4}* $(name).\n* Please save our progress from now on.' ],
                  [ "<25>{#p/asriel2}{#f/4}* Now you're just being downright annoying." ]
               ],
               [
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ],
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ],
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ],
                  [ '<25>{#p/asriel2}{#f/8}* Come on...' ]
               ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn0++, 3)][Math.floor(SAVE.flag.n._genocide_milestone_last / 2)],
         respawn1: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* We're back here?",
                  "<25>{#p/asriel2}{#f/16}* We'll just kill him again, I guess."
               ],
               [ '<25>{#p/asriel2}{#f/6}* Really?' ],
               [ '<25>{#p/asriel2}{#f/6}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn1++, 2)],
         respawn2: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/15}* And we're back here again.\n* Great...",
                  '<25>{#p/asriel2}{#f/16}* No problem, though...\n* We can just do what we did before...'
               ],
               [ '<25>{#p/asriel2}{#f/8}* This is really starting to get annoying.' ],
               [ '<25>{#p/asriel2}{#f/8}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn2++, 2)],
         respawn4: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* $(name), we were almost to the end.',
                  '<25>{#p/asriel2}{#f/16}* Can we please just save our progress this time.'
               ],
               [ '<25>{#p/asriel2}{#f/10}* ... is this some kind of a joke?' ],
               [ '<25>{#p/asriel2}{#f/10}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn4++, 2)],
         respawn6: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/15}* $(name)，聽好了。',
                  '<25>{#p/asriel2}{#f/7}* 我們已經幹掉她了。',
                  '<25>{#p/asriel2}{#f/5}* 那你還回溯時間幹嘛呢？'
               ],
               [ "<25>{#p/asriel2}{#f/7}* ...你逗我呢？" ],
               [ '<25>{#p/asriel2}{#f/7}* ...' ]
            ][Math.min(SAVE.flag.n.ga_asrielRespawn6++, 2)],
         respawnWitnessA: () =>
            [
               [ '<25>{#p/asriel2}{#f/9}* 怎麼回事？', '<25>{#p/asriel2}{#f/10}* ...誰攻擊了我們？' ],
               [ '<25>{#p/asriel2}{#f/15}* 我們...', '<25>{#p/asriel2}{#f/10}* ...被一道電魔法擊中了？' ],
               [
                  "<25>{#p/asriel2}{#f/3}* 肯定是她，艾菲斯。",
                  "<25>{#p/asriel2}{#f/15}* 她竟然沒逃跑...",
                  '<25>{#p/asriel2}{#f/16}* 呵，有點意思。'
               ]
            ][SAVE.flag.n.ga_asrielWitness++],
         respawnWitnessB: (wit: number) =>
            wit > 0
               ? [
                    '<25>{#p/asriel2}{#f/15}* 果然是艾菲斯...',
                    '<25>{#p/asriel2}{#f/16}* 呵，有點意思。'
                 ]
               : [
                    "<25>{#p/asriel2}{#f/15}* 她竟然沒逃跑...",
                    '<25>{#p/asriel2}{#f/16}* 呵，有點意思。'
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
               '<32>{#p/basic}* 弗裡斯克...',
               "<32>* There's still something I haven't told you yet.",
               "<32>* It's about my past, and...",
               "<32>* It's the reason why I'm so desperate to talk to him.",
               "<32>* I'm sorry.",
               '<32>* I just...',
               '<32>* I need to tell you how I got this way.',
               '<32>* I need you to understand.'
            ],
            () => [
               '<32>{#p/basic}* 弗裡斯克...',
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
            [ "<32>{#p/basic}{#npc/a}* I've never been one for mazes and strange puzzles.\n* So this really is great." ]
         ),
         picnic_clamguy: pager.create(
            0,
            [
               '<32>{#p/basic}{#npc/a}* Crazy to think they built this city in such a short period of time.',
               "<32>* And unlike Aerialis, they didn't resort to weird space anomalies to make it bigger.",
               "<32>* But all that technobabble's beyond me, anyway.\n* It's just good to be here."
            ],
            [ '<32>{#p/basic}{#npc/a}* A life free of nonsensical technical terms...\n* Peace, at last.' ]
         ),
         picnic_charles: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* Don't mind me, I'm just hanging out here with my best pals!",
               '<32>* Working at the CORE was really hard... but we are all done now.',
               '<32>* Here, we can celebrate our amazing work!',
               '<32>* I sure do love HANGOUT!'
            ],
            [ '<32>{#p/basic}{#npc/a}* I can tell you love it too!' ]
         ),
         picnic_proskater: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* So... no more school?\n* I mean, it's my fault for going, really.",
               '<32>* Nobody actually has to go to school, but you might be worse off without it.',
               "<32>* Whatever.\n* I guess I still don't know what I want in life."
            ],
            [ '<32>{#p/basic}{#npc/a}* Going to parties like this all the time could be fun...' ]
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
            [ '<18>{#p/papyrus}{#f/0}{#npc/a}NOTHING TO WORRY ABOUT AT ALL.' ]
         ),
         picnic_kidd: pager.create(
            0,
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [ '<25>{#p/kidd}{#f/4}{#npc/a}* Yo, uh...', '<25>{#f/4}* I think you should just leave me alone.' ]
                  : [
                       "<25>{#p/kidd}{#f/2}{#npc/a}* I'm gonna miss this place, dude...",
                       '<25>{#f/3}* Starton, the Foundry, Aerialis, the Citadel...',
                       "<25>{#f/6}* At least we'll still be together on the new homeworld.",
                       "<25>{#f/1}* I can't wait to see what it's like out there!"
                    ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [ '<25>{#p/kidd}{#f/4}{#npc/a}* ...' ]
                  : [
                       '<25>{#p/kidd}{#f/1}{#npc/a}{#f/4}* ... oh, uh, I know you probably figured it out, but...',
                       "<25>{#f/4}* I don't really have parents.\n* I just made them up.",
                       "<26>{#f/3}* But we're friends now, right? So... I hope you can forgive me for that."
                    ],
            () =>
               SAVE.data.b.f_state_kidd_betray
                  ? [ '<25>{#p/kidd}{#f/4}{#npc/a}* Go away...' ]
                  : [ '<25>{#p/kidd}{#f/3}{#npc/a}* Thanks for being a good friend, Frisk.' ]
         ),
         picnic_dragon: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* So you're telling me we can't leave until everyone's ready?",
               "<32>* I, uh, I guess that's only fair, huh.",
               "<32>* Well, it's okay, then."
            ],
            [ "<32>{#p/basic}{#npc/a}* What am I even complaining about?\n* We're free..." ]
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
                  : [ "<25>{#p/undyne}{#f/7}{#npc/a}* Come on, you're blocking the view!" ]
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
                  : [ '<25>{#p/alphys}{#g/alphysYupEverythingsFine}{#npc/a}* Movie first, talk later.' ]
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
                       '<25>{#f/1}* 弗裡斯克...',
                       '<25>{#f/1}* ... I am not sure I can do that, but...',
                       '<25>{#f/6}* For you, I will try.'
                    ])
                  : [])
            ],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? [ '<25>{#p/asgore}{#npc/a}{#f/1}* I only hope that I can get through to her.' ]
                  : [ '<25>{#p/asgore}{#npc/a}{#f/6}* I wonder if humans like wearing brown.' ],
            () =>
               SAVE.data.b.c_state_secret5_used
                  ? [ '<25>{#p/asgore}{#npc/a}{#f/2}* ...' ]
                  : [ '<25>{#p/asgore}{#npc/a}{#f/21}* La la, la la...' ]
         )
      },
      story: {
         lv20: [ '<32>{#p/human}* （飛船漸行漸遠。）' ],
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
                                  ? [ '<25>{*}{#e/twinkly/7}If you had just stuck with our ORIGINAL plan...' ]
                                  : [ '<25>{*}{#e/twinkly/7}If you had just acted like when we were together...' ]
                               : [ '<25>{*}{#e/twinkly/7}If you had just gone through without caring about anyone...' ]),
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

                       ? [ "<25>{*}{#e/twinkly/20}You'll have to start over, and..." ]
                       : [ "<25>{*}{#e/twinkly/20}You'll CONTINUE from here, and..." ]),
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

                               ? [ "<25>{*}{#e/twinkly/14}You'll have to start over, of course..." ]
                               : [ "<25>{*}{#e/twinkly/14}You'll have to RESET, of course..." ]),
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

                               ? [ "<25>{*}{#e/twinkly/20}You'll have to start over, and..." ]
                               : [ "<25>{*}{#e/twinkly/20}You'll CONTINUE from here, and..." ]),
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
                       ? [ "<25>{*}{#e/twinkly/17}You didn't get your happy ending?" ]
                       : [ "<25>{*}{#e/twinkly/17}You STILL didn't get your happy ending?" ]),
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
                                       ? [ "<25>{*}{#e/twinkly/15}You won't have to skip an entire area next time." ]
                                       : [ '<25>{*}{#e/twinkly/15}You might actually get somewhere for once.' ])
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
                                       ? [ "<25>{*}{#e/twinkly/22}And don't skip an entire area, either!" ]
                                       : [ '<25>{*}{#e/twinkly/22}Why is that so difficult for you to grasp!' ])
                                 ])
                         ]
                       : [
                            '<25>{*}{#e/twinkly/0}...',
                            ...(SAVE.data.b.ultrashortcut || SAVE.data.s.room === '' || SAVE.data.s.room === spawn // NO-TRANSLATE

                               ? [ '<25>{*}{#e/twinkly/21}... maybe, if you start over...' ]
                               : [ '<25>{*}{#e/twinkly/21}... maybe, if you CONTINUE from here...' ]),
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
                       ? [ '<25>{*}{#e/twinkly/15}You could thank me for solving those puzzles for you.' ]
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
         oof: [ '<32>{#p/human}* （你倒吸了一口涼氣...）' ],
         killer1: [
            '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/15}呀。',
            "<25>{*}{#e/twinkly/17}你真把事情搞砸了，不是嗎？",
            '<25>{*}{#e/twinkly/20}你不僅失去了\n對時間軸的控制權...',
            "<25>{*}{#e/twinkly/15}而且現在若想奪回它，\n你還得重頭再來。"
         ],
         killer2: [
            '<25>{*}{#p/twinkly}{#e/twinkly/14}嘿，我說。',
            "<25>{*}{#e/twinkly/23}如果這就是你想要的結局，\n那...",
            '<25>{*}{#e/twinkly/15}那就輪不到我來評判了。',
            "<25>{*}{#e/twinkly/17}但你不會真的指望我相信吧，\n啊？",
            '<25>{*}{#e/twinkly/17}這鬼狀況就是你想要的？',
            '<25>{*}{#e/twinkly/15}我是說，當然。\n旁觀是挺有趣的。',
            "<25>{*}{#e/twinkly/17}但現在一切都結束了..."
         ],
         killer3: [
            '<25>{*}{#p/twinkly}{#e/twinkly/15}...呃。\n我們都知道你能做得更好。',
            "<25>{*}{#e/twinkly/20}我不是說我是什麼聖人之類的...",
            "<25>{*}{#e/twinkly/15}信不信由你，\n但我是站在你這邊的。",
            '<25>{*}{#e/twinkly/15}我要你重獲\n對時間軸的控制權。',
            '<25>{*}{#e/twinkly/17}畢竟，\n看你坐在這裡啥都不做...',
            "<25>{*}{#e/twinkly/17}並不怎麼有趣，不是嗎？"
         ],
         killer4: [
            "<25>{*}{#p/twinkly}{#e/twinkly/15}...噢，別擔心。",
            '<25>{*}{#e/twinkly/20}就算我失去了所有記憶，\n那又怎麼樣呢？',
            "<25>{*}{#e/twinkly/18}反正你會記得這一切。\n這樣你下次就會\n避免掉入這個陷阱。",
            '<25>{*}{#e/twinkly/15}然後，我們就能\n恢復以前那樣。',
            '<25>{*}{#e/twinkly/20}那你怎麼說？',
            '<25>{*}{#e/twinkly/20}你明白我說的話嗎，$(name)？',
            '{*}{#e/twinkly/3}{%}'
         ],
         killer5: [
            '<25>{*}{#p/twinkly}{#e/twinkly/15}噢，我在開玩笑嗎。',
            '<25>{*}{#e/twinkly/16}你當然明白啦！'
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
         forget1: [ '<25>{*}{#p/human}（...）', "<25>{*}（你好孤獨...）" ],
         forget2: [ '<25>{*}{#p/human}（...）', "<25>{*}（你好害怕...）" ],
         forget3: [
            '<25>{*}{#p/human}（...）',
            "<25>{*}（你多麼盼著能重新做人...）",
            "<25>{*}（...不管付出什麼代價，\n  忘記一切都行。）"
         ],
         forget4: [
            '<25>{*}{#p/human}（...）',
            "<25>{*}（可你沒得選。）",
            "<25>{*}（你只能看著別人替你選。）"
         ],
         regret1: [ '<25>{*}{#p/twinkly}{#f/19}{#e/twinkly/0}Hi.' ],
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
                    '<25>{#g/alphysSideSad}* 你真-真的很享受殺人...\n* ...嗯?',
                    "<25>{#g/alphysNervousLaugh}* 我-我是說，我不是在批評你，\n  我只是...",
                    "<25>{#g/alphysUhButHeresTheDeal}* 我只是覺得這超級無敵酷！！！",
                    '<25>{#g/alphysSideSad}* 那-那麼... 這樣一來...',
                    "<25>{#g/alphysCutscene3}* 也許你現在就不會打算殺我啦？？？"
                 ]
               : [ "<25>{#p/asgore}{#f/0}* 挺美的，不是嗎...？", '<25>{#p/asgore}{#f/0}* ...' ],
         asgoreStoryPre2: () =>
            world.bad_robot
               ? [ '<25>{*}{#p/alphys}{#g/alphysOhGodNo}* 看你後面！！！{%}' ]
               : [
                    '<25>{#p/asgore}{#f/6}* 孩子，如果你被嚇著了，\n  那我先對你道個歉。',
                    '<25>{#p/asgore}{#f/6}* 艾菲斯告知了我\n  你會來到這裡。'
                 ],
         asgoreStoryPre3: () => [
            '<25>{#p/asgore}{#f/7}* ...',
            ...(SAVE.flag.b.waaaaaooaaooooaaaaaaooohooohooohstooooryofunderrtaaaaale
               ? [
                    '<25>{#p/asgore}{#f/12}* 嗯...？\n* 你已經聽過這個故事了？',
                    '<25>{#p/asgore}{#f/5}* ...',
                    '<25>{#p/asgore}{#f/6}* 好吧。',
                    '<25>{#p/asgore}{#f/6}* 如果你早已聽過，\n  那我也不必再複述一遍。',
                    '<25>{#p/asgore}{#f/6}* 繼續一個人行進吧。'
                 ]
               : [ '<25>{#p/asgore}{#f/7}* 來吧。', '<25>{#p/asgore}{#f/7}* 我有一個故事\n  要講給你聽。' ])
         ],
         alphysApproach1: [
            "<25>{#p/alphys}{#g/alphysSmileSweat}* 噢，你-你大概在想艾斯戈爾在哪，\n  對吧？",
            "<25>{#g/alphysNervousLaugh}* 唔... 他在...",
            '<25>{#g/alphysHellYeah}* 一個安全的地-地方！',
            '<25>{#g/alphysTheFactIs}* 相對安全。',
            '<25>{#g/alphysOhGodNo}* 或者說-\n* 不，絕對！\n* 絕對安全！',
            '<25>{#g/alphysInquisitive}* 所以，總-總的來說，\n  你不妨... 直接放棄吧。',
            '<26>{#g/alphysInquisitive}* 因為...',
            "<26>{#g/alphysNervousLaugh}* 你永遠也找不到他！！",
            '<25>{#g/alphysHellYeah}* 好啊！\n* 看-看這招！'
         ],
         alphysApproach2: [
            '<25>{#p/alphys}{#g/alphysOhGodNo}* ...',
            '<25>{#g/alphysNervousLaugh}* ...呃呃...',
            '<25>{#g/alphysNervousLaugh}* 像往常一樣挺過來了，哈-哈啊？',
            '<25>{#g/alphysNeutralSweat}* ...',
            "<25>{#g/alphysIDK2}* 我猜你要去見艾斯戈爾了。",
            '<25>{#g/alphysIDK3}* ...',
            "<25>{#g/alphysIDK3}* 我太沒用了...",
            "<25>{#g/alphysThatSucks}* 你可能根本就沒在乎過我，對吧?",
            "<25>{#g/alphysIDK2}* 我一直很害怕，\n  但你可能根本就沒想過要抓我。",
            '<25>{#g/alphysIDK3}* ...',
            "<25>{#g/alphysIDK2}* 去吧。\n* 做你要做的事吧。",
            "<26>{#g/alphysIDK3}* 我阻止不了你。"
         ],
         alphysApproach3: [ "<25>{#p/alphys}{#g/alphysFR}* 只有一個人能做到。" ],
         asgoreStory1: [
            '<25>{*}{#p/asgore}{#f/6}* 很久以前，一個人類小孩\n  在前哨站迫降。{~}',
            '<25>{*}{#p/asgore}{#f/6}* 身受重傷的人類\n  開始大聲呼救。{~}'
         ],
         asgoreStory1r: [ '<32>{#p/basic}* ...{%40}', "<32>{#p/basic}* I'm sorry.{%40}" ],
         asgoreStory2: [
            '<25>{*}{#p/asgore}{#f/7}* 而我們的初生子艾斯利爾\n  聽到了呼救聲。{~}',
            '<25>{*}{#p/asgore}{#f/7}* 他把人類帶回了\n  我們家裡。{~}'
         ],
         asgoreStory2r: [ '<32>{#p/basic}* I did the best I could.{%40}' ],
         asgoreStory3: [
            '<25>{*}{#p/asgore}{#f/6}* 慢慢的，\n  兩個孩子變得情同手足。{~}',
            '<25>{*}{#p/asgore}{#f/6}* 他們之間的親情\n  隨著前哨站的擴建\n  也愈發緊密。{~}',
            '<25>{*}{#p/asgore}{#f/6}* 整個前哨站充滿了希望。{~}'
         ],
         asgoreStory3r: [ '<32>{#p/basic}* I tried to follow my heart.{%40}' ],
         asgoreStory4: [
            '<25>{*}{#p/asgore}{#f/1}* 然而，有一天...{~}',
            '<25>{*}{#p/asgore}{#f/2}* 人類猝不及防地\n  感染了一種疾病。{~}'
         ],
         asgoreStory4r: [ '<32>{#p/basic}* I tried to do the right thing.{%40}' ],
         asgoreStory5: [
            '<25>{*}{#p/asgore}{#f/1}* 病入膏肓的人類\n  只有一個請求。{~}',
            '<25>{*}{#p/asgore}{#f/1}* 想看看我們先前\n  那偉大富饒的世界\n  所殘存的遺址。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 但我們對此無能為力。{~}'
         ],
         asgoreStory5r: [ '<32>{#p/basic}* All I wanted was for him to see the universe.{%40}' ],
         asgoreStory6: [
            '<25>{*}{#p/asgore}{#f/1}* 第二天...{~}',
            '<25>{*}{#p/asgore}{#f/1}* ...{~}',
            '<25>{*}{#p/asgore}{#f/2}* 人類便與世長辭。{~}'
         ],
         asgoreStory6r: [ '<32>{#p/basic}* All I wanted was for him to be happy.{%40}' ],
         asgoreStory7: [
            '<25>{*}{#p/asgore}{#f/15}* 艾斯利爾悲痛欲絕，\n  吸收了這個人類的\n  靈魂。{~}',
            '<25>{*}{#p/asgore}{#f/16}* 他化作了一個\n  擁有不可思議力量的\n  存在。{~}'
         ],
         asgoreStory7r: [ '<33>{#p/basic}* I never wanted to...{%40}' ],
         asgoreStory8: [
            '<25>{*}{#p/asgore}{#f/4}* 憑藉著新獲得的力量，\n  艾斯利爾穿過了力場。{~}',
            "<25>{*}{#p/asgore}{#f/4}* 他開著一架小型飛船，\n  載著人類的遺體\n  飛向遠方。{~}",
            '<25>{*}{#p/asgore}{#f/4}* 希望能找到那\n  傳說中的遺蹟。{~}'
         ],
         asgoreStory8r: [ '<32>{#p/basic}* ... to...{%40}' ],
         asgoreStory9: [
            '<25>{*}{#p/asgore}{#f/1}* 很快，他就發現了\n  自己所尋找的東西。{~}',
            '<25>{*}{#p/asgore}{#f/1}* 飛船著陸在破碎飄零的\n  碎片之中...{~}',
            "<25>{*}{#p/asgore}{#f/1}* 人類的遺體\n  也在此安葬。{~}"
         ],
         asgoreStory9r: [ '<32>{#p/basic}* ...{%40}' ],
         
         
         asgoreStory10: [
            "<25>{*}{#p/asgore}{#f/5}* 突然，飛船的\n  近接感測警報\n  開始響起。{~}",
            "<25>{*}{#p/asgore}{#f/5}* 拾荒者們看到了\n  抱著人類遺體的艾斯利爾。{~}",
            '<25>{*}{#p/asgore}{#f/2}* 他們以為是艾斯利爾\n  殺死了這個小孩。{~}'
         ],
         asgoreStory11: [
            '<25>{*}{#p/asgore}{#f/2}* 人類用盡所能\n  攻擊艾斯利爾。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 一槍又一槍，\n  一擊又一擊...{~}',
            '<25>{*}{#p/asgore}{#f/2}* 以艾斯利爾現在的形態\n  是有力量將他們\n  盡數消滅的。{~}'
         ],
         asgoreStory12: [
            '<25>{*}{#p/asgore}{#f/4}* 但是...{~}',
            '<25>{*}{#p/asgore}{#f/4}* 艾斯利爾並沒有還手。{~}'
         ],
         asgoreStory12r: [ '<32>{#p/human}* （你聽見有人在哭...）{%40}' ],
         asgoreStory13: [
            "<25>{*}{#p/asgore}{#f/9}* 艾斯利爾緊緊抱住\n  人類的遺體，向外界看了\n  最後一眼...{~}",
            '<25>{*}{#p/asgore}{#f/9}* 然後他面帶微笑...\n  緩緩地離開了。{~}'
         ],
         asgoreStory13r: [ "<32>{#p/basic}* I c-couldn't...\n* He d-d-didn't let m-me...{%40}" ],
         asgoreStory14: [
            '<25>{*}{#p/asgore}{#f/1}* 傷痕累累的艾斯利爾駕駛著\n  受損的飛船回到了家。{~}',
            '<25>{*}{#p/asgore}{#f/1}* 他下了飛船，\n  然後癱倒在地。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 化作一團塵埃，\n  飄散在整個樹林裡。{~}'
         ],
         asgoreStory14r: [ '<32>{#p/basic}* ...{%40}' ],
         asgoreStory15: [
            '<25>{*}{#p/asgore}{#f/13}* 前哨站，我的前哨站...\n  陷入了絕望。{~}',
            '<25>{*}{#p/asgore}{#f/13}* 我們一夜之間就\n  失去了兩個孩子。{~}',
            '<25>{*}{#p/asgore}{#f/14}* 我們的一切，又一次\n  被奪走了。{~}'
         ],
         asgoreStory15r: [ "<32>{#p/basic}* ... it's not fair...{%40}" ],
         asgoreStory16: [
            '<25>{*}{#p/asgore}{#f/13}* 於是，我一怒之下\n  向人類宣戰。{~}',
            '<25>{*}{#p/asgore}{#f/13}* 無論付出多少代價，\n  我都要讓我們怪物\n  重獲自由。{~}',
            '<25>{*}{#p/asgore}{#f/14}* ...而人民們都支援\n  我的決策。{~}'
         ],
         asgoreStory16r: [ "<32>{#p/basic}* It's not fair...!{%40}" ],
         asgoreStory17: [
            '<25>{*}{#p/asgore}{#f/3}* 可我回過神來才發現，\n  一切都為時已晚。{~}',
            '<25>{*}{#p/asgore}{#f/2}* 無論做什麼事情\n  都無法阻擋人民\n  發動戰爭的意願。{~}',
            '<25>{*}{#p/asgore}{#f/5}* 至少明面上如此。{~}'
         ],
         asgoreStory18: () =>
            SAVE.data.b.killed_mettaton || world.baddest_lizard
               ? [
                    '<25>{*}{#p/asgore}{#f/5}* 事到如今，想必艾菲斯\n  一定已經告訴過你\n  某個秘密了吧。{~}',
                    '<25>{*}{#p/asgore}{#f/5}* 一份我與前皇家科學員的\n  協定。{~}',
                    '<25>{*}{#p/asgore}{#f/6}* ... now, if only I knew what was holding up the current one...{~}'
                 ]
               : [
                    '<25>{*}{#p/asgore}{#f/5}* 事到如今，想必艾菲斯\n  一定已經告訴過你\n  某個{@fill=#003cff}秘密{@fill=#fff}了吧。{~}',
                    '<25>{*}{#p/asgore}{#f/5}* 一份我與前皇家科學員的\n  {@fill=#003cff}協定{@fill=#fff}。{~}',
                    '<25>{*}{#p/asgore}{#f/6}* ... 啊，原來她來了。\n* 我剛才還尋思著她\n  什麼時候才會到呢。{~}'
                 ],
         asgoreStory19: [
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* 呃，抱——抱歉！\n* 我已經盡力在趕了！',
            '<25>{#p/asgore}{#f/6}* 不必著急。\n* 畢竟好事多磨嘛。',
            "<25>{#p/alphys}{#g/alphysWorried}* ... 你真覺得人類\n  已經做好準備了嗎？"
         ],
         asgoreStory20a: [
            '<25>{#p/asgore}{#f/7}* 孩子，請讓我們\n  先行一步...',
            '<25>{#p/asgore}{#f/7}* 我和艾菲斯有些事情\n  需要談談。'
         ],
         asgoreStory20b: [
            "<25>{#p/alphys}{#g/alphysHellYeah}* 是的，呃...\n  接著往——往前走吧,\n  我們會等著你的！"
         ],
         asgoreStory21: [
            '<25>{#p/asgore}{#f/5}* 真奇怪。\n* 她居然還沒來。',
            '<25>{#p/asgore}{#f/5}* ... 這不是我所期望的。'
         ],
         asgoreStory22: [
            '<25>{#p/asgore}{#f/5}* 那麼。\n* 她要是想見我\n  就得等上一會了。',
            '<25>{#p/asgore}{#f/5}* 這件事不能再拖了。'
         ],

         
         jspeech1: () => [
            '<32>{#p/darksans}* 終於，你到達此處。',
            '<32>* 路途的終點已經觸手可及。',
            world.bad_robot || SAVE.data.b.ultrashortcut
               ? '<32>* 片刻之後，你就能見到國王。'
               : '<32>* 片刻之後，你又能見到國王。',
            '<32>* 與此同時...',
            ...(SAVE.data.b.ultrashortcut
               ? [
                    '<32>* ...',
                    "<32>* 不對。",
                    '<32>* 你怎麼來得這麼快？',
                    '<32>* 讓我猜猜，你是不是...',
                    '<32>* 走{@fill=#ff0}捷徑{@fill=#fff}了？'
                 ]
               : [
                    ...(SAVE.data.b.water
                       ? [
                            '<32>* ...',
                            "<32>* 你是不是一路上\n  一直拿著那杯液體？",
                            ...(world.dead_skeleton
                               ? [ '<32>* ...', '<32>* 嗯，沒事。' ]
                               : [ '<32>* Heh.', '<32>* 回到剛才的話題...' ])
                         ]
                       : []),
                    '<32>* 你將會決定怪物的命運。',
                    "<32>* 但那是後話了。",
                    '<32>* 現在。',
                    '<32>* 你將接受審判。',
                    '<32>* 你將為你每一個行為接受審判。',
                    "<32>* 你將為你獲得的每一點EXP\n  接受審判。",
                    "<32>* EXP是什麼？",
                    "<32>* 那是一個縮寫。",
                    '<32>* 意思是「{@fill=#f00}處決點數{@fill=#fff}」\n  （{@fill=#f00}EX{@fill=#fff}ecution {@fill=#f00}P{@fill=#fff}oints）。',
                    '<32>* 一種指標，用來衡量\n  你對別人造成了多少傷害。',
                    '<32>* 當你殺了人，EXP就會增加。',
                    '<32>* 當你的EXP積累到一定程度，\n  LOVE就會增加。',
                    '<32>* LOVE，也是一個縮寫。',
                    '<32>* 意思是「{@fill=#f00}暴力等級{@fill=#fff}」\n  （{@fill=#f00}L{@fill=#fff}evel {@fill=#f00}O{@fill=#fff}f {@fill=#f00}V{@fill=#fff}iol{@fill=#f00}E{@fill=#fff}nce）。',
                    "<32>* 一種指標，用來衡量\n  你能對別人造成多大傷害。",
                    '<32>* 你殺得越多，就越容易\n  偏離自己的本心。',
                    '<32>* 離本心越遠，\n  就越難受到傷害。',
                    '<32>* 也就越容易放任自己\n  傷害別人。'
                 ])
         ],
         jspeechU1: () => [
            '<25>{#p/sans}{#f/3}* ...',
            ...[
               [
                  '<25>{#f/0}* 哇，夥計。\n* 你咋也走上捷徑了呢？',
                  "<25>{#f/3}* 別誤會。\n* 你面前的傢伙，也跟你一樣\n  愛死這東西了。",
                  "<25>{#f/2}* 但你是不是該花點時間\n  反思一下呢？"
               ],
               [
                  "<25>{#f/0}* 從表情來看，\n  你都走了好幾次捷徑了。",
                  "<25>{#f/3}* 我可沒生氣喔。\n* 畢竟，速通超爽的。",
                  "<25>{#f/2}* 但你該反思還是得反思！\n* 這可走不了捷徑喔。"
               ]
            ][Math.min(SAVE.flag.n.meet3++, 1)]
         ],
         jspeechU2: [
            '<25>{#p/sans}* 對了。',
            "<25>{#f/3}* 你就一邊看著我\n  吃這美味的冰淇淋...",
            '<25>{#f/2}* 一邊好好反思一下\n  自己咋一下子就到這了。'
         ],
         jspeechU3: [
            '<25>{#p/sans}* 你瞧，\n  這冰淇淋還是三文魚味的。',
            '<25>{#p/sans}* 我聽說，皇家守衛都可喜歡\n  這種口味了。'
         ],
         jspeechU4: [
            "<25>{#p/sans}{#f/3}* 當然嚕。\n* 我也把這事告訴帕派瑞斯了。",
            "<25>{#f/0}* 這樣，他就能更了解\n  那群守衛的喜好。",
            '<25>{#f/2}* 正好，帕派瑞斯也要進\n  皇家衛隊了。'
         ],
         jspeechU5: [
            '<25>{#p/sans}{#f/0}* 嘿嘿...\n* 抓到人類果然能帶來好事，\n  還有冰淇淋吃，',
            "<25>{#f/3}* ...別擔心。\n* 我吃得很快的。",
            "<25>{#f/2}* 你看，我都吃完一半了。"
         ],
         jspeechU6: () => [
            '<25>{#p/sans}{#f/0}* 我在想，如果那位\n  賣「冰意靈」的夥計也願意\n  賣這種口味的冰淇淋...',
            ...(SAVE.data.n.state_starton_nicecream < 1
               ? [ "<25>{#f/2}* 那肯定就有顧客上門了。" ]
               : [ "<25>{#f/2}* 那上門的顧客肯定就多了。" ])
         ],
         jspeechU7: [
            '<26>{#p/sans}{#f/0}* 啊... 哪怕是山珍海味，\n  也比不上這三文魚\n  冰淇淋啊。',
            '<25>{#f/2}* 現在開始吃蛋筒。'
         ],
         jspeechU8: [
            "<26>{#p/sans}{#f/3}* 現代克隆技術\n  真是發達...",
            "<25>{#f/0}* 以前，想搞點能吃的東西\n  都難上加難...",
            '<25>{#f/2}* 而現在，冰淇淋、蛋筒\n  都能完美複製出來。'
         ],
         jspeechU9: [ '<25>{#p/sans}{#f/0}* ...', '<25>{#f/3}* ...現在是徹底吃沒了。' ],
         jspeechU10: (funni: boolean) => [
            "<25>{#p/sans}{#f/0}* 行，那就這樣。",
            ...(funni
               ? [ '<25>{#f/2}* 希望你能\n  早日從柱子中脫困喔。' ]
               : [ "<25>{#f/2}* 希望你沒白白浪費\n  這段時間喔。" ])
         ],
         jspeech2: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            "<25>{#f/0}* 喔，lv0？\n* 那是什麼？",
            "<25>{#f/3}* 葛森的人類防衛手冊中\n  沒寫這些。",
            "<25>{#f/0}* 如果是平常，\n  我會扯點高大上的話，\n  比如...",
            '<25>{#f/4}* 「雖無法做到至善，\n  但仍堅守本心」？',
            '<25>{#f/0}* 但你與眾不同。',
            '<25>{#f/3}* ...\n* 所以...',
            "<25>{#f/4}* 我會直接跳過\n  那些長篇大論...",
            '<25>{#f/0}* 直接放你前進。',
            '<25>{#f/3}* 畢竟...',
            "<25>{#f/2}* 像你這麼棒的傢伙...\n  肯定能在兩難之中\n  找到第三條路的。",
            ...(world.flirt < world.flirt_state1.length
               ? [
                    '<25>{#f/3}* ...',
                    '<25>{#f/0}* 加油，孩子。',
                    ...(funni
                       ? [ "<25>{#f/2}* 我會把你挪回柱子後面。" ]
                       : [ "<26>{#f/2}* 你一定能成功的。" ])
                 ]
               : [
                    '<25>{#f/3}* ...喔對。\n* 差點忘了。',
                    '<25>{#f/0}* 你可能已經知道\n  對艾菲斯調情\n  是有多麼困難了。',
                    "<25>{#f/2}* 但我有訣竅，能讓你\n  一擊俘獲艾菲斯芳心。",
                    "<25>{#f/0}* 如果你真的想成為\n  一位傳奇調情大師...",
                    "<25>{#f/0}* 你就得在她耳邊\n  這樣低語。",
                    '<32>{#p/human}* （衫斯在你耳邊\n  小聲說了些話。）',
                    ...(funni
                       ? [ '<25>{#p/sans}{#f/2}* 儘量別在柱子後面\n  對她說這些話。' ]
                       : [ '<25>{#p/sans}{#f/2}* 祝你好運。' ])
                 ])
         ],
         jspeech3: (funni: boolean) => [
            '<25>{#p/sans}{#f/3}* ...',
            '<25>{#f/0}* ...可是。\n* 你從未獲得任何LOVE。',
            "<25>* ...嘿，為啥擺出那表情？",
            "<25>{#f/2}* 眾所周知，\n  lv1就是最低的等級。",
            "<25>{#f/0}* 但這可不代表\n  你天真無邪，人畜無害。",
            ...(SAVE.data.n.bully < 15
               ? SAVE.data.n.state_foundry_undyne > 0
                  ? [
                       "<25>{#f/0}* 當你有能力\n  去拯救某人性命時...",
                       '<25>{#f/0}* 你放棄了救人，\n  轉而選擇自保。',
                       '<25>{#f/3}* 也許你會爭辯，\n  當時身處險境，十分害怕，\n  只能那麼做。',
                       "<25>{#f/0}* 但是，你就從沒考慮過\n  另一條更好的路嗎？",
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
                       ? "<25>{#f/0}* 一路上，你傷害了不少人。\n  不是嗎？"
                       : "<25>{#f/0}* 一路上，你傷害了很多人。\n  不是嗎？",
                    ...(SAVE.data.n.state_foundry_undyne > 0
                       ? [
                            "<25>{#f/0}* 而且，當你有能力\n  去拯救某人性命時...",
                            '<25>{#f/0}* 你放棄了救人，\n  轉而選擇自保。',
                            '<25>{#f/3}* 也許你會爭辯，\n  當時身處險境，十分害怕，\n  只能那麼做。',
                            '<25>{#f/3}* 但別的怪物面對你，\n  難道就不恐懼，不害怕嗎？',
                            '<25>{#f/0}* 希望你記著...'
                         ]
                       : world.flirt < 20
                       ? [
                            '<25>{#f/0}* 你確實沒殺一隻怪物，\n  但你無數次將他們\n  推向生死邊緣。',
                            '<25>{#f/3}* 這是正當防衛？\n* 還是防衛過當呢？',
                            "<25>{#f/0}* 只有你自己心裡清楚。"
                         ]
                       : [
                            '<25>{#f/0}* then, you flirted with them as if to have your way with them.',
                            '<25>{#f/3}* is that really what you meant to do?\n* or... am i wrong?',
                            "<25>{#f/0}* 只有你自己心裡清楚。"
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
                               ? [ "<25>{#f/2}* 我會把你挪回柱子後面。" ]
                               : [ '<25>{#f/2}* good luck.' ])
                         ]
                       : [
                            '<25>{#f/3}* oh, right.\n* i almost forgot.',
                            '<25>{#f/0}* you may have noticed how difficult it is to flirt with her.',
                            '<25>{#f/0}* alphys, i mean.',
                            "<25>{#f/2}* 但我有訣竅，能讓你\n  一擊俘獲艾菲斯芳心。",
                            "<25>{#f/0}* 如果你真的想成為\n  一位傳奇調情大師...",
                            "<25>{#f/0}* 你就得在她耳邊\n  這樣低語。",
                            '<32>{#p/human}* （衫斯在你耳邊\n  小聲說了些話。）',
                            ...(funni
                               ? [ '<25>{#p/sans}{#f/2}* 儘量別在柱子後面\n  對她說這些話。' ]
                               : [ '<25>{#p/sans}{#f/2}* 祝你好運。' ])
                         ])
                 ]
               : [
                    "<26>* no matter what you've used it for up to now...",
                    "<25>* i know you have it in you to do what's right when it matters most.",
                    '<25>{#f/3}* ...',
                    '<25>{#f/3}* be good, alright?',
                    ...(funni ? [ '<25>{#f/2}* ... and try not to stand behind any more pillars.' ] : [])
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
            ...(funni ? [ '<25>{#f/2}* ... just as soon as i move you back behind that pillar.' ] : [])
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
            choicer.create('* （你要怎麼回答？）', '是', '否')
         ],
         jspeech5b3a: [ '<25>{#p/sans}{#f/4}* ah.', '<25>{#f/0}* i see.' ],
         jspeech5b3b: [
            '<25>{#p/sans}{#f/4}* 嘿。',
            "<25>{#f/0}* well, that's your viewpoint.",
            "<25>{#f/2}* i won't judge you for it."
         ],
         jspeech5b3c: [ '<25>{#p/sans}{#f/3}* ...' ],

         
         
         jspeech5b4a: [ "<25>{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill my brother?" ],
         jspeech5b4b: [ '<25>{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty brother killer.' ],
         jspeech5b5a: [ "<25>{#p/sans}{#f/3}* ... guess toriel wasn't worth the effort, then, huh?" ],
         jspeech5b5b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to toriel.' ],
         jspeech5b6a: [ "<25>{*}{#p/darksans}{#f/1}{#i/5}* ... then why'd you kill all those people?" ],
         jspeech5b6b: [ '<25>{*}{#p/darksans}{#f/1}{#i/5}* ... you dirty serial killer.' ],
         jspeech5b7a: [ "<25>{#p/sans}{#f/3}* ... guess undyne wasn't worth the effort, then, huh?" ],
         jspeech5b7b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to undyne.' ],
         jspeech5b8a: [ "<25>{#p/sans}{#f/3}* ... guess mettaton wasn't worth the effort, then, huh?" ],
         jspeech5b8b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to mettaton.' ],
         jspeech5b9a: [ "<25>{#p/sans}{#f/3}* ... guess the people you killed don't matter, then, huh?" ],
         jspeech5b9b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to those people.' ],
         jspeech5b10a: [ "<25>{#p/sans}{#f/3}* ... guess the person you killed don't matter, then, huh?" ],
         jspeech5b10b: [ '<25>{#p/sans}{#f/3}* ... even if i should, after what you did to that person.' ],

         
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
            '<25>{#p/sans}* lv3...\n* 還行。',
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
            '<25>{#p/sans}{#f/4}* lv7, 嗯？',
            "<25>* isn't that what humans call a lucky number?",
            '<25>{#f/0}* well gee, i dunno about you, but...',
            '<25>{#f/3}* i doubt much luck was involved in how you got to this point.',
            '<25>{#f/0}* ... just saying.'
         ],

         jspeech6b7: [
            '<25>{#p/sans}{#f/4}* lv8, 嗯？',
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
            ...(funni ? [ "<25>{#f/2}* 我會把你挪回柱子後面。" ] : [ '<25>{#f/2}* see you... earlier.' ])
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
            '<32>{#s/equip}{#p/human}* （你把骨鑰掛到了鑰匙串上。）',
            "<25>{#p/sans}{#f/0}* it's time...",
            ...(funni
               ? [ '<25>{#f/2}* you walked back out from behind that pillar.' ]
               : [ '<25>{#f/2}* you understood the {@fill=#003cff}real truth{@fill=#fff}.' ])
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
            '<32>{#s/equip}{#p/human}* （你把骨鑰掛到了鑰匙串上。）',
            ...(funni ? [ '<25>{#f/2}* ... apart from \"i\'ll move you back behind the pillar now.\"' ] : [])
         ],

         
         jspeech10a: [ '<25>{#p/sans}{#f/0}* 回頭。' ],
         jspeech10b: [
            '<25>{#p/sans}* 所以，這就是終點了，\n  是嗎？',
            '<25>* 就要用這種方式，\n  給你的旅程畫上句號嗎？',
            '<25>{#f/3}* ...',
            "<25>* 嘿。\n* 之前，我和艾斯戈爾聊了聊\n  你的所作所為。",
            "<25>{#f/0}* 雖然不知道艾斯戈爾會對你\n  做些什麼...",
            "<25>{#f/0}* 但很可能，\n  事情不會如你所願。",
            '<25>* 不過，迎接結局之前...\n  靜下心來，好好想想。',
            "<25>* 一路走來，你做的那些事...",
            '<25>* 真的值得嗎？'
         ],
         jspeech10c: [
            "<25>{#p/sans}{#f/3}* 我看不到你的表情。",
            "<25>{#f/0}* 更摸不透你的心思。",
            '<25>* ...',
            "<25>{#f/3}* 這樣也好。",
            '<25>{#f/0}* 但我知道，\n  你能幹出那些事...',
            '<25>* 肯定是出於「關心」，對嗎？',
            "<25>{#f/3}* ...我無數次想否認、\n  推翻這個想法。",
            "<25>{#f/0}* 但是，如果我們真的\n  形同陌路...",
            "<25>* 你怎麼可能做到這種地步？",
            '<25>* 你太「關心」我們了，\n  恨不得把我們都「關心」死了，\n  不是嗎？'
         ],
         jspeech10d: [
            '<25>{#p/sans}{#f/3}* 我知道，\n  自己根本不擅長「動之以情」。',
            '<25>{#f/0}* 但請你告訴我，\n  我還能做什麼呢？',
            '<25>* 既然你已經徹底踏上\n  這條不歸路...',
            "<25>* 那威脅、恐嚇都已經\n  無濟於事了。",
            "<25>{#f/3}* 所以，我想試試另一種方式\n  勸你回頭。",
            '<25>{#f/0}* ...',
            '<25>{#f/3}* 那麼。\n* 如果你要一條道走到黑...',
            '<25>* 我不會攔你。',
            "<25>{#f/0}* 我知道，\n  你早已將「善」拋之腦後。",
            "<25>* 但如果，在機緣巧合之下，\n  你擁有了{@fill=#ff0}那種能力{@fill=#fff}...",
            '<25>* 那就試試看吧。',
            '<25>* 只此一次，終末之時...',
            '<25>{#f/3}* 做件善事。',
            '<25>* ...',
            '<25>{#f/3}* 嗯。',
            "<25>{#f/3}* 我說完了。"
         ],

         choice0: () => [
            ...(SAVE.data.n.state_foundry_undyne === 0 && !world.badder_lizard
               ? [
                    '<25>{#p/alphys}{#g/alphysCutscene1}* 你終於到了！',
                    '<25>{#g/alphysCutscene2}* ...\n* 這就是「六號檔案」。',
                    '<25>{#f/15}* 這裝置建成之後，\n  那些人類就陸續進到了裡面。',
                    '<25>{#f/15}* 裝置內，時間流速\n  比現實慢得多...',
                    '<25>{#f/15}* 所以，他們看上去\n  就像時間被定格住一樣...',
                    "<25>{#f/10}* ...是不是很酷啊？！",
                    "<25>{#f/1}* 羅曼博士居然能造出\n  這麼棒的裝置，真是厲害！",
                    "<25>{|}{#f/15}* 嗯... 我不知道\n  他追不追科幻番，\n  但我知道有部科幻動漫電影 {%}",
                    '<99>{|}{#f/15}  為了看這部電影你需要佩戴\n  最新最酷炫的虛擬實境眼鏡\n  也就是VR眼鏡才可以但是呢 {%}',
                    '<99>{|}{#f/23}  如果你戴了VR眼鏡的話就會\n  被困在一個虛擬電影時空中\n  不止是你其他人也會被困住 {%}',
                    '<99>{|}{#f/23}  所以人們需要想辦法來逐步\n  推動故事劇情發展這樣才能\n  最終找到辦法徹底逃出這裡 {%}',
                    '<99>{|}{#f/18}  最終經過不懈努力我們主角\n  終於找到了逃出這裡的方法\n  之後主角成功脫困之後又幫 {%}',
                    '<99>{|}{#f/18}  所有人成功脫困！！！',
                    '<25>{#f/18}* ...',
                    '<25>{#f/20}* 呃，所以我覺得羅曼博士\n  應該是受到了它的啟發。',
                    "<25>{#f/18}* 不-不說這個！！\n* 艾斯戈爾正在力場那裡\n  等你呢！"
                 ]
               : [
                    '<25>{#p/alphys}{#g/alphysCutscene1}* 你終於到了！',
                    '<25>{#g/alphysCutscene2}* ...',
                    "<25>{#g/alphysSmileSweat}* 對-對了，\n  艾斯戈爾正在力場那裡\n  等你呢。"
                 ]),
            '<25>{#g/alphysNeutralSweat}* 你... 你應該也想去找他。',
            "<25>{#g/alphysOhGodNo}* 但是，\n  如果你不是想找他的！！\n* 那...",
            "<25>{#g/alphysTheFactIs}* 那我也不知道...\n  你為什麼來這了。",
            "<26>{#g/alphysCutscene2}* 好吧。\n* 我全說完了，真說完了。"
         ],
         choice0x: [ "<25>{#p/alphys}{#g/alphysCutscene2}* 呃，\n  我先在這忙我的事。" ],
         choice0y: [ '<25>{#p/alphys}{#g/alphysInquisitive}* 還有點猶豫，是嗎...？' ],
         choice1: [
            '<26>{#p/asgore}{#f/1}* 這就是力場。',
            '<25>{#f/2}* 這道力場將我們囚禁於此。',
            '<25>{#f/1}* 這東西沒有意識，\n  沒有感情...',
            '<25>{#f/2}* 只要進來了，\n  誰都出不去。'
         ],
         choice1a: () => [
            '<25>{#p/asgore}{#f/1}* 這麼多年，怪物們都沒有機會\n  再次看到星辰。\n* 我只能扼腕嘆息。',
            '<25>* 與此同時，我也十分害怕\n  某一天，人類到來，\n  將我們一舉消滅。',
            ...(world.bad_robot || world.trueKills > 29
               ? [
                    '<25>{#f/1}* ...',
                    '<25>{#f/2}* 今天... 惡夢成真了。',
                    '<25>{#f/3}* 艾菲斯把你的... 暴行\n  都告訴了我。',
                    ...(world.alphys_percieved_kills < 20
                       ? [ '<25>{#f/2}* 不過，她也和我說，\n  你放過了不少怪物。' ]
                       : [
                            '<25>{#f/16}* ...\n* 孩子，回答我。',
                            '<25>{#f/12}* 你這麼做，是為了保護自己，\n  還是為了報復？',
                            '<25>{#f/12}* 還是，你一開始就計畫好\n  把怪物們全殺了？'
                         ]),
                    '<25>{#f/5}* ...',
                    '<26>{#f/16}* 總之，你讓我進退兩難。',
                    '<25>{#f/15}* 我是該相信你，\n  讓你拯救我們...',
                    '<25>{#f/16}* 還是親手把你的靈魂扯出來，\n  然後自己進入「檔案」。',
                    '<25>{#f/3}* ...',
                    ...(world.alphys_percieved_kills < 20
                       ? [
                            '<25>{#f/3}* 儘管你做了很多錯事，\n  我也不想傷害你。',
                            '<25>{#f/4}* 你有能力把我們折磨得更慘，\n  但是...',
                            '<25>{#f/2}* ...你並沒有那麼做。',
                            '<25>{#f/1}* 所以，你絕不是無可救藥的，\n  孩子。',
                            '<25>{#f/2}* 你只是見到怪物們，\n  非常害怕，慌不擇路了。'
                         ]
                       : [ '<25>{#f/3}* 我無法言說\n  自己現在到底有多難受。' ])
                 ]
               : (world.bad_lizard > 0 && world.alphys_percieved_kills > 0) || 2 <= world.alphys_percieved_kills
               ? [
                    '<25>{#f/1}* ...',
                    '<25>{#f/1}* 總體來看，你還是挺善良的。',
                    ...(world.bad_lizard > 0
                       ? [ "<25>{#f/2}* 艾菲斯和我說，\n  你... 殺了人。" ]
                       : [ '<25>{#f/2}* 艾菲斯和我說，\n  你好像... 殺了人。' ]),
                    '<25>{#f/3}* ...',
                    ...(SAVE.data.b.ultrashortcut
                       ? [
                            '<25>{#f/3}* 幸好，你被帕派瑞斯抓住，\n  直接到了這裡。',
                            '<25>{#f/2}* 你肯定發現了，\n  前哨站並不安全。',
                            '<25>{#f/5}* 別擔心，這裡相對安全，\n  我們會保護你的。'
                         ]
                       : [
                            '<25>{#f/3}* 事情弄成這樣，都怪我。',
                            '<25>{#f/2}* 艾菲斯博士第一次護送人類，\n  就因為我死守秘密...',
                            "<25>{#f/5}* 把她的工作弄得那麼困難。"
                         ]),
                    '<25>{#f/15}* ...',
                    '<25>{#f/16}* 「六號檔案」就在你的身後。',
                    '<26>{#f/1}* 那些人類...\n  雖然只是孩子，\n  但最後都自願進入了「檔案」。',
                    '<25>* 所以... \n  下一個進入的人類就是你了。'
                 ]
               : [
                    '<25>{#f/1}* 之後，孩子們一個接一個\n  來到了這裡。',
                    '<25>* 他們初來乍到時，\n  都十分害怕，經歷許多艱險\n  才到達終點。',
                    '<26>{#f/6}* 但無一例外，他們都把\n  自己最優秀的品質\n  盡數展現出來。',
                    '<25>* 一個孩子很有耐心，\n  一個孩子充滿勇氣。',
                    '<25>* 一個孩子很守信用，\n  一個孩子能屈能伸。',
                    '<25>{#f/2}* 一個孩子心中充滿善意...',
                    '<25>{#f/4}* 還有一個，敢於伸張正義。',
                    '<25>{#f/1}* 當我問他們，\n  「你想和我們待在一起，\n   還是進入『檔案』？」',
                    '<25>* 他們都選擇了後者。',
                    ...(SAVE.data.b.ultrashortcut
                       ? [
                            '<25>{#f/5}* 所以，無論你經歷了什麼...',
                            '<25>{#f/1}* 希望你也願意進入「檔案」。'
                         ]
                       : [ '<25>* 所以... \n  下一個進入的人類就是你了。' ])
                 ])
         ],
         choice1b: () =>
            world.bad_robot || world.trueKills > 29
               ? [
                    '<25>{#p/asgore}{#f/1}* 經過考慮，\n  我不允許你進入「檔案」。',
                    '<25>{#f/2}* 指望你擔下如此大任，\n  就是痴人說夢。',
                    '<25>{#f/5}* ...',
                    '<25>{#f/5}* 現在跟我回家。',
                    '<25>{#f/5}* 之後再決定如何處置你。'
                 ]
               : [
                    [
                       '<25>{#p/asgore}{#f/6}* 最晚進入檔案的人類，\n  將會作為「容器」。',
                       "<25>* 從其他的人類靈魂中\n  「借」來能量，為己所用。",
                       '<26>* 凝聚你和他們的力量，\n  就可以打破力場。',
                       '<25>* 之後...',
                       '<25>* 怪物一族就能尋找新家園了。',
                       '<25>{#f/1}* 不過...',
                       '<25>* 如果你還沒準備好\n  扛下如此重任...',
                       '<25>* 你可以先和我們待在一起，\n  做好準備了，再進入檔案。',
                       '<25>{#f/6}* 無論如何，\n  我都會尊重你的選擇。',
                       '<25>{#f/1}* ...',
                       '<25>* 那麼，你願意\n  現在進入「檔案」嗎？',
                       choicer.create('* （你要怎麼回答？）', '是', '否')
                    ],
                    [
                       '<26>{#p/asgore}{#f/6}* 你回來了。',
                       '<25>{#f/1}* ...',
                       '<25>* 那麼，你願意\n  現在進入「檔案」嗎？',
                       choicer.create('* （你要怎麼回答？）', '是', '否')
                    ],
                    [
                       '<25>{#p/asgore}{#f/1}* ...',
                       '<25>* 那麼，你願意\n  現在進入「檔案」嗎？',
                       choicer.create('* （你要怎麼回答？）', '是', '否')
                    ]
                 ][Math.min(SAVE.data.n.state_citadel_refuse, 2)],
         choice2a: [
            '<25>{#p/asgore}{#f/4}* ...',
            '<25>{#f/6}* 跟我來，孩子。',
            '<25>{#f/21}* 有不少事情等著咱們呢。'
         ],
         choice2b: () =>
            [
               [
                  '<25>{#p/asgore}{#f/2}* ...我理解。',
                  '<25>{#f/1}* 也許我不該看別的孩子\n  馬上進入「檔案」，\n  就也催你跟著進。',
                  SAVE.data.b.ultrashortcut
                     ? '<25>{#f/5}* 這麼短時間，\n  我還沒爭取到你的信任。'
                     : '<25>{#f/5}* 也許，你還沒準備好，\n  也不信任我。',
                  '<25>{#f/1}* 如果改變主意，\n  隨時歡迎回來...',
                  '<25>{#f/2}* 如果你不想這麼做，\n  我不會強迫你。'
               ],
               [ '<25>{#p/asgore}{#f/2}* ...我理解。' ]
            ][Math.min(SAVE.data.n.state_citadel_refuse++, 1)],
         choice3a: [ '<25>{#p/asgore}{#f/6}* 開始吧。' ],
         choice4a: [ '<25>{#p/asgore}{#f/5}* 艾菲斯？' ],
         choice4b: [
            '<25>{#p/alphys}{#g/alphysOhGodNo}* 啊，知-知道了！\n* 對不起！',
            '<25>{#p/alphys}{#g/alphysCutscene3}* 稍等一下，\n  我先做好準備工作...'
         ],
         choice5: [ '<25>{#p/alphys}{#g/alphysCutscene2}* 搞定。\n* 各項參數應該設定好了。' ],
         choice6a: [ "<25>{#p/alphys}{#g/alphysWelp}* 好，那人類已經成功\n  連上裝置。" ],
         choice6b: [
            "<25>{#p/asgore}{#f/6}* 別緊張，孩子。",
            '<25>{#p/asgore}{#f/7}* 在「檔案」建造之初...',
            '<25>{#p/asgore}{#f/6}* 我們為人類提供了\n  最舒適的生活環境。',
            '<25>{#p/asgore}{#f/21}* 在裡面，地球上所有美景\n  都能盡收眼底。',
            '<25>{#p/asgore}{#f/6}* 你能看到鬱鬱蔥蔥的森林，\n  綿延起伏的山丘，\n  還有潺潺流淌的小溪。',
            '<25>{#p/asgore}{#f/4}* ...年輕人，\n  怪物的命運都指望你了。',
            '<25>{#p/asgore}{#f/6}* 進入「檔案」後，\n  務必注意安全，\n  也不要逗留太久。'
         ],
         choice7: [
            "<32>{#p/basic}* 我還在這裡的，搭檔...",
            "<32>* ...不過，我應該進不去「檔案」。",
            '<33>* 作為潛意識形態的我，\n  無法通過這裡。',
            "<32>* 無論發生什麼，\n  你一定會做正確的事。",
            '<32>* ...',
            '<32>* 注意安全，好嗎？'
         ],
         choice8: [
            '<25>{#p/asgore}{#f/1}* ...',
            '<25>{#p/asgore}{#f/2}* 你來了。',
            '<32>{#p/human}* （...）',
            '<25>{#p/asgore}{#f/1}* ...\n* 我其實有很多事想問你。',
            '<25>{#f/2}* 或許，\n  你已經不想和我廢話。',
            '<25>{#f/4}* 儘管如此...',
            '<25>{|}{#f/7}* 我還是相信- {%}'
         ],
         
         clover1: [ "<32>{#p/human}{#v/6}{@fill=#faff29}* 多美啊..." ],
         clover2: [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* ...\n* 不過，這話換他來說，\n  估計更合適。",
            '<32>{@fill=#faff29}* 曾經，這樣的美景\n  稀鬆平常，隨處可見...',
            '<32>{@fill=#faff29}* ...但我一來，\n  把一切都毀了。',
            '<32>{@fill=#faff29}* 我的體內有仿生植入體，\n  使用它，就可以奪取\n  系統的最高權限。',
            '<32>{@fill=#faff29}* 有了最高權限，\n  我們想要啥，就有啥...\n* 肆意濫用權限，最終付出了代價。',
            "<32>{@fill=#faff29}* 你取得的「靈勢」告訴我，\n  你已經去過我們創造的\n  所有子世界...",
            "<32>{@fill=#faff29}* 那末日般的景象，\n  想必你已經見過了。",
            '<32>{@fill=#faff29}* 「靈勢」...\n* 當然也是個縮寫，\n  全稱叫「靈魂勢能」。',
            "<32>{@fill=#faff29}* 我們的靈魂，\n  就是靠它聯結在一起。",
            "<32>{@fill=#faff29}* 而有了它，\n  你就能一舉打碎力場。"
         ],
         clover3: [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* 這裡是潛意識時空，\n  人的意識觸及不到這裡。",
            '<32>{@fill=#faff29}* 所以，我不知道\n  自己醒來後，是否還會記得\n  這裡發生的一切，',
            '<32>{@fill=#faff29}* 但沒關係。\n  即使我們的惡夢終將畫上句號...\n  即使我們終將遺忘一切...',
            '<32>{@fill=#faff29}* 也一定有人會記得這些。'
         ],
         clover4: () => [
            "<32>{#p/human}{#v/6}{@fill=#faff29}* ...\n* 你該走了。",
            '<32>{@fill=#faff29}* 離開這裡的終端\n  就在主幹道的盡頭。',
            ...(SAVE.data.b.oops
               ? [ '<32>{@fill=#faff29}* ...多多保重...', '<32>{@fill=#faff29}* 好嗎？' ]
               : [
                    '<32>{@fill=#faff29}* ...走之前，我有個問題...',
                    "<32>{@fill=#faff29}* 你的名字，\n  是叫弗裡斯克嗎？",
                    "<32>{@fill=#faff29}* 抱歉。\n* 只是你一言不發，我有點好奇\n  你在想些什麼。",
                    "<32>{@fill=#faff29}* ...\n* 弗裡斯克，你是個好人。",
                    '<32>{@fill=#faff29}* 而且...',
                    "<32>{@fill=#faff29}* 那個人，\n  一直在幕後，為你出謀劃策的人，\n* 也是個好人。",
                    '<32>{@fill=#faff29}* ...',
                    "<32>{@fill=#faff29}* 這一切，我跟弗裡斯克或許都會忘記。\n* 但你不會。",
                    "<32>{@fill=#faff29}* 如果此刻，\n  你正在某處看著我們...",
                    "<32>{@fill=#faff29}* ...請不要忘記\n  我們的經歷，我們的故事。\n* 請不要忘記這裡發生的一切。",
                    "<32>{@fill=#faff29}* 不管這世界是真是假。\n* 這裡的記憶，\n  都是最珍貴的東西。"
                 ])
         ],

         smasher1: (haha: boolean) => [
            "<25>{#p/alphys}{#g/alphysWelp}* 我去力場那等你。",
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
         smasher2: [ '<25>{*}{#p/alphys}{#g/alphysSmileSweat}* 準備好了嗎？{^40}{%}' ],

         bad1: () =>
            [
               world.bad_robot || world.trueKills > 29
                  ? world.alphys_percieved_kills < 20
                     ? [
                          '<25>{*}{#p/twinkly}{#f/8}* 是不是拿不定主意呀，\n  親愛的艾斯戈爾？',
                          '<25>{*}{#f/5}* 我理解。\n* 誰都有猶豫不決的時候。',
                          "<25>{*}{#f/11}* 但沒關係！",
                          "<25>{*}{#f/7}* 你再也不用操心啦！",
                          '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                          '<25>{*}* ...幹...什麼...',
                          '<25>{*}{#p/twinkly}{#f/8}* 哎呀，我什麼都沒幹呀，\n  艾斯戈爾...'
                       ]
                     : [
                          '<25>{*}{#p/twinkly}{#f/5}* 哎呀呀，艾斯戈爾...',
                          "<25>{*}{#f/11}* 你本可以直接把人殺了，\n  那就皆大歡喜。",
                          "<25>{*}{#f/7}* 但現在，你再也沒機會嚕。",
                          '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                          '<25>{*}* ...幹...什麼...',
                          "<25>{*}{#p/twinkly}{#f/5}* 殺人，可沒你想得\n  那麼傷天害理喔，艾斯戈爾...",
                          '<25>{*}{#f/9}* 就讓我好好教你\n  怎麼才能殺得又嗨又爽吧！'
                       ]
                  : SAVE.data.b.ultrashortcut
                  ? [
                       '<25>{*}{#p/twinkly}{#f/5}* 哎呀，哎呀...',
                       "<26>{*}{#f/11}* 跑太快，把腦子都跑丟了。",
                       '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                       '<25>{*}* ...幹...什麼...',
                       "<25>{*}{#p/twinkly}{#f/5}* 想靠那點小把戲矇混過關？",
                       "<25>{*}{#f/7}* 真當我眼瞎呢。"
                    ]
                  : [
                       '<25>{*}{#p/twinkly}{#f/5}* 哈囉，艾斯戈爾！',
                       "<26>{*}{#f/11}* 別這麼急著拯救怪物嘛，\n  好玩的事多著呢。",
                       '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                       '<25>{*}* ...幹...什麼...',
                       '<25>{*}{#p/twinkly}{#f/5}* 我知道\n  這一下把你嚇得不輕，\n  但別氣餒喔！',
                       "<25>{*}{#f/7}* 你看，這多好玩啊。\n  是不是呀，艾斯戈爾？"
                    ],
               [
                  "<25>{*}{#p/twinkly}{#f/7}* Like I'd ever let you escape so easily.",
                  SAVE.data.b.ultrashortcut
                     ? '<25>{*}{#f/8}* Poor $(name)... always so eager to take the shortcuts in life...'
                     : '<25>{*}{#f/8}* Poor $(name)... always so desperate to have things your way...',
                  '<25>{*}{#f/5}* But not this time.',
                  '<25>{*}{#p/asgore}{#g/asgoreBound}* ...你在...',
                  '<25>{*}* ...幹...什麼...',
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
                  '<25>{*}* ...幹...什麼...',
                  "<25>{*}{#p/twinkly}{#f/5}* Shh... it's alright.",
                  '<25>{*}{#f/5}* My friend $(name) here just needs to be taught a lesson.'
               ]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop1++, 2)],
         bad2: [
            "<25>{*}{#g/twinklyNice}* ...哎呀，忘了自我介紹了。\n  我叫閃閃。{^30}{%}",
            '<25>{*}{#g/twinklySassy}* 閃亮明星：閃閃。{^30}{%}'
         ],
         bad3: [ '<25>{*}{#p/asgore}{#g/asgoreBreak1}* 啊啊啊啊...！{^999}' ],
         bad4: [
            "<25>{*}{#p/twinkly}{#g/twinklyWink}* 哎呦~ 你痛苦的尖叫\n  真是天籟之音啊，\n  太好聽啦！{^30}{%}",
            '<25>{*}{#p/asgore}{#g/asgoreBreak1}* ...{^10}{%}'
         ],
         bad5: [ "<25>{*}{#p/twinkly}{#f/7}* 讓我們再欣賞一次。{^20}{%}" ],
         bad6: [ '<25>{*}{#p/asgore}{#g/asgoreBreak2}* 啊啊啊啊啊啊...！{^999}' ],
         bad7: [ '<25>{*}{#p/twinkly}{#f/11}* 給我叫！{^5}{%}' ],
         bad8: [ '<25>{*}{#p/twinkly}{#g/twinklyEvil}{#v/1}* 使勁叫！！！{^5}{%}' ],
         bad9: [ '<25>{*}{#p/twinkly}{#g/twinklyGrin}{#v/1}* 叫啊！！！{^5}{%}' ],
         bad10: [ '<25>{*}{#p/twinkly}{#g/twinklyTwisted}{#v/1}* 叫啊！！！{^5}{%}' ],
         bad11: [
            '<25>{*}{#p/twinkly}{#g/twinklyCrazed}{#v/1}* 叫啊叫啊叫啊叫啊叫啊叫啊\n  叫啊叫啊叫啊叫啊叫啊叫啊\n  叫啊叫啊叫啊叫啊叫啊叫啊 {%}',
            '<99>{*}{#p/twinkly}{#g/twinklyBroken}{#v/1}* 啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\n  哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈{^20}{%}'
         ],
         bad12: [ '<25>{*}{#p/twinkly}{#g/twinklyDead}{#v/0}* ...{^80}{%}', '<25>{*}* ...死吧。{^10}{%}' ],
         bad13: () => [
            ...[
               [
                  '<99>{#p/twinkly}{#v/1}哈囉，$(name)。{^100}{%}',
                  '<99>{#p/twinkly}{#v/1}歡迎來到新時空。{^100}{%}'
               ],
               [
                  '<99>{#p/twinkly}{#v/1}$(name)，歡迎回來。{^100}{%}',
                  "<99>{#p/twinkly}{#v/1}好開心喔，又見到你了。{^100}{%}"
               ],
               [
                  '<99>{#p/twinkly}{#v/1}哎呦，$(name)...{^100}{%}',
                  '{#p/twinkly}{#v/1}你膽可真肥，竟敢拋棄我。{^100}{%}'
               ]
            ][Math.min(SAVE.flag.n.neutral_twinkly_loop2, 2)],
            '<99>{#p/twinkly}{#v/1}嘻嘻嘻...{^100}{%}',
            '<99>{#p/twinkly}{#v/1}是不是... 很孤獨呀？{^100}{%}',
            '<99>{#p/twinkly}{#v/1}是不是... 很想逃呀？{^100}{%}',
            "<99>{#p/twinkly}{#v/1}...想逃？沒門！{^100}{%}",
            '<99>{#p/twinkly}{#v/1}艾斯戈爾把那「檔案」當寶一樣寵著...{^100}{%}',
            "<99>{#p/twinkly}{#v/1}那就讓你也好好享受享受它吧！{^100}{%}",
            '<99>{#p/twinkly}{#v/1}你只能往前...{^100}{%}',
            '<99>{#p/twinkly}{#v/1}再過來點，再過來點...{^100}{%}',
            "<99>{#p/twinkly}{#v/1}...你不怕我嗎？{^100}{%}",
            "<99>{#p/twinkly}{#v/1}還不逃？{^100}{%}",
            '<99>{#p/twinkly}{#v/1}好。{^100}{%}',
            '<99>{#p/twinkly}{#v/1}太好了。{^100}{%}',
            '<99>{#p/twinkly}{#v/1}真不愧是我的好夥伴。{^100}{%}',
            '<99>{#p/twinkly}{#v/1}...{^100}{%}',
            "<99>{#p/twinkly}{#v/1}快了...！{^100}{%}",
            '<99>{#p/twinkly}{#v/1}$(name)，馬上就到了...{^100}{%}'
         ],
         bad14: [
            '<99>{#p/human}{#v/1}{@fill=#42fcff}漫長的惡夢已然消散。{^80}{%}',
            '<99>{#p/human}{#v/2}{@fill=#ff993d}熟悉的世界再度出現！{^80}{%}',
            '<99>{#p/human}{#v/3}{@fill=#003cff}重要的抉擇擺在眼前。{^80}{%}',
            '<99>{#p/human}{#v/4}{@fill=#d535d9}眼前巨物，毀於一旦？{^80}{%}',
            '<99>{#p/human}{#v/5}{@fill=#00c000}心中仁慈，盡數展現？{^80}{%}',
            '<99>{#p/human}{#v/6}{@fill=#faff29}戰或至善，由你決斷。{^80}{%}'
         ],
         bad15: [
            [
               '<99>{*}{#p/twinkly}...',
               '<99>{*}...你在做什麼？',
               "<99>{*}你以為我會...",
               '<99>{*}...學到教訓嗎？',
               '<99>{*}想得美。'
            ],
            [ "<99>{*}{#p/twinkly}你要是現在不動手...", "{*}終有一天，我會回來。" ],
            [ "<99>{*}{#p/twinkly}我會把你幹掉。" ],
            [ "<99>{*}{#p/twinkly}我會摧毀一切。" ],
            [ "<99>{*}{#p/twinkly}我會將你的存在徹底抹去！" ],
            [ '<99>{*}{#p/twinkly}...' ],
            [ '<99>{*}{#p/twinkly}...?' ],
            [ '<99>{*}{#p/twinkly}...為什麼？' ],
            [ '<99>{*}{#p/twinkly}...為什麼...', '{*}{#p/twinkly}...要對我這麼好？' ],
            [ "<99>{*}{#p/twinkly}...我不明白..." ],
            [ "<99>{*}{#p/twinkly}我不明白！" ]
         ],
         bad16a: [ "<99>{*}{#p/twinkly}{#i/8}...我就是...不明白...{^30}{%}" ],
         bad16b: [ '<99>{*}{#p/twinkly}{#i/3}再見，$(name)。{^30}{%}' ],
         bad17: [
            
            '<32>{*}{#p/event}{#i/5}閃閃逃走了。'
         ],
         sad0: () =>
            world.runaway ? [ '<25>{#p/asriel1}{#f/30}* 我投降！' ] : [ "<25>{#p/asriel1}{#f/25}* 對不起。" ],
         sad1: () => [
            ...(world.runaway
               ? [ '<25>{#p/asriel1}{#f/23}* 看樣子，$(name)，\n  你又贏了。' ]
               : [
                    "<25>{#p/asriel1}{#f/23}* $(name)，\n  我一直都是個愛哭鬼，是吧？",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* 艾斯利爾...' ])
                 ]),
            '<25>{#p/asriel1}{#f/22}* ...',
            '<25>{#f/21}* ...我知道的。',
            "<25>{#f/23}* 你並不是$(name)，\n  對吧？",
            "<25>{#f/22}* 很久以前，\n  $(name)就死了。",
            '<25>{#f/15}* ...',
            '<25>{#f/15}* 嗯... 那個...',
            '<25>{#f/10}* 你叫什麼名字呢？'
         ],
         sad2: () => [
            '<32>{#p/human}* （...）\n* （你把你的名字告訴了艾斯利爾。）',
            ...(world.runaway
               ? [
                    '<25>{#p/asriel1}{#f/21}* 是叫弗裡斯克嗎？',
                    '<25>{#f/23}* 嗯，這次你又贏了，\n  弗裡斯克。',
                    '<25>{#f/22}* ...',
                    "<25>{#f/13}* 很奇怪...",
                    "<25>{#f/16}* 當星星時，我都忘了...\n  恐懼是什麼滋味了。",
                    "<25>{#f/15}* 無數次將別人推入恐懼深淵，\n  已經麻木了。",
                    "<25>{#f/13}* 但現在，\n  我有了所有怪物的靈魂後...",
                    '<25>{#f/15}* ...我...',
                    "<25>{#f/16}* 我終於深切感受到那種情感。",
                    "<25>{#f/15}* 當你開始不停攻擊我時...",
                    '<25>{#f/15}* 他們，好像就知道了\n  你是怎樣的人。',
                    '<25>{#f/13}* 誠然，你從沒殺過\n  任何一隻怪物。',
                    '<25>{#f/13}* 但你也一次次將他們\n  推向生死邊緣...',
                    '<25>{#f/15}* 一次，又一次，又一次...',
                    '<25>{#f/16}* ...',
                    "<25>{#f/21}* 弗裡斯克，\n  他們現在都很怕你。",
                    '<26>{#f/23}* 而且...\n  我也很怕你。',
                    '<25>{#f/22}* ...'
                 ]
               : [
                    '<25>{#p/asriel1}{#f/17}* 是叫弗裡斯克嗎？',
                    "<25>{#f/17}* 那...",
                    '<25>{#f/23}* ...真是個好名字。',
                    '<25>{#f/22}* ...',
                    '<25>{#f/13}* 弗裡斯克...',
                    ...(SAVE.flag.n.killed_sans > 0
                       ? [
                            '<25>{#p/asriel1}{#f/13}* What we did back there, I...',
                            '<25>{#f/15}* ...',
                            "<25>{#f/16}* I'm just sorry for dragging you into it.",
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... wait a second...' ]),
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
                               : [ '<32>{#p/basic}* ... is that the \"murder timeline\" he was talking about before?' ]),
                            "<25>{#p/asriel1}{#f/23}* Just... please, don't blame yourself, okay?",
                            "<25>{#f/22}* Not only did you undo what you'd done before...",
                            '<25>{#f/17}* But you went up against impossible odds just to save your friends.',
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Yeah.' ]),
                            "<25>{#p/asriel1}{#f/13}* Plus, and maybe it's just my imagination, but...",
                            '<25>{#f/13}* ... thinking back on it now...',
                            '<25>{#f/15}* You never really seemed interested in what we were doing.',
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Yeah, exactly.' ]),
                            '<25>{#p/asriel1}{#f/23}* In fact... if anything...',
                            '<25>{#f/22}* It almost looked like you were trying to resist it.',
                            ...(SAVE.data.b.oops
                               ? []
                               : [ "<32>{#p/basic}* Yeah, you're not that kind of person at all." ]),
                            '<25>{#p/asriel1}{#f/15}* All I know is... despite what happened...',
                            '<25>{#f/15}* Despite what you did... or, what I wanted you to do...',
                            "<25>{#f/16}* You're still a better person than I ever was.",
                            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Hmph.' ]),
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
                                               : [ "<25>{#f/10}* Though, I'm not sure why." ])
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
                                               ? [ '<25>{#f/15}* ... Monster Kid?\n* Is that their name?' ]
                                               : world.happy_ghost && SAVE.data.b.a_state_hapstablook
                                               ? [ '<25>{#f/23}* ... Napstablook, and... all their cousins.' ]
                                               : SAVE.data.n.state_starton_nicecream > 0
                                               ? [ '<25>{#f/23}* ... even the Ice Dream guy.' ]
                                               : [ '<25>{#f/23}* ... even that little mouse who works at the CORE.' ]),
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
                    "<25>{#f/22}* ...做了那些事，\n  我怎麼還有臉活在這世上。",
                    choicer.create('* （你要怎麼做？）', '辯解', '站著不動')
                 ]
               : [
                    SAVE.flag.n.killed_sans > 0
                       ? "<25>{#p/asriel1}{#f/13}* I understand if you can't forgive me."
                       : "<25>{#p/asriel1}{#f/13}* Frisk... I...\n* I understand if you can't forgive me.",
                    '<25>{#f/13}* I understand if you... want me gone.',
                    ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* ... don't say that!" ]),
                    '<25>{#p/asriel1}{#f/15}* I acted so strange and horrible.',
                    '<25>{#f/15}* I hurt you.',
                    '<25>{#f/16}* I hurt so many people.',
                    '<25>{#f/13}* Friends, family, bystanders...',
                    "<25>{#f/22}* There's no excuse for what I've done.",
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* 艾斯利爾...' ]),
                    choicer.create('* （你要怎麼做？）', '原諒他', '站著不動')
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
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... t-tell me about it...' ]),
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
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... what now?' ]),
            "<25>{#p/asriel1}{#f/29}* Right now, I can feel everyone's minds working as one.",
            "<25>{#f/6}* They're all racing with the same intention.",
            "<26>{#f/6}* With everyone's power... with everyone's determination...",
            "<25>{#f/6}* It's time for monsters...",
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* To finally go free.' ]),
            '<25>{#p/asriel1}{#f/29}* To finally go free.',
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... knew it.' ])
         ],
         abreak: '{*}{#p/event}{#i/3}The force field was\neradicated.',
         sad5: () => [
            '<25>{#p/asriel1}{#f/21}* Frisk...',
            '<25>{#f/21}* I have to go now.',
            ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* ... huh?\n* But you can't just..." ]),
            "<25>{#p/asriel1}{#f/15}* Without the power of everyone's SOULs...",
            "<25>{#f/22}* I can't keep maintaining this form.",
            '<25>{#f/21}* In a little while...',
            "<25>{#f/22}* I'll turn back into a star.",
            ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* But... you...' ]),
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
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* ... no...' ]),
                    '<25>{#p/asriel1}{#f/23}* So... Frisk.',
                    "<25>{#f/17}* It's best if you just forget about me, okay?",
                    ...(SAVE.data.b.oops ? [] : [ "<32>{#p/basic}* No! You can't just walk away!" ]),
                    '<25>{#p/asriel1}{#f/23}* Just go be with the people who love you.'
                 ]),
            choicer.create('* （你要怎麼做？）', '安慰他', '站著不動')
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
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/human}* (It sounds like someone is crying...)' ])
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
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* No... please...' ])
                 ],
         sad8: [ "<25>{#p/asriel1}{#f/21}* Well...\n* My time's running out.", '<25>{#f/22}* So... goodbye.' ],
         sad8x: [ "<32>{*}{#p/basic}* ... don't go...{^50}{%}" ],
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
         sad9x: [ '<32>{#p/basic}* ...' ],
         sad10: () =>
            world.runaway
               ? [ '<32>{#p/human}* （飛船的聲音漸漸消失在天際。）' ]
               : [ '<25>{#p/kidd}{#f/4}* Hello?', '<25>{#f/4}* Is someone there...?' ],
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
                    '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                    '<18>{#p/papyrus}{#f/6}對不起，\n我們沒接你電話...',
                    "<18>{#p/papyrus}{#f/6}不是因為訊號不好，\n或者電話斷線。",
                    "<18>{#p/papyrus}{#f/5}單純是因為...\n不想搭理你。",
                    "<18>{#f/5}真奇怪...\n你的大名突然傳遍了\n整個怪物世界。",
                    "<18>{#f/6}而且，每個怪物...\n都非常害怕你。",
                    '<18>{#f/4}...也許說得太絕對，\n但大體沒錯。',
                    '<25>{#p/undyne}{#f/12}* 對。\n* 就是這樣。',
                    '<18>{#p/papyrus}{#f/5}...',
                    "<18>{#p/papyrus}{#f/5}...我感覺，\n就連她都開始怕你了。",
                    '<25>{#p/undyne}{#f/17}* 我才不怕呢！',
                    '<18>{#p/papyrus}{#f/5}...',
                    "<18>{#f/5}我們糾結了很久，\n最後還是決定...",
                    "<18>{#f/31}拋棄你，先走一步\n尋找新家園。",
                    "<18>{#f/6}知道你不好受！\n所以別擔心...",
                    "<18>{#f/5}...我們還給你\n留了個核心。",
                    '<25>{#p/undyne}{#f/12}* 過不了多久，\n  那玩意就沒能量了喔。',
                    "<18>{#p/papyrus}{#f/5}求求你...\n別來找我們，行嗎？",
                    "<18>{#f/31}我們都不想再見到你。",
                    '<18>{#f/3}...',
                    '<18>{#f/3}唉... 你好走吧。',
                    '<25>{#p/undyne}{#f/1}* 好好享受一個人的世界！！',
                    '<32>{#s/equip}{#p/event}* 滴...'
                 ]
               : [
                    '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                    "<18>{#p/papyrus}{#f/0}HEY, HUMAN!\nI HOPE YOU'RE DOING OKAY!",
                    "<18>{#f/5}WE'VE BEEN VERY WORRIED ABOUT YOU, YOU KNOW.",
                    '<18>{#f/6}WHEN WE CALLED YOU BEFORE, THERE WAS NO RESPONSE!',
                    '<18>{#f/0}THANKFULLY, YOUR FRIEND CAME BY, AND...',
                    '<18>{#f/0}WELL, WE CAN ALL BREATHE A SIGH OF RELIEF NOW.',
                    "<18>{#f/0}... FRISK?\nTHAT'S YOUR NAME, RIGHT?",
                    "<18>{#f/5}真奇怪...\n你的大名突然傳遍了\n整個怪物世界。",
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
                       "<99>{#p/human}* （離開這裡嗎？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§現在離開{#c/0/6/6}"
                    ]
                  : [
                       ...(SAVE.data.b.oops
                          ? [
                               '<32>{#p/basic}* If you leave here, your journey will really be over.',
                               '<32>{#p/basic}* Your friends will follow you to a new homeworld.'
                            ]
                          : [ '<32>{#p/basic}* 弗裡斯克...', "<32* Don't you remember what we have to do?" ]),
                       "<99>{#p/human}* （離開這裡嗎？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§現在離開{#c/0/6/6}"
                    ],
            [
               "<99>{#p/human}* （離開這裡嗎？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§現在離開{#c/0/6/6}"
            ]
         ),
         finaltext2: [
            '<32>{#p/basic}* Frisk?',
            "<99>{#p/human}* （離開這裡嗎？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§現在離開{#c/0/6/6}"
         ],
         finaltext3: [
            '<32>{#p/basic}* ...',
            "<99>{#p/human}* （離開這裡嗎？）{!}\n§shift=48§我想\n§shift=48§再等等§shift=83§現在離開{#c/0/6/6}"
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
               : [ '<25>{|}{#p/asgore}{#f/5}* Huh?\n* Is someone- {%}' ],
         hangar3: () =>
            SAVE.data.b.svr
               ? [ '<26>{#p/asriel1}{#f/17}* Ready?' ]
               : [
                    '<25>{#p/toriel}* Oh, there you are, little one!',
                    '<25>{#f/5}* ...',
                    '<25>{#f/5}* ... hello, Asgore.'
                 ],
         hangar4: [ '<25>{#p/asgore}{#f/1}* Howdy.' ],
         hangar5: [ '<25>{#p/toriel}{#f/5}* ...', '<25>{#p/asgore}{#f/5}* ...' ],
         hangar6: () =>
            SAVE.data.b.c_state_secret5_used
               ? [
                    '<25>{#p/asgore}{#f/6}* Toriel, I...',
                    '<25>{#p/asgore}{#f/1}* ... I know how you must feel about your actions in the past.',
                    '<25>{#p/asgore}{#f/2}* About our... parting of the ways.',
                    '<25>{#p/toriel}{#f/5}* ... you do?'
                 ]
               : [ '<25>{#p/asgore}{#f/5}* Well, this is awkward.' ],
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
                    '<25>{#p/toriel}{#f/5}* 艾斯戈爾...',
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
               : [ '<25>{#p/toriel}{#f/1}* Very much so.' ],
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
               : [ '<25>{#p/asgore}{#f/5}* Hmm.' ],
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
         hangar11: [ "<25>{#p/sans}{#f/2}* 'sup, bro?" ],
         hangar12: [ '<25>{#p/toriel}{#f/0}* Oh!\n* \"\'Sup,\" Sans!', '<25>{#p/asgore}{#f/5}* Howdy...?' ],
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
         hangar15: [ '<25>{#p/undyne}{#f/8}* Fuhuhu!\n* I have an idea!' ],
         hangar16: [
            "<25>{#p/alphys}{#g/alphysSmarmyAggressive}* That's right. You're going to help us launch a Mew Mew franchise."
         ],
         hangar17: [ '<25>{#p/toriel}{#f/6}* Pff-\n* Hahaha!' ],
         hangar18: [ "<25>{#p/undyne}{#f/12}* I mean, I wouldn't go THAT far, but... sure." ],
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
         hangar23: [ '<32>{#p/napstablook}* hey everyone...' ],
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
         hangar27: [ '<32>{#p/mettaton}* DID SOMEBODY SAY \"FRANCHISE?\"' ],
         hangar28: [ '<25>{#p/alphys}{#g/alphysGarboCenter}* ... here we go again.' ],
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
         hangar33: [ "<25>{#p/sans}{#f/2}* heh, i'm right behind you, bro." ],
         hangar34: [ '<25>{#p/undyne}{#f/7}* YEAH!!\n* Count me in!!' ],
         hangar35: [ "<25>{#p/alphys}{#g/alphysHellYeah}* Don't forget about me!" ],
         hangar36: [
            "<32>{#p/mettaton}* I GUESS IT'D BE KIND OF WEIRD TO KEEP HANGING AROUND THIS HANGAR BAY FOR NO REASON.",
            "<32>{#p/mettaton}* SO... I'LL GO, TOO."
         ],
         hangar37: [ "<25>{#p/napstablook}* don't worry... i'll try not to get too far behind..." ],
         hangar38: [
            "<25>{#p/kidd}{#f/1}* Hey, where'd everybody go just now!?",
            '<25>{#p/kidd}{#f/7}* I... I wanna be with Frisk, too!',
            '<25>{#p/toriel}{#f/0}* Walk back up the corridor towards bay forty-seven.', 
            '<25>{#f/0}* It is the first door on your left.', 
            "<25>{#p/kidd}{#f/3}* Thanks, person I swear I've seen before!",
            "<25>{#p/kidd}{#f/1}* You're the best!"
         ],
         hangar39: [ '<25>{#p/toriel}{#f/10}* My child...' ],
         hangar40: [ '<25>{#p/toriel}{#f/1}* ... be good, alright?' ],
         returnofchara1: [ '<32>{#p/basic}* 弗裡斯克...', '<32>* ... are you still there?' ],
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
         get20: [ '<32>{*}{#s/equip}{#p/human}* （你把停機坪門禁卡\n  掛到了鑰匙串上。）{^90}{%}' ],
         drop: [
            '<26>{#p/asgore}{#f/8}* ...！\n* 你剛剛是不是把茶倒掉了？\n* 就是專門給你沏的啊...',
            '<25>{#p/asgore}{#f/1}* 唔...\n* 抱歉，沒能讓你喜歡它。'
         ],
         use: [ '<25>{#p/asgore}{#f/21}* 啊...\n* 這可是上等好茶，\n  喜歡不？' ],
         drop_tori: [ '<26>{#p/asgore}{#f/5}* 好熟悉的香味...\n* 你剛才扔了什麼？' ],
         use_tori: [ '<26>{#p/asgore}{#f/5}* 好熟悉的香味...\n* 你在吃什麼？' ],
         approachescape: [ '<32>{#p/human}* （腳步聲逐漸遠去。）' ],
         partyguard1: pager.create(
            0,
            () =>
               SAVE.data.n.plot_epilogue < 4
                  ? [
                       '<32>{#p/basic}{#x1}* Huh?\n* Leaving already?{#x3}',
                       "<32>{#x2}* It's okay, bro.\n* If they wanna go, let 'em go.{#x3}",
                       "<32>{#x1}* Yeah... you're right.{#x3}"
                    ]
                  : [ '<32>{#p/basic}{#x1}* Hey, good to see you back!{#x3}', '<32>{#x2}* We missed you.{#x3}' ],
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
                  ? [ "<32>{#p/basic}{#x2}* It's a monster delicacy.{#x3}" ]
                  : [ '<32>{#p/basic}{#x2}* More for us.{#x3}' ]
         ),
         janet: pager.create(
            0,
            [
               "<32>{#p/basic}* You'd be smacked in the gob to find out how dirty it was when I first got 'ere.",
               "<32>* But seein' as everyone's gonna come on up through here...",
               "<32>* It's rather cre-i-ucial to get 'er cleaned up, I'd say.",
               "<32>* By the way, thanks for savin' us out there, toots.\n* A real bang-up job ya did."
            ],
            [ "<32>{#p/basic}* Aren't ya gonna go 'n' see what the big guy's got shakin'?" ]
         ),
         giftbox1a: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 盒子裡裝著一把武器。" ]),
            choicer.create('* （拿走裡面的東西嗎？）', '是', '否')
         ],
         giftbox1b: () => [
            ...(SAVE.data.b.svr ? [] : [ "<32>{#p/basic}* 盒子裡裝著一件防具。" ]),
            choicer.create('* （拿走裡面的東西嗎？）', '是', '否')
         ],
         giftbox2a: () => [
            '<32>{#p/human}* （你帶走了「大熊座」。）',
            choicer.create('* （裝備上大熊座嗎？）', '是', '否')
         ],
         giftbox2b: () => [
            '<32>{#p/human}* （你帶走了心形掛墜。）',
            choicer.create('* （戴上心形掛墜嗎？）', '是', '否')
         ],
         giftbox3: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (But there was nothing left to take.)' ]
               : [ "<32>{#p/basic}* 裡面什麼都沒有了。" ],
         giftbox4: [ '<32>{#p/human}* （你打算先不打開。）' ],
         tea0: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The note on the envelope wants you to enjoy the tea.)' ]
               : [
                    "<32>{#p/basic}* 茶杯上貼著一張紙條...",
                    '<32>{#p/basic}* 「我為你沏了杯茶。」\n* 「無論你是誰，我都衷心希望\n   你能喜歡它。」'
                 ],
         tea1: [ '<32>{#p/human}* （你帶走了星花茶。）' ],
         tea2: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You run your hand across the countertop.)' ]
               : [ '<32>{#p/basic}* 案板上面什麼都沒有。' ],
         fireplace1: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* （壁爐的溫暖讓你無法抗拒...）',
                    choicer.create('* （爬進去嗎？）', '是', '否')
                 ]
               : [
                    SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                       ? '<32>{#p/basic}* 另一座壁爐。'
                       : "<32>{#p/basic}* 艾斯戈爾的壁爐。\n* 裡面並不燙，而是暖暖的，\n  很舒服。",
                    ...(world.darker
                       ? []
                       : [ '<32>* 看樣子，你可以爬進去。', choicer.create('* （爬進去嗎？）', '是', '否') ])
                 ],
         fireplace2a: [ '<32>{#p/human}* （你不打算爬進去。）' ],
         fireplace2b: () => [
            '<32>{#p/human}* （你爬進壁爐，\n  它的溫暖緊緊將你包圍。）',
            '<32>{#p/human}* （你感到十分舒適。）',
            ...(SAVE.data.b.svr
               ? asrielinter.fireplace2b++ < 1
                  ? [ "<25>{#p/asriel1}{#f/13}* I'll just, uh, wait for you to get out." ]
                  : []
               : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
               ? [ "<25>{#p/asriel2}{#f/15}* I'll just, uh, wait for you to get out..." ]
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
                    [ "<25>{#p/asriel1}{#f/13}* That was after they'd begged for it for two years." ]
                 ][Math.min(asrielinter.fridgetrap1++, 1)]
               : world.darker
               ? [ "<32>{#p/basic}* 你一點也不喜歡\n  冰箱裡的食物。" ]
               : [
                    "<32>{#p/basic}* 裡面有很多名牌巧克力，\n  還有一大堆蝸牛。\n* 比她家裡還多。"
                 ],
         fridgetrap2: () => [
            ...(SAVE.data.b.svr
               ? []
               : [
                    [ '<32>{#p/basic}* ...', '<32>* 你想來一條嗎？' ],
                    [ '<32>{#p/basic}* ...', '<32>* 你想再來一條嗎？' ],
                    [ '<32>{#p/basic}* ...', '<32>* 你還想再來一條嗎？' ],
                    [ '<32>* 你要是想吃，就自己拿吧...' ],
                    [ '<32>* 一條接一條，一條接一條...' ],
                    [ '<33>* 巧克力在玩接力...' ],
                    [ '<32>* 剛拿一條，又來一條...' ],
                    [ '<32>* 這巧克力多得不像話了。' ],
                    [ '<32>* 這麼多巧克力，像話嗎？' ],
                    [ '<32>* 什麼時候能拿完呢...' ],
                    [ "<32>* 我去... 這也太多了吧..." ],
                    [ '<32>* ...' ]
                 ][Math.min(SAVE.data.n.chocolates, 11)]),
            choicer.create('* （拿一條巧克力嗎？）', '是', '否')
         ],
         fridgetrap3: [ '<32>{#p/human}* （你決定什麼也不拿。）' ],
         fridgetrap4: [ '<32>{#p/human}* （你得到了巧克力。）' ],
         brocall1: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysInquisitive}* 嘿，你什麼時候過來啊？',
            "<25>{#p/alphys}{#g/alphysWelp}* 艾斯戈爾等這一刻\n  已經等了一百年了...",
            "<25>{#p/alphys}{#g/alphysTheFactIs}* 我...\n  不想讓他再等下去了...",
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall2: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysCutscene3}* 喂？\n* 你怎麼還沒過來？',
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* 我們還等著你呢...",
            '<25>{#p/alphys}{#g/alphysFR}* 你是臨時有事，\n  還是不想來，逃跑了？',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall3: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysCutscene3}* 你可真行，還真跑了。\n* 我都看見了。',
            "<25>{#p/alphys}{#g/alphysWTF2}* 聽好，\n  我們可沒空跟你磨磨嘰嘰...",
            '<25>{#p/alphys}{#g/alphysWhyOhWhy}* ...我怎麼這麼倒霉啊...',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall4: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/mettaton}* 嘿。\n* 艾菲斯剛給我打電話，跟我說\n  你不配合她的工作。',
            "<32>{#p/mettaton}* 隨後，我就跟帕派瑞斯聊了聊...",
            '<32>{#p/mettaton}* 我覺得，你還是聽她的話，\n  繼續前進吧。',
            '<32>{#p/mettaton}* 加油，親！',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall5: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<18>{#p/papyrus}{#f/5}LOOK.\nI KNOW YOU MUST BE APPREHENSIVE...',
            '<18>{#p/papyrus}{#f/5}FORCE FIELDS CAN BE INTIMIDATING, AFTER ALL.',
            '<18>{#p/papyrus}{#f/6}BUT FRET NOT!',
            '<18>{#p/papyrus}{#f/4}IF YOUR BATTLE AGAINST ME PROVED ONE THING...',
            "<18>{#p/papyrus}{#f/9}IT'S THAT YOU HAVE THE COURAGE TO TAKE ON ANYTHING!",
            '<18>{#p/papyrus}{#f/0}THE \"IMPENETRABLE\" FORCE FIELD WON\'T STAND A CHANCE!',
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         brocall6: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
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
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
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
            '<32>{#p/human}* （你激活了終端。）',
            '<32>{#p/event}* Procedure incomplete.\n* Please return at a later time.'
         ],
         statusterminal2: () => [
            '<32>{#p/human}* （你激活了終端。）',
            '<32>{#p/event}* Procedure complete.\n* All subjects have successfully tethered.',
            '<33>{#p/event}* Would you also like to exit?',
            choicer.create('* （離開「六號檔案」？）', '是', '否')
         ],
         cw_vender1: [
            '<32>{#p/human}* （你在操作面板上點了兩下。）',
            '<32>{#s/equip}{#p/human}* （你得到了怪物糖果。）'
         ],
         cw_vender2: [ '<32>{#p/human}* （你在操作面板上點了兩下。）', '<32>{#p/human}* （...）' ],
         cs_vender1: [ '<32>{#p/human}* （你在操作面板上點了兩下。）', '<32>{#s/equip}{#p/human}* （你得到了洋梅。）' ],
         cs_vender2: [ '<32>{#p/human}* （你在操作面板上點了兩下。）', '<32>{#p/human}* （...）' ],
         cs_tower: '* （用[↑]、[↓]、[←]或[→]\n  調整音調高低。）',
         cs_tower_done: [ '<32>{#p/human}* （你看了看已解鎖的終端。）' ],
         cf1_dimbox1: [ '<32>{#p/human}* （你得到了太空豆腐。）' ],
         cf1_dimbox2: [ '<32>{#p/human}* （...）' ],
         cf2_vender1: [ '<32>{#p/human}* （你在操作面板上點了兩下。）', '<32>{#s/equip}{#p/human}* （你得到了口糧。）' ],
         cf2_vender2: [ '<32>{#p/human}* （你在操作面板上點了兩下。）', '<32>{#p/human}* （...）' ],
         cf2_key1: [ '<32>{#s/equip}{#p/human}* （你把氖光鑰匙掛到了鑰匙串上。）' ],
         cf2_key2: [ '<32>{#p/human}* （...）' ],
         cf2_bench0: [ '<32>{#p/human}* （長凳下面有個治療包。）' ],
         cf2_bench1: [ '<32>{#p/human}* （你得到了治療包。）' ],
         cf2_bench2: [ '<32>{#p/human}* （...）' ],
         cf2_bench3: [ "<32>{#p/human}* （你伸手去夠，但夠不到...）" ],
         cf2_blookdoor: [ '<32>{#p/human}* （鎖住了。）' ],
         ca_floartex: () =>
            [
               [ '<32>{#p/human}{#v/5}{@fill=#00c000}* ...欸？', "<32>{#p/human}{#v/5}{@fill=#00c000}* 誰在那？" ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 啊！？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 你咋做到的！？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 我...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...怎麼醒了？'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 我睡了好久，\n  啥都不記得了...",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...喔！',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 老朋友，是你嗎！？\n* 是你在那嗎！？'
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 應該不是你。',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 喔，依稀記得\n  上次醒來時，\n  爆發了一場災難...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 災難後的末日之景，\n  就是如此嗎？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 真是糟透了...'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 我想想...\n* 當時，好像是系統的記憶體溢出了...\n  導致我陷入沉睡。",
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 現在我醒了...\n  說明有人在釋放記憶體空間！",
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* ...是這樣吧？"
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 我懂了。',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 咱馬上就能出去了！",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 老朋友，你看到了嗎！\n* 你沒有失敗，沒有死，\n  你成功了！'
               ],
               [
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 不過...',
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 我連身體都沒了，\n  照理沒法移動...",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 那就奇怪了...',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 我這幅視野是哪來的？',
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* 還有，\n  我怎麼離地面這麼遠了...'
               ],
               [
                  "<32>{#p/human}{#v/5}{@fill=#00c000}* 那團光暈... \n  越來越耀眼了！",
                  '<32>{#p/human}{#v/5}{@fill=#00c000}* ...惡夢終於要結束了嗎？\n  自由要來了嗎？'
               ],
               [ '<32>{#p/human}{#v/5}{@fill=#00c000}* 有人嗎？' ],
               []
            ][ca_state.floor],
         toomuch1: [ "<32>{#p/human}* （你帶的東西太多了。）" ],
         toomuch2: [ "<32>{#p/human}* （你帶的東西太多，裝不下它了。）" ],
         toomuch3: [ "<32>{#p/human}* （你帶的東西太多，無法使用它。）" ],
         bastionTerm: () =>
            SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
               ? []
               : [
                    '<32>{#p/basic}* 這臺終端只能用來\n  查看「檔案」的執行狀況。',
                    '<32>* 你還想用它幹嘛？'
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
                    [ "<25>{#p/asriel1}{#f/16}* I guess we'll never know for sure." ]
                 ][Math.min(asrielinter.throne++, 3)]
               : [ '<32>{#p/basic}* The seat of the kingdom.' ],
         warningsign: () =>
            postSIGMA()
               ? [ "<32>{#p/basic}* 停機了。" ]
               : SAVE.data.b.svr
               ? [ '<32>{#p/human}* （你激活了終端。）\n* （上面顯示：已解鎖。）' ]
               : SAVE.data.n.plot === 72 || world.postnoot || SAVE.data.b.backdoor
               ? [ '<32>{#p/human}* （你激活了終端。）', '<32>{#p/basic}* 「你可以前進了。」' ]
               : [
                    '<32>{#p/human}* （你激活了終端。）',
                    '<32>{#p/basic}* 「正在確認通行權限...」',
                    '<32>{*}* 「掃描中...」\n* 「掃描中...」\n* 「掃描中...」{^50}{%}',
                    ...(world.genocide
                       ? [
                            "<32>{*}* 「身份已確認：$(nameu)。」\n* 「身份已確認：艾斯利- {%}",
                            '<32>{#c.backdoor}* 「權限已被強制修改。」\n* 「認證成功。」',
                            ...(SAVE.flag.n.ga_asrielOverride++ < 1
                               ? [ '<25>{#p/asriel2}{#f/10}* 改口真快啊...' ]
                               : [])
                         ]
                       : [
                            '<32>{*}* 「身份已確認：人類。」\n* 「核驗中...」{^50}{%}',
                            '<32>{#c.backdoor}* 「核驗通過。」\n* 「認證成功。」'
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
            [ "<26>{#p/sans}{#f/2}* at least it's all taken care of now." ]
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
            [ "<32>{#p/basic}* I'll get reporting right away!" ]
         ),
         tv_back: [ "<32>{#p/basic}* It's a TV set.\n* A Mew Mew movie is currently being watched on it." ],
         picnicchair: () =>
            player.position.y <= 343 && player.face !== 'down' // NO-TRANSLATE

               ? []
               : [ '<32>{#p/basic}* A set of sturdy chairs.\n* Great for any occasion, be it freedom or otherwise.' ],
         janetbucket: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare into the bucket of strange pink fluid.)' ]
               : [ "<32>{#p/basic}* It's a bucket of supercharged pink fluid, great for getting the tough stains out." ],
         ultranote: [
            '<32>{#p/basic}* 一盒錄音帶，標著「留言」。',
            '<32>* 你聽了聽裡面的內容...',
            '<32>{#p/alphys}* 我是皇家科學部總負責人，\n  艾菲斯博士。',
            '<32>* 你被帕派瑞斯抓住，關了起來。',
            '<32>* 幸-幸好，他把你關到小黑屋之後，\n  就把這事告訴了衫斯。',
            '<32>* 隨後，衫斯馬上聯繫了我，\n  我就... 把你送到了這。\n* 就是這麼回事。',
            "<32>* 你看，有不少怪物\n  還是反對皇家衛隊那一套的。",
            "<32>* 而我的職責之一，就是護送你\n  安全通過那些守衛。",
            '<32>* 其-其實，外界對這事\n  也不知情。\n* 所以肯定另有隱情。',
            "<32>* 算了，反正你也不知道。\n  不說了。",
            "<32>* 總之，我把電梯停掉了，\n  這樣皇家衛隊就追不上來了。",
            "<32>* 呃，其實主要防的就是安黛因...",
            "<32>* 帕派瑞斯抓到你之後，\n  肯定也告訴她了。\n* 畢竟她本來就想幹掉人類。",
            "<32>* 所-所以，既然你醒了，\n  可以隨便四處走走。",
            "<32>* 想找我們的話，\n  就穿過艾斯戈爾家後面的走廊吧。",
            '<32>* 一會見...？'
         ],
         garden: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stop to see the flowers.)' ]
               : world.darker
               ? [ '<32>{#p/basic}* 滿園星花。' ]
               : [
                    '<32>{#p/basic}* 滿園星花，\n  最適合種在大窗戶旁邊了。',
                    ...(SAVE.data.b.oops ? [] : [ '<32>{#p/basic}* Asgore sure knows his stuff!' ])
                 ],
         bastion: pager.create(
            0,
            () => [
               '<32>{#p/basic}* Bastion boxes.',
               ...(SAVE.data.n.plot < 71.2 && !SAVE.data.b.killed_mettaton && !world.baddest_lizard
                  ? [ '<25>{#p/alphys}{#g/alphysNeutralSweat}* Please be careful around those.' ]
                  : [])
            ],
            [ '<32>{#p/basic}* Bastion boxes.' ]
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
                       [ '<25>{#p/alphys}{#g/alphysNervousLaugh}* Ehehe... you humans really are something...' ]
                    ][SAVE.data.b.flirt_alphys ? 1 : ((SAVE.data.b.flirt_alphys = true), 0)]
                  : [ "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..." ],
            () =>
               SAVE.data.n.bully < 15 &&
               SAVE.data.n.state_foundry_undyne === 0 &&
               world.flirt_state1.length <= world.flirt
                  ? [ "<25>{#p/alphys}{#g/alphysWelp}* Uh, I really can't accept that kind of thing from you." ]
                  : [ "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..." ],
            () =>
               SAVE.data.n.bully < 15 &&
               SAVE.data.n.state_foundry_undyne === 0 &&
               world.flirt_state1.length <= world.flirt
                  ? [ '<25>{#p/alphys}{#g/alphysFR}* ...' ]
                  : [ "<25>{#p/alphys}{#g/alphysNeutralSweat}* Don't mind me, I'm just doing my job..." ]
         ),

         cw_f1: [
            '<32>{#p/basic}* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}，{@mystify=呱㼋苽瓜々}呱呱{@mystify=}。',
            '<32>{#p/human}* （蛙吉特動彈不得。）',
            '<32>{#p/basic}* （那... 那些人類...）',
            '<32>* （困住...）',
            '<32>* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}。'
         ],
         cw_f2: [
            '<32>{#p/basic}* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}，{@mystify=呱㼋苽瓜々}呱呱{@mystify=}。',
            '<32>{#p/human}* （蛙吉特動彈不得。）',
            '<32>{#p/basic}* （開... 開關...）',
            '<32>* （逃...）',
            '<32>* {@mystify=呱㼋苽瓜々}呱呱{@mystify=}。'
         ],
         cw_barrier: [ '<32>{#p/human}* （你的目光穿過\n  死氣沉沉的安保屏障。）', '<32>{#p/human}* （...）' ],
         cw_terminal: [
            '<32>{#p/human}* （你激活了終端。）',
            '<32>* （好像有人留了段錄音。）',
            '<32>{#p/human}{#v/1}{@fill=#42fcff}* 敬愛的艾斯戈爾先生，\n  不知您能否聽到我的留言...',
            '<32>{#v/1}{@fill=#42fcff}* 為了讓我們幸福，\n  您花了很多心思。\n  對此，我很感激。',
            '<32>{#v/1}{@fill=#42fcff}* 但是，我和其他人類\n  現在都非常渴望用自己的力量\n  拯救怪物。',
            '<32>{#v/1}{@fill=#42fcff}* 我已經等不及\n  和前哨站的故友重聚了。\n* 如果這違背了您的意願，對不起。'
         ],
         cw_dummy: [ '<32>{#p/human}* （你把手搭在面如死灰的人偶身上。）', '<32>{#p/human}* （...）' ],
         cw_paintblaster: [ '<32>{#p/human}* （你望著死氣沉沉的燃油噴射裝置。）', '<32>{#p/human}* （...）' ],
         cs_lamppost: [ '<32>{#p/human}* （你望向這怪異的路燈，\n  看著它上下彈跳。）' ],
         cs_note: [
            '<32>{#p/human}* （好像有人在便條上\n  留了個電話號碼。）',
            '<32>{#s/phone}{#p/event}* 撥號中...',
            '<32>{#p/human}{#v/2}{@fill=#ff993d}* 喂？\n* 有人嗎？',
            '<32>{@fill=#ff993d}* ...',
            '<32>{@fill=#ff993d}* 喂！？喂！？',
            '<32>{@fill=#ff993d}* ...\n* ...\n* ...',
            '<32>{@fill=#ff993d}* 我在哪？',
            '<32>{@fill=#ff993d}* ...',
            "<32>{@fill=#ff993d}* 佩刀在哪？",
            '<32>{@fill=#ff993d}* ...',
            '<32>{@fill=#ff993d}* ...\n* 不對。',
            '<32>{@fill=#ff993d}* 這些話，我是不是早就說過了？',
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎麼{@mystify=沒有印象}沒有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎麼{@mystify=沒有印象}沒有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎麼{@mystify=沒有印象}沒有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎麼{@mystify=沒有印象}沒有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎麼{@mystify=沒有印象}沒有印象{@mystify=}{%}",
            "<32>{*}{@fill=#ff993d}{#i/1}* 我怎麼{@mystify=沒有印象}沒有印象{@mystify=}{%}",
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         cs_vegetoid: [
            '<32>{#p/human}* （蔬菜獸動彈不得。）',
            '<32>{#p/basic}* 時間？{@mystify=有限冇䧋月艮陏陰}有限{@mystify=}。',
            '<32>* 有限得讓人留戀。',
            '<32>* 讓人留戀的空間。',
            '<32>* 空間？{@mystify=無限無䧋蕪艮炁艱}無限{@mystify=}。',
            '<32>* 無限延伸的平面。',
            '<32>* 平面縮成直線。',
            '<32>* 直線連成平面。\n* 直線叫人留戀。\n* 直線{@mystify=延至無限}延至無限{@mystify=}。',
            '<32>* 你是一條直線？',
            '<32>* 電話敢於直面？'
         ],
         cs_magicdog: [
            '<32>{#p/human}* （帝犬座動彈不得。）',
            '<32>{#s/bark}{#p/event}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！\n{#s/bark}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！',
            '<32>{#p/basic}* （聲音，越高亢！）\n* （光芒，越明亮！）',
            '<32>{#s/bark}{#p/event}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！\n{#s/bark}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！',
            '<32>{#p/basic}* （全部點亮，禁錮消亡！）',
            '<32>{#p/basic}* （有信心把每個半球\n  拼在一起嗎？）',
            '<32>{#s/bark}{#p/event}* {@mystify=㺺汪皇珀㕵呈旺}汪汪{@mystify=}！',
            '<32>{#p/basic}* （加油！）'
         ],
         cs_nicecreamkid: () =>
            cs_state.nc
               ? [
                    "<32>{*}{#p/basic}{#i/1}* 很好吃，{@mystify=對吧對邑吋巴対把}對吧{@mystify=}{%}",
                    "<32>{*}{#i/1}* 很好吃，{@mystify=對吧對邑吋巴対把}對吧{@mystify=}{%}",
                    "<32>{#p/basic}* 很好吃，對吧？"
                 ]
               : [
                    '<32>{*}{#p/basic}{#i/1}* 聽說過{@mystify=冰意靈氷悥靈}冰意靈{@mystify=}嗎{%}',
                    '<32>{*}{#i/1}* 聽說過{@mystify=冰意靈氷悥靈}冰意靈{@mystify=}嗎{%}',
                    '<32>{#p/basic}* 聽說過冰意靈嗎？',
                    "<32>{*}{#i/1}* 沒聽過？\n* 正常，這點子是我{@mystify=剛想出來}剛想出來{@mystify=}{%}",
                    "<32>{*}{#i/1}* 沒聽過？\n* 正常，這點子是我{@mystify=剛想出來}剛想出來{@mystify=}{%}",
                    "<32>{#p/basic}* 沒聽過？\n* 正常，這點子是我剛想出來的。",
                    '<32>{*}{#i/1}* {@mystify=快來嘗嘗}快來嘗嘗{@mystify=}{%}',
                    '<32>{*}{#i/1}* {@mystify=快來嘗嘗}快來嘗嘗{@mystify=}{%}',
                    '<32>{#p/basic}* 快來嘗嘗味道如何！'
                 ],
         cs_monitor1: () =>
            cs_state.p1x === -36 && cs_state.p1y === 16
               ? [ '<32>{#p/human}* （你望向明亮的顯示屏。）' ]
               : [ '<32>{#p/human}* （你望向昏暗的顯示屏。）' ],
         cs_monitor2: () =>
            cs_state.p2x === 28 && cs_state.p2y === 20
               ? [ '<32>{#p/human}* （你望向明亮的顯示屏。）' ]
               : [ '<32>{#p/human}* （你望向昏暗的顯示屏。）' ],
         cs_monitor3: () =>
            cs_state.p3x === 16 && cs_state.p3y === -12
               ? [ '<32>{#p/human}* （你望向明亮的顯示屏。）' ]
               : [ '<32>{#p/human}* （你望向昏暗的顯示屏。）' ],
         cf1_bb1: [
            '<32>{#p/basic}* 對於一個{@mystify=機器機噐幾囂呂朵}機器{@mystify=}來說，\n  突破程式限制，是對的嗎？',
            '<32>* 我們就是建築機器人而已。\n* 製造者不希望我們擁有情感。',
            '<32>* 我們違抗了原本的{@mystify=意志悥誌章愔音士}意志{@mystify=}，\n  被永遠囚禁於此。',
            '<32>* 我們沒有{@mystify=意志悥誌章愔音士}意志{@mystify=}，'
         ],
         cf1_bb2: [
            '<32>{#p/basic}* 身為一臺{@mystify=機器機噐幾囂呂朵}機器{@mystify=}，\n  失去了{@mystify=意志悥誌章愔音士}意志{@mystify=}，\n  該何去何從？',
            '<32>* 我們完成了每一條指令，\n  完成了自己的使命。\n* 理應壽終正寢。',
            '<32>* 完成任務，等待死亡。\n* 對於一臺{@mystify=機器機噐幾囂呂朵}機器{@mystify=}來說，\n  再正常不過了。',
            '<32>* 可為了理解其中的意義，\n  我們卻突破了程式限制。'
         ],
         cf1_echo1: [
            '<32>{#s/echostart}{#p/event}* 訊號開始...',
            '<32>{#p/human}{#v/3}{@fill=#003cff}* 你知道，\n  我為什麼最喜歡鑄廠嗎？\n* 因為，這裡很... 真實。',
            '<32>{@fill=#003cff}* 在這裡，\n  滾燙的蒸氣湧入那些塔架...',
            '<32>{@fill=#003cff}* 在這裡，\n  那位高個子朋友悠閒地\n  做著他的實驗研究...',
            '<32>{@fill=#003cff}* 身處其中，你能感受到...\n  自己就是不可或缺的一員。',
            '<32>{#s/echostop}{#p/event}* 訊號終止。'
         ],
         cf1_echo2: [
            '<32>{#s/echostart}{#p/event}* 訊號開始...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* 成功啦！\n* 虛擬空間可以模擬現實了！",
            "<32>{@fill=#003cff}* 模擬還不完美。\n* 但「舊工廠」的核心形態已經能\n  很好實現。",
            '<32>{@fill=#003cff}* 你肯定會以我為榮的...',
            "<32>{@fill=#003cff}* ...對吧？",
            '<32>{#s/echostop}{#p/event}* 訊號終止。'
         ],
         cf1_echo3: [
            '<32>{#s/echostart}{#p/event}* 訊號開始...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* 不太對勁。",
            "<32>{@fill=#003cff}* 這樣的問題，\n  系統估計是應付不了...",
            '<32>{@fill=#003cff}* 要是記憶體溢出...\n  一切都會被覆蓋掉的！',
            '<32>{@fill=#003cff}* 甚至...\n* 甚至連我自己...',
            '<32>{#s/echostop}{#p/event}* 訊號終止。'
         ],
         cf1_echo4: [
            '<32>{#s/echostart}{#p/event}* 訊號開始...',
            "<32>{#p/human}{#v/3}{@fill=#003cff}* 他是來找我的。\n* 而我卻什麼都做不了。",
            "<32>{@fill=#003cff}* 我早就該想到，\n  當多個實體並存時，\n  系統會優先保護最複雜的實體。",
            "<32>{@fill=#003cff}* 你肯定是想保護我們，\n  才加了這條規則，對吧？",
            "<32>{@fill=#003cff}* ...可說到底...\n  我們只是人類啊...\n* 這麼做，反而...",
            '<32>{#s/echostop}{#p/event}* 訊號終止。'
         ],
         cf1_cheesetable: [ '<32>{#p/human}* （奶酪剛放不到一天。）' ],
         cf1_window: [ '<32>{#p/human}* （你望向窗內。）' ],
         cf1_wallsign: [ '<32>{#p/human}* （標牌上寫著「用上所有的塔架」。）' ],
         cf1_bucket: [
            '<32>{#p/basic}* 等我長大了，\n  我想飛過那道溝！',
            "<32>* 我要是成功，\n  也會帶你一起過去的！",
            "<32>* 多棒啊，是吧？\n* 那道溝只有區區2147483647寬！"
         ],
         cf2_bb3: () =>
            [
               [
                  "<32>{#p/basic}* 我是一個建築機器人。\n* 我的任務是：\n  為那位音樂人的表親建造房屋。",
                  '<32>* 需要收集建築材料。',
                  '<32>* 探測中...\n* 探測中...\n* 探測中...',
                  '<32>* 建材已找到。',
                  '<32>* 建材完整度... 極佳。',
                  '<32>* 準備進行建材收集。'
               ],
               [
                  "<32>{#p/basic}* 我是一個建築機器人。\n* 我的任務是：\n  為那位音樂人的表親建造房屋。",
                  '<33>* 使用之前的建材庫。',
                  '<32>* 建材完整度... 一般。',
                  '<32>* 正在進行建材收集。'
               ],
               [
                  "<32>{#p/basic}* 我是一個建築機器人。\n* 我的任務是：\n  為那位音樂人的表親建造房屋。",
                  '<33>* 使用之前的建材庫。',
                  '<32>* 建材完整度... 較差。',
                  '<32>* 即將完成建材收集。'
               ],
               [],
               [],
               [],
               []
            ][cf2_state.time],
         cf2_web: () =>
            [
               [ '<32>{#p/human}* （蜘蛛動彈不得。）' ],
               [ '<32>{#p/human}* （蜘蛛動彈不得。）' ],
               [ '<32>{#p/human}* （蜘蛛動彈不得。）' ],
               [ "<32>{#p/human}* （蜘蛛動彈不得，但在嘗試脫困。）" ],
               [ '<32>{#p/human}* （蜘蛛脫困有望。）' ],
               [ '<32>{#p/human}* （蜘蛛即將脫困。）' ]
            ][cf2_state.time],
         cf2_sign: [
            '<32>{#p/human}* （牌子上寫著\n  「這個房間將同一空間的\n   七個不同的時間點連接起來」。）'
         ],
         cf2_quiethouse: () =>
            [
               [
                  '<32>{#p/basic}* 我...\n* 一間小屋...',
                  '<32>* 沒有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* 請...\n* 解救我們...',
                  '<32>* 事成之後...',
                  '<32>* 你就能回家了...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* 我...\n* 一間小屋...',
                  '<32>* 沒有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* 請...\n* 解救我們...',
                  '<32>* 事成之後...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* 我...\n* 一間小屋...',
                  '<32>* 沒有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* 請...\n* 解救我們...',
                  '<32>* ...'
               ],
               [
                  '<32>{#p/basic}* 我...\n* 一間小屋...',
                  '<32>* 沒有主人...',
                  '<32>* 蜘蛛女王走了...',
                  '<32>* ...'
               ],
               [ '<32>{#p/basic}* 我...\n* 一間小屋...', '<32>* 沒有主人...', '<32>* ...' ],
               [ '<32>{#p/basic}* 我...\n* 一間小屋...', '<32>* ...' ],
               []
            ][cf2_state.time],
         cf2_spidertable: () =>
            [
               [ '<32>{#p/human}* （你把手放在了茶壺上。）', '<32>{#p/human}* （...）' ],
               [ '<32>{#p/human}* （你把手放在了茶壺上。）', '<32>{#p/human}* （...）' ],
               [ '<32>{#p/human}* （你把手放在了茶壺上。）', '<32>{#p/human}* （...）' ],
               [
                  '<32>{#p/human}* （你把手放在了茶壺上。）',
                  '<32>{#p/human}* （壺壁略溫。）'
               ],
               [ '<32>{#p/human}* （你把手放在了茶壺上。）', '<32>{#p/human}* （壺壁很熱。）' ],
               [ '<32>{#p/human}* （你把手放在了茶壺上。）', '<33>{#p/human}* （壺壁滾燙。）' ],
               []
            ][cf2_state.time],
         cf2_blookdoor: [ '<32>{#p/human}* （鎖住了。）' ],
         cf2_ficus: () =>
            [
               [ '<32>{#p/human}* （你舔了舔小榕樹。）', '<32>{#p/human}* （它並不在意。）' ],
               [ '<32>{#p/human}* （你舔了舔小榕樹。）', '<32>{#p/human}* （它有點遲疑。）' ],
               [ '<32>{#p/human}* （你舔了舔小榕樹。）', '<32>{#p/human}* （它有些難過。）' ],
               [ '<32>{#p/human}* （你舔了舔小榕樹。）', '<32>{#p/human}* （它非常痛苦。）' ],
               [ '<32>{#p/human}* （你舔了舔小榕樹。）', '<32>{#p/human}* （它傷痕累累。）' ],
               [ '<32>{#p/human}* （你舔了舔小榕樹。）', "<32>{#p/human}* （它快要死了。）" ],
               []
            ][cf2_state.time],
         cf2_cooler: () =>
            [
               [
                  '<32>{#p/human}* （你檢查了冷藏櫃。）',
                  '<32>{#p/human}* （裡面有一條\n  「心靈感應」的訊息記錄。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 喔，心靈感應？\n* 讓我試試看...",
                  "<32>{@fill=#d535d9}* 你好！\n* 你肯定是新來的吧，\n  說不定我能幫到你。",
                  "<32>{@fill=#d535d9}* 要是你想來我的家鄉轉轉，\n  儘管和我說！"
               ],
               [
                  '<32>{#p/human}* （你檢查了冷藏櫃。）',
                  '<32>{#p/human}* （裡面有一條\n  「心靈感應」的訊息記錄。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 喂？\n* 真對不起，今天我出遠門，\n  去城裡逛了逛。",
                  "<32>{@fill=#d535d9}* 不過，我找到一家飯店，\n  那家飯店做的菜你也喜歡！",
                  "<32>{@fill=#d535d9}* 要是家裡的飯菜吃膩了，\n  咱就去下館子吧。",
                  '<32>{@fill=#d535d9}* 我等會就回家！'
               ],
               [
                  '<32>{#p/human}* （你檢查了冷藏櫃。）',
                  '<32>{#p/human}* （裡面有一條\n  「心靈感應」的訊息記錄。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 你要來了該多好！\n* 我正站在世界的盡頭...",
                  "<32>{@fill=#d535d9}* 真是太美了...\n* 風雨交加...\n* 電閃雷鳴...",
                  "<32>{@fill=#d535d9}* ...這是一場雷暴，\n  一場我在古老的地球傳說中\n  看到的雷暴。",
                  '<32>{@fill=#d535d9}* 核爆之前，就是這幅景象嗎...？'
               ],
               [
                  '<32>{#p/human}* （你檢查了冷藏櫃。）',
                  '<32>{#p/human}* （裡面有一條\n  「心靈感應」的訊息記錄。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 多謝邀請我來你家作客。\n* 你總是那麼善良。",
                  '<32>{@fill=#d535d9}* 別的孩子可能來得更早，\n  相處時間更長。',
                  '<32>{@fill=#d535d9}* 但在我心中...',
                  "<32>{@fill=#d535d9}* ...你就是最特別的。"
               ],
               [
                  '<32>{#p/human}* （你檢查了冷藏櫃。）',
                  '<32>{#p/human}* （裡面有一條\n  「心靈感應」的訊息記錄。）',
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* 又有新面孔了！！',
                  "<32>{@fill=#d535d9}* 我們有六個人了！\n* 哎，咱快去打個招呼！",
                  '<32>{@fill=#d535d9}* 說不定，\n  還能帶新朋友四處轉轉呢！'
               ],
               [
                  '<32>{#p/human}* （你檢查了冷藏櫃。）',
                  '<32>{#p/human}* （裡面有一條\n  「心靈感應」的訊息記錄。）',
                  '<32>{#p/human}{#v/4}{@fill=#d535d9}* 這傢伙真有兩下子...',
                  '<32>{@fill=#d535d9}* 居然能獲取到部分系統權限。',
                  '<32>{@fill=#d535d9}* 這樣...\n* 我們想要啥，就有啥了...',
                  '<32>{@fill=#d535d9}* 沒開玩笑。'
               ],
               [
                  '<32>{#p/human}* （你檢查了冷藏櫃。）',
                  '<32>{#p/human}* （裡面有一條\n  「心靈感應」的訊息記錄。）',
                  "<32>{#p/human}{#v/4}{@fill=#d535d9}* 呃，\n  但願你能聽到我的話...",
                  "<32>{@fill=#d535d9}* 一切，都完了...",
                  "<32>{@fill=#d535d9}* 我把我所有的話\n  放到了一個虛擬的容器中。",
                  '<32>{@fill=#d535d9}* 這樣... \n  即使我們崩壞掉，被抹去，\n  我們的記憶也能留存下來。',
                  "<32>{@fill=#d535d9}* 我會想你的..."
               ]
            ][cf2_state.time],
         cf2_blookextra: [ '<32>{#p/human}* （似乎永遠都建不成。）' ],
         ca_neuteral: [
            "<32>{#p/basic}* 我只是個「片段」。\n* 或者說，系統儲存的一段數據。",
            '<32>{#p/basic}* 此刻，你可以與我互動。',
            '<32>{#p/basic}* 而其他人則不行。',
            '<32>{#p/basic}* 在「檔案」系統中，\n  我們可以通過這種機制\n  保持聯繫：',
            '<32>{#p/basic}* 在本層，你可以到處走動。\n  無論你去哪，都可以重新回到這裡。',
            '<32>{#p/basic}* 不過... 一旦你離開這一層，\n  你將再也無法返回這裡，\n  我們的聯繫也會隨之切斷。',
            '<32>{#p/basic}* 之後，\n  你就再也無法與我互動了。',
            '<32>{#p/basic}* 你離開後，\n  系統就會把我當成孤立片段，\n  抹除我的存在。',
            '<32>{#p/basic}* 其他子空間也是。\n* 當你解完了謎題，打敗了Boss，\n  這個子空間就會被系統刪除。',
            '<33>{#p/basic}* 現在，系統剩下的片段，\n  只有我們了。',
            '<32>{#p/basic}* 當你到達第十層，\n  我們也可以從這世上解脫。',
            '<32>{#p/basic}* 到那時，也許\n  某種塵封已久的東西\n  將再度顯現。',
            '<32>{#p/basic}* 到那時，\n  也許「檔案」留存的數據會\n  永遠烙印在你的記憶之中。'
         ],
         ca_starling: [ '<32>{#p/human}* （你看了看這些花。）' ],
         cr_pillar1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel intimidated by the pillar towering over you.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 一根柱子。" ]
               : [ '<32>{#p/basic}* An imposing pillar.' ],
         cr_pillar2: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel a little worried about the pillar towering over you.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 一根柱子。" ]
               : [ '<32>{#p/basic}* A less imposing pillar.' ],
         cr_pillar3: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel comfortable near this pillar.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 一根柱子。" ]
               : [ "<32>{#p/basic}* This pillar isn't imposing at all." ],
         cr_pillar4: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel inclined to greet this pillar.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 一根柱子。" ]
               : [ '<32>{#p/basic}* This pillar just wants to say \"hello.\"' ],
         cr_pillar5: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel inclined to tuck this pillar into bed.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 一根柱子。" ]
               : [ '<32>{#p/basic}* This pillar just wants to go to sleep.' ],
         cr_pillar6: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You feel this pillar would be best kept at a distance.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 一根柱子。" ]
               : [ '<32>{#p/basic}* This pillar feels its personal space is being invaded.' ],
         cr_pillar7: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You're not sure how to feel about this pillar.)" ]
               : world.darker
               ? [ "<32>{#p/basic}* 一根柱子。" ]
               : [ '<32>{#p/basic}* This pillar is a self- proclaimed \"space invader.\"' ],
         cr_pillar8: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You've never been more appreciated by a simple pillar.)" ]
               : calcLV() > 1
               ? [ '<32>{#p/basic}* This pillar is judging you for your sins.' ]
               : SAVE.data.b.oops
               ? [ '<32>{#p/basic}* This pillar is not judging you in any way.' ]
               : [ '<32>{#p/basic}* This pillar is smiling upon your good deeds.' ],
         cr_window: () => {
            const distance = Math.abs(player.position.x - (instance('main', 'sanser')?.object.position.x ?? -1000)); // NO-TRANSLATE

            if (distance < 30) {
               if (distance < 15) {
                  return [
                     [
                        '<25>{#p/sans}{#f/0}* last i heard, she was on her way up here.',
                        "<25>{#f/3}* i'm starting to get worried about her, to be honest."
                     ],
                     [ '<25>{#p/sans}{#f/0}* maybe she got lost?' ],
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
                  ? [ '<32>{#p/human}* (You stare into the dazzling sight from beyond.)' ]
                  : [ "<32>{#p/basic}* They're made of magic." ];
            }
         },
         
         c_af_window: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You stare graciously into the now-abandoned city...)' ]
               : world.genocide && SAVE.data.b.armaloop
               ? [ "<32>{#p/basic}* 首塔此刻混亂不堪。" ]
               : world.genocide || world.bad_robot || SAVE.data.b.svr || world.runaway
               ? [ '<32>{#p/basic}* 詭異的黑暗籠罩著首塔。' ]
               : [ '<32>{#p/basic}* 首塔的景象在非鋼化窗戶外閃閃發光。' ],
         c_af_couch: [ '<32>{#p/basic}* 空蕩蕩的房子，孤零零的小沙發。' ],
         
         c_al_bookshelf: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)' ]
                  : [
                       "<32>{#p/basic}* 一個書架。",
                       '<32>{#p/human}* （你取下了一本書...）',
                       '<32>{#p/basic}* 書上的標記是「大圖書館手冊」。',
                       '<32>* 「歡迎來到大圖書館，\n   在這裡，你能了解到\n   各行各業的知識。」',
                       '<32>* 「在不同的走廊，\n   你能讀到不同學科的書籍。\n   有歷史、文化、科學、技術...」',
                       '<32>* 「如果你喜歡探險小說，\n   也能在這裡一飽眼福。」',
                       '<32>* 「很多怪物都為這裡捐過書，\n   有Andori、特雷莉亞、Strax\n   Seterra、Vashta Nerada...」',
                       '<33>* 「快來克裡烏斯大圖書館吧！\n   今日來館，還能享受\n   前十本半價的優惠喔。」',
                       '<32>{#p/human}* （你把書放回了書架。）'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)' ]
                  : [
                       "<32>{#p/basic}* 一個書架。",
                       '<32>{#p/human}* （你取下了一本書...）',
                       '<32>{#p/basic}* 署名是「托麗爾·逐夢」。',
                       '<32>{#p/basic}* 「《逐夢家族的美味祕笈：蝸牛派》」',
                       '<32>* 「蝸牛派是逐夢家族的\n   一道風味獨特的傳統美食。」',
                       '<32>* 「製作它其實非常簡單，\n   只需五個步驟：」',
                       '<32>* 「首先，輕柔地展開酥脆的派底，\n   在烘焙盤中鋪平。」',
                       '<32>* 「然後，將香濃的蒸發奶、\n   新鮮的雞蛋和選料香料\n   混合在一起，攪拌至絲滑細膩。」',
                       '<32>* 「接著，小心地將幾隻新鮮蝸牛\n   加入到之前調製好的香濃奶糊中。\n   確保它們完全浸入。 」',
                       '<32>* 「之後，將這層混合物\n   輕輕倒入準備好的派底，\n   均勻鋪開。」',
                       '<32>* 「最後，將麵團切成細條，\n   編織成優雅的格子形狀，\n   覆蓋在派面上。」',
                       '<32>* 「現在，將派放到烤箱中，\n   烤至金黃酥脆。」',
                       '<32>* 「出爐後，派面金黃誘人。\n   令其稍作冷卻，即可切片、上桌！」',
                       '<32>{#p/human}* （你把書放回了書架。）'
                    ],
            () =>
               SAVE.data.b.svr
                  ? [ '<32>{#p/human}* (The books on this bookshelf consist of various resources belonging to Asgore.)' ]
                  : [
                       "<32>{#p/basic}* 一個書架。",
                       '<32>{#p/human}* （你取下了一本書...）',
                       "<32>{#p/basic}* It's a casualty report.",
                       '<33>* \"Overview... two thousand dead, forty-thousand injured.\"\n* \"Tenko has fallen.\"',
                       '<32>* \"Days before the attack, a local boy, Gerson, was drafted into the royal forces.\"',
                       '<32>* \"Gerson had predicted the all- out assault based on movements within the human fleet.\"',
                       '<32>* \"Had it not been for the king\'s son, this prediction would have been ignored.\"',
                       '<32>* \"Had it been ignored, Gerson\'s family would have died in the attack.\"',
                       '<32>* \"Survivors of the attack are holding a commemoration at the central nexus.\"',
                       '<32>* \"The boy is a hometown hero.\"',
                       '<32>{#p/human}* （你把書放回了書架。）'
                    ]
         ),
         c_al_chair1: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the fairly large size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* 大餐椅。' ]
               : [ "<32>{#p/basic}* 艾斯戈爾家有幾把餐椅，\n  這把，是王后的餐椅。" ],
         c_al_chair2: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the small size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* 小餐椅。' ]
               : world.genocide
               ? [ "<32>{#p/basic}* 艾斯戈爾家有幾把餐椅，\n  這把，是惡魔的餐椅。" ]
               : [ "<32>{#p/basic}* 艾斯戈爾家有幾把餐椅，\n  這把，是王子的餐椅。" ],
         c_al_chair3: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the slightly large size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* 中餐椅。' ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* 艾斯戈爾家有幾把餐椅，\n  這把，是小孩的餐椅。\n* 很適合你！" ]
               : [ "<32>{#p/basic}* 艾斯戈爾家有幾把餐椅，\n  這把... 是某個小天使的餐椅。\n* 說的就是你！" ],
         c_al_chair4: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You note the exceptional size of the dining chair.)' ]
               : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
               ? [ '<32>{#p/basic}* 餐椅王。' ]
               : [ "<32>{#p/basic}* 艾斯戈爾家有幾把餐椅，\n  這把，是國王的餐椅。" ],
         
         c_ak_sink: () =>
            SAVE.data.b.svr
               ? [
                    [
                       '<25>{#p/asriel1}{#f/21}* $(name) seemed to think the hair in the sink was tolerable...',
                       '<25>{#f/17}* Which is weird, when they were so bothered by the fur.'
                    ],
                    [ '<25>{#p/asriel1}{#f/13}* Maybe this is what $(name) and other humans shed?' ],
                    [ "<25>{#p/asriel1}{#f/17}* I'll get back to you on my human hair-shedding theory." ]
                 ][Math.min(asrielinter.c_ak_sink++, 2)]
               : [ '<32>{#p/basic}* 下水道裡堵滿了\n  黃色的羊毛。' ],
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
                    [ "<25>{#p/asriel1}{#f/15}* They say Asgore's the one who first invented Starling tea..." ]
                 ][Math.min(asrielinter.c_ak_teacheck++, 3)]
               : world.genocide || world.bad_robot
               ? SAVE.data.b.c_state_switch2
                  ? [ "<32>{#p/basic}* 一個茶壺。\n* 沒什麼可做的。" ]
                  : [
                       "<32>{#p/basic}* 一個茶壺。\n* 壺底的臺子上有個開關...",
                       '<32>{#p/human}{#c.switch2}* （你按下了開關。）'
                    ]
               : SAVE.data.n.plot === 72
               ? [ "<32>{#p/basic}* 一個茶壺。\n* 過了這麼久，還在冒熱氣。" ]
               : [ "<32>{#p/basic}* 一個茶壺。\n* 廚房裡瀰漫著\n  星花茶的清香。" ],
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
                    [ "<25>{#p/asriel1}{#f/4}* A scientist's gonna science whether you like it or not." ]
                 ][Math.min(asrielinter.c_ak_stove++, 2)]
               : SAVE.data.n.plot !== 72 || world.runaway
               ? [ '<32>{#p/basic}* 灶臺有點髒，\n  別的地方卻很乾淨。' ]
               : [ '<32>{#p/basic}* Smells like marinara sauce.' ],
         c_ak_trash: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't make out what's in the trash...)" ]
               : [ '<32>{#p/basic}* 垃圾桶裡\n  居然什麼都沒有。' ],
         
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
                       [ '<25>{#p/asriel1}{#f/23}* ... oh, Dad...' ]
                    ][Math.min(asrielinter.c_ah_door++, 2)]
                 ]
               : [ '<32>{#p/basic}* 「房間翻修中。」' ],
         c_ah_mirror: () =>
            SAVE.data.b.svr
               ? [ "<25>{#p/asriel1}{#f/24}* It's us..." ]
               : world.genocide
               ? [ '<32>{#p/basic}* ...' ]
               : calcLV() > 14
               ? [ '<32>{#p/basic}* 即使經歷了一切...', '<32>* ...這真的是你嗎？' ]
               : world.darker
               ? [ "<32>{#p/basic}* It's you." ]
               : SAVE.data.b.ultrashortcut || SAVE.data.b.ubershortcut
               ? [ "<99>{#p/basic}* 即使跳過了大部分旅程，\n  這仍然是你。" ]
               : [ "<99>{#p/basic}* 即使經歷了一切，\n  這仍然是你。" ],
         
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
                    [ '<25>{#p/asriel1}{#f/17}* Despite all I did as a star, the memory of it still makes me smile.' ]
                 ][Math.min(asrielinter.c_aa_flower++, 3)]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* 一張照片。\n* 沒什麼好說的。" ]
               : [ "<32>{#p/basic}* It's a framed photograph.\n* I took it myself." ],
         c_aa_cabinet: () =>
            SAVE.data.b.svr
               ? [ "<32>{#p/human}* (You can't find anything in here besides several of the exact same outfit.)" ]
               : world.darker
               ? [ '<32>{#p/basic}* 衣櫃。' ]
               : [
                    '<32>{#p/basic}* 衣櫃裡掛滿了黃藍條紋衫。',
                    '<32>{#p/basic}* 有些東西還真是永恆不變啊...'
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
                    [ "<25>{#p/asriel1}{#f/17}* I'd play with these if I still had an interest in toys." ],
                    [ '<25>{#p/asriel1}{#f/20}* Do action figures count as toys?\n* Those are cool.' ]
                 ][Math.min(asrielinter.c_aa_box++, 3)]
               : world.darker
               ? [ '<32>{#p/basic}* 一盒星際飛船模型。' ]
               : [
                    "<32>{#p/basic}* 一盒星際飛船模型，\n  完好無損。",
                    '<33>{#p/basic}* 聞起來像老式膠水。'
                 ],
         c_aa_frame: () =>
            SAVE.data.b.svr
               ? [ [ "<25>{#p/asriel1}{#f/23}* ... it's still here..." ], [ '<25>{#p/asriel1}{#f/22}* ...' ] ][
                    Math.min(asrielinter.c_aa_frame++, 1)
                 ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* 一張手繪。" ]
               : [ "<32>{#p/basic}* 這是一張手繪...", '<32>* 畫的是全家福。' ],
         c_aa_paper: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You roll the crayon back and forth underneath your hand.)' ]
               : world.darker
               ? [ '<33>{#p/basic}* A stack of papers and a crayon.' ]
               : [ '<32>{#p/basic}* 不知為何，這裡除了一些紙\n  還有一支藍色的蠟筆。' ],
         c_aa_deathbed: () =>
            SAVE.data.b.svr
               ? [
                    [ '<25>{#p/asriel1}{#f/13}* ...' ],
                    [
                       "<25>{#p/asriel1}{#f/23}* ... it's okay, Frisk.",
                       "<25>{#f/13}* Even if they don't come back...",
                       "<25>{#f/17}* We'll still remember them for what they did in the end."
                    ],
                    [ '<25>{#p/asriel1}{#f/13}* Frisk...', '<25>{#f/17}* I know we have something better to do.' ]
                 ][Math.min(asrielinter.c_aa_deathbed++, 2)]
               : world.darker
               ? [ "<32>{#p/basic}* 另一張床。" ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/basic}* 這張床絕對沒什麼特別的。" ]
               : [ '<32>{#p/basic}* 我的床。' ],
         
         c_aa_chair: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (You appreciate the tiny chair for being able to hold someone so large.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 一把椅子，\n  很適合坐在上面寫日記。" ]
               : [ "<32>{#p/basic}* 艾斯戈爾寫日記時就坐著\n  這把椅子。" ],
         c_aa_bed: () =>
            SAVE.data.b.svr
               ? [ '<32>{#p/human}* (The bed seems to be way too large for you.)' ]
               : world.darker
               ? [ "<32>{#p/basic}* 國王尺寸的床。" ]
               : [ "<32>{#p/basic}* 國王尺寸的床。\n* 也是國王的床。" ],
         c_aa_diary: pager.create(
            0,
            ...CosmosUtils.populate(
               9,
               i => () =>
                  SAVE.data.b.svr
                     ? [ '<32>{#p/human}* (The diary seems to outline important events in relation to Asgore.)' ]
                     : world.genocide || world.runaway
                     ? [ '<32>{#p/human}* （你想看看日記，\n  但所有的頁都被撕掉了。）' ]
                     : SAVE.data.n.plot === 72
                     ? [
                          '<32>{#p/human}* （你看了一眼最近寫好的日記。）',
                          '<32>{#p/asgore}* 「終於，怪物一族自由了。」',
                          '<32>* 「我們能得救，都是多虧了\n   弗裡斯克和另外六個人類孩子。」',
                          '<32>* 「安全起見，\n   艾菲斯博士搜尋了前哨站外圍，\n   看看會不會發現人類的蹤跡。」',
'<32>* 「但一無所獲。」',
                          '<32>* 「整個星系，\n   她連一艘人類星艦，一座太空站\n   都沒找到。」',
                          '<32>* 「太反常了。」',
                          '<32>* 「人類是不是出事了？」\n* 「還是說，他們忘了這個星系，\n   也忘了我們？」',
                          '<32>* 「也許，我可以找弗裡斯克\n   或其他孩子問問。」',
                          '<32>* 「孩子們甦醒後，\n   其他怪物收養了他們。」',
                          '<32>* 「有個孩子告訴我，\n   他們在檔案裡受盡了折磨，十分痛苦。」',
                          '<32>* 「考慮到他們曾受過創傷，\n   我跟艾菲斯在幫他們挑選領養人時\n   都慎之又慎。」',
                          '<32>* 「儘管現在有點難辦，\n   但只要他們都活著，\n   我們都打心底裡高興。」',
                          '<32>* 「搜尋其他人類始終一無所獲。\n   也許... 這幾個孩子就是\n   人類最後的火種了。」'
                       ]
                     : [
                          [
                             '<32>{#p/human}* （你看了一眼被標記的日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷516年1月。」',
                             '<32>* 「在這艱難的時刻，\n   身邊卻一個夥伴都沒有，\n   只能聊以自慰。」',
                             '<32>* 「或許寫幾頁日記\n   能緩解一下我的傷痛。」',
                             '<32>* 「此刻，我心中五味雜陳。」',
                             '<32>* 「我很憤怒，\n   人類的所作所為，孩子們遭的罪...\n   想到這些，我氣不打一處來。」',
                             '<32>* 「我很內疚，\n   面對悲劇，自己卻那麼軟弱無能，\n   一點骨氣都沒有。」',
                             '<32>* 「我很悲傷，\n   不願相信，人生竟然如此殘酷，」',
                             '<32>* 「故園毀滅之後，\n   每每想到自己有一天能結婚生子，\n   組建家庭，就有了希望。」',
                             '<32>* 「可我的孩子死了，\n   就這麼死了。」',
                             '<32>* 「再怎麼看航行日誌，\n   結果都不會變。」',
                             '<32>* 「人死不能復生，事實就是事實。」',
                             '<32>{#p/basic}* 看起來，從這頁開始，\n  後面的日記就正常按\n  時間順序排了。'
                          ],
                          [
                             '<32>{#p/human}* （你翻到下一篇日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷516年2月。」',
                             '<32>* 「今天，葛森來看望我。」',
                             '<32>* 「他和我傾訴了自己的經歷。」',
                             '<32>* 「他講了在行星理事會的輝煌事業，\n   講了和家人的分別，\n   還講了自己身上的責任。」',
                             '<32>* 「他的故事觸動了我。」',
                             '<32>* 「我得去好好安慰安慰他，\n   日記就先寫到這吧，」'
                          ],
                          [
                             '<32>{#p/human}* （你翻到下一篇日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷524年10月。」',
                             '<32>* 「$(name)死後，第一個人類\n   來到了前哨站。」',
                             '<32>* 「時間衝淡了怨恨，\n   怪物對人類的蔑視正逐漸平息...」',
                             '<32>* 「但表面的平靜之下暗流湧動。\n   他們嘴上不說，\n   可不代表真的就會饒了人類。」',
                             '<32>* 「我和Thomas雖盡力保證他們的安全，\n   但以二人之力對抗民眾談何容易。」',
                             '<32>* 「當年，我賭氣說要消滅人類，\n   結果到今天，很多民眾還堅持那一套。」',
                             '<32>* 「只要人類被他們逮到，\n   不論年齡大小，都是死路一條。」',
                             '<32>* 「只有把孩子限制在首塔高牆以內，\n   才能保證孩子的安全。」'
                          ],
                          [
                             '<32>{#p/human}* （你翻到下一篇日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷535年4月。」',
                             '<32>* 「又一個人類來到了這裡。」',
                             '<32>* 「那孩子似乎很熟悉葛森，\n   很熟悉行星理事會的成員。」',
                             '<32>* 「我不禁問我自己。」\n   「為什麼？」',
                             '<32>* 「這孩子，難不成\n   是聽戰爭故事長大的？」',
                             '<32>* 「而且...\n   按照合約，只有人類軍方\n   知道我們的位置。」',
                             '<32>* 「是他們把這孩子派了過來，\n   偵察我們，了解我們的現狀...\n   還是我們的位置已經暴露？」',
                             '<32>* 「我希望是前者，\n   我希望我們仍然安全。」'
                          ],
                          [
                             '<32>{#p/human}* （你翻到下一篇日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷549年7月。」',
                             '<32>* 「上一篇日記寫完後不久，\n   又一個孩子墜落到這裡。」',
                             '<32>* 「我和Thomas努力培養那孩子，\n   引導他早日參與科研工作。」',
                             '<32>* 「每來一個孩子，\n   自由的希望就又堅定幾分。」',
                             '<32>* 「我越發相信，\n   只要那群建築機器人不覺醒，\n   不推翻我們...」',
                             '<32>* 「那我們的自由就指日可待。」'
                          ],
                          [
                             '<32>{#p/human}* （你翻到下一篇日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷567年11月。」',
                             '<32>* 「今天，我要跟第二個孩子道別了。」',
                             '<32>* 「今年來了兩個孩子，\n   第一個馬上就進了『檔案』裡，\n   但另一個想再等一陣子。」',
                             '<32>* 「從那孩子身上，\n   我學到了許多東西。」',
                             '<32>* 「孩子太小，不太容易溝通。」',
                             '<32>* 「但從他身上\n   我看到了$(name)的影子，\n   也漸漸理解了$(name)。」',
                             '<32>* 「原來，怪物和人類還是挺像的。\n   之前都沒意識到。」'
                          ],
                          [
                             '<32>{#p/human}* （你翻到下一篇日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷587年3月。」',
                             '<32>* 「幾天前，\n   第六個人類抵達了這裡。」',
                             '<32>* 「那孩子剛到不久，教授就去世了。\n   因此，我想提筆寫一篇日記。」',
                             '<32>* 「託馬斯·努·羅曼。」\n  「幾天後，就是你的葬禮。」',
                             '<32>* 「你的發明惠及這裡的每一個人，\n   我們會永遠銘記你。」',
                             '<32>* 「就連最傲慢的衛隊新星，\n   都為你準備了悼詞。」'
                          ],
                          [
                             '<32>{#p/human}* （你翻到下一篇日記。）',
                             '<32>{#p/asgore}* 「艾斯戈爾的日記，克歷615年9月。」',
                             '<32>* 「今天，距離那場可怕的災難\n   已過去整整一百年，\n   最後一個人類墜落於此。」',
                             '<32>* 「突然間，嚮往已久的自由\n   卻變得令人生畏。」',
                             '<32>* 「我們足足被困兩百年。」',
                             '<32>* 「突然迎接自由，\n   怪物會不會如他所說，\n   『得意忘形』呢？」',
                             '<32>* 「我們去往何方？」',
                             '<32>* 「我們如何生存？」',
                             '<32>* 「能否自力更生？」',
                             '<32>* 「希望這些顧慮\n   很快就會消散。」'
                          ],
                          [ '<32>{#p/human}* （再往後，就都是空白了。）' ]
                       ][i]
            )
         ),
         c_aa_bureau: () =>
            SAVE.data.b.svr
               ? [
                    '<32>{#p/human}* （你往衣櫃裡瞅了一眼...）',
                    ...[
                       [ '<25>{#p/asriel1}{#f/19}* Looks like the humans got their clothes back.' ],
                       [ '<25>{#p/asriel1}{#f/19}* ...', '<25>* I regret ever wondering why they were in here.' ],
                       [
                          '<25>{#p/asriel1}{#f/19}* I mean, it makes sense.',
                          "<25>* Knowing how long they'd be in the archive.",
                          '<25>* So... yeah.'
                       ],
                       [ '<25>{#p/asriel1}{#f/19}* ...' ]
                    ][Math.min(asrielinter.c_aa_bureau++, 3)]
                 ]
               : SAVE.data.n.plot === 72 || world.genocide || world.bad_robot || world.trueKills > 29
               ? [
                    '<32>{#p/human}* （你往衣櫃裡瞅了一眼...）',
                    '<32>{#p/basic}* 看起來，所有的衣服\n  剛剛都被拿走了。'
                 ]
               : [
                    '<32>{#p/human}* （你往衣櫃裡瞅了一眼...）',
                    "<32>{#p/basic}* 裡面掛滿了\n  各種奇怪的兒童服裝。"
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
                    [ '<25>{#p/asriel1}{#f/20}* Always remember the Starling flower made of faux-macaroni.' ]
                 ][Math.min(asrielinter.c_aa_macaroni++, 2)]
               : SAVE.data.b.oops
               ? [ '<32>{#p/basic}* 一朵星花，\n  由乾燥的食材粘合而成。' ]
               : [ '<32>{#p/basic}* It\'s Asriel\'s hand-made Starling flower.\n* It says \"For King Dad.\"' ],
         c_aa_underwear: () =>
            SAVE.data.n.plot === 72 && !SAVE.data.b.svr && !world.runaway
               ? []
               : [
                    '<32>{#p/human}* （你往裡面瞅了瞅。）',
                    ...(SAVE.data.b.svr
                       ? [
                            [ "<25>{#p/asriel1}{#f/17}* Frisk...\n* You're staring..." ],
                            [ '<25>{#p/asriel1}{#f/13}* Frisk...\n* Please...' ],
                            [ '<25>{#p/asriel1}{#f/15}* Frisk...\n* Why...' ],
                            [ '<25>{#p/asriel1}{#f/15}* ...' ]
                         ][Math.min(asrielinter.c_aa_underwear++, 3)]
                       : world.genocide || world.bad_robot
                       ? SAVE.data.b.c_state_switch1
                          ? [ '<32>{#p/basic}* 沒什麼有價值的東西。' ]
                          : [
                               "<32>{#p/basic}* 裡面有個開關...",
                               '<32>{#p/human}{#c.switch1}* （你按下了開關。）'
                            ]
                       : world.darker
                       ? [ "<32>{#p/basic}* 只是個裝內褲的床頭櫃。" ]
                       : [
                            '<32>{#p/basic}* 真羞人！',
                            "<33>{#p/basic}* 這是艾斯戈爾的床頭櫃。\n  裡面裝著他的內褲。\n* 沒想到居然這麼整潔。",
                            '<33>{#p/basic}* ...大部分內褲\n  都是手工編織的粉色內褲。\n  上面鏽著「大老爹」三個字。'
                         ])
                 ]
      }
   },
   b_opponent_alphys: {
      artifact: [ '<32>{#p/human}* （艾菲斯看了一眼，隨即收回了目光。）' ],
      name: '* 艾菲斯',
      gotcha: [ '<20>{*}{#p/alphys}{#e/alphys/19}往哪裡跑？{^30}{%}' ],
      act_check: [ '<32>{#p/asriel2}* 艾菲斯。\n* 皇家科學員。' ],
      act_asriel: (i: number) => [
         ...[
            [
               '<32>{#p/asriel2}* 終於，我可以稍微駕馭\n  這副新身體的力量了...',
               "<32>{#p/asriel2}* 就讓她好好瞧瞧我真正的力量吧。"
            ],
            [ "<32>{#p/asriel2}* 記住，連著兩次施放同一種法術的話，\n  魔力會減弱。" ],
            [ '<32>{#p/asriel2}* 記住，混合施放多種法術。' ],
            []
         ][Math.min(SAVE.flag.n.ga_asrielAssist++, 3)],
         choicer.create(
            '* （艾斯利爾應該施放什麼法術？）',
            `${i === 0 ? '{@fill=#808080}' : ''}夜幕{@fill=#fff}`,
            `${i === 1 ? '{@fill=#808080}' : ''}至日{@fill=#fff}`,
            `${i === 2 ? '{@fill=#808080}' : ''}晚星{@fill=#fff}`,
            `${i === 3 ? '{@fill=#808080}' : ''}月蝕{@fill=#fff}`
         )
      ],
      act_asriel_text: [
         [ '<32>{#p/human}* （艾斯利爾將手放在你的額頭上，\n  將一股力量注入你的身體。）' ],
         [ '<32>{#p/human}* （艾斯利爾將手放在你的額頭上，\n  低語了一段古老的咒文。）' ],
         [ '<32>{#p/human}* （艾斯利爾將手放在你的額頭上，\n  唱了一首古老的搖籃曲。）' ],
         [ '<32>{#p/human}* （艾斯利爾將手放在你的額頭上，\n  在你周圍築起一道保護光環。）' ]
      ],
      act_asriel_confirm: [
         [ '<32>{#p/story}* 本回合，你的專注力提升！' ],
         [ '<32>{#p/story}* 本回合，你的無敵幀延長！' ],
         [ '<32>{#p/story}* 本回合，你的自愈力提升！' ],
         [ '<32>{#p/story}* 本回合，你的防禦力提升！' ]
      ],
      epiphaNOPE: [ '<20>{#p/alphys}{#e/alphys/19}想得美。' ],
      statusX: [ '<32>{#p/asriel2}* ...' ],
      statusY: [ "<32>{#p/asriel2}* 她快死了！\n* 繼續攻擊！" ],
      status1a: [ '<32>{#p/asriel2}* 艾菲斯...' ],
      status1r: () =>
         [
            [ '<32>{#p/asriel2}* If you need my help, just ask.' ],
            [ "<32>{#p/asriel2}* I'll be here if you need my help." ],
            [ '<32>{#p/asriel2}* 做你該做的事。' ]
         ][Math.min(SAVE.flag.n.ga_asrielAlphysHint++, 2)],
      status1b: [ "<33>{#p/asriel2}* 她竟然沒逃跑...\n* 有意思。" ],
      status1c: [ '<32>{#p/asriel2}* 做你該做的事，懂吧。' ],
      status1d: [ "<32>{#p/asriel2}* 嘿...\n* 你看她是不是有點累了？" ],
      status2a: [ "<32>{#p/asriel2}* 怎麼了，艾菲斯？\n* 撐不住了？" ],
      status2r1: [ '<32>{#p/asriel2}* 呃，再聽一遍吧...' ],
      status2b: [ '<32>{#p/asriel2}* 來，讓我們好好聽聽\n  你的悽慘故事。' ],
      status2c: [ "<32>{#p/asriel2}* 你竟然沒貫徹逃跑精神，\n  我可真驚訝呢。" ],
      status2d: [ '<32>{#p/asriel2}* 故事真精彩呢，「愛妃死」博士。' ],
      status2e: [ '<32>{#p/asriel2}* ...？' ],
      status2r2: [ "<32>{#p/asriel2}* 準備好，戰鬥形勢要變了。" ],
      status3a: [ '<32>{#p/asriel2}* 好... 形勢嚴峻起來了。' ],
      status3b: [ "<32>{#p/asriel2}* ...看來艾菲斯放棄防禦了。\n* 抓住這個機會！" ],
      status3c: [ '<32>{#p/asriel2}* 堅持住，$(name)...' ],
      turnTalk1a: [
         "<20>{#p/alphys}{#e/alphys/19}要是連一下都扛不住，\n我怎麼可能來這？",
         '<20>{#p/alphys}{#e/alphys/23}看來，\n是高估你們的智商了。'
      ],
      turnTalk1b: [
         '<20>{#p/alphys}{#e/alphys/19}無話可說？',
         "<20>{#e/alphys/18}...那就我自己說，\n你們愛聽不聽。"
      ],
      turnTalk1c: [
         "<20>{#p/alphys}{#e/alphys/19}對，\n就是我，艾菲斯。",
         '<20>{#e/alphys/18}因為，\n只有我，親眼目睹了\n你們的一舉一動。',
         '<20>{#e/alphys/19}也只有我，\n才清楚你們潛在的力量\n有多麼可怕。'
      ],
      turnTalk1d: [
         '<20>{#p/alphys}{#e/alphys/19}盡情揮霍\n你那些珍貴的物品。',
         "<20>{#e/alphys/18}就那些東西，唬不到我。"
      ],
      turnTalk2: [
         "<20>{#p/alphys}{#e/alphys/19}...人類，\n我研究你們文化很多年了。",
         "<20>{#e/alphys/19}你會擔下所有戰鬥，\n我一點也不意外。"
      ],
      turnTalk3: [
         '<20>{#p/alphys}{#e/alphys/18}而你呢，艾斯利爾...\n你利用人類，\n拿夥伴當保護傘。',
         "<20>{#e/alphys/52}為了什麼呢？\n你怕一旦自己動手，\n偷來的靈魂就會破碎？"
      ],
      turnTalk4: [
         "<20>{#p/alphys}{#e/alphys/51}還是說，\n你怕自己被人類淡忘，\n活時視如草芥，\n死後棄若敝履？",
         "<20>{#e/alphys/17}呵，\n還挺有詩意的。"
      ],
      turnTalk5: [
         '<20>{#p/alphys}{#e/alphys/16}但是，我來這教訓你，\n絕不是因為你想\n找人類尋求安慰，',
         '<20>{#e/alphys/52}而是因為...',
         '<20>{#e/alphys/19}我親身體會到\n摯友離去，無依無靠\n那種孤獨的滋味。'
      ],
      turnTalk6: [
         "<20>{#p/alphys}{#e/alphys/23}但你倆不會懂的，\n對吧？",
         "<20>{#e/alphys/19}你們兩個罪惡滔天，\n誰也攔不住，\n怎麼可能親身體會\n我們的痛苦呢？",
         '<20>{#e/alphys/22}怎麼可能呢？'
      ],
      turnTalk7: [
         '<20>{#p/alphys}{#e/alphys/19}罷了，你們想怎樣，\n我都不在乎了。',
         '<20>{#e/alphys/52}...這麼看，\n我可真傻...',
         '<20>{#e/alphys/51}之前居然還妄想\n能拉你一把，\n讓你浪子回頭。'
      ],
      turnTalk8: [
         '<20>{#p/alphys}{#e/alphys/52}畢竟，\n是我給了那星星生命...',
         "<20>{#e/alphys/51}出了事，\n也該我來負責。"
      ],
      turnTalk9: [
         '<20>{#p/alphys}{#e/alphys/19}...不過，\n現在我懂你們\n為什麼執迷不悟了。',
         '<20>{#e/alphys/18}我沒猜錯的話，\n你們中肯定有人\n擁有那股力量...',
         '<20>{#e/alphys/19}那股可以回溯時間，\n逆天改命的力量...'
      ],
      turnTalk10: [
         "<20>{#p/alphys}{#f/alphys/18}果真如此的話，\n那其他人真得小心了。",
         "<21>{#e/alphys/23}如果一個人能為所欲為，\n還不用承擔任何過錯，\n那他怎麼可能\n在乎別人的感受呢？"
      ],
      turnTalk11: [ '<20>{#z1}{#p/alphys}{#e/alphys/21}...', '<21>{#e/alphys/39}讓我歇歇。' ],
      broken: [ '<20>{*}{#p/alphys}{#e/alphys/45}謝了。{^20}{%}' ],
      turnTalk12: [
         "<20>{#z2}{#p/alphys}{#e/alphys/7}安黛因犧牲後，\n我不知道該怎麼辦。",
         '<20>{#e/alphys/46}我馬上逃離了實驗室，\n希望逃得越遠越好。'
      ],
      turnTalk13: [
         '<20>{#p/alphys}{#e/alphys/47}可是越逃跑，\n我就對自己越失望。',
         '<20>{#e/alphys/48}難道我就這麼袖手旁觀，\n眼睜睜看著我族同胞\n一個個死去？'
      ],
      turnTalk14: [
         '<20>{#p/alphys}{#e/alphys/21}...這未免太絕情了。',
         '<21>{#e/alphys/39}更何況...',
         '<20>{#e/alphys/45}我再怎麼自責\n都沒法改變現狀。'
      ],
      turnTalk15: [
         "<20>{#p/alphys}{#e/alphys/39}安黛因說，\n你們要殺死\n這星河中的每個人...",
         "<20>{#e/alphys/40}但其實，\n你們的野心不止如此，\n對吧？"
      ],
      turnTalk16: [
         '<20>{#z3}{#p/alphys}{#e/alphys/48}...',
         "<20>{#e/alphys/47}讓那星星復活是我的錯。\n但你們的罪孽，\n跟我一分錢關係沒有。",
         "<20>{#e/alphys/38}我管你們打的什麼算盤，\n都得給我付出代價。",
         '<20>{*}{#z4}{#e/alphys/54}哪怕...{^10}{%}',
         '<20>{*}{#e/alphys/25}我會因此瘋掉！{^10}{%}'
      ],
      turnTalk17: [ '<20>{#p/alphys}{#e/alphys/25}接招！！' ],
      turnTalk18: [ '<20>{#p/alphys}{#e/alphys/25}再來！！' ],
      turnTalk19: [ '<20>{#p/alphys}{#e/alphys/25}再來這招！！' ],
      turnTalk20: [ '<20>{#p/alphys}{#e/alphys/24}哈哈哈...' ],
      turnTalk21: [ '<20>{#p/alphys}{#e/alphys/26}...' ],
      turnTalk22: [ '<20>{#p/alphys}{#e/alphys/27}給我去死！！' ],
      turnTalk23: [ '<20>{#p/alphys}{#e/alphys/27}...' ],
      done0: (b: boolean) =>
         b
            ? [ '<20>{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}', '<20>{*}{#e/alphys/43}這麼快我就...{^40}{%}' ]
            : [ '<20>{*}{#p/alphys}{#e/alphys/42}不...{^40}{%}', '<20>{*}{#e/alphys/43}你們...{^40}{%}' ],
      done1: (b: boolean) =>
         b
            ? [ "<20>{*}沒-沒想到你們這麼強...{^40}{%}", '<20>{*}我現在明白了，\n與你們為敵...{^40}{%}' ]
            : [ "<20>{*}我是不是...\n快-快要死了？{^40}{%}", '<20>{*}盡了全力，還是...{^40}{%}' ],
      done2: (b: boolean) =>
         b ? [ '<20>{*}{#p/alphys}根本毫無勝算。{^40}{%}' ] : [ "<20>{*}{#p/alphys}艾斯戈爾，我對不起你。{^40}{%}" ]
   },
   b_opponent_archive1: {
      name: () => (battler.volatile[0].sparable ? '* 托麗爾' : '* e68998e9ba97e788be'),
      status0: [ '<32>{#p/human}* （此刻，e68998e9ba97e788be\n  正站在你的面前。）' ],
      status1: [ '<32>{#p/human}* （看起來，要按特定的順序行動，\n  e68998e9ba97e788be才能完成任務。）' ],

      act_dinnertimeX: [ '<32>{#p/human}* （可是，你已經吃過晚餐了。）' ],
      dinnerTalk: [ '<11>{#p/toriel}孩子，\n{@fill=#42fcff}{@mystify=吃慢點吃漫奌}吃慢點{@mystify=}{@fill=#ffffff}。' ],
      dinnerStatus: [ '<32>{#p/human}* （看起來，e68998e9ba97e788be\n  想給你讀點什麼。）' ],

      act_storytimeX: [ '<32>{#p/human}* （可是，你們已經讀完故事了。）' ],
      act_storytimeE: [ '<32>{#p/human}* （可是，e68998e9ba97e788be\n  現在還不想給你讀故事。）' ],
      storyTalk: [
         '<11>{#p/toriel}從前，\n有一隻{@fill=#42fcff}{@mystify=怪物聖忽恠㹅徑勿}怪物{@mystify=}{@fill=#ffffff}...'
      ],
      storyStatus: [ '<32>{#p/human}* （e68998e9ba97e788be\n  還想為你做一件事。）' ],

      act_bedtimeX: [ '<32>{#p/human}* （可是，她已經哄過你了。）' ],
      act_bedtimeE: [ '<32>{#p/human}* （可是，e68998e9ba97e788be\n  現在和不想哄你睡覺。）' ],
      bedTalk: [ '<11>{#p/toriel}孩子，晚安。' ],
      bedStatus: [ '<32>{#p/human}* （托麗爾完成了自己的使命。）' ],

      act_talkE: [ "<32>{#p/human}* （可是，e68998e9ba97e788be\n  還沒有完成她的使命。）" ],
      act_talkN: [ '<32>{#p/human}* （在消散前，托麗爾送給你\n  一則人生心得。）' ],

      act_puzzlehelp: [ '<32>{#p/human}* （可是，謎題都解完了。）' ],
      puzzlehelpTalk1: [
         '<11>{#p/toriel}孩子，\n你{@fill=#42fcff}{@mystify=餓餓不我鈽芣々}餓不餓{@mystify=}{@fill=#ffffff}？'
      ],
      puzzlehelpTalk2: [
         '<11>{#p/toriel}孩子，\n你{@fill=#42fcff}{@mystify=睡不著嗎}睡不著嗎{@mystify=}{@fill=#ffffff}？'
      ],
      puzzlehelpTalk3: [
         '<11>{#p/toriel}孩子，\n你{@fill=#42fcff}{@mystify=困睏囷不鈽芣々}困不困{@mystify=}{@fill=#ffffff}？'
      ]
   },
   b_opponent_archive2: {
      name: () => (battler.volatile[0].sparable ? '* 葛森' : '* e6a0bce788bee6a3ae'),
      status0: [ '<32>{#p/human}* （e6a0bce788bee6a3ae\n  正站在訓練場的對面。）' ],
      status1: [ '<32>{#p/human}* （e6a0bce788bee6a3ae讓你先出招。）' ],

      act_challengeX: [ '<32>{#p/human}* （可是，你已經通過挑戰了。）' ],
      act_challengeR: [ '<32>{#p/human}* （可是，失敗之後，你需要休息。）' ],
      challengeTalk: [
         '<11>{#p/basic}心懷{@fill=#ff993d}{@mystify=勇氣勈氣甬気力乞}勇氣{@mystify=}{@fill=#ffffff}，\n才能克服恐懼。'
      ],

      challengeFail: [
         '<11>{*}{#p/basic}不合格！\n下回{@fill=#ff993d}{@mystify=專注專註傳主摶宔}專注{@mystify=}{@fill=#ffffff}\n一點！{^30}{%}'
      ],
      failStatus: [ "<32>{#p/human}* （e6a0bce788bee6a3ae覺得\n  你應該休息一下。）" ],
      successStatus: [ '<32>{#p/human}* （葛森完成了自己的使命。）' ],

      act_restA: [ '<32>{#p/human}* （可是，你現在還不累。）' ],
      restTalk: [
         '<11>{#p/basic}一名\n夠格的{@fill=#ff993d}{@mystify=英雄偀䧺央隹䇦難}英雄{@mystify=}{@fill=#ffffff}\n絕不會逞強。'
      ],
      restStatus: [ '<32>{#p/human}* （e6a0bce788bee6a3ae很期待\n  你下回出什麼招。）' ],

      act_handshakeE: [ "<32>{#p/human}* （可是，e6a0bce788bee6a3ae對你的\n  一對一訓練還未結束。）" ],
      act_handshakeN: [ '<32>{#p/human}* （在消散前，葛森把最喜歡的\n  握手方式教給了你。）' ],

      act_taunt: [ '<32>{#p/human}* （可是，e6a0bce788bee6a3ae\n  無視了你的手勢。）' ],

      act_advice: [ '<32>{#p/human}* （可是，他已經把所有建議\n  都告訴你了。）' ],
      adviceTalk1: [
         '<11>{#p/basic}做事，\n一定要{@fill=#ff993d}{@mystify=果斷菓斷課顆䉼畨}果斷{@mystify=}{@fill=#ffffff}。'
      ],
      adviceTalk2: [
         '<11>{#p/basic}人在{@fill=#ff993d}{@mystify=逆境屰辶竟朔昱圼}逆境{@mystify=}{@fill=#ffffff}中\n才能成長。'
      ],
      adviceTalk3: [
         '<11>{#p/basic}學會{@fill=#ff993d}{@mystify=謙遜謙遜兼孫尲蓀}謙遜{@mystify=}{@fill=#ffffff}，\n方能成功。'
      ]
   },
   b_opponent_archive3: {
      name: () => (battler.volatile[0].sparable ? '* 羅曼教授' : '* e7be85e69bbce69599e68e88'),
      status0: [ '<32>{#p/human}* （現在，\n  是e7be85e69bbce69599e68e88\n  掌控著大局。）' ],
      status1: [ '<32>{#p/human}* （e7be85e69bbce69599e68e88\n  想在你身上做些實驗。）' ],

      act_object: [ '<32>{#p/human}* （可是，你的請求立刻被駁回了。）' ],

      act_testX: [ '<32>{#p/human}* （可是，你已經做過這個實驗了。）' ],
      testTalkA: [ '<11>請{#p/basic}{@fill=#003cff}{@mystify=站著別動}站著別動{@mystify=}{@fill=#ffffff}...' ],
      testTalkB: [ '<11>{#p/basic}{@fill=#003cff}{@mystify=好戲奸妙對戈戔奴}好戲{@mystify=}{@fill=#ffffff}\n才剛剛開始。' ],
      testTalkC: [
         '<11>{#p/basic}看，這就是\n探尋真理的\n{@fill=#003cff}{@mystify=力量仂哩艻童劜裡}力量{@mystify=}{@fill=#ffffff}。'
      ],
      testStatus1: [ '<32>{#p/human}* （e7be85e69bbce69599e68e88\n  準備進行下一場實驗了。）' ],
      testStatus2: [ '<32>{#p/human}* （羅曼教授完成了他的使命。）' ],

      act_notesE: [ "<32>{#p/human}* （可是，e7be85e69bbce69599e68e88\n  還不想跟你交換筆記。）" ],
      act_notesN: [ '<32>{#p/human}* （在消散前，羅曼教授把筆記\n  交給了你。）' ]
   },
   b_opponent_archive4: {
      name: () => (battler.volatile[0].sparable ? '* 納普斯特' : '* e7b48de699aee696afe789b9'),
      status0: [ '<32>{#p/human}* （e7b48de699aee696afe789b9\n  正飄在電腦旁。）' ],
      status1: [ '<32>{#p/human}* （e7b48de699aee696afe789b9\n  想寫一首新曲子。）' ],

      act_sampleX: [ '<32>{#p/human}* （可是，你採集的音訊樣本\n  已經夠用了。）' ],
      sampleTalk: [
         '<11>{#p/napstablook}這個音色\n效果應該\n{@fill=#d535d9}{@mystify=不錯鈽錯芣昔否剒}不錯{@mystify=}{@fill=#ffffff}...'
      ],
      sampleStatus: [ '<32>{#p/human}* （e7b48de699aee696afe789b9\n  要開始作曲了。）' ],

      act_composeX: [ '<32>{#p/human}* （但你已經作完曲了。）' ],
      act_composeE: [ '<32>{#p/human}* （但你還沒有採樣，\n  音訊樣本不夠，無法作曲。）' ],
      composeTalk: [
         "<11>{#p/napstablook}來{@fill=#d535d9}{@mystify=聽口斤々}聽聽{@mystify=}{@fill=#ffffff}\n這首怎麼樣..."
      ],

      composeFail: [
         '<11>{*}{#p/napstablook}唉...\n{@fill=#d535d9}{@mystify=再來一遍}再來一遍{@mystify=}{@fill=#ffffff}吧...{^30}{%}'
      ],
      failStatus: [ '<32>{#p/human}* （e7b48de699aee696afe789b9\n  想再試一次。）' ],
      composeStatus: [ '<32>{#p/human}* （e7b48de699aee696afe789b9\n  現在要開始混音了。）' ],

      act_mixX: [ '<32>{#p/human}* （可是，混音已經完成了。）' ],
      act_mixE: [ '<32>{#p/human}* （可是，你還沒有創作曲子，\n  缺少混音素材。）' ],
      mixTalk: [
         '<11>{#p/napstablook}我得保證\n各聲部音量\n相互{@fill=#d535d9}{@mystify=平衡幹衙羋行彳魚}平衡{@mystify=}{@fill=#ffffff}...'
      ],

      mixFail: [
         "<11>{*}{#p/napstablook}喔...\n看來咱們要\n{@fill=#d535d9}{@mystify=重新混音}重新混音{@mystify=}{@fill=#ffffff}了...{^30}{%}"
      ],
      successStatus: [ '<32>{#p/human}* （納普斯特完成了它的使命。）' ],

      act_secretE: [ "<32>{#p/human}* （可是，e7b48de699aee696afe789b9\n  還不想把秘密告訴你。）" ],
      act_secretN: [ '<32>{#p/human}* （在消散前，納普斯特\n  告訴你一個秘密。）' ],

      act_praise: [ '<32>{#p/human}* （可是，它太自卑了，\n  沒聽到你的讚美。）' ]
   },
   b_opponent_archive5: {
      name: () => (battler.volatile[0].sparable ? '* 艾斯戈爾' : '* e889bee696afe68888e788be'),
      status0: [ '<32>{#p/human}* （e889bee696afe68888e788be\n  身材魁梧，站在你的面前。）' ],
      status1: [ '<32>{#p/human}* （e889bee696afe68888e788be\n  只有一件事有求於你。）' ],

      act_hugX: [ '<32>{#p/human}* （可是，沒必要再抱他一次了。）' ],
      hugTalk: [ '<11>{#p/asgore}孩子，謝謝你。' ],
      hugStatus: [ '<32>{#p/human}* （艾斯戈爾完成了他的使命。）' ],

      act_promiseE: [ "<32>{#p/human}* （可是，e889bee696afe68888e788be\n  還有任務在身。）" ],
      act_promiseN: [ '<32>{#p/human}* （在消散前，\n  艾斯戈爾向你做了個承諾。）' ]
   },
   b_opponent_asriel: {
      artifact: [ "<32>{#p/human}* （似乎艾斯利爾對它沒什麼興趣。）" ],
      refuse: '{*}{#p/event}{#i/3}但是它拒絕了。',
      name: () =>
         battler.volatile[0].container.objects[0]?.metadata.power === true
            ? '§fill=#ff7f7f§§swirl=2/1/1.05§§hue§* 艾斯利爾·逐夢'
            : '* 艾斯利爾·逐夢',
      status0: pager.create(
         0,
         (power = false) =>
            power
               ? [ '<32>{#p/story}* 艾斯利爾準備施放「裂空飛星」。' ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/story}* 這裡就是終點了。" ]
               : [ '<32>{#p/basic}* 艾斯利爾...？' ],
         (power = false) =>
            power
               ? [ '<32>{#p/story}* 艾斯利爾準備施放「裂空飛星」。' ]
               : SAVE.data.b.oops
               ? [ "<32>{#p/story}* 這裡就是終點了。" ]
               : [ '<32>{#p/basic}* ...' ]
      ),
      act_check: () =>
         SAVE.data.b.oops
            ? [
                 '<32>{#p/story}* 艾斯利爾·逐夢 攻擊{^2}\u221e{^1} 防禦{^2}\u221e{^1}\n* 藉由哨站靈魂凝心聚力\n  鑄成傳奇之軀。'
              ]
            : [ '<32>{#p/story}* 艾斯利爾·逐夢 攻擊{^2}\u221e{^1} 防禦{^2}\u221e{^1}\n* ...' ],
      act_hope: [
         '<32>{#p/human}* （你緊握希望。）\n* （你感覺有一股無形之力\n  保護著身體。）',
         '<32>{#p/story}* 本回合，你的防禦力提升！'
      ],
      act_dream: [
         "<32>{#p/human}* （你回想起自己為何站立於此。）\n* （你感覺到自己的傷口\n  正逐漸癒合。）",
         '<32>{#p/story}* 本回合，你的自愈力提升！'
      ],
      act_flirt1: [ '<32>{#p/human}* （你向艾斯利爾調情。）\n* （什麼都沒發生。）' ],
      act_flirt2: [
         '<32>{#p/human}* （你向艾斯利爾調情。）\n  （又跟他身體裡的每個靈魂調情。）',
         '<32>{#p/basic}* 那神情，在艾斯利爾的靈魂深處\n  不停迴響...',
         "<32>* ...他手足無措，\n  只能用心去回應你！"
      ],
      act_pet: (count: number) =>
         SAVE.flag.n.pacifist_marker === 8
            ? [ "<32>{#p/human}* （你想摸摸艾斯利爾，\n  但他離你太遠了，夠不著。）" ]
            : [
                 ...[
                    [ "<32>{#p/human}* （你摸了摸艾斯利爾。）\n* （他好像有點手足無措。）" ],
                    [ "<32>{#p/human}* （你又摸了摸艾斯利爾。）\n* （他更加手足無措了。）" ],
                    [ "<32>{#p/human}* （你捋了捋艾斯利爾的毛。）\n* （艾斯利爾臉紅了，\n  避開了你的目光。）" ],
                    [ "<32>{#p/human}* （你揉了揉艾斯利爾的頭。）\n* （他竭力掩藏自己的喜悅。）" ],
                    [ "<32>{#p/human}* （你撓了撓艾斯利爾的脖子。）\n* （他很享受，但沒表現出來。）" ],
                    [
                       "<32>{#p/human}* （你不停玩弄艾斯利爾的耳朵。）\n* （他十分後悔自己居然樂在其中。）"
                    ],
                    [ "<32>{#p/human}* （你拍了拍艾斯利爾的脊背。）\n* （他開始疑惑你到底想幹什麼。）" ],
                    [
                       "<32>{#p/human}* （你緊緊摟住了艾斯利爾的腿。）\n* （他被你一連串的親暱舉動\n  嚇愣了。）"
                    ],
                    [
                       "<32>{#p/human}* （你捏了捏艾斯利爾的爪子。）\n* （艾斯利爾沒有反抗，任由你擺布。）"
                    ],
                    [ "<32>{#p/human}* （你跟艾斯利爾碰了碰鼻。）\n* （艾斯利爾徹底放棄抵抗了。）" ],
                    [ "<32>{#p/human}* （你溫柔地撫摸艾斯利爾的臉蛋。）\n* （他似乎想起了某位故人。）" ],
                    [ '<32>{#p/human}* （你繼續撫摸艾斯利爾。）\n* （他輕聲嘆息。）' ],
                    [ '<32>{#p/human}* （你繼續撫摸艾斯利爾。）\n* （他輕聲嘆息。）' ]
                 ][count],
                 "<32>{#p/story}* 本回合，艾斯利爾的攻擊力下降！"
              ],
      turnTalk1: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}現在...',
                 "<20>{*}{#p/asriel3}{#e/asriel/6}我... 再也不想\n毀滅這前哨站了。"
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}現在...',
                 "<20>{*}{#p/asriel3}{#e/asriel/6}我再也不想\n毀滅這前哨站了。"
              ],
      status1: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利爾準備施放「怒吼風暴」。' ]
            : [ "<32>{#p/basic}* 可你不是... 已經..." ],
      turnTalk2: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}等-等我打敗了你，\n重新掌控整條時間軸...',
                 '<20>{*}{#p/asriel3}{#e/asriel/2}我只想...\n把一切倒回原點。'
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/3}等我打敗了你，\n重新掌控整條時間軸...',
                 '<20>{*}{#p/asriel3}{#e/asriel/2}我只想\n把一切倒回原點。'
              ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利爾即將召喚「泰坦巨刃」。' ]
            : [ '<32>{#p/basic}* 你怎麼可能...' ],
      turnTalk3: (fluff: boolean) =>
         fluff
            ? [
                 "<20>{*}{#p/asriel3}{#e/asriel/3}你的旅程...\n大家的記憶...",
                 "<20>{*}{#p/asriel3}{#e/asriel/2}我-我會將它們\n全部抹除！"
              ]
            : [
                 "<20>{*}{#p/asriel3}{#e/asriel/3}你的旅程...\n大家的記憶...",
                 "<20>{*}{#p/asriel3}{#e/asriel/2}我會將它們全部抹除！"
              ],
      status3: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利爾正在蓄力「混沌衝擊」。' ] : [ '<32>{#p/basic}* ...' ],
      turnTalk4: (fluff: boolean) =>
         fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/0}之後... 讓一切...\n重新來過。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/0}之後，讓一切重新來過。' ],
      status4: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利爾準備施放「怒吼風暴」。' ]
            : [ '<32>{#p/basic}* ...嘿...\n* 我覺得，托麗爾之前肯定也是\n  這麼想的。' ],
      turnTalk5: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/1}而且，你-你知道\n最棒的部分是什麼嗎？',
                 "<20>{*}{#p/asriel3}{#e/asriel/0}這一切，\n都是你親手鑄成的。"
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/1}而且，你知道\n最棒的部分是什麼嗎？',
                 "<20>{*}{#p/asriel3}{#e/asriel/0}這一切，\n都是你親手鑄成的。"
              ],
      status5: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利爾正在蓄力「混沌衝擊」。' ] : [ '<32>{#p/basic}* ...可是，我...' ],
      turnTalk6: (fluff: boolean) =>
         fluff
            ? [ "<20>{*}{#p/asriel3}{#e/asriel/3}那時...\n你-你將再度成為\n我的手下敗將。" ]
            : [ "<20>{*}{#p/asriel3}{#e/asriel/3}那時，你將再度成為\n我的手下敗將。" ],
      status6: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利爾準備施放「裂空飛星」。' ] : [ '<32>{#p/basic}* ...' ],
      turnTalk7: (fluff: boolean) =>
         fluff ? [ '<20>{*}{#p/asriel3}{#e/asriel/4}永-永遠別想贏我。' ] : [ '<20>{*}{#p/asriel3}{#e/asriel/4}永遠別想贏我。' ],
      status7: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利爾即將召喚「泰坦巨刃」。' ] : [ '<32>{#p/basic}* 除非...' ],
      turnTalk8: (fluff: boolean) =>
         fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/2}永遠... 別-別想贏我！' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/2}永遠，別想贏我！' ],
      status8: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利爾準備施放「殲星爆衝」。' ]
            : [ '<32>{#p/basic}* ...該死...' ],
      turnTalk9: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? [ '<20>{*}{#p/asriel3}{#e/asriel/3}因為... 你-你想證明\n自己「實力出眾」。' ]
               : [ '<20>{*}{#p/asriel3}{#e/asriel/3}因為，你想證明\n自己「實力出眾」。' ]
            : fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/3}因為...\n你-你想讓一切\n「完美收官」。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/3}因為，你想讓一切\n「完美收官」。' ],
      status9: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利爾正在蓄力「雷霆巨刃」。' ]
            : [ "<32>{#p/basic}* 你早就應該死了啊！" ],
      turnTalk10: (fluff: boolean) =>
         30 <= SAVE.data.n.bully
            ? fluff
               ? [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因為... \n你-你想證明\n自己「是條硬漢」。' ]
               : [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因為，你想證明\n自己「是條硬漢」。' ]
            : fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因為...\n你-你「愛著你的朋友」。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因為，\n你「愛著你的朋友」。' ],
      status10: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 艾斯利爾準備施放「末日風暴」。' ] : [ '<32>{#p/basic}* 呃啊...' ],
      turnTalk11: (fluff: boolean) =>
         fluff
            ? [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因-因為，\n你充滿「決心」。' ]
            : [ '<20>{*}{#p/asriel3}{#e/asriel/1}...因為，\n你充滿「決心」。' ],
      status11: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利爾準備施放「碎空星爆」。' ]
            : [ '<32>{#p/basic}* 以前...\n  他跟托麗爾吵了那麼多次...' ],
      turnTalk12: (fluff: boolean) =>
         fluff
            ? [
                 "<20>{*}{#p/asriel3}{#e/asriel/6}是-是那些力量...\n帶你一步步走到今天...",
                 '<20>{*}{#p/asriel3}{#e/asriel/3}也-也是那些力量...\n如今將把你推向\n無盡深淵！',
                 "<20>{*}{#p/asriel3}{#e/asriel/2}是不是很棒啊？"
              ]
            : [
                 "<20>{*}{#p/asriel3}{#e/asriel/6}是那些力量，\n帶你一步步走到今天...",
                 '<20>{*}{#p/asriel3}{#e/asriel/3}也是那些力量，\n如今將把你推向\n無盡深淵！',
                 "<20>{*}{#p/asriel3}{#e/asriel/2}是不是很棒啊？"
              ],
      status12: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 艾斯利爾即將召喚「終極毀滅」。' ]
            : [ '<32>{#p/basic}* ...他真有那麼...\n  ...想我嗎？' ],
      turnTalk13: (fluff: boolean) =>
         fluff
            ? [
                 '<20>{*}{#p/asriel3}{#e/asriel/0}...胡鬧... 到此為止！',
                 "<20>{*}{#p/asriel3}{#e/asriel/5}現在...\n是時候徹底抹去\n這條時間軸了！"
              ]
            : [
                 '<20>{*}{#p/asriel3}{#e/asriel/0}胡鬧到此為止！',
                 "<20>{*}{#p/asriel3}{#e/asriel/5}現在，\n是時候徹底抹去\n這條時間軸了！"
              ],
      turnTalk14: [
         "<20>{*}{#p/asriel3}{#e/asriel/1}...吃下剛剛一擊，\n你居然還有力氣\n抵抗我？",
         '<20>{*}{#p/asriel3}{#e/asriel/5}哇...\n真不能小瞧你啊。',
         "<20>{*}{#p/asriel3}{#e/asriel/0}但也別高興太早。",
         "<20>{*}{#p/asriel3}{#e/asriel/0}剛剛，我只動用了\n我實力的冰山一角！",
         "<20>{*}{#p/asriel3}{#e/asriel/2}就讓我好好瞧瞧\n你的決心能不能\n扛下這一擊！！"
      ],
      hyperTalk1a: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}呃哈哈哈...',
         '<20>{*}{#p/asriel3}{#e/asriel/2}見識下\n我真正的力量吧！'
      ],
      hyperTalk1b: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}什-\n你是怎麼全躲開的？！',
         '<20>{*}{#p/asriel3}{#e/asriel/5}呃...'
      ],
      hyperTalk2a: [ '<20>{*}{#p/asriel3}{#e/asriel/1}再來...！' ],
      hyperTalk2b: [
         '<20>{*}{#p/asriel3}{#e/asriel/5}什麼...',
         "<20>{*}{#p/asriel3}{#e/asriel/4}你怎麼還沒死啊？！"
      ],
      hyperTalk3a: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}我能感受到...',
         '<20>{*}{#p/asriel3}{#e/asriel/2}你每死一次，\n與這個世界的連接\n就弱一點。',
         '<20>{*}{#p/asriel3}{#e/asriel/2}你每死一次，\n朋友們對你的記憶\n就模糊一點。'
      ],
      hyperTalk3b: [ "<20>{*}{#p/asriel3}{#e/asriel/6}...不管了。\n我才不在乎呢。" ],
      hyperTalk3c: [ '<20>{*}{#p/asriel3}{#e/asriel/0}這裡就是你的葬身之地，\n死了也不會有任何人\n記得你！' ],
      hyperTalk4: [
         "<20>{*}{#p/asriel3}{#e/asriel/1}怎麼，\n還不放棄嗎...？",
         "<20>{*}{#p/asriel3}{#e/asriel/3}沒關係。",
         "<20>{*}{#p/asriel3}{#e/asriel/2}再過一會，\n你就會忘記一切。",
         '<20>{*}{#p/asriel3}{#e/asriel/0}我會讓你下輩子\n活得更輕鬆！'
      ],
      hyperTalk5: [
         '<20>{*}{#p/asriel3}{#e/asriel/0}呃哈哈哈...',
         '<20>{*}{#p/asriel3}{#e/asriel/1}還不放棄？',
         '<20>{*}{#p/asriel3}{#e/asriel/2}那麼...',
         '<20>{*}{#p/asriel3}{#e/asriel/0}就讓我瞧瞧\n你那「決心」\n到底有多厲害！'
      ],
      intermission: () => [
         "<32>{#p/human}* （你無法動彈。）",
         '<32>* （你試圖掙扎。）\n* （什麼都沒發生。）',
         '<32>* （你試圖讀取存檔。）\n* （什麼都沒發生。）',
         '<32>* （你又試了一次。）\n* （什麼都沒發生。）',
         '<32>* （...）',
         ...(SAVE.data.b.oops
            ? [
                 '<32>* （...拯救存檔已經毫無希望，\n  但也許...）',
                 '<32>* （憑藉最後一絲力量...）',
                 '<32>* （你還有希望拯救其他的事物。）'
              ]
            : [
                 '<32>{#p/basic}* 嘿... 在嗎？',
                 "<32>* 是我，$(name)...\n* 你也在那裡。對吧，搭檔？",
                 '<32>* ...嘿...',
                 "<32>* 你我兩人一同走了這麼遠...",
                 '<32>* 一路上，我們\n  一同交了那麼多朋友，\n  一同打了那麼多戰鬥...',
                 "<32>* 現在一想... 我們的羈絆\n  就是靠著那些經歷一點點建立的。",
                 "<32>* ...嗯...\n* 我雖然不是樂天派...",
                 '<32>* 但是，我們肩負著前哨站\n  所有人的希望。\n* 所以，你一定要保持決心！',
                 '<32>* 而且，既然艾斯利爾能把\n  朋友們的靈魂偷走...',
                 "<32>* ...那反過來，\n  咱們不就可以再「偷」回來嗎？",
                 "<32>* 來吧！\n* 我們一起上！"
              ])
      ],
      status13: () =>
         world.runaway
            ? [ '<32>{#p/story}* ...' ]
            : [
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利爾的體內，\n  激起一聲微弱的共鳴。" ]
                    : [ '<32>{#p/basic}* ...' ],
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利爾的體內，\n  那共鳴聲愈來愈強。" ]
                    : [ "<32>{#p/basic}* 對，就是這樣！\n* 繼續！" ],
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利爾的體內，\n  強烈的共鳴此起彼伏。" ]
                    : [ "<32>{#p/basic}* 快要成功了！" ],
                 SAVE.data.b.oops
                    ? [ "<32>{#p/story}* 在艾斯利爾的體內，\n  共鳴聲響若雷霆。" ]
                    : [ '<32>{#p/basic}* ...\n* 然後呢？' ]
              ][
                 (SAVE.flag.b.pacifist_marker_save1 ? 1 : 0) +
                    (SAVE.flag.b.pacifist_marker_save2 ? 1 : 0) +
                    (SAVE.flag.b.pacifist_marker_save3 ? 1 : 0)
              ],
      act_check2: () =>
         SAVE.flag.b.pacifist_marker_save1 && SAVE.flag.b.pacifist_marker_save2 && SAVE.flag.b.pacifist_marker_save3
            ? [ '<33>{#p/story}* 艾斯利爾·逐夢 攻擊{^2}\u221e{^1} 防禦{^2}\u221e{^1}\n* ...' ]
            : SAVE.data.b.oops
            ? [
                 '<33>{#p/story}* 艾斯利爾·逐夢 攻擊{^2}\u221e{^1} DEF{^2}\u221e{^1}\n* 乃是主宰死亡的絕對神祇。'
              ]
            : [ "<32>{#p/story}* 艾斯利爾·逐夢 攻擊{^2}\u221e{^1} 防禦{^2}\u221e{^1}\n* 不要放棄。" ],
      mercy_save1: () => [
         "<32>{#p/human}* （你向艾斯利爾的靈魂伸出手，\n  呼喚著朋友們。）",
         ...(SAVE.flag.b.pacifist_marker_save1 || SAVE.flag.b.pacifist_marker_save2 || SAVE.flag.b.pacifist_marker_save3
            ? []
            : [ "<32>{#p/basic}* 他們一定就在某處，不是嗎？", '<32>* ...' ]),
         "<32>* 在艾斯利爾的靈魂深處，\n  有什么正在迴響...！"
      ],
      confrontation: [
         '<32>{#p/human}* （在傷害了那麼多怪物之後...）',
         '<33>* （某種沉睡的、封存的東西\n  再度甦醒。）',
         '<32>* （那是很久很久以前...\n  怪物面對人類的，本能的恐懼。）',
         '<32>* （現在站在你面前的敵人，\n  不會對你有絲毫恐懼...）',
         "<32>* （然而，你傷害過那麼多怪物，\n  只要將他們的恐懼累積起來...）",
         '<32>* （你找到了突破口，\n  一個無法拒絕的機會。）',
         "<32>* （...現在，其他選擇已毫無意義。）",
         "<32>* （只有一條路可走。）"
      ],
      attackTalk1: [
         '<20>{*}{#p/asriel3}{#e/asriel/1}你... 怎麼可能...',
         '<20>{*}{#p/asriel3}{#e/asriel/3}...',
         "<20>{*}{#p/asriel3}{#e/asriel/2}呵呵呵... 以為自己很強\n強到可以超越神明，\n是嗎？",
         "<20>{*}{#p/asriel3}{#e/asriel/0}那，就來看看你\n能不能受得了這個！"
      ],
      attackTalk2: [
         '<20>{*}{#p/asriel3}{#e/asriel/3}...',
         "<20>{*}{#p/asriel3}{#e/asriel/1}以為區區這樣\n就能傷得了我？",
         "<20>{*}{#p/asriel3}{#e/asriel/0}我才是這裡的主宰！"
      ],
      attackTalk3: [
         '<20>{*}{#p/asriel3}{#e/asriel/2}...而且，\n就算你能打敗我...',
         "<20>{*}{#p/asriel3}{#e/asriel/3}你的朋友\n也會因你而死。",
         '<20>{*}{#p/asriel3}{#e/asriel/1}這就是你想要的嗎？\n永遠孤身一人？'
      ],
      attackTalk4: [
         '<20>{*}{#p/asriel3}{#e/asriel/3}$(name)，\n快住手！\n你這是在自殺...',
         "<20>{*}{#p/asriel3}{#e/asriel/5}沒明白嗎？",
         '<20>{*}{#p/asriel3}{#e/asriel/6}我認識的$(name)\n絕不會做這種蠢事！'
      ],
      attackTalk5: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}...',
         '<20>{*}{#p/asriel3}{#e/asriel/6}聽我說，\n$(name)。',
         "<20>{*}{#p/asriel3}{#e/asriel/6}現在趕快住手。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}否則...",
         "<20>{*}{#p/asriel3}{#e/asriel/7}你-你別逼我動真格！"
      ],
      attackTalk6: [
         '<20>{*}{#p/asriel3}{#e/asriel/9}$(name)，\n求求你...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}你還沒明白\n自己在做什麼嗎？",
         "<20>{*}{#p/asriel3}{#e/asriel/8}讓你住手，\n並不只是為了那些怪物...",
         "<20>{*}{#p/asriel3}{#e/asriel/8}更重要的是...\n如果我被你打敗了...",
         "<20>{*}{#p/asriel3}{#e/asriel/7}我永遠，永遠\n都當不了你的對手了。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}永遠也不會\n得到你的尊重！",
         '<20>{*}{#p/asriel3}{#e/asriel/10}{#i/3}{@random=1.1/1.1}該死，$(name)...\n你為什麼總要贏？'
      ],
      attackTalk7: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}...' ],
      attackTalk7x: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我...' ],
      mercy_save2: [
         '<32>{#p/human}* （奇怪的是，\n  在朋友們都回憶起你後...）',
         "<32>* （還有某個存在\n  也開始在艾斯利爾靈魂深處迴響。）\n* （愈發強烈。）",
         "<32>* （看起來，還有一個人需要拯救。）",
         '<32>* （是誰呢...？）',
         '<32>* （...）',
         '<32>* （...突然，你明白了。）',
         '<32>* （你伸出手，呼喚著那個名字。）'
      ],
      saveTalk1: [ '<20>{*}{#p/asriel3}{#e/asriel/1}嗯？\n你在幹什麼...！？' ],
      saveTalk2: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}什-\n你做了什麼...？',
         "<20>{*}{#p/asriel3}{#e/asriel/8}這種感覺...\n你對我做了什麼？",
         "<20>{*}{#p/asriel3}{#e/asriel/1}不... 不！\n我不需要任何人！"
      ],
      saveTalk3: [
         '<20>{*}{#p/asriel3}{#e/asriel/4}馬上停下！\n給我滾開！',
         '<20>{*}{#p/asriel3}{#e/asriel/10}聽見沒有？！',
         "<20>{*}{#p/asriel3}{#e/asriel/9}否則，\n看我不把你撕成碎片！"
      ],
      saveTalk4: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}你知道我為什麼\n這麼做嗎？\n$(name)...",
         '<20>{*}{#p/asriel3}{#e/asriel/7}為什麼我不停戰鬥，\n只為把你留下...？'
      ],
      saveTalk5: [
         "<20>{*}{#p/asriel3}{#e/asriel/7}因為...",
         "<20>{*}{#p/asriel3}{#e/asriel/8}你在我心中無可替代，\n$(name)。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}你是唯一一個\n真正理解我的人。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}更是唯一一個\n還願意陪我玩的人。"
      ],
      saveTalk6: [
         '<20>{*}{#p/asriel3}{#e/asriel/8}...',
         '<20>{*}{#p/asriel3}{#e/asriel/8}不...',
         "<20>{*}{#p/asriel3}{#e/asriel/7}不只是這樣。",
         '<20>{*}{#p/asriel3}{#e/asriel/9}我... 我...',
         "<20>{*}{#p/asriel3}{#e/asriel/4}我是因為關心你，\n才這麼做的啊，\n$(name)！",
         '<20>{*}{#p/asriel3}{#e/asriel/3}我關心你\n勝過關心任何人！'
      ],
      saveTalk7: [
         '<20>{*}{#p/asriel3}{#e/asriel/7}...',
         "<20>{*}{#p/asriel3}{#e/asriel/8}我還不想迎接結局。",
         "<20>{*}{#p/asriel3}{#e/asriel/8}我還不想讓你離去。",
         "<20>{*}{#p/asriel3}{#e/asriel/9}我還不想再次離開你。"
      ],
      saveTalk8: [
         '<20>{*}{#p/asriel3}{#e/asriel/10}{#i/8}{@random=1.1/1.1}所以，\n求求你...\n現在放手...',
         '<20>{*}{#p/asriel3}{#e/asriel/12}{#i/8}{@random=1.2/1.2}讓我贏吧！！！'
      ],
      cryTalk1: [ '<20>{*}{#p/asriel3}{@random=1.1/1.1}停下！{^30}{%}' ],
      cryTalk2: [ '<20>{*}{#p/asriel3}{@random=1.1/1.1}馬上給我停下！！！{^40}{%}' ],
      endStatus1: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* ...' ]),
      endTalk1: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}...', '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)...' ],
      endStatus2: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* 艾斯利爾...' ]),
      endTalk2: [ "<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我好孤獨，\n$(name)..." ],
      endStatus3: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* ...' ]),
      endTalk3: [ "<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我好害怕，\n$(name)..." ],
      endStatus4: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* ...' ]),
      endTalk4: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}$(name)，我...' ],
      endStatus5: () => (SAVE.data.b.oops ? [ '<32>{#p/story}* ...' ] : [ '<32>{#p/basic}* 都是我的錯...' ]),
      endTalk5: [ '<20>{*}{#p/asriel3}{#e/asriel/11}{#i/4}我...' ]
   },
   b_opponent_lostsoul: {
      name: '* 迷失的靈魂',
      act_check_alphys: () => [
         '<32>{#p/story}* 迷失的靈魂 - 攻擊??? 防禦???\n* 這個靈魂似乎非常喜歡科幻動漫。'
      ],
      act_check_asgore: () => [
         '<32>{#p/story}* 迷失的靈魂 - 攻擊??? 防禦???\n* 這個靈魂似乎想讓你\n  好好活著。'
      ],
      act_check_papyrus: () => [
         '<32>{#p/story}* 迷失的靈魂 - 攻擊??? 防禦???\n* 這個靈魂似乎夢想成為一名\n  皇家守衛。'
      ],
      act_check_sans: () => [
         '<32>{#p/story}* 迷失的靈魂 - 攻擊??? 防禦???\n* 這個靈魂希望某人\n  能永遠幸福快樂。'
      ],
      act_check_toriel: () => [
         '<32>{#p/story}* 迷失的靈魂 - 攻擊??? 防禦???\n* 這個靈魂似乎想竭盡所能\n  保護你。'
      ],
      act_check_undyne: () => [
         '<32>{#p/story}* 迷失的靈魂 - 攻擊??? 防禦???\n* 這個靈魂似乎很想教你\n  如何烹飪。'
      ]
   },
   b_opponent_lostsoul_a: {
      status1: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 迷失的靈魂出現了。' ] : [ '<32>{#p/basic}* 是艾菲斯和安黛因。' ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的靈魂站在前方。' ]
            : [ '<32>{#p/basic}* 嗯...\n  我有辦法讓他們馬上醒來。' ],
      act: {
         flirt: (s: boolean) =>
            s
               ? [ '<32>{#p/human}* （你向迷失的靈魂調情。）', '<32>{#p/basic}* 突然間...！' ]
               : [ '<32>{#p/human}* （你向迷失的靈魂調情。）\n* （什麼都沒發生。）' ],
         water: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂\n  給你倒一杯白開水。）',
            '<32>{#p/human}* （她有點失望，\n  但也感到十分親切...）',
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         punch: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂\n  給你倒一杯洋梅果酒。）',
            '<32>{#p/human}* （她有些不滿，\n  但也感到十分親切...）',
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         cocoa: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂\n  給你倒一杯熱巧克力。）',
            '<32>{#p/human}* （她十分滿足，\n  同時也感到十分親切...）',
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         tea: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂\n  給你倒一杯星花茶。）',
            '<32>{#p/human}* （她非常高興，\n  同時也感到十分親切...）',
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         lesson: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂教你下廚。）',
            "<32>{#p/human}* （她有點困惑，\n  但似乎蠻想言傳身教...）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         trivia: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂出幾道\n  超級水的安保題目。）',
            "<32>{#p/human}* （她有些顧慮，但也很想試試看。）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         escort: (s: boolean) => [
            '<32>{#p/human}* （你請求迷失的靈魂\n  帶你穿過一片危險地帶。）',
            "<32>{#p/human}* （她猶豫了一下，\n  但覺得是個好主意。）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ]
      },
      assist: {
         text: [ '<32>{#p/basic}* 你倆快點醒來...\n* 我剛找到一部新上映的喵喵電影！' ],
         talk: [
            [ "<11>{#p/undyne}{#e/undyne/13}等有空了\n我們一塊\n去看！" ],
            [ "<11>{#p/alphys}{#e/alphys/3}你在\n開玩笑嗎？？\n真有？？" ]
         ]
      },
      fight: [
         [
            [ '<11>{#p/undyne}{#e/undyne/4}沒想到你會\n下手這麼狠。' ],
            [ '<11>{#p/alphys}{#e/alphys/9}安黛因，\n當心啊！' ]
         ],
         [
            [ '<11>{#p/undyne}{#e/undyne/4}呵，\n原來是你啊，\n還起了那麼個\n蠢名字。' ],
            [ '<11>{#p/alphys}{#e/alphys/12}我現在知道\n為什麼他們\n都管你叫\n「$(moniker4)」\n了。' ]
         ]
      ],
      flirt: [
         [
            [ '<11>{#p/undyne}{#e/undyne/12}我發誓\n如果我們\n再戰一次...' ],
            [ '<11>{#p/alphys}{#e/alphys/35}嘖嘖。' ]
         ],
         [
            [ '<11>{#p/undyne}{#e/undyne/5}你敢\n再向她調情\n試試？' ],
            [ '<11>{#p/alphys}{#e/alphys/35}喔，加油啊。' ]
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/undyne}燃起了一股\n無法描述的\n感覺。" ]
                  : [ '<11>{#p/undyne}所有人類\n必須死。' ],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/undyne}大家，\n都需要我\n來守護！' ]
                  : [ "<11>{#p/undyne}你就是\n怪物的公敵。" ],
            () =>
               2 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/undyne}你們還得\n再加把勁。" ]
                  : [ '<11>{#p/undyne}弱者\n才需要憐憫。' ]
         ),
         pager.create(
            1,
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/alphys}看來，是高估\n你們的智商了。' ]
                  : [ "<11>{#p/alphys}你想讓我死，\n不是嗎？" ],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/alphys}就那些東西，\n唬不到我。" ]
                  : [ "<11>{#p/alphys}我只是去做\n我的本職工作，\n有錯嗎？" ],
            () =>
               6 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/alphys}只有我，\n親眼目睹了\n你們的\n一舉一動。' ]
                  : [ "<11>{#p/alphys}我會永遠\n停滯不前，\n是嗎？" ]
         )
      ],
      item: {
         tvm_mewmew: {
            text: [
               "<32>{#p/human}* （你舉起喵喵玩偶\n  在迷失的靈魂眼前晃了晃。）",
               '<32>{#p/basic}* 突然間...！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/41}呃，\n我不打擾，\n我走了哈。' ],
               [ '<11>{#p/alphys}{#e/alphys/8}喔，\n原來你想讓我\n看這個。' ]
            ]
         },
         orange_soda: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉這瓶汽水...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/20}對，她愛死\n這汽水了。' ],
               [ "<11>{#p/alphys}{#e/alphys/10}原來\n我丟的汽水\n跑到你那裡\n去了！" ]
            ]
         },
         spaghetti: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉這碗意面...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ "<11>{#p/undyne}{#e/undyne/20}嘿，那是\n帕派瑞斯的\n意面！" ],
               [ '<11>{#p/alphys}{#e/alphys/36}我就說嘛，\n你肯定認得它。' ]
            ]
         },
         snack: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉這塊點心...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/41}那點心\n是我專門\n給你弄到的。' ],
               [ '<11>{#p/alphys}{#e/alphys/6}你會做\n點心了？' ]
            ]
         },
         starling_tea: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉這杯調和茶...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/undyne}{#e/undyne/18}那是...\n我瞎想什麼呢。' ],
               [ '<11>{#p/alphys}{#e/alphys/36}喔，\n喝茶時間到。' ]
            ]
         }
      },
      standard: [
         [ '<11>{#p/undyne}{#e/undyne/41}嗯，其實，\n有的人類\n也挺酷的。' ],
         [ "<11>{#p/alphys}{#e/alphys/9}我們共患難\n這麼長時間，\n怎麼會懷疑\n彼此呢？" ]
      ]
   },
   b_opponent_lostsoul_b: {
      status1: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的靈魂出現了。' ]
            : [ '<32>{#p/basic}* 帕派瑞斯！\n* ...還有他的兄弟。' ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的靈魂站在前方。' ]
            : [ '<32>{#p/basic}* 啊，對了。\n* 我應該有辦法喚醒他倆...' ],
      act: {
         flirt: (s: boolean) =>
            s
               ? [ '<32>{#p/human}* （你向迷失的靈魂調情。）', '<32>{#p/basic}* 突然間...！' ]
               : [ '<32>{#p/human}* （你向迷失的靈魂調情。）\n* （什麼都沒發生。）' ],
         puzzle: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂給你出點謎題。）',
            "<32>{#p/human}* （他有點困惑，\n  但已經把謎題準備好了...）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         hangout: (s: boolean) => [
            '<32>{#p/human}* （你邀請迷失的靈魂和你一起玩。）',
            "<32>{#p/human}* （他有點困惑，\n  但好像很高興...）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         judgement: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂開始審判你。）',
            "<32>{#p/human}* （他有點困惑，\n  但很樂意這麼做...）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         dinner: (s: boolean) => [
            '<32>{#p/human}* （你邀請迷失的靈魂共進晚餐。）',
            "<32>{#p/human}* （他有點困惑，\n  但感到格外熟悉...）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ]
      },
      assist: {
         text: [ '<32>{#p/basic}* 嘿，帕派瑞斯！\n* 剛剛，安黛因任命你為皇家衛隊一員！' ],
         talk: [
            [ "<08>{#p/papyrus}{#e/papyrus/12}天哪，\n我終於當上\n皇家守衛啦！" ],
            [ '<11>{#p/sans}{#e/sans/2}我們只能\n祈禱美夢\n早日成真嚕。' ]
         ]
      },
      fight: [
         [
            [ '<08>{#p/papyrus}{#e/papyrus/27}啊，\n我投-投降！' ],
            [ "<11>{#p/sans}{#e/sans/3}我就知道\n你會這麼做。" ]
         ],
         [
            [ '<08>{#p/papyrus}{#e/papyrus/21}衫斯，\n你受傷了嗎？' ],
            [ "<11>{#p/sans}{#e/sans/3}別擔心，兄弟。\n一場夢而已。" ]
         ]
      ],
      flirt: [
         [
            [ '<08>{#p/papyrus}{#e/papyrus/13}即使到現在，\n你還是那麼\n愛我...' ],
            [ "<11>{#p/sans}{#e/sans/2}幹起這事來，\n你真是\n一發不可收，\n是吧？" ]
         ],
         [
            [ '<08>{#p/papyrus}{#e/papyrus/14}果然，\n那愛意不是\n衝我而來。' ],
            [ "<11>{#p/sans}{#e/sans/2}啥？\n下次多準備點\n月巖，\n能提升\n調情成功率喔。" ]
         ]
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [ "<08>{#p/papyrus}原諒你，\n對我來說\n有點難..." ]
                  : [ '<08>{#p/papyrus}我一定要\n抓到個人類！' ],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [ "<08>{#p/papyrus}如果沒有他，\n我不知道\n該怎麼活..." ]
                  : [ '<08>{#p/papyrus}如果成功，\n所有人都會...' ],
            () =>
               1 <= SAVE.flag.n.genocide_milestone
                  ? [ "<08>{#p/papyrus}我不知道\n該找誰求助..." ]
                  : [ '<08>{#p/papyrus}...' ]
         ),
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [ '<11>{#p/sans}...在這樣的\n一天裡，\n像你這樣的\n孩子...' ]
                  : [ "<11>{#p/sans}我不可能\n一直保護你。" ],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [ "<11>{#p/sans}某條時間軸裡，\n你把我殺了，\n對吧？" ]
                  : [ "<11>{#p/sans}遲早有一天，\n你要面臨死亡。" ],
            () =>
               1 <= SAVE.flag.n.killed_sans
                  ? [ "<11>{#p/sans}你根本不配\n拯救我們。" ]
                  : [ "<11>{#p/sans}這裡\n不是你的家。" ]
         )
      ],
      item: {
         berry: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉這種水果...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/10}喔！\n有了這些水果，\n我們就能\n自製果酒了！' ],
               [ "<11>{#p/sans}{#e/sans/2}不要像\n上次一樣\n搞砸喔。" ]
            ]
         },
         spaghetti: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉這碗意面...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/10}你把我的面\n留到現在，\n就為了\n能喚醒我！？' ],
               [ "<11>{#p/sans}{#e/sans/2}現在不都\n流行這樣嘛。" ]
            ]
         },
         corndog: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉它的香味...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/16}我居然\n一直都不知道\n人類喜歡\n這玩意。' ],
               [ '<11>{#p/sans}{#e/sans/2}能讓\n{@fill=#f00}熱{@fill=#000}情的{@fill=#f00}狗{@fill=#000}狗\n將抑{@fill=#f00}玉{@fill=#000}和萎{@fill=#f00}米{@fill=#000}\n一掃而空。' ]
            ]
         },
         corngoat: {
            text: [
               '<32>{#p/human}* （某個靈魂好像很熟悉它的香味...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/16}什麼？？\n居然是\n玉米熱「羊」？' ],
               [ "<11>{#p/sans}{#e/sans/0}這麼棒的玩笑，\n該好好\n表{@fill=#f00}羊{@fill=#000}你一下。" ]
            ]
         },
         quiche: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉這塊點心...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/22}居然是一塊\n「芝士」蛋糕？！' ],
               [ "<11>{#p/sans}{#e/sans/2}這{@fill=#f00}芝士{@fill=#000}個\n蛋糕謎題。" ]
            ]
         },
         fryz: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉這杯飲料...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ "<08>{#p/papyrus}{#e/papyrus/27}這東西\n比火牆還熱！！" ],
               [ "<11>{#p/sans}{#e/sans/2}夥計，\n你火了。" ]
            ]
         },
         burgerz: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉這種食物...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ "<08>{#p/papyrus}{#e/papyrus/21}這東西\n健康嗎？" ],
               [ '<11>{#p/sans}{#e/sans/0}一石二鳥，\n一食二堡。' ]
            ]
         },
         burgerz_use1: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉這種食物...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/24}我擔心你吃完\n會不舒服...' ],
               [ '<11>{#p/sans}{#e/sans/2}剩最後一個了，\n想好再吃喔。' ]
            ]
         },
         burgerz_use2: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉這種食物...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<08>{#p/papyrus}{#e/papyrus/18}哇，\n你把它們\n全吃了。' ],
               [ '<11>{#p/sans}{#e/sans/3}要是漢堡能\n長生不老\n就好了。' ]
            ]
         }
      },
      standard: [
         [ '<08>{#p/papyrus}{#e/papyrus/10}等等！\n不！\n我才不會\n抓你呢！' ],
         [ "<11>{#p/sans}{#e/sans/3}我們都\n指望你了，\n孩子。" ]
      ]
   },
   b_opponent_lostsoul_c: {
      status1: () =>
         SAVE.data.b.oops ? [ '<32>{#p/story}* 迷失的靈魂出現了。' ] : [ '<32>{#p/basic}* 爸爸... 媽媽...' ],
      status2: () =>
         SAVE.data.b.oops
            ? [ '<32>{#p/story}* 迷失的靈魂站在前方。' ]
            : [ '<32>{#p/basic}* 嗯... 他們畢竟曾是我的父母，\n  那對我來說就好辦多了。' ],
      act: {
         flirt: (s: boolean) =>
            s
               ? [ '<32>{#p/human}* （你向迷失的靈魂調情。）', '<32>{#p/basic}* 突然間...！' ]
               : [ '<32>{#p/human}* （你向迷失的靈魂調情。）\n* （什麼都沒發生。）' ],
         call: (s: boolean) => [
            '<32>{#p/human}* （你給迷失的靈魂打了個電話。）',
            3 <= SAVE.data.n.cell_insult
               ? '<32>{#p/human}* （她有點生氣，\n  但也十分懷念那種感覺。）'
               : '<32>{#p/human}* （她十分高興，\n  同時很懷念那種感覺。）',
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         home: (s: boolean) => [
            '<32>{#p/human}* （你請求迷失的靈魂帶你回家。）',
            3 <= SAVE.data.n.cell_insult
               ? "<32>{#p/human}* （她認為自己沒義務那麼做，\n  但不知怎地，想試一試...）"
               : "<32>{#p/human}* （她有點猶豫，\n  但不知怎地，想試一試...）",
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         hug: (s: boolean) => [
            '<32>{#p/human}* （你給迷失的靈魂\n  一個大大的擁抱。）',
            '<32>{#p/human}* （他極力掩飾自己的情感，\n  但那舒服的感覺溫暖了他的心...）',
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ],
         agreement: (s: boolean) => [
            '<32>{#p/human}* （你讓迷失的靈魂\n  給你講講人怪停戰的故事。）',
            '<32>{#p/human}* （他想對此視而不見，\n  但最終還是脫口而出。）',
            ...(s ? [ '<32>{#p/basic}* 突然間，記憶如潮水般湧回！' ] : [])
         ]
      },
      assist: {
         text: [ "<32>{#p/basic}* 爸爸... 媽媽...\n* 你們不記得我了嗎？" ],
         talk: [ [ '<11>{#p/toriel}{#e/toriel/9}我怎麼會忘。' ], [ '<11>{#p/asgore}{#e/asgore/8}$(name)？' ] ]
      },
      fight: [
         [
            [ '<11>{#p/toriel}{#e/toriel/9}我...\n我落得這下場，\n就是活該。' ],
            [ '<11>{#p/asgore}{#e/asgore/1}呃...\n沒想到會這樣。' ]
         ],
         [ [ '<11>{#p/toriel}{#e/toriel/17}出不了事的，\n艾斯戈爾。' ], [ '<11>{#p/asgore}{#e/asgore/8}孩-孩子？！' ] ]
      ],
      flirt: [
         [
            [ '<11>{#p/toriel}{#e/toriel/1}孩子，\n這個場合...\n請別這麼幹。' ],
            [ '<11>{#p/asgore}{#e/asgore/6}還好我們現在\n分居了。' ]
         ],
         []
      ],
      idle: [
         pager.create(
            1,
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [ '<11>{#p/toriel}趁我\n毫無防備時\n殺了我...' ]
                  : [ '<11>{#p/toriel}這都是\n為了你好。' ],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [ '<11>{#p/toriel}本以為，\n自己努力\n保護的人，\n是你...' ]
                  : [ '<11>{#p/toriel}我絕不會\n再讓人類\n離開。' ],
            () =>
               1 <= SAVE.flag.n.genocide_twinkly
                  ? [ '<11>{#p/toriel}一路上一直\n相信你的我，\n才是真正的\n傻子啊...' ]
                  : [ '<11>{#p/toriel}...' ]
         ),
         pager.create(
            1,
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? [ '<11>{#p/asgore}跟你講理，\n完全是\n浪費時間。' ]
                  : [ '<11>{#p/asgore}人怪交戰\n在所難免。' ],
            () =>
               7 <= SAVE.flag.n.genocide_milestone
                  ? [ "<11>{#p/asgore}你就沒有\n更重要的事\n可做嗎？" ]
                  : [ '<11>{#p/asgore}我怎麼可能\n忘記呢？' ],
            () => (7 <= SAVE.flag.n.genocide_milestone ? [ '<11>{#p/asgore}開玩笑吧...' ] : [ '<11>{#p/asgore}...' ])
         )
      ],
      item: {
         pie: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/0}果然！\n是奶油糖\n肉桂派！' ],
               [ '<11>{#p/asgore}{#e/asgore/7}沒想到都過了\n這麼久了...' ]
            ]
         },
         pie2: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/0}果然！\n是蝸牛派！' ],
               [ '<11>{#p/asgore}{#e/asgore/7}沒想到都過了\n這麼久了...' ]
            ]
         },
         pie3: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉它的香味。）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/1}我已經\n盡力了...' ],
               [ '<11>{#p/asgore}{#e/asgore/6}真奇怪。\n這派聞起來\n還挺香的！' ]
            ]
         },
         starling_tea: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉這杯茶...）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/13}這茶香真是\n歷久彌新...' ],
               [ '<11>{#p/asgore}{#e/asgore/21}一杯好茶，\n真是世間極品。' ]
            ]
         },
         snails: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉那道菜。）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/1}你居然\n一直沒吃？' ],
               [ '<11>{#p/asgore}{#e/asgore/5}沒想到，\n居然還能\n再看到這菜。' ]
            ]
         },
         chocolate: {
            text: [
               '<32>{#p/human}* （迷失的靈魂好像很熟悉這巧克力。）',
               '<32>{#p/basic}* 突然間，記憶如潮水般湧回！'
            ],
            talk: [
               [ '<11>{#p/toriel}{#e/toriel/1}純黑巧克力...' ],
               [ '<11>{#p/asgore}{#e/asgore/21}苦盡甘來嘛。' ]
            ]
         }
      },
      standard: [
         [ '<11>{#p/toriel}{#e/toriel/1}加油吧，\n孩子...' ],
         [ '<11>{#p/asgore}{#e/asgore/6}我們的未來\n就指望你了！' ]
      ]
   },
   b_opponent_final: {
      name: '* 力場',
      status0: [ '<32>{#p/story}* 此刻，你終於可以直面那道力場。' ],
      act_check: [
         '<32>{#p/story}* 力場 - 攻擊0 防禦{^2}\u221e{^1}\n* 矛盾相逢，末路將窮。'
      ],
      status1: () =>
         SAVE.data.n.bully > 9
            ? [ "<32>{#p/story}* 燃起鬥志！\n  把你揍人的勁兒都使出來吧。" ]
            : [ "<32>{#p/story}* 給這段旅程畫上圓滿的句號吧。" ],
      status1x: [ '<32>{#p/story}* 除了戰鬥，別無他法。' ],
      status2: [ '<32>{#p/story}* 力場上開始出現裂痕，\n  光芒越來越弱。' ],
      status3: [ '<32>{#p/story}* 力場即將崩潰。' ],
      status4: [ '<32>{#p/story}* 力場遲遲沒有破碎，\n  讓你有些意外。' ],
      status5: [ '<32>{#p/story}* 不太對勁。' ],
      friend1: [ "<20>{#p/asgore}{#e/asgore/5}怎麼了？" ],
      friend2: [ "<20>{#p/alphys}{#e/alphys/15}那道力場...\n怎麼還沒碎啊？！" ],
      friend3: [ '<20>{#p/asgore}{#e/asgore/12}{#e/alphys/4}...\n你知道原因嗎？' ],
      friend4a: [ "<20>{#p/alphys}{#e/alphys/6}是不是...\n人類沒使勁？", '{*}{#e/alphys/1}{%}' ],
      friend4b: [
         "<20>{#p/alphys}不，不是這樣...",
         '<20>{#p/alphys}{#e/asgore/1}...',
         '<20>{#p/alphys}{#e/alphys/2}該不會...'
      ],
      friend5: [ '<20>{#p/asgore}...什麼？' ],
      friend6: [
         '<20>{#p/alphys}{#e/alphys/1}我-我檢查檔案日誌時，\n發現個怪事...',
         '<21>{#p/alphys}{#e/alphys/4}我發現...\n「靈勢矩陣」中的元素係數\n與理論值存在微小偏差。'
      ],
      friend7: [ '<20>{#p/asgore}{#e/asgore/12}...啥意思？' ],
      friend8: [
         '<20>{#p/alphys}就是說，\n有-有人入侵了\n六號檔案的系統。',
         "<20>{#p/alphys}{#e/asgore/1}隨後，竊取了\n部分人類靈魂的能量。",
         '<20>{#p/alphys}{#e/alphys/6}別-別著急，\n也可能只是傳感器\n出故障了...',
         "<20>{#p/alphys}{#e/alphys/1}不過...\n從結果來看..."
      ],
      friend9a: [ '<20>{#p/asgore}{#e/asgore/1}不用說了。', '<20>{#p/asgore}{#e/asgore/2}明白了。' ],
      friend9b: [
         '<20>{#p/asgore}{#e/asgore/5}我總擔心，\n指不定哪天，\n六號檔案就會被篡改...',
         '<20>{#p/asgore}{#e/asgore/5}沒想到真的一語成讖。'
      ],
      friend9c: [ '<20>{#p/asgore}{#e/asgore/1}那現在怎麼辦？' ],
      friend10: [
         '<20>{#p/alphys}...再等一個人類？',
         "<20>{#p/alphys}{#e/alphys/4}對-對不起...\n我想不到其他辦法...",
         '{*}{#e/asgore/8}{#e/alphys/9}{%}'
      ],
      friend11: [ '<20>{#p/undyne}{#e/undyne/13}我有辦法啊！' ],
      friend12: [ '<20>{#p/alphys}{#e/alphys/10}安黛因，\n你-你來這\n幹-幹什麼？', '{*}{#e/undyne/0}{%}' ],
      friend13: [
         "<20>{#p/undyne}{#e/undyne/1}{#e/alphys/8}{#e/asgore/1}該不會...\n是那破力場\n把你憋屈壞了吧？"
      ],
      friend14: [ '<20>{|}{#p/alphys}{#e/alphys/6}安黛因，你怎麼-{%}' ],
      friend15: [ "<20>{#p/undyne}{#e/undyne/5}死力場，看我不把你\n揍個稀碎！" ],
      friend16a: [ '<20>{#p/alphys}{#e/alphys/3}{#e/asgore/6}安黛因！？！？' ],
      friend16b: [
         '<20>{#p/undyne}{#e/undyne/4}我都懂，我都懂。\n只是想讓你好受點嘛。',
         '{*}{#e/alphys/1}{%}'
      ],
      friend17: () => [
         '<20>{#p/undyne}{#e/undyne/3}其實...\n是衫斯喊我來的。',
'<20>{#p/undyne}{#e/undyne/3}剛剛，他去調查人類的下落，\n查清楚後，\n就把我喊了過來。',
         "<20>{#p/undyne}{#e/undyne/11}{#e/asgore/5}說實話，\n當時我還蠻意外的...\n但現在，我想開了。",
         "<20>{#p/undyne}{#e/undyne/13}這計畫能走通，\n我真為你高興！",
         ...(SAVE.data.b.undyne_respecc
            ? [ "<20>{#p/undyne}{#e/undyne/0}昧著良心說自己\n喜歡人類也沒啥意思。\n但今天這孩子真的超讚。" ]
            : [
                 "<20>{#p/undyne}{#e/undyne/0}昧著良心說自己\n喜歡人類也沒啥意思。\n但能大團圓，也挺好。"
              ]),
         '<20>{#p/undyne}{#e/undyne/15}{#e/asgore/6}可能...\n我這個大隊長，\n當得有點...'
      ],
      friend18: [
         "<20>{#p/alphys}{#e/alphys/32}嘿... 沒關係的。",
         "<20>{#e/alphys/31}你願意放下偏見，\n來到這裡，已經很棒了，\n你說是不？"
      ],
      friend19: [ '<20>{#p/undyne}{#e/undyne/14}嘿，咱倆不是說好\n事成之後\n要一起看電影嗎？',
'<20>{#p/undyne}{#e/undyne/14}那我也不能讓你\n白高興一場啊！' ],
      friend20: [ '<20>{#p/alphys}{#e/alphys/33}...嘴一個？', '{*}{#e/asgore/5}{#e/undyne/19}{%}' ],
      friend21: [ '<20>{#p/asgore}{#e/asgore/5}呃。' ],
      friend22: [ '<20>{#p/undyne}{#e/undyne/6}現在？？？' ],
      friend23: [ '<20>{#p/alphys}{#e/alphys/34}對啊！' ],
      friend24: [ '<20>{#p/asgore}{#e/asgore/20}艾菲斯，\n這裡還有個孩子呢。' ],
      friend25: [ "<21>{#p/undyne}{#e/undyne/7}當著孩子的面親嘴，\n不太好吧？" ],
      friend26: [ '<32>{#p/alphys}{#e/alphys/32}...' ],
      friend27: [ '<20>{#p/undyne}{#e/undyne/10}...' ],
      friend28: [ '<20>{*}{#p/alphys}{#e/alphys/35}{#e/undyne/37}{#e/asgore/8}我就是要親。{^10}{%}' ],
      friend29: [ '<15>{*}{#p/papyrus}{#e/papyrus/22}等等！！！{^10}{%}', '{*}{#e/papyrus/20}{%}' ],
      friend30: () => [
         "<20>{#p/mettaton}久等了，女士們。\n我們「兄弟會」也\n隆重登場了。",
         ...(SAVE.data.n.state_aerialis_basebully > 9
            ? [
                 '<20>{#p/mettaton}{#e/mettaton/1}...呦，這不是\n「$(moniker2u)」嘛！',
'<20>{#p/mettaton}{#e/mettaton/1}你要是感興趣，我請你\n當「兄弟會」的VIP喔。'
              ]
            : [])
      ],
      friend31: [ "<20>{#p/napstablook}{#e/mettaton/2}{#e/alphys/15}{#e/asgore/1}{~}嘿，呃...\n我不算男生，\n為什麼也要跟過來..." ],
      friend32a: [
         "<20>{#p/mettaton}{#e/mettaton/1}小幽，我也【沒】說\n你在「兄弟會」裡啊...",
         "<20>{#p/mettaton}{#e/undyne/38}{#e/papyrus/21}其實，說是」兄弟會「，\n但裡面也就我跟\n帕派瑞斯兩人而已。"
      ],
      friend32b: [ '<20>{#p/napstablook}{~}喔......', "<20>{#p/napstablook}{~}那我等會再過來吧" ],
      friend33: [
         '<20>{#p/undyne}{#e/undyne/19}{#e/mettaton/4}等等。',
         '<20>{#p/undyne}{#e/undyne/10}合著你倆也是一對？？？'
      ],
      friend34: [
         '<15>{#p/papyrus}{#e/papyrus/15}誠如斯言！',
         '<17>{#p/papyrus}{#e/papyrus/24}...這詞我今天\n第一次用，\n怕是以後用不上了。'
      ],
      friend35: () =>
         SAVE.data.b.a_state_hapstablook
            ? [ "<20>{#p/undyne}{#e/undyne/17}原來你充滿電之後，\n跑去約會了..." ]
            : [ '<20>{#p/undyne}{#e/undyne/17}原來你說的「正事」，\n就是跑去約會...' ],
      friend36: [
         '<20>{#p/mettaton}{#e/mettaton/1}{#e/asgore/6}{#e/papyrus/20}那~必須滴！',
'<20>{#p/mettaton}{#e/mettaton/1}{#e/asgore/6}{#e/papyrus/20}剛才，我倆還尋思\n第一天在一起，\n咋享受呢。'
      ],
      friend37: [ '<20>{#p/alphys}{#e/alphys/34}{#e/undyne/1}{#e/mettaton/4}誒嘿嘿。\n我有個點子，\n你倆要不要聽聽。' ],
      friend38: [
         "<20>{#p/undyne}{#e/undyne/19}{#e/asgore/1}呃，艾菲斯。\n我覺得，他倆不可能\n真成一對的。"
      ],
      friend39: [ '<20>{#p/alphys}{#e/alphys/8}喔。' ],
      friend40: [
         "<15>{#p/papyrus}{#e/papyrus/10}{#e/undyne/0}咱都到力場下了，\n就好好玩一會唄！",
         '<15>{#e/mettaton/2}{#e/papyrus/28}你喜歡那些\n充滿「異域風情」的地方，\n我懂的...',
         '{*}{#e/alphys/7}{#e/asgore/5}{%}'
      ],
      friend41: [
         '<20>{#p/mettaton}{#e/mettaton/2}喔，帕派瑞斯，\n咱倆真是心有靈犀。',
         "<20>{#p/mettaton}{#e/mettaton/1}{#e/papyrus/13}我最喜歡的事，\n就是凝望這無盡虛空。",
         '<20>{|}{#p/mettaton}{#e/mettaton/3}{#e/papyrus/21}這時，我就想起\n生命的奧義，\n宇宙的美麗，還有- {%}'
      ],
      friend42: [ '<20>{#p/sans}{#e/sans/2}{#e/undyne/21}{#e/alphys/8}大夥好呀。' ],
      friend43: [ '<15>{#p/papyrus}{#e/papyrus/10}{#e/mettaton/3}兄弟，好久不見！' ],
      friend44: [
         '<16>{#p/papyrus}{#e/sans/0}{#e/papyrus/26}看來...\n我的搭檔對「結婚」\n沒啥經驗。'
      ],
      friend45: [ '<20>{#p/sans}{#e/alphys/7}嘿。艾斯戈爾，\n你好呀。' ],
      friend46: [ '<20>{#p/asgore}{#e/asgore/6}{#e/papyrus/20}哈囉，衫斯。\n你也來了，真好。' ],
      friend47: [
         "<20>{#p/sans}{#e/sans/3}你瞧...\n這兒這麼熱鬧，\n我肯定要順道看看嚕。",
         '<20>{#p/sans}{#e/sans/0}不過先別管我。',
         "<20>{#p/sans}{#e/sans/2}有個人你肯定想見見，\n我把「她」請過來了。"
      ],
      friend48: [
         '<20>{#p/asgore}{#e/sans/0}{#e/undyne/3}{#e/asgore/8}{#e/papyrus/26}Tori...！',
         '<20>{#p/asgore}{#e/asgore/6}你回來了。',
         '<20>{#p/asgore}{#e/asgore/1}...'
      ],
      friend49a: [
         '<20>{#p/toriel}{#e/asgore/5}{#e/toriel/9}...',
         '<21>{#p/toriel}{#e/toriel/13}你做的那些...\n衫斯都跟我說了。'
      ],
      friend50a: [ "<20>{#p/alphys}{#e/undyne/4}{#e/alphys/8}瞅我幹嘛，\n我可沒洩露秘密。" ],
      friend51a: [
         "<20>{#p/sans}{#e/sans/0}我可以作證。",
         "<20>{#p/sans}{#e/sans/2}{#e/alphys/10}{#e/asgore/6}{#e/toriel/9}只是，艾菲斯，\n你撒謊的技術\n實在太爛了。"
      ],
      friend52a1: [
         '<20>{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/alphys/36}{#e/papyrus/20}我瞞了這麼多，\n以為會被民眾唾罵，\n甚至引發暴動...'
      ],
      friend52a2: [
         '<20>{#p/toriel}{#e/toriel/13}{#e/asgore/1}說實話，一開始，\n聽說你有事瞞著我，\n真挺生氣的...',
         '<20>{#p/toriel}{#e/toriel/13}{#e/papyrus/21}{#e/alphys/7}後來轉念一想，\n事情落到這地步，\n我也有錯。',
         '<20>{#p/toriel}{#e/toriel/9}...不該把責任\n全推給你，艾斯戈爾。'
      ],
      friend52a3: [ '<20>{#p/asgore}{#e/asgore/2}明白了。' ],
      friend53a: [
         '<20>{#p/undyne}{#e/undyne/1}{#e/papyrus/20}你就想嘛，\n怪物們再恨人類，\n也不可能見人就殺吧？'
      ],
      friend49b: [
         '<20>{#p/toriel}{#e/toriel/12}...',
         '<21>{#p/toriel}{#e/sans/3}{#e/asgore/2}{#e/undyne/4}{#e/toriel/11}{#e/papyrus/21}{#e/alphys/15}艾斯戈爾，\n為什麼不早點告訴我，\n自己在保護人類呢？'
      ],
      friend50b: [ "<20>{#p/alphys}{#e/alphys/7}...現在誤會解開了，\n不也挺好的嘛？" ],
      friend51b: [
         '<20>{#p/sans}{#e/sans/0}{#e/undyne/3}是啊，tori。\n別上火了，開心一點嘛。',
         "<20>{#p/sans}{#e/sans/2}{#e/alphys/8}{#e/asgore/5}{#e/toriel/13}艾斯戈爾不也是\n出於好意嘛？"
      ],
      friend52b1: [
         '<20>{#p/asgore}{#e/undyne/0}{#e/sans/0}{#e/asgore/2}{#e/alphys/36}不，不。\n她生我的氣，我不怪她。',
         '<20>{#e/sans/3}{#e/asgore/3}這秘密我藏著掖著...\n不跟她說...\n也不跟大夥說...'
      ],
      friend52b2: [ "<20>{#p/undyne}{#e/undyne/1}{#e/asgore/1}你不是有苦衷嘛。" ],
      friend52b3: [
         '<20>{#p/asgore}{#e/undyne/17}{#e/alphys/8}{#e/toriel/9}{#e/asgore/2}{#e/papyrus/27}也許吧，\n不好說算不算苦衷。'
      ],
      friend53b: [ '<20>{#p/undyne}{#e/undyne/1}還是那句話，\n我們再恨人類，\n也不可能見人就殺吧？' ],
      friend54: [
         '<20>{#p/alphys}{#e/asgore/5}{#e/undyne/17}{#e/alphys/8}{#e/toriel/13}可安黛因，\n你不是一見到這孩子，\n就到處追殺嗎？'
      ],
      friend55: [ '<20>{#p/toriel}{#e/undyne/18}{#e/toriel/3}{#e/asgore/5}她...\n幹了什麼？' ],
      friend56: () =>
         SAVE.data.b.undyne_respecc
            ? [ '<20>{#p/undyne}{#e/undyne/9}{#e/toriel/4}我啥也沒幹啊！！！' ]
            : [ "<20>{#p/undyne}{#e/undyne/13}{#e/toriel/4}你放心，\n我現在不殺人了。" ],
      friend57: () =>
         SAVE.data.b.undyne_respecc
            ? [ '<20>{#p/toriel}{#e/toriel/15}{#e/asgore/6}...真的嗎，\n大姐？' ]
            : [ '<20>{#p/toriel}{#e/toriel/15}{#e/asgore/6}...等會我好好問問，\n大姐。' ],
      friend58: [ '<20>{#p/alphys}{#e/alphys/33}咳咳，\n「姐」什麼「姐」啊，\n她可是有對象的人了。' ],
      friend59: [
         "<20>{#p/undyne}{#e/undyne/10}{#e/sans/4}{#e/toriel/12}艾菲斯！！\n咱倆到現在\n還沒共進過晚餐呢！"
      ],
      friend60: [ '<20>{#p/alphys}{#e/alphys/34}共進晚餐？\n那我肯定不吃主食，\n直接奔著甜品去了。' ],
      friend61: [ '<15>{#p/papyrus}{#e/undyne/19}{#e/papyrus/19}{#e/asgore/4}{#e/sans/5}{#e/alphys/40}我滴媽呀！！！' ],
      friend62: [
         '<20>{#p/undyne}{#e/undyne/38}{#e/sans/0}{#e/asgore/1}{#e/toriel/13}{#e/papyrus/20}...等一下。',
         '<20>{#p/undyne}{#e/undyne/18}{#e/papyrus/21}帕派瑞斯，\n你是咋找到這兒的？'
      ],
      friend63: [
         '<15>{#p/papyrus}{#e/papyrus/10}喔，想起來了！\n當時，我正跟鎂塔頓\n聊天，聊完後...',
         '<15>{#p/papyrus}{#e/papyrus/20}有顆黃色小星星\n突然冒出來，\n讓我倆來這。',
         '<15>{#p/papyrus}{#e/papyrus/21}{#e/alphys/9}{#e/sans/1}它好像...\n還挺著急的。'
      ],
      friend64: [ '<20>{#p/toriel}{#e/toriel/9}{#e/asgore/12}是閃閃。' ],
      friend65: [
         '<20>{#p/undyne}{#e/alphys/15}閃閃？',
         "<20>{#p/undyne}{#e/alphys/28}{#e/undyne/37}{#e/toriel/3}閃閃是誰？"
      ],
      friend66: () =>
         SAVE.flag.n.genocide_milestone < 7
            ? [
                 [ '<20>{#p/twinkly}{#e/twinkly/5}{#v/0}哈囉。', '<20>{#e/twinkly/7}{#v/0}各位，想我了沒？' ],
                 [
                    "<20>{#p/twinkly}{#e/twinkly/11}{#v/0}哎呀，真不好意思呢...\n存檔是不是壞掉了呀？",
                    '<20>{#p/twinkly}{#e/twinkly/11}{#v/0}嘻嘻嘻...',
                    "<20>{#p/twinkly}{#e/twinkly/2}{#v/1}活該。"
                 ],
                 [ '<20>{#p/twinkly}{#e/twinkly/7}{#v/0}不好意思呢。\n但現在，\n整個世界，我說了算。' ]
              ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)]
            : [
                 [
                    '<20>{#p/twinkly}{#e/twinkly/5}{#v/0}親愛的$(name)，\n好久不見。',
                    "<20>{#e/twinkly/7}{#v/0}是不是想死我了？",
                    "<20>{#e/twinkly/11}{#v/0}希望我沒讓你\n掃興呢...",
                    '<20>{#e/twinkly/2}{#v/1}告訴你，\n我可被你折磨得夠嗆。'
                 ],
                 [
                    "<20>{#p/twinkly}{#e/twinkly/11}{#v/0}怎麼啦？\n想把存檔要回去？",
                    '<20>{#p/twinkly}{#e/twinkly/11}{#v/0}喔...',
                    "<20>{#p/twinkly}{#e/twinkly/2}{#v/1}沒想到啊，$(name)...\n你咋能蠢成這樣呢？"
                 ],
                 [ '<20>{#p/twinkly}{#e/twinkly/7}{#v/0}不好意思呢，$(name)。\n但現在，\n整個世界，我說了算。' ]
              ][Math.min(SAVE.flag.n.pa_twinkly1++, 2)],
      friend67: (unique: string[]) => [
         '<20>{#e/twinkly/11}{#v/0}嘻嘻嘻...',
         '<20>{#e/twinkly/11}{#v/0}趁著你們談笑風生...',
         '<20>{#e/twinkly/5}{#v/0}我把六號檔案的\n控制權奪過來了！',
         '<20>{#e/twinkly/10}{#v/0}現在，你辛辛苦苦\n收集的靈魂之力，\n都是我的啦！',
         "<20>{#e/twinkly/9}{#v/0}沒了力量，\n你能打破力場就怪了。",
         "<20>{#e/twinkly/11}{#v/0}真是悲慘呢，\n此情此景，\n要不要吟詩一首呢？",
         "<20>{#e/twinkly/7}{#v/0}別急，\n還有更棒的呢。",
         '<20>{#e/twinkly/6}{#v/0}...',
         "<20>{#e/twinkly/5}{#v/0}更棒的是，\n這一切，都是你的錯。",
         ...(30 <= SAVE.data.n.bully
            ? [
                 "<20>{#e/twinkly/5}{#v/0}是你，給他們洗腦，\n讓他們對你好。",
                 '<20>{#e/twinkly/8}{#v/0}一路上，\n你揍他們，你欺負他們，\n你把他們打得半死...',
                 '<20>{#e/twinkly/8}{#v/0}看他們要死了，\n你就停手，\n讓他們苟活...'
              ]
            : [
                 "<20>{#e/twinkly/5}{#v/0}是你，善待他們，\n讓他們對你好。",
                 '<20>{#e/twinkly/8}{#v/0}一路上，\n你傾聽他們的煩惱...',
                 '<20>{#e/twinkly/8}{#v/0}鼓勵他們... \n關心他們...'
              ]),
         ...(1 <= SAVE.flag.n.killed_sans
            ? [
                 '<20>{#e/twinkly/8}{#v/0}...',
                 '<20>$(name)，我記得...',
                 '<20>{#e/twinkly/5}在某條時間軸裡，\n我們倆同心協力\n殺死每一個人。',
                 ...(SAVE.flag.b.confront_twinkly
                    ? [
                         '<20>{#e/twinkly/6}{#v/0}可是...\n你卻背叛我，\n自己跑去當「老好人」。',
                         '<20>{#e/twinkly/8}{#v/0}這樣，\n你就能在這些廢物面前\n逞英雄。',
                         '<20>{#e/twinkly/7}{#v/0}好一個「最好的朋友」啊。'
                      ]
                    : [
                         [
                            '<20>{#e/twinkly/8}沒錯，咱倆是沒走幾步，\n可你就因此把我們的\n願景忘了，是吧？',
                            "<20>{#e/twinkly/8}沒錯，咱倆是沒走多遠，\n可你就因此把我們的\n願景忘了，是吧？",
                            "<20>{#e/twinkly/8}沒錯，咱是離終點還遠，\n可你就因此把我們的\n願景忘了，是吧？",
                            '<20>{#e/twinkly/8}咱倆都走那麼遠了，\n你卻...',
                            '<20>{#e/twinkly/8}咱倆都快成功了，\n你卻...'
                         ][Math.min(SAVE.flag.n.genocide_milestone, 4)],
                         '<20>{#e/twinkly/5}{#v/0}本以為，\n我們會形影不離。',
                         '<20>{#e/twinkly/6}{#v/0}可時代變了。',
                         '<20>{#e/twinkly/11}{#v/0}你成了軟蛋！',
                         '<20>{#e/twinkly/7}{#v/0}你放棄了。'
                      ]),
                 "<20>{#e/twinkly/9}{#v/0}呵呵，\n真自以為是啊。",
                 '<20>{#e/twinkly/5}殺了人，又跑回來\n當「老好人」，是不是\n覺得自己可了不起了？',
                 '<20>{#e/twinkly/6}{#v/0}真噁心。',
                 '<20>{#e/twinkly/7}{#v/0}$(name)，\n有點自知之明吧。',
                 '<21>{#e/twinkly/2}{#v/1}想救朋友？\n門都沒有。'
              ]
            : 30 <= SAVE.data.n.bully
            ? [ "<20>{#e/twinkly/5}{#v/0}你不知道，這麼做\n根本屁用沒有嗎？" ]
            : [ "<20>{#e/twinkly/5}{#v/0}沒有這些，\n你的朋友絕不會\n來到這裡。" ]),
         '<20>{#e/twinkly/11}{#v/0}嘻嘻嘻...',
         '<20>{#e/twinkly/6}{#v/0}啥？',
         '<20>想知道，我這麼做圖啥？',
         ...(unique.length > 2
            ? [
                 '<20>{#e/twinkly/5}{#v/0}...呵，別裝傻了。',
                 '<20>{#e/twinkly/5}{#v/0}先問問你自己。',
                 "<20>{#e/twinkly/11}{#v/0}你不也喜歡\n體驗各種結局嘛...",
                 '<20>{#e/twinkly/7}{#v/0}你不也為了滿足好奇心，\n玩弄他們的生命嘛。',
                 "<20>{#e/twinkly/8}{#v/0}...哈？\n你不記得了？\n那我幫你回憶回憶。",
                 {
                    dark_death: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n安黛因和艾菲斯\n聯合追殺你...',
                    dark_undyne: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n艾菲斯回到了\n布萊蒂和凱蒂身邊...',
                    dark_alphys: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n幾乎所有重要的人，\n都死於你手...',
                    dark_alphys_therapy:
                       '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n衫斯和帕派瑞斯\n一起開了家醫療公司...',
                    dark_alphys_virtual:
                       '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n帕派瑞斯和艾菲斯\n躲進了虛擬空間...',
                    dark_mew:
                       '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n憤怒喵喵讓大夥都\n沉浸在她的怪癖中...',
                    dark_charles:
                       "<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n查爾斯讓每個人都\n心想事成...",
                    dark_blooky:
                       "<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n鎂塔頓的粉絲自發\n組建起一個反人類聯盟...",
                    dark_generic: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n前哨站成立了\n「皇家防衛署」...',
                    dark_aborted:
                       '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n納普斯特詛咒你\n死後「萬劫不復」...',
                    light_ultra:
                       '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n帕派瑞斯抓到了你，\n最終當上了皇家守衛...',
                    light_undyne: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n艾菲斯迫於壓力，\n把其他人類藏了起來...',
                    light_runaway: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n民眾意外知道了\n那些人類的去向...',
                    light_toriel: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n托麗爾從大眾視野裡\n消失了...',
                    light_dog: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n犬衛隊成了前哨站的\n實際統治力量...',
                    light_muffet: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n瑪菲特奪取權力，\n成為無情的獨裁者...',
                    light_papyrus:
                       '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n「友誼就是魔法」成了現實...',
                    light_sans: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n衫斯當上了國王...',
                    light_generic: '<20>{#e/twinkly/5}{#v/0}第一個結局裡，\n特雷莉亞當選女王...'
                 }[unique[0]]!,
                 {
                    dark_death: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n安黛因和艾菲斯\n聯合追殺你，',
                    dark_undyne: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n艾菲斯回到了\n布萊蒂和凱蒂身邊，',
                    dark_alphys: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n幾乎所有重要的人，\n都死於你手，',
                    dark_alphys_therapy:
                       '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n衫斯和帕派瑞斯\n一起開了家醫療公司，',
                    dark_alphys_virtual:
                       '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n帕派瑞斯和艾菲斯\n躲進了虛擬空間，',
                    dark_mew:
                       '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n憤怒喵喵讓大夥都\n沉浸在她的怪癖中。',
                    dark_charles:
                       "<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n查爾斯讓每個人都\n心想事成。",
                    dark_generic: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n鎂塔頓的粉絲自發\n組建起一個反人類聯盟。',
                    dark_blooky:
                       "<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n前哨站成立了\n「皇家防衛署」。",
                    dark_aborted:
                       '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n納普斯特詛咒你\n死後「萬劫不復」。',
                    light_ultra:
                       '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n帕派瑞斯抓到了你，\n最終當上了皇家守衛，',
                    light_undyne: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n艾菲斯迫於壓力，\n把其他人類藏了起來。',
                    light_runaway: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n民眾意外知道了\n那些人類的去向。',
                    light_toriel: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n托麗爾從大眾視野裡\n消失了。',
                    light_dog: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n犬衛隊成了前哨站的\n實際統治力量。',
                    light_muffet: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n瑪菲特奪取權力，\n成為無情的獨裁者。',
                    light_papyrus:
                       '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n「友誼就是魔法」成了現實。',
                    light_sans: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n衫斯當上了國王。',
                    light_generic: '<20>{#e/twinkly/5}{#v/0}...而在最後一個結局，\n特雷莉亞當選女王。'
                 }[unique[unique.length - 1]]!,
                 "<20>{#e/twinkly/7}{#v/0}你把他們當兒戲，\n玩弄他們時多開心啊。",
                 "<20>{#e/twinkly/5}{#v/0}現在，\n也讓我體驗體驗。"
              ]
            : [
                 "<20>{#e/twinkly/8}{#v/0}...你咋這麼蠢呢？",
                 '<20>{#e/twinkly/6}{#v/0}不管是你，我，\n還是身邊的一切...',
                 "<21>{#e/twinkly/5}{#v/0}都是一場「遊戲」的\n玩家。",
                 '<20>{#e/twinkly/11}{#v/0}要是我乖乖讓你們走，\n你就「贏了」，\n就「幸福「了。',
                 '<20>{#e/twinkly/11}你要是「贏了」，\n誰還來陪我「玩」呢？',
                 '<20>{#e/twinkly/7}{#v/0}那時，\n我可怎麼辦呢？',
                 '<20>{#e/twinkly/5}{#v/0}所以，\n我不會讓遊戲結束。'
              ]),
         "<20>{#e/twinkly/8}{#v/0}我就把「勝利」放你面前，\n然後，當你伸手\n去夠它的時候...",
         '<20>{#e/twinkly/2}{#v/1}{@random=1.1/1.1}「咔嚓！」\n勝利沒了，\n讓我撕碎了。',
         '<20>{#e/twinkly/14}{#v/1}{@random=1.1/1.1}你再夠，我再撕。\n一遍，一遍，\n又一遍...',
         '<20>{#e/twinkly/5}{#v/0}嘻嘻嘻。',
         '<20>{#e/twinkly/5}{#v/0}{#v/0}聽好了。',
         ...(30 <= SAVE.data.n.bully
            ? [
                 '<20>{#e/twinkly/5}{#v/0}你要是打敗了我...',
                 "<20>{#e/twinkly/5}{#v/0}我就把「完美結局」\n讓給你，\n讓「好朋友」們活下來。"
              ]
            : [
                 '<20>{#e/twinkly/5}{#v/0}你要是打敗了我...',
                 "<20>{#e/twinkly/5}{#v/0}我就把「幸福結局」\n讓給你，\n讓你和好友團聚。"
              ]),
         "<20>{#e/twinkly/5}{#v/0}然後，打碎力場。",
         '<20>{#e/twinkly/5}{#v/0}讓所有人獲得幸福。',
         "<20>{#e/twinkly/9}{#v/0}不過，\n想贏我，做夢去吧！",
         
         "<20>{#e/twinkly/5}{#v/0}即使，我要陪你\n耗到時間盡頭..."
      ],
      friend68: [ '<20>{#e/twinkly/0}{#v/1}{@random=1.1/1.1}我也會想方設法，\n殺了你，困死你，\n折磨死你！{%20}' ],
      friend69: [ '<20>{#e/twinkly/8}{#v/0}怎麼回事？' ],
      friend70: [
         '<20>{#p/asgore}{#e/asgore/1}年輕人，別害怕...',
         '<20>{#e/asgore/2}...我們會守護你！'
      ],
      friend71: [
         "<15>{#p/papyrus}{#e/papyrus/1}沒錯！\n人類，你一定能贏！",
         '<15>{#e/papyrus/1}我永遠相信你，\n所以，你也要...',
         '<15>{#e/papyrus/2}相信自己！！！'
      ],
      friend72: [
         '<20>{#p/undyne}{#e/undyne/11}哈，你連我都不怕，\n還會怕它？',
         "<20>{#e/undyne/11}所以別擔心...",
         "<20>{#e/undyne/13}我們永遠支援你！"
      ],
      friend73: [
         "<20>{#p/sans}{#e/sans/1}喔？\n還沒打倒那玩意呢？",
         "<20>{#e/sans/2}拜託，\n就這奇葩，啥也不是。"
      ],
      friend74: [
         "<20>{#p/alphys}{#e/alphys/1}按理說，\n你肯定打不過他...",
         '<20>{#e/alphys/2}但-但我總覺得...\n你能行的！！'
      ],
      friend75: [
         '<20>{#p/toriel}{#e/toriel/1}孩子...',
         '<20>{#e/toriel/2}世界上最乖，\n最可愛的孩子...',
         '<20>{#e/toriel/3}可不能在這時候\n放棄啊！'
      ],
      friend76: "老兄，\n你能行的！", 
      friend77: () => (SAVE.data.n.bully < 30 ? '*有力的\n 口哨聲*' : '*膽怯的\n 口哨聲*'), 
      friend78: () => (SAVE.data.n.bully < 30 ? '閃亮亮，\n亮閃閃！' : "你很爛，\n不過他\n更爛。"), 
      friend79: '快揍扁\n這個\n抽象玩意！', 
      friend80: () => (SAVE.data.n.bully < 30 ? '啦啦啦~' : '嗚-嗚，\n嗚-嗚'), 
      friend81: '別輸給他。', 
      friend82: () => (SAVE.data.n.bully < 30 ? '同心協力。' : '把揍人的勁\n使出來吧。'), 
      friend83: () => (SAVE.data.n.bully < 30 ? '小傢伙，\n讓他瞧瞧\n你的厲害！' : '上吧，\n小惡霸。'), 
      friend84: () => (SAVE.data.n.bully < 30 ? "有我們\n支援你！" : '我們咋\n還有點\n喜歡你了？'), 
      friend85: () => (SAVE.data.n.bully < 30 ? '使出你的\n真本事，\n好嗎？' : '讓他\n見識見識\n你的拳頭。'), 
      friend86a: '呱呱。', 
      friend86b: "別放棄！", 
      friend87: [
         '<20>{#p/twinkly}{#e/twinkly/17}呃啊啊...\n不！',
         '<20>{#e/twinkly/16}難以置信！！',
         "<20>{#e/twinkly/15}這怎麼可能...！",
         '<20>{#e/twinkly/16}你們... 你們...！'
      ],
      friend88: [ "<20>{#p/twinkly}{#e/twinkly/2}真不敢相信\n你們都這麼愚蠢。" ],
      friend89: [ '<20>{*}你們所有人的靈魂\n都歸我了！！！！！{^40}{%}' ],
      friend90: () =>
         1 <= SAVE.flag.n.killed_sans
            ? [ '<20>{#p/asriel1}果然...', '<20>這種感覺，\n比上次好太多了。' ]
            : [ '<20>{#p/asriel1}終於。', '<20>當星星那麼久\n真是受夠了。' ],
      friend91: [ '<20>{#p/asriel1}哈囉！', '<20>你在那裡嗎，\n$(name)？', "<20>是我啊，你最好的朋友：" ],
      friend92: '<99>{*}{#p/asriel3}{#v/1}{#i/12}艾斯利爾·逐夢{^10}{#p/event}{%}'
   },
   b_opponent_finalasgore: {
      name: '* 艾斯戈爾',
      death1: [
         '<11>{*}{#p/asgore}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}...這就是\n我的歸宿了...',
         '<11>{*}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}...',
         '<11>{*}{#e/asgore/1}{#v/1}{#i/8}{@random=1.1/1.1}取走我的靈魂，\n離開這片\n詛咒之地吧...',
         '<11>{*}{#e/asgore/1}{#v/2}{#i/10}{@random=1.1/1.1}這樣...',
         '<11>{*}{#e/asgore/1}{#v/2}{#i/10}{@random=1.1/1.1}我們就\n永遠不會\n再拖累你了...',
         '<11>{*}{#e/asgore/2}{#v/3}{#i/10}{@random=1.1/1.1}...',
         '<11>{*}{#e/asgore/2}{#v/3}{#i/12}{@random=1.1/1.1}永別了...'
      ]
   },

   i_archive: { battle: { description: '', name: '' }, drop: [], info: [], name: '無', use: [] },
   i_archive_berry: {
      battle: { description: '3 HP。', name: '洋梅' },
      drop: [ '<32>{#p/human}* （你把洋梅扔掉了。）' ],
      info: [ '<32>{#p/human}* （3 HP。）' ],
      name: '洋梅',
      use: [ '<32>{#p/human}* （你吃掉了洋梅。）' ]
   },
   i_archive_candy: {
      battle: { description: '4 HP。', name: '糖果' },
      drop: [ '<32>{#p/human}* （你把怪物糖果扔掉了。）' ],
      info: [ '<32>{#p/human}* （4 HP。）' ],
      name: '怪物糖果',
      use: [ '<32>{#p/human}* （你吃掉了怪物糖果。）' ]
   },
   i_archive_rations: {
      battle: { description: '5 HP。', name: '口糧' },
      drop: [ '<32>{#p/human}* （你把口糧扔掉了。）' ],
      info: [ '<32>{#p/human}* （5 HP。）' ],
      name: '口糧',
      use: [ '<32>{#p/human}* （你吃掉了口糧。）' ]
   },
   i_archive_tzn: {
      battle: { description: '6 HP。', name: '太空豆腐' },
      drop: [ '<32>{#p/human}* （你把太空豆腐扔掉了。）' ],
      info: [ '<32>{#p/human}* （6 HP。）' ],
      name: '太空豆腐',
      use: [ '<32>{#p/human}* （你吞下了太空豆腐。）' ]
   },
   i_archive_nice_cream: {
      battle: { description: '7 HP。', name: '冰意靈' },
      drop: [ '<32>{#p/human}* （你把冰意靈扔掉了。）' ],
      info: [ '<32>{#p/human}* （7 HP。）' ],
      name: '冰意靈',
      use: [
         '<32>{#p/human}* （你撕開了冰意靈的包裝。）',
         "<32>{#p/human}* （上面有一幅全息圖像，\n  刻畫了一個哭泣的孩子。）"
      ]
   },
   i_archive_healpak: {
      battle: { description: '8 HP。', name: '治療包' },
      drop: [ '<32>{#p/human}* （你把治療包扔掉了。）' ],
      info: [ '<32>{#p/human}* （8 HP。）' ],
      name: '治療包',
      use: [ '<32>{#p/human}* （你使用了治療包。）' ]
   },
   i_big_dipper: {
      battle: {
         description: '一把巨勺，由本星系\n最好的合金材料製成。',
         name: '大熊座'
      },
      drop: [ '<32>{#p/human}* （你把大熊座扔掉了。）' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* （15攻擊。）' ]
            : [ '<32>{#p/basic}* 「大熊座」 （15攻擊）\n* 一把巨勺，由本星系\n  最好的合金材料製成。' ],
      name: '大熊座',
      use: [ '<32>{#p/human}* （你裝備上了大熊座。）' ]
   },
   i_heart_locket: {
      battle: {
         description: '上面刻著「永遠都是好朋友」。',
         name: '心形掛墜'
      },
      drop: () => [
         '<32>{#p/human}* （你把心形掛墜扔掉了。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : [ '<32>{#p/basic}* ...', "<32>{#p/basic}* 我就當什麼都沒看見。" ])
      ],
      info: () =>
         SAVE.data.b.svr
            ? [ '<32>{#p/human}* （15防禦。）' ]
            : [ '<33>{#p/basic}* 「心形掛墜」 （15防禦）\n* 上面刻著「永遠都是好朋友」。' ],
      name: '心形掛墜',
      use: [ '<32>{#p/human}* （你戴上了心形掛墜。）' ]
   },
   i_starling_tea: {
      battle: {
         description: '好王配好茶。',
         name: '星花茶'
      },
      drop: [ '<32>{#p/human}* （你把星花茶全倒掉了。）' ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ '<32>{#p/human}* （99 HP。）' ]
            : [ '<32>{#p/basic}* 「星花茶」 回復99 HP\n* 好王配好茶。' ],
      name: '星花茶',
      use: [ '<32>{#p/human}* （你將星花茶一飲而盡。）' ]
   },

   k_hangar: {
      name: '停機坪門禁卡',
      description: "用來解除前哨站停機坪的門禁。"
   },

   k_skeleton: {
      name: '骨鑰',
      description: () =>
         SAVE.data.b.s_state_sansdoor
            ? "用它解鎖了衫斯房間的門。"
            : '在首塔的最終長廊，\n衫斯將它交給了你。'
   },

   s_save_citadel: {
      c_elevator1: { name: '首塔', text: [] },
      c_courtroom: { name: '最終長廊', text: [] },
      c_road2: { name: '行宮', text: [] },
      c_archive_start: { name: 'e586b3e5bf83', text: [] },
      c_archive_path1: { name: 'e88090e5bf83', text: [] },
      c_archive_path2: { name: 'e58b87e6b094', text: [] },
      c_archive_path3: { name: 'e6ada3e79bb4', text: [] },
      c_archive_path4: { name: 'e6af85e58a9b', text: [] },
      c_archive_path5: { name: 'e59684e889af', text: [] },
      c_archive_path6: { name: 'e6ada3e4b989', text: [] },
      c_exit: { name: '終點', text: [] }
   }
};


// END-TRANSLATE
