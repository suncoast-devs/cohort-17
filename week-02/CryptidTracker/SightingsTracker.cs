
using System;
using System.Collections.Generic;

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
  }
}