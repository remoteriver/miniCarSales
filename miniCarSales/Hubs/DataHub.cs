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
        private readonly CarsService _carSrv;

        public DataHub(CarsService carSrv)
        {
            _carSrv = carSrv;
        }

        public override Task OnConnectedAsync()
        {
            SendVehicleCollection();
            SendVehicleMakes();
            return base.OnConnectedAsync();
        }

        public Task SendVehicleCollection()
        {
            return Clients.All.SendAsync("VehicleCollection", _carSrv.GetAllVehicles());
        }

        public Task SendVehicleMakes()
        {
            return Clients.All.SendAsync("VehicleMakes", _carSrv.GetAllVehicleMakes());
        }

        public Task AddNewVehicle(Car newVehicle)
        {
            _carSrv.AddVehicle(newVehicle);
            SendVehicleCollection();
            return Task.CompletedTask;
        }

        public Task NewMessage(long username, string message)
        {
            return Clients.All.SendAsync("messageReceived", username, message);
        }
    }
}
