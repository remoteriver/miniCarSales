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
        private DbSet<Car> DataSetCars { get; set; }
        private DbSet<Make> DataSetCarMakes { get; set; }

        public CarsContext(DbContextOptions<CarsContext> options) : base(options)
        {
        }
        
        public void InitData()
        {
            if (!DataSetCars.Any())
                DataSetCars.Add(
                new Car
                {
                    VehicleType = "SUV",
                    Make = "Mercedes-Benz",
                    Model = "GLA200",
                    Engine = "4cyl 2.0L Petrol Turbo",
                    Doors = 4,
                    Wheels = 4,
                    BodyType = "Car"
                });

            if (!DataSetCarMakes.Any())
            {
                DataSetCarMakes.Add(new Make { Name = "Mercedes-Benz" });
                DataSetCarMakes.Add(new Make { Name = "Ford" });
                DataSetCarMakes.Add(new Make { Name = "Volkswagen" });
                DataSetCarMakes.Add(new Make { Name = "Toyota" });
                DataSetCarMakes.Add(new Make { Name = "Hyundai" });
                DataSetCarMakes.Add(new Make { Name = "Chevrolet" });
                DataSetCarMakes.Add(new Make { Name = "Honda" });
                DataSetCarMakes.Add(new Make { Name = "Kia" });
                DataSetCarMakes.Add(new Make { Name = "Mazda" });
                DataSetCarMakes.Add(new Make { Name = "BMW" });
                DataSetCarMakes.Add(new Make { Name = "Audi" });
            }

            SaveChanges();
        }
        
        public DbSet<Car> GetDataSet()
        {
            return DataSetCars;
        }

        public DbSet<Make> GetMakeDataSet()
        {
            return DataSetCarMakes;
        }

        public void AddNewVehicle(Car newcar)
        {
            DataSetCars.Add(newcar);
            SaveChanges();
        }

    }
}

