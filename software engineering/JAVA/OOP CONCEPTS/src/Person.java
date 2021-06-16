
public class Person {
	int id;
	String pname;
	int page;
	char pgender;
	static int count=0;
	
	
	public Person()
	{
		count++;
	}
	
	public Person(String name, int age, char gender)
	{
		pname=name;
		page=age;
		pgender=gender;
		count++;
	}
	
	public void display()
	{
		System.out.println("Name: "+this.pname);
		System.out.println("Age: "+this.page);
		System.out.println("Gender: "+this.pgender);
		
	}
	
	public static void totalPerson2()
	{
		System.out.println("Total person objects are: "+count);
	}
}
