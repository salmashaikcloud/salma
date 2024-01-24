import java.util.*;
public class Employees {
    public static void main(String[] args) {
        //ArrayList<String> list = new ArrayList();
            //Note: Employees.java uses unchecked or unsafe operations.
            //Note: Recompile with -Xlint:unchecked for details.
        ArrayList<String> list = new ArrayList<String>();   
        list.add("Salma");
        list.add("Kavya");
        list.add("Neethesh");
        list.add("Neethesh"); //dublicated values are allowed in arraylist
        list.add("Hemanth");
        System.out.println(list);
        /*Iterator itr=list.iterator();  
        while(itr.hasNext()){  
            System.out.println(itr.next()); 
        }*/
        for(int i = 0; i < list.size(); i++){
            //System.out.println(i); //it will return only index number
            System.out.println(list.get(i)); // it will retruns given values
        }
        LinkedList<String> ll = new LinkedList<String>();   
        ll.add("Salma");
        ll.add("Kavya");
        ll.add("Neethesh");
        ll.add("Neethesh"); //dublicated values are allowed in arraylist
        ll.add("Hemanth");
        System.out.println(ll);
        Vector<String> v = new Vector<String>();   
        v.add("Salma");
        v.add("Kavya");
        v.add("Neethesh");
        v.add("Neethesh"); //dublicated values are allowed in arraylist
        v.add("Hemanth");
        System.out.println(v);
        Stack<String> s = new Stack<String>();   
        s.add("Salma");
        s.add("Kavya");
        s.add("Neethesh");
        s.add("Neethesh"); 
        s.add("Hemanth");
        System.out.println(s.peek());
    }
}