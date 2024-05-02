
module.exports = (sequelize, DataTypes) =>{
    const name = "UserRoles";
    const constructor = {
        id : {
            primaryKey: true,
            autoIncrement:true,
            type: DataTypes.INTEGER,
        },
        userRoll:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    };
    const config = {
        tableName: "userrole",
        timestamps: false
    };
    const Role= sequelize.define(name, constructor, config)
    Role.associate = function (models) {
        Role.hasMany(models.Users,{
            as: "users",
            foreignKey : "userRole_id"
        })
    }
    return Role
}