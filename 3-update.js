import pool from './utils/db.js';
import {inputData, closeInput} from './utils/readline.js'

export default async function updateSantri(choice_id, choice_nama, choice_alamat) {
  try {

    const res = await pool.query('UPDATE santri SET nama = $1, alamat = $2 WHERE id = $3', [choice_nama, choice_alamat, choice_id]);
    
    console.log('new student success add on database:');
    console.log(res.rows[0]);
  } catch (err) {
    console.error('failed update data student:', err.stack);
  }
}
