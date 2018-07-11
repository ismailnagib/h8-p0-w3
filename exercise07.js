function hitungJumlahKata(kalimat) {
    var jumlahKata = 1;
    for (var i = kalimat.length - 1; i >= 0; i--) {
        if (kalimat[i] === " ") {
            jumlahKata ++;
        }
    }
    if (kalimat.length >= 1) {
        return jumlahKata;
    } else {
        return 0;
    }
}
  
console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake'));
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe I can code'));
console.log(hitungJumlahKata(''));