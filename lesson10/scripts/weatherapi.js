const api_url = 'https://api.openweathermap.org/data/2.5';
const lat = -41.46885933722645;
const lon = -72.9438125004234;
const api_key = '069a3667af0a632c367191f8e73aa6df';

const api_url_full = `${api_url}/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

console.log(api_url_full);

async function getWeather() {
    const response = await fetch(api_url_full);
    const data = await response.json();
    weatherData(data);
    console.table(data);
}

getWeather();

// show name and temp from api_url_full in console
const weatherData = (data) => {
    // NAMES
    document.querySelector('#loc-name').textContent = data.name;
    document.querySelector('#loc-country').textContent = data.sys.country;

    // TEMPERATURE
    const currentTempKelvin = data.main.temp;
    const currentTempCelcius = Math.round(currentTempKelvin - 273.15);
    document.querySelector('#current-temp').textContent = currentTempCelcius;

    // ICON
    const weather_icon = document.querySelector('#weather-icon');
    const icon_weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icon_weather);
    weather_icon.setAttribute('width', '100px');
    
    // DESCRIPTION
    document.querySelector('#weather-description').textContent = data.weather[0].description;
}




