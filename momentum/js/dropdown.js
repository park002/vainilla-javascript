const links = document.querySelector('.js-header__links'),
    addLink = document.querySelector('.js-header__add-link'),
    dropDownSection = document.querySelector('.header__dropdown-section'),
    dropDownDetail = document.querySelector('.header__dropdown-detail');


//const header__link-hide;

function handleDropDown(event) {

    // dropDownSection.classList.add(SHOWING_CLASS);
    // event.target.classList.add(CHECK_CLASS); //links
    // const linksTarget = event.target.classList.contains(CHECK_CLASS);
    // body.addEventListener("click", function (event) {
    //     if (event.target.classList.contains(CHECK_CLASS) !== linksTarget) {
    //         dropDownSection.classList.remove(SHOWING_CLASS);
    //     }
    //     else { //둘다 check 클래스를 가지고있다면
    //         dropDownSection.classList.add(SHOWING_CLASS);
    //     }
    // })
}
function loadLinks() {
    links.addEventListener("click", handleDropDown);
}
function init() {
    loadLinks();
}
init();