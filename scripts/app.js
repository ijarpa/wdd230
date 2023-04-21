const d = new Date();
const year = d.getFullYear();
console.log(year);
document.querySelector(".currentYear").textContent = year;


// Last Updated
let lastModif = new Date(document.lastModified);
let dayModif = lastModif.getDay();
let monthModif = lastModif.getMonth();
let yearModif = lastModif.getFullYear();
let hoursModif = lastModif.getHours();
let minutesModif = lastModif.getMinutes();
let secondsModif = lastModif.getSeconds();

let fullDateModif = `${dayModif}/${monthModif}/${yearModif} ${hoursModif}:${minutesModif}:${secondsModif}`;

document.querySelector(".date-modification").textContent = fullDateModif;

