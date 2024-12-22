let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 10;
userName = 'Basanta';

// this doesn't take anything if the var is  known but if it's any then it will take anything... as a input or initialization! Unknown matlab kuch vi nahi dale but any means jobi dale chalega

// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput;
}

// Never return type

// Never is used when it doesn't return anything... like it's an infinite loop or it throws an error

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const res = generateError('An internal server error', 500);

console.log(res);
