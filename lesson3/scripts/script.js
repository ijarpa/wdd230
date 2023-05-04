const date = new Date();
const year = date.getFullYear();
const copyright = document.querySelector('footer p');

copyright.innerHTML = `&copy; Southern Chile Chamber, ${year}`;
