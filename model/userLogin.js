import sequelize from  '../db/connection.js'

import Sequelize from 'sequelize'

import users from './userSignup.js'

const userLogin =sequelize.define("userlogin",{
    userId :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    }
})

userLogin.belongsTo(users,{
    foreignKey : 'UserName',
    targetKey :'userName'
})

userLogin.belongsTo(users,{
    foreignKey : 'Password',
    targetKey : 'password'
})

userLogin.belongsTo(users,{
    foreignKey : 'Email',
    targetKey : 'email'
})

userLogin.sync()

export default userLogin