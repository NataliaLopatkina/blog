class AddPost {
    constructor() {
        this.init();
    }

    formSubmit() {
        validation.validationForm();

        const title = document.getElementById('title');
        const text = document.getElementById('text-post');
        const postData = { title: title.value, text: text.value }

        if (title.validity.valid && text.validity.valid) {
            axios.post('/add-post', postData)

            .then(res => {
                window.location.assign('/my-posts')
            })

            .catch(err => {
                console.log(err)
            })
        }
    }

    init() {
        const formSend = document.querySelector('.form');
        formSend.addEventListener('submit', () => {
            event.preventDefault();
            this.formSubmit();
        })

        const buttonMenu = document.querySelector('.button-menu');
        buttonMenu.addEventListener('click', ()=> {
            menu.toggleMenu(buttonMenu);
        })
    }
}

let addPost = new AddPost();
