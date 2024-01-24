function main() {
    console.log("main function start");
    //arrayPrint();
    //arrayToString();
    //arrayToStringWithSeparator();
    //addLast();
    //deleteLast();
    //addFirst();
    //deleteFirst();
    //deleteAtSpecifiedPosition();
    //deleteAtSpecifiedValueAndPosition();
    //addAtSpecifiedPosition();
    //updateAtSpecifiedPosition();
    //subArray();
    //mergingArray();
    flatArray();
    console.log("main function end");
}

function arrayPrint() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log(employees);
}

function arrayToString() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log(employees.toString());
}

function arrayToStringWithSeparator() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    console.log(employees.join(" | "));
}

function addLast() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employees.push("Nethesh");
    console.log(employees.toString());
    console.log(employees.length);
}

function deleteLast() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employees.pop();
    console.log(employees.toString());
    console.log(employees.length);
    console.log(employees.pop());
}

function addFirst() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employees.unshift("Nethesh");
    console.log(employees.toString());
}

function deleteFirst() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employees.shift();
    console.log(employees.shift());
    console.log(employees.toString());
    console.log(employees.shift());
}

function deleteAtSpecifiedPosition() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    delete employees[1];
    console.log(employees.toString());
}

function deleteAtSpecifiedValueAndPosition() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employees.splice(1, 1);
    console.log(employees.toString());
}

function addAtSpecifiedPosition() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employees.splice(2, 0, "Nethesh", "Bhavani");
    console.log(employees.toString());
}

function updateAtSpecifiedPosition() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    employees.splice(1, 1, "Bhavani");
    console.log(employees.toString());
}

function subArray() {
    let employees = ["Salma", "Durga", "Sushma", "Azhar"];
    let subArray = employees.slice(1, 3);
    console.log(subArray.toString());
}

function mergingArray() {
    let employees1 = ["Salma", "Durga", "Sushma", "Azhar"];
    let employees2 = ["Nethesh", "Raj"];
    console.log(employees1.concat(employees2).toString());
}
function flatArray() {
    let employees = [["Salma","Durga"],["Sushma", "Azhar"]];
    console.log(employees.flat().toString());
}


/*
function main() {
    console.log("main function start");
    //arrayPrint();
    //arrayToString();
    //arrayToStringSeparator();
    //deleteLast();
    //addLast();
    //deleteFirst();
    //addFirst();
    //deleteAtSpecifiedWithEmpty();
    //addAtSpecified();
    //addElementsAtSpecified();
    //updateElementsAtSpecified();
    //deleteAtSpecified();
    subArray();
    console.log("main function end");
}

function arrayPrint() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees);
}


function arrayToString() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees);
    let employeesString = employees.toString();
    console.log(employeesString);
}

function arrayToStringSeparator() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    let employeesString = employees.join("|");
    console.log(employeesString);
}

function deleteLast() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees.length);
    employees.pop();
    console.log(employees.length);
}

function addLast() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees.length);
    employees.push("Salma");
    console.log(employees.length);
}

function deleteFirst() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees.length);
    employees.shift();
    console.log(employees.length);
}

function addFirst() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees.length);
    employees.unshift("Salma");
    console.log(employees.length);
}

function deleteAtSpecifiedWithEmpty() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees.length);
    console.log(employees);
    delete employees[2];
    console.log(employees.length);
    console.log(employees);
}

function addAtSpecified() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees);
    employees.splice(3,0,"Salma")
    console.log(employees);
}

function addElementsAtSpecified() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees);
    employees.splice(3,0,"Salma","Reshma");
    console.log(employees);
}

function updateElementsAtSpecified() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees);
    employees.splice(2,1,"Salma");
    console.log(employees);
}

function deleteAtSpecified() {
    let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees);
    employees.splice(2,1);
    console.log(employees);
}

function subArray() {
    let employees1 = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
    console.log(employees1);
    let employees2 = employees1.slice(2, 4);
    console.log(employees2);
}
*/