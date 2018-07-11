function angkaPalindrome(num) {
    for (;;) {
        var reversed = "";
        var nextNum = String(num + 1);
        for (var i = nextNum.length - 1; i >= 0; i--) {
            reversed += nextNum[i];
        }
        if (reversed === nextNum) {
            return Number(nextNum);
        }
        num ++;
    }
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));