let arr = [1, 11, 2, 4, 4, 4, 5, "willy"];
console.log(arr[0]);
//object
let person = {
  firstname: "Willy",
  lastname: "Doe",
  age: 24,
  "date of birth": "2021/09/08",
};
console.log(person.firstname, person.lastname);
console.log(person["date of birth"], person.firstname);
person.firstname = "Stephen";
console.log(person.firstname, person.lastname);

//Everything in JavaScrip is an Object - the Math, the string, the document etc. see example below
let documents = {
  getElementById: () => {
    console.log("sample object function");
  },
};
documents.getElementById();
getElementById = () => {
  console.log("sample object function");
};


// let car = {
//     doors: 4,
//     color: ["Red", "Yellow", "blue"],
//     speed: (distance, time)=>{
//         return distance/time;
//     }
// };

console.log(car.color);


let car = {
    doors: 4,
    distance:100,
    time:10,
    colour :["red","green","blue"],
    speed : function (){
      return  this.distance / this.time
    }
}

//other ways to create objects
// console.log(car.colour[1])
// car.headlight =true;
// console.log(car.headlight)
// console.log(car.speed()) 
// let carSpeed = car.speed();
// console.log(carSpeed.toString().concat(" ","km/h"))
// let car1 = new Object();
// car1.doors = 6;
// car1.color = "black"
// let carObject = Object.create(car);
// carObject.doors = 7
// console.log(carObject.doors)
// carObject.wheels = 4;
// console.log(carObject.doors,"carObject");
// carObject.wheels

//Arrays of Objects