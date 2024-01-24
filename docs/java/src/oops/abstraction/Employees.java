package oops.abstraction;

public class Employees extends EmployeesDeveloper {

	public static void main(String[] args) {
		
		Employees emp1 = new Employees();
		
		//compiler will check the types but not value
		emp1.createEmployee();
		emp1.getEmployee();
		emp1.updateEmployee();
		emp1.deleteEmployee();
		
		emp1.saveEmployee();
		emp1.deactivateEmployee();
		
		// object deligation
		
		EmployeesManager emp2 = new Employees();
		
		//compiler will check the types but not value
		emp2.createEmployee();
		emp2.getEmployee();
		emp2.updateEmployee();
		emp2.deleteEmployee();
		
		//emp2.saveEmployee();
		//emp2.deactivateEmployee();
	}

}
