const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../../database/models');
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const RegisterService = (id,password,name) => {
    if(id == null || password == null) {
        return {
            code: 400,
            message: '아이디와 비밀번호를 입력해주세요.'
        }
    }
    var hashPassword = bcrypt.hash(password, 12);
    models.user.create({
        id: id,
        password: hashPassword,
        name: name
    })

    return jwt.sign({
        id: id
    },jwtSecret, {
        expiresIn: '6h'
    })

}

module.exports = RegisterService;