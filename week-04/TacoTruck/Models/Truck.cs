using System;
using System.Collections.Generic;

namespace TacoTruck.Models
{
  public class Truck
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int Mileage { get; set; }
    public string Color { get; set; }
    public bool IsCash { get; set; }
    public DateTime FirstDayOfService { get; set; } = DateTime.Now;
    public DateTime? LastDayOfService { get; set; }

    public List<TruckMenu> TruckMenus { get; set; } = new List<TruckMenu>();


  }
}