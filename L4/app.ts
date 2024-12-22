// Function return type

function add(num1: number, num2: number): string {
  return `Sum is ${num1 + num2}`;
}

const greet = (name: string): void => {
  console.log(`Hello ${name}`);
};

// let combinedFunction: (a: number, b: number) => string = add;
// console.log(combinedFunction(10, 20));

// Function types and callbacks

function addHandle(num1: number, num2: number, cb: (n: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (res) => {
  console.log(res);
});
