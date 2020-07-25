import { getHeroeById } from './08-imp-exp';

// const promiseTest = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe3 = getHeroeById(3);
//     resolve(heroe3);
//     // reject('could not find the hero');
//   }, 2000);
// });

// promiseTest
//   .then((heroe) => console.log('then the promise', heroe))
//   .catch(console.warn);


const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe3 = getHeroeById(id);
      heroe3 ? resolve(heroe3) : reject('could not find the hero');
    }, 2000);
  });
}

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);
