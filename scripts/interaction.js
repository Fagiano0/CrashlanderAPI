//SECTION SELECTION
document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h3");
    headings.forEach(function (heading) {
        const sectionLink = document.createElement("span");
        sectionLink.innerHTML = "📌";
        sectionLink.classList.add("section-link");
        sectionLink.addEventListener("click", function () {
            const id = heading.getAttribute("id");
            if (id) {
                window.location.hash = id;
            }
        });
        heading.appendChild(sectionLink);
        heading.addEventListener("mouseenter", function () {
            sectionLink.style.color = "white";
            sectionLink.style.marginLeft = "5px";
        });
        heading.addEventListener("mouseleave", function () {
            sectionLink.style.color = "transparent";
            sectionLink.style.marginLeft = "0px";
        });
    });
});