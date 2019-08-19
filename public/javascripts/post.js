class Post {
    createPost(titlePost, textPost, datePost, authorName) {
        const posts = document.querySelector('.posts-list');
        const post = document.createElement('div');

        posts.appendChild(post);
        post.classList.add('posts-item');

        const title = document.createElement('a');

        post.appendChild(title);
        title.innerText = titlePost;
        title.classList.add('posts-item__title');

        const text = document.createElement('p');
        text.innerText = textPost;
        post.appendChild(text);
        text.classList.add('posts-item__text');

        const date = document.createElement('time');
        post.appendChild(date);
        date.innerText = datePost;
        date.classList.add('posts-item__text')

        const author = document.createElement('p');
        post.appendChild(author);
        author.innerText = 'Posted by ' + authorName;
        author.classList.add('posts-item__author');
    }
}

let post = new Post();
