using System;
using System.Collections.Generic;

namespace CryptidTracker
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Your Crpytid Tracker");
      Console.WriteLine("Hearing are your current sightings");
      var tracker = new SightingsTracker();

      var isRunning = true;
      while (isRunning)
      {

        foreach (var s in tracker.Sightings)
        {
          Console.WriteLine($"{s.WhatISaw} at {s.WhereISawIt} at {s.WhenISawIt}");
        }

        Console.WriteLine("What would you like to do?");
        Console.WriteLine("(ADD), (REMOVE) or (QUIT)");
        var input = Console.ReadLine().ToLower();
        if (input == "add")
        {
          Console.WriteLine("What do you see? I believe you");
          var what = Console.ReadLine();
          Console.WriteLine("Where do you see it? ");
          var where = Console.ReadLine();

          tracker.AddANewSighting(where, what);
        }
        else if (input == "remove")
        {
          Console.WriteLine("what do you want remove");
          var creature = Console.ReadLine();
          tracker.RemoveSighting(creature);
        }
        else if (input == "quit")
        {
          isRunning = false;
        }
      }
    }
  }
}
