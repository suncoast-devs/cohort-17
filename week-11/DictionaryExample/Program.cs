using System;
using System.Collections.Generic;

namespace DictionaryExample
{

  class ContactInfo
  {
    public string Phone { get; set; }
    public string Email { get; set; }
  }

  class Program
  {
    // problem: I want to store data, that a unique key, and I want to be able to look up values based on that key
    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to my contact list");
      // var myList = new List<int>();
      // string ex: Paul
      // string ex: 123-123-1234, email
      var contactList = new Dictionary<string, ContactInfo>();
      while (true)
      {

        Console.WriteLine($"Who do you want to?");
        var name = Console.ReadLine();
        var number = Console.ReadLine();
        var email = Console.ReadLine();

        if (contactList.ContainsKey(name))
        {
          Console.WriteLine($"Person is already added, try again");

        }
        else
        {
          contactList.Add(name, new ContactInfo { Phone = number, Email = email });
        }



        foreach (var contact in contactList)
        {
          Console.WriteLine($"{contact.Key} | {contact.Value}");
        }
      }



    }
  }
}
