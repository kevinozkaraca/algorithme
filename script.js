`use strict`;

/* 
------->   Comment tester la rapidité ?
*/

/* 
------->   performance.now()
*/
console.log(`...........performance.now()`);
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

/* 
------->   console.time()
*/
console.log(`...........console.time()`);
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
/* 
------->   Les Design Patterns
*/

/* 
------->   01 .Factory pattern
*/
console.log(`...........Factory pattern`);
// constructeurs (creer l'objet)
function Developer(name) {
  this.name = name;
  this.type = "developer";
}

function Tester(name) {
  this.name = name;
  this.type = "tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employees = [];
// Injection dans le tableau "employees"
employees.push(employeeFactory.create("Patrickzrzer", 1));
employees.push(employeeFactory.create("Patricrezezr", 2));
employees.push(employeeFactory.create("Patrisfsdfez", 1));
employees.push(employeeFactory.create("Patrsdfsd", 2));
employees.push(employeeFactory.create("Patsfezeg", 1));
employees.push(employeeFactory.create("Padfsd", 1));

// test
console.log(employees);

// application
function Say() {
  console.log(`Hi I am  ${this.name} and I am ${this.type}`);
}
employees.forEach((emp) => {
  Say.call(emp);
});
/* 
------->   02 .Singleton Pattern
*/
console.log(`...........Singleton Pattern`);

const Singleton = (function () {
  let pManager;

  function ProcessManager() {
    this.numProcess = 0;
  }

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const singleton1 = Singleton.getProcessManager();
const singleton2 = Singleton.getProcessManager();
// vérification
console.log(`L'instance singleton1 et singleton2 sont similaire ?`);
console.log(singleton1 === singleton2);

/* 
------->   03.Strategy Pattern
*/

console.log(`...........Strategy Pattern`);
// Création de l'interface de stratégie
const PaymentStrategy = function () {
  this.pay = function () {
    throw new Error("La méthode pay de l'interface de stratégie n'a pas été implémentée");
  };
};

// Création de la première stratégie concrète
const CreditCardStrategy = function () {
  this.pay = function () {
    console.log("Paiement effectué avec une carte de crédit");
  };
};
CreditCardStrategy.prototype = new PaymentStrategy();

// Création de la seconde stratégie concrète
const PaypalStrategy = function () {
  this.pay = function () {
    console.log("Paiement effectué avec PayPal");
  };
};
PaypalStrategy.prototype = new PaymentStrategy();

// Création de l'objet qui utilise les stratégies
const Order = function (strategy) {
  this.strategy = strategy;
};
Order.prototype.pay = function () {
  this.strategy.pay();
};

// Utilisation des stratégies
const order = new Order(new CreditCardStrategy());
order.pay(); // Affiche "Paiement effectué avec une carte de crédit"

const order2 = new Order(new PaypalStrategy());
order2.pay(); // Affiche "Paiement effectué avec PayPal"

/* 
------->   04.Iterator Pattern
*/
console.log(`...........Iterator Pattern`);
// Création de l'interface de l'itérateur
const Iterator = function () {
  this.next = function () {
    throw new Error("La méthode next de l'interface de l'itérateur n'a pas été implémentée");
  };
  this.hasNext = function () {
    throw new Error("La méthode hasNext de l'interface de l'itérateur n'a pas été implémentée");
  };
};
// Création de l'objet agrégat
const Numbers = function (numbers) {
  this.numbers = numbers;
  this.createIterator = function () {
    return new NumbersIterator(this);
  };
};
// Création de l'itérateur concret
const NumbersIterator = function (numbers) {
  this.index = 0;
  this.numbers = numbers.numbers;
};
NumbersIterator.prototype = new Iterator();
NumbersIterator.prototype.next = function () {
  return this.numbers[this.index++];
};
NumbersIterator.prototype.hasNext = function () {
  return this.index < this.numbers.length;
};
// Utilisation de l'itérateur
const numbers = new Numbers([1, 2, 3, 4, 5]);
const iterator = numbers.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next()); // Affiche chaque nombre de 1 à 5
}
/* 
------->   04.Observer Pattern
*/
console.log(`...........Observer Pattern`);
function Subject() {
  this.observers = []; // array of observer functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) return fn;
    });
  },
  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("Observer 1 Firing!");
}

function Observer2() {
  console.log("Observer 2 Firing!");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.fire();

subject.unsubscribe(Observer1);
subject.fire();
