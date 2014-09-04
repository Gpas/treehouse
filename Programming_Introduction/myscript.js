
console.log("Hello from myscript.js");

/*
var friends = ["Nick", "Michael", "Amit", [true, false]];

console.log(friends);
console.log(friends.length);

var friendNumber = 1;
console.log(friends[friendNumber]);

for (var i = 0; i < friends.length;i++) {
  console.log(friends[i]);
}
*/

/*
var me = {
  first_name: "Pascal",
  last_name: "Grüter"
};

console.log(me.last_name);
console.log(me);
console["log"](me);

var key = "first_name";
console.log(me[key]);
*/

var sayHello = function () {
  console.log("Hello World");
};

function debug (message) {
  console.log("Debug: " + message);
};

function doubleNumber (num) {
  return num * 2;
}
 
sayHello();
debug("Test");
debug(doubleNumber(7));
