import express from 'express'

import diseaseinsert from './insertion.js'
// import update from './updation.js'
// import deleteDisease from './deletion.js'
// import list from './list.js'
const router = express.Router()

router.post('/add',diseaseinsert);
// router.put('/update',update);
// router.delete('/delete', deleteDisease);
// router.get('/list',list);

export default router
