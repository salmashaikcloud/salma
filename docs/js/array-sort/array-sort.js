function main() {
	console.log("main function start");
	//sortingAnArray();
	//reversingAnArray();
	//sortingAndReversing();
	//numericSort();
	//numericSortReverse();
	//randomSort();
	//minAndMaxByAscendingSort();
	//minAndMaxByDescendingSort();
	//maxValue();
	minValue();
	console.log("main function end");
}

function sortingAnArray() {
	let employees = ["Salma", "Durga", "Sushma", "Azhar"];
	console.log(employees);
    employees.sort();
	console.log(employees);
}

function reversingAnArray() {
	let employees = ["Salma", "Durga", "Sushma", "Azhar"];
	console.log(employees);
    employees.reverse();
	console.log(employees);
}

function sortingAndReversing() {
	let employees = ["Salma", "Durga", "Sushma", "Azhar"];
	console.log(employees);
    employees.sort();
	console.log(employees);
	employees.reverse();
	console.log(employees);
}

function numericSort() {
	let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers);
	numbers.sort(); //don't use sort() for numbers
	console.log(numbers);
	numbers.sort(function(a, b){return a - b});
	console.log(numbers);
}

function numericSortReverse() {
	let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers);
	numbers.sort(function(a, b){return b - a});
	console.log(numbers);
}

function randomSort() {
	let numbers = [54, 68, 55, 15, 44, 4];
	console.log(numbers);
	numbers.sort(function(){return 0.5 - Math.random()});
	console.log(numbers);
}

function minAndMaxByAscendingSort() {
	let numbers = [54, 68, 55, 15, 44, 4];
	numbers.sort(function(a, b){return a - b});
	console.log("Min Value = "+numbers[0]);
	console.log("Max Value = "+numbers[numbers.length - 1]);
}

function minAndMaxByDescendingSort() {
	let numbers = [54, 68, 55, 15, 44, 4];
	numbers.sort(function(a, b){return b - a});
	console.log("Max Value = "+numbers[0]);
	console.log("Min Value = "+numbers[numbers.length - 1]);
}

function maxValue() {
	let numbers = [54, 68, 55, 15, 44, 4];
	console.log("Max value = "+Math.max.apply(null, numbers));
}

function minValue() {
	let numbers = [54, 68, 55, 15, 44, 4];
	console.log("Min value = "+Math.min.apply(null, numbers));
}