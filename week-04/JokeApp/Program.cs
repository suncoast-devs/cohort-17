using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace JokeApp
{

  class Joke
  {
    public int id { get; set; }
    public string setup { get; set; }
    public string punchline { get; set; }
    public string type { get; set; }
  }

  class Program
  {
    static async Task Main(string[] args)
    {
      Console.WriteLine("Welcome to C#");
      var client = new HttpClient();

      var response = await client.GetAsync($"https://official-joke-api.appspot.com/random_joke");

      // Console.WriteLine(await response.Content.ReadAsStringAsync());

      var json = JsonSerializer.Deserialize<Joke>(await response.Content.ReadAsStringAsync());

      Console.WriteLine($"{json.setup}");
      Console.ReadLine();
      Console.WriteLine($"{json.punchline}");


    }
  }
}
