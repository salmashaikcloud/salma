package lang.string;

public class Employee1 {
	
	public static void main(String[] args) {
		String firstName = "Salma";
		String lastName = "salma";
		System.out.println(firstName.hashCode());
		System.out.println(lastName.hashCode());
		System.out.println(firstName == lastName);
		System.out.println(firstName.equals(lastName));
		
	}
}
