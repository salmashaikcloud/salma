package lang.hashcode;

public class Employee {
	private int employeeId;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;

	public Employee() {
	}
	
	public Employee(int employeeId, String firstName, String lastName, String email, String phoneNumber) {
		//super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}

	public static void main(String[] args) {
		Employee empObj1 = new Employee();
		String empStr1 = empObj1.toString(); //this = emp1 of type Employee
		System.out.println(empStr1);
		
		Employee empObj2 = new Employee(101, "Salma", "Shaik", "salma.s@gmail.com", "9876543219");
		String empStr2 = empObj2.toString(); //this = emp2 of type Employee
		System.out.println(empStr2);
		
		Employee empObj3 = new Employee(102, "Salma", "Shaik", "salma.s@gmail.com", "9876543219");
		String empStr3 = empObj3.toString(); //this = emp2 of type Employee
		System.out.println(empStr3);
	}
	@Override
	public int hashCode() {
		return this.employeeId;
	}
}
