class MyPost {
    constructor() {
        this.init();
    }

    getPosts() {
        axios.get('http://localhost:3000/posts', {
            params: {
                type: 'myPost',
            }
        })

        .then(res => {
            const { posts } = res.data;
            post.renderPosts(posts);
        })

        .catch(err => {
            const text = 'Posts not found!';
            notification.error(text);
        })
    }

    init() {
        this.getPosts();

        const buttonMenu = document.querySelector('.button-menu');
        buttonMenu.addEventListener('click', () => {
            menu.toggleMenu(buttonMenu);
        })
    }
}

let myPost = new MyPost();
