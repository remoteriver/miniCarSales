using miniCarSales.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Services
{
    public class CarsService
    {
        private CarsContext _context;
        public CarsService(CarsContext context)
        {
            _context = context;
        }
        
        public void Seed()
        {
            if (!_context.Cars.Any())
            {
                _context.Add(
                new Car
                {
                    VehicleType = "Car",
                    Make = "Mercedes-Benz",
                    Model = "GLA200",
                    Engine = "4cyl 2.0L Petrol Turbo",
                    Doors = 4,
                    Wheels = 4,
                    BodyType = "SUV"
                });

                _context.Add(
                new Car
                {
                    VehicleType = "Car",
                    Make = "Ford",
                    Model = "Ranger",
                    Engine = "4cyl 2.0L Petrol Turbo",
                    Doors = 4,
                    Wheels = 4,
                    BodyType = "SUV"
                });
            }
                

            if (!_context.CarMakes.Any())
            {
                _context.Add(new Make { Name = "Mercedes-Benz" });
                _context.Add(new Make { Name = "Ford" });
                _context.Add(new Make { Name = "Volkswagen" });
                _context.Add(new Make { Name = "Toyota" });
                _context.Add(new Make { Name = "Hyundai" });
                _context.Add(new Make { Name = "Chevrolet" });
                _context.Add(new Make { Name = "Honda" });
                _context.Add(new Make { Name = "Kia" });
                _context.Add(new Make { Name = "Mazda" });
                _context.Add(new Make { Name = "BMW" });
                _context.Add(new Make { Name = "Audi" });
            }
            _context.SaveChanges();
        }


        public void AddVehicle(Car newCar)
        {
            _context.Cars.Add(newCar);
            _context.SaveChanges();
        }

        public List<Car> GetAllVehicles()
        {
            var query = from v in _context.Cars
                        orderby v.Id
                        select v;

            return query.ToList();
        }

        public List<Make> GetAllVehicleMakes()
        {
            var query = from v in _context.CarMakes
                        orderby v.Id
                        select v;

            return query.ToList();
        }
    }
}
