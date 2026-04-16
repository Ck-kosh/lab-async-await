// Write your code here!
<ul id="post-list"></ul>
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    displayPosts(posts);
  })
  .catch(error => console.error('Error:', error));
  function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    // Add content
    title.textContent = post.title;
    body.textContent = post.body;

    // Append elements
    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the function
fetchPosts();
async function fetchPosts() {
  try {
    console.log("Starting fetch...");

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log("Response received:", response);

    const posts = await response.json();
    console.log("Posts data:", posts);

    displayPosts(posts);

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
