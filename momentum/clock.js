const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
};

// function interval(){
//     setInterval(getTime(), 1000);
// }

const sibal = function sibal(){
    window.setInterval(getTime,1000);
}

const init = function (){
    getTime();
    sibal();
};

init();
