import * as menuControl from "../../common-components/menu_code/menu_control.js"

const menuButton = document.getElementsByClassName("header__menu__button")[0];
const menuContainer = document.getElementsByClassName("header__menu")[0];
const aboutArea = document.getElementsByClassName("main__content__about__information")[0];
const infoBlockElements = document.getElementsByClassName("content__block");

// Control of main content opacity.
window.addEventListener("load", () => {
    aboutArea.classList.add("loaded")
})

// Control of hidding and showing information text
Array.from(infoBlockElements).forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active");
    })    
});

// Control of menu
menuButton.addEventListener("click", () => {
    menuControl.openAndCloseMenu(menuContainer)
});

document.addEventListener("touchmove", (event) => {
    menuControl.blockTouchMoveOnMenuOpen(event);
}, { passive: false });
        
document.addEventListener("wheel", (event) => {
    menuControl.blockScrollOnMenuOpen(event);
}, { passive: false });

window.addEventListener("resize", () => {
    menuControl.closeMenuOnResize(menuContainer, menuButton);
});