
import pool from './utils/db.js';
import {inputData, closeInput} from './utils/readline.js'
 
export default async function tambahSantri(namaSantri, alamatSantri) {
  try {
 
    const queryText = `INSERT INTO santri(nama, alamat) VALUES($1, $2) RETURNING *`;
    const res = await pool.query(queryText, [namaSantri, alamatSantri]);
 
    console.log('new student success add on database:');
    console.log(res.rows[0]); 
  } catch (err) {
    console.error('failed add a student:', err.stack);
  } 
}
