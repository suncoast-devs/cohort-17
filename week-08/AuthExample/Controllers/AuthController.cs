using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthExample.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    [HttpPost("signup")]
    public async Task<ActionResult> SignUpUser()
    {
      // validting the user data
      // hashing the password
      // storing the user data
      // generating a JWT 
      return Ok();
    }

  }
}