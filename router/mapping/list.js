import  Mapping from '../../model/mapping.js'

const list = async (request, response) => {
    try {
      const map= await Mapping.findAll(); 
      response.send(map); 
    } catch (error) {
      console.log(error);
      response.status(500).send('Error retrieving users');
    }
  };

export default list