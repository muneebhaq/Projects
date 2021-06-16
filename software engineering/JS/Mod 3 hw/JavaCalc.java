import java.util.Scanner;
public class JavaCalc {
	
	static int add(int number1, int number2) 
	{
		int result = number1 + number2;
		return result;
	}
	
	static int subtract(int number1, int number2) 
	{
		int result = number1 - number2;
		return result;
	}
	
	static int multiply(int number1, int number2) 
	{
		int result = number1 * number2;
		return result;
	}
	
	static void divide(int number1, int number2) 
	{
		
		System.out.println(number1 + "/" + number2);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		int number1, number2, result, option;
		
		System.out.println("Please enter 2 numbers: ");
		number1 = scan.nextInt();
		number2 = scan.nextInt();
		
		System.out.println("Please choose an aption");
		System.out.println("1. Add");
		System.out.println("2. Subtract");
		System.out.println("3. Multiply");
		System.out.println("4. Divide");
		System.out.println("5. Exit");
		
		option = scan.nextInt();
		
		switch (option) 
		{
		case 1: 
			System.out.println("Addition result is: " + add(number1, number2));
			break;
			
		case 2:
			System.out.println("Subtraction result is: "+ subtract(number1, number2));
			break;
			
		case 3:
			System.out.println("Multiplication result is: "+ multiply(number1, number2));
			break;
			
		case 4:
			 result = number1 / number2;
		     System.out.println(number1 + " / " + number2 + " = " + result);
		     break;
			
		case 5:
			System.out.println("You have Exited the program");
			System.exit(0);
			
		default:
			System.out.println("Invalid Entry, Try Again");
			break;
				
			
			
		}
		
	
		scan.close();
	}

}
