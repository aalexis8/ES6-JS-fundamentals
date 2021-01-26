// Dealing with Dates and times in JS

let val;

// the Date object in js defaults to todays date
const today = new Date();

let birthday = new Date("9-10-1982 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

// val = birthday;
// Calendar in js stores the months in an array -- january is 0
val = today.getMonth();
val = today.getDate(); // returns todays date in this case the 25th of janurary 2021
val = today.getDay(); // Returns the day of the week, numerical 1, 2
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(9);
birthday.setDate(12);
birthday.setFullYear(1972);
birthday.setHours(4);
birthday.setMinutes(34);
birthday.setSeconds(25);

console.log(birthday);
