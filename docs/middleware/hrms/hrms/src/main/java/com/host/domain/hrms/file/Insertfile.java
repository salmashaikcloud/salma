package com.host.domain.hrms.file;


import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Insertfile {
	public static void main(String []args) {
		String Table = "FILESTORAGE" ;
		try {
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","hr","hr");
			FileInputStream file = new FileInputStream("C:\\work\\apps\\docs\\java1\\abstraction\\Department.java");
			String query = "INSERT INTO " + Table + "(DFILEDATA) VALUES(?)" ;
			PreparedStatement statement = con.prepareStatement(query);
			statement.setBinaryStream(1, file);
			int Rs = statement.executeUpdate();
			if(Rs == 0) {
				System.out.println("not sucess");
			}else {
				System.out.println("success");
			}
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
}