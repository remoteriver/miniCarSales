using Microsoft.AspNetCore.SignalR;
using miniCarSales.Interface;
using miniCarSales.Models;
using miniCarSales.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Hubs
{
    public class DataHub: Hub
    {
        private readonly CarsContext _db;

        public DataHub(CarsContext db)
        {
            _db = db;
        }

        public override Task OnConnectedAsync()
        {
            SendVehicleCollection();
            SendVehicleMakes();
            return base.OnConnectedAsync();
        }

        public Task SendVehicleCollection()
        {
            return Clients.All.SendAsync("VehicleCollection", _db.GetDataSet());
        }

        public Task SendVehicleMakes()
        {
            return Clients.All.SendAsync("VehicleMakes", _db.GetMakeDataSet());
        }

        public Task AddNewVehicle(Car newVehicle)
        {
            _db.AddNewVehicle(newVehicle);
            SendVehicleCollection();
            return Task.CompletedTask;
        }

        public Task NewMessage(long username, string message)
        {
            return Clients.All.SendAsync("messageReceived", username, message);
        }
    }
}
