const person = {
  name: 'Tankis',
  age: 26,
  pass: 'tks123',
};

const { name, age, pass } = person;

console.log(name);
console.log(age);
console.log(pass);

const userContext = ({ pass, name, age, range = 'captain' }) => {
  return {
    namePass: pass,
    years: age,
    latlng: {
      lat: 14.234,
      lng: -12.3434
    }
  }
};

const { namePass, years, latlng: { lat, lng } } = userContext(person)

console.log('avenger', namePass, years);
console.log('latlng', lat, lng);
