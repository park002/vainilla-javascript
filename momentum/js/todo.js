const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos';
let toDosArray = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDosArray.filter(function (toDoArr) {
        console.log("toDoArr.id =>" + toDoArr.id + " li.id =>" + li.id);
        return toDoArr.id !== parseInt(li.id); //같지 않을 경우 true 라서 새로운 배열 생성
    });
    console.log("toDosArray => " + JSON.stringify(toDosArray));
    console.log("cleanToDos => " + JSON.stringify(cleanToDos));
    toDosArray = cleanToDos;
    saveToDos();
}
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArray));
}
function paintToDo(text) { //text ===inputValue
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = "✖";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = toDosArray.length + 1;
    toDoList.appendChild(li);
    toDoObj = {
        text: text,
        id: toDosArray.length + 1
    };
    toDosArray.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    //const regExp = /\s/g; ToDo
    if (inputValue === ''|| inputValue === null) {
        toDoInput.focus();
    }
    else {
        paintToDo(inputValue);
        toDoInput.value = "";
    }
}
function something(toDo) {
    paintToDo(toDo.text);
}

function loadToDos() {
    toDoForm.addEventListener("submit", handleSubmit);
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) { //값이 존재한다면
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something);
    }

}

function init() {
    loadToDos();
}
init();