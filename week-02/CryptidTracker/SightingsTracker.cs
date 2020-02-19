
using System;
using System.Collections.Generic;
using System.Linq;

namespace CryptidTracker
{
  // This is where all my sigthings will be stored and tracked
  // Also the functionality for interacting with sightings will be here as well
  // Why? Encapsulation!
  public class SightingsTracker
  {
    public List<Sighting> Sightings { get; set; } = new List<Sighting>();

    public void AddANewSighting(string where, string what)
    {
      var sighting = new Sighting
      {
        WhatISaw = what,
        WhereISawIt = where,
        WhenISawIt = DateTime.Now
      };

      Sightings.Add(sighting);
    }

    public void RemoveSighting(string what)
    {
      // Sightings.RemoveAll(sighting => sighting.WhatISaw == what);

      var thingToRemove = Sightings.Where(sighting => sighting.WhatISaw == what).ToList();
      if (thingToRemove.Count() > 1)
      {
        Console.WriteLine($"We found multiple {what}, which do you want to remove");
        for (int i = 0; i < thingToRemove.Count; i++)
        {
          var creature = thingToRemove[i];
          Console.WriteLine($"{i + 1}: {creature.WhereISawIt} at ${creature.WhenISawIt}");
        }

        var index = int.Parse(Console.ReadLine());
        Sightings.Remove(thingToRemove[index - 1]);

      }
      else
      {
        // remove the only instance found
        Sightings.Remove(thingToRemove.First());
      }

    }

  }
}