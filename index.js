const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR= "rgb(232, 67, 147)";


function handleClick() {
   const currentColor= title.style.color;
   if(currentColor === BASE_COLOR) {
       title.style.color=OTHER_COLOR;
   }
   else {
       title.style.color=BASE_COLOR;
   }
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("wheel", handleClick);
}
init();

function handleOffline(){
    console.log('bye!!!');
}

window.addEventListener("pageshow",handleOffline);
