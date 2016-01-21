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
  if (onesPlace === 1) {
    onesPlace = "I";
  } else if (onesPlace === 2) {
    onesPlace = "II";
  } else if (onesPlace === 3) {
    onesPlace = "III";
  } else if (onesPlace === 4) {
    onesPlace = "IV";
  }
  return onesPlace;


};
