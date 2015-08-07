var code = require('../grader.js');


describe('Letter Grader', function() {
  it('should return the letter grade for a given score', function() {
    expect(code.letterGrader(98)).toEqual('A');
    expect(code.letterGrader(70)).toEqual('C');
    expect(code.letterGrader(42)).toEqual('F');
  });
});



// describe('', function() {
//   it('', function() {
//     expect(code.XXX()).toEqual();
//   });
// });
// describe('', function() {
//   it('', function() {
//     expect(code.XXX()).toEqual();
//   });
// });
// describe('', function() {
//   it('', function() {
//     expect(code.XXX()).toEqual();
//   });
// });
// describe('', function() {
//   it('', function() {
//     expect(code.XXX()).toEqual();
//   });
// });