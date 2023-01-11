const { PythonShell } = require("python-shell");
const userRepository = require('@Utils/userRepository');
const stateRepository = require('@Utils/nowStateRepository');
const {now} = require("sequelize/lib/utils");
const express = require('express');
const router = express.Router();

router.get('/',async (req, res, next) =>{
    // let authId = req.userId
    // let user = userRepository.findById(authId)

    // let nowState = stateRepository.getNowState();

    let options = {
        scriptPath: "./src/routes",
        // 파이썬 코드로 설정 온도,습도 지금 온도 습도 빛
        // args: [user.temperature, user.humidity, nowState.temperature, nowState.humidity, nowState.heatIndex, nowState.light]
        args: [19, 30, 2, 15, 20]
    };
    PythonShell.run("analyze.py", options, function(err, data) {
        if (err) throw err;
        console.log(data);
        return res.status(200).json({
            temperature: data[0],
            humidity: data[1],
            light: data[2]
        })
    });
})

module.exports = router;
