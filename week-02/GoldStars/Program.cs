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


      var students = new List<Student>();
      // read file that contains students


      // read without Package
      // var reader = new StreamReader("students.csv");
      // var data = reader.ReadToEnd();

      // // split
      // // convert
      // var studentNames = data.Split("\n");
      // students = studentNames
      //     .Where(name => name != "")
      //     .Select(name => new Student { Name = name })
      //     .ToList();

      // read with Package 

      var reader = new StreamReader("students.csv");
      var csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);
      students = csvReader.GetRecords<Student>().ToList();


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
          SaveStudents(students);
        }
        else if (input == "give")
        {
          Console.WriteLine("who?");
          var name = Console.ReadLine();
          var student = students.First(student => student.Name == name);
          student.Stars++;
          SaveStudents(students);
        }
        else if (input == "clear")
        {
          SaveStudents(new List<Student>());
        }
        else if (input == "quit")
        {
          isRunning = false;
          // save students to a file

          // without Package
          // var writer = new StreamWriter("students.csv");
          // foreach (var student in students)
          // {
          //   writer.WriteLine($"{student.Name}, {student.Stars}");
          // }
          // writer.Flush();

          // with Package
          SaveStudents(students);


        }
      }

    }
  }
}
