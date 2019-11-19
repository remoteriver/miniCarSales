using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace miniCarSales.Services
{
    public class HostedSrvManager : IHostedService
    {
        private readonly IServiceScopeFactory _scopeFactory;
        public HostedSrvManager(IServiceScopeFactory scopeFactory)
        {
            _scopeFactory = scopeFactory;
        }
        public Task StartAsync(CancellationToken cancellationToken)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                var _carSrv = scope.ServiceProvider.GetRequiredService<CarsService>();
                _carSrv.Seed();
            }
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
