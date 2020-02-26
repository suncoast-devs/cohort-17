using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using CsvHelper;

namespace GoldStars
{
  class Program
  {

    static void SaveStudents(List<Student> students)
    {
      var writer = new StreamWriter("students.csv");
      var csvWriter = new CsvWriter(writer, CultureInfo.InvariantCulture);
      csvWriter.WriteRecords(students);
      writer.Flush();
    }


    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to GoldStars!");

      // Create and write to a file : 

      // var writer = new StreamWriter("test.txt");
      // writer.WriteLine("Hello Class!!!!");
      // writer.Flush();

      var db = new GoldStarsContext();

      var isRunning = true;
      while (isRunning)
      {
        var students = db.Students.OrderBy(st => st.Name);
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
          db.Students.Add(student);
          db.SaveChanges();
        }
        else if (input == "give")
        {
          Console.WriteLine("who?");
          var name = Console.ReadLine();
          var student = db.Students.First(student => student.Name == name);
          student.Stars++;
          db.SaveChanges();
        }
        else if (input == "clear")
        {
          var allStudents = db.Students;
          db.Students.RemoveRange(allStudents);
        }
        else if (input == "quit")
        {
          isRunning = false;

        }
      }

    }
  }
}
