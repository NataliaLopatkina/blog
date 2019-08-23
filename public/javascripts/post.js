class Post {
    constructor() { }
    createPost(titlePost, textPost, datePost, authorPost) {
        const post = document.createElement('div');
        post.classList.add('posts-item');

        const title = document.createElement('a');

        post.appendChild(title);
        title.innerText = titlePost;
        title.classList.add('posts-item__title');

        const text = document.createElement('p');
        text.innerText = textPost;
        post.appendChild(text);
        text.classList.add('posts-item__text');

        if (authorPost !== undefined) {
            const author = document.createElement('p');
            post.appendChild(author);
            author.innerText = 'Posted by ' + authorPost;
            author.classList.add('posts-item__autor');
        }

        const date = document.createElement('time');
        post.appendChild(date);
        date.innerText = datePost;
        date.classList.add('posts-item__text');

        const postsList = document.querySelector('.posts-list');
        postsList.appendChild(post)
    }

    deletePosts() {
        const posts = document.querySelectorAll('.posts-item');
        posts.forEach((item) => {
            item.remove();
        })
    }

    compareFunction(prev, next) {
        if (prev.date < next.date) {
            return -1
        } else if (prev.date > next.date) {
            return 1
        }
    }

    sortPosts(posts, sortType) {
        if (sortType === 'ascend') {
            posts.sort(this.compareFunction)

        } else if (sortType === 'descend') {
            posts.sort(this.compareFunction).reverse();
        }
    }

    renderPosts(posts, sortType) {
        const self = this;
        this.sortPosts(posts, sortType)

        posts.forEach(function (item) {
            const postTitle = item.title;
            const postText = item.text;
            const postDate = item.date;
            const postAuthor = item.name;

            const maxLengthText = 210;

            let text;
            if (postText.length > maxLengthText) {
                var visiblePathText = postText.slice(0, maxLengthText) + ' ...';
                text = visiblePathText;
            } else {
                text = postText;
            }

            self.createPost(postTitle, text, postDate, postAuthor);
        })
    }
}

let post = new Post();
