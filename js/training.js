
// let message = "Sale";
// let checkForSpam = function (message) {
//     let result;
//     // Change code below this line
//     message = message.toLowerCase();
//     if (message = message.includes("spam") + message.includes("sale")) {
//         result = true;
//     }
//     else {
//         result = false;
//     }
//     // Change code above this line
//     return result;
// }
// console.log (checkForSpam("we have goods"));
// console.log (checkForSpam("we have sAle"));

// let a = 2;
// let b = 4;
// console.log (a);
// console.log ('b', b);

// let checkAge = function (age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }
//   console.log (checkAge(55));

// let checkPassword = function (password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     }
//     return "Access denied, wrong password!";
//     // Change code above this line
//   }
//   console.log (checkPassword("mangohackzor"));
//   console.log (checkPassword("polyhax"));
//   console.log (checkPassword("jqueryismyjam"));

// let checkStorage = function (available, ordered) {
//     // Change code below this line
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } 
//     if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }
  
//     return "The order is accepted, our manager will contact you";
//     // Change code above this line
//   }
//   console.log (checkStorage(100, 50));
//   console.log (checkStorage(100, 130));
//   console.log (checkStorage(70, 0));

// const fruits = ["apple", "plum", "pear", "orange", "pineapple"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// // const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];

// console.log (firstElement);
// console.log (secondElement);
// console.log (lastElement);

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log (fruits);
// console.log(fruits);

// 
// let getExtremeElements = function (array) {
//     // Change code below this line
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
  
//   return  array = [firstElement, lastElement];
//     // Change code above this line
//   }
// console.log(getExtremeElements([1, 2, 3, 4, 5, 6]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// let splitMessage = function (message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter);
//     // Change code above this line
//     return words;
//   }
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));

// let calculateEngravingPrice = function (message, pricePerWord) {
//     // Change code below this line
// let total = message.split(" ").length * pricePerWord;
// return total;
 
//     // Change code above this line
//  }
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));
//  console.log(calculateEngravingPrice("Web-development is creative work", 20));


// let makeStringFromArray = function (array, delimiter) {
//     let string;
//     // Change code below this line
//   string = array.join(delimiter);
//     // Change code above this line
//     return string;
//   }
//   console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
//   console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//   console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// let slugify = function (title) {
//     // Change code below this line
//     let slug = title.toLowerCase().split(" ").join("-");

//   return slug
//     // Change code above this line
//   }
//   console.log(slugify("Arrays for begginers"));
//   console.log(slugify("English for developer"));
//   console.log(slugify("Ten secrets of JavaScript"));
//   console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);


// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//  let makeArray = function (firstArray, secondArray, maxLength) {
//     // Change code below this line
// let newArray  = firstArray.concat(secondArray);
// let maxArray = newArray.slice(0, maxLength);
// newArray = newArray.length <= maxLength ? newArray : maxArray;
// // console.log(newArray);
// return newArray

//     // Change code above this line
//   }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//   console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
//   console.log(makeArray ([1, 2, 6], ["h", "b", "d"], 5));

// let calculateTotal = function(number) {
//     // Change code below this line
// let total = 0;
//    for (let i = 1; i <= number; i += 1) {
//     // console.log(i);   
//     total += i;
// }
// return total
//      // Change code above this line
//    }
//    console.log(calculateTotal(1)); // 1
//    console.log(calculateTotal(3)); // 6
//    console.log(calculateTotal(18)); //171
//    console.log(calculateTotal(7)); // 28

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
// //   return fruit;
//   console.log(fruit);
// }

// let calculateTotalPrice = function (order) {
//     let total = 0;
//     // Change code below this line
//   for (i = 0; i < order.length; i += 1){
//     total += order[i];
//   }
//     // Change code above this line
//     return total;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// let findLongestWord = function(string) {
//     // Change code below this line
//     let words = string.split(" ");
//     console.log(words);
//     let biggestWord = " ";    
//     for (let i = 0; i < words.length; i += 1){
//         biggestWord.length = words[i].length;
// console.log(`${words[i]} = ${words[i].length}`);
// if (words[i].length > biggestWord.length) {
//     biggestWord = words[i];
// }
// }
// return biggestWord;
// }

//   // Change code above this line

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// let createArrayOfNumbers = function (min, max) {
//     const numbers = [];
//     // Change code below this line
//   for (let i = min; i <= max; i +=1){
//     numbers.push (i);
//   }
//     // Change code above this line
//     return numbers;
//   }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17)); 
// console.log(createArrayOfNumbers(29, 34)); 


let filterArray = function (numbers, value) {
    // Change code below this line

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
if (numbers[i]>value) {
numbers.push(i)
}
}
 return numbers
   // Change code above this line
 }
 console.log(filterArray([1, 2, 3, 4, 5], 3));
 console.log(filterArray([1, 2, 3, 4, 5], 4));
 console.log(filterArray([12, 24, 8, 41, 76], 38));
 console.log(filterArray([12, 24, 8, 41, 76], 20));