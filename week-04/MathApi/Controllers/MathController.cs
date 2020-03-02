using Microsoft.AspNetCore.Mvc;

namespace MathApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MathController : ControllerBase
  {
    [HttpGet("sum")]
    public int SumNumbers(int a, int b)
    {
      return a + b;
    }

    [HttpGet("subtract/{a}/{b}")]
    public int Subtract(int a, int b)
    {
      return a - b;
    }

    [HttpGet("multiply/{a}")]
    public int Multiply(int a, int b)
    {
      return a * b;
    }

  }
}