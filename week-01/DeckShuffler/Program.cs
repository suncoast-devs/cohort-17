using System;
using System.Collections.Generic;

namespace DeckShuffler
{
  class Program
  {
    static void Main(string[] args)
    {
      var suits = new List<string>() { "clubs", "spades", "hearts", "diamonds" };
      var ranks = new List<string>() { "ace", "two", "three", "four", "five", "six", "7", "8", "9", "10", "Jack", "Queen", "Ace" };
      var deck = new List<string>();
      for (int i = 0; i < suits.Count; i++)
      {
        for (int j = 0; j < ranks.Count; j++)
        {
          deck.Add($"{ranks[j]} of {suits[i]}");
        }
      }
      for (int i = deck.Count - 1; i >= 1; i--)
      {
        var j = new Random().Next(i);
        var temp = deck[j];
        deck[j] = deck[i];
        deck[i] = temp;
      }

      Console.WriteLine($"The first card is {deck[0]}");

      // remvoe it from the the deck
      deck.RemoveAt(0);

      string input = "";
      while (input == "" && deck.Count > 0)
      {
        Console.WriteLine("hit enter...... you want to see the next card?");
        input = Console.ReadLine().ToLower();
        if (input == "")
        {
          Console.WriteLine($"The first card is {deck[0]}");
          deck.RemoveAt(0);
        }

      }

    }
  }
}
