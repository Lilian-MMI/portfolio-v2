const typewritting = () => {

    let SENTENCES_TYPEWRITTER = ["Front-end", "Experience utilisateur", "Frameworks", "Interaction utililsateur", "Back-end", "Search engine optimisation"];
    let typewritter_text = document.querySelector("#typewritter_text");

    let delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function write_effect(sentence) {
        for (let i = 0; i < sentence.length; i++) {
            typewritter_text.innerHTML += sentence.charAt(i);
            await delay(30);
        }
    }

    async function erase_effect(sentence) {
        for (let i = sentence.length; i > 0; i--) {
            typewritter_text.innerHTML = typewritter_text.innerHTML.slice(0, -1);
            await delay(10);
        }
    }

    async function loop_write_effect() {
        for (let sentence of SENTENCES_TYPEWRITTER) {
            await write_effect(sentence);
            await delay(1500);
            await erase_effect(sentence);
            await delay(0);

        };
        loop_write_effect();
    }

    loop_write_effect();
}