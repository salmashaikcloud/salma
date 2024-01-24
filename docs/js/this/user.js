console.log(this);
class User {
    constructor() {
        console.log("no org constructor start");
        console.log("no org constroctor end");
    } 
    //constructer with three parameters
    /*constructor(firstName, lastName, phoneNumber) {
        console.log("org constructor start");
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        console.log(this);
        console.log("org constructor end");
    }*/
    //SyntaxError: A class may only have one constructor
    //Methods
    createUser(firstName, lastName, phoneNumber) {
        console.log("createUser start");
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        console.log("createUser end");
    }

    getUser() {
        return "{" +'"this.firstName":' + this.firstName + ',"lastName":' + this.lastName + ',"phoneNumber":' + this.phonemumber
    }
}