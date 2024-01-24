function main() {
    console.log("main function start");
    //switchCaseBreak1();
    //switchCaseBreak2();
    //switchCaseBreak3();
    switchCaseBreak4();
    console.log("main function end");
}

function switchCaseBreak1() {
    console.log("switchCaseBreak1 function start");
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
    console.log("switchCaseBreak1 function end");
}

function switchCaseBreak2() {
    console.log("switchCaseBreak2 function start");
    const hour = new Date().getHours();
    let greeting;
    switch(hour) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            greeting = "No Great";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            greeting = "Good Morning";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            greeting = "Good Afternoon";
            break;
        case 17:
        case 18:
        case 19:
            greeting = "Good Evening";
            break;
        case 20:
        case 21:
        case 22:
        case 23:
            greeting = "Good Night";
            break;
        default:
            greeting = "I don't know such time";
    }
    console.log(greeting);
    console.log("switchCaseBreak2 function end")
}

function switchCaseBreak3() {
    console.log("switchCaseBreak3 function start");
    let age = 22;
    let yourAge;
    switch(age) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            yourAge = "You are not eligible for applying voter card";
            break;
        default:
            yourAge = "You are eligible for applying voter card";
    }
    console.log(yourAge);
    console.log("switchCaseBreak3 function end");
}

function switchCaseBreak4() {
    let a = "1";
    let b = 0;

    switch (+a) {
        case b + 1:
        console.log("this runs, because +a is 1, exactly equals b+1");
        break;

    default:
        console.log("this doesn't run");
    }
}