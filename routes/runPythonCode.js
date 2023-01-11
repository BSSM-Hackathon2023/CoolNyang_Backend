const { PythonShell } = require("python-shell");
const userRepository = require('/Utils/userRepository');
const stateRepository = require('/Utils/nowStateRepository');
const {now} = require("sequelize/lib/utils");

router.get('/api/recommend/temp',auth,async (req, res, next) =>{
    let authId = req.userId
    let user = userRepository.findById(authId)

    let nowState = stateRepository.getNowState();

    let options = {
        scriptPath: "/Users/leechangbo/study/CoolNyang_Backend",
        // 파이썬 코드로 설정 온도,습도 지금 온도 습도 빛 소리
        args: [user.temperature, user.humidity, nowState.temperature, nowState.humidity, nowState.heatIndex, nowState.light]
    };
    PythonShell.run("my_script.py", options, function(err, data) {
        if (err) throw err;
        console.log(data);
    });
})
