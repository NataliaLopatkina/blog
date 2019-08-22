class Menu {
    constructor(){}

    toggleMenu(buttonMenu) {
        const navList = document.querySelector('.nav');

        if (navList.classList.contains('nav--opened')) {
            navList.classList.remove('nav--opened');
            buttonMenu.classList.remove('button-menu--closed');
        } else {
            navList.classList.add('nav--opened');
            buttonMenu.classList.add('button-menu--closed');
        }
    }
}

let menu = new Menu();
