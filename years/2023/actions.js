var actions = {
  average: (array) => {
    console.log(array)
    if(array === undefined) return 0
    var average = actions.sum(array) / array.length
    return !Number.isNaN(average) ? average.toFixed(2) : 0
  },

  sum: (array) => {
    console.log(array)
    if(array === undefined) return 0
    var sum = array.reduce((prev, curr) => prev + curr, 0)
    return !Number.isNaN(sum) ? sum : 0
  },

  set: (array) => {
    console.log(array)
    if(array === undefined) return Array()
    return Array.from(
      new Set(
        array.filter(
          a => typeof a === "string" && a.trim().length > 0
        ).map(a => a.split(", ")).flat()
      )
    )
  },

  setStr: (array) => {
    console.log(array)
    return actions.set(array).join(", ")
  }
}
