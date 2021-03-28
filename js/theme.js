const changeTheme = () => {
    localStorage.getItem('theme') === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
    applyTheme();
}

const applyTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'light');
        document.documentElement.style.setProperty('--main-color', '#ffecd4');
        document.documentElement.style.setProperty('--seconday-color', '#4bafff');
        document.documentElement.style.setProperty('--white-text-color', '#3a3636');
        document.querySelector('.logo').setAttribute('src', '/images/logo-black.svg');
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.style.setProperty('--main-color', '#171717');
        document.documentElement.style.setProperty('--seconday-color', '#5ae1b4');
        document.documentElement.style.setProperty('--white-text-color', '#dcdcdc');
        document.querySelector('.logo').setAttribute('src', '/images/logo.svg');
    }
}

applyTheme();