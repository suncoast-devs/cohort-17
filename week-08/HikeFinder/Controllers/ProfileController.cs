using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HikeFinder.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HikeFinder.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class ProfileController : ControllerBase
  {
    readonly private DatabaseContext _context;
    public ProfileController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult> GetCurrentUser()
    {
      var userId = int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "id").Value);

      // query the database for the user with that id
      var user = await _context.Users.FirstOrDefaultAsync(f => f.Id == userId);
      //return that user's profile

      return Ok(user);
    }
  }
}