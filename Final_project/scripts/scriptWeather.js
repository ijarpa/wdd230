// Days name
const currentDate_1 = new Date();
currentDate_1.setDate(currentDate_1.getDate() + 1);
const dayOfWeek1 = currentDate_1.getDay();

const currentDate_2 = new Date();
currentDate_2.setDate(currentDate_2.getDate() + 2);
const dayOfWeek2 = currentDate_2.getDay();

const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const tomorrowDay = dayName[dayOfWeek1];
const afterTomorrowDay = dayName[dayOfWeek2];

document.querySelector('.tomorrow-day').textContent = tomorrowDay;
document.querySelector('.after-tomorrow-day').textContent = afterTomorrowDay;
console.log(tomorrowDay);
console.log(afterTomorrowDay);



// weather API for Carlsad California
const api_url = 'https://api.openweathermap.org/data/2.5';
const lat = 33.16032413488669;
const lon = -117.37831067945368;
const api_key = '069a3667af0a632c367191f8e73aa6df';

const api_url_full = `${api_url}/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

console.log(api_url_full);

async function getWeather() {
    const response = await fetch(api_url_full);
    const data = await response.json();
    weatherData(data);
}

getWeather();
// show name and temp from api_url_full in console
const weatherData = (data) => {
    // TEMPERATURE IN CELCIUS
    const currentTempKelvin = data.main.temp;
    const currentTempCelcius = Math.round(currentTempKelvin - 273.15);
    document.querySelector('#current-temp').textContent = currentTempCelcius;

    // ICON
    const weather_icon = document.querySelector('#weather-icon');
    const icon_weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icon_weather);

    // DESCRIPTION
    document.querySelector('#weather-description').textContent = data.weather[0].description;
    document.querySelector('#weather-description').style.textTransform = "Capitalize";
    document.querySelector('#weather-description').style.fontWeight = "600";
}


// FOR TOMORROW
const api_url_full_tomorrow = `${api_url}/forecast?lat=${lat}&lon=${lon}&cnt=16&appid=${api_key}`

async function getWeatherTomorrow() {
    const response = await fetch(api_url_full_tomorrow);
    const data = await response.json();
    console.table(data);
    weatherDataTomorrow(data);
}

getWeatherTomorrow();

const weatherDataTomorrow = (data) => {

    const groupedData = {};

    data.list.forEach((obj) => {
      const date = obj.dt_txt.split(' ')[0];
    
      if (groupedData[date]) {
        if (obj.main.temp_min < groupedData[date].temp_min) {
          groupedData[date].temp_min = obj.main.temp_min;
        }
        if (obj.main.temp_max > groupedData[date].temp_max) {
          groupedData[date].temp_max = obj.main.temp_max;
        }
      } else {
        groupedData[date] = {
          temp_min: obj.main.temp_min,
          temp_max: obj.main.temp_max,
        };
      }
    });
    
    const result = Object.entries(groupedData).map(([date, temps]) => ({
      date,
      temp_min: temps.temp_min,
      temp_max: temps.temp_max,
    }));
    
    console.log(result);

    // TOMORROW
    const currentTempKelvinMax = result[0].temp_max;
    const currentTempCelciusMax = Math.round(currentTempKelvinMax - 273.15);
    document.querySelector('#tomorrow-temp-Max').textContent = currentTempCelciusMax;

    const currentTempKelvinMin = result[0].temp_min;
    const currentTempCelciusMin = Math.round(currentTempKelvinMin - 273.15);
    document.querySelector('#tomorrow-temp-Min').textContent = currentTempCelciusMin;

    const weather_icon_t = document.querySelector('#weather-icon-tomorrow');
    const icon_weather = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weather_icon_t.setAttribute('src', icon_weather);

    // AFTER TOMORROW
    const currentTempKelvinMax_day2 = result[1].temp_max;
    const currentTempCelciusMax_day2 = Math.round(currentTempKelvinMax_day2 - 273.15);
    document.querySelector('#tomorrow-afterTemp-Max').textContent = currentTempCelciusMax_day2;

    const currentTempKelvinMin_day2 = result[1].temp_min;
    const currentTempCelciusMin_day2 = Math.round(currentTempKelvinMin_day2 - 273.15);
    document.querySelector('#tomorrow-afterTemp-Min').textContent = currentTempCelciusMin_day2;

    // ICON
    const weather_icon_day2 = document.querySelector('#weather-icon-afterTomorrow');
    const icon_weather_day2 = `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    weather_icon_day2.setAttribute('src', icon_weather_day2);
}

// weahter API for Los Angeles California 34.055188075152564, -118.25929720314062
