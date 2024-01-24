function main() {
	console.log("main function start");
	//loop1(5);
	//loop2(5);
	//forLoop1();
	//forLoop2();
	//forLoop3();
	//forLoop4();
	//loopForRow();
	//loopForColumn();
	//nestedForLoop1();
	//nestedForLoop2();
	//triangle1();
	//triangle2();
	//rightTriangle();
	//hollowLeftTriangle();
	//forIn();
	forOf();
	console.log("main function end");
}

function loop1(n) {
	let i;
	for (i = 1; i <= n; i++) {
		getEmployee(i);
	}
	console.log(i);
}

function loop2(n) {
	let i;
	for (i = n; i >= 1; i--) {
		getEmployee(i);
	}
}

function getEmployee(empId) {
	console.log("get an employee from Database " + empId);
}

function forLoop1() {
	for (let i = 0; i < 10; i++) {
		console.log("getEmployee " + i);
	}
}

function forLoop2() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let i = 0; i <= employees.length; i++) {
		console.log("Employee Name = " + employees[i]);
	}
}
function forLoop3() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let i = (employees.length - 1); i > 0; i--) {
		console.log("Employee Name = " + employees[i]);
	}
}
function forLoop4() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for (let employee of employees) {
		console.log("Employee Name = " + employee);
	}
}

function loopForRow() {
	let i;
	let pattern = "";
	for (i = 1; i <= 5; i++) {
		pattern += i;
	}
	console.log(pattern);
}

function loopForColumn() {
	let i;
	let pattern = "";
	for (i = 1; i <= 5; i++) {
		pattern += i;
		pattern += "\n";
	}
	console.log(pattern);
}

function nestedForLoop1() {
	let i;
	let pattern = "";
	for (i = 1; i <= 5; i++) {
		for (j = 1; j <= 5; j++) {
			pattern += i;
		}
		pattern += "\n";
	}
	console.log(pattern);
}

function nestedForLoop2() {
	let i;
	let pattern = "";
	for (i = 1; i <= 5; i++) {
		for (j = 1; j <= 5; j++) {
			pattern += j;
		}
		pattern += "\n";
	}
	console.log(pattern);
}

function triangle1() {
	let i;
	let j;
	let pattern = "";
	for (i = 1; i <= 6; i++) {
		for (j = 1; j <= i; j++) {
			pattern += i;
		}
		pattern += "\n"
	}
	console.log(pattern);
}

function triangle2() {
	let i;
	let j;
	let pattern = "";
	for (i = 1; i <= 6; i++) {
		for (j = 1; j <= i; j++) {
			pattern += j;
		}
		pattern += "\n"
	}
	console.log(pattern);
}

function rightTriangle() {
	let i;
	let j;
	let pattern = "";
	for (i = 1; i <= 5; i++) {
		for (j = 1; j <= 5; j++) {
			if (j < 5 - (i - 1)) {
				pattern += " ";
			}
			else {
				pattern += j;
			}
		}
		pattern += "\n";
	}
	console.log(pattern);
}

function hollowLeftTriangle() {
	let i;
	let j;
	let pattern = "";
	for (i = 1; i <= 6; i++) {
		for (j = 1; j <= i; j++) {
			if (i == 6 || j == 1 || i == j) {
				pattern += j;
			}
			else {
				pattern += " ";
			}
		}
		pattern += "\n"
	}
	console.log(pattern);
}

function forIn() {
	let employee = { empId: "101", firstName: "Salma", lastName: "Shaik" };
	let values = "\n";
	for (let property in employee) {
		values += employee[property];
		values += "\n";
	}
	console.log("values = " + values);
}

function forOf() {
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	let values = "\n";
	for (let employee of employees) {
		values += employee;
		values += "\n";
	}
	console.log("values = " + values);
}

// TypeError: Assignment to constant variable.
