class Employees {
    String firstName = "Salma";
    String lastName = "Shaik";

    public static void main(String[] args) {
        Employees employees = new Employees();
        employees.printFullName();
    }

    public void printFullName() {
        System.out.println(firstName + " " + lastName);
    }
}