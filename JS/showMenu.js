
function showMenu() {
    let menu = document.getElementById("menu-mobile");
    let shadow = document.getElementById("back-shadow");
    let icon = document.getElementById("icon-menu");

    const iconMenuClose = "./assets/images/icon-menu-close.svg"
    const iconMenu = "./assets/images/icon-menu.svg"

    if (menu.style.display == "none") {
        shadow.style = "display: block"
        menu.style = "display: flex"
        icon.src = iconMenuClose

    } else {
        shadow.style = "display: none"
        menu.style = "display: none";
        icon.src = iconMenu;
    }
    
    
    
}
