using System;

namespace TipCalculator
{
  class Program
  {
    static void Main(string[] args)
    {
      // Welcome the User
      Console.WriteLine("Welcome User!!!!");
      // Ask how much the bill
      Console.WriteLine("How much was your meal");
      var total = Console.ReadLine();
      // check if the input was correct (a number)
      double billTotal;
      var isValid = Double.TryParse(total, out billTotal);
      if (!isValid)
      {
        Console.WriteLine("That is not number, try again");
        total = Console.ReadLine();
        billTotal = Double.Parse(total);
      }

      // how was the service? 
      Console.WriteLine("How was your service?");
      Console.WriteLine("valid choices are : okay, good and great");
      var service = Console.ReadLine().ToLower();
      //  okay, good, great, default
      // service = service.ToLower();
      // calculate tip based on the level of service
      var tipPercentage = 0.15;
      if (service == "okay")
      {
        tipPercentage = 0.18;
      }
      else if (service == "good")
      {
        tipPercentage = 0.20;
      }
      else if (service == "great")
      {
        tipPercentage = 0.25;
      }

      var tip = billTotal * tipPercentage;
      // var jordan = Convert.ToDouble(total) * 0.18;
      var grandTotal = tip + billTotal;
      // add the tip to the total
      // display the result
      // tipPerecent * 100 will give the correct value
      var tipToDisplay = tipPercentage * 100;
      Console.WriteLine("Your total was " + total);
      Console.WriteLine("The " + tipToDisplay + "% tip is " + tip);
      Console.WriteLine("Grandtotal is " + grandTotal);

    }
  }
}
