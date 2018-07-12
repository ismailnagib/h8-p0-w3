function targetTerdekat(arr) {
  var jarakTerdekat = 0;
  var posisiO = 0;
  var posisiX = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 'o') {
      posisiO = i;
    }  
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === 'x') {
      if (posisiX === 0) {
        posisiX = j;
      } else {
        if (Math.abs(posisiO - j) < jarakTerdekat) {
          posisiX = j;
        }
      }
    }
    jarakTerdekat = Math.abs(posisiO - posisiX);
  }
  if (posisiX !== 0) {
    return jarakTerdekat;
  } else {
    return 0;
  }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']));
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']));
console.log(targetTerdekat([' ', ' ', 'o', ' ']));
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']));