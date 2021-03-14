/* Function to init horizontal scrolling */
const activeHorizontalScroll = () => {
    TweenLite.defaultEase = Linear.easeNone;

    /* define variables */
    let titles = document.querySelectorAll(".horizontal_container_title");
    let elementWidth = document.getElementById('horizontal_container').offsetWidth;
    let controller = new ScrollMagic.Controller();
    let tl = new TimelineMax();
    let width = window.innerWidth - elementWidth;
    let duration = elementWidth / window.innerHeight * 100;
    let official = duration + '%';

    tl.to(".horizontal_container_content", 1, {
        x: width,
        ease: Power0.easeNone
    }, "label1");
    tl.from(titles[0], 0.5, {
        opacity: 1
    }, "label1+=0");

    /* Active the scroll scene & the progress line */
    new ScrollMagic.Scene({
            triggerElement: '#horizontal_container',
            triggerHook: "onLeave",
            duration: official
        })
        .setPin('#horizontal_container')
        .setTween(tl)
        .on("progress", function (e) {
            var progressvalue = 100 * e.progress;
            document.querySelector('#complete_line').style.width = progressvalue + "%";
        })
        .addTo(controller);
}