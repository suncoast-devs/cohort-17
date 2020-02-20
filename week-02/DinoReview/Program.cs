using System;

namespace DinoReview
{
  class Program
  {



    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Jurassic Park!");
      var zoo = new ParkService();

      zoo.Dinosaurs.Add(new Dinosaur { Name = "Trex", Weight = 300, EnclosureNumber = 3, DietType = "Carnivore" });
      zoo.Dinosaurs.Add(new Dinosaur { Name = "Brex", Weight = 303, EnclosureNumber = 2, DietType = "Carnivore" });
      zoo.Dinosaurs.Add(new Dinosaur { Name = "Steg", Weight = 400, EnclosureNumber = 4, DietType = "Herbivore" });
      zoo.Dinosaurs.Add(new Dinosaur { Name = "Tri", Weight = 3000, EnclosureNumber = 4, DietType = "Herbivore" });
      zoo.Dinosaurs.Add(new Dinosaur { Name = "Raptor", Weight = 30, EnclosureNumber = 1, DietType = "Carnivore" });


      // Transfer
      Console.WriteLine("Who do you want to transfer?");
      var dino = Console.ReadLine();
      Console.WriteLine("To which pen?");
      var newPen = Console.ReadLine();
      zoo.Transfer(dino, newPen);


      zoo.GetThreeHeaviest();

      zoo.DisplayDietSummary();
    }
  }
}
