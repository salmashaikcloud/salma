package lang.stringbuffer;

public class Employee2 {

	public static void main(String[] args) {
		StringBuffer firstName = new StringBuffer("Salma");
		StringBuffer lastName = new StringBuffer("Salma");

		System.out.println(firstName == lastName);//false
		System.out.println(firstName.equals(lastName));//false

	}

}
