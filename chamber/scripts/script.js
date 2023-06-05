const d = new Date();
const year = d.getFullYear();
console.log(year);

// current year
document.querySelector(".year").textContent = year;

// current date
const date = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
    };
    
const day = date.toLocaleDateString("en-US", options);
document.querySelector(".current-date").textContent = new Date().toLocaleDateString("en-US", options);

// current day
const dayName = date.toLocaleDateString("en-US", { weekday: "long"});
console.log(dayName);


// Last Updated
let lastModif = new Date(document.lastModified);
let dayModif = lastModif.toLocaleString("en-US", {day: "numeric"});
let monthModif = lastModif.toLocaleString("en-US", {month: "numeric"});
let yearModif = lastModif.getFullYear();
let hoursModif = lastModif.getHours();
let minutesModif = lastModif.getMinutes();
let secondsModif = lastModif.getSeconds();

let fullDateModif = `${monthModif}/${dayModif}/${yearModif} ${hoursModif}:${minutesModif}:${secondsModif}`;

console.log(lastModif);
console.log(dayModif);
console.log(monthModif);
document.querySelector(".date-modification").textContent = fullDateModif;


// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


// visits counts
let lastVisit = localStorage.getItem("last-visit");

// current timestamp
let currentTimestamp = Date.now();

let timeDiff = currentTimestamp - lastVisit;
let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
document.querySelector(".visit-number").innerHTML = daysDiff;

localStorage.setItem("last-visit", currentTimestamp); // Store the current visit time in local storage

// show first message or visit number
if (daysDiff === 0) {
    document.querySelector(".visit-message").innerHTML = "Welcome to Southern Chile Chamber! This is your first visit!";
}
else {
    document.querySelector(".visit-message").style.display = "none";
    document.querySelector(".second-visit").style.display = "flex";
}