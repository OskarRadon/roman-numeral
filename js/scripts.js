
var romanNumerals = function(number) {
  var digits = number.toString().split('').map(parseFloat);

  if ((digits.length > 4) || (digits[0] > 3)){
    return true;
  } else {
  return digits;
  }
};
