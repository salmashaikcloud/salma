function main() {
    console.log("main function start");
    addition();
    //addition1(5, 3);
    //addition1(312, 132);
    //addition1(4143, 365);
    //addition1(50, 30);
    /*{
        let c = addition2(242, 533);
        console.log("c = "+c);
    }*/
    console.log("main function end");
}

// we can't reuse the below code
function addition() {
    let c = 2 + 3;
    console.log("c = " +c);
}

// we can reuse the below code
function addition1(a, b) {
    let c = a + b;
    console.log("c = " +c);
}

function addition2(a, b) {
    return a + b;
}
main();

/*function calculate(sign) {
    let s1 = document.getElementById("n1").value;
    let s2 = document.getElementById("n2").value;
    let n1 = parseInt(s1);
    let n2 = parseInt(s2);
    let res1 = calculateNode(n1, n2, sign);
    console.log(res1);
    document.getElementById("res").innerHTML = res1;
}

function calculateNode(n1, n2, sign) {
    console.log("calculateNode method start");
    let res = 0;
    switch(sign) {
        case "+": {
            res1 = add(n1, n2);
            break;
        }
        case "-": {
            res1 = sub(n1, n2);
            break;
        }
        case "*": {
            res1 = mul(n1, n2);
            break;
        }
        case "/": {
            res1 = div(n1, n2);
            break;
        }
    }
    return res1;
}

function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function mul(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n1 / n2;
}*/