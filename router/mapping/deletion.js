import body from 'body-parser'

import Mapping from '../../model/mapping.js'
import diseases from '../../model/diseases.js'
import symptoms from '../../model/symptoms.js'

let did=null;
let symid=null;

const mapdelete = async (request, response) => {
  const diseasename = request.body.diseasename;
  const symptomname = request.body.symptomname;

  const disease = await diseases.findOne({ where: { diseaseName: diseasename } });
  if (disease) {
    did = disease.diseaseId;
    const symptom = await symptoms.findOne({ where: { symptomName: symptomname } });
    if (symptom) {
      symid = symptom.symptomId;
    } else {
      console.log("symptom not found");
    }
  } else {
    console.log("disease not found");
  }
 let DiseaseId = {
    diseaseid:did,
    symptomid:symid

}
    Mapping.destroy({where : DiseaseId})
        .then(()=>{
            console.log(request.body)
            console.log(did,symid); 
        })
        .catch((error)=>{
            console.log(error.message)
        })
      return  response.send()

};

export default mapdelete;