class Posts {
    constructor() { }

    createPost() {
        const posts = document.querySelector('.posts-list');
        const post = document.createElement('div');

        posts.appendChild(post);
        post.classList.add('posts-item');

        const title = document.createElement('a');

        post.appendChild(title);
        title.classList.add('posts-item__title');

        const text = document.createElement('p');
        post.appendChild(text);
        text.classList.add('posts-item__text');
    }

    getPost() {
        axios.get('http://localhost:3000/posts', {
            params: {
                result,
            }
        })

        .then(response => {
            console.log(response)
        })

        .catch(error => {
            console.log(error)
        })
    }
}

let posts = new Posts();

posts.getPost(result);

