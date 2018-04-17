// Each of the following options will create a new empty object:
 
var newObjectOne = {};
console.log(typeof(newObjectOne));
 
// or
var newObjecttwo = Object.create( Object.prototype );
console.log(typeof(newObjecttwo));

// or
var newObjectthree = new Object();
console.log(typeof(newObjectthree));