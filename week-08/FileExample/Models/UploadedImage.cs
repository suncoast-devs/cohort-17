using System;

namespace FileExample.Models
{
  public class UploadedImage
  {
    public int Id { get; set; }
    public DateTime DateUploaded { get; set; } = DateTime.Now;
    public string ImageUrl { get; set; }
    //TODO: add a title as well
  }
}