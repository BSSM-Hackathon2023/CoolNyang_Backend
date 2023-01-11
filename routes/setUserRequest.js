const express = require('express');
const userRepository = require('/Utils/userRepository');
const router = express.Router();
const models = require('../database/models');

router.post('/api/user/setting',auth,async (req, res, next) =>{
    let {temperature,humidity} = req.body;
    if(temperature == null || humidity == null) {
        return res.status(415).send('Fill All Requirement');
    }

    let authId = req.userId

    userRepository.updateSetting(temperature, humidity, authId)
})


module.exports = router;
