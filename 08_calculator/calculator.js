const add = function() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++){
    result += arguments[i];
  }
  return result
};

const subtract = function() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++){
    result -= arguments[i];	
  }
  return result
};

const sum = function(array) {
  let result = 0;
  array.forEach(item => {
    result +=item;
  })
  return result
};

const multiply = function(array) {
  
  const result = array.reduce((total, currentValue) => total * currentValue, 1)
  return result

};

const power = function() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++){
    result **= arguments[i];	
  }
  return result
	
};

const factorial = function(num) {
  if (num < 0){
    return -1;
  }
  else if (num == +0){
    return 1;
  }
  else {
    return (num * factorial(num-1))
  }
	
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
