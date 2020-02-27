using System;
using MenuTest1.Models;
using System.Linq;
using ConsoleTools;
using ConsoleTables;
using System.Collections.Generic;

namespace MenuTest1
{
  class Program
  {

    private static void SomeAction(string text)
    {
      Console.WriteLine(text);
      Console.WriteLine("Press any key to continue...");
      Console.ReadKey();
    }

    private static void SomeOtherActionLikeADatabaseCall()
    {
      Console.WriteLine("Calling to my database.....");
      // is where I want ot dsplay a table
      var table = new ConsoleTable("one", "two", "three");
      table.AddRow(1, 2, 3)
           .AddRow("this line should be longer", "yes it is", "oh");
      table.Write();

      var db = new DatabaseContext();


      for (int i = 0; i < 15; i++)
      {
        db.Somethings.Add(new Something
        {
          Name = new Random().Next(i, 100)
        });
      }
      db.SaveChanges();
      var somethings = db.Somethings.OrderBy(s => s.Name);

      ConsoleTable
          .From<Something>(somethings)
            .Configure(o => o.NumberAlignment = Alignment.Right)
            .Write(Format.Alternative);

      Console.ReadKey();
    }


    static void Main(string[] args)
    {
      new ConsoleMenu()
       .Add("Banana", () => SomeAction("Apple"))
       .Add("Second", () => SomeAction("Anything I want"))
       .Add("Custom Thing", () => SomeOtherActionLikeADatabaseCall())
       .Add("Add Thing", () => AddThingToDatabase())
       .Add("View Somethings", () => ViewAllSomethings())
       .Add("Close", ConsoleMenu.Close)
       .Configure(config => { config.Selector = "==}"; })
       .Show();

    }

    private static void ViewAllSomethings()
    {
      var db = new DatabaseContext();
      var somethings = db.Somethings.OrderBy(s => s.Name);

      ConsoleTable
          .From<Something>(somethings)
            .Configure(o => o.NumberAlignment = Alignment.Right)
            .Write(Format.Alternative);
      Console.ReadLine();

    }

    private static void AddThingToDatabase()
    {
      Console.WriteLine($"What do you want to add?");
      var input = Console.ReadLine();
      Console.WriteLine($"You want to add" + input);
      Console.ReadLine();


    }
  }
}
