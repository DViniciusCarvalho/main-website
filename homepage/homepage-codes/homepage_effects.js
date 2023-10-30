import * as menuControl from "../../common-components/menu_code/menu_control.js"

const menuButton = document.getElementsByClassName("header__menu__button")[0];
const menuContainer = document.getElementsByClassName("header__menu")[0];
const mainContent = document.getElementsByClassName("main__info")[0];
const devName = document.getElementsByClassName("main__info__dev__name")[0];
const linkedlnButton = document.getElementsByClassName("linkedln__button")[0];
const downloadCVButton = document.getElementsByClassName("download__cv__button")[0];

// Control of main content opacity
window.addEventListener("load", () => {
    mainContent.classList.add("loaded");
});

// Control of writing effect
const writeText = (titleContent) => {
    let characters = titleContent.innerHTML.split("");
    titleContent.innerHTML = "";
    setTimeout(() => {     
        characters.forEach((element, index) => {
            setTimeout(() => {titleContent.innerHTML += element} , 75 * index);
        });
    }, 1500)   
}
writeText(devName);

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
   
// Open a new window on the client navigator to Douglas"s Linkedln
linkedlnButton.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/douglas-carvalho-7b97b2266/", "_blank");
});

// Download Douglas"s Curriculum Vitae (CV)
downloadCVButton.addEventListener("click", () => {

    const EXTENSIONS = [
        "doc", 
        "odt"
    ];

    EXTENSIONS.forEach(extension => {
        const filePath = `homepage-file/curriculo.${extension}`;
        const link = document.createElement("a");
        link.href = filePath;
        link.download = `curriculo.${extension}`;   
        link.click();
    });

});