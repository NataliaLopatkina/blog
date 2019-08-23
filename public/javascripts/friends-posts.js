class Posts {
    constructor() {
        this.init();
    }

    posts = [];
    sortType = 'ascend';

    getPosts() {
        axios.get('/posts')

            .then(res => {
                const { friendsPosts } = res.data;
                this.posts = friendsPosts;
                post.renderPosts(this.posts, this.sortType);
            })

            .catch(err => {
                const text = 'Posts not found!';
                notification.error(text);
            })
    }

    init() {
        const buttonMenu = document.querySelector('.button-menu');
        buttonMenu.addEventListener('click', () => {
            menu.toggleMenu(buttonMenu);
        })
        
        this.getPosts();

        const buttonSort = document.querySelector('.sort__button');
        buttonSort.addEventListener('click', () => {
            this.sortType = this.sortType === "ascend" ? "descend" : "ascend";
            post.deletePosts();
            post.renderPosts(this.posts, this.sortType);
        }, this)
    }
}

let posts = new Posts();
