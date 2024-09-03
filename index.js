// task1--------------------------------------------

// let students = ["nestani", "lasha", "Demetre", "sally", "luka"];

// let reversedArr = students.reverse();

// console.log(reversedArr);

// task 2-------------------------------------------

// let students = ["nestani", "lasha", "Demetre", "sally", "luka"];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].includes("a")) {
//     console.log(`Students with 'a' in their name:${students[i]}`);
//   }
// }

// task 3-------------------------------------------

// let persons = ["David", "Elene", "Teona", "Giorgi"];

// let hasElene = false;

// for (let i = 0; i < persons.length; i++) {
//   let lowerCase = persons[i].toLocaleLowerCase();
//   if (lowerCase.includes("elene")) {
//     hasElene = true;
//     break;
//   }
// }

// if (hasElene) {
//   console.log(`Elene is in the persons array`);
// } else {
//   console.log("Elene is not in the persons array");
// }

// task 4-----------------------------------

// let arr = [1, 7, 35, 15, 30];

// let sortedArr = arr.sort((a, b) => a - b);

// console.log(sortedArr);

// task 5-----------------------------------

// let user = "admin";

// let passCode = 12345;

// let userName = String(prompt("Enter Username")).toLocaleLowerCase();
// let password = Number(prompt("Enter password "));

// if (userName === user && password === passCode) {
//   console.log("Login successful. Welcome!");
// } else if (userName == "" || password == "") {
//   console.log("Username or password cannot be empty");
// } else {
//   console.log("Incorrect username or Incorrect password");
// }

// task 6-----------------------------------

// let askFruit = String(prompt("What is your favorite fruit?")).toLowerCase();

// if (askFruit == "" || !isNaN(askFruit)) {
//   console.log("enter fruit name");
// } else if (askFruit == "apple") {
//   console.log("Apples are great for a quick snack!");
// } else if (askFruit == "bannana") {
//   console.log("Bananas are full of potassium!");
// } else if (askFruit == "orange") {
//   console.log("Oranges are a great source of vitamin C!");
// } else {
//   console.log(
//     "That's an interesting choice! I don't know much aboutthat fruit"
//   );
// }
