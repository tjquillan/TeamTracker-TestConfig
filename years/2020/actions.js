var actions = {
  moveLineFrequency: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100

    if (freq === NaN) {
      freq = 0
    }

    return freq
  },
  accuracy: (array) => {
    var array = array.map((array) => array.reduce((prev, curr) => prev + curr, 0))
    var ans = (array[0] / array.reduce((prev, curr) => prev + curr, 0)) * 100

    if (ans === NaN) {
      ans = 0
    }

    return ans
  },
  accuracyStr: (array) => {
    actions.accuracy(array) + "%"
  }
}
