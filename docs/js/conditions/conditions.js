function main() {
    console.log("main function start");
    //ifTrue();
    //ifFalse();
    //ifTrueFalse();
    //applyForVoterCard(15);
    //applyForVoterCard(19);
    //elseIfLadder(2);
	//greeting(20.59);
    //switchCaseBreak1();
    switchCaseBreak2();
    //ternary1(21);
    //ternary1(15);
    //ternary2(4);
    //ternary2(14);
    console.log("main function end");
}

function ifTrue() {
	console.log("ifTrue function start");
    if(1 == 1) {
        console.log("ifTrue true condition");
    }
	console.log("ifTrue function end");
}

function ifFalse() {
	console.log("ifFalse function start");
    if(1 == 2) {
        console.log("ifFalse true condition");
    }
	console.log("ifFalse function end");
}

function ifTrueFalse() {
	console.log("ifTrueFalse function start");
    if(1 == 2) {
        console.log("ifTrueFalse true condition");
    }
    else {
        console.log("ifTrueFalse false condition");
    }
	console.log("ifTrueFalse function end");
}

function applyForVoterCard(age) {
	console.log("applyForVoterCard function start");
    if(age >= 18) {
        console.log("your eligible for applying voter card");
    }
    else {
        console.log("your not eligible for applying voter card");
        console.log("Please apply after "+ (18 - age) +" years");
    }
	console.log("applyForVoterCard function end");
}

function elseIfLadder(cls) {
	console.log("elseIfLadder function start");
    if(cls <= 5) {
        console.log("Go to Primary School");
    }

    else if(cls <= 10) {
        console.log("Go to High School");
    }

    else if(cls <= 12) {
        console.log("Go to Inter College");
    }

    else if(cls <= 15) {
        console.log("Go to Degree College");
    }

    else {
        console.log("Go to PG College");
    }
	console.log("elseIfLadder function end");
}

function greeting(hour) {
	console.log("greeting function start");
	if (hour < 12) {
        console.log("Good morning");
    }
    else if (hour < 16) {
        console.log("Good afternoon");
    }
    else if (hour < 20) {
        console.log("Good evening");
    }
    else {
        console.log("Good night");
    }
	console.log("greeting function end");
}

function switchCaseBreak1() {
    const day = new Date().getDay();
    let greeting;
    switch(day) {
        case 0:
            greeting = "Sunday";
            break;
        case 1:
            greeting = "Monday";
            break;
        case 2:
            greeting = "Tuesday";
            break;
        case 3:
            greeting = "Wednesday";
            break;
        case 4:
            greeting = "Thursday";
            break;
        case 5:
            greeting = "Friday";
            break;
        case 6:
            greeting = "Saturday"; 
            break;                        
    }
    console.log(greeting);
}

function switchCaseBreak2() {
    const hour = new Date().getHours();
    let greeting;
    switch(hour) {
        case 0:
            greeting = "No Great";
            break;
        case 1:
            greeting = "No Great";
            break;
        case 2:
            greeting = "No Great";
            break;
        case 3:
            greeting = "No Great";
            break;
        case 4:
            greeting = "No Great";
            break;
        case 5:
            greeting = "No Great";
            break;
        case 6:
            greeting = "Good Morning";
            break;
        case 7:
            greeting = "Good Morning";
            break;
        case 8:
            greeting = "Good Morning";
            break;
        case 9:
            greeting = "Good Morning";
            break;
        case 10:
            greeting = "Good Morning";
            break;
        case 11:
            greeting = "Good Morning";
            break;
        case 12:
            greeting = "Good Afternoon";
            break;
        case 13:
            greeting = "Good Afternoon";
            break;
        case 14:
            greeting = "Good Afternoon";
            break;
        case 15:
            greeting = "Good Afternoon";
            break;
        case 16:
            greeting = "Good Afternoon";
            break;
        case 17:
            greeting = "Good Evening";
            break;
        case 18:
            greeting = "Good Evening";
            break;
        case 19:
            greeting = "Good Evening";
            break;
        case 20:
            greeting = "Good Night";
            break;
        case 21:
            greeting = "Good Night";
            break;
        case 22:
            greeting = "Good Night";
            break;
        case 23:
            greeting = "Good Night";
            break;
    }
    console.log(greeting);
}

function ternary1(age) {
    let message = (age >= 18) ? 'your eligible for applying voter card' : 'your not eligible for applying voter card';
    console.log(message);
}

function ternary2(cls) {
    let studentClass = (cls <= 5) ? 'Go to Primary School' :
        (cls <= 10) ? 'Go to High School' :
        (cls <= 12) ? 'Go to Inter College' :
        (cls <= 15) ? 'Go to Degree College' : 'Go to PG College';
    console.log(studentClass);
}