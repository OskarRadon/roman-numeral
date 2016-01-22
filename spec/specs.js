describe("romanNumerals", function() {

  // it("will take a given number and split it into an array of digits", function(){
  //   expect(romanNumerals(2362)).to.eql([2,3,6,2]);
  // });

  it("will throw error if number is longer than 4 digits", function(){
    expect(romanNumerals(12345)).to.equal(true);
  });

  it("will throw error if digit in 1000's place is greater than 3", function() {
    expect(romanNumerals(4321)).to.equal(true);
  });

  it("will put together ones, tens, hundreds, and thousands outputs", function() {
    expect(romanNumerals(3000)).to.equal("MMM");
  });
});

describe("ones", function() {

  it("check if index references correct position in numbers", function() {
    expect(ones(3)).to.equal("III");
  });
});

describe("tens", function() {

  it("check if index references correct position in numbers", function() {
    expect(tens(3)).to.equal("XXX");
  });
});

describe("hundreds", function() {

  it("check if index references correct position in numbers", function() {
    expect(hundreds(3)).to.equal("CCC");
  });
});

describe("thousands", function() {

  it("check if index references correct position in numbers", function() {
    expect(thousands(3)).to.equal("MMM");
  });
});

// function romanize (num) {
//   if (!+num)
//   return false;
//   var digits = String(+num).split(""),
//   key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//          "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//          "","I","II","III","IV","V","VI","VII","VIII","IX"],
//   roman = "",
//   i = 3;
//   while (i--) roman = (key[+digits.pop() + (i * 10)] || "") + roman; return Array(+digits.join("") + 1).join("M") + roman; }
