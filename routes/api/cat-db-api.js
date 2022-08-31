const express = require('express')
const Router = require('express-promise-router')
const app = express()

const db = require('../db')

const router = new Router()

//GET all categories
router.get('/:userId', async (request, response) => {
    const userId = request.params.userId
   console.log("userId = ", userId)
    await db.query('SELECT  cat_name FROM category WHERE userId = $1;', [userId], (err, result) => {
        if (err) {
          return next(err)
        }
        response.send(result.rows)
    })
        
    
});


module.exports = router;
