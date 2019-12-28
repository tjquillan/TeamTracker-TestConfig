var actions = {
  mostCommonHabClimb: (array) => {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[i] == array[j]) {
          m++;
        }
        if (mf<m) {
          mf=m;
          item = array[i];
        }
      }
      m=0;
    }
    return parseInt(item.replace('level ', ''));
  },
  _habClimbFreq: (array, level) => {
    var freq = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === level) {
        freq++;
      }
    }
    return ((freq / array.length) * 100).toFixed(3) + "%";
  },
  habClimb1Freq: (array) => actions._habClimbFreq(array, 'level 1'),
  habClimb2Freq: (array) => actions._habClimbFreq(array, 'level 2'),
  habClimb3Freq: (array) => actions._habClimbFreq(array, 'level 3'),
}
