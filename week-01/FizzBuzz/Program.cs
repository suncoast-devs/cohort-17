using System;

namespace FizzBuzz
{
  class Program
  {
    // Count from 1 to 100
    //check each number 
    // if its % 3  print out "Fizz"
    // if its % 5 print out " buzz"
    // % 15 print out "FizzBuzz"

    static void Main(string[] args)
    {
      for (var i = 1; i <= 100; i++)
      {
        if (i % 15 == 0)
        {
          Console.WriteLine("FizzBuzz");
        }
        else if (i % 3 == 0)
        {
          Console.WriteLine("Fizz");
        }
        else if (i % 5 == 0)
        {
          Console.WriteLine("Buzz");
        }

        else
        {
          Console.WriteLine(i);
        }
      }
    }
  }
}
