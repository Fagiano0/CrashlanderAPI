//Handle siedbar interactions
var isNavOpen = false;
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

document.addEventListener("DOMContentLoaded", function () {
    //Generate sidebar
    var sidebar = document.getElementById("sidebar");
    if(sidebar != null) {
        var h1Elements = document.querySelectorAll("h1");

        var sidebarContent = "<h2><a href=\"index.html\"><strong>← Back</strong></a></h2>";
        sidebarContent += "<ul>";

        h1Elements.forEach(function(h1Element, index) {
            sidebarContent += "<li><a href=\"#" + h1Element.id + "\" onclick=\"toggleNav()\"><strong>" + h1Element.textContent + "</strong></a>";
            var nextH1 = h1Elements[index + 1];
            var currentElement = h1Element.nextElementSibling;
            var hasAddedUlForH3s = false
            while (currentElement !== nextH1 && currentElement !== null) {
                if (currentElement.tagName.toLowerCase() === "h3" && currentElement.textContent.trim() !== "") {
                    if (!hasAddedUlForH3s) {
                        sidebarContent += "<ul>";
                        hasAddedUlForH3s = true;
                    }
                    var h3Id = currentElement.getAttribute("id");
                    sidebarContent += "<li><a href=\"#" + h3Id + "\" onclick=\"toggleNav()\">" + currentElement.textContent + "</a></li>";
                }
                currentElement = currentElement.nextElementSibling;
            }
            if (hasAddedUlForH3s) {
                sidebarContent += "</ul>";
            }
            sidebarContent += "</li>";
        });

        sidebarContent += "</ul>";
        sidebar.innerHTML = sidebarContent;
    }
});