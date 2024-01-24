package oops.inheritance;

public class Employees extends Users {
	String employeeId = "101";
	public static void main(String[] args) {
		Employees emp = new Employees();
		emp.getEmployee();
	}
	public void getEmployee() {
		System.out.println(employeeId);
		System.out.println(firstName);
		System.out.println(lastName);
		System.out.println(email);
		//System.out.println(phoneNumber);
		// error: phoneNumber has private access in Users
	}
}
