using System.Linq;
using System.Security.Claims;
using HikeFinder.Interfaces;

namespace HikeFinder.Services
{
  public class UserService : IUserService
  {
    public int GetCurrentUserId(ClaimsPrincipal User)
    {
      var userId = int.Parse(User.Claims.FirstOrDefault(f => f.Type == "id").Value);
      return userId;
    }
  }
}