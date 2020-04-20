namespace HikeFinder.Interfaces
{
  public interface IUserService
  {
    int GetCurrentUserId(System.Security.Claims.ClaimsPrincipal User);
  }
}