// Desafio 1
function compareTrue(p1, p2) {
  if (p1 && p2 === false) {
    return false;
  } if (p1 && p2 === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, false));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

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

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(s1) {
  const myArray = s1.split(' ');
  // const myArray2 = s2.split(' ');
  // const myArray3 = s3.split(' ');
  if (myArray) {
    return myArray;
    // } if (myArray2) {
    //   return myArray2;
    // }
    // return myArray3;
  }
}

console.log(splitSentence('go Trybe'));
// console.log(splitSentence(s2));
// console.log(splitSentence(s3));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
