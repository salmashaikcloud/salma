package oops.inheritance;

public class Managers extends Employees{
	private String managerId = "101";
	public void getManager() {
		System.out.println(firstName);
		System.out.println(lastName);
		System.out.println(employeeId);
		System.out.println(managerId);
	}
	public static void main(String[] args) {
		Managers managers = new Managers();
		managers.getManager();
		System.out.println();
		managers.getEmployee();
		System.out.println();
		managers.getUser();
	}
}
