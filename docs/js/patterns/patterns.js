function main() {
    console.log("main function start");
    squarePattern(5);
    hollowPattern(6);
    leftTrianglePattern(5);
    rightTrianglePattern(5);
    downwardTrianglePattern(5);
    hollowTrianglePattern(5);
    console.log("main function end");
}

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

function hollowPattern(n) {
    console.log("hollowPattern function start");
    let row = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1) {
                row += "*";
            }
            else {
                if (j == 0 || j == n - 1) {
                    row += "*";
                }
                else {
                    row += " ";
                }
            }
        }
        row += "\n";
    }
    console.log(row);
    console.log("hollowPattern function end");
}

function leftTrianglePattern(n) {
    console.log("lettTrianglePattern function start");
    let row = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        row += "\n";
    }
    console.log(row);
    console.log("leftTrianglePattern function end");
}

function rightTrianglePattern(n) {
    console.log("rightTrianglePattern function start");
    let row = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n; j++) {
            if(j<=n-(i + 1)){
                row += " ";
            }
            else{
                row += "*";
            }   
        }
        row += "\n";
    }
    console.log(row);
    console.log("rightTrianglePattern function end");
}

function downwardTrianglePattern(n) {
    console.log("downwardTrianglePattern function start");
    let row = "";
    for (let i = 0; i < n; i++) {
        for (let j = n-1; j >= i; j--) {
            row += "*";
        }
        row += "\n";
    }
    console.log(row);
    console.log("downwardTrianglePattern function end");
}

function hollowTrianglePattern(n) {
    console.log("hollowTrianglePattern function start");
    let row = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if(j == 0 || i == n-1 || j == i) {
                row += "*";
            }
            else {
                row += " ";
            }
        }
        row += "\n";
    }
    console.log(row);
    console.log("hollowTrianglePattern function end");
}