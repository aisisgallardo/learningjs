/*

Refactor next 2 closures into arrow functions simplified mode, example:
const coolFunction = a => b => a+b ;

the name of the simplified version should have the prefix cool
example : sum will be  coolSum;

*/

const canIDrive = () => {

    const checkAge = (age) =>{
        return age>=18;
    }

    return checkAge;
}

console.log(canIDrive()(19));

const sayHello = (greeting) => {

    const doGreeting = (name) =>{
        return `${greeting} ${name}`;
    }

    return doGreeting;
}

console.log(sayHello('hola')('isis'));



// work here
/* Closure: is the function and the scope */

const coolcanIDrive = () =>  age => age>=18;
  
console.log(coolcanIDrive(19));



const coolsayHello = greeting =>  name =>`${greeting} ${name}`;

console.log(coolsayHello('hola')('isis'));

