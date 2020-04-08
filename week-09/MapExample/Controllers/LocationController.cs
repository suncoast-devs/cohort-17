using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MapExample.Models;



namespace MapExample.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LocationController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public LocationController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Location
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PointOfInterest>>> GetPointOfInterests()
    {
      return await _context.PointOfInterests.ToListAsync();
    }

    // GET: api/Location/5
    [HttpGet("{id}")]
    public async Task<ActionResult<PointOfInterest>> GetPointOfInterest(int id)
    {
      var pointOfInterest = await _context.PointOfInterests.FindAsync(id);

      if (pointOfInterest == null)
      {
        return NotFound();
      }

      return pointOfInterest;
    }

    // PUT: api/Location/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPointOfInterest(int id, PointOfInterest pointOfInterest)
    {
      if (id != pointOfInterest.Id)
      {
        return BadRequest();
      }

      _context.Entry(pointOfInterest).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PointOfInterestExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Location
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<PointOfInterest>> PostPointOfInterest(PointOfInterest pointOfInterest)
    {


      _context.PointOfInterests.Add(pointOfInterest);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPointOfInterest", new { id = pointOfInterest.Id }, pointOfInterest);
    }

    // DELETE: api/Location/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<PointOfInterest>> DeletePointOfInterest(int id)
    {
      var pointOfInterest = await _context.PointOfInterests.FindAsync(id);
      if (pointOfInterest == null)
      {
        return NotFound();
      }

      _context.PointOfInterests.Remove(pointOfInterest);
      await _context.SaveChangesAsync();

      return pointOfInterest;
    }

    private bool PointOfInterestExists(int id)
    {
      return _context.PointOfInterests.Any(e => e.Id == id);
    }
  }
}
