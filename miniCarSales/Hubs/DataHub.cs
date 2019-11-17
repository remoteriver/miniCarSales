using Microsoft.AspNetCore.SignalR;
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
            SendInitData();
            return base.OnConnectedAsync();
        }

        public Task SendInitData()
        {
            return Clients.All.SendAsync("InitData", _db.GetDataSet());
        }

        public Task AddNewVehicle(Car newcar)
        {
            _db.Add(newcar);
            //newcar.Id = 
            _db.SaveChanges();
            return Clients.All.SendAsync("InitData", _db.GetDataSet());
        }

        public Task NewMessage(long username, string message)
        {
            return Clients.All.SendAsync("messageReceived", username, message);
        }
    }
}
