document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", clickHandler);
    });

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });


        const navMenu = document.querySelector(".navbar-collapse");
        if (navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
        }
    }
});
