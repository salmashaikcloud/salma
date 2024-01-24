
package com.host.domain.hrms.jdbc;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;

import com.host.domain.hrms.jdbc.connection.HrConnection;
import com.host.domain.hrms.util.QueryUtils;



public class Employees2 {
//	String url = "jdbc:oracle:thin:@localhost:1521:xe";
//	String username = "hr";
//	String password = "hr";
//	String[] oracledata = {"url" , "username", "password"};

	public static void main(String[] args) {
		try {
			Connection con = HrConnection.getConnection();
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(QueryUtils.SELECT_FROM_EMPLOYEES);
			HashMap hs = new HashMap();
			
			while (rs.next()) {
				int employeeId = rs.getInt(1);
				String firstName = rs.getString(2);
				String lastName = rs.getString(3);
				System.out.println(employeeId + " " + firstName + " " + lastName);

			}
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
		

	}

}