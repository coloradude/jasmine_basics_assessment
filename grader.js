module.exports = {

  letterGrader: function(score){
    grade = null;
    if (score >= 90){grade = 'A'}
    else if (score < 90 && score >=90){grade = 'B'}
    else if (score < 80 && score >= 70){grade = 'C'}
    else if (score < 70 && score >=60){grade = 'D'}
    else {grade ='F'} 
    return grade;
  },

  averageScore: function(array){
    return array.reduce(function(a,b){return a + b;}) / array.length;
  },

  medianScore: function(array){
    meanId = array.length / 2;
    return (array.length % 2 !== 0) ? array[Math.floor(meanId)] : (array[meanId] + array[meanId - 1]) / 2;
  },

  modeScore: function(array){
    var occurenceCounter = [];
    for (var i=0;i<array.length;i++){
      occurenceCounter.push(array.filter(function(score){return score === array[i]}).length)
    }
    return array[occurenceCounter.indexOf(Math.max.apply(Math, occurenceCounter))];
  }
}