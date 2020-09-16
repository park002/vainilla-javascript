const API_KEY = 'a7f385b43943a18ee07ce20bb09e343c';
const LOCATION_LS = 'location';

const weather = document.querySelector('.js-weather');
const address = document.querySelector('.js-weather__address');

function saveLocation(locationObj) {
    localStorage.setItem(LOCATION_LS, JSON.stringify(locationObj));
}
function getWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`).then(function (response) {
        return response.json();
    }).then(function (json) {
        weather.innerText = `${String(json.main.temp).substring(0, 2) + `°`}`;
        address.innerText = `${json.name}`;
    });
}
function locationSuccess(position) {
    const latitude = position.coords.latitude //위도
    const longitude = position.coords.longitude; //경도
    const locationObj = {
        latitude,
        longitude,
    };
    getWeather(locationObj.latitude, locationObj.longitude);
    saveLocation(locationObj);
}
function askForLocation() {
    navigator.geolocation.getCurrentPosition(locationSuccess, function(error) {
        console.log(error.message);
    });
}
function loadLocation() {
    const location = localStorage.getItem(LOCATION_LS);

    if (location === null) { //좌표값이 없다면
        askForLocation();
    }
    else { //좌표값이 있다면.
        const parseLocation = JSON.parse(location);
        getWeather(parseLocation.latitude, parseLocation.longitude);
    }
}
function init() {
    loadLocation();
}
init();