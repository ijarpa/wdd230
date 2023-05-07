const d = new Date();
const year = d.getFullYear();
console.log(year);
document.querySelector(".currentYear").textContent = year;


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


const date = new Date();
const copyright = document.querySelector('footer p');
copyright.innerHTML = `&copy; Southern Chile Chamber, ${year}`;
