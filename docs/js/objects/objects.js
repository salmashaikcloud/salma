"use strict"
function main() {
    curlyBraces();
    newObject();
    //employee(id, name, salary);
}

main();

function curlyBraces() {
    let employee = { emp_id: 101, firstName: "Salma", lastName: "Shaik" }
    console.log(employee);
}

function newObject() {
    let emp = new Object();
    emp.id = 102;
    emp.name = "Salma";
    emp.salary = 50000;
    console.log(emp);
}

/*function employee(id, name, salary) {
    this.id =id;
    this.name=name;
    this.salary=salary;

    let emp1 = new employee(103, "salma", 45000);
    console.log(employee);
}*/
//let employee = new Employees(103, "salma", 45000);
//console.log(employee);