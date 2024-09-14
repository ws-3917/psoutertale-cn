import { translator } from '../../code/systems/translator';
import sources from './sources-alt';
import aerialis from './text-alt/aerialis';
import citadel from './text-alt/citadel';
import common from './text-alt/common';
import foundry from './text-alt/foundry';
import outlands from './text-alt/outlands';
import starton from './text-alt/starton';
import systems from './text-alt/systems';
import values, { LANGUAGE } from './text-alt/values';
import { events, launch } from '../../code/systems/core';
import { CosmosRenderer, CosmosText } from '../../code/systems/storyteller';
import { Rectangle } from 'pixi.js';
import { content } from '../../code/systems/assets';
import { SAVE } from '../../code/systems/save';

translator.content.addLanguage(LANGUAGE, sources);
translator.langs.push(LANGUAGE);
translator.registry.of('aerialis').addLanguage(LANGUAGE, aerialis);
translator.registry.of('citadel').addLanguage(LANGUAGE, citadel);
translator.registry.of('common').addLanguage(LANGUAGE, common);
translator.registry.of('foundry').addLanguage(LANGUAGE, foundry);
translator.registry.of('outlands').addLanguage(LANGUAGE, outlands);
translator.registry.of('starton').addLanguage(LANGUAGE, starton);
translator.registry.of('systems').addLanguage(LANGUAGE, systems);
translator.values.addLanguage(LANGUAGE, values);
// 汉化组声明
events.on('titled', async function () {
    if (SAVE.flag.s.$option_language !== LANGUAGE || !launch.intro) {
        return;
    }
    const disclaimerRenderer = new CosmosRenderer({
        auto: false,
        area: new Rectangle(0, 0, 640, 480),
        wrapper: '#wrapper',
        layers: { menu: [] },
        width: 640,
        height: 480,
        scale: 2,
        position: { x: 160, y: 120 }
    });

    await content.fDiaryOfAn8BitMage.load();
    disclaimerRenderer.start();

    disclaimerRenderer.attach(
        'menu',
        new CosmosText({
            fill: 0xffff00,
            fontFamily: content.fDiaryOfAn8BitMage,
            fontSize: 30,
            position: { x: 160, y: 40 },
            anchor: 0,
            content: values.disclaimer.title // title
        })
    );
    disclaimerRenderer.attach(
        'menu',
        new CosmosText({
            fill: 0xffffff,
            fontFamily: content.fDiaryOfAn8BitMage,
            fontSize: 10,
            position: { x: 15, y: 140 },
            anchor: { x: -1, y: 0 },
            content: values.disclaimer.content // content
        })
    );

    await disclaimerRenderer.pause(10000);
    disclaimerRenderer.stop();
    disclaimerRenderer.canvas.remove();
    content.fDeterminationMono.load();
});