function tentukanDeretGeometri(arr) {
    var compare = arr[1] / arr[0];
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] / arr[i-1] !== compare) {
            return false;
        }
    }
    return true;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));
console.log(tentukanDeretGeometri([2, 6, 18, 54]));
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));