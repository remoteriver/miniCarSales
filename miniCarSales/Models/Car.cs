using miniCarSales.Models.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Models
{
    public class Car : IVehicle
    {
        public long Id { get; set; }

        public string VehicleType { set; get; }

        public string Make { set; get; }

        public string Model { set; get; }

        public string Engine { set; get; }

        public int Doors { set; get; }

        public int Wheels { set; get; }

        public string BodyType { set; get; }
    }
}
