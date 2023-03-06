const devName = $('h1').eq(0)
const menuArea = $('.header__menu__items');
const openMenuButton = $('#header__menu--open');
const closeMenuButton = $('#header__menu--close');
const overlayElement = $(".overlay");

let closeButtonIsHide = true;
let windowWidth = window.innerWidth
let menuWidth = menuArea.width();

// Control of writing effect
const writeText = (titleContent) => {
    let characters = $(titleContent.text().split(''));
    titleContent.text('');
    setTimeout(() => {     
        characters.each((index, element) => {
            setTimeout(() => titleContent.text(titleContent.text() + element), 75 * index);
        });
    }, 1000)   
}
writeText(devName);

// Control of mobile menu
$(window).resize(() => {
    if(window.innerWidth > 690){
        closeMenuButton.hide();
        openMenuButton.hide();
    }
    if(window.innerWidth <= 690 && window.innerWidth < windowWidth){
        openMenuButton.css("display", "inline-block");
        menuArea.css("left", "100%");
    }
    if(!closeButtonIsHide){
        openMenuButton.css("display", "inline-block");
        menuArea.css("left", "100%");
    }
    windowWidth = window.innerWidth
    menuWidth = menuArea.width();
    closeButtonIsHide = true; 
});

document.addEventListener('touchmove', (event) => {
    !closeButtonIsHide? event.preventDefault():"";
}, { passive: false });

document.addEventListener('wheel', (event) => {
    !closeButtonIsHide? event.preventDefault():"";
}, { passive: false });

openMenuButton.click(() => { 
    menuWidth = menuArea.width()
    openMenuButton.hide();          
    closeMenuButton.css("display", "inline-block");
    overlayElement.addClass("overlay--active");
    menuArea.css({left:`${windowWidth - menuWidth}px`});
    closeButtonIsHide = false;
});

closeMenuButton.click(() => {
    menuArea.css("left", "100%");
    setTimeout(() => {       
        openMenuButton.css("display", "inline-block");
        overlayElement.removeClass("overlay--active");
        closeButtonIsHide = true;
    }, 300)
});

// Controls of buttons
const openLinkedln = () => {
    window.open('https://www.linkedin.com/in/douglas-carvalho-7b97b2266/', '_blank');
}

const downloadCV = () => {
    const filePath = "../files/exemplo.txt";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "exemplo.txt";   
    link.click();
  }


