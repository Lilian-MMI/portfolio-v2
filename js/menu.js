/* Display menu &transition */
const toggleDisplayMenu = () => {
    document.querySelector('.line_1').classList.toggle('hover_line_1');
    document.querySelector('.line_2').classList.toggle('hover_line_2');
    document.querySelector('.line_3').classList.toggle('d_none');
    document.body.classList.toggle('overflow_hidden');
    
    setTimeout(function () {
        document.querySelector('#bg_menu').classList.toggle('d_none');
    }, 500);
}

const slideMenuTransition = () => {
    let layers = document.querySelectorAll('.transition_color');
    for (let layer of layers) {
        layer.classList.toggle('active');
    }
}

/* Event listener */
let menu_transition = document.querySelector('#menu_icon');
menu_transition.addEventListener('click', () => { 
    toggleDisplayMenu(),
    slideMenuTransition()
});

/* Hover transition on menu option */
let bg_menu_selected = document.querySelector('#bg_menu_selected');
let home_option = document.querySelector('#home_option');
let about_option = document.querySelector('#about_option');
let projects_option = document.querySelector('#projects_option');
let contact_option = document.querySelector('#contact_option');

home_option.addEventListener('mouseenter', () => bg_menu_selected.classList.add('bg_option_selected'));
home_option.addEventListener('mouseleave', () => bg_menu_selected.classList.remove('bg_option_selected'));

about_option.addEventListener('mouseenter', () => bg_menu_selected.classList.add('active_hover_about'));
about_option.addEventListener('mouseleave', () => bg_menu_selected.classList.remove('active_hover_about'));

projects_option.addEventListener('mouseenter', () => bg_menu_selected.classList.add('active_hover_projects'));
projects_option.addEventListener('mouseleave', () => bg_menu_selected.classList.remove('active_hover_projects'));

contact_option.addEventListener('mouseenter', () => bg_menu_selected.classList.add('active_hover_contact'));
contact_option.addEventListener('mouseleave', () => bg_menu_selected.classList.remove('active_hover_contact'));

/* Just a log... */
console.log('%c A la recherche d\'info ? Venez me contacter ! ', 'background: #171717; color: #dcdcdc; font-family: "Domaine Display Narrow Black"; font-size: 1.5rem');