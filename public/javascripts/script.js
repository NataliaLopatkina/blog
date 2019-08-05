// Open/close menu

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
    
// Button like
if (document.querySelectorAll('.user-like').length > 0) {
    let buttonsLike = document.querySelectorAll('.user-like');

    buttonsLike.forEach(function(item) {
        item.addEventListener('click', function () {
            item.classList.toggle('friend');
        })
    })
}

// Show password
if (document.querySelectorAll('.form__password-button').length > 0) {
    let buttonShowPassword = document.querySelector('.form__password-button');
    let inputPassword = document.getElementById('password');

    buttonShowPassword.addEventListener('click', function () {
        buttonShowPassword.classList.toggle('not-show');

        let typeUnput = inputPassword.getAttribute('type');

        if (typeUnput == 'password') {
            inputPassword.setAttribute('type', 'text');
        } else {
            inputPassword.setAttribute('type', 'password');
        }
    })
}

// More posts

if (document.querySelectorAll('.posts-item').length > 0) {
    let posts = document.querySelectorAll('.posts-item'); // Все посты на странице
    let newArrayPosts = Array.from(posts).slice(0, 8); // Максимальное количество элеммнтов на странице
    let buttonMore = document.querySelector('.button--more'); // Кнопка показать больше

    posts.forEach(function(item) {
        item.classList.add('post-not-active'); // Скрыть все элементы
    });

    newArrayPosts.forEach(function(item) {
        item.classList.remove('post-not-active');
        item.classList.add('post-active'); // Показ 
    })

    let visiblePostsItem = document.querySelectorAll('.post-active');

    if (visiblePostsItem.length >= 8) {
        buttonMore.classList.add('active'); // Добавление кнопки
    }

    buttonMore.addEventListener('click', function() {
        let hiddenPostsItem = document.querySelectorAll('.post-not-active');
        let hiddenArrayPosts = Array.from(hiddenPostsItem).slice(0, 8);

        if (hiddenPostsItem.length === 0) {
            buttonMore.classList.remove("active");
        }

        hiddenArrayPosts.forEach(function(item) {
            item.classList.remove('post-not-active');
            item.classList.add('post-active');
        })
    })
}

// Slice text post

if (document.querySelectorAll('.posts-item__text').length > 0) {
    let maxLengthText = 210;
    let textPost = document.querySelectorAll('.posts-item__text');

    textPost.forEach(function(item) {
        if (item.textContent.length > maxLengthText) {
            var visisblePathText = item.textContent.slice(0, maxLengthText) + ' ...';
            item.innerText = visisblePathText;
        }
    })
}
