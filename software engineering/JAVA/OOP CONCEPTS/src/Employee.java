//import java.util.Scanner;
public class Employee extends Person implements PersonInterface {
	int emp_id;
	double emp_salary;
	
	Employee(int id, String name, int age, char gender, double salary)
	{
		super(name, age, gender);
		this.emp_id=id;
		this.emp_salary=salary;
	}
	
	public void display()
	{	
		//Scanner scan = new Scanner(System.in);
		//int id = scan.nextInt;
		System.out.println(ORGANIZATION);
		System.out.println("-----------");
		System.out.println("ID: "+this.emp_id);
		super.display();
		System.out.println("Base Salary: "+this.emp_salary);
	}
	
	public double calculate(int bonus) {
 		double netsalary = bonus + this.emp_salary;
 		return netsalary;
 	}

 	public void calculate(Employee obj) {
 		System.out.println("Employee Monthly Salary: " + String.format("%.2f", obj.emp_salary / 12));
 	}
	
	public void ageVerification() {
		if (this.page == 18 && this.page > 18) {
			System.out.println("Employee is an Adult");
		} else
			System.out.println("Employee is a minor subject to work hours limitation");
	}
}
