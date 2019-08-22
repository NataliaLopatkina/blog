class Post {
    constructor() {}
    createPost(titlePost, textPost, datePost, authorPost) {
        this.post = document.createElement('div');
        this.post.classList.add('posts-item');

        const title = document.createElement('a');

        this.post.appendChild(title);
        title.innerText = titlePost;
        title.classList.add('posts-item__title');

        const text = document.createElement('p');
        text.innerText = textPost;
        this.post.appendChild(text);
        text.classList.add('posts-item__text');

        if (authorPost != undefined) {
            const author = document.createElement('p');
            this.post.appendChild(author);
            author.innerText = 'Posted by ' + authorPost;
            author.classList.add('posts-item__autor');
        }

        const date = document.createElement('time');
        this.post.appendChild(date);
        date.innerText = datePost;
        date.classList.add('posts-item__text');
    }

    addPost() {
        const postsList = document.querySelector('.posts-list');
        postsList.appendChild(this.post)
    }

    deletePosts() {
        const posts = document.querySelectorAll('.posts-item');
        posts.forEach((item)=> {
            item.remove();
        })
    }

    printPosts(arrayPosts) {
        arrayPosts.forEach(function (item) {
            const postTitle = item.title;
            const postText = item.text;
            const postDate = item.date;
            const postAuthor = item.name;

            const maxLengthText = 210;

            if (postText.length > maxLengthText) {
                var visiblePathText = postText.slice(0, maxLengthText) + ' ...';
                const newText = visiblePathText;
                post.createPost(postTitle, newText, postDate, postAuthor);
                post.addPost();
            } else {
                post.createPost(postTitle, postText, postDate, postAuthor);
                post.addPost();
            }
        })
    }
}

let post = new Post();
