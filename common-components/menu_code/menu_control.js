let closeButtonIsHide = true;

function openAndCloseMenu(menuContainer){
    menuContainer.classList.toggle('active');
    closeButtonIsHide = (menuContainer.classList.contains('active'))?
        false : true;
}
 
function blockTouchMoveOnMenuOpen(event){
    !closeButtonIsHide? event.preventDefault():"";
}

function blockScrollOnMenuOpen(event){
    !closeButtonIsHide? event.preventDefault():"";
}

function closeMenuOnResize(menuContainer, menuButton){
    if(menuContainer.classList.contains('active')){
        menuButton.click();
        closeButtonIsHide = true
    }
}

export { openAndCloseMenu, blockTouchMoveOnMenuOpen, blockScrollOnMenuOpen, closeMenuOnResize }