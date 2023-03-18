import sequelize from '../db/connection.js'
import Sequelize from 'sequelize'

const admin = sequelize.define("admin",{
    adminId :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    adminName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    adminEmail :{
        type : Sequelize.STRING,
        allowNull : false,
        primaryKey : true
    },
    adminPassword :{
        type : Sequelize.STRING,
        allowNUll : false,
    },

})

admin.sync()

export default admin
