package oops.encapsulation;

public class Departments {
	public static void main(String[] args) {
		Employees employees = new Employees();
		//System.out.println(employees.firstName);
		//System.out.println(employees.lastName);
		//System.out.println(employees.salary);
		//System.out.println(employees.commissionPct);
		System.out.println(employees.getFirstName());
		System.out.println(employees.getlastName());
		System.out.println(employees.getSalary());
		System.out.println(employees.getCommissionPct());
	}
}
