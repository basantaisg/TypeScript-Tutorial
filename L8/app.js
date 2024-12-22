// Generics intro...
// type Person = {
//   name: string;
//   age: number;
// };
// const Boy: Person = {
//   name: 'Shiva',
//   age: 15,
// };
// const fruits: Array<Person> = [{ name: 'Baka', age: 15 }];
// fruits.push({ name: 'Gaurav', age: 12 });
// EG-2
// function merge<T, U, V>(objA: T, objB: U, objC: V) {
//   return { ...objA, ...objB, objC };
// }
// const res = merge(
//   { name: 'Basanta' },
//   { role: 'Software-engineer' },
//   { id: '12' }
// );
// console.log(res);
// // 2. Generic Constrains!
// function createObject<T extends string, U extends number, V extends boolean>(
//   key: T,
//   value: U,
//   isActive: V
// ): { key: T; value: U; isActive: V } {
//   return { key, value, isActive };
// }
// const obj = createObject('Age', 34, true);
// console.log(obj);
// Generic Interface
// interface Box<T> {
//   value: T;
// }
// const numberBox: Box<number> = { value: 20 };
// const stringBox: Box<string> = { value: 'Dummy' };
// console.log(numberBox);
// console.log(stringBox);
// generic Default!
// interface User<T = string> {
//   data: T;
//   status: number;
// }
// type Person = {
//   name: string;
//   age: number;
// };
// const response: User = { data: 'Success', status: 200 };
// const jsonRes: User<Person> = { data: { name: 'value', age: 21 }, status: 200 };
// console.log(response);
// console.log(jsonRes);
// Generics with class
// class Container<T> {
//   private content: T;
//   constructor(content: T) {
//     this.content = content;
//   }
//   getContent(): T {
//     return this.content;
//   }
// }
// const stringContainer = new Container<string>('Hello');
// console.log(stringContainer.getContent());
// const numberContainer = new Container<number>(100);
// console.log(numberContainer.getContent());
// Generic with array!
// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }
// const firstNumber = getFirst([1, 2, 3, 4, 5, 'basanta']);
// console.log(firstNumber);
// Generic with keyof
// function getProperty(obj: object, key: string) {
//   return obj[key];
// }
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: 'Basanta', age: 17 };
var name1 = getProperty(person, 'name');
var age1 = getProperty(person, 'age');
console.log(name1, age1);
