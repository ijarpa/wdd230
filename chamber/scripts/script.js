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

// announcement banner
if (dayName === "Monday" || dayName === "Tuesday") {
    document.querySelector(".header").style.paddingTop = "20px";
}
else {
    console.log("Otro dia");
    document.querySelector(".announcement").style.display = "none";
}


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

