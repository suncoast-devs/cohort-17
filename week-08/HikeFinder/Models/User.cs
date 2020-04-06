using System.Text.Json.Serialization;

namespace HikeFinder.Models
{
  public class User
  {
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    [JsonIgnore]
    public string HashedPassword { get; set; }
  }
}