// Object Literals

// Define an object literal

const person = {
  firstName: "Jason",
  lastName: "Voorhees",
  age: 203,
  email: "JasonV@hotmail.com",
  hobbies: ["camping", "machette throwing", "coming back to life"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBithYear: function () {
    return 2021 - this.age;
  },
};

let val;

val = person;

// Get a specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[2];
val = person.address;
val = person.address.city;
val = person.address["state"];
val = person.getBithYear();

console.log(val);

// Arrays of Objects
const people = [
  { name: "Freddy", age: 175 },
  { name: "Pinhead", age: 125 },
  { name: "Kraven", age: 76 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

for (let person of people) {
  console.log(person.name);
  console.log(person.age);
}
