using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace GoldStars
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to GoldStars!");

      // Create and write to a file : 

      // var writer = new StreamWriter("test.txt");
      // writer.WriteLine("Hello Class!!!!");
      // writer.Flush();


      var students = new List<Student>();
      // read file that contains students

      var reader = new StreamReader("students.csv");
      var data = reader.ReadToEnd();

      // split
      // convert
      var studentNames = data.Split("\n");
      students = studentNames
          .Where(name => name != "")
          .Select(name => new Student { Name = name })
          .ToList();

      var isRunning = true;
      while (isRunning)
      {

        foreach (var student in students)
        {
          Console.WriteLine($"{student.Name} has {student.Stars}");
        }

        Console.WriteLine("(Add) or (give)?");
        var input = Console.ReadLine().ToLower();
        if (input == "add")
        {
          Console.WriteLine("who?");
          var name = Console.ReadLine();
          var student = new Student
          {
            Name = name
          };
          students.Add(student);
        }
        else if (input == "give")
        {
          Console.WriteLine("who?");
          var name = Console.ReadLine();
          var student = students.First(student => student.Name == name);
          student.Stars++;
        }
        else if (input == "quit")
        {
          isRunning = false;
          // save students to a file
          var writer = new StreamWriter("students.csv");
          foreach (var student in students)
          {
            writer.WriteLine($"{student.Name}, {student.Stars}");
          }
          writer.Flush();

        }
      }

    }
  }
}
