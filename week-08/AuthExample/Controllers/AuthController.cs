using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthExample.Models;
using AuthExample.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuthExample.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {


    private DatabaseContext _context;

    public AuthController(DatabaseContext context)
    {
      _context = context;
    }


    // Params: {fullName: "", email:"", password:""}
    [HttpPost("signup")]
    public async Task<ActionResult> SignUpUser(NewUser newUser)
    {
      // validting the user data
      // is the password length > 7
      if (newUser.Password.Length < 7)
      {
        return BadRequest("Password must be at least 7 characters");
      }
      // does user already exist 
      // query the database for a user with the same email address
      var doesUserExist = await _context.Users.AnyAsync(user => user.Email.ToLower() == newUser.Email.ToLower());
      if (doesUserExist)
      {
        return BadRequest("User already exists with that email");
      }
      // hashing the password
      var user = new User
      {
        Email = newUser.Email,
        FullName = newUser.FullName,
      };
      var hashed = new PasswordHasher<User>().HashPassword(user, newUser.Password);
      user.HashedPassword = hashed;
      // storing the user data
      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      // generating a JWT 
      return Ok(user);
    }

  }
}