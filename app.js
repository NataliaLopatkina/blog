const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { usersRouter, signupRouter, signinRouter, addPostRouter } = require('./routes');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.listen(3000);

app.use('/sign-up', signupRouter);
app.use('/sign-in', signinRouter);
app.use('/users', usersRouter);
app.use('/add-post', addPostRouter);

module.exports = app;
