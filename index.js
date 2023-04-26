
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


// let filterArray = function (numbers, value) {
//     // Change code below this line
//     let numbersNew = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//       numbersNew.push(numbers[i]);
//     }
//   }
//   return numbersNew;
//    // Change code above this line
//  }
//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  console.log(filterArray([1, 2, 3, 4, 5], 4));
//  console.log(filterArray([12, 24, 8, 41, 76], 38));
//  console.log(filterArray([12, 24, 8, 41, 76], 20));

// let getCommonElements = function (array1, array2) {
//   // Change code below this line
// //   let array3 = [];
// //   let longArray = [];
// //   let shortArray = [];
// //   longArray = array2;
// //   shortArray = array1;
// //   if (array1.length > array2.length){
// //     longArray = array1;
// //     shortArray = array2;
// //   }
// // for (let i = 0; i < longArray.length; i += 1){
// //       if (shortArray.includes(longArray[i])) {
// //       array3.push(longArray[i])
// //     }
// // }
// // return array3;
// let array3 = [];
  
// for (let i = 0; i < array1.length; i += 1){
//       if (array2.includes(array1[i])) {
//       array3.push(array1[i])
//     }
// }
// return array3;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([1, 2, 3], [17, 19, 3]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// let calculateTotalPrice = function (order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// let getEvenNumbers = function (start, end) {
//   // Change code below this line
//   let array = [];
// for (let i = start; i <= end; i +=1){
//   console.log(i);
//   if (i % 2 === 0){
// array.push(i);
//   }
// }
// return array;

//    // Change code above this line
//  }
//  console.log(getEvenNumbers(2, 5));
//  console.log(getEvenNumbers(3, 11));
//  console.log(getEvenNumbers(6, 12));
//  console.log(getEvenNumbers(8, 8));

// let includes = function (array, value) {
//   // Change code below this line
//   let type = false;
// for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value){
//       type = true;
//     }
//   }
//   return type
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line 
// for(const key in apartment){
//   keys.push(key);
//   values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);

// let countProps = function (object) {
//   let propCount = 0;
//   // Change code below this line
//   let keys = [];
// for (const key in object) {
//   if (object.hasOwnProperty (key)){
//     keys.push(key);
//   propCount = keys.length;  
//   }
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
//   // return values;
// }
// console.log(keys);
// console.log(values);
// let countProps = function (object) {
//    // Change code below this line
// let propCount = 0;
// const keys = Object.keys(object);
// for (const key of keys) {
//       propCount += 1;

//   }  
//   return propCount;
// // Change code above this line
//     // Change code above this line
//   }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// let countTotalSalary = function (salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// let salary = Object.values(salaries);
// for (let i = 0; i < salary.length; i += 1){
// totalSalary += salary[i];
// }
// // Change code above this line
// return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (let color of colors){
//   console.log(color);
// hexColors.push(color.hex);
// rgbColors.push(color.rgb);
// }
// // Change code below this line
// console.log(hexColors);
// console.log(rgbColors);

// 
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.log(products);
// let getAllPropValues = function (propName) {
//   // Change code below this line
// let result = [];
// for (const product of products){
//   if (Object.keys(product).includes(propName)) {
// result.push(product[propName]);
//   }
//   // Change code above this line
// }
// return result;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// let calculateTotalPrice = function (productName) {
//   // Change code below this line
// let result = 0;
// for (const product of products){
//   if (product.name === productName){
//     result = product.price * product.quantity;
//   }
// }
// return result;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line
// const {
//   today: {
//     high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;


// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
// console.log(highTomorrow);
// console.log(todayIcon);
// console.log(tomorrowIcon);
// console.log(lowToday);

// function calculateMeanTemperature(forecast) {
//   const {today:{low: todayLow, high: todayHigh,}, tomorrow:{ low: tomorrowLow, high: tomorrowHigh,
// }} = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);

// let makeTask = function (data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const task = {completed, category, priority,};
// let result = {...task, ...data};
// return result;
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// function add(...args) {
//   let total = 0
//   for (let arg of args){
//   total += arg;
//   }
//   return total;
//   // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));

// let firstNumber;
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//     total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8) ); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51

// Change code below this line
// let array = [];
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
// for (let number of array){
//   for (let arg of args){
//     if (arg === number){
//       matches.push(arg);
//     }
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.addBook("Haze"));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// this.books.splice(this.books.indexOf(oldName), 1, newName);
// return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//   this.potions.push(potionName);

//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Invisibility")
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(potionName), 1);

//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Stone skin", "Invisibility")
// console.log(atTheOldToad.potions);



// let repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
    
//   },
//   addPotion(newPotion) {

      // if (this.potions.some(potion => potion.name === newPotion.name)){
      //   return console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
      // }
      // this.potions.push(newPotion);
      
      
// },
//   // removePotion(potionName) {
//   //   const potionIndex = this.potions.findIndex(potion => potion.name === potionName);
//   //   if (potionIndex === -1) {
//   //     console.log(`Potion ${potionName} is not in inventory!`); ;
//   //   }

//   //  return this.potions.splice(potionIndex, 1);
//   // },
//   updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.findIndex(potion => potion.name === oldName);
//     // if (potionIndex === -1) {
//     //         console.log(`Potion ${oldName} is not in inventory!`); ;
//     //       }
//     //       return this.potions[potionIndex].name = newName;

//   },
//   // Change code above this line
// };


// atTheOldToad.getPotions() 
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.log(atTheOldToad.potions);


// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.potions);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback (pizzaName);
// }
// console.log(makeMessage("Peperoni", deliverPizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`)
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//    order(pizzaName, onSuccess, onError) {
//     // console.log(onError);
//     if (this.pizzas.includes(pizzaName)){
//       return onSuccess(pizzaName); 
//     }
//       const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
//         return onError(error);

//     },
// }


// // // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));

// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // console.log(pizzaPalace.order());

// pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(item => totalPrice += item) 
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (number){
//     if (number > value){
//       filteredNumbers.push(number);
//     }
//   })
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach (function (element){
//     if (secondArray.includes(element)){
//       commonElements.push(element);
//     }
//   }
//   )
//   return commonElements;

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  // return commonElements;
  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// function changeEven(numbers, value) {
//   // Change code below this line
//   let numbersNew = [];
//   numbers.forEach(number => {
//      if (number % 2 === 0){
//       number += value;
//   }
//   numbersNew.push(number);
// }
// )
// console.log(numbers);
// console.log(numbersNew);
// return numbersNew;

// let numbersNew = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//       // numbersNew.push(number + value);
//     }
//     numbersNew.push(numbers[i])
//   }
  // return numbersNew;

  // Change code above this line
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(
//   planet => planet.length
// );
// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// const getSortedFriends = users => [...users]
// .flatMap(user => user.friends)
// .filter((friend, index, users) => users.indexOf(friend) === index)
// .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend))

// console.log(getSortedFriends(users));

// const getTotalBalanceByGender = (users, gender) => [...users]
// .filter(user => user.gender === gender)
// .map(user => user.balance)
// .reduce((startBalance, nextBalance) => startBalance += nextBalance, 0)
// ;
// console.log(getTotalBalanceByGender(users, "male"));

// const getNamesSortedByFriendCount = users => [...users]
// .filter(user => user.friends)
// .sort((firstFriends, secondFriends) => firstFriends.friends.length - secondFriends.friends.length)
// .map(user => user.name)

// console.table(getNamesSortedByFriendCount(users));

// const getTotalFriendCount = users => (users.reduce((previousFriend, user) => {
//   return previousFriend += user.friends.length;
// }, 0));
// console.log(getTotalFriendCount(users));

// const sortByAscendingBalance = users => users.sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// console.table(sortByAscendingBalance(users));

// const sortByDescendingFriendCount = (users) => ([...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length));
// console.table(sortByDescendingFriendCount(users));

// const sortByDescendingFriendCount = (users) => ([...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name)));
// console.table(sortByDescendingFriendCount(users));

// const calculateTotalBalance = users => (users.reduce((previousBalance, user) => {
//   return previousBalance += user.balance;
// }, 0));
// console.log(calculateTotalBalance(users));

// const isAnyUserActive = users => (users.some(user => user.isActive));
// console.log(isAnyUserActive());

// const isEveryUserActive = (users) => (users.every(user = user => user.isActive));
// console.log(isEveryUserActive(users));

// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

// const getFriends = users => users.flatMap(user => user.friends).filter((friend, index, getFriends) => getFriends.indexOf(friend) === index);
// console.log(getFriends(users));

// const getUsersWithEyeColor = (users, color) => (users.filter(user => color === user.eyeColor));
//   console.log(getUsersWithEyeColor (users, "blue"));

// const getUsersWithFriend = (users, friendName) => (users.filter(user => user.friends.includes(friendName)))
// console.log(getUsersWithFriend(users, "Briana Decker"));

// const getUsersWithAge = (users, minAge, maxAge) => (users.filter(user => user.age > minAge && user.age < maxAge))
// console.log(getUsersWithAge(users, 20, 30));

// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(
//   number => number % 2 === 0);
// const oddNumbers = numbers.filter(
//   number => number % 2 !== 0);
//   console.log(evenNumbers);
//   console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(
//   book => book.genres
// );
// const uniqueGenres = allGenres.filter((genre, index, allGenres) => allGenres.indexOf(genre) === index);
// console.log(allGenres);
// console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((startElement, time) => {return startElement += time}, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;
// // Change code above this line
// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const playTime = [];
// for (const player of players){
//   playTime.push(player.playtime / player.gamesPlayed);
// };
// console.log(playTime);
// const totalAveragePlaytimePerGame = players.reduce((previuosTime, player) => {
//     return previuosTime += (player.playtime / player.gamesPlayed);
//   }, 0);
// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// .filter(book => book.rating > MIN_BOOK_RATING)
// .sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author))
// .map(book => book.author)
// ;
// console.log(names);


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Four Cheese"));

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child);

// class Storage {
//   constructor (items){
//     this.items = items;
//   }
//   getItems() {    
//     return this.items;
//   }  
//   addItem(newItem){
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//     return this.items.splice(this.items.indexOf(itemToRemove), 1)
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//   constructor (value){
//     this.value = value;
//   }
// getValue() {
//     return this.value;
// }
// padEnd(str){
//    this.value += str;
// }
// padStart(str){
//    this.value = str + this.value;
// }
// padBoth(str){
//    this.value = str + this.value + str;
// }
// }
// // const a = ".";
// // const b = ">";
// // const c = a + b;
// // console.log(c);

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE){
//       return this.#price;
//     }
//      this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice (price){
//     if (price > Car.#MAX_PRICE){
//        return "Error! Price exceeds the maximum";
//   }
//     return "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   }

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//    return this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);