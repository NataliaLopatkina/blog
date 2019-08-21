class AddPost {
    constructor() {
        const formSend = document.querySelector('.form');

        formSend.addEventListener('submit', () => {
            event.preventDefault();

            validation.validationForm();

            const title = document.getElementById('title');
            const text = document.getElementById('text-post');
            const postData = { title: title.value, text: text.value }

            if (title.validity.valid && text.validity.valid) {
                axios.post('/add-post', postData)

                .then(response => {
                    window.location.assign('/my-posts')
                })

                .catch(error => {
                    console.log(error)
                })
            }
        })
    }
}

let addPost = new AddPost();
