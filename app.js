require('better-module-alias')(__dirname);
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const models = require("@database/models");
const authController = require('@routes/auth/Login.controller');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);
app.use('/auth', authController);
models.sequelize.sync({ force: true })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });


app.use(function(req, res, next) {
    return res.status(404).send('Sorry cant find that!');
});


module.exports = app;
