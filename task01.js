'use strict';

const euro = +prompt('укажите стоимость покупки в евро');

const converter = (a, b) => {
console.log('стоимость покупки в долларах', euro * a)
console.log('стоимость покупки в рублях', euro * b)
};

converter(1.2, 0.73);
