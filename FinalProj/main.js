window.onload = function() {
    const navbar = document.getElementById("navbar");
    const pages = [
        ["index.html", "html cheat sheet"],
        ["css.html", "css cheat sheet"],
        ["resume.html", "resume"]
    ];

    for (let i = 0; i < pages.length; i++) {
        const p = pages[i]
        const anchor = document.createElement("a");
        anchor.href = p[0];
        anchor.innerHTML = p[1];
        navbar.appendChild(anchor);
    }

    // Index javascript tags (<tag></tag>)
    if (document.title == "HTML Cheat Sheet") {
        const boldElements = document.getElementsByTagName("b");

        for (const e of boldElements) {
            const tag = e.innerHTML;
            e.innerHTML = "&lt" + tag + "&gt";

            if (e.className != "single") {
                e.innerHTML += ("&lt/" + tag + "&gt");
            }
        }
    }
}