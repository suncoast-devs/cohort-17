namespace TacoTruck.Models
{
  public class TruckMenu
  {
    public int Id { get; set; }

    public int MenuItemId { get; set; }
    public MenuItem MenuItem { get; set; }

    public int TruckId { get; set; }
    public Truck Truck { get; set; }
  }
}