using System;

namespace InheritanceDemo
{
  public class Pet
  {
    public string Name { get; set; }
    public string Breed { get; set; }
    public string Species { get; set; }
    public int Age { get; set; }
    public DateTime Birthday { get; set; }
    public double Weight { get; set; }

    public virtual void Speak()
    {
      Console.WriteLine($"Something adorable");

    }

  }
}