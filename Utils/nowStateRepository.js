const models = require("../database/models");

const getNowState = () => {
    return models.state.findOne({
        where:{
            id: 1
        }
    }).then(result =>
        JSON.parse(JSON.stringify(result))
    ).catch((err) => {
        console.log(err)
    })
}

exports.getNowState = getNowState;
