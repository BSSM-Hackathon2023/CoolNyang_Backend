const express = require('express');
const router = express.Router();
const {stateService} = require('@routes/state/state.service');


router.get('/set', (req, res) => {
    try {
        const {temp, hum, fire} = req.query;
        const result = stateService(temp, hum, fire);
        if (result) {
            return res.status(200).json({
                code: 200, message: '상태 변경 성공'
            })
        } else {
            return res.status(400).json({
                code: 400, message: '상태 변경 실패'
            })
        }
    } catch (e) {
        console.log(e);
        return res.status(400).json({
            code: 400, message: '상태 변경 실패'
        })
    }

})


module.exports = router;