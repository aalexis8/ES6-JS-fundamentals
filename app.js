// THE WINDOW OBJECT

// WINDOW METHODS / OBJECTS / PROPERTIES

// WINDOW BEING YOUR GLOBAL ENVIRONMENT IN THE BROWSER
// console.log(123);

// ALERT
// window.alert("Hello Dez");

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm("Are you sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// PROPERTIES LIKE HEIGHT AND WIDTH
let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // returns the search string

// Redirect
// window.location.href = "https://www.blagueit.com/";
// Reload
// window.location.reload();

// History Object
// window.history.go();

val = window.history.length;

// Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; // Linux x86_64, Win32,
val = window.navigator.vendor;

console.log(val);
