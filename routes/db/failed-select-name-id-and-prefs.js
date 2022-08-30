(async function () {

    getAllCats = async (setCats, userId) => {
    
      let { pool } = require('./fs_pool')
      const { Pool } = require('pg');
      pool = new Pool(pool)
      (async () => {
        // note: we don't try/catch this because if connecting throws an exception
        // we don't need to dispose of the client (it will be undefined)
        const client = await pool.connect()
        try {
          await client.query('BEGIN')
          const queryCatText = 'SELECT  id, cat_name FROM category WHERE userId = $1;'
          const res = await client.query(queryCatText, [userId])
          const queryPrefsText = 'select id, pref, procon from preference where cat_id = $1;'
          const queryPrefsValues = [res.rows[0].id, 'preferences']
          await client.query(queryPrefsText, queryPrefsValues)
          await client.query('COMMIT')
        } catch (e) {
          await client.query('ROLLBACK')
          throw e
        } finally {
          client.release()
        }
      })().catch(e => console.error(e.stack))
      
}


  let processCats = (setCats, cats) => {
    for (let i = 0; i < cats.length; i++) {
    let newCat = { name:cats[i].cat_name, id:cats[i].id}
      console.log('pc ', newCat)
      setCats.current = newCat
    }
  }

  const setCats = {
    set current(category) {
      this.cats.push(category);
    },
    cats: []
  }



  await getAllCats(setCats,'11d6af03-20ac-4f04-a21c-28ec418a2c18');
  console.log("outside  ", setCats.cats);
})();
module.exports = getAllCats;