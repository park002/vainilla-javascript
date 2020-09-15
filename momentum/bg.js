const body = document.querySelector('body');
const IMG_NUMBER = 6;

function paintImg(number) {
    const image = new Image();
    image.src = `./images/${number}.jpg`;
    body.prepend(image);
    image.classList.add('bgImage');
}

function genRandom() {
     return Math.floor((Math.random() * IMG_NUMBER) + 1); // 1~7미만의 난수 생성
}

function init() {
    const number = genRandom();
    paintImg(number);
}

init();