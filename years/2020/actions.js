var actions = {
  moveLineFrequency: (array) => {
    var freq = array.filter((value) => value === "Yes").length / array.length
    return freq !== NaN ? ans : 0
  },
  accuracy: (array) => {
    var length = array[0].length + array[1].length
    var ans = (array[0].length / length)
    return ans !== NaN ? ans : 0
  },
  accuracyStr: (array) => {
    actions.accuracy(array) + "%"
  }
}
