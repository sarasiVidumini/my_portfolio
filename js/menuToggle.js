document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const header = document.querySelector(".header");

    if (menuToggle && header) {
        menuToggle.addEventListener("click", function () {
            header.classList.toggle("menu-open");
            const isExpanded = header.classList.contains("menu-open");
            this.setAttribute("aria-expanded", isExpanded);
        });
    }
});