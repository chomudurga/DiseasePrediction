import express from 'express'
import disease from './diseases/index.js';
import symptom from './symptoms/index.js';

const app =express()
//app.use(express.json)

app.use('/disease',disease);
app.use('/symptom',symptom);


export default app
