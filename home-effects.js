const devName = document.getElementsByClassName('main__info__dev__name')[0];
const menuArea = document.getElementsByClassName('header__menu__items')[0];
const openMenuButton = document.getElementById('header__menu--open');
const closeMenuButton = document.getElementById('header__menu--close');
const overlayElement = document.getElementsByClassName('overlay')[0];
const nav = document.getElementsByClassName('header__menu')[0];

console.log('aq')
let closeButtonIsHide = true;
let windowWidth = window.innerWidth
let menuWidth = menuArea.offsetWidth;

// Control of writing effect
const writeText = (titleContent) => {
    let characters = titleContent.innerHTML.split('');
    titleContent.innerHTML = '';
    setTimeout(() => {     
        characters.forEach((element, index) => {
            setTimeout(() => {titleContent.innerHTML += element} , 75 * index);
        });
    }, 1000)   
}
writeText(devName);

// Control of mobile menu
window.addEventListener('resize', () => {
    if(window.innerWidth > 690){
        closeMenuButton.style.display = 'none';
        openMenuButton.style.display = 'none';
    }
    if(window.innerWidth <= 690 && window.innerWidth < windowWidth){
        openMenuButton.style.display = 'inline-block';
        menuArea.style.left = '100%';
    }
    if(!closeButtonIsHide){
        openMenuButton.style.display = 'inline-block';
        menuArea.style.left = '100%';
    }
    windowWidth = window.innerWidth
    menuWidth = menuArea.offsetWidth;
    closeButtonIsHide = true; 
});

document.addEventListener('touchmove', (event) => {
    !closeButtonIsHide? event.preventDefault():'';
}, { passive: false });

document.addEventListener('wheel', (event) => {
    !closeButtonIsHide? event.preventDefault():'';
}, { passive: false });

openMenuButton.addEventListener('click', () => { 
    menuWidth = menuArea.offsetWidth;
    windowWidth = window.innerWidth;
    openMenuButton.style.display = 'none'; 
    closeMenuButton.style.display = 'inline-block';
    menuArea.style.left = (windowWidth - menuWidth >= screen.width)?`${screen.width - menuWidth}px`:
    menuArea.style.left = `${windowWidth - menuWidth}px`;
    closeButtonIsHide = false;
});

closeMenuButton.addEventListener('click', () => {
    menuArea.style.left = '100%';
    setTimeout(() => {       
        openMenuButton.style.display = 'inline-block';
        closeButtonIsHide = true;
    }, 300)
});

// Controls of buttons
const openLinkedln = () => {
    window.open('https://www.linkedin.com/in/douglas-carvalho-7b97b2266/', '_blank');
}

const downloadCV = () => {
    const filePath = 'homepage-file/exemplo.txt';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'exemplo.txt';   
    link.click();
  }


