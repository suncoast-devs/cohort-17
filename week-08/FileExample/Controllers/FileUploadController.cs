using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FileExample.Controllers
{
  [Route("file")]
  [ApiController]
  public class FileUploadController : ControllerBase
  {
    [HttpPost("upload")]
    public async Task<ActionResult> UploadFile(IFormFile file)
    {
      // validate its an image 
      var extension = file.FileName.Split('.').Last();
      var contentType = file.ContentType;
      if ((extension == "jpeg" || extension == "jpg") && contentType == "image/jpg")
      {
        // the file is valid
        // upload the file to cloudiary 
        var cloudiary = new Cloudinary(new Account("dbtqsg7vf", "299973314231723", "ZqeVmP6d_NmRh_7O6xLfOyrdjG4"));
        var uploadParams = new ImageUploadParams()
        {
          File = new FileDescription(file.FileName, file.OpenReadStream())
        };
        var result = cloudiary.Upload(uploadParams);
        return Ok(result);
      }
      else
      {
        // the file is not valid 
        return BadRequest("Not Valid Image");
      }
    }
  }
}