// find the average marks of all student
let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
console.log(sum);
 
let avg = sum/ marks.length;
console.log(avg);

// arrays method use push method

let phonebrands =["realme","iphone","sumsung","moto"]

phonebrands.push("nokia");

console.log(phonebrands)

phonebrands.pop("nokia");

console.log(phonebrands)

