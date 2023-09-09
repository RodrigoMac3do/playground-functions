// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(nomes) {
  const lastName = nomes[nomes.length - 1];

  return `${lastName}, ${nomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  const maiorNumero = Math.max(...numbers);

  const count = numbers.reduce(
    (acc, number) => (number === maiorNumero ? acc + 1 : acc),
    0,
  );

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const dis1 = Math.abs(cat1 - mouse);
  const dis2 = Math.abs(cat2 - mouse);

  if (dis1 < dis2) return 'cat1';

  if (dis1 > dis2) return 'cat2';

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  return arrayNumbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';

    return 'bug!';
  });
}

// Desafio 9
function encode(string) {
  const object = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  const replace = string.replace(/[aeiou]/gi, (match) => object[match]);

  return replace;
}
function decode(string) {
  const object = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const replace = string.replace(/[12345]/gi, (match) => object[match]);

  return replace;
}

// Desafio 10
function techList(tech, nome) {
  if (tech.length === 0) return 'Vazio!';

  const sortedTechName = tech.sort();

  const arrayTech = sortedTechName.map((techName) => ({
    tech: techName,
    name: nome,
  }));

  return arrayTech;
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
