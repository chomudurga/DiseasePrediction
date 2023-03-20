import sequelize from '../db/connection.js'

import Sequelize from 'sequelize'

const users = sequelize.define("users",{
    userId :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,       
    },
    userName:{
        type: Sequelize.STRING,
        allowNull :false,
    },
    email:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true,
    },
    mobileNumber:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    name:{
        type : Sequelize.STRING,
        allowNull : false,
    },
    password :{
           type : Sequelize.STRING,
           allowNUll : false,
           
    },
    role :{
        type : Sequelize.STRING,
        allowNull : false
    },
    gender:{
        type : Sequelize.STRING,
        allowNull : false,
    }
})

users.sync()

export default users
