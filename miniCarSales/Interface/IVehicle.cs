using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Interface
{
    public interface IVehicle
    {
        long Id { set; get; }

        string VehicleType { set; get; }

        string Make { set; get; }

        string Model { set; get; }
    }
}
