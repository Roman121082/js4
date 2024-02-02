'use strict';

const converterEuro = (euro, usd, rub) => {

  return euro * usd * rub;
};

converterEuro(1, 1.2, 73);

console.log('стоимость в рублях', converterEuro(1, 1.2, 73));


