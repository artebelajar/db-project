import pool from './utils/db.js';
import { closeInput } from './utils/readline.js';
 
export default async function lihatSantri() {
  try {
    const res = await pool.query('SELECT * FROM santri ORDER BY id ASC');
 
    if (res.rows.length === 0) {
      console.log('not found student data.');
      return;
    }
 
    console.log('Data Student:');
    res.rows.forEach(santri => {
      console.log(`ID: ${santri.id}, Name: ${santri.nama}, addres: ${santri.alamat}`);
    });
 
  } catch (err) {
    console.error('failed add a student:', err.stack);
  } 
}
