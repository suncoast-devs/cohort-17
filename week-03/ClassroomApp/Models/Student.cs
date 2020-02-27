namespace ClassroomApp.Models
{
  public class Student
  {
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Github { get; set; }

    // Navigation Properties
    public int CohortId { get; set; }
    public Cohort Cohort { get; set; }
  }
}