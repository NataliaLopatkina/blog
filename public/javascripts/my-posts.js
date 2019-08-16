class Posts {
    constructor() { }

    getPost(id) {
        axios.get('http://localhost:3000/posts', {
            params: {
                id,
                type: 'myPost',
            }
        })

        .then(response => {

            const { posts } = response.data;
            const [arrayPosts] = posts;

            arrayPosts.forEach(function(item) {
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

var token = getCookie('token');

var decodeToken = parseJwt(token)

const id = decodeToken.id;

posts.getPost(id);


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

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  getCookie('token')

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


