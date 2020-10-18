const linksBtn = document.querySelector('.header__links-btn');
const menuBar = document.querySelector('.header__menu-bar');
const newLinkBtn = document.querySelector('#js-new__link-btn');
const list = document.querySelector('.header__menu__list-items');
const form = document.querySelector('.header__menu-bar__form');
const previousBtn = document.querySelector('.header__menu-bar__form__previous-icon');
let check;
function clickedLinks() {
    linksBtn.active = true;
    linksBtn.addEventListener('click', function (event) {
        if (this.active) {
            menuBar.style.opacity = '1';
            menuBar.style.marginTop = '20px';
        }
        else {
            menuBar.style.opacity = '0';
            menuBar.style.marginTop = '0';
            if (check) {
                form.style.opacity = '0';
                list.style.opacity = '1';
                form.style.visibility = 'hidden';
                list.style.visibility = 'visible';
                form.style.height = '100px';
                menuBar.style.height = '100px';
                check=false; 
            }
        }
        this.active = !this.active;
    })
}
function clickedNewLink() {
    newLinkBtn.addEventListener('click', function () {
        list.style.opacity = '0';
        list.style.visibility = 'hidden'
        form.style.visibility = 'visible';
        form.style.opacity = '1';
        menuBar.style.height = '220px';
        form.style.height = '220px';
        form.style.transform = 'translate(0,-107px)';
        check = true;
    });
}
function clickedPreviousBtn() {
    previousBtn.addEventListener('click', function () {
        form.style.opacity = '0';
        list.style.opacity = '1';
        form.style.visibility = 'hidden';
        list.style.visibility = 'visible';
        form.style.height = '100px';
        menuBar.style.height = '100px';
    })
}

function init() {
    clickedLinks();
    clickedNewLink();
    clickedPreviousBtn();
}
init();