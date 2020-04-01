using System;
using System.Collections.Generic;

namespace HikeFinder.Models
{
  public class Trail
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Grade { get; set; }
    public string RouteType { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public List<Review> Reviews { get; set; } = new List<Review>();
  }
}