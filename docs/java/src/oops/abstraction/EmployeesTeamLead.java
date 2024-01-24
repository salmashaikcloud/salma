package oops.abstraction;

public abstract class EmployeesTeamLead extends EmployeesManager {

	public void createEmployee() {
		System.out.println("createEmployee method of EmployeesTeamLead");
	}
	/*
	 public void getEmployees() {
	 System.out.println("getEmployee");
	}
	 */
	
	public void updateEmployee() {
		System.out.println("updateEmployee");
	}
	public void saveEmployee() {
		System.out.println("saveEmployee");
	}
}
