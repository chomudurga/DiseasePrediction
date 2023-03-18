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
        references :{
            model : 'userlogin',
            key : 'userName'
        }
    },
    email:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true,
        references :{
            model : 'userlogin',
            key : 'email'
        }

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
           references :{
            model : 'userlogin',
            key : 'password' 
           }
    },
    gender:{
        type : Sequelize.STRING,
        allowNull : false,
    }
})

users.sync()

export default users