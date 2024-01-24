package staticcontrolflow;

public class Employees {
	private static String companyName = "TechMahindra";
	
	public static int employeeId;
	public static String email;
	public static String phoneNumber;
	
	
	public static void main(String[] args) {
		getEmployees();
	}
	public static void getEmployees() {
		System.out.println(employeeId +email +phoneNumber +companyName);
	}
	/*public void printEmployees() {
		System.out.println(employeeId +email +phoneNumber +companyName);
	}*/
}
