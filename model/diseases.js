import sequelize from '../db/connection.js'

import Sequelize from 'sequelize'

const diseases =sequelize.define("diseases",{
    diseaseId:{
        type : Sequelize.INTEGER,
        allowIncrement : true,
        allowNull : false,
        primaryKey : true,
        references :{
            model : 'mapping',
            key : 'diseaseId'
        }
    },
    diseaseName:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    }
})

diseases.sync()

export default diseases