function function1() {
    console.log ("This is function1");
}

function function2() {
    console.log ("This is function2");
}
function2();

(function () {
    console.log ("This is function3");
}
)
();
(function (a, b){
    console.log ("add of a and b = " +(a+b));
})
(2,3);