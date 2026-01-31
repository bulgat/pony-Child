using DuneWarLastFantasy.Models;
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


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

 
        }

            //dotnet ef migrations add kol
            //dotnet ef update-datasbase
     }
}
