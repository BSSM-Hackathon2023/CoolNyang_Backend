const models = require("../database/models");

const updateSetting = (temperature, humidity, authId) => {
    models.User.UPDATE({
        temperature: temperature,
        humidity: humidity
    },{
        where:{
            id: authId
        }``
    }).catch((err) => {
        console.log(err)
    })
}

const findById = (authId) => {
    const temp = models.User.findOne({
        where:{
            id: authId
        }
    }).then(result =>
        JSON.parse(JSON.stringify(result))
    )

    return temp
}

exports.updateSetting = updateSetting;
exports.findById = findById;
