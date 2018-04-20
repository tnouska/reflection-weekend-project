const router = require('express').Router()
//brings in express from node-modules and uses the Router method from 
const pool = require('../modules/pool')
//sources in pool.js so that we can use the reflection_board database as our pool

router.get('/', (req,res)=> {
    const queryText = 'SELECT * from "reflections"';
    pool.query(queryText)
    .then((response)=> {
        res.send(response.rows);
    })//end .then -- will send our made queryText to the pool and what ever we get back will be sent as a response.
    .catch((error)=>{
        console.log('error in reflections.router.get: ', error);
        res.sendStatus(500);
    });//end .catch -- if errors are received this will log the error on sever side and send 500 status to client
});//end reflections.router.get