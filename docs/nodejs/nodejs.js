console.log("Welcome to learn NodeJS");
function squarePattern(n) {
    console.log("squarePattern function start");
    let row = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row += "*";
        }
        row += "\n";
    }
    console.log(row);
    console.log("squarePattern function end");
}
squarePattern(6);