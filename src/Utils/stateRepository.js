const models = require("@database/models");

const SetState = (state) => {
    console.log(state);
    try {
        models.state.create({
            temperature: state.temperature,
            humidity: state.humidity,
            windChill: state.fire,
            user_id: state.user_id
        });
        return true;
    }catch (e) {
        console.log(e);
        return false;
    }

}

exports.SetState = SetState;