var actions = {
  moveLineFrequency: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100

    return Number.isNaN(freq) ? freq : 0
  },
  accuracy: (array) => {
    var array = array.map((array) => array.reduce((prev, curr) => prev + curr, 0))
    var ans = (array[0] / array.reduce((prev, curr) => prev + curr, 0)) * 100

    return Number.isNaN(ans) ? ans : 0
  },
  accuracyStr: (array) => {
    actions.accuracy(array) + "%"
  }
}
