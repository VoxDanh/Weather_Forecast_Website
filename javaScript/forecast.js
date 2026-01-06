export function renderForecast(data) {
    const listElement = document.querySelector(".hourly-list");
    listElement.innerHTML = "";
    const forecastList = data.list.slice(0, 5);

    forecastList.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const timeString = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

        const temp = Math.round(item.main.temp);
        const description = item.weather[0].description;
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
        const precip = Math.round(item.pop * 100);

        const li = document.createElement("li");
        li.className = "hourly-item";
        li.innerHTML = `
            <time class="forecast-time" datetime="${item.dt_txt}"><span>${timeString}</span></time>
            <img class="forecast-icon" src="${iconUrl}" alt="${description}" />
            <span class="forecast-temp"><span>${temp}</span>°C</span>
            <span class="forecast-desc">${description}</span>
            <span class="forecast-precip">Mưa: <span>${precip}</span>%</span>
        `;
        listElement.appendChild(li);
    });
}
