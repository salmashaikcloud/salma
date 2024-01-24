package oops.datahiding;

public class Employees {
	public String firstName = "Salma";
    public String lastName = "Shaik";
    private String salary = "20000";
    private String commissionPct ="0.3";

	public static void main(String[] args) {
		Employees employees = new Employees();
		System.out.println(employees.firstName);
		System.out.println(employees.lastName);
		System.out.println(employees.salary);
		System.out.println(employees.commissionPct);
	}
	
	public String getSalary() {
		//authentication and authorization logic
		return salary;
	}
	
	public String getCommissionPct() {
		return commissionPct;
	}
}
