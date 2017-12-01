// 1

const hello = 'Hello';
const world = 'World';

const helloWorld = `${hello} ${world}`;
console.log(helloWorld);



// 2

const multiply = (a = 1, b = 1) => console.log(a*b);
console.log(`Mnożenie (5,5):`);
multiply(5,5);

console.log(`Mnożenie (4,1):`);
multiply(4,1);

console.log(`Mnożenie (33):`);
multiply(33);



// 3

const average = (...args) => [...args].reduce((a, b) => a + b, 0) / [...args].length;

/* przez reduce() sumujemy kolejne elementy w tablicy [...args], poczynajac od initialValue = 0 podana na koncu
callbacku reduce(). "a" to poprzedni element(na poczatku jest to initialValue = 0),  "b" to element obecnie przetwarzany
(tutaj dodawany). "a" to w tym wypadku stale zmieniajaca się suma kolejnych argumentow az do zsumowania ich wszystkich

https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce
*/
console.log(`To jest średnia z (3,2,7): ${average(3,2,7)}`);
console.log(`To jest średnia z (11,90,2,7,3,0):  ${average(11,90,2,7,3,0)}`);



// 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(`To jest średnia z "grades":  ${average(...grades)}`);

/*
If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) 
to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.

There are three main differences between rest parameters and the arguments object:

rest parameters are only the ones that haven't been given a separate name, while the arguments object contains all arguments passed to the function;
the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
the arguments object has additional functionality specific to itself (like the callee property).
*/



// 5 


const arr = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstName, , lastName] = arr;

console.log(firstName);
console.log(lastName);