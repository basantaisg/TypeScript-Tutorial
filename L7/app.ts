// // 1. Type Guards

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   // type guards! add it

//   //   SO this is typeGuard!
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// console.log(add(10, '20'));
// console.log(add(10, 20));

// // 2. Type guards

// type Admin = {
//   name: string;
//   privilage: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// type unknownEmployee = Employee | Admin;

// const emp1: ElevatedEmployee = {
//   name: 'BasantaMERNStack',
//   privilage: ['create-server'],
//   startDate: new Date(),
// };

// function printEmployeeInformation(emp: unknownEmployee) {
//   console.log('Name: ', emp.name);
//   // console.log('Privilages: ', emp.privilage);
//   // uper wala wrong code..

//   // use in keyword that builds in JS

//   if ('privilage' in emp) {
//     console.log(emp.privilage);
//   }

//   if ('startDate' in emp) {
//     console.log(emp.startDate);
//   }
// }

// printEmployeeInformation(emp1);

//3.  Type Guards in class

// class Car {
//   drive() {
//     console.log('Driving a car...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('driving a truck');
//   }

//   loadCargo(amount: number) {
//     console.log(`Loading cargo... ${amount}`);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();

//   // type guard use
//   if ('loadCargo' in vehicle) {
//     vehicle.loadCargo(500);
//   }

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(50000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// Type Assertion or type casting...
// <> use type assertion using this <HTMLINPUTELEMENT></HTMLINPUTELEMENT>
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
const userInput = document.getElementById('user-input')! as HTMLInputElement;

// use as or <> to type assertion or cast!
userInput.value = 'Hello everyone!';
