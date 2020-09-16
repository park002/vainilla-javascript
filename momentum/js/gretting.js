const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greetings = document.querySelector('.js-greetings'),
    toDoFormCheck = document.querySelector('.js-toDoForm');

const CURRENT_USER = 'currentUser';
const SHOWING_CLASS = 'showing';


function paintGreeting() {//아이디가 있다면
    form.classList.remove(SHOWING_CLASS);
    toDoFormCheck.classList.add(SHOWING_CLASS);
    greetings.classList.add(SHOWING_CLASS);
    greetings.innerText = `Good afternoon , ${localStorage.getItem(CURRENT_USER)}`;
}
function handleSubmit(event) { //아이디가 없다면
    event.preventDefault(form);
    const inputValue = input.value;
    localStorage.setItem(CURRENT_USER, inputValue);
    paintGreeting();
}
function inputUserInfo() { //아이디가 없다면
    form.classList.add(SHOWING_CLASS);
    form.addEventListener("submit", handleSubmit);
}
function userChecking() {
    const userValue = localStorage.getItem(CURRENT_USER);

    if (userValue !== null) { //아이디가 있다면
        paintGreeting();
    }
    else { //아이디가 없다면
        inputUserInfo();
    }
}
function initGretting() {
    userChecking();
}
initGretting();