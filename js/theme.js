const changeTheme = () => {
    document.documentElement.style.getPropertyValue('--main-color') !== '#F5F5DC'
        ? document.documentElement.style.setProperty('--main-color', '#F5F5DC')
        : document.documentElement.style.setProperty('--main-color', '#171717');
    document.documentElement.style.getPropertyValue('--seconday-color') !== 'red'
        ? document.documentElement.style.setProperty('--seconday-color', 'red')
        : document.documentElement.style.setProperty('--seconday-color', '#5ae1b4');
    document.documentElement.style.getPropertyValue('--white-text-color') !== '#171717'
        ? document.documentElement.style.setProperty('--white-text-color', '#171717')
        : document.documentElement.style.setProperty('--white-text-color', '#dcdcdc');
}