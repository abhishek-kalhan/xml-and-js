function timeout(ms) {
    return new Promise((res) => {
      setTimeout(res, ms);
});
}; 

async function inc(a) {
  return new Promise((resolve) => timeout(3000).then(() => resolve(a+1)));
}

async function sum(a, b) {
  return new Promise((resolve) => timeout(3000).then(() => resolve(a + b)));
};

async function max(a, b)  {
  return new Promise((resolve) => timeout(3000).then(() => resolve(a > b ? a : b)));
};

async function avg(a, b) {
  const s = sum(a, b);
  return new Promise((resolve) =>  timeout(3000).then(() => resolve(s / 2)));
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve) =>  timeout(3000).then(() => resolve(this.name.split(sep)))) ;
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  split(sep = " ") {
    return this.name.split(sep);
  }
}

const person = Person.of("Marcus Aurelius");

// const main = async () => {
//   await inc(5);
//   await sum(1,4);
// }

inc(5).then((value) => console.log(value))
sum(1,4).then((value) => console.log(value))
max(8, 6).then((value) => console.log(value))
avg(8, 6).then((value) => console.log(value));
// console.log("obj.split() =", obj.split());
obj.split().then((value) => console.log(value));
// console.log("sum(1, 3) =", sum(1, 3));
// console.log("max(8, 6) =", max(8, 6));
// console.log("avg(8, 6) =", avg(8, 6));
// console.log("obj.split() =", obj.split());
// console.log("person.split() =", person.split());

// main();