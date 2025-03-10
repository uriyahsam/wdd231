document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", function () {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });
});
