console.log("output js");
/*Using getElementById method and innerHTML */
document.getElementById("p1").innerHTML = "This para from JavaScript";
/*Using console object and its method*/
console.trace("This is a trace method start");
console.info("Employee created successfully");
firstName = "Salma";
console.log("firstName = "+firstName);
lastName = "";
console.warn("lastName = "+lastName);
email ="";
console.error("Email cann't be empty");

function override() {
    document.write("This is the test from document.write() function");
}

function deleteEmployee() {
    window.alert("Are you sure want to delete employee");
}