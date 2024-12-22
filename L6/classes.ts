// class Department {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }
// }

// const accounting = new Department('Accounting');
// accounting.describe();

// const accountingCopy = {
//   name: 'Accounting',
//   describe: accounting.describe,
// };

// accountingCopy.describe();

// Access modifiers...

// Private, public access modifiers
// class Department {
//   constructor(private name: string, private employees: string[] = []) {
//     // short hand property
//     this.name = name;
//     this.employees = [];
//   }

//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }

//   addEmployees(emp: string) {
//     this.employees.push(emp);
//   }

//   printEmployeeInformation() {
//     console.log(`Number of emp: ${this.employees.length}`);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department('Accounting', []);
// accounting.describe();

// accounting.addEmployees('Basanta');
// accounting.addEmployees('Sushsant');

// accounting.printEmployeeInformation();

// // This information from the class object can be accessed anywhere... like fg
// // So to prevent this, we can use private access modifier to the property of the class like private employee = [xyz]
// // accounting.employees = ['xyzz'];
// // accounting.printEmployeeInformation();

// Readonly access modifier!

// class Department {
//   private name: string;
//   private employees: string[];

//   //   making id which is readonly
//   private readonly id: string; // we can't initialize this again!

//   constructor(name: string) {
//     // short hand property
//     this.name = name;
//     this.employees = [];
//     this.id = 'd1'; // this is assigned only once... we can't re-initialize!
//   }

//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }

//   addEmployees(emp: string) {
//     this.employees.push(emp);
//   }

//   printEmployeeInformation() {
//     console.log(`Number of emp: ${this.employees.length}`);
//     console.log(this.employees);
//   }
// }

// Inheritance...
// override properties & protected access modifier

// private is used when we don't want any other inherited classes, or any thing outside the class access the property...

// protected is used when we want to access the property from the inherited class but not from outside the class...

// setter and getter methods... here!

// class Department {
//   private name: string;
//   protected employees: string[];

//   //   making id which is readonly
//   private readonly id: string; // we can't initialize this again!

//   constructor(id: string, name: string) {
//     // short hand property
//     this.name = name;
//     this.employees = [];
//     this.id = 'd1'; // this is assigned only once... we can't re-initialize!
//   }

//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }

//   addEmployees(emp: string) {
//     this.employees.push(emp);
//   }

//   printEmployeeInformation() {
//     console.log(`Number of emp: ${this.employees.length}`);
//     console.log(this.employees);
//   }
// }

// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//   }

//   addReports(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports);
//   }

//   addEmployees(emp: string): void {
//     if (emp === 'Basanta') {
//       return;
//     }
//     this.employees.push(emp);
//   }

//   get getReports() {
//     if (this.reports.length > 0) {
//       return this.reports;
//     }
//     throw new Error('Report not found');
//   }

//   set setReports(value: string) {
//     if (!value) {
//       throw new Error('Please pass valid values');
//     }
//     this.reports.push(value);
//   }
// }

// const accDep = new AccountingDepartment('d1', []);
// accDep.describe();
// accDep.addReports('sovaa');
// accDep.printReports();
// accDep.addEmployees('Sova');
// accDep.printEmployeeInformation();

// // setter & getter

// console.log(`getter -> ${accDep.getReports}`);

// accDep.setReports = `Code review error!`;
// console.log(`getter -> ${accDep.getReports}`);

// // static method!
// class Department {
//   private name: string;
//   protected employees: string[];

//   //   making id which is readonly
//   private readonly id: string; // we can't initialize this again!

//   constructor(id: string, name: string) {
//     // short hand property
//     this.name = name;
//     this.employees = [];
//     this.id = 'd1'; // this is assigned only once... we can't re-initialize!
//   }

//   describe(this: Department) {
//     console.log(`Department: ${this.name}`);
//   }

//   addEmployees(emp: string) {
//     this.employees.push(emp);
//   }

//   printEmployeeInformation() {
//     console.log(`Number of emp: ${this.employees.length}`);
//     console.log(this.employees);
//   }

//   static getSalary() {
//     return { salary: 500000 };
//   }
// }

// if we make any objects using statis // functions // methods then we don't need to create instance object of the class to get it we can directly get it ./

// const salary = Department.getSalary(); // without creating object we can access by it's class name

// console.log(salary);

// abstract classes

// abstract class Department3 {
//   name: string;
//   protected employees: string[] = [];
//   protected readonly id: string;

//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }

// //   abstract method can't have any implementation in the abstract class but it should be implemented in the inherited class

// abstract describe() : void;

// }

// class SubClass extends Department3{
//     cosntructor(id: string, private:reports, string[]){
//         super(id, 'Accounting')
//     }

//     describe(this: any, Department3: any): void {
//         console.log(`Department ${this.id}`)
//     }
// }


