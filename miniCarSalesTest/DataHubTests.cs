using System;
using Moq;
using System.Dynamic;
using miniCarSales.Hubs;
using miniCarSales.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using miniCarSales.Models;
using Microsoft.EntityFrameworkCore;

namespace miniCarSalesTest
{
    [TestClass]
    public class DataHubTests
    {
        [TestMethod]
        public void AddVehicle()
        {
            var mockSet = new Mock<DbSet<Car>>();

            var mockContext = new Mock<CarsContext>();
            mockContext.Setup(m => m.Cars).Returns(mockSet.Object);
            //mockContext.Setup

            var service = new CarsService(mockContext.Object);
            service.AddVehicle(new Car { Id = 0, Make="TestMake", Model="TestModel" });

            mockSet.Verify(m => m.Add(It.IsAny<Car>()), Times.Once());
            mockContext.Verify(m => m.SaveChanges(), Times.Once());

        }
    }
}
