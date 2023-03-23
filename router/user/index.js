import express from 'express'

import userinsert from './insertion.js'
//import update from './updation.js'
import deleteuser from './deletion.js'
import list from './list.js'
const router = express.Router()

router.post('/add',userinsert);
//router.put('/update',update.update);
//router.get('/getbyid',update.getbyid);
router.delete('/delete', deleteuser);
router.get('/list',list);

export default router
