function createEmployee() {
    console.time("duration");
    let firstName = "Salma"
    console.trace("createEmployee method start");
    console.info("You are creating new employee");
    console.log("firstname is " + firstName);
    console.debug("This is the debug message to check the application flow")
    //we will write 100 lines of logic in future in angular
    console.warn("user didn't enter lastname");
    console.error("something wrong with middleware, please try after sometime");
    console.trace("createEmployee method end");
    console.timeEnd("duration");
}