// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");

// Try to complete the method with options
try {
	const options = {
		month: "short",
		day: "numeric",
		year: "numeric"
	};
	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>!`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${monthName} ${d.getDate()}, ${year}`;
document.querySelector("#date2").textContent = fulldate;

  
document.querySelector('#welcome').innerHTML = 'Welcome to <em>our</em> neighborhood!';


let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let filterC = citynames.filter(city => city.charAt(0) === 'C')
console.log(filterC);