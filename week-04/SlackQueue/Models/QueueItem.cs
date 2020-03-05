using System;

namespace SlackQueue.Models
{
  public class QueueItem
  {
    public int Id { get; set; }
    public string Who { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
  }


}