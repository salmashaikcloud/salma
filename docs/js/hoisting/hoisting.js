function main() {
    noHoisting();
    hoisting();
    hoisting1();
}
main();
//Bad way of  writing Program 
function noHoisting() {
    //variable usage
    var c = a + b;
    console.log(c);
    //variable definition
    a = 5;
    b = 6;
    //variable declaration
    //var a;
    var b;
}
//Good way of writing program
function hoisting() {
    //variable declaration
    var a;
    var b;
    //variable definition
    a = 7;
    b = 8;
    //variable usage
    c = a + b;
    console.log(c);
}

function hoisting1() {
    //let c = a + b
    // ReferenceError: Cannot access 'a' before initialization
    //variable declaration
    let a;
    let b;
    //variable usage
    let c = a + b;
    //variable definition
    a = 7;
    b = 8;
    console.log(c);
}
