module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        temperature: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        humidity: {
            type: DataTypes.FLOAT,
            allowNull: true
        }

    }, {
        timestamps: false,
        underscored: false,
        modelName: 'User',
        tableName: 'user',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Users.associate = models => {
        Users.hasMany(models.state, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
    };


    return Users;
};
