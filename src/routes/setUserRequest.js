const express = require('express');
const userRepository = require('@src/Utils/userRepository');
const router = express.Router();
const {Login, NotLogin} = require('@middlewares/Checklogin');

router.post('/', Login, async (req, res, next) => {
    let {temperature, humidity} = req.body;
    if (temperature == null || humidity == null) {
        return res.status(415).send('Fill All Requirement');
    }

    let authId = req.userId.id

    console.log(authId);

    userRepository.updateSetting(temperature, humidity, authId)

    return res.status(200).json({
        code: 200,
        message: 'Setting Success'
    })
})


module.exports = router;
