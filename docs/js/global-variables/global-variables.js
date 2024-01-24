var n1 = 13;
console.log(n1);
function main() {
	console.log("main method start");
	globalVariable();
	declaringGlobalVariableWithinTheFunction();
	accessingGlobalVariablesFromAnotherFunction();
	console.log("main method end")
}

function globalVariable() {
	console.log("globalVariable method start");
	n1 =14;
	console.log(n1);
	//console.log(window.n1);
	console.log("globalVariable method end")
}

function declaringGlobalVariableWithinTheFunction() {
	console.log("declaringGlobalVariableWithinTheFunction method start");
	n2 = 12;
	console.log(n2);
	console.log(n1);
	console.log("declaringGlobalVariableWithinTheFunction method end");
}

function accessingGlobalVariablesFromAnotherFunction() {
	console.log("accessingGlobalVariablesFromAnotherFunction method start");
	console.log(n2);
	console.log("accessingGlobalVariablesFromAnotherFunction method ");
}