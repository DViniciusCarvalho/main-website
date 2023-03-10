function openAndCloseMenu(menuContainer, closeButtonIsHide){
    menuContainer.classList.toggle('active');
    closeButtonIsHide = (menuContainer.classList.contains("active"))?
        false : true;
}

function blockTouchMoveOnMenuOpen(event, closeButtonIsHide){
    !closeButtonIsHide? event.preventDefault():"";
}

function blockScrollOnMenuOpen(event, closeButtonIsHide){
    !closeButtonIsHide? event.preventDefault():"";
}

function closeMenuOnResize(menuContainer, menuButton, closeButtonIsHide){
    if(menuContainer.classList.contains('active')){
        menuButton.click();
        closeButtonIsHide = true
    }
}

export { openAndCloseMenu, blockTouchMoveOnMenuOpen, blockScrollOnMenuOpen, closeMenuOnResize }





