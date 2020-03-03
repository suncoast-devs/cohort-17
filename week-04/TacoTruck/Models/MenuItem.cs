namespace TacoTruck.Models
{
  public class MenuItem
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsVegan { get; set; }
    public int Calories { get; set; }
    public string Protein { get; set; }
    public string Description { get; set; }
  }
}