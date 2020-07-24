const greet = function (name) {
  return `Hello ${name}`;
}

const greet2 = (name) => {
  return `Hello ${name}`;
}

const greet3 = (name) => `Hello ${name}`
const greet4 = () => `Hello World`

// console.log(greet('Jonny'))

console.log(greet2('Goku'));
console.log(greet3('Gohan'));
console.log(greet4());

const getUser = () => ({
  uid: 'abc123',
  user: 'jonnyalexbh',
});

const user = getUser();
console.log(user);

// homework
const getUserActived = (name) => ({
  uid: 'ABC456',
  name
});

const userActived = getUserActived('Tankis Alexis');
console.log(userActived);
