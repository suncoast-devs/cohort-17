using System;

namespace InheritanceDemo
{
  public class Cat : Pet
  {
    public override void Speak()
    {
      Console.WriteLine($"Meow!!");

    }
  }
}