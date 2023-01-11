const express = require('express');
const router = express.Router();
const loginService = require('./Login.service');
const registerService = require('./Register.service');


router.post('/login',(req, res) => {
    const { id, password } = req.body;
    if(id  == null || password == null) {
        return res.status(400).json({
            code: 400,
            message: '아이디와 비밀번호를 입력해주세요.'
        })
    }
    const token = loginService(id,password);
    return res.status(200).json({
        code: 200,
        message: '로그인 성공',
        token: token
    })

})

router.post('/register',(req, res) => {
    const { id, password,name } = req.body;
    if(id  == null || password == null || name == null) {
        return res.status(400).json({
            code: 400,
            message: '아이디와 비밀번호를 입력해주세요.'
        })
    }
    const token = registerService(id,password,name);
    return res.status(200).json({
        code: 200,
        message: '로그인 성공',
        token: token
    })
})


module.exports = router;