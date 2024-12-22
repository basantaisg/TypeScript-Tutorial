// let firstName: string;
// let age: number;
// firstname: 'Basanta';
// age: 17;

// const person = {
//   firstName: 'Basanta',
//   age: 22,
// };

// Union, | -> pipe in ts...

// function combine(num1: number | string, num2: number | string) {
//   let result;
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     result = `Result: ${num1 + num2}`;
//   } else if (typeof num1 === 'string' && typeof num2 === 'string') {
//     result = num1.toString() + num2.toString();
//   }

//   return result;
// }

// const sum = combine(10, 20);

// const combinedName = combine('Basanta', 'Parajuli');

// console.log(sum);
// console.log(combinedName);

// Literal Types

// function combine(
//   num1: number | string,
//   num2: number | string,
//   conversionType: 'as-number' | 'as-string'
// ) {
//   let result;
//   if (
//     (typeof num1 === 'number' && typeof num2 === 'number') ||
//     conversionType === 'as-number'
//   ) {
//     result = +num1 + +num2;
//   } else if (
//     (typeof num1 === 'string' && typeof num2 === 'string') ||
//     conversionType === 'as-string'
//   ) {
//     result = num1.toString() + num2.toString();
//   }

//   return result;
// }

// const sum = combine('10', '20', 'as-number');

// const combinedName = combine('Basanta', 'Parajuli', 'as-string');

// console.log(sum);
// console.log(combinedName);

// Custom types & Alias Types

type Combinable = number | string;
type ConversionType = 'as-number' | 'as-string';
function combine(
  num1: Combinable,
  num2: Combinable,
  conversionType: ConversionType
) {
  let result;
  if (
    (typeof num1 === 'number' && typeof num2 === 'number') ||
    conversionType === 'as-number'
  ) {
    result = +num1 + +num2;
  } else if (
    (typeof num1 === 'string' && typeof num2 === 'string') ||
    conversionType === 'as-string'
  ) {
    result = num1.toString() + num2.toString();
  }

  return result;
}

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user1: User = {
  name: 'Basanta',
  age: 17,
  skills: ['React', 'Node'],
};

function greet(user1: User) {
  console.log(`Hi I am ${user1.name}`);
}

greet(user1);
