document.addEventListener('DOMContentLoaded', function () {
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

    const addPostBtn = document.getElementById('addPostBtn');
    const blogPostsContainer = document.getElementById('blogPostsContainer');

    addPostBtn.addEventListener('click', () => {
        const postTitle = prompt('Enter the title for your blog post:');
        const postDate = new Date().toLocaleDateString();
        const postContent = prompt('Enter the content for your blog post:');

        createBlogPost(postTitle, postDate, postContent);
    });
});
