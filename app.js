import {inputData, closeInput} from './utils/readline.js';
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

function coffeeService() {
  console.log("\n— Coffee Menu —");
  const cups = askNumber("How many cups", 1);
  const sugar = askNumber("Sugar (tsp per cup)", 1);
  const withMilk = askBoolean("With milk?", false);
  const result = makeCoffee({ cups, sugar, withMilk });
  console.log("\n" + result + "\n");
}

function teaService() {
  console.log("\n— Tea Menu —");
  const cups = askNumber("How many cups", 1);
  const sugar = askNumber("Sugar (tsp per cup)", 1);
  const teaBag = askBoolean("add Tea Bag?", false);
  const lemonSqueeze = askBoolean("add lemonsqueeze?", false);
  console.log(cups, sugar, teaBag, lemonSqueeze);
  const result = makeTea({ cups, sugar, teaBag, lemonSqueeze });
  console.log("\n" + result + "\n");
}

function friedRiceService() {
  console.log("\n— Fried Chicken Menu —");
  const servings = askNumber("How many servings", 1);
  const spicy = askNumber("spicy level (0-5)", 1);
  const egg = askBoolean("with egg?", false);
  const chicken = askBoolean("with chicken?", false);
  console.log(servings, spicy, egg, chicken);
  const result = makeFriedRice({servings, spicy, egg, chicken});
  console.log("\n" + result + "\n");
}

function grilledChickenService() {
  console.log("\n— Grilled Chicken Menu —");
  const servings = askNumber("How many servings", 1);
  const sweet = askNumber("sweet level (0-5)", 1);
  const spice = askBoolean("with spice?", false);
  const grilling = askNumber("grilling time?", 1);
  const result = makeGrilledChicken({servings, sweet, spice, grilling});
  console.log("\n" + result + "\n");
}

async function serviceLoop() {
  while (true) {
    showMenu();
    const choice = await inputData("Choose a CRUD Database (number): ");

    switch (choice) {
      case "1":
        tambahSantri();
        break;

      case "2":
        lihatSantri()
        break;

      case "3":
        updateSantri()
        break;

      case "4":
        deleteSantri()
        break

      case "0":
        console.log("\nShop closed. Thank you.\n");
        await closeInput()
        return;

      default:
        console.log("Invalid choice. Please try again.\n");
    }
  }
}

serviceLoop();
