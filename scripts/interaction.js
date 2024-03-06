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

    const codeBlocks = document.querySelectorAll("pre code");
    
    codeBlocks.forEach(function(codeBlock) {
        codeBlock.setAttribute('title', 'Copy');
        codeBlock.addEventListener("click", function() {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(codeBlock);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
            selection.removeAllRanges();
        });
    });
});