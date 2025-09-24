import { inputData, closeInput } from './utils/readline.js';
import pool from './utils/db.js';
import tambahSantri from './1-create.js';
import lihatSantri from './2-read.js';
import updateSantri from './3-update.js';
import deleteSantri from './4-delete.js';

function showMenu() {
  console.log("\n=== DATEABASE SERVICES ===");
  console.log("1) Create Database");
  console.log("2) Read Database");
  console.log("3) Update Database");
  console.log("4) Delete Database");
  console.log("0) Close Shop");
}

async function askCreate() {
  const namaSantri = await inputData("student name?");
  const alamatSantri = await inputData('student address?');
  console.log(namaSantri, alamatSantri);
  await tambahSantri(namaSantri, alamatSantri);
}


async function askUpdate() {
  const choice_id = await inputData("how much id update:");
  const choice_nama = await inputData("new name?:")
  const choice_alamat = await inputData("new address?")
  await updateSantri(choice_id, choice_nama, choice_alamat);
}

async function askDelete() {
  const choice_id = await inputData("how much id will delete:");
  await deleteSantri(choice_id);
}

async function serviceLoop() {
  while (true) {
    showMenu();
    const choice = await inputData("Choose a CRUD Database (number): ");

    switch (choice) {
      case "1":
        await askCreate();
        break;

      case "2":
        await lihatSantri()
        break;

      case "3":
        await askUpdate()
        break;

      case "4":
        await askDelete()
        break

      case "0":
        console.log("\nShop closed. Thank you.\n");
        await pool.end()
        await closeInput()
        return;

      default:
        console.log("Invalid choice. Please try again.\n");
    }
  }
}

serviceLoop();
