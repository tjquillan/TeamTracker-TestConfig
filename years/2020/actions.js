var actions = {
  moveLineFrequency: (array) => {
    var freq = array.filter((value) => value === "Yes").length / array.length
    return freq
  },
  accuracy: (array) => {
    var length = array[0].length + array[1].length
    return (array[0].length / length)
  },
  accuracyStr: (array) => {
    actions.accuracy(array) + "%"
  }
}
