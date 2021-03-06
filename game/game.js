const playBtn = document.querySelector('.header__play-btn');
const time = document.querySelector('#time');
const imgGroup = document.querySelector('.image-group');
let i = 0;
function timeCheck() {
    const date = new Date();
    i++;
    date.setSeconds(10 - i);
    let getSconds = date.getSeconds();
    time.textContent = `0:${getSconds}`;
    if (getSconds === 0) {
        return;
    }
    setTimeout(timeCheck, 1000);
}
function carrotLayout() {
    const carrot = new Image();
    const bug = new Image();
    bug.src = './img/bug.png';
    carrot.src = './img/carrot.png';
    imgGroup.appendChild(bug);
    imgGroup.appendChild(carrot);
    const rect = imgGroup.getBoundingClientRect();
    console.dir(rect.width);
    const a = Math.random(rect.width);
}
playBtn.addEventListener('click', event => {
    if (event.target.tagName === "I") {
        event.target.remove();
        const iTag1 = document.createElement('i');
        iTag1.setAttribute('class', 'fas fa-square');
        playBtn.appendChild(iTag1);
    }
    else {
        event.target.lastElementChild.remove();
        const iTag2 = document.createElement('i');
        iTag2.setAttribute('class', 'fas fa-square');
        event.target.appendChild(iTag2);
    }
    timeCheck();
    carrotLayout();
})

