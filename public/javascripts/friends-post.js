class Posts {
    constructor() { }

    getPost(id) {
        axios.get('http://localhost:3000/posts', {
            params: {
                id,
            }
        })

            .then(response => {

                const { friendsPosts } = response.data;
                const arrayPosts = friendsPosts[0];

                arrayPosts.forEach(function (item) {
                    const postTitle = item.title;
                    const postText = item.text;
                    const postDate = item.date;

                    createPost(postTitle, postText, postDate);
                })
            })

            .catch(error => {
                console.log(error)
            })
    }
}

let posts = new Posts();

const buttonMore = document.querySelector('.button--more');

posts.getPost(55);


function createPost(titlePost, textPost, datePost) {
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
    date.classList.add('.posts-item__text')
}
