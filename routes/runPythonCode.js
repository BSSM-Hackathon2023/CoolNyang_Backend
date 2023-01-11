const { PythonShell } = require("python-shell");
const express = require('express');
const userRepository = require('/Utils/userRepository');

router.get('/api/recommend/temp',auth,async (req, res, next) =>{
    let authId = req.userId;
    let options = {
        scriptPath: "/Users/leechangbo/study/CoolNyang_Backend",
        // 파이썬 코드로 설정 온도,습도 지금 온도 습도 빛 소리
        args: ["value1", "value2", "value3"]
    };
    PythonShell.run("my_script.py", options, function(err, data) {
        if (err) throw err;
        console.log(data);
    });
})
