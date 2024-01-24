//package com.host.domain.hrms.file;
//
//import java.io.File;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//
//import com.host.domain.hrms.jdbc.connection.HrConnection;
//import com.host.domain.hrms.util.QueryUtils;
//
//public class FileStorage {
//	
//	public void upload(int dId, String dRenditionId, String dIsDeleted, File file) {
//		try {
//			long millis = System.currentTimeMillis();
//			Data dLastModified = new Date(millis);
//			InputStream is = new FileInputStream();
//			
//			String sql = QueryUtils.UPLOAD;
//			Connection con = HrConnection.getConnection();
//			PreparedStatement pstmt = con.prepareCall(sql);
//			
//			pstmt.setInt(1, dId);
//			pstmt.setString(2, dRenditionId);
//			pstmt.setDate(3, dLastmodified);
//			pstmt.setDouble(4, getFileSize(file));
//			}
//	}
//
//}
