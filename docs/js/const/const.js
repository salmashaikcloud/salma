function main() {
	console.log("main function start");
	//redeclaration();
	//usageBeforeDeclaration();
	//declarationAndDefinitionInMultipleLine();
	//declarationAndDefinitionInSingleLine();
	//reAssignment();
	//blockSpace();
	//hoisting();
	redeclarationAndBlockScope();
	console.log("main function end");
}

function redeclaration() {
	console.log("redeclaration function start");
	const x = 1;
	/* hard code
	let y = x;
	y = 15;
	console.log("value of y = "+y);
	*/
	//const x = 2;// SyntaxError: Identifier 'x' has already been declared
	console.log("redeclaration function end");
}

function usageBeforeDeclaration() {
	console.log("usageBeforeDeclaration method start");
	//const z = x + y; //ReferenceError: Cannot access 'x' before initialization
	const x = 1;
	const y =2;
	const z = x + y;
	console.log("z ="+z);
	console.log("usageBeforeDeclaration method end");
}

function declarationAndDefinitionInMultipleLine() {
	console.log("declarationAndDefinitionInMultipleLine method start");
	//const x; //declaration 
	//SyntaxError: Missing initializer in const declaration
	//x = 1; //definition 
	console.log("declarationAndDefinitionInMultipleLine method end");
}
function declarationAndDefinitionInSingleLine() {
	console.log("declarationAndDefinitionInSingleLine method start");
	const x = 2; // declaration + definition
	const y = 3; // declaration + definition
	console.log("declarationAndDefinitionInSingleLine method line");
}

function reAssignment() {
	console.log("reAssignment method start");
	const num1 = 2; // declaration + definition
	//num1 = 5; //TypeError: Assignment to constant variable.
	const university = "JNTU"; // declaration + definition
	//university = "HCU"; //TypeError: Assignment to constant variable.
	console.log("reAssignment method end");
}

function blockSpace() {
	console.log("function scope start");
	const a = 2;
	{
		console.log("blockSpace start");
		var x = 1;
		const y = 2;
		console.log("a");
		console.log("y");
		console.log("blockSpace end");
	}
	console.log(x);	// x can be used here.
	console.log(y); //ReferenceError: y is not defined
	console.log("function scope end");
}

function hoisting() {
	console.log("hoisting method start");
	//const z = x + y;
	//ReferenceError: Cannot access 'x' before initialization
	const x = 1;
	const y = 2;
	const z = x + y;
	console.log(z);
	console.log("hoisting method end");
}

function redeclarationAndBlockScope() {
	console.log("redeclarationAndBlockScope method start");
	var x = 1;
	const y = 2;
	console.log(x);
	console.log(y);
	{
		console.log("blockSpace method start");
		var x = 3;
		const y = 4;
		console.log(x);
		console.log(y);
		console.log("blockSpace method end");
	}
	console.log(x);
	console.log(y);
	console.log("redeclarationAndBlockScope method end");
}