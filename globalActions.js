var globalActions = {
  mean: (array) => {
    if (array.length === 0) {return 0};
    return array.reduce((total, value) => total + value) / array.length;
  }
}
