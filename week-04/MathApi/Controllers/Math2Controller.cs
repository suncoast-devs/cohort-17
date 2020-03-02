using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MathApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class Math2Controller : ControllerBase
  {

    [HttpGet]
    public string Hello()
    {
      return "hello";
    }

  }
}