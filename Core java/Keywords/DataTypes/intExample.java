package keywords;
import java.util.Scanner;

public class intExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your age:");
        int age = sc.nextInt();

        System.out.println("Age: " + age);

        sc.close();
    }
}
