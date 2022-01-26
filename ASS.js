function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args)
     sum += arg;
  
    return sum;
  }