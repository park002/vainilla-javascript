const links = document.querySelector('#js-header__links'),
    dropDownSection = document.querySelector('.header__dropdown-section'),
    dropDownDetail = document.querySelector('.header__dropdown-detail');


function handleActivation(event) {
    const target = event.target;
    console.log(target);
    if (target.id === 'js-header__links') {
        dropDownSection.classList.toggle(SHOWING_CLASS); 
    }
    else if (target.id === 'js-header__add-link'|| target.id === 'js-header__dropdown-container' || target.id === 'js-header__list') {
        dropDownSection.classList.add(SHOWING_CLASS);
    }
    else if (target.id === 'js-header_new-link') {
        linksAdd();
    }
    else {
        deActivation();
    }
}
function deActivation() {
    dropDownSection.classList.remove(SHOWING_CLASS);
}

function activation() {
    body.addEventListener("click", handleActivation);
}


function init() {
    activation();
}
init();