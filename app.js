const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const varifyToken = require('./middelwares/verify-token');
const { signUpRouter, signInRouter, homeRouter, userRouter } = require('./routes');

app.use(cors());
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.listen(3000);

app.use('/', signInRouter);
app.use('/sign-up', signUpRouter);
app.use('/home', homeRouter);
app.use('/users', userRouter)

module.exports = app;
