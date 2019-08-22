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

        .then(response => {
            const { posts } = response.data;
            const [ arrayPosts ] = posts;

            post.printPosts(arrayPosts);
        })

        .catch(error => {
            console.log(error)
            const text = 'Posts not found!';
            notification.showNotification(text);
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
