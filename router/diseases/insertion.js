import body from 'body-parser'

import diseases from '../../model/diseases.js'


const diseaseinsert = (request,response)=>{
    const insert ={
        diseaseName : request.body.diseaseName
    }
    diseases.create(insert)
        .then(()=>{
            console.log(request.body)
        })
        .catch((error)=>{
            console.log(error)
        })
      return  response.send()
    
    }
export default diseaseinsert

