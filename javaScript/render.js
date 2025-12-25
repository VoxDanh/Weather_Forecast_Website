import API_DATA from "./API_OpenWeatherMap.js";
const selectCountryElement = document.getElementById("select-country");
const selectCityElement = document.getElementById("select-city");
const btnSearch = document.getElementById("btn-search");


// xử lí các dữ liệu
function mesurement_time_handle(data) {
    return new Date(data.dt * 1000).toLocaleString();
}

//render
function renderMesurementTime(data) {
    const mesurementTimeElement = document.getElementById("mesurement-time");
    mesurementTimeElement.innerHTML = `${mesurement_time_handle(data)}`;
}
function renderIcon(data) {
    const iconElement = document.getElementById("weather-icon");
    const iconCode = data.weather[0].icon;
    iconElement.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    iconElement.alt = data.weather[0].description;
}
function renderLocation(data) {
    const locationElement = document.getElementById("location-name");
    locationElement.innerHTML = `${data.name}, ${data.sys.country}`;
}
function renderDescription(data) {
    const descriptionElement = document.getElementById("weather-description");
    descriptionElement.innerHTML = `${data.weather[0].description}`;
}
function renderTemperature(data) {
    const temperatureElement = document.getElementById("temperature-value");
    temperatureElement.innerHTML = `${data.main.temp}`;
}

function renderFeelsLike(data) {
    const feelsLikeElement = document.getElementById("feelslike-value");
    feelsLikeElement.innerHTML = `${data.main.feels_like}`;
}

function renderHumidity(data) {
    const humidityElement = document.getElementById("humidity");
    humidityElement.innerHTML = `${data.main.humidity}`;
}

function renderCloudCover(data) {
    const cloudCoverElement = document.getElementById("cloud-cover");
    cloudCoverElement.innerHTML = `${data.clouds.all}`;
}

function renderWindGust(data) {
    const windGustElement = document.getElementById("wind-gust");
    windGustElement.innerHTML = `${data.wind.gust || 0}`;
}

function renderPressure(data) {
    const pressureElement = document.getElementById("pressure");
    pressureElement.innerHTML = `${data.main.pressure}`;
}

function renderVisibility(data) {
    const visibilityElement = document.getElementById("visibility");
    visibilityElement.innerHTML = `${data.visibility / 1000}`;
}

function renderWindSpeed(data) {
    const windSpeedElement = document.getElementById("wind-speed");
    windSpeedElement.innerHTML = `${data.wind.speed}`;
}

function renderWindDirection(data) {
    const windDirectionElement = document.getElementById("wind-direction");
    windDirectionElement.innerHTML = `${data.wind.deg}`;
}

function renderRainfall(data) {
    const rainfallElement = document.getElementById("rainfall");
    rainfallElement.innerHTML = `${(data.rain && data.rain['1h']) || 0}`;
}

function renderSeaLevelPressure(data) {
    const seaLevelElement = document.getElementById("sea-level-pressure");
    seaLevelElement.innerHTML = `${data.main.sea_level || data.main.pressure}`;
}


// gọi sự kiện
btnSearch.addEventListener("click", async () => {
    const selectCountry = selectCountryElement.value;
    const selectCity = selectCityElement.value;
    const weatherData = await API_DATA.fetchAPIdata(selectCountry, selectCity);
    renderTemperature(weatherData);
    renderFeelsLike(weatherData);
    renderHumidity(weatherData);
    renderCloudCover(weatherData);
    renderWindGust(weatherData);
    renderPressure(weatherData);
    renderVisibility(weatherData);
    renderWindSpeed(weatherData);
    renderWindDirection(weatherData);
    renderRainfall(weatherData);
    renderSeaLevelPressure(weatherData);
    renderDescription(weatherData);
    renderMesurementTime(weatherData);
    renderLocation(weatherData);
    renderIcon(weatherData);
});

