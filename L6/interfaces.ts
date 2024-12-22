// // Interface...

// interface Greetable {
//   name: string;
//   greet(text: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet(text: string): void {
//     console.log(` ${text}, ${this.name}`);
//   }
// }

// let user1: Greetable;
// user1 = new Person('Basanta');
// user1.greet('Hello');

// Extending interface

// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(text: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//     console.log(`${text}, ${this.name}`);
//   }
// }

// let user1: Greetable;
// user1 = new Person('BAsanta');
// console.log(user1);

// type addFun = (a: number, b: number) => number;
interface addFun {
  (a: number, b: number): number;
}
let add: addFun;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(5, 6));

// Optional!

interface Named {
  readonly name: string;
  outputName?: string; // ? is used for optional property in interface and class property
}

class Person implements Named {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

//

// let user: Person;

// user = {
//   name: 'Basanta',
//   age: 17,
//   greet(text: string): void {
//     console.log(` ${text} ${this.name}`);
//   },
// };

// user.greet('Hello');
