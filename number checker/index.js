function numberChecker(arrayOfNumbers) {
    return function(numberToCheck) {
      return arrayOfNumbers.includes(numberToCheck);
    };
  }
  
  // Example usage:
  const numbers = [1, 5, 10, 15, 20];
  const checkNumber = numberChecker(numbers);
  
  console.log(checkNumber(10)); // Output: true
  console.log(checkNumber(7));  // Output: false
  