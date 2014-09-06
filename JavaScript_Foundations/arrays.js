// JavaScript Arrays

var x = ["Word 1", "Word 2", ["Sub1", "Sub2"], "Word 3"];
//console.log(x);
var a = new Array(20);

var my_array = ["Hello", 42, true, function (a) {return a*2}];
var word = my_array[0];

my_array[9] = "Test";


// Array Methods
// Push and Pop , Edits the end
my_array = [2, 3, 4];
//console.log(my_array.toString());

my_array.push(5);
//console.log(my_array.toString());

var value = my_array.pop();

// Shift and Unshift, Edits the beginning
my_array.unshift(1);

value = my_array.shift();

// Sorting
my_array = [10, 44, 32, 100, 0, 44, 3 ,4];
console.log(my_array.toString());

my_array.sort(function (a, b) {
  return a-b; //-1 = a is smaller, +1 = b is smaller, 0=equal
});
console.log(my_array.toString());

my_array = [1,2,3,4,5];
my_array.reverse();
console.log(my_array.toString());

//Join
var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x.concat(y);
console.log(z.toString());

my_array = [0, 1, 2, 3, 4, 5];
z = my_array.slice(1,4);
console.log(z.toString());

var words = ["Hello", "World", "Java"];
var result = words.join(" ");


// Splice

my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());

my_array.splice(2,1);
console.log(my_array.toString());

my_array.splice(2, 0, "two");
console.log(my_array.toString());