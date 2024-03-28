document.addEventListener("DOMContentLoaded", function () {
    //Section links
    const headings = document.querySelectorAll("h3");
    headings.forEach(function (heading) {
        if(heading.textContent != "") {
            const sectionLink = document.createElement("span");
            sectionLink.innerHTML = "🔗";
            sectionLink.classList.add("section-link");
            sectionLink.addEventListener("click", function () {
                const id = heading.getAttribute("id");
                if (id) { window.location.hash = id; }
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
        }
    });

    //Copy codeblock
    const codeBlocks = document.querySelectorAll("pre");
    codeBlocks.forEach(function(codeBlock) {
        var copyText, hr;
        codeBlock.addEventListener("mouseenter", function() {
            hr = document.createElement("hr");
            copyText = document.createElement("span");
            copyText.textContent = "📋Copy";
            copyText.setAttribute('title', 'Copy code');
            copyText.classList.add("code-copy");
            copyText.addEventListener("click", function () {
                const textToCopy = codeBlock.textContent.replace("\n📋Copy", "");
                navigator.clipboard.writeText(textToCopy);
                copyText.style.textShadow = "none";
            });
            codeBlock.appendChild(hr);
            codeBlock.appendChild(copyText);
        });
        codeBlock.addEventListener("mouseleave", function() {
            if(hr) hr.remove();
            if(copyText) copyText.remove();
        });
    });
});