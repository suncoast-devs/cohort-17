
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
      // var thingToRemove = Sightings.Where(sighting => sighting.WhatISaw == what);
      // foreach (var thing in thingToRemove)
      // {
      //   Sightings.Remove(thing);
      // }
      Sightings.RemoveAll(sighting => sighting.WhatISaw == what);
    }

  }
}