
public class Person1 {
	static int count=0;
	String pname;
	int page;
	char pgender;
	
	public Person1()
	{
		count++;
	}
	
	public String getpname() {
		return pname;
	}
	
	public void setPname(String pname) {
		this.pname = pname;
	}
	
	public int getpage() {
		return page;
	}
	
	public void setpage(int page) {
		this.page=page;
	}
	
	public char getpgender() {
		return pgender;
	}
	
	public void setpgender(char pgender) {
		this.pgender = pgender;
	}
	
}
