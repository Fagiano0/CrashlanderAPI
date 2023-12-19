themeToggle = false;
function changeTheme() {
    var themeImage = document.getElementById('themeImage');

    themeToggle = !themeToggle;
    if(themeToggle) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeImage.src = 'images/sun_dark.png';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeImage.src = 'images/sun_light.png';
    }
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