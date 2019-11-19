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
        public async Task OnConnectedAsync()
        {
            var mockSet = new Mock<DbSet<Car>>();

            var mockContext = new Mock<CarsContext>();
            mockContext.Setup(m => m.GetDataSet()).Returns(mockSet.Object);

            var hub = new DataHub(mockContext.Object);
            
            await hub.OnConnectedAsync();
            
            Assert.Fail();
        }
    }
}
