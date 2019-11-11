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
  habClimb1Freq: (array) => {
    var freq = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 'level 1') {
        freq++;
      }
    }
    return ((freq / array.length) * 100) + "%";
  },
  habClimb2Freq: (array) => {
    var freq = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 'level 2') {
        freq++;
      }
    }
    return ((freq / array.length) * 100) + "%";
  },
  habClimb3Freq: (array) => {
    var freq = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 'level 3') {
        freq++;
      }
    }
    return ((freq / array.length) * 100) + "%";
  },
}
