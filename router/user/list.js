import users from '../../model/userSignup.js'

const list = async (request, response) => {
    try {
      const user= await users.findAll(); 
      response.send(user); 
    } catch (error) {
      console.log(error);
      response.status(500).send('Error retrieving users');
    }
  };

export default list