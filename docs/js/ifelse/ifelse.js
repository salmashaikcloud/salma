function main() {
    console.log("main function start");
    //ifTrue();
    //ifFalse();
    //ifElseTrue();
    //ifElseFalse();
    //elseIfLadder1();
    //elseIfLadder2();
    switchCaseBreak1();
    console.log("main funtion end");
}

function ifTrue() {
    if (1 == 1) {
        console.log("true condition");
    }
}

function ifFalse() {
    if (1 == 2) {
        console.log("true condition");
    }
}

function ifElseTrue() {
    if (1 == 1) {
        console.log("if block");
    }
    else {
        console.log("else block");
    }
}

function ifElseFalse() {
    if (1 == 2) {
        console.log("if block");
    }
    else {
        console.log("else block");
    }
}
function ifElseCondition() {
    let ageString = document.getElementById("age").value;
    let age = parseInt(ageString);
    let message = "";
    if (age>=18) {
        message = "Your eligible to apply for voter card"
    }
    else {
        message = 
		"You are not eligible to apply for Voter card. Please apply after " 
		+(18 - age)+ " years"; 
    }
    document.getElementById("message").innerHTML = message;
}

function elseIfLadder1() {
    let cls = 48;
    if(cls<=5) {
        console.log("Go to Primary school");
    }
    else if(cls<=10) {
        console.log("Go to High school");
    }
    else if(cls<=12) {
        console.log("Go to Inter college");
    }
    else if(cls<=15) {
        console.log("Go to Degree college");
    }
    else {
        console.log("Go to PG college");
    }
}

function elseIfLadder2() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good morning"
    }
    else if (hour < 16) {
        greeting = "Good afternoon"
    }
    else if (hour < 20) {
        greeting = "Good evening"
    }
    else {
        greetings = "Good night"
    }
    console.log(greeting);
}

function switchCaseBreak1() {
    let day;
    console.log(new Date().getDay());
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";                             
    }
    console.log(day);
}



//function main() {
    //let hour = new Date().getHours();
    //let greetings;
    //if (hour < 12) {
        //greetings = "Good morning"
    //}
    //else if (hour < 16) {
        //greetings = "Good afternoon"
    //}
    //else if (hour < 20) {
       // greetings = "Good evening"
    //}
    //else {
       // greetings = "Good night"
    //}
    //document.getElementById("res").innerHTML = greetings;
//}
