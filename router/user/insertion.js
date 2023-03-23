import body from 'body-parser'

import users from '../../model/userSignup.js'


const userinsert = async (request,response)=>{
    const insert =request.body.userId
    const existingData = await users.findOne({
        where: { userId:insert }
      });
    if(existingData){
        return response.status(400).json({ error: 'Data already exists' })
    }
    else{
        const uname = request.body.userName
        const Email =request.body.email
        const mobile = request.body.mobileNumber
        const Name = request.body.name
        const pwd = request.body.password
        const Role = request.body.role
        const Gender = request.body.gender
    users.create({userName : uname, email : Email, mobileNumber : mobile, name : Name, password : pwd, role : Role, gender : Gender})
        .then(()=>{
            console.log(request.body)
        })
        .catch((error)=>{
            console.log(error.message)
        })
      return  response.send()
   }
    }


export default userinsert;
