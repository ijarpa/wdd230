const listButton = document.querySelector('.button-list');
const gridButton = document.querySelector('.button-grid');
const postDirectory = document.querySelector('.post-directory');
const postBoxDirectory = document.querySelectorAll('.post-box-directory');


listButton.addEventListener('click', () => {
    postDirectory.classList.add('list-format');
    postDirectory.style.gridTemplateColumns = 'repeat(1, 1fr)';
});

gridButton.addEventListener('click', () => {
    postDirectory.classList.remove('list-format');
    postDirectory.style.gridTemplateColumns = 'repeat(3, auto)';
});
