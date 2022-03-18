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
  let result = `${lastName}, ${firstName}`;

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
function highestCount(o) {
  let maiorNumero = Math.max.apply(null, o);
  // console.log(maiorNumero);
  let contador = 0;
  for (let i = 0; i < o.length; i += 1) {
    if (maiorNumero === o[i]) {
      contador += 1;
    }
  }
  return contador;
}

let a1 = [9, 1, 2, 3, 9, 5, 7];
let a2 = [0, 4, 4, 4, 9, 2, 1];
let a3 = [0, 0, 0];

highestCount(a1);
highestCount(a2);
highestCount(a3);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dis1 = Math.abs(cat1 - mouse); // 0 - 1 = -1
  let dis2 = Math.abs(cat2 - mouse); // 2 - 1 = 1
  // console.log(dis1, dis2);
  if (dis1 < dis2) {
    return 'cat1';
  }
  if (dis1 > dis2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(0, 5, 10));
console.log(catAndMouse(0, 10, 5));
console.log(catAndMouse(0, 10, 10));

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
function techList(ntech, no) {
  ntech = ntech.sort();
  let arrayTech = [{
    tech: ntech[0],
    name: no,
  }];
  if (ntech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 1; i < ntech.length; i += 1) {
    let novoValor = {
      tech: ntech[i],
      name: no,
    };
    arrayTech.push(novoValor);
  }
  return arrayTech.sort();
}

let array1 = ['React', 'Python', 'CSS', 'JavaScript', 'HTML'];
let nome = 'Rodrigo';
console.log(techList(array1, nome));

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
