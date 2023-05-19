// Get necessary elements
const input = document.getElementById('favchap');
const button = document.getElementById('button');
const list = document.getElementById('list');

// Click event listener for the "Add Chapter" button
button.addEventListener('click', function() {
    // Check if input is not blank
    if (input.value.trim() !== '') {
    // Create list item (li) element
    const listItem = document.createElement('li');

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';

    // Set li element's textContent with input value
    listItem.textContent = input.value;

    // Append delete button to li element
    listItem.appendChild(deleteBtn);

    // Append li element to the list
    list.appendChild(listItem);

    // Event listener for the delete button
    deleteBtn.addEventListener('click', function() {
        // Remove the li element when clicked
        listItem.remove();

        // Set focus back to the input element
        input.focus();
    });

    // Clear the input value and set focus to the input element
    input.value = '';
    input.focus();
    }
});