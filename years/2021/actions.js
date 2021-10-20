var actions = {


  moveLineFrequency: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100

    return !Number.isNaN(freq) ? freq : 0
  },
  moveLineFrequencyStr: (array) => actions.moveLineFrequency(array) + "%",

  robotBreak: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100

    return !Number.isNaN(freq) ? freq : 0
  },
  robotBreakStr: (array) => actions.robotBreak(array) + "%",

  averagePerMatch: (array) => {
    var average = actions.sum(array) / array.length
    return !Number.isNaN(average) ? average : 0
  }

}
