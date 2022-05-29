console.log('Welcome to the tutorial 46');

let reg = /maaz/; // This is a regular expression
// literal in js
// reg = /maaz/g; // g => g means global flag
// reg = /maaz/i; // i => i means case insensitive

console.log(reg);
console.log(reg.source); // source jo hai wo ye bataye ga ke app ne apne
//  regular expression ke literal ma kia likha tha

let s = 'This is a great maaz and also maaz bhai';
// Functions to match expressions
// 1. exec () - This function will return an array for match or null for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// console.log(result); ---> we can use multiple exec with global flag
if (result) {
  //   console.log(result);
  //   console.log(result.input); // input see hamein result ka input mil jaye ga
  //   console.log(result.index); // is see hamein result ka index mil jaye ga
}
// 2. test () - Returns true or false  =>matlab true jab return kare ga jab wo regular expression
// ho ga warna false return kare ga
result = reg.test(s);
// console.log(result);---> this will only print true if the reg is there in the string 's'

// 3. match () - It will return an array of results or null
// let result3 = reg.match(s)  ---> This is wrong!!
let result3 = s.match(reg); // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong
let result4 = s.search(reg); //---> This is right
// console.log(result4);

// 5. replace() - Returns new  replaced string with all the replacements (if no flag
// is given , first match will be replaced)

let result5 = s.replace(reg, 'SHIBBAM');
console.log(result5);

// -------<--------------------For Practice ----------------------------------------->

let refe = /refree/g;
console.log(refe);
console.log(refe.source);

let a = 'This is the great refree & also this refree is great';
let results = refe.exec(a);
console.log(results);

if (results) {
  //   console.log(results.input);
  //     console.log(results.index);
}

results = refe.test(a);
console.log(results);

let results1 = a.match(refe);
console.log(results1);

let results2 = a.search(refe);
console.log(results2);

let results3 = a.replace(refe, 'Maazs');
console.log(results3);
