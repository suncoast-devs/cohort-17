using System;
using System.Collections.Generic;

namespace PetAdoption
{
  class Program
  {
    static void Main(string[] args)
    {
      var shelter = new List<string>();


      while (true)
      {

        Console.WriteLine("Current Pets");
        Console.WriteLine($"There are {shelter.Count} pets.");
        for (var i = 0; i <= shelter.Count; i++)
        {
          var currentPet = shelter[i];
          Console.WriteLine($"{i} : {currentPet}");
        }

        Console.WriteLine("What pet do you want to add?");
        var pet = Console.ReadLine();

        shelter.Add(pet);
      }


    }
  }
}
