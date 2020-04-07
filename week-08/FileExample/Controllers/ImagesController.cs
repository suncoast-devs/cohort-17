using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FileExample.Models;

namespace FileExample.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ImagesController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public ImagesController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Images
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UploadedImage>>> GetUploadImages()
    {


      return await _context.UploadImages.OrderByDescending(image => image.DateUploaded).ToListAsync();
    }

    // GET: api/Images/5
    [HttpGet("{id}")]
    public async Task<ActionResult<UploadedImage>> GetUploadedImage(int id)
    {
      var uploadedImage = await _context.UploadImages.FindAsync(id);

      if (uploadedImage == null)
      {
        return NotFound();
      }

      return uploadedImage;
    }

    // PUT: api/Images/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUploadedImage(int id, UploadedImage uploadedImage)
    {
      if (id != uploadedImage.Id)
      {
        return BadRequest();
      }

      _context.Entry(uploadedImage).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UploadedImageExists(id))
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

    // POST: api/Images
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<UploadedImage>> PostUploadedImage(UploadedImage uploadedImage)
    {
      _context.UploadImages.Add(uploadedImage);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetUploadedImage", new { id = uploadedImage.Id }, uploadedImage);
    }

    // DELETE: api/Images/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<UploadedImage>> DeleteUploadedImage(int id)
    {
      var uploadedImage = await _context.UploadImages.FindAsync(id);
      if (uploadedImage == null)
      {
        return NotFound();
      }

      _context.UploadImages.Remove(uploadedImage);
      await _context.SaveChangesAsync();

      return uploadedImage;
    }

    private bool UploadedImageExists(int id)
    {
      return _context.UploadImages.Any(e => e.Id == id);
    }
  }
}
