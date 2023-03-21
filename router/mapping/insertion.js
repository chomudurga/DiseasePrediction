const body =require('body-parser')
const diseases = require('../../models/diseases.js')
const symptoms = require('../../models/symptoms.js')
const mapping = require('../../models/mapping.js')
let did=null;
let symid=null;

const insertion = async (req, res) => {
  const disname = req.body.disname;
  const symname = req.body.symname;

  const disease = await diseases.findOne({ where: { diseaseName: disname } });
  if (disease) {
    did = disease.diseaseId;
    const symptom = await symptoms.findOne({ where: { symptom_name: symname } });
    if (symptom) {
      symid = symptom.symptomId;
    } else {
      console.log("symptom not found");
    }
  } else {
    console.log("disease not found");
  }
  
//   console.log(did,symid); 
    mapping.create(did,symid)
        .then(()=>{
            console.log(req.body)
            console.log(did,symid); 
        })
        .catch((error)=>{
            console.log(error)
        })
      return  res.send()

};


module.exports = {insertion};
