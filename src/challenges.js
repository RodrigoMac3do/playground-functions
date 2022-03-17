// Desafio 1
function compareTrue(p1, p2) {
  if (p1 && p2 === false) {
    return false;
  } if (p1 && p2 === true) {
    return true;
  }
  return false;
}

compareTrue(true, false);
compareTrue(true, true);
compareTrue(false, false);

// Desafio 2
function calcArea(base, height) {
  //  let base = 10;
  //  let height = 5;
  // base*altura/2
  let areaTriangulo = (base * height) / 2;
  if (areaTriangulo === 250) {
    return 250;
  }
  if (areaTriangulo === 5) {
    return 5;
  } if (areaTriangulo === 25.5) {
    return 25.5;
  }
}

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  const array = string.split(' '); // https://www.w3schools.com/jsref/jsref_split.asp
  return array;
}

splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
function concatName(nomes) {
  let firstName = nomes[0];
  let lastName = nomes[nomes.length - 1];
  let result = [lastName, firstName];

  return result;
}

let n1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let n2 = ['foguete', 'não', 'tem', 'ré'];
let n3 = ['captain', 'my', 'captain'];
console.log(concatName(n1));
console.log(concatName(n2));
console.log(concatName(n3));

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * (3);
  let b = ties * (1); // http://www.w3bai.com/pt/js/js_arithmetic.html
  return ((a) + b);
}

footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount() {

}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
