const jwt = require('jsonwebtoken');
require("dotenv").config();
const SECRET_KEY = process.env.JWT_SECRET;
const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser())

exports.Login = (req, res, next) => {
    try {
        req.userId = jwt.verify(req.headers.token, SECRET_KEY);
        return next();
    }
    catch (error) {
        // 유효시간이 초과된 경우
        if (error.name === 'TokenExpiredError') {
            return res.status(419).json({
                code: 419,
                message: '토큰이 만료되었습니다.'
            });
        }
        // 토큰의 비밀키가 일치하지 않는 경우
        if (error.name === 'JsonWebTokenError') {
            //console.log(error)
            return res.status(401).json({
                code: 401,
                message: '유효하지 않은 토큰입니다.'
            });
        }
    }
}

exports.NotLogin = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.token, SECRET_KEY);
        return res.status(403).send('이미 로그인 되어있습니다');
    }
    catch (error) {
        return next();
    }
}