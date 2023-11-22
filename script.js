document.addEventListener('DOMContentLoaded', function () {
    // Get the button, form, and blog posts container
    const addPostBtn = document.getElementById('addPostBtn');
    const blogForm = document.getElementById('blogForm');
    const blogPostsContainer = document.getElementById('blogPostsContainer');

    // Function to create a new blog post
    function createBlogPost(title, date, content) {
        const post = document.createElement('article');
        post.classList.add('blog-post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;

        const metaElement = document.createElement('p');
        metaElement.classList.add('post-meta');
        metaElement.textContent = `Published on ${date}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        post.appendChild(titleElement);
        post.appendChild(metaElement);
        post.appendChild(contentElement);

        blogPostsContainer.appendChild(post);
    }

    // Event listener for the form submission
    blogForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values from the form
        const postTitle = document.getElementById('postTitle').value;
        const postContent = document.getElementById('postContent').value;
        const postDate = new Date().toLocaleDateString();

        // Call the function to create the blog post
        createBlogPost(postTitle, postDate, postContent);

        // Clear form fields
        blogForm.reset();
    });
});
