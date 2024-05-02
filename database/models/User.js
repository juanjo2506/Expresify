
module.exports = (sequelize, DataTypes) =>{
    const name = "Users";
    const constructor = {
        id : {
            primaryKey: true,
            autoIncrement:true,
            type: DataTypes.INTEGER,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        userRole_id:{
            type: DataTypes.INTEGER,
        },
        avatar:{
            type: DataTypes.STRING,
        },
        country:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    };
    const config = {
        tableName: "users",
        timestamps: false
    };
    const User= sequelize.define(name, constructor, config)
    User.associate = function (models) {
        User.belongsTo(models.UserRoles,{
            as: "role",
            foreignKey : "userRole_id"
        })
        User.hasMany(models.Products,{
            as: "products",
            foreignKey : "user_id"
        })
    }
    return User
}