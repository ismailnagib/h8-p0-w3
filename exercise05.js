function palindrome(kata) {
    var reversed = "";
    for (var i = kata.length - 1; i >= 0; i--) {
        reversed += kata[i];
    }
    if (reversed === kata) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));