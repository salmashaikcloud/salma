function main() {
    console.log("main function start");
    //stringType();
    //arrayType();
    //emptyArrayWithSquareBraces();
    //arrayWithValues();
    //emptyArrayWithNewKeyword();
    //arrayWithValuesByUsingNewKeyword();
    //arrayIndex();
    //arrayWithInitialIndex();
    //arrayIterateWithForLoop();
    //arrayIterateWithForOfLoop();
    //arrayIterateInReverseDirection();
    //getFirstElement();
    //getLastElement();
    //getMiddleElement();
    //UpdateElement();
    //isArray();
    instanceOf();
    console.log("main function end");
}

function stringType() {
    let employees = "Salma";
    console.log("Employees = " +employees);
    console.log("Employees = " +typeof employees);
}

function arrayType() {
    let employees = ["Salma", "Reshma"];
    console.log("Employees = " +employees);
    console.log("Employees = " +typeof employees);
}

function emptyArrayWithSquareBraces() {
    let employees = [];
    console.log("Employees = " +employees);
    console.log("Employees = " +typeof employees);
}

function arrayWithValues() {
    let employees = ["Salma", "Reshma"];
    console.log("Employees = " +employees);
    console.log("Employees = " +typeof employees);
}

function emptyArrayWithNewKeyword() {
    let employees = new Array();
    console.log("Employees = " +employees);
    console.log("Employees = " +typeof employees);
}

function arrayWithValuesByUsingNewKeyword() {
    let employees = new Array("Salma", "Durga", "Sushma", "Azhar");
    console.log("Employees = " +employees);
    console.log("Employees = " +typeof employees);
}

function arrayIndex() {
    let employees = new Array("Salma", "Durga", "Sushma", "Azhar");
    console.log("Employees = " +employees[0]);
    console.log("Employees = " +employees[1]);
    console.log("Employees = " +employees[2]);
    console.log("Employees = " +employees[3]);
    console.log("Employees = " +typeof employees);
}

function arrayWithInitialIndex() {
    let employees = new Array(4);
    employees[0] = "Salma";
    employees[1] = "Durga";
    employees[2] = "Sushma";
    employees[3] = "Azhar";
    console.log("Employees = " +employees);
}

function arrayIterateWithForLoop() {
    let employees = new Array("Salma", "Durga", "Sushma", "Azhar");
    for(let i = 0; i < employees.length; i++){
        console.log("Employees = " +employees[i]);
    }
}

function arrayIterateWithForOfLoop() {
    let employees = new Array("Salma", "Durga", "Sushma", "Azhar");
    for(let employee of employees){
        console.log("Employees = " +employee);
    }
}

function arrayIterateInReverseDirection() {
    let employees = new Array("Salma", "Durga", "Sushma", "Azhar");
    for(let i = (employees.length-1); i >= 0; i--){
        console.log("Employees = " +employees[i]);
    }
}

function getFirstElement() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log("Employees = " +employees[0]);
}

function getLastElement() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log("Employees = " +employees[employees.length - 1]);
}

function getMiddleElement() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar", "Nethesh"];
    console.log("Employees = " +employees[(employees.length - 1)/2]);
}

function UpdateElement() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log("Employees = " +employees);
    employees[0] = "Reshma";
    console.log("Employees = " +employees);
}

function isArray() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log("Is Employees are Array type:  " +Array.isArray(employees));
}

function instanceOf() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log(employees instanceof Array);
}

