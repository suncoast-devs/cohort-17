using System.Text.Json.Serialization;

namespace HikeFinder.Models
{
  public class Bookmark
  {
    public int Id { get; set; }

    public int TrailId { get; set; }
    public Trail Trail { get; set; }
    public int UserId { get; set; }
    [JsonIgnore]
    public User User { get; set; }
  }
}