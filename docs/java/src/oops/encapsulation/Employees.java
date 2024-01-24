package oops.encapsulation;

public class Employees {
	private String firstName = "Salma";
    private String lastName = "Shaik";
    private String salary = "20000";
    private String commissionPct ="0.3";
    public String getFirstName() {
    	return firstName;
    }
    public void setFirstName(String firstName) {
    	this.firstName = firstName;
    }
    public String getlastName() {
    	return lastName;
    }
    public void setlastName(String lastName) {
    	this.lastName = lastName;
    }
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getCommissionPct() {
		return commissionPct;
	}
	public void setCommissionPct(String commissionPct) {
		this.commissionPct = commissionPct;
	}
}
