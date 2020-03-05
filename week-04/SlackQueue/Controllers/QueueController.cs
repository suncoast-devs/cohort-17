using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SlackQueue.Models;

namespace SlackQueue.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class QueueController : ControllerBase
  {
    public DatabaseContext db { get; set; } = new DatabaseContext();

    [HttpGet]
    public async Task<ActionResult<List<QueueItem>>> GetAllQueueItems()
    {
      var items = await db.QueueItems.OrderBy(o => o.CreatedAt).ToListAsync();
      return Ok(items);
    }

    [HttpPost]
    public async Task<ActionResult<QueueItem>> AddItemToQueue(QueueItem item)
    {
      await db.QueueItems.AddAsync(item);
      await db.SaveChangesAsync();
      return Ok(item);
    }

    [HttpGet("next")]
    public async Task<ActionResult<QueueItem>> GetNext()
    {
      var next = await db.QueueItems.FirstOrDefaultAsync();
      if (next == null)
      {
        return Ok(new { message = "Queue is empty! Good job!" });
      }
      else
      {
        // remove the next person
        db.Remove(next);
        // return the next person
        await db.SaveChangesAsync();
        return Ok(next);
      }
    }

  }
}