import java.util.Scanner;

public class scanner {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String name = sc.nextLine(); // Read a line of input from the user
      
        
        System.out.println("Enter your age: ");
        int age = sc.nextInt(); // Read an integer input from the user
        
        System.out.println("Enter your height: ");
        double height = sc.nextDouble(); // Read a double input from the user
        
        System.out.println("Enter your grade: ");
        char grade = sc.next().charAt(0); // Read a single character input from the user
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Grade: " + grade);
        sc.close();
    }
}
