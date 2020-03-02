using Microsoft.AspNetCore.Mvc;

namespace HelloWorldApi.Controllers
{

  [ApiController]
  [Route("/hello")]
  public class HelloController : ControllerBase
  {
    [HttpGet]
    public string GetHelloWorld()
    {
      return "hello, world";
    }
  }
}