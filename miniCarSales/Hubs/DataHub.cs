using Microsoft.AspNetCore.SignalR;
using miniCarSales.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarSales.Hubs
{
    public class DataHub: Hub
    {
        private readonly DataContext _db;

        public DataHub(DataContext db)
        {
            _db = db;
        }

        public override Task OnConnectedAsync()
        {
            sendInitData();
            return base.OnConnectedAsync();
        }

        public Task sendInitData()
        {
            return Clients.All.SendAsync("InitData", _db.DataSetCars);
        }

        public Task NewMessage(long username, string message)
        {
            return Clients.All.SendAsync("messageReceived", username, message);
        }
    }
}
