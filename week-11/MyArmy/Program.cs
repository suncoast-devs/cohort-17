using System;
using System.Collections.Generic;
using System.Linq;


namespace MyArmy
{

  // Build me an army that has Wizard, Archers, Fighters
  class Program
  {
    static void Main(string[] args)
    {
      var army = new List<ISoldier>();

      army.Add(new Wizard { Name = "Gandalf" });
      army.Add(new Archer { Name = "Legolas" });


      foreach (var soldier in army)
      {
        soldier.Attack();
      }

      foreach (var wizards in army.Where(w => w as Wizard != null).Select(s => s as Wizard))
      {
        wizards.LearnSpell();
      }
    }
  }
}
