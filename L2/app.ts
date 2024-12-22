// Objects, Array, Tuple, Enum

// const person: {
//   firstName: string;
//   age: number;
//   skills: string[];
// } = {
//   firstName: 'Basanta',
//   age: 21,
//   skills: ['ReactJs', 'NodeJS', 'TypeScript', 'JavaScript', 'Python', 'Java'],
// };
// console.log(person);

// any[] you can use this if you want to add any types in your array...

// Tuples - we use tuples in array like... ? this any_name: [type, type] if you want to add multiple types in array then we use tuples here... we can see we have used product  in person object which is an object that takes multiple  types in array. product: [number, string]... so on like this we use tuples... And it's immutable.. if we try to change the type of the array then it will show an error.

// const person: {
//   name: string;
//   age: number;
//   skills: string[];
//   product: [number, string];
// } = {
//   name: 'basanta',
//   age: 17,
//   skills: ['React', 'SpringBoot'],
//   product: [10, 'Macbook M2'],
// };

// Enums... we use enums to declare a set of named constants i.e. a collection of related values that can be numeric or string values. Sometimes we need to define a set of named constants. For example, we want to define a set of named constants for the days of the week. We can define it using the enum keyword.

enum Role {
  ADMIN,
  AUTHOR,
  READ_USER_ONLY,
}

const person = {
  name: 'Basanta',
  age: 17,
  skills: ['react', 'express'],
  product: [10, 'Macbook Air M1'],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log('Author');
} else if (person.role === Role.ADMIN) {
  console.log('Admin');
} else if (person.role === Role.READ_USER_ONLY) {
  console.log('Read User only');
}
