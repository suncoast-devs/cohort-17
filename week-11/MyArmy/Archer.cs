using System;

namespace MyArmy
{
  public class Archer : ISoldier
  {
    public string Name { get; set; }

    public void Attack()
    {
      Console.WriteLine($"Twaaaanng");
    }

  }
}