const menuButton = document.getElementsByClassName('header__menu__button')[0];
const menuElements = document.getElementsByClassName('header__menu')[0];
const devName = document.getElementsByClassName('main__info__dev__name')[0];
const linkedlnButton = document.getElementsByClassName('linkedln__button')[0];
const downloadCVButton = document.getElementsByClassName('download__cv__button')[0];

// --> Control of writing effect.
// On window reload, write Douglas's name.
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

// --> Control of the menu.
// Open and close the menu.
menuButton.addEventListener('click', () => {
    menuElements.classList.toggle('active');
})
// On resize, close the menu if it's openned.
window.addEventListener('resize', () => {
    if(menuElements.classList.contains('active')){
        menuButton.click();
    }
});

// -- >Controls of buttons.
// Open a new window on the client navigator to Douglas's Linkedln
linkedlnButton.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/douglas-carvalho-7b97b2266/', '_blank');
});
// Download Douglas's Curriculum Vitae (CV)
downloadCVButton.addEventListener('click', () => {
    const filePath = 'homepage-file/example.txt';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'example.txt';   
    link.click();
});