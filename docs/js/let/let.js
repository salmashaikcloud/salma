let x = 1; //global veriable
function main() {
	console.log("main method start");
	redeclaration();
	usageBeforeDeclaration();
	declarationAndDefinationInMultipleLine();
	declarationAndDefinationInSingleLine();
	reAssignment();
	blockScope();
	copyData();
	console.log("main method end");
	
}

function redeclaration() {
	console.log("redeclaration method start");
	let n1;
	//let n1; //Identifier 'n1' has already been declared
	console.log("redeclaration method end");
}

function usageBeforeDeclaration() {
	console.log("usageBeforeDeclaration method start");
	//let n3 = n1 + n2; // Expecting Error here
					  // Error: Cannot access 'n1' before initialization
	let n1 = 10;
	let n2 = 14; 
	let n3 = n1 + n2;
	console.log("value = "+n3);
	console.log("typeof = "+typeof n3);
	console.log("usageBeforeDeclaration method end");
}

function declarationAndDefinationInMultipleLine() {
	console.log("declarationAndDefinationInMultipleLine method start");
	let n1; // declaration
	let n2;
	n1 = 12; // defination
	n2 = 13;
	console.log("declarationAndDefinationInMultipleLine method end");
}

function declarationAndDefinationInSingleLine() {
	console.log("declarationAndDefinationInSingleLine method start");
	let n1 = 12; // declaration + defination
	let n2 = 13;
	console.log("declarationAndDefinationInSingleLine method end");
}

function reAssignment() {
	console.log("reAssignment method start");
	let n1 = 12; // declaration + defination
	n1 = 13; // re-assignment
	n1 = 14; //re-assignment
	console.log("n1 = "+n1);
	console.log("reAssignment method end");
}

function blockScope() {
	console.log("function Scope method start");
	let x = 2; // local variable
	{
		console.log("blockScope method start");
        let x = 3;
        console.log("x = "+x);
		console.log("blockScope method end");
    }
    console.log("x = "+x);
	console.log("function Scope method end");
}

function copyData() {
	console.log("copyData start");
	let n1 = 10;
	let n2;
	let n3;
	n3 = n2 = n1;
	console.log("value of n1 = "+n1);
	console.log("value of n2 = "+n2);
	console.log("value of n3 = "+n3);
	console.log("copyData end");
}
/*
function main() {
    console.log("main function start");
    redeclaration();
    usageBeforereDeclaration();
    declarationAndDefination();
    declarationAndDefinationInSingleLine();
    //declarationAndDefinationInMultipleLine();
    reAssignment();
    blockScope();
    console.log("main function end");
}

function redeclaration() {
    console.log("redeclaration function start");
    let x = 2;
    //var x = 3; //SyntaxError: Identifier 'x' has already been declared
    console.log("redectaration function end");
}

function usageBeforereDeclaration() {
    console.log("usageBeforereDeclaration function start");
    // let z = x + y; // RefereceError cannot access 'x' inetiation
    let x = 2;
    let y = 3;
    let z = x + y;
    console.log("usageBeforereDeclaration function end"); 
}

function declarationAndDefination() {
    console.log("declarationAndDefination function start");
    let x; // declaration
    let y;
    x = 2; //defination
    y = 3;
    let z = x + y;
    console.log("declarationAndDefination function end"); 
}

function declarationAndDefinationInSingleLine() {
    console.log("declarationAndDefinationInSingleLine function start");
    let x = 2; // declaration + defination
    let y = 3;
    let z = x + y;
    console.log("declarationAndDefinationInSingleLine function end"); 
}

function declarationAndDefinationInMultipleLine() {
    console.log("declarationAndDefinationInMultipleLine function start");
    let x; // declaration
    let y;
    x = 2; //defination
    y = 3;
    let z = x + y;
    console.log("declarationAndDefinationInMultipleLine function end"); 
}

function reAssignment() {
    console.log("reAssignment function start");
    let x; // declaration
    x = 2; // assignmnt
    x = 3; // re-assignment
    console.log("x = "+x);
    console.log("reAssignment function end");
}

function blockScope() {
    console.log("blockScope function start");
    let x = 1;
        {
            let x = 2;
            console.log("x = "+x);
        }
        console.log("x = "+x);
    console.log("blockScope function end");
}
*/