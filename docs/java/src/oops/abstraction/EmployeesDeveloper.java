package oops.abstraction;

public class EmployeesDeveloper extends EmployeesTeamLead {
	public EmployeesDeveloper() {
		//super();
		System.out.println("EmployeesDeveloper Constructor");
	}
	public void deleteEmployee() {
		System.out.println("deleteEmployee");
	}
	public void deactivateEmployee() {
		System.out.println("deactiveEmployee");
	}
}