/*
  Create a function that multiplies two numbers
  passed in as argument. Return the product.
 */

function multiplyNum(num1, num2){
 return (num1 * num2);
}

/*
  Create a function that divides two numbers
  passed in as argument. Return the quotient.
 */

function divideNum(num1, num2){
 return (num1 / num2);
}

/*
  Create a variable to hold the return value of the
  3-argument function. 

  e.g. var result = myFunction(0, 0, func)
 */

var result = function(num1, num2, func){
  return func(num1, num2);
}
/*
  Log the result
 */
console.log(result(2, 4, multiplyNum));
console.log(result(2, 4, divideNum));