using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Models.Interface
{
    interface IVehicle
    {
        long Id { set; get; }

        string VehicleType { set; get; }

        string Make { set; get; }

        string Model { set; get; }
    }
}
