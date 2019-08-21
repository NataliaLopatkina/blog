class Post {
    constructor() {}
    createPost(titlePost, textPost, datePost) {
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

        const date = document.createElement('time');
        this.post.appendChild(date);
        date.innerText = datePost;
        date.classList.add('posts-item__text');
    }

    addPost() {
        const postsList = document.querySelector('.posts-list');
        postsList.appendChild(this.post)
    }

    printPosts(arrayPosts) {
        arrayPosts.forEach(function (item) {
            const postTitle = item.title;
            const postText = item.text;
            const postDate = item.date;

            post.createPost(postTitle, postText, postDate);
            post.addPost();

        })
    }

    slicePostText() {
        const maxLengthText = 210;
        const textPost = document.querySelectorAll('.posts-item__text');

        textPost.forEach(function (item) {
            if (item.textContent.length > maxLengthText) {
                var visisblePathText = item.textContent.slice(0, maxLengthText) + ' ...';
                item.innerText = visisblePathText;
            }
        })
    }
}

let post = new Post();
