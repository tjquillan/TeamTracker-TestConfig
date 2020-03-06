var actions = {
  moveLineFrequency: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100

    return !Number.isNaN(freq) ? freq : 0
  },
  moveLineFrequencyStr: (array) => actions.moveLineFrequency(array) + "%",
  accuracy: (array) => {
    var array = array.map((array) => array.reduce((prev, curr) => prev + curr, 0))
    var ans = (array[0] / array.reduce((prev, curr) => prev + curr, 0)) * 100

    return !Number.isNaN(ans) ? Math.round(ans) : 0
  },
  accuracyStr: (array) => actions.accuracy(array) + "%",
  sum: (array) => {
    var sum = array.reduce((prev, curr) => prev + curr, 0)
    return !Number.isNaN(sum) ? sum : 0
  },
  averagePerMatch: (array) => {
    var average = actions.sum(array) / array.length
    return !Number.isNaN(average) ? average : 0
  }
}
