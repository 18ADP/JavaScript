// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//console.log("2" === 1);
// console.log("02" > 1);

console.log(null > 0);  // The reason is that an equality check == and comparisions >, <, >=, <= works differently.
console.log(null == 0); //== doesnot convert it only checks if they are equal or not     
console.log(null >= 0); //Comparisions convert null to a number, treating it as zer. Thats why null >= 0 is true and null > 0 is false 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict check <checks the datatypes also>)

console.log("2" === 2);