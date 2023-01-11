const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../../database/models');
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const LoginService = (id,password) => {
    const hashPassword = bcrypt.hash(password, 12);
    const user = models.user.findOne({
        where: {
            id: id,
            password: hashPassword
        }
    })
    if (user == null) {
        return {
            code: 400,
            message: '아이디 또는 비밀번호가 틀렸습니다.'
        }
    }
    return jwt.sign({
        id: id
    }, jwtSecret, {
        expiresIn: '6h'
    });
}
module.exports = LoginService;

