//const { response } = require('express');

const { stringify } = require('uuid');


(async function () {
  getAllCats = async (setCats, userId) => {
    return new Promise(resolve => {
      let { pool } = require('./fs_pool')
      const { Pool } = require('pg');
      pool = new Pool(pool)

      pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        console.log('userId = ', userId, 'InSide CAT-DB-servises')
        client.query('SELECT  id, cat_name FROM category WHERE userId = $1', [userId], async (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          setTimeout(() => {
            resolve();
          }, 1);
          let cats = await result.rows
          processCats(setCats, cats)
        })
    });
  })
}


  let processCats = (setCats, cats) => {
    for (let i = 0; i < cats.length; i++) {
      let newCat = { name:cats[i].cat_name, id:cats[i].id}
      //console.log('pc ', newCat)
      setCats.current = newCat
    }
  }


  //await getAllCats(setCats,'11d6af03-20ac-4f04-a21c-28ec418a2c18');
  //console.log("outside  ", setCats.cats);

})();
module.exports = getAllCats;


