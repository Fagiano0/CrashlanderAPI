storageTheme = localStorage.getItem('theme')
currentTheme = storageTheme != null ? storageTheme : 'dark';
updateTheme();

function updateTheme() {
    var themeImage = document.getElementById('themeImage');

    localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeImage.src = 'images/sun_'+currentTheme+'.png';
}

function changeTheme() {
    if(currentTheme == 'dark') {
        currentTheme = 'light';
    } else if(currentTheme == 'light') {
        currentTheme = 'dark';
    }
    updateTheme();
}

isNavOpen = false;
function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var sidebarMain = document.getElementById("sidebar-main");
    var sidebarButton = document.getElementById("sidebarButton");

    isNavOpen = !isNavOpen;
    if(isNavOpen) {
        sidebar.style.width = "50vw";
        sidebarMain.style.marginLeft = "50vw";
        sidebarButton.style.left = "51vw";
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.style.width = "0";
        sidebarMain.style.marginLeft= "0";
        sidebarButton.style.left = "10px";
        document.body.style.overflow = '';
    }
}