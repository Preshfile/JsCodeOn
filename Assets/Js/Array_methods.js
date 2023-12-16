//variable one value at a time
// arrays can store more than one value at a time
// json objects = use more than you think
//
let arr = [12, 45, 75, 12, 45, 28, 77, 24, 0];
let students = [
  "Ada",
  "Oluchi",
  "Modinat",
  "Udeme",
  "Bisrat",
  "Zayd",
  1,
  2,
  3,
  6,
  8,
  5,
];
let groups = [
  ["Ada", "Oluchi", "Modinat", "Sohfiyyah"],
  ["Udeme", "Bisrat", "Zayd"],
  "group 3",
];
// console.log(groups[1][1])
// for( let i=arr.length -1;i>-1;i--){
// console.log(arr[i])
// }
//console.log(groups.length)
for (let i = 0; i < groups.length; i++) {
  console.log(groups[i]);
  if (typeof groups[i] === "object" && groups[i].length > 0) {
    for (let j = 0; j < groups[i].length; j++) {
      console.log(groups[i][j]);
    }
  } else {
    console.log(groups[i]);
  }
}
console.log(typeof students[0]);

// Array methods
let ay = ["iphone xr", "iphone 7 plus"];
console.log(ay);

//let lth = ay.push("iphone 13 pro")
console.log(ay);

// console.log(lth)
ay.pop(); // removes the last element
console.log(ay);

// concatinate arrays
const multiarr = arr.concat(students);
console.log(multiarr);

ay.unshift("iphone 15 plus");
console.log(ay);

const newAr = groups.flat();
console.log(newAr);

console.log(groups);
for (let i = 0; i < newAr.length; i++) {
  console.log(newAr[i]);
}
