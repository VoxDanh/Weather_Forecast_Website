//gọi API
const API_KEY = "your_key_api";// hãy thay key api được lấy từ openweathermap để chạy thử nhé 
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&lang=vi`;
async function fetchAPIdata(country, city) {
    const URL = `${API_URL}&q=${city},${country}&units=metric`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
export default { fetchAPIdata };
