package oops.abstraction;

public class Employees extends EmployeesDeveloper {
	public Employees() {
		//super();
		System.out.println("Employees Constructor");
	}

	public static void main(String[] args) {
		System.out.println("Employees class start");
		
		Employees emp1 = new Employees();
		
		//compiler will check the types but not value
		emp1.createEmployee();
		emp1.getEmployee();
		emp1.updateEmployee();
		emp1.deleteEmployee();
		
		emp1.saveEmployee();
		emp1.deactivateEmployee();
		
		// object delegation
		
		EmployeesManager emp2 = new Employees();
		
		//compiler will check the types but not value
		emp2.createEmployee();
		emp2.getEmployee();
		emp2.updateEmployee();
		emp2.deleteEmployee();
		
		//emp2.saveEmployee(); //CE: The method saveEmployee() is undefined for the type EmployeesManager
		//emp2.deactivateEmployee();
		
		//Employees emp3 = new EmployeesManager(); //CE: cannot convert from EmployeesManager to Employees
		System.out.println("Employees class end");
	}

}
