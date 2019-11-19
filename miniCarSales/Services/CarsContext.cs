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
        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<Make> CarMakes { get; set; }

        public CarsContext()
        { }

        public CarsContext(DbContextOptions<CarsContext> options) : base(options)
        {
        }
        
    }
}

