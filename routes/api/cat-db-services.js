//const { response } = require('express');

const { stringify } = require('uuid');


(async function() {
    const pg = require('pg')
//GET all categories
 getAllCats  = async (userId) => {
    let {pool} = require('./fs_pool')
    const { Pool } = require('pg');
    pool = new Pool(pool)

   await pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        console.log('userId = ', userId ,'InSide CAT-DB-servises')
        client.query('SELECT  id, cat_name FROM category WHERE userId = $1',[userId], (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          let cats = result.rows
           console.log('cats ', cats)
           addPrefs(cats)
          return cats
        })
      })
};

 const addPrefs = async (cats) =>{

    console.log('addPrefs cats ',cats)

}
console.log(getAllCats('11d6af03-20ac-4f04-a21c-28ec418a2c18'))

})();
module.exports = getAllCats;


