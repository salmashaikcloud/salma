package lang.string;

public class Employee2 {
	public static void main(String[] args) {
		String firstName = new String("Salma");
		String lastName = new String("Salma");

		System.out.println(firstName == lastName);
		System.out.println(firstName.equals(lastName));//true
	}

}
