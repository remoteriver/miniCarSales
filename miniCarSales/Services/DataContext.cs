using Microsoft.EntityFrameworkCore;
using miniCarSales.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Services
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Car> DataSetCars { get; set; }

        public void InitData()
        {
            if (!DataSetCars.Any())
                DataSetCars.Add(
                new Car
                {
                    Id = 1,
                    VehicleType = "SUV",
                    Make = "mercedes-benz",
                    Model = "GLA200"
                });

            SaveChanges();
        }
    }
}

