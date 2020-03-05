using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SlackQueue.Models;

namespace SlackQueue.Controllers
{
  [Route("slack/queue")]
  [ApiController]
  public class SlackCommandController : ControllerBase
  {

    public DatabaseContext db { get; set; } = new DatabaseContext();

    [HttpPost("ping")]
    public async Task<ActionResult> PingAsync()
    {
      return Ok(new { text = "Pinged at" + DateTime.Now });
    }

    [HttpPost("add")]
    public async Task<ActionResult> AddPersonToQueue([FromForm] string user_name)
    {
      var item = new QueueItem
      {
        Who = user_name,
      };
      await db.QueueItems.AddAsync(item);
      await db.SaveChangesAsync();
      // also send a message to mark
      var token = "XXXXXX";
      var url = $"https://slack.com/api/chat.postMessage?token={token}&channel=U7M17M55J&text={user_name} was added the queue&pretty=1";

      var client = new HttpClient();
      await client.PostAsync(url, new StringContent(""));

      return Ok(new { text = $"{user_name} was added at {item.CreatedAt}" });
    }

    [HttpPost("next")]
    public async Task<ActionResult> GetNextPerson([FromForm] string user_id)
    {
      if (user_id == "U7M17M55J")
      {
        var next = await db.QueueItems.FirstOrDefaultAsync();
        if (next == null)
        {
          return Ok(new { text = $"Queue is empty! Good job! : {user_id}" });
        }
        else
        {
          // remove the next person
          db.Remove(next);
          // return the next person
          await db.SaveChangesAsync();
          return Ok(new { text = $"{next.Who} is next! : {user_id}" });
        }
      }
      else
      {
        return Ok(new { text = $"Sorry, you are not allowed to do that." });

      }

    }

    [HttpPost("view")]
    public async Task<ActionResult> ViewAllQueue()
    {
      var names = String.Join(", ", db.QueueItems.Select(s => s.Who));
      return Ok(new { text = $"{names} are in the queue" });
    }

    [HttpPost("clear")]
    public async Task<ActionResult> ClearQueue()
    {
      db.RemoveRange(db.QueueItems);
      await db.SaveChangesAsync();
      return Ok(new { text = $"queue is cleared" });

    }
  }
}