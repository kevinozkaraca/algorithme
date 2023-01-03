`use strict`;

// Comment tester la rapidité ?

// performance.now()
function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}
console.log(`Performance de la fonction addUpTo1`);
let timeaddUpTo11 = performance.now();
addUpTo1(1000000000);
let timeaddUpTo12 = performance.now();
console.log(`Temps écoulé : ${(timeaddUpTo12 - timeaddUpTo11) / 1000} secondes.`);

function addUpTo2(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(`Performance de la fonction addUpTo2`);
let timeaddUpTo21 = performance.now();
addUpTo2(1000000000);
let timeaddUpTo22 = performance.now();
console.log(`Temps écoulé : ${(timeaddUpTo22 - timeaddUpTo21) / 1000} secondes.`);

// Console.time()

console.log(`Performance de la fonction addUpTo3`);
console.time();
function addUpTo3(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
addUpTo3(1000000000);
console.timeEnd();
