function main() {
    console.log("main method start");
    logical();
    console.log("main method end");
}

function logical() {
    console.log("logical method start");
    let x = 5;
    let y = 8;
    console.log(x < 4 && y < 9);
    console.log(x < 4 || y < 9);
    console.log(!(x < 4 && y < 9 ));
    console.log(!!(x < 4 && y < 9 ));
    console.log("logical method end");
}