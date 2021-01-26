// LOOPS, ITERATIONS

// CLASSIC FOR LOOP
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// CONTINUE
// for (let i = 0; i < 10; i++) {
//   if (i == 4) {
//     console.log("4 Chinese folklore loves this number");
//     continue;
//   }

//   if (i == 7) {
//     break;
//   }
//   console.log("Number :" + i);
// }

// WHILE LOOP
// let i = 0;

// while (i < 10) {
//   console.log("Number " + i);
//   i++;
// }

// DO WHILE -- always run at least once

// let i = 200;

// do {
//   console.log("Number " + i);
// } while (i < 10);

// LOOP THROUGH ARRAY
const cars = ["Mayback", "Benz", "Infinity", "Acura"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function (car) {
//   console.log(car);
// });

// FOR OF
// for (const car of cars) {
//   console.log(car);
// }

// FOR IN
const user = {
  firstName: "Jason",
  lastName: "Bourne",
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

// MAP
const users = [
  { id: 10, name: "Conners" },
  { id: 20, name: "Jason" },
  { id: 30, name: "Sarah" },
];

const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);
