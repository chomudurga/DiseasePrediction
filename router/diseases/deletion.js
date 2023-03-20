import diseases from '../../model/diseases.js'

const deleteDisease=(request,response)=>{
  
    const Delete = {
        diseaseName : request.body.diseaseName  
    }
    diseases.destroy({
       where : Delete
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error.message)
    })
    return response.send()
}

export default deleteDisease

