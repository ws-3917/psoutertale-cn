import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosTyper } from '../../../code/systems/storyteller';

const cjk = /[\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF]/;
const cjk2latin =
   /([\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])([^/=}\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF]|$)/g;
const latin2cjk =
   /(^|[^/={\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])([\u2000-\u221F\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF00-\uFFFF])/g;

// START-TRANSLATE


export const LANGUAGE = "en_US";

export default {
   cellInventoryX: 9,
   cellBoxX: -2,
   cellFinishX: 24,
   footerX: 0,
   itemEquipX: 0,
   itemUseX: 0,
   itemInfoX_equip: -3,
   itemInfoX_use: 4,
   itemDropX_equip: 0,
   itemDropX_use: 0,
   loadContinueX: 0,
   loadObserveX: 4,
   loadLVX: 8,
   loadResetX: 13,
   loadSettingsX: 1,
   loadTimeX: 0,
   loadTrueResetX: 16,
   nameChoiceCameos: <CosmosKeyed<string>>{
      // no names
      '': 'You must choose a name.',
      no: 'No?',

      // meta names
      bully: 'Hm...?',
      flirt: 'Hm...?',
      geno: 'Hm...?',
      mercy: 'Hm...?',
      murder: 'Hm...?',
      paci: 'Hm...?',
      maybe: 'Maybe?',
      yes: 'Yes?',

      // mood names
      afraid: 'Take heart.\nThere is nothing to be afraid of here.',
      amused: 'A light-hearted spirit will serve you well on your journey.',
      angry: 'Take heart.\nYour frustrations are behind you now.',
      angsty: 'Take heart.\nThe story is yours, no matter what you feel.',
      antsy: 'May tranquility come upon you as you embark on your journey.',
      bored: 'Take heart.\nYour story is as interesting as you make it.',
      brainy: 'May your quality of speech translate to action on your journey.',
      brave: 'A courageous heart will serve you well on your journey.',
      brazen: 'A courageous heart will serve you well on your journey.',
      calm: 'A sense of serenity will do you wonders on your journey.',
      clever: 'May your ingenuity surpass the challenges on your journey.',
      cocky: 'A confident mindset will take you far on your journey.',
      crafty: 'May your inginuity surpass the challanges on your journey.',
      crazy: 'May balance come upon you as you embark on your journey.',
      daring: 'A courageous heart will serve you well on your journey.',
      dizzy: 'May balance come upon you as you embark on your journey.',
      dumb: 'Take heart.\nThere is much to be learned on the road ahead.',
      edgy: 'May the tapestry of chaos and order satisfy you on your journey.',
      elated: 'A light-hearted spirit will serve you well on your journey.',
      empty: 'May your story gain meaning in this cocoon amidst the darkness.',
      flirty: 'May the experience be as playful as you desire.',
      giddy: 'A light-hearted spirit will serve you well on your journey.',
      goofy: 'A light-hearted spirit will serve you well on your journey.',
      greedy: 'May the experience be as excessive as you desire.',
      guilty: 'Take heart.\nYou have nothing to feel ashamed of now.',
      happy: 'A light-hearted spirit will serve you well on your journey.',
      hollow: 'May your story gain meaning in this cocoon amidst the darkness.',
      humble: 'A temperate ego will take you far on your journey.',
      hungry: 'May the experience provide the sustenance you require.',
      insane: 'May balance come upon you as you embark on your journey.',
      irate: 'Take heart.\nYour frustrations are behind you now.',
      jaded: 'May your story bring forth the emotion you strive to feel.',
      lazy: 'May your choices be as effortless as they come.',
      lively: 'A light-hearted spirit will serve you well on your journey.',
      livid: 'Take heart.\nYour frustrations are behind you now.',
      lonely: 'Take heart.\nThere is much companionship to be had here.',
      lucky: 'May your fortune carry you forward on your journey.',
      mad: 'Take heart.\nYour frustrations are behind you now.',
      manic: 'May balance come upon you as you embark on your journey.',
      meek: 'A temperate ego will take you far on your journey.',
      modest: 'A temperate ego will take you far on your journey.',
      nervy: 'May tranquility come upon you as you embark on your journey.',
      moody: 'Take heart.\nThe story is yours, no matter what you feel.',
      numb: 'May your story bring forth the emotion you strive to feel.',
      proud: 'A confident mindset will take you far on your journey.',
      rowdy: 'May the tapestry of chaos and order please you on your journey.',
      sad: 'Take heart.\nYour story is as uplifting as you make it.',
      sane: 'May your stability provide a solid foundation on your journey.',
      sassy: 'May the experience be as playful as you desire.',
      sated: 'May the experience only add to your state of satisfaction.',
      scared: 'Take heart.\nThere is nothing to be afraid of here.',
      serene: 'A sense of serenity will do you wonders on your journey.',
      shy: 'May the experience be as comforting as you desire.',
      silly: 'A light-hearted spirit will serve you well on your journey.',
      sleepy: 'May the experience provide the energy you require.',
      smug: 'A confident mindset will take you far on your journey.',
      sorry: 'Take heart.\nYou have nothing to feel ashamed of now.',
      spry: 'May your overflowing energy power you through your journey.',
      steady: 'May your stability provide a solid foundation on your journey.',
      stupid: 'Take heart.\nThere is much to be learned on the road ahead.',
      timid: 'Take heart.\nThere is nothing to be afraid of here.',
      tired: 'May the experience provide the energy you require.',
      unruly: 'May the tapestry of chaos and order please you on your journey.',
      wacky: 'A light-hearted spirit will serve you well on your journey.',
      witty: 'May your quality of speech translate to action on your journey.',
      zen: 'May your stability provide a solid foundation on your journey.',

      // historical figures
      erogot: 'I am honored by your choice.',
      roman: 'Let the experiment begin.',
      thomas: 'Let the experiment begin.',

      // humans
      chara: 'The true name.',
      frisk: 'This name is incorrect.',

      // outlands
      blooky: "............\n(They're powerless to stop you.)",
      dummy: "............\n(It's not much for conversation.)",
      lurky: 'Hello.',
      mushy: 'Saddle up!',
      napsta: "............\n(They're powerless to stop you.)",
      torie: 'Well... I suppose that works...',
      toriel: 'I think you should think of your own name, my child.',
      twink: 'Really...',
      twinkl: 'Nice try, idiot.',
      twinky: 'Nice try, idiot.',
      walker: 'Don\'t you mean "Eyewalker?"',

      // starton
      astro: 'Check out my antenna!',
      cdrake: 'Guh huh huh, nice one.',
      chilly: 'Guh huh huh, nice one.',
      dogamy: "Huh? What's that smell?",
      doggo: "It's m-moving! I-I-It's shaking!",
      jerry: 'Jerry.',
      major: '(The dog jumped into your lap.)',
      minor: '(Pant pant)',
      papyrs: "I'LL ALLOW IT!!!!",
      papyru: "I'LL ALLOW IT!!!!",
      san: 'ok.',
      sans: 'nope.',
      sdrake: 'A "stellar" choice.',
      serf: 'Check out my antenna!',
      starry: 'A "stellar" choice.',

      // foundry
      bob: 'A pleasing nomenclature, no?',
      doge: 'I am not amused.',
      gelata: 'Roar.',
      gerson: 'Wah ha ha! Why not?',
      mdummy: 'What. What! WHAT!',
      mkid: "That's my name!!",
      monkid: "That's my name!!",
      muffet: 'Ahuhuhu~\nYou must have great taste, dearie~',
      raddy: 'Hey!\nOnly Skrubby gets to call me that!',
      radtie: "Sorry, but you're a letter shy.",
      radtil: "Sorry, but you're a letter shy.",
      shyren: '...?',
      skrub: 'Clean name.',
      skrubb: 'Clean name.',
      tem: 'hOI!',
      temmie: 'hOI!',
      undyn: 'Ngah, fine.',
      undyne: 'Get your OWN name!',

      // aerialis
      alphy: 'Uh.... OK?',
      alphys: "D-don't do that.",
      bpants: 'You are really scraping the bottom of the barrel.',
      bratty: 'Like, OK I guess.',
      burgie: 'You like my name, little buddy?',
      catty: "Bratty! Bratty! That's MY name!",
      cozmo: 'A fellow wizard?',
      glyde: 'Slick choice, homeslice.',
      hapsta: "Now you're just being rude, darling.",
      mett: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
      metta: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',
      mtt: 'OOOOH!!! ARE YOU PROMOTING MY BRAND?',

      // notable NPCs
      aaron: 'Is this name correct? ;)',
      grillb: 'Hot, but not hot enough.',
      grilly: 'Hot, but not hot enough.',
      gyft: "You don't have to do that...",
      heats: 'You KNEW!?',
      kabakk: 'Respect my AUTHORITY!',
      vulkin: 'Ahh! Thank you~',
      zorren: 'Thanks for, uh, using my name.',

      // citadel
      asgor: 'You can?',
      asgore: 'You cannot.',
      asriel: '...',
      asrie: '... fine.',

      // 漢化版特供
      char: "...真正的名字？",
      查拉: "真正的名字。",
      猹: "...真正的名字？",
      卡拉: "...真正的名字？",
      恰拉: "...真正的名字？",
      fris: "這名字... 不對吧？",
      frask: "這名字... 不對吧？",
      弗裡斯克: "這名字不對。",
      福: "這名字... 不對吧？",
      福瑞斯克: "這名字... 不對吧？",

      羊媽: "嗯... 我想這個名字可以...",
      托麗: "嗯... 我想這個名字可以...",
      托麗爾: "我覺得，\n你應該想個自己的名字。\n我的孩子。",
      閃閃: "想得美，蠢貨。",

      papyrus: "這沒啥不合適的！！",
      帕: "我準了！！！",
      帕帕: "我準了！！！",
      帕派肉絲: "我準了！！！",
      帕帕肉絲: "我準了！！！",
      帕派瑞: "我準了！！！",
      帕派瑞斯: "這沒啥不合適的！！",
      阿派瑞斯: "我準了！！！",
      杉: "好。",
      衫: "好。",
      杉哥: "好。",
      衫哥: "好。",
      杉斯: "沒門。",
      衫斯: "沒門。",
      snas: "啥？",
      鱔絲: "啥？",
      衫衫: "啥？",
      杉杉: "啥？",

      魚姐: "嘎啊，行行行。",
      安黛: "嘎啊，行行行。",
      安黛因: "找個你自己的名字去！",

      宅龍: "呃... 行吧？",
      艾菲: "呃... 行吧？",
      艾菲斯: "別-別這麼做。",
      meta: "喔！！！\n你在推廣我的品牌嗎？",
      鎂塔: "喔！！！\n你在推廣我的品牌嗎？",
      鎂塔頓: "喔！！！\n你在推廣我的品牌嗎？",

      羊爸: "可以？",
      艾斯戈: "可以？",
      艾斯戈爾: "不可以。",
      艾斯利爾: "...",
      小羊: "...",
      艾斯利: "...",

      創傷: 'Hm...?',
      擊敗: 'Hm...?',
      傷害: 'Hm...?',
      調情: 'Hm...?',
      屠殺: 'Hm...?',
      殺戮: 'Hm...?',
      動亂: 'Hm...?',
      仁慈: 'Hm...?',
      饒恕: 'Hm...?',
      謀殺: 'Hm...?',
      和平: 'Hm...?',

      創傷線: 'Hm...?',
      調情線: 'Hm...?',
      屠殺線: 'Hm...?',
      動亂線: 'Hm...?',
      和平線: 'Hm...?',

      訓練人偶: "............\n(It's not much for conversation.)",
      人偶: "............\n(It's not much for conversation.)",
      小匿: 'Hello.',
      匿羅: 'Hello.',
      小幽: "............\n(They're powerless to stop you.)",
      納普斯: "............\n(They're powerless to stop you.)",
      納普斯特: "............\n(They're powerless to stop you.)",
      亞倫: 'Is this name correct? ;)',

      空帽: 'Check out my antenna!',
      太空帽: 'Check out my antenna!',
      小酷: 'Guh huh huh, nice one.',
      小酷龍: 'Guh huh huh, nice one.',
      星鐵: 'A "stellar" choice.',
      星鐵龍: 'A "stellar" choice.',
      星兒: 'A "stellar" choice.',
      狗來米: "Huh? What's that smell?",
      遁狗: "It's m-moving! I-I-It's shaking!",
      傑瑞: "It's m-moving! I-I-It's shaking!",
      大犬: '(The dog jumped into your lap.)',
      小犬: '(The dog jumped into your lap.)',
      大犬座: '(The dog jumped into your lap.)',
      小犬座: '(The dog jumped into your lap.)',
      烤爾比: '(The dog jumped into your lap.)',
      考爾比: '(The dog jumped into your lap.)',
      卡巴克: 'Respect my AUTHORITY!',
      佐倫: 'Thanks for, uh, using my name.',
      艾羅戈: 'I am honored by your choice.',
      羅曼: 'Let the experiment begin.',
      託馬斯: 'Let the experiment begin.',
      羅曼教授: 'Let the experiment begin.',
      羅曼博士: 'Let the experiment begin.',

      鮑勃: 'A pleasing nomenclature, no?',
      督吉: 'I am not amused.',
      小黏團: 'Roar.',
      大黏簇: 'Roar.',
      葛森: 'Wah ha ha! Why not?',
      憤怒人偶: 'What. What! WHAT!',
      怪物小孩: "That's my name!!",
      瑪菲特: 'Ahuhuhu~\nYou must have great taste, dearie~',
      頑鱷: "Sorry, but you're a letter shy.",
      老頑: "Sorry, but you're a letter shy.",
      頑頑: 'Hey!\nOnly Skrubby gets to call me that!',
      害羞塞壬: '...?',
      刷刷: 'Clean name.',
      刷潔頓: 'Clean name.',
      提米: 'hOI!',
      提咪: 'hOI!',

      漢堡褲: 'You are really scraping the bottom of the barrel.',
      布萊蒂: 'Like, OK I guess.',
      凱蒂: "Bratty! Bratty! That's MY name!",
      謎宇人: 'A fellow wizard?',
      老滑頭: 'Slick choice, homeslice.',
      納普斯樂: "Now you're just being rude, darling.",
      迷你火山: 'Ahh! Thank you~',
      火焰人: 'You KNEW!?',

      ws3917: "歡迎遊玩域外傳說！\n如果遇到Bug及時到\n交流群797416533反饋喔。",
      roctd: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...後面是啥來著？\n我數學水平堪比§fill=#0080ff§§random=1.1/1.1§琪露諾§random=0/0§§fill=#fff§，\n等我想完再放你進去...",
      3.1415: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...後面是啥來著？\n我數學水平堪比§fill=#0080ff§§random=1.1/1.1§琪露諾§random=0/0§§fill=#fff§，\n等我想完再放你進去...",
      π: "§random=1.1/1.1§3.1415⑨§random=0/0§ ...後面是啥來著？\n我數學水平堪比§fill=#0080ff§§random=1.1/1.1§琪露諾§random=0/0§§fill=#fff§，\n等我想完再放你進去...",
      雪理奈: "§fill=#ffd1d9§你取了我的名字，\n這意味著你認識我。\n我可以給你一些幫助。§fill=#fff§",
      mdr: '§fill=#888§直入主題吧。§fill=#fff§',
      月亮菌: "§random=1.1/1.1§...我不覺得這個名字好欸bro§random=0/0§",
      屑moons: "§random=1.1/1.1§...我不覺得這個名字好欸bro§random=0/0§",
   },



   // END-TRANSLATE
   nameChoiceFonts: {
      san: [content.fComicSans, 16],
      sans: [content.fComicSans, 16],
      snas: [content.fComicSans, 16],
      杉: [content.fComicSans, 16],
      衫: [content.fComicSans, 16],
      杉哥: [content.fComicSans, 16],
      衫哥: [content.fComicSans, 16],
      杉斯: [content.fComicSans, 16],
      衫斯: [content.fComicSans, 16],
      鱔絲: [content.fComicSans, 16],
      衫衫: [content.fComicSans, 16],
      杉杉: [content.fComicSans, 16],
      papyrs: [content.fPapyrus, 16],
      papyru: [content.fPapyrus, 16],
      papyrus: [content.fPapyrus, 16],
      帕: [content.fPapyrus, 16],
      帕帕: [content.fPapyrus, 16],
      帕派肉絲: [content.fPapyrus, 16],
      帕帕肉絲: [content.fPapyrus, 16],
      帕派瑞: [content.fPapyrus, 16],
      帕派瑞斯: [content.fPapyrus, 16],
      阿派瑞斯: [content.fPapyrus, 16]
   } as Partial<CosmosKeyed<[CosmosFont, number]>>,
   nameChoiceRestrictions: [
      '',
      'alphys',
      '艾菲斯',
      'asgore',
      '艾斯戈爾',
      'asriel',
      '艾斯利爾',
      'frisk',
      '弗裡斯克',
      'sans',
      '杉斯',
      '衫斯',
      'toriel',
      '托麗爾',
      'twinkl',
      'twinky',
      'twnkly',
      '閃閃',
      'undyne',
      '安黛因',
      "roctd",
      "3.1415",
      "π"
   ],
   namePromptX: 20,
   nameValueY: 0,
   nameLetterMap: [],
   nameLetterPosition: () => ({ x: 0, y: 0 }),
   nameLetterValidation: (char: string) => {
      return /[\S]/g.test(char);
   },
   nameQuitX: 0,
   nameBackspaceX: 28,
   nameDoneX: 14,
   nameConfirmX: -4,
   nameNoX: 4,
   nameYesX: 3,
   nameValueTranslator(value: string) {
      return value.toLowerCase();
   },
   nameGoBackX: 0,
   saveLVX: 8,
   saveReturnX: 18,
   saveSaveX: 14,
   settingsHeaderX: 0,
   statBoxSizeX: 22.5,
   textFormat(text: string, length = Infinity, plain = false) {
      let output = '';
      const raw = CosmosTyper.strip(text);
      const indent = raw[0] === '*';
      if (raw.length > length) {
         let braces = false;
         let sections = false;
         for (const char of text) {
            output += char;
            switch (char) {
               case '§':
                  sections = !sections;
                  break;
               case '{':
                  braces = true;
                  break;
               case '}':
                  braces = false;
                  break;
               default:
                  if (!braces && !sections) {
                     const lines = output.split('\n');
                     const ender = lines[lines.length - 1];
                     if (CosmosTyper.strip(ender).length > length) {
                        const words = ender.split(' ');
                        output = `${lines.slice(0, -1).join('\n')}${lines.length > 1 ? '\n' : ''}${words
                           .slice(0, -1)
                           .join(' ')}\n${indent ? '  ' : ''}${words[words.length - 1]}`;
                     }
                  }
            }
         }
      } else {
         output = text;
      }
      return plain
         ? output
         : output
            .replace(cjk2latin, '$1{#i/x0.5}$2')
            .replace(latin2cjk, '$1{#i/x2}$2')
            .replace(/,([\n ])/g, ',{^3}$1')
            .replace(/，/g, '，{^4}')
            .replace(/~([\n ])/g, '~{^4}$1')
            .replace(/\n\*/g, '{^5}\n*')
            .replace(/([.?!。？！])([\n ])/g, '$1{^5}$2')
            .replace(/:([\n ])/g, ':{^6}$1')
            .replace(/([-、])/g, '$1{^2}')
            .replace(/：/g, '：{^6}');
   },
   textLength(text: string) {
      let value = 0;
      for (const char of text) {
         value += cjk.test(char) ? 1 : 1;
      }
      return value;
   },
   textLengthPrecise(text: string) {
      let value = 0;
      for (const char of text) {
         value += cjk.test(char) ? 1.875 : 1;
      }
      return value;
   }
};
