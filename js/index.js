// // Prevent us from attempting to use variables
// // that are not declared
// 'use strict';

// let starters = ['Bulbasaur', 'Squirtle', 'Charmander'];

// // Create an array and loop through it, logging out each value using the basic loop syntax.
// for (let index = 0; index < starters.length; index++) {
//     console.log(starters[index]);
// }

// // Create an array and loop through it, logging out each value using the "for...of" syntax.
// for (const starter of starters) {
//     console.log(starter);
// }

// // Create an array and loop through it, logging out each value using the Array.forEach() method.
// starters.forEach(starter => {
//     console.log(starter);
// });

// // Loop through an array using "for...of" and try assigning all the elements a new value. What happens?
// for (let starter of starters) {
//     starter = 'pikachu';
//     console.log(starter);
// }

// console.log(starters); // Nothing seems to happen. Even with the array and loop using LET.

// // Loop through an array using the Array.forEach() method and try assigning all the elements a new value. What happens?
// starters.forEach(starter => {
//     starter = 'pikachu';
//     console.log(starter);
// });

// console.log(starters); // Nothing seems to happen. I googled it and I think I would need to use map()

