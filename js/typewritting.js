const tab_phrases_type_effect = ["Front-end", "Experience utilisateur", "Frameworks", "Interaction utililsateur", "Back-end", "Search engine optimisation"];
const div_type_effect_phrases = document.getElementById("type_effect_phrases");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function write_effect(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        div_type_effect_phrases.innerHTML += phrase.charAt(i);
        await delay(30);
    }
}

async function erase_effect(phrase) {
    for (let i = phrase.length; i > 0; i--) {
        div_type_effect_phrases.innerHTML = div_type_effect_phrases.innerHTML.slice(0, -1);
        await delay(10);
    }
}

async function loop_write_effect() {
    for (const phrase of tab_phrases_type_effect) {
        await write_effect(phrase);
        await delay(1500);
        await erase_effect(phrase);
        await delay(0);

    };
    loop_write_effect();
}

loop_write_effect();