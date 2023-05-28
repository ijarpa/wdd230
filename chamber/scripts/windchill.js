const temperature = document.querySelector(".weather");
const windspeed = document.querySelector(".wind-speed");
const windchill = document.querySelector(".wind-chill");

// convert const temperature to a number
const temp = parseInt(temperature.textContent);
const speed = parseFloat(windspeed.textContent);

console.log(temp);
console.log(speed);

const tempF = Math.round(temp * (9/5) + 32);

console.log(tempF);

// wind chill value
function calculateWindChill(tempF, speed) {
    if ((tempF <= 50) & (speed > 3)) {
      const windChill = Math.round
      (
        35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16
      );
      const windChillCelcius = Math.round(((windChill - 32) * 5) / 9);
      return windChillCelcius;
    } 
    else {
      return "N/A";
    }
  }

console.log("result:", calculateWindChill(tempF, speed))
document.querySelector(".wind-chill").innerHTML = calculateWindChill(tempF, speed);