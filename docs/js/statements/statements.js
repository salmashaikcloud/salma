function main() {
    console.trace("main method start");
    addition();
    subtraction();
    mutipication();
    division();
    console.trace("main method end");
}

function addition() {
	console.log("addition method start");
    a = 10;
    b = 20;
    c = a + b;
    console.log("c = " + c);
	console.log("addition method end");
}

function subtraction() {
	console.log("subtraction method start");
    a = 10;
    b = 20;
    c = a - b;
    console.log("c = " + c);
	console.log("subtraction method end");
}

function mutipication() {
	console.log("multipication method start");
    a = 10;
    b = 20;
    c = a * b;
    console.log("c = " + c);
	console.log("multipication method end");
}

function division() {
	console.log("division method start");
    a = 10;
    b = 20;
    c = a / b;
    console.log("c = " + c);
	console.log("division method end");
}