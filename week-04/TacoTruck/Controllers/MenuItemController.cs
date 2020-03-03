using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TacoTruck.Models;

namespace TacoTruck.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MenuItemController : ControllerBase
  {

    public DatabaseContext db { get; set; } = new DatabaseContext();
    [HttpGet]
    public List<MenuItem> GetAllMenuItems()
    {
      // query for all the menu items
      // sort them by name
      var menuItems = db.MenuItems.OrderBy(m => m.Name);
      // the sorted items  
      return menuItems.ToList();
    }

    [HttpGet("{id}")]
    public MenuItem GetOneMenuItem(int id)
    {
      var item = db.MenuItems.FirstOrDefault(i => i.Id == id);
      return item;

    }

    [HttpPost]
    public MenuItem CreateMenuItem(MenuItem item)
    {
      db.MenuItems.Add(item);
      db.SaveChanges();
      return item;
    }

    [HttpPost("multiple")]
    public List<MenuItem> AddManyItems(List<MenuItem> items)
    {
      db.MenuItems.AddRange(items);
      db.SaveChanges();
      return items;
    }

  }
}