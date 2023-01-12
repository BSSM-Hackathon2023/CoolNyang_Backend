const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('@database/models');
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const {createUser} = require('@Utils/userRepository');
const RegisterService = (id, password, name) => {
    try {
        if (id == null || password == null) {
            return {
                code: 400,
                message: '아이디와 비밀번호를 입력해주세요.'
            }
        }
        const hashPassword = bcrypt.hashSync(password, 12);
        console.log(hashPassword)
        createUser(id, hashPassword, name);

        return jwt.sign({
            id: id
        }, jwtSecret, {
            expiresIn: '6h'
        })
    } catch (e) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }
}

module.exports = RegisterService;