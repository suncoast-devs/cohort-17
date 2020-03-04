using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TacoTruck.Models;

namespace TacoTruck.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TruckController : ControllerBase
  {

    public DatabaseContext db { get; set; } = new DatabaseContext();

    [HttpGet]
    public async Task<ActionResult<List<Truck>>> GetAllTrucks()
    {
      return await db.Trucks.OrderBy(o => o.Name).ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Truck>> CreateTruck(Truck truck)
    {
      await db.Trucks.AddAsync(truck);
      await db.SaveChangesAsync();
      return truck;
    }
  }
}