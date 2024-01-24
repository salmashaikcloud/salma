package lang.string;

public class Employee3 {

	public static void main(String[] args) {
		String firstName = new String("Salma");
        System.out.println(firstName.hashCode());
        System.out.println(firstName);
        firstName.concat("Shaik");
        System.out.println(firstName.hashCode());
        System.out.println(firstName);
	}

}
