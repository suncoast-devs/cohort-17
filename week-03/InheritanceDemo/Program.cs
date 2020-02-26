using System;
using System.Collections.Generic;
using System.Linq;

namespace InheritanceDemo
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to C#");

      var riddler = new Cat();

      riddler.Name = "Riddler";
      riddler.Breed = "House Cat";
      riddler.Speak();
      var amit = new Camel();
      amit.Speak();

      var adley = new Dog();

      var farm = new List<Pet>();

      farm.Add(riddler);
      farm.Add(amit);
      farm.Add(adley);

      foreach (var vanana in farm)
      {
        vanana.Speak();
      }

    }
  }
}
