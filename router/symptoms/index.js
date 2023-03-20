const express = require('express');
const { insertsymptom } = require('./insertion');
const {getbyid, updatesymptom} = require('./updation');
const {list} =require("./list");

const router = express.Router();

router.post('/insert',insertsymptom);
router.get('/getbyid',getbyid);
router.put('/updatesymptom',updatesymptom);
router.get('/list',list);


module.exports =  router ;
