using System.Collections.Generic;
using System.Linq;

namespace DinoReview
{
  public class ParkService
  {
    public List<Dinosaur> Dinosaurs { get; set; } = new List<Dinosaur>();

    public void Transfer(string who, string pen)
    {
      // find the item first
      var dino = Dinosaurs.First(dinosaur => dinosaur.Name == who);
      // re-assign the fields
      dino.EnclosureNumber = int.Parse(pen);

    }


  }
}