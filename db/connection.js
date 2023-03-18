import Sequelize from 'sequelize'

const sequelize = new Sequelize("DiseasePrediction","root","Chomu@410",{
    dialect:"mysql"
})

export default sequelize
