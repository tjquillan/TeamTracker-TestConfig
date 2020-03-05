var actions = {
  moveLineFrequency: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100
    return freq !== NaN ? freq : 0
  },
  accuracy: (array) => {
    var length = array[0].length + array[1].length
    var ans = (array[0].length / length) * 100
    return ans !== NaN ? ans : 0
  },
  accuracyStr: (array) => {
    actions.accuracy(array) + "%"
  }
}
