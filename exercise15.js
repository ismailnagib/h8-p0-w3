function groupAnimals(animals) {
    animals.sort();
    var container = "";
    var groups = [];
    var groupCount = 0;
    for (var i = 0; i < animals.length; i++) {
        if (container === "") {
            container = animals[i][0];
            groups.push([]);
            groups[groupCount].push(animals[i]);
        } else {
            if (animals[i][0] === container) {
                groups[groupCount].push(animals[i]);
            } else {
                container = animals[i][0];
                groups.push([]);
                groupCount ++;
                groups[groupCount].push(animals[i]);
            }
        }
    }
    return groups;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));