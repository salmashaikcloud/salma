public class Calculate {

    public static void main (String[] args) {

        System.out.println("main start");

        double res1 = division2(120, 12);

        System.out.println(res1);

        double res2 = division2(120, 0);

        System.out.println(res2);

        double res3 = division2(120, 12);

        System.out.println(res3);

        double res4 = 0;
        try {
            res4 = division3(120, 12);
        }
        catch(ArithmeticException ae) {
            System.out.println("ae ="+ae);
        }
        System.out.println("res4");
        System.out.println("main end");
    }
    public static float division1(int a, int b) {
        System.out.println("division start");
            float c = a/b;
        System.out.println("division end");
        return c;
    }
    public static float division2(int a, int b) {
        System.out.println("division start");
        // try catch
        float c = 0.0f;
        try {
            System.out.println("try start");
            c = a/b;
            System.out.println("try end");
        }
        catch(java.lang.ArithmeticException ae) {
            System.out.println("ae = "+ae);
        }
        System.out.println("division end");
        return c;
    }
    public static float division3(int a, int b) throws ArithmeticException {
        System.out.println("division3 start");
        // try catch
        float c = 0.0f;
        System.out.println("try start");
        c = a/b; //ArthmeticException
        System.out.println("try end");
        System.out.println("division3 end");
        return c;
    }
}

/*public class Calculate {
    public static void main(String[] args){
        double res = division(9,0);
        System.out.println(res);
    }
    public static double division(int a, int b) {
        double c = 0;
        try {
            c = a/b;
        }
        catch(java.lang.ArthmeticException ae) {
            System.out.println("ae = "+ae);
        }
        return c;
    }
}*/