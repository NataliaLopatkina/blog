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

            if (document.querySelectorAll('.posts-item__text').length > 0) {
                let maxLengthText = 210;
                let textPost = document.querySelectorAll('.posts-item__text');

                textPost.forEach(function (item) {
                    if (item.textContent.length > maxLengthText) {
                        var visisblePathText = item.textContent.slice(0, maxLengthText) + ' ...';
                        item.innerText = visisblePathText;
                    }
                })
            }
        })

        .catch(error => {
            console.log(error)
        })
    }
}

let posts = new Posts();

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
    date.classList.add('posts-item__text')
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

var token = getCookie('token');

var decodedToken = parseJwt(token);
var id = decodedToken.id;

posts.getPost(id);

if (document.querySelectorAll('.button-menu').length > 0) {
    let buttonMenu = document.querySelector('.button-menu');
    let navList = document.querySelector('.nav');

    buttonMenu.addEventListener('click', function () {
        if (navList.classList.contains('nav--opened')) {
            navList.classList.remove('nav--opened');
            buttonMenu.classList.remove('button-menu--closed');
        } else {
            navList.classList.add('nav--opened');
            buttonMenu.classList.add('button-menu--closed');
        }
    })
}

if (document.querySelectorAll('.posts-item').length > 0) {
    let posts = document.querySelectorAll('.posts-item');
    let newArrayPosts = Array.from(posts).slice(0, 8);
    let buttonMore = document.querySelector('.button--more');

    posts.forEach(function (item) {
        item.classList.add('post-not-active');
    });

    newArrayPosts.forEach(function (item) {
        item.classList.remove('post-not-active');
        item.classList.add('post-active');
    })

    let visiblePostsItem = document.querySelectorAll('.post-active');

    if (visiblePostsItem.length >= 8) {
        buttonMore.classList.add('active');
    }

    buttonMore.addEventListener('click', function () {
        let hiddenPostsItem = document.querySelectorAll('.post-not-active');
        let hiddenArrayPosts = Array.from(hiddenPostsItem).slice(0, 8);

        if (hiddenPostsItem.length === 0) {
            buttonMore.classList.remove("active");
        }

        hiddenArrayPosts.forEach(function (item) {
            item.classList.remove('post-not-active');
            item.classList.add('post-active');
        })
    })
}

