// Define a function to fetch blog posts from an API
async function fetchBlogPosts() {
  const response = await fetch('https://api.example.com/blog/posts');
  const data = await response.json();
  return data;
}

// Define a function to render blog posts to the page
function renderBlogPosts(posts) {
  const container = document.getElementById('posts');
  container.innerHTML = '';
  posts.forEach(post => {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <div class="meta">
        <span class="author">${post.author}</span>
        <span class="date">${new Date(post.date).toLocaleDateString()}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

// Fetch blog posts and render them to the page on load
window.addEventListener('load', async () => {
  const posts = await fetchBlogPosts();
  renderBlogPosts(posts);
});

// Define a function to handle search form submissions
function handleSearch(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm);
  });
  renderBlogPosts(filteredPosts);
}

// Attach event listener to search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearch);
