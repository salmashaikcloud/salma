function number(){
    let s = document.getElementById(n).value;
    let n = parseInt(s);
    let res1 = numberNode(n);
    console.log(res1);
    document.getElementById("res").innerHTML = res1;
}

if (input < 10) {
    document.getElementById("res").innerHTML = "The num is less than 10."
}