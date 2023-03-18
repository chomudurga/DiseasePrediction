import sequelize from '../db/connection.js'

import Sequelize from 'sequelize'

const symptoms =sequelize.define("symptoms",{
    
    symptomId:{
        type : Sequelize.INTEGER,
        allowIncrement : true,
        allowNull : false,
        primaryKey : true,
        references :{
            model : 'mapping',
            key : 'symptomId'
        }
    },
    symptomName:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    }
})

symptoms.sync()

export default symptoms