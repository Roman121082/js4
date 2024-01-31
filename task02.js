'use strict';

const str = 'привет Мир'

function convertText() {
  const str1 = str.slice(1);
  const str2 = str1.toLowerCase();
  const str3 = str[0];
  const str4 = str3.toUpperCase()
  console.log(str4 + str2)
}
convertText();