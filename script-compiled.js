'use strict';

// 1

var hello = 'Hello';
var world = 'World';

var helloWorld = hello + ' ' + world;
console.log(helloWorld);

// 2

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(a * b);
};
console.log('Mno\u017Cenie (5,5):');
multiply(5, 5);

console.log('Mno\u017Cenie (4,1):');
multiply(4, 1);

console.log('Mno\u017Cenie (33):');
multiply(33);

// 3

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return [].concat(args).reduce(function (a, b) {
    return a + b;
  }, 0) / [].concat(args).length;
};

/* przez reduce() sumujemy kolejne elementy w tablicy [...args], poczynajac od initialValue = 0 podana na koncu
callbacku reduce(). "a" to poprzedni element(na poczatku jest to initialValue = 0),  "b" to element obecnie przetwarzany
(tutaj dodawany). "a" to w tym wypadku stale zmieniajaca się suma kolejnych argumentow az do zsumowania ich wszystkich

https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce
*/
console.log('To jest \u015Brednia z (3,2,7): ' + average(3, 2, 7));
console.log('To jest \u015Brednia z (11,90,2,7,3,0):  ' + average(11, 90, 2, 7, 3, 0));

// 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('To jest \u015Brednia z "grades":  ' + average.apply(undefined, grades));

/*
If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) 
to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.

There are three main differences between rest parameters and the arguments object:

rest parameters are only the ones that haven't been given a separate name, while the arguments object contains all arguments passed to the function;
the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
the arguments object has additional functionality specific to itself (like the callee property).
*/

// 5 


var arr = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = arr[2],
    lastName = arr[4];


console.log(firstName);
console.log(lastName);
