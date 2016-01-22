var digits = [];
var thousandsPlace = digits[digits.length - 4];

var romanNumerals = function(number) {
  digits = number.toString().split('').map(parseFloat);
  if ((digits.length > 4) || (digits[0] > 3)){
    return true;
  } else {
  return thousandsPlace;//.concat(hundredsPlace, tensPlace, onesPlace);
  }
};

var onesPlace = digits[digits.length - 1];
var ones = function(onesPlace) {

  var numbers = [1,2,3,4,5,6,7,8,9];
  var numerals = ["I","II","III","IV","V","VI","VII","VIII","IX"];

  var index = numbers.indexOf(onesPlace);
  onesPlace = numerals[index];

  return onesPlace;
};

var tensPlace = digits[digits.length - 2];
var tens = function(tensPlace) {

  var numbers = [1,2,3,4,5,6,7,8,9];
  var numerals = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];

  var index = numbers.indexOf(tensPlace);
  tensPlace = numerals[index];

  return tensPlace;
};

var hundredsPlace = digits[digits.length - 3];
var hundreds = function(hundredsPlace) {

  var numbers = [1,2,3,4,5,6,7,8,9];
  var numerals = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CD"];

  var index = numbers.indexOf(hundredsPlace);
  hundredsPlace = numerals[index];

  return hundredsPlace;
};


var thousands = function(thousandsPlace) {

  var numbers = [1,2,3];
  var numerals = ["M","MM","MMM"];

  var index = numbers.indexOf(thousandsPlace);
  thousandsPlace = numerals[index];

  return thousandsPlace;
};
