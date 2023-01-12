const models = require("@database/models");

const getNowState = () => {
    return models.state.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    }).then(result =>
        JSON.parse(JSON.stringify(result))
    ).catch((err) => {
        console.log(err)
    })
}

exports.getNowState = getNowState;
