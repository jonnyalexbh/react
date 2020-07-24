const person = {
  name: 'Tony',
  lastName: 'Lopez',
  age: 'Tony',
  address: {
    city: 'New Your',
    zip: '975345',
    lat: '14.3232',
    lng: '34.923345',
  }
}

// console.table({ person });

const person2 = { ...person };
person2.name = 'Jonny';

console.log(person);
console.log(person2);
