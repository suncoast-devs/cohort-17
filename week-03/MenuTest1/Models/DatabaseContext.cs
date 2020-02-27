using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MenuTest1.Models
{
  public partial class DatabaseContext : DbContext
  {

    // Add Database tables here
    public DbSet<Something> Somethings { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql("server=localhost;database=MenuTest1");
      }
    }
  }
}
