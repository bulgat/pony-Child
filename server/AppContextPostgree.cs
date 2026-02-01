using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.Metrics;

namespace DuneWarLastFantasy
{
    public class AppContextPostgree : DbContext
    {
        public AppContextPostgree(DbContextOptions<AppContextPostgree> options) : base(options)
        {

        }
        public DbSet<Score> Score { get; set; }
        public DbSet<Arsenal> Arsenal { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

 
        }

            //dotnet ef migrations add kol
            //dotnet ef update-datasbase
     }
}
