var currentTheme = localStorage.getItem('theme');
updateTheme();

function updateTheme() {
    var themeImage = document.getElementById('themeImage');

    if(currentTheme == null || currentTheme == 'null') {
        currentTheme = 'dark';
    }

    localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeImage.src = 'images/sun_'+currentTheme+'.png';

    console.log('set theme:', currentTheme);
}

function changeTheme() {
    if(currentTheme == 'dark') {
        currentTheme = 'light';
    } else if(currentTheme == 'light') {
        currentTheme = 'purple';
    } else if(currentTheme == 'purple') {
        currentTheme = 'dark';
    }
    updateTheme();
}