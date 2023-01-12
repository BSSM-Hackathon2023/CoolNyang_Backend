const {SetState} = require('@Utils/stateRepository');
const stateService = (temp, hum, fire) => {
    try {
        const state = {
            temperature: temp,
            humidity: hum,
            fire: fire,
            user_id: "admin"
        }
        return !!SetState(state);
    } catch (err) {
        console.log(err);
        return false;
    }

}

exports.stateService = stateService;