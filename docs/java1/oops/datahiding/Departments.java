public class Departments {
    public static void main(String[] args) {
        Employees emp = new Employees();
        System.out.println(emp.firstName);
        System.out.println(emp.lastName);
        //System.out.println(emp.accountNumber); //CE: accountNumber has private access in Employees
        System.out.println(emp.phoneNumber);
    }
}