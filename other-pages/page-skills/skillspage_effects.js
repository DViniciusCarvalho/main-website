import * as menuControl from '../../common-components/menu_code/menu_control.js'

const menuButton = document.getElementsByClassName('header__menu__button')[0];
const menuContainer = document.getElementsByClassName('header__menu')[0];


// Control of menu
menuButton.addEventListener('click', () => {
    menuControl.openAndCloseMenu(menuContainer)
});

document.addEventListener('touchmove', (event) => {
    menuControl.blockTouchMoveOnMenuOpen(event);
}, { passive: false });
        
document.addEventListener('wheel', (event) => {
    menuControl.blockScrollOnMenuOpen(event);
}, { passive: false });

window.addEventListener('resize', () => {
    menuControl.closeMenuOnResize(menuContainer, menuButton);
});