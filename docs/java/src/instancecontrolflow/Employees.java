package instancecontrolflow;

public class Employees {
		public static String companyName = "TechMahendra";
		
		public String employeeId;
		
		public Employees() {
		}
		
		public Employees(String employeeId) {
		}
		
		public void getEmployees() {
			System.out.println("getEmployees start");
			System.out.println(employeeId);
			System.out.println(companyName);
			System.out.println("getEmployees end");
		}
		
		public static void printEmployees() {
			System.out.println("printEmployees start");
			Employees emp = new Employees();
			System.out.println(emp.employeeId);
			System.out.println(companyName);
			System.out.println("printEmployees ends");
		}
		
		public static void main(String[] args) {
			//Employees employee1 = new Employees();
			Employees employee2 = new Employees("101");
			//employee1.getEmployees();
			employee2.getEmployees();
			printEmployees();
	}
}
