module.exports = (sequelize, DataTypes) => {
    const state = sequelize.define("state", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temperature: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        humidity: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        windChill: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

    }, {
        timestamps: true,
        underscored: false,
        modelName: 'state',
        tableName: 'state',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    state.associate = models => {
        state.belongsTo(models.Users, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
    };


    return state;
};
