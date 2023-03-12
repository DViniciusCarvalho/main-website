import * as menuControl from '../../common-components/menu_code/menu_control.js'

const menuButton = document.getElementsByClassName('header__menu__button')[0];
const menuContainer = document.getElementsByClassName('header__menu')[0];
const infoBlockElements = document.getElementsByClassName('content__block');

let closeButtonIsHide = true

// Control of hidding and showing information text
Array.from(infoBlockElements).forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    })    
});

// Control of menu
menuButton.addEventListener('click', () => {
    menuControl.openAndCloseMenu(menuContainer, closeButtonIsHide)
});

document.addEventListener('touchmove', (event) => {
    menuControl.blockTouchMoveOnMenuOpen(event, closeButtonIsHide);
}, { passive: false });
        
document.addEventListener('wheel', (event) => {
    menuControl.blockScrollOnMenuOpen(event, closeButtonIsHide);
}, { passive: false });

window.addEventListener('resize', () => {
    menuControl.closeMenuOnResize(menuContainer, menuButton, closeButtonIsHide);
});