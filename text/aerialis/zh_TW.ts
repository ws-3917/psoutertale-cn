import { alphysPhoneDisplay } from '../../../code/aerialis/bootstrap';
import {
   adultEvac,
   burger,
   calm_lizard,
   childEvac,
   corefriendly,
   glade,
   iRespeccYourVilliany
} from '../../../code/aerialis/extras';
import { asrielinter } from '../../../code/common';
import { pms } from '../../../code/common/extras';
import { music } from '../../../code/systems/assets';
import { game, renderer } from '../../../code/systems/core';
import {
   ateThreshold,
   battler,
   choicer,
   fetchCharacters,
   iFancyYourVilliany,
   instance,
   pager,
   postSIGMA,
   roomKills,
   shopper,
   world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';

// START-TRANSLATE

export default {
   a_aerialis: {
      coreterminal: () => [
         ...(SAVE.data.b.svr
            ? ['<32>{#p/human}* (It appears the terminal is beyond your access level.)']
            : world.runaway
               ? ["<32>{#p/basic}* 核心終端。\n* 看起來沒有多少能量了。"]
               : [
                  world.postnoot
                     ? "<32>{#p/basic}* It's a CORE terminal.\n* The atmospheric systems have been accessed recently."
                     : world.bad_robot && 68 <= SAVE.data.n.plot
                        ? "<32>{#p/basic}* It's a CORE terminal.\n* It seems to be running low on power."
                        : "<32>{#p/basic}* It's a CORE terminal.\n* It seems to be running well.",
                  ...(!world.genocide && !world.badder_lizard && SAVE.data.b.a_state_corecall && SAVE.data.n.plot < 68
                     ? [
                        ["<25>{#p/alphys}{#g/alphysOhGodNo}* Please don't touch those!!"],
                        ['<25>{#p/alphys}{#g/alphysNeutralSweat}* Seriously.'],
                        ['<25>{#p/alphys}{#g/alphysNeutralSweat}* ...'],
                        []
                     ][Math.min(SAVE.data.n.state_aerialis_terminter++, 3)]
                     : [])
               ]),
         ...(world.meanie && !world.genocide && world.badder_lizard
            ? [
               "<32>{#p/human}* (You notice you're alone.)",
               "<32>{#p/human}* (Despite knowing it'd collapse the outpost's atmosphere, you consider something.)",
               choicer.create('* (Smash the terminal?)', '是', '否')
            ]
            : [])
      ],
      termsmash1: ['<32>{#p/human}* （你放棄了砸終端的念頭。）'],
      termsmash2: ['<32>{#p/human}* (You take a swing...)'],
      puzzlenoot1: () => [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         world.nootflags.has('a_barricade1') // NO-TRANSLATE

            ? '<25>{#p/alphys}{#g/alphysInquisitive}* Did the puzzle solve itself as well?'
            : "<25>{#p/alphys}{#g/alphysInquisitive}* Huh, the puzzle looks like it's already been solved.",
         '<25>{#p/alphys}{#g/alphysFR}* How strange.',
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      puzzlenoot2: () => [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         world.nootflags.has('a_puzzle1') // NO-TRANSLATE

            ? "<25>{#p/alphys}{#g/alphysWelp}* And this one.\n* This one's solved as well."
            : "<25>{#p/alphys}{#g/alphysWelp}* Huh... seems like the puzzle's already been done by someone.",
         "<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* We'll take it!!",
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      noequip: ['<32>{#p/human}* （你打算不這麼做。）'],
      evac: ['<32>{#p/human}* （你感覺周圍的怪物越來越少了。）'],
      endo: ['<32>{#p/human}* (You note the poor quality of this table.)'],
      businessKILLER: [
         '<32>{#p/basic}{#npc/a}* Just so ya know, kiddo...',
         "<32>* The Royal Guard'll be all over ya for that sorta thing.",
         "<32>* If I were ya, I'd quit while I was ahead.",
         "<32>* But that's just my take."
      ],
      harpyKILLER: ["<32>{#p/basic}* Huhehehaw...\n* Golly gosharoo, I think I'm in mortal danger!"],
      shopclosed: ['<32>{#p/human}* （沒必要再踏足了。）'],
      afear: [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         '<25>{#p/alphys}{#g/alphysNervousLaugh}* Uh, h-hey...',
         '<25>{#p/alphys}{#g/alphysNeutralSweat}* Sorry about... running off and stuff...',
         '<25>{#p/alphys}{#g/alphysIDK}* ...',
         "<25>{#p/alphys}{#g/alphysNervousLaugh}* You'll be fine, right?\n* You won't...",
         "<25>{#p/alphys}{#g/alphysNervousLaugh}* You won't get into any more trouble, will you?",
         '<25>{#p/alphys}{#g/alphysSideSad}* ...',
         "<25>{#p/alphys}{#g/alphysHaveSomeCompassion}* Please...\n* D-don't do anything crazy, okay?",
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      escape: [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         '<25>{#p/alphys}{#g/alphysCutscene1}* 你做到了！',
         '<25>{#g/alphysInquisitive}* Oh, uh, sorry about not using my camera before.',
         '<25>{#g/alphysYeahYouKnowWhatsUp}* I was trying to keep a \"low profile...\"',
         "<25>{#g/alphysIDK}* Anyway, I'll admit I was... getting k-kind of worried there.",
         '<25>{#g/alphysNervousLaugh}* But I guess things worked out in the end?',
         '<25>{#g/alphysNeutralSweat}* ... hmm.',
         "<25>* To tell you the truth, Undyne hasn't stopped l-looking for you.",
         '<25>{#g/alphysNervousLaugh}* I did lock down the elevators to Aerialis, but...',
         "<25>{#g/alphysNeutralSweat}* Sooner or later, she'll just use her jetpack to get up here.",
         '<25>* So... y-you should probably get going right away.',
         "<25>* The other elevator's just a few rooms ahead.\n* You can't miss it!",
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      approachescape: ['<32>{#p/human}* (You hear footsteps fading into the distance.)'],
      puzzlehelp: [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         "<25>{#p/alphys}{#g/alphysWelp}* 打你電話只是跟你\n  說一下，如果遇到困難\n  可以隨時找我幫忙。",
         "<25>{#p/alphys}{#g/alphysCutscene2}* I'll keep my phone available while you're in the room!",
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      riverboi1: () => [
         '<32>{#p/basic}{#npc/a}* 我是旅人。\n* 我可以駕駛我的運輸船\n  帶你週遊前哨站。',
         '<32>* 你想去哪呢？',
         choicer.create(
            '* （你要怎麼回答？）',
            game.room === 'w_wonder' // NO-TRANSLATE

               ? '取消'
               : '外域',
            game.room === 's_taxi' // NO-TRANSLATE

               ? '取消'
               : '星港',
            game.room === 'f_taxi' // NO-TRANSLATE

               ? '取消'
               : '鑄廠',
            game.room === 'a_lookout' // NO-TRANSLATE

               ? '取消'
               : '空境'
         )
      ],
      riverboi2: pager.create(
         2,
         ["<32>{#p/basic}{#npc/a}* Tra la la.\n* The underspace is fast today.\n* That's good luck..."],
         ["<32>{#p/basic}{#npc/a}* Tra la la.\n* The underspace is fast today.\n* That's bad luck..."],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* Remember to take a break every-so-often...'],
         [
            '<32>{#p/basic}{#npc/a}* Tra la la.\n* Everyone knows the old song from the music box...',
            '<32>{#p/basic}{#npc/a}* ... but do you know its counterpart?\n* The first thirteen are fine.'
         ],
         [
            '<32>{#p/basic}{#npc/a}* Tra la la.\n* Keep your hands and feet inside the vehicle...',
            '<32>{#p/basic}{#npc/a}* ... and most of all, your SOUL.'
         ],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* I heard Toriel has a favorite drink.'],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* I heard Asgore has a favorite food.'],
         [
            '<32>{#p/basic}{#npc/a}* Tra la la.\n* Remember the great King Erogot...',
            '<32>{#p/basic}{#npc/a}* ... and his son.'
         ],
         [
            '<32>{#p/basic}{#npc/a}* Tra la la.\n* Temmie village...',
            '<32>{#p/basic}{#npc/a}* ... the room to the left of the short ladder.'
         ],
         ["<32>{#p/basic}{#npc/a}* Tra la la.\n* Why don't you sing with me?\n* Tra la la."],
         ["<32>{#p/basic}{#npc/a}* Hum hum hum...\n* Hum hum hum...\n* I'm having a little concert."],
         ['<32>{#p/basic}{#npc/a}* Pet pet pet...\n* The neck stretches infinitely into the cosmos.'],
         [
            '<32>{#p/basic}{#npc/a}* Tra la la.\n* Remember to pay your fare...',
            '<32>{#p/basic}{#npc/a}* ... time and space are quite the valuable commodities.'
         ],
         ['<32>{#p/basic}{#npc/a}* Humans, monsters...\n* Stars.'],
         [
            '<32>{#p/basic}{#npc/a}* Tra la la.\n* You can never have too many corn-dogs...',
            '<32>{#p/basic}{#npc/a}* ... if only they stayed atop your head.'
         ],
         [
            "<32>{#p/basic}{#npc/a}* Tra la la.\n* Don't snoop behind people's stations...",
            '<32>{#p/basic}{#npc/a}* ... you might be mistaken for a thief.'
         ],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* The underspace is bumpy today.'],
         ['<33>{#p/basic}{#npc/a}* Tra la la.\n* The underspace is smooth today.'],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* The royal scientist has a secret...'],
         ['<32>{#p/basic}{#npc/a}* One, two, three, four, five, six...', '<32>* ... reaching full capacity.'],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* That robot superstar has a troubled past...'],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* Tri li li.\n* Tre le le.'],
         
         ['<32>{#p/basic}{#npc/a}* Tro lo lo.\n* Tru lu lu.', '<32>* ... alas, the vowels reach their end.'],
         [
            '<32>{#p/basic}{#npc/a}* Tra la la.\n* Eat a ghost fruit every day.',
            "<32>{#p/basic}{#npc/a}* ... why?\n* Then I know you're listening to me..."
         ],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* Have you not heard the song of the stars?'],
         [
            "<32>{#p/basic}{#npc/a}* Tra la la.\n* What's a game you can play with a dog?",
            '<32>{#p/basic}{#npc/a}* ... asking for a friend.'
         ],
         ['<32>{#p/basic}{#npc/a}* Tra la la.\n* Dog justice, dog justice everywhere.']
      ),
      riverboi2x: ['<32>{#p/basic}{#npc/a}* Tra la la.\n* Idle dialogue is not available at this time.'],
      riverboi3: () => [
         '<32>{#p/basic}{#npc/a}* 我是旅人。\n* Alphys博士讓我到這兒來。',
         '<32>* 你想到空境去，是嗎？',
         choicer.create('* （你要怎麼回答？）', '是', '否')
      ],
      riverboi4: ['<32>{#p/basic}{#npc/a}* 感謝你乘坐我的運輸船。\n* 我的任務完成了。'],
      papinter1: pager.create(
         0,
         () =>
            SAVE.data.b.a_state_fishbetray
               ? [
                  '<18>{#p/papyrus}HELLO, HUMAN!',
                  "<18>{#p/papyrus}I'M GLAD YOU FINALLY SPOKE TO ME.",
                  "<18>{#f/4}THERE'S SO MANY INTERESTING THINGS TO DO HERE...",
                  '<18>{#f/0}HAVE YOU TRIED THE BOWLING ALLEY YET?',
                  '<18>{#f/9}OR, EVEN BETTER, THE SWIMMING POOL!',
                  ...(SAVE.data.b.killed_mettaton
                     ? [
                        '<18>{#f/4}BOTH OF WHICH ARE CLOSED AT THE MOMENT...',
                        '<18>{#f/5}... IN HONOR OF METTATON\'S SO- CALLED \"DEATH.\"'
                     ]
                     : [
                        '<18>{#f/4}BOTH OF WHICH ARE ACCESSIBLE VIA THE TAXI...',
                        '<18>{#f/5}... FOR ANYONE AGED TEN AND UP.'
                     ])
               ]
               : [
                  '<18>{#p/papyrus}HELLO, HUMAN!',
                  "<18>{#p/papyrus}IT'S ABOUT TIME YOU GOT HERE.",
                  "<18>{#f/4}THERE'S SO MANY INTERESTING THINGS TO DO...",
                  '<18>{#f/0}HAVE YOU TRIED THE BOWLING ALLEY YET?',
                  '<25>{#p/undyne}{#f/17}* Really, Papyrus?\n* Bowling?',
                  '<25>{#p/undyne}{#f/8}* The magical arts club is OBVIOUSLY better!',
                  "<18>{#p/papyrus}{#f/4}YOU'RE NOT AFRAID OF HUMAN GAMES, ARE YOU?",
                  '<25>{#p/undyne}{#f/4}* What!?\n* Of course not!',
                  "<25>{#p/undyne}{#f/5}* I'm just...",
                  "<25>{#p/undyne}{#f/12}* I'm just an avid believer in the beauty of artistry.",
                  "<18>{#p/papyrus}{#f/5}SO YOU'LL JOIN ME AT THE JAZZ AND BLUES MUSIC CLUB?",
                  "<25>{#p/undyne}{#f/8}* Oh my god, for the last time, I'm NOT playing a saxophone again!!"
               ],
         () =>
            SAVE.data.b.a_state_fishbetray
               ? SAVE.data.b.killed_mettaton
                  ? [
                     "<18>{#p/papyrus}{#f/6}DON'T BUY INTO IT!\nIT'S AN MTT-BRAND MARKETING STUNT!",
                     "<18>{#p/papyrus}{#f/5}METTATON'S QUITE INFAMOUS FOR THIS SORT OF THING.",
                     "<18>{#p/papyrus}{#f/4}... I DON'T LIKE IT ANY MORE THAN YOU DO."
                  ]
                  : [
                     "<18>{#p/papyrus}{#f/0}THAT'S TEN IN KRIOS-YEARS, BY THE WAY.",
                     '<18>{#p/papyrus}{#f/4}I HAVE NO IDEA HOW MANY EARTH-YEARS THAT IS...',
                     "<18>{#p/papyrus}{#f/5}THOUGH I'VE HEARD THE DIFFERENCE ISN'T THAT BIG."
                  ]
               : world.population_area('s') < 6 || world.population_area('f') < 6 || childEvac() // NO-TRANSLATE

                  ? [
                     "<18>{#p/papyrus}{#f/5}IT'S TOO BAD.\nUNDYNE WOULD BE A GREAT MUSICIAN.",
                     "<18>{#p/papyrus}{#f/4}IMAGINE ALL THE WARRIOR SONGS SHE'D WRITE...",
                     '<25>{#p/undyne}{#f/1}* Yeah, I guess.',
                     '<25>{#p/undyne}{#f/12}* That does sound kind of cool...',
                     "<18>{#p/papyrus}{#f/0}I KNOW, RIGHT?\nIT'D BE TOTALLY FISH-TASTITC!",
                     '<25>{#p/undyne}{#f/3}* ...',
                     '<25>{#p/undyne}{#f/3}* Never say that to me again.'
                  ]
                  : [
                     "<18>{#p/papyrus}IF YOU'RE LOOKING FOR THE ICE CREAM, IT'S TO MY RIGHT.",
                     '<25>{#p/undyne}{#f/3}* Don\'t you mean \"left?\"',
                     '<18>{#p/papyrus}{#f/5}TECHNICALLY, THE ICE CREAM STAND -IS- TO MY LEFT.',
                     "<18>{#p/papyrus}{#f/4}BUT TO THE HUMAN, IT'S ACTUALLY ON MY RIGHT.",
                     '<25>{#p/undyne}{#f/14}* Ah.\n* How considerate of you!',
                     "<25>{#p/undyne}{#f/17}* Just don't be surprised if they get lost."
                  ],
         () =>
            SAVE.data.b.a_state_fishbetray
               ? SAVE.data.b.killed_mettaton
                  ? ["<18>{#p/papyrus}{#f/5}HE SHOULDN'T HAVE TO LIE TO PROMOTE HIS BRAND..."]
                  : ['<18>{#p/papyrus}{#f/5}KEEPING TIME IS HARD SOMETIMES.']
               : world.population_area('s') < 6 || world.population_area('f') < 6 || childEvac() // NO-TRANSLATE

                  ? ['<18>{#p/papyrus}{#f/4}MY LIPS ARE SEALED.']
                  : ['<18>{#p/papyrus}{#f/5}DIRECTIONS CAN BE HARD SOMETIMES.']
      ),
      papinter2: () => [
         '<18>{#p/papyrus}{#f/0}HELLO, HUMAN.',
         '<18>{#p/papyrus}{#f/5}(SIGH...)',
         "<18>YOU'RE PROBABLY WONDERING WHY UNDYNE'S NOT HERE.",
         '<18>HOW DO I PUT IT...',
         "<18>{#f/6}LET'S SAY UNDYNE HAD TO LEAVE FOR... REASONS.",
         ...(SAVE.data.b.killed_mettaton
            ? [
               '<18>{#f/5}... INVOLVING HER THINKING THAT YOU...',
               '<18>{#f/1}KILLED SOMEONE!?!?',
               '<18>{#f/4}I MEAN, I UNDERSTAND WHY SHE DOES.',
               '<18>{#f/5}METTATON\'S \"DEATH\" -WAS- PRETTY CONVINCING.',
               "<18>{#f/0}STILL, EVERYBODY KNOWS THAT'S JUST FOR SHOW.",
               '<18>{#f/4}EVERYBODY EXCEPT FOR UNDYNE, OF COURSE.',
               '<18>{#f/5}I SWEAR...',
               '<18>{#f/5}THE THINGS THAT GO THROUGH HER HEAD SOMETIMES...',
               '<18>{#f/5}...'
            ]
            : [
               '<18>{#f/5}... INVOLVING HER FINDING OUT THAT YOU...',
               '<18>{#f/1}KILLED SOMEONE!?!?',
               "<18>{#f/0}BUT I'M SURE SHE'S JUST MISTAKEN.",
               "<18>{#f/5}YOU WOULDN'T DO ANYTHING LIKE THAT... RIGHT?",
               "<18>{#f/6}S-SO, I'VE DECIDED TO STAY.",
               '<18>{#f/9}SOMEONE HAS TO STAND UP FOR THE \"LITTLE GUY\" HERE!',
               '<18>{#f/0}OR GIRL. OR WHATEVER NAME YOU SO CHOOSE.',
               "<18>{#f/4}WAIT, WHAT IF YOU DON'T HAVE THAT KIND OF NAME...",
               '<18>{#f/8}WHAT WOULD I CALL YOU THEN!?!?'
            ]),
         "<18>{#f/0}WELL, I'LL BE HERE IF YOU WANT TO CHAT.",
         "<18>{#f/5}I'D BE HERE TO CALL, TOO, BUT...",
         "<18>{#f/5}UNDYNE SMASHED MY PHONE WHEN I SAID I'D CALL YOU.",
         "<18>{#f/6}SHE'S VERY PROTECTIVE, IT WOULD SEEM!"
      ],
      undinter: pager.create(
         0,
         () =>
            SAVE.data.n.plot < 68.1 || SAVE.data.b.a_state_hapstablook
               ? iRespeccYourVilliany()
                  ? [
                     '<25>{#p/undyne}{#f/1}* Hey, punk.\n* Long time no see.',
                     "<18>{#p/papyrus}{#f/6}WEREN'T YOU JUST ON TV WITH THEM A MOMENT AGO???",
                     "<25>{#p/undyne}{#f/14}* I mean, yeah, but a moment's a long time.",
                     "<18>{#p/papyrus}{#f/0}THAT'S TRUE.",
                     '<18>{#p/papyrus}{#f/5}WOW... IMAGINE ALL I COULD DO IF I HAD A MOMENT...',
                     "<18>{#p/papyrus}{#f/4}... WHERE I DIDN'T HAVE TO STOP SANS FROM SLACKING OFF.",
                     '<25>{#p/undyne}{#f/17}* Tell me about it.'
                  ]
                  : [
                     '<25>{#p/undyne}{#f/1}* Hey, punk.\n* Nice to see you.',
                     "<18>{#p/papyrus}{#f/6}WEREN'T YOU JUST ENEMIES WITH THEM EARLIER TODAY???",
                     "<25>{#p/undyne}{#f/14}* I mean, yeah, but that's all in the past now.",
                     '<18>{#p/papyrus}{#f/0}IF YOU SAY SO.',
                     '<18>{#p/papyrus}{#f/5}WOW... IMAGINE ALL I COULD DO IF SANS MEANT IT...',
                     '<18>{#p/papyrus}{#f/4}... EVERY TIME HE SAID SOMETHING WAS \"IN THE PAST.\"',
                     '<25>{#p/undyne}{#f/17}* Old habits die hard.'
                  ]
               : [
                  '<25>{#p/undyne}{#f/1}* Hey, punk.\n* Papyrus had some \"business\" to see to.',
                  "<25>{#f/14}* At least, that's what he tells me.",
                  "<25>{#f/7}* But that means I'M the only friend you've got up here!",
                  '<25>{#f/4}* ... so you better not do anything STUPID!'
               ],
         () =>
            SAVE.data.n.plot < 68.1 || SAVE.data.b.a_state_hapstablook
               ? [
                  '<25>{#p/undyne}{#f/1}* If you ever want to join me in the magical arts club...',
                  '<25>{#p/undyne}{#f/3}* ... er, I doubt the taxi would wanna take a kid there, actually.',
                  "<25>{#p/undyne}{#f/12}* Maybe they'll let you visit after you've grown up a little."
               ]
               : ["<25>{#p/undyne}{#f/11}* I've got my eye on you."]
      ),
      corndog1: pager.create(
         0,
         () => [
            "<25>{#p/sans}{#f/0}* 我在這賣點玉米熱狗，\n  5G一個，喜歡就嘗嘗。",
            choicer.create('* （花5G買一個熱狗嗎？）', '是', '否')
         ],
         () => ['<25>{#p/sans}{#f/0}* 玉米熱狗，5G一個。', choicer.create('* （花5G買一個熱狗嗎？）', '是', '否')]
      ),
      corndog2: [
         "<32>{#p/human}* （你帶的東西太多了。）",
         "<25>{#p/sans}{#f/2}* tell you what, i'll just drop it right here."
      ],
      corndog2b: ['<25>{#p/sans}{#f/2}* here you go.'],
      corndog3: ["<32>{#p/human}* （你的錢不夠。）"],
      corndog3x: () =>
         [
            [
               "<25>{#p/sans}{#f/0}* 你連5G都沒有？",
               '<25>{#p/sans}{#f/3}* 要不...\n* 我給你點錢吧。',
               '<32>{#s/equip}{#p/human}* （你得到了100G。）',
               '<25>{#p/sans}{#f/2}* 希望這點錢能幫到你。'
            ],
            [
               '<25>{#p/sans}{#f/0}* 又沒錢了？',
               "<25>{#p/sans}{#f/3}* ...呃。\n* 沒事。",
               "<25>{#p/sans}{#f/2}* 我也不差那5G，就請你吃吧。"
            ]
         ][SAVE.data.n.cornmoney++],
      corndog4: () =>
         [
            ['<32>{#p/human}* （你得到了玉米熱狗。）', '<25>{#p/sans}{#f/2}* 請慢用。'],
            [
               '<32>{#p/human}* （你得到了玉米熱羊。）',
               '<25>{#p/sans}{#f/2}* 哎呀，不好意思。\n  應該是狗狗的。'
            ],
            ['<32>{#p/human}* （你得到了玉米熱狗。）']
         ][Math.min(SAVE.data.n.state_aerialis_corngoat++, 2)],
      corndog5: ['<32>{#p/human}* （你決定先不買。）'],
      corndog6: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* (This sentry station strikes you as rather outrageous.)']
            : world.darker
               ? ["<32>{#p/basic}* 一個哨站。"]
               : ['<32>{#p/basic}* Just another sentry station for the one and only Sans.'],
      sanscall1: () => [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         ...(world.dead_skeleton
            ? [
               '<25>{#p/sans}{#f/0}* so, how was the show?',
               '<25>{#f/0}* good...?\n* bad...?',
               "<25>{#f/3}* eh, i'm just the guy with the puns.",
               "<25>{#f/2}* someone like me wouldn't know the difference anyway.",
               ...(world.sad_ghost && SAVE.data.n.state_foundry_muffet !== 1 && SAVE.data.b.f_state_kidd_betray
                  ? ["<26>{#f/3}* but... hey.\n* i wasn't really paying attention, so it's fine."]
                  : ["<25>{#f/3}* but... hey.\n* i wasn't even there to see it, so it's fine."]),
               '<25>{#f/0}* i only ask, because...\n* frankly...',
               "<25>{#f/0}* it'd be nice to know if a part of you still cared about something.",
               "<25>{#f/3}* i hope that's not asking too much."
            ]
            : [
               '<25>{#p/sans}{#f/0}* so, how was the show?',
               ...(SAVE.data.b.a_state_moneyfish
                  ? [
                     '<25>{#p/sans}{#f/2}* trade blows with undyne, didja?',
                     "<25>{#f/3}* heh.\n* sorry i couldn't make it.",
                     '<25>{#f/0}* once undyne applied, i basically had no chance.',
                     ...(SAVE.data.b.bad_lizard
                        ? ['<25>{#f/3}* besides...', '<25>{#f/0}* i have people like you to worry about nowadays.']
                        : ['<25>{#f/0}* the \"captain of the royal guard\" is far better for ratings.'])
                  ]
                  : world.sad_ghost && SAVE.data.n.state_foundry_muffet !== 1 && SAVE.data.b.f_state_kidd_betray
                     ? [
                        '<25>{#p/sans}{#f/2}* lose out early, did ya?',
                        "<25>{#f/3}* heh.\n* guess you're not as popular as i thought.",
                        "<25>{#f/0}* but that's fine.",
                        ...(SAVE.data.b.bad_lizard
                           ? ['<25>{#f/0}* it kind of makes sense after you made everyone run away.']
                           : ['<25>{#f/0}* at least you were a good sport about it.'])
                     ]
                     : [
                        '<25>{#p/sans}{#f/2}* carry on without me, did ya?',
                        "<25>{#f/3}* don't worry, i'm used to being the odd one of the bunch.",
                        "<25>{#f/2}* it's just that, usually, nobody else knows about it.",
                        ...(SAVE.data.b.bad_lizard
                           ? [
                              "<25>{#f/3}* ... and, considering what you've been up to lately...",
                              "<25>{#f/0}* that's undoubtedly for the best."
                           ]
                           : ["<25>{#f/0}* well.\n* i'm glad you had fun."])
                     ]),
               '<25>{#f/3}* ... by the way...',
               '<25>{#f/2}* if you see any bouncy armored guards up there, let me know.',
               '<25>{#f/3}* i lost track of them on the way out here.'
            ]),
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      tvm1: ['<32>{#p/human}* （你獲得了一臺老式收音機。）', '<32>{#p/basic}{#npc/a}* Hope you like your new radio!'],
      tvm2: ['<32>{#p/human}* （你獲得了一箱煙花。）', '<32>{#p/basic}{#npc/a}* Hope you enjoy the fireworks!'],
      tvm3: ["<32>{#p/human}* （你帶的東西太多了。）"],
      tvm4: pager.create(0, ['<32>{#p/basic}{#npc/a}* Your winnings are on the table there, little one.']),
      tvm5: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/basic}{#npc/a}* I decided I'd rather quit than be fired again.",
                  '<32>* Working for Mettaton was nice, but a new homeworld means a new me.',
                  "<32>* Don't worry.\n* I'll find the perfect job..."
               ]
               : [
                  '<32>{#p/basic}{#npc/a}* I work for Mettaton.\n* I like my job.\n* My co-workers do not.',
                  '<32>* Each ring on my body represents a time I survived the firing process.',
                  "<32>* Don't worry.\n* I always get re-hired later."
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/basic}{#npc/a}* I'm thinking of becoming an expert on the mating rituals of space creatures."
               ]
               : ["<32>{#p/basic}{#npc/a}* I'm thinking of getting a ring on my face next time."]
      ),
      tvm6: () => [
         '<32>{#p/basic}{#npc/a}* There was a Mew Mew doll here for you, but Mettaton had it recalled for personal reasons.',
         "<32>{#p/basic}{#npc/a}* As compensation, here's its full value in G.",
         '<32>{#s/equip}{#p/human}{#npc}* （你獲得了999G。）',
         ...((SAVE.data.b.a_state_moneyitemA && !SAVE.data.b.item_tvm_radio) ||
            (SAVE.data.b.a_state_moneyitemB && !SAVE.data.b.item_tvm_fireworks)
            ? ['<32>{#p/basic}{#npc/a}* The rest of your winnings are still available for pickup.']
            : ['<32>{#p/basic}{#npc/a}* I apologize for the trouble.'])
      ],
      tvm7: () =>
         SAVE.data.b.svr
            ? ['<32>{#p/human}* (The note etched into the table apologizes for retaking an item.)']
            : [
               "<32>{#p/basic}* There's a note etched into the table here.",
               '<32>{#p/mettaton}* \"SORRY, BUT I HAD TO TAKE THE MEW MEW DOLL BACK WITH ME.\"\n* \"NOTHING PERSONAL, OF COURSE.\"'
            ],
      tvm8: ['<32>{#p/human}* （你獲得了一臺老式收音機。）'],
      tvm9: ['<32>{#p/human}* （你獲得了一箱煙花。）'],
      lockup0: () =>
         SAVE.data.b.svr ? ["<32>{#p/human}* (But you didn't have the key.)"] : ["<32>{#p/basic}* 鎖住了。"],
      lockup1: () => [
         '<32>{#p/human}* （你用生鏽的鑰匙打開了保險箱。）',
         ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* 柜子上的標籤寫著\n  「古老的地球武器」。'])
      ],
      lockup2: ['<32>{#p/human}* （你拿走了一把電擊槍。）'],
      lockup3: ['<32>{#p/human}* （你拿走了一顆瞌睡彈。）'],
      lockup4: ['<32>{#p/human}* （你拿走了一瓶糖霧噴。）'],
      lockup5: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (But there wasn't anything left to take here.)"]
            : ["<32>{#p/basic}* 沒有東西了。"],
      lockup6: ["<32>{#p/human}* （你帶的東西太多了。）"],
      gonezo: () =>
         world.bulrun ? ['<32>{#p/basic}* ...但是大家都逃走了。'] : ['<32>{#p/basic}* ...但是誰也沒有來。'],
      spidershop1: () => [
         SAVE.data.n.plot === 72
            ? choicer.create('* （在蜘蛛網裡放36G嗎？）', '是', '否')
            : choicer.create('* （在蜘蛛網裡放56G嗎？）', '是', '否')
      ],
      spidershop2: [
         '<32>{#p/basic}* 幾隻蜘蛛爬了下來，\n  並給了你一樣東西。',
         '<32>{#s/equip}{#p/human}* （你得到了豪華渦旋棒棒糖。）'
      ],
      spidershop3: ["<32>{#p/human}* （你帶的東西太多了。）"],
      spidershop4: ["<32>{#p/human}* （你的錢不夠。）"],
      spidershop5: ['<32>{#p/human}* （你不打算這麼做。）'],
      spidershop6: [
         "<32>{#p/basic}* 蛛網編織成了一行字。",
         '<32>{#p/basic}* 「安息吧，蜘蛛女王。」'
      ],
      spidershop7: () =>
         SAVE.data.b.svr
            ? [
               '<32>{#p/human}* (You run your hand through the spider web.)',
               ...[
                  [
                     "<25>{#p/asriel1}{#f/10}* Frisk, there's nothing in there except spider silk.",
                     "<25>* You're going to make a mess."
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* Please trust me.\n* This will take forever to wash away.',
                     '<25>{#f/15}* I have... experience.'
                  ],
                  ['<25>{#p/asriel1}{#f/15}* Or... you could just keep doing it.', "<26>{#f/16}* That's your loss."],
                  ['<25>{#p/asriel1}{#f/13}* Really now...']
               ][Math.min(asrielinter.spiderweb++, 3)]
            ]
            : ['<32>{#p/basic}* The web is empty.'],
      hotelfood0: () =>
         SAVE.data.b.svr
            ? [
               "<32>{#p/human}* (You dip your hands into the strange bowl of food.)\n* (It's quite slimy.)",
               choicer.create('* (Take the food?)', '是', '否')
            ]
            : ["<33>{#p/basic}* It's a kind of mysterious food.", choicer.create('* (Take the food?)', '是', '否')],
      hotelfood1: () => [
         '<32>{#p/human}* （你拿走了神秘食物。）',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? [
               "<25>{#p/asriel1}{#f/15}* That... thing... can't be healthy for you.",
               '<25>{#f/16}* I hope you realize that.'
            ]
            : [])
      ],
      hotelfood2: ["<32>{#p/human}* （你帶的東西太多了。）"],
      hotelfood3: ['<32>{#p/human}* （你不打算這麼做。）'],
      sonic1: () => [
         '<32>{#p/human}* （你撿到了一個聲波諧振器。）',
         choicer.create('* （啟動聲波諧振器嗎？）', '是', '否')
      ],
      sonic2: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
      tablaphone1: () => [
         '<32>{#p/human}* （你撿到了一架塔布拉木琴。）',
         choicer.create('* （架起塔布拉木琴嗎？）', '是', '否')
      ],
      tablaphone2: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
      moonpie1: () => [
         '<32>{#p/human}* （你拿走了月派。）',
         ...(SAVE.data.b.svr
            ? ['<32>{#p/human}* (The attached note describes an intention to help someone in need.)']
            : [
               "<32>{#p/basic}* 這上面附上了一張便條...",
               '<32>{#p/basic}* 「我知道我與眾不同。\n   我與前哨站裡的大多數人\n   都格格不入。」',
               '<32>{#p/basic}* 「但也許，我可以用這塊樸素的派，\n   來幫助什麼人。」',
               '<32>{#p/basic}* 「一個像我這樣的，\n   善良卻常被誤解的人...」',
               '<32>{#p/basic}* 「...一個需要些\n   額外生命值的人。」'
            ])
      ],
      moonpie2: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
      ratings: '$(x)人正在看',
      gold: '獲勝獎金 $(x)G',
      secretcall: [
         '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
         '<18>{#p/papyrus}{#f/5}PAPYRUS HERE.',
         "<18>{#f/5}I'VE DECIDED I CAN'T HIDE AWAY ANY LONGER.",
         '<18>{#f/6}THE PEOPLE OUT THERE NEED MY HELP!',
         '<18>{#f/5}AND, ULTIMATELY...',
         "<18>{#f/6}I'D LIKE TO CATCH UP WITH YOU IN PERSON AGAIN.",
         '<18>{#f/7}IF \"ASRIEL\" SEES ME ALIVE, THEN SO BE IT!',
         '<18>{#f/7}I REFUSE TO STAND AROUND AND DO NOTHING ALL DAY.',
         '<18>{#f/4}...',
         '<18>{#f/4}SEE YOU SOON.',
         '<32>{#s/equip}{#p/event}* 滴...'
      ],
      story: {
         phonegrabber1: () => [
            game.room === 'a_lab_downstairs' // NO-TRANSLATE

               ? "<33>{#p/basic}* Alphys的備用機。\n* 自帶一張升降門通行證\n  和兩個次元箱子。"
               : "<32>{#p/basic}* 一部智慧型手機。\n* 自帶一張升降門通行證\n  和兩個次元箱子。",
            ...(world.genocide
               ? ['<32>{#p/basic}* The one-time use portable jetpack slot is notably empty.']
               : ['<32>{#p/basic}* 此外，\n  還有個一次性的可攜式噴氣背包。'])
         ],
         phonegrabber2: ['<32>{#p/human}* （你有了一部新手機。）'],
         phonegrabber3: () =>
            SAVE.flag.n.ga_asrielGetThePhone > 1
               ? ['<25>{#p/asriel2}{#f/10}* Finally.']
               : ["<25>{#p/asriel2}{#f/10}* 不知道上面有沒有歷史記錄。"],
         alphys1: () =>
            SAVE.data.n.state_foundry_undyne > 0
               ? ['<25>{#p/alphys}{#f/2}* 我的天啊！', '<25>{#f/3}* How did you...']
               : ['<25>{#p/alphys}{#f/2}* 我的天啊！', '<25>{#f/3}* 你怎麼這麼快就到了！？'],
         alphys2: () =>
            SAVE.data.n.state_foundry_undyne > 0
               ? ["<25>{#p/alphys}{#f/10}* O-oh... you're the human who...", '<25>{#f/3}* Who... uh...']
               : ["<25>{#f/4}* 我剛接完電話，\n  還沒檢查實驗室...", '<25>{#f/17}* ...'],
         alphys3: () =>
            SAVE.data.n.state_foundry_undyne > 0
               ? [
                  "<25>{#g/alphysWhyOhWhy}* You know what, there's no problem here!",
                  "<25>{#g/alphysUhButHeresTheDeal}* You didn't do anything wrong at all!",
                  "<25>{#g/alphysCutscene1}* Nope!\n* You're just a...",
                  '<25>{#g/alphysCutscene2}* A perfect little angel who never did a single wrong thing.',
                  '<25>{#f/20}* ...',
                  "<25>{#f/10}* A-anyway, you're, like, new to Aerialis, right!?",
                  '<25>{#g/alphysIDK}* Well, then... y-you...',
                  "<25>{#f/3}* You're g-g-gonna need my help!",
                  "<25>{#f/5}* 'Cause... like...",
                  '<25>{#f/10}* I-it\'s not really a... \"human friendly\" place.',
                  '<25>{#f/3}* Deadly traps...\n* Impossible puzzles...\n* ... and, uh...',
                  '<25>{|}{#g/alphysIDK}* C-crud, what was I going to- {%}'
               ]
               : [
                  ...[
                     [
                        '<25>{#f/1}* 嗯，呃，你-你好！',
                        "<25>{#f/1}* 我是Alphys博士。\n* 皇家科學部門的負責人。",
                        '<25>{#f/10}* 但是，呃，\n  我不是那些「壞傢伙」！',
                        "<25>{#f/17}* 實際上，從你剛剛走出\n  外域時，我就...",
                        '<25>{#f/5}* 誒嘿，用我的安全控制臺\n  「觀察」你。',
                        '<25>{#f/8}* 你的戰鬥...\n* 你的朋友們...',
                        '<25>{#f/1}* 你的一切！',
                        '<25>{#f/9}* 喔！然後我\n  最喜歡的部分就是...',
                        ...(SAVE.data.b.s_state_million
                           ? [
                              "<25>{#f/16}* ...看到你超過了\n  Sans作弊打出來的分數！",
                              '<25>{#f/12}* 太厲害了...'
                           ]
                           : SAVE.data.b.f_state_thundersnail_win
                              ? [
                                 '<25>{#f/16}* ...看到你贏了一局\n  雷霆蝸牛！',
                                 '<25>{#f/12}* 太厲害了...'
                              ]
                              : !SAVE.data.b.papyrus_fire
                                 ? [
                                    '<25>{#f/16}* ...看到你第一次嘗試\n  就通過了火焰之牆！',
                                    '<25>{#f/12}* 太厲害了...'
                                 ]
                                 : SAVE.data.b.s_state_mathpass
                                    ? [
                                       '<25>{#f/16}* ...看到你靠自己一個人\n  破解了數字中和謎題！',
                                       '<25>{#f/12}* 太厲害了...'
                                    ]
                                    : ['<25>{#f/16}* ...看到了你和\n  Undyne戰鬥？？？']),
                        "<25>{#f/18}* 但是，呃，你需要\n  我的引導來通過空境！"
                     ],
                     [
                        '<25>{#f/8}* 嗯，你-你好...',
                        "<25>{#f/9}* 我是...Alphys博士。\n* 皇家科學部門的負責人。",
                        "<25>{#f/4}* 從你剛剛走出外域時，\n  我就...",
                        '<25>{#f/4}* 誒嘿，用我的安全控制臺\n  「觀察」你。',
                        '<25>{#f/11}* 你的戰鬥...\n* 你的朋友們...',
                        '<25>{#f/11}* ...',
                        ...(SAVE.data.n.state_starton_papyrus === 1
                           ? ["<25>{#f/13}* 甚至...\n* Papyrus的死-死亡..."]
                           : SAVE.data.n.state_foundry_doge === 1 && SAVE.data.n.state_foundry_muffet === 1
                              ? ["<25>{#f/13}* ... even the deaths of Undyne's ELITE s-squad..."]
                              : SAVE.data.n.state_starton_dogs === 2 ||
                                 (SAVE.data.n.state_starton_greatdog === 2 ? 1 : 0) +
                                 (SAVE.data.n.state_starton_lesserdog === 2 ? 1 : 0) +
                                 (SAVE.data.n.state_starton_doggo === 2 ? 1 : 0) >
                                 1
                                 ? ['<25>{#f/13}* ... even the deaths of the c-canine unit...']
                                 : SAVE.data.n.state_starton_doggo === 2
                                    ? ["<25>{#f/13}* 甚至...\n* Doggo的死-死亡..."]
                                    : SAVE.data.n.state_foundry_muffet === 1
                                       ? ["<25>{#f/13}* 甚至...\n* Muffet的死-死亡..."]
                                       : SAVE.data.n.state_foundry_doge === 1
                                          ? ["<25>{#f/13}* 甚至...\n* Doge的死-死亡..."]
                                          : SAVE.data.n.state_starton_greatdog === 2
                                             ? ["<25>{#f/13}* 甚至...\n* Canis Major的死-死亡..."]
                                             : SAVE.data.n.state_starton_lesserdog === 2
                                                ? ["<25>{#f/13}* 甚至...\n* Canis Minor的死-死亡..."]
                                                : ["<25>{#f/13}* ...甚至那些怪物們的\n  死-死亡..."]),
                        "<25>{#f/10}* ...不過，嘿，也不\n  全是壞事，是吧？",
                        "<25>{#g/alphysCutscene2}* 你還活著，\n  你完好無損地\n  來到了這裡...",
                        '<25>{#f/3}* 這是很重要的，\n  對吧？？？',
                        '<25>{#g/alphysIDK}* ...',
                        "<25>{#g/alphysIDK}* 話雖如此，你可能\n  需要我指導你\n  穿過空境。"
                     ]
                  ][world.bad_lizard],
                  '<25>{#f/15}* 是的... 這裡不是個\n  「對人類友好」的地方...',
                  '<25>{#f/17}* 致命的陷阱...\n* 不可能的謎題...\n* 皇家守衛...',
                  '<25>{|}{#f/15}* 更不用說- {%}'
               ],
         alphys4: () =>
            SAVE.data.n.state_foundry_undyne > 0
               ? ['<25>{#g/alphysIDK}* 不... 不不不不不...']
               : ['<25>{#f/20}* Mettaton。'],
         alphys5: () =>
            SAVE.data.n.state_foundry_undyne > 0 ? ['<25>{#f/20}* 別是在這...\n  也別是現在啊...'] : ['<25>{#f/3}* 誒嘿...'],
         alphys6: () => (SAVE.data.n.state_foundry_undyne > 0 ? ['<25>{#f/20}* ...'] : ['<25>{#f/20}* ...']),
         alphys7: () => (SAVE.data.n.state_foundry_undyne > 0 ? ['<25>{#f/23}* 喔天啊。'] : ['<25>{#f/11}* 喔不。']),
         alphys8: () => [
            SAVE.data.n.state_foundry_undyne > 0 ? '<32>{#p/mettaton}* 喔喔喔天啊！' : '<32>{#p/mettaton}* 喔喔喔耶！',
            '<32>{#p/mettaton}* 歡迎，美人兒們...'
         ],
         alphys9: ["<32>{#p/mettaton}* 來到今天的\n  達人秀節目！"],
         alphys10: () =>
            iFancyYourVilliany()
               ? [
                  '<32>{#p/mettaton}* YOU KNOW, FOR A SEEMINGLY \"INNOCENT\" HUMAN CHILD...',
                  '<32>* YOU SURE KNOW HOW TO LAY DOWN THE HURT!',
                  '<32>* BEING BROADCAST TO YOUR SCREENS NOW IS REAL FOOTAGE OF THEIR VILLAINOUS ACTS!',
                  SAVE.data.n.state_foundry_undyne > 0
                     ? '<25>{#p/alphys}{#f/2}* M-mettaton, wait!!\n* What are you...'
                     : '<25>{#p/alphys}{#g/alphysGarbo}* Huh?\n* Did you steal security footage again?'
               ]
               : [
                  "<32>{#p/mettaton}* 我已經預感到了\n  這次會是個超棒的節目喔！",
                  "<32>* 讓我們以熱烈的掌聲\n  歡迎我們的新選手...",
                  '<33>* 唯一一位的人類訪客！'
               ],
         alphys10a: () => [
            '<32>{#p/mettaton}* (PLEASE WAIT AS THE AUDIENCE WATCHES THE FOOTAGE.)',
            SAVE.data.n.state_foundry_undyne > 0
               ? "<25>{#p/alphys}{#f/21}* ...\n* I just can't win."
               : "<26>{#p/alphys}{#g/alphysGarboCenter}* I'll take that as a yes."
         ],
         alphys11: () =>
            iFancyYourVilliany()
               ? [
                  "<32>{#p/mettaton}* ANYWAY, THAT BEING SAID, WE'LL NEED TO GIVE THEM A MONIKER!",
                  ...(world.flirt > 9
                     ? [
                        '<32>{#p/mettaton}* WHEN IT COMES TO VILLAINS, ALL THE GREATS HAVE ONE.\n* BUT YOU...',
                        "<32>{#p/mettaton}* FOR A FLIRTATIOUS BULLY LIKE YOU, THERE'S ONLY ONE NAME THAT FITS!",
                        '<32>{#p/mettaton}* ... $(moniker1u)!'
                     ]
                     : [
                        "<32>{#p/mettaton}* WHEN IT COMES TO VILLAINS, ALL THE GREATS HAVE ONE.\n* SO WHAT'LL IT BE?"
                     ])
               ]
               : ['<32>{#p/mettaton}* 從來沒有玩過嗎，幸運兒？', "<32>* 沒關係，很簡單。"],
         alphys11a: () => [
            choicer.create(
               '* (Which name will you choose?)',
               '黃天霸主',
               '風雲劍客',
               '狂怒劍皇',
               '星際遊俠'
            )
         ],
         alphys11b: () =>
            iFancyYourVilliany()
               ? world.flirt > 9
                  ? ["<32>{#p/mettaton}* SO, $(moniker2u), LET'S SEE IF YOUR SKILLS ON THE BATTLEFIELD..."]
                  : [
                     '<32>{#p/mettaton}* $(moniker1u), HUH?\n* MY, WHAT AN EXCELLENT CHOICE!',
                     "<32>{#p/mettaton}* WELL, $(moniker2u), LET'S SEE IF YOUR SKILLS ON THE BATTLEFIELD..."
                  ]
               : ["<32>* 實際上，規則只有一個！", '<32>* 拿出你一生中\n  最好的表現...'],
         alphys12: () =>
            iFancyYourVilliany()
               ? ['<32>{*}{#p/mettaton}* 把它搬上舞臺！！！{^20}{%}']
               : ['<32>{*}{#p/mettaton}* 否則就會死！！！{^20}{%}'],
         alphys13: () =>
            SAVE.data.n.state_foundry_undyne > 0
               ? [
                  '<25>{#p/alphys}{#f/10}* Y... you know what?',
                  '<25>{#f/10}* You can do whatever you want.',
                  "<25>{#f/23}* 'Cause... I'm leaving.",
                  '<25>{#f/23}* Forever.',
                  '<25>{#f/5}* And if you need me for something...',
                  '<25>{#f/5}* Well...',
                  '<25>{|}{#f/16}* Too bad!!!{%}'
               ]
               : [
                  ...(world.bad_lizard < 1
                     ? [
                        '<25>{#p/alphys}{#f/5}* 嘿...',
                        '<25>{#f/8}* 我知道這麼說有點\n  莫名其妙，但是...\n  你真-真的很酷。'
                     ]
                     : [
                        '<25>{#p/alphys}{#f/5}* 嘿...',
                        '<25>{#f/8}* I know that kinda came outta nowhere, but...',
                        '<25>* You handled it p-pretty well.'
                     ]),
                  "<25>{#f/9}* 總之，呃，就像我說的，\n  你會需要我的幫助的。",
                  "<25>{#f/17}* 讓我看看你身上\n  都帶了些什麼..."
               ],
         alphys14: [
            '<25>{#p/alphys}{#f/21}* ...',
            '<25>{#f/21}* 這是啥。',
            '<25>{#f/21}* 這是誰給你的。',
            '<25>{#f/22}* 誰還用這樣的\n  老古董啊？？？',
            '<25>{#f/22}* ...',
            "<25>{#f/23}* 我馬上回來。"
         ],
         alphys15: () =>
            world.bad_lizard < 1
               ? [
                  '<25>{#p/alphys}{#g/alphysCutscene1}* 好了，我給你搞了個\n  新手機！',
                  "<25>* 裡面有升降門通行證，\n  次元箱子...",
                  '<25>{#g/alphysHellYeah}* 還有你自己的域外網帳號！',
                  '<25>{#g/alphysSmileSweat}* 我順便加了你的好友，\n  這樣你需要幫助的時候\n  隨時都能聯繫我了！',
                  '<25>{#g/alphysUhButHeresTheDeal}* 好耶！！',
                  '<32>{#s/equip}{#p/human}* （你有了一部新手機。）'
               ]
               : [
                  '<25>{#p/alphys}{#g/alphysWelp}* Sorry, but that thing you were using was a glorified brick.',
                  "<25>{#g/alphysSide}* This new phone's got a liftgate pass, dimensional boxes...",
                  '<25>{#g/alphysSmileSweat}* And your very own OuterNet account!',
                  "<25>{#g/alphysNervousLaugh}* Don't worry, I made us friends so you can ping me for help if needed.",
                  '<32>{#s/equip}{#p/human}* （你有了一部新手機。）'
               ],
         alphys16: ["<25>{#p/alphys}{#g/alphysWelp}* 我先去辦公了。"],
         rg1a: () =>
            world.bad_lizard > 1
               ? world.goatbro
                  ? ['<32>{#p/basic}{#x1}* 你們兩個！{#x3}']
                  : ['<32>{#p/basic}{#x1}* 你！{#x3}']
               : ['<32>{#p/basic}{#x1}* Hey kid!{#x3}'],
         rg1b1: () =>
            world.bad_lizard > 1
               ? ['<32>{#p/basic}{#x1}* 前面的，能解釋一下\n  為什麼把人都殺了嗎？{#x3}']
               : ['<32>{#p/basic}{#x1}* Can you like, help us find the nearest ice cream stand?{#x3}'],
         rg1b2: () =>
            world.bad_lizard > 1
               ? ["<32>{#p/basic}{#x1}* 我和我男朋友...\n  覺得這事很呆唉。{#x3}"]
               : ['<32>{#p/basic}{#x1}* My boyfriend and I have been looking all over the place!{#x3}'],
         rg1c: () =>
            world.bad_lizard > 1
               ? ['<33>{#p/basic}{#x2}* 該死，老兄。\n* 我想我們，就，\n  可能得殺掉他們才行。{#x3}']
               : [
                  '<32>{#p/basic}{#x1}* You okay, kid?{#x3}',
                  "<32>{#x1}* You're acting, like, pretty weird and stuff...{#x3}",
                  '<32>{#x1}* You know, with the whole \"not talking to us\" thing and all...{#x3}',
                  '<32>{#x1}* So, uh...{#x3}'
               ],
         rg1d1: () =>
            world.bad_lizard > 1
               ? ["<32>{#p/basic}{#x1}* 對欸...\n* 這應該是我們的工作，是吧？{#x3}"]
               : ["<32>{#p/basic}{#x1}* Forget it, bro.\n* I don't think they even know we're standing here.{#x3}"],
         rg1d2: [
            '<32>{#p/basic}{#x2}* But the ice cream!{#x3}',
            "<32>{#p/basic}{#x1}* Come on, bro.\n* We can't stay away from training all day.{#x3}"
         ],
         rg1d3: ['<32>* ...', '<32>{#x2}* Yeah, okay.{#x3}'],
         rg1e: [
            '<32>{#p/basic}{#x1}* Well, see ya, I guess...{#x3}',
            "<32>{#x2}* We'll let ya know how that ice cream thing goes later!{#x3}"
         ],
         rg1f: [
            '<33>{#p/basic}{#x1}* Bro... we gotta get outta here!{#x3}',
            '<32>{#x2}* Yeah, like, sorry Undyne!{#x3}'
         ],
         robocaller1: () =>
            [
               [
                  '<32>{#p/mettaton}* 來了啊。',
                  '<32>{#z03}* 你也許不認得我，但我認得你...',
                  "<32>{#z21}* YOU'RE THE ONE WHO HAD AN ENCOUNTER WITH THE CAPTAIN OF THE GUARD.",
                  "<32>{#z30}* AN ENCOUNTER WHICH ENDED IN THAT CAPTAIN'S DEATH.",
                  "<32>{#z31}* NOW, PERSONALLY, I'M NOT THE BIGGEST FAN OF UNDYNE.",
                  '<32>{#z30}* BUT ALPHYS... VERY MUCH WAS.',
                  "<32>{#z21}* AND SHE'S TAKING THIS ALL PRETTY HARD.",
                  "<32>{#z21}* I'M NOT SAYING YOU'RE A BAD PERSON, BUT YOUR CHOICES... HURT MY FRIEND.",
                  "<33>{#z30}* ... LET'S JUST SAY SHE ISN'T GOING TO BE AROUND FOR A WHILE.",
                  "<32>{#z03}* DON'T WORRY, THOUGH.\n* IF YOU EVER FEEL LONELY, YOU CAN REST ASSURED...",
                  "<32>{#z02}* I'LL BE WATCHING YOUR EVERY MOVE.",
                  '<32>{#z21}* ...',
                  '<32>{#z11}* 好吧，回見！'
               ],
               [
                  '<32>{#p/mettaton}* 小鬼，你來啦。',
                  '<32>{#z03}* 你也許不認得我，但我認得你...',
                  '<32>{#z21}* 聽著，你幹了些什麼缺德事，\n  我和Alphys可都看得清清楚楚。',
                  "<32>{#z00}* 要是你只是犯了點小錯，\n  我們都能理解...",
                  '<32>* 真見鬼，\n  ALPHYS和我本來都很喜歡人類的。',
                  "<32>{#z03}* 結果你所表現出來的\n  只有無盡的暴力。",
                  "<32>{#z21}* 今天，ALPHYS...\n  也不打算摻和這破事了...",
                  "<32>{#z00}* 親眼目睹你的暴行之後，\n 這對她也好。",
                  '<32>{#z21}* 我請你別再殺害無辜了，\n  你答應嗎？',
                  '<32>{#z21}* ...',
                  '<32>{#z11}* 好吧，回見！'
               ],
               [
                  '<32>{#p/mettaton}* 來了啊。',
                  '<32>{#z03}* 也許你們不認得我，\n  不過...',
                  '<32>* ...',
                  '<32>{#z00}* ...',
                  "<32>* 嗯哼，我就實話實說了。",
                  "<32>{#z11}* 一個個怪物在你們手下死去，\n  我都看在眼裡，可我...\n  只覺得麻木。",
                  "<32>{#z00}* 但有一個人，我不能拋下。",
                  ...(SAVE.flag.n.genocide_milestone < 5
                     ? [
                        "<32>* 她從不接我電話...",
                        "<32>{#z21}* 也從不回我域外網訊息，\n  就算她明擺著線上。",
                        '<32>{#z11}* 此外，就剛剛，\n  她走前跟我說的那番話...？',
                        '<32>{#z00}* 搞得我很擔心吶。'
                     ]
                     : [
                        "<32>{|}* 她從不接我- {%}",
                        '<25>{#z21}{#p/asriel2}{#f/8}* 跟你說一聲，\n  她這是打算跟我們戰鬥呢。',
                        "<32>{#z00}{#p/mettaton}* UM, EXCUSE ME?\n* IT'S RUDE TO INTERRUPT PEOPLE WHEN THEY'RE TALKING."
                     ]),
                  '<32>* 人類，但凡你還有點良心...',
                  "<32>* 那就試著用用那股力量...",
                  '<32>* 重置這條時間軸吧。',
                  "<32>{#z11}* 不然，你非要一條道走到黑的話...？",
                  "<32>{#z02}* 那就有你好果子吃了。"
               ]
            ][Math.max(world.bad_lizard - 1, 0)],
         robocaller1x: [
            "<25>{#p/asriel2}{#f/13}* 你還真把自己\n  當個狠角兒呢？",
            "<25>{#f/9}* 逗死我了。"
         ],
         robocaller2: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? [
                  '<32>{#p/mettaton}{#z11}* 親...\n* 原來你們不知道啊...？',
                  '<32>{#z02}* 哈哈哈...',
                  '<32>{#z03}* 總之，你們給我記著...',
                  "<32>{#z12}* 不聽勸的話，後果自負。",
                  '<32>{#z21}* ...',
                  '<32>{#z11}* 好吧，回見！'
               ]
               : [
                  "<32>{#p/mettaton}{#z11}* 親，無意冒犯，\n  但這話實在荒唐。",
                  "<32>{#z03}* ALPHYS不擅長戰鬥，\n  這可是她自己說的。",
                  '<32>{#z12}* ...戰鬥這事，我有更好的人選。',
                  '<32>{#z02}* 哈哈哈...',
                  '<32>{#z21}* ...',
                  '<32>{#z11}* 好吧，回見！'
               ],
         robocaller2x: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? ['<25>{#p/asriel2}{#f/13}* 好？']
               : ['<25>{#p/asriel2}{#f/16}* 酷喔。'],
         status: '$(x) updated status',
         barricade1: () => [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            "<25>{#p/alphys}{#g/alphysSideSad}* I don't think you can get through that...",
            '<25>{#g/alphysSmileSweat}* Let me see if I can do anything to help.',
            '<32>{#p/human}* (It sounds like someone is furiously typing at a keyboard.)',
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* Security... w-what?',
            '<32>{#p/human}* (More typing can be heard.)',
            '<32>{#p/human}* （...）',
            '<32>{#p/human}* (The typing stops.)',
            "<25>{#p/alphys}{#g/alphysWelp}* So... looks like we're gonna have to answer security questions.",
            "<25>{#g/alphysGarbo}* Mettaton's security questions...",
            '<25>{#g/alphysNeutralSweat}* Do you... happen to know anything useful about Mettaton?',
            '<25>{#g/alphysTheFactIs}* ... probably not, considering you just met him...',
            "<25>{#g/alphysUhButHeresTheDeal}* Well, uh, maybe you'll know the answer to the first one.",
            '<25>{|}{#g/alphysIDK}* \"Who has the bi- {%}',
            ...(world.postnoot
               ? []
               : [
                  "<25>{#g/alphysWTF}* Oh my god of course he'd use that as a security question.",
                  '<25>{#g/alphysNervousLaugh}* \"Who has the biggest crush on Mettaton?\"',
                  choicer.create('* （你要怎麼回答？）', 'Alphys', 'Asgore', 'Papyrus', 'Undyne')
               ])
         ],
         barricade1x: [
            '<25>{#p/alphys}{#g/alphysInquisitive}* ... huh?',
            '<25>{#g/alphysWelp}* The barricades just... lifted themselves.',
            '<25>{#g/alphysCutscene1}* Okay then!\n* That makes things easy!'
         ],
         barricade1b1: [
            '<25>{#p/alphys}{#g/alphysFR}* ...',
            '<25>{#g/alphysFR}* I do NOT have a crush on Mettaton.',
            "<25>{#g/alphysCutscene2}* Let's try... Asgore."
         ],
         barricade1b2: ['<25>{#p/alphys}{#g/alphysSmileSweat}* Hmm... okay.'],
         barricade1b3: () => [
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* You sure?',
            '<25>{#p/alphys}{#x1}* ...',
            ...(SAVE.data.n.state_starton_papyrus === 1
               ? [
                  '<25>{#p/alphys}{#g/alphysSideSad}* Oh, I guess that was the right answer.',
                  '<25>{#g/alphysHaveSomeCompassion}* ...'
               ]
               : [
                  '<25>{#p/alphys}{#g/alphysWelp}* Oh wow, that was the right answer.',
                  '<25>{#g/alphysFR}* ...',
                  "<25>{#g/alphysFR}* That's an oddly specific thing to know about Papyrus.",
                  '<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* But okay!!'
               ])
         ],
         barricade1b4: () => [
            ...(SAVE.data.n.state_foundry_undyne === 1
               ? [
                  "<25>{#p/alphys}{#g/alphysHaveSomeCompassion}* ...\n* I don't think she really liked him.",
                  "<25>{#g/alphysSideSad}* Let's try... Asgore."
               ]
               : [
                  "<25>{#p/alphys}{#g/alphysCutscene3}* Pfft...\n* You're kidding, right?",
                  "<25>* She TOLERATES him.\n* There's no way that's the answer.",
                  "<25>{#g/alphysCutscene2}* Let's try... Asgore."
               ])
         ],
         barricade2: () => [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysCutscene2}* Okay, so the question for this one is...',
            '<25>{|}{#g/alphysCutscene1}* \"Who is Mettaton\'s- {%}',
            '<25>{#g/alphysGarbo}* Are they all seriously about himself?',
            '<25>{#g/alphysGarboCenter}* Man.',
            '<25>{#g/alphysWelp}* \"What is Mettaton\'s most successful product line?\"',
            choicer.create('* （你要怎麼回答？）', 'MTT美妝', 'MTT廚具', 'MTT科技', 'MTT電視臺')
         ],
         barricade2b1: [
            "<25>{#p/alphys}{#g/alphysCutscene2}* Yeah... that's probably the right answer.",
            '<25>{#g/alphysTheFactIs}* He really wants his TV shows to take off, but...',
            '<25>{#g/alphysUhButHeresTheDeal}* People do love their beauty products!'
         ],
         barricade2b2: [
            '<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* There sure are a lot of MTT-brand kitchen appliances around...',
            "<25>{#g/alphysWelp}* Heck, Undyne has one, and she doesn't even like the guy.",
            "<25>{#g/alphysSmileSweat}* ... yeah, let's try it."
         ],
         barricade2b3: [
            '<25>{#p/alphys}{#g/alphysFR}* ...',
            "<25>{#g/alphysFR}* I'm gonna pretend you didn't say that.",
            "<25>{#g/alphysHellYeah}* Everyone knows I'm the one you go to for tech!",
            '<25>{#g/alphysHellYeah}* ...',
            "<25>{#g/alphysWelp}* How about... Mettaton's cooking products?"
         ],
         barricade2b4: [
            '<25>{#p/alphys}{#g/alphysWorried}* I dunno...',
            "<25>{#g/alphysWelp}* Mettaton's TV shows haven't been doing too well lately.",
            '<25>{#g/alphysWTF}{#x1}* ...',
            '<25>{#g/alphysWTF2}* That was RIGHT!?',
            '<25>{#g/alphysCutscene3}* ... how do you know all of this stuff?',
            '<25>{#g/alphysUhButHeresTheDeal}* Well, one more to go!'
         ],
         barricade3: () => [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* 最後一個問題...',
            '<25>{#g/alphysNeutralSweat}* 「Mettaton的真實身份\n   是什麼？」',
            '<25>{#g/alphysNeutralSweat}* ...',
            choicer.create('* （你要怎麼回答？）', '42號模型', 'Hapstablook', 'Aidrian', 'Mettaton') 
         ],
         barricade3b1: [
            '<25>{#p/alphys}{#g/alphysCutscene2}* 啊，關於這個...',
            "<25>{#p/alphys}{#g/alphysCutscene3}* 我... 只完成過一個\n  Mettaton的模型。",
            "<25>{#p/alphys}{#g/alphysFR}* 所以我知道\n  不可能是它。"
         ],
         barricade3b2: [
            '<25>{#p/alphys}{#g/alphysShocked}* 什...',
            '<25>{#g/alphysOhGodNo}* 你是怎麼知道的？',
            "<25>{#g/alphysOhGodNo}* 不應該有人知道\n  這個的啊！！！",
            '<25>{#g/alphysNeutralSweat}* 你-你有告訴過\n  其他人嗎？？',
            '<25>{#g/alphysNeutralSweat}* Are you planning to!?',
            '<25>{#g/alphysNeutralSweat}* ...',
            "<25>{#g/alphysNervousLaugh}* 行吧...\n  這至少不是Mettaton的\n  真實身份。"
         ],
         barricade3b3: [
            '<25>{#p/alphys}{#g/alphysInquisitive}* Aidrian?',
            '<25>{#g/alphysInquisitive}* 這又是什麼逆天東西？',
            "<25>{#g/alphysSmileSweat}* 嗯，肯定不是它。"
         ],
         barricade3b4: [
            "<25>{#p/alphys}{#g/alphysCutscene1}* 所以說...\n  Mettaton的真實身份\n  其實就是Mettaton，嗯？",
            '<25>{#x1}* ...',
            '<25>{#p/alphys}{#g/alphysWelp}* Oh.\n* I guess it is.',
            '<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* The more you know!'
         ],
         barricade3c: [
            '<25>* ...',
            '<25>{#p/alphys}{#g/alphysSide}* 嗯... 我有個主意。',
            '<32>{#p/human}* (The typing from earlier resumes.)',
            '<25>{#p/alphys}{#g/alphysCutscene1}{#x1}* ...',
            '<25>{#p/alphys}{#g/alphysSmileSweat}* There!!!',
            '<25>{#g/alphysUhButHeresTheDeal}* Well, that was fun.'
         ],
         barricadeFail1: [
            '<25>{#p/alphys}{#g/alphysNeutralSweat}* ...',
            "<25>{#g/alphysNeutralSweat}* 也不對...\n  看來我得對其進行覆寫了。",
            '<25>{#g/alphysWelp}* ...',
            '<25>{#g/alphysWelp}* 這可能得花些時間。',
            "<25>{#g/alphysUhButHeresTheDeal}* 完事之後我會跟-\n  跟你說一聲的！"
         ],
         barricadeFail2: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysSmileSweat}* 好-好了，\n  覆寫已經完成。'
         ],
         barricadeFail2x: [
            '<25>{#p/alphys}{#g/alphysInquisitive}* ...',
            '<25>{#g/alphysInquisitive}* 你是離開了那個房間嗎？',
            '<25>{#g/alphysSide}* 呃，行吧。\n  現在路障已經消失了。'
         ],
         barricadeFail3: ['<25>{#p/alphys}{#g/alphysCutscene1}* 希望對你有所幫助！'],
         barricade4: () => [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysSideSad}* Not this again...',
            '<25>{#g/alphysSideSad}* ...',
            "<25>{#g/alphysWelp}* Wait, I'm still logged into Mettaton's account.",
            '<25>{#g/alphysNervousLaugh}* Maybe I c-can just unlock it right away!',
            '<32>{|}{#p/human}* (The typing from earlier resu- {%}',
            '<25>{#p/alphys}{#g/alphysHellYeah}{#x1}* Got it!',
            '<25>{#g/alphysWelp}* ...',
            "<25>{#g/alphysGarboCenter}* I really hope that's the last time we have to deal with that.",
            ...(SAVE.data.b.failshow
               ? []
               : SAVE.data.b.item_tvm_mewmew &&
                  !SAVE.storage.inventory.has('tvm_mewmew') && // NO-TRANSLATE

                  !SAVE.storage.dimboxA.has('tvm_mewmew') && // NO-TRANSLATE

                  !SAVE.storage.dimboxB.has('tvm_mewmew') // NO-TRANSLATE

                  ? [
                     '<25>{#g/alphysTheFactIs}* Oh, a-and, uh, about that Mew Mew doll...',
                     '<25>* Well...',
                     '<25>{#f/10}* Wait, did you...',
                     '<25>{#f/3}* D-did you throw it away or something?',
                     '<25>{#f/3}* ...',
                     '<25>{#g/alphysUhButHeresTheDeal}* Sure, okay!'
                  ]
                  : [
                     '<25>{#g/alphysTheFactIs}* Oh, a-and, uh, about that Mew Mew doll...',
                     '<25>* Well...',
                     "<25>{#g/alphysUhButHeresTheDeal}* Actually, you don't even have it, so never mind.",
                     '<25>{|}{#g/alphysCutscene3}* Anyway see you at the elevator baiiii- {%}'
                  ]),
            '<32>{#s/equip}{#p/event}* 滴...'
         ],
         puzzleReaction1: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysHellYeah}* You did it!!',
            '<25>{#g/alphysNeutralSweat}* ...',
            '<25>{#g/alphysCutscene2}* C... congratulations.'
         ],
         cooker1a: ['<32>{#p/mettaton}* 你好啊。'],
         cooker1b: ["<32>{*}{#p/mettaton}* 歡迎來到前哨站的首期\n  創藝工坊節目！{^30}{%}"],
         cooker2a1: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/mettaton}* WHAT ARE WE MAKING TODAY?\n* SOMETHING FUN, OF COURSE!']
               : ['<32>{#p/mettaton}* 大家的工具都充好電了嗎？\n  我們馬上就要來搞一些\n  「勁爆」的玩意了！'],
         cooker2a2: () =>
            iFancyYourVilliany()
               ? ["<32>{#p/mettaton}* AFTER ALL, IT'S UP TO US TO SET A GOOD EXAMPLE!"]
               : ['<32>{#p/mettaton}* 哈哈哈...'],
         cooker2b: () =>
            iFancyYourVilliany()
               ? [
                  '<32>{#p/mettaton}* THIS BOISTEROUS BULLY WILL GATHER THE SUPPLIES.',
                  '<32>{#p/mettaton}* EVERYONE GIVE THEM THE SILENT TREATMENT THEY DESERVE!'
               ]
               : [
                  '<32>{#p/mettaton}* 我可愛的助手會去準備用品。',
                  '<32>* 請大家給予熱烈的掌聲！'
               ],
         cooker3a: () => [
            "<32>{#p/mettaton}* 我們需要三件重要的物品。",
            iFancyYourVilliany()
               ? '<32>* {@fill=#ff0}HAPPY POWDER{@fill=#fff}, {@fill=#ff0}TINGLE SERUM{@fill=#fff}, AND {@fill=#ff0}LOVE OIL{@fill=#fff}.'
               : '<32>* {@fill=#ff0}環三亞甲基三硝胺{@fill=#fff}，\n  {@fill=#ff0}己二酸二正辛酯{@fill=#fff}，和{@fill=#ff0}礦物油{@fill=#fff}。'
         ],
         cooker3b: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/mettaton}* HOP TO IT, $(moniker2u)!']
               : ['<32>{#p/mettaton}* 開始吧，甜心！'],
         cooker4a: ['<32>{#p/mettaton}* 好極了！', '<32>* 現在，讓我...'],
         cooker4b: ['<32>{#p/mettaton}* 搞定！', "<32>* 我們要用這些東西..."],
         cooker5: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/mettaton}* ... TO MAKE MTT-BRAND {@fill=#003cff}FUN SLIME{@fill=#fff}! (TM)']
               : ['<32>{#p/mettaton}* ...來製作{@fill=#f00}塑性炸藥{@fill=#fff}！'],
         cooker6: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/mettaton}* HERE IT COMES!']
               : ['<32>{#p/mettaton}* 祈禱吧，美人兒！'],
         cooker7a: () =>
            iFancyYourVilliany()
               ? [
                  '<32>{#p/event}* 鈴鈴，鈴鈴...',
                  '<25>{#p/alphys}{#g/alphysShocked}* Uh, w-wait!',
                  "<25>{#g/alphysOhGodNo}* That's not {@fill=#003cff}fun slime{@fill=#fff}...",
                  "<25>{#g/alphysUhButHeresTheDeal}* That's {@fill=#f00}plastic explosive{@fill=#fff}!"
               ]
               : [
                  '<32>{#p/event}* 鈴鈴，鈴鈴...',
                  '<25>{#p/alphys}{#g/alphysShocked}* Uh, w-wait!',
                  '<25>{#g/alphysOhGodNo}* If you synthesize that right now...',
                  "<25>{#g/alphysUhButHeresTheDeal}* You'll destroy h-half of Aerialis!"
               ],
         cooker7b: () =>
            iFancyYourVilliany()
               ? [
                  '<32>{#p/mettaton}* HUH...?\n* ARE YOU SAYING OUR SPECIAL GUEST SWAPPED THE INGREDIENTS?',
                  '<25>{#p/alphys}{#g/alphysTheFactIs}* W-well...\n* Not exactly...',
                  '<32>{#p/mettaton}* OH DEAR...\n* I DO BELIEVE OUR SPECIAL GUEST SWAPPED THE INGREDIENTS!',
                  "<25>{#p/alphys}{#g/alphysSmileSweat}* That's not what I- {%}",
                  '<32>{#p/mettaton}* HOW TREACHEROUS!\n* TO THINK OUR SPECIAL GUEST COULD DO SUCH A THING...'
               ]
               : [
                  '<32>{#p/mettaton}* AND WHY IS THAT...?',
                  "<25>{#p/alphys}{#g/alphysTheFactIs}* B-because...\n* It's...",
                  "<25>{#g/alphysHellYeah}* Because there's a tachyon excitation field in effect!!",
                  '<32>{#p/mettaton}* A WHAT?',
                  '<25>{#p/alphys}{#f/3}* I had to turn it on for an experiment today.',
                  '<32>{#p/mettaton}* OH.'
               ],
         cooker7c: ['<32>{#p/mettaton}* 等等，這很可能讓人喪命。'],
         cooker8a1: () =>
            iFancyYourVilliany()
               ? [
                  "<32>{#p/mettaton}* DON'T WORRY, THOUGH.",
                  '<32>* WITH ANY LUCK, THIS WILL SERVE AS A VALUABLE LESSON IN HOW NOT TO SABOTAGE MY SHOW.'
               ]
               : [
                  '<32>{#p/mettaton}* 抱歉，各位...',
                  "<32>* 看來我們今天\n  不會【製作】任何炸藥了。"
               ],
         cooker8a2: () =>
            iFancyYourVilliany()
               ? [
                  "<32>* WHAT!?!?\n* THE ARTS 'N' CRAFTS WAS JUST A DISTRACTION FOR THIS!?!?",
                  "<32>* OH MY, $(moniker1u)'S VILLAINY TRULY KNOWS NO BOUNDS!"
               ]
               : ['<32>* 幸好我提前做了一些，對吧？'],
         cooker8b: () =>
            iFancyYourVilliany()
               ? [
                  '<32>* WELL, DEAR $(moniker2u), I STILL HAVE ONE LAST TRICK UP MY METAPHORICAL SLEEVE.',
                  "<32>* IF YOU DON'T CROSS THIS FIELD OF BOMBS IN {@fill=#ff0}NINETY SECONDS{@fill=#fff}..."
               ]
               : [
                  "<32>* 然後，為了增加緊張感，\n  你需要在{@fill=#ff0}九十秒{@fill=#fff}內飛過這片虛空..."
               ],
         cooker9: () =>
            iFancyYourVilliany()
               ? [
                  "<32>{#p/mettaton}* I'LL USE YOUR OWN CREATION AGAINST YOU AND {@fill=#f00}BLOW YOU TO SMITHEREENS{@fill=#fff}!"
               ]
               : ["<32>{#p/mettaton}* 不然就會被{@fill=#f00}炸成碎片{@fill=#fff}！"],
         cooker10: ['<32>{#p/mettaton}* 你最好現在開跑！！！'],
         cooker11: ["<32>{#p/basic}* 看起來靠你自己是無法穿越這裡的。"],
         cooker12: () =>
            SAVE.data.n.state_foundry_undyne > 0
               ? [
                  '<32>{#p/event}* 鈴鈴，鈴鈴...',
                  '<25>{#p/alphys}{#f/20}* Uh... I...',
                  "<25>{#g/alphysIDK}* I d-don't know if this is a good idea...",
                  "<25>{#f/16}* B-but I'd rather help you than let you die!!",
                  "<25>{#f/10}* Wouldn't want to... s-stoop to that level, am I right?",
                  '<25>{#f/5}* So... basically, most cell phones around here...',
                  '<25>{#f/6}* Have a one-time use portable jetpack.',
                  '<25>{#f/10}* Maybe... your phone has one too??'
               ]
               : [
                  '<32>{#p/event}* 鈴鈴，鈴鈴...',
                  '<25>{#p/alphys}{#g/alphysSide}* Hey, uh...',
                  '<25>{#g/alphysCutscene1}* I think I know a way you can get across!',
                  "<25>{#g/alphysNervousLaugh}* It's... well...",
                  "<25>{#g/alphysSmileSweat}* It's not as good as Undyne's, but, the phone I gave you...",
                  '<25>{#g/alphysHellYeah}* It has a one-time use portable jetpack!',
                  '<25>{#g/alphysNervousLaugh}* Maybe... now would be a good time to try it??'
               ],
         cooker12x: ["<32>{#p/basic}* ...你意識到Alphys的手機\n  配備了個噴氣背包。"],
         cooker13: () => [
            '<32>{#p/human}* （你激活了噴氣背包。）',
            SAVE.data.n.state_foundry_undyne > 0
               ? '<25>{#p/alphys}{#f/3}* G-good luck?'
               : "<25>{#p/alphys}{#g/alphysHellYeah}* Now we're cooking!",
            '<32>{#s/equip}{#p/event}* 滴...',
            ...(SAVE.data.b.oops ? [] : ['<32>{#p/basic}* This is absolutely bonkers.'])
         ],
         cooker13x: ['<32>{#p/human}* （你激活了噴氣背包。）'],
         cooker14: ' $(x)',
         cooker15: '$(x)%',
         cooker16a: ['<32>{#p/mettaton}* 你知道在這兒會有生命危險...\n  對吧？'],
         cooker16b: ['<32>* ...'],
         cooker16c: ['<32>* 也許我們的嘉賓精神不太穩定。', '<32>* 這樣的話...'],
         cooker16d: [
            "<32>* 這期節目就得被剪輯了！",
            "<32>* 不過，別擔心。",
            "<32>* 我們的下一期節目甚至\n  【不需要】你保持理智！"
         ],
         cooker16e: () => [
            "<32>{#p/mettaton}* 好吧，到此為止。",
            ...(iFancyYourVilliany()
               ? [
                  '<32>* JUST KNOW THIS, \"$(moniker2u)...\"',
                  '<32>* THE NEXT TIME WE MEET, SANITY WILL BE THE LEAST OF YOUR WORRIES!'
               ]
               : ['<32>* 那麼，下回再說吧...', '<32>* 讓我們祝願人類平安無事。'])
         ],
         cooker16f: [
            '<32>{#p/basic}* Huh??',
            "<32>* You could've gotten yourself killed right there!",
            "<32>* ... as if I didn't already know this was all just for show.",
            "<32>* Doesn't make it any less entertaining, though!"
         ],
         cooker17a: [
            '<32>{#p/mettaton}* 哎呀呀...',
            "<32>* 看起來... 你甚至一半都沒走到？",
            "<32>* 天啊。\n* 這麼說你要死了。",
            '<32>* 哈哈哈...',
            '<32>* ...',
            '<32>* ...開玩笑的。',
            '<32>* 你得安然無恙地參加下一期節目。'
         ],
         cooker17b: [
            '<32>{#p/mettaton}* 哎呀呀...',
            "<32>* LOOKS LIKE YOU DIDN'T QUITE MAKE IT, HUH?",
            "<32>* BUT HEY.\n* JUST BECAUSE YOU'RE SUCH A GOOD SPORT, I'LL LET YOU GO."
         ],
         cooker17c: () => [
            "<32>{#p/mettaton}* 好吧，到此為止。",
            ...(iFancyYourVilliany()
               ? [
                  '<32>* JUST KNOW THIS, \"$(moniker2u)...\"',
                  "<32>* THE NEXT TIME WE MEET, THINGS WON'T BE SO EASY FOR YOU!"
               ]
               : ['<32>* 那麼，下回再說吧...', '<32>* 再見了各位！'])
         ],
         cooker17d: [
            '<32>{#p/basic}* That sure was the \"bomb!\"',
            "<32>{#p/basic}* I wonder how well you'll do in the next one."
         ],
         cooker17e: [
            '<32>{#p/basic}* That sure was the \"bomb!\"',
            "<32>{#p/basic}* Too bad you couldn't make it to the end in time."
         ],
         cooker18a: [
            '<32>{#p/mettaton}* 哎呀呀...',
            "<32>* IT SEEMS YOU'VE MADE IT JUST IN TIME.",
            "<32>* CONGRATULATIONS!\n* YOU DON'T COMPLETELY SUCK."
         ],
         cooker18b: [
            '<32>{#p/mettaton}* WOW!\n* A PHOTO FINISH!',
            "<32>* YOU'RE A LUCKY ONE, DARLING.",
            "<32>* JUST A FEW MOMENTS MORE, AND YOU'D BE TOAST!"
         ],
         cooker18c: () => [
            "<32>{#p/mettaton}* WELL, I'D LOVE TO KEEP GOING, BUT I -AM- ON A BIT OF A SCHEDULE HERE.",
            ...(iFancyYourVilliany()
               ? [
                  '<32>* JUST KNOW THIS, \"$(moniker2u)...\"',
                  '<32>* THE NEXT TIME WE MEET, TIME WILL -NOT- BE ON YOUR SIDE!'
               ]
               : ['<32>* 那麼，下回再說吧...', '<32>* 再見了各位！'])
         ],
         cooker19a: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysCutscene1}* You did it!!',
            '<25>{#g/alphysCutscene2}* ...',
            "<25>{#g/alphysUhButHeresTheDeal}* I guess I should've expected that."
         ],
         cooker19b: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysSideSad}* ...',
            '<25>{#g/alphysSmileSweat}* I guess... you did it??',
            '<25>{#p/alphys}{#g/alphysCutscene1}* Yeah!\n* You did it!!',
            '<25>{#g/alphysWelp}* ...'
         ],
         cooker19c: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysCutscene3}* ...',
            '<25>{#g/alphysNeutralSweat}* ...',
            '<25>{#g/alphysFR}* You have a death wish.'
         ],
         robocaller3: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            "<32>{#p/mettaton}* 已經到片場了啊。",
            '<32>* 那就對著鏡頭笑一個吧...'
         ],
         robocaller4: [
            "<32>* 畢竟你們上電視了，大明星！",
            "<32>* 唉，可惜了，我去不了現場。\n  不過呢...",
            "<32>* THAT -IS- HOW IT TENDS TO GO THESE DAYS, ISN'T IT?",
            '<32>* 說回正題。\n  你們又沒有噴氣背包，\n  怎麼才能飛過那片虛空呢？',
            '<32>* 哎呀，我好像也不知道呢...',
'<32>* 苦惱吧，掙扎吧。\n  剩下幾位觀眾有好戲看啦。',
            '<32>* 祝你們好運喔！'
         ],
         robocaller4x: [
            '<25>{#p/asriel2}{#f/8}* 「祝你們好運」？\n* 認真的嗎？',
            '<25>{#f/6}* 蠢貨，祝福也要挑挑人啊。',
            "<25>{#f/7}* 咱去前頭那個升降門。"
         ],
         cookerX1: [
            '<32>{#p/basic}* 你們來了啊...\n* 我就知道...',
            '<32>* 這個升降門是用來疏散民眾的。',
            "<32>* 不過現在大夥都走了，\n  再有人想用的話，\n  恐怕我得攔著。",
            '<32>{|}* 所以你們能- {%}'
         ],
         cookerX2: ['<25>{#p/asriel2}{#f/6}* 滾開。'],
         cookerX3: ["<32>{#p/basic}* ...啊！\n* 看來我... 做不到..."],
         cookerX4: [
            '<32>{#p/basic}* 我-我是說...\n* 通融一下也沒什麼...',
            "<32>* 別... 別讓我老闆知道就好..."
         ],
         cookerX5a: ['<25>{#p/asriel2}{#f/2}* 喔？\n* 你打算放我們過去了？'],
         cookerX5b: ['<25>{#f/1}* 太好了。'],
         cookerX6: ["<32>{#p/basic}* ...當-當然！\n* 我-我保證不攔你們！"],
         cookerX7: ['<25>{#p/asriel2}{#f/3}* 你是個聰明人。'],
         cookerX8: ["<25>{#p/asriel2}{#f/3}* 咱們走。"],
         cookerX9: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            "<32>{#p/mettaton}* 瞅見你倆飛過虛空了。",
            '<32>* ...',
            '<32>* 看來...',
            '<32>* 派一個低級服務員\n  去守著那臺升降門...',
            "<32>* 是我失策了。",
            '<32>* ...',
            '<32>* 唉，好吧。',
            "<32>* 反正我早晚滅了你們。"
         ],
         whatthefuck: [
            "<32>{#p/basic}* 別擔心，我不會有事的！\n* 看看這些光圈吶！\n* 老闆不會炒我魷魚的..."
         ],
         puzzleReaction2a: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/alphys}{#g/alphysSide}* You got to the checkpoint!',
            '<25>{#g/alphysWelp}* But, uh, that was only the f-first one.',
            "<25>{#g/alphysNeutralSweat}* There's still two more left to go."
         ],
         puzzleReaction2b: ['<32>{#p/event}* 鈴鈴，鈴鈴...', '<25>{#p/alphys}{#g/alphysWelp}* One left.'],
         puzzleReaction2c: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            "<25>{#p/alphys}{#g/alphysHellYeah}* Yes!!\n* That's the last one!!",
            '<25>{#g/alphysCutscene2}* Eheh...',
            '<25>{#f/10}* ...',
            "<25>{#f/3}* Don't judge me, I just like rooting for you."
         ],
         moneyPre1: () =>
            iFancyYourVilliany()
               ? [
                  '<32>{#p/mettaton}* AH, THERE YOU ARE.',
                  '<32>{#p/mettaton}* YOU\'VE DONE WELL TO PLAY ALONG THUS FAR, DEAR \"$(moniker2u).\"'
               ]
               : world.bad_robot
                  ? [
                     "<32>{#p/mettaton}* 你遲到了，親愛的...",
                     "<32>{#p/mettaton}* 要是你不再殺人，\n  那不成問題的。"
                  ]
                  : ['<32>{#p/mettaton}* SALUTATIONS, HUMAN.', "<32>* YOU'RE JUST A FEW MOMENTS EARLY FOR THE SHOW."],
         moneyPre2: () =>
            iFancyYourVilliany()
               ? ['<32>* ... STILL, DO YOU HAVE WHAT IT TAKES TO KEEP THIS UP?']
               : ['<32>* ...你介意先去到舞臺左側嗎？'],
         moneyPre3: () => [
            ...(iFancyYourVilliany()
               ? ["<32>{#p/mettaton}* 呃，現在我得先讓你\n  去到舞臺左側。"]
               : []),
            '<32>* 等我叫你之後，\n  你再回到畫面裡來。'
         ],
         moneyPre4: ['<32>{#p/basic}* 過了一會兒...'],
         moneyIntro1: [
            "<32>{#p/mettaton}* 夥計們，\n  今天我們要做點不一樣的事。",
            '<32>{#z2}* 歡迎各位來到...',
            '<32>{*}{#z0}* {#x1}特別節目：{^10}\n* {#x2}時過！{^10}\n* {#x3}金遷！{^30}{%}'
         ],
         moneyIntro2: ["<32>{#p/mettaton}{#z1}* 讓我們熱烈歡迎選手們..."],
         moneyIntro3a: () =>
            iRespeccYourVilliany()
               ? ['<32>{#p/mettaton}{#z0}* 衛隊隊長，UNDYNE！']
               : ['<32>{#p/mettaton}{#z0}* 骷髏SANS！'],
         moneyIntro3b: () =>
            iRespeccYourVilliany()
               ? ['<25>{#p/undyne}{#f/1}* 沒錯！']
               : world.dead_skeleton
                  ? [
                     '<25>{#p/sans}{#g/sansWink}* 這大概是我今天\n  唯一的好事了。',
                     '<25>* 如果這能\n  稱之為好事的話。'
                  ]
                  : ['<25>{#p/sans}{#g/sansWink}* loving the pre-recorded applause you got there.'],
         moneyIntro4a: ['<32>{#p/mettaton}* NAPSTABLOOK！'],
         moneyIntro4b: () =>
            iRespeccYourVilliany()
               ? ["<32>{#p/napstablook}* you don't always have to use the same applause..."]
               : alphysPhoneDisplay() && SAVE.data.n.state_foundry_undyne === 1
                  ? ['<32>{#p/napstablook}* 大家好']
                  : ['<32>{#p/napstablook}* 大家好...'],
         moneyIntro5a: () =>
            iFancyYourVilliany() ? ['<32>{#p/mettaton}* $(moniker1u)！'] : ['<32>{#p/mettaton}* 神秘的人類！'],
         moneyIntro6a: ['<32>{#p/mettaton}* 以及... 隨便找的小孩！'],
         moneyIntro6b: () =>
            SAVE.data.b.f_state_kidd_betray ? ['<25>{#p/kidd}{#f/3}* 大家好。'] : ['<25>{#p/kidd}{#f/1}* 喲！'],
         moneyIntro7: [
            '<32>{#p/mettaton}{#z0}* 非常感謝各位的到來！',
            "<32>{#z2}* 首先，先聊一點關於\n  你們自己的事，如何？"
         ],
         moneyIntro8: [
            '<32>{#p/mettaton}{#z0}* ...',
            '<32>{#z1}* ...',
            "<32>* 那位選手好像不來了。",
            '<32>* ...',
            '<32>* 這就有點麻煩了。',
            '<32>* ...',
            '<32>{#z2}* 有人想代替那位嗎？',
            '<32>* 有人嗎？'
         ],
         moneyIntro9: ['<32>{#p/tem}* 你吼！！\n* 我素temmie！！！'],
         moneyIntro10: [
            '<32>{#p/mettaton}{#z5}* 意料之外的嘉賓！？！？\n* 哇，這個節目越來越瘋狂了！',
            '<32>{#p/mettaton}{#z2}* 這嘉賓好像背對著舞臺...\n* 算了。'
         ],
         moneyIntro11: ['<32>{#p/mettaton}{#z1}* 新面孔除外...'],
         moneyChat1: () =>
            iRespeccYourVilliany()
               ? [
                  '<25>{#p/undyne}{#f/17}* Huh?\n* You want ME to talk?',
                  "<25>{#p/undyne}{#f/1}* Well, to be honest, I think you're an annoying piece of junk.",
                  '<25>{#p/undyne}{#f/7}* Not only that, but you treat your employees like garbage!',
                  "<25>{#p/undyne}{#f/12}* But, uh, that's not why I took Papyrus's place.",
                  '<25>{#p/undyne}{#f/16}* Actually, I only really came for one reason.'
               ]
               : world.dead_skeleton
                  ? ['<25>{#p/sans}{#g/sansNormal}* 你好啊。']
                  : [
                     '<25>{#p/sans}{#g/sansLaugh2}* oh, heheh...',
                     "<25>{#g/sansNormal}* i'm sans.\n* sans the skeleton.",
                     '<25>{#g/sansLaugh1}* technically, my job is to capture humans like that one over there.',
                     "<25>{#g/sansBlink}* but, uh...\n* seeing as we're on a television program...",
                     "<25>{#g/sansWink}* i s'pose that'll have to wait for now."
                  ],
         moneyChat1a: () =>
            iRespeccYourVilliany()
               ? ["<32>{#p/mettaton}* AND WHAT'S THAT?"]
               : world.dead_skeleton
                  ? ['<32>{#p/mettaton}* 還有嗎？']
                  : ['<32>{#p/mettaton}* GOT ANY OF YOUR LAME JOKES FOR US TODAY?'],
         moneyChat1b: () =>
            iRespeccYourVilliany()
               ? ['<25>{#p/undyne}{#f/8}* To see $(moniker1), of course!\n* Fuhuhu!']
               : world.dead_skeleton
                  ? ['<25>{#p/sans}{#g/sansNormal}* 沒有。']
                  : [
                     "<25>{#p/sans}{#g/sansLaugh1}* 蹩腳？\n* 哇塞，mettaton，你還有臉\n  對我說教？",
                     "<25>{#g/sansBlink}* 不要再如玩遊戲般亂鬧。\n* 你的所有電視節目主持都是\n  一個樣貌。",
                     "<25>{#g/sansNormal}* 但是，呃，如果我們現在\n  是在開玩笑...\n* 那就未免有點枯燥。",
                     '<25>{#g/sansLaugh1}* speaking of, i heard you tried to host a comedy show...',
                     '<25>{|}{#g/sansLaugh2}* but nobody- {%}'
                  ],
         moneyChat1c: () =>
            iRespeccYourVilliany()
               ? ['<32>{#p/mettaton}* RIGHT.']
               : world.dead_skeleton
                  ? ["<32>{#p/mettaton}* 有人今天不舒服，是嗎？"]
                  : ['<32>{#p/mettaton}* VERY FUNNY.'],
         moneyChat2: ['<32>{#p/napstablook}* 輪到... 我講了嗎...'],
         moneyChat2a: () =>
            iRespeccYourVilliany()
               ? ["<25>{#p/undyne}{#f/14}* It's certainly not mine anymore, is it?"]
               : world.dead_skeleton
                  ? ['<25>{#p/sans}{#g/sansBlink}* ...']
                  : ["<25>{#p/sans}{#g/sansBlink}* go on, don't be afraid."],
         moneyChat2b: () => [
            iRespeccYourVilliany()
               ? '<32>{#p/napstablook}* 喔...\n* 嗨......'
               : world.dead_skeleton
                  ? "<32>{#p/napstablook}* 看來，是的........."
                  : '<32>{#p/napstablook}* 嗯.........\n* 大家好............',
            ...(world.scared_ghost
               ? ["<32>* ............我叫napstablook。"]
               : [
                  "<32>* 呃... 我叫napstablook",
                  '<32>* 我很喜歡做音樂，我...',
                  '<32>* 我...',
                  '<32>* 呃... 我...'
               ])
         ],
         moneyChat2c: () =>
            world.scared_ghost ? ['<32>{#p/mettaton}{#z1}* AND...?'] : ['<32>{#p/mettaton}{#z1}* ...你想說什麼？'],
         moneyChat2d: () =>
            world.scared_ghost
               ? ["<32>{#p/napstablook}* um...... can't we just go to the next person"]
               : ["<32>{#p/napstablook}* 我...\n* 我介紹完了", '<32>* 抱歉...............'],
         moneyChat2e: () =>
            world.scared_ghost
               ? ['<32>{#p/mettaton}{#z0}* ... OKAY...']
               : [
                  "<32>{#p/mettaton}{#z0}* 沒關係，BLOOKY...",
                  "<32>* 我們都有緊張的時候，\n  不是嗎，表-",
                  '<32>{#z2}* 呃... 寶貴！\n* 因為這次機會確實很難得！',
                  '<32>{#z4}* 哈哈哈...'
               ],
         moneyChat3: () =>
            world.scared_ghost
               ? ["<32>{#p/napstablook}* it's your turn.", "<32>{#p/human}* (但你沒什麼可說的。)"]
               : [
                  '<32>{#p/napstablook}* 呃......',
                  '<32>* 你可以開始講了？',
                  "<32>{#p/human}* (但你沒什麼可說的。)"
               ],
         moneyChat3a: () =>
            iFancyYourVilliany()
               ? [
                  '<33>{#p/mettaton}* WELL, YOU KNOW WHAT THEY SAY...',
                  '<32>{#p/mettaton}* THE BIGGER THE TALK, THE SMALLER THE ACTION!',
                  "<32>{#p/mettaton}* IT'S NO SURPRISE THIS BULLY OF BULLIES WOULD BE SO RELUCTANT TO PART WITH THEIR WORDS."
               ]
               : ['<32>{#p/mettaton}* 「神秘的人類」，\n  果然名副其實。'],
         moneyChat4: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? SAVE.data.b.colleg
                  ? ['<32>{#p/tem}* tem... 去了大鞋，']
                  : ['<32>{#p/tem}* tem... 上了電視！！']
               : [
                  '<25>{#p/kidd}{#f/1}* Haha, I guess so.',
                  ...(SAVE.data.b.f_state_kidd_betray
                     ? [
                        "<25>{#f/1}* OH!\n* It's my turn, I think.",
                        "<25>{#f/4}* Today's... not really been the greatest...",
                        '<25>{#f/8}* Haha...',
                        "<25>{#f/5}* ... well, I'm Monster Kid."
                     ]
                     : [
                        "<25>{#f/1}* OH!\n* It's my turn, right??",
                        "<25>{#f/4}* I'm... not really sure if my parents are watching, but...",
                        "<25>{#f/1}* I hope they're not!!\n* I... don't think they'd like me being here.",
                        '<25>{#f/1}* Haha.',
                        "<25>{#f/2}* Anyway, I'm Monster Kid."
                     ])
               ],
         moneyChat4a: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? ['<32>{#p/mettaton}* 然後呢...?']
               : ["<32>{#p/mettaton}* WAIT, THAT'S YOUR ACTUAL NAME?"],
         moneyChat4b: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? SAVE.data.b.colleg
                  ? ['<32>{#p/tem}* tem知道了所有的價格！！']
                  : ['<32>{#p/tem}* tem... 喜歡上電視！！']
               : SAVE.data.b.f_state_kidd_betray
                  ? ['<25>{#p/kidd}{#f/4}* ...']
                  : ["<25>{#p/kidd}{#f/1}* Why wouldn't it be?"],
         moneyChat4c1: ['<32>{#p/mettaton}* 呃...'],
         moneyChat5: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? ['<32>{#p/mettaton}* 好了，\n  我們的介紹環節\n  算是結束了。']
               : ['<32>{#p/mettaton}* HEH. I THINK THAT WRAPS UP OUR INTRODUCTIONS QUITE NICELY.'],
         moneyTr1: [
            '<32>* 是這樣，\n  這個遊戲是關於價格的。',
            "<32>* 我們今天準備了三件\n  稀有的地球文物。",
            "<32>* 將由你們幾位選手來競猜\n  這些東西的準確價格！",
            '<32>* 猜得最接近【且不超過】的人\n  就能把它帶回家！'
         ],
         moneyTr2: ["<32>{*}* 我宣布..."],
         moneyTr3: ['<32>{*}* {#x1}時過！{^10}\n* {#x2}金遷！{^10}\n* {#x3}正式開始！{^30}{%}'],
         moneyHelper: '* 按←和→調整價格，\n  然後按[Z]確認。§fill=#ff0§$(x)G',
         moneyHelperConfirmed: '* 按←和→調整價格，\n  然後按[Z]確認。§fill=#f00§$(x)G',
         moneyItem1: {
            a: [
               '<32>{#p/mettaton}* 我們的第一件物品\n  是我最近找到的...',
               '<32>* 在地球上，這個裝置是用來接收\n  所謂「無線電臺」的\n  播送內容的。',
               "<32>* 包括新聞，天氣，音樂...\n* 甚至是你現在正參加的\n  遊戲節目！",
               "<32>* 我們來看看場上有沒有人\n  了解這種裝置。"
            ],
            b: [
               "<32>{#p/mettaton}* 那麼，大家都決定好了？",
               '<32>* 好極了！',
               "<32>* 現在，讓我們揭曉一下價格..."
            ],
            c: ['<32>{#p/mettaton}* 80G！'],
            d: () =>
               SAVE.data.n.state_foundry_muffet === 1 && SAVE.data.b.colleg
                  ? [
                     "<32>{#p/mettaton}* 恭喜你，TEMMIE。\n* 你贏得了屬於你自己的\n  老式地球收音機！",
                     '<32>{#p/tem}* 嗚哇喔哇喔哇喔.....'
                  ]
                  : [
                     "<32>{#p/mettaton}* 恭喜你，BLOOKY。\n* 你贏得了屬於你自己的\n  老式地球收音機！",
                     world.scared_ghost ? '<32>{#p/napstablook}* 酷' : '<32>{#p/napstablook}* 唔唔唔唔唔唔唔'
                  ],
            e: () =>
               iFancyYourVilliany()
                  ? ["<32>{#p/mettaton}* 好樣的，$(moniker3u)。\n* 你贏得了屬於你自己的\n  老式地球收音機！"]
                  : ["<32>{#p/mettaton}* 恭喜你，人類。\n* 你贏得了屬於你自己的\n  老式地球收音機！"],
            f: () =>
               SAVE.data.n.state_foundry_muffet === 1 && SAVE.data.b.colleg
                  ? [
                     iFancyYourVilliany()
                        ? '<32>{#p/mettaton}* TEMMIE，\n  由於你比$(moniker3u)先一步作答...'
                        : '<32>{#p/mettaton}* TEMMIE，\n  由於你比人類先一步作答...',
                     "<32>{#p/mettaton}* 恭喜！\n* 你贏得了屬於你自己的\n  老式地球收音機！",
                     '<32>{#p/tem}* 嗚哇喔哇喔哇喔.....'
                  ]
                  : [
                     iFancyYourVilliany()
                        ? '<32>{#p/mettaton}* BLOOKY，\n  由於你比$(moniker3u)先一步作答...'
                        : '<32>{#p/mettaton}* BLOOKY，\n  由於你比人類先一步作答...',
                     "<32>{#p/mettaton}* 恭喜！\n* 你贏得了屬於你自己的\n  老式地球收音機！",
                     world.scared_ghost ? '<32>{#p/napstablook}* 酷' : '<32>{#p/napstablook}* 唔唔唔唔唔唔唔'
                  ],
            g: () => [
               SAVE.data.n.state_foundry_muffet === 1 && SAVE.data.b.colleg
                  ? iFancyYourVilliany()
                     ? '<32>{#p/mettaton}* 好樣的，$(moniker3u)。\n* 由於你比TEMMIE先一步作答...'
                     : '<32>{#p/mettaton}* 人類，\n  由於你比TEMMIE先一步作答...'
                  : iFancyYourVilliany()
                     ? '<32>{#p/mettaton}* 好樣的，$(moniker3u)。\n* 由於你比BLOOKY先一步作答...'
                     : '<32>{#p/mettaton}* 人類，\n  由於你比BLOOKY先一步作答...',
               "<32>{#p/mettaton}* 恭喜！\n* 你贏得了屬於你自己的\n  老式地球收音機！"
            ]
         },
         moneyVote1: () => [
            '<32>{#p/mettaton}* 好了，選手們，\n  這一輪到此結束。',
            "<32>* 由於這是第一輪，\n  你們得投票決定誰被淘汰。",
            ...(world.scared_ghost
               ? []
               : [
                  '<32>{#p/napstablook}* 嘿，呃.........\n* 我有個問題.........',
                  "<32>{#p/mettaton}* 不，BLOOKY，\n  你不能投自己。",
                  '<32>{#p/napstablook}* 噢............'
               ]),
            iRespeccYourVilliany()
               ? "<32>{#p/mettaton}* 淘汰時間到了，夥計們！\n* UNDYNE，你先來。"
               : "<32>{#p/mettaton}* 淘汰時間到了，夥計們！\n* SANS，你先來。",
            "<32>{#p/mettaton}* 你要票誰？"
         ],
         moneyVote2: () =>
            iRespeccYourVilliany()
               ? [
                  "<25>{#p/undyne}{#f/14}* 嗯... 我打算投Napstablook。",
                  "<26>{#p/undyne}{#f/16}* 不是針對他...\n* 我只是跟其他選手更熟罷了。"
               ]
               : world.dead_skeleton
                  ? ['<25>{#p/sans}* ...', "<25>{#p/sans}{#g/sansBlink}* 呃，我現在沒心情。"]
                  : ['<25>{#p/sans}* anne.'],
         moneyVote2a: () =>
            iRespeccYourVilliany()
               ? ['<32>{#p/mettaton}* BLOOKY，你想票掉誰呢？']
               : world.dead_skeleton
                  ? ["<32>{#p/mettaton}* 好吧，少了一票。", '<32>{#p/mettaton}* BLOOKY，你想票掉誰呢？']
                  : [
                     '<32>{#p/mettaton}* 嗯...',
                     '<32>* WHY \"ANNE?\"',
                     "<25>{#p/sans}{#g/sansLaugh1}* 'cause this ANNE droid is driving me crazy.",
                     "<32>{#p/mettaton}* 你被取消比賽資格了！",
                     '<25>{#p/sans}{#g/sansLaugh2}* 呵呵，值了。',
                     '<32>{#p/mettaton}* 呃... BLOOKY，你想票掉誰呢？'
                  ],
         moneyVote3a: () =>
            iRespeccYourVilliany()
               ? [
                  '<32>{#p/napstablook}* ...............',
                  "<32>* 我... \n  並不想給他們中的\n  任何一人投票...",
                  "<32>* undyne是皇家衛隊隊長，\n  而另外兩個...",
                  "<32>* 他們只是小孩子......"
               ]
               : [
                  '<32>{#p/napstablook}* ...............',
                  '<32>* 呃... sans，我...',
                  "<32>* 我不是針對你，我只是... \n  不大了解你... \n  抱歉......",
                  ...(world.dead_skeleton
                     ? ['<25>{#p/sans}{#g/sansNormal}* ...', "<25>{#p/sans}{#g/sansBlink}* 沒事的。"]
                     : [
                        "<25>{#p/sans}{#g/sansBlink}* nah, that's okay.\n* besides, i'm only here 'cause my bro declined.",
                        '<25>{#g/sansWink}* he gets nervous around you, mettaton.'
                     ])
               ],
         moneyVote3b: () =>
            iRespeccYourVilliany()
               ? ["<32>{#p/mettaton}* WELL, ALRIGHT.\n* I WON'T COUNT YOUR VOTE, THEN."]
               : world.dead_skeleton
                  ? []
                  : ["<32>{#p/mettaton}* HMM...\n* I'LL HAVE TO ASK HIM ABOUT THAT LATER.", '<32>* I WONDER...'],
         moneyVote3x: () =>
            world.scared_ghost
               ? ['<32>{#p/napstablook}* 人類。']
               : [
                  '<32>{#p/napstablook}* ...............',
                  '<32>* 人類吧',
                  "<32>* 那人...\n  對我不是特別好......"
               ],
         moneyVote3y: ['<32>{#p/mettaton}* ...'],
         moneyVote4p: () => [
            iFancyYourVilliany()
               ? '<32>{#p/mettaton}* 你要給誰投票嗎，親愛的$(moniker2u)？'
               : '<32>{#p/mettaton}* 你要給誰投票嗎，人類？',
            choicer.create('* （你要怎麼回答？）', '是', '否')
         ],
         moneyVote4: () => [
            '<32>{#p/mettaton}* 不，我該問你要\n  給【誰】投票？',
            choicer.create(
               '* (你要給誰投票？)',
               iRespeccYourVilliany() ? 'Undyne' : 'Sans',
               'Napstablook',
               SAVE.data.n.state_foundry_muffet === 1 ? 'Temmie' : '怪物小孩',
               '$(name)'
            )
         ],
         moneyVote4a1: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? ['<32>{#p/mettaton}* 嗯，嗯...', '<32>{#p/mettaton}* 那TEMMIE，你呢？']
               : ['<32>{#p/mettaton}* 嗯，嗯...', '<32>{#p/mettaton}* 那怪物小孩，你呢？'],
         moneyVote4a2: ["<32>{#p/mettaton}* 看來你是【不打算】\n  給誰投票了。", '<32>* 好的。'],
         moneyVote4a3: () => [
            "<32>{#p/mettaton}* REALLY? JUST BECAUSE THEY'RE STUCK WITH YOU DOESN'T MAKE THEM A CONTESTANT.",
            '<33>* CONSIDER YOURSELF DISQUALIFIED!',
            ...(SAVE.data.b.oops
               ? []
               : [
                  '<32>{#p/basic}* Gee, thanks Mettaton.',
                  "<32>{#p/mettaton}* LISTEN, DARLING.\n* IT'S KIND OF HARD TO INCLUDE YOU WHEN YOU'RE INVISIBLE.",
                  '<32>{#p/basic}* Hmph.'
               ])
         ],
         moneyVote4a4: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? ['<32>{#p/mettaton}* ...TEMMIE，你呢？']
               : ['<32>{#p/mettaton}* ...怪物小孩，你呢？'],
         moneyVote5a: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? ['<32>{#p/tem}* tem投... 闊愛幽靈！', '<32>* tem住的離闊愛幽靈近... \n  喜歡闊愛幽靈！']
               : [
                  iFancyYourVilliany()
                     ? "<25>{#p/kidd}{#f/1}* I'm voting for $(moniker1) because they're AWESOME!"
                     : "<25>{#p/kidd}{#f/1}* I'm voting for the human because they're AWESOME!",
                  '<25>{#f/7}* Not only did they face off against UNDYNE...',
                  "<25>* ... who's one of the strongest monsters EVER...",
                  '<25>* But when I was about to DIE...',
                  '<25>* ... they pulled me down at the LAST second and saved me!',
                  '<25>{#f/2}* IN FRONT OF UNDYNE!!!',
                  ...(iRespeccYourVilliany()
                     ? [
                        "<25>{#p/undyne}{#f/14}* Uh, kid, I'm right here, you know.",
                        '<25>{#p/kidd}{#f/3}* Oh, right.\n* Uh, s-sorry Undyne!\n* Haha.',
                        "<25>{#p/undyne}{#f/1}* Nah, don't worry.\n* You're a good kid...",
                        '<25>{#p/kidd}{#f/3}* Aw... thanks, Undyne.\n* But $(moniker1) is WAY cooler than me.'
                     ]
                     : ['<25>{#f/3}* I... kind of owe them my life, haha...'])
               ],
         moneyVote5b: ['<32>{#p/mettaton}* 你確定嗎？\n  你不知道這個投票環節\n  是要投掉你想淘汰的人嗎？'],
         moneyVote5c: () =>
            SAVE.data.n.state_foundry_muffet === 1
               ? [
                  '<32>{#p/tem}* 等等...',
                  '<32>{#p/tem}* ... nu!!!\n* tem dont wana elimnat cyoot ghost!',
                  '<32>{#p/tem}* tem vote for skely instead!'
               ]
               : iRespeccYourVilliany()
                  ? [
                     '<25>{#p/kidd}{#f/4}* ... it is?',
                     '<25>{#p/undyne}{#f/3}* I was about to say the same thing.',
                     "<25>{#p/kidd}{#f/1}* Oh... then I won't vote for them, because OBVIOUSLY, and...",
                     "<25>{#f/2}* Voting for Undyne... I just can't do it!",
                     "<25>{#f/3}* So... I guess it'll be Napstablook.\n* Please don't be sad..."
                  ]
                  : [
                     '<25>{#p/kidd}{#f/4}* ... it is?',
                     "<25>{#f/1}* Hmm... then I won't vote for them, because OBVIOUSLY, and...",
                     '<25>{#f/4}* Voting for Napstablook might hurt their feelings...',
                     "<25>{#f/3}* So... I guess it'll be Sans."
                  ],
         moneyVote5x: ['<32>{#p/kidd}{#f/8}* ...', '<32>{#f/8}* The human.'],
         moneyVote5x1: ["<32>{#p/mettaton}* SHEESH, SOMEBODY'S NOT HAPPY TODAY."],
         moneyVote5x2a: ['<32>{#p/mettaton}* BUT EVEN WITH THAT VOTE, SANS STILL HAS THE LOSING EDGE.'],
         moneyPun1: () =>
            world.dead_skeleton
               ? ['<25>{#p/sans}* ...', '<25>{#p/sans}{#f/3}* 我還是自己走吧。']
               : ['<25>{#p/sans}* 好吧。', "<25>{#p/sans}{#g/sansWink}* i'm {@fill=#ff0}boned{@fill=#fff}."],
         moneyPun1a: () =>
            iRespeccYourVilliany()
               ? ["<32>{#p/napstablook}* 沒關係的....................."]
               : world.dead_skeleton
                  ? ['<32>{#p/mettaton}* 嗯，你確實該走。']
                  : ['<32>{#p/mettaton}* 嗯，你確實是。'],
         moneyPun1b: ["<32>{#p/mettaton}* 哇，你對自己煩人的程度\n  還蠻有自知之明。"],
         moneyVote5x2b: ['<32>{#p/human}* （你感到罪惡爬上了\n  你的脊梁。）'],
         moneyVote6a: () =>
            iRespeccYourVilliany()
               ? ["<32>{#p/mettaton}* 很遺憾，BLOOKY。\n* 但時間差不多了。\n* 再見。"]
               : ["<32>{#p/mettaton}* 很遺憾，SANS。\n* 但時間差不多了。\n* 再見。"],
         moneyVote6b: () => (iRespeccYourVilliany() ? [] : ['<25>{#p/sans}* 拜了個拜啊，大夥。']),
         moneyVote7: [
            '<32>{#p/mettaton}* 好吧，看起來比分打平了！',
            '<32>* 在平局的情況下，\n  就由主持人選擇誰會離開。',
            '<32>* ...不對。',
            "<32>* 我就是主持人！"
         ],
         moneyVote8: ["<32>{#p/mettaton}* 很遺憾，人類。\n* 但時間差不多了。\n* 再見。"],
         moneyItem2: {
            a: [
               '<32>{#p/mettaton}* 我們的下一件物品，\n  就像已故的教授所說的一樣，\n  是個很有技術性的東西。',
               '<32>* 或者說...\n* 很有煙火星？',
               '<32>* 這些叫「煙花」的東西，\n  在地球上是用來把天空\n  變得令人眼花繚亂的。',
               '<32>* 煙花的花樣很多，\n  綻放出妙不可言的美景。',
               "<32>* 你們認為這東西值多少錢呢？"
            ],
            b: ['<32>{#p/mettaton}* 都猜好了嗎...？', "<32>* 很好。\n* 接下來，我們來瞧瞧\n  真正的價格..."],
            c: ['<32>{#p/mettaton}* 哇，250G！', "<32>{#p/mettaton}* 這誰能想到！？"],
            d: () =>
               SAVE.data.n.state_foundry_muffet === 1
                  ? [
                     "<32>{#p/mettaton}* 恭喜你，TEMMIE！\n* 你贏得了MTT官方\n  認證的煙花！",
                     "<32>* 雖然不是MTT牌，\n  但也僅次於它了！(TM)",
                     '<32>{#p/tem}* 啊呀呀！'
                  ]
                  : [
                     "<32>{#p/mettaton}* 恭喜你，怪物小孩！\n* 你贏得了MTT官方\n  認證的煙花！",
                     "<32>* 雖然不是MTT牌，\n  但也僅次於它了！(TM)",
                     '<25>{#p/kidd}{#f/1}* 喲-！！！'
                  ],
            e: () => [
               iFancyYourVilliany()
                  ? "<32>{#p/mettaton}* 好樣的，$(moniker3u)。\n* 你贏得了MTT官方\n  認證的煙花。"
                  : "<32>{#p/mettaton}* 恭喜你，人類！\n* 你贏得了MTT官方\n  認證的煙花！",
               "<32>* 雖然不是MTT牌，\n  但也僅次於它了！(TM)"
            ],
            f: () => [
               iFancyYourVilliany()
                  ? '<32>{#p/mettaton}* 由於你比$(moniker3u)先一步作答...'
                  : '<32>{#p/mettaton}* 由於你比人類先一步作答...',
               ...(SAVE.data.n.state_foundry_muffet === 1
                  ? [
                     "<32>{#p/mettaton}* 恭喜你，TEMMIE！\n* 你贏得了MTT官方\n  認證的煙花！",
                     "<32>* 雖然不是MTT牌，\n  但也僅次於它了！(TM)",
                     '<32>{#p/tem}* 啊呀呀！'
                  ]
                  : [
                     "<32>{#p/mettaton}* 恭喜你，怪物小孩！\n* 你贏得了MTT官方\n  認證的煙花！",
                     "<32>* 雖然不是MTT牌，\n  但也僅次於它了！(TM)",
                     '<25>{#p/kidd}{#f/1}* 喲-！！！'
                  ])
            ],
            g: () => [
               SAVE.data.n.state_foundry_muffet === 1
                  ? '<32>{#p/mettaton}* 由於你比TEMMIE先一步作答...'
                  : '<32>{#p/mettaton}* 由於你比怪物小孩先一步作答...',
               iFancyYourVilliany()
                  ? "<32>* 好樣的，$(moniker3u)。\n* 你贏得了MTT官方\n  認證的煙花。"
                  : "<32>{#p/mettaton}* 恭喜你，人類！\n* 你贏得了MTT官方\n  認證的煙花！",
               "<32>* 雖然不是MTT牌，\n  但也僅次於它了！(TM)"
            ]
         },
         moneyFinal0a: () => [
            '<32>{#p/mettaton}* 現在，由於這已經是第二輪...',
            "<32>* 我們就不投票了。",
            "<32>* 取而代之的是，\n  我想淘汰誰就淘汰誰！\n* 我的節目，我來做主...",
            ...(iRespeccYourVilliany()
               ? ["<32>* 很遺憾，UNDYNE。\n* 但時間差不多了。\n* 再見。"]
               : SAVE.data.n.state_foundry_muffet === 1
                  ? ["<32>* 很遺憾，TEMMIE。\n* 但時間差不多了。\n* 再見。"]
                  : ["<32>* 很遺憾，怪物小孩。\n* 但時間差不多了。\n* 再見。"])
         ],
         moneyFinal0b: () =>
            iRespeccYourVilliany()
               ? ['<25>{#p/undyne}{#f/14}* ...你認真的？']
               : SAVE.data.n.state_foundry_muffet === 1
                  ? SAVE.data.b.colleg
                     ? [
                        '<32>{#p/tem}* 你趕走我只因為\n  你知道我會贏。',
                        '<32>* 但也行！！',
                        '<32>* 記得來光顧TEM商店！！'
                     ]
                     : ['<32>{#p/tem}* nu...', '<32>* tem will be OKs tho...', '<32>* 記得來光顧TEM商店！！']
                  : SAVE.data.b.f_state_kidd_betray
                     ? ['<25>{#p/kidd}{#f/3}* See ya later, dudes...']
                     : [
                        '<25>{#p/kidd}{#f/3}* Aw man...',
                        '<25>{#f/1}* Well, thanks for letting me be on the show, Metatron.',
                        '<25>{#f/1}* My friends are gonna be so stoked when I tell them about this!!!'
                     ],
         moneyFinal0c: ['<32>{#p/mettaton}* SERIOUSLY.\n* NOW GET OFF THE STAGE.'],
         moneyFinal0d: [
            '<25>{#p/undyne}{#f/8}* PFFT!\n* HOW STUPID IS THAT!',
            '<25>{#f/1}* You know, that human might be mean, but at least they play fair.',
            '<25>{#f/5}* As for YOU?',
            '<25>{#f/7}* You just make up the rules as you go along!',
            "<25>{#f/9}* ... guess I shouldn't have expected anything else, though.",
            "<25>{#f/11}* You've got a reputation for this sort of thing."
         ],
         moneyFinal1: () => [
            iRespeccYourVilliany()
               ? '<32>{#p/mettaton}* GOOD RIDDANCE.'
               : SAVE.data.n.state_foundry_muffet === 1
                  ? SAVE.data.b.colleg
                     ? "<32>{#p/mettaton}* ... JEEZ, AT LEAST SHE'S GONE."
                     : "<32>{#p/mettaton}* AT LEAST SHE'S... HAPPY?"
                  : SAVE.data.b.f_state_kidd_betray
                     ? "<32>{#p/mettaton}* AT LEAST THEY'RE... HAPPY?\n* I CAN'T REALLY SAY FOR SURE, TO BE HONEST..."
                     : '<32>{#p/mettaton}* AT LEAST THEY\'RE HAPPY.\n* AND FOR THE RECORD, IT\'S \"METTATON,\" NOT \"METATRON.\"',
            "<32>* 哎呀... 現在只剩下兩位選手了，\n  是時候開始最後一輪了。",
            "<32>* 這一輪所展示的物品\n  將會是與眾不同的。",
            '<32>* 女士們，先生們...\n* 睜大你們的雙眼...',
            '<32>{#z3}* ...瞧瞧這個精妙絕倫的\n  等身喵喵玩偶！'
         ],
         moneyFinal2: () =>
            iRespeccYourVilliany()
               ? ['<32>{#p/kidd}{#f/14}* 哇喔...']
               : world.scared_ghost
                  ? ['<32>{#p/napstablook}* .........']
                  : ['<32>{#p/napstablook}* 我的天............'],
         moneyFinal3: ['<32>{#p/mettaton}* 哈哈哈，心動了吧？', '<32>{#p/mettaton}{#z2}* 它被發現於...'],
         moneyFinal4: () => [
            ...(SAVE.data.n.state_foundry_undyne === 1
               ? [
                  '<32>{#p/event}* 鈴鈴，鈴鈴...',
                  "<25>{#p/alphys}{#g/alphysOhGodNo}{#z0}* M-mettaton, come on!\n* I've had enough of a bad day as it is!",
                  '<32>{#p/mettaton}* ...',
                  "<32>* WELL, THAT'S A SHAME, THEN!\n* BECAUSE, YOU SEE..."
               ]
               : [
                  '<32>{#p/event}* 鈴鈴，鈴鈴...',
                  "<25>{#p/alphys}{#g/alphysOhGodNo}{#z0}* H-hey! You can't give that away, that's... I own that!",
                  '<32>{#p/mettaton}* OH, DO YOU NOW?',
                  "<32>* I APOLOGIZE.\n* I WASN'T AWARE.\n* BUT...",
                  '<25>{#p/alphys}{#g/alphysWTF2}* BUT???',
                  "<32>{#p/mettaton}* I'M AFRAID IT'S TOO LATE, DR. ALPHYS..."
               ]),
            '<32>{#z3}* THE CONTESTANTS HAVE ALREADY GOTTEN THEIR HOPES UP.',
            '<25>{#p/alphys}{#g/alphysWTF}{#z0}* Are you serious?',
            '<25>{|}{#p/alphys}{#g/alphysCutscene3}* I spent months looking for- {%}'
         ],
         moneyFinal5: [
            '<32>{#p/mettaton}* OH NO.\n* THE CONNECTION SEEMS TO HAVE BEEN TERMINATED.',
            '<32>* POOR DR. ALPHYS.\n* NO MEW MEW DOLL FOR HER.',
            '<32>{#z2}* INSTEAD, ONE OF YOU WILL GET TO KEEP IT!',
            '<32>{#z3}* BUT WHO?'
         ],
         moneyFinal6: [
            '<32>{#p/mettaton}* 哈哈哈，心動了吧？',
            '<32>{#p/mettaton}{#z2}* 它被發現一個遨遊在星際之間的\n  廢棄貨櫃裡。',
            '<32>* 在發現它的蹤跡後，\n  搜尋團隊花了幾個月來尋找它...',
            '<32>* 它的空前絕後...\n* 嗯...',
            '<32>* 不言自明。',
            '<32>{#z3}* 我親愛的觀眾朋友們，\n  究竟誰會得到它呢？'
         ],
         moneyItem3: {
            a: [
               "<32>{#z0}* 既然這是最後一輪，\n  就不限時了。",
               "<32>{#z0}* 讓我們再猜最後一次！"
            ],
            b: [
               '<32>{#p/mettaton}* 終於到了這一刻...',
               '<32>{#p/mettaton}{#z3}* 誰會贏得大獎呢？',
               '<32>{#p/mettaton}{#z0}* 價，\n* 格，\n* 是...'
            ],
            c: ['<32>{#p/mettaton}{#z5}* ...999G！！！'],
            d: () =>
               iRespeccYourVilliany()
                  ? [
                     '<32>{#p/mettaton}{#z0}* 怪物小孩！',
                     '<32>* 我很榮幸\n  將這份禮物贈予你。',
                     '<25>{#p/kidd}{#f/4}* 哈... 啊?',
                     '<25>{#f/7}* ...',
                     '<25>{#f/14}* 喲噢噢噢噢!!!!'
                  ]
                  : ['<32>{#p/mettaton}{#z0}* BLOOKY！', '<32>* 我很榮幸\n  將這份禮物贈予你。'],
            e: () =>
               iFancyYourVilliany()
                  ? [
                     '<32>{#p/mettaton}{#z0}* 好樣的，$(moniker3u)。',
                     '<32>{#p/mettaton}* 我很榮幸\n  將這份禮物贈予你。'
                  ]
                  : ['<32>{#p/mettaton}{#z0}* 人類！', '<32>* 我很榮幸\n  將這份禮物贈予你。'],
            f: () =>
               iRespeccYourVilliany()
                  ? [
                     '<32>{#p/mettaton}{#z0}* 怪物小孩！',
                     "<32>* 你和$(moniker3u)猜的答案一樣，\n  但你率先作答。",
                     '<32>* 因此，我很榮幸\n  將這份禮物贈予你。',
                     '<25>{#p/kidd}{#f/4}* 哈... 啊?',
                     '<25>{#f/7}* ...',
                     '<25>{#f/14}* 喲噢噢噢噢!!!!'
                  ]
                  : [
                     '<32>{#p/mettaton}{#z0}* BLOOKY！',
                     iFancyYourVilliany()
                        ? "<32>* 你和$(moniker3u)猜的答案一樣，\n  但你率先作答。"
                        : "<32>* 你和人類猜的答案一樣，\n  但你率先作答。",
                     '<32>* 因此，我很榮幸\n  將這份禮物贈予你。'
                  ],
            g: () =>
               iRespeccYourVilliany()
                  ? [
                     '<32>{#p/mettaton}{#z0}* 好樣的，$(moniker3u)。',
                     "<32>* 你和怪物小孩猜的答案一樣，\n  但你率先作答。",
                     '<32>* 因此，我很榮幸\n  將這份禮物贈予你。'
                  ]
                  : [
                     iFancyYourVilliany()
                        ? '<32>{#p/mettaton}{#z0}* 好樣的，$(moniker3u)。'
                        : '<32>{#p/mettaton}{#z0}* 人類！',
                     "<32>* 你和BLOOKY猜的答案一樣，\n  但你率先作答。",
                     '<32>* 因此，我很榮幸\n  將這份禮物贈予你。'
                  ]
         },
         moneyTrash1: ['<32>* 等等，BLOOK，你這是上哪...', '<32>* ...去...', '<32>{#z1}* ...'],
         moneyTrash2: ["<32>{#z0}* I GUESS THEY DIDN'T WANT TO BE HERE ANY LONGER."],
         moneyItemPut1: ['<32>{#p/human}* （你獲得了一臺老式收音機。）'],
         moneyItemPut2: ['<33>{#p/human}* （你獲得了一箱煙花。）'],
         moneyItemPut3: ['<32>{#p/human}* （你獲得了喵喵玩偶。）'],
         moneyItemPut4: [
            "<32>{#p/human}* （你帶的東西太多了。）",
            '<32>{#p/mettaton}* 東西裝不下了，嗯？',
            '<32>{#p/mettaton}* 好吧，別擔心。\n* 你可以到休閒迴廊\n  領取你的獎品。'
         ],
         moneyOutro1: [
            "<32>{#p/mettaton}* 親愛的觀眾朋友們，\n  如果你也想在這樣的\n  電視直播節目中贏取獎品...",
            "<32>* 請不要猶豫，\n  直接在域外網聯繫我！",
            "<32>* 不然，就沒有下一期了節目了...",
            '<32>* 敬請期待下期節目，\n  《舞動命運》！',
            '<32>{#z3}* 當然，還請各位保持完美！'
         ],
         moneyWhisper1: () => [
            '<32>{#p/napstablook}* (psst... hey...)',
            '<32>* (i, um...)',
            ...(SAVE.data.b.f_state_blookbetray
               ? ["<32>* (i know you... probably wish i wasn't here, but...)"]
               : SAVE.data.n.state_wastelands_napstablook === 2
                  ? ["<32>* (i know you... probably don't like me, but...)"]
                  : SAVE.data.n.state_wastelands_napstablook === 4
                     ? ["<32>* (i know we... aren't on the best of terms, but...)"]
                     : SAVE.data.n.state_foundry_blookdate > 1
                        ? ["<32>* (i hope it's not too much to ask, even if we're friends, but...)"]
                        : ["<32>* (i hope it's not too much to ask, but...)"]),
            '<32>* (i think that... after the show...)',
            '<32>* (we should return the mew mew doll to alphys)',
            ...(SAVE.data.n.state_foundry_undyne === 1
               ? [
                  "<32>* (she's been feeling kind of down today, and...)",
                  "<32>* (well...... it'd be nice to give it back to her, don't you think?)"
               ]
               : [
                  '<32>* (i watched mew mew space adventure with her one time...)',
                  '<32>* (she was... so happy......)'
               ]),
            choicer.create('* （你要怎麼回答？）', '是', '否')
         ],
         moneyWhisper2a: ['<32>{#p/napstablook}* (thanks...)'],
         moneyWhisper2b: ['<32>{#p/napstablook}* （..................）'],
         moneyWhisper3: ["<32>{#p/mettaton}* WHAT'S THE HOLDUP?"],
         moneyWhisper4: [
            '<32>{#p/napstablook}* (i guess... we should make a guess now...)',
            '<32>{#p/napstablook}* (heh)'
         ],
         napchat0: ['<32>{#p/human}* (You gave the Mew Mew Doll to Napstablook.)'],
         napchat1: () =>
            SAVE.data.n.state_foundry_undyne === 1
               ? ["<32>{#p/napstablook}* i'll make sure she knows what you did for her"]
               : ["<32>{#p/napstablook}* i'll get this back to her as soon as i can"],
         napchat2a: ['<32>{#p/napstablook}* until next time............'],
         napchat2b: [
            "<32>* 我... 還有點事\n  要跟你說........",
            '<32>* 在前面等我，就在那個\n  大mettaton噴泉那裡。',
            '<32>* 噴泉見............'
         ],
         truemtt3: [
            '<32>{#p/basic}* Blooky...',
            '<32>* ...',
            '<32>* I get the feeling things could turn serious here.'
         ],
         moneyX1: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/mettaton}* 親吶...\n* 我沒看錯吧。',
            "<32>* 太不可思議了，這兒竟然...",
            '<32>* 有陷阱欸！',
            '<32>* 還有，我都不用多說了...'
         ],
         moneyX2a: [
            "<32>* 你們又上電視啦！",
            '<32>* 這次，你們又得如何逃生呢？',
            '<32>* 哈哈哈...'
         ],
         moneyX2b: ['<32>* 只有【時間】能給我們答案...{%200}'],
         moneyX3: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/10}* 嗯...{%100}',
                  '<25>* 控制臺就在那個平臺上...{%100}',
                  '<25>{#f/16}* ...{%100}',
                  '<25>{#f/13}* 有點難為情，不過...{%100}',
                  '<25>{#f/13}* 我跪在平臺前...{%100}',
                  '<25>{#f/16}* 你就可以...\n  試試踩著我上那兒，\n  關掉計時器。{%100}',
                  '<25>{#f/15}* 大概能行吧...{%100}'
               ],
               ['<25>{#p/asriel2}{#f/13}* ...{%100}', '<25>{#f/4}* $(name)，\n  知道我們要做啥吧。{%100}']
            ][Math.min(SAVE.flag.n.ga_asrielMoneyX3++, 1)],
         moneyT1: (i: number) =>
            [
               ['<25>{#p/asriel2}{#f/15}* 你... 來嗎？{%200}'],
               ["<25>{#p/asriel2}{#f/16}* ...我們沒時間胡鬧。{%200}"],
               ['<25>{#p/asriel2}{#f/15}* 別再耍性子了。{%200}'],
               []
            ][Math.min(i, 3)],
         moneyT2: (i: number) =>
            [
               ['<25>{#p/asriel2}{#f/16}* 還是說你覺得...\n  我們傻愣在這就行。{%200}'],
               ["<25>{#p/asriel2}{#f/13}* $(name)，求你了...\n* 別再耍性子了...{%200}"],
               []
            ][Math.min(i, 2)],
         moneyT3: (i: number) =>
            [
               ['<25>{#p/asriel2}{#f/13}* 還真是。{%200}'],
               ['<25>{#p/asriel2}{#f/3}* ...\n* 杵在這真是蠢爆了。{%200}'],
               []
            ][Math.min(i, 2)],
         moneyT4: (i: number) =>
            [
               [
                  "<25>{#p/asriel2}{#f/5}* 今天過得咋樣？{%200}",
                  '<25>{#p/asriel2}{#f/13}* 應該不錯？\n* ...{%200}'
               ],
               []
            ][Math.min(i, 1)],
         moneyT5: (i: number) =>
            [["<25>{#p/asriel2}{#f/4}* 杵在那愣著不無聊嗎。\n  真是驚到我了。{%200}"], []][
            Math.min(i, 1)
            ],
         moneyT6: (i: number) => [['<25>{#p/asriel2}{#f/3}* ...\n* $(name)？{%200}'], []][Math.min(i, 1)],
         moneyT7: (i: number) => [['<25>{#p/asriel2}{#f/13}* $(name)。{%200}'], []][Math.min(i, 1)],
         moneyT8: (i: number) =>
            [["<25>{#p/asriel2}{#f/7}* 有這時間杵那兒，\n  我們都離開前哨站了。{%200}"], []][Math.min(i, 1)],
         moneyT9: (i: number) =>
            [['<25>{#p/asriel2}{#f/6}* ...\n* 算我求你了。{%200}'], ['<25>{#p/asriel2}{#f/15}* 可算快結束了...']][
            Math.min(i, 1)
            ],
         moneyX4: () =>
            [['<25>{#p/asriel2}{#f/13}* 呃... 我準備好了。{%200}'], ['<25>{#p/asriel2}{#f/13}* 別磨蹭了...{%200}']][
            Math.min(SAVE.flag.n.ga_asrielMoneyX4++, 1)
            ],
         moneyX4a: ['<25>{#p/asriel2}{#f/1}* 成了。'],
         moneyX4b: ['<25>{#p/asriel2}{#f/6}* ...', '<25>{#p/asriel2}{#f/7}* 浪費這麼久，\n  就等來個這？'],
         moneyX5a: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/mettaton}* 我的傳感器沒出錯吧？', 
            "<32>* 親愛的觀眾朋友們，\n  我們得調整一下節目的評級了...",
            '<32>* 從「有點爛」降成「爛透了」！',
            "<32>* 沒幾個人會想看這種節目，\n  汙了自己的眼睛的。"
         ],
         moneyX5b: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/mettaton}* 呃，這真是...',
            "<32>* ...我有什麼話術好用嗎？",
            '<32>* 也許...\n  感謝你們的耐心與支援？',
            '<32>* 你們這一等，\n  我的事兒好辦多了。'
         ],
         moneyX5c: [
            '<32>* ...',
            '<32>* 我馬上就完成準備工作了。',
            '<32>* 要是你倆有啥遺言\n  想對前哨站居民說...',
            '<32>* 現在這個時機再合適不過了。'
         ],
         moneyX6a: ['<25>{#p/asriel2}{#f/15}* ...'],
         moneyX6b: ['<25>{#f/2}* 沒啥要說的。'],
         moneyX7: ['<25>{#p/asriel2}{#f/6}* 下來吧。'],
         moneyX8: ['<25>{#p/asriel2}{#f/8}* ...', '<25>{#p/asriel2}{#f/6}* 咱去電梯。'],
         rg2a: ["<32>{#p/basic}{#x1}* Halt!\n* You've gone far enough!{#x3}"],
         rg2b: () =>
            world.genocide
               ? ["<32>{#p/basic}{#x1}* We aren't going to let you get away that easily, are we, girl?{#x3}"]
               : [
                  ...(iFancyYourVilliany()
                     ? [
                        '<32>{#p/basic}{#x1}* So, you\'re the kid going by \"$(moniker2)\" now, huh?{#x3}',
                        iRespeccYourVilliany()
                           ? '<32>{#x2}* Yeah, we saw.\n* We also saw how easily Undyne gave up on stopping you.{#x3}'
                           : "<33>{#x2}* Yeah, we saw.\n* We also know you're not as tough as you may seem.{#x3}",
                        "<32>{#x1}* Pathetic, isn't it?{#x3}"
                     ]
                     : [
                        "<32>{#p/basic}{#x1}* Word is there's a human roaming around this area.{#x3}",
                        "<32>{#x2}* We wouldn't normally suspect anything, but kid, you were just on live TV...{#x3}",
                        "<32>{#x1}* It's a little hard to ignore a thing like that, now, isn't it?{#x3}"
                     ]),
                  '<32>* ...',
                  "<32>{#x2}* That's what I thought.{#x3}"
               ],
         rg2c1: ["<32>{#p/basic}{#x1}* Girl, you thinkin' what I'm thinkin'?{#x3}"],
         rg2c2: ['<32>{#p/basic}* ...', '<32>{#p/basic}{#x1}{#x2}* Oh, for sure.{#x3}', '<32>{#p/basic}* ...'],
         rg2c3: ['<32>{#p/basic}* ...'],
         rg2d: () =>
            world.genocide
               ? [
                  "<32>{#p/basic}{#x1}* Come on, girl.\n* Let's show Undyne what we're worth...{#x3}",
                  '<32>{#x1}{#x2}* ... and whoop some traitor backside.{#x3}'
               ]
               : [
                  "<32>{#p/basic}{#x1}* Come on, girl.\n* Let's show Undyne what we're worth...{#x3}",
                  iFancyYourVilliany()
                     ? '<32>{#x1}{#x2}* ... and whoop some bully backside.{#x3}'
                     : '<32>{#x1}{#x2}* ... and whoop some human backside.{#x3}'
               ],
         rg2e: ['<32>{#p/basic}* Wow.\n* That was...', '<32>{#p/basic}* ... something.'],
         rg2f: [
            '<32>{#p/basic}{#x1}* Girl, this human thing might not be worth the trouble.{#x3}',
            "<32>{#x2}* Yeah, we'll let the boys handle this one... if Undyne thinks they're up for it.{#x3}"
         ],
         hapsta1: () => [
            '<32>{#p/napstablook}* so, uh...',
            '<32>* do you think...\n* you can you help me with something...?',
            "<33>* it's... kind of important......",
            choicer.create('* （你要怎麼回答？）', '是', '否')
         ],
         hapsta1a: ['<32>{#p/napstablook}* okay.........', '<32>* this way.........'],
         hapsta1b: ['<32>{#p/napstablook}* oh.........', "<32>* i'll get out of your way, then........."],
         hapsta2: ['<32>{#p/napstablook}* well... here we are', "<32>* as for why we're here......"],
         hapsta3a: [
            "<32>{#p/napstablook}* i've been thinking more and more that mettaton is my long lost cousin.........",
            "<32>* ever since he disappeared, i've been worried about him"
         ],
         hapsta3b: ['<32>* i just want him to be okay.'],
         hapsta4: ['<32>{#p/napstablook}* take a look at this'],
         hapsta5: ["<32>{#p/napstablook}* it's a private recording i found at the royal lab."],
         hapsta6: [
            '<32>{#p/alphys}* Completing your final body is going to take some time...',
            '<32>* Are you sure you want this right now?',
            "<32>{#p/hapstablook}* i'm ready, doctor.",
            "<32>{#p/alphys}* Okay... I'm b-bringing Mettaton online right now.",
            '<32>* This control chip will allow you to use any body I build for you...',
            "<32>* When I finish your new body, I'll just t-transfer it there.",
            '<32>* Will that, uh, work?',
            "<32>{#p/hapstablook}* it's marvelous, doctor.\n* marvelous!",
            "<32>{#p/alphys}* Heh... that's...\n* Very nice of you...",
            '<32>{#p/hapstablook}* so when do i get to start?',
            '<32>{#p/alphys}* O-oh, um, you can try right now if you like?',
            "<32>* It's a universal chip, so you don't need to fuse with it to control it.",
            '<32>{#p/hapstablook}* oooh, fancy...',
            '<32>{#p/hapstablook}* being able to upgrade my body will be useful on my path to superstardom!',
            '<32>{#s/echostop}{#p/event}* Playback complete.'
         ],
         hapsta7: [
            "<32>{#p/napstablook}* well, that's it",
            "<32>{|}{#p/napstablook}* if i didn't know any better, i'd say that's- {%}"
         ],
         hapsta8: ["<32>{#p/finalghost}* Sorry, I'm late."],
         hapsta9: ['<32>* Oh.\n* Hello, human.'],
         hapsta10: ['<32>* Cousin Blooky.\n* Why is the human here?'],
         hapsta11: ['<32>{#p/napstablook}* i thought......\n* they might be able to help......'],
         hapsta12a: () => [
            ...[
               ['<32>{#p/finalghost}* Hm.\n* It would be nice to have them on our side.'],
               ["<32>{#p/finalghost}* Hm.\n* They'll have to curtail their violent side."],
               ["<32>{#p/finalghost}* Hm.\n* We can only hope they don't run away this time."],
               [
                  "<32>{#p/finalghost}* Hm.\n* Last time I saw them, they didn't seem very intelligent.",
                  '<32>* But who knows.'
               ],
               ['<32>{#p/finalghost}* Hm.\n* They were pretty nice to me...'],
               ['<32>{#p/finalghost}* Hm.\n* We can only hope they keep their hands to themself.'],
               ["<32>{#p/finalghost}* Hm.\n* They'll need to keep their flirtatious attitude in check."]
            ][SAVE.data.n.state_wastelands_dummy]
         ],
         hapsta12b: ['<32>* Are we ready to make the call?'],
         hapsta13: ['<32>{#p/napstablook}* well, hold on...', "<32>{|}* where's- {%}"],
         hapsta14: ['<32>{#p/basic}* RIGHT HERE, BOZO!'],
         hapsta15: ['<32>{#p/finalghost}* Do you always have to do that.'],
         hapsta16: [
            '<32>{#p/basic}* Human.\n* Human!\n* HUMAN!!!',
            '<32>* WHAT HAVE YOU DONE TO MY COUSIN THIS TIME!?'
         ],
         hapsta17: ["<32>{#p/finalghost}* They didn't do anything to me.\n* You're overreacting."],
         hapsta18: ['<32>{#p/basic}* Jeez, I was only kidding...'],
         hapsta19: ['<32>{#p/finalghost}* Sure you were.\n* Now, for the matter at hand...'],
         hapsta20: ["<32>{#p/finalghost}* We all know why we're here.\n* Our cousin is..."],
         hapsta21: ["<32>{#p/basic}* Our cousin's a SELLOUT."],
         hapsta22: [
            '<32>{#p/finalghost}* ...',
            '<32>* Our cousin is many things, but a \"sellout\" is not one of them.',
            '<32>* In fact, after Blooky and I read his diaries... I fear we may be the ones at fault.'
         ],
         hapsta23: ['<32>{#p/napstablook}* .........\n* ......... should we call him?'],
         hapsta24: ["<32>{#p/finalghost}* I don't see a reason not to."],
         hapsta25: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/mettaton}* BLOOKY!\n* WHAT A WONDERFUL SURPRISE!\n* WHAT IS IT YOU NEED?',
            '<32>{#p/napstablook}* um... i wanted to talk to you about something',
            '<32>{#p/mettaton}* WELL, HEY, WE CAN DO IT RIGHT HERE, WHAT DO YOU NEED?',
            '<32>{#p/napstablook}* in private.........',
            '<32>{#p/mettaton}* OH.',
            "<32>{#p/mettaton}* I'M AFRAID I CAN'T DO THAT RIGHT NOW SINCE I'M PREPARING FOR ANOTHER SHOW.",
            "<32>* HOW ABOUT WE MEET UP ONCE THAT'S OVER WITH?"
         ],
         hapsta26: ['<32>{|}{#p/basic}* Anything to avoid- {%}'],
         hapsta27: ['<32>{#p/finalghost}* Quiet!'],
         hapsta28: [
            '<32>{#p/napstablook}* that works...',
            '<32>{#p/mettaton}* FABULOUS, DARLING.',
            "<32>* I'LL CATCH UP WITH YOU THEN!"
         ],
         hapsta29: [
            '<32>{#p/basic}* I knew it.\n* I knew it!\n* I KNEW IT!',
            '<32>* This was doomed to fail from the very beginning.'
         ],
         hapsta30: [
            "<32>{#p/finalghost}* Just because Mettaton isn't here right now doesn't mean we've failed.",
            "<32>* We'll just have to be patient."
         ],
         hapsta31: ['<32>{#p/basic}* Fine...'],
         hapsta32: () => [
            '<32>{#p/finalghost}* Well, it was nice to talk to you again.',
            "<32>* We'll see each other soon."
         ],
         hapsta34: () => [
            '<32>{#p/napstablook}* heh...',
            ...(SAVE.data.b.oops
               ? ['<32>{#p/napstablook}* see you then, i guess']
               : [
                  '<32>{#p/napstablook}* and $(namel)?',
                  '<32>{#p/basic}* ...？',
                  '<32>{#p/napstablook}* .........\n* thanks for sticking around.'
               ])
         ],
         hapsta35: ['<32>{#p/basic}* I just hope I can be useful for once...'],
         opera1: () =>
            SAVE.data.n.state_foundry_undyne === 1
               ? [
                  '<25>{#p/alphys}{#g/alphysSideSad}* ... hey, uh...',
                  "<25>{#f/30}* I'm sorry I ran off like that earlier.",
                  "<25>{#f/32}* It's just... been really hard...",
                  '<25>{#f/20}* After seeing you leave Undyne behind on the platform like that.',
                  "<25>{#f/5}* Still, I...\n* I get that it probably wasn't your fault.",
                  '<25>{#f/20}* You were trying to run away from someone chasing you.',
                  '<25>{#f/31}* I just... had a hard time accepting what had happened to her.',
                  '<25>{#f/31}* ...',
                  '<25>{#f/20}* Well, we should probably head up to the rec center now.'
               ]
               : [
                  '<25>{#p/alphys}{#g/alphysNervousLaugh}* Ah, there you are!',
                  ...(world.bad_lizard === 1
                     ? [
                        "<25>{#g/alphysSideSad}* I've been... worried, about what you'd do if I didn't escort you.",
                        "<25>{#g/alphysOhGodNo}* Uh, not that you'd do anything bad!",
                        '<25>{#g/alphysWorried}* Just...',
                        "<25>{#g/alphysCutscene2}* I feel like it's important that I help you, you know?",
                        '<25>{#g/alphysCutscene2}* ...',
                        "<25>{#g/alphysWelp}* One thing's for sure, those guards were NOT supposed to attack you."
                     ]
                     : [
                        "<25>{#g/alphysSideSad}* I've been really w-worried about you...",
                        '<25>{#g/alphysSideSad}* About the puzzles, and about Mettaton, and...',
                        '<25>{#g/alphysHaveSomeCompassion}* ...',
                        '<25>{#g/alphysHaveSomeCompassion}* Those guards were NOT supposed to attack you.'
                     ]),
                  "<25>{#g/alphysUhButHeresTheDeal}* Maybe my royal memos didn't reach them???\n* For some reason???",
                  '<25>{#g/alphysTheFactIs}* I mean, they WERE only just hired today...',
                  ...(SAVE.data.b.failshow || !SAVE.data.b.item_tvm_mewmew || SAVE.data.b.mewget
                     ? [
                        "<25>{#g/alphysWelp}* Well, uh, anyway, it looks like you're fine, so...",
                        '<25>{#g/alphysCutscene2}* I guess we can go.'
                     ]
                     : [
                        "<25>{#g/alphysWelp}* Well, uh, anyway, it looks like you're fine.",
                        "<25>{#g/alphysFR}* Apart from that Mew Mew doll that doesn't belong to you."
                     ])
               ],
         opera2: ['<25>{#p/alphys}{#g/alphysInquisitive}* Are you coming?'],
         opera3: ['<25>{*}{#p/alphys}{#g/alphysWelp}* ...{^40}{%}'],
         opera4: () =>
            world.genocide
               ? ["<25>{#p/asriel2}{#f/1}* It's time to end this."]
               : world.bad_lizard === 1
                  ? ['<25>{#p/alphys}{#g/alphysNeutralSweat}* Here we are.']
                  : [
                     "<25>{#p/alphys}{#g/alphysCutscene1}* Okay, we're here!",
                     '<25>{#g/alphysSmileSweat}* B-better stay behind me while we get through security.'
                  ],
         opera5: ['<25>{#p/alphys}{#g/alphysSmileSweat}* H-hiya.', "<32>{#p/basic}{#x1}* 'Sup.{#x3}"],
         opera5b: ['<25>{#p/alphys}{#g/alphysSmileSweat}* O-oh, I guess there is no security.'],
         opera6: ['<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* Uh, y-yeah!\n* Hi!'],
         opera7: () =>
            world.bad_lizard === 1
               ? [
                  "<25>{#p/alphys}{#g/alphysWelp}* It's a good thing you didn't attack the human earlier...",
                  "<25>{#g/alphysNeutralSweat}* If you had, they might've..."
               ]
               : [
                  '<25>{#p/alphys}{#g/alphysWelp}* Well uh, thanks for... not attacking the human earlier.',
                  '<25>{#g/alphysGarbo}* The other guards didn\'t really \"get the memo,\" so to speak.'
               ],
         opera8: ['<32>{#p/basic}{#x1}* ... human?{#x3}', '<32>{#x1}* What human?{#x3}'],
         opera9: [
            "<25>{|}{#p/alphys}{#g/alphysTheFactIs}* Uhhhhh I don't know I'm just trying to escor- {%}",
            "<32>{#p/basic}{#x1}* Alphys, you're like, the second highest authority on the outpost.{#x3}",
            "<32>{#x2}* Yeah, you don't need to ask us for permission, haha.{#x3}",
            "<32>{#p/basic}{#x1}{#x2}* We haven't even made it out of guard training yet!{#x3}"
         ],
         opera10: [
            '<25>{#p/alphys}{#g/alphysNervousLaugh}* Oh.\n* I see.',
            "<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* We'll be on our way through, then!"
         ],
         opera11: ['<32>{#p/basic}{#x1}* (Bro... is she okay?){#x3}', '<32>{#x2}* (You tell me...){#x3}'],
         opera12: ['<32>{#p/basic}* Meanwhile...'],
         opera13: [
            "<25>{#p/alphys}{#g/alphysSideSad}* It's so dark in here...",
            '<25>* Maybe we should turn back. Find another way.',
            "<25>{|}* Unless it's- {%}"
         ],
         opera14a: ['<32>{#p/alphys}{#g/alphysGarbo}* Mettaton。'],
         opera14b: ['<32>{#p/mettaton}* 天啊...'],
         opera14c: ['<32>* 看看誰來了？'],
         opera15: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/mettaton}* 你會是...', '<32>* THE NEMESIS OF MY DREAMS...?']
               : ['<32>{#p/mettaton}* 你會是...', '<32>* 我的真愛嗎...？'],
         opera16: [
            '<25>{*}{#p/alphys}{#g/alphysGarbo}* What the heck are you doing to them now...{^30}{%}',
            '<32>{*}{#p/mettaton}{#x1}* EXCUSE ME?{^30}{%}',
            "<32>{*}{#x2}* I'M TRYING TO RUN A SHOW HERE.{^30}{%}",
            '<25>{*}{#p/alphys}{#g/alphysWTF}* ...{^30}{%}'
         ],
         opera16b: [
            '<32>{*}* 我的天啊...{^30}{%}',
            "<32>{*}{#x1}* ALPHYS沒能親眼看到\n  可真遺憾。{^30}{%}",
            "<32>{*}{#x2}* 她會喜歡的。{^30}{%}"
         ],
         opera17: () =>
            world.genocide ? 'Oh |my |friends...' : iFancyYourVilliany() ? 'Oh |how |sad...' : 'Oh |my |love...',
         opera18: () =>
            world.genocide
               ? "Time's |run|ning |thin..."
               : iFancyYourVilliany()
                  ? 'It |is |to |see...'
                  : 'Please |run |a|way...',
         opera19: () =>
            world.genocide
               ? "Soon |you'll |wish..."
               : iFancyYourVilliany()
                  ? 'Some |one |waste... '
                  : 'Mon|ster |king...',
         opera20: () =>
            world.genocide
               ? "You |ha|dn't |sinned..."
               : iFancyYourVilliany()
                  ? 'Their |time |on |me...'
                  : 'For|bids |your |stay...',
         opera20a: () =>
            iFancyYourVilliany()
               ? ['<25>{*}{#p/alphys}{#g/alphysInquisitive}* Huh?{^40}{%}']
               : ['<25>{*}{#p/alphys}{#g/alphysWelp}* Hey, this is actually pretty good...{^40}{%}'],
         opera21: () =>
            world.genocide ? 'But |be|fore...' : iFancyYourVilliany() ? "I'll |ad|mit..." : 'Hu|mans |must...',
         opera22: () =>
            world.genocide
               ? 'I |kill |you |dead...'
               : iFancyYourVilliany()
                  ? 'I |was |in|trigued...'
                  : 'Live |far |a|part...',
         opera23: () =>
            world.genocide ? "Let's |re|hearse..." : iFancyYourVilliany() ? "But |you're |just..." : 'E|ven |if...',
         opera24: () =>
            world.genocide
               ? "The |life |you've |led..."
               : iFancyYourVilliany()
                  ? 'Not |in |my |league...'
                  : 'It |breaks |my |heart...',
         opera25: () =>
            world.genocide
               ? 'Born |a |prince...'
               : iFancyYourVilliany()
                  ? 'You |should |find...'
                  : "They'll |cast |you...",
         opera25a: () =>
            iFancyYourVilliany()
               ? ['<25>{*}{#p/alphys}{#g/alphysGarboCenter}* Jeez.{^40}{%}']
               : ['<25>{*}{#p/alphys}{#g/alphysCutscene1}* The sakura leaves...!{^40}{%}'],
         opera26: () =>
            world.genocide
               ? 'We |were |con|vinced...'
               : iFancyYourVilliany()
                  ? 'Some|one |more |kind...'
                  : 'Out |in|to |space...',
         opera27: () =>
            world.genocide
               ? "That |you'd |see..."
               : iFancyYourVilliany()
                  ? 'At |least |then...'
                  : "I|t'll |suck...|\n(quite |literally)",
         opera28: () =>
            world.genocide
               ? 'Our |king|dom |free...'
               : iFancyYourVilliany()
                  ? "You |woul|dn't\n|have |to |die."
                  : "And |then |you'll\n|die |a |lot.",
         opera28a: () =>
            iFancyYourVilliany()
               ? ['<25>{*}{#p/alphys}{#g/alphysWelp}* ...{^40}{%}']
               : ["<25>{*}{#p/alphys}{#g/alphysGarbo}* Oh, so this is where it's going.{^40}{%}"],
         opera29: () => (world.genocide ? 'Then |one |day...' : 'Real|ly |sad...'),
         opera30: () => (world.genocide ? 'You |lost |your |way...' : "You're |gon|na |die..."),
         opera31: () => (world.genocide ? 'Now |my |friends... ' : 'Cry |cry |cry...'),
         opera31a: ['<25>{*}{#p/alphys}{#g/alphysCutscene3}* We get the point...{^40}{%}'],
         opera32: () =>
            world.genocide
               ? "Let's |bring |this\n|to |an |end."
               : iFancyYourVilliany()
                  ? "That's |what |you\n|get |for |being a\ndirty rotten meatbag"
                  : "So |sad |it's\n|hap|pen|ing.",
         opera33: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/mettaton}* TOO BAD.', '<32>{#p/mettaton}* TOO BAD YOU HAD TO GO AND PLAY THE VILLAIN.']
               : ['<32>{#p/mettaton}* SO SAD.', "<32>{#p/mettaton}* SO SAD YOU'RE GOING TO BE EJECTED."],
         opera34: () =>
            !world.badder_lizard
               ? [
                  '<25>{#p/alphys}{#g/alphysGarboCenter}* You done now?',
                  '<32>{#p/mettaton}{#x1}* WELL, HOLD ON...',
                  '<32>{|}{#x2}* I STILL HAVE TO- {%}'
               ]
               : ['<32>{#p/mettaton}{#x1}* 做好準備，人類...', "<32>{|}{#x2}* 我馬上就要把你炸- {%}"],
         opera35: () => [
            ...(SAVE.data.b.killed_glyde
               ? [
                  !world.badder_lizard
                     ? "<32>{#p/mettaton}{#x0}* ... I'M NOT SURPRISED ALPHYS RAN AWAY FROM YOU JUST NOW."
                     : "<32>{#p/mettaton}{#x0}* ...難怪ALPHYS不想跟你待在一塊。",
                  '<32>{#x1}* 你不感到羞愧嗎？',
                  "<32>{#x0}* 為了保護我觀眾們寶貴的眼睛，\n  我還得切斷直播！",
                  !world.badder_lizard
                     ? "<32>{#x0}* 太倒霉了...\n* 但你應該也累了！"
                     : "<32>{#x0}* 太丟臉了...\n* 但你應該也累了！"
               ]
               : [
                  ...(!world.badder_lizard
                     ? ['<25>{#p/alphys}{#g/alphysWelp}* S-so... what now?', '<32>{#p/mettaton}{#x0}* WHAT NOW?']
                     : []),
                  '<32>{#p/mettaton}{#x0}* WELL, AS MUCH AS I WOULD HAVE LOVED TO FINISH THAT EPISODE...',
                  '<32>{#x2}* AND BELIEVE ME DARLING, I DEFINITELY WOULD HAVE...'
               ]),
            ...(world.bad_robot
               ? [
                  "<32>{#x1}* 在我們的下期也是最後一期節目前，\n  我還有些事要做。",
                  '<32>{#x3}* 親愛的，很快...',
                  "<32>{*}* 很快，我就會讓你希望\n  從未遇見過我。{^30}{#x4}{%}"
               ]
               : [
                  "<32>{#x1}* THERE'S SOMETHING MUCH, -MUCH- MORE EXCITING IN STORE COMING VERY SOON.",
                  '<32>{#x3}* SO, UNTIL THE NEXT AND FINAL EPISODE...',
                  '<32>{*}* STAY FABULOUS!{^30}{#x4}{%}'
               ])
         ],
         
         hapsta36: () => [
            "<32>{#p/mettaton}{#e/mettaton/0}* OH... RIGHT.\n* I'D FORGOTTEN ABOUT THAT.",
            ...(SAVE.data.b.killed_glyde || SAVE.data.b.bad_lizard
               ? [
                  "<32>{#p/mettaton}{#e/mettaton/5}* ... I SUGGEST WE GO TO ANOTHER AREA FIRST, THOUGH.\n* IT'S NOT SAFE HERE."
               ]
               : [])
         ],
         hapsta37: () =>
            SAVE.data.b.killed_glyde || SAVE.data.b.bad_lizard
               ? ['<32>{#p/napstablook}* well, alright......\n* if you really want to, we can do it alone......']
               : [
                  '<32>{#p/napstablook}* hey, um......',
                  '<32>{#p/napstablook}* i was looking through old lab recordings, and...'
               ],
         hapsta38: ['<32>{#p/mettaton}{#e/mettaton/34}* YES...?'],
         hapsta39: [
            '<32>{#p/napstablook}* well, there was this voice that sounded like......',
            '<32>{#p/napstablook}* like......'
         ],
         hapsta40: ["<33>{#p/mettaton}{#e/mettaton/11}* WE DON'T HAVE ALL DAY, DARLING."],
         hapsta41: [
            '<32>{#p/napstablook}* it was you',
            '<32>{#p/napstablook}{#e/mettaton/3}* .........\n* the real you.'
         ],
         hapsta42: [
            '<32>{#p/mettaton}{#e/mettaton/2}* THE \"REAL ME\" EH?',
            "<32>{#e/mettaton/0}* NOW HOLD ON, LET'S NOT JUMP TO CONCLUSIONS HERE."
         ],
         hapsta43: ["<32>{#p/finalghost}* They're telling the truth."],
         hapsta44: ['<32>{#p/mettaton}{#e/mettaton/6}* ... AND NOW THE GHOSTS ARE GANGING UP ON ME.\n* LOVELY.'],
         hapsta45: ['<25>{#p/alphys}{#g/alphysTheFactIs}* Uh, I s-swear I had nothing to do with this...'],
         hapsta46: [
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}{#e/mettaton/3}* I-I'll just, get out of your guys' way..."
         ],
         hapsta47: [
            "<32>{#p/basic}* Excuse me, WHERE do you think you're going?",
            "<32>{#p/basic}* You're the one who started all this in the first place!",
            "<32>{#p/basic}* If it wasn't for your stupid tape, I wouldn't have to be here right now."
         ],
         hapsta48: ['<25>{#p/alphys}{#g/alphysNeutralSweat}* Whoops.'],
         hapsta49a: [
            "<32>{#p/mettaton}{#e/mettaton/9}* SO THAT'S IT, THEN.",
            "<32>{#e/mettaton/7}* YOU'RE ALL HERE... NO DOUBT TO BRING ME BACK HOME."
         ],
         hapsta49b: ['<32>{#e/mettaton/8}* SO MUCH FOR \"CHASING YOUR DREAMS,\" EH BLOOKY?'],
         hapsta50: ['<32>{|}{#p/napstablook}* cousin, i- {%}'],
         hapsta51a: ['<32>{#p/mettaton}{#e/mettaton/18}* OH, DON\'T \"COUSIN\" ME.'],
         hapsta51b: [
            "<32>{#p/mettaton}{#e/mettaton/20}* IF IT WASN'T FOR YOU, I MIGHT'VE ACTUALLY ENJOYED THE QUIET LIFE...",
            '<32>{#p/mettaton}{#e/mettaton/17}* ... BUT NO.\n* YOU JUST -HAD- TO GET ME IN ON THE FAMILY BUSINESS.',
            '<32>{#p/mettaton}{#e/mettaton/19}* A BUSINESS, MIGHT I ADD, WHOSE SALES FIGURES HAVE BEEN IN THE RED SINCE DAY ONE.'
         ],
         hapsta52: ['<32>{#p/napstablook}{#e/mettaton/3}* .........\n* i know.'],
         hapsta53: [
            '<32>{#p/mettaton}{#e/mettaton/17}* OH, REALLY NOW?\n* DO YOU REALLY KNOW WHAT IT WAS LIKE FOR ME?'
         ],
         hapsta54: ["<32>{#p/finalghost}* Considering we've all read your diaries, I'm sure they do..."],
         hapsta55a: [
            "<32>{#p/mettaton}{#e/mettaton/19}* I DON'T CARE IF THEY'VE READ MY DIARIES, I WANT THEM TO HEAR IT FROM ME.",
            '<32>{#p/mettaton}{#e/mettaton/3}* ...\n* LISTEN, \"COUSIN.\"\n* THE WORK WAS NEVER THE ISSUE.',
            '<32>{#p/mettaton}{#e/mettaton/14}* SNAIL FARMING MAY NOT BE THE MOST GLAMOROUS PASS TIME, BUT I LIKED IT FOR WHAT IT WAS.',
            "<32>{#p/mettaton}{#e/mettaton/13}* NO... IT ONLY STARTED BECOMING A PROBLEM WHEN EVERY SECOND I WASN'T ON THE FARM...",
            "<32>{#p/mettaton}* ... WAS A SECOND YOU PEOPLE DIDN'T SEEM TO CARE ABOUT ME."
         ],
         hapsta55b: [
            '<32>{#p/mettaton}{#e/mettaton/16}* NO CALLS, NO VISITS... JUST THE OCCASIONAL \"HEY, WHEN ARE YOU COMING BACK TO WORK?\"',
            "<32>{#p/mettaton}{#e/mettaton/15}* IT WAS PRETTY OBVIOUS TO ME THAT AT SOME POINT, I'D BECOME NOTHING BUT A TOOL...",
            '<32>{#p/mettaton}{#e/mettaton/11}* A MERE COG IN THE GRAND BLOOK FAMILY MACHINE.'
         ],
         hapsta56: ['<32>{#p/napstablook}* ...............'],
         hapsta57a: ['<32>{#p/mettaton}{#e/mettaton/2}* NOTHING TO SAY?\n* NO, NO, I EXPECTED AS MUCH.'],
         hapsta57b: [
            "<32>{#p/mettaton}{#e/mettaton/5}* HONESTLY, THOUGH, I COULDN'T CARE LESS ABOUT WHAT YOU HAVE TO SAY.",
            "<32>{#p/mettaton}{#e/mettaton/10}* I'VE GOT EVERYTHING I WANT IN LIFE, AND LOOK AT YOU...",
            '<32>{#p/mettaton}{#e/mettaton/12}* CLINGING TO TRAINING DUMMIES AND BEGGING FOR SCRAPS.'
         ],
         hapsta58: ["<32>{#p/finalghost}* You say you don't care about us, yet you invite us onto your shows."],
         hapsta59: [
            '<32>* You even gave Blooky special treatment during that last show...',
            "<32>* Kicking that other contestant so it'd be them against the human in the final round."
         ],
         hapsta60: ['<32>{#p/mettaton}{#e/mettaton/5}* ... THAT WAS ONLY OUT OF PITY.'],
         hapsta61: ['<32>{#p/basic}* Or... part of you secretly wants to come back!'],
         hapsta62: ['<32>{#p/mettaton}{#e/mettaton/11}* HAHAHA...\n* NOT A CHANCE IN THE GALAXY.'],
         hapsta63: ["<32>{#p/napstablook}* i'm sorry, cousin."],
         hapsta64: ['<32>{#p/mettaton}{#e/mettaton/21}* ... OH?'],
         hapsta65a: [
            "<32>{#p/napstablook}* after you left, we couldn't keep up with our customers...",
            "<32>{#p/napstablook}{#e/mettaton/15}* we had to scale down\n* the farm... isn't what it was......"
         ],
         hapsta65b: ['<32>{#p/napstablook}* and i never realized how much you did for us...... until you were gone'],
         hapsta65c: ["<32>{#p/napstablook}{#e/mettaton/4}* so... i'm sorry.\n* for everything........."],
         hapsta66a: [
            '<32>{#p/mettaton}* I SEE.',
            '<32>{#p/mettaton}{#e/mettaton/6}* ... I SEE.',
            "<32>{#p/mettaton}{#e/mettaton/5}* SO YOU'RE THE TYPE TO APOLOGIZE ONLY -AFTER- YOU'VE BEEN CALLED OUT, HUH?"
         ],
         hapsta66b: ['<32>{#p/mettaton}{#e/mettaton/0}* I SHOULD HAVE KNOWN.'],
         hapsta67: ["<32>{|}{#p/napstablook}* that's not- {%}"],
         hapsta68a: [
            '<32>{#p/mettaton}{#e/mettaton/3}* NO, I GET IT. YOU WANT ME TO FORGIVE YOU AND MOVE ON FROM IT LIKE NOTHING HAPPENED.',
            "<32>{#p/mettaton}{#e/mettaton/5}* WELL, I'M AFRAID THAT'S NOT HOW THINGS WORK ANYMORE, BLOOKY."
         ],
         hapsta68b: ["<32>{#p/mettaton}{#e/mettaton/6}* ... ANYWAY, I'VE GOT A GRAND FINALE TO PREPARE..."],
         hapsta68c: ["<32>{#p/mettaton}{#e/mettaton/11}* SO, IF YOU DON'T MIND, I'LL BE ON MY WAY NOW."],
         hapsta69: ['<32>{#p/basic}* Get back here.\n* Get back here!\n* GET BACK HERE!!!'],
         hapsta70: ["<33>{#p/finalghost}* I don't think he's coming back."],
         hapsta71: [
            '<32>{#p/napstablook}* maybe... he just needs a little space......',
            '<32>{#p/napstablook}* we have to give him a chance.........'
         ],
         hapsta72: ["<32>{#p/basic}* What a giant waste of time.\n* I'm going back to Undyne's house now."],
         hapsta73: ['<32>{#p/finalghost}* It was a nice try, Blooky.', '<32>{#p/finalghost}* A nice try.'],
         hapsta74: ['<32>{#p/napstablook}* no............'],
         hapsta75: () =>
            SAVE.data.b.oops
               ? [
                  "<25>{#p/alphys}{#g/alphysCutscene2}* Hey...\n* Don't listen to them.",
                  "<25>{#p/alphys}{#g/alphysCutscene2}* I've known Mettaton f-for quite a while now...",
                  "<25>{#p/alphys}{#g/alphysCutscene2}* He wouldn't leave like that unless he needed time to think.",
                  '<32>{#p/napstablook}* yeah...',
                  '<32>{#p/napstablook}* i guess......'
               ]
               : [
                  "<32>{#p/basic}* You know he's done this in the past, right?",
                  "<32>{#p/basic}* He'll be back.",
                  '<32>{#p/napstablook}* heh...\n* $(namel)......',
                  '<25>{#p/alphys}{#g/alphysInquisitive}* $(name)...?',
                  "<32>{#p/napstablook}* uh, it's a long story",
                  '<25>{#p/alphys}{#g/alphysWelp}* ... I guess you can tell me later.',
                  '<32>{#p/napstablook}* ...\n* thank you, $(namel)\n* for everything......',
                  "<32>* you've done so much for our family just by being here",
                  "<32>* even if... it's not the family you really wanted......",
                  '<32>{#p/basic}* Blooky, I...',
                  '<32>{#p/napstablook}* $(namel), if...\n* no, when you see him again...',
                  "<32>* don't ever let him forget how much you cared about him in life... alright?"
               ],
         hapsta76: [
            "<32>{#p/napstablook}* here's your mew mew doll",
            "<32>* i hope i wasn't too late......",
            "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* No, i-it's okay.\n* Thank you."
         ],
         hapsta77: ['<32>{#p/napstablook}* well, cya......'],
         opera36a: () => [
            '<25>{#p/alphys}{#g/alphysWelp}* That was certainly an unexpected turn of events.',
            ...(SAVE.data.b.a_state_hapstablook && !SAVE.data.b.oops
               ? [
                  '<25>{#p/alphys}{#g/alphysInquisitive}* Not to mention the whole \"$(name)\" thing...',
                  "<25>* Last I checked, they've been dead for a hundred years...",
                  "<25>{#g/alphysWelp}* Oh well.\n* I guess they'll tell me about it later.",
                  "<25>{#g/alphysWelp}{#x5}* Speaking of which, you'll probably want to get going..."
               ]
               : [
                  "<25>{#p/alphys}{#g/alphysInquisitive}* Looks like we're in the clear, though...",
                  "<25>{#g/alphysWelp}{#x5}* Which means... you'll probably want to get going..."
               ]),
            '<25>{#g/alphysTheFactIs}{#x6}* And I should probably get back to the lab...',
            '<25>{#g/alphysNervousLaugh}{#x5}* So... see you around, I guess?',
            ...(SAVE.data.b.failshow || !SAVE.data.b.item_tvm_mewmew || SAVE.data.b.mewget
               ? [
                  "<25>{#g/alphysUhButHeresTheDeal}* Uh, b-but don't worry!\n* I'll ring you as soon as you...",
                  '<25>{#g/alphysNervousLaugh}* You...',
                  "<25>{#g/alphysHellYeah}* I-I'll stay in contact!"
               ]
               : [
                  ...(!SAVE.storage.inventory.has('tvm_mewmew') && // NO-TRANSLATE

                     !SAVE.storage.dimboxA.has('tvm_mewmew') && // NO-TRANSLATE

                     !SAVE.storage.dimboxB.has('tvm_mewmew') // NO-TRANSLATE

                     ? ((SAVE.data.b.mewget = true),
                        [
                           '<25>{#g/alphysNervousLaugh}* ...',
                           '<25>{#g/alphysFR}* ... actually, before I go, I thought you should know.',
                           '<25>{#f/33}* I found the Mew Mew doll you let go of.',
                           "<25>{#g/alphysCutscene3}* It's mine now.\n* And I'm never letting it go again.",
                           '<25>{#g/alphysHellYeah}* S-so yeah!'
                        ])
                     : [
                        '<25>{#g/alphysNeutralSweat}{#x5}* But, uh, b-before I go...',
                        '<25>{#f/10}* Would you mind... giving me back my Mew Mew doll?',
                        '<25>{#f/3}* Please?',
                        choicer.create('* (Give back the Mew Mew doll?)', '是', '否')
                     ])
               ])
         ],
         opera36b1: [
            '<32>{#p/human}* (You gave the Mew Mew Doll to Alphys.)',
            '<25>{#p/alphys}{#g/alphysCutscene2}* Thanks.'
         ],
         opera36b2: [
            '<32>{#p/human}* (You decide not to give.)',
            '<25>{#p/alphys}{#g/alphysWTF}* ...',
            '<25>{#g/alphysCutscene2}* Okay, you know what?\n* You can keep it.',
            "<25>{#g/alphysCutscene2}* It's all yours.",
            "<25>{#f/33}* What?\n* It's not like I care about it or anything."
         ],
         opera37: (gib: boolean) =>
            SAVE.data.b.failshow || !SAVE.data.b.item_tvm_mewmew
               ? ['<25>{#p/alphys}{#g/alphysSmileSweat}* T-take care!!']
               : gib
                  ? ["<25>{#p/alphys}{#f/10}* I-I'll stay in contact."]
                  : ['<25>{#p/alphys}{#f/3}* N-not at all!!'],
         opera38: [
            '<32>{#p/basic}* ... now I understand why Blooky feels how they do all the time.',
            "<32>* That guilt, thinking you could've done more to care about someone...",
            "<32>* Hmph.\n* Maybe there's something more I can do to help here.",
            '<32>* Remember what happened with Toriel?',
            '<32>* The way you called out for me, and I was able to talk?',
            '<32>* I know things about monsters.\n* Things that could help us get through more quickly.',
            '<32>* So, if I think of something...',
            '<32>* Call out for me like you did before, okay?'
         ],
         operaX1: () =>
            [
               ['<25>{#p/asriel2}{#f/8}* Hello?'],
               ['<25>{#p/asriel2}{#f/8}* Here we go.'],
               ['<25>{#p/asriel2}{#f/8}* ...']
            ][Math.min(SAVE.flag.n.ga_asriel53++, 1)],
         operaX2: () => [
            ...[
               ['<32>{#p/mettaton}* HELLO, DARLING.'],
               ['<32>{#p/mettaton}* HERE WE GO INDEED, DARLING!'],
               ['<32>{#p/mettaton}* WHY HELLO!']
            ][Math.min(SAVE.flag.n.ga_asriel53 - 1, 2)],
            "<32>* 為何不來這聚光燈下呢？"
         ],
         operaX3: [
            "<32>{#p/mettaton}* 好多了...",
            '<32>{#p/mettaton}* 我給你們唱首小曲吧。'
         ],
         operaX4: () =>
            [
               [
                  "<25>{*}{#p/asriel2}{#f/10}* 跟我說說，\n  你打算唱啥呢？{^30}{%}",
                  '<32>{*}{#p/mettaton}{#x1}* ASRIEL啊...{^30}{%}',
                  '<32>{*}{#x2}* 難道你不知道\n  這叫「劇透」嗎？{^30}{%}',
                  '<25>{*}{#p/asriel2}{#f/6}* 也是意料之中了。{^30}{%}'
               ],
               [
                  "<25>{*}{#p/asriel2}{#f/7}* 我已經知道\n  你打算唱我了。{^30}{%}",
                  '<32>{*}{#p/mettaton}{#x1}* 喔，你知道了啊。{^30}{%}',
                  "<32>{*}{#x2}* 沒事，這不影響我接著唱。{^30}{%}",
                  '<25>{*}{#p/asriel2}{#f/8}* ...{^30}{%}'
               ]
            ][Math.min(SAVE.flag.n.ga_asriel54++, 1)],
         operaX5: () => [
            "<32>{#p/mettaton}* 就這樣，我唱完了。",
            "<32>{#x1}* 喔，忘了說了，\n  我本人不在這。",
            '<32>* 我的控制晶片\n  已經插到新機體上了。',
            ...(SAVE.flag.n.ga_asriel55++ < 1
               ? [
                  '<25>{#p/asriel2}{#f/10}* ...新機體？',
                  '<32>{#p/mettaton}* 怎麼，想觀摩觀摩？',
                  "<32>* 別急嘛。\n* 我不會讓你等太久的。"
               ]
               : []),
            '<32>{#p/mettaton}* 待會見...'
         ],
         operaX7: ["<25>{#p/asriel2}{#f/8}* 看來事情不簡單，真失望。"],
         operaY1: ['<25>{*}{#p/asriel2}{#f/13}* 你說什- {%}'],
         operaY2: ['<25>{*}{#p/asriel2}{#f/15}* $(name)。\n* 你在幹啥。{^40}{%}'],
         operaY3: ["<25>{*}{#p/asriel2}{#f/15}* 快停下...{^40}{%}"],
         operaY4: ['<25>{*}{#p/asriel2}{#f/16}* $(name)，\n  用不著這樣。{^40}{%}'],
         end1: (rgk: boolean) => [
            '<32>{#p/mettaton}* 終於...',
            ...(SAVE.flag.b.legs
               ? [
                  '<32>* 終於，在命運的...',
                  '<32>{#e/mettaton/4}* ...',
                  "<32>{#e/mettaton/25}* 我的傳感器探測到\n  你正試圖往我身後看。",
                  iFancyYourVilliany()
                     ? '<32>{#e/mettaton/30}* 你肯定特別想動我的開關，\n  是不是啊，「$(moniker2u)」？'
                     : '<32>{#e/mettaton/30}* 你肯定特別想動我的開關，\n  是不是啊，親？',
                  ...(!world.badder_lizard
                     ? [
                        '<32>{#e/mettaton/28}* 你早就知道那裡有開關。\n* 畢竟，我那點小秘密\n  ALPHYS肯定沒藏住。',
                        '<32>{#e/mettaton/3}* 真是一猜就中...'
                     ]
                     : [
                        '<32>{#e/mettaton/28}* 你早就知道那裡有開關。\n* 畢竟，看一眼皇家實驗室的記錄\n  就知道了。',
                        '<32>{#e/mettaton/3}* 真是一猜就中...'
                     ]),
                  "<32>{#e/mettaton/12}* 那我就不浪費時間\n  長篇大論了。",
                  ...(SAVE.data.b.a_state_hapstablook
                     ? ["<32>{#e/mettaton/3}* 只說一句話：\n  現在，我有點不在狀態。"]
                     : iFancyYourVilliany()
                        ? ["<32>{#e/mettaton/31}* 只說一句話：\n  這次，我不會再手下留情！"]
                        : !world.badder_lizard
                           ? ["<32>{#e/mettaton/31}* 只說一句話：\n  這次演出精彩與否，就看你的了！"]
                           : ["<32>{#e/mettaton/19}* 只說一句話：\n  我不能對你的轉變視而不見。"])
               ]
               : [
                  '<32>* 終於，在命運的指引下，\n  我們再度相會於此。',
                  ...(iFancyYourVilliany()
                     ? [
                        '<32>{#e/mettaton/3}* WELL THEN.',
                        "<32>{#e/mettaton/35}* IT -IS- INCREDIBLE HOW YOU'VE MANAGED TO KEEP UP THE ACT FOR SO LONG...",
                        '<32>{#e/mettaton/6}* BUT NOW, COMES THE MOMENT WHERE YOUR MASK IS SURE TO SLIP.',
                        '<32>{#e/mettaton/5}* DID YOU REALLY THINK I WAS GOING TO GO EASY ON YOU, DEAR \"$(moniker2u)?\"',
                        "<32>{#e/mettaton/0}* WELL, OF COURSE YOU DIDN'T.\n* BUT YOU STILL WON'T BE READY FOR WHAT COMES NEXT.",
                        '<32>{#e/mettaton/10}* IF YOU THINK YOU HAVE WHAT IT TAKES, THEN DO BE MY GUEST...',
                        "<32>{#e/mettaton/31}* JUST DON'T BLAME -ME- FOR YOUR DEFEAT WHEN IT FINALLY HAPPENS!"
                     ]
                     : [
                        '<32>{#e/mettaton/4}* 我得承認...',
                        '<32>{#e/mettaton/34}* 如果沒有你，\n  我也走不到現在這一步。',
                        "<32>{#e/mettaton/5}* 一路下來，我們讓觀眾\n  看到了自己最精彩的一面。",
                        "<32>{#e/mettaton/6}* 而即將到來的，\n  正是你我夢寐以求的重頭好戲。",
                        '<32>{#e/mettaton/23}* 不過，我得說...',
                        ...(SAVE.data.b.a_state_hapstablook
                           ? [
                              "<32>{#e/mettaton/5}* 事情的發展有點超出\n  我的預料。",
                              '<32>{#e/mettaton/6}* 那些家長裡短的破事\n  偏偏這時候冒出來...',
                              "<32>* ...給我攪得心神不寧。",
                              "<32>{#e/mettaton/11}* 不過，讓我們先把\n  眼前這場表演圓滿收尾，\n  再去處理那些事。",
                              '<32>{#e/mettaton/5}* 觀眾們肯定都迫不及待了。',
                              '<32>{#e/mettaton/6}* 所以，別讓觀眾失望，好嗎？'
                           ]
                           : !world.badder_lizard
                              ? [
                                 "<32>{#e/mettaton/25}* I'M COUNTING ON YOU TO MAKE IT PAST ME IN ONE PIECE.",
                                 "<32>{#e/mettaton/0}* DON'T GET ME WRONG, I'D LOVE TO TAKE A HUMAN SOUL AND BECOME HUMANITY'S STAR.",
                                 '<32>{#e/mettaton/3}* BUT TAKING -YOUR- SOUL WOULD BE... BITTERSWEET.',
                                 "<32>{#e/mettaton/6}* WE'VE BEEN THROUGH SO MUCH TOGETHER, WHAT WITH ALL THE SHOWS AND ALL.",
                                 "<32>{#e/mettaton/4}* PLUS, FOR A HUMAN WHO HAS TO DEAL WITH ALL THESE SHORT- SIGHTED MONSTERS' ANTICS...",
                                 "<33>{#e/mettaton/0}* YOU'VE BEEN VERY UNDERSTANDING.",
                                 '<32>{#e/mettaton/5}* OH WELL.\n* IF YOU DO KICK THE BUCKET, YOU CAN REST ASSURED...',
                                 "<32>* YOUR SOUL WON'T GO TO WASTE.",
                                 "<32>{#e/mettaton/10}* NOW, SHOW ME YOU'VE GOT WHAT IT TAKES TO BE A -REAL- SUPERSTAR!"
                              ]
                              : [
                                 '<32>{#e/mettaton/5}* AT FIRST, I CONSIDERED GOING HARD ON YOU.',
                                 ...(SAVE.data.n.bad_lizard < 2
                                    ? [
                                       ...(SAVE.data.n.state_foundry_undyne === 1
                                          ? [
                                             '<32>{#e/mettaton/10}* AFTER ALL... YOU DID DO SOMETHING WHICH HURT A FRIEND OF MINE VERY DEARLY.',
                                             '<32>{#e/mettaton/3}* BUT THEN I REMEMBERED YOUR BETTER HALF.',
                                             '<32>{#e/mettaton/6}* AND THE FACT THAT, FOR THE MOST PART, YOU -HAVE- BEEN DOING FAIRLY WELL.',
                                             "<32>{#e/mettaton/2}* GRANTED, I HAVEN'T BEEN KEEPING AS CLOSE AN EYE ON YOU LATELY...",
                                             "<32>{#e/mettaton/12}* BUT JUDGING BY HOW YOU WERE BEFORE, I DOUBT YOU'D DO ANYTHING RASH."
                                          ]
                                          : [
                                             "<32>{#e/mettaton/10}* AFTER ALL... YOU HAVEN'T REALLY BEEN THE GREATEST PERSON.",
                                             '<32>{#e/mettaton/3}* BUT THEN I REMEMBERED YOUR BETTER HALF.',
                                             '<32>{#e/mettaton/6}* AND THE FACT THAT, FOR A TIME, YOU -WERE- DOING REALLY WELL THERE.'
                                          ]),
                                       "<32>{#e/mettaton/5}* WHO KNOWS.\n* MAYBE I'M GIVING YOU TOO MUCH CREDIT.",
                                       '<32>{#e/mettaton/0}* OR MAYBE I JUST WANT TO AVOID ANY UNNECESSARY TROUBLE.',
                                       "<32>{#e/mettaton/20}* STILL, THAT DOESN'T MEAN WE'RE BEST FRIENDS ALL OF A SUDDEN."
                                    ]
                                    : [
                                       ...(SAVE.data.n.state_starton_papyrus === 1
                                          ? SAVE.data.n.state_foundry_undyne === 2
                                             ? rgk
                                                ? [
                                                   '<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL JUST ABOUT EVERYBODY I COULD LIST OFF BY NAME.'
                                                ]
                                                : [
                                                   '<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL PAPYRUS, AS WELL AS UNDYNE.'
                                                ]
                                             : rgk
                                                ? [
                                                   '<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL PAPYRUS, ALONG WITH SEVERAL ROYAL GUARD MEMBERS.'
                                                ]
                                                : ['<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL PAPYRUS.']
                                          : SAVE.data.n.state_foundry_undyne === 2
                                             ? rgk
                                                ? [
                                                   '<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL UNDYNE, ALONG WITH SEVERAL ROYAL GUARD MEMBERS.'
                                                ]
                                                : ['<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL UNDYNE.']
                                             : rgk
                                                ? [
                                                   '<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL SEVERAL ROYAL GUARD MEMBERS.'
                                                ]
                                                : [
                                                   '<32>{#e/mettaton/10}* AFTER ALL... YOU DID GO AND KILL ALL THOSE PEOPLE.'
                                                ]),
                                       '<32>{#e/mettaton/3}* BUT THEN I REMEMBERED THE WARNING I GAVE YOU AT THE LAB.',
                                       "<32>{#e/mettaton/6}* AND THE FACT THAT, SINCE THEN, YOU'VE BEEN BEHAVING MUCH BETTER.",
                                       '<32>{#e/mettaton/5}* WELL, WELL.\n* IT SEEMS YOU CAN CHANGE YOUR WAYS AFTER ALL.',
                                       '<32>{#e/mettaton/0}* GOOD ON YOU.',
                                       "<32>{#e/mettaton/20}* BUT DON'T THINK THAT MEANS I'M JUST GOING TO FORGET ABOUT WHAT YOU DID."
                                    ]),
                                 '<32>{#e/mettaton/29}* ONLY THAT, FOR THE SAKE OF PUTTING ON A GOOD SHOW...',
                                 "<32>{#e/mettaton/26}* I'LL AGREE TO PLAY FAIR.",
                                 "<32>{#e/mettaton/5}* ... MAYBE, BY THE END, YOU'LL EVEN EARN MY RESPECT.",
                                 "<32>{#e/mettaton/35}* NOW.\n* SHOW ME YOU'RE MORE THAN A RUTHLESS KILLER.",
                                 "<32>{#e/mettaton/31}* SHOW ME YOU'VE GOT WHAT IT TAKES TO BE A -REAL- SUPERSTAR!"
                              ])
                     ])
               ])
         ],
         end2: ['<32>{#e/mettaton/11}* 攝影師！\n* 現在開拍！'],
         endX1: [
            '<32>{#p/mettaton}* 哎呀，哎呀...\n* 讓您這麼長途跋涉，\n  真是辛苦了，「親」。',
            '<32>* 跟你扯這些客套話，\n  真是浪費時間。',
            '<32>* ...怎麼？\n* 你還真當自己是塊寶？',
            '<32>* 真是蠢的可以。',
            '<32>* 我只是想演一齣好戲。',
            '<32>* 所謂一齣好戲呢...',
            "<32>* 也不過是對對臺詞，擺擺姿勢。",
            '<32>* 然後，借著演出展現我超強的實力，\n  順便撈點名聲和權力，',
            '<32>* 和「樂趣」「友誼」什麼的...\n  根本不搭邊。',
            '<32>* ...說回正題。',
            "<32>* 給我聽好。\n* 犯了事，就休想逃。",
            '<32>* 管你怎麼哭爹喊娘。\n* 管你怎麼垂死掙扎。\n* 管你怎麼跪地求饒。',
            '<32>* 你想咋的都行。',
            "<32>* 很快，我就會成為伸張正義的英雄。\n* 而你？\n  就是地上的一攤爛泥罷了。",
            "<32>* 看吶，我已經接管了整個核心，\n  讓它源源不斷地給我輸送能量。",
            "<32>* 我和ALPHYS原來沒打算這麼做，\n  不過沒什麼大礙。",
            '<32>* 只要我一聲令下，連上電纜，\n  就等著受死吧。',
            "<32>* 其實，你應該能預感到\n  我要這麼做...",
            "<32>* 不過，一個滿腦子\n  只知道殺殺殺的人\n  應該沒那個智商。"
         ],
         endX1x: [
            '<32>{#p/mettaton}* 哎呀，哎呀...',
            '<32>* ...',
            '<32>* ...耷拉個臉幹什麼？\n* 就這麼想被我打成肉醬？',
            '<32>* 還敢頂嘴？\n* 好，這是你自找的...'
         ],
         endX2: ["<32>{#e/mettaton/17}* ALPHYS，過來！\n* 讓它瞧瞧咱們的真本事！"],
         endY1: [
            '<25>{#p/alphys}{#g/alphysSmileSweat}* Okay, you made it!',
            '<25>{#f/3}* Eheh... that was more difficult than it had to be, huh?',
            "<25>{#g/alphysYeahYouKnowWhatsUp}* I mean, not for you, since, y'know...",
            '<25>{#g/alphysNeutralSweat}* You, uh... seem content with just about anything.',
            '<25>* ...',
            '<25>{#g/alphysTheFactIs}* ... a-anyway, we should probably head towards the Citadel now.',
            '<25>{#g/alphysIDK}* The elevator should be fixed by now, so...'
         ],
         endY2: [
            "<25>{#p/alphys}{#g/alphysWelp}* Y-you know what, I'll just let you decide.",
            "<25>{#g/alphysSmileSweat}* If you want to go now, so be it!\n* Going later's fine too!",
            '<25>* Whatever \"powers your ship,\" am I right?',
            '<25>{#g/alphysTheFactIs}* Like, you know, how ships need certain fuel to...',
            '<25>{#g/alphysNeutralSweat}* A-and how you tend to be specific in how you...',
            '<26>{#g/alphysWelp}* Uh, you get what I mean.'
         ],
         endY3: ['<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* Well, see ya!'],
         end3: () => [
            '<32>{#e/mettaton/6}* 女士們，先生們...',
            SAVE.flag.b.legs
               ? "<33>{#e/mettaton/11}* 壓軸好戲，現在開始！"
               : '<32>{#e/mettaton/10}* 都準備好了嗎？！\n  壓軸好戲，即將開始！'
         ],
         end4: [
            '<32>{*}{#e/mettaton/11}* 高潮迭起！！\n* 扣人心弦！！\n* 腥風血雨！！{^20}{%}',
            '<32>{*}{#e/mettaton/20}* 盡在最新節目...{^20}{%}',
            '<32>{*}{#e/mettaton/17}* 「殺人機器來襲」！{^20}{%}'
         ],
         end5: () =>
            SAVE.data.b.killed_mettaton
               ? !world.badder_lizard
                  ? ['<25>{#p/alphys}{#g/alphysOhGodNo}* 我的天，你們倆還...']
                  : [
                     '<25>{#p/alphys}{#g/alphysWelp}* ...',
                     '<25>{#g/alphysInquisitive}* 你看我幹嘛？',
                     SAVE.data.n.bad_lizard === 1 && SAVE.data.b.bad_lizard
                        ? "<26>{#g/alphysCutscene3}* 我才離開..."
                        : "<25>{#g/alphysCutscene3}* 我只是來..."
                  ]
               : !world.badder_lizard
                  ? ['<25>{#p/alphys}{#g/alphysOhGodNo}* 我的天，你們倆還好嗎？']
                  : [
                     '<25>{#p/alphys}{#g/alphysWelp}* ...',
                     '<25>{#g/alphysInquisitive}* 你看我幹嘛？',
                     SAVE.data.n.bad_lizard === 1 && SAVE.data.b.bad_lizard
                        ? "<26>{#g/alphysCutscene3}* 我才離開一會工夫而已。"
                        : "<25>{#g/alphysCutscene3}* 我只是來看看Mettaton還好嗎。"
                  ],
         end6: () =>
            SAVE.data.b.killed_mettaton
               ? ["<25>{#p/alphys}{#f/10}* ...M-Mettaton在哪？", '<25>{#p/alphys}{#f/3}* 你-你把他給...']
               : !world.badder_lizard
                  ? [
                     '<25>{#p/alphys}{#g/alphysInquisitive}* 嗯... 還好你沒事...',
                     '<25>{#p/alphys}{#g/alphysWelp}* 對不起，剛剛失聯了。',
                     "<25>{#g/alphysWelp}* 不知為什麼，\n  電話到這裡就沒訊號了。"
                  ]
                  : [
                     '<25>{#g/alphysHaveSomeCompassion}* ...',
                     '<25>{#g/alphysHaveSomeCompassion}* 對了，呃... \n  現在跟我來下個房間。',
                     world.baddest_lizard
                        ? "<25>{#g/alphysNeutralSweat}* 我-我有事要告訴你。"
                        : "<25>{#g/alphysNeutralSweat}* 沒-沒事，你準備好\n  再跟過來就行。"
                  ],
         end7: () =>
            SAVE.data.b.killed_mettaton
               ? [
                  "<25>{#p/alphys}{#f/10}* 對-對不起。\n* 我該走了。",
                  "<25>{*}{#p/alphys}{#f/3}* 別-別跟著我！{%}"
               ]
               : [
                  "<25>{#p/alphys}{#g/alphysCutscene2}* 呃，別-別擔心Mettaton，\n  他只融合進了控制晶片。",
                  "<25>{#p/alphys}{#g/alphysCutscene2}* 所以我修好他的能量供應\n  就可以了。"
               ],
         end8: [
            '<25>{#p/alphys}{#g/alphysWelp}* 我先走了。',
            '<25>{#g/alphysNeutralSweat}* 不-不過，呃...\n* 你願意跟過來嗎？',
            '<25>{#g/alphysNervousLaugh}* 怪物們的未來... 需要...'
         ],
         end9: [
            "<25>{#p/alphys}{#g/alphysNervousLaugh}* 不-不過！\n* 你別著急，等你準備好了...",
            '<25>{#g/alphysNeutralSweat}* 再跟過來就行。',
            '<25>{#g/alphysSideSad}* ...',
            "<25>{#g/alphysNeutralSweat}* 對-對不起。\n* 我們別無選擇。"
         ],
         end10: () => [
            world.baddest_lizard
               ? "<32>{#p/mettaton}* 嗯...\n* 你最好現在跟她走，親。"
               : "<32>{#p/mettaton}* 別擔心，親。\n* 說不定，她只是想帶你去看\n  新一季的超讚科幻動漫呢。",
            '<32>* 至於我？',
            '<32>* ...\n* 等Alphys把我的晶片\n  裝回到舊身體之後...',
            SAVE.data.b.a_state_hapstablook
               ? '<32>* 我想回家看看親人。'
               : SAVE.data.n.state_starton_papyrus === 1
                  ? "<32>* 我還沒想好做什麼。"
                  : "<32>* 我要處理點事情。",
            ...(SAVE.data.b.oops
               ? []
               : [
                  '<32>* 喔，還有你，\n  $(name)...',
                  '<32>{#p/basic}* 怎麼了？',
                  '<32>{#p/mettaton}* ...也祝你家裡的事\n  能早日解決。',
                  '<32>{#p/basic}* 我家... 嗯。',
                  '<32>{#p/basic}* 會的。',
                  '<32>{#p/basic}* ...謝謝你，Mettaton。'
               ]),
            '<32>{#p/mettaton}* 那麼...',
            world.bad_lizard > 1
               ? '<32>* 有緣再見...\n* ...\n* ...小鬼。'
               : iFancyYourVilliany()
                  ? '<32>* 多謝捧場...\n* ...\n* ...$(moniker2)。'
                  : '<32>* 待會見...\n* ...\n* ...親。'
         ],
         end11: () => [
            '<32>{#p/human}* （你聽見一聲嘆息。）',
            '<32>{#p/basic}* ...我從Mettaton和家人的衝突\n  看到了自己的影子。',
            "<32>* 那些事...\n  並不全都是Blooky的錯。",
            '<32>* ...',
            "<32>* 現在，還是別想太多，\n  繼續前進吧...",
            '<32>* ...\n* 走吧，搭檔。',
            "<32>* 我們一起回家。"
         ],
         endwalk0: () => [
            ...(SAVE.data.b.water
               ? [
                  "<25>{#p/alphys}{#g/alphysFR}* Don't tell me you're bringing that thing all the way to the Citadel.",
                  world.badder_lizard ? '<25>{#g/alphysNeutralSweat}* ...' : '<25>{#g/alphysWelp}* ...'
               ]
               : []),
            world.badder_lizard
               ? '<25>{#p/alphys}{#g/alphysHaveSomeCompassion}* Follow me.'
               : '<25>{#p/alphys}{#g/alphysWelp}* This way.'
         ],
         endwalk1: () =>
            !world.badder_lizard
               ? [
                  '<25>{#p/alphys}{#g/alphysCutscene2}* So... Mettaton, huh?',
                  "<25>* Eheh... that was sure something, wasn't it?",
                  "<25>{#g/alphysSideSad}* I-I mean, I'd hoped his batteries would last longer, but...",
                  "<25>{#g/alphysUhButHeresTheDeal}* Well, i-it's just a tiny oversight, really.\n* Easily fixed!",
                  "<25>{#g/alphysWelp}* ... but that's not why you're here."
               ]
               : [
                  '<25>{#p/alphys}{#g/alphysNeutralSweat}* ... look, I...',
                  ...(world.alphys_percieved_kills < 10
                     ? [
                        "<25>{#g/alphysHaveSomeCompassion}* I'm sorry for running away like that.",
                        ...(SAVE.data.n.state_foundry_undyne === 0
                           ? ["<25>{#g/alphysSideSad}* It's just... after those deaths in Aerialis, I..."]
                           : world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
                              ? ["<25>{#g/alphysSideSad}* It's just... after Undyne's d-death, I..."]
                              : [
                                 "<25>{#g/alphysSideSad}* It's just... after Undyne's d-death, and...",
                                 '<25>{#g/alphysSideSad}* After those deaths in Aerialis, I...'
                              ]),
                        "<25>{#g/alphysThatSucks}* ... I didn't know what to do."
                     ]
                     : [
                        "<25>{#g/alphysHaveSomeCompassion}* I know you've killed a lot of people.",
                        ...(SAVE.data.n.kills_aerialis / 2 +
                           SAVE.data.n.corekills +
                           (SAVE.data.b.killed_knightknight ? 1 : 0) +
                           (SAVE.data.b.killed_madjick ? 1 : 0) >
                           2
                           ? [
                              "<25>{#g/alphysSideSad}* Even after I left the lab, I've s-still been watching you...",
                              '<25>{#g/alphysSideSad}* Through the staging area...\n* Through the CORE...'
                           ]
                           : [
                              "<25>{#g/alphysSideSad}* From the lab, I'd b-been watching you since you appeared...",
                              '<25>{#g/alphysSideSad}* Through Starton...\n* Through the Foundry...'
                           ]),
                        "<25>{#g/alphysNeutralSweat}* Didn't you ever stop to think about those monsters' lives?",
                        '<25>{#g/alphysThatSucks}* About what their... f-friends and family might think?',
                        ...(world.alphys_percieved_kills < 20
                           ? [
                              '<25>{#g/alphysNeutralSweat}* ...',
                              '<25>{#g/alphysNeutralSweat}* I know I could have done a better job escorting you, so...',
                              "<25>{#g/alphysHaveSomeCompassion}* Maybe I'm partly at fault for that."
                           ]
                           : [
                              "<25>{#g/alphysIDK3}* Because I've been thinking about it a lot.",
                              '<25>{#g/alphysHaveSomeCompassion}* I blamed myself for letting this happen, but...',
                              '<25>{#g/alphysIDK2}* Is it really my fault that you chose to kill all those people?'
                           ])
                     ])
               ],
         endwalk2: () =>
            !world.baddest_lizard
               ? [
                  ...(!world.badder_lizard
                     ? ["<25>{#p/alphys}{#g/alphysWelp}* Look, I'll just get to the point."]
                     : [
                        "<25>{#p/alphys}{#f/3}* But, uh, I don't really want to dwell on that right now, so...",
                        "<25>{#p/alphys}{#f/20}* ... I'll just get to the point."
                     ]),
                  "<25>{#g/alphysNeutralSweat}* There's... a reason I've been watching over you like this.",
                  '<25>* ...',
                  '<25>{#g/alphysFR}* To put it simply...',
                  "<25>{#g/alphysFR}* ASGORE's got a {@fill=#003cff}secret{@fill=#fff}."
               ]
               : [
                  ...(SAVE.data.n.state_foundry_undyne === 2
                     ? [
                        ...(world.alphys_percieved_kills < 10
                           ? ['<25>{#p/alphys}{#g/alphysIDK3}* ...']
                           : ['<25>{#p/alphys}{#g/alphysIDK3}* What hurts most of all, though, is... Undyne.']),
                        '<25>{#p/alphys}{#g/alphysIDK3}* If there was one monster who wanted us to go free...',
                        '<25>{#p/alphys}{#g/alphysIDK2}* More than anyone else, it was her.',
                        '<25>{#p/alphys}{#g/alphysSideSad}* She stood for freedom, and for justice...',
                        ...(world.alphys_percieved_kills < 10
                           ? [
                              '<25>{#p/alphys}{#g/alphysSmileSweat}* And maybe she was a little harsh towards you...',
                              '<25>{#p/alphys}{#g/alphysNeutralSweat}* ... but...'
                           ]
                           : [
                              "<25>{#p/alphys}{#g/alphysNeutralSweat}* And it's like you didn't even care.",
                              '<25>{#p/alphys}{#g/alphysNeutralSweat}* ...'
                           ]),
                        '<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* She was my hero.',
                        '<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* A person I... looked up to.',
                        '<25>{#p/alphys}{#g/alphysNeutralSweat}* A person who gave me hope.',
                        '<25>{#p/alphys}{#g/alphysThatSucks}* ... but to see her be killed so easily, it was like...',
                        '<25>{#p/alphys}{#g/alphysIDK2}* ... like watching that hope be torn away.',
                        '<25>{#p/alphys}{#g/alphysIDK2}* Ripped to pieces.',
                        '<25>{#p/alphys}{#g/alphysIDK3}* Gone forever.',
                        "<25>{#p/alphys}{#g/alphysIDK3}* And you're the one who made that happen.",
                        '<25>{#p/alphys}{#g/alphysIDK2}* ...'
                     ]
                     : ['<25>{#p/alphys}{#g/alphysThatSucks}* ...']),
                  "<25>* In any case, there's... nothing else I can do.",
                  "<25>{#p/alphys}{#g/alphysNeutralSweat}* What happens now isn't up to me anymore."
               ],
         endwalk3: () =>
            !world.baddest_lizard
               ? [
                  "<25>{#p/alphys}{#g/alphysSideSad}* I... can't say much about it now, but...",
                  '<25>{#g/alphysNeutralSweat}* As royal scientist, my duty is to escort you safely to the king.',
                  "<26>{#g/alphysWorried}* If anyone f-found out, they'd think we're against our own freedom.",
                  "<25>{#g/alphysHaveSomeCompassion}* ...\n* We're just trying to do the right thing."
               ]
               : world.alphys_percieved_kills < 10
                  ? [
                     "<25>{#p/alphys}{#g/alphysIDK2}* ... not that I'm complaining or anything.",
                     "<25>{#p/alphys}{#g/alphysIDK3}* I wasn't fit to escort you anyway."
                  ]
                  : world.alphys_percieved_kills < 20 || SAVE.data.n.state_foundry_undyne !== 2
                     ? [
                        "<25>{#p/alphys}{#g/alphysNeutralSweat}* ... not that I'm complaining or anything.",
                        "<25>{#p/alphys}{#g/alphysNeutralSweat}* I don't really want to be around you."
                     ]
                     : [
                        "<25>{#p/alphys}{#g/alphysYeahYouKnowWhatsUpCenter}* ... you're lucky, you know.",
                        "<26>{#p/alphys}{#g/alphysYeahYouKnowWhatsUp}* If it wasn't my job to protect you, I'd kill you myself."
                     ],
         endwalk4: () =>
            !world.baddest_lizard
               ? [
                  "<25>{#p/alphys}{#g/alphysWelp}* ... you go on ahead.\n* I'll try not to get too far behind.",
                  "<25>{#g/alphysSide}* Everything's gonna be fine, alright?",
                  ...(world.postnoot
                     ? world.nootflags.has('undyne') // NO-TRANSLATE

                        ? ['<25>{#g/alphysWelp}* ... despite the malfunctioning atmospheric system.']
                        : ["<25>{#g/alphysInquisitive}* ... even if there's something strange in the air..."]
                     : [])
               ]
               : [
                  '<25>{#p/alphys}{#g/alphysThatSucks}* ... go.\n* Do whatever ASGORE wants you to do.',
                  "<25>{#g/alphysNeutralSweat}* You're not my problem anymore.",
                  ...(world.postnoot
                     ? world.nootflags.has('undyne') // NO-TRANSLATE

                        ? ['<25>{#g/alphysFR}* ... the atmospheric system, though...']
                        : ["<25>{#g/alphysFR}* ... whatever's in the air, though..."]
                     : [])
               ]
      },
      overworld: {
         DINNERTIME: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (You bend over and look at the table from the side.)\n* (It's flatter than it seems.)",
                  ...[
                     [
                        "<26>{#p/asriel1}{#f/20}* Yeah.\n* There aren't actually any dishes here...",
                        '<26>{#f/15}* Mettaton, uh, had some plans for this room.'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* If I remember correctly... he wanted to host a sitcom here.',
                        '<25>{#f/15}* About dinner parties.',
                        "<25>{#f/16}* ... it would've been just as boring as it sounds."
                     ],
                     [
                        "<26>{#p/asriel1}{#f/17}* Fortunately, most monster food doesn't need real dishes to eat.",
                        '<25>{#f/20}* When they do, the dishes are usually part of the food...',
                        "<25>{#f/17}* But I guess you'd be used to that by now."
                     ],
                     ['<25>{#p/asriel1}{#f/4}* Just be glad that awful show never happened.']
                  ][Math.min(asrielinter.dinnertime++, 3)]
               ]
               : ["<32>{#p/basic}* 一張桌子。\n* 餐盤和刀叉只是印在桌布上的圖案。"],
         doublefridge1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You place your ear against the fridge door.)\n* (A fizzing can be heard.)']
               : ["<32>{#p/basic}* 這是個高度安全的冰箱。\n* 兩邊都裝滿了橙汁汽水。"],
         doublefridge2: () => [
            ...(SAVE.data.b.svr
               ? ['<32>{#p/human}* (It sounds like one of the bottles inside was opened...)']
               : ['<32>{#p/basic}* 其中一個瓶子\n  已經打開了...']),
            choicer.create('* (Take the opened bottle?)', '是', '否')
         ],
         doublefridge3: ["<32>{#p/human}* （你帶的東西太多了。）"],
         doublefridge4: ['<32>{#p/human}* （你拿了一瓶橙汁汽水。）'],
         doublefridge5: ['<32>{#p/human}* （你不打算這麼做。）'],
         labcamera2: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The display appears to be completely offline.)']
                  : SAVE.data.n.plot === 72
                     ? world.darker
                        ? ["<32>{#p/basic}* It's offline."]
                        : ['<32>{#p/basic}* Anonymity at last.']
                     : ["<32>{#p/basic}* 也許最好不要質疑\n  這是如何運作的。"],
         labdisplay: '-人類實時數據-\nEXP　$(x)\nHP 　$(y)\n金錢 $(z)\n距離 $(w)',
         exofountain1: () => [
            SAVE.data.b.svr
               ? '<32>{#p/human}* （看著噴泉中的果酒，\n  你禁不住想抿一口。）'
               : '<32>{#p/basic}* 這座奢侈的噴泉\n  盛滿了洋梅果酒。',
            choicer.create('* （抿一口嗎？）', '是', '否')
         ],
         exofountain2a: ['<32>{#p/human}* （你打算不這麼做。）'],
         exofountain2b: () => [
            '<32>{#p/human}* （你抿了一口噴泉中的果酒。）\n* （HP已回滿。）',
            ...(world.genocide && SAVE.flag.n.ga_asrielDrink++ < 1
               ? ['<25>{#p/asriel2}{#f/15}* 你腦子沒壞吧。']
               : [])
         ],
         kneeler: [
            "<32>{#p/human}* （你檢查著Asriel的腦袋，\n  防止等會摔下來。）",
            '<25>{#p/asriel2}{#f/16}* 為啥非得這樣。'
         ],
         kneeler2: ['<25>{#p/asriel2}{#f/8}* 真沒必要。'],
         topdesk1: () =>
            SAVE.data.b.svr || world.bad_lizard > 1 || world.genocide || SAVE.data.n.state_foundry_undyne === 2
               ? ["<32>{#p/human}* （屏幕上的圖像令你嘆為觀止。）\n* （你不會在做白日夢吧。）"]
               : [
                  '<32>{#p/basic}* 電腦正在待機。\n* 要打開嗎？',
                  choicer.create('* (Turn on the computer?)', '是', '否')
               ],
         topdesk2: ['<32>{#p/human}* （你打算不把電腦打開。）'],
         topdesk3: ["<32>{#p/basic}* 電腦打開了某種\n  電子遊戲的模擬器。"],
         labstationA: ["<32>{#p/basic}* 電腦打開了一個\n  天文觀測網路的控制面板。"],
         labstationB: ["<32>{#p/basic}* 電腦打開了一套\n  全息環境的設計方案。"],
         laserbarrrier1: () =>
            world.darker
               ? ["<32>{#p/basic}* 一道安保屏障。"]
               : ["<32>{#p/basic}* As per the crafter's guild standard, an impassable force field surrounds the area."],
         
         laserbarrrier2: pager.create(
            0,
            ['<32>{#p/basic}* 現在只有唯一的出路。'],
            ["<32>{#p/basic}* 這沒什麼特別的。"],
            ['<32>{#p/basic}* ...'],
            ['<32>{#p/basic}* ...'],
            ['<32>{#p/basic}* 真的。'],
            ['<32>{#p/basic}* ...'],
            ['<32>{#p/basic}* ...'],
            ["<32>{#p/basic}* 你就沒有更明智的事可做嗎？"]
         ),
         barricade: ['<32>{#p/basic}* The barricade blocks your way.'],
         puzzle1done: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stare into the blank screen of the terminal.)']
               : ["<32>{#p/basic}* 沒有反應。"],
         lablizard: {
            a: pager.create(
               0,
               () =>
                  SAVE.data.n.plot < 51
                     ? [
                        '<25>{#p/alphys}{#g/alphysSideSad}* 關於Mettaton的事，\n  我很抱歉...',
                        '<25>{#g/alphysSideSad}* 他，呃...',
                        '<25>{#g/alphysNervousLaugh}* 他有時會有點躁動，\n  呃呵呵。'
                     ]
                     : SAVE.data.n.plot < 52
                        ? [
                           "<25>{#p/alphys}{#g/alphysCutscene2}* Thank GOD those guards didn't attack you.",
                           "<25>{#g/alphysNeutralSweat}* I've been trying to put out a royal memo to get them off your back...",
                           '<25>{#g/alphysWelp}* Hopefully it, uh, actually r-reached them.'
                        ]
                        : SAVE.data.n.plot < 54
                           ? [
                              "<25>{#p/alphys}{#g/alphysInquisitive}* L-look, I don't know the answers in here any more than out there...",
                              "<25>{#g/alphysSmileSweat}* I'll call you when you get back to the barricades."
                           ]
                           : SAVE.data.n.plot < 56
                              ? [
                                 "<25>{#p/alphys}{#g/alphysSideSad}* The p-puzzles in Aerialis haven't been upgraded yet...",
                                 "<25>{#g/alphysWelp}* It's just so hard to find the time when I'm this busy with my work."
                              ]
                              : SAVE.data.n.plot < 58
                                 ? [
                                    '<25>{#p/alphys}{#g/alphysCutscene1}* I have a habit of forgetting to turn off m-my experiments.',
                                    "<25>{#g/alphysCutscene2}* For a second there, I thought that habit might've saved you!",
                                    '<25>{#g/alphysUhButHeresTheDeal}* But, uh, I guess Mettaton had a backup plan.'
                                 ]
                                 : SAVE.data.n.plot < 59
                                    ? [
                                       '<25>{#p/alphys}{#g/alphysWelp}* Don\'t tell me.\n* Sans is selling his weird \"hotdogs\" again.',
                                       "<25>{#g/alphysCutscene2}* Yeah, that's like... a thing he does.\n* It's perfectly normal."
                                    ]
                                    : SAVE.data.n.plot < 60
                                       ? [
                                          "<25>{#p/alphys}{#g/alphysCutscene2}* I think Mettaton's getting ready for another show.",
                                          "<25>{#g/alphysTheFactIs}* I'd... be c-careful if I were you..."
                                       ]
                                       : SAVE.data.n.plot < 61
                                          ? SAVE.data.b.a_state_moneyitemC
                                             ? ['<25>{#p/alphys}{#g/alphysFR}* ...', '<25>{#g/alphysFR}* I know what you did.']
                                             : [
                                                '<25>{#p/alphys}{#g/alphysCutscene3}* ...',
                                                '<25>* Mettaton is becoming more and more reckless by the day.'
                                             ]
                                          : SAVE.data.n.plot < 66.1
                                             ? [
                                                '<25>{#p/alphys}{#g/alphysCutscene3}* ...',
                                                "<25>{#g/alphysCutscene1}* Isn't it amazing when royal guards don't follow my orders!"
                                             ]
                                             : SAVE.data.n.plot < 67.1
                                                ? ["<25>{#p/alphys}{#g/alphysWelp}* At this rate, you're never getting through the CORE."]
                                                : [
                                                   "<25>{#p/alphys}{#g/alphysCutscene2}* Yeah, I'm... s-still here and all.",
                                                   '<25>{#g/alphysWelp}* Not that I have much left to do.'
                                                ],
               () =>
                  SAVE.data.n.plot < 51
                     ? [
                        "<26>{#p/alphys}{#g/alphysWelp}* 不過這也不能怪他。",
                        "<25>{#g/alphysWelp}* 他是你在這裡見過的\n  最熱愛人類的傢伙。"
                     ]
                     : SAVE.data.n.plot < 52
                        ? ['<25>{#p/alphys}{#g/alphysCutscene3}* You never know these days...']
                        : SAVE.data.n.plot < 54
                           ? [
                              '<25>{#p/alphys}{#g/alphysWelp}* I guess if things really go wrong, I can just override them.',
                              "<25>{#g/alphysNeutralSweat}* B-but that'd put them out of action for a while."
                           ]
                           : SAVE.data.n.plot < 56
                              ? ["<25>{#p/alphys}{#g/alphysWelp}* You wouldn't believe how long I've been stuck on this level."]
                              : SAVE.data.n.plot < 58
                                 ? SAVE.data.n.state_aerialis_crafterresult === 0
                                    ? ['<25>{#p/alphys}{#g/alphysNeutralSweat}* Shame you never checked your new phone...']
                                    : ['<25>{#p/alphys}{#g/alphysCutscene2}* Not gonna lie, seeing you use that jetpack was great.']
                                 : SAVE.data.n.plot < 59
                                    ? ['<25>{#p/alphys}{#g/alphysFR}* ...', '<25>{#g/alphysFR}* Perfectly normal.']
                                    : SAVE.data.n.plot < 60
                                       ? ["<25>{#p/alphys}{#g/alphysWelp}* Who knows what kind of antics he'll pull."]
                                       : SAVE.data.n.plot < 61
                                          ? SAVE.data.b.a_state_moneyitemC
                                             ? ['<25>{#p/alphys}{#g/alphysFR}* ...']
                                             : ['<25>{#p/alphys}{#g/alphysCutscene3}* ...']
                                          : SAVE.data.n.plot < 67.1
                                             ? ['<25>{#p/alphys}{#g/alphysFR}* It\'s called \"sarcasm.\"']
                                             : ['<25>{#p/alphys}{#g/alphysCutscene3}* Mettaton must be waiting so patiently right now.']
            )
         },
         mettacrafter1a: ['<32>{#p/mettaton}* 機不可失！'],
         mettacrafter1b: ["<32>{#p/mettaton}* 我認為你還漏了點什麼。"],
         mettacrafter1c: ["<32>{#p/mettaton}* I THINK YOU'RE STILL MISSING SOMETHING."],
         mettacrafter2a: ['<32>{#p/mettaton}* 幹得好！\n* 把所有東西放上我左邊的操作臺。'],
         mettacrafter2b: ['<32>{#p/mettaton}* NICE WORK!\n* NOW PLACE THE REST ON THE COUNTER TO MY LEFT.'],
         mettacrafter2c: ['<32>{#p/mettaton}* NICE WORK!\n* NOW PLACE THE LAST ITEM ON THE COUNTER TO MY LEFT.'],
         platformDeny: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : [
                  "<32>{#p/basic}* 你需要一張特殊通行證\n  才能進入升降門網路。",
                  ...(world.goatbro
                     ? SAVE.data.n.plot < 49
                        ? !SAVE.flag.b.asriel_phone && SAVE.flag.n.ga_asrielGate++ < 1
                           ? [
                              "<25>{#p/asriel2}{#f/3}* Alphys的實驗室裡\n  肯定有通行證。\n* 我們先進去找找。"
                           ]
                           : [] 
                        : SAVE.flag.b.asriel_phone
                           ? 
                           SAVE.flag.n.ga_asrielGetThePhone > 0
                              ? 
                              SAVE.flag.n.ga_asrielGetThePhone2++ < 1
                                 ? [
                                    "<25>{#p/asriel2}{#f/6}* Seriously, $(name)?\n* You know where Alphys's spare cell phone is.",
                                    '<25>{#p/asriel2}{#f/7}* Go back to her desk and grab it.'
                                 ]
                                 : 
                                 []
                              : 
                              SAVE.flag.n.ga_asrielGetThePhone2++ < 1
                                 ? [
                                    "<25>{#p/asriel2}{#f/3}* Remember, we need that cell phone from Alphys's lab.",
                                    "<25>{#p/asriel2}{#f/4}* I'm pretty sure it was on her desk..."
                                 ]
                                 : 
                                 ["<25>{#p/asriel2}{#f/3}* Remember, the cell phone from Alphys's lab."]
                           : 
                           [
                              [
                                 '<25>{#p/asriel2}{#f/3}* Alphys usually keeps liftgate passes on her cell phones.',
                                 '<25>* I think I saw one back in the lab.\n* Go get it.'
                              ],
                              [
                                 "<25>{#p/asriel2}{#f/7}* $(name), we can't make progress without that pass.",
                                 '<25>{#f/6}* Find it.'
                              ],
                              ['<25>{#p/asriel2}{#f/13}* Uh... $(name)?'],
                              ['<25>{#p/asriel2}{#f/13}* ...']
                           ][Math.min(SAVE.flag.n.ga_asrielGetThePhone++, 3)]
                     : world.bad_lizard > 1 && 49 <= SAVE.data.n.plot
                        ? ["<32>* Wasn't there a spare cell phone on Alphys's desk?"]
                        : SAVE.data.n.bad_lizard < 2 && SAVE.data.n.state_foundry_undyne === 1 && 49 <= SAVE.data.n.plot
                           ? ["<32>* ... maybe there'd be one in the lab somewhere?"]
                           : [])
               ],
         lift: {
            elevatorStory1: () =>
               SAVE.data.n.plot < 64
                  ? [choicer.create('* （你想去哪裡？）', '右二層', '取消')]
                  : [choicer.create('* （你想去哪裡？）', '右二層', '左二層', '左三層', '取消')],
            elevatorStory2: () =>
               SAVE.data.n.plot < 64
                  ? [choicer.create('* （你想去哪裡？）', '右一層', '取消')]
                  : [choicer.create('* （你想去哪裡？）', '右一層', '左二層', '左三層', '取消')],
            elevatorStory3: () => [
               choicer.create('* （你想去哪裡？）', '左三層', '右一層', '右二層', '取消')
            ],
            elevatorStory4: () => [
               choicer.create('* （你想去哪裡？）', '左二層', '右一層', '右二層', '取消')
            ],
            elevatorStory5: () => [
               "<32>{#p/basic}* 動力已關閉。",
               ...(world.goatbro && SAVE.flag.n.ga_asrielLiftE++ < 1
                  ? ["<25>{#p/asriel2}{#f/8}* Guess there's only one way forward now."]
                  : [])
            ],
            elevatorStory6: (citadel = false) =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The elevator appears to be powered down.)']
                  : postSIGMA()
                     ? ["<32>{#p/basic}* 停機了。"]
                     : [
                        "<32>{#p/basic}* 動力已關閉。",
                        ...(world.goatbro && (citadel ? SAVE.flag.n.ga_asrielLiftC++ : SAVE.flag.n.ga_asrielLift++) < 1
                           ? citadel
                              ? ['<25>{#p/asriel2}{#f/8}* 咱們沒電梯好乘嘍。']
                              : ["<25>{#p/asriel2}{#f/8}* 只能換條路走了。"]
                           : [])
                     ],
            elevator1: () => [
               '<32>{#p/human}* （你想去哪裡？）',
               choicer.create('', '左一層', '取消', '左二層', '右二層', '左三層', '右三層')
            ],
            elevator2: () => [
               '<32>{#p/human}* （你想去哪裡？）',
               choicer.create('', '左一層', '右一層', '左二層', '取消', '左三層', '右三層')
            ],
            elevator3: () => [
               '<32>{#p/human}* （你想去哪裡？）',
               choicer.create('', '左一層', '右一層', '取消', '右二層', '左三層', '右三層')
            ],
            elevator4: () => [
               '<32>{#p/human}* （你想去哪裡？）',
               choicer.create('', '左一層', '右一層', '左二層', '右二層', '取消', '右三層')
            ],
            elevator5: () => [
               '<32>{#p/human}* （你想去哪裡？）',
               choicer.create('', '左一層', '右一層', '左二層', '右二層', '左三層', '取消')
            ],
            elevator6: () => [
               '<32>{#p/human}* （你想去哪裡？）',
               choicer.create('', '取消', '右一層', '左二層', '右二層', '左三層', '右三層')
            ]
         },
         terminal1: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The terminal appears to have been powered off.)']
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/human}* (You activate the terminal and read the info logs.)',
                        '<32>{#p/basic}* 「工作日誌，克歷615年9月」',
                        '<32>* \"Automated data analysis confirms several sudden shifts in the positions of stars.\"',
                        '<32>* \"Conclusion... the logical flow of time within the force field was disrupted.\"',
                        '<32>* \"Estimated time differential places real date at roughly K-625.09, ten orbits later.\"'
                     ]
                     : [
                        '<32>{#p/human}* (You activate the terminal and read the info logs.)',
                        '<32>{#p/basic}* \"Activity log, K-615.08\"',
                        '<32>* \"The subject was left unattended for a short time.\"',
                        '<32>* \"...\"',
                        '<32>* 「那花不見了。」',
                        ...(world.goatbro && SAVE.flag.n.ga_asrielTerminal1++ < 1
                           ? ['<25>{#p/asriel2}{#f/9}* 哎呀，真好奇發生什麼了呢。']
                           : [])
                     ],
         terminal2: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The terminal appears to have been powered off.)']
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                        '<32>{#p/basic}* \"The Royal Lab is closed!\"\n* \"Thank you everyone for your hard work and dedication.\"'
                     ]
                     : world.bad_lizard < 2
                        ? [
                           '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                           '<#32>{#p/basic}* 「呀哈哈，Glyde在這！」\n  - Glyde'
                        ]
                        : [
                           '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                           '<32>{#p/basic}* 「各位，我很抱歉...」'
                        ],
         terminal3: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The terminal appears to have been powered off.)']
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                        '<32>{#p/basic}* \"The Royal Lab is closed!\"\n* \"Thank you everyone for your hard work and dedication.\"'
                     ]
                     : [
                        '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                        '<32>{#p/basic}* \"Dear employees of the Royal Lab, please place waste in the appropriate receptacles.\"'
                     ],
         terminal4: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The terminal appears to have been powered off.)']
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                        '<32>{#p/basic}* \"The Royal Lab is closed!\"\n* \"Thank you everyone for your hard work and dedication.\"'
                     ]
                     : [
                        '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                        ...(world.bad_lizard > 1 || world.genocide
                           ? ['<32>{#p/basic}* \"The Royal Lab is no longer safe. Evacuation procedure in effect.\"']
                           : ['<32>{#p/basic}* 「歡迎來到皇家實驗室。」'])
                     ],
         terminal5: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The terminal appears to have been powered off.)']
                  : [
                     '<32>{#p/human}* （你激活了終端，\n  閱讀了上面的訊息。）',
                     ...(world.bad_lizard < 2 && SAVE.data.n.plot < 72
                        ? [
                           [
                              '<32>{#p/basic}* Tower two, clocking out.',
                              "<32>* We'll be at the rec center...",
                              "<32>* ... won't we, girl?"
                           ],
                           [
                              '<32>{#p/basic}* Tower two, reporting in.',
                              "<32>* We've spotted the human heading towards the elevator.",
                              '<32>* Sorry, Alphys...',
                              "<32>* ... we didn't train to capture humans all this time just to protect them."
                           ]
                        ][SAVE.data.n.state_aerialis_royalguards]
                        : ['<32>{#p/basic}* 「暫無數據。」'])
                  ],
         recycler: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't make out what's in the recycle bin...)"]
               : ["<32>{#p/basic}* 一個資源回收桶。"],
         recyclerX: ['<32>{#p/human}* （你丟掉了電阻尼液。）'],
         ingredient1: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/human}* (You found the happy powder.)']
               : ['<32>{#p/human}* （你找到了環三亞甲基三硝胺。）'],
         ingredient2: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/human}* (You found the tingle serum.)']
               : ['<32>{#p/human}* （你找到了己二酸二正辛酯。）'],
         ingredient3: () =>
            iFancyYourVilliany()
               ? ['<32>{#p/human}* (You found the love oil.)']
               : ['<32>{#p/human}* （你找到了礦物油。）'],
         boop: () =>
            [
               ['<25>{#p/asriel2}{#f/13}* $(name), uh...', '<25>{#p/asriel2}{#f/18}* What are you doing...?'],
               ['<25>{#p/asriel2}{#f/18}* Wh-\n* $(name)!', '<25>{#p/asriel2}{#f/18}* Did you just... poke my snout?'],
               ['<25>{#p/asriel2}{#f/18}* Ah-\n* Stop that!'],
               ['<25>{#p/asriel2}{#f/18}* Cut it out!'],
               ['<25>{#p/asriel2}{#f/13}* ... $(name)?'],
               ['<25>{#p/asriel2}{#f/15}* $(name)。'],
               ['<25>{#p/asriel2}{#f/13}* Are you okay, $(name)?'],
               ["<25>{#p/asriel2}{#f/16}* ... I'll wait."],
               ['<25>{#p/asriel2}{#f/15}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielBoop++, 8)],
         nuzzle: () =>
            [
               ['<25>{#p/asriel1}{#f/13}* Frisk...？', '<25>{#p/asriel1}{#f/17}* Personal space...'],
               ['<25>{#p/asriel1}{#f/18}* Wh-\n* Frisk!', '<25>{#p/asriel1}{#f/18}* Did you just... nuzzle my snout?'],
               ['<25>{#p/asriel1}{#f/18}* Ah-\n* That tickles, Frisk!'],
               ['<25>{#p/asriel1}{#f/18}* Friiisk！'],
               ['<25>{#p/asriel1}{#f/17}* ... Frisk...\n* ... have mercy...'],
               ["<25>{#p/asriel1}{#f/20}* ... you're too sweet, Frisk."],
               ['<25>{#p/asriel1}{#f/13}* Uh, Frisk, you can stop that now.'],
               ["<25>{#p/asriel1}{#f/16}* I guess there's nothing I can do about this."],
               ['<25>{#p/asriel1}{#f/15}* ...']
            ][Math.min(SAVE.data.n.svr_nuz++, 8)]
      },
      trivia: {
         a_bbox: ["<32>{#p/basic}* A bastion box.\n* There's a human inside..."],
         a_wishflower: pager.create(
            0,
            (power = false) =>
               SAVE.data.b.svr
                  ? [
                     "<32>{#p/human}* (You take in the wish flower's aura.)",
                     power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                  ]
                  : ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'],
            pager.create(
               2,
               (power = false) =>
                  SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (You take in the wish flower's aura.)",
                        power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                     ]
                     : world.darker
                        ? ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
                        : ['<32>{#p/basic}* 一叢年代久遠的蒲公罌而已。', power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'],
               (power = false) =>
                  SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (You take in the wish flower's aura.)",
                        power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                     ]
                     : world.darker
                        ? ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
                        : [
                           '<32>{#p/basic}* 這朵蒲公罌的最大粟求\n  便是繼續保持著蒲公罌的樣子。',
                           power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                        ],
               (power = false) =>
                  SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (You take in the wish flower's aura.)",
                        power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                     ]
                     : world.darker
                        ? ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
                        : ['<32>{#p/basic}* 毫無罌姿的蒲公罌。', power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'],
               (power = false) =>
                  SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (You take in the wish flower's aura.)",
                        power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                     ]
                     : world.darker
                        ? ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
                        : [
                           "<33>{#p/basic}* 向蒲公罌粟求。\n* 等下，聽起來有點不對勁。",
                           power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                        ],
               (power = false) =>
                  SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (You take in the wish flower's aura.)",
                        power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                     ]
                     : world.darker
                        ? ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
                        : [
                           '<32>{#p/basic}* 一朵蒲公罌能回罌\n  多少簡蒲的粟求呢？',
                           power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                        ],
               (power = false) =>
                  SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (You take in the wish flower's aura.)",
                        power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                     ]
                     : world.darker
                        ? ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
                        : ['<32>{#p/basic}* 一朵蒲公罌...\n  裡面載滿著粟求。', power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'],
               (power = false) =>
                  SAVE.data.b.svr
                     ? [
                        "<32>{#p/human}* (You take in the wish flower's aura.)",
                        power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}'
                     ]
                     : world.darker
                        ? ["<32>{#p/basic}* 一朵蒲公罌。", power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
                        : ['<32>{#p/basic}* 又是一朵蒲公罌。', power ? '{*}{#d.sysx}{%}' : '{*}{#d.sys}{%}']
            )
         ),
         signposter1: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (You glance at the poster.)',
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/7}* This really was a new low for Mettaton's ad department.",
                        '<26>{#f/15}* I mean, you could have at least given credit...',
                        '<26>{#f/20}* For the most obvious sci-fi anime inspiration of all time.'
                     ],
                     [
                        "<25>{#p/asriel1}{#f/13}* It's based on a scene from season two, episode seventeen.",
                        '<25>{#f/13}* Called \"Mew Mew\'s all- in-one kitchen.\"',
                        "<25>{#f/15}* ... let's just say the species she encountered that day...",
                        '<25>{#f/15}* ... had an unhealthy obsession with kitchen appliances.'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/10}* What?\n* I lived a hundred years worth of lifetimes.',
                        8 <= SAVE.flag.n.ga_asrielMonologue
                           ? "<25>{#f/16}* We've been over this before, Frisk.\n* Come on."
                           : '<25>{#f/10}* You think I just sat around doing nothing when I got bored?'
                     ],
                     [
                        8 <= SAVE.flag.n.ga_asrielMonologue
                           ? '<25>{#p/asriel1}{#f/13}* You should know me by now.'
                           : '<25>{#p/asriel1}{#f/16}* ... you WOULD think about it like that...'
                     ]
                  ][Math.min(asrielinter.signposter1++, 3)]
               ]
               : world.darker
                  ? ['<33>{#p/basic}* 只是張無意義的廣告。']
                  : [
                     "<32>{#p/basic}* It's an advertisement for a fancy MTT-brand stove...",
                     SAVE.data.n.plot === 72
                        ? '<32>{#p/basic}* A great appliance, for life on any homeworld.'
                        : '<32>{#p/basic}* How delightfully over the top.'
                  ],
         signposter2: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (You glance at the poster.)',
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/17}* Hey look, it's you.",
                        '<25>{#f/13}* And Mettaton.',
                        '<25>{#f/17}* Kind of cute, honestly.'
                     ],
                     SAVE.flag.b.asriel_earpull
                        ? [
                           "<25>{#p/asriel1}{#f/13}* I'll admit, I never understood why you...",
                           '<25>{#f/15}* Uh, did what you did when we went through here.',
                           '<25>{#f/17}* I guess that was your way of saying...',
                           '<25>{#f/13}* ... you wanted to be friends?'
                        ]
                        : [
                           "<25>{#p/asriel1}{#f/17}* I'll admit, I got a kick out of watching you do this show.",
                           '<25>{#f/15}* The way you just stood completely still...\n* Doing nothing...',
                           "<25>{#f/13}* It was very weird.\n* But you're very weird in general.",
                           '<25>{#f/13}* Like me, I guess.'
                        ],
                     SAVE.flag.b.asriel_earpull
                        ? [
                           '<25>{#p/asriel1}{#f/17}* ... thanks, Frisk.',
                           '<25>{#f/23}* For trying so hard to be my friend.'
                        ]
                        : [
                           "<25>{#p/asriel1}{#f/2}* From now on, we'll have to call ourselves...",
                           '<25>{#f/1}* \"The Proud Weirdo Collective.\"',
                           '<25>{#f/15}* Actually, that sounded better in my head.\n* Never mind.'
                        ],
                     ['<25>{#p/asriel1}{#f/20}* You really like this poster, huh?']
                  ][Math.min(asrielinter.signposter2++, 3)]
               ]
               : world.darker
                  ? ['<33>{#p/basic}* 只是張無意義的廣告。']
                  : SAVE.data.n.plot < 65
                     ? [
                        "<32>{#p/basic}* It's an advertisement for an upcoming show...",
                        iFancyYourVilliany()
                           ? "<32>{#p/basic}* Naturally, you're the villain."
                           : "<32>{#p/basic}* Naturally, you're the star."
                     ]
                     : [
                        "<32>{#p/basic}* It's an advertisement for an already-aired show...",
                        SAVE.data.n.plot === 72
                           ? '<32>{#p/basic}* We can only hope a new homeworld brings new entertainment.'
                           : '<32>{#p/basic}* Naturally, you were great.'
                     ],
         powerline: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You touch the power node.)\n* (It feels tingly.)']
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* It's a power node... that's mostly been powered down."]
                  : ["<32>{#p/basic}* 這是個電源節點。"],
         a_virt: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (It appears the terminal is beyond your access level.)']
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* It's a virtualasium.\n* Maybe one day you'll have the access level required."]
                  : ["<32>{#p/basic}* 這是個虛擬空間。\n* 你沒有訪問所需的權限。"],
         metposter: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You look closely at the promotional poster.)']
               : SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}* 這是Mettaton首映的宣傳海報。",
                     '<32>* A signed note has been scrawled out and replaced with a correction...',
                     '<32>* \"I\'m sorry I\'ve been such a burden to you.\"'
                  ]
                  : [
                     "<32>{#p/basic}* 這是Mettaton首映的宣傳海報。",
                     "<32>* 雖然難以辨認，\n  但上面有張Mettaton的\n  籤名便條...",
                     '<32>* 「謝謝你讓我的夢想成真。」'
                  ],
         bedbox: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You shrug at the sight of such an ordinary box.)']
               : world.darker
                  ? ['<32>{#p/basic}* 一個不起眼的盒子。']
                  : SAVE.data.n.plot === 72
                     ? [
                        "<32>{#p/basic}* To be honest, this isn't actually a non-euclidian housing unit.",
                        "<32>* It's a non-euclidian box-life mansion deluxe!"
                     ]
                     : [
                        '<32>{#p/basic}* 這個看似普通的盒子\n  是一個最先進的\n  非歐住房單元。',
                        "<33>* ...外面比裡面看起來小。"
                     ],
         a_lab_books1: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of various unrelated contents.)']
                  : [
                     "<32>{#p/basic}* 這是個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「怪物的身體是\n   自身靈魂的反映。」',
                     '<32>* 「通常，父母會決定\n   他們的孩子會成為\n   什麼樣的怪物...」',
                     '<32>* 「把他們的意志烙印在\n   孩子的靈魂深處。」',
                     '<32>* 「但如果另一個生物，比如一個\n   人類，吸收了一個靈魂，\n   會發生什麼呢？」',
                     '<32>* \"Legends speak of humans who absorbed the SOULs of dead boss monsters in the war...\"',
                     '<32>* 「在一處特別的記載中，\n   據說有個人類變成了\n   一架飛機的形態。」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of various unrelated contents.)']
                  : [
                     "<32>{#p/basic}* 這是個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* \"So you wanna design a robot, huh? Well, Fabulous Faraday\'s got you covered!\"',
                     '<32>* \"You see, here on Earth, we like to do things with a dash of flavor.\"',
                     '<32>* \"You can\'t just build a metal box and call it a day, you catch my drift?\"',
                     '<32>* \"You\'ve got to give it style, features dazzling and dynamic, like wheels and dials!\"',
                     '<32>* \"And, for maximum razz, do something creative with its mobility!\"',
                     '<32>* \"Like, I dunno, a unicycle?\"\n* \"Yeah, something like that.\"',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of various unrelated contents.)']
                  : [
                     "<32>{#p/basic}* 這是個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>* \"Unfortunately, monsters do not deal with illness very well.\"',
                     '<32>* \"When a monsters\' death is imminent, they lie down, immobile.\"',
                     '<32>* \"We call this state \'Fallen Down.\'\"',
                     '<32>* \"During the war, this confusing situation was all too familiar...\"',
                     '<32>* \"Death, in those times, was sadly unavoidable.\"',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ]
         ),
         paperbook: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The book details a somewhat unrealistic story involving an intrepid adventurer.)']
               : [
                  '<32>{#p/human}* （你把書拿了起來...）',
                  '<32>{#p/basic}* 「喵喵航天行：夢境奇旅\n   （同人故事）」',
                  '<32>* 「...就在那時，\n   喵喵終於親眼看到了。」',
                  '<32>* 「那是相當壯觀的景色。\n   孤身一人站在太空深處，\n   頗有遺世獨立之感...」',
                  '<32>* \"... but Mew Mew knew better!\"\n* \"And it wasn\'t long before she learned of our plight.\"',
                  '<32>* \"With a single blast of her infamous LAZER DELUXE, she punched through with ease!\"',
                  '<32>* \"And so it was that Mew Mew became monsterkind\'s savior.\"',
                  '<32>{#p/human}* （你把書放回了桌子上。）'
               ],
         a_lab_books2: pager.create(
            1,
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of a series of notes.)']
                  : [
                     "<32>{#p/basic}* 這是個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「教授的筆記，第76頁。」',
                     '<32>* 「核心現在已經上線，\n   前哨站的建設計畫\n   已在進行中。」',
                     '<32>* 「我不知道該如何看待\n   這種發展...」',
                     '<32>* 「不過，能讓我們\n   在外面的生活更舒適一點\n   是件好事...」',
                     '<32>* 「就這樣安頓下來的話，我們是不是\n   相當於在承認，沒有人類的靈魂\n   我們就無法逃脫？」',
                     '<32>* 「自從我被任命為皇家科學員，\n   我就下定決心要解放我們大家。」',
                     '<32>* 「現在，恐怕其他怪物\n   已經安於等待了...」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of a series of notes.)']
                  : [
                     "<32>{#p/basic}* 這是個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「教授的筆記，第195頁。」',
                     '<32>* \"It\'s a dark day for monsterkind, the royal family is in pieces.\"',
                     '<32>* \"Queen Toriel has abandoned the throne over a few rushed words from Asgore.\"',
                     '<32>* \"But those words may have long-lasting implications for us...\"',
                     '<32>* \"Now, everyone expects him to take the human SOULs by force.\"',
                     '<32>* \"This is a disaster.\"',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The books on this bookshelf consist of a series of notes.)']
                  : [
                     "<32>{#p/basic}* 這是個書架。",
                     '<32>{#p/human}* （你取下了一本書...）',
                     '<32>{#p/basic}* 「教授的筆記，第310頁。」',
                     '<32>* \"Well, he\'s agreed to the plan... of course, I was almost certain he would.\"',
                     '<32>* \"The timing is fortunate.\"\n* \"The first human since $(name) arrived on the outpost today.\"',
                     "<32>* \"We don't know if it'll be able to contain them yet, but we'll find out soon enough...\"",
                     '<32>* 「祈禱吧。」',
                     '<32>{#p/human}* （你把書放回了書架。）'
                  ]
         ),
         cream_machine: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You wonder what kind of ice cream this ice cream machine produces.)']
               : SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}* This overly complicated ice cream machine doesn't look like it'll get any more use."]
                  : ["<32>{#p/basic}* 這是臺過於複雜的冰淇淋機。"],
         cream_bucket: () =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (You dip your hands into the bucket of ice cream.)\n* (It's rather cold.)",
                  ...[
                     [
                        "<25>{#p/asriel1}{#f/15}* Uh, just don't get any of that stuff on me.",
                        "<25>{#p/asriel1}{#f/15}* I'd have to shake myself like a dog to get it off."
                     ],
                     ['<25>{#p/asriel1}{#f/8}* ...', "<26>{#p/asriel1}{#f/31}* Don't you get any ideas."],
                     ['<25>{#p/asriel1}{#f/31}* ...']
                  ][Math.min(asrielinter.cream_bucket++, 2)]
               ]
               : ['<32>{#p/basic}* 一桶冰淇淋。'],
         mewposter: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (Your eyes follow the poster as it's animated subject bobs up and down.)"]
               : SAVE.data.n.state_aerialis_basekill > 29
                  ? ['<32>{#p/basic}* A large poster for a niche sci-fi anime franchise.']
                  : SAVE.data.n.state_aerialis_basekill > 14
                     ? ['<32>{#p/basic}* A large poster for a sci-fi anime franchise.']
                     : ['<32>{#p/basic}* 一張人氣科幻動漫系列的\n  大型海報。'],
         dogfood: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (You stare anxiously at the bag of dog food.)',
                  ...[
                     ["<25>{#p/asriel1}{#f/24}* Frisk, I know what you're thinking.\n* It's not worth it."],
                     ["<25>{#p/asriel1}{#f/24}* It's going to taste awful, Frisk.\n* Just don't."],
                     [
                        '<25>{#p/asriel1}{#f/15}* Listen.',
                        "<25>* I'm telling you this because I'm your... friend.",
                        "<25>* ... that felt weird to say, but I guess I'm getting used to it."
                     ],
                     ['<25>{#p/asriel1}{#f/16}* You must not have anything better to do.']
                  ][Math.min(asrielinter.dogfood++, 3)]
               ]
               : SAVE.data.b.oops
                  ? ["<32>{#p/basic}* 這是一袋半空的狗糧。"]
                  : ["<32>{#p/basic}* It's a bag of dog food.\n* It's half-full."],
         virtsign: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The sign depicts what appears to be a lizard in a virtual environment.)']
               : ["<32>{#p/basic}* 這是一個虛擬空間裡的\n  人物的標誌。"],
         starlingtable: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stop to see the flowers.)']
               : ['<32>{#p/basic}* 星花。'],
         starling: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stop to see the flowers.)']
               : world.darker
                  ? ['<32>{#p/basic}* 星花。']
                  : ['<32>{#p/basic}* A patch of Starling flowers.'],
         starling2: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stop to see the flowers.)']
               : world.darker
                  ? ['<32>{#p/basic}* 星花。']
                  : ['<32>{#p/basic}* A little trio of Starling flowers.'],
         starling3: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stop to see the flowers.)']
               : world.darker
                  ? ['<32>{#p/basic}* 星花。']
                  : ['<32>{#p/basic}* A densely-packed group of Starling flowers.'],
         starling5: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stop to see the flowers.)']
               : world.darker
                  ? ['<32>{#p/basic}* 星花。']
                  : ['<32>{#p/basic}* A Starling flower couple.\n* Cute...?'],
         dttubes: () =>
            SAVE.data.b.svr
               ? [["<25>{#p/asriel1}{#f/3}* This stuff?\n* Ha... don't remind me."], ['<25>{#p/asriel1}{#f/4}* ...']][
               Math.min(asrielinter.dttubes++, 1)
               ]
               : [
                  '<32>{#p/basic}* 一組盛放著不明物質的試管。',
                  ...(world.genocide
                     ? world.goatbro &&
                        (SAVE.flag.n.genocide_milestone < 5
                           ? SAVE.flag.n.ga_asrielLab3++
                           : SAVE.flag.n.genocide_milestone < 6
                              ? SAVE.flag.n.ga_asrielLab4++
                              : SAVE.flag.n.ga_asrielLab5++) < 1
                        ? SAVE.flag.n.genocide_milestone < 5
                           ? [
                              '<25>{#p/asriel2}{#f/10}* 她用我身上的\n  那支注射器去哪了...',
                              '<26>{#f/4}* 搞不好她丟了，哈哈。'
                           ]
                           : SAVE.flag.n.genocide_milestone < 6
                              ? [
                                 '<25>{#p/asriel2}{#f/15}* 那支注射器...',
                                 '<25>{#f/10}* 她打我們打這麼兇，\n  是靠了這個？'
                              ]
                              : [
                                 '<25>{#p/asriel2}{#f/2}* 她還真覺得\n  那破玩意能幫上她...',
                                 '<25>{#f/1}* 真是蠢得可以。'
                              ]
                        : []
                     : ['<32>{#p/basic}* There is also a used syringe with trace amounts of the same substance.'])
               ],
         papertable: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The plans on the table describe some form of energy conversion process.)']
               : ["<32>{#p/basic}* 這是一張工作桌，\n  上面有一些不倫不類的設計圖。"],
         vender1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You observe the mysterious contents behind the glass of the storage unit.)']
               : ['<32>{#p/basic}* A vacuum-sealed storage unit.\n* Inside are vials of various unknown substances.'],
         vender2: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You observe the mysterious contents behind the glass of the storage unit.)']
               : ['<32>{#p/basic}* A vacuum-sealed storage unit.\n* Inside are vials of various unknown substances.'],
         toolrack: () =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/27}* As far as I know, those tools were never used at all.',
                     "<25>* In fact, I think they're just for decoration."
                  ],
                  [
                     "<25>{#p/asriel1}{#f/13}* Tools like these aren't necessary when you can just use magic.",
                     '<25>{#f/17}* Like, that mouse who works at the CORE?\n* Charles, I think?',
                     '<25>{#f/15}* That little mouse has the power of telekinesis.',
                     "<25>{#f/16}* Don't ask me how I know that."
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* Uh, let me put it this way...',
                     '<25>{#f/16}* When I screwed around in the past, I learned to avoid that one.',
                     '<25>{#f/15}* That kind of power makes it difficult to... do anything.'
                  ],
                  ["<25>{#p/asriel1}{#f/16}* ... let's just leave it at that."]
               ][Math.min(asrielinter.toolrack++, 3)]
               : [
                  "<32>{#p/basic}* 架子上掛了些老工具，\n  看上去吃灰好幾年了。",
                  ...(SAVE.data.n.plot === 72 ? ['<33>* ...現在更是沒人用得著了。'] : [])
               ],
         spycamera1: () =>
            postSIGMA()
               ? ["<32>{#p/basic}* 停機了。"]
               : SAVE.data.b.svr
                  ? ['<32>{#p/human}* (The display appears to be completely offline.)']
                  : SAVE.data.n.plot === 72 && !world.runaway
                     ? ['<32>{#p/basic}* Privacy at last.']
                     : [
                        '<32>{#p/basic}* 這個監視器經過校準，\n  可以跟蹤你的動作。',
                        ...(world.goatbro && SAVE.flag.n.ga_asrielLab1++ < 1
                           ? ["<25>{#p/asriel2}{#f/5}* 真想看看Alphys\n  盯著我們的時候，\n  臉上掛了個什麼表情..."]
                           : [])
                     ],
         gameshow_terminal1: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You place your hands on the humorous console.)']
               : world.darker
                  ? ['<32>{#p/basic}* 一個遊戲節目的操作臺。']
                  : SAVE.data.b.a_state_moneyfish
                     ? ['<32>{#p/basic}* A game show console.\n* The first-hand witness to an awesome competition.']
                     : ['<32>{#p/basic}* A game show console.\n* The unfortunate first-hand witness to an awful pun.'],
         gameshow_terminal2: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You place your hands on the sympathetic console.)']
               : world.darker
                  ? ['<32>{#p/basic}* 一個遊戲節目的操作臺。']
                  : ['<32>{#p/basic}* A game show console.\n* This console seems specially- equipped for ghosts.'],
         gameshow_terminal3: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You place your hands on the familiar console.)']
               : world.darker
                  ? ['<32>{#p/basic}* 一個遊戲節目的操作臺。']
                  : ["<33>{#p/basic}* A game show console.\n* This one's tailor-made for you."],
         gameshow_terminal4: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You place your hands on the friendly console.)']
               : world.darker
                  ? ['<32>{#p/basic}* 一個遊戲節目的操作臺。']
                  : SAVE.data.n.state_foundry_muffet === 1
                     ? ['<32>{#p/basic}* A game show console.\n* Smells like... a substitution.']
                     : ['<32>{#p/basic}* A game show console.\n* Who needs arms with consoles like these?'],
         a_path2_sign: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The sign establishes a limit for the number of monsters a liftgate can hoist.)']
               : [
                  '<32>{#p/basic}* 「請務必小心，\n   一個升降門每次最多\n   只能供兩個怪物搭乘。」',
                  ...(world.genocide && SAVE.flag.n.ga_asrielSkySign1++ < 1
                     ? ['<25>{#p/asriel2}{#f/1}* 正好夠用。']
                     : [])
               ],
         a_path4_sign: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The sign informs people of the closure of a collection agency.)']
               : SAVE.data.n.plot === 72
                  ? ['<#32>{#p/basic}* \"Sorry, but the collection agency is closed for good!\"\n  - Bratty and Catty']
                  : ['<#32>{#p/basic}* 「將你的廢棄用品放在這兒吧，\n   我們會想辦法把它賣掉的！」\n  - Bratty和Catty'],
         a_puzzle1_sign: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (The sign's contents seem to have been crossed out.)"]
               : SAVE.data.n.plot < 68
                  ? ['<32>{#p/basic}* 「警告：前方可能正在拍攝節目。」']
                  : ['<32>{#p/basic}* 「更新：節目停播。」'],
         labcounter: (mtt: boolean) =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You run your hands across the countertop.)\n* (It's pleasantly smooth.)"]
               : [
                  world.darker
                     ? "<32>{#p/basic}* 只是個操作臺。"
                     : SAVE.data.n.plot === 72
                        ? "<32>{#p/basic}* Ah, the humble countertop.\n* No better place to go after you've won the day!"
                        : "<32>{#p/basic}* Ah, the humble countertop.\n* No better place to practice your arts 'n' crafts!",
                  ...(mtt ? ["<32>{#p/mettaton}* 把材料放那裡去。"] : [])
               ],
         chesstable: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (It appears this game board is entirely empty.)']
               : world.darker
                  ? ["<32>{#p/basic}* 一副棋盤。"]
                  : SAVE.data.n.plot < 65 || SAVE.data.b.ubershortcut || world.genocide
                     ? ["<32>{#p/basic}* It's a chess board.\n* It's empty."]
                     : ["<32>{#p/basic}* It's a chess board.\n* It's black's turn, but there's no good moves to play..."],
         roomtable: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The guidebook explains, in detail, the nature of multi- dimensional living.)']
               : [
                  "<32>{#p/basic}* It's a guidebook for multi- dimensional living.",
                  '<32>* You open it to the bookmarked page...',
                  '<32>* \"... which is to say your room exists at the same point in three-dimensional space...\"',
                  '<32>* \"... but on a different point along the fourth dimension.\"',
                  '<32>* \"This fourth-dimensional positioning is more commonly referred to as phasing.\"',
                  '<32>* \"Phasing is a complex process which involves re-saturating the negative field of the...\"',
                  '<33>* Thankfully, the page ends here.'
               ],
         flowertable: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You stop to see the flower.)']
               : world.darker
                  ? ['<32>{#p/basic}* A Starling flower.']
                  : ['<32>{#p/basic}* Beware, the lone Starling flower.'],
         coredoor: ["<32>{#p/basic}* 鎖住了。"],
         deadbot: ["<32>{#p/basic}* It's just a husk."],
         deadbot2: ["<32>{#p/basic}* He's all out of juice."],
         corenote1: [
            '<32>{#p/basic}* 一盒錄音帶，標著「Toriel」。',
            '<32>{#p/human}* （你聽了聽內容...）',
            '<32>{#p/alphys}* Asgore has told me a lot about you.',
            '<32>* Your pies, your stories, even the way you made him laugh...',
            '<32>* And your loving care for the humans who come here.',
            '<32>* Despite your misconceptions about Asgore, you tried to be a positive light.',
            "<32>* Because of me, you'll never get to share that light again."
         ],
         corenote2: [
            '<32>{#p/basic}* 一盒錄音帶，標著「Sans」。',
            '<32>{#p/human}* （你聽了聽內容...）',
            "<32>{#p/alphys}* I'll never forget those days where we worked together on projects...",
            '<32>* Or that time I helped you pull a prank on Papyrus...',
            '<32>* Or even the time we went garbage-hunting with Bratty and Catty.',
            '<32>* You might not have stuck around, but you always came back when it really mattered.',
            "<32>* Because of me, you'll never be able to come back."
         ],
         corenote3: [
            '<32>{#p/basic}* 一盒錄音帶，標著「Papyrus」。',
            '<32>{#p/human}* （你聽了聽內容...）',
            "<32>{#p/alphys}* Our shared love of puzzles is something I'll always be fond of.",
            '<32>* When we were kids, you inspired me to do so many things...',
            '<32>* If not for you, I might not be a scientist at all.',
            "<32>* Though I couldn't bring myself to watch, I know you stayed true to yourself to the end.",
            "<32>* Because of me, you'll never be yourself again."
         ],
         corenote4: [
            '<32>{#p/basic}* 一盒錄音帶，標著「Undyne」。',
            '<32>{#p/human}* （你聽了聽內容...）',
            '<32>{#p/alphys}* Undyne...\n* We were going to do so much together when we escaped...',
            '<32>* I can picture it now.\n* A cruise around the galaxy, with nobody to get in our way.',
            '<32>* Whenever I felt sad or lonely, you were always there to cheer me up.',
            "<32>* Even if you and I disagreed on some things, you didn't let it get in the way of friendship.",
            "<32>* Because of me, you'll never get to explore the galaxy."
         ],
         corenote5: [
            '<32>{#p/basic}* 一盒錄音帶，標著「Mettaton」。',
            '<32>{#p/human}* （你聽了聽內容...）',
            "<32>{#p/alphys}* 一開始，我們相處得不太愉快。\n* 但如果沒有你，\n  我就走不到今天這一步。",
            "<32>* Mettaton，如果你在聽...\n  我想對你說，你很棒。",
            "<32>* 整個前哨站，我只為你一人\n  做過新的身體。",
            "<32>* 其實... 我也考慮過\n  給Napstablook做個身體。\n* 但是，Napstablook不適合派去戰鬥。",
            '<32>* 總之，\n  加油，Mettaton。'
         ],
         corenote6: () => [
            '<32>{#p/basic}* 一盒錄音帶，標著「Asgore」。',
            '<32>{#p/human}* （你聽了聽內容...）',
            "<32>{#p/alphys}* 我知道，自己並不擅長\n  這份工作...",
            '<32>* 但有你的支援，讓我覺得\n  自己的努力有了意義。',
            '<32>* 整個前哨站的大家\n  都支援著我們...',
            '<32>* 所以，即便實驗風險再大，\n  我也暗下決心：\n  一定要讓大家逃出去。',
            "<32>* 最終... 我們成功了。\n* 您終於不用在這個破前哨站\n  苦苦等待人類到來。",
            '<32>* 但我就顧著高興，\n  居然沒預感到\n  實驗會出岔子...',
            '<32>* 居然沒注意到\n  塵埃落到了那朵星花上...',
            '<32>* 要是我早點發現，\n  果斷把那朵星花隔離起來...\n  就不會出事。',
            "<32>* 但我沒有在意。",
            '<32>* 因為我，因為我的自負，\n  那孩子走上了不歸路。',
            "<32>* 許多朋友也因我而死...",
            '<32>* 我在實驗室眼睜睜地\n  看著他們一個接一個死去，\n  自己卻只是袖手旁觀。',
            "<32>* Mettaton說，\n  會盡全力阻止他們。",
            "<32>* 但他要是失敗了...\n* 下一個遭殃的就是你。",
            "<32>* 我不知道，\n  當又一個摯友死在我面前時，\n  我該如何應對。",
            "<32>* 我不知道，在你身處危險時\n  我要是再一次選擇袖手旁觀，\n  又該怎麼面對自己。",
            "<32>* 我只知道，你不會還手。\n  而他們會毫不留情地殺了你。",
            "<32>* 要是我再磨蹭下去...",
            '<32>* ...',
            '<32>{#p/human}* （你聽到放下錄音機，\n  衝向電梯的聲音。）',
            ...(SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.n.ga_asrielCorenote++ < 1
                  ? [
                     '<25>{#p/asriel2}{#f/3}* Alphys又逃跑了，我理解。',
                     '<25>{#p/asriel2}{#f/4}* 畢竟她就是個窩囊廢。'
                  ]
                  : []
               : SAVE.flag.n.ga_asrielAlphysCom4++ < 1
                  ? ['<25>{#p/asriel2}{#f/8}* If only I knew what she was doing the first time around...']
                  : [])
         ],
         coresign1: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (The sign prohibits any unauthorized presence in the area.)',
                  '<25>{#p/asriel1}{#f/4}* For obvious reasons, you can ignore this warning.'
               ]
               : ['<32>{#p/basic}* 「未經授權，嚴禁進入。」'],
         coresign2: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (The sign describes the longest- sustained accident- free period of time here.)',
                  "<25>{#p/asriel1}{#f/3}* If not for that one builder bot incident, it'd be flawless..."
               ]
               : ['<32>{#p/basic}* 「最長無事故記錄：38690天。」'],
         coresign3: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (The sign congratulates the current worker of the year.)',
                  ...[
                     ['<25>{#p/asriel1}{#f/17}* That little guy has the biggest heart...'],
                     [
                        '<25>{#p/asriel1}{#f/17}* Back when I was trying to be nice to everyone...',
                        '<25>{#f/17}* I asked it to come along with me, and it just did.',
                        '<25>{#f/20}* No questions asked.',
                        "<25>{#f/18}* I couldn't believe it!"
                     ],
                     [
                        "<25>{#p/asriel1}{#f/13}* Despite all I've done, people like Charles have something I...",
                        '<25>{#f/15}* Something I could never get back on my own.',
                        '<25>{#f/23}* ... a pure and true form of happiness.',
                        '<25>{#f/22}* But maybe with you...'
                     ],
                     ['<25>{#p/asriel1}{#f/13}* I really hope this works out, Frisk.']
                  ][Math.min(asrielinter.coresign3++, 3)]
               ]
               : [
                  '<32>{#p/basic}* 「年度最佳工人：Charles」\n  「感謝你一直以來的努力和奉獻。」'
               ],
         coresign4: () =>
            SAVE.data.b.svr
               ? [
                  '<32>{#p/human}* (The plaque dedicates itself to a certain individual.)',
                  ...[
                     [
                        '<25>{#p/asriel1}{#f/13}* You might find this surprising, but...',
                        '<26>{#f/27}* I never really knew him.',
                        '<25>{#f/4}* He died before Alphys brought me back, so...',
                        '<25>{#f/3}* My only memories of him are from when I was born.'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/13}* Yeah... monsters may have infinite space for memories...',
                        "<25>{#f/17}* But we can't remember something if it never happened.",
                        '<25>{#f/20}* Kind of hard to get around THAT limitation.'
                     ],
                     [
                        '<25>{#p/asriel1}{#f/17}* I did hear he nearly perfected wormhole travel...',
                        '<25>{#f/13}* Maybe, if that technology could be compacted down...',
                        "<25>{#f/15}* ... implanted in monsters' minds...",
                        '<25>{#f/16}* ... you could pull memories from other places.'
                     ],
                     ['<25>{#p/asriel1}{#f/20}* I must be crazy.']
                  ][Math.min(asrielinter.coresign4++, 3)]
               ]
               : ['<32>{#p/basic}* 「這塊牌匾是\n   獻給T. N. Roman教授的。」\n  「願您的遺產永存。」'],
         coresign5: () =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (The sign lists off what lies in each direction.)']
               : ['<32>{#p/basic}* 「向左 - 四號舞臺」\n* 「向右 - 核心出口」'],
         pottedtable: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You get the sense you've seen this table somewhere else before.)"]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? ["<32>{#p/basic}* A familiar-looking table.\n* Don't you recognize where this table is from?"]
                  : ['<32>{#p/basic}* 一張眼熟的桌子。'],
         potchair: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You get the sense you've seen this chair somewhere else before.)"]
               : SAVE.data.n.plot === 72 && !world.runaway
                  ? ['<32>{#p/basic}* A familiar-looking chair.\n* They really know how to vary up the design.']
                  : ['<32>{#p/basic}* 一把眼熟的椅子。'],
         cardboard1: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't make out what's in the box...)"]
               : [
                  "<32>{#p/basic}* It's a bunch of mostly-empty cardboard boxes.",
                  '<32>{#p/basic}* This dull box has a few test tubes lying at the bottom.'
               ],
         cardboard2: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't make out what's in the box...)"]
               : [
                  "<32>{#p/basic}* It's a bunch of mostly-empty cardboard boxes.",
                  '<32>{#p/basic}* This tall box reeks of exotic chemicals.'
               ],
         cardboard3: () =>
            SAVE.data.b.svr
               ? ["<32>{#p/human}* (You can't make out what's in the box...)"]
               : [
                  "<32>{#p/basic}* It's a bunch of mostly-empty cardboard boxes.",
                  '<32>{#p/basic}* This small box contains papers all written in an odd font.'
               ],
         labchem: (mtt: boolean) =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (This setup strikes you as rather dangerous.)']
               : [
                  world.darker
                     ? '<32>{#p/basic}* 傳送帶上有幾瓶化學試劑。'
                     : SAVE.data.n.plot === 72
                        ? "<32>{#p/basic}* Chemicals on conveyor belts.\n* Somehow, nothing's ever gone wrong with this."
                        : '<32>{#p/basic}* Chemicals on conveyor belts.\n* What could possibly go wrong?',
                  ...(mtt
                     ? [
                        '<32>{#p/mettaton}* 沒有什麼比MTT超安全級傳送帶\n  發出的平靜嗡嗡聲更好了!',
                        '<32>* 它不僅讓你不必再\n  多伸兩微米去拿東西...',
                        '<32>* 還能讓你在有燒杯從邊上掉下來，\n  猛烈地摔破時...',
                        '<32>* 免費得到一個意外的化學反應！'
                     ]
                     : [])
               ],
         labglobe: (mtt: boolean) =>
            SAVE.data.b.svr
               ? [
                  [
                     '<25>{#p/asriel1}{#f/13}* This is Krios...\n* A simple representation of it, anyway.',
                     "<25>{#f/17}* I hear it's more colorful than it looks from outer space."
                  ],
                  [
                     '<25>{#p/asriel1}{#f/13}* So, one time, out of desperate curiosity...',
                     '<25>{#f/17}* I managed to organize the construction of a new outpost section.',
                     '<26>{#f/20}* And when I say organize, it was more like...\n* I kinda forced them to.',
                     '<25>{#f/13}* It was... a re-creation of a part of the homeworld.'
                  ],
                  [
                     "<25>{#p/asriel1}{#f/13}* The re-creation wasn't perfect...",
                     '<25>{#f/15}* Probably because nobody really wanted to build it...',
                     '<25>{#f/17}* But I understood why that old world is so highly spoken of.',
                     "<25>{#f/23}* It was... beautiful.\n* I'd never seen anything like it."
                  ],
                  ["<25>{#p/asriel1}{#f/17}* I'll always remember the re-creation of the sky..."]
               ][Math.min(asrielinter.labglobe++, 3)]
               : [
                  world.darker
                     ? "<32>{#p/basic}* 一個「地球儀」。"
                     : SAVE.data.n.plot === 72
                        ? "<32>{#p/basic}* 一個「地球儀」，\n  展現著怪物...曾經的家園。"
                        : "<32>{#p/basic}* 一個「地球儀」，\n  展現著怪物偉大的家園。",
                  ...(mtt
                     ? [
                        "<32>{#p/mettaton}* 沒有必備的「地球儀」，\n  這裡就不能叫做科學實驗室。",
                        "<32>* 這裡大部分的東西\n  都是MTT牌的產品，\n  但這一件算是個例外。",
                        '<32>* 不過，既然ALPHYS為我製作了它，\n  況且【我】自己也出自她之手...',
                        "<32>* 就沒有理由懷疑它的質量！"
                     ]
                     : [])
               ],
         labrando: (mtt: boolean) =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You interact with the device, but it does nothing of use.)']
               : [
                  world.darker
                     ? '<33>{#p/basic}* 意義不明的裝置。'
                     : SAVE.data.n.plot === 72
                        ? '<32>{#p/basic}* Disappointingly, the passage of time has not given this device a greater purpose.'
                        : '<32>{#p/basic}* The purpose of this device is explicitly unclear.',
                  ...(mtt
                     ? [
                        '<32>{#p/mettaton}* 啊，沒錯，這就是\n  永遠都好用的MTT牌\n  中子流偏振器。',
                        '<32>* 它好到可以至少用十次...',
                        '<32>* 每年十次！！！'
                     ]
                     : [])
               ],
         labsink: (mtt: boolean) =>
            SAVE.data.b.svr
               ? ['<32>{#p/human}* (You run the nigh-invisible water over your hands.)']
               : [
                  "<32>{#p/basic}* 這是一個水槽，通過複製器供水。",
                  ...(mtt
                     ? [
                        '<32>{#p/mettaton}* 材料越複雜，\n  就需要越多時間來複製。',
                        '<32>* 畢竟，核心的供能是有限的。',
                        '<32>* 好在水是最簡單的物質之一！'
                     ]
                     : [])
               ],
         labscope: (mtt: boolean) =>
            SAVE.data.b.svr
               ? [
                  "<32>{#p/human}* (You point the microscope at Asriel's face...)",
                  '<32>* (Through the lens, you witness a dazzling array of bright, glowing particles.)',
                  ...[
                     ['<25>{#p/asriel1}{#f/17}* Monsters are only made of magic, Frisk.\n* You know that, right?'],
                     ['<25>{#p/asriel1}{#f/13}* You can probably stop doing that now.'],
                     ['<25>{#p/asriel1}{#f/15}* ...']
                  ][Math.min(asrielinter.labscope++, 2)]
               ]
               : [
                  '<32>{#p/basic}* 標準規格的精密電子顯微鏡，\n  皇家出品。\n* 261X年前後製成。',
                  ...(mtt
                     ? [
                        '<32>{#p/mettaton}* 這些先進的顯微鏡是\n  幾年前剛推出的。',
                        '<32>* 這是MTT牌產品與時俱進的又一個例子！'
                     ]
                     : [])
               ]
      },
      puzzle: {
         puzzlestop1a: pager.create(
            0,
            () =>
               SAVE.data.n.state_foundry_undyne !== 1
                  ? [
                     '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                     '<25>{#p/alphys}{#g/alphysShocked}* Woah, stop!!',
                     "<25>{#g/alphysOhGodNo}* You're g-going to fall out of the normal plane...",
                     '<25>{#g/alphysSideSad}* I should p-probably pull you back.',
                     '<25>{#g/alphysThatSucks}* Sorry...',
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]
                  : [
                     '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                     '<25>{#p/alphys}{#g/alphysShocked}* Woah, stop!!',
                     "<25>{#g/alphysOhGodNo}* You c-c-can't... g-go that far out...",
                     "<26>{#g/alphysNeutralSweat}* I'd pull you back, but I'm... not at my desk.",
                     "<26>{#f/10}* S-so don't be stupid!",
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ],
            () =>
               SAVE.data.n.state_foundry_undyne !== 1
                  ? [
                     '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                     "<25>{#p/alphys}{#g/alphysSideSad}* It's not safe to go that far...",
                     "<25>{#g/alphysNeutralSweat}* I'm gonna pull you back now.",
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]
                  : [
                     '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                     '<25>{#p/alphys}{#g/alphysShocked}* W-what are you doing!?',
                     "<26>{#f/3}* You're almost at the edge!",
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ],
            () =>
               SAVE.data.n.state_foundry_undyne !== 1
                  ? [
                     '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                     '<25>{#p/alphys}{#g/alphysWTF}* ...',
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]
                  : [
                     '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
                     '<25>{#p/alphys}{#g/alphysIDK2}* ...',
                     "<25>{#p/alphys}{#g/alphysIDK3}* I guess... there's nothing I can say to stop you.",
                     '<32>{#s/equip}{#p/event}* 滴...'
                  ]
         ),
         puzzlestop1b: () =>
            [
               ['<25>{#p/asriel2}{#f/13}* 呃... $(name)？', "<25>* 咱倆好像走過頭了。"],
               ['<25>{#p/asriel2}{#f/13}* ...$(name)？'],
               ['<25>{#p/asriel2}{#f/13}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielPuzzleStop1++, 2)]
      },
      npc: {
         picnic_mushketeer: pager.create(
            0,
            () =>
               SAVE.data.b.bullied_mushketeer
                  ? [
                     "<32>{#p/basic}{#npc/a}* Oh...\n* It's you...",
                     "<32>* Well, did you really think I'd be beaten so easily!?",
                     '<32>* Because...\n* You were right.',
                     "<32>* I'm not fit to be a soldier anymore..."
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* At ease, soldier!\n* You've done enough here!",
                     "<32>* ... well, if it isn't the brash human that dared to disarm me of my weapon.",
                     "<32>* You're an interesting one!\n* That's definitely not how I planned to end that conflict!",
                     '<32>* But, somehow, you always seem to find a way to make things work in your favor.'
                  ],
            () =>
               SAVE.data.b.bullied_mushketeer
                  ? ['<32>{#p/basic}{#npc/a}* Future soldiers would be wise... to stay away from you.']
                  : [
                     '<32>{#p/basic}{#npc/a}* Future soldiers would be wise to observe your tactics!',
                     "<32>* But for now...\n* It's off to the new homeworld with you, soldier!"
                  ],
            () =>
               SAVE.data.b.bullied_mushketeer
                  ? ['<32>{#p/basic}{#npc/a}* ...']
                  : ['<32>{#p/basic}{#npc/a}* You may be on your way now.']
         ),
         a_dresslion: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#npc/a}* Mettaton said I could use the company funds to make a dress of my own...',
                     "<32>* I've never been so...!\n* Ha ha ha!"
                  ]
                  : SAVE.data.n.plot < 60
                     ? [
                        "<32>{#p/basic}{#npc/a}* As Mettaton's costume designer, it's my job to get him the right outfit.",
                        '<32>* He needed a suit and tie today, and a dress for another upcoming show...',
                        '<32>* For some reason...\n* The idea of him in a dress...',
                        '<32>* Seems really cool...'
                     ]
                     : SAVE.data.n.plot < 65
                        ? [
                           "<32>{#p/basic}{#npc/a}* It's about to start!\n* Any time now, the new costume will be on full display!",
                           "<32>* I can't wait..."
                        ]
                        : SAVE.data.n.plot < 68
                           ? [
                              '<32>{#p/basic}{#npc/a}* That...\n* Was so beautiful...!',
                              "<32>* Makes me wonder if I'd also look pretty...\n* In a dress..."
                           ]
                           : [
                              '<32>{#p/basic}{#npc/a}* Oh... my goodness...',
                              '<32>* For a minute there, I thought Mettaton was going to die!',
                              "<32>* I don't know what I'd do with myself then..."
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['<33>{#p/basic}{#npc/a}* I should make one for you, too!']
                  : SAVE.data.n.plot < 60
                     ? [
                        "<32>{#p/basic}{#npc/a}* I'm thinking of something bright and golden.\n* It'll really make him shine."
                     ]
                     : SAVE.data.n.plot < 65
                        ? ["<32>{#p/basic}{#npc/a}* It's as shiny and bright as I could have hoped for!"]
                        : SAVE.data.n.plot < 68
                           ? [
                              "<32>{#p/basic}{#npc/a}* I'll have to ask him for the funding, though, and good luck getting that."
                           ]
                           : ['<32>{#p/basic}{#npc/a}* I might disappear off the face of the outpost!']
         ),
         picnic_darkman1: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* Cha.\n* We're the shadow-people.\n* We serve our summoners.",
               '<32>* Terrestria first summoned me back in the human-monster war... good times, yo.',
               "<32>* But that battle's over now.\n* And so's yours."
            ],
            [
               '<32>{#p/basic}{#npc/a}* I recall all the battles fought by my summoner.',
               "<32>* Let me tell you about one of my favorites, ya see.\n* So we're on some coast.",
               "<32>* The terran military thought it'd be a good idea to set spy drones below sea level, right?",
               '<32>* But we knew they were there.\n* So I got summoned, did some recon, came back and told all.',
               "<32>* Next thing you know, we're stormin' in, and we take 'em all out real good.",
               "<32>* Wasn't much in the grand scheme, but it sure felt great."
            ],
            [
               "<32>{#p/basic}{#npc/a}* Ha, from what my summoner tells me, I'm sure you've got a few stories to tell, too."
            ]
         ),
         picnic_darkman2: pager.create(
            0,
            [
               '<32>{#p/basic}{#npc/a}* Sooooo...\n* The thing about us is...',
               "<32>* We're not really here.\n* I mean, we are.\n* But not really.",
               "<32>* It's hard to explain."
            ],
            [
               '<32>{#p/basic}{#npc/a}* My summoner, Cozmo, once put it like this...',
               "<32>* We're like a part of their personality that can move outside their body.",
               "<32>* Aaaaand... we come out whenever we've got something to do.",
               "<32>* I came out because I thought it'd be cool to see the outpost before we go.",
               "<32>* When you're in the heat of action, you uhhhhh... can't really take anything in."
            ],
            [
               "<32>{#p/basic}{#npc/a}* We don't usually get to relax when we're in the physical realm, sooooo... this is nice."
            ]
         ),
         eblocker: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* Ever since I quit Glyde's business, I've been realizing how terrible it was ;(",
               "<32>{#p/basic}{#npc/a}* Sorry if I sold you anything for too high a price ;(\n* That's on me ;(",
               "<32>{#p/basic}{#npc/a}* Now, if you'll excuse me, I'd like to flex in solitude ;(",
               "<32>{#p/basic}{#npc/a}* I'll be done soon, okay? ;("
            ],
            ['<32>{#p/basic}{#npc/a}* Sorry, lassy ;(\n* I need some time to myself right now ;(']
         ),
         a_bowtie: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* I'm an art student.\n* But I'm thinking of quitting.",
                     '<32>* The constant praise, all of which may be undeserved...',
                     '<32>* In what way would this ever help me improve?'
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* I'm an art student.\n* I've struggled for inspiration for a long time.",
                        '<32>* Only now, after a recent tragedy, have I been feeling quite motivated indeed.',
                        '<32>* Is it right to be inspired by such misfortune?'
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* I'm an art student.\n* In art, it's said that you only improve with time.",
                        '<32>* However, my art teacher thinks everything I do is amazing.',
                        '<32>* Should I be concerned?'
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* As a slime, I'm still not sure how to feel about this."]
                  : ["<32>{#p/basic}{#npc/a}* As a slime, I'm not sure how to feel about this."]
         ),
         a_thisisnotabomb: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        '<32>{#p/basic}{#npc/a}* Are you ready for my \"explosive\" return???',
                        '<32>* You kinda scared everyone off, but some of us came back after what you did later.',
                        "<32>* Can't say I blame the ones who didn't, but hey...",
                        "<32>* I figured I'd give your choice to do the right thing some impact."
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* It was bad enough not knowing what kinda species I was on the old homeworld...',
                        "<32>* And now, on the new one, there'll be a whole load of new species I don't know.",
                        "<32>* I might just have to live with the fact that I'll be a bomb... forever...",
                        '<32>* Talk about emotional fallout.'
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        '<32>{#p/basic}{#npc/a}* Wow.\n* Talk about explosive.',
                        '<32>* That grand finale really had us all shaken!',
                        '<32>* Literally.\n* It shook this entire area of the outpost.'
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* Well this place sure is the bomb, huh???',
                        "<32>* Psst, listen up kid...\n* I'll let you in on a secret.",
                        "<32>* I'm... not really a bomb.",
                        "<32>* Hey, don't be shell-shocked.\n* It's just that people call me a bomb so much...",
                        "<32>* ... that I've just accepted it at this point."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        '<32>{#p/basic}{#npc/a}* I mean, come on, why does everyone have to live on such a short fuse?',
                        '<32>* If a little bullying is all it takes to set you off, then you might as well explode!',
                        "<32>* But that's just me."
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* I mean, at this point, if I WERE to find out what kinda plant I really am...',
                        '<32>* ... the realization of such a long-withheld fact would be...',
                        '<32>* ... explosive.'
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* Maybe, if I was actually a bomb, I'd be envious of it.",
                        "<32>* But I'm not, so... I'm not.",
                        "<32>* I'm mostly just pissed off about it, really."
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* Turns out I'm supposed to look like a rare homeworld plant.",
                        '<32>* That old-timer who came by to talk to Burgie last week said it in passing, I think.',
                        "<32>* ... oh, what I'd give to understand what I really am..."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["<32>{#p/basic}{#npc/a}* ... still don't blame 'em, though."]
                     : ["<32>{#p/basic}{#npc/a}* ... it's better to stick to what you know."]
                  : SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* ... you're lucky I don't explode on you right now."]
                     : ["<32>{#p/basic}{#npc/a}* ... don't you ever wonder what you really are?"]
         ),
         a_blackfire: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* So we're free now, huh?\n* What crazy times we must be living in.",
                     "<32>* Without my job at the Royal Lab, I'll have to find work elsewhere...",
                     '<32>* ... or, we could just establish a new Royal Lab on the homeworld.'
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        '<32>{#p/basic}{#npc/a}* Normally, I do astronomical research at the Royal Lab.',
                        '<32>* I was planning on returning to work after today...',
                        "<32>* But, after what happened to Mettaton, I'm not so sure."
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* Normally, I do astronomical research at the Royal Lab.',
                        '<32>* Earlier, though, Alphys told us we can take the day off.',
                        '<32>* I wonder why...'
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Imagine how much better it'll be to stargaze with solid ground to roast on."
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        '<32>{#p/basic}{#npc/a}* Maybe, somewhere out there, his heart still lives on in those constellations...'
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* Being an astronomer can be fun, but it never hurts to stargaze with your own eyes.'
                     ]
         ),
         a_businessdude: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? [
                        '<32>{#p/basic}{#npc/a}* Yeah, sometimes I wonder how a person like ya can exist.',
                        "<32>* Ya saved us in the end, but what's it worth if we're all scared to leave our homes?",
                        "<32>* I'm not judgin' ya or anything, but ya DO see the irony in that, right?"
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* Our virtualasium project never got off the ground, but maybe...',
                        "<32>* ... that's just a sign of things to come?",
                        "<32>* After all, on a new homeworld, it won't have to leave the ground."
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        '<32>{#p/basic}{#npc/a}* What a tragedy, huh?',
                        "<32>* ... it's a good thing most people don't know what ya look like up close."
                     ]
                     : roomKills().a_elevator1 > 0
                        ? ["<32>{#p/basic}{#npc/a}* Ya heard me.\n* Quit while ya're ahead."]
                        : SAVE.data.n.plot < 58
                           ? iFancyYourVilliany()
                              ? [
                                 '<32>{#p/basic}{#npc/a}* So, ya go by \"$(moniker2)\" now, huh kid?',
                                 "<32>* ... that's pretty cool."
                              ]
                              : [
                                 [
                                    '<32>{#p/basic}{#npc/a}* Boy, ya really missed the mark on that one, huh kid?',
                                    "<32>* ... that's a cryin' shame."
                                 ],
                                 [
                                    '<32>{#p/basic}{#npc/a}* Kid, I got one question for ya, and one question only.',
                                    '<32>* ... were ya even trying?'
                                 ],
                                 [
                                    "<32>{#p/basic}{#npc/a}* Hey, don't feel bad.\n* Ya gave it ya best shot.",
                                    "<32>* ... still sucks that ya didn't make it to the end, though."
                                 ],
                                 [
                                    "<32>{#p/basic}{#npc/a}* Gee, talk about cuttin' it close, huh kid?",
                                    "<32>* That's an ending for the ages!"
                                 ],
                                 [
                                    '<32>{#p/basic}{#npc/a}* Ya did pretty well for someone with no real practice.',
                                    "<32>* ... beginner's luck, perhaps?"
                                 ]
                              ][SAVE.data.n.state_aerialis_crafterresult]
                           : [
                              "<32>{#p/basic}{#npc/a}* Workin' at the lab is a treat, I tell ya.",
                              '<32>* Have ya ever been inside the virtualasium?',
                              "<32>* Wonderful place.\n* Though they say ya shouldn't go out of bounds."
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 6
                     ? ["<32>{#p/basic}{#npc/a}* Why don't ya go find someone else to bully, eh?"]
                     : [
                        '<32>{#p/basic}{#npc/a}* I only hope we can expand our userbase past that one eccentric skeleton fellow.'
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* If they did, ya'd be in some deep doo-doo by now."]
                     : roomKills().a_elevator1 > 0
                        ? ["<32>{#p/basic}{#npc/a}* Or don't.\n* Just don't make me say I told ya so, ya got me?"]
                        : SAVE.data.n.plot < 58
                           ? iFancyYourVilliany()
                              ? ["<32>{#p/basic}{#npc/a}* It's not like I had a moniker at ya age or anything."]
                              : [
                                 ["<32>{#p/basic}{#npc/a}* It's a wonder ya even made it here at all."],
                                 ["<32>{#p/basic}{#npc/a}* Kinda seems like ya weren't."],
                                 ['<32>{#p/basic}{#npc/a}* Ya might get another chance on the next episode.'],
                                 ['<32>{#p/basic}{#npc/a}* Maybe next time ya could, I dunno, win more comfortably?'],
                                 ['<32>{#p/basic}{#npc/a}* Or maybe MTT just went a little easy on ya.']
                              ][SAVE.data.n.state_aerialis_crafterresult]
                           : [
                              '<32>{#p/basic}{#npc/a}* Yeah, ya heard that right.\n* Out of bounds.',
                              '<32>* Now what the heck is that supposed to mean?'
                           ]
         ),
         a_greenfire: pager.create(
            0,
            () =>
               SAVE.data.n.plot < 56
                  ? [
                     "<32>{#p/basic}* Don't worry about me, school went well today.",
                     "<32>* I'm just really looking forward to MTT's next show!",
                     "<32>{#p/basic}* Do you know when it'll be on?"
                  ]
                  : SAVE.data.n.plot < 68
                     ? [
                        '<32>{#p/basic}* That show was amazing!\n* The human almost looked real this time!',
                        '<32>* Wait, have I seen you before?'
                     ]
                     : world.bad_robot
                        ? ["<32>{#p/basic}* Ack, what a letdown.\n* To think he'd cancel his big show just like that..."]
                        : SAVE.data.b.killed_mettaton
                           ? [
                              '<32>{#p/basic}* Did you... do that?\n* Did you kill Mettaton for real?',
                              "<32>{#p/basic}* No... it has to be fake.\n* Mettaton's just too popular to die!"
                           ]
                           : [
                              '<32>{#p/basic}* So the human WAS real...\n* Wow, Mettaton must be REALLY good at networking!',
                              '<32>{#p/basic}* Your performance was great, by the way.'
                           ],
            () =>
               SAVE.data.n.plot < 56
                  ? ['<32>{#p/basic}* Mettaton usually has a schedule, but he forgot to make one this time.']
                  : SAVE.data.n.plot < 68
                     ? ['<32>{#p/basic}* I swear you look like the actor Mettaton brought on...']
                     : world.bad_robot
                        ? ['<32>{#p/basic}* Oh well, maybe next time.']
                        : SAVE.data.b.killed_mettaton
                           ? ["<32>{#p/basic}* I can't believe I almost fell for it!"]
                           : ["<32>{#p/basic}* I can't believe I didn't notice you were a human before!"]
         ),
         a_harpy: pager.create(
            0,
            () =>
               SAVE.data.b.killed_mettaton
                  ? [
                     "<32>{#p/basic}* I'm a reporter!\n* Today's news story is one I really don't want to report!",
                     "<32>{#p/basic}* I'm gonna lose my marbles!!\n* Huhehehaw!"
                  ]
                  : roomKills().a_sans > 0
                     ? [
                        "<32>{#p/basic}* I'm a reporter!\n* Today's news story is about death 'n' destruction!",
                        "<32>{#p/basic}* Did ya know someone's been killed right in front of me??\n* Huhehehaw!"
                     ]
                     : !world.badder_lizard
                        ? [
                           "<32>{#p/basic}* I'm a reporter!\n* Today's news story is about metal 'n' magic!",
                           "<32>{#p/basic}* Did ya know Mettaton's actually made of it??\n* Huhehehaw!"
                        ]
                        : [
                           "<32>{#p/basic}* I'm a reporter!\n* Today's news story is about death 'n' destruction!",
                           "<32>{#p/basic}* Did ya know I'm likely goin'a die in a few short hours??\n* Huhehehaw!"
                        ],
            ['<32>{#p/basic}* Oh dear!\n* I really do love my job!']
         ),
         a_madguy: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "<32>{#p/basic}{#npc/a}* Who, me?\n* Someone who'd evacuate?",
                        '<32>* Never.\n* I only went with them because they said I had to.',
                        '<32>* I get that you were some kinda bully or something...',
                        "<32>* ... but it's not as if you were going to kill me."
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* Everyone else around here's been invited to that hangout.",
                        "<32>* But me?\n* I'm not even interested.",
                        "<32>* Sure, I'm glad you went and saved us and all...",
                        "<32>* ... but that doesn't mean I have to stand around and indulge in the Madrigal plant."
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        '<32>{#p/basic}{#npc/a}* Poor, poor Mettaton, whatever will you do.',
                        '<32>* ...',
                        "<32>* Oh, that's right.\n* Nothing."
                     ]
                     : world.bad_robot && 68 <= SAVE.data.n.plot
                        ? [
                           '<32>{#p/basic}{#npc/a}* For once, Mettaton did the right thing, and cancelled a show.',
                           "<32>* That grand finale wouldn't have ended well for him.",
                           '<32>* Why?\n* Just a feeling.'
                        ]
                        : SAVE.data.n.bad_lizard < 2
                           ? [
                              '<32>{#p/basic}{#npc/a}* I was one of the builders of the ORIGINAL fountain here.',
                              "<32>* Y'know.\n* Before Mettaton decided to rebuild the whole thing.",
                              "<32>* Like, who does that? Who'd rebuild it all just to change a single, tiny detail?",
                              '<32>* Kind of petty if you ask me.'
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* I can't BELIEVE Mettaton's running his TV shows when there's a killer on the loose.",
                              '<32>* Does he not see how dangerous that could be?',
                              "<32>* Someone's going to end up getting killed doing that nonsense.",
                              '<32>* Kind of idiotic if you ask me.'
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        '<32>{#p/basic}{#npc/a}* Like, really, people?',
                        "<32>* Did you seriously think I'd want to run away like that?",
                        "<32>* Come on.\n* I'm not THAT soft.",
                        '<32>* ... ugh, never mind.'
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* Mind you.\n* I've never been one for parties.",
                        '<32>* My main hobbies and interests consist primarily...',
                        '<32>* ... of pointing out and picking apart poor imitations.',
                        '<32>* Like this fountain.'
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* As far as I'm concerned, this is all his fault.",
                        '<32>* He got too over-confident, and he paid the price.',
                        "<32>* Too bad, so sad, be glad I'm not your dad."
                     ]
                     : world.bad_robot && 68 <= SAVE.data.n.plot
                        ? [
                           '<32>{#p/basic}{#npc/a}* The more he stays out of our lives, the better.',
                           "<32>* I'd ask him never to show up again, but...",
                           "<32>* ... then I wouldn't have anything to be upset about."
                        ]
                        : SAVE.data.n.bad_lizard < 2
                           ? [
                              "<32>{#p/basic}{#npc/a}* Mind you.\n* I'm not the only one.",
                              '<32>* Ever heard of a \"Mr. Sepluv?\"',
                              '<32>* Yeah, he was in charge of the original build project here.',
                              '<32>* But now... he sells moon rocks for a living.'
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* Mind you.\n* I'm standing out here, too.",
                              "<32>* So I guess I'm just as guilty."
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["<32>{#p/basic}{#npc/a}* Embarrassing, isn't it?"]
                     : ["<32>{#p/basic}{#npc/a}* Pointless, isn't it?"]
                  : ["<32>{#p/basic}{#npc/a}* Ironic, isn't it?"]
         ),
         a_proskater: pager.create(
            0,
            () =>
               SAVE.data.n.plot < 60
                  ? [
                     "<32>{#p/basic}{#npc/a}* Finally got outta school, I don't know why I still go there anymore...",
                     "<32>* Luckily, I hear Mettaton's got something exciting planned for his next show.",
                     "<32>* I can't wait, brah..."
                  ]
                  : SAVE.data.n.plot < 68
                     ? [
                        '<32>{#p/basic}{#npc/a}* Brah... that was crazy.',
                        '<32>* And... kinda weird?',
                        '<32>* I mean, some of that stuff looked like junk, but that last item...',
                        '<32>* ... hot diggity damn!'
                     ]
                     : world.bad_robot
                        ? [
                           "<32>{#p/basic}{#npc/a}* I'm ruined, brah...\n* Mettaton just uppin' cancelled his latest show.",
                           '<32>* Now what excuses will I have to skip class...?'
                        ]
                        : SAVE.data.b.killed_mettaton
                           ? [
                              "<32>{#p/basic}{#npc/a}* Brah.\n* I'm feeling pretty hurt about Mettaton's death.",
                              "<32>* I'll have an excuse to skip classes for a little while, but after that, I'm ruined!"
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* Brah.\n* I'm glad Mettaton's staying around.",
                              "<32>* If it weren't for him, I'd have way less excuses to skip class."
                           ],
            () =>
               SAVE.data.n.plot < 60
                  ? ['<32>{#p/basic}{#npc/a}* I hope he gets interesting contestants this time...']
                  : SAVE.data.n.plot < 68
                     ? ["<32>{#p/basic}{#npc/a}* Tell me YOU wouldn't want a life-sized sci-fi anime doll."]
                     : world.bad_robot
                        ? ["<32>{#p/basic}{#npc/a}* It's a cryin' shame, brah."]
                        : SAVE.data.b.killed_mettaton
                           ? ['<32>{#p/basic}{#npc/a}* Real inconsiderate, Mettaton.\n* Real inconsiderate.']
                           : ["<32>{#p/basic}{#npc/a}* As a matter of fact, I'm skipping one right now..."]
         ),
         a_clamguy: pager.create(
            0,
            [
               '<32>{#p/basic}{#npc/a}* They say things can get pretty weird if you go too far out in these repeating rooms.',
               '<32>* Time tunnels...\n* Invariant spatial flexures...',
               "<32>* Eh, don't ask me what any of that means, I just overheard Alphys one time.",
               "<32>* If it wasn't her saying it, I'd probably just think it was made up..."
            ],
            ["<32>{#p/basic}{#npc/a}* As long as you can still see clearly, you're probably fine."]
         ),
         a_pyrope: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "<32>{#p/basic}{#npc/a}* You've been a bully in the past, but you might've redeemed yourself...",
                        '<32>* We just came back to ask, were you really being yourself?',
                        '<33>* Not everybody likes you, and some are still afraid...',
                        "<32>* But I guess that's how it goes when you've got violence in your veins."
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* When we get to the new homeworld, we're comin' out straightforward.",
                        "<32>* With bars and rhymes so toward they'll beat other writers to their foreword.",
                        "<33>* For anyone who challenges us, we've got but four words...",
                        '<32>* This is our world.'
                     ]
                  : [
                     '<32>{#p/basic}{#npc/a}* Vulkin and I make up the rap group \"The Pyromaniacs.\"',
                     '<32>* Our beats? Fantastic.\n* Our flows? Pyroclastic.',
                     "<33>* When I hop on stage, I'm bomb- astically elastic, I make the crowd melt like molten plastic.",
                     "<32>* And with Vulkin?\n* It's a one-stop shop for hot mic-drop classics."
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ["<32>{#p/basic}{#npc/a}* Don't worry.", '<32>* We can forgive your brutish ways.']
                     : ["<32>{#p/basic}{#npc/a}* Don't worry.", '<32>* Our flows are ALL above board.']
                  : ["<32>{#p/basic}{#npc/a}* Don't worry.", "<32>* Our measures aren't TOO drastic."]
         ),
         a_vulkin: pager.create(
            0,
            pager.create(
               2,
               () =>
                  SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/basic}{#npc/a}* A new home means new crowds...',
                        '<32>{#p/basic}{#npc/a}* Even spicier than before.'
                     ]
                     : ['<32>{#p/basic}{#npc/a}* Oh...\n* When the crowd cheers for us, it feels... so spicey.'],
               () =>
                  SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/basic}{#npc/a}* A new home means new crowds...',
                        '<32>{#p/basic}{#npc/a}* Even nicier than before.'
                     ]
                     : ['<32>{#p/basic}{#npc/a}* Oh...\n* When the crowd cheers for us, it feels... so nicey.']
            ),
            pager.create(
               2,
               () =>
                  SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}{#npc/a}* Spicier than before.']
                     : ['<32>{#p/basic}{#npc/a}* So spicey.'],
               () =>
                  SAVE.data.n.plot === 72
                     ? ['<32>{#p/basic}{#npc/a}* Nicier than before.']
                     : ['<32>{#p/basic}{#npc/a}* So nicey.']
            )
         ),
         a_heats: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     ...(world.population < 6
                        ? [
                           '<32>{#p/basic}{#npc/a}* Those guards who evacuated me disrespected my name...',
                           '<32>* So I came back to respect yours, Frisk!'
                        ]
                        : [
                           '<32>{#p/basic}{#npc/a}* You may or may not know MY name...',
                           '<32>* But I know yours, Frisk!'
                        ]),
                     '<32>* Ha!\n* I said it!',
                     "<32>* And I'm never going to forget it!",
                     '<32>* Not now.',
                     '<32>* Not ONCE!!',
                     '<32>* Not EVERRRRR!!!!',
                     '<32>* I shall NEVER, EVER forget your name, Frisk!!!!!!!!'
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* Do YOU know my name!?',
                     '<32>* ...',
                     "<32>* Wait, don't answer that.",
                     '<32>* You...\n* Y-you LOOK like you know.',
                     '<32>* You SMELL...\n* ...\n* ... like you know.',
                     '<32>* ...',
                     "<32>* I bet if I touched you, it'd FEEL like you know.",
                     "<32>* (It'd also be way, WAYYYYYY too hot for you.)",
                     '<32>* But why do you know...?',
                     '<32>* How... do you know...',
                     '<32>* This I will never ever know.' 
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}{#npc/a}* I. Will. Never. Ever. FORGEEEET!']
                  : ['<32>{#p/basic}{#npc/a}* I. Will. Never. Ever. KNOWWWW!']
         ),
         a_slime_father: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* My wife and children have shown me the truth.\n* Life isn't so bad.",
                     '<32>* You may want to believe yourself to be a certain way, because you have \"matured...\"',
                     '<32>* But even the most stoic monster or human is just a child on the inside.',
                     "<32>* Tap into the child.\n* Believe in the child's will.",
                     '<32>* Even in your darkest moment, make the child a part of you, and you will be happier.'
                  ]
                  : ['<33>{#p/basic}{#npc/a}* Ah, to be young again.\n* The cosmos sure felt boundless.'],
            () =>
               SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}{#npc/a}* No matter who you are, it is the truest part of you.']
                  : ['<32>{#p/basic}{#npc/a}* You look young...', "<32>* Go play!\n* The cosmos aren't so scary."],
            () =>
               SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}{#npc/a}* Never forget it...']
                  : ['<32>{#p/basic}{#npc/a}* Go on...']
         ),
         a_slime_mother: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Hubby's only just begun to learn what he needs.\n* But remember...",
                     '<32>* You must still try new things, and do so often.',
                     '<32>* Without that, you will lose yourself behind a mask of your own making again.'
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* Hubby thinks that because he's old, he can't enjoy life anymore.",
                     "<32>* But really, he just doesn't like trying new things.",
                     childEvac()
                        ? '<33>* We took our kids to a safezone, but it was new for them, so they were happy!'
                        : '<32>* Our kids try new things all the time, and look how happy they are!'
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Now that we're free, the horizons for new things to try have expanded.",
                     '<32>* Visit a new world, discover more about the ones you know, or even create one yourself...',
                     '<32>* Anything is possible.'
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* If you're ever bored with life, try something new.",
                     childEvac()
                        ? '<32>* It could be a movie, a hobby, or even the stress of safe- guarding your children...'
                        : '<32>* It could be a movie, a hobby, or even a language...',
                     '<32>* Anything is possible!'
                  ],
            ['<32>{#p/basic}{#npc/a}* What are you waiting for?']
         ),
         a_slime_kid1: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* Now we'll get to play Monsters...", '<32>* ... and monsters.']
                  : ['<32>{#p/basic}{#npc/a}* Do you wanna play Monsters and Humans!?'],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* Maybe this isn't a good idea."]
                  : ["<32>{#p/basic}{#npc/a}* I'll be the human."]
         ),
         a_slime_kid2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* I heard Starry's mom say the humans won't be on our new homeworld...",
                     "<32>* Maybe I'll have to learn how to play smart monster games instead."
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* I wanna learn how to play smart human games like chess.',
                     "<32>* Starry's mom over there is the best... she can beat anyone!"
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}{#npc/a}* What\'s a \"4-D poker?\"']
                  : ['<32>{#p/basic}{#npc/a}* What\'s a \"zugzwang?\"']
         ),
         a_diamond1: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#npc/a}* So your name was actually Frisk, huh?',
                     '<32>* Your performance with Mettaton was cool and all...',
                     '<32>* But that \"god battle\" of yours was even more insane!'
                  ]
                  : SAVE.data.b.ubershortcut
                     ? [
                        "<32>{#p/basic}{#npc/a}* We've only just got here, and Mettaton's already working on his first show!",
                        '<32>* It\'s called \"The search for humanity\'s star.\"'
                     ]
                     : SAVE.data.n.plot < 68
                        ? [
                           "<32>{#p/basic}{#npc/a}* We came to see Mettaton's grand finale, but...",
                           ...(iFancyYourVilliany()
                              ? [
                                 "<32>* I didn't think I'd get to see $(moniker1) up close!",
                                 '<32>* ... you are $(moniker1), right?'
                              ]
                              : [
                                 "<32>* I didn't think I'd get to see the human up close!",
                                 '<32>* ... you are the human, right?'
                              ])
                        ]
                        : SAVE.data.b.killed_mettaton
                           ? [
                              iFancyYourVilliany()
                                 ? "<32>{#p/basic}{#npc/a}* So you're $(moniker1), huh?"
                                 : "<32>{#p/basic}{#npc/a}* So you're the human, huh?",
                              '<32>* ...'
                           ]
                           : [
                              iFancyYourVilliany()
                                 ? "<32>{#p/basic}{#npc/a}* Hey, you're $(moniker1), the best TV villain ever!"
                                 : "<32>{#p/basic}{#npc/a}* Hey, you're the human who beat Mettaton at his own game!",
                              '<32>* What a performance!'
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}{#npc/a}* The best part is, we all got front row seats!']
                  : SAVE.data.b.ubershortcut
                     ? ['<32>{#p/basic}{#npc/a}* Where could they be...']
                     : SAVE.data.n.plot < 68
                        ? ["<32>{#p/basic}{#npc/a}* I'm rooting for you!"]
                        : SAVE.data.b.killed_mettaton
                           ? ['<32>{#p/basic}{#npc/a}* ... get away from me.']
                           : ['<32>{#p/basic}{#npc/a}* ... do you do autographs?']
         ),
         a_diamond2: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* Don't you wish you could do that all over again!?",
                     '<32>* A battle, not just for show, but for the lives of everyone on the outpost...',
                     '<32>* How cool is that!'
                  ]
                  : SAVE.data.b.ubershortcut
                     ? [
                        '<32>{#p/basic}{#npc/a}* After what Burgie did, I thought Mettaton would be done doing TV shows.',
                        '<32>* But now...'
                     ]
                     : SAVE.data.n.plot < 68
                        ? [
                           "<32>{#p/basic}{#npc/a}* Aren't you excited for the grand finale!?",
                           iFancyYourVilliany()
                              ? '<32>* The final showdown between Mettaton and the human villain, $(moniker2)...'
                              : '<32>* The final showdown between Mettaton and his human star...',
                           '<32>* One last dramatic stand for all the glory in the galaxy!'
                        ]
                        : SAVE.data.b.killed_mettaton
                           ? ["<32>{#p/basic}{#npc/a}* He's gone...\n* Mettaton's actually...", '<32>* ...']
                           : [
                              '<32>{#p/basic}{#npc/a}* Mettaton really had us there at the end...',
                              "<32>{#p/basic}{#npc/a}* For a moment, I thought he'd be leaving for good!"
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* It's a shame it didn't last longer."]
                  : SAVE.data.b.ubershortcut
                     ? ["<32>{#p/basic}{#npc/a}* It's good to have him back."]
                     : SAVE.data.n.plot < 68
                        ? ["<32>{#p/basic}{#npc/a}* I'm rooting for Mettaton!"]
                        : SAVE.data.b.killed_mettaton
                           ? ['<32>{#p/basic}{#npc/a}* I wanna go home...']
                           : ["<32>{#p/basic}{#npc/a}* I wonder what he'll do next..."]
         ),
         a_gyftrot: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* If we're settling on a new homeworld, I'll be able to find somewhere cold to live.",
                     "<32>* It's not like I need to.\n* But at least this bear would stop giving me pity gifts."
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* This bear insists on gifting me ornaments to put on my head.',
                     '<32>* I know it means well, but head ornaments are the last thing I need...'
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* ... hmm, maybe the teenagers weren't so bad."]
                  : ["<32>{#p/basic}{#npc/a}* ... at least it's not hugging me like the teenagers."]
         ),
         a_giftbear: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#npc/a}* I am starting to think that my pity for Gyftrot was a reflection of my own sadness.',
                     '<32>* I have longed for a cold environment myself, for as long as I can remember...',
                     '<32>* When we reach our destination, I will seek one out.'
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* I feel bad for Gyftrot.\n* It, like many of us, has never lived in its natural habitat.',
                     '<32>* Alphys has said recently that the force field might be broken soon...',
                     '<32>* Perhaps when that happens, we may all find some respite.'
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* For now, I'll stay by Gyftrot.\n* Giving gifts is the only way I know how to cope."
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* For now, I will try my best to improve the lives of those less fortunate than I.'
                  ]
         ),
         a_boomer: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        "<32>{#p/basic}{#npc/a}* Honestly, chief?\n* I'm thankful you bullied everyone before.",
                        "<32>* They might've been scared...",
                        '<33>* But at least they could finally live puzzle-free.'
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* The new homeworld's gonna be a riot, chief.",
                        '<32>* Can you take a guess why?',
                        "<33>* That's right.\n* No crappy puzzles to be solved."
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* I don't get what the fuss is with that Mettaton guy.",
                        '<32>* You get me, chief?',
                        "<32>* If you don't know someone personally, why be all upset?"
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* You know why I love hanging out here?',
                        "<32>* It's simple, chief.",
                        "<32>* There's no crappy puzzles to figure out here."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        '<32>{#p/basic}{#npc/a}* Yeah, you heard me.',
                        "<32>* I'd rather be afraid for my life than have to deal with those puzzles.",
                        "<32>* That's just how it is, chief."
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* Yeah, I STILL said it.',
                        '<32>* I STILL said crappy.',
                        "<32>* It'll ALWAYS be a fact, chief."
                     ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* I'm just being honest.",
                        "<32>* Most of us don't really know who he is as a person.",
                        "<32>* It's just a fact, chief."
                     ]
                     : [
                        '<32>{#p/basic}{#npc/a}* Yeah, I said it.',
                        '<32>* I said crappy.',
                        "<32>* It's just a fact, chief."
                     ],
            ['<32>{#p/basic}{#npc/a}* Chief.']
         ),
         a_artgirl: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* I'm an art teacher.\n* But I'm thinking of quitting.",
                     "<32>* I'd rather have a job where I don't have to criticize people...",
                     '<32>* A job where all I have to do is make them happy.'
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* I'm an art teacher.\n* Art's supposed to be fun and positive, right?",
                        '<32>* But one of my students recently started drawing all this sad artwork.',
                        "<32>* It hurts to look at...\n* I want to help him, but I don't want to stop him, either."
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* I'm an art teacher.\n* In art, it's said that there's no right or wrong way.",
                        '<32>* But one of my students thinks that everything he does is a mistake...',
                        "<32>* He won't stop apologizing...\n* I want to help him, but I'm at a loss for what to do."
                     ],
            () =>
               SAVE.data.n.plot === 72
                  ? ["<32>{#p/basic}{#npc/a}* Wouldn't that be nice?"]
                  : SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* Why can't everyone just make nice things all the time?"]
                     : ['<33>{#p/basic}{#npc/a}* Why is teaching a subjective subject so objectively difficult?']
         ),
         a_drakemom: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#npc/a}* So. A new homeworld, eh?\n* My son and I will get to do so many great things together.',
                     "<32>* So many great things.\n* Especially that place the old art teacher's got in mind.",
                     "<32>* Then, we'll go to dinner, and the movies... and his father can come along, too.",
                     "<32>* Growing boys have so many needs, don't they?\n* So it's only fair.",
                     "<32>* I wonder if my son's friends would be interested...?"
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        "<32>{#p/basic}{#npc/a}* Did something happen?\n* I've been so focused on this here game, I hadn't noticed.",
                        "<32>* But that's fine, you see.\n* The game is too important to abandon it now."
                     ]
                     : postSIGMA()
                        ? [
                           "<32>{#p/basic}{#npc/a}* All the lights went out a little while ago, you see.\n* So I'm in a bit of a pickle.",
                           '<32>* If I forfeit now, my opponent might return and steal the win out from under my feathers!'
                        ]
                        : SAVE.data.b.ubershortcut || world.population === 0
                           ? [
                              '<33>{#p/basic}{#npc/a}* Well. I sat at this here table.\n* And organized this here game.\n* But my opponent?',
                              '<32>* Nowhere! Nowhere to be seen in this fine establishment!'
                           ]
                           : [
                              "<32>{#p/basic}{#npc/a}* Well. I played this here move.\n* Pawn to king's knight four?\n* So my opponent walked off.",
                              "<32>* Now, you see, I have to wait.\n* It'll take a while for that clock to run out, for sure."
                           ],
            () =>
               SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}{#npc/a}* Fun for the whole family.']
                  : SAVE.data.b.killed_mettaton
                     ? ['<32>{#p/basic}{#npc/a}* All that matters is the game.']
                     : postSIGMA()
                        ? ['<32>{#p/basic}{#npc/a}* You never know what sorts of tricks your opponents will pull on you.']
                        : SAVE.data.b.ubershortcut || world.population === 0
                           ? ["<32>{#p/basic}{#npc/a}* It's a true disappointment.\n* Immeasurable, even."]
                           : ["<32>{#p/basic}{#npc/a}* There's no way I can chronologically recover from this."]
         ),
         a_drakedad: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? [
                        '<32>{#p/basic}{#npc/a}* Yah may have scared us off, but at least yah saved us.',
                        "<32>* Can't say I'm not a little afraid of yah though."
                     ]
                     : SAVE.data.b.s_state_chilldrake
                        ? [
                           "<32>{#p/basic}{#npc/a}* Apology or not, yah more than made up for mah son's injuries.",
                           '<32>* Thank yah for yah kind deed.'
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* Now that we're free, being a waitah may no longer suit me.",
                           "<32>* Our Son's returned, so I'll have to find mahself a new job..."
                        ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        '<32>{#p/basic}{#npc/a}* Everything around here is falling apart now.\n* People want their stah back.',
                        "<32>* They've stopped coming to eat at our fancy restaraunt...",
                        '<32>* In favah of fast food.'
                     ]
                     : SAVE.data.b.s_state_chilldrake
                        ? [
                           "<32>{#p/basic}{#npc/a}* I heard about yah from my son's friends, they tell me he's been bruised all ovah...",
                           "<32>* Could yah apologize to him latah for me?\n* It'd mean the unahverse."
                        ]
                        : [
                           "<32>{#p/basic}{#npc/a}* I'm a waitah.\n* My wife is a chess playah, and my son is a comedian.",
                           '<32>* They say being a waitah is a boring job, but it suits me.',
                           "<32>* Of course, I'm also a fathah.\n* I worry about my son, since he doesn't come home often...",
                           '<32>* Instead, he tells jokes with his friends in Starton.'
                        ],
            () =>
               SAVE.data.n.plot === 72
                  ? world.population < 2
                     ? ['<32>{#p/basic}{#npc/a}* Just try to be kindah from now on, will yah?']
                     : SAVE.data.b.s_state_chilldrake
                        ? ['<32>{#p/basic}{#npc/a}* Thank yah very much.']
                        : ["<32>{#p/basic}{#npc/a}* Maybe I'll become a bartendah."]
                  : SAVE.data.b.killed_mettaton
                     ? ["<32>{#p/basic}{#npc/a}* If things keep going like this, I fear I'll be out of a job."]
                     : SAVE.data.b.s_state_chilldrake
                        ? ['<32>{#p/basic}{#npc/a}* Just prahmise yah will.']
                        : ['<32>{#p/basic}{#npc/a}* At least the jokes are funny.']
         ),
         a_reg: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#npc/a}* Security left for the party a while ago, but I decided to stay for now.',
                     '<32>* After all, why go anywhere else, when you can take in the aura...',
                     '<32>* ... of a wish flower...'
                  ]
                  : SAVE.data.b.ubershortcut
                     ? [
                        "<32>{#p/basic}{#npc/a}* I was bored, so I started taking in the wish flowers' auras.",
                        "<32>* This one's not TOO bad, but there might be a better one somewhere else...",
                        "<32>* ... maybe I'll stumble across that one later."
                     ]
                     : [
                        "<32>{#p/basic}{#npc/a}* Security kicked me out for taking in the wish flowers' auras.",
                        SAVE.data.b.killed_mettaton
                           ? '<32>* That famous guy has everyone distracted, so I could probably go back in...'
                           : world.genocide
                              ? '<32>* The lights went off a while ago, so I could probably go back in...'
                              : '<32>* The guards have clocked out, so I could probably go back in...',
                        "<32>* ... but, ahh, this here's the best one I've found so far..."
                     ],
            ["<32>{#p/basic}{#npc/a}* Don't worry about me, I'm just here... taking in a wish flower's aura."]
         ),
         a_oni: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* After all our hard work, we've made it out alive.",
                     "<32>* Frankly, I'm tired of this job.\n* But it's been a good run.",
                     "<32>* Maybe, when we get to the new homeworld, I'll be a factory worker instead.",
                     "<32>* And don't tell me that's the same thing as bein' a CORE worker.",
                     "<32>* For one, we won't have those two girls breathin' down our necks all the time...",
                     "<32>* No, Catty, I don't want to sleep over with ya!\n* End of story!"
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* Long ago, they found a weak spot in the force field, about where the Outlands is now.',
                     "<32>* It doesn't mean we can escape through it, but it does mean any human who comes here...",
                     '<32>* ... will have to crash-land right around that area.',
                     '<32>* So we built the outpost to be long and winding to slow down a potential invasion.',
                     "<32>* We quickly realized it was a dumb idea, but by then, it'd become a tradition.",
                     "<32>* Now, you can't go two seconds without getting lost..."
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     "<32>{#p/basic}{#npc/a}* She's always been gettin' up on my case like that.",
                     '<32>* Eh...\n* I guess it could be worse.',
                     "<32>* We could still be workin' for that dumb robot."
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* At least the CORE wasn't designed with this idea.",
                     "<32>* Can you imagine how bad it'd be if we had to go through mazes to do maintenance?"
                  ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/basic}{#npc/a}* Go on, you two...']
                  : SAVE.data.n.plot === 72
                     ? ["<32>{#p/basic}{#npc/a}* Let's just be glad it's over."]
                     : ['<32>{#p/basic}{#npc/a}* Please and no thank you.']
         ),
         a_charles: pager.create(
            0,
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#npc/a}* So looks like my job is over.\n* No more CORE.',
                     '<32>* Actually, yes more core.\n* But not for us no more.',
                     '<32>* Any time now, we leave, and we never return.',
                     '<32>* What will my future be?',
                     '<32>* Boy, do I sure wish I knew!'
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* I work at the CORE.\n* The floor plan is designed to look like a bird.',
                     '<32>* Oh! I bet you don\'t know what \"CORE\" stands for!',
                     '<32>* It stands for \"Charged Onium- ion Refactorization Engine.\"',
                     '<32>* What does it mean?',
                     '<32>* I have no idea, no idea at all!'
                  ],
            () =>
               SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/basic}{#npc/a}* Perhaps, in an alternate timeline, I could be king.',
                     '<32>* It is I the good King Charles at your service!',
                     "<32>* Wouldn't that be nice!"
                  ]
                  : [
                     "<32>{#p/basic}{#npc/a}* Something else that's cool about the CORE is the override switches.",
                     "<32>* They're both heavily guarded, but one is guarded by puzzles instead of actual guards!",
                     '<32>* I sure do love PUZZLE!'
                  ]
         ),
         a_dragon: pager.create(
            0,
            [
               "<32>{#p/basic}{#npc/a}* So you're telling me the next comedy show isn't gonna be for another two weeks??",
               '<32>* I thought it was today!'
            ],
            [
               "<32>{#p/basic}{#npc/a}* So you're telling me I can't re-schedule my seat for a later date?",
               '<32>* This place is a total folly!'
            ]
         ),
         a_foodreceptionist: pager.create(
            0,
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (You rest your arm on the abandoned countertop.)']
                  : adultEvac()
                     ? world.bulrun
                        ? ['<32>{#p/basic}* ...但是大家都逃走了。']
                        : ['<32>{#p/basic}* ...但是誰也沒有來。']
                     : SAVE.data.n.plot === 72
                        ? [
                           '<32>{#p/basic}{#npc/a}* Blub blub...\n* (All reservations cancelled.)\n* (Section two, freedom clause.)',
                           "<32>* (Haven't you read the terms and conditions...?)"
                        ]
                        : music.sansdate.instances.length > 0
                           ? [
                              '<32>{#p/basic}{#npc/a}* Blub blub...\n* (I hope you and your date had a pleasant dining experience.)',
                              '<32>* (That looked like quite the nice little chat.)'
                           ]
                           : SAVE.data.b.killed_mettaton
                              ? [
                                 '<32>{#p/basic}{#npc/a}* Blub blub...\n* (Half-price reservations with our limited-time MTT coupon!)'
                              ]
                              : world.population < 2
                                 ? ['<32>{#p/basic}{#npc/a}* Blub blub...\n* (Day by day, the days grow ever lonelier...)']
                                 : [
                                    "<32>{#p/basic}{#npc/a}* Blub blub...\n* (You'll have to reserve a table to eat here.)",
                                    "<32>* (The girls get antsy when the reservations aren't in order.)"
                                 ],
            () =>
               SAVE.data.b.svr
                  ? ['<32>{#p/human}* (You rest your arm on the abandoned countertop.)']
                  : adultEvac()
                     ? world.bulrun
                        ? ['<32>{#p/basic}* ...但是大家都逃走了。']
                        : ['<32>{#p/basic}* ...但是誰也沒有來。']
                     : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}{#npc/a}* Blub blub...\n* (See you on the homeworld...)']
                        : SAVE.data.b.killed_mettaton
                           ? ['<32>{#p/basic}{#npc/a}* Blub blub...\n* (The coupon expires tomorrow.)']
                           : ['<32>{#p/basic}{#npc/a}* Blub blub...\n* (There are no reservations available at this time.)']
         )
      },
      genotext: {
         timewaster: () =>
            [
               ['<25>{#p/asriel2}{#f/10}* Why are we going back this way again?'],
               ["<25>{#p/asriel2}{#f/7}* We really don't need to do this."]
            ][Math.min(SAVE.flag.n.ga_asrielTimewaster++, 1)],
         asriel46: ['<25>{#p/asriel2}{#f/13}* 哎呀...\n  拉著你來這，\n  總感覺瘮得慌。'],
         asriel47: [
            "<25>{#p/asriel2}{#f/4}* 就種感覺，就好比...\n  拽著你最好的朋友\n  上戰場一樣。",
            "<25>{#f/3}* 畢竟，對我來說，\n  這地方和戰場沒什麼兩樣。"
         ],
         asriel48: [
            '<25>{#p/asriel2}{#f/13}* 也許還是說輕巧了。',
            '<25>{#p/asriel2}{#f/13}* 至少...\n  我們還能相互扶持，對吧？'
         ],
         asriel49: [
            '<25>{#p/asriel2}{#f/13}* 想想那空境城...',
            "<25>{#f/16}* 一直沒能建成...\n  真遺憾吶。"
         ],
         asriel50: [
            "<25>{#p/asriel2}{#f/3}* Apparently, it would've been twice the size of the Citadel.",
            '<25>{#f/4}* Just think of us, standing atop all that splendor...',
            "<25>{#f/3}* Wouldn't that be nice?"
         ],
         asriel51: [
            '<25>{#p/asriel2}{#f/4}* Anyway, a city that big is probably just a silly idea.',
            '<25>{#f/13}* And you know how those always go for us.'
         ],
         asriel52: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/6}* 讓我猜猜，\n  那臺破電梯沒法直達三樓？",
                  '<25>{#f/8}* ...',
                  "<25>{#f/7}* 早該料到\n  他會讓我們跑斷腿的。"
               ],
               ['<25>{#p/asriel2}{#f/8}* One floor down, two floors to go...']
            ][Math.min(SAVE.flag.n.ga_asriel52++, 1)],

         hotel0: () =>
            SAVE.flag.b.asriel_electrics
               ? [['<25>{#p/asriel2}{#f/8}* ...', '<25>{#p/asriel2}{#f/7}* Right.'], []][
               Math.min(SAVE.flag.n.ga_asrielElectrics0++, 1)
               ]
               : [
                  [
                     "<25>{#p/asriel2}{#f/6}* 真奇怪，\n  這裡不該這麼黑啊。",
                     "<25>{#f/7}* 肯定是有人\n  把供電系統弄短路了。"
                  ],
                  ['<25>{#p/asriel2}{#f/10}* 說實在的，\n  到底是誰熄了燈呢？'],
                  []
               ][Math.min(SAVE.flag.n.ga_asrielHotel0++, 1)],
         hotel1: () =>
            SAVE.flag.n.genocide_milestone < 5
               ? SAVE.flag.b.asriel_electrics
                  ? [
                     '<25>{#p/asriel2}{#f/15}* 仔細想想...',
                     '<25>{#f/16}* 這次停電\n  像是魔法造成的。',
                     "<26>{#f/3}* 我大概明白了。"
                  ]
                  : [
                     '<25>{#p/asriel2}{#f/10}* ...安保屏障去哪了？',
                     '<25>{#f/10}{#x1}* 看看這安保門，都燒壞了。'
                  ]
               : [
                  '<25>{#p/asriel2}{#f/13}* ...一想到如此嚴重的破壞\n  是她的魔法造成的...',
                  '<25>{#p/asriel2}{#f/1}* 我就感到後怕。'
               ],
         hotelElectrics: [
            '<25>{#p/asriel2}{#f/10}* 櫃檯上那些便條\n  你看了嗎？',
            '<25>{#f/6}* Alphys來過這，\n  那就說得通這兒的電路\n  什麼情況了。',
            '<25>{#f/15}* 不過就來那麼會，\n  能把這兒的電器全燒壞了？',
            "<25>{#f/16}* ...這也太荒唐了吧..."
         ],
         hotel2: () =>
            [
               [
                  "<25>{#p/asriel2}{#f/3}* Abandoned.\n* As you'd expect.",
                  "<25>{#f/4}* ... come on, let's get to the CORE."
               ],
               []
            ][Math.min(SAVE.flag.n.ga_asrielHotel2++, 1)],
         core0: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/3}* At last...',
                  '<25>{#f/4}* The central source of power for the outpost.',
                  '<25>{#p/asriel2}{#f/8}* Stay close. ELITE squad members might be lurking nearby.'
               ],
               []
            ][Math.min(SAVE.flag.n.ga_asrielCore0++, 1)],
         core1: ['<25>{#p/asriel2}{#f/10}* No guards...?', '<25>{#f/15}* Golly... they really ARE afraid of us.'],
         core2: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/3}* Finally, the central control room.',
                  "<25>{#f/3}* From here, there's practically a control for everything.",
                  '<25>{#f/15}* Gravity plating, heat distribution, even the atmosphere...',
                  '<25>{#f/4}* It all runs through this system.',
                  "<25>{#f/3}* Let's see if my royal access codes still hold weight.",
                  "<25>{#f/2}* I wouldn't put it past them to forget..."
               ],
               [
                  '<25>{#p/asriel2}{#f/6}* Okay, we made it back.',
                  ...(SAVE.flag.b.asriel_access ? [] : ["<25>{#f/7}* Let's give those royal access codes a try."])
               ]
            ][Math.min(SAVE.flag.n.ga_asrielCore2++, 1)],
         core3: () => [
            '<26>{*}{#p/asriel2}{#f/6}* System, extend the bridge, authorization Asriel STARLING-4-7-7-4.{^40}{%}',
            ...(SAVE.flag.b.asriel_access ? [] : ['<25>{*}{#f/6}* ...{^40}{%}', '<25>{*}{#f/7}* I guess no- {%}'])
         ],
         core4a: ['<25>{#p/asriel2}{#f/10}* I guess so.'],
         core4b: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/3}* Think you can get the back door unlocked while I set this up?',
                  '<25>{#f/4}* Pick a side, left or right, and hit the switch at the end.',
                  "<25>{#f/1}* I'll be waiting."
               ],
               ["<25>{#f/4}* You do your part, and I'll do mine."]
            ][Math.min(SAVE.flag.n.ga_asrielCore4++, 1)],
         core5: ['<25>{#p/asriel2}{#f/8}* Wrong way, $(name).'],
         core6a: () =>
            [
               [
                  '<25>{#p/asriel2}{#f/16}* Perfect timing.\n* We should be all set to go now.',
                  "<25>{#f/1}* All that's left is to make it to an escape shuttle...",
                  '<25>{#f/9}* Set off the blast...',
                  '<25>{#f/2}* And ride the shockwave to freedom.',
                  "<25>{#f/17}* ... aren't you excited, $(name)?",
                  "<25>{#f/17}* Aren't you happy?",
                  "<25>{#f/18}* ...\n* We're going to be free!"
               ],
               ['<25>{#p/asriel2}{#f/9}* Ready when you are, $(name).']
            ][Math.min(SAVE.flag.n.ga_asrielCore5++, 1)],
         core6b: ["<25>{#p/asriel2}{#f/16}* I'm right behind you."],
         core7a: ['<25>{#p/asriel2}{#f/8}* 等等，好像有人。'],
         core7b: [
            "<25>{#p/asriel2}{#f/3}* 是Mettaton。\n* 他在裡面等著我們。",
            '<25>{#f/10}* 不過，只能看清背影...',
            '<25>{#f/6}* 咱悄悄溜到他身後，\n  興許能打他個措手不及。'
         ],
         core7c: ['<25>{#p/asriel2}{#f/7}* 你知道該做什麼。'],
         core8a: [
            "<32>{#p/mettaton}* 真以為\n  我會輕易放你們走？",
            "<25>{#p/asriel2}{#f/8}* ...\n* 少跟我拐彎抹角。",
            "<25>{#p/asriel2}{#f/7}* 不過，你愛放不放，\n  我們才懶得管。\n* 畢竟，你早晚都得死。"
         ],
         core8aX: () => [
            "<32>{#p/mettaton}* 真以為\n  我會輕易放你們走？",
            "<25>{#p/asriel2}{#f/8}* 別廢話了，蠢貨。\n  這臺詞我都聽膩了。",
            '<32>{#p/mettaton}* 呃...',
            "<32>{#p/mettaton}* 那不正好說明，\n  你們死在了我的手下嗎？",
            ...(SAVE.flag.n.genocide_milestone < 4
               ? [
                  "<32>{#p/mettaton}* 呵... 別擔心，親。\n* 這次，就讓你死得更痛快。"
               ]
               : [
                  '<25>{#p/asriel2}{#f/2}* 哎呀，你可真蠢。',
                  "<25>{#p/asriel2}{#f/1}* 看清楚，死的人其實是你。\n* 不過，我們很樂意\n  再把你送進地獄。",
                  '<32>{#p/mettaton}* ...',
                  "<32>{#p/mettaton}* 說得好... \n  不過我可不吃你這一套。"
               ])
         ],
         core8b: [
            "<25>{#p/asriel2}{#f/4}* 嘖嘖，變成破銅爛鐵之前，\n  讓我問問你...",
            "<25>{#f/3}* 拋棄親人，\n  離家出走的時候...",
            '<25>{#f/1}* 就沒考慮過他們的感受？',
            '<32>{#p/mettaton}* 我的家人看到我正在做的，\n  肯定會以我為榮。',
            '<32>* ...至於你呢？',
            "<32>* 那就不好說了。",
            "<25>{#p/asriel2}{#f/6}* 我才不在乎那些廢物。",
            '<25>{#f/8}* 而你放不下家人，\n  就有了一個致命的軟肋。',
            '<25>{#f/6}* 光憑這點，你就註定要輸。'
         ],
         core8c: [
            '<32>{#p/mettaton}* 聽好了，小子。',
            "<32>* 你那點威脅，對我屁用沒有。",
            "<32>* 反正，你馬上就要死在我的手裡。",
            '<32>* 看來，你只會大放厥詞，\n  四處炫耀。',
            '<32>* 自吹自擂，\n  說自己是常勝將軍的時候...',
            "<32>* 卻忽視了最關鍵的一點。"
         ],
         core8d: ['<25>{#p/asriel2}{#f/10}* 忽視了什麼？'],
         core8e: ['<32>{*}{#p/mettaton}{#f/1}* NEO之力。{^40}{%}'],
         azzyBpants: ['<25>{#p/asriel2}{#f/8}* Golly.\n* Why is HE still around.']
      },
      coreswitched: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (You can't seem to operate the switch any further.)"]
            : world.darker
               ? ["<32>{#p/basic}* It's stuck, like always."]
               : SAVE.data.n.plot === 72
                  ? ["<33>{#p/basic}* The switch is... zero-time use.\n* That's totally a thing that can happen, honest."]
                  : ['<32>{#p/basic}* The switch is... one-time use.\n* And totally not stuck like all the other ones.'],
      puzzlesolved: () =>
         SAVE.data.b.svr
            ? ["<32>{#p/human}* (You can't seem to operate the switch any further.)"]
            : world.darker
               ? ["<32>{#p/basic}* It's stuck, like always."]
               : SAVE.data.n.plot === 72
                  ? ['<32>{#p/basic}* The switch looks even more resistant to pressing than it was before.']
                  : ["<32>{#p/basic}* The switch no longer wants to be pressed.\n* ... yes, it's stuck."],
      nosleep: () =>
         SAVE.data.b.svr ? ["<32>{#p/human}* (You can't seem to find a way in.)"] : ["<32>{#p/basic}* 鎖住了。"],
      rg1chat: pager.create(
         0,
         [
            '<32>{#p/basic}{#x1}* My boyfriend and I got lost looking for ice cream during training...{#x3}',
            '<32>{#x1}* Eventually, we just gave up and settled for pizza.{#x3}',
            "<32>{#x1}* Then we took up security duty at this post since that's the most we're qualified to do.{#x3}"
         ],
         [
            "<32>{#p/basic}{#x1}* I've been told us security folks get SUPER exclusive discounts at the shop.{#x3}",
            '<32>{#x1}* Totally not part of the reason we came here, though.{#x3}'
         ]
      ),
      rg2chat: pager.create(
         0,
         [
            "<32>{#p/basic}{#x2}* Hey, aren't you like, that one quiet kid we saw earlier?{#x3}",
            '<32>{#x2}* I wonder why Alphys had to escort you...{#x3}',
            '<32>{#x2}* You must be... MEGA important.{#x3}'
         ],
         [
            "<32>{#p/basic}{#x2}* If you're gonna be famous, then don't forget about us when you make it there, yeah?{#x3}",
            "<32>{#x2}* Always gotta remember the lil' bros you meet along the way.{#x3}"
         ]
      ),
      elevator1: () => [
         choicer.create('* （你想去哪裡？）', '取消', '核心入口', '核心出口', '首塔')
      ],
      elevatorStory1: () => [choicer.create('* （你想去哪裡？）', '核心入口', '取消')],
      elevator2: () => [
         choicer.create('* （你想去哪裡？）', '空境', '取消', '核心出口', '首塔')
      ],
      elevatorStory2: () => [choicer.create('* （你想去哪裡？）', '空境', '取消')],
      elevator3: () => [
         choicer.create('* （你想去哪裡？）', '空境', '核心入口', '取消', '首塔')
      ],
      elevatorStory3: () => [choicer.create('* （你想去哪裡？）', '首塔', '取消')],
      elevator4: () => [
         choicer.create('* （你想去哪裡？）', '空境', '核心入口', '核心出口', '取消')
      ],
      dinnerdate1: pager.create(
         0,
         () => [
            "<25>{#p/sans}* hey, i heard you're visiting here.",
            '<25>{#p/sans}{#f/2}* mind grabbing some dinner with me real quick?',
            choicer.create('* （共進晚餐嗎？）', '是', '否')
         ],
         () => ['<25>{#p/sans}{#f/2}* changed your mind?', choicer.create('* （共進晚餐嗎？）', '是', '否')]
      ),
      dinnerdate2a: pager.create(
         0,
         ["<25>{#p/sans}{#f/3}* eh, fair enough.\n* i'll be here if you change your mind."],
         ['<25>{#p/sans}{#f/3}* ok then.']
      ),
      dinnerdate2b: ['<25>{#p/sans}{#p/sans}{#f/0}* sweet.'],
      dinnerdate3: ['<25>{#p/sans}{#f/2}* right this way.'],
      dinnerdate4: ['<25>{#p/sans}* here we are.'],
      dinnerdate5: ['<25>{#p/sans}* this table looks good.'],
      dinnerdate5b: ["<25>{#f/2}* i'll take right, you take left."],
      dinnerdate8: () => [
         '<25>{#p/sans}* so...',
         "<25>{#f/3}* your journey's almost over, huh?",
         '<25>{#f/0}* you must really wanna get outta here.',
         '<25>{#f/0}* ... heh.\n* trust me, i know the feeling, buddo.',
         ...(world.bad_lizard < 1 && SAVE.data.n.bully < 15
            ? [
               "<25>{#f/3}* ... i also know you've got a lot to leave behind.",
               "<25>{#f/0}* out here, you've got food, drink, friends...",
               '<25>{#f/2}* would staying with us really be so bad?'
            ]
            : [
               "<25>{#f/3}* ... i also know you've got a lot on your mind.",
               "<25>{#f/0}* but whatever you may've done...",
               '<25>* is getting out of here really worth all that trouble?'
            ])
      ],
      dinnerdate10: ['<25>{#f/0}* ...'],
      dinnerdate11: () => [
         '<25>{#f/3}* lemme tell you a story.',
         "<25>{#f/0}* so, i'm a royal sentry, right?",
         '<25>{#f/0}* my job is to sit out there and watch for humans.',
         "<25>{#f/3}* though, i'm sure you've realized by now...",
         '<25>{#f/2}* i actually took the job so i could PROTECT you guys instead.',
         ...(SAVE.data.n.state_foundry_undyne > 0
            ? [
               "<25>{#f/3}* i'd worry about someone finding out, but... y'know.",
               "<25>{#f/0}* not many people around these days who'd care."
            ]
            : world.bad_lizard < 1 && SAVE.data.n.bully < 15
               ? ["<25>{#f/4}* shh, don't tell undyne i said that.\n* she wouldn't like it."]
               : ["<25>{#f/0}* ... ironic, isn't it?"]),
         "<25>{#f/0}* anyway, i've got this super boring job, right?",
         "<25>{#f/0}* fortunately, there's a little place near the edge of starton.",
         "<25>{#f/0}* and at the end of the bridge to this place lies a big ol' door.",
         '<25>{#f/4}* now this door was PERFECT for practicing knock knock jokes.',
         "<25>{#f/0}* one day, i'm knockin' em out like usual...",
         '<25>{#f/0}* and i knock on the door and say \"knock knock.\"\n* like usual.',
         '<25>{#f/0}* but then, from the other side...',
         "<25>{#f/3}* i hear a woman's voice.",
         '<32>{#p/soriel}* \"Who is there?\"',
         '<25>{#p/sans}{#f/0}* naturally, i respond.',
         '<25>{#f/2}* \"water.\"',
         '<32>{#p/soriel}* \"Water who?\"',
         '<25>{#p/sans}{#f/4}* \"water you doing all the way out here?\"',
         '<25>{#f/0}* and she just LOSES it.',
         "<25>* like it's the first joke she's heard in a hundred years.",
         '<25>{#f/2}* so, naturally, i tell her some more.',
         '<25>{#f/0}* after about a half dozen or so, SHE knocks and says...',
         '<32>{#p/soriel}* \"Knock knock!\"',
         '<25>{#p/sans}* i say \"who\'s there?\"',
         '<32>{#p/soriel}* \"You.\"',
         '<25>{#p/sans}* \"you who?\"',
         '<32>{#p/soriel}* \"I\'m not a dog, mister!\"',
         '<25>{#p/sans}{#f/0}* ... heh.',
         '<25>{#f/2}* needless to say, this woman knew her stuff.',
         '<25>{#f/0}* we kept going for a while, but eventually, she had to go.',
         '<25>{#f/0}* the next day, though...',
         '<25>* she was waiting for me when i returned.',
         '<25>{#f/3}* ... and boy did she have a lot to say.',
         '<32>{#p/soriel}* \"... I just felt it was the right thing to do...\"',
         '<32>{#p/soriel}* \"... I have to protect them...\"',
         '<32>{#p/soriel}* \"... it\'ll never be like it was before...\"',
         '<25>{#p/sans}{#f/3}* turns out, there was more to this woman than meets the ear.',
         '<25>{#f/0}* oh, and she also had a ton of weird stuff to say about asgore.',
         "<25>{#f/3}* i'll spare you on the details, but let's just say...",
         "<25>{#f/2}* isolation can really screw with a person's world view."
      ],
      dinnerdate13: ['<25>{#p/sans}{#f/0}* shoot, i forgot to order something, huh?', '<25>* ...'],
      dinnerdate14: ["<25>{#f/3}* i'll be right back."],
      dinnerdate14comment: () =>
         world.darker
            ? ['<32>{#p/basic}* ...']
            : SAVE.data.b.oops
               ? ['<32>{#p/basic}* Truly, there is no experience like waiting for food.']
               : [
                  '<32>{#p/basic}* You know...',
                  "<32>{#p/basic}* I would've said more to her back there, but at the same time...",
                  '<32>{#p/basic}* ... would it really have made any difference?'
               ],
      dinnerdate15: () =>
         SAVE.data.b.water
            ? [
               '<25>{#p/sans}* look at that, you even brought a drink.',
               "<25>{#p/sans}{#f/2}* don't worry.\n* i already had mine at the counter."
            ]
            : [
               "<25>{#p/sans}* now we're talking.",
               "<25>{#p/sans}{#f/2}* don't worry.\n* i already had my food at the counter."
            ],
      dinnerdate16: () => [
         '<25>{#f/0}* anyway, like i was saying...',
         '<25>{#f/3}* this woman was under a lot of stress.',
         '<25>{#f/0}* so i asked her...',
         '<25>{#f/2}* \"wanna know what a skeleton does to pass the time?\"',
         '<32>{#p/soriel}* \"What do they do?\"',
         '<25>{#p/sans}{#f/2}* 然後我拿起長號\n  吹了一段骨樂。',
         '<25>{#f/4}* her being her, she INSTANTLY got the joke.',
         "<25>{#f/0}* ... that night ended up being the best we'd ever have.",
         '<25>{#f/0}* fast-forward to today, and well...',
         "<25>{#f/2}* i've mostly just been watching over you.",
         "<25>{#f/0}* but hey, i'd say i'm doing a pretty good job, wouldn't you?",
         '<25>{#f/3}* i mean, look at yourself...',
         "<25>{#f/0}* you haven't died a single time.",
         ...(SAVE.flag.n._deaths > 0
            ? ['<25>{#f/0}* ...', "<25>{#f/0}* hey, what's that look supposed to mean?", '<25>{#f/2}* am i wrong...?']
            : SAVE.flag.n._hits > 0
               ? ['<25>{#f/2}* heh.\n* chalk it up to my great skills.']
               : ["<25>{#f/2}* heh.\n* i doubt you've even got a scratch on you."])
      ],
      dinnerdate18: () => [
         ...(SAVE.flag.n._deaths > 0 ? ['<25>{#p/sans}{#f/0}* heh.'] : []),
         '<25>{#p/sans}{#f/0}* well, enjoy the food, and... i hope you learned something.' 
      ],
      dinnerdate19: () => [
         "<25>{#f/3}* just remember, we're all rootin' for ya, bud.",
         ...(SAVE.data.n.exp <= 0
            ? SAVE.data.n.state_foundry_undyne === 1
               ? ["<25>{#f/0}* ... regardless of who you could've saved."]
               : ["<25>{#f/2}* ... even undyne's probably on your side by now."]
            : world.bad_lizard < 1 && SAVE.data.n.bully < 15
               ? ["<25>{#f/0}* ... regardless of what you've done."]
               : ['<25>{#f/0}* ... well, most of us, anyway.'])
      ],
      onionsan1: ['<32>{#p/basic}* Hey there...\n* Noticed you were here...'],
      onionsan1a: ["<32>{#p/basic}* I'm Onionsan!\n* Onionsan, y'hear!"],
      onionsan2: () =>
         world.goatbro
            ? ["<32>{#p/basic}* You two, don't look like you're up to any good..."]
            : ["<32>{#p/basic}* You, look like you've traveled a long way to get here..."],
      onionsan2a: () =>
         world.goatbro
            ? ["<32>{#p/basic}* Good thing, the rec center people will always forgive us!\n* It's my Big Favorite."]
            : ["<32>{#p/basic}* Good thing, people like us are who the rec center is for!\n* It's my Big Favorite."],
      onionsan3: [
         "<32>{#p/basic}* Though...\n* I'm too wide to fit inside...",
         '<32>{#p/basic}* Outer space makes onions grow Super Duper Fast.'
      ],
      onionsan3a: () =>
         world.goatbro
            ? [
               "<32>{#p/basic}* But I'll find a path to betterment soon, y'hear!",
               "<32>{#p/basic}* They're, gonna break the force field real good, y'hear!"
            ]
            : [
               "<32>{#p/basic}* But I'll find a home soon, y'hear!",
               "<32>{#p/basic}* They're, gonna break the force field real good, y'hear!"
            ],
      onionsan4: ["<32>{#p/basic}* And then...\n* I'll venture out...\n* To the cosmos..."],
      onionsan4a: ["<32>{*}{#p/basic}* We're all gonna be freeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeee{^999}"],
      onionsan4x: ['<25>{#p/asriel2}{#f/8}* Sure, whatever.'],
      candy1: () =>
         postSIGMA()
            ? ["<32>{#p/basic}* 停機了。"]
            : [
               SAVE.data.b.svr
                  ? '<32>{#p/human}* (You approach the vending machine.)'
                  : "<32>{#p/basic}* 這是個專賣燈芯的自動售貨機。",
               choicer.create('* （花40G買五根燈芯嗎？）', '是', '否')
            ],
      candy2: ["<32>{#p/human}* （你的錢不夠。）"],
      candy3: ["<32>{#p/human}* （你帶的東西太多了。）"],
      candy4: ['<32>{#p/human}* （你買了一些燈芯。）'],
      candy5: ['<32>{#p/human}* （你決定先不買。）'],
      bedreceptionist1: pager.create(
         0,
         () =>
            SAVE.data.n.plot === 72
               ? [
                  "<32>{#p/basic}{#npc/a}* Welcome to Four Dimensions.\n* We're closed.\n* Section two, freedom clause.",
                  '<32>* People never read the terms and conditions...'
               ]
               : SAVE.data.b.killed_mettaton
                  ? [
                     '<32>{#p/basic}{#npc/a}* Welcome to Four Dimensions, the hotel where sleep meets the edge of perception.',
                     '<32>* All of our currently allocated rooms have been reserved.',
                     '<32>* Please return at a later time, when more space has been allocated.'
                  ]
                  : [
                     '<32>{#p/basic}{#npc/a}* Welcome to Four Dimensions, the hotel where sleep meets the edge of perception.',
                     "<32>* Once you reserve a room with us, it's yours forever.",
                     "<32>* We've got a junior suite open on the left stack for 300G.\n* Interested?{#npc}",
                     choicer.create('* (Own a room?)', '是', '否')
                  ],
         () =>
            SAVE.data.n.plot === 72
               ? ['<32>{#p/basic}{#npc/a}* See you on the homeworld.']
               : SAVE.data.b.killed_mettaton
                  ? ['<32>{#p/basic}{#npc/a}* Until next time!']
                  : [
                     '<32>{#p/basic}{#npc/a}* 300G to own a junior suite.\n* Interested?{#npc}',
                     choicer.create('* (Own a room?)', '是', '否')
                  ]
      ),
      bedreceptionist2a: [
         '<32>{#p/basic}{#npc/a}* Thanks, we look forward to seeing you sleep safely and comfortably!'
      ],
      bedreceptionist2b: ["<32>{#p/basic}{#npc/a}* Well, you're always welcome to change your mind."],
      bedreceptionist3: ["<32>{#p/basic}{#npc/a}* I'm afraid you don't have enough G for that."],
      bedreceptionist4: () =>
         SAVE.data.n.plot === 72
            ? [
               '<32>{#p/basic}{#npc/a}* As always, we thank you for purchasing a room.',
               "<32>* We'll be closing soon, so make the most of your room while you still can!"
            ]
            : [
               '<32>{#p/basic}{#npc/a}* Thanks for purchasing a room at Four Dimensions!',
               ...(SAVE.data.b.killed_mettaton ? ['<32>* You were fortunate to have done so when you did.'] : [])
            ],
      core1: [
         '<32>{#p/event}* 鈴鈴，鈴鈴...',
         '<25>{#p/alphys}{#g/alphysNeutralSweat}* ... h-hiya.',
         "<25>* That's the elevator to the Citadel.",
         "<25>{#g/alphysInquisitive}* I'd have you go there straight away, but...",
         "<25>{#g/alphysWelp}* It's... kind of not working right now.",
         "<25>{#g/alphysCutscene3}* You'll have to go through the CORE instead.",
         "<25>{#g/alphysUhButHeresTheDeal}* When you're ready, head down there and I'll call you back!"
      ],
      core2a: () =>
         [
            [
               '<32>{#p/event}* 鈴鈴，鈴鈴...',
               "<25>{#p/alphys}{#g/alphysSmileSweat}* Okay, you're here.",
               "<25>{#g/alphysSmileSweat}* I'll keep an open line between us while you're down here...",
               '<25>{#g/alphysWelp}* ... just in case something bad happens.',
               ...(SAVE.data.n.plot < 66.2
                  ? [
                     '<25>{#g/alphysInquisitive}* The ELITE squad members who patrol here SHOULD be on break, but...',
                     "<25>{#g/alphysNeutralSweat}* ... well, I can't make any guarantees."
                  ]
                  : [
                     "<25>{#g/alphysInquisitive}* Since we're here ahead of schedule, the ELITE squad is off-duty.",
                     "<25>{#g/alphysNeutralSweat}* ... let's hope that makes things easier."
                  ])
            ],
            SAVE.data.n.plot < 66.2
               ? [
                  '<32>{#p/event}* 鈴鈴，鈴鈴...',
                  '<25>{#p/alphys}{#g/alphysWelp}* Okay, ready to continue?',
                  '<25>{#g/alphysNeutralSweat}* Remember, g-gotta keep an eye out for the ELITE squad members.'
               ]
               : SAVE.data.n.plot < 67
                  ? [
                     '<32>{#p/event}* 鈴鈴，鈴鈴...',
                     '<25>{#p/alphys}{#g/alphysWelp}* Okay, ready to continue?',
                     '<25>{#g/alphysNeutralSweat}* Remember, g-gotta unlock that door...'
                  ]
                  : [
                     '<32>{#p/event}* 鈴鈴，鈴鈴...',
                     '<25>{#p/alphys}{#g/alphysWelp}* Okay, ready to continue?',
                     "<25>{#g/alphysNeutralSweat}* We're almost to the end, you know..."
                  ],
            ['<32>{#p/event}* 鈴鈴，鈴鈴...', "<25>{#p/alphys}{#g/alphysWelp}* I'll be on the line."]
         ][Math.min(SAVE.data.n.state_aerialis_coreenter++, 2)],
      core2b: () =>
         [
            [
               "<25>{#p/alphys}{#g/alphysInquisitive}* If you're leaving the CORE, I'll hang up the phone for now.",
               "<25>{#g/alphysCutscene2}* I'll call you back when y-you return here!"
            ],
            ['<25>{#p/alphys}{#g/alphysNervousLaugh}* Leaving again?', '<25>{#g/alphysWelp}* Alright then.'],
            [
               '<25>{#p/alphys}{#g/alphysFR}* ...',
               '<25>{#g/alphysFR}* You better not be doing this just to see how I react.'
            ],
            ['<25>{#p/alphys}{#g/alphysCutscene3}* ...']
         ][Math.min(SAVE.data.n.state_aerialis_coreleave++, 3)],
      core3: ['<25>{*}{#p/alphys}{#g/alphysShocked}* Watch out!{^999}'],
      core4: () =>
         SAVE.data.b.legendary_madjick
            ? ["<25>{#p/alphys}{#g/alphysCutscene3}* Huh?\n* What's with that item?"]
            : SAVE.data.b.assist_madjick
               ? [
                  '<25>{#p/alphys}{#g/alphysCutscene3}* What the... what did you just DO??',
                  '<25>* What did you SAY to them to make them walk away like that!?',
                  '<32>{#p/basic}* Heh.\n* Sometimes all you need are the right words.'
               ]
               : !SAVE.data.b.killed_madjick
                  ? [
                     '<25>{#p/alphys}{#g/alphysNervousLaugh}* Phew...',
                     "<25>{#g/alphysNeutralSweat}* L-let's hope that doesn't happen again.",
                     ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* ... guess you didn't need my help after all."])
                  ]
                  : world.bad_lizard === 0
                     ? [
                        '<25>{#p/alphys}{#g/alphysSideSad}* No... why...',
                        '<25>{#g/alphysWorried}* ...',
                        "<25>* Couldn't there have been... another way?"
                     ]
                     : [
                        '<25>{#p/alphys}{#g/alphysSideSad}* No... why...',
                        '<25>{#g/alphysThatSucks}* ...',
                        "<25>* At least it won't be long until we're outta here."
                     ],
      core5: ['<25>{*}{#p/alphys}{#g/alphysOhGodNo}* Wait!!!{^999}'],
      core6: () =>
         SAVE.data.b.legendary_knightknight
            ? SAVE.data.b.assist_madjick || SAVE.data.b.legendary_madjick
               ? [
                  "<25>{#p/alphys}{#g/alphysWTF}* I can't believe what I'm seeing...",
                  ...(SAVE.data.b.oops || !SAVE.data.b.assist_madjick
                     ? []
                     : ["<32>{#p/basic}* ... guess you don't need my help this time, huh?"])
               ]
               : ["<25>{#p/alphys}{#g/alphysCutscene3}* Huh?\n* What's with that item?"]
            : SAVE.data.b.assist_knightknight
               ? SAVE.data.b.assist_madjick || SAVE.data.b.legendary_madjick
                  ? [
                     "<25>{#p/alphys}{#g/alphysWTF}* I can't believe what I'm seeing...",
                     '<32>{#p/basic}* Take it from me.\n* Sentimentality is my specialty!',
                     '<32>{#p/basic}* Magic words and warrior songs are the lifeblood of these old homeworld heroes.'
                  ]
                  : [
                     '<25>{#p/alphys}{#g/alphysCutscene3}* What the... what did you just DO??',
                     '<25>* What did you SAY to them to make them walk away like that!?',
                     '<32>{#p/basic}* Heh.\n* Sometimes all you need are the right high notes.'
                  ]
               : !SAVE.data.b.killed_knightknight
                  ? [
                     '<25>{#p/alphys}{#g/alphysWelp}* ...',
                     ...(SAVE.data.b.killed_madjick
                        ? ['<25>{#g/alphysWelp}* At least you both survived this time.']
                        : [
                           '<25>* The next room awaits.',
                           ...(SAVE.data.b.oops || !SAVE.data.b.assist_madjick
                              ? []
                              : ["<32>{#p/basic}* ... guess you don't need my help this time, huh?"])
                        ])
                  ]
                  : SAVE.data.b.killed_madjick || world.bad_lizard === 0
                     ? ['<25>{#p/alphys}{#g/alphysThatSucks}* ...', '<32>{#p/human}* (You hear a long sigh.)']
                     : [
                        '<25>{#p/alphys}{#g/alphysWorried}* ...',
                        '<25>{#g/alphysWorried}* That should be the l-last of the engineers.'
                     ],
      core7: [
         '<25>{#p/alphys}{#g/alphysWelp}* So... this is the CORE.\n* Or rather, the \"core\" of the CORE.',
         '<25>{#g/alphysInquisitive}* There are two p-paths you can take to unlock the door behind it...',
         "<25>* The puzzler's to the left, and the fighter's to the right.",
         '<25>{#g/alphysFR}* Both are... difficult.\n* But...',
         "<25>{#g/alphysWelp}* I'd suggest t-taking the puzzler's path.",
         "<25>{#g/alphysSideSad}* It's up to you, of course...",
         "<25>{#g/alphysHaveSomeCompassion}* But at least that way, you won't... risk a conflict."
      ],
      core8a: (nooted: boolean) => [
         "<25>{#p/alphys}{#g/alphysSide}* So you've decided on the puzzler's path.",
         '<25>{#g/alphysWelp}* Probably a smart choice.',
         ...(nooted
            ? [
               '<25>{#g/alphysCutscene3}* The puzzles here are...',
               '<25>{#f/10}* ... already unlocked.',
               '<25>{#f/3}* Has it been like this the whole time?'
            ]
            : [
               "<25>{#g/alphysCutscene3}* The puzzles here are... uh, simple if you know what you're doing.",
               "<25>{#g/alphysCutscene2}* To summarize, though, it's really just a... big c-combination lock.",
               '<25>{#g/alphysWelp}* Use the switches to flip each segment until they all line up.'
            ])
      ],
      core8a1: () => ["<25>{#p/alphys}{#g/alphysInquisitive}* Unless you'd prefer the other path...?"],
      core8b: ["<25>{#p/alphys}{#g/alphysCutscene2}* That's one puzzle down."],
      core8b1: () => ["<25>{#p/alphys}{#g/alphysWelp}* I guess we're going this way now."],
      core8c: ['<25>{#p/alphys}{#g/alphysCutscene1}* You did it!\n* Now hit the switch in the next room!'],
      core8c1: [
         '<25>{#p/alphys}{#g/alphysInquisitive}* What are you doing...?',
         "<25>{#p/alphys}{#g/alphysFR}* Don't tell me you're switching paths NOW..."
      ],
      core8c2: (nooted: boolean) =>
         nooted
            ? [
               '<25>{#p/alphys}{#g/alphysWTF}* You are.\n* You are going down the other...',
               '<25>{#g/alphysFR}* ...',
               '<25>{#g/alphysFR}* Since when was this unlocked?'
            ]
            : ['<25>{#p/alphys}{#g/alphysWTF}* You are.\n* You are going down the other path.'],
      core8c3: [
         '<25>{#p/alphys}{#g/alphysWelp}* Now you have access to both switches.',
         '<25>{#p/alphys}{#g/alphysCutscene3}* Come on!'
      ],
      core8c4: ['<25>{#p/alphys}{#g/alphysGarboCenter}* ...', '<25>* You are seriously testing my patience right now.'],
      core9a: () => [
         "<25>{#p/alphys}{#g/alphysNeutralSweat}* So you've decided on the fighter's path.",
         ...(SAVE.data.b.killed_knightknight && (SAVE.data.b.killed_madjick || world.bad_lizard === 1)
            ? ['<25>* ...', '<25>{#g/alphysCutscene3}* Can you... maybe not kill anyone else?\n* If possible?']
            : SAVE.data.b.killed_knightknight || SAVE.data.b.killed_madjick
               ? ['<25>* ...', '<25>* This could be bad.']
               : [
                  "<25>{#g/alphysWelp}* We're certainly feeling adventurous today.",
                  "<25>* There's not much to it, you just gotta get through the guards.",
                  '<25>{#g/alphysCutscene2}* Uh... good luck?',
                  '<25>{#g/alphysCutscene3}* ...',
                  "<25>* Please don't die to these guys."
               ])
      ],
      core9a1: (nooted: boolean) =>
         nooted
            ? [
               "<25>{#p/alphys}{#g/alphysSide}* Oh, you're...",
               '<25>{#p/alphys}{#g/alphysCutscene3}* ... over here where the path is already unlocked.',
               '<25>{#p/alphys}{#f/3}* Has it been like this the whole time?'
            ]
            : [
               "<25>{#p/alphys}{#g/alphysSide}* Oh, you're over here now.",
               "<25>{#g/alphysInquisitive}* Puzzler's path it is?"
            ],
      core9b: () =>
         1 <= battler.exp
            ? [
               '<25>{#p/alphys}{#g/alphysNeutralSweat}* ...',
               corefriendly() ? '<25>* D-did you... really have to do that?' : '<32>{#p/human}* （你聽見一聲嘆息。）'
            ]
            : SAVE.data.b.a_state_nooted1
               ? [
                  "<25>{#p/alphys}{#g/alphysInquisitive}* I don't understand why you're still over here, you know.",
                  "<25>{#p/alphys}{#g/alphysCutscene3}* Why?\n* The puzzler's path is already unlocked!"
               ]
               : ["<25>{#p/alphys}{#g/alphysCutscene2}* You're past the first group!\n* Now for the second."],
      core9b1: (nooted: boolean) =>
         1 <= battler.exp && corefriendly()
            ? nooted
               ? [
                  "<25>{#p/alphys}{#g/alphysInquisitive}* Unless, of course, you're...",
                  '<25>{#p/alphys}{#g/alphysCutscene3}* ... gonna take the other path which is already unlocked.',
                  '<25>{#p/alphys}{#f/3}* Has it been like this the whole time?'
               ]
               : ["<25>{#p/alphys}{#g/alphysInquisitive}* Unless, of course, you're gonna take the other path...?"]
            : nooted
               ? [
                  '<25>{#p/alphys}{#g/alphysInquisitive}* Changed your...',
                  "<25>{#p/alphys}{#g/alphysCutscene3}* ... oh, it's already unlocked over here.",
                  '<25>{#p/alphys}{#f/3}* Has it been like this the whole time?'
               ]
               : ['<25>{#p/alphys}{#g/alphysInquisitive}* Changed your mind...?'],
      core9c: () =>
         calm_lizard()
            ? ['<25>{#p/alphys}{#g/alphysCutscene1}* You made it!\n* Now hit the switch in the next room!']
            : [
               '<25>{#p/alphys}{#g/alphysSideSad}* ...',
               SAVE.data.n.state_aerialis_corepath_puzzle < 3
                  ? "<25>{#p/alphys}{#g/alphysSideSad}* Hit the switch in the next room, and we'll be outta this place."
                  : '<25>{#p/alphys}{#g/alphysSideSad}* Hit the switch in the next room, and just be done with it.'
            ],
      core10a: ['<25>{#p/alphys}{#g/alphysCutscene2}* Okay, y-you should be able to continue forward now.'],
      core10b: [
         '<25>{#p/alphys}{#g/alphysWelp}* Oh, you came back.',
         '<25>{#g/alphysCutscene2}* Well, y-you should be able to continue forward now.'
      ],
      core10c: ['<25>{#p/alphys}{#g/alphysFR}* Finally.'],
      core11: (nooted: boolean) =>
         nooted
            ? [
               '<25>{#p/alphys}{#g/alphysInquisitive}* Why are you going...',
               '<25>{#f/21}* ...',
               '<25>{#f/22}* HAS THIS BEEN UNLOCKED THE WHOLE TIME!?'
            ]
            : ['<25>{#p/alphys}{#g/alphysInquisitive}* Why are you going back this way?', '<25>{#g/alphysFR}* ...'],
      core12: (nooted: boolean) =>
         nooted
            ? [
               
               '<25>{#p/alphys}{#g/alphysInquisitive}* Since when was this unlocked?',
               "<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* Well, that's gonna save a lot of time!"
            ]
            : SAVE.data.b.a_state_nooted1 && game.room === 'a_core_left2' // NO-TRANSLATE

               ? ['<25>{#p/alphys}{#g/alphysCutscene3}* What in the world...']
               : ['<25>{#p/alphys}{#g/alphysCutscene3}* You could have reached the capital by now.'],
      core12x: [
         '<25>{#p/alphys}{#g/alphysInquisitive}* Since when was this unlocked?',
         '<25>{#p/alphys}{#f/3}* Has it been like this the whole time?'
      ],
      core13: [
         "<25>{#p/alphys}{#g/alphysGarbo}* You've hit both switches.",
         '<25>{#p/alphys}{#g/alphysGarboCenter}* Happy now?'
      ],
      core14: () => [
         "<25>{#p/alphys}{#g/alphysWelp}* W-wait, there's someone ahead.",
         '<25>{#p/alphys}{#g/alphysNeutralSweat}* Let me see if I can clear the way this time...',
         SAVE.data.b.ubershortcut
            ? '<32>{#p/human}* (It sounds like someone is furiously typing at a keyboard.)'
            : '<32>{|}{#p/human}* (Yet again, the obligatory- {%}',
         "<25>{#p/alphys}{#g/alphysCutscene3}* They're not on the intercom system.",
         "<25>{#g/alphysUhButHeresTheDeal}* They're not even part of the guard!",
         '<25>{#g/alphysWelp}* ... this is not good.'
      ],
      core14a: [
         '<32>{#p/basic}* So you think you can just cross a bridge and make it to the other side, do you?',
         "<32>* Oouhuhu...\n* I'm afraid, dear comm-raid..."
      ],
      core14b: ["<32>{#p/basic}* You'll have to THINK AGAIN!{%20}"],
      core15: () =>
         !world.killed_mushketeer
            ? ['<25>{#p/alphys}{#g/alphysNeutralSweat}* Is... is that it?', '<25>* Are we clear?']
            : [
               '<26>{#p/alphys}{#g/alphysNeutralSweat}* Did... did you really...',
               '<25>{#g/alphysHaveSomeCompassion}* ... okay...'
            ]
   },

   b_group_aerialis: {
      froggitexWhimsalot: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* The f-first pair of guards.']
            : ['<32>{#p/story}* Final Froggit and Flutterknyte appeared before you!'],
      froggitexWhimsalotX: (whimmer: boolean) =>
         whimmer ? ['<32>{#p/story}* Flutterknyte now flies solo.'] : ['<32>{#p/story}* Final Froggit hops alone.'],
      astigmatism: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* Not these guys...']
            : world.genocide
               ? ['<32>{#p/story}* A smiling eye steps forth!']
               : ['<32>{#p/story}* The smiling eyes step forth!'],
      rg: () => (world.goatbro ? ['<32>{#p/asriel2}* 一號和二號守衛。'] : ['<32>{#p/story}* 皇家衛隊襲來！']),
      spacetopTsundere: () =>
         world.goatbro ? ['<32>{#p/asriel2}* 一個個都是瘋傢伙...'] : ["<32>{#p/story}* It's a space-faring nightmare!"],
      spacetopTsundereX: (spacetop: boolean) =>
         world.goatbro
            ? ['<32>{#p/asriel2}* 只剩一個了。']
            : spacetop
               ? ['<32>{#p/story}* Only Astro Serf remains.']
               : ['<32>{#p/story}* Only Tsunderidex remains.'],
      pyropeTsundere: () =>
         world.goatbro ? ['<32>{#p/asriel2}* The hot-headed army arrives.'] : ["<32>{#p/story}* It's a fiery cavalry!"],
      pyropeTsundereX: (pyrope: boolean) =>
         world.goatbro
            ? ['<32>{#p/asriel2}* 只剩一個了。']
            : pyrope
               ? ['<32>{#p/story}* Only Hotwire remains.']
               : ['<32>{#p/story}* Only Tsunderidex remains.'],
      astigmatismMigospelX: ['<32>{#p/story}* Eyewalker Prime takes charge of this battle!']
   },

   b_opponent_glyde: {
      name: '* Glyde',
      epiphaNOPE: ['<11>{#p/basic}{~}{#e/glyde/10}Get that thing out of my face, will you?'],
      act_check: ['<32>{#p/story}* GLYDE - ATK YES DEF YES\n* Refuses to give more details about its statistics.'],
      act_secret: () =>
         glade()
            ? SAVE.data.b.w_state_steak && SAVE.data.b.w_state_soda
               ? ['<32>{#p/human}* (You tell Glyde the password given to you by Aaron.)']
               : ["<32>{#p/human}* (You try to tell Glyde a password, but you don't have any passwords to tell.)"]
            : ['<33>{#p/human}* (You try to tell Glyde a password, but it shakes its head and interrupts you.)'],
      act_flirt1: ['<32>{#p/human}* (You flirt with Glyde.)'],
      act_flirt2: ["<32>{#p/human}* (You try flirting with Glyde, but it doesn't elicit a response.)"],
      act_berate: ['<32>{#p/human}* (You berate Glyde.)\n* (Glyde laughs at the attempt.)'],
      fightEnder1: [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/4}... huh?',
         '<20>{#p/basic}{~}Did you just say \"triple beefcake deluxe?\"',
         '<20>{#p/basic}{~}{#e/glyde/9}...',
         '<20>{#p/basic}{~}{#e/glyde/10}So...',
         "<20>{#p/basic}{~}{#e/glyde/5}YOU'RE the one who purchased my product in the Outlands!",
         '<20>{#p/basic}{~}And, not only that...',
         '<20>{#p/basic}{~}But you remembered the password, too!'
      ],
      fightEnder2: [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/4}... huh?',
         '<20>{#p/basic}{~}Did you just say \"triple beefcake deluxe?\"',
         '<20>{#p/basic}{~}{#e/glyde/9}...',
         '<20>{#p/basic}{~}{#e/glyde/10}So...',
         '<20>{#p/basic}{~}{#e/glyde/5}Not only have you purchased my product...',
         '<20>{#p/basic}{~}{#e/glyde/12}But you even remembered the password??'
      ],
      fightEnder3: [
         "<20>{#p/basic}{~}{#e/glyde/5}Boy, you don't know how long I've been waiting to hear those wonderful words.",
         "<20>{#p/basic}{~}{#e/glyde/12}What can I say except you're one freakadacious fella!",
         '<20>{#p/basic}{~}{#e/glyde/9}...',
         "<20>{#p/basic}{~}{#e/glyde/10}Tell you what.\nSince you're so kind, I'll get outta your way and go bother someone else.",
         '<20>{#p/basic}{~}{#e/glyde/5}Kahaha!\nCatch ya on the flipside, G!'
      ],
      fightItem1: (zero: boolean) => [
         '<20>{#p/basic}{~}Woah, hey, is that what I think it is?',
         "<20>{#p/basic}{~}Well I'll be stoked!\nAlways good to meet a happy customer.",
         ...(zero ? [] : ['<20>{#p/basic}{~}Anyway, as I was saying...'])
      ],
      fightItem2: () => [
         '<20>{#p/basic}{~}{#e/glyde/5}That too!?',
         iFancyYourVilliany()
            ? '<20>{#p/basic}{~}{#e/glyde/12}Well gee, \"$(moniker2)\", you\'re not too shabby!'
            : "<20>{#p/basic}{~}{#e/glyde/12}Well gee, human, you're not too shabby!",
         '<20>{#p/basic}{~}{#e/glyde/9}...',
         "<20>{#p/basic}{~}{#e/glyde/10}Tell you what.\nSince you're so kind, I'll get outta your way and go bother someone else.",
         '<20>{#p/basic}{~}{#e/glyde/5}Kahaha!\nCatch ya on the flipside, G!'
      ],
      intro1: ['<20>{#p/basic}{#p/basic}{~}{#e/glyde/6}呀哈哈，\n吃我這招，臭機器人！'],
      intro2a: () =>
         !world.badder_lizard
            ? ['<20>{#p/mettaton}你明知道ALPHYS\n和我還在這。']
            : ["<20>{#p/mettaton}你明知道我還在這兒。"],
      intro2b: ['<20>{#p/basic}{#p/basic}{~}{#e/glyde/8}閉嘴！這現在是\n我的舞臺了，機器怪。'],
      intro2c: ['<20>{#p/mettaton}（還蠻有意思。）'],
      intro3: ['<20>{#p/basic}{#p/basic}{~}{#e/glyde/4}哥們我有故事要講！'],
      status1: ['<32>{#p/story}* Glyde撲了過來！'],
      turn1a: () => [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/10}你不跟我戰鬥嗎？',
         iFancyYourVilliany()
            ? '<20>{#p/basic}{~}{#e/glyde/0}... surprising, coming from a common villain like you.'
            : '<20>{#p/basic}{~}{#e/glyde/0}...我猜你會的。'
      ],
      turn1b: () => [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/7}噢，\n我喜歡你的鬥志。',
         iFancyYourVilliany()
            ? '<20>{#p/basic}{~}{#e/glyde/10}Way to live up to your moniker, eh?'
            : "<20>{#p/basic}{~}{#e/glyde/10}那會對你\n很有幫助的..."
      ],
      turn1c: ["<20>{#p/basic}{~}{#e/glyde/10}Kahaha... no offense, but you're kinda sorta the wrong species."],
      turn1d: ["<20>{#p/basic}{~}{#e/glyde/9}Yeah, sorry, but I don't give out stats for free."],
      turn1e: [
         "<20>{#p/basic}{~}{#e/glyde/4}幾周前，\n我在思考\n關於賺錢的事...",
         '<20>{#p/basic}{~}{#e/glyde/0}然後我注意到\n利潤下降了。'
      ],
      turnStatus1: ['<32>{#p/story}* Glyde sees its reflection and gets jealous.'],
      turn2: [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/8}It turns out my one- hundred percent legit business...',
         '<20>{#p/basic}{~}{#e/glyde/8}Is under fire for being a fraud!',
         '<20>{#p/basic}{~}{#e/glyde/1}And I\'m thinking to myself \"you\'ve gotta be kidding me.\"'
      ],
      turnStatus2: ['<32>{#p/story}* Glyde is thinking of new slang for the word \"cool.\"'],
      turn3: [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/6}I can assure you that my steak enterprise is the rarest thing out there.',
         '<20>{#p/basic}{~}Nothing compares to these fine fillets!',
         '<20>{#p/basic}{~}You hear me?\nNothing!'
      ],
      turnStatus3: ['<32>{#p/story}* An arrogant-smelling wind blows through.'],
      turn4: [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/0}Why should you care?',
         '<20>{#p/basic}{~}{#e/glyde/2}Because...',
         '<20>{#p/basic}{~}{#e/glyde/2}Er...',
         "<20>{#p/basic}{~}{#e/glyde/5}Because you're the only one who can save my sales figures!"
      ],
      turnStatus4: ['<32>{#p/story}* Glyde does fancy flips.'],
      turn5: () => [
         iFancyYourVilliany()
            ? '<20>{#p/basic}{#p/basic}{~}{#e/glyde/6}With the infamous \"$(moniker2)\" by my side, nothing can stop me!'
            : "<20>{#p/basic}{#p/basic}{~}{#e/glyde/6}With MTT's precious human on my side, nothing can stop me!",
         "<20>{#p/basic}{~}{#e/glyde/7}Even the great Papa Gliden could only dream of the profits we'd make together!"
      ],
      turn5a: ["<20>{#p/alphys}I don't think attacking them is a great way to get them on your side."],
      turn5b: [
         '<20>{#p/basic}{#p/basic}{~}{#e/glyde/1}It\'s called a \"show of strength,\" buck-teeth{#x1}.',
         '<20>{#p/basic}{~}{#e/glyde/9}How else am I supposed to earn the respect of my business partners?'
      ],
      turn5c: ["<20>{#p/basic}{~}{#e/glyde/10}Exactly.\nYou don't know anything."],
      turnStatus5: ['<32>{#p/story}* Glyde is giving itself a high five... somehow.'],
      turn6a: ['<20>{#p/basic}{#p/basic}{~}{#e/glyde/6}So whaddya say, huh?'],
      turn6b: ['<20>{#p/basic}{#p/basic}{~}Crud.'],
      turn6c: () => [
         '<20>{#p/basic}{#e/bpants/12}Why do I ALWAYS end up taking out the trash around here?',
         '<20>...',
         '<20>{#e/bpants/0}Sorry for the trouble, little buddy.',
         "<20>{#e/bpants/11}I'm Burgie.\nNice to meet ya.",
         ...(ateThreshold() || (world.badder_lizard && world.bad_lizard > 1)
            ? [
               "<20>{#e/bpants/6}Glyde's been a problem around here for...",
               "<20>{#e/bpants/12}... hey, you're that kid who's been killing people!"
            ]
            : burger()
               ? [
                  "<20>{#e/bpants/6}Glyde's been a problem around here for...",
                  "<20>{#e/bpants/12}... hey, you're that kid who killed everyone in Starton!"
               ]
               : world.population === 0 && world.bullied
                  ? [
                     "<20>{#e/bpants/6}Glyde's been a problem around here for...",
                     "<20>{#e/bpants/12}... hey, aren't you that kid who's been beating everyone up?"
                  ]
                  : [
                     "<20>{#e/bpants/6}Glyde's been a problem around here for quite a while...",
                     "<20>{#e/bpants/1}Hopefully this latest stunt will get it to realize nobody's buying its crap anymore."
                  ])
      ],
      turn6d: [
         '<20>{#p/mettaton}漢堡褲！',
         "<20>IT'S SO VERY GREAT TO SEE YOU.",
         "<20>(DON'T WORRY, I CUT THE LIVE TV FEED AS SOON AS I SAW YOU COMING.)"
      ],
      turn6e: () =>
         ateThreshold()
            ? [
               "<20>{#p/basic}{#e/bpants/12}Don't you realize what you're dealing with here?",
               '<20>{#e/bpants/3}What the HELL are you doing putting THEM on TV!?'
            ]
            : ["<20>{#p/basic}{#e/bpants/12}I don't work for you anymore. Get lost."],
      turn6f: () =>
         ateThreshold()
            ? ['<20>{#p/mettaton}WOW, SORRY...', "<20>I DIDN'T KNOW IT WAS A CRIME TO HOST A TV SHOW."]
            : ['<20>{#p/mettaton}WOW, SORRY...', "<20>I DIDN'T KNOW YOU DISLIKED ME THAT MUCH."],
      turn6g: [
         '<20>{#p/basic}{#e/bpants/12}...',
         "<20>{|}{#p/basic}{#e/bpants/2}I seriously just can't with this guy I swear to go- {%}"
      ],
      turn6h: [
         "<20>{#p/mettaton}A-NY-WAY WE HAVE THINGS TO GET TO SO IF YOU DON'T MIND {%}",
         '<20>WOULD YOU KINDLY GET OFF THE STAGE PLEASE AND THANK YOU HAVE A GREAT DAY.'
      ],
      hurtStatus: ['<32>{#p/story}* Glyde is in danger.']
   },

   b_opponent_mettaton1: {
      artifact: ['<33>{#p/human}* (Mettaton shrugs at the sight.)'],
      name: '* Mettaton',
      epiphaNOPE: ["<20>{#p/mettaton}I DON'T THINK SO, DARLING..."],
      old_gun_text: ['<32>{#p/human}* (You fire the gun.)\n* (Mettaton absorbs its charge.)'],
      old_bomb_text: [
         '<32>{#p/human}* (You deploy the bomb.)\n* (The mist scatters about.)\n* (Mettaton is unaffected.)'
      ],
      old_spray_text: ['<32>{#p/human}* (You use the spray.)\n* (Sweet...)\n* (Mettaton eats it up.)'],
      old_gun_talk: ['<20>{#p/mettaton}HOW STUNNING A MOVE.'],
      old_bomb_talk: ["<20>{#p/mettaton}IT'S LIKE A RENT-FREE MIST MACHINE!"],
      old_spray_talk: ['<20>{#p/mettaton}SPICY.'],
      status1: () =>
         SAVE.data.n.plot < 67
            ? ['<32>{#p/story}* Mettaton開始行動了！']
            : ['<32>{#p/story}* Mettaton又回來了！'],
      act_check: () =>
         SAVE.data.n.plot < 67
            ? ['<32>{#p/story}* METTATON - 攻擊30 防禦255\n* 他的金屬制的身體\n  使他無懈可擊。']
            : ['<32>{#p/story}* METTATON - 攻擊30 防禦255\n* 沒想到，他的金屬身體\n  竟然使他無懈可擊！'],
      act_flirt: ['<32>{#p/human}* （你向Mettaton調情。）'],

      yellow1: () =>
         world.bad_lizard < 2 && SAVE.data.n.state_foundry_undyne !== 2
            ? [
               '<20>{#p/mettaton}WHAT IS IT WITH YOU AND THE COLOR RED?{^40}{%}',
               "<20>{#p/mettaton}{#x1}YOU SHOULD KNOW BY NOW THAT'S NOT GOING TO FLY HERE...{^40}{%}"
            ]
            : [
               "<20>{#p/mettaton}OH, DARLING, WHAT'S THAT I SEE?\nTHE COLOR RED?{^40}{%}",
               "<20>{#p/mettaton}{#x1}MY, MY... YOU'VE GOTTEN AWAY WITH THAT COLOR FOR FAR TOO LONG!{^40}{%}"
            ],
      yellow2: () => [
         world.bad_lizard < 2 && SAVE.data.n.state_foundry_undyne !== 2
            ? '<20>{#p/mettaton}WOW!!!\nSO MUCH BETTER!!!\nNOW YOU CAN PRESS [Z] TO SHOOT!!!{^40}{%}'
            : "<20>{#p/mettaton}ISN'T MAGIC JUST A WONDERFUL THING???\nNOW YOU CAN PRESS [Z] TO SHOOT!!!{^40}{%}",
         "<20>{#p/mettaton}(YOU CAN ALSO HOLD [C] TO SHOOT, BUT WHERE'S THE FUN IN THAT.){^40}{%}"
      ],

      checkTalk: ["<20>{#p/mettaton}欣賞ALPHYS的\n令人驚嘆的技術了？\n我不予置評。"],
      attackTalk: () =>
         SAVE.data.n.plot < 67
            ? ["<20>{#p/mettaton}YOU SILLY GOOSE.\nTHAT'S NOT GOING TO WORK ON ME, SWEETHEART!"]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}LISTEN, SWEETHEART.\nI'VE HAD ENOUGH PAIN TODAY AS IT IS.\nDO YOU MIND?"]
               : ["<20>{#p/mettaton}LISTEN, SWEETHEART.\nATTACKING ME WON'T DO YOU ANY FAVORS.\nESPECIALLY NOT NOW."],
      flirtTalk: ['<20>{#p/mettaton}喔喔喔...', '<20>GETTING FRISKY, EH?', "<20>我會記住的，親愛的~"],

      turn1: [
         "<20>{#p/mettaton}我們先從\n簡單的開始...",
         '<20>唱歌！',
         '<20>{|}你能夠- {%}'
      ],
      turn1a1: ['<20>...\n等一下。', '<20>是我的錯覺，\n還是...', '<20>你今天看起來\n有點「紅」呢？'],
      turn1a2: ['<20>博士，如果\n你可以的話...'],
      turn1b1: () =>
         SAVE.data.n.state_foundry_undyne > 0
            ? ["<20>{#p/alphys}好，好！\n我-我會的！"]
            : world.bad_lizard < 1
               ? ['<20>{#p/alphys}呃，好！']
               : ['<20>{#p/alphys}...嗯？'],
      turn1b2: () =>
         SAVE.data.n.state_foundry_undyne > 0 || world.bad_lizard < 1
            ? ['<20>{#p/alphys}請-請原諒我...']
            : ['<20>{#p/alphys}O-oh yeah, that.'],
      turn1c: ['<20>{*}{#p/mettaton}好多了。{^30}{%}'],
      turn1d: () =>
         SAVE.data.n.state_foundry_undyne > 0
            ? ['<20>{*}{#p/alphys}現-現在按[Z]\n來傳送。{^30}{%}']
            : world.bad_lizard < 1
               ? ['<20>{*}{#p/alphys}所以...\n你-你可以四處移動，\n然後按[Z]傳送！{^30}{%}']
               : ['<20>{*}{#p/alphys}四處移動，\n然後按[Z]傳送。{^30}{%}'],
      turn1e: ['<20>{*}{#p/mettaton}ALPHYS，ALPHYS，ALPHYS...{^30}{%}'],
      turn1f: ['<20>{*}我不是跟你說過\n不要給提示嗎？{^30}{%}'],
      turn1g: ['<20>{*}...{^30}{%}', '<20>{*}總之...{^30}{%}', "<20>{*}我們開始表演吧！{^30}{%}"],

      turn2: ["<20>{#p/mettaton}不要錯過任何一個\n音符，親愛的！"],
      turn3: ["<20>{#p/mettaton}我們來玩點\n刺激的吧。"],

      turn4a1: [
         "<20>{#p/mettaton}I MUST SAY, YOU'RE HANDLING THIS LIKE A TRUE ICON.",
         '<20>BUT, CAN YOU GO FIN-TO-FIN WITH OUR SPECIAL GUEST?'
      ],
      turn4a2: [
         "<20>{#p/mettaton}我得說，到目前\n為止你的表現\n還不是最好的。",
         '<20>也許你需要的\n是一點競爭的\n刺激！'
      ],
      turn4e: ['<20>{#p/mettaton}...', '<20>WHERE IS...'],
      turn4f: ["<20>{#p/basic}She's dead."],
      turn4g: ["<20>{#p/mettaton}OH.\nTHAT'S A SHAME."],
      turn4h: ['<20>{#p/mettaton}DEAR AUDIENCE... LET US OFFER A MOMENT OF SILENCE FOR SHYREN.'],
      turn4i: ['<20>{#p/mettaton}OKAY, MOMENT OVER.'],
      turn4j: () => [
         iFancyYourVilliany() ? '<20>{#p/mettaton}LUCKY YOU, $(moniker3u)!' : '<20>{#p/mettaton}LUCKY YOU!',
         '<20>I GUESS YOU GET TO SKIP THIS PART.',
         "<20>IT'S A REAL SHAME WE CAN'T KEEP SINGING, BUT HEY...",
         '<20>WHEN ONE ACT ENDS, ANOTHER MUST BEGIN.',
         "<20>... LET'S DANCE!"
      ],

      turn5a1: ["<20>{#p/mettaton}使出全力吧，\nSHYREN！"],
      turn5a2: () =>
         SAVE.data.b.bullied_shyren
            ? ['<20>{#p/mettaton}SHYREN...？']
            : [
               '<20>{#p/mettaton}很迷人，哈？',
               "<20>{#p/mettaton}別著急。\nSHYREN的歌聲\n對每個人來說\n都是這樣的。"
            ],

      turn5end1: () =>
         SAVE.data.b.bullied_shyren
            ? [
               "<20>{#p/mettaton}... MAYBE SHYREN'S JUST NOT FEELING IT TODAY.",
               '<20>HOW TRAGIC.',
               '<20>BY THE WAY, DID I MENTION YOUR VOICE IS GETTING BORING?'
            ]
            : [
               "<20>{#p/mettaton}喔，\nSHYREN太可愛了，\n是吧？",
               "<20>如果按我的方式，\n她早就是\n超級巨星了...",
               '<20>喔。對了，\n我有說過你\n聲音越來越\n無聊了嗎？'
            ],
      turn5end2: [
         "<20>但別擔心，\n解決辦法\n顯而易見。",
         "<20>任何優秀的\n節目機器人都\n知道...",
         '<20>...沒有舞蹈\n就沒有音樂！'
      ],

      turn6: ['<20>{#p/mettaton}放馬來吧！'],

      turn7a: [
         '<20>{#p/mettaton}聽到了嗎，\n親愛的...？',
         "<20>...那就對了。",
         '<20>觀眾們可是\n很希望看到\n節目效果的！',
         '<20>現在有請\n憤怒的人偶。'
      ],
      turn7b1: ['<20>{#p/basic}又是你。'],
      turn7b2: ['<20>{#p/basic}又是你！'],
      turn7b3: ['<20>{#p/basic}又-是-你！！！'],
      turn7c: ['<20>{#p/mettaton}喔，你們兩個\n彼此認識嗎？'],
      turn7d1: ['<20>{#p/basic}...\n可能認識吧。\n也可能不認識。'],
      turn7d2: ["<20>{#p/basic}反正你又\n不在乎！"],
      turn7e: [
         '<20>{#p/mettaton}哇，沒必要\n對我這麼\n充滿敵意...',
         '<20>{#p/mettaton}這只是一場\n不起眼的\n達人秀表演！'
      ],
      turn7f: [
         "<20>{#p/basic}這是你兩周內\n第二次讓我\n上節目了！",
         '<20>{#p/basic}你是喜歡我\n還是怎麼的！？'
      ],
      turn7g1: [
         "<20>{#p/mettaton}...\n別胡說八道。",
         "<20>{#p/mettaton}我找你來只是\n因為你很有\n節目效果！"
      ],
      turn7g2: ["<20>{#p/basic}（我表親以前\n也是這麼說的...）"],
      turn7h: ['<20>{#p/basic}Oh, hey.\nGood to see you!'],
      turn7i: ["<20>{#p/mettaton}THAT'S IT...?", '<20>{#p/mettaton}NOTHING ELSE TO SAY...?'],
      turn7j1: ["<20>{#p/basic}You know, Mettaton, I'm not ALWAYS mad at everyone."],
      turn7j2: ["<20>{#p/basic}... didn't I tell you this when you brought me on two weeks ago?"],
      turn7k: [
         "<20>{#p/mettaton}OH.\nTHAT'S NICE.",
         "<20>{#p/mettaton}BUT WE DON'T HAVE TIME FOR YOUR LOVEY-DOVEY NONSENSE."
      ],
      turn7l1: ['<20>{#p/basic}Yeah, yeah...', "<20>{#p/basic}(Wait, that's what my cousin used to say...)"],
      turn7l2: ["<20>Okay, I'll deal."],
      turn7l3: ["<20>If a fight's what you want, then a fight's what you'll get!"],
      turn7m: ['<20>{#p/mettaton}WELL, THIS SHOULD BE INTERESTING.'],
      turn7n: ['<20>{#p/mettaton}UH... HELLO?'],
      turn7o1: () => [
         ...(iFancyYourVilliany()
            ? ['<20>{#p/mettaton}...', '<20>IT SEEMS OUR DEAR $(moniker2u) HAS BEEN LEFT WITHOUT A DANCE PARTNER.']
            : ['<20>{#p/mettaton}...', '<20>IT SEEMS OUR POOR, POOR HUMAN HAS BEEN LEFT WITHOUT A DANCE PARTNER.']),
         '<20>HOW UNFORTUNATE...',
         '<20>BUT THE SHOW MUST GO ON!'
      ],
      turn7o2: [
         '<20>{#p/mettaton}...',
         "<20>YOU'RE ON A HOT STREAK TODAY, DARLING.",
         "<20>SEEMS NOBODY'S INTERESTED OR ALIVE ENOUGH TO FACE YOU.",
         '<20>OH WELL...',
         '<20>THE SHOW MUST GO ON!'
      ],

      turn8a1: ['<20>{#p/mettaton}要不遺餘力！'],
      turn8a2: ['<20>{#p/mettaton}應付不了這麼多的\n棉花，是嗎？', '<20>{#p/mettaton}哎呀，太糟糕了！'],

      turn8end1a: [
         "<20>{#p/mettaton}TO SAY I'M IMPRESSED WOULD BE AN UNDERSTATEMENT!",
         "<20>YOU'VE ABSOLUTELY NAILED IT.",
         '<20>DEAR VIEWERS, DO TAKE NOTES...',
         '<20>-THIS- IS HOW YOU PUT ON A SHOW.'
      ],
      turn8end1b: [
         '<20>{#p/mettaton}YOU MAY NOT HAVE THE GREATEST VOCAL CHOPS, BUT THIS DANCING... OOOOH!',
         '<20>SIMPLY SUPERB.'
      ],
      turn8end2b: () => [
         ...[
            [
               '<20>{#p/mettaton}WITH A NAME LIKE \"$(moniker1u),\" IT\'S NO SURPRISE YOU WERE SUCH A LETDOWN!',
               '<20>{#p/mettaton}I -HAD- WISHED FOR A BETTER OUTCOME...'
            ],
            ['<20>{#p/mettaton}WITH A NAME LIKE \"$(moniker1u),\" YOU\'D EXPECT A MORE -YOUTHFUL- SHOWING!'],
            ['<20>{#p/mettaton}WITH A NAME LIKE \"$(moniker1u),\" YOU\'D HOPE TO BE BLOWN AWAY!'],
            ['<20>{#p/mettaton}WITH A NAME LIKE \"$(moniker1u),\" YOU\'D THINK YOUR SKILLS WOULD BE MAD!'],
            ['<20>{#p/mettaton}WITH A NAME LIKE \"$(moniker1u),\" YOU\'D HOPE TO HAVE STOLEN THE SHOW!']
         ][SAVE.data.n.state_aerialis_moniker],
         "<20>{#p/mettaton}BUT I GUESS IT JUST WASN'T MEANT TO BE."
      ],
      turn8end2a: () => [
         ...[
            [
               "<20>{#p/mettaton}WELL, $(moniker3u), I CAN'T SAY I EXPECTED THIS!",
               '<20>{#p/mettaton}I -WAS- EXPECTING ANOTHER LETDOWN, BUT...'
            ],
            ['<20>{#p/mettaton}WELL, DEAR $(moniker1u)...', "<20>IT'S SAFE TO SAY YOUR SKILLS ARE BEYOND YOUR YEARS!"],
            ['<20>{#p/mettaton}WELL, DEAR $(moniker1u)...', '<20>THIS PERFORMANCE DESERVES THUNDEROUS APPLAUSE!'],
            ['<20>{#p/mettaton}WELL, DEAR $(moniker1u)...', '<20>IT SEEMS OUR VIEWERS ARE FIRED UP!'],
            ['<20>{#p/mettaton}WELL, DEAR $(moniker1u)...', "<20>YOU'VE REALLY MADE THIS STAGE YOUR OWN!"]
         ][SAVE.data.n.state_aerialis_moniker],
         "<20>{#p/mettaton}PERHAPS THERE'S HOPE FOR YOU AFTER ALL."
      ],
      turn8end3a: [
         "<20>{#p/mettaton}...我真不明白\n你的成績怎麼\n這麼糟糕。",
         '<20>明明早些時候\n你表現得\n很不錯來著。',
         '<20>喔好吧。\n可能，這也是\n常有的事吧。'
      ],
      turn8end3b: [
         '<20>{#p/mettaton}... 沒人告訴過你\n你有多菜嗎？',
         '<20>搞砸一場聲樂表演\n是一回事。',
         '<20>但這個呢...？\n這真的是太悲哀了。'
      ],
      turn8end4: ['<20>{#p/mettaton}唉...\n我們還有一場表演\n需要完成。'],
      turn8end5: ['<20>{#p/mettaton}女士們，先生們...', '<20>掌聲有請...'],
      turn8end6: ['<20>舉世無雙的\nALPHYS博士！'],

      turn9a: () =>
         SAVE.data.n.state_foundry_undyne > 0
            ? ['<20>{|}{#p/mettaton}HOW WELL WILL YOU FARE AGAINST- {%}']
            : ['<20>{#p/mettaton}你將如何應對，\n這最後的挑戰呢？'],
      turn9b: () =>
         SAVE.data.n.state_foundry_undyne > 0
            ? ['<20>{#p/alphys}不-不！']
            : world.bad_lizard < 1
               ? ['<20>{*}{#p/alphys}你-你在開玩笑嗎？{^30}{%}']
               : ['<20>{*}{#p/alphys}{#e/alphys/7}...'],
      turn9bx: ["<20>{#p/alphys}You can't force me to do something I don't want to."],
      turn9c: ["<20>{*}{#p/alphys}我不能...{^30}{%}"],
      turn9d: ['<20>{*}{#p/alphys}我...{^30}{%}'],
      turn9e: () =>
         world.bad_lizard < 1
            ? ["<20>{#p/alphys}我-我做不到！"]
            : ["<20>{#p/alphys}{#e/alphys/4}I'm not sure if this is a good idea."],

      turn9end1: ['<20>{#p/mettaton}有什麼問題嗎，\n親愛的？'],
      turn9end2: () => [
         ...[
            [
               "<20>{#p/alphys}{#e/alphys/4}我-我不想傷害人類，\nMettaton...",
               '<20>{#p/alphys}{#e/alphys/7}我們先前和他們的關係\n可能有點緊張，但是...',
               "<20>{#e/alphys/6}這並不意味著這個人類\n與以前的人類一樣，\n是吧？",
               "<20>{#e/alphys/8}所以我覺得...\n就這樣繼續攻擊人類\n有點太不公平了。"
            ],
            [
               "<20>{#p/alphys}{#e/alphys/7}I know they've made some... pretty bad mistakes...",
               '<20>{#p/alphys}{#e/alphys/6}But, then again, with the way some monsters have treated them...?',
               "<20>{#p/alphys}{#e/alphys/8}That's no surprise.",
               "<20>{#p/alphys}{#e/alphys/4}And also, I'm... k-kind of afraid I might hurt them..."
            ]
         ][world.bad_lizard]
      ],
      turn9end3: () =>
         SAVE.data.n.state_foundry_undyne > 0
            ? ['<20>{#p/mettaton}WELL...', '<20>IF YOU SAY SO, DOCTOR.']
            : ['<20>{#p/mettaton}嗯...', '<20>你的觀點還挺有趣的，\n博士。'],
      turn9end4: ["<20>但我不敢\n苟同你的觀點。{#e/alphys/1}"],
      turn9end5: () =>
         SAVE.data.n.state_foundry_undyne > 0
            ? ["<20>IT'S JUST A SHAME THE VIEWERS WON'T GET TO SEE WHAT HAPPENS.{#e/alphys/28}"]
            : [
               '<20>在我看來，\n一場優質電視劇的核心\n便是衝突與矛盾！{#e/alphys/2}',
               '<20>又有誰能\n拒絕這一點呢？'
            ],
      turn9end6: [
         "<20>{#p/mettaton}{#e/alphys/0}行吧，總而言之\n我們的時間\n已經所剩無幾了。",
         "<20>所以...\n今天的節目到此結束！",
         '<21>STAY TUNED, FOLKS!\nTHE NEXT EPISODE IS ALREADY IN THE WORKS.',
         "<20>你一定不想錯過！"
      ],
      turn9end7a: ['<20>{#p/alphys}好吧。'],
      turn9end7b: ["<20>{#p/alphys}Seriously?\nYou didn't even miss a single time."],
      turn9end7c: ['<20>{#p/alphys}...'],

      turn1status: ["<32>{#p/story}* 電擊時間到了。"],
      turn2status: ['<32>{#p/story}* Mettaton鼓起了機器手掌。'],
      turn3status: ["<32>{#p/story}* 一連串的八度音。"],
      turn4status: ["<32>{#p/story}* Shyren的歌聲\n  在實驗室裡迴響。"],
      turn4statusX: ['<32>{#p/story}* Mettaton不敢落下一滴眼淚。'],
      turn5status: ['<32>{#p/story}* Mettaton展示了一個舞蹈動作。'], 
      turn6status: ['<32>{#p/story}* 放克音樂空前熱烈。'],
      turn7status: ['<32>{#p/story}* 聞起來像瘋人院。'],
      turn7statusX: ['<32>{#p/story}* Mettaton正在擺弄著\n  他的麥克風。'],
      turn8status: ['<32>{#p/story}* Mettaton引人注目地指著鏡頭。'],

      turn2react1: ['<20>{#p/mettaton}幹得漂亮！'],
      turn3react1: ['<20>{#p/mettaton}非常好！'],
      turn4react1: ['<20>{#p/mettaton}太棒了！'],
      turn5react1: ['<20>{#p/mettaton}優秀！'],
      turn6react1: ['<20>{#p/mettaton}真讓人\n「星」動！'],
      turn7react1: ["<20>{#p/mettaton}就是這樣！"],
      turn8react1: ["<20>{#p/mettaton}SHOW 'EM HOW IT'S DONE!"],
      turn8reactMD1a: ['<20>{#p/basic}Well, that was a blast!', '<20>{#p/basic}See ya next time, human!'],
      turn8reactMD2a: ['<20>{#p/basic}...', '<20>{#p/basic}別再來了。'],

      turn2react2: ['<20>{#p/mettaton}啊喔...'],
      turn3react2: ['<20>{#p/mettaton}就差一點...'],
      turn4react2: ['<20>{#p/mettaton}真倒霉...'],
      turn5react2: ['<20>{#p/mettaton}真不幸...'],
      turn6react2: ['<20>{#p/mettaton}廢物！'],
      turn7react2: ['<20>{#p/mettaton}真令人失望。'],
      turn8react2: ['<20>{#p/mettaton}那。是。啥。'],
      turn8reactMD1b: ["<20>{#p/basic}Hope I didn't go too hard on you.", '<20>{#p/basic}See ya next time, human!'],
      turn8reactMD2b: ['<20>{#p/basic}可悲。\n可悲！\n可-悲-！', '<20>{#p/basic}你活該。'],
      missIndicator: '漏擊：$(x)',

      idleTalk1: () =>
         world.bad_lizard < 2 && !iFancyYourVilliany()
            ? [
               "<20>{#p/mettaton}SO WE'VE MADE IT TO THE END, EH?",
               "<20>{#p/mettaton}馬上就能搖身一變，\n成為超級巨星，\n感想如何？"
            ]
            : [
               "<20>{#p/mettaton}SO WE'VE MADE IT TO THE END, EH?",
               "<20>{#p/mettaton}生命快走到頭了，\n感想如何？"
            ],
      idleTalk2: () =>
         iFancyYourVilliany()
            ? ['<20>{#p/mettaton}THOSE YOU\'VE HURT ARE SURELY \"TURNING\" IN THEIR SLEEP.']
            : world.bad_lizard < 2
               ? ['<20>{#p/mettaton}I\'M SURE YOU\'RE ITCHING TO \"TURN\" YOUR LIFE AROUND.']
               : ['<20>{#p/mettaton}THOSE YOU\'VE KILLED ARE SURELY \"TURNING\" IN THEIR GRAVES.'],
      idleTalk3: ['<20>{#p/mettaton}LET\'S JUST HOPE THINGS DON\'T TAKE A \"TURN\" FOR THE WORST.'],
      idleTalk4: () =>
         world.bad_lizard < 2
            ? ['<20>{#p/mettaton}I MUST SAY, HAVING YOU ON STAGE WITH ME IS A REAL \"TURN\" ON.']
            : ['<20>{#p/mettaton}I MUST SAY, THIS WHOLE SITUATION IS A REAL \"TURN\" OFF.'],
      idleTalk5: ["<20>{#p/mettaton}（快讓我轉身。）"],
      idleTalk6: ['<20>{#p/mettaton}...'],
      flirtTalk1: () =>
         SAVE.data.b.flirt_mettaton
            ? [
               '<20>{#p/mettaton}BACK TO YOUR FLIRTATIOUS WAYS, EH...?',
               '<20>{#p/mettaton}YOU, MY FRIEND, ARE A TRUE MENACE TO SOCIETY.'
            ]
            : ['<20>{#p/mettaton}喔喔喔...', '<20>...', '<20>MAYBE YOU SHOULD HOLD OFF ON THAT FOR NOW.'],
      flirtTalk2: () =>
         SAVE.data.b.flirt_mettaton
            ? ["<20>{#p/mettaton}DON'T YOU EVER KNOW WHEN TO QUIT?"]
            : ['<20>{#p/mettaton}OR YOU COULD JUST KEEP GOING.'],
      flirtTalk3: () =>
         SAVE.data.b.flirt_mettaton ? ['<20>{#p/mettaton}I GUESS NOT.'] : ['<20>{#p/mettaton}AND GOING.'],
      flirtTalk4: ["<20>{#p/mettaton}...\nI FEEL LIKE THERE'S SOMETHING BETTER YOU COULD BE DOING."],
      flirtTalk5: ['<20>{#p/mettaton}...'],
      act_turn: ["<32>{#p/human}* （你告訴Mettaton，\n  他後面有一面鏡子。）"],
      turnTalk1: ['<20>{#p/mettaton}鏡子？', '<20>喔對，這場壓軸好戲，\n儀容儀表可不能差！'],
      turnTalk2: ["<20>{#p/mettaton}嗯... 在哪呢？\n我怎麼沒看見..."],
      turnTalk3: ['<20>{#p/mettaton}你是不是', '<20>動了', '<20>我的開關？'],
      turnTalk4: () =>
         world.bad_robot
            ? [
               '<18>{#p/mettaton}喔吼吼...',
               '<18>如果你對我的\n颯爽英姿期待已久，\n那麼，就請好好欣賞...',
               '<18>這副前所未有的\n更快，更強，\n更輕的身軀。',
               "<18>我已經和身體\n融為一體。",
               "<19>真是遺憾啊，\n只有在現場直播中，\n觀眾才能將你的暴行\n盡收眼底。",
               "<19>不過沒事。",
               '<18>就此一回，為了你，\n豁出去了...'
            ]
            : [
               '<18>{#p/mettaton}Ohhhh my.',
               '<18>If you flipped my switch, that can only mean one thing.',
               ...(iFancyYourVilliany()
                  ? [
                     "<18>You're desperate to face off against my final form.",
                     '<18>How impatient...',
                     "<18>Lucky for you, I've been aching to whip it out for a long time.",
                     "<18>So, as thanks, I'll make sure you go out in style.",
                     "<18>I'll make this final confrontation..."
                  ]
                  : [
                     "<18>You're desperate for the premiere of my new body.",
                     '<18>How impatient...',
                     "<18>Lucky for you, I've been aching to show it off for a long time.",
                     "<18>So, as thanks, I'll give you a handsome reward.",
                     "<18>I'll make your last living moments..."
                  ])
            ],
      turnTalk5: () =>
         world.bad_robot
            ? ["<18>{*}...我們下播。"]
            : iFancyYourVilliany()
               ? ['<18>{#p/mettaton}{*}... absolutely fantastic!']
               : ['<18>{#p/mettaton}{*}... absolutely beautiful!'],
      act_burn: ['<32>{#p/human}* (You roast Mettaton on his own TV show.)'],
      burnTalk1: ['<20>{#p/mettaton}IS THAT THE BEST YOU CAN MANAGE?'],
      burnTalk2: ['<20>{#p/mettaton}EVEN ALPHYS COULD DO BETTER THAN THAT.'],
      burnTalk3: ["<20>{#p/mettaton}NO OFFENSE, BUT YOU'RE NOT VERY GOOD AT THIS."],
      burnTalk4: ['<20>{#p/mettaton}...\nMAYBE YOU SHOULD TRY DOING SOMETHING ELSE.'],
      burnTalk5: ['<20>{#p/mettaton}...']
   },

   b_opponent_mettaton2: {
      artifact: () => [
         '<33>{#p/human}* (Mettaton shrugs at the sight.)',
         ...(world.genocide || world.bad_robot ? [] : ['<32>{#p/basic}* The audience shrugs, too.'])
      ],
      epiphaNOPE: () =>
         world.genocide || world.bad_robot
            ? ["<20>{#p/mettaton}{#e/mettaton/25}That party trick won't work on me, darling."]
            : iFancyYourVilliany()
               ? ["<20>{#p/mettaton}{#e/mettaton/19}You know, this doesn't seem like your style."]
               : ['<20>{#p/mettaton}{#e/mettaton/19}Time and a place, darling...'],
      hint: ["<32>{#p/basic}* Okay, partner...\n* It's all up to you now."],
      name: () => (world.genocide ? '* Mettaton NEO' : world.bad_robot ? '* Mettaton SIGMA' : '* Mettaton EX'),
      spannerReaction: (repeat: boolean) =>
         world.genocide
            ? ['<32>{#p/human}* （你把扳手扔了出去。）\n* （Mettaton直接將它炸成了碎片。）']
            : world.bad_robot
               ? [
                  '<32>{#p/human}* （你把扳手扔了出去。）\n* （Mettaton接住扳手，\n  朝你的頭砸了過去。）',
                  "<32>{#p/basic}* 疼死了！"
               ]
               : repeat
                  ? iFancyYourVilliany()
                     ? [
                        '<32>{#p/human}* （你把扳手扔了出去。）\n* （Mettaton又熱情地踢了回來。）',
                        '<32>{#p/basic}* 觀眾開始打哈欠了...'
                     ]
                     : [
                        '<32>{#p/human}* （你把扳手扔了出去。）\n* （Mettaton用嘴接住，叼了回來。）',
                        '<32>{#p/basic}* 觀眾開始打哈欠了...'
                     ]
                  : iFancyYourVilliany()
                     ? [
                        '<32>{#p/human}* （你把扳手扔了出去。）\n* （Mettaton又熱情地踢了回來。）',
                        '<32>{#p/basic}* 觀眾沸騰了！'
                     ]
                     : [
                        '<32>{#p/human}* （你把扳手扔了出去。）\n* （Mettaton用嘴接住，叼了回來。）',
                        '<32>{#p/basic}* 觀眾沸騰了！'
                     ],
      old_gun_text: () =>
         world.genocide || world.bad_robot
            ? ['<32>{#p/human}* （你開了一槍。）\n* （什麼都沒發生。）']
            : ['<32>{#p/human}* （你開了一槍。）', '<32>{#p/basic}* 觀眾都嚇壞了！'],
      old_bomb_text: () =>
         world.genocide || world.bad_robot
            ? ['<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）\n* （除此之外，什麼都沒發生。）']
            : [
               '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
               '<32>{#p/basic}* 觀眾紛紛做起了白日夢！'
            ],
      old_spray_text: () =>
         world.genocide || world.bad_robot
            ? ['<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）\n* （什麼都沒發生。）']
            : ['<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）', '<32>{#p/basic}* 觀眾亂作一團。'],
      act_check: () =>
         world.genocide
            ? ["<32>{#p/asriel2}* Mettaton。\n* 發什麼呆？快去攻擊他啊！"]
            : world.bad_robot
               ? [
                  '<33>{#p/story}* METTATON SIGMA - 攻擊255 防禦42\n* 一臺超頻過載的殺人機器。\n  攻擊力大幅提升，但也付出了代價。'
               ]
               : ['<32>{#p/story}* METTATON EX - 攻擊47 防禦47\n* 弱點是心形核心。'],
      act_cut1: ['<32>{#p/human}* （你把剪刀搭到了電線上...）'],
      act_cut2: ['<32>{#p/human}* （你繼續剪電線...）'],
      act_cut3: ['<32>{#p/human}* （可是電線已經全都剪斷了。）'],
      tvmReaction: {
         blookpie: () =>
            world.genocide || world.bad_robot
               ? [
                  '<32>{#p/basic}* 這塊點心使Mettaton想起\n  某個需要他去守護的人...',
                  "<32>{#p/story}* Mettaton的攻擊力提升了！\n* Mettaton的防禦力提升了！"
               ]
               : [
                  SAVE.data.b.a_state_hapstablook
                     ? '<32>{#p/basic}* 這塊點心使Mettaton想起\n  一位重要的親人...'
                     : '<32>{#p/basic}* 這塊點心使Mettaton想起\n  某個熟悉的人...',
                  "<32>{#p/story}* Mettaton的攻擊力下降了！\n* Mettaton的防禦力下降了！"
               ],
         radio: () =>
            world.bad_robot
               ? [
                  '<32>{#p/human}* （你把收音機遞給了Mettaton。）\n* （他放起了死亡重金屬音樂，\n  並朝你大吼大叫。）'
               ]
               : iFancyYourVilliany()
                  ? [
                     '<32>{#p/human}* （你把收音機遞給了Mettaton。）\n* （他放了一段交響樂，\n  以此振奮士氣。）'
                  ]
                  : [
                     '<32>{#p/human}* （你把收音機遞給了Mettaton。）\n* （他來了一首卡拉OK，\n  觀眾也跟著一起唱了起來。）'
                  ],
         fireworks: () =>
            world.bad_robot
               ? [
                  '<32>{#p/human}* （你把煙花遞給了Mettaton。）\n* （他把煙花綁到火箭發射器上，\n  隨即引燃火箭。）'
               ]
               : iFancyYourVilliany()
                  ? [
                     '<32>{#p/human}* （你把煙花遞給了Mettaton。）\n* （他將煙花融入到攻擊中，\n  製造戲劇效果。）'
                  ]
                  : [
                     '<32>{#p/human}* （你把煙花遞給了Mettaton。）\n* （他點燃了煙花，觀眾都驚嘆不已。）'
                  ],
         mewmew: () =>
            world.bad_robot
               ? [
                  '<32>{#p/human}* （你把玩偶遞給了Mettaton。）\n* （他把玩偶撕成碎片，\n  表演了一手「天女散花」。）'
               ]
               : iFancyYourVilliany()
                  ? [
                     "<32>{#p/human}* （你把玩偶遞給了Mettaton。）\n* （他不知道拿玩偶怎麼辦，\n  最後丟掉了。）"
                  ]
                  : [
                     '<32>{#p/human}* （你把玩偶遞給了Mettaton。）\n* （他從容地展示給觀眾，\n  觀眾都被迷住了。）'
                  ]
      },
      act_boast: [
         "<32>{#p/human}* （你說自己下個回合能無傷。）",
         "<32>{#p/basic}* Mettaton的人氣\n  將在下一回合持續上升！"
      ],
      act_heel: [
         '<32>{#p/human}* （你性情大變，嘲笑觀眾。）',
         "<32>{#p/basic}* 觀眾希望你這回合死得很慘！"
      ],
      act_pose0: () =>
         iFancyYourVilliany()
            ? [
               ['<32>{#p/human}* （你擺出攻勢，殺意滿滿。）', '<32>{#p/basic}* 觀眾已經看膩歪了。'],
               ['<32>{#p/human}* （你擺出攻勢，殺意滿滿。）', '<32>{#p/basic}* 觀眾似乎很生氣。']
            ]
            : [
               ['<32>{#p/human}* （你擺出誇張的姿勢。）', '<32>{#p/basic}* 觀眾已經看膩歪了。'],
               ['<32>{#p/human}* （你擺出誇張的姿勢。）', '<32>{#p/basic}* 觀眾似乎很生氣。']
            ],
      act_pose1: () =>
         iFancyYourVilliany()
            ? [
               '<32>{#p/human}* （你擺出攻勢，殺意滿滿。）',
               '<32>{#p/basic}* 你的動作超有範兒，\n  觀眾都被迷住了！'
            ]
            : ['<32>{#p/human}* （你擺出誇張的姿勢。）', '<32>{#p/basic}* 觀眾讚許地點點頭。'],
      act_pose2: () =>
         iFancyYourVilliany()
            ? [
               '<32>{#p/human}* （你擺出攻勢，殺意滿滿。）',
               "<32>{#p/basic}* 觀眾覺得你的動作力道不夠，\n  興趣不高。"
            ]
            : ['<32>{#p/human}* （你擺出誇張的姿勢。）', '<32>{#p/basic}* 觀眾為你熱烈鼓掌。'],
      act_pose3: () =>
         iFancyYourVilliany()
            ? [
               '<32>{#p/human}* （你擺出攻勢，殺意滿滿。）',
               '<32>{#p/basic}* 你的樣子簡直弱不禁風，\n  觀眾都翻白眼了...'
            ]
            : [
               '<32>{#p/human}* （儘管受了重傷，\n  你還是盡力擺出漂亮的姿勢。）',
               '<32>{#p/basic}* 觀眾都為你歡呼。'
            ],
      act_pose4: () =>
         iFancyYourVilliany()
            ? ['<32>{#p/human}* （你擺出攻勢，殺意滿滿。）', '<32>{#p/basic}* 觀眾被你的... 愚蠢震撼到了？']
            : [
               '<32>{#p/human}* （你用盡最後的力氣，擺出了漂亮的姿勢。）',
               '<32>{#p/basic}* 觀眾全都驚呼起來。'
            ],
      act_scream0: [
         [
            '<32>{#p/human}* （你大聲尖叫。）',
            "<32>{#p/basic}* 觀眾有點厭倦了。\n* 本回合，你的移速減慢。"
         ],
         [
            '<32>{#p/human}* （你大聲尖叫。）',
            "<32>{#p/basic}* 觀眾有些厭煩了。\n* 本回合，你的移速減慢。"
         ]
      ],
      act_scream: [
         '<32>{#p/human}* （你大聲尖叫。）',
         "<32>{#p/basic}* 觀眾也跟著興奮起來！\n* 本回合，你的移速減慢。"
      ],
      act_flirt0: [
         ['<32>{#p/human}* （你向觀眾調情。）', '<32>{#p/basic}* 觀眾有點厭倦了...'],
         ['<32>{#p/human}* （你向觀眾調情。）', '<32>{#p/basic}* 觀眾有些厭煩了...']
      ],
      act_flirt1: () =>
         iFancyYourVilliany()
            ? [
               '<32>{#p/human}* （你向觀眾調情。）',
               '<32>{#p/basic}* 觀眾沒想到你會這麼做，\n  全都大吃一驚！'
            ]
            : ['<32>{#p/human}* （你向觀眾調情。）', '<32>{#p/basic}* 觀眾一時半會還接受不了...'],
      act_flirt2: () =>
         iFancyYourVilliany()
            ? [
               '<32>{#p/human}* （你向觀眾調情。）',
               '<32>{#p/basic}* 又一次調情！\n* 觀眾陷入了瘋狂！'
            ]
            : ['<32>{#p/human}* （你向觀眾調情。）', '<32>{#p/basic}* 觀眾開始朝你這邊看了。'],
      act_flirt3: () =>
         iFancyYourVilliany()
            ? [
               '<32>{#p/human}* （你向觀眾調情。）',
               '<32>{#p/basic}* 觀眾開始對這些甜言蜜語\n  感到噁心了...'
            ]
            : ['<32>{#p/human}* （你向觀眾調情。）', '<32>{#p/basic}* 這次，你成功吸引了觀眾的目光！'],
      act_flirt4: () =>
         iFancyYourVilliany()
            ? [
               '<32>{#p/human}* （你向觀眾調情。）',
               "<32>{#p/basic}* 觀眾愈發感到困惑。"
            ]
            : ['<32>{#p/human}* （你向觀眾調情。）', '<32>{#p/basic}* 觀眾被你深深折服！'],
      status1: (azzy_neo: number) =>
         [
            [
               "<33>{#p/asriel2}* 我會嘗試用一道法術\n  突破他的護甲。\n* 接住那些黃色的符文！"
            ],
            ['<32>{#p/asriel2}* 再來一次。']
         ][Math.min(azzy_neo, 1)],
      statusX: (hint = false) =>
         world.genocide
            ? ["<32>{#p/asriel2}* 我們遲早會贏的。"]
            : world.bad_robot
               ? hint
                  ? ["<32>{#p/story}* Seems fighting won't get you any further here."]
                  : ['<32>{#p/story}* 電流貫穿了整個房間。']
               : ['<32>{#p/story}* Mettaton。'],
      statusY: ["<32>{#p/story}* 高壓電極速回流，化作旋風！"],
      turnTalk1: () =>
         world.bad_robot
            ? [
               "<20>{#p/mettaton}{#e/mettaton/30}{#a.la/8}{#a.ra/8}真是抱歉啊，親。\n但我要是不把你\n千刀萬剮...",
               "<20>{#p/mettaton}{#e/mettaton/1}{#a.la/1}{#a.ra/3}我就會馬上爆炸！"
            ]
            : ['<20>{#p/mettaton}燈光！\n鏡頭！\n開拍！'],
      turnTalk2: () =>
         world.bad_robot
            ? [
               "<20>{#p/mettaton}{#e/mettaton/17}{#a.la/8}{#a.ra/8}...魚死網破，\n倘若「餘」不死，\n休想「破」我網。",
               '<20>{#p/mettaton}{#e/mettaton/17}{#a.la/8}{#a.ra/8}...呵。\n還挺有詩意的。'
            ]
            : SAVE.data.b.a_state_hapstablook
               ? ['<20>{#p/mettaton}Ghosts!\nDummies!\n... snails?']
               : !world.badder_lizard
                  ? ['<20>{#p/mettaton}Drama!\nRomance!\nBloodshed!']
                  : ['<20>{#p/mettaton}Karma!\nVengeance!\nPayback!'],
      turnTalk3: () =>
         world.bad_robot
            ? ["<20>{#p/mettaton}{#e/mettaton/24}{#a.la/3}{#a.ra/0}別人會輕言放棄，\n但我可不會願賭服輸。"]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}It's an emotional rollercoaster!"]
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}It's time to put you in your place!"]
                  : !world.badder_lizard
                     ? ["<20>{#p/mettaton}I'm the idol everyone craves!"]
                     : ["<20>{#p/mettaton}I'll be the galaxy's superstar!"],
      turnTalk4: () =>
         world.bad_robot
            ? ["<20>{#p/mettaton}{#e/mettaton/19}{#a.la/8}{#a.ra/8}只有這樣，\n我才能脫穎而出。"]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}It's a shame things had to be this way..."]
               : iFancyYourVilliany()
                  ? ['<20>{#p/mettaton}Smile for the camera, $(moniker2)!']
                  : !world.badder_lizard
                     ? ['<20>{#p/mettaton}Smile for the camera, darling!']
                     : ['<20>{#p/mettaton}Smile for the camera, hotshot!'],
      turnTalk5: () =>
         world.bad_robot
            ? [
               "<20>{#p/mettaton}{#e/mettaton/17}{#a.la/9}{#a.ra/10}現在，就讓我親手\n把那腐爛的心腸\n從你身體扯出！"
            ]
            : SAVE.data.b.a_state_hapstablook
               ? [
                  '<20>{#p/mettaton}But maybe you can help me make a choice here.',
                  '<20>{#p/mettaton}Queue the all- important pop quiz!'
               ]
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}Oooh, it's time for a pop quiz!", '<20>Can your brains hold a candle to your brawn?']
                  : !world.badder_lizard
                     ? [
                        "<20>{#p/mettaton}Oooh, it's time for a pop quiz!",
                        '<20>{#p/mettaton}I sure hope you know your multiple- choice...'
                     ]
                     : [
                        "<20>{#p/mettaton}Oooh, here's a quiz for you.",
                        "<20>{#p/mettaton}Don't like multiple- choice?\nToo bad!"
                     ],
      turnTalk6: () =>
         world.bad_robot
            ? [
               '<20>{#p/mettaton}{#e/mettaton/18}{#a.la/8}{#a.ra/8}什麼？\n那又冷又硬的東西，\n還配叫「心」？',
               '<20>{#p/mettaton}{#e/mettaton/30}{#a.la/9}{#a.ra/10}...呵。\n給你瞧瞧，\n什麼才是真正的「心」。'
            ]
            : SAVE.data.b.a_state_hapstablook
               ? ['<20>{#p/mettaton}Not so simple, is it?', '<20>... perhaps a heart to heart will lead us to the answer.']
               : SAVE.data.n.state_aerialis_mttanswer === 0
                  ? ['<20>{#p/mettaton}Your \"answer\" sure was underwhelming...', "<20>{#p/mettaton}But this won't be!"]
                  : iFancyYourVilliany()
                     ? [
                        '<20>{#p/mettaton}So you ARE smarter than you look.',
                        '<20>But a battle takes more than just basic knowledge.',
                        '<20>It takes heart!'
                     ]
                     : !world.badder_lizard
                        ? [
                           "<20>{#p/mettaton}Your answer really showed everyone what's on your mind.",
                           "<20>{#p/mettaton}Why don't I show you what's in my heart?"
                        ]
                        : ['<20>{#p/mettaton}So you DO like multiple choice.', "<20>{#p/mettaton}Well, you won't like this!"],
      turnTalk7: () =>
         world.bad_robot
            ? ["<20>{#p/mettaton}{#e/mettaton/26}{#a.la/8}{#a.ra/8}盡情垂死掙扎吧..."]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}It's not like I never loved the old life."]
               : iFancyYourVilliany()
                  ? ['<20>{#p/mettaton}You may be a demon, but can you dance like the devil?']
                  : !world.badder_lizard
                     ? ['<20>{#p/mettaton}Introducing... the double DJ disco!']
                     : ["<20>{#p/mettaton}The battle's only just begun!"],
      turnTalk8: () =>
         world.bad_robot
            ? ['<20>{#p/mettaton}{#e/mettaton/18}{#a.la/8}{#a.ra/8}遲早，\n你將敗在我的手下。']
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}But it wasn't exactly glamorous, either..."]
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}It's time to bring your a-game!"]
                  : !world.badder_lizard
                     ? ['<20>{#p/mettaton}Can you keep up the pace?']
                     : ['<20>{#p/mettaton}Turn it up to eleven!'],
      turnTalk9: () =>
         world.bad_robot
            ? ['<20>{#p/mettaton}{#e/mettaton/9}{#a.la/0}{#a.ra/5}那時，\n我族就能重見天日。']
            : SAVE.data.b.a_state_hapstablook
               ? ['<20>{#p/mettaton}Whatever, Who cares!']
               : !world.badder_lizard
                  ? ['<20>{#p/mettaton}Lights!\nCamera!\nPlastic explosives!']
                  : ['<20>{#p/mettaton}Destruction!\nAnnihilation!\nArmageddon!'],
      turnTalk10: () =>
         world.bad_robot
            ? ["<20>{#p/mettaton}{#e/mettaton/1}{#a.la/1}{#a.ra/7}...而我，就是幫他們\n擺脫桎梏的英雄！"]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}Nobody, that's who!"]
               : !world.badder_lizard
                  ? ['<20>{#p/mettaton}Things are blowing up!']
                  : ['<20>{#p/mettaton}Things are getting crazy!'],
      turnTalk11: () =>
         world.bad_robot
            ? [
               "<20>{#p/mettaton}{#e/mettaton/15}{#a.la/8}{#a.ra/8}真是遺憾，我身邊的人，\n只要遇到點困難\n全就躲得老遠。",
               '<20>{#e/mettaton/12}{#a.la/8}{#a.ra/8}Alphys，Asgore，\n還有那堆表親，\n全是一個熊樣。'
            ]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}Let's just take a moment to think."]
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}Nothing like a break to quell the enemy's fire!"]
                  : !world.badder_lizard
                     ? ['<21>{#p/mettaton}Time for our council- regulated break!']
                     : ["<20>{#p/mettaton}Can't catch a break?\nSucks to be you!"],
      turnTalk12: () =>
         world.bad_robot
            ? [
               "<20>{#p/mettaton}{#e/mettaton/13}{#a.la/8}{#a.ra/8}而我呢？\n我可不搞他們\n卿卿我我那一套。",
               '<20>{#p/mettaton}{#e/mettaton/23}{#a.la/1}{#a.ra/6}而是切中要害\n直入核心！'
            ]
            : SAVE.data.b.a_state_hapstablook
               ? [
                  "<20>{#p/mettaton}I don't get why they had to be so confrontational...",
                  '<20>{#p/mettaton}... am I supposed to believe it was out of love?'
               ]
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}It's time we got back to the heart of this conflict!"]
                  : !world.badder_lizard
                     ? [
                        "<20>{#p/mettaton}We've grown so distant, darling...",
                        '<20>{#p/mettaton}How about another heart-to-heart?'
                     ]
                     : [
                        "<20>{#p/mettaton}I think it's time you learned your lesson.",
                        "<20>{#p/mettaton}Here's something you can take to heart!"
                     ],
      turnTalk13: () =>
         world.bad_robot
            ? [
               '<20>{#p/mettaton}{#e/mettaton/26}{#a.la/8}{#a.ra/8}...切。',
               "<20>{#e/mettaton/25}{#a.la/8}{#a.ra/8}你還不知道\n自己就是個招人煩的\n爛蟲子嗎？"
            ]
            : SAVE.data.b.a_state_hapstablook
               ? ['<20>{#p/mettaton}A... and besides, how can I even trust them now?']
               : SAVE.data.b.a_state_armwrecker
                  ? ['<20>{#p/mettaton}A... arms?\nWh... who needs arms with legs like these?']
                  : ["<20>{#p/mettaton}I... is that all you've got?"],
      turnTalk14: () =>
         world.bad_robot
            ? [
               '<20>{#p/mettaton}{#e/mettaton/15}{#a.la/8}{#a.ra/8}但你知道，\n大家對於你這種蟲豸\n是什麼態度，對吧？',
               "<20>{#p/mettaton}{#e/mettaton/13}{#a.la/9}{#a.ra/10}就是一個\n亟待解決的禍患而已。"
            ]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}I d-don't... know what to think anymore..."]
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}Let's h-hear... hear one last roar from the audience!"]
                  : !world.badder_lizard
                     ? ['<20>{#p/mettaton}Shoutout t-to... to Dr. Alphys for making my dreams come true!']
                     : ["<20>{#p/mettaton}Shoutout t-to... to the ones who've given their lives to protect us!"],
      turnTalk15: () =>
         world.bad_robot
            ? [
               "<20>{#p/mettaton}{#e/mettaton/15}{#a.la/10}{#a.ra/0}說實話，\n我挺佩服你這股\n負隅頑抗的勁。",
               '<20>{#p/mettaton}{#e/mettaton/19}{#a.la/0}{#a.ra/10}不過，\n給你個溫馨提示...',
               "<20>{#p/mettaton}{#e/mettaton/17}{#a.la/8}{#a.ra/8}你去打力場，\n都比在這對付我\n來得實在。"
            ]
            : SAVE.data.b.a_state_hapstablook
               ? ["<20>{#p/mettaton}Could it be that they're tr... truly sorry?"]
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}There's no way I'm giv... giving up now!"]
                  : !world.badder_lizard
                     ? ["<20>{#p/mettaton}Now it's my turn to ful... fulfill all yours!"]
                     : ["<20>{#p/mettaton}I'll make sure your efforts we... weren't in vain!"],
      turnTalk16: () =>
         world.bad_robot
            ? [
               "<20>{#p/mettaton}{#e/mettaton/20}{#a.la/0}{#a.ra/0}怎麼了？\n聽我說話耳根子難受？",
               '<20>{#p/mettaton}{#e/mettaton/17}{#a.la/8}{#a.ra/8}...哼。\n真可惜啊，親！'
            ]
            : SAVE.data.b.a_state_hapstablook
               ? ['<20>{#p/mettaton}Or is it ju... just a ploy to get into the spotlight?']
               : iFancyYourVilliany()
                  ? ["<20>{#p/mettaton}Not after al... all we've been through!"]
                  : !world.badder_lizard
                     ? ["<20>{#p/mettaton}I wouldn't ha... have it any other way!"]
                     : ["<20>{#p/mettaton}It's the le... least I can do!"],
      turnTalk17: () =>
         world.bad_robot
            ? ['<20>{#p/mettaton}{#e/mettaton/19}{#a.la/8}{#a.ra/8}...']
            : ['<20>{#p/mettaton}{#e/mettaton/12}H... haah...\nH... haah...'],
      turnTalk18: () =>
         world.bad_robot
            ? [
               '<20>{#p/mettaton}{#e/mettaton/14}{#a.la/3}{#a.ra/0}果然。\n有的人就是不知悔改...',
               "<20>{#e/mettaton/13}{#a.la/8}{#a.ra/8}不過\n我也懶得跟你廢話了。",
               "<20>{#e/mettaton/7}{#a.la/9}{#a.ra/10}從現在開始，\n我會用心幹掉你！"
            ]
            : ['<20>{#p/mettaton}{#e/mettaton/13}The show must go on...!'],
      audienceRec0: () =>
         SAVE.data.b.a_state_hapstablook
            ? [
               '<20>{#p/mettaton}{#e/mettaton/11}(Sigh...)',
               '<20>{#e/mettaton/29}Well...',
               '<20>{#e/mettaton/10}Would you look at that.',
               "<20>{#e/mettaton/20}This is the most viewers I've ever had...",
               "<20>{#e/mettaton/17}By now, we've reached the viewer call-in milestone.",
               '<20>{#e/mettaton/14}...',
               "<20>{#e/mettaton/15}Let's see what the audience has to say...",
               '<20>{#e/mettaton/12}... before we finish off our saga for good.'
            ]
            : [
               '<20>{#p/mettaton}{#e/mettaton/8}Ooh, look at these ratings...',
               "<20>{#e/mettaton/5}This is the most viewers I've ever had!",
               "<20>{#e/mettaton/7}By now, we've reached the viewer call-in milestone.",
               "<20>{#e/mettaton/15}Let's see what the audience has to say...",
               iFancyYourVilliany()
                  ? '<20>{#e/mettaton/19}... before the battle is over for real!'
                  : '<20>{#e/mettaton/19}... before we finish off our saga for good!'
            ],
      turnTalkX0a: () =>
         SAVE.data.b.a_state_hapstablook
            ? [
               '<20>{#p/mettaton}{#e/mettaton/15}No... I...',
               '<20>{#p/mettaton}{#e/mettaton/14}I still have to...',
               '<20>{#p/mettaton}{#e/mettaton/9}...',
               "<20>{#p/mettaton}{#e/mettaton/9}Blooky, if you're watching this, then...",
               "<20>{#p/mettaton}{#e/mettaton/10}Please don't feel bad, alright?",
               "<20>{#p/mettaton}{#e/mettaton/9}I shouldn't have pushed you away.",
               "<20>{#p/mettaton}{#e/mettaton/19}I shouldn't have acted like I didn't care.",
               '<20>{#p/mettaton}{#e/mettaton/17}Because... regardless of what happened in the past...',
               '<20>{#p/mettaton}{#e/mettaton/10}You, Lurksalot... all of you...',
               "<20>{#p/mettaton}{#e/mettaton/20}You're still my family!",
               "<20>{#p/mettaton}{#e/mettaton/15}So... forget everything else I've said.",
               "<20>{#p/mettaton}{#e/mettaton/9}From now on, it doesn't matter.",
               '<20>{#p/mettaton}{#e/mettaton/10}All that matters...'
            ]
            : iFancyYourVilliany()
               ? [
                  '<20>{#p/mettaton}{#e/mettaton/14}...',
                  "<20>{#p/mettaton}{#e/mettaton/15}So that's how it is, is it?",
                  '<20>{#p/mettaton}{#e/mettaton/19}... heh, I think...',
                  '<20>{#p/mettaton}{#e/mettaton/20}I think I understand now.',
                  '<20>{#p/mettaton}{#e/mettaton/10}All this time...',
                  "<20>{#p/mettaton}{#e/mettaton/10}I've only been acting like we're enemies.",
                  '<20>{#p/mettaton}{#e/mettaton/11}A story for the audience to get invested in.',
                  '<20>{#p/mettaton}{#e/mettaton/19}But you...',
                  '<20>{#p/mettaton}{#e/mettaton/17}You believed it.',
                  '<20>{#p/mettaton}{#e/mettaton/17}You brought our rivalry to life.',
                  '<20>{#p/mettaton}{#e/mettaton/10}And by the end...',
                  '<20>{#p/mettaton}{#e/mettaton/9}You lived up perfectly to the role I gave to you.',
                  '<20>{#p/mettaton}{#e/mettaton/19}...',
                  '<20>{#p/mettaton}{#e/mettaton/14}Well then, dear $(moniker2).',
                  "<20>{#p/mettaton}{#e/mettaton/12}I guess it's only fair I live up to mine."
               ]
               : !world.badder_lizard
                  ? [
                     '<20>{#p/mettaton}{#e/mettaton/9}...',
                     '<20>{#p/mettaton}{#e/mettaton/10}Ha... darling...',
                     '<20>{#p/mettaton}{#e/mettaton/17}You do know what happens when my HP reaches zero...',
                     "<20>{#p/mettaton}{#e/mettaton/17}... don't you?",
                     '<20>{#p/mettaton}{#e/mettaton/18}...',
                     '<20>{#p/mettaton}{#e/mettaton/9}But before I go.',
                     '<20>{#p/mettaton}{#e/mettaton/10}I just wanted to say...',
                     "<20>{#p/mettaton}{#e/mettaton/17}... you're the greatest guest star I've ever had.",
                     '<20>{#p/mettaton}{#e/mettaton/19}All those people, watching us...',
                     '<20>{#p/mettaton}{#e/mettaton/19}Cheering us on...',
                     "<20>{#p/mettaton}{#e/mettaton/17}They're here because of you.",
                     '<20>{#p/mettaton}{#e/mettaton/10}To see your story unfold.',
                     '<20>{#p/mettaton}{#e/mettaton/9}So... darling.',
                     "<20>{#p/mettaton}{#e/mettaton/13}Don't underestimate yourself, alright?",
                     "<20>{#p/mettaton}{#e/mettaton/14}And don't worry about me.",
                     '<20>{#p/mettaton}{#e/mettaton/12}Because, even if my story came to an end...'
                  ]
                  : [
                     '<20>{#p/mettaton}{#e/mettaton/14}...',
                     '<20>{#p/mettaton}{#e/mettaton/14}... you...',
                     "<20>{#p/mettaton}{#e/mettaton/12}I should have known you'd betray me.",
                     '<20>{#p/mettaton}{#e/mettaton/15}...',
                     '<20>{#p/mettaton}{#e/mettaton/15}I wanted to give you a chance.',
                     ...(SAVE.data.n.bad_lizard < 2
                        ? [
                           '<20>{#p/mettaton}{#e/mettaton/14}I wanted to believe there was still good in you.',
                           '<20>{#p/mettaton}{#e/mettaton/19}But now...',
                           "<20>{#p/mettaton}{#e/mettaton/22}I know there's no hope of it coming back."
                        ]
                        : [
                           "<20>{#p/mettaton}{#e/mettaton/14}I wanted to believe that you'd changed.",
                           '<20>{#p/mettaton}{#e/mettaton/19}But now...',
                           '<20>{#p/mettaton}{#e/mettaton/22}I know you never had good in you to begin with.'
                        ]),
                     '<20>{#p/mettaton}{#e/mettaton/30}... you poor thing.',
                     '<20>{#p/mettaton}{#e/mettaton/30}I really must apologize.',
                     '<20>{#p/mettaton}{#e/mettaton/20}If I had just been a little more pragmatic...',
                     "<20>{#p/mettaton}{#e/mettaton/23}I could've given you the death you so utterly deserve.",
                     '<20>{#p/mettaton}{#e/mettaton/30}...',
                     "<20>{#p/mettaton}{#e/mettaton/30}Well, that's fine.",
                     '<20>{#p/mettaton}{#e/mettaton/24}You live and learn, darling.',
                     '<20>{#p/mettaton}{#e/mettaton/30}And in the end...'
                  ],
      turnTalkX0b: () =>
         SAVE.data.b.a_state_hapstablook
            ? ['<20>{*}{#p/mettaton}{#e/mettaton/31}... is that I forgive you!{^20}{%}']
            : iFancyYourVilliany()
               ? ["<20>{*}{#p/mettaton}{#e/mettaton/30}... let's end this rivalry off with a bang.{^20}{%}"]
               : !world.badder_lizard
                  ? ['<20>{*}{#p/mettaton}{#e/mettaton/30}... at least it ended off with a bang.{^20}{%}']
                  : ["<20>{*}{#p/mettaton}{#e/mettaton/27}... you'll realize not everything's going to go your way!{^20}{%}"],
      turnTalkX1a: ['<20>{#p/mettaton}{#e/mettaton/19}{#a.la/8}{#a.ra/8}...？'],
      turnTalkX1b: [
         '<20>{#p/mettaton}{#e/mettaton/15}{#a.la/0}{#a.ra/0}...果然。',
         "<20>{#p/mettaton}{#e/mettaton/13}{#a.la/8}{#a.ra/8}你以為沒有這些電線\n我就完了，是不是？",
         '<20>{#p/mettaton}{#e/mettaton/20}{#a.la/0}{#a.ra/10}哎呀，您可真笨...\n蠢得不能再蠢的小崽子。',
         "<20>{#p/mettaton}{#e/mettaton/23}{#a.la/10}{#a.ra/0}大錯特錯。",
         "<20>{#p/mettaton}{#e/mettaton/24}{#a.la/2}{#a.ra/3}這段時間，我已經把\n整個核心的力量\n全吸了過來...",
         "<20>{#p/mettaton}{#e/mettaton/30}{#a.la/8}{#a.ra/8}這麼多的能量，\n可不能白白浪費了。"
      ],
      turnTalkX1c: ["<20>{*}{#p/mettaton}{#e/mettaton/27}{#a.la/8}{#a.ra/8}就讓我瞧瞧\n你現在還有什麼能耐？"],
      turnTalkX2: [
         '<20>{#p/mettaton}{#e/mettaton/26}...呃啊...',
         '<20>{#e/mettaton/25}你贏了。',
         '<20>{#e/mettaton/19}看來，我...\n又低估你了。',
         "<20>{#e/mettaton/13}不過，沒關係。",
         '<20>{#e/mettaton/14}一定，一定有其他人...\n在某處...',
         "<20>{#e/mettaton/19}等待著你，\n等待著徹底終結\n這場鬧劇。",
         '<20>{#e/mettaton/9}到那時...',
         "<20>{#e/mettaton/10}自由..." 
      ],
      turnTalkX3: [
         '<20>{#p/mettaton}{#e/mettaton/26}...難以置信...',
         "<20>{#e/mettaton/25}我都來不及使上全力。",
         "<20>{#e/mettaton/10}不過...\n也許這樣反而更好。",
         '<20>{#e/mettaton/9}...\n畢竟...',
         '<20>{#e/mettaton/18}假如我們真的\n已經毫無希望...',
         "<20>{#e/mettaton/10}那還不如就此\n放棄抵抗。",
         '<20>{#e/mettaton/9}...',
         '<20>{#e/mettaton/9}唉...'
      ],
      audienceRec1: () => [
         '<21>{#p/event}鈴鈴，鈴鈴...',
         '<21>{#p/napstablook}{~}.....',
         '<21>{#e/mettaton/9}{~}oh........',
         '<21>{~}hi...\nmettaton...',
         ...(SAVE.data.b.a_state_hapstablook
            ? [
               "<21>{#e/mettaton/18}{~}i know it's been weird since the meeting...\nbut...",
               '<21>{~}seeing you for who you really are, doing what you really want...',
               '<21>{#e/mettaton/10}{~}brought a happy tear to my eye...',
               "<21>{#e/mettaton/9}{~}i can't tell, but...\ni guess this is the last episode...?",
               "<21>{#e/mettaton/11}{~}i'll miss you...\ncousin......"
            ]
            : [
               ...(iFancyYourVilliany()
                  ? [
                     '<21>{#e/mettaton/18}{~}i really liked seeing your rivalry...',
                     ...(SAVE.data.n.kills < 10
                        ? [
                           "<21>{~}it's not usually the sort of thing i'm into...\nbut...",
                           '<21>{#e/mettaton/10}{~}because you did it, i enjoyed it...\nvicariously'
                        ]
                        : [
                           '<21>{~}a lot of people have gone missing lately...\nbut...',
                           '<21>{#e/mettaton/10}{~}seeing you battle it out like that helped me feel better'
                        ])
                  ]
                  : [
                     '<21>{#e/mettaton/18}{~}i really liked watching your show...',
                     ...(SAVE.data.n.kills < 10
                        ? [
                           '<21>{~}my life is pretty boring...\nbut...',
                           '<21>{#e/mettaton/10}{~}seeing you on tv brought excitement to my life...\nvicariously'
                        ]
                        : [
                           '<21>{~}a lot of people have gone missing lately...\nbut...',
                           '<21>{#e/mettaton/10}{~}seeing you on tv helped me feel better'
                        ])
                  ]),
               "<21>{#e/mettaton/9}{~}i can't tell, but...\ni guess this is the last episode...?",
               "<21>{#e/mettaton/11}{~}i'll miss you...\nmettaton......"
            ])
      ],
      audienceRec2: [
         '<20>{#p/mettaton}{#e/mettaton/19}No, wait!\nWait, bl...',
         '<20>{#e/mettaton/9}Th... they already hung up.',
         '<20>{#e/mettaton/19}...',
         "<20>{#e/mettaton/20}I'll take another caller!!!"
      ],
      audienceRec3a: () =>
         iFancyYourVilliany()
            ? ['<21>{#p/basic}Mettaton, you really did us proud!']
            : ['<21>{#p/basic}Mettaton, your show made us so happy!'],
      audienceRec3b: () =>
         iFancyYourVilliany()
            ? ["<21>{#p/basic}Mettaton, who's going to fight the villains without you!"]
            : ["<21>{#p/basic}Mettaton, I don't know what I'll watch without you!"],
      audienceRec3c: () =>
         iFancyYourVilliany()
            ? ["<21>{#e/mettaton/10}{#p/basic}There's a reason you're the shining star of the outpost!"]
            : ["<21>{#e/mettaton/10}{#p/basic}There's a Mettaton- shaped hole in my Mettaton-shaped heart!"],
      audienceRec4: () => [
         '<20>{#p/mettaton}Ah... I see.',
         '<20>{#e/mettaton/9}...',
         '<20>{#e/mettaton/19}Everyone... thank you so much.',
         ...(SAVE.data.b.a_state_hapstablook
            ? [
               '<20>{#e/mettaton/20}And Blooky...',
               "<20>{#e/mettaton/20}I never thought I'd forgive you and the others, but...",
               '<20>{#e/mettaton/9}That farm was your passion project, right?',
               '<20>{#e/mettaton/9}After having several of my own... I think I get it.',
               '<20>{#e/mettaton/19}You just wanted us to be successful together...',
               '<20>{#e/mettaton/19}You, Lurksalot... all of you...',
               '<20>{#e/mettaton/20}You all just wanted us to be happy.',
               '<20>{#e/mettaton/20}... heh.',
               '<20>{#e/mettaton/9}But as for my show...',
               '<20>{#e/mettaton/10}I think I might take a break for a while.'
            ]
            : ['<20>{#e/mettaton/20}But you misunderstand...', "<20>{#e/mettaton/10}I'm... not going anywhere."]),
         '<20>...',
         "<20>{#e/mettaton/20}I guess it's for the best, though.",
         ...(SAVE.data.b.a_state_hapstablook
            ? [
               "<20>{#e/mettaton/15}I've been away from the family for far too long...",
               "<20>{#e/mettaton/14}It's about time I told them what's going on.",
               '<20>{#e/mettaton/19}In short...'
            ]
            : [
               "<20>{#e/mettaton/15}The truth is, this form's energy consumption is...",
               '<20>{#e/mettaton/14}Inefficient.',
               "<20>{#e/mettaton/19}In a few moments, I'll run out of battery power, and..."
            ]),
         '<20>{#e/mettaton/10}Well.',
         "<20>I'll be alright.",
         iFancyYourVilliany()
            ? '<20>{#e/mettaton/9}See you around, $(moniker2).'
            : '<20>{#e/mettaton/9}Fly safe, darling.',
         '<20>{#e/mettaton/19}And everyone... thank you.',
         "<20>{#e/mettaton/20}You've been a great audience!"
      ],
      neointro: [
         "<20>{*}{#p/mettaton}你變{@fill=#ff993d}橙{@fill=#000}了。{^30}{%}",
         "<20>{*}{#e/mettaton/4}這就是我的攻擊。{^30}{%}",
         "<20>{*}{#e/mettaton/12}...嘿，臨死之前，\n何不找點樂子呢？{^30}{%}",
         '<20>{*}{#e/mettaton/0}配合一下，\n按[Z]釋放衝擊波。{^30}{%}',
         '<20>{*}{#e/mettaton/0}不過要小心...{^30}{%}',
         "<20>{*}{#e/mettaton/0}不停釋放衝擊波的話，\n你就會走不動。{^30}{%}",
         '<20>{*}{#e/mettaton/12}不廢話了。{^30}{%}',
         "<20>{*}{#e/mettaton/4}現在，\n送你們下地獄吧。{^30}{%}"
      ],
      mettahero1: [
         '<20>{#p/mettaton}{#e/mettaton/6}...',
         "<20>{#e/mettaton/9}看-看來...\n和新身體融合，\n就是這般下場。",
         "<20>{#e/mettaton/11}再也沒有人...",
         '<20>{#e/mettaton/7}...能攔住你們了...'
      ],
      mettahero2: ['<20>{#e/mettaton/7}...', '<20>{#e/mettaton/10}永別了...\n...\n...親。'],
      napstahero1: ['<20>{#p/finalghost}{~}...', '<20>{~}Mettaton...'],
      napstahero2: [
         '<20>{#p/finalghost}{~}你們這群殺人魔...',
         '<20>{~}...',
         '<20>{~}我等候多時，\n就為了親手結果你們。',
         '<20>{~}現在，\n終於可以付諸實行了。',
         '<20>{~}你們不會魔法，\n傷不了我，\n註定要止步於此。',
         '<20>{|}{~}給我去- {%}'
      ],
      napstahero3: () =>
         [
            [
               "<20>{#p/asriel2}真當我傻？\n我的魔法是不強，\n但也沒差到那種地步。",
               '<20>{#x1}別來煩我了...'
            ],
            ['<20>{#p/asriel2}...']
         ][Math.min(SAVE.flag.n.ga_asrielNapstakill++, 1)],
      qq: () =>
         SAVE.data.b.a_state_hapstablook
            ? '你願意原諒某個幽靈嗎？'
            : !world.badder_lizard
               ? '你會親幽靈嗎？'
               : '你會揍幽靈嗎？',
      qa: () =>
         SAVE.data.b.a_state_hapstablook
            ? ["我原諒你", "不會原諒", '抱抱就好啦！', '放下過去吧。']
            : !world.badder_lizard
               ? ['沒問題', '必須的', '那當然！', '現在就\n親一個']
               : ['我會', '我當然會', '我肯定會', '我必須會'],
      q0: () =>
         SAVE.data.b.a_state_hapstablook
            ? ["<20>{#p/mettaton}時間到。{^40}{%}"]
            : !world.badder_lizard
               ? ["<20>{#p/mettaton}Time's up, darling.\nI'll take that as a yes~{^40}{%}"]
               : ["<20>{#p/mettaton}Time's up, darling.\nI'll take that as a yes...{^40}{%}"],
      q1: () =>
         SAVE.data.b.a_state_hapstablook
            ? ['<20>{#p/mettaton}Straight to the point, I see.{^40}{%}']
            : !world.badder_lizard
               ? ['<20>{#p/mettaton}Great answer!\nI love it!!!{^40}{%}']
               : ["<20>{#p/mettaton}I'd like to see you try.{^40}{%}"],
      q2: () =>
         SAVE.data.b.a_state_hapstablook
            ? ["<20>{#p/mettaton}... but I can't keep running away.{^40}{%}"]
            : !world.badder_lizard
               ? ["<20>{#p/mettaton}Now THAT's how you answer a question!{^40}{%}"]
               : ['<20>{#p/mettaton}So you just lack the courage, hmm?{^40}{%}'],
      q3: () =>
         SAVE.data.b.a_state_hapstablook
            ? ["<20>{#p/mettaton}Woah, I wouldn't go that far.{^40}{%}"]
            : !world.badder_lizard
               ? ['<20>{#p/mettaton}I like your attitude!{^40}{%}']
               : ['<20>{#p/mettaton}The truth is so refreshing!{^40}{%}'],
      q4: () =>
         SAVE.data.b.a_state_hapstablook
            ? ["<20>{#p/mettaton}Well, that's confidence...{^40}{%}"]
            : !world.badder_lizard
               ? ["<20>{#p/mettaton}Oooh, you're serious about this.{^40}{%}"]
               : ["<20>{#p/mettaton}Don't lie to yourself, dear...{^40}{%}"],
      hitIndicator: '破甲：$(x)次',
      shieldIndicator: '護甲：$(x)%',
      ratings: {
         pose1: () => (iFancyYourVilliany() ? '有兩下子' : '精彩'),
         pose2: () => (iFancyYourVilliany() ? '一般般' : '小心點'),
         pose3: () => (iFancyYourVilliany() ? '笑死' : '危險啊'),
         pose4: () => (iFancyYourVilliany() ? '您可真棒呢' : '別出人命了'),
         flirt1: () => (iFancyYourVilliany() ? '超級反轉' : '萌萌噠'),
         flirt2: () => (iFancyYourVilliany() ? '瘋狂加碼' : '好可愛'),
         flirt3: () => (iFancyYourVilliany() ? '三倍奉還' : '好浪漫'),
         flirt4: () => (iFancyYourVilliany() ? '撩得飛起' : '真迷人'),
         boast1: '白吹牛了',
         boast2: '真尷尬',
         boast3: '有兩下子',
         heel1: '正義執行',
         heel2: '使勁揍',
         heel3: '懲罰呢？',
         hurt: '痛快',
         crit: '打得準',
         dead: '一擊致命',
         bomb: '炸裂',
         scream: '激情滿滿',
         hopbox: '整得行',
         hearthurt: '會心一擊',
         item: {
            artifact: '沒意思',
            old_gun: '震撼人心',
            old_bomb: '迷糊了',
            old_spray: '味道不錯',
            tvm_radio: '好聽',
            tvm_fireworks: '璀璨奪目',
            tvm_mewmew: '這都敢放？',
            spanner: '優雅',
            armor: '蠻時髦',
            weapon: '有想法',
            repeat: '看過了',
            repeat_x: '看膩歪了',
            pain: '看著都疼',
            blookpie: '熟悉的味道'
         },
         smooch: '回答正確',
         nosmooch: '回答錯誤'
      }
   },

   b_opponent_madjick: {
      name: '* Cozmo',
      spanner: ['<32>{#p/human}* (You brandish the spanner.)\n* (Cozmo does not mistake it for a magic wand.)'],
      epiphaNOPE: ['<20>{#p/basic}{~}That magic...', '<20>{#p/basic}{~}... I shall not give into its power!'],
      hint: ['<33>{#p/basic}* Hold on.\n* I think I know what to do here.'],
      assistTalk1: ['<20>{#p/basic}{~}Er...'],
      artifact_text: ['<32>{#p/basic}* Cozmo recognizes the artifact and deems you worthy of its respect!'],
      artifactTalk: [
         '<20>{#p/basic}{~}Could it be?\nThe pendant of kings and rulers?',
         '<20>{#p/basic}{~}I shall be in your way no longer!'
      ],
      assistAction: [
         '<32>{*}{#p/basic}* World of old. {^5}World of magic.{^25}{%}',
         '<32>{*}{#p/basic}* But no matter how tragic, we must live on...{^60}{%}',
         '<32>{*}{#p/basic}* And remember.{^40}{%}'
      ],
      assistTalk2: ['<20>{#p/basic}{~}Memoria mundi!', '<20>{#p/basic}{~}You know the words!'],
      old_gun_text: ['<32>{#p/human}* （你開了一槍。）', '<32>{#p/basic}* Cozmo is knocked out!'],
      old_bomb_text: [
         '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
         '<32>{#p/basic}* Cozmo is knocked out!'
      ],
      old_spray_text: ['<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）', '<32>{#p/basic}* Cozmo is knocked out!'],
      status1: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* Uh oh.'] : ['<32>{#p/story}* Cozmo在瞬息間突然現身！'],
      act_check: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* Cozmo\'s what you\'d call a \"traditional\" magic user.\n* Its orbs are its strength...']
            : ['<32>{#p/story}* COZMO - ATK 29 DEF 24\n* This enigmatic ELITE squad member speaks in magic words.'],
      act_check2: ['<32>{#p/story}* COZMO - ATK 29 DEF 24\n* Not playing with a full deck.'],
      act_check3: ['<32>{#p/story}* COZMO - ATK 29 DEF 24\n* A magician, out of tricks...'],
      act_check4: ['<32>{#p/story}* COZMO - ATK 29 DEF 24\n* No magic words could save this old magician now.'],
      act_check5: [
         '<32>{#p/story}* COZMO - ATK 29 DEF 24\n* The power of love is stronger than even the oldest magic.'
      ],
      idleStatus1: () =>
         !world.badder_lizard ? ["<32>{#p/alphys}* It's Cozmo."] : ['<32>{#p/story}* Cozmo跳著神秘的舞蹈。'],
      idleStatus2: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* It's Cozmo."]
            : ['<32>{#p/story}* Cozmo flaunts its orbs in a menacing manner.'],
      idleStatus3: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* It's Cozmo."]
            : ['<32>{#p/story}* Cozmo whispers non-terrestrial swear words.'],
      idleStatus4: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* It's Cozmo."]
            : ['<32>{#p/story}* Cozmo peers at you with piercing eyes.'],
      idleStatus5: () =>
         !world.badder_lizard ? ["<32>{#p/alphys}* It's Cozmo."] : ['<32>{#p/story}* Smells like... magic.'],
      idleTalk1: ['<20>{#p/basic}{~}Abra cadabra.'],
      idleTalk2: ['<20>{#p/basic}{~}A la kazam!!'],
      idleTalk3: ['<20>{#p/basic}{~}Tinkle tinkle hoy.'],
      idleTalk4: ['<20>{#p/basic}{~}Hocus pocus.'],
      idleTalk5: ['<21>{#p/basic}{~}Please and thank you.'],
      danceText1: ['<32>{#p/human}* (You dance.)', "<32>{#p/basic}* Cozmo's gravity orb grows near..."],
      danceTalk1: ['<20>{#p/basic}{~}Magnum gravitas!!'],
      danceStatus1: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* One orb down...']
            : ["<32>{#p/story}* Cozmo's gravity orb has relented its pull."],
      danceText2: () => [
         '<32>{#p/human}* (You dance.)',
         "<32>{#p/basic}* Cozmo's shocker orb powers up...",
         ...(!world.badder_lizard ? ["<32>{#p/alphys}* Yes, that's it!\n* Y-you're almost there!"] : [])
      ],
      danceTalk2: ['<20>{#p/basic}{~}Vulu voltika!'],
      danceTalk3: ["<20>{#p/basic}{~}It's too much!!!"],
      danceStatus2: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* Yes!!!\n* The orbs are out of power!']
            : ["<32>{#p/story}* Cozmo's shocker orb is drained of energy."],
      danceText3: ['<32>{#p/human}* (You dance.)\n* (Nothing changes.)'],
      danceText4: [
         '<32>{#p/human}* (You dance.)',
         "<32>{#p/basic}* Cozmo's confusion increases to an unbearable degree!"
      ],
      danceIdleTalk1: ['<20>{#p/basic}{~}Saddened...'],
      danceIdleTalk2: ['<20>{#p/basic}{~}Defeated...'],
      danceIdleTalk3: ['<20>{#p/basic}{~}Failed...'],
      danceStatus3: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* You can probably spare it now.']
            : ['<32>{#p/story}* Cozmo is out of options.'],
      playdeadText1: () => [
         '<32>{#p/human}* (You play dead.)',
         "<32>{#p/basic}* Cozmo's orbs begin to act strangely to each other...",
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* What the...?'] : [])
      ],
      playdeadTalk: ['<20>{#p/basic}{~}\x00*chants of confusion*'],
      playdeadStatus: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* I guess that works...?']
            : ["<32>{#p/story}* Cozmo's orbs don't know how to handle this."],
      playdeadIdleTalk1: ['<20>{#p/basic}{~}Utter inconfidence.'],
      playdeadIdleTalk2: ['<20>{#p/basic}{~}Total vexation.'],
      playdeadIdleTalk3: ['<20>{#p/basic}{~}Radical confusion.'],
      playdeadText2: ['<32>{#p/human}* (You play dead.)\n* (Nothing changes.)'],
      flirtText0: () => [
         '<32>{#p/human}* (You flirt with Cozmo.)\n* (No effect.)',
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* Yeah, good luck with that...'] : [])
      ],
      flirtText1: () => [
         '<32>{#p/human}* (You call on your experience, and invoke a flirtatious incantation.)',
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* Huh...?'] : [])
      ],
      flirtTalk1: ['<20>{#p/basic}{~}Ah!\nA fellow wizard!'],
      flirtStatus1: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* Oh my god.\n* Do it again!!!']
            : ['<32>{#p/story}* Cozmo is on the love train.'],
      flirtText2: () => [
         '<32>{#p/human}* (You call on your experience, and recite a romantic scribe.)',
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* It just gets better and better.'] : [])
      ],
      flirtTalk2: ["<20>{#p/basic}{~}Ah!\nIt's amazing!"],
      flirtStatus2: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* Wow... I guess that's that."]
            : ['<32>{#p/story}* Cozmo is enchanted.'],
      flirtText3: () => [
         '<32>{#p/human}* (You flirt.)\n* (Nothing changes.)',
         ...(!world.badder_lizard ? ["<32>{#p/alphys}* Pfft, don't push your luck."] : [])
      ],
      flirtIdleTalk1: ['<20>{#p/basic}{~}How lovely...'],
      flirtIdleTalk2: ['<20>{#p/basic}{~}How sweet...'],
      flirtIdleTalk3: ['<20>{#p/basic}{~}How thoughtful...'],
      perilStatus: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* Its HP is low...'] : ['<32>{#p/story}* Cozmo is holding on.']
   },

   b_opponent_knightknight: {
      name: '* Terrestria',
      epiphaNOPE: ['<20>{#p/basic}{~}... this magic... is forbidden...'],
      hint: ['<32>{#p/basic}* Wait...\n* Let me try something.'],
      assistTalk1: ['<20>{#p/basic}{~}...\n...\n...\nHmm?'],
      assistAction: [
         '<32>{*}{#p/human}* （...）{^30}{%}',
         '<32>{*}{#p/human}* (The sound of an ancient song echoes through the room.){^100}{%}'
      ],
      assistTalk2: [
         '<20>{#p/basic}{~}A song of our long- lost world...',
         '<20>{#p/basic}{~}Perhaps there is still beauty in the universe.'
      ],
      artifact_text: ['<32>{#p/basic}* Terrestria recognizes the artifact and deems you worthy of her trust!'],
      artifactTalk: [
         '<20>{#p/basic}{~}An artifact from our long-lost world...',
         '<20>{#p/basic}{~}Perhaps its legend will live on in you.'
      ],
      old_gun_text: ['<32>{#p/human}* （你開了一槍。）', '<32>{#p/basic}* Terrestria is knocked out!'],
      old_bomb_text: [
         '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
         '<32>{#p/basic}* Terrestria is knocked out!'
      ],
      old_spray_text: [
         '<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）',
         '<32>{#p/basic}* Terrestria is knocked out!'
      ],
      status1: () =>
         !world.badder_lizard
            ? SAVE.data.b.assist_madjick
               ? ['<32>{#p/alphys}* You think you can repeat that last trick?']
               : ['<32>{#p/alphys}* Not again.']
            : ['<32>{#p/story}* Terrestria blocks the way!'],
      act_check: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* Terrestria is a staff-wielder, and she's REALLY passionate about the homeworld."]
            : [
               '<32>{#p/story}* TERRESTRIA - ATK 36 DEF 36\n* This heavy ELITE squad member wields the Planetary Staff.'
            ],
      act_check2: ['<32>{#p/story}* TERRESTRIA - ATK 36 DEF 36\n* The world is crumbling.'],
      act_check3: ["<32>{#p/story}* TERRESTRIA - ATK 36 DEF 36\n* Things aren't so bad anymore."],
      act_check4: ['<32>{#p/story}* TERRESTRIA - ATK 36 DEF 36\n* The ground shakes beneath her ever-worn boots.'],
      act_check5: ['<32>{#p/story}* TERRESTRIA - ATK 36 DEF 36\n* Her attention stolen, the world falls away.'],
      idleStatus1: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* It's Terrestria."]
            : ['<32>{#p/story}* Terrestria tightens her grip on the staff.'],
      idleStatus2: () =>
         !world.badder_lizard ? ["<32>{#p/alphys}* It's Terrestria."] : ['<32>{#p/story}* Terrestria breathes deeply.'],
      idleStatus3: () =>
         !world.badder_lizard ? ["<32>{#p/alphys}* It's Terrestria."] : ['<32>{#p/story}* Terrestria watches quietly.'],
      idleStatus4: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* It's Terrestria."]
            : ["<32>{#p/story}* Terrestria's armor emits a faint, yellow glow."],
      idleStatus5: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* It's Terrestria."]
            : ['<32>{#p/story}* Smells like a forgotten relic.'],
      idleTalk1: ['<20>{#p/basic}{~}Good knight.'],
      idleTalk2: ['<20>{#p/basic}{~}Farewell.'],
      idleTalk3: ['<20>{#p/basic}{~}Adieu.'],
      idleTalk4: ['<20>{#p/basic}{~}Close your eyes...'],
      idleTalk5: ['<20>{#p/basic}{~}Goodbye.'],
      comfortText1: () => [
         '<32>{#p/human}* (You move in closer and caress Terrestria, telling her things will be okay.)',
         ...(!world.badder_lizard ? ["<32>{#p/alphys}* That's... uh..."] : [])
      ],
      comfortTalk1: ['<20>{#p/basic}{~}...\n...\n...\nTruly?'],
      comfortStatus1: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* Is she... crying?']
            : ["<32>{#p/story}* Terrestria's stance weakens."],
      comfortText2: () => [
         '<32>{#p/human}* (You embrace Terrestria, reminding her there is still beauty in the universe.)',
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* Awww...'] : [])
      ],
      comfortTalk2: ['<20>{#p/basic}{~}...\n...\nThank you...'],
      comfortStatus2: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* That's... honestly very sweet."]
            : ['<32>{#p/story}* Terrestria has found a new purpose in life.'],
      comfortTalk3: ['<20>{#p/basic}{~}...\n...\nThere you are...'],
      comfortText3: ['<32>{#p/human}* (You comfort Terrestria.)\n* (Nothing changes.)'],
      comfortText4: [
         '<32>{#p/human}* (You comfort Terrestria.)',
         '<32>{#p/basic}* Terrestria drops her staff and accepts your offer of peace.'
      ],
      comfortIdleTalk1: ['<20>{#p/basic}{~}Gratuities.'],
      comfortIdleTalk2: ['<20>{#p/basic}{~}Much obliged.'],
      comfortIdleTalk3: ['<20>{#p/basic}{~}Many thanks.'],
      comfortStatus3: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* I think you can spare her...']
            : ['<32>{#p/story}* Terrestria is at peace.'],
      flashText1: () => [
         '<32>{#p/human}* (You flash your phone screen.)',
         '<32>{#p/basic}* Terrestria goes into a panic!',
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* What are you doing!?'] : [])
      ],
      flashTalk: ['<20>{#p/basic}{~}\x00*silent panic*'],
      flashStatus: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* She's b-blinded!"]
            : ['<32>{#p/story}* Terrestria has lost her sense of sight for this battle.'],
      flashIdleTalk1: ['<20>{#p/basic}{~}No vision...'],
      flashIdleTalk2: ["<20>{#p/basic}{~}Can't see you..."],
      flashIdleTalk3: ['<20>{#p/basic}{~}Where are you...'],
      flashText2a: [
         '<32>{#p/human}* (You flash your phone screen.)\n* (Terrestria is too busy day- dreaming about you to notice.)'
      ],
      flashText2b: ['<32>{#p/human}* (You flash your phone screen.)\n* (Terrestria is too relaxed to notice.)'],
      flashText2c: ['<32>{#p/human}* (You flash your phone screen.)\n* (Nothing changes.)'],
      flirtText0: () => [
         '<32>{#p/human}* (You flirt with Terrestria.)\n* (No effect.)',
         ...(!world.badder_lizard
            ? ['<32>{#p/alphys}* Yeah, the ELITE squad is sort of trained against swooning.']
            : [])
      ],
      flirtText1: () => [
         '<32>{#p/human}* (You call on your experience, and whisper a simple but confident compliment.)',
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* Uh...'] : [])
      ],
      flirtTalk1: ['<20>{#p/basic}{~}What delight...'],
      flirtStatus1: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* Of course you'd find a way to make it work..."]
            : ['<32>{#p/story}* Terrestria is beginning to like you.'],
      flirtText2: () => [
         "<32>{#p/human}* (You call on your experience, and gaze long into Terrestria's eyes.)",
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* Ohhhh kay.'] : [])
      ],
      flirtTalk2: ['<20>{#p/basic}{~}What beauty to be seen...'],
      flirtStatus2: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* W-well.\n* This is... something.']
            : ['<32>{#p/story}* Terrestria is enamoured.'],
      flirtText3: () => [
         '<32>{#p/human}* (You flirt.)\n* (Nothing changes.)',
         ...(!world.badder_lizard ? ['<32>{#p/alphys}* You are insane.'] : [])
      ],
      flirtIdleTalk1: ['<20>{#p/basic}{~}Quite breath-taking...'],
      flirtIdleTalk2: ['<20>{#p/basic}{~}How wonderful...'],
      flirtIdleTalk3: ['<20>{#p/basic}{~}So beautiful...'],
      perilStatus: () =>
         !world.badder_lizard
            ? ["<32>{#p/alphys}* She's close to death..."]
            : ["<32>{#p/story}* Terrestria's breath shakes."]
   },

   b_opponent_froggitex: {
      name: '* Final Froggit',
      epiphany: [
         
         ['<08>{#p/basic}{~}In your mercy, I see wisdom.', '<08>{#p/basic}{~}My hopes have been ful- filled.'],
         () =>
            world.meanie
               ? 
               [
                  '<08>{#p/basic}{~}I did not forsee this outcome.',
                  '<08>{#p/basic}{~}I must steer clear of the abyss..'
               ]
               : SAVE.data.b.oops && world.flirt > 9
                  ? 
                  ['<08>{#p/basic}{~}Skip, jump.', '<08>{#p/basic}{~}May love radiate through our hearts.']
                  : SAVE.data.b.oops
                     ? 
                     ['<08>{#p/basic}{~}We shall be the best of friends.']
                     : 
                     ['<08>{#p/basic}{~}Your kindness warms my heart.'],
         
         ['<08>{#p/basic}{~}Robbit, robbit.', '<08>{#p/basic}{~}My time has come.'],
         
         ['<08>{#p/basic}{~}May you have the wealth that you desire.']
      ],
      genostatus: ['<32>{#p/asriel2}* ...'],
      old_gun_text: ['<32>{#p/human}* （你開了一槍。）', '<32>{#p/basic}* Final Froggit is knocked out!'],
      old_bomb_text: [
         '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
         '<32>{#p/basic}* Final Froggit is knocked out!'
      ],
      old_spray_text: [
         '<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）',
         '<32>{#p/basic}* Final Froggit is knocked out!'
      ],
      act_check: () =>
         world.goatbro && SAVE.data.n.plot > 66.2
            ? ['<32>{#p/asriel2}* ...']
            : !world.badder_lizard
               ? calm_lizard()
                  ? ["<32>{#p/alphys}* Final Froggit, it's like Froggit, but fancier.\n* It talks in an odd language."]
                  : ["<32>{#p/alphys}* It's just Final Froggit."]
               : ['<32>{#p/story}* FINAL FROGGIT - ATK 30 DEF 24\n* The future is boundless for this monster.'],
      act_check2: [
         '<32>{#p/story}* FINAL FROGGIT - ATK 30 DEF 24\n* This monster may soon live on through its wisdom.'
      ],
      act_check3: ['<32>{#p/story}* FINAL FROGGIT - ATK 30 DEF 24\n* This monster understands your true desires.'],
      act_check4: ['<32>{#p/story}* FINAL FROGGIT - ATK 30 DEF 24\n* This monster is satisfied with its message.'],
      idleText1: ['<08>{#p/basic}{~}Robbit, robbit.'],
      idleText2: ['<08>{#p/basic}{~}Creak, creak.'],
      idleText3: ['<08>{#p/basic}{~}Skip, jump.'],
      idleText4: ['<08>{#p/basic}{~}Purr.'],
      status1: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* ...']
            : ['<32>{#p/story}* The battlefield is engulfed in the smell of leola root.'],
      status2: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Final Froggit seeks an understanding.'],
      status3: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Final Froggit hopes to share its wisdom.'],
      act_flirt: () => [
         '<32>{#p/human}* (You flirt with Final Froggit.)',
         '<32>* Final Froggit shows modest appreciation for your remarks.',
         ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* Ehehe...'] : [])
      ],
      flirtText: () =>
         world.meanie ? ['<08>{#p/basic}{~}(Sighs deeply.)\nRobbit.'] : ['<08>{#p/basic}{~}(Blushes deeply.)\nRobbit.'],
      act_translate1: () => [
         '<32>{#p/human}* (But there was nothing for you to translate yet.)',
         ...(!world.badder_lizard
            ? ['<32>{#p/alphys}* Maybe you should, like... wait for it to say something first?']
            : [])
      ],
      act_translate2: ["<32>{#p/human}* (You translate Final Froggit's message.)"],
      translateText1: () =>
         world.meanie
            ? ["<08>{#p/basic}{~}(Don't kill and don't be killed.)"]
            : ['<08>{#p/basic}{~}(Time heals all wounds.)'],
      translateText2: () =>
         world.meanie
            ? ['<08>{#p/basic}{~}(Let not the rage consume you.)']
            : ['<09>{#p/basic}{~}(Keep moving forward.)'],
      translateText3: () =>
         world.meanie
            ? ['<08>{#p/basic}{~}(You can always do better.)']
            : ['<08>{#p/basic}{~}(Stay true to your- self.)'],
      translateText4: () =>
         world.meanie ? ['<08>{#p/basic}{~}(Never give into fear.)'] : ['<08>{#p/basic}{~}(Always try your best.)'],
      translateText5: () =>
         world.meanie
            ? ['<08>{#p/basic}{~}(Regret when you were mean.)']
            : ['<08>{#p/basic}{~}(Never regret being kind.)'],
      mercyStatus: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* I think you can spare Final Froggit now.']
               : ['<32>{#p/alphys}* I think you can spare it now.']
            : ['<32>{#p/story}* Final Froggit seems reluctant to fight you.'],
      act_mystify: ['<32>{#p/human}* (You do something mysterious, but Final Froggit is unaffected.)'],
      act_threaten: ['<32>{#p/human}* (You do something threatening, but Final Froggit is unaffected.)'],
      perilStatus: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* Uh...']
               : ['<32>{#p/alphys}* No...']
            : ['<32>{#p/story}* Final Froggit stands its ground.']
   },

   b_opponent_whimsalot: {
      name: '* Flutterknyte',
      epiphany: [
         
         ['<08>{#p/basic}{~}Thank good- ness..', '<08>{#p/basic}{~}I feared I would never escape.'],
         () =>
            world.meanie
               ? 
               ['<08>{#p/basic}{~}What was I think- ing..', '<08>{#p/basic}{~}I have to get out of here..!']
               : SAVE.data.b.oops && world.flirt > 9
                  ? 
                  ['<08>{#p/basic}{~}If you truly feel this way..', '<08>{#p/basic}{~}I am obliged to as well..!']
                  : SAVE.data.b.oops
                     ? 
                     ["<08>{#p/basic}{~}It's okay..", '<08>{#p/basic}{~}We can be friends if you want..']
                     : 
                     ['<08>{#p/basic}{~}Please..', "<08>{#p/basic}{~}D-don't let go.."],
         
         ["<08>{#p/basic}{~}I'm so sorry..", "<08>{#p/basic}{~}I knew I wasn't cut out for this.."],
         
         ["<08>{#p/basic}{~}Here's your pay- ment..", '<08>{#p/basic}{~}Please.. spare me..']
      ],
      genostatus: ['<32>{#p/asriel2}* ...'],
      old_gun_text: ['<32>{#p/human}* （你開了一槍。）', '<32>{#p/basic}* Flutterknyte is knocked out!'],
      old_bomb_text: [
         '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
         '<32>{#p/basic}* Flutterknyte is knocked out!'
      ],
      old_spray_text: [
         '<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）',
         '<32>{#p/basic}* Flutterknyte is knocked out!'
      ],
      act_check: () =>
         world.goatbro && SAVE.data.n.plot > 66.2
            ? ['<32>{#p/asriel2}* ...']
            : !world.badder_lizard
               ? calm_lizard()
                  ? ['<32>{#p/alphys}* Flutterknyte... is it just me, or does it seem nervous?']
                  : ["<32>{#p/alphys}* It's just Flutterknyte."]
               : [
                  '<32>{#p/story}* FLUTTERKNYTE - ATK 34 DEF 12\n* This monster carries a bloated sense of responsibility.'
               ],
      act_check2: ['<32>{#p/story}* FLUTTERKNYTE - ATK 34 DEF 12\n* Stays behind, afraid of being a disappointment.'],
      act_check3: ['<32>{#p/story}* FLUTTERKNYTE - ATK 34 DEF 12\n* A weight has been lifted from its wings.'],
      act_check4: ["<32>{#p/story}* FLUTTERKNYTE - ATK 34 DEF 12\n* Its wings aren't the only things fluttering..."],
      act_perch1: () => [
         '<32>{#p/human}* (You offer an arm for Flutterknyte to perch on.)',
         '<32>{#p/basic}* Flutterknyte thinks about accepting your offer...',
         ...(!world.badder_lizard && calm_lizard() ? ["<32>{#p/alphys}* You're halfway there."] : [])
      ],
      act_perch2: () =>
         world.meanie
            ? [
               '<32>{#p/human}* (You continue offering.)',
               '<32>{#p/basic}* Flutterknyte backs away, fearing for its life...',
               '<32>* Flutterknyte wants to go now.',
               ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* There you go...?'] : [])
            ]
            : [
               '<32>{#p/human}* (You continue offering.)',
               '<32>{#p/basic}* Flutterknyte moves towards your arm and lands.',
               '<32>* Flutterknyte can rest now.',
               ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* There you go!'] : [])
            ],
      act_perch3: () =>
         world.meanie
            ? [
               '<32>{#p/human}* (You offer your other arm for Flutterknyte.)',
               '<33>{#p/basic}* Flutterknyte has seen enough...',
               ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* ... jeez.'] : [])
            ]
            : [
               '<32>{#p/human}* (You offer your other arm for Flutterknyte.)',
               '<32>{#p/basic}* Flutterknyte, overwhelmed by choices, decides to fly away...',
               ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* ... what.'] : [])
            ],
      act_flirt: () =>
         world.meanie
            ? [
               '<32>{#p/human}* (You flirt with Flutterknyte.)',
               '<32>{#p/basic}* Flutterknyte is surprised, and feels conflicted...',
               ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* Er...'] : [])
            ]
            : [
               '<32>{#p/human}* (You flirt with Flutterknyte.)',
               '<32>{#p/basic}* Flutterknyte is surprised, but accepts it nonetheless...',
               ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* Cute...'] : [])
            ],
      flirtTalk: () =>
         world.meanie ? ['<08>{#p/basic}{~}What to do what to say..'] : ['<08>{#p/basic}{~}Thank you thank you..'],
      act_poke1: () => [
         '<32>{#p/human}* (You poke Flutterknyte to knock it off its balance.)',
         '<32>{#p/basic}* Flutterknyte is shaken, but quickly regains focus.',
         ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* Mean...?'] : [])
      ],
      act_poke2: () => [
         '<32>{#p/human}* (You poke Flutterknyte to knock it off its balance.)',
         '<32>{#p/basic}* Flutterknyte falls and skitters away!',
         ...(!world.badder_lizard && calm_lizard()
            ? ["<32>{#p/alphys}* I'm gonna pretend like you didn't just do that."]
            : [])
      ],
      preperchText1: ['<08>{#p/basic}{~}Should I..?'],
      preperchText2: ['<08>{#p/basic}{~}Can I..?'],
      preperchText3: ['<08>{#p/basic}{~}Will I..?'],
      perchText1: ['<08>{#p/basic}{~}\x00*ex- hausted sigh*'],
      perchText2: ['<08>{#p/basic}{~}Rest, at last.'],
      perchText3: ['<08>{#p/basic}{~}Thank you.'],
      perchText4: ['<08>{#p/basic}{~}I knew not how tired I was.'],
      perchText5: ["<08>{#p/basic}{~}I know not how long it's been."],
      idleTalk1: ["<08>{#p/basic}{~}I'll do what I must.."],
      idleTalk2: ["<08>{#p/basic}{~}It's for the greater good.."],
      idleTalk3: ["<08>{#p/basic}{~}They're counting on me.."],
      idleTalk4: ['<08>{#p/basic}{~}The future depends on this..'],
      idleTalk5: ['<08>{#p/basic}{~}\x00*shuffle shuffle*'],
      perilStatus: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* Uh...']
               : ['<32>{#p/alphys}* No...']
            : ['<32>{#p/story}* Flutterknyte is in serious trouble.'],
      status1: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* ...']
            : ['<32>{#p/story}* Flutterknyte continues to mutter justifications.'],
      status2: () => (!world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Flutterknyte is hovering.']),
      status3: () => (!world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Smells like pears.']),
      status4: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Flutterknyte takes slow, steady breaths.'],
      status5: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Flutterknyte ponders their future.'],
      spareStatus: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* Looks like Flutterknyte will accept your mercy now.']
               : ["<32>{#p/alphys}* Looks like it'll accept your mercy now."]
            : ['<32>{#p/story}* Flutterknyte is at rest.']
   },

   b_opponent_astigmatism: {
      name: '* Eyewalker Prime',
      epiphany: [
         
         ['<08>{#p/basic}{~}Out of sight, out of mind.'],
         () =>
            world.meanie
               ? 
               [
                  '<08>{#p/basic}{~}Your ma- lice is stronger than my own!',
                  "<08>{#p/basic}{~}I won't test it further."
               ]
               : SAVE.data.b.oops && world.flirt > 9
                  ? 
                  ['<08>{#p/basic}{~}Such beauty in your eyes..', "<08>{#p/basic}{~}Don't tell the clan about this!"]
                  : SAVE.data.b.oops
                     ? 
                     ['<08>{#p/basic}{~}Friend- ship..', '<08>{#p/basic}{~}This could be a real eye- opener!']
                     : 
                     ["<08>{#p/basic}{~}Don't squeeze too hard, okay?"],
         
         ['<08>{#p/basic}{~}I shall die proudly as a leader.'],
         
         ["<08>{#p/basic}{~}Tch.. don't try to pay me back.", '<08>{#p/basic}{~}This is for you!']
      ],
      genostatus: ['<32>{#p/asriel2}* ...'],
      old_gun_text: ['<32>{#p/human}* （你開了一槍。）', '<32>{#p/basic}* Eyewalker Prime is knocked out!'],
      old_bomb_text: [
         '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
         '<32>{#p/basic}* Eyewalker Prime is knocked out!'
      ],
      old_spray_text: [
         '<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）',
         '<32>{#p/basic}* Eyewalker Prime is knocked out!'
      ],
      act_check: () =>
         world.goatbro && SAVE.data.n.plot > 66.2
            ? ['<32>{#p/asriel2}* ...']
            : !world.badder_lizard
               ? calm_lizard()
                  ? ["<32>{#p/alphys}* Eyewalker Prime...?\n* They're probably the leader of the Eyewalker clan."]
                  : ["<32>{#p/alphys}* It's just Eyewalker Prime."]
               : ["<33>{#p/story}* EYEWALKER PRIME - ATK 32 DEF 26\n* There's more to this monster than meets the eye."],
      act_check2: [
         '<32>{#p/story}* EYEWALKER PRIME - ATK 32 DEF 26\n* Satisfied with your following of family traditions.'
      ],
      act_check3: ['<32>{#p/story}* EYEWALKER PRIME - ATK 32 DEF 26\n* Considers you to be quite the \"looker\" now.'],
      act_check4: [
         '<32>{#p/story}* EYEWALKER PRIME - ATK 32 DEF 26\n* For this monster, tradition always comes before safety.'
      ],
      act_stare: ['<32>{#p/human}* (You stare at Eyewalker Prime.)'],
      act_smile: ['<32>{#p/human}* (You smile at Eyewalker Prime.)'],
      act_flirt: () => [
         '<32>{#p/human}* (You wink at Eyewalker Prime.)',
         ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* Oh come on.'] : [])
      ],
      status1: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* ...']
            : ['<32>{#p/story}* Eyewalker Prime is staring into your SOUL.'],
      status2: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* ...']
            : ['<32>{#p/story}* Eyewalker Prime offers up a menacing grin.'],
      status3: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ["<32>{#p/story}* Eyewalker Prime isn't messing around."],
      status4: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* ...']
            : ["<32>{#p/story}* Eyewalker Prime thinks of their family's honor."],
      status5: () => (!world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Smells like mouthwash.']),
      perilStatus: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* Uh...'] : ['<32>{#p/story}* Eyewalker Prime is watering.'],
      idleTalk1: ['<08>{#p/basic}{~}Bring it on!'],
      idleTalk2: ['<08>{#p/basic}{~}Show me your teeth!'],
      idleTalk3: ["<08>{#p/basic}{~}Don't hold back!"],
      idleTalk4: ['<08>{#p/basic}{~}Show me your looks!'],
      idleTalk5: ['<08>{#p/basic}{~}What are YOU made of?'],
      flirtTalk: ["<08>{#p/basic}{~}Hah.\nNice try.\nBut I'm taken!"],
      partialTalk1: ["<08>{#p/basic}{~}That's partly right.."],
      partialTalk2: ["<08>{#p/basic}{~}You've almost got it.."],
      partialTalk3: ["<08>{#p/basic}{~}You're getting there.."],
      partialStatus1: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* I think you need to do the other thing now.']
               : ['<32>{#p/alphys}* ...']
            : ['<32>{#p/story}* Eyewalker Prime is looking for more.'],
      partialStatus2: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* Eyewalkers love it when you smile and stare at them.']
               : ['<32>{#p/alphys}* ...']
            : ['<32>{#p/story}* Eyewalker Prime wants to see the full picture.'],
      partialStatus3: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* D-do the other thing!']
               : ['<32>{#p/alphys}* ...']
            : ["<32>{#p/story}* Eyewalker Prime wishes you'd follow its directive."],
      fullStatus: () =>
         !world.badder_lizard
            ? calm_lizard()
               ? ['<32>{#p/alphys}* Eyewalker Prime seems content now...']
               : ['<32>{#p/alphys}* It seems content now...']
            : ['<32>{#p/story}* Eyewalker Prime is pleased.'],
      partialIdleTalk1: ['<08>{#p/basic}{~}What are you waiting for?'],
      partialIdleTalk2: ['<08>{#p/basic}{~}You gonna do some- thing, or..'],
      partialIdleTalk3: ["<08>{#p/basic}{~}Is that all you've got?"],
      fullIdleTalk1: ['<08>{#p/basic}{~}Glad we see eye to eye.'],
      fullIdleTalk2: ['<08>{#p/basic}{~}Looking good, pal.'],
      fullIdleTalk3: ["<08>{#p/basic}{~}That's the way."],
      flirtTalkFull: ['<08>{#p/basic}{~}Hmm..', '<08>{#p/basic}{~}You make a con- vincing move..'],
      hurtTalk: ["<08>{#p/basic}{~}That's not what I meant!"]
   },
   b_opponent_migospel: {
      genostatus: ['<32>{#p/asriel2}* ...'],
      epiphany: [
         
         ["<08>{#p/basic}{~}I didn't want to fight you anyway."],
         () =>
            world.meanie
               ? 
               ['<08>{#p/basic}{~}I knew this was a bad idea.']
               : SAVE.data.b.oops && world.flirt > 9
                  ? 
                  ['<08>{#p/basic}{~}You are very strange.', '<08>{#p/basic}{~}but charming none- theless.']
                  : SAVE.data.b.oops
                     ? 
                     ["<08>{#p/basic}{~}Sure, let's be friends.", "<08>{#p/basic}{~}It's better that way."]
                     : 
                     ['<08>{#p/basic}{~}Um..', "<08>{#p/basic}{~}If that's what you really want?"],
         
         ["<08>{#p/basic}{~}It's time I stopped run- ning..", '<08>{#p/basic}{~}.. from my death.'],
         
         ["<08>{#p/basic}{~}You'll get more out of this than me.", '<08>{#p/basic}{~}By all means, take it.']
      ],
      old_gun_text: ['<32>{#p/human}* （你開了一槍。）', '<32>{#p/basic}* Silencio escapes!'],
      old_bomb_text: [
         '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
         '<32>{#p/basic}* Silencio escapes!'
      ],
      old_spray_text: ['<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）', '<32>{#p/basic}* Silencio escapes!'],
      act_check: () =>
         world.goatbro && SAVE.data.n.plot > 66.2
            ? ['<32>{#p/asriel2}* ...']
            : !world.badder_lizard
               ? calm_lizard()
                  ? ['<32>{#p/alphys}* Silencio, huh?\n* Yeah, this one gets around a lot, actually.']
                  : ["<32>{#p/alphys}* It's just Silencio."]
               : ['<32>{#p/story}* SILENCIO - ATK 28 DEF 17\n* Shamelessly cowardly.\n* Along for the ride.'],
      act_flirt: () => [
         '<32>{#p/human}* (You flirt with Silencio.)',
         ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* Alright then...'] : [])
      ],
      flirtTalk: ["<09>{#p/basic}{~}You're adorable."],
      act_insult: ['<32>{#p/human}* (You insult Silencio.)\n* (No effect.)'],
      groupStatus1: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Silencio is ignoring the others.'],
      groupStatus2: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Smells like a pit stop.'],
      groupTalk1: ['<08>{#p/basic}Out of the way.'],
      groupTalk2: ['<08>{#p/basic}You people are slow.'],
      groupTalk3: ["<08>{#p/basic}I'm not partici- pating."],
      groupTalk4: ['<08>{#p/basic}Reject the swarm.'],
      groupTalk5: ['<08>{#p/basic}Danger is for fools.'],
      groupTalk6: ['<08>{#p/basic}Leave me alone.'],
      name: '* Silencio',
      soloStatus: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* Looks like it never wanted to do this to begin with.']
            : ["<32>{#p/story}* Silencio doesn't need anyone else around."],
      soloTalk1: ["<08>{#p/basic}{~}I'll get along alright."],
      soloTalk2: ['<08>{#p/basic}{~}Partners are over- rated.'],
      soloTalk3: ['<08>{#p/basic}{~}At last, alone time.'],
      soloTalk4: ['<08>{#p/basic}{~}Cha, cha.'],
      soloTalk5: ['<08>{#p/basic}{~}I dance in peace.'],
      perilTalk: ["<08>{#p/basic}{~}I'm outta here."]
   },
   b_opponent_mushketeer: {
      name: '* Mushketeer',
      epiphany: [
         
         ["<08>{#p/basic}{~}It's only fair to spare you too!"],
         () =>
            world.meanie
               ? 
               ["<08>{#p/basic}{~}I'm in over my mushroom cap!\nRetreat!"]
               : SAVE.data.b.oops && world.flirt > 9
                  ? 
                  ["<08>{#p/basic}{~}All's fair in love 'n' war!"]
                  : SAVE.data.b.oops
                     ? 
                     ['<08>{#p/basic}{~}From now on, we fight as allies!']
                     : 
                     ['<08>{#p/basic}{~}Hugging really is the key to peace!'],
         
         ['<08>{#p/basic}{~}This cycle of conflict must end!'],
         
         ['<08>{#p/basic}{~}The spoils of war are yours!']
      ],
      old_gun_text: ['<32>{#p/human}* （你開了一槍。）', '<33>{#p/basic}* Mushketeer has met their match!'],
      old_bomb_text: [
         '<32>{#p/human}* （你引爆了炸彈。）\n* （雲霧繚繞。）',
         '<32>{#p/basic}* Mushketeer surrenders!'
      ],
      old_spray_text: [
         '<32>{#p/human}* （你噴灑了糖霧。）\n* （好甜...）',
         '<32>{#p/basic}* Mushketeer has been impaired!'
      ],
      idleTalk1: () =>
         world.genocide
            ? ['<08>{#p/basic}{~}Your reign of terror is over!']
            : ['<08>{#p/basic}{~}Join me on the front- line.'],
      idleTalk2: () =>
         world.genocide
            ? ['<08>{#p/basic}{~}Prepare for exe- cution!']
            : ["<08>{#p/basic}{~}All's fair in love..\n.. and CORE."],
      idleTalk3: () =>
         world.genocide
            ? ['<08>{#p/basic}{~}Nobody outguns Mush- keteer!']
            : ['<08>{#p/basic}{~}No time like war time..'],
      hurtStatus: () =>
         world.genocide
            ? ['<32>{#p/asriel2}* 離死不遠了。']
            : ['<32>{#p/story}* Mushketeer sets out on its final push.'],
      genoStatus: ['<32>{#p/asriel2}* Mushketeer。'],
      status0: () =>
         world.genocide
            ? ['<32>{#p/asriel2}* Why is this thing in our way?']
            : !world.badder_lizard
               ? ["<32>{#p/alphys}* Please don't die."]
               : ['<32>{#p/story}* Mushketeer blocks the way!'],
      status1: () => (!world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Mushketeer stands firm.']),
      status2: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Mushketeer wants to be a hero.'],
      status3: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Mushketeer is preparing for a shootout.'],
      status4: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Mushketeer reaches around for their gun.'],
      status5: () => (!world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Smells like dry dirt.']),
      travelStatus1: () =>
         !world.badder_lizard
            ? ['<32>{#p/alphys}* ...']
            : ["<32>{#p/story}* Mushketeer, the pray 'n' spray specialist."],
      travelStatus2: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Mushketeer is on edge.'],
      travelStatus3: () =>
         !world.badder_lizard ? ['<32>{#p/alphys}* ...'] : ['<32>{#p/story}* Mushketeer darts their eyes around.'],
      act_check: () =>
         world.genocide
            ? ['<32>{#p/asriel2}* Mushketeer, the gun-toter.\n* The dirty elder cousin of a mushroom far away...']
            : !world.badder_lizard
               ? calm_lizard()
                  ? ['<32>{#p/alphys}* Mushketeer.\n* I have no idea who this is.']
                  : ["<32>{#p/alphys}* It's just Mushketeer."]
               : ['<32>{#p/story}* MUSHKETEER - ATK 30 DEF 28\n* Product of its upbringing.\n* Gun-toter.'],
      act_check2: ['<32>{#p/story}* MUSHKETEER - ATK 30 DEF 28\n* Reconsidering its upbringing.\n* Gun-tosser.'],
      act_check3: ['<32>{#p/story}* MUSHKETEER - ATK 30 DEF 28\n* Forgetting its upbringing.\n* Heart-warmer.'],
      act_check4: ['<32>{#p/story}* MUSHKETEER - ATK 30 DEF 28\n* The war stops for no mushroom.'],
      act_flirt: () => [
         '<32>{#p/human}* (You invite Mushketeer to a private shootout.)',
         ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* Nahhhh.'] : [])
      ],
      flirtTalk: ["<08>{#p/basic}{~}Hey!\nWe don't do that here."],
      flirtTalk2: ["<08>{#p/basic}{~}Well..\nIf it's what you're into.."],
      flirtStatus: () =>
         world.genocide
            ? ['<32>{#p/asriel2}* Mushketeer。']
            : !world.badder_lizard
               ? calm_lizard()
                  ? ["<32>{#p/alphys}* Welp, that didn't work."]
                  : ['<32>{#p/alphys}* ...']
               : ['<32>{#p/story}* Oh no, Mushketeer is serious.'],
      flirtStatus2: () =>
         world.genocide
            ? ['<32>{#p/asriel2}* Mushketeer。']
            : !world.badder_lizard
               ? calm_lizard()
                  ? ['<32>{#p/alphys}* Wait, that worked?']
                  : ['<32>{#p/alphys}* ...']
               : ['<32>{#p/story}* Oh yes, Mushketeer is serious.'],
      act_travel1: () => [
         '<32>{#p/human}* (You come closer to Mushketeer.)',
         "<32>{#p/basic}* Mushketeer's attacks get more intense!",
         ...(world.genocide
            ? ['<32>{#p/asriel2}* ...？']
            : !world.badder_lizard && calm_lizard()
               ? ['<32>{#p/alphys}* Careful...']
               : [])
      ],
      act_travel2: () => [
         '<32>{#p/human}* (You come right next to Mushketeer.)',
         "<32>{#p/basic}* Mushketeer's attacks go insane!",
         ...(world.genocide
            ? ['<32>{#p/asriel2}* $(name)...?']
            : !world.badder_lizard && calm_lizard()
               ? ['<32>{#p/alphys}* Oh my god, be careful...!']
               : [])
      ],
      act_travel3: () => [
         '<32>{#p/human}* (But you were already right next to Mushketeer.)',
         ...(world.genocide
            ? ['<32>{#p/asriel2}* I am starting to get worried.']
            : !world.badder_lizard && calm_lizard()
               ? ['<32>{#p/alphys}* D-do anything other than this!!!']
               : [])
      ],
      travelTalk1: ["<08>{#p/basic}{~}What do you think you're doing!"],
      travelTalk2: ["<08>{#p/basic}{~}What're you playin' at!"],
      act_disarm1: () => [
         "<32>{#p/human}* (You try to disarm Mushketeer, but it's too far away.)",
         ...(!world.badder_lizard && calm_lizard() ? ['<32>{#p/alphys}* You might try getting closer.'] : [])
      ],
      act_disarm2: () => [
         "<32>{#p/human}* (You try to disarm Mushketeer, but it's just out of reach.)",
         ...(!world.badder_lizard && calm_lizard()
            ? ['<32>{#p/alphys}* I guess...\n* If you have to get closer...']
            : [])
      ],
      act_disarm3: () => ['<32>{#p/human}* (You disarm Mushketeer.)'],
      act_disarm3x: ['<32>{#p/human}* (But Mushketeer had already been disarmed.)'],
      act_disarm4: pager.create(
         0,
         [
            '<32>{#p/human}* (You try to disarm Mushketeer, but Mushketeer knocks you back to where you started.)',
            "<32>{#p/asriel2}* We're wasting time."
         ],
         [
            '<32>{#p/human}* (You try to disarm Mushketeer, but Mushketeer knocks you back to where you started.)',
            '<32>{#p/asriel2}* ...'
         ]
      ),
      disarmTalk: [
         '<08>{#p/basic}{~}I guess this means no war..?',
         '<08>{#p/basic}{~}\x00*sigh*',
         "<08>{#p/basic}{~}Maybe it's for the best."
      ],
      disarmStatus: ['<32>{#p/story}* Mushketeer awaits confirmation of the end of this battle.'],
      postDisarmTalk1: ['<08>{#p/basic}{~}Oh well..'],
      postDisarmTalk2: ['<08>{#p/basic}{~}It is what it is..']
   },

   
   b_opponent_pyrope: {
      name: '* Hotwire',
      epiphany: [
         ['<08>{#p/basic}{~}No need to worry, pal', "<08>{#p/basic}{~}I'll be out of your way now."],
         () =>
            world.meanie
               ? [
                  "<08>{#p/basic}{~}Your at- titude's got me petri- fied",
                  '<08>{#p/basic}{~}Escape is all but justi- fied!'
               ]
               : SAVE.data.b.oops && world.flirt > 9
                  ? ['<08>{#p/basic}{~}No need to push and shove', "<08>{#p/basic}{~}We're already falling in love!"]
                  : SAVE.data.b.oops
                     ? ['<08>{#p/basic}{~}I vow to be your friend', '<08>{#p/basic}{~}Regard- less of what happens!']
                     : [
                        '<08>{#p/basic}{~}This sensa- tion is astound- ing',
                        '<08>{#p/basic}{~}I can feel you all around me!'
                     ],
         ["<08>{#p/basic}{~}It's like I told my mum", '<08>{#p/basic}{~}I knew this day would come.'],
         ['<08>{#p/basic}{~}Only a train wreck', "<08>{#p/basic}{~}Wouldn't offer you a pay- check!"]
      ],
      genoStatus: ['<32>{#p/asriel2}* Hotwire。'],
      genoSpareStatus: ["<32>{#p/asriel2}* 不堪一擊。"],
      act_check: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Hotwire，說唱呆子。\n* 腦子這麼活絡，\n  卻把才華浪費在這種小兒科上。']
            : ['<32>{#p/story}* HOTWIRE - ATK 29 DEF 14\n* For this devious monster, no scheme is too complex.'],
      act_check2: [
         '<32>{#p/story}* HOTWIRE - ATK 29 DEF 14\n* The spark is fading for this otherwise ignited monster.'
      ],
      act_check3: ["<32>{#p/story}* HOTWIRE - ATK 29 DEF 14\n* This smoking hothead's rhymes might just catch fire."],
      act_check4: ['<32>{#p/story}* HOTWIRE - ATK 29 DEF 14\n* Re-kindling its love for rap, a-one-liner at a time.'],
      act_flirt: ['<32>{#p/human}* (You flirt with Hotwire.)', '<32>{#p/basic}* Hotwire flirts back!'],
      act_diss: ['<32>{#p/human}* (You let your best diss track loose on Hotwire.)'],
      dissTalk1: ['<08>{#p/basic}{~}If you wanna call me crap', '<08>{#p/basic}{~}You better know how to rap!'],
      dissTalk2: [
         '<08>{#p/basic}{~}Your disses are trash',
         '<08>{#p/basic}{~}So you might as well dash',
         '<08>{#p/basic}{~}Before I turn you to ash!'
      ],
      dissTalk3: [
         "<08>{#p/basic}{~}Bet you think you're so chic",
         "<08>{#p/basic}{~}You're just a wimpy pip- squeak",
         "<08>{#p/basic}{~}I'm the original hot streak",
         '<08>{#p/basic}{~}I make your insults look weak!'
      ],
      sparkText1: ["<32>{#p/human}* (You spark Hotwire's cables.)", "<32>{#p/basic}* Hotwire's confidence grows."],
      sparkText2: ["<32>{#p/human}* (You spark Hotwire's cables.)", '<32>{#p/basic}* Hotwire is peaking!'],
      sparkText3: ["<32>{#p/human}* (You spark Hotwire's cables.)", '<32>{#p/basic}* Hotwire is already powered up.'],
      rapText1: ['<32>{#p/human}* (You rap at Hotwire.)', '<32>{#p/basic}* Hotwire is indifferent towards you.'],
      rapText2: ['<32>{#p/human}* (You rap at Hotwire.)', '<32>{#p/basic}* Hotwire is disappointed in you.'],
      rapText3: ['<32>{#p/human}* (You rap at Hotwire.)', '<32>{#p/basic}* Hotwire is disgusted at you.'],
      idleTalk1: ['<08>{#p/basic}{~}No shame on this flame', '<08>{#p/basic}{~}I cannot be tamed!'],
      idleTalk2: ["<08>{#p/basic}{~}The name's Hotwire", "<08>{#p/basic}{~}I'm super hot fire!"],
      idleTalk3: ['<08>{#p/basic}{~}Even a noose', "<08>{#p/basic}{~}Won't stop me letting loose!"],
      idleTalk4: ["<08>{#p/basic}{~}I'm ablaze and unfazed", "<08>{#p/basic}{~}Can't step to my ways!"],
      idleTalk5: ["<08>{#p/basic}{~}I'm in the hot seat", '<08>{#p/basic}{~}So bring on the heat!'],
      flirtTalk: ['<08>{#p/basic}{~}My flirting is un- matched', "<08>{#p/basic}{~}There's no quip I won't catch!"],
      sparkTalk1A: [
         "<08>{#p/basic}{~}I'll serve you a hot one",
         "<08>{#p/basic}{~}Even if you're not one",
         '<08>{#p/basic}{~}Fire off like a shotgun!'
      ],
      sparkTalk2A: [
         "<08>{#p/basic}{~}This mark's about to get bruised",
         '<08>{#p/basic}{~}Four little words to describe the hurt',
         '<08>{#p/basic}{~}Lost, con- fused, beaten, abused!'
      ],
      sparkTalk3A: [
         '<08>{#p/basic}{~}Danger, danger, in comes a long- ranger',
         "<08>{#p/basic}{~}A sniper so wack, it's a life- changer",
         '<08>{#p/basic}{~}Only need one bullet in the chamber!'
      ],
      sparkFlirtTalkA: [
         '<08>{#p/basic}{~}I see you like it lovey dovey',
         '<08>{#p/basic}{~}Ready, steady, hot and heavy',
         "<08>{#p/basic}{~}This track's a real heart attack!"
      ],
      sparkTalk1B: [
         "<08>{#p/basic}{~}I flow like I'm stream- ing",
         '<08>{#p/basic}{~}Winsome smile is beaming',
         "<08>{#p/basic}{~}I'll whip you so bad, ooh",
         "<08>{#p/basic}{~}You'll wish you were dreaming"
      ],
      sparkTalk2B: [
         '<08>{#p/basic}{~}On a mission, consum- mated',
         "<09>{#p/basic}{~}I'm bi- partisan, nomi- nated",
         "<08>{#p/basic}{~}You're just a citizen, domi- nated",
         '<08>{#p/basic}{~}Even your SOUL is unculti- vated!'
      ],
      sparkTalk3B: [
         "<08>{#p/basic}{~}I'm a bonafide killer",
         "<08>{#p/basic}{~}You're a waste dist- iller",
         '<08>{#p/basic}{~}Your bars are lame fillers',
         '<08>{#p/basic}{~}Whereas mine are straight thril- lers!'
      ],
      sparkFlirtTalkB: [
         "<08>{#p/basic}{~}You're flirting with fire, bud",
         "<08>{#p/basic}{~}No shot you'll step to this stud",
         '<08>{#p/basic}{~}One mistake is all it takes',
         '<08>{#p/basic}{~}Before I land a rhyme in your face!'
      ],
      status1: ['<32>{#p/story}* Hotwire is looking for that extra little boost.'],
      status2: ['<32>{#p/story}* Hotwire is rhyming up a storm.'],
      status3: ['<32>{#p/story}* Hotwire is protected by its winsome smile.'],
      status4: ['<32>{#p/story}* Hotwire reaches for the turbocharger.'],
      status5: ['<32>{#p/story}* Smells like lyricism.'],
      sparkStatus1A: ['<32>{#p/story}* Hotwire is shocked at its own brilliance.'],
      sparkStatus2A: ['<32>{#p/story}* Hotwire begins its ignition sequence... manually.'],
      sparkStatus3A: ['<32>{#p/story}* Hotwire gets things going whether we like it or not.'],
      sparkStatus1B: ['<32>{#p/story}* Hotwire is feeling electric.'],
      sparkStatus2B: ['<32>{#p/story}* Hotwire has reached its true level.'],
      sparkStatus3B: ['<32>{#p/story}* Hotwire is turbocharged.'],
      hurtStatus: () =>
         world.goatbro ? ['<32>{#p/asriel2}* 離死不遠了。'] : ['<32>{#p/story}* Hotwire is spiraling out of control.']
   },

   b_opponent_perigee: {
      name: '* Perigee',
      epiphany: [
         ['<08>{#p/basic}{~}I shall be else- where.'],
         () =>
            world.meanie
               ? ['<08>{#p/basic}{~}It is no longer safe for me here.']
               : SAVE.data.b.oops && world.flirt > 9
                  ? ['<08>{#p/basic}{~}Is this love?']
                  : SAVE.data.b.oops
                     ? ['<08>{#p/basic}{~}I look forward to our friend- ship.']
                     : ['<08>{#p/basic}{~}Thank you..\nSo very much..'],
         ['<08>{#p/basic}{~}I under- stand why I must die.', '<08>{#p/basic}{~}Please..\nLive on in my name..'],
         ['<08>{#p/basic}{~}Take as much as you need.']
      ],
      genoStatus: ['<32>{#p/asriel2}* Perigee。'],
      act_check: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Perigee, the lethargic bird.\n* Spends too much time in its own happy-go-lucky head.']
            : ['<32>{#p/story}* PERIGEE - ATK 25 DEF 0\n* This bird of peace believes its feathers heal all wounds.'],
      act_check2: [
         '<33>{#p/story}* PERIGEE - ATK 25 DEF 0\n* This bird of peace is trying\n  to use its feathers to recover.'
      ],
      act_check3: ['<32>{#p/story}* PERIGEE - ATK 25 DEF 0\n* This bird of peace is also a patron of the arts.'],
      act_check4: [
         '<32>{#p/story}* PERIGEE - ATK 25 DEF 0\n* This bird of peace appreciates your love songs platonically.'
      ],
      act_flirt: ['<32>{#p/human}* (You flirt with Perigee.)'],
      act_yell: ['<32>{#p/human}* (You shout at Perigee.)'],
      idleTalk1: ['<08>{#p/basic}{~}Chirp, chirp.'],
      idleTalk2: ['<08>{#p/basic}{~}\x00*calming whistle*'],
      idleTalk3: ['<08>{#p/basic}{~}Life is good.'],
      idleTalk4: ['<08>{#p/basic}{~}\x00*flap- ping sounds*'],
      idleTalk5: ['<08>{#p/basic}{~}Peace and tran- quility.'],
      flirtTalk: ["<08>{#p/basic}{~}Hm?\nI don't under- stand..."],
      yellTalk1: ["<08>{#p/basic}{~}It's okay, I can help you feel better."],
      yellTalk2: ["<08>{#p/basic}{~}Here, I'll help you calm down."],
      yellTalk3: ["<08>{#p/basic}{~}Don't be upset.", '<08>{#p/basic}{~}You can always whistle another tune.'],
      flirtTalkX: [
         '<08>{#p/basic}{~}Ah, that cute remark was your song?',
         '<08>{#p/basic}{~}I accept it, and your gesture.'
      ],
      whistleTalkX: ['<08>{#p/basic}{~}I accept your gesture.'],
      whistleTalk: ['<08>{#p/basic}{~}\x00*intent whistle*'],
      whistleStatus: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Perigee。'] : ['<32>{#p/story}* Perigee awaits your gesture.'],
      act_bow1: ['<32>{#p/human}* (But there was nothing to bow for yet.)'],
      act_bow2: ['<32>{#p/human}* (You bow.)\n* (Perigee bows back.)\n* (An understanding is reached.)'],
      act_whistle: [
         '<32>{#p/human}* (You whistle a tranquil tune.)\n* (Perigee whistles back.)\n* (The song goes on and on...)'
      ],
      status1: ['<32>{#p/story}* Perigee orbits closeby.'],
      status2: ['<32>{#p/story}* Perigee is living fancy-free.'],
      status3: ['<32>{#p/story}* Perigee is as happy as could be.'],
      status4: ['<32>{#p/story}* Perigee maintains a feather- light touch.'],
      status5: ['<32>{#p/story}* Smells like spare bread.'],
      status6: () =>
         world.goatbro ? ["<32>{#p/asriel2}* 不堪一擊。"] : ['<32>{#p/story}* Perigee is satisfied.'],
      hurtStatus: () =>
         world.goatbro ? ['<32>{#p/asriel2}* 離死不遠了。'] : ["<32>{#p/story}* Perigee's time is near."]
   },

   b_opponent_tsundere: {
      name: '* Tsunderidex',
      epiphany: [
         ["<08>{#p/basic}{~}Y-yeah, I didn't want you around anyway!"],
         () =>
            world.meanie
               ? ['<08>{#p/basic}{~}Y-yeah!\nGet outta my way!']
               : SAVE.data.b.oops && world.flirt > 9
                  ? ['<08>{#p/basic}{~}Um..\nW-well..', '<08>{#p/basic}{~}.. well, I love you too!']
                  : SAVE.data.b.oops
                     ? ['<08>{#p/basic}{~}J-just friends, huh?', '<08>Sure thing, I guess..']
                     : ['<08>{#p/basic}{~}Eeeh?\nWhat are you..', '<08>{#p/basic}{~}.. oh..\nThanks, eheh..'],
         ["<08>{#p/basic}{~}If it's what you want..", "<08>{#p/basic}{~}I-I'll do it!"],
         ["<08>{#p/basic}{~}D-don't think it means I like you!"]
      ],
      act_check: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Tsunderidex，\n  這傢伙，我無話可說。']
            : ['<32>{#p/story}* TSUNDERIDEX - ATK 25 DEF 26\n* Seems mean, but does it secretly like you?'],
      act_check2: [
         '<32>{#p/story}* TSUNDERIDEX - ATK 25 DEF 26\n* Caught in the self-sustaining battle of the tsunderes.'
      ],
      act_check3: ["<32>{#p/story}* TSUNDERIDEX - ATK 25 DEF 26\n* This hesitant lover's engine is now yours to ride."],
      act_check4: ['<32>{#p/story}* TSUNDERIDEX - ATK 25 DEF 26\n* Seems... jealous.'],
      act_check5: ['<32>{#p/story}* TSUNDERIDEX - ATK 25 DEF 26\n* Ready to burst.'],
      act_ignore: ["<32>{#p/human}* (You intentionally ignore Tsunderidex's presence.)"],
      flirtText1: ['<32>{#p/human}* (You tell Tsunderidex it has an impressive shield.)'],
      flirtText2: ['<32>{#p/human}* (You tell Tsunderidex it has nice cannons.)'],
      flirtText3: ['<32>{#p/human}* (You tell Tsunderidex it has a powerful jump drive.)'],
      flirtText4: ['<32>{#p/human}* (You tell Tsunderidex that you like its taste in virtual novels.)'],
      flirtText5: ['<32>{#p/human}* (You tell Tsunderidex that it has cute engine struts.)'],
      flirtText6: ["<32>{#p/human}* (You tell Tsunderidex that you'd like to supercharge its capacitor.)"],
      flirtText7: ["<32>{#p/human}* (You tell Tsunderidex that you'd like to clean it to a sparkle.)"],
      flirtText8: ['<32>{#p/human}* (You tell Tsunderidex its nose should be nuzzling yours.)'],
      flirtText9: ['<32>{#p/human}* (You tell Tsunderidex its roof scoop is second to none.)'],
      flirtText10: ['<32>{#p/human}* (You tell Tsunderidex it has breathtaking wings.)'],
      flirtText11: ['<32>{#p/human}* (You tell Tsunderidex it has a captivating underglow.)'],
      flirtText12: ["<32>{#p/human}* (You tell Tsunderidex you'd like to go where no human has gone before.)"],
      stealText: ['<32>{#p/human}* (You move in close to Tsunderidex to siphon its battery power.)'],
      upgradeText1: ["<32>{#p/human}* (You activate the slipstream flight module on Tsunderidex's engines.)"],
      upgradeText2: ["<32>{#p/human}* (You activate the transphasic firing mechanism on Tsunderidex's cannons.)"],
      upgradeText3: ["<32>{#p/human}* (You activate the auto-adaptive modulation on Tsunderidex's shields.)"],
      upgradeText4: [
         "<33>{#p/human}* (You can't activate further.)\n* (All of Tsunderidex's body parts are fully activated.)"
      ],
      idleTalk1: ["<08>{#p/basic}{~}It's not like I LIKE you."],
      idleTalk2: ['<08>{#p/basic}{~}Id.. idiot!'],
      idleTalk3: ["<08>{#p/basic}{~}Hmph!\nDon't get in my way."],
      idleTalk4: ['<08>{#p/basic}{~}(Eep..!)\nHuman..'],
      idleTalk5: ['<08>{#p/basic}{~}..\nH-human\n..\n..?'],
      flirtTalk1: ['<08>{#p/basic}{~}Huh!?\nY-you sicko!'],
      flirtTalk2: ['<08>{#p/basic}{~}I.. I think not!\nHmph!'],
      flirtTalk3: ['<08>{#p/basic}{~}Is that true..?'],
      flirtTalk4: ['<08>{#p/basic}{~}I..\nTh-thank you..'],
      flirtTalk5: ['<08>{#p/basic}{~}W-what?\nRight now???', '<08>{#p/basic}{~}This is too much..'],
      jellyTalk1: ["<08>{#p/basic}{~}H-hey!\nThat's not fair!"],
      jellyTalk2: ['<08>{#p/basic}{~}Ugh, you two are being weird.'],
      jellyTalk3: ['<08>{#p/basic}{~}S-stay away from them!'],
      upgradeTalk1: ['<08>{#p/basic}{~}Wh.. what are you doing??'],
      upgradeTalk2: ['<08>{#p/basic}{~}Um.\nHuman.'],
      upgradeTalk3: ['<08>{#p/basic}{~}Oh..\n..\nW-wow..'],
      stealTalk1: ["<08>{#p/basic}{~}D-don't do that!\nPlease."],
      stealTalk2: ['<08>{#p/basic}{~}..\n..\n(Why..)'],
      stealTalk3: ['<08>{#p/basic}{~}Quit stealing my thunder!'],
      ignoreTalk1: ['<08>{#p/basic}{~}Hmph!\nIgnore me all you want!'],
      ignoreTalk2: ["<08>{#p/basic}{~}Yeah!\nIt's not like I want you here!"],
      upgradeStatus1: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Are you actually going to do this right now?']
            : ['<32>{#p/story}* Tsunderidex is checking out its newly activated parts.'],
      upgradeStatus2: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* This is a waste of time...']
            : ['<32>{#p/story}* Tsunderidex is obsessing over its newly activated parts.'],
      upgradeStatus3: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* ...']
            : ['<32>{#p/story}* Tsunderidex is worried about its newly activated parts.'],
      status1: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Tsunderidex。']
            : ['<32>{#p/story}* Tsunderidex looks over, then turns up its nose.'],
      status2: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Tsunderidex。']
            : ['<32>{#p/story}* Tsunderidex shakes its nose dimissively at you.'],
      status3: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Tsunderidex。']
            : ['<32>{#p/story}* Tsunderidex \"accidentally\" bumps you with its nacelles.'],
      status4: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* Tsunderidex。']
            : ['<32>{#p/story}* Tsunderidex sets its cannons to \"stun.\"'],
      status5: () =>
         world.goatbro ? ['<32>{#p/asriel2}* Tsunderidex。'] : ['<32>{#p/story}* Smells like space cacti.'],
      status6: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 不堪一擊。"]
            : ['<32>{#p/story}* Tsunderidex is looking away shyly.'],
      hurtStatus: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* 離死不遠了。']
            : ["<32>{#p/story}* Tsunderidex's engines are leaking plasma."]
   },

   b_opponent_rg01: {
      name: () => (world.bad_lizard > 1 ? '* 一號守衛' : '* 三號守衛'),
      epiphaNOPE: () =>
         world.bad_lizard > 1
            ? ['<11>{#p/basic}{~}Like, what are you even doing?']
            : ["<11>{#p/undyne}{#p/basic}{~}This ain't it, chief."],
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 一號守衛...\n* 這倆貨我沒啥好說的。"]
            : world.bad_lizard > 1
               ? ['<32>{#p/story}* RG 01 - ATK 30 DEF 20\n* A confident lover who seems intent on ending you.']
               : ['<32>{#p/story}* RG 03 - ATK 30 DEF 20\n* Conspicuous cowgirl attitude.\n* Skeptic.'],
      act_check2: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* RG 01.\n* Just one left."]
            : world.bad_lizard > 1
               ? ['<32>{#p/story}* RG 01 - ATK 30 DEF 20\n* Intent on ending you, even if it kills him.']
               : ['<32>{#p/story}* RG 03 - ATK 30 DEF 20\n* Planning on sharpening her falchion soon.'],
      act_check3: ['<32>{#p/story}* RG 03 - ATK 30 DEF 20\n* Re-united at last...'],
      act_check4: ['<32>{#p/story}* RG 03 - ATK 30 DEF 20\n* Broken.'],
      act_check5: ['<33>{#p/story}* RG 03 - ATK 30 DEF 20\n* Wants badly to say something...'],
      act_check6: ['<32>{#p/story}* RG 03 - ATK 30 DEF 20\n* Eager to make up for her lack of conviction.'],
      randTalk1: () => ['<11>{#p/basic}{~}組合技。'],
      randTalk2: () =>
         world.bad_lizard > 1 ? ["<11>{#p/basic}{~}我們會\n阻止你的。"] : ["<11>{#p/basic}{~}We're just friends..."],
      randTalk3: () =>
         world.bad_lizard > 1
            ? ["<11>{#p/basic}{~}You're no match for us."]
            : ["<11>{#p/basic}{~}You best not be shippin' us..."],
      randTalk4: () =>
         world.bad_lizard > 1 ? ['<11>{#p/basic}{~}Careful, bro.'] : ['<11>{#p/basic}{~}Careful, girl.'],
      randStatus1: () =>
         world.bad_lizard > 1
            ? ['<32>{#p/story}* 01 and 02 attack in sync.']
            : ["<33>{#p/story}* 03 is living in the friendzone.\n* 04 doesn't question it."],
      randStatus2: () =>
         world.bad_lizard > 1
            ? ['<32>{#p/story}* 01 and 02 prepare their next assault.']
            : ['<32>{#p/story}* 03 casts her doubts aside for just a moment.\n* 04 breathes a sigh of relief.'],
      randStatus3: () =>
         world.bad_lizard > 1
            ? ['<32>{#p/story}* 01 and 02 slam their bodies together brotastically.']
            : ["<32>{#p/story}* 03 ponders about 04's history.\n* 04 shrugs."],
      randStatus4: () =>
         world.bad_lizard > 1
            ? ["<32>{#p/story}* Smells like men's body spray."]
            : ['<32>{#p/story}* Smells like perfume.'],
      randStatus5: () =>
         world.bad_lizard > 1
            ? ['<32>{#p/story}* 01 and 02 refer to themselves as \"brotally swagical.\"']
            : ['<32>{#p/story}* 03 puts on a brave face.\n* 04 replies non-verbally with her own bravery.'],
      randTalkLone1: () =>
         world.bad_lizard > 1
            ? ['<11>{#p/basic}{~}{@random=1.1/1.1}下地獄吧。']
            : ["<11>{#p/basic}{~}{@random=1.1/1.1}I'll never know..."],
      randTalkLone2: () =>
         world.bad_lizard > 1
            ? ['<11>{#p/basic}{~}{@random=1.1/1.1}死有餘辜。']
            : ["<11>{#p/basic}{~}{@random=1.1/1.1}It's too late..."],
      randTalkLone3: () =>
         world.bad_lizard > 1
            ? ['<11>{#p/basic}{~}{@random=1.1/1.1}禽獸不如。']
            : ['<11>{#p/basic}{~}{@random=1.1/1.1}I missed my chance...'],
      randTalkLone4: () =>
         world.bad_lizard > 1
            ? ['<11>{#p/basic}{~}{@random=1.1/1.1}給我去死。']
            : ["<11>{#p/basic}{~}{@random=1.1/1.1}It can't be..."],
      randStatusLone: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* 只剩一個了。']
            : world.bad_lizard > 1
               ? ['<32>{#p/story}* 01 seems even more focused than before.']
               : ['<32>{#p/story}* 03 is in disarray.'],

      act_flirt: ['<32>{#p/human}* (You flirt with 03.)'],
      flirtTalk1: ['<11>{#p/basic}{~}Flirting is strictly forbidden.'],
      flirtTalk2: ["<11>{#p/basic}{~}You think that's gonna work on us?"],
      flirtTalkNervy1: ['<11>{#p/basic}{~}Flirting is... ack...'],
      flirtTalkNervy2: ["<11>{#p/basic}{~}That's not really... ack..."],
      flirtTalkLone: ['<11>{#p/basic}{~}...'],
      flirtStatus: ['<32>{#p/story}* 03 struggles to contain her feelings.\n* 04 seems confused...'],
      flirtStatusNervy: ["<32>{#p/story}* 03's feelings are bursting at the seams.\n* 04 seems concerned..."],
      act_flirt_happy: [
         '<32>{#p/human}* (You flirt with 03.)\n* (She accepts the compliment, but remains focused on 04.)'
      ],
      act_flirt_nada: ["<32>{#p/human}* (You flirt with 01.)\n* (He doesn't seem to react in any significant way.)"],

      act_tug: ["<32>{#p/human}* (You try to pull on 03's glove, but she slaps your hand away.)"],
      tugTalk1: ['<11>{#p/basic}{~}Paws off, sister.'],
      tugTalk2: ['<11>{#p/basic}{~}No touchy.'],
      tugTalk3: ["<11>{#p/basic}{~}That's off- limits to you."],
      tugTalk4: ['<11>{#p/basic}{~}Nope.'],
      tugStatus: ['<32>{#p/story}* It would seem some boundaries are better left uncrossed.'],
      act_tug_lone: ["<32>{#p/human}* (You try to pull on 03's glove, but she raises it out of your reach.)"],
      tugTalkLone: ['<11>{#p/basic}{~}...'],
      tugStatusLone: ['<32>{#p/story}* 03 towers above you, masking her true expression.'],
      act_tug_happy: [
         "<32>{#p/human}* (You hold 03's paw.)",
         '<32>{#p/basic}* 03 mistakenly believes 04 is holding her paw...'
      ],

      tugShock: ['<11>{#p/basic}{~}04...!', '<11>{#p/basic}{~}...', '<11>{#p/basic}{~}That bracelet...'],
      nervyTalk1: ['<11>{#p/basic}{~}04, I...'],
      nervyTalk2: ['<11>{#p/basic}{~}04, we...'],
      nervyTalk3: ['<11>{#p/basic}{~}04, you...'],
      nervyTalk4: ["<11>{#p/basic}{~}04, it's..."],
      nervyStatus: ['<32>{#p/story}* The solar winds begin to shift towards your favor.'],

      act_whisper: ['<32>{#p/human}* (You whisper to 03 to open up about her feelings.)'],
      act_whisper_alt: ['<32>{#p/human}* （你和三號守衛說悄悄話。）\n* （什麼都沒發生。）'],

      confess1: ['<11>{#p/basic}{~}04...'],
      confess2: ['<11>{#p/basic}{~}...', '<11>{#p/basic}{~}... yeah, 03?'],
      confess3: ['<11>{#p/basic}{~}Look at me, 04...'],
      confess4: ["<11>{#p/basic}{~}But that's..."],
      confess5: ['<11>{#p/basic}{~}The bracelet of unity...', '<11>{#p/basic}{~}Remember?'],
      confess6: [
         "<11>{#p/basic}{~}It's you...",
         "<11>{#p/basic}{~}I thought I'd lost you, all those years ago...",
         "<11>{#p/basic}{~}I thought I'd never see you again.",
         "<11>{#p/basic}{~}But now...\nAfter graduating from Undyne's training..."
      ],
      confess7: [
         "<11>{#p/basic}{~}We're together again, 04.\nJust like before.",
         '<11>{#p/basic}{~}And, no matter what names we go by...',
         '<11>{#p/basic}{~}I will always love you.'
      ],
      confess8: ['<11>{#p/basic}{~}03, I...', '<11>{#p/basic}{~}I love you too!'],
      confess9: ['<11>{#p/basic}{~}... do you wanna get some ice cream?'],
      confess10: ['<11>{#p/basic}{~}Salmon- flavored?'],
      confess11: ['<11>{#p/basic}{~}You know it!'],

      happyTalk1: ['<11>{#p/basic}{~}I missed you...'],
      happyTalk2: ["<11>{#p/basic}{~}I'm glad you're here..."],
      happyTalk3: ['<11>{#p/basic}{~}To think it was you, all this time...'],
      happyTalk4: ['<11>{#p/basic}{~}To think I forgot about those beautiful eyes...'],
      happyStatus: ['<32>{#p/story}* 03 and 04 are looking happily at each other.'],

      horrorTalk1: [
         '<11>{#p/basic}{~}{@random=1.1/1.1}N... no...',
         '<11>{#p/basic}{~}{@random=1.1/1.1}We were gonna be... so happy together...'
      ],
      horrorTalk2: ["<11>{#p/basic}{~}{@random=1.1/1.1}I can't go on..."],
      horrorTalk3: ["<11>{#p/basic}{~}{@random=1.1/1.1}I don't want to live like this anymore..."],
      horrorTalk4: ['<11>{#p/basic}{~}{@random=1.1/1.1}...'],
      horrorStatus: ['<32>{#p/story}* ...'],

      dangerStatus: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* 離死不遠了。']
            : world.bad_lizard > 1
               ? ["<32>{#p/story}* 01's gaze pans downwards to the floor."]
               : ["<32>{#p/story}* 03's breathing intensifies."]
   },

   b_opponent_rg02: {
      name: () => (world.bad_lizard > 1 ? '* 二號守衛' : '* 四號守衛'),
      epiphaNOPE: () =>
         world.bad_lizard > 1
            ? ["<11>{#p/basic}{~}I don't get this at all..."]
            : ["<11>{#p/basic}{~}That won't work on me."],
      act_check: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* 二號守衛...\n* 這倆貨我沒啥好說的。"]
            : world.bad_lizard > 1
               ? ['<32>{#p/story}* RG 02 - ATK 30 DEF 20\n* A confident lover who seems intent on stopping you.']
               : ["<33>{#p/story}* RG 04 - ATK 30 DEF 20\n* Believes in friendship, but isn't against something more..."],
      act_check2: () =>
         world.goatbro
            ? ["<32>{#p/asriel2}* RG 02.\n* Just one left."]
            : world.bad_lizard > 1
               ? ['<32>{#p/story}* RG 02 - ATK 30 DEF 20\n* Intent on stopping you, no matter what it takes.']
               : ['<32>{#p/story}* RG 04 - ATK 30 DEF 20\n* Planning on shopping for new armor soon.'],
      act_check3: ['<32>{#p/story}* RG 04 - ATK 30 DEF 20\n* Re-united at last...'],
      act_check4: ['<32>{#p/story}* RG 04 - ATK 30 DEF 20\n* Broken.'],
      act_check5: ['<33>{#p/story}* RG 04 - ATK 30 DEF 20\n* Feeling somewhat exposed...'],
      act_check6: ['<32>{#p/story}* RG 04 - ATK 30 DEF 20\n* Eager to see you dead.'],
      randTalk1: () => ['<11>{#p/basic}{~}組合技！'],
      randTalk2: () =>
         world.bad_lizard > 1 ? ['<11>{#p/basic}{~}一勞永逸！'] : ['<11>{#p/basic}{~}Absolutely!'],
      randTalk3: () =>
         world.bad_lizard > 1 ? ["<11>{#p/basic}{~}You don't stand a chance!"] : ['<11>{#p/basic}{~}No romance here!'],
      randTalk4: () =>
         world.bad_lizard > 1 ? ['<11>{#p/basic}{~}Totally, bro!'] : ['<11>{#p/basic}{~}Oh you know it, girl!'],
      randTalkLone1: () =>
         world.bad_lizard > 1
            ? ["<11>{#p/basic}{~}{@random=1.1/1.1}你完蛋了！！"]
            : ['<11>{#p/basic}{~}{@random=1.1/1.1}How could you do this to me...!?'],
      randTalkLone2: () =>
         world.bad_lizard > 1
            ? ["<11>{#p/basic}{~}{@random=1.1/1.1}休想得逞！！"]
            : ['<11>{#p/basic}{~}{@random=1.1/1.1}She was my only friend...!'],
      randTalkLone3: () =>
         world.bad_lizard > 1
            ? ['<11>{#p/basic}{~}{@random=1.1/1.1}老子\n宰了你！！']
            : ['<11>{#p/basic}{~}{@random=1.1/1.1}She was everything to me...!'],
      randTalkLone4: () =>
         world.bad_lizard > 1
            ? ["<11>{#p/basic}{~}{@random=1.1/1.1}血債血償！"]
            : ['<11>{#p/basic}{~}{@random=1.1/1.1}What kind of creature are you...!?'],
      randStatusLone: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* 只剩一個了。']
            : world.bad_lizard > 1
               ? ['<32>{#p/story}* 02 has lost his temper.']
               : ['<32>{#p/story}* 04 is in shambles.'],

      act_flirt: ['<32>{#p/human}* (You flirt with 04.)'],
      flirtTalk1: ["<11>{#p/basic}{~}It's in the rules!"],
      flirtTalk2: ["<11>{#p/basic}{~}It won't!"],
      flirtTalkNervy1: ["<11>{#p/basic}{~}It's against the rules!"],
      flirtTalkNervy2: ["<11>{#p/basic}{~}It's not our thing!"],
      flirtTalkLone: ['<11>{#p/basic}{~}...'],
      act_flirt_happy: [
         "<32>{#p/human}* (You flirt with 04.)\n* (She's flattered, but her eyes remain locked with 03.)"
      ],
      act_flirt_nada: ["<32>{#p/human}* (You flirt with 02.)\n* (He doesn't seem to react in any significant way.)"],

      act_tug: ["<32>{#p/human}* (You pull on 04's glove.)", "<32>{#p/basic}* 04's glove seems loose..."],
      tugTalk1: ['<11>{#p/basic}{~}W-what are you doing?'],
      tugTalk2: ["<11>{#p/basic}{~}Don't tell me you're going to..."],
      tugTalk3: ['<11>{#p/basic}{~}I...\nThis is...'],
      tugTalk4: ['<11>{#p/basic}{~}...'],
      tugStatus: ["<32>{#p/story}* 04's glove is slipping."],
      act_tug_lone: ["<32>{#p/human}* (You pull on 04's glove.)", "<32>* 04's glove comes right off!"],
      tugTalkLone: ['<11>{#p/basic}{~}...'],
      tugStatusLone: ['<32>{#p/story}* 04 shows no resistance.'],
      act_tug_hold: ["<32>{#p/human}* (You hold 04's claw.)"],
      holdTalk: ['<11>{#p/basic}{~}Uh...'],
      holdStatus: ['<32>{#p/story}* 04 is not really sure what to make of this.'],
      act_tug_hold_lone: ["<32>{#p/human}* (You hold 04's claw.)\n* (Nothing happens.)"],
      holdTalkLone: ['<11>{#p/basic}{~}...'],
      holdStatusLone: ['<32>{#p/story}* 04 just lets it happen.'],
      act_tug_happy: [
         "<32>{#p/human}* (You hold 04's claw.)",
         '<32>{#p/basic}* 04 mistakenly believes 03 is holding her claw...'
      ],
      tugSuccessStatus: ['<32>{#p/story}* The veil has been lifted.'],

      tugShock: ["<11>{#p/basic}{~}My glove...\nIt's coming off...!"],
      nervyTalk1: ['<11>{#p/basic}{~}03...?'],
      nervyTalk2: ['<11>{#p/basic}{~}Why are you looking at me that way?'],
      nervyTalk3: ["<11>{#p/basic}{~}What's with that face, 03?"],
      nervyTalk4: ['<11>{#p/basic}{~}Are you okay?'],

      act_whisper: ['<32>{#p/human}* (You whisper to 04, but she just seems confused.)'],
      act_whisper_alt: ['<32>{#p/human}* （你和四號守衛說悄悄話。）\n* （什麼都沒發生。）'],

      happyTalk1: ['<11>{#p/basic}{~}I missed you too!'],
      happyTalk2: ["<11>{#p/basic}{~}I'm glad YOU'RE here!"],
      happyTalk3: ['<11>{#p/basic}{~}Haha, yeah...'],
      happyTalk4: ['<11>{#p/basic}{~}Think nothing of it, sweetheart!'],

      horrorTalk1: [
         '<11>{#p/basic}{~}{@random=1.1/1.1}N... no...',
         '<11>{#p/basic}{~}{@random=1.1/1.1}We were gonna do... so much together...'
      ],
      horrorTalk2: ["<11>{#p/basic}{~}{@random=1.1/1.1}I can't accept it..."],
      horrorTalk3: ['<11>{#p/basic}{~}{@random=1.1/1.1}Just... kill me...'],
      horrorTalk4: ['<11>{#p/basic}{~}{@random=1.1/1.1}...'],

      dangerStatus: () =>
         world.goatbro
            ? ['<32>{#p/asriel2}* 離死不遠了。']
            : world.bad_lizard > 1
               ? ['<32>{#p/story}* 02 holds his head high.']
               : ["<32>{#p/story}* 04's breathing intensifies."]
   },

   b_use: {
      old_spray: () =>
         battler.volatile[battler.targetOverride!].opponent.metadata.reactOld
            ? []
            : ['<32>{#p/human}* （你取出了糖霧噴。）', '<32>{#p/human}* （什麼都沒發生。）'],
      old_gun: () =>
         battler.volatile[battler.targetOverride!].opponent.metadata.reactOld
            ? []
            : ['<32>{#p/human}* （你取出了電擊槍。）', '<32>{#p/human}* （什麼都沒發生。）'],
      old_bomb: () =>
         battler.volatile[battler.targetOverride!].opponent.metadata.reactOld
            ? []
            : ['<32>{#p/human}* （你取出了瞌睡彈。）', '<32>{#p/human}* （什麼都沒發生。）']
   },

   c_name_aerialis: {
      alphys: "給Alphys打電話",
      puzzle: '謎題求助',
      dimboxA: '次元箱子A',
      dimboxB: '次元箱子B',
      pms: () => (SAVE.data.n.plot_pmcheck < pms().length ? '§fill=#ff0§域外網（有新訊息）' : '域外網')
   },

   c_call_aerialis: {
      puzzle2a: () =>
         [
            [
               '<25>{#p/alphys}{#g/alphysCutscene1}* Oh, h-hey!',
               '<25>{#g/alphysCutscene2}* So... this puzzle is actually kinda simple.',
               '<25>{#g/alphysSide}* Each time you pass by a terminal, it alters your phase.',
               "<25>{#g/alphysSmileSweat}* Or, in layman's terms, how far you are along the fourth dimension.",
               "<25>{#g/alphysInquisitive}* Except it's not really a dimension, but... you get the idea.",
               '<25>{#g/alphysNervousLaugh}* Anyway, to pass through the puzzle, just align your local phase...',
               '<25>{#g/alphysHellYeah}* ... with the global phase shift of the room!',
               '<25>{#g/alphysCutscene2}* Which you can do by walking forwards and backwards, of course.',
               '<25>{#g/alphysSmileSweat}* A-and, the terminals are set to display your local phase offset...',
               "<25>{#g/alphysSide}* That way, you'll know when you're properly aligned.",
               '<25>{#g/alphysCutscene1}* Well, g-good luck!'
            ],
            [
               '<25>{#p/alphys}{#g/alphysInquisitive}* ... still stuck?',
               '<25>{#g/alphysCutscene2}* Hmmm...',
               '<25>* I guess my explanation WAS a bit wordy...\n* Ehehe.',
               '<25>{#g/alphysSide}* Really, you just have to get to the terminal that says zero on it.',
               "<25>{#g/alphysNervousLaugh}* Again, it's all about phase offset.",
               '<25>{#g/alphysCutscene2}* As long as your local phase is aligned...',
               '<25>{#g/alphysCutscene2}* ...',
               "<25>{#g/alphysUhButHeresTheDeal}* Just g-get to zero and you're home free!!"
            ],
            [
               '<25>{#p/alphys}{#g/alphysInquisitive}* ... still?',
               '<25>{#g/alphysSmileSweat}* Uh, uh...\n* Walk forwards, until...',
               '<25>{#g/alphysSideSad}* ... wait, what if you already went past it?',
               '<25>{#g/alphysNeutralSweat}* ...',
               "<25>{#g/alphysCutscene3}* You're smart, f-figure it out yourself!"
            ]
         ][SAVE.data.n.cell_puzzleA1++],
      puzzle2b: () =>
         [
            [
               '<25>{#p/alphys}{#g/alphysCutscene1}* Oh, h-hey!',
               '<25>{#p/alphys}{#g/alphysCutscene2}* This puzzle is a little more complicated than the last one.',
               "<25>{#p/alphys}{#g/alphysWelp}* Y'know, b-because of the whole extra dimension added.",
               '<25>{#p/alphys}{#g/alphysCutscene3}* Sometimes I question whether that actually makes it harder.',
               '<25>{#p/alphys}{#g/alphysSmileSweat}* Well, uh, l-like the last one, you just need to align your phase.',
               "<25>{#p/alphys}{#g/alphysFR}* If you don't know what that is by now...",
               "<25>{#p/alphys}{#g/alphysSide}* I'd say you've probably b-been living in an asteroid all this time."
            ],
            [
               '<25>{#p/alphys}{#g/alphysInquisitive}* ... so you HAVE been living in an asteroid.',
               '<25>{#p/alphys}{#g/alphysDontGetAllDreamyEyedOnMeNow}* Jeez, just find the terminal that says zero on it!'
            ]
         ][SAVE.data.n.cell_puzzleA2++]
   },

   i_tvm_radio: {
      battle: {
         description: '一臺來自地球的老式收音機。',
         name: '收音機'
      },
      drop: ['<32>{#p/human}* （你把老式收音機扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (This artifact looks a lot like other things you're used to seeing all the time.)"]
            : ["<32>{#p/basic}* 一臺來自地球的老式收音機。"],
      name: '老式收音機',
      use: () =>
         !world.genocide && battler.active && battler.alive[0].opponent.metadata.reactTVM
            ? []
            : ['a_lookout', 'f_taxi', 's_taxi', 'w_wonder'].includes(game.room) // NO-TRANSLATE

               ? [
                  '<32>{#p/human}* （你打開了收音機。）',
                  '<32>{#p/event}{#a.radiostart}* ...',
                  '{*}{#a.radiostop}{%}'
               ]
               : ['<32>{#p/human}* （你打開了收音機。）\n* （沒有訊號。）']
   },
   i_tvm_fireworks: {
      battle: {
         description: '一箱來自地球的煙花。',
         name: '煙花'
      },
      drop: ['<32>{#p/human}* （你把整箱煙花全扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (This supposed artifact looks like nothing else you've seen.)"]
            : ["<32>{#p/basic}* 一箱來自地球的煙花。"],
      name: '煙花',
      use: () =>
         !world.genocide && battler.active && battler.alive[0].opponent.metadata.reactTVM
            ? []
            : [
               '<32>{#p/human}* （你往裝煙花的箱子裡\n  瞅了一眼。）',
               "<32>* （看來，你還不會放煙花。）"
            ]
   },
   i_tvm_mewmew: {
      battle: {
         description: '一隻等身大的喵喵玩偶。',
         name: '喵喵玩偶'
      },
      drop: () => [
         '<32>{#p/human}* （你把喵喵玩偶扔掉了。）',
         ...((fetchCharacters()
            .find(c => c.key === 'alphys') // NO-TRANSLATE

            ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
            ? ((SAVE.data.b.mewget = true),
               [
                  "<25>{#p/alphys}{#f/23}* Wow, you're so kind for leaving that there for me.",
                  '<25>{#p/alphys}{#f/22}* It only TOOK YOU LONG ENOUGH!!!',
                  '<25>{#p/alphys}{#g/alphysCutscene2}* ... thanks, I guess.'
               ])
            : game.room === 'f_undyne' && instance('main', 'f_dummynpc') // NO-TRANSLATE

               ? [
                  "<32>{#p/basic}* You're leaving it here??",
                  '<32>{#p/basic}* Well... what makes you think I want it, HUH!?',
                  "<32>{#p/basic}* Because, I DON'T!\n* It's... just a stupid doll!",
                  '<32>{#p/basic}* I guess... it is kind of cute, though...',
                  "<32>{#p/basic}* W-what are you looking at!?\n* I'm not blushing!",
                  '<32>{#p/basic}* Not on the outside, anyway...',
                  '<32>{#p/basic}* ...'
               ]
               : [])
      ],
      info: ["<32>{#p/basic}* 一隻等身大的喵喵玩偶。\n  不然還能是別的嗎？"],
      name: '喵喵玩偶',
      use: () =>
         !world.genocide &&
            battler.active &&
            (battler.alive[0].opponent.metadata.reactTVM || battler.alive[0].opponent.metadata.reactMewMew)
            ? []
            : [
               '<32>{#p/human}* (You use the Mew Mew Doll.)',
               ...((fetchCharacters()
                  .find(c => c.key === 'alphys') // NO-TRANSLATE

                  ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
                  ? ['<25>{#p/alphys}{#g/alphysFR}* ...']
                  : game.room === 'f_undyne' && instance('main', 'f_dummynpc') // NO-TRANSLATE

                     ? ['<32>{#p/basic}* Would you quit waving that thing around?']
                     : game.room === 'f_blooky' && // NO-TRANSLATE

                        !world.genocide &&
                        SAVE.data.n.plot !== 47.2 &&
                        !SAVE.data.b.a_state_napstadecline
                        ? ['<32>{#p/napstablook}* 噢............']
                        : SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
                           ? []
                           : ['<32>{#p/basic}* What were you even expecting to happen here...?'])
            ]
   },
   i_starfait: {
      battle: {
         description: 'There is such a thing as too much sugar.',
         name: '新星咖啡'
      },
      drop: ['<32>{#p/human}* （你把新星咖啡扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （23 HP。）']
            : ['<32>{#p/basic}* 「新星咖啡」 回復23 HP\n* 明顯加糖加多了。'],
      name: '新星咖啡',
      use: ['<32>{#p/human}* （你喝掉了新星咖啡。）']
   },
   i_legendary_hero: {
      battle: {
         description: "回合中保護，回合後回血，\n這三明治簡直碉堡了。",
         name: '星園爍寵'
      },
      drop: ['<32>{#p/human}* （你把星園爍寵扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （40 HP。）']
            : [
               '<33>{#p/basic}* 「星園爍寵」 回復40 HP\n* 回合中保護，回合後回血，\n  這三明治簡直碉堡了。'
            ],
      name: '星園爍寵',
      use: () =>
         battler.active
            ? [
               '<32>{#p/human}* （你自豪地揮舞著星園爍寵。）',
               '<32>{#p/story}* 本回合，你的防禦力提升！'
            ]
            : ['<32>{#p/human}* （你吃掉了猛男漢堡。）']
   },
   i_glamburger: {
      battle: {
         description: '漢堡火辣辣，打人頂呱呱。',
         name: '猛男漢堡'
      },
      drop: () => [
         '<32>{#p/human}* （你拿猛男漢堡來了個全壘打。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : ["<32>{#p/basic}* 明明是本壘打！"])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （34 HP。）']
            : ['<32>{#p/basic}* 「猛男漢堡」 回復34 HP\n* 漢堡火辣辣，打人頂呱呱。'],
      name: '猛男漢堡',
      use: () => [
         '<32>{#p/human}* （你猛得吞下猛男漢堡。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
            ? []
            : ["<32>{#p/basic}* 小心，裡面放了好幾種辣椒呢！"])
      ]
   },
   i_face_steak: {
      battle: {
         description: '這就叫「攻守易形」。',
         name: "Glyde的愛"
      },
      drop: ["<32>{#p/human}* （你把Glyde的愛扔掉了。）"],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （55 HP。）']
            : ['<32>{#p/basic}* 「Glyde的愛」 回復55 HP\n* 這就叫「攻守易形」。'],
      name: "Glyde的愛",
      use: ["<32>{#p/human}* （你盡情享受著Glyde的愛。）"]
   },
   i_starfait_x: {
      battle: {
         description: '...',
         name: '新星嗎啡'
      },
      drop: ['<32>{#p/human}* （你把「新星嗎啡」扔掉了。）'],
      info: ['<32>{#p/basic}* 「新星嗎啡」 回復-23 HP\n* ...'],
      name: '新星嗎啡',
      use: ['<32>{#p/human}* （你吸食了新星嗎啡。）']
   },
   i_legendary_hero_x: {
      battle: {
         description: '...',
         name: '猩猿碩蟲'
      },
      drop: ['<32>{#p/human}* （你把猩猿碩蟲扔掉了。）'],
      info: ['<32>{#p/basic}* 「猩猿碩蟲」 回復-40 HP\n* ...'],
      name: '猩猿碩蟲',
      use: () =>
         battler.active
            ? [
               '<32>{#p/human}* （你慌亂地揮舞著猩猿碩蟲。）',
               '<32>{#p/story}* 本回合，你的防禦力降低！'
            ]
            : ['<32>{#p/human}* （你吃掉了猩猿碩蟲。）']
   },
   i_glamburger_x: {
      battle: {
         description: '...',
         name: '猛爛漢堡'
      },
      drop: ['<32>{#p/human}* （你把猛爛漢堡扔到了垃圾堆。）'],
      info: ['<32>{#p/basic}* 「猛爛漢堡」 回復-34 HP\n* ...'],
      name: '猛爛漢堡',
      use: ['<32>{#p/human}* （你猛地吞下了猛爛漢堡。）']
   },
   i_face_steak_x: {
      battle: {
         description: '...',
         name: 'Undyne的哀'
      },
      drop: ["<32>{#p/human}* （你把Undyne的哀扔掉了。）"],
      info: ['<32>{#p/basic}* 「Undyne的哀」 回復-55 HP\n* ...'],
      name: "Undyne的哀",
      use: ["<32>{#p/human}* （你把Undyne的哀都咽到肚子裡。）"]
   },
   i_trash: {
      battle: {
         description: '你敢嘗嘗真正的垃圾\n是什麼味道嗎？',
         name: '太空垃圾'
      },
      drop: ['<32>{#p/human}* （你把太空垃圾扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （?? HP。）']
            : ['<32>{#p/basic}* 「太空垃圾」 回復?? HP\n* 你敢嘗嘗真正的垃圾\n  是什麼味道嗎？'],
      name: '太空垃圾',
      use: () => [
         '<32>{#p/human}* （你吃掉了太空垃圾。）',
         ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : ['<32>{#p/basic}* 饒了我吧。'])
      ]
   },
   i_laser: {
      battle: {
         description: '精準命中，威力無窮。',
         name: '雷射步槍'
      },
      drop: ['<32>{#p/human}* （你把雷射步槍扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （12攻擊。）']
            : ['<32>{#p/basic}* 「雷射步槍」 （12攻擊）\n* 精準命中，威力無窮。'],
      name: '雷射步槍',
      use: ['<32>{#p/human}* （你扛起了雷射步槍。）']
   },
   i_laser_x: {
      battle: {
         description: '精準命中，火力十足。',
         name: '雷射步槍？'
      },
      drop: ['<32>{#p/human}* （你把雷射步槍扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （10攻擊。）']
            : ['<32>{#p/basic}* 「雷射步槍？」 （10攻擊）\n* 精準命中，火力十足。'],
      name: '雷射步槍？',
      use: ['<32>{#p/human}* （你扛起了雷射步槍。）']
   },
   i_visor: {
      battle: {
         description: '能延長攻擊瞄準時間。',
         name: '護目鏡'
      },
      drop: ['<32>{#p/human}* （你把護目鏡扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （12防禦。）']
            : ['<32>{#p/basic}* 「戰術護目鏡」 （12防禦）\n* 能延長攻擊瞄準時間。'],
      name: '戰術護目鏡',
      use: ['<32>{#p/human}* （你戴上了護目鏡。）']
   },
   i_visor_x: {
      battle: {
         description: '略微延長瞄準時間，\n效果不如正品。',
         name: '護目鏡？'
      },
      drop: ['<32>{#p/human}* （你把護目鏡扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （10防禦。）']
            : [
               '<32>{#p/basic}* 「戰術護目鏡？」 （10防禦）\n* 略微延長瞄準時間，\n  效果不如正品。'
            ],
      name: '戰術護目鏡？',
      use: ['<32>{#p/human}* （你戴上了護目鏡。）']
   },
   i_filament: {
      battle: {
         description: '一組彎彎繞繞的燈芯，風味獨特！\n還剩五根。',
         name: '燈芯'
      },
      drop: ['<32>{#p/human}* （你把這些燈芯全扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （30 HP。）']
            : ['<32>{#p/basic}* 「燈芯」 回復30 HP\n* 一組彎彎繞繞的燈芯，風味獨特！\n* 還剩五根。'],
      name: '五根燈芯',
      use: ['<32>{#p/human}* （你從燈絲中汲取了些能量。）']
   },
   i_filament_use1: {
      battle: { description: '一組彎彎繞繞的燈芯，風味獨特！\n還剩四根。', name: '燈芯' },
      drop: ['<32>{#p/human}* （你把這些燈芯全扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （25 HP。）']
            : ['<32>{#p/basic}* 「燈芯」 回復25 HP\n* 一組彎彎繞繞的燈芯，風味獨特！\n* 還剩四根。'],
      name: '四根燈芯',
      use: ['<32>{#p/human}* （你從燈絲中汲取了些能量。）']
   },
   i_filament_use2: {
      battle: { description: '一組彎彎繞繞的燈芯，風味獨特！\n還剩三根。', name: '燈芯' },
      drop: ['<32>{#p/human}* （你把這些燈芯全扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （20 HP。）']
            : ['<32>{#p/basic}* 「燈芯」 回復20 HP\n* 一組彎彎繞繞的燈芯，風味獨特！\n* 還剩三根。'],
      name: '三根燈芯',
      use: ['<32>{#p/human}* （你從燈絲中汲取了些能量。）']
   },
   i_filament_use3: {
      battle: { description: '一組彎彎繞繞的燈芯，風味獨特！\n還剩兩根。', name: '燈芯' },
      drop: ['<32>{#p/human}* （你把這些燈芯全扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （15 HP。）']
            : ['<32>{#p/basic}* 「燈芯」 回復15 HP\n* 一組彎彎繞繞的燈芯，風味獨特！\n* 還剩兩根。'],
      name: '兩根燈芯',
      use: ['<32>{#p/human}* （你從燈絲中汲取了些能量。）']
   },
   i_filament_use4: {
      battle: { description: '一組彎彎繞繞的燈芯，風味獨特！\n只剩一根。', name: '燈芯' },
      drop: ['<32>{#p/human}* （你把這些燈芯全扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （10 HP。）']
            : ['<32>{#p/basic}* 「燈芯」 回復10 HP\n* 一組彎彎繞繞的燈芯，風味獨特！\n* 只剩一根。'],
      name: '燈芯',
      use: ['<32>{#p/human}* （你從燈絲中汲取了些能量。）']
   },
   i_tablaphone: {
      battle: {
         description: '表面平坦，但邊緣鋒利。\n每回合受傷後回復一定量HP。',
         name: '塔布拉木琴'
      },
      drop: ['<32>{#p/human}* （你把塔布拉木琴扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （10攻擊。）']
            : ['<32>{#p/basic}* 「塔布拉木琴」 （10攻擊）\n* 表面平坦，但邊緣鋒利。\n  每回合受傷後回復一定量HP。'],
      name: '塔布拉木琴',
      use: ['<32>{#p/human}* （你架好了塔布拉木琴。）']
   },
   i_sonic: {
      battle: {
         description: "受到彈幕攻擊時，\n小概率轉變為回血效果。",
         name: '諧振器'
      },
      drop: ['<32>{#p/human}* （你把聲波諧振器扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （11防禦。）']
            : [
               '<32>{#p/basic}* 「聲波諧振器」 （11防禦）\n* 受到彈幕攻擊時，\n  小概率轉變為回血效果。'
            ],
      name: '聲波諧振器',
      use: ['<32>{#p/human}* （你啟動了聲波諧振器。）']
   },
   i_mystery_food: {
      battle: {
         description: '這種食物在休閒迴廊十分常見。',
         name: '神秘食物'
      },
      drop: ['<32>{#p/human}* （你把神秘食物扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （13 HP。）']
            : ['<32>{#p/basic}* 「神秘食物」 回復13 HP\n* 這種食物在休閒迴廊十分常見。'],
      name: '神秘食物',
      use: ['<32>{#p/human}* （你吃掉了神秘食物。）']
   },
   i_super_pop: {
      battle: {
         description: '可改變主觀時間流速。',
         name: '豪華棒棒糖'
      },
      drop: ['<32>{#p/human}* （你把豪華渦旋棒棒糖扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （22 HP。）']
            : [
               '<33>{#p/basic}* 「豪華渦旋棒棒糖」 回復22 HP\n* 可改變主觀時間流速。\n* 僅在戰鬥中有效。'
            ],
      name: '豪華渦旋棒棒糖',
      use: () => [
         '<32>{#p/human}* （你把超級渦旋棒棒糖舔沒了。）',
         ...(battler.active
            ? game.vortex
               ? ['<32>{#p/human}* （主觀時間流速之前已改變。）']
               : [
                  '<32>{#p/human}* （你的主觀時間流速開始改變。）',
                  '<32>{#p/story}* 兩回合內，你的專注力提升！'
               ]
            : ['<32>{#p/human}* （戰鬥外使用無效。）'])
      ]
   },
   i_old_gun: {
      battle: {
         description: '無害的一次性武器。',
         name: '電擊槍'
      },
      drop: ['<32>{#p/human}* （你把電擊槍扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (You get the sense this item shouldn't be carried as lightly as one might think.)"]
            : ['<32>{#p/basic}* 無害的一次性武器。\n* 只能在戰鬥中使用。'],
      name: '電擊槍',
      use: () =>
         battler.active
            ? []
            : ['<32>{#p/human}* （你取出了電擊槍。）', '<32>{#p/human}* （戰鬥外使用無效。）']
   },
   i_old_bomb: {
      battle: {
         description: '無害的一次性武器。',
         name: '瞌睡炸彈'
      },
      drop: ['<32>{#p/human}* （你把瞌睡炸彈扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (You get the sense this item wouldn't be as calming as one would hope.)"]
            : ['<32>{#p/basic}* 無害的一次性武器。\n* 只能在戰鬥中使用。'],
      name: '瞌睡炸彈',
      use: () =>
         battler.active
            ? []
            : ['<32>{#p/human}* （你取出了瞌睡彈。）', '<32>{#p/human}* （戰鬥外使用無效。）']
   },
   i_old_spray: {
      battle: {
         description: '無害的一次性武器。',
         name: '糖霧噴劑'
      },
      drop: ['<32>{#p/human}* （你扔掉了糖霧噴劑。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ["<32>{#p/human}* (You get the sense this item isn't as sweet as it seems.)"]
            : ['<32>{#p/basic}* 無害的一次性武器。\n* 只能在戰鬥中使用。'],
      name: '糖霧噴劑',
      use: () =>
         battler.active
            ? []
            : ['<32>{#p/human}* （你取出了糖霧噴。）', '<32>{#p/human}* （戰鬥外使用無效。）']
   },
   i_corndog: {
      battle: {
         description: '剛從微波爐裡拿出來。',
         name: '玉米熱狗'
      },
      drop: ['<32>{#p/human}* （你把玉米熱狗扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （10 HP。）']
            : ['<32>{#p/basic}* 「玉米熱狗」 回復10 HP\n* 剛從微波爐裡拿出來。'],
      name: '玉米熱狗',
      use: ['<32>{#p/human}* （你吃掉了玉米熱狗。）']
   },
   i_corngoat: {
      battle: {
         description: "很像玉米熱狗，但更加軟糯蓬鬆。\n別問為啥。",
         name: '玉米熱羊'
      },
      drop: () => [
         '<32>{#p/human}* （你把玉米熱羊扔掉了。）',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom ? ['<25>{#p/asriel1}{#f/15}* ...'] : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （20 HP。）']
            : ['<32>{#p/basic}* 「玉米熱羊」 回復20 HP\n* 很像玉米熱狗，但更加軟糯蓬鬆。\n* 別問為啥。'],
      name: '玉米熱羊',
      use: () => [
         '<32>{#p/human}* （你吃掉了玉米熱羊。）',
         ...(SAVE.data.b.svr && !SAVE.data.b.freedom
            ? ["<25>{#p/asriel1}{#f/13}* Please don't tell me that's symbolic of anything..."]
            : [])
      ]
   },
   i_moon_pie: {
      battle: {
         description: "一小塊源自地球夜空的糕點。",
         name: '月派'
      },
      drop: ['<32>{#p/human}* （你把月派扔掉了。）'],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （99 HP。）']
            : ['<32>{#p/basic}* 「月派」 回復99 HP\n* 一小塊源自地球夜空的糕點。'],
      name: '月派',
      use: ['<32>{#p/human}* （你吃掉了月派。）']
   },
   i_orange_soda: {
      battle: {
         description: '一瓶超級難喝的橙汁汽水。\n捏著鼻子，也不是不能喝。',
         name: '橙汁汽水'
      },
      drop: () => [
         '<32>{#p/human}* （你把橙汁汽水全倒掉了。）',
         ...((fetchCharacters()
            .find(c => c.key === 'alphys') // NO-TRANSLATE

            ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
            ? ['<25>{#p/alphys}{#g/alphysFR}* ...', '<25>* Did you just throw away a perfectly good orange soda?']
            : [])
      ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? ['<32>{#p/human}* （16 HP。）']
            : ['<32>{#p/basic}* 「橙汁汽水」 回復16 HP\n* 一瓶超級難喝的橙汁汽水。\n* 捏著鼻子，也不是不能喝。'],
      name: '橙汁汽水',
      use: () =>
         world.meanie
            ? [
               '<32>{#p/human}* （你喝掉了橙汁汽水，\n  喝完了，還不忘把瓶子捏爛。）',
               battler.active
                  ? `<32>{#p/story}* 你的攻擊力提升了${8 + battler.at_bonus}點！`
                  : '<32>{#p/human}* （戰鬥外使用無效。）',
               ...((fetchCharacters()
                  .find(c => c.key === 'alphys') // NO-TRANSLATE

                  ?.position.extentOf(game.camera.position.clamp(...renderer.region)) ?? 240) < 240
                  ? [
                     '<25>{#p/alphys}{#g/alphysOhGodNo}* W-was that my drink!?',
                     '<25>{#p/alphys}{#f/10}* Oh... my god...',
                     '<25>{#p/alphys}{#g/alphysUhButHeresTheDeal}* You did not hold back!'
                  ]
                  : [])
            ]
            : ['<32>{#p/human}* （你喝掉了橙汁汽水。）']
   },
   i_demise: {
      battle: {
         description: '...',
         name: '自作孽不可活'
      },
      drop: ["<32>{#p/human}* （你把「自作孽不可活」扔掉了。）"],
      info: ['<32>{#p/basic}* 「自作孽不可活」 回復-99 HP\n* ...'],
      name: "自作孽不可活",
      use: ["<32>{#p/human}* （你吃掉了「自作孽不可活」。）"]
   },

   k_liftgate: {
      name: '升降門通行證',
      description: 'Acquired from your upgraded CELL.\nUsed to access the liftgate network.'
   },

   k_mystery: {
      name: '神秘鑰匙',
      description: () =>
         SAVE.data.b.f_state_hapstadoor
            ? "Used to unlock the door to Mettaton's house."
            : "從Bratty和Catty在休閒迴廊\n開的雜貨鋪獲得的。"
   },

   m_aerialis: {
      sidebarCellPms1: () => (world.bad_lizard < 2 ? '帖子（按時間倒序）' : '私聊（按時間排序）'),
      sidebarCellPms2: '按 [X] 返回',
      sidebarCellPms3: {
         alphysBadLizard: {
            author: '系統資訊',
            pm: 'An evacuation notice has been issued in your area. Vacate at once.'
         },
         alphys0: {
            author: '系統資訊',
            pm: "Thank you for creating an account on the outpost's #1 social network!"
         },
         alphys1: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne
                  ? 'uhhhh nobody saw that right' 
                  : [
                     '終於見到人類了，有點傷腦筋www', 
                     'well i just met the human' 
                  ][SAVE.data.n.bad_lizard]
         },
         alphys2: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne
                  ? 'ok good' 
                  : [
                     iFancyYourVilliany()
                        ? 'still cant believe mettaton gave them a moniker???'
                        : 'still cant believe mettaton wanted me to fight them???', 
                     'they seem... nice?' 
                  ][SAVE.data.n.bad_lizard]
         },
         alphys3: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne
                  ? 'yeah that wouldve been pretty embarrasing otherwise' 
                  : [
                     iFancyYourVilliany()
                        ? 'yeah lets hope that doesnt get blown out of proportion'
                        : 'yeah lets hope that doesnt happen again', 
                     'yeah lets hope nothing bad happens' 
                  ][SAVE.data.n.bad_lizard]
         },
         alphys4: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne
                  ? 'oh my god i thought those guys were about to provoke the human' 
                  : [
                     'really guys?\nTHERES ICE CREAM AT THE REC CENTER', 
                     'awkward' 
                  ][SAVE.data.n.bad_lizard]
         },
         alphys6: {
            author: 'ALPHYS',
            pm: 'oh no.'
         },
         alphys7: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'ok mettaton could you like not keep doing this to me thanks' 
                  : SAVE.data.n.state_aerialis_crafterresult === 0
                     ? 'ok ill be honest i have no idea how that worked out LOL' 
                     : SAVE.data.n.bad_lizard < 1
                        ? [
                           'wow, i shouldve known those bombs were just TV props LOL', 
                           'NOOOO they were so close', 
                           "let's go the human made it to the end", 
                           'anyone who wasnt watching just now missed out big time' 
                        ][SAVE.data.n.state_aerialis_crafterresult - 1]
                        : 'well, there goes my last one-time use portable jetpack' 
         },
         alphys8: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'wait how did the human get here if i never gave them a liftgate pass' 
                  : 'BTW has anyone else seen mew mew space adventure???'
         },
         alphys9: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'like did they just steal my spare cell phone or something' 
                  : 'i finally started watching the last season and its actually good WTF'
         },
         alphys10: {
            author: 'NAPSTABLOOK22',
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'alphys... can you please respond to my private messages...' 
                  : 'we did... that one time...'
         },
         alphys11: {
            author: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'NAPSTABLOOK22'
                  : SAVE.data.n.state_starton_papyrus === 0
                     ? '酷炫骷髏95'
                     : 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? "i'm... getting worried" 
                  : SAVE.data.n.state_starton_papyrus === 0
                     ? 'ARE WE WATCHING \"TV SHOWS\" NOW?\nSOUNDS EXCITING!' 
                     : 'ooh i remember that' 
         },
         alphys12: {
            author: () => (SAVE.data.n.plot === 72 ? '_舟亢忝洐_' : '_摋掱亾耦_'),
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'Alphys, HUH?\nAre you IGNORING MY COUSIN!?!?' 
                  : 'Mew Mew SPACE ADVENTURE???\nHAH! WHAT A LOAD OF HOT GARBAGE!'
         },
         alphys13: {
            author: () => (SAVE.data.n.state_foundry_undyne === 1 ? 'NAPSTABLOOK22' : 'ALPHYS'),
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'please stay out of this' 
                  : [
                     'let me guess youre one of those mew mew starfire fans arent you', 
                     'uhhhh' 
                  ][SAVE.data.n.bad_lizard]
         },
         alphys14: {
            author: () => (SAVE.data.n.plot === 72 ? '_舟亢忝洐_' : '_摋掱亾耦_'),
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? "oh, so i'm just supposed to IGNORE my cousins' problems, AM I?" 
                  : [
                     'yeah, okay, but ask yourself this:\ndoes space venture have EXPLOSIONS!?', 
                     "whats the matter, huh?\nSCARED YOU'LL LOSE AN ARGUMENT!?" 
                  ][SAVE.data.n.bad_lizard]
         },
         alphys15: {
            author: () => (SAVE.data.n.state_foundry_undyne === 1 ? 'NAPSTABLOOK22' : 'ALPHYS'),
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'with all due respect\nplease shut up.' 
                  : [
                     'LOLLLLLLLLLLL SPACE VENTURE\naverage starfire fan cant spell XD', 
                     'im really starting to regret not adding a block function' 
                  ][SAVE.data.n.bad_lizard]
         },
         alphys16: {
            author: () => (SAVE.data.n.state_foundry_undyne === 1 ? 'NAPSTABLOOK22' : 'ALPHYS'),
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'gotta go.' 
                  : 'another show already???'
         },
         alphys17: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? 'well... alright\nill look at what you sent me now' 
                  : 'for the record this mew mew doll thing never happened.'
         },
         alphys18: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_foundry_undyne === 1
                  ? SAVE.data.n.state_aerialis_royalguards === 1
                     ? 'no... come on... i thought i told them not to go after anyone' 
                     : "phew... i thought they'd be killed for sure there" 
                  : 'i thought i told the royal guard not to go after anyone WTF???'
         },
         alphysX0: {
            author: '系統資訊',
            pm: '聊天記錄已清空。'
         },
         alphysX1: {
            author: '懶骨.',
            pm: '只是以防萬一。'
         },
         alphysX2: {
            author: 'ALPHYS',
            pm: '說的對\n我剛把記錄刪乾淨了'
         },
         alphysX3: {
            author: '懶骨.',
            pm: 'heh... remember that time he showed off the new gravity plating?'
         },
         alphysX4: {
            author: 'ALPHYS',
            pm: 'and the whole set just started floating into the sky? OMG YES LMAO'
         },
         alphysX5: {
            author: '懶骨.',
            pm: 'pfft, he really thought that would work, huh?'
         },
         alphysX6: {
            author: 'ALPHYS',
            pm: 'i remember asgore trying everything he could to hold it down XD'
         },
         alphysX7: {
            author: 'ALPHYS',
            pm: 'man what a day\ni really miss working with you sans'
         },
         alphysX8: {
            author: '懶骨.',
            pm: "i know you do.\nbut i've got a different job to dddd"
         },
         alphysX9: {
            author: 'ALPHYS',
            pm: '...\n上哪去了？'
         },
         alphysY1: {
            author: '懶骨.',
            pm: '抱歉，有個人類突然出現了，\n打了我個措手不及。'
         },
         alphysY2: {
            author: '懶骨.',
            pm: '沒用雙關。'
         },
         alphysY3: {
            author: 'ALPHYS',
            pm: '好吧... 不是，你說真的？'
         },
         alphysY4: {
            author: '懶骨.',
            pm: "我不會用雙關撒謊，對吧？"
         },
         alphysY5: {
            author: 'ALPHYS',
            pm: '你懂的。'
         },
         alphysY6: {
            author: '懶骨.',
            pm: "別擔心，alphys。\n我已經掌控了局面。"
         },
         alphysY7: {
            author: 'ALPHYS',
            pm: '行吧'
         },
         alphysY7A1: {
            author: 'ALPHYS',
            pm: 'woah... did you see that?'
         },
         alphysY7A2: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_papyrus_capture < 3
                  ? 'papyrus and the human just fought and it was so intense'
                  : 'papyrus and the human just fought and it was kinda weird'
         },
         alphysY7A3: {
            author: '懶骨.',
            pm: () => (SAVE.data.n.state_papyrus_capture < 3 ? 'what?\nis he okay?' : 'what?\nwhat happened?')
         },
         alphysY7A4: {
            author: 'ALPHYS',
            pm: () =>
               SAVE.data.n.state_papyrus_capture < 3
                  ? 'yeah yeah hes fine dont worry'
                  : 'well papyrus kept beating them and they kept coming back and...'
         },
         alphysY7A5: {
            author: '懶骨.',
            pm: () =>
               SAVE.data.n.state_papyrus_capture < 3
                  ? "heh... i could feel it from here.\nhe must've really given it his all."
                  : "hey, just tell me if he's okay."
         },
         alphysY7A6: {
            author: 'ALPHYS',
            pm: () => (SAVE.data.n.state_papyrus_capture < 3 ? 'yeah thats one way of putting it' : 'hes okay.')
         },
         alphysY7A7: {
            author: '懶骨.',
            pm: () =>
               SAVE.data.n.state_papyrus_capture < 3
                  ? "guess i'll have to congratulate him when he gets back home."
                  : 'heh... glad to hear it.'
         },
         alphysYdoggo1: {
            author: 'ALPHYS',
            pm: '不... doggo...'
         },
         alphysYdoggo2: {
            author: '懶骨.',
            pm: '啊？發生啥事？'
         },
         alphysYdoggo3: {
            author: 'ALPHYS',
            pm: '他失明後，等下了班都會來我的實驗室...'
         },
         alphysYdoggo4: {
            author: 'ALPHYS',
            pm: '我用我們玩的那些小遊戲來鍛鍊他的聽覺'
         },
         alphysYdoggo5: {
            author: 'ALPHYS',
            pm: '他總是帶著燦爛的笑容離開。但現在...'
         },
         alphysYdoggo6: {
            author: '懶骨.',
            pm: '我明白了。'
         },
         alphysY8A1: {
            author: 'ALPHYS',
            pm: '你知道人類正在星港殺怪物吧？'
         },
         alphysY8A1a: {
            author: 'ALPHYS',
            pm: '那人在追殺平民百姓'
         },
         alphysY8A1b: {
            author: 'ALPHYS',
            pm: '那人專殺哨兵'
         },
         alphysY8A1c: {
            author: 'ALPHYS',
            pm: '那人在追殺所有人'
         },
         alphysY8A1d: {
            author: 'ALPHYS',
            pm: '那人不止在追殺doggo'
         },
         alphysY8A2: {
            author: '懶骨.',
            pm: "我知道。我在盡最大的努力讓人們\n在為時已晚前撤離。"
         },
         alphysY8A3: {
            author: 'ALPHYS',
            pm: '那好'
         },
         alphysYdrake1: {
            author: 'ALPHYS',
            pm: '你知道嗎... stardrakes的媽媽前幾天來過'
         },
         alphysYdrake2: {
            author: 'ALPHYS',
            pm: '她告訴我她為她兒子和他新交的朋友們\n感到多麼的驕傲...'
         },
         alphysYdrake3: {
            author: 'ALPHYS',
            pm: '我現在該怎麼跟她講？'
         },
         alphysYdrake4: {
            author: '懶骨.',
            pm: "你跟她講你作為皇家科學員會盡你所能。"
         },
         alphysYdrake5: {
            author: 'ALPHYS',
            pm: '是啊... 我想這是我能告訴她的全部了'
         },
         alphysYdrake6: {
            author: '懶骨.',
            pm: "比不說好。"
         },
         alphysY8A4: {
            author: 'ALPHYS',
            pm: 'that was close'
         },
         alphysY8A5: {
            author: '懶骨.',
            pm: "yeah... guess i shouldn't have doubted my bro, heh."
         },
         alphysY8A6: {
            author: 'ALPHYS',
            pm: 'yeah...'
         },
         alphysY8A7: {
            author: 'ALPHYS',
            pm: 'never mind the human is back to killing again'
         },
         alphysY8A8: {
            author: '懶骨.',
            pm: 'welp.'
         },
         alphysY8B1: {
            author: 'ALPHYS',
            pm: 'sans'
         },
         alphysY8B2: {
            author: 'ALPHYS',
            pm: '人類剛殺了papyrus'
         },
         alphysY8B3: {
            author: 'ALPHYS',
            pm: '告訴我你在那'
         },
         alphysY8B4a: {
            author: '懶骨.',
            pm: "我在這裡。我該再盯緊點他的。"
         },
         alphysY8B4b: {
            author: '懶骨.',
            pm: "我在這裡。我不該留他一個人在外的。"
         },
         alphysY8B5: {
            author: 'ALPHYS',
            pm: '你現在打算咋辦？'
         },
         alphysY8B6: {
            author: '懶骨.',
            pm: 'alphys，你想聽實話嗎？'
         },
         alphysY8B7: {
            author: '懶骨.',
            pm: "我啥都不想幹。"
         },
         alphysY8B8: {
            author: 'ALPHYS',
            pm: 'sans...'
         },
         alphysY8B9: {
            author: '懶骨.',
            pm: "這不是你的錯。\n總會發生的。"
         },
         alphysY8B10: {
            author: 'ALPHYS',
            pm: '啥叫總會發生？'
         },
         alphysY8B11: {
            author: '懶骨.',
            pm: '你知道papyrus的為人。'
         },
         alphysY8B12: {
            author: '懶骨.',
            pm: "他實在太善良了，\n不能眼睜睜看著別人死去。"
         },
         alphysY8B13: {
            author: 'ALPHYS',
            pm: '不像我們一樣？'
         },
         alphysY8B14: {
            author: '懶骨.',
            pm: '對。'
         },
         alphysY8B15: {
            author: 'ALPHYS',
            pm: '...'
         },
         alphysY8B16: {
            author: 'ALPHYS',
            pm: '情況沒有任何好轉'
         },
         alphysY8B17: {
            author: '懶骨.',
            pm: "我猜猜看，\n那人現在盯上鑄廠居民了?"
         },
         alphysY8B18: {
            author: 'ALPHYS',
            pm: '是但你會幫我疏散的對吧？'
         },
         alphysY8B18x: {
            author: 'ALPHYS',
            pm: 'i mean i think so? maybe we should start evacuating or something'
         },
         alphysY8B19: {
            author: '懶骨.',
            pm: "我作不了承諾。\n但我會試試看。"
         },
         alphysY8B20: {
            author: 'ALPHYS',
            pm: '謝了'
         },
         alphysY8C1: {
            author: 'ALPHYS',
            pm: 'sans people in the foundry are in serious danger'
         },
         alphysY8C2a: {
            author: 'ALPHYS',
            pm: 'its the human... even the elite squad cant stop it'
         },
         alphysY8C2b: {
            author: 'ALPHYS',
            pm: 'its the human... theyre going after the residents down there'
         },
         alphysY8C2c: {
            author: 'ALPHYS',
            pm: 'its the human... theyre killing everybody down there'
         },
         alphysY8C3a: {
            author: '懶骨.',
            pm: 'well, it was nice while it lasted.\nyou gonna start evacuating people?'
         },
         alphysY8C3b: {
            author: '懶骨.',
            pm: "well, aren't you gonna start evacuating people?"
         },
         alphysY8C4: {
            author: 'ALPHYS',
            pm: 'oh right i need to do that'
         },
         alphysY8C5: {
            author: 'ALPHYS',
            pm: 'gotta go'
         },
         alphysY8C6: {
            author: '懶骨.',
            pm: "good luck, alphys.\ni'll help evacuate if i can."
         },
         alphysY8C7: {
            author: 'ALPHYS',
            pm: '謝了'
         },
         alphysY8C8: {
            author: 'ALPHYS',
            pm: '噢不'
         },
         alphysY8C9: {
            author: 'ALPHYS',
            pm: 'undyne要和那人類開打了'
         },
         alphysY8C10a: {
            author: 'ALPHYS',
            pm: '有點擔憂啊'
         },
         alphysY8C10b: {
            author: 'ALPHYS',
            pm: 'not gonna lie im kind of excited'
         },
         alphysY8C11a: {
            author: 'ALPHYS',
            pm: '我是說非常擔憂'
         },
         alphysY8C11b: {
            author: 'ALPHYS',
            pm: 'but like really scared at the same time'
         },
         alphysY8C12a: {
            author: '懶骨.',
            pm: "你不覺得你該做點什麼嗎？"
         },
         alphysY8C12b: {
            author: '懶骨.',
            pm: "didn't you say you were trying to avoid this earlier?"
         },
         alphysY8C13a: {
            author: 'ALPHYS',
            pm: '是啊但我不覺得undyne會聽我的'
         },
         alphysY8C13b: {
            author: 'ALPHYS',
            pm: 'if the human got this far they can make it past her'
         },
         alphysY8C14: {
            author: '懶骨.',
            pm: '這樣啊。\n那好吧。'
         },
         alphysY8D1: {
            author: 'ALPHYS',
            pm: '噢'
         },
         alphysY8D1a1: {
            author: 'ALPHYS',
            pm: '我猜殺papyrus還滿足不了那人'
         },
         alphysY8D1a2: {
            author: 'ALPHYS',
            pm: '我猜殺光特戰隊還滿足不了那人'
         },
         alphysY8D1a3: {
            author: 'ALPHYS',
            pm: '我猜殺光犬衛隊還滿足不了那人'
         },
         alphysY8D1a4: {
            author: 'ALPHYS',
            pm: '我猜殺鑄廠居民還滿足不了那人'
         },
         alphysY8D1a5: {
            author: 'ALPHYS',
            pm: '我猜殺星港居民還滿足不了那人'
         },
         alphysY8D1b: {
            author: 'ALPHYS',
            pm: 'never mind'
         },
         alphysY8D1c1: {
            author: 'ALPHYS',
            pm: 'that cant be good'
         },
         alphysY8D1c2: {
            author: '懶骨.',
            pm: 'what happened?'
         },
         alphysY8D1c3: {
            author: 'ALPHYS',
            pm: 'she was trying to keep up with them and she stepped on something and...'
         },
         alphysY8D1c4: {
            author: 'ALPHYS',
            pm: 'i see it...\ni think shes... fallen down'
         },
         alphysY8D1x: {
            author: 'ALPHYS',
            pm: 'okay they spared her'
         },
         alphysY8D2a: {
            author: '懶骨.',
            pm: "對不起，alphys。\n我本希望我能幫上忙，但我無能為力。"
         },
         alphysY8D2b: {
            author: '懶骨.',
            pm: "i guess there's nothing you can do, then. i'm sorry, alphys."
         },
         alphysY8D2x: {
            author: 'ALPHYS',
            pm: 'though i dont think i want to be here after everything that happened'
         },
         alphysY8D3a: {
            author: 'ALPHYS',
            pm: () =>
               world.bad_lizard < 2
                  ? 'i let this happen sans... i watched her die and did nothing to stop it'
                  : '我還是趁現在離開實驗室吧'
         },
         alphysY8D3b1: {
            author: 'ALPHYS',
            pm: 'i get that it could have been an accident but i cant know for sure'
         },
         alphysY8D3b2: {
            author: 'ALPHYS',
            pm: 'who knows what theyll do next?'
         },
         alphysY8D3x: {
            author: 'ALPHYS',
            pm: 'its probably safer just to leave the lab anyway.'
         },
         alphysY8D4: {
            author: '懶骨.',
            pm: () =>
               world.bad_lizard < 2
                  ? "maybe it'd be best if you took some time off for a while."
                  : "行，你走吧。\n我會繼續監視那人。"
         },
         alphysY8D4x: {
            author: '懶骨.',
            pm: "想走就走吧。\n我會繼續監視那人。"
         },
         alphysY8D5: {
            author: 'ALPHYS',
            pm: () =>
               world.bad_lizard < 2
                  ? 'yeah... youre probably right'
                  : '好但別靠太近。那人隨時可能下手'
         },
         alphysY8D6: {
            author: '懶骨.',
            pm: () =>
               world.bad_lizard < 2
                  ? 'sounds good. just be sure to get a phone that works outside the lab.'
                  : "我沒事的，\n記得帶部在實驗室外能用的手機。"
         },
         alphysY8D7: {
            author: 'ALPHYS',
            pm: '是喔謝謝我差點忘了'
         },
         alphysY8D8: {
            author: '懶骨.',
            pm: "喔，走之前記得清空聊天記錄。"
         },
         alphysY8D9: {
            author: 'ALPHYS',
            pm: '我會清空的別擔心'
         },
         alphysZ1: {
            author: 'ALPHYS',
            pm: '...\n上哪去了？'
         },
         alphysZ2: {
            author: 'ALPHYS',
            pm: '我有點擔心了'
         },
         alphysZ3: {
            author: 'ALPHYS',
            pm: '不... 不不不 你只是在唬我玩對吧'
         },
         alphysZ4: {
            author: 'ALPHYS',
            pm: '你肯定在唬我，對吧對吧？\n你不會就這麼死了的'
         },
         alphysZ5: {
            author: 'ALPHYS',
            pm: 'sans快告訴我你還活著'
         },
         alphysZ6: {
            author: 'ALPHYS',
            pm: 'im sorry if i upset you for some reason or did something bad'
         },
         alphysZ7: {
            author: 'ALPHYS',
            pm: '只是你一直沒訊息\n我有點慌'
         },
         alphysZ8: {
            author: 'ALPHYS',
            pm: '唉... 回來了\n他逮住你兄弟了'
         },
         alphysZ9: {
            author: 'ALPHYS',
            pm: '我只是辦點事\n一回來就見不著他了'
         },
         alphysZ10: {
            author: 'ALPHYS',
            pm: '嗯... sans'
         },
         alphysZ11: {
            author: 'ALPHYS',
            pm: 'i dont know if youre there in some form or not but'
         },
         alphysZ12: {
            author: 'ALPHYS',
            pm: 'undyne死了'
         },
         alphysZ13: {
            author: 'ALPHYS',
            pm: 'UNDYNE死了\n我他媽卻不知道該怎麼辦'
         },
         alphysZ14: {
            author: 'ALPHYS',
            pm: '對不起'
         },
         alphysZ15: {
            author: 'ALPHYS',
            pm: 'i should probably go.'
         },
         alphysZ16: {
            author: 'ALPHYS',
            pm: '見鬼\n我為什麼還在和你發訊息'
         },
         alphysZ17: {
            author: 'ALPHYS',
            pm: '喔順帶一提'
         },
         alphysZ18: {
            author: 'ALPHYS',
            pm: '一直是那朵星花在搞鬼'
         }
      },
      sidebarCellPms4: '（新）'
   },

   n_shop_bpants: {
      exit: () =>
         world.population === 0 || burger()
            ? world.bullied && !world.genocide && !burger()
               ? ['<32>{#p/basic}{#k/6}* 隨時再來啊，小惡霸。']
               : ['<32>{#p/basic}{#k/6}* 隨時再來啊，小殺人犯。']
            : ['<32>{#p/basic}{#k/6}* 隨時再來啊，小傢伙。'],
      item: () =>
         world.runaway
            ? [
               '0G - 新星咖啡',
               '0G - 星園爍寵',
               '0G - 猛男漢堡',
               SAVE.data.b.item_face_steak ? '§fill=#808080§---- 售罄 ----' : "0G - Glyde的愛",
               '離開'
            ]
            : SAVE.data.n.plot === 72
               ? [
                  '5G - 新星咖啡',
                  '10G - 星園爍寵',
                  '5G - 猛男漢堡',
                  SAVE.data.b.item_face_steak ? '§fill=#808080§---- 售罄 ----' : "49G - Glyde的愛",
                  '離開'
               ]
               : world.genocide || world.killed0 || burger()
                  ? [
                     '32G - 新星嗎啡',
                     '60G - 猩猿碩蟲',
                     '48G - 猛爛漢堡',
                     SAVE.data.b.item_face_steak ? '§fill=#808080§---- 售罄 ----' : "138G - Undyne的哀",
                     '離開'
                  ]
                  : [
                     '16G - 新星咖啡',
                     '30G - 星園爍寵',
                     '24G - 猛男漢堡',
                     SAVE.data.b.item_face_steak ? '§fill=#808080§---- 售罄 ----' : "69G - Glyde的愛",
                     '離開'
                  ],
      itemInfo: () =>
         world.genocide || world.killed0 || burger()
            ? [
               'Heals -23HP\nSugar over-\ndose assured.',
               'Heals -40HP\nNot quite a\nhero of\nany kind.',
               'Heals -34HP\nFace the\npain either\nway.',
               'Heals -55HP\nOnly for the\nmost die-\nhard folk.'
            ]
            : [
               'Heals 23HP\nSugar over-\ndose likely.',
               'Heals 40HP\nNot quite a\n\"legendary\nhero.\"',
               'Heals 34HP\nSlam it\ndown or face\nthe pain.',
               "Heals 55HP\nIt's a long\nstory."
            ],
      itemPrompt: () =>
         world.population === 0 || burger()
            ? '<09>{#p/basic}{#k/7}您想要點\n什麼？'
            : '<09>{#p/basic}{#k/0}你想要點\n什麼？',
      itemPurchase: () =>
         world.population === 0 || burger()
            ? [
               world.bullied && !world.genocide && !burger()
                  ? '<09>{#p/basic}{#k/5}謝了，小惡霸。'
                  : '<09>{#p/basic}{#k/5}謝了，小殺人犯。',
               '<09>{#p/basic}{#k/7}You gonna buy something or...?',
               "<09>{#p/basic}{#k/6}That's the wrong amount of money.",
               "<10>{#p/human}（你帶的\n東西\n太多了。）"
            ]
            : [
               '<09>{#p/basic}{#k/0}謝了，小傢伙。',
               '<09>{#p/basic}{#k/1}You gonna buy something or...?',
               "<09>{#p/basic}{#k/6}That's the wrong amount of money.",
               "<10>{#p/human}（你帶的\n東西\n太多了。）"
            ],
      itemPurchasePrompt: () => (world.runaway ? '偷走嗎？' : '花$(x)G\n買它嗎？'),
      itemUnavailable: () =>
         world.runaway
            ? '<09>{#p/basic}空無一物。'
            : world.population === 0 || burger()
               ? '<09>{#p/basic}{#k/5}Sorry, that was one of a kind.'
               : '<09>{#p/basic}{#k/4}Sorry, that was one of a kind.',
      menu: () =>
         world.runaway ? ['拿取', '偷竊', '閱讀', '離開'] : ['購買', world.meanie ? '偷竊' : '出售', '交談', '離開'],
      menuPrompt1: () =>
         world.population === 0 || burger()
            ? world.bullied && !world.genocide && !burger()
               ? '<23>{#p/basic}{#k/5}* 你好啊小惡霸。'
               : '<23>{#p/basic}{#k/5}* 你好啊小殺人犯。'
            : '<23>{#p/basic}{#k/0}* 怎麼了，小傢伙？',
      menuPrompt2: () =>
         world.population === 0 || burger()
            ? '<23>{#p/basic}{#k/7}* 還想要點別的嗎？'
            : '<23>{#p/basic}{#k/0}* 還想要點別的嗎？',
      menuPrompt3: '<23>{#p/basic}* ...但是大家都逃走了。',
      note: ['<32>{#p/human}* （但沒有人給你留字條。）'],
      sell1: () =>
         world.runaway
            ? ['<30>{#p/human}* （你從櫃檯後面拿走了2048G。）']
            : world.genocide || world.killed0 || burger()
               ? [
                  '<30>{#p/basic}{#k/7}* ...',
                  ...(SAVE.storage.inventory.size < 8
                     ? [
                        '<30>{#k/4}* 好吧。\n* 給你。',
                        "<30>{#k/5}* 這玩意是獨一無二的，\n  專為你準備的。",
                        "<30>{#p/human}* (You got the Plunderer's Demise.)"
                     ]
                     : [
                        '<30>{#p/basic}{#k/7}* 對於一個想偷東西的人來說，\n  你的物品還蠻充裕。'
                     ])
               ]
               : world.meanie
                  ? ['<30>{#p/basic}{#k/1}* ...', '<30>{#k/4}* ...', '<30>{#k/3}* Excuse me?']
                  : [
                     '<30>{#p/basic}{#k/1}* ...',
                     '<30>{#k/4}* ...',
                     "<30>{#k/6}* You think you're real sly, huh?",
                     "<30>{#k/7}* Hmm...\n* Why don't you try selling that to Bratty and Catty?",
                     '<30>{#k/0}* I\'m sure they\'ll, uh, \"bite.\"'
                  ],
      sell2: () =>
         world.runaway
            ? ['<30>{#p/basic}* 空無一物。']
            : SAVE.data.b.a_state_freesell
               ? ['<30>{#p/basic}{#k/6}* 抱歉，一位殺人犯只能拿一份。']
               : ["<30>{#p/basic}{#k/6}* It's not happening, pal."],
      talk: () =>
         SAVE.data.n.plot === 72
            ? ['Romantic Advice', 'Mettaton', 'Where To Go Next', 'My Future', '離開']
            : [
               ['生活建議', '§fill=#ff0§Taking Charge (NEW)', 'Taking Charge'][
               Math.min(SAVE.data.n.shop_bpants_advice, 2)
               ],
               'Mettaton',
               postSIGMA()
                  ? '停電'
                  : ['我們在哪', '§fill=#ff0§Glyde (NEW)', 'Glyde'][Math.min(SAVE.data.n.shop_bpants_hub, 2)],
               '你的未來',
               '離開'
            ],
      talkPrompt: () =>
         world.population === 0 || burger()
            ? world.bullied && !world.genocide && !burger()
               ? '<09>{#p/basic}{#k/0}聽我說吧，\n小惡霸。'
               : '<09>{#p/basic}{#k/0}聽我說吧，\n小殺人犯。'
            : '<09>{#p/basic}{#k/0}聽我說吧，\n小傢伙。',
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#k/7}* Romantic advice?',
                  "<32>{#k/0}* Little buddy, I've only got one piece of advice when it comes to getting romantic.",
                  "<32>{#k/1}* ... don't even try.",
                  "<32>{#k/4}* When the right person comes along, it'll be as dainty as dancing in the dark.",
                  '<32>{#k/0}* The fat old mole-rat might even like you back.'
               ]
               : world.population === 0 || burger()
                  ? [
                     '<32>{#p/basic}{#k/6}* 生活建議啊...',
                     "<32>{#k/6}* 哎呦，\n  我還以為你在這方面很在行呢。",
                     "<32>{#k/5}* 或許你只是對生活的對立面\n  比較有經驗。"
                  ]
                  : [
                     [
                        "<32>{#p/basic}{#k/6}* Listen up.\n* If you want to get ahead in life, you've got to learn to take charge.",
                        '<32>{#k/4}* My boss pushed me around for way too long, and I wasted way too much of my short life not telling him \"no.\"',
                        '<32>{#k/0}* When I finally stood up to him, well...',
                        '<32>{#k/2}* It did us both some good.'
                     ],
                     [
                        "<32>{#p/basic}{#k/6}* I'll try to make this as simple as possible for you, little buddy.",
                        '<32>* As nice as people are, sometimes they get caught in bad ways of thinking.',
                        '<32>{#k/4}* Short-sightedness.\n* Carelessness.\n* Abuse.',
                        '<33>{#k/4}* The nicest thing you can do for someone like that is to give them a piece of your mind. Tell them how wrong they are and make them think about it.',
                        '<32>{#k/7}* The more you let someone get comfortable with their bad way of life, the more they get stuck in those ways.',
                        "<32>{#k/0}* Don't let people get stuck."
                     ],
                     [
                        "<32>{#p/basic}{#k/1}* I'm not your counselor, pal.",
                        '<32>{#k/7}* ...',
                        '<32>{#k/0}* Sorry.\n* Just... remember my words.'
                     ]
                  ][Math.min(SAVE.data.n.shop_bpants_advice++, 2)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#k/2}* ...',
                  "<32>{#k/4}* I guess I can't make fun of the bastard forever.",
                  "<32>{#k/0}* One day, I'll have to do something new with my life...",
                  '<32>{#k/7}* ... and that day is coming up on me quickly now.',
                  '<32>{#k/6}* Don\'t worry, though.\n* My \"boyish charm\" isn\'t going anywhere ANY time soon.'
               ]
               : SAVE.data.b.killed_mettaton
                  ? ['<32>{#p/basic}{#k/8}* Mettaton。', '<32>{#k/4}* ...', "<32>{#k/6}* Yeah, he's dead."]
                  : (world.genocide || world.bad_robot) && 68 <= SAVE.data.n.plot
                     ? SAVE.data.n.shop_bpants_mtt2++ < 1
                        ? [
                           '<32>{#p/basic}{#k/4}* Mettaton...',
                           "<32>{#k/4}* 我本想罵他來著，但，呃...\n* 既然你殺了他...",
                           "<32>{#k/5}* 我無話可說了。"
                        ]
                        : ['<32>{#p/basic}{#k/5}* ...', "<33>{#k/7}* 我可不打算複述一遍。"]
                     : SAVE.data.n.shop_bpants_mtt1++ < 1
                        ? world.population === 0 || burger()
                           ? [
                              '<32>{#p/basic}{#k/4}* Mettaton...',
                              "<32>{#k/6}* 我本想罵他來著，\n  但和您比的話，他簡直是個聖人。",
                              '<32>{#k/5}* 我想你可以稱之為...\n  一種糟糕透頂的成就。'
                           ]
                           : [
                              '<32>{#p/basic}{#k/4}* Why does it always have to be about him...',
                              "<32>{#k/0}* Yeah, he's a bit of an icon around here.\n* Everybody loves him...",
                              '<32>{#k/6}* Except for yours truly, of course. I spit on him with every breath I take.',
                              "<32>{#k/5}* No, really.\n* I've got a little figurine of him under the counter, and I make sure as much saliva as possible hits his face.",
                              "<32>{#k/4}* You wouldn't BELIEVE the crap he put me through working here...",
                              '<32>{#k/6}* After he got out of my way I gracefully stripped the shop of all the MTT-brand trimmings.',
                              '<32>* Oh, and of course I renamed all the food items.',
                              '<32>{#k/5}* I wanted to rename \"Legendary Hero\" to \"Her Ye Olde Gran\" but I figured that wouldn\'t fly well with the older folks.',
                              '<32>{#k/0}* ...',
                              '<32>{#k/7}* What?\n* Were you expecting me to talk about his business or something?'
                           ]
                        : ['<32>{#p/basic}{#k/5}* ...', "<33>{#k/7}* 我可不打算複述一遍。"],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#k/4}* Where to go, where to go...',
                  "<32>{#k/0}* On the new homeworld, I'd like to start a new shop with that old buddy of mine, Gerson.",
                  "<32>{#k/7}* He said he's content with just doing the finances, and that works for me.",
                  '<32>{#k/0}* ... as long as I get to spend some time with him.'
               ]
               : postSIGMA()
                  ? [
                     '<32>{#p/basic}{#k/7}* 仔細想想，\n  這附近確實開始安靜下來了。',
                     "<32>{#k/6}* Only problem is, I'm too busy enjoying my WORKING electricity.",
                     '<32>{#k/4}* Which may or may not be because I rigged a direct power feed from the CORE a while back.',
                     "<32>{#k/5}* 噓...別告訴其他人。\n  這可是商業秘密。"
                  ]
                  : world.population === 0 || burger()
                     ? [
                        '<32>{#p/basic}{#k/0}* ...',
                        "<32>{#k/0}* 朋友啊，我們在地獄。\n* 無間地獄。",
                        '<32>{#k/1}* ...',
                        "<32>{#k/3}* 啊呀，\n  和你聊天還真有趣不是嗎！？！？"
                     ]
                     : [
                        [
                           '<32>{#p/basic}{#k/6}* Where we are, eh?',
                           '<32>{#k/4}* This place is... a little weird...',
                           '<32>{#k/0}* King Asgore had it built as a way to \"bring monsters together.\"',
                           "<32>{#k/7}* Now it's... just kind of this place that exists.\n* There's food, there's rest, and sometimes they run shows here.",
                           '<32>{#k/6}* Oh, and, this is where they host the OuterNet.\n* Bratty and Catty are in charge of the news.',
                           "<32>{#k/4}* Well, actually, they're in charge of this place as a whole.",
                           "<32>{#k/0}* After Mettaton left, I told them they could take over.\n* Besides, I've got my own thing going for me now...",
                           "<32>{#k/2}* I guess I'm just a little tired.",
                           "<32>{#k/3}* But hey, who has time for THAT when you've got people like GLYDE hanging around, huh!?"
                        ],
                        [
                           '<32>{#p/basic}{#k/6}* Haha... let me tell you about this showboating know-it-all.',
                           '<32>{#k/0}* Back when I worked for Mettaton, I regularly had to make this thing called a \"face steak.\"',
                           '<32>{#k/1}* For the record, that\'s a steak with Mettaton\'s \"fabulous\" face on it.',
                           '<32>{#k/3}* But Glyde?\n* Glyde loved it so much it decided to make its own \"steak enterprise\" by putting ITS face on steaks instead!',
                           "<32>{#k/3}* And, as if that wasn't crazy enough, Glyde BID on me to be its first employee!\n* Like I'm up for auction or something!",
                           "<32>{#k/4}* Of course, Mettaton wasn't going to let me go that easily, so I ended up staying here.",
                           '<32>{#k/0}* In the end, Glyde never got what it wanted, and now it just goes around demanding people join its \"crusade.\"',
                           '<32>{#k/1}* Oh well.\n* If things get really bad, I can just turn off the lights again...',
                           "<32>{#k/7}* Maniacs like that fear the dark because they can't stand not being in control of every last situation they're in."
                        ],
                        [
                           "<32>{#p/basic}{#k/4}* I've told you all I really know about Glyde.",
                           "<32>{#k/7}* Maybe there's something buried somewhere in its past to explain why it acts this way...",
                           "<32>{#k/1}* But that's anyone's guess."
                        ]
                     ][Math.min(SAVE.data.n.shop_bpants_hub++, 2)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  '<32>{#p/basic}{#k/1}* What do I look like, a fortune teller?',
                  "<32>{#k/2}* I have no idea what's in your future.",
                  "<32>{#k/4}* But if I had to guess, it'll be better than your past.",
                  '<32>{#k/7}* From what Asgore was saying, humans never come here for particularly good reasons.',
                  '<32>{#k/0}* Except for that brawny kid.\n* They were just a really big fan of monsters, I guess.'
               ]
               : world.population === 0 || burger()
                  ? world.bullied && !burger()
                     ? [
                        '<32>{#p/basic}{#k/5}* My future, huh?\n* I dunno, little bully...',
                        '<32>{#p/basic}{#k/6}* You tell me.'
                     ]
                     : [
                        '<32>{#p/basic}{#k/5}* Ohhhhh trust me, my little whiny-heinie death-defying slaughter-happy murderer...',
                        "<32>{#k/6}* 我的未來是有保障的。",
                        "<32>{#k/2}* 況且，我的一個老夥計告訴我，\n  我在這裡不會受傷。",
                        "<32>{#k/5}* 你永遠也打不到我。"
                     ]
                  : [
                     '<32>{#p/basic}{#k/0}* MY future?\n* Little buddy...',
                     '<32>{#k/3}* You should be thinking about your future!',
                     '<32>{#k/4}* ...',
                     "<32>{#k/6}* Don't worry, pal.\n* With that rectangular rabble- rouser off my back, things are looking brighter by the day."
                  ]
      ],
      zeroPrompt: '<09>{#p/basic}...'
   },
   n_shop_gossip: {
      exit: [
         {
            b: '<16>{#k/0/0}* Like, see you later!',
            c: '<16>* Like, later and stuff!',
            s: true
         }
      ],
      item: () =>
         adultEvac()
            ? [
               '0G - 太空垃圾',
               SAVE.data.b.item_laser ? '0G - 雷射步槍？' : '0G - 雷射步槍',
               SAVE.data.b.item_visor ? '0G - 戰術護目鏡？' : '0G - 戰術護目鏡',
               SAVE.data.b.item_mystery_key ? '§fill=#808080§---- 售罄 ----' : '0G - 神秘鑰匙',
               '離開'
            ]
            : [
               '5G - 太空垃圾',
               SAVE.data.b.item_laser ? '60G - 雷射步槍？' : '70G - 雷射步槍',
               SAVE.data.b.item_visor ? '60G - 戰術護目鏡？' : '70G - 戰術護目鏡',
               SAVE.data.b.item_mystery_key ? '§fill=#808080§---- 售罄 ----' : '400G - 神秘鑰匙',
               '離開'
            ],
      itemInfo: () => [
         '回復?? HP\n管它是什麼。',
         SAVE.data.b.item_laser
            ? '武器：12攻擊\n(當前攻擊$(x))\n難用但強力。\n仿製品。'
            : '武器：12攻擊\n(當前攻擊$(x))\n難用但強力。',
         SAVE.data.b.item_visor
            ? '防具：12防禦\n(當前防禦$(x))\n更容易瞄準。\n仿製品。'
            : '防具：12防禦\n(當前防禦$(x))\n更容易瞄準。',
         '特殊物品：\n可能領向\n任何地方。'
      ],
      itemPrompt: '<99>{#p/basic}{#k/0/9}{@fill=#d4bbff}You\nshould\nbuy ALL\nour stuff!',
      itemPurchase: [
         "<09>{#p/basic}{#k/1/8}{@fill=#d4bbff}Bratty!\nWe're gonna be rich!",
         '<09>{#p/basic}{#k/0/4}{@fill=#d4bbff}So are you gonna buy it??',
         '<09>{#p/basic}{#k/4/5}{@fill=#d4bbff}You need WAY more money.',
         "<10>{#p/human}（你帶的\n東西\n太多了。）"
      ],
      itemPurchasePrompt: () =>
         adultEvac()
            ? shopper.listIndex === 3
               ? '掛到鑰匙串\n上面嗎？'
               : '偷走嗎？'
            : shopper.listIndex === 3
               ? '花$(x)G買下，\n掛到鑰匙串\n上面嗎？'
               : '花$(x)G\n買它嗎？',
      itemUnavailable: () =>
         adultEvac()
            ? '<09>{#p/basic}空無一物。'
            : "<09>{#p/basic}{#k/5/1}{@fill=#d4bbff}We're all sold out!\nMee-YOW!",
      menu: () =>
         adultEvac() ? ['拿取', '偷竊', '閱讀', '離開'] : ['購買', world.meanie ? '偷竊' : '出售', '交談', '離開'],
      menuPrompt1: '<23>{#p/basic}{#k/0/0}{@fill=#ffbbdc}* Check it out!',
      menuPrompt2: '<23>{#p/basic}{#k/0/0}{@fill=#ffbbdc}* No rush or anything.',
      menuPrompt3: () =>
         world.bulrun ? '<23>{#p/basic}* ...但是大家都逃走了。' : '<23>{#p/basic}* ...但是誰也沒有來。',
      note: () => [
         "<32>{#p/basic}* 你找到幾張便條。",
         {
            b: '<16>* 「如果你看到了\n   這個...」',
            c: world.bullied
               ? '<16>* 「那麼，對於你\n   這超討厭的怪胎\n   來說，有個\n   壞訊息！」'
               : '<16>* 「那麼，對於你\n   這超邪惡的怪胎\n   來說，有個\n   壞訊息！」'
         },
         ...(SAVE.data.n.plot === 72 && !world.runaway
            ? [
               {
                  b: '<16>* \"We\'re not gonna come back here after you, like...\"',
                  c: '<16>* \"... beat everyone up and stuff.\"'
               },
               {
                  b: '<16>* \"The new homeworld\'s calling, and it\'s gonna make us...\"',
                  c: '<16>* \"... super duper rich!\"'
               },
               {
                  b: '<16>* \"So, we don\'t, like, even need that shop anymore.\"',
                  c: '<16>* \"Yeah!!\"\n* \"Take whatever you want!\"'
               },
               {
                  b: '<16>* \"Anyway, these gel pens are running out, so...\"',
                  c: '<16>* \"That\'s about all we can say.\"'
               },
               {
                  b: '<16>* \"Not that you\'d care!\"',
                  c: '<16>* 「喵哈哈！！！」'
               },
               { b: '<16>* 「以上，\n   Bratty <3」', c: '<16>* 「以上，\n   Catty <3」' }
            ]
            : [
               ...[
                  [
                     !world.badder_lizard
                        ? {
                           b: '<16>* \"We\'re not gonna stick around while you just...\"',
                           c: '<16>* \"... beat everyone up and stuff.\"'
                        }
                        : {
                           b: '<16>* 「Alphys來過\n   這裡，並帶我們\n   去了...」',
                           c: '<16>* 「一個特別特別\n   安全的地方！」'
                        },
                     {
                        b: '<16>* 「但在那之前，\n   我們得用完這些\n   中性筆。」',
                        c: !world.badder_lizard
                           ? '<16>* 「是啊，我們可\n   不想浪費筆！」'
                           : '<16>* 「是啊，\n   冷靜點，\n   Alphys!」\n* 「我們可\n   不想浪費筆！」'
                     },
                     {
                        b: '<16>* 「還有，\n   想都別想偷\n   我們的東西。」',
                        c: '<16>* 「是啊，\n   你個討厭鬼！」\n* 「別碰我們的\n   垃圾！」'
                     },
                     {
                        b: '<16>* 「具體來講，\n   是老舊的\n   二手垃圾。」',
                        c: '<16>* 「是的，我們的\n   二手古董店\n   價值連城!」'
                     }
                  ],
                  [
                     {
                        b: '<16>* 「Mettaton\n  來了這兒，\n  把大傢伙\n  都帶到了...」',
                        c: '<16>* 「一個特別特別\n   安全的地方！」'
                     },
                     { b: '<16>* 「不過Alphys...」', c: '<16>* 「Alphys。」' },
                     { b: '<16>* 「她看起來...」', c: '<16>* \"...超級無敵生氣。\"' },
                     {
                        b: '<16>* 「以前從沒見過\n  她這樣。」',
                        c: '<16>* 「以前從沒見過\n  她擺那副臭臉。」',
                        s: true
                     },
                     { b: '<16>* 「而且，\n  Mettaton...」', c: '<16>* 「...也不太高興。」' },
                     {
                        b: '<16>* 「他說要\n  給你一記耳光。」',
                        c: '<16>* 「他說要\n  踹爛你的屁股！」',
                        s: true
                     },
                     { b: '<16>* 「還有，\n  他有沒有說...\n  要滅了你來著？」', c: '<16>* 「呃...\n  記不清了。」' },
                     { b: '<16>* 「反正，我要是你，\n  這會都嚇尿褲子了。」', c: '<16>* \"God, TELL me about it...\"' }
                  ]
               ][Math.max(world.bad_lizard - 2, 0)],
               {
                  b: '<16>* 「總之，你是個\n   徹頭徹尾的\n   廢物。」',
                  c: '<16>* 「對！」\n* 「廢物！！」\n* 「喵哈哈！！！」'
               },
               { b: '<16>* 「以上，\n   Bratty <3」', c: '<16>* 「以上，\n   Catty <3」', s: true }
            ])
      ],
      sell1: () =>
         adultEvac()
            ? ['<30>{#p/human}* （你從收銀機裡拿走了5G。）']
            : world.meanie
               ? [
                  {
                     b: '<16>{#k/2/6}* Um, excuse me?',
                     c: '<16>{#k/2/6}* Like, what are you doing?'
                  },
                  {
                     b: "<16>{#k/1/0}* We don't hand out stuff for free.",
                     c: '<16>{#k/1/0}* Yeah, go steal somewhere else!'
                  }
               ]
               : SAVE.storage.inventory.has('glamburger') // NO-TRANSLATE

                  ? [
                     {
                        b: '<16>{#k/7/0}* Oh, wow.\n* You actually got one of those new \"Slamburgers.\"',
                        c: "<16>{#k/2/2}* GIMME GIMME!!\nI'll take your entire stock!!"
                     },
                     {
                        b: '<16>{#k/4/6}* God, Catty.\n* Try to have some self- control.',
                        c: '<16>{#k/4/4}* Sorry...'
                     },
                     {
                        b: "<16>{#k/3/5}* 'Cause they OBVIOUSLY brought that for ME.",
                        c: '<16>{#k/5/8}* NOOO WAYY!!!'
                     }
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        {
                           b: "<16>{#k/0/6}* Thanks, but we, like, don't really need anything.",
                           c: ''
                        },
                        {
                           b: '',
                           c: "<16>{#k/0/0}* Well, maybe you're right."
                        }
                     ]
                     : [
                        {
                           b: "<16>{#k/0/0}* Thanks, but we, like, don't really need anything.",
                           c: '<16>{#k/0/8}* Oh my god, can you get us those new \"Slamburgers?\"'
                        },
                        {
                           b: "<16>{#k/2/8}* We don't.\n* Really need.\n* Anything.",
                           c: "<16>{#k/1/7}* Wait! I'll pay 1000G if you get Mettaton to autograph my butt!"
                        }
                     ],
      sell2: () =>
         adultEvac()
            ? ['<30>{#p/basic}* 空無一物。']
            : world.meanie
               ? [
                  {
                     b: '<16>{#k/2/4}* ...',
                     c: '<16>{#k/2/4}* ...'
                  },
                  {
                     b: "<16>{#k/5/1}* We'd kick you out if this wasn't so silly.",
                     c: "<16>{#k/5/1}* We'd kick you out if you weren't so cute.",
                     s: true
                  }
               ]
               : [
                  {
                     b: '<16>{#k/1/0}* If you really want us to have something...',
                     c: '<16>{#k/1/2}* ... you could drop it off at the pickup location in Aerialis!'
                  },
                  {
                     b: '<16>{#k/2/0}* But how would they know where it is?',
                     c: "<16>{#k/2/4}* OMG you're right... they probably don't..."
                  },
                  {
                     b: "<16>{#k/5/8}* Guess you'll have to find it for yourself!",
                     c: "<16>* Guess you'll need to look for it yourself!",
                     s: true
                  }
               ],
      talk: () =>
         SAVE.data.n.plot === 72
            ? ['Is Everyone Okay', 'Godlike Being', 'OuterNet Shutdown', 'The Humans', '離開']
            : [
               'About You Two',
               SAVE.data.n.plot < 68 ? 'Thrift Shop' : SAVE.data.b.killed_mettaton ? 'Mettaton' : 'Grand Finale',
               ['Area Ownership', '§fill=#ff0§Burgie (NEW)', '堡堡'][Math.min(SAVE.data.n.shop_gossip_hub, 2)],
               ['Alphys', '§fill=#ff0§Royal Scientist (NEW)', '§fill=#ff0§Asgore (NEW)', 'Asgore'][
               Math.min(SAVE.data.n.shop_gossip_alphys, 3)
               ],
               '離開'
            ],
      talkPrompt: "<09>{#p/basic}{#k/0/0}{@fill=#ffbbdc}So, like, what's up?",
      talkText: [
         () =>
            SAVE.data.n.plot === 72
               ? [
                  {
                     b: '<16>{#k/4/6}* Huh?',
                     c: '<16>{#k/4/4}* Are we okay?'
                  },
                  {
                     
                     b: '<16>{#k/2/6/0}',
                     c: '',
                     s: true
                  },
                  '{*}{#s/meow}{%}',
                  {
                     b: "<16>{#k/6/8}* Mmm hm hm, you're too cute.",
                     c: "<16>* Of course we're okay!",
                     s: true
                  },
                  '{*}{#k/0/0/1}{%}'
               ]
               : [
                  {
                     b: "<16>{#k/0/0}* I'm Bratty, and this is my best friend, Catty.",
                     c: "<16>* I'm Catty, and this is my best friend, Bratty.",
                     s: true
                  },
                  {
                     
                     b: '<16>{#k/2/6/0}',
                     c: '',
                     s: true
                  },
                  '{*}{#s/meow}{%}',
                  {
                     b: '<16>{#k/5/8}* Mmm hm hm!',
                     c: '<16>* 喵哈哈！',
                     s: true
                  },
                  '{*}{#k/0/0/1}{%}'
               ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  {
                     b: '<16>{#k/0/6}* It was like... woah.',
                     c: '<16>{#k/0/2}* No it was like... OH MY GOD.'
                  },
                  {
                     b: '',
                     c: '<16>{#k/0/1}* And if I ever met them...',
                     s: true
                  },
                  {
                     b: "<16>{#k/2/6}* Don't tell me.",
                     c: '',
                     s: true
                  },
                  {
                     b: "<16>{#k/5/8}* You'd totally just hang out them!",
                     c: "<16>* I'd totally date them!",
                     s: true
                  },
                  {
                     b: '<16>{#k/6/0}* Oh. Right. Of course you would.',
                     c: "<16>{#k/6/7}* Who WOULDN't want to date a being with godlike powers?"
                  }
               ]
               : SAVE.data.n.plot < 68
                  ? [
                     {
                        b: "<16>{#k/0/6}* It's like, a second-hand store.",
                        c: "<16>{#k/0/2}* No it's like, a BARGAIN outlet!"
                     },
                     {
                        b: '',
                        c: '<16>{#k/2/9}* And get a load of our GENIUS business model...',
                        s: true
                     },
                     {
                        b: '<16>{#k/0/6}* People send us their old junk...',
                        c: '',
                        s: true
                     },
                     {
                        b: '<16>{#k/5/8}* ... so we can sell it like new again!',
                        c: '<16>* ... so we can sell it like new again!',
                        s: true
                     },
                     {
                        b: "<16>{#k/0/1}* You won't find a shop this sick anywhere else.",
                        c: "<16>* You won't find stuff like ours anywhere else.",
                        s: true
                     }
                  ]
                  : SAVE.data.b.killed_mettaton
                     ? [
                        {
                           b: '<16>{#k/4/4}* Mettaton, right?',
                           c: '<16>* Mettaton, huh?',
                           s: true
                        },
                        {
                           b: '<16>{#k/2/6/0}',
                           c: '',
                           s: true
                        },
                        {
                           b: "<16>{#k/7/5}* We don't really want to talk about him.",
                           c: "<16>{#k/7/5}* He's WAY better than you."
                        }
                     ]
                     : [
                        {
                           b: '<16>{#k/1/7}* Of course.',
                           c: '<16>* OMG yes!',
                           s: true
                        },
                        {
                           b: '<16>{#k/0/0}* You and Mettaton really put on a performance!',
                           c: '<16>{#k/0/2}* Yeah, you guys really knocked it outta the park!'
                        },
                        {
                           b: '<16>{#k/4/6}* I wish I could move like that on stage...',
                           c: '',
                           s: true
                        },
                        {
                           b: '',
                           c: "<16>{#k/0/8}* You wanna see some moves?\n* I've got moves!",
                           s: true
                        },
                        {
                           b: '<16>{#k/1/8}* I could totally set up a dance off for you guys.',
                           c: "<16>{#k/2/7}* You should totally invite the human while you're at it!"
                        },
                        {
                           b: "<16>{#k/0/0}* ... we'll see.",
                           c: '',
                           s: true
                        }
                     ],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  {
                     b: '<16>{#k/0/6}* Yeah, it uses WAY too much power now.',
                     c: "<16>{#k/0/5}* The force field was the CORE's main energy source."
                  },
                  {
                     b: '<16>{#k/2/6}* But when we get to the new homeworld...',
                     c: '<16>* But when we settle into our new home...',
                     s: true
                  },
                  {
                     b: '',
                     c: "<16>{#k/0/1}* We'll be back in business.",
                     s: true
                  },
                  {
                     b: '<16>{#k/2/6}* Running a new OuterNet could make us a lot of money...',
                     c: '',
                     s: true
                  },
                  {
                     b: '',
                     c: '<16>{#k/4/0}* We could buy a lifetime supply of Slamburgers!',
                     s: true
                  },
                  {
                     b: '<16>{#k/0/6}* Catty.\n* Why is that your priority.',
                     c: "<16>{#k/0/7}* Why WOULDN'T it be my priority!"
                  }
               ]
               : [
                  [
                     {
                        b: "<16>{#k/2/1}* Oh yeah, we're technically the owners here.",
                        c: '<16>* Oh yeah, we practically RULE this zone.', 
                        s: true
                     },
                     ...(SAVE.data.b.killed_mettaton
                        ? [
                           {
                              b: '<16>{#k/2/6}* So like, originally...',
                              c: '<16>* ... yeah?'
                           },
                           {
                              b: '<16>{#k/0/5}* Um...\n* Never mind.',
                              c: ''
                           },
                           {
                              b: '',
                              c: "<16>{#k/6/8}* Oh, gotcha.\n* Yeah, let's not bring THAT up!"
                           },
                           {
                              b: "<16>{#k/1/0}* Anyway, Burgie's the one who put us in charge.",
                              c: "<16>* We haven't questioned it since."
                           }
                        ]
                        : [
                           {
                              b: '<16>{#k/2/1}* So like, originally, Mettaton was in charge here, right?',
                              c: '<16>{#k/1/1}* Totally in charge.'
                           },
                           {
                              b: '<16>{#k/2/5}* But then...',
                              c: '<16>* Then...'
                           },
                           {
                              b: '<16>{#k/4/4}* Burgie decided to \"overthrow\" him.',
                              c: '',
                              s: true
                           },
                           {
                              b: '',
                              c: '<16>{#k/2/4}* By having, like, a really strong word with him or something.',
                              s: true
                           },
                           {
                              b: '<16>{#k/2/6/0}',
                              c: '',
                              s: true
                           },
                           {
                              b: '<16>{#k/2/6}* I think he blackmailed him.',
                              c: '<16>* I think he had an accomplice.',
                              s: true
                           },
                           {
                              b: '<16>{#k/1/0/1}* Anyway, he said we could be the new owners.',
                              c: "<16>* We haven't questioned it since."
                           }
                        ])
                  ],
                  [
                     {
                        b: '<16>{#k/2/0}* Burgie?',
                        c: '',
                        s: true
                     },
                     {
                        b: "<16>{#k/0/5}* Yeah, he's alright.",
                        c: "<16>* Eh, he's cool.",
                        s: true
                     },
                     {
                        b: '<16>{#k/2/6}* He used to act all weird around us, but...',
                        c: '<16>* ... he kinda keeps to himself now.'
                     },
                     {
                        b: '<16>{#k/0/5}* Like, the last time we heard from him...',
                        c: '',
                        s: true
                     },
                     {
                        b: '<16>{#k/0/5}* He said he was \"done chasing fantasies\" or something.',
                        c: '<16>* He said he was \"done seeking love\" or whatever.',
                        s: true
                     },
                     {
                        b: '<16>{#k/2/6}* Kinda sounds like...',
                        c: '<16>* Sorta feels like...',
                        s: true
                     },
                     {
                        b: '<16>{#k/5/8}* He TOTALLY saw us as a fantasy.',
                        c: '<16>* He DEFINITELY had a crush on us.',
                        s: true
                     },
                     {
                        b: '',
                        c: '<16>{#k/4/5}* Too bad he never asked us out, huh?',
                        s: true
                     },
                     {
                        b: '<16>{#k/2/5}* Catty, we would have said no.',
                        c: '',
                        s: true
                     },
                     {
                        b: '',
                        c: '<16>{#k/2/1}* ... or would we have said yes?',
                        s: true
                     },
                     {
                        b: '<16>{#k/4/1}* No.',
                        c: '',
                        s: true
                     },
                     {
                        b: '',
                        c: '<16>{#k/4/8}* Yes.',
                        s: true
                     },
                     {
                        b: '<16>{#k/1/8}* No.',
                        c: '',
                        s: true
                     },
                     {
                        b: '',
                        c: '<16>{#k/1/7}* YES!',
                        s: true
                     },
                     {
                        b: '<16>{#k/4/7}* ...',
                        c: '',
                        s: true
                     },
                     {
                        b: "<16>{#k/5/6}* Catty, don't you have ANY standards?",
                        c: '',
                        s: true
                     },
                     {
                        b: '',
                        c: '<16>{#k/5/8}* Nope!!!',
                        s: true
                     }
                  ],
                  [
                     {
                        b: "<16>{#k/0/0}* There's not much more to say about Burgie, but-",
                        c: '<16>{#k/0/8}* ... no, wait!\n* Can you go ask him to make us some food?'
                     },
                     {
                        b: '<16>{#k/4/8}* Catty!',
                        c: '',
                        s: true
                     },
                     {
                        b: '',
                        c: "<16>{#k/4/1}* What?\n* You know I'd take it from a bad boy like him any day.",
                        s: true
                     },
                     {
                        b: '<16>{#k/2/4/0}',
                        c: '',
                        s: true
                     },
                     '{*}{#s/meow}{%}',
                     {
                        b: '<16>{#k/2/8}* You did not just say that out loud.',
                        c: '<16>* Mee-YOW!',
                        s: true
                     },
                     '{*}{#k/0/0/1}{%}'
                  ]
               ][Math.min(SAVE.data.n.shop_gossip_hub++, 2)],
         () =>
            SAVE.data.n.plot === 72
               ? [
                  {
                     b: '<16>{#k/2/0}* The humans?',
                     c: '',
                     s: true
                  },
                  {
                     b: '',
                     c: '<16>{#k/0/0}* Oh yeah, Alphys totally had us adopt one.',
                     s: true
                  },
                  {
                     b: "<16>{#k/2/5}* I mean, they're kind of asleep right now, but...",
                     c: '',
                     s: true
                  },
                  {
                     b: '',
                     c: "<16>{#k/7/5}* ... they'll wake up eventually.",
                     s: true
                  },
                  {
                     b: '<16>{#k/2/6}* I wonder what they\'ll have to say about that \"archive\" thing...',
                     c: '<16>{#k/2/6}* Yeah, THAT thing...'
                  },
                  {
                     b: '',
                     c: "<16>{#k/2/4}* Isn't that where Asgore was keeping ALL the humans?",
                     s: true
                  },
                  {
                     b: '<16>{#k/0/0}* How can you keep a secret like that.',
                     c: '<16>* How was that even POSSIBLE!',
                     s: true
                  }
               ]
               : [
                  [
                     { b: '<16>{#k/4/4}* Oh my god.\n* Alphys.', c: '<16>* Oh my god, ALPHYS.', s: true },
                     {
                        b: '<16>{#k/5/8}* She used to live in our housing spire!',
                        c: '<16>* She was like a big sister!',
                        s: true
                     },
                     {
                        b: '<16>{#k/2/6}* I mean, like, if your big sister...',
                        c: '<16>{#k/2/2}* ... takes you on rip- roaring interstellar trash hunts!'
                     },
                     {
                        b: '<16>{#k/0/0}* She showed us the coolest ways to find stuff.',
                        c: '<16>* She built up a WICKED sci-fi collection.',
                        s: true
                     },
                     {
                        b: '<16>{#k/2/4}* Then she became the royal scientist...',
                        c: '',
                        s: true
                     },
                     {
                        b: '',
                        c: "<16>{#k/0/5}* ... she doesn't really have time for trash-hunting anymore.",
                        s: true
                     }
                  ],
                  [
                     {
                        b: '<16>{#k/0/6}* So Alphys has always been, like...',
                        c: '<16>{#k/0/0}* ... super duper smart.'
                     },
                     { b: '<16>{#k/2/4}* Like...', c: '<16>* UNNATURALLY smart.' },
                     {
                        b: '<16>{#k/0/0}* Like, she can calculate a derivative in her head...',
                        c: '<16>{#k/0/2}* ... in five seconds FLAT!'
                     },
                     {
                        b: "<16>{#k/0/0}* It's MEGA impressive and all...",
                        c: '',
                        s: true
                     },
                     {
                        b: '<16>{#k/2/5}* ... but as a result, she struggles with her impulses sometimes.',
                        c: '',
                        s: true
                     },
                     {
                        b: '',
                        c: '<16>{#k/1/6}* I remember that time she called in half the Royal Guard...',
                        s: true
                     },
                     {
                        b: '',
                        c: '<16>{#k/5/4}* ... when she thought she saw some \"interesting trash.\"',
                        s: true
                     },
                     {
                        b: "<16>{#k/2/6}* It's like...",
                        c: "<16>* She doesn't process things the way most people do."
                     },
                     {
                        b: "<16>{#k/5/8}* But we love her for that, don't we?",
                        c: "<16>* But we still think she's A-MAZ-ING!",
                        s: true
                     },
                     {
                        b: '<16>{#k/4/0}* So like... OBVIOUSLY Asgore made her the royal scientist.',
                        c: '<16>{#k/0/2}* Oh, for sure!'
                     }
                  ],
                  [
                     {
                        b: '<16>{#k/0/0}* Oh right, THAT goofy goober.',
                        c: '<17>{#k/0/8}* Oh yeah, THAT furry fuzzball!',
                        s: true
                     },
                     {
                        b: "<16>{#k/2/0}* So like, here's the thing about Asgore...",
                        c: "<16>* ... he's one of the NICEST guys you'll ever meet."
                     },
                     ...[
                        [
                           {
                              b: '<16>{#k/2/0}* But, at the same time...',
                              c: '<16>{#k/2/4}* ... the stuff everyone wants him to do...'
                           },
                           {
                              b: "<16>{#k/4/5}* ... it's kind of gross.",
                              c: "<16>* ... it's just plain awful.",
                              s: true
                           },
                           {
                              b: '<16>{#k/2/6}* I heard Undyne lobbied to expand the Royal Guard.',
                              c: "<16>{#k/2/6}* Yeah, didn't Asgore, like, not even want one to begin with?"
                           }
                        ],
                        [
                           {
                              b: '<16>{#k/2/0}* But, at the same time...',
                              c: "<16>{#k/2/4}* ... the stuff you've been up to out there..."
                           },
                           {
                              b: "<16>{#k/4/5}* ... well, it's making his job a little tougher.",
                              c: "<16>* ... well, it's making his life a little harder.",
                              s: true
                           },
                           {
                              b: '<16>{#k/2/6}* Like...',
                              c: "<16>{#k/2/6}* ... maybe try NOT to kill anyone else, y'know?"
                           }
                        ]
                     ][world.bad_lizard],
                     {
                        b: '<16>{#k/3/6}* Gosh.\n* I really wanna give him a hug right now.',
                        c: '<16>{#k/3/2}* Yeah, we should TOTALLY squeeze the life outta him later!'
                     },
                     {
                        b: '<16>{#k/4/5/0}* ...',
                        c: '<16>* ...',
                        s: true
                     },
                     '{*}{#s/meow}{%}',
                     {
                        b: '<16>{#k/5/8}* Catty, no!',
                        c: '<16>* 喵哈哈！',
                        s: true
                     },
                     '{*}{#k/0/0/1}{%}'
                  ],
                  [
                     [
                        {
                           b: "<16>{#k/0/0}* Hey, there's no need to be afraid of him.",
                           c: '',
                           s: true
                        },
                        {
                           b: '',
                           c: "<16>{#k/0/1}* Yeah, he's WAY too adorable for that.",
                           s: true
                        },
                        {
                           b: '<16>{#k/5/1}* Way too adorable!',
                           c: '',
                           s: true
                        }
                     ],
                     [
                        {
                           b: "<16>{#k/0/0}* Hey, I'm sure he'll understand why you did what you did.",
                           c: '',
                           s: true
                        },
                        {
                           b: '',
                           c: "<16>{#k/0/2}* Yeah, he's like, Asgore after all!",
                           s: true
                        },
                        {
                           b: "<16>{#k/4/6}* It's basically his job.",
                           c: '',
                           s: true
                        }
                     ]
                  ][world.bad_lizard]
               ][Math.min(SAVE.data.n.shop_gossip_alphys++, 3)]
      ],
      zeroPrompt: '<09>{#p/basic}...'
   },

   s_save_aerialis: {
      a_start: {
         name: '空境 - 實驗室',
         text: () =>
            SAVE.data.n.plot < 65
               ? ['<32>{#p/human}* （皇家實驗室就在眼前，\n  這使你充滿了決心。）']
               : SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/human}* (Knowing most of your journey has been recorded from inside the Royal Lab...)',
                     '<32>* (The thought fills you with determination.)'
                  ]
                  : [
                     '<32>{#p/human}* (Knowing your every move is being recorded from inside the Royal Lab...)',
                     '<32>* (The thought fills you with determination.)'
                  ]
      },
      a_path3: {
         name: '空境 - 升降門',
         text: ['<32>{#p/human}* （從一個地方\n  傳送到另一個地方\n  使你充滿了決心。）']
      },
      a_elevator1: {
         name: '空境 - 電梯右一層',
         text: () =>
            SAVE.data.n.plot < 65
               ? ['<32>{#p/human}* （用爆炸來飛渡穿行，\n  這使你充滿了決心。）']
               : SAVE.data.n.plot === 72
                  ? [
                     '<32>{#p/human}* (Despite the fact you might never get to use a jetpack again...)',
                     "<32>{#p/human}* (The adventures you've had on the outpost as a whole fill you with determination.)"
                  ]
                  : [
                     '<32>{#p/human}* (Despite the fact you might never get to use a jetpack again...)',
                     "<32>{#p/human}* (The adventures you've had thus far fill you with determination.)"
                  ]
      },
      a_mettaton2: {
         name: '空境 - 二號舞臺',
         text: () =>
            SAVE.data.n.plot < 65
               ? SAVE.data.b.a_state_hapstablook
                  ? [
                     '<32>{#p/human}* (Pondering the backstory of a certain TV superstar fills you with determination.)'
                  ]
                  : ["<32>{#p/human}* （Mettaton這番荒唐的胡鬧\n  使你充滿了決心。）"]
               : SAVE.data.n.plot < 68
                  ? ['<32>{#p/human}* (Taking a step back before your upcoming performance fills you with determination.)']
                  : world.bad_robot
                     ? ['<32>{#p/human}* (Reflecting on your road to conflict fills you with determination.)']
                     : SAVE.data.b.killed_mettaton
                        ? ['<32>{#p/human}* (Reflecting on such an anti- climactic ending fills you with determination.)']
                        : SAVE.data.b.a_state_hapstablook
                           ? ['<32>{#p/human}* (Knowing how far Mettaton has come fills you with determination.)']
                           : ['<32>{#p/human}* (Reflecting on your road to superstardom fills you with determination.)']
      },
      a_split: {
         name: '空境 - 噴泉',
         text: () =>
            SAVE.data.n.plot < 65
               ? SAVE.data.b.a_state_hapstablook
                  ? ["<32>{#p/human}* (The anticipation of Mettaton's intervention fills you with determination.)"]
                  : ['<32>{#p/human}* （這座建在荒無人煙的地方的噴泉\n  使你充滿了決心。）']
               : SAVE.data.n.plot < 68
                  ? ['<32>{#p/human}* (Gazing upon this fountain once again fills you with determination.)']
                  : world.bad_robot || SAVE.data.b.killed_mettaton
                     ? [
                        '<32>{#p/human}* (The punch in the fountain has turned bitter.)',
                        '<32>* (This, of course, fills you with determination.)'
                     ]
                     : SAVE.data.b.a_state_hapstablook
                        ? [
                           '<32>{#p/human}* (The punch in the fountain has turned savory.)',
                           '<32>* (This, of course, fills you with determination.)'
                        ]
                        : [
                           '<32>{#p/human}* (The punch in the fountain tastes the same as before.)',
                           '<32>* (This, of course, fills you with determination.)'
                        ]
      },
      a_aftershow: {
         name: '空境 - 休閒迴廊',
         text: () =>
            SAVE.data.b.ubershortcut
               ? ['<32>{#p/human}* (Taxi rides to unfamiliar places fill you with determination.)']
               : 68 <= SAVE.data.n.plot
                  ? ['<32>{#p/human}* (Returning to this corner of corny comforts fills you with determination.)']
                  : SAVE.data.b.a_state_hapstablook
                     ? ["<32>{#p/human}* (Learning Mettaton's backstory fills you with determination.)"]
                     : ['<32>{#p/human}* （那場過於戲劇化的音樂劇\n  使你充滿了決心。）']
      },
      a_core_entry1: {
         name: '空境 - 核心',
         text: ['<32>{#p/human}* (The cold and computerized aesthetic in this area fills you with determination.)']
      },
      a_core_checkpoint: {
         name: '核心 - 維護區',
         text: () =>
            SAVE.data.b.ubershortcut
               ? ['<32>{#p/human}* (The air is calm and peaceful, filling you with determination.)']
               : SAVE.data.n.plot < 68
                  ? ["<32>{#p/human}* (The anticipation of Mettaton's grand finale fills you with determination.)"]
                  : SAVE.data.n.plot === 72
                     ? [
                        '<32>{#p/human}* （核心的能量即將耗竭...）',
                        '<32>{#p/human}* （這使你充滿了決心。）'
                     ]
                     : [
                        '<32>{#p/human}* (The thought of unnecessarily backtracking to the CORE...)',
                        '<32>{#p/human}* （這使你充滿了決心。）'
                     ]
      }
   }
};


// END-TRANSLATE
