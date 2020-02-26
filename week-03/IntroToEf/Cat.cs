using System;

namespace IntroToEf
{
  public class Cat
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime Birthday { get; set; }
    public string FurColor { get; set; }
    public bool IsFriendly { get; set; } = false;
  }
}