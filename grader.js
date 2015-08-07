module.exports = {

    letterGrader: function(score){
      grade = null;
      if (score >= 90){grade = 'A'}
      else if (score < 90 && score >=90){grade = 'B'}
      else if (score < 80 && score >= 70){grade = 'C'}
      else if (score < 70 && score >=60){grade = 'D'}
      else {grade ='F'} 
      return grade;
    }

}