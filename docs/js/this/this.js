function main() {
    //const salma = new User();
    //console.log(salma); //no org constructor
    //salma.createUser("Shaik", "Salma", 9876543210); //org constroctor
    //console.log(salma); 

    /*const saniya = new User("Saniya", "Ridah", 8745132862);
    console.log(saniya);*/

    const salma = new User();
    const saniya = new User();
    salma.createUser("Shaik", "Salma", 9876543210);
    saniya.createUser("Saniya", "Ridah", 8745132862);
    console.log(salma.getUser());
}