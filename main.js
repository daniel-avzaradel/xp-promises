// EXERCISE 1 //
// 1. Create a function called compareToTen that takes a number as an argument.
// 2. The function should return a Promise that tests if the value of the given argument is less or greater than 10.


// const compareToTen = (num) => {
//     let p = new Promise((resolve, reject) => {
//         if(typeof(num) != 'number' || num == null || num == undefined) {
//             console.log('Error! The input value is NOT a number')
//             return;
//         }
//         if(num > 10) {
//             resolve()
//         } else {
//             reject()
//         }
//     })
//     return p;
// }

// compareToTen(12)
// .then(result => console.log(`Your number is greater than 10.`))
// .catch(error => console.log('ERROR'))


// EXERCISE 2 //
// 1. Create a promise that resolves itself in 4 seconds and returns a “success” string.
// 2. Read about Promise.resolve() and Promise.reject().


// let bool = true;
// const promiseLet = new Promise((resolve, reject) => {
//     if(bool == true) {
//         setTimeout(() => {
//             resolve('success');
//         }, 4000);
//     } else {
//         reject();
//     }
// });

// promiseLet.then(values => { 
//     console.log(values);
// });


// 3. How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// const promise1 = new Promise(resolve => resolve('success'))

// promise1.then(value => {
//     setTimeout(() => {
//         console.log(value);
//     }, 4000)
// })

// 4. Add code to catch errors and console.log ‘Ooops something went wrong’.

// promiseLet.catch(error => {
//     console.log('Ooops something went wrong')
// })


// EXERCISE 3: RESOLVE AND REJECT

// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

// let value3 = Promise.resolve(3)
// value3.then(value => console.log(value))


// // 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// let valueBoo = Promise.reject("Boo!")
// valueBoo.catch(error => console.log(error))

// Exercise 4: Quizz - Not Mandatory
