
public class Student extends Person implements PersonInterface{
	
	int stud_id;
	String name;
	int age;
	char gender;
	double subjectScore1;
	double subjectScore2;
	double subjectScore3;
	String major;
	
	
	Student(int sid, String name, int age, char gender, double subjectScore1, double subjectScore2, double subjectScore3, String major, double d)
	{
		super(name, age, gender);
		this.stud_id=id;
		this.subjectScore1=subjectScore1;
		this.subjectScore2=subjectScore2;
		this.subjectScore3=subjectScore3;
		this.major = major;
	}
	

	public void display()
	{
		System.out.println(ORGANIZATION);
		System.out.println("-----------");
		System.out.println("ID: "+this.id);
		super.display();
		System.out.println("Name: "+this.name);
		System.out.println("Age: "+this.age);
		System.out.println("Gender: "+this.gender);
		System.out.println("Subject1: "+this.subjectScore1);
		System.out.println("Subject2: "+this.subjectScore2);
		System.out.println("Subject3: "+this.subjectScore3);
		System.out.println("Student's Major is: "+this.major);
		System.out.println();
		System.out.println();
	}
	
	public double calculate(int totalSubjectScores) {
		double average = ((this.subjectScore1+this.subjectScore2+this.subjectScore3)/totalSubjectScores);
		return average;
	}
	
	public void ageVerification() {
		if (this.page == 18 || this.page >= 18) {
			System.out.println("Student is an Adult");
		} else
			System.out.println("Student is a minor");
	}
}