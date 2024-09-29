// Select the main element and the back button
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');
const blogPostsContainer = document.getElementById('blog-posts');
const noPostsMessage = document.getElementById('no-posts-message');

// Function to build and append blog posts to the DOM
const buildBlogPost = (post) => {
  const article = document.createElement('article');
  const title = document.createElement('h2');
  const author = document.createElement('p');
  const content = document.createElement('p');

  title.textContent = post.title;
  content.textContent = post.content;
  author.textContent = `Posted by: ${post.username}`;

  article.appendChild(author);
  article.appendChild(title);
  article.appendChild(content);

  blogPostsContainer.appendChild(article);
};

// Function to render the blog list
const renderBlogList = () => {
  const blogData = JSON.parse(localStorage.getItem('blogData')) || [];
  
  if (blogData.length === 0) {
    noPostsMessage.style.display = 'block';  
  }else {
      blogData.forEach(post => {
          const postElement = document.createElement('div');
          postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>By: ${post.username}</p>
              <p>${post.content}</p>
          `;
          blogPostsContainer.appendChild(postElement);
      });
  }
  
  noPostsMessage.style.display = 'none';
  blogPostsContainer.style.display = 'block';


blogPostsContainer.innerHTML = '';

blogData.forEach(post => buildBlogPost(post));
};
// Call the renderBlogList function when the page loads
renderBlogList();

// Redirect to the landing page when the back button is clicked
backButton.addEventListener('click', () => {
  redirectPage('./index.html');
});
