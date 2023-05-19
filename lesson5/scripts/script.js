// Variables
const input = document.querySelector('#favchap');
const addBtn = document.querySelector('#button');
const list = document.querySelector('#list');

document.addEventListener('DOMContentLoaded', function() {
    addBtn.addEventListener('click', function() {
      if (input.value.trim() !== '') {
        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
  
        listItem.textContent = input.value;
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
  
        deleteBtn.addEventListener('click', function() {
          listItem.remove();
          input.focus();
        });
  
        input.value = '';
        input.focus();
      }
    });
  });
  