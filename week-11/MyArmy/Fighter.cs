using System;

namespace MyArmy
{
  public class Fighter : ISoldier
  {
    public string Name { get; set; }

    public void Attack()
    {
      Console.WriteLine($"Swings sword!");
    }
  }
}