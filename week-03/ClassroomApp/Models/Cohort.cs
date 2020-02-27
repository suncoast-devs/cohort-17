using System;

namespace ClassroomApp.Models
{
  public class Cohort
  {
    public int Id { get; set; }
    public string Number { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
  }
}