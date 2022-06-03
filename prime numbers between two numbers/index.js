// Prime Numbers Between Two Numbers :
//Time complexity: O(n^1/3)
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

function PrimeNumbersBetweenTowNumbers(num1, num2) {
  const array = [];
  for (let i = num1; i <= num2; i++) {
    if (isPrime(i)) array.push(i);
  }
  return array;
}

console.log(PrimeNumbersBetweenTowNumbers(0,10))