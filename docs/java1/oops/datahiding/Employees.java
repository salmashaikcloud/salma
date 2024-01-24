public class Employees {
    public String firstName = "Salma";
    public String lastName = "Shaik";
    private long accountNumber = 547665612L;
    protected long phoneNumber = 9876543210L;

    public static void main(String[] args) {
        Employees emp = new Employees();
        System.out.println(emp.firstName);
        System.out.println(emp.lastName);
        System.out.println(emp.accountNumber);
        System.out.println(emp.phoneNumber);
    }
}