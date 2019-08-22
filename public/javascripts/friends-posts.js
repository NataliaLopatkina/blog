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

            const sortButton = document.querySelector('.sort__button');
            sortButton.addEventListener('click', () => {
                if (sortButton.classList.contains('sort__button--reverse')) {
                    sortButton.classList.remove('sort__button--reverse');
                    this.sortPosts(arrayPosts);
                    post.deletePosts();
                    post.printPosts(arrayPosts.reverse());
                    
                } else {
                    sortButton.classList.add('sort__button--reverse');
                    this.sortPosts(arrayPosts);
                    post.deletePosts();
                    post.printPosts(arrayPosts);
                }
            })
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

    sortPosts(arrayPosts) {
        arrayPosts.sort((prev, next) => {
            if (prev.date < next.date) return -1;
            if (prev.date > next.date) return 1
        })
    }
}

let posts = new Posts();
