using miniCarSales.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales
{
    public class DataSeed
    {
        public static void Run(DataContext db)
        {
            if (!db.DataSetCars.Any())
            {
                db.DataSetCars.Add(
                    new Car
                    {
                        Id = 1,
                        VehicleType = "SUV",
                        Make= "mercedes-benz",
                        Model= "GLA200"
                    });
            }
        }
    }
}
