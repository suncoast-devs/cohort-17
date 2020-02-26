using System;
using System.Linq;

namespace IntroToEf
{
  class Program
  {
    static void Main(string[] args)
    {
      var db = new KittyCatContext();

      Console.WriteLine("Welcome to C#");

      // CREATE
      Console.WriteLine($"Cat's name?");
      var input = Console.ReadLine();

      var kitty = new Cat
      {
        Name = input
      };
      db.Cats.Add(kitty);
      db.SaveChanges();


      // UPDATE
      var catToUpdate = db.Cats.First(c => c.Name == "Riddler");
      catToUpdate.IsFriendly = true;
      catToUpdate.FurColor = "white and grey";
      catToUpdate.Birthday = new DateTime(2015, 3, 24);
      db.SaveChanges();

      // DELETE


      // var catToDelete = db.Cats.First(c => c.Name == "Riddler");
      // db.Cats.Remove(catToDelete);
      // db.SaveChanges();


      //READ
      var friendlyCats = db.Cats.Where(c => c.IsFriendly);

      foreach (var cat in friendlyCats)
      {
        Console.WriteLine($"{cat.Name} is friendly!");
      }

    }
  }
}
