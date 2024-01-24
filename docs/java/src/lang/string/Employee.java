package lang.string;

public class Employee extends Object {
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;

	public Employee() {
	}
	
	public Employee(String firstName, String lastName, String email, String phoneNumber) {
		//super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}
	
	public static void main(String[] args) {
		
		Employee empObj1 = new Employee();
		String empStr1 = empObj1.toString(); //this = emp1 of type Employee
		System.out.println(empStr1);
		
		Employee empObj2 = new Employee("Salma", "Shaik", "salma.s@gmail.com", "9876543219");
		String empStr2 = empObj2.toString(); //this = emp2 of type Employee
		System.out.println(empStr2);
	}
	/*
	 * public String toString() {
	 * return "{" + this.firstName + "," + this.lastName + "," + this.phoneNumber + "," + this.email + "}";
	 * }
	 */

	@Override
	public String toString() {
		return "Employee [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", phoneNumber="
				+ phoneNumber + "]";
	}
	
}
