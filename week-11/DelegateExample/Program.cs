using System;
using System.Collections.Generic;

namespace DelegateExample
{
  class Program
  {

    public delegate int PerfromCalculation(int x, int y);

    public static int Sum(int x, int y)
    {
      return x + y;
    }

    public static int Perfrom(int x, int y, Func<int, int, int> doTheThing)
    {
      return doTheThing(x, y);
    }

    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to C#");
      // enter 2 numbers and sign (+, -, *, /)
      var first = int.Parse(Console.ReadLine());
      var second = int.Parse(Console.ReadLine());
      var sign = Console.ReadLine();


      Func<int, int, int> sum = (x, y) => { return x + y; };
      Func<int, int, int> subtract = (x, y) => { return x - y; };
      Func<int, int, int> multiply = (x, y) => { return x * y; };
      Func<int, int, int> division = (x, y) => { return x / y; };


      var operations = new Dictionary<string, Func<int, int, int>>();

      operations.Add("+", sum);
      operations.Add("-", subtract);
      operations.Add("*", multiply);
      operations.Add("/", division);

      Console.WriteLine($"{operations[sign](first, second)}");



      // if (sign == "+")
      // {
      //   // Console.WriteLine($"{Perfrom(first, second, sum)}");

      // }
      // Action doAThing = () =>
      // {
      //   Console.WriteLine($"Hello");
      // };

      // doAThing();
    }
  }
}
