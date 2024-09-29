// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggleButton = document.getElementById('toggle');

// Function to toggle light/dark mode
toggleButton.addEventListener('click', () => {
  // Toggle the 'dark' class on the body element
  document.body.classList.toggle('dark');

  // Check if dark mode is active
  const isDarkMode = document.body.classList.contains('dark');

  // Change the button emoji depending on the mode
  toggleButton.textContent = isDarkMode ? '🌙' : '☀️';

  // Set the appropriate colors (optional, if you want custom color styling)
  const root = document.documentElement;
  root.style.setProperty('--circle-color', isDarkMode ? '#333' : '#ffb100');

  // Save the current mode to local storage
  localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
});

// Check if a mode is saved in local storage and apply it on page load
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  document.body.classList.add('dark');
  document.documentElement.style.setProperty('--circle-color', '#333');
  toggleButton.textContent = '🌙'; // Set to moon emoji for dark mode
} else {
  toggleButton.textContent = '☀️'; // Set to sun emoji for light mode
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogData = JSON.parse(localStorage.getItem('blogData'));
  if (!Array.isArray(blogData)) {
    return [];
  } else {
    return blogData;
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogData) {
  localStorage.setItem('blogData', JSON.stringify(blogData));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};