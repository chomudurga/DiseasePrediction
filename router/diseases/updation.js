import diseases from '../../model/diseases.js'


const getbyid = async (request,response) =>{
    const diseaseId = request.body.diseaseId
    let id= await diseases.findByPk(diseaseId)
    return response.status(200).send(id)
}

const update= (request,response) => {
    const diseaseId = request.body.diseaseId;

    diseases.findByPk(diseaseId)
    .then((diseases) => {
         diseases.diseaseName = request.body.diseaseName;
         return diseases.save();
    })
   .then(() =>{
    console.log("updated");
    //return response.status(200).send()
   })
   .catch((error) => {
    console.log(error.message);
    //return response.status(500).send()
   })
}

export default {update,getbyid}




