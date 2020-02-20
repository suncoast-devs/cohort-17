using System;
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

    public void GetThreeHeaviest()
    {
      var heaviest = Dinosaurs.OrderByDescending(dino => dino.Weight).Take(3).ToList();
      DisplayDinosaurs(heaviest);
    }


    public void DisplayDinosaurs(List<Dinosaur> dinos)
    {
      foreach (var dino in dinos)
      {
        Console.WriteLine($"{dino.Name}");
      }
    }


    public void DisplayDietSummary()
    {
      var vegDino = Dinosaurs.Count(dinosaur => dinosaur.DietType.Contains("Herbivore"));
      Console.WriteLine($"There are {vegDino} herbivore");

      var carniDino = Dinosaurs.Count(dinosaur => dinosaur.DietType.Contains("Carnivore"));
      Console.WriteLine($"There are {carniDino} carnivore");
    }


  }
}