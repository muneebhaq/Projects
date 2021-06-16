import java.util.Scanner;
public class Starter {
	public static void main(String[] args) {
		Scanner scanEmployee = new Scanner(System.in);
		//Employee emp1= new Employee //(102, "Shany Watson", 35, 'F', 128000.00);
		
		System.out.println("Please enter data for employee");
		
		System.out.println("ID: ");
		int id = scanEmployee.nextInt();
		
		
		System.out.println("Name: ");
		String name = scanEmployee.nextLine();
		scanEmployee.nextLine();
		
		System.out.println("AGE: ");
		int age = scanEmployee.nextInt();
		
		
		System.out.println("GENDER M/F: ");
		char gender = scanEmployee.next().charAt(0);
		
		
		
		System.out.println("BASE SALARY: ");
		double salary = scanEmployee.nextDouble();
		
		
		Employee emp1= new Employee(id, name, age, gender, salary);
		
		emp1.display();
		System.out.println("Net salary including bonus: "+emp1.calculate(1500));
		emp1.calculate(emp1);
		emp1.ageVerification();
		
		System.out.println("----------------");
		
		Scanner scanStudent = new Scanner(System.in);
		
		System.out.println("Please enter data for student");
		
		
		System.out.println("ID: ");
		int sid = scanStudent.nextInt();
		
		
		System.out.println("Name: ");
		String sname = scanStudent.nextLine();
		scanStudent.nextLine();
		
		System.out.println("AGE: ");
		int sage = scanStudent.nextInt();
		
		
		System.out.println("GENDER: ");
		char sgender = scanStudent.next().charAt(0);
		
		System.out.println("Math: ");
		double subjectScore1 = scanStudent.nextDouble();
		
		
		System.out.println("Science: ");
		double subjectScore2 = scanStudent.nextDouble();
		
		
		System.out.println("English: ");
		double subjectScore3 = scanStudent.nextDouble();
		
		System.out.println("Major: ");
		String major = scanStudent.nextLine();
		scanStudent.nextLine();
		
		//need to fix
		Student stud1= new Student(sid, sname, sage, sgender, subjectScore1, subjectScore2, subjectScore3, major, subjectScore3);
		stud1.display();
		
		double avg = stud1.calculate(3);
		System.out.println("Average Student Score: " + String.format("%.2f", avg));
		
		
		stud1.ageVerification();
		
		/*System.out.println("Encapsulation Test");
		 	
		 		String pname1, pname2;
		 		int page1, page2;
		 		char pgender1, pgender2;
		 
		 		Scanner scanEncap = new Scanner(System.in);
		 		
		 		Person1 p1 = new Person1();	
		 		System.out.println("Enter Person1 name");
		 		pname1 = scanEncap.nextLine();
		 		p1.setPname(pname1);
		 		System.out.println("Enter Person1 age");
		 		page1 = scanEncap.nextInt();
		 		p1.setpage(page1);
		 		System.out.println("Enter Gender M/F: ");
		 		pgender1 = scanEncap.next().charAt(0);
		 		p1.setpgender(pgender1);
		 
		 		Person1 p2 = new Person1();
		 		
		 		System.out.println("Enter Person2 name");
		 		scanEncap.nextLine();
		 		pname2 = scanEncap.nextLine();
		 		p2.setPname(pname2);
		 		System.out.println("Enter Person2 age");
		 		page2 = scanEncap.nextInt();
		 		p2.setpage(page2);
		 		System.out.println("Enter Gender M/F: ");
		 		pgender2 = scanEncap.next().charAt(0);
		 		p2.setpgender(pgender2);
		 
		 		System.out.println("Person1 information:");
		 		System.out.println(p1.getpname());
		 		System.out.println(p1.getpage());
		 		System.out.println(p1.getpgender());
		 		System.out.println("------------------");
		 		
		 		System.out.println("Person2 information:");
		 		System.out.println(p2.getpname());
		 		System.out.println(p2.getpage());
		 		System.out.println(p2.getpgender());*/
		 		
		
		scanEmployee.close();
		scanStudent.close();
		//scanEncap.close();
			
		 	}
		}

