
// let message = "Sale";
let checkForSpam = function (message) {
    let result;
    // Change code below this line
    message = message.toLowerCase();
    if (message = message.includes("spam") + message.includes("sale")) {
        result = true;
    }
    else {
        result = false;
    }
    // Change code above this line
    return result;
}
console.log (checkForSpam("we have goods"));
console.log (checkForSpam("we have sAle"));

let a = 2;
let b = 4;
console.log (a);
console.log ('b', b);
