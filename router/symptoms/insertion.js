const body = require('body-parser');
const Symptom = require('../../models/symptoms.js');

const insertsymptom = (req,res) => {
    const sym = {
        symptom_name: req.body.symptom_name,
    };

  Symptom.create(sym) 
       .then(() => {
        console.log(req.body);
       }) 
       .catch((error) => {
        console.log(error);
       })
return res.send();
}

module.exports = {insertsymptom}
