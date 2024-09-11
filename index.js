//  1 task-----------------------

// let str = "level";

// let palindrome = (str) => {
//   let lowerStr = str.toLowerCase();
//   for (let i = 0; i < lowerStr.length / 2; i++) {
//     if (lowerStr[i] !== lowerStr[lowerStr.length - 1 - i]) {
//       return `${str} is not a palindrome`;
//     } else {
//       return `${str} is a palindrome`;
//     }
//   }
// };

// let result = palindrome(str);

// console.log(result);

// -----------------------------

// let str = "level";

// let isPlindrome = (str) => {
//   let lowerStr = str.toLowerCase();
//   let reverse = str.split("").reverse().join("").toLowerCase();

//   if (lowerStr !== reverse) {
//     return `${str} is not a palindrome`;
//   } else {
//     return `${str} is a palindrome`;
//   }
// };

// let result = isPlindrome(str);

// console.log(result);

//  2 task-----------------------

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];

// let newFruit = fruits.splice(1, 2);
// console.log(newFruit);

//  3 task-----------------------

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];

// let sort = (arr) => {
//   let alphabeticalArr = arr.sort();
//   return alphabeticalArr;
// };

// let result = sort(fruits);

// console.log(result);

// 4 task-----------------------
// let dolphinsScored = [85, 54, 41];
// let koalasScored = [23, 34, 27];

// let calcAvrg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAvrg(
//   dolphinsScored[0],
//   dolphinsScored[1],
//   dolphinsScored[2]
// );

// let scoreKoalas = calcAvrg(koalasScored[0], koalasScored[1], koalasScored[2]);

// let checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Delfins win ${avgDolphins} vs. ${avgKoalas}),`;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win ${avgKoalas} vs. ${avgDolphins}),`;
//   } else {
//     return `  No team wins...`;
//   }
// };

// console.log(checkWinner(scoreDolphins, scoreKoalas));
