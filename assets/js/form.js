// Select the form element
const form = document.getElementById('myForm'); // Use 'myForm' as in the HTML

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  
  // Get form data
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const errorElement = document.getElementById('error');
  

  if (!username || !title || !content) {
    errorElement.textContent = "Please complete the form.";
    return;
  }

  errorElement.textContent = '';
  const blogPost = { username, title, content };

  let blogData = JSON.parse(localStorage.getItem('blogData')) || [];
  if (!Array.isArray(blogData)) {
    blogData = [];
  }
  
  blogData.push(blogPost);
  
  localStorage.setItem('blogData', JSON.stringify(blogData));
  
  redirectPage('./blog.html');
};

form.addEventListener('submit', handleFormSubmit);