'use strict';

const promoMethed = 'METHED';
const promoG = 'G3H2Z1';
const sum = 31000

const calculate = (a, b, c) => {
  let priceProductCash = 0;
  let maxPriceCash = 0;
  let promoCashM = 0;
  if (a > 10) {
    priceProductCash = (sum * 1.03) - sum;
    console.log('скидка более 10 товаров', priceProductCash);
  }
  if (b < sum) {
    maxPriceCash = ((sum - b) * 0.15)
    console.log('скидка более 30к ', maxPriceCash);
  }
  if (c = promoMethed) {
    promoCashM = sum * 0.1;
    console.log('скидка M ', promoCashM);
  }

  if (c = promoG && (sum - (priceProductCash + maxPriceCash + promoCashM) > 2000)) {
    const promoCashG = 500;
    console.log('скидка G ', promoCashG);
  }
};

calculate(11, 30000, 0);