using System;

namespace PigLatin
{
  class Program
  {

    static string Translate(string sentence)
    {
      return "";
    }


    static void Main(string[] args)
    {
      // Console.WriteLine("Welcome to C#");
      Console.WriteLine(Translate("hello") == "ellohay");
      Console.WriteLine(Translate("hello world") == "ellohay orldway");
      Console.WriteLine(Translate("Hello World") == "Ellohay Orldway");
      Console.WriteLine(Translate("Pizza? Yes Please!!") == "Izzapay? Esyay Easeplay!!");
      Console.WriteLine(Translate("How are you?") == "Owhay areway ouyay?");
    }
  }
}
