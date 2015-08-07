var code = require('../grader.js');


describe('Letter Grader', function() {
  it('should return the letter grade for a given score', function() {
    expect(code.letterGrader(98)).toEqual('A');
    expect(code.letterGrader(70)).toEqual('C');
    expect(code.letterGrader(42)).toEqual('F');
  });
});

describe('Average Score', function() {
  it('should return the average from an array of grades', function() {
    expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
  });
});

describe('Median Score', function() {
  it('returns the median value in a given array', function() {
    expect(code.medianScore([52,80,80,86,94])).toEqual(80);
    expect(code.medianScore([52,80,80,86,94,98])).toEqual(83);
  });
});


// describe('', function() {
//   it('', function() {
//     expect(code.XXX()).toEqual();
//   });
// });
