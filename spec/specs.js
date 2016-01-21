describe("romanNumerals", function() {

  it("will take a given number and split it into an array of digits", function(){
    expect(romanNumerals(2362)).to.eql([2,3,6,2]);
  });

  it("will throw error if number is longer than 4 digits", function(){
    expect(romanNumerals(12345)).to.equal(true);
  });
  // it("will throw error if number in 1's place is >3")
  // it("will convert number in 1's place to roman numeral")
});
