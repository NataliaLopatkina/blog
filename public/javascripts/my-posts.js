class MyPost {
    constructor(){
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        getCookie('token')

        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        };

        var token = getCookie('token');

        var decodedToken = parseJwt(token);
        var id = decodedToken.id;

        axios.get('http://localhost:3000/posts', {
            params: {
                id,
                type: 'myPost',
            }
        })

        .then(response => {
            const { posts } = response.data;
            const [arrayPosts] = posts;

            post.printPosts(arrayPosts);
            post.slicePostText();
        })

        .catch(error => {
            console.log(error)
            const text = 'Posts not found!';
            const page = document.querySelector('.page__container');
            notification.createNotification(text);
            notification.addNotification(page);
            notification.deleteNotification();
        })
    }
}

let myPost = new MyPost();
