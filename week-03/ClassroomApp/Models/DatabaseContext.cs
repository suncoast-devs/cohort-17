using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ClassroomApp.Models
{
  public partial class DatabaseContext : DbContext
  {

    // Add Database tables here
    public DbSet<Student> Students { get; set; }
    public DbSet<Cohort> Cohorts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql("server=localhost;database=ClassroomAppDatabase");
      }
    }
  }
}
