package file;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Employee {

	public static void main(String[] args) {
		try {
			//String fileContent = "This is the text that i am going to write in a file";
			//File fileIn = new File("source path");
			//FileInputStream fis = new FileInputStream(fileContent);
			
			//reading the data from the files
			//File fileIn = new File("source path");
			//FileInputStream fis = new FileInputStream(fileIn);
			FileInputStream fis = new FileInputStream("source path");
			
			//File fileOut = new File("destination path");
			//FileOutputStream fos = new FileOutputStream(fileOut);
			FileOutputStream fos = new FileOutputStream("destination path");
			
			byte[] bytes = new byte[1024];
			//reading the data from the blob
			//byte[] bytes = blob.getBytes(pos, len);
			
			while((fis.read(bytes)) != -1) {
				System.out.println(bytes.toString());
				fos.write(bytes);
			}
		}
		catch(FileNotFoundException e) {
			System.out.println(e.getMessage());
		}
		catch(IOException e) {
			System.out.println(e.getMessage());
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
