const add = function(one,two) {
	return one+two;
};

const subtract = function(one,two) {
	return one-two;
};

const sum = function(arr) {
	return arr.reduce((total,elem)=>total+elem,0);
};

const multiply = function(arr) {
  return arr.reduce((total,elem)=>total*elem,1);
};

const power = function(one,two) {
	return one**two;
};

const factorial = function(num) {
  if(num==1 || num==0){return 1;}
	return num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
