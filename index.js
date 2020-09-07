const title = document.querySelector("#title");

function handleClick(){
    //title.classList.toggle('clicked');
    const hasClass = title.classList.contains("clicked");
    if (hasClass) { //clicked 클래스가 있으면
        title.classList.remove('clicked');
    }
    else { //clicked 클래스가 없으면
        title.classList.add('clicked');
    }
};
function init() {
    title.addEventListener("click", handleClick)
};
init();