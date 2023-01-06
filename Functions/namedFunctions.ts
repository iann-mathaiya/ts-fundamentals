// A named function is a function declaration written with the function keyword 
// and provided with a distinct name within the current scope.

// Named function declarations load into the execution context before any code runs. 
// This is known as hoisting, meaning you can use the function before you declare it.

function addNumbers(x: number, y: number): number {
  return x + y;
}
console.log(addNumbers(3, 60));

function displayAlert(message: string) {
  return('The message is ' + message);
} 
console.log(displayAlert('awesome!'));

function sum(inputVal: number[]): number {        
  let total: number =  0;
  for(let count = 0; count < inputVal.length; count++) {
      if(isNaN(inputVal[count])){
          continue;
      }
      total += Number(inputVal[count]);
  }
return total;
}

console.log(sum([7, 8, 9]));
