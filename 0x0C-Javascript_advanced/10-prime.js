function countPrimeNumbers () {
  let counter = 0;
  for (let i = 2; i < 100; i++) {
    let primeNum = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        primeNum = 0;
        break;
      }
    }
    counter += primeNum;
  }
  return counter;
}

const t0 = performance.now();
for (let count = 0; count < 100; count++) {
  countPrimeNumbers();
}
const t1 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds`);
