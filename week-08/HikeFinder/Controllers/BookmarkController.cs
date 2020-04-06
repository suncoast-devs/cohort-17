using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HikeFinder.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BookmarkController : ControllerBase
  {

    [HttpPost("{trailId}")]
    public async Task<ActionResult> BookmarkTrailForUser(int trailId)
    {
      return Ok();
    }

  }
}