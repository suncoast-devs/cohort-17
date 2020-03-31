using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HikeFinder.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HikeFinder.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {

    private DatabaseContext _context;


    // Dependency Injection
    public SearchController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet("trails")]
    public async Task<ActionResult> SearchTrails(string searchTerm)
    {

      // find all trails, where the name contains searchTerm
      // BONSU: case insenstive 

      var results = _context.Trails.Where(w =>
        w.Name.ToLower().Contains(searchTerm.ToLower()) ||
        w.Address.ToLower().Contains(searchTerm.ToLower()) ||
        w.City.ToLower().Contains(searchTerm.ToLower())
      );


      return Ok(await results.ToListAsync());
    }

  }
}