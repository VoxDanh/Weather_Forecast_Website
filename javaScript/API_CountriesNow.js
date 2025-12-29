//API countriesNow
const API_URL = 'https://countriesnow.space/api/v0.1/countries';
async function fetchCountriesData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data;
}
export default { fetchCountriesData };