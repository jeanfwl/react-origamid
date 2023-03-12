function mouseMoveHandler({ clientX, clientY }) {
  clientX = 'teste';
  // console.log(clientX, clientY);
}

document.addEventListener('mousemove', mouseMoveHandler);

const frutas = ['Banana', 'Maçã'];
const [frutaPos1, frutaPos2] = frutas;
console.log(frutaPos1, frutaPos2);

const useState = [
  'blue',
  function (color) {
    useState[0] = color;
  },
];

const [color, setColor] = useState;

console.log(color);
setColor('green');
console.log(useState[0]);
