import pool from './utils/db.js';
import {inputData, closeInput} from './utils/app.js'
 
async function tambahSantri() {
  try {
    const namaSantri = await inputData("student name?");
    const alamatSantri = await inputData('student address?');
 
    const queryText = `INSERT INTO santri(nama, alamat) VALUES($1, $2) RETURNING *`;
    const res = await pool.query(queryText, [namaSantri, alamatSantri]);
 
    console.log('new student success add on database:');
    console.log(res.rows[0]); // Menampilkan data yang baru saja dimasukkan
  } catch (err) {
    console.error('failed add a student:', err.stack);
  } finally {
    await pool.end();
    await closeInput();
  }
}
 

tambahSantri();
