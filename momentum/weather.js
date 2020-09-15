const API_KEY = 'a7f385b43943a18ee07ce20bb09e343c';
const LOCATION_LS = 'location';
const weather = document.querySelector('.js-weather');

function saveLocation(locationObj) {
    localStorage.setItem(LOCATION_LS, JSON.stringify(locationObj));
}
function callApi(locationObj) {
    console.log(locationObj);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationObj.latitude}&lon=${locationObj.longitude}&appid=${API_KEY}&units=metric`).then(function (response) {
        return response.json();
    }).then(function (json) {
        weather.innerText = `${json.sys.country} - ${json.name} @ ${json.main.temp} ${json.weather[0].main}`;
    });
}
function locationSuccess(position) {
    const latitude = position.coords.latitude //위도
    const longitude = position.coords.longitude; //경도
    const locationObj = {
        latitude,
        longitude,
    };
    saveLocation(locationObj);
    callApi(locationObj);

}

function askForLocation() {
    navigator.geolocation.getCurrentPosition(locationSuccess, function (error) {
        alert(error.message);
    });
}
function loadLocation() {
    const location = localStorage.getItem(LOCATION_LS);

    if (location === null) { //좌표값이 없다면
        askForLocation();
    }
    else { //좌표값이 있다면.
        const parseLocation = JSON.parse(location);
        callApi(parseLocation);
    }
}
function init() {
    loadLocation();
}
init();