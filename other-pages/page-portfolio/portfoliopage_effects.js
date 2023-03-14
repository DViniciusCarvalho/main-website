import * as menuControl from '../../common-components/menu_code/menu_control.js'

const targetsToFade = document.querySelectorAll('[data-anime]');
const menuButton = document.getElementsByClassName('header__menu__button')[0];
const menuContainer = document.getElementsByClassName('header__menu')[0];

// Fade items by scroll
const animateByScroll = () => {
    const windowHeight = window.innerHeight;
    const windowYdistance = window.pageYOffset + windowHeight * 0.75;
    targetsToFade.forEach((element) => {
        if(windowYdistance > element.offsetTop){
            element.classList.add('animate')
        }
        else{
            element.classList.remove('animate')
        }
    })
}

const debounce = (func, wait, immediate) => {
    let timeout;
    return function (...args) {
       const context = this;
       const later = () => {
        timeout = null;
        if(!immediate){func.apply(context, args);}
       }
       const callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if(callNow){func.apply(context, args);}
    }
}

window.addEventListener('scroll', debounce(() => {
    animateByScroll()
}, 200));

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