const changeTheme = () => {
    localStorage.getItem('theme') === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
    applyTheme();
}

const applyTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'light');
        document.documentElement.style.setProperty('--main-color', '#f1f1f1');
        document.documentElement.style.setProperty('--seconday-color', '#65a1fb');
        document.documentElement.style.setProperty('--white-text-color', '#3a3636');
        document.documentElement.style.setProperty('--bg-text-menu', '#dcdcdcb8');
        document.documentElement.style.setProperty('--banner-color', '#dedede');
        document.documentElement.style.setProperty('--banner-shadow-color', '#dadadab8');
        document.querySelector('.logo').setAttribute('src', '/images/logo-black.svg');
        document.querySelector('.theme_switcher > .fa-moon-stars').classList.add('active');
        document.querySelector('.theme_switcher > .fa-sun').classList.remove('active');
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.style.setProperty('--main-color', '#171717');
        document.documentElement.style.setProperty('--seconday-color', '#5ae1b4');
        document.documentElement.style.setProperty('--white-text-color', '#dcdcdc');
        document.documentElement.style.setProperty('--bg-text-menu', '#242424b8');
        document.documentElement.style.setProperty('--banner-color', '#111');
        document.documentElement.style.setProperty('--banner-shadow-color', '#0000006e');
        document.querySelector('.logo').setAttribute('src', '/images/logo.svg');
        document.querySelector('.theme_switcher > .fa-sun').classList.add('active');
        document.querySelector('.theme_switcher > .fa-moon-stars').classList.remove('active');
    }
}

applyTheme();