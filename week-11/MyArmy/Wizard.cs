using System;

namespace MyArmy
{
  public class Wizard : ISoldier
  {
    public string Name { get; set; }

    public void Attack()
    {
      Console.WriteLine($"Magic Missile!");
    }

    public void LearnSpell()
    {
      Console.WriteLine($"Learn Spell");
    }
  }
}