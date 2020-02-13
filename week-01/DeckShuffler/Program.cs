using System;
using System.Collections.Generic;

namespace DeckShuffler
{
  class Program
  {
    static void Main(string[] args)
    {
      var suits = new List<string>() { "clubs", "spades", "hearts", "diamonds" };
      var ranks = new List<string>() { "ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king" };
      var deck = new List<Card>();
      for (int i = 0; i < suits.Count; i++)
      {
        for (int j = 0; j < ranks.Count; j++)
        {
          var card = new Card();
          card.Rank = ranks[j];
          card.Suit = suits[i];
          if (card.Suit == "diamonds" || card.Suit == "hearts")
          {
            card.ColorOfTheCard = "red";
          }
          else
          {
            card.ColorOfTheCard = "black";
          }
          deck.Add(card);
        }
      }
      for (int i = deck.Count - 1; i >= 1; i--)
      {
        var j = new Random().Next(i);
        var temp = deck[j];
        deck[j] = deck[i];
        deck[i] = temp;
      }


      var playerHand = new List<Card>();

      Console.WriteLine($"The first card is {deck[0]}");
      Console.WriteLine($"The first card is {deck[0].Rank} of {deck[0].Suit}");
      Console.WriteLine($"The first card is {deck[0].DisplayCard()} has a value of {deck[0].GetCardValue()}");

      // remvoe it from the the deck
      playerHand.Add(deck[0]);
      deck.RemoveAt(0);

      string input = "";
      while (input == "" && deck.Count > 0)
      {

        Console.WriteLine($"The player has {playerHand.Count} cards");
        var total = 0;
        for (int i = 0; i < playerHand.Count; i++)
        {
          total += playerHand[i].GetCardValue();
        }
        Console.WriteLine($"the current total is {total}");

        Console.WriteLine("hit enter...... you want to see the next card?");
        input = Console.ReadLine().ToLower();
        if (input == "")
        {
          Console.WriteLine($"The first card is {deck[0].DisplayCard()}  has a value of {deck[0].GetCardValue()}");
          playerHand.Add(deck[0]);
          deck.RemoveAt(0);
        }

      }

    }
  }
}
