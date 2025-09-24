import pool from './utils/db.js';
import {inputData, closeInput} from './utils/readline.js'

export default async function deleteSantri(choice_id) {
  try {

    const queryText = await pool.query('DELETE FROM santri WHERE id = $1', [choice_id]);
    
    console.log('new student success delete on database:');
  } catch (err) {
    console.error('failed delete data student:', err.stack);
  }
}
