loadedTheme = localStorage.getItem('theme')
updateTheme();

function updateTheme() {
    var themeImage = document.getElementById('themeImage');

    localStorage.setItem('theme', loadedTheme);
    document.documentElement.setAttribute('data-theme', loadedTheme);
    themeImage.src = 'images/sun_'+loadedTheme+'.png';
}

function changeTheme() {
    if(loadedTheme == 'dark') {
        loadedTheme = 'light';
    } else if(loadedTheme == 'light') {
        loadedTheme = 'dark';
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