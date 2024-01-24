/* Do not declare variables with nothing
	If you declare variables with nothing, we are missing security.
*/
var x = 1; //global variable
function main() {
	console.log("main method start");
	//nothing();
	//var1();
	nan();
	//redeclaration();
	//usageBeforeDeclaration();
	//blockScope();
	console.log("main method end");
}

function nothing() {
	console.log("nothing method start");
	employeeId = 101;
	firstName = "Salma";
	console.log(employeeId);
	console.log(typeof employeeId);
	console.log(firstName);
	console.log(typeof firstName);
	console.log("nothing method end");
}

function var1() {
	console.log("var1 method start");
	var employeeId;
	var firstName;
	console.log("value = "+employeeId);
	console.log("typeof = "+typeof employeeId);
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	employeeId = "101";
	firstName = "Salma";
	console.log("value = "+employeeId);
	console.log("typeof = "+typeof employeeId);
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	console.log("var1 method end");
}

function nan() {
	console.log("nan method start");
	//var n3 = n1 + n2;
	var n1;
	var n2 = 5; 
	var n3 = n1 + n2;
	console.log("value of n3 = "+n3);
	console.log("typeof n3 = "+typeof n3);
	console.log("nan method end");
}
function redeclaration() {
	console.log("redeclaration method start");
	var firstName = "salma";
	var n1;
	var n1; // Expecting Error here
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	console.log("redeclaration method end");
}

function usageBeforeDeclaration() {
	console.log("usageBeforeDeclaration method start");
	var n3 = n1 + n2; // Expecting Error here
	var n1 = 10;
	var n2 = 14; 
	console.log("value = "+n3);
	console.log("typeof = "+typeof n3);
	console.log("usageBeforeDeclaration method end");
}

function blockScope() {
	console.log("blockScope method start");
	var x = 2; // local variable
	{
        var x = 3; // block variable
        console.log("x = "+x);
    }
        console.log("x = "+x);
		console.log("blockScope method end");
}