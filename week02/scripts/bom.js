document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#chapterList');
  
    button.addEventListener('click', function() {
      const chapter = input.value.trim();
  
      if (chapter !== '') {
        // Create li element and set its text content to the input value
        const li = document.createElement('li');
        li.textContent = chapter;
  
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
  
        // Add event listener to delete button to remove li element when clicked
        deleteButton.addEventListener('click', function() {
          list.removeChild(li);
          input.focus();
        });
  
        // Append delete button to li element
        li.append(deleteButton);
  
        // Append li element to the unordered list
        list.append(li);
  
        // Clear the input field and set focus back to it
        input.value = '';
      }
      
      // Set focus back to the input field regardless of whether a chapter was added
      input.focus();
    });
  });
  