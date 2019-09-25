

function generateRandomNums (array, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let randomNumberGenerator = Math.floor(Math.random() * Math.floor(array.length - 1));
    arr.push(array[randomNumberGenerator])
  }
  if (checkNumbers(arr)) {
    return arr
  }
  return false
}

function checkNumbers (array) {
  for ( let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1]) {
      return false
    }
  }
  return true
}

console.log(generateRandomNums([33, 33, 44, 44], 2))