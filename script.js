const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
burger.onclick = () => {
    nav.classList.toggle("nav_show")
}