function main() {
    console.log("main method start");

    addition1(12, 13);

    let d = addition2(14, 15);
    console.log(d);
    console.log("main method end");
}

function addition1(a, b) {
    let c = a + b;
    console.log(c);
}

function addition2(a, b) {
    return a + b;
}

let e = function () {
    console.log(15 + 16);
}
    ();
main();