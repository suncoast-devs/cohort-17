using System;

namespace InheritanceDemo
{
  public class Dog : Pet
  {
    public override void Speak()
    {
      Console.WriteLine($"Bark!!");

    }
  }
}