import pool from './utils/db.js';
import {inputData, closeInput} from './utils/app.js'

async function updateSantri() {
  try {

    const choice_id = await inputData("how much id update:");
    const choice_nama = await inputData("new name?:")
    const choice_alamat = await inputData("new address?")
    const res = await pool.query('UPDATE santri SET nama = $1, alamat = $2 WHERE id = $3', [choice_nama, choice_alamat, choice_id]);
    
    console.log('new student success add on database:');
    console.log(res.rows[choice_id]);
  } catch (err) {
    console.error('failed update data student:', err.stack);
  } finally {
    await pool.end();
    closeInput()
  }
}
 
updateSantri();
