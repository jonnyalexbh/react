const people = ['Tankis', 'Jose', 'Daniel', 'Goku'];

const [, , p3] = people

console.log(p3);

const returnArray = () => {
  return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers)

// homework 

const useState = (value) => {
  return [value, () => console.log('hello world')];
};

const [name, setName] = useState('goku');

console.log(name);
setName();
