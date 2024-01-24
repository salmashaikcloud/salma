package staticcontrolflow;

public class Sample {
	// static variables
	static int x = 1;
	static int y;
	static int z;
	
	//non-static variables
	int a = 6;
	int b;
	int c;
	
	// constructor
	Sample() {
		System.out.println("Constructor start");
		b = 7;
		System.out.println("Constructor end");
	}
	
	// static block 1
	static {
		System.out.println("static block 1 start");
		z = x + y;
		System.out.println("z = " + z);
		System.out.println("static block 1 end");
	}
	// non static block 1
	{
		System.out.println("non-static block 1 start");
		c = a + b;
		System.out.println("c =" + c);
		System.out.println("non-static block 1 end");
	}
	
	// static main method
	public static void main(String[] args) {
		System.out.println("Main method start");
		print();
		Sample sample = new Sample();
		sample.add();
		System.out.println("Main method end");
	}
	
	// static block 2
	static {
		System.out.println("static block 2 start");
		y = 2;
		z = x + y;
		System.out.println("z = " + z);
		System.out.println("static block 2 end");
	}
	// non-static block 2
	{
		System.out.println("non-static block 2 start");
		c = a + b;
		System.out.println("c = " + c);
		System.out.println("non-static block 2 end");
	}
	
	void add() {
		System.out.println("non-static method start");
		System.out.println("c = " + c);
		System.out.println("non-static method end");
	}
	
	static void print() {
		System.out.println("static method start");
		System.out.println("z = " + z);
		System.out.println("static method end");
	}
}

//identification of static variables
//assign values
//execution of static members