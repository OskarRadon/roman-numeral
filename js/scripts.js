var digits = [];

var romanNumerals = function(number) {
  digits = number.toString().split('').map(parseFloat);
  if ((digits.length > 4) || (digits[0] > 3)){
    return true;
  } else {
  return digits;
  }
};
var onesPlace = digits[digits.length - 1];

var ones = function(onesPlace) {
  var numbers = [1,2,3,4,5,6,7,8,9];
  var numerals = ["I","II","III","IV","V","VI","VII","VIII","IX"];

  var index = numbers.indexOf(onesPlace);

  onesPlace = numerals[index];


  return onesPlace;





  // if (onesPlace === 1) {
  //   onesPlace = "I";
  // } else if (onesPlace === 2) {
  //   onesPlace = "II";
  // } else if (onesPlace === 3) {
  //   onesPlace = "III";
  // } else if (onesPlace === 4) {
  //   onesPlace = "IV";
  // }
  // return onesPlace;


};
