using System;
using System.Linq;

namespace PigLatin
{
  class Program
  {

    // PEDAC

    static string Translate(string sentence)
    {

      // get all the word in sentence 
      var words = sentence.Split(' ').Select(word =>
      {
        // figure out what rules we need to follow

        // get the puncuation
        // P, we need start at the end of word, and get any/all puncation (?!.,)
        // E Hello! => !
        // D string
        // A loop through end, and if the char is a punc, then store it, else stop 
        // C
        var pos = word.Length - 1;
        var puncFound = "";
        while (pos > 0)
        {
          if ("?.,!".Contains(word[pos]))
          {
            puncFound += word[pos];
            pos--;
          }
          else
          {
            pos = -1;
          }
        }


        var isUpper = false;
        if (Char.IsUpper(word[0]))
        {
          isUpper = true;
        }

        // "algorithm" => "algorithmway"
        var startsWithVowel = false;
        if ("aeiou".Contains(word[0]))
        {
          startsWithVowel = true;
        }

        // build the return value (rv)
        string rv;
        word = word.TrimEnd(puncFound.ToArray());
        if (startsWithVowel)
        {
          rv = word + "way";
        }
        else
        {
          // find the index of the first vowel
          var index = 1;
          var stillLooking = true;
          while (stillLooking)
          {
            if (!("aeiou".Contains(word[index])))
            {
              index++;
            }
            else
            {
              stillLooking = false;
            }
          }
          rv = word.Substring(index) + word.Substring(0, index) + "ay";
        }


        if (isUpper)
        {
          rv = Char.ToUpper(rv[0]) + rv.Substring(1).ToLower();
        }
        return rv + puncFound;
      });
      // Take one word and translate that 
      var translated = String.Join(" ", words);
      return translated;
    }


    static void Main(string[] args)
    {
      // Console.WriteLine("Welcome to C#");
      Console.WriteLine(Translate("hello") == "ellohay");
      Console.WriteLine(Translate("hello world") == "ellohay orldway");
      Console.WriteLine(Translate("Hello World") == "Ellohay Orldway");
      Console.WriteLine(Translate("How are you?") == "Owhay areway ouyay?");
      Console.WriteLine(Translate("Pizza? Yes Please!!") == "Izzapay? Esyay Easeplay!!");
    }
  }
}
