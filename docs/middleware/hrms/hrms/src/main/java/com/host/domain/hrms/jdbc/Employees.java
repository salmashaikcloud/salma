package com.host.domain.hrms.jdbc;




import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



public class Employees {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","hr","hr");
		Statement st = con.createStatement();
		String query = "select * from employees where employee_id = 210";
		ResultSet rs = st.executeQuery(query);
		while(rs.next()){//next method iterates the next element {
			System.out.println(rs.getInt(1));
		}
	}
}