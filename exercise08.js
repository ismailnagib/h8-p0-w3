function pasanganTerbesar(num) {
    var pairMax = 0;
    var firstPair;
    var secondPair;
    var stringNum = String(num);
    if (stringNum.length >= 3) {
        for (var i = 0; i < stringNum.length - 2; i++) {
            firstPair = stringNum[i] + stringNum[i+1];
            secondPair = stringNum[i+1] + stringNum[i+2];
            if(Number(firstPair) > Number(secondPair)) {
                if (Number(firstPair) > pairMax) {
                    pairMax = Number(firstPair);
                }
            } else {
                if(Number(secondPair) > pairMax) {
                    pairMax = Number(secondPair);
                }
            }
        }
    } else if (stringNum.length === 2) {
        pairMax = num;
    } else {
        return ("Invalid input");
    }
    return pairMax;
}

console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456));
console.log(pasanganTerbesar(910233));
console.log(pasanganTerbesar(71856421));
console.log(pasanganTerbesar(79918293));
console.log(pasanganTerbesar(1));
console.log(pasanganTerbesar(12));
console.log(pasanganTerbesar(123));