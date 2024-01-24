function main(){
    console.log("main function start");
    //undefined1();
    //null1();
    number();
    //bigInt();
    //string();
    //boolean();
    //dynamic();
    //arrays();
    //objects();
    console.log("main function end");
}

function undefined1() {
    console.log("undefined1 function start");
    let n1;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);
    console.log("undefined1 function end");
}

function null1() {
    console.log("null1 function start");
    let n1 = null;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);
    console.log("null1 function end");
}

function number() {
    console.log("number function start");
    let n1 = 900_719_954_740_991; // javascript ignores _ between numbers
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);
    console.log("number function end");
}

function bigInt() {
    console.log("bigInt function start");
    let n1 = 900719954740999n;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);
    console.log("bigInt function end");
}

function string() {
    console.log("string function start");
    let n1 = "salma";
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);
    console.log("string function start");
}

function boolean() {
    console.log("boolean function start");
    let isManager = true;
    console.log("value of n1 = "+isManager);
    console.log("datatype of n1 = "+typeof isManager);

    let isEmployee = "true";
    console.log("value of n1 = "+isEmployee);
    console.log("datatype of n1 = "+typeof isEmployee);

    let x = 2;
    let y = 3;
    let z = 2;
    console.log("value is = "+(x == y));
    console.log("datatype is = "+typeof(x == y));
    console.log("value is = "+(x == z));
    console.log("datatype is = "+typeof(x == z));
    console.log(typeof "datatype is = "+typeof(x == z));
    console.log("boolean function start");
}

function dynamic() {
    console.log("dynamic function start");
    let n1;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);

    n1 = null;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);

    n1 = 900719954740999;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);

    n1 = 900719954740999n;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);

    n1 = "900719954740999";
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);

    n1 = true;
    console.log("value of n1 = "+n1);
    console.log("datatype of n1 = "+typeof n1);
    console.log("dynamic function end");
}

function arrays() {
    console.log("arrays function start");
    let a1 = [2, 3];
    console.log("value of a1 = "+a1);
    console.log("datatype of a1 = "+typeof a1);
    console.log("arrays function end");
}

function objects() {
    console.log("null1 function start");
    let o1 = {};
    console.log("value of o1 = "+o1);
    console.log("datatype of o1 = "+typeof o1);
    console.log("null1 function end");
}


/*function main() {
    undefinedFun();
    nullFun();
    number();
    bigInt();
    string();
    boolean();
    dynamic();
}

function undefinedFun() {
    let n1;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
}

function nullFun() {
    let n1 = null;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
}

function number() {
    let n1;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
    n1 = 5;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
}

function bigInt() {
    let n1 = 5456874554878546n;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
}

function string() {
    let s1 = 'Salma';
    let s2 ="shaik";
    console.log("value of s1 =" + s1 + " add type of s1 = " + typeof s1);
    console.log("value of s2 =" + s2 + " add type of s2 = " + typeof s2);
}

function boolean() {
    let isStudent = true;
    let isFemale = "true";
    let x = 2;
    let y = 2;
    console.log(
        "value of isStudent = " + isStudent + " and type of isStudent = " + typeof isStudent);
    console.log(
        "value of expression = " + isFemale + " and type of isFemale =" + typeof isFemale);
    console.log(
        "value of expression = " + (x == y) + " and type of expression = " +(x == y));
}

function dynamic() {
    let n1;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
    n1 = 5;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
    n1 = 544551449845454n;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
    n1 = true;
    console.log("value of n1 =" + n1 + " add type of n1 = " + typeof n1);
}*/