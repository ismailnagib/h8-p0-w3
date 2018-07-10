function dataHandling2(array) {
    array.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    array.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(array);
    
    var slice = (array.slice(3,4)).join();
    var date = slice.split("/");
    switch (date[1]) {
        case "01": {console.log("Januari"); break;}
        case "02": {console.log("Februari"); break;}
        case "03": {console.log("Maret"); break;}
        case "04": {console.log("April"); break;}
        case "05": {console.log("Mei"); break;}
        case "06": {console.log("Juni"); break;}
        case "07": {console.log("Juli"); break;}
        case "08": {console.log("Agustus"); break;}
        case "09": {console.log("September"); break;}
        case "10": {console.log("Oktober"); break;}
        case "11": {console.log("November"); break;}
        case "12": {console.log("Desember"); break;}
        default: {console.log(""); break;}
    }

    var sort = slice.split("/");
    sort.sort(function(a, b){return b-a});
    console.log(sort);

    var join = date.join("-");
    console.log(join);

    var name = (array.slice(1,2)).join();
    console.log(name.slice(0,15));
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);