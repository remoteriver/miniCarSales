using Microsoft.EntityFrameworkCore;
using miniCarSales.Interface;
using miniCarSales.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Services
{
    public class CarsContext :  DbContext
    {
        private DbSet<Car> DataSet { get; set; }

        public CarsContext(DbContextOptions<CarsContext> options) : base(options)
        {
        }
        
        public void InitData()
        {
            if (!DataSet.Any())
                DataSet.Add(
                new Car
                {
                    Id = 1,
                    VehicleType = "SUV",
                    Make = "mercedes-benz",
                    Model = "GLA200"
                });

            SaveChanges();
        }
        
        public DbSet<Car> GetDataSet()
        {
            return DataSet;
        }
        
    }
}

