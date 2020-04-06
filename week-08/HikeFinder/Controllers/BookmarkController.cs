using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HikeFinder.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HikeFinder.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class BookmarkController : ControllerBase
  {

    private readonly DatabaseContext _context;


    public BookmarkController(DatabaseContext context)
    {
      _context = context;
    }


    [HttpPost("{trailId}")]
    public async Task<ActionResult> BookmarkTrailForUser(int trailId)
    {
      // get the user Id form the User Object
      var userId = int.Parse(User.Claims.FirstOrDefault(f => f.Type == "id").Value);

      // create a new bookmark 
      var bookmark = new Bookmark
      {
        TrailId = trailId,
        UserId = userId
      };
      //save it our database
      _context.Bookmarks.Add(bookmark);
      await _context.SaveChangesAsync();
      // return something?
      return Ok(bookmark);
    }

  }
}