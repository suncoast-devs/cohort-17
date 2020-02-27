using System;
using ClassroomApp.Models;
using System.Linq;

namespace ClassroomApp
{
  class Program
  {


    static void PopulateDatabase()
    {
      // check if there are any cohorts,
      var db = new DatabaseContext();
      if (!db.Cohorts.Any())
      {
        // if none then add a few
        db.Cohorts.Add(new Cohort
        {
          Number = "17",
          StartDate = new DateTime(2020, 2, 10, 9, 0, 0),
          EndDate = new DateTime(2020, 5, 1, 16, 0, 0),
        });
        db.Cohorts.Add(new Cohort
        {
          Number = "16",
          StartDate = new DateTime(2019, 10, 29, 9, 0, 0),
          EndDate = new DateTime(2020, 1, 31, 16, 0, 0),
        });
        db.SaveChanges();
      }
      // if there are, then do nothing
    }

    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to C#");
      PopulateDatabase();
      Console.WriteLine($"Pick a cohort to add a student to");
      //display the cohorts
      var db = new DatabaseContext();
      var cohorts = db.Cohorts.OrderBy(c => c.StartDate);
      foreach (var chrt in cohorts)
      {
        Console.WriteLine($"{chrt.Id}:{chrt.Number}");
      }
      var cohortId = int.Parse(Console.ReadLine());
      Console.WriteLine($"You are adding to " + cohortId);
      // better way
      // find the cohort
      var cohort = db.Cohorts.First(c => c.Id == cohortId);
      Console.WriteLine($"Who are you adding?");
      var studentName = Console.ReadLine();
      var student = new Student
      {
        FullName = studentName
      };
      cohort.Students.Add(student);
      db.SaveChanges();


      // Old way
      // Console.WriteLine($"Who are you adding?");
      // var studentName = Console.ReadLine();
      // var student = new Student
      // {
      //   FullName = studentName,
      //   CohortId = cohortId
      // };
      // db.Students.Add(student);
      // db.SaveChanges();

      // var studentsInCohort = db.Students.Where(st => st.CohortId == cohortId);





    }
  }
}
