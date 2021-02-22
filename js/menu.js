const menu_transition = document.getElementById("menu_icon");
let layers = document.getElementsByClassName("transition_color");

menu_transition.addEventListener('click', () => {
    setTimeout(function () {
        document.getElementById("bg_menu").classList.toggle('d_none');
    }, 400);
    for (let layer of layers) {
        layer.classList.toggle("active");
    }
});

$('#menu_icon').click(function () {
    $('.line_1').toggleClass('hover_line_1'),
    $('.line_2').toggleClass('hover_line_2'),
    $('.line_3').toggleClass('d_none');
    setTimeout(
        function () {
            $('#background_menu').toggleClass('d_flex')
        }, 500);
});

$('#home_option')
    .mouseenter(function () {
        $('#bg_menu_selected').addClass('bg_option_selected')
    })
    .mouseleave(function () {
        $('#bg_menu_selected').removeClass()
    });

$('#about_option')
    .mouseenter(function () {
        $('#bg_menu_selected').addClass('active_hover_about')
    })
    .mouseleave(function () {
        $('#bg_menu_selected').removeClass()
    });

$('#projects_option')
    .mouseenter(function () {
        $('#bg_menu_selected').addClass('active_hover_projects')
    })
    .mouseleave(function () {
        $('#bg_menu_selected').removeClass()
    });

$('#contact_option')
    .mouseenter(function () {
        $('#bg_menu_selected').addClass('active_hover_contact')
    })
    .mouseleave(function () {
        $('#bg_menu_selected').removeClass()
    });