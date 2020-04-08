namespace MapExample.Models
{
  public class PointOfInterest
  {
    public int Id { get; set; }
    public string Description { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string FullAddress { get; set; }
  }
}