using System;

namespace HikeFinder.Models
{
  public class Review
  {
    public int Id { get; set; }
    public string Comment { get; set; }
    public int Rating { get; set; }
    public DateTime When { get; set; } = DateTime.Now;

    // navigation properties
    public int TrailId { get; set; }
    public Trail Trail { get; set; }
  }
}