import pool from './utils/db.js';
import {inputData, closeInput} from './utils/app.js'

async function deleteStudent() {
  try {

    const choice_id = await inputData("how much id will delete:");

    const queryText = await pool.query('DELETE FROM santri WHERE id = $1', [choice_id]);
    
    console.log('new student success add on database:');
  } catch (err) {
    console.error('failed delete data student:', err.stack);
  } finally {
    await pool.end();
    closeInput()
  }
}
 
deleteStudent();
