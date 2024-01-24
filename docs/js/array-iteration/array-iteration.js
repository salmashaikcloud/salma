function main() {
    console.log("main method start");
    //forEach1();
    //map1();
    //flatMap1();
    //filter1();
    //reduceFromLeft();
    //reduceFromRight();
    //every1();
    //some1();
    //indexOf1();
    //lastIndexOf1();
    //find1();
    //findIndex1();
    //arrayFrom();
    //arrayKeys();
    //arrayEntries();
    //includes1();
    spread();
    console.log("main method end");
}

function forEach1() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employee = "";
    employees.forEach(forEachFunction);
    console.log(employee);
}

function forEachFunction(value) {
    employee += value + "\n";
}

function map1() {
    let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers.map(mapFunction));
}

function mapFunction(value) {
    return value * 2;
}

function flatMap1() {
    let numbers = [54, 68, 55, 15, 44, 4];
    console.log(numbers.flatMap((x) => x * 2));
}

function filter1() {
    let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers.filter(filterFunction));
}

function filterFunction(value) {
    return value > 30;
}

function reduceFromLeft() {
    let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers.reduce(reduceFunction));
}

function reduceFunction(total, value) {
    return total + value;
}

function reduceFromRight() {
    let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers.reduceRight(reduceFunction));
}

function every1() {
    let numbers = [54, 68, 55, 44];
	console.log(numbers.every(everyFunction));
}

function everyFunction(value) {
    return value > 30;
}

function some1() {
    let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers.some(someFunction));
}

function someFunction(value) {
    return value > 30;
}

function indexOf1() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log(employees.indexOf("Salma"));
}

function lastIndexOf1() {
    let employees = ["Salma", "Durga", "Salma", "Sushma", "Azhar"];
    console.log(employees.lastIndexOf("Salma"));
}

function find1() {
    let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers.find(findFunction));
}

function findFunction(value) {
    return value > 30;
}

function findIndex1() {
    let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers.findIndex(findFunction));
}

function arrayFrom() {
    console.log(Array.from("Salma"));
}

function arrayKeys() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    let keys = employees.keys();
    let employee = "";
    for (let values of keys) {
        employee += values + "\n";
    }
    console.log(employee);
}

function arrayEntries() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    let entries = employees.entries();
    let employee = "";
    for (let values of entries) {
        employee += values + "\n";
    }
    console.log(employee);
}

function includes1() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log(employees.includes("Durga"));
}

function spread() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log(...employees);
}