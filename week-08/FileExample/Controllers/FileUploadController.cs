using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using FileExample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FileExample.Controllers
{
  [Route("file")]
  [ApiController]
  public class FileUploadController : ControllerBase
  {

    private readonly DatabaseContext _context;


    public FileUploadController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpPost("upload")]
    public async Task<ActionResult> UploadFile(IFormFile file)
    {
      // validate its an image 
      var extension = file.FileName.Split('.').Last();
      var contentType = file.ContentType;
      if (extension == "jpeg" || extension == "jpg" || extension == "png")
      {
        // the file is valid
        // upload the file to cloudiary 
        var cloudiary = new Cloudinary(new Account("dbtqsg7vf", "299973314231723", "ZqeVmP6d_NmRh_7O6xLfOyrdjG4"));
        var uploadParams = new ImageUploadParams()
        {
          File = new FileDescription(file.FileName, file.OpenReadStream())
        };
        var result = cloudiary.Upload(uploadParams);
        var uploadedImage = new UploadedImage
        {
          ImageUrl = result.SecureUri.AbsoluteUri
        };
        _context.UploadImages.Add(uploadedImage);
        await _context.SaveChangesAsync();
        return Ok(uploadedImage);
      }
      else
      {
        // the file is not valid 
        return BadRequest("Not Valid Image");
      }
    }
  }
}