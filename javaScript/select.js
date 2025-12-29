import API_CountriesNow from "./API_CountriesNow.js";

const selectCountryElement = document.getElementById("select-country");
const selectCityElement = document.getElementById("select-city");
let dataCountries = [];
async function init() {
    dataCountries = await API_CountriesNow.fetchCountriesData();
    renderCountries();
}

function renderCountries() {
    selectCountryElement.innerHTML = '<option value="" disabled selected>Chọn quốc gia</option>';
    dataCountries.forEach(item => {
        const option = new Option(item.country, item.country);
        selectCountryElement.appendChild(option);
    });
}
function renderCities(countryName) {
    selectCityElement.innerHTML = '<option value="" disabled selected>Chọn thành phố</option>';
    const foundCountry = dataCountries.find(item => item.country === countryName);

    if (foundCountry && foundCountry.cities) {
        foundCountry.cities.forEach(cityName => {
            const option = new Option(cityName, cityName);
            selectCityElement.appendChild(option);
        });
    }
}

selectCountryElement.addEventListener("change", (e) => {
    renderCities(e.target.value);
});
init();