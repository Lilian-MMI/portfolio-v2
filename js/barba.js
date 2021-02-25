/* Prevent reload same URL */
const preventReload = e => {
    if (e.currentTarget.href === window.location.href) {
        e.preventDefault();
        e.stopPropagation();
    }
};

let links = document.querySelectorAll('a[href]');
for (let link of links) {
    if(link.classList.contains('prevent')) {
        link.addEventListener('click', e => {
            preventReload(e)
        });
    } else {
        link.addEventListener('click', e => {
            toggleDisplayMenu();
            slideMenuTransition();
            preventReload(e)
        });
    }
}

/* Page transition */
barba.init({
    prevent: ({ el }) => el.classList && el.classList.contains('prevent'),
    transitions: [{
        name: 'slide-menu',
        to: {
            namespace: ['slide-menu']
        },
        leave() { 
/*             toggleDisplayMenu(),
            slideMenuTransition() */
        }
    }],
    views: [{
        namespace: 'slide-menu',
        afterEnter() {
            typewritting();
        }
    }]
});