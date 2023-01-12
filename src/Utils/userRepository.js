const models = require("@database/models");

const updateSetting = (temperature, humidity, authId) => {
    models.Users.update({
        temperature: temperature,
        humidity: humidity
    }, {
        where: {
            id: authId
        }
    }).catch((err) => {
        console.log(err)
    })
}

const findById = (authId) => {
    const temp = models.Users.findOne({
        where: {
            id: authId
        }
    }).then(result =>
        JSON.parse(JSON.stringify(result))
    )

    return temp
}
const createUser = (id, password, name) => {
    models.Users.create({
        id: id,
        password: password,
        name: name
    })
}
exports.createUser = createUser;
exports.updateSetting = updateSetting;
exports.findById = findById;
