var express = require('express');;
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const models = require("./database/models");

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

// models.sequelize.sync({ force: false })
//     .then(() => {
//         console.log('데이터베이스 연결 성공');
//     })
//     .catch((err) => {
//         console.error(err);
//     });


app.use(function(req, res, next) {
    return res.status(404).send('Sorry cant find that!');
});


module.exports = app;
