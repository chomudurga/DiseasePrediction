import sequelize from '../db/connection.js'
import symptoms from './symptoms.js'
import diseases from './diseases.js'

import Sequelize from 'sequelize'

const Mapping =sequelize.define("mapping",{
    mappingId :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },  
})
Mapping.belongsTo(symptoms,{
    foreignKey : "symptomsId",
    targetKey : "symptomId"
})

Mapping.belongsTo(diseases,{
    foreignKey : "diseasesId",
    targetKey : "diseaseId"
})

Mapping.sync()

export default Mapping
