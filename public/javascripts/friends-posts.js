class Posts {
    constructor() {
        this.init();
    }

    getPosts() {
        axios.get('http://localhost:3000/posts', {
            params: {}
        })

        .then(response => {
            const { friendsPosts } = response.data;
            const [arrayPosts] = friendsPosts;

            post.printPosts(arrayPosts);
        })

        .catch(error => {
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

let posts = new Posts();
