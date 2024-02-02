'use strict';

const calculate = (sumCart, quantityProduct, promotionalCode) => {

  if (quantityProduct > 10) {
    sumCart -= (0.03 * sumCart);
  };

  if (sumCart > 30000) {
    sumCart -= ((sumCart - 30000) * 0.15);
  };

  if (promotionalCode === 'METHED') {
    sumCart -= sumCart * 0.1;
  };

  if (promotionalCode === 'G3H2Z1' && (sumCart > 2000)) {
    sumCart -= 500;
  };

  return sumCart;

};

calculate();

