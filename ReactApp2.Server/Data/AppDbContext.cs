using Microsoft.EntityFrameworkCore;
using ReactApp2.Server.Models;

namespace ReactApp2.Server.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Product> products { get; set; }
    }
}
