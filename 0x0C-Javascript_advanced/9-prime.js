function countPrimeNumbers() {
    let counter = 0;
    for (var i = 2; i < 100; i++) {
      let primeNum = 1;
      for (var j = 2; j <= Math.sqrt(i); j++) {
        if(i % j == 0) {
          primeNum = 0;
          break;
        }
      }
      counter += primeNum;
    }
    return counter;
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now()

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0}`);
