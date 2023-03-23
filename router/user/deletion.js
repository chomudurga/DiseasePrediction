import  users from '../../model/userSignup.js'

const deleteuser = (request,response)=>{
  
    const Delete =  request.body.userId  
    const existingData = users.findOne({
        where: { userId:Delete}
      });
    if(!existingData){
        return response.status(400).json({ error: 'Data is not existed to delete' });
    }
    else{
    users.destroy({
        where : { userId:Delete}
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error.message)
    })
    return response.send()
}
}

export default deleteuser;