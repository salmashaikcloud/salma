package oops.inheritance;

public class Users {
	public String firstName = "Salma";
	protected String lastName ="Kumar";
	String email = "salma.shaik01@outlook.com";
	private String phoneNumber = "9876543210";
	
	public void getUser() {
		System.out.println(firstName);
		System.out.println(lastName);
		System.out.println(email);
		System.out.println(phoneNumber);
	}
}
