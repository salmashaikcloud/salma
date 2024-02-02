function main() {
    noStrict();
}

function noStrict() {
    x =5;
    console.log(x);
    function add(p1, p2) {
        return p1+p2;
    }
    y = add(123,234);
    console.log(y);
}

main();
