/*   Develop a JavaScript program that defines a function
to accept a number and prints a number pattern consisting of
odd numbers from 0 up to the given number.  */

function oddNumPattern(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

oddNumPattern(30);
