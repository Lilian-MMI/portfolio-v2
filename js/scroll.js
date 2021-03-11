const activeHorizontalScroll = () => {
    TweenLite.defaultEase = Linear.easeNone;

    var titles = document.querySelectorAll(".horizontal_container_title");

    var elementWidth = document.getElementById('horizontal_container').offsetWidth;

    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();

    var width = window.innerWidth - elementWidth;

    var duration = elementWidth / window.innerHeight * 100;

    var official = duration + '%';

    tl.to(".horizontal_container_content", 1, {
        x: width,
        ease: Power0.easeNone
    }, "label1");
    tl.from(titles[0], 0.5, {
        opacity: 1
    }, "label1+=0");

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