package oops.abstraction;

public abstract class EmployeesManager {
	public EmployeesManager() {
		//super();
		System.out.println("EmployeesManager Constructor");
	}
	public void createEmployee() {
		System.out.println("createEmployee");
	}
	public final void getEmployee() {
		System.out.println("getEmployee");
	}
	public abstract void updateEmployee() ;
	
	public abstract void deleteEmployee() ;
}
