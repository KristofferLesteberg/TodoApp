using Microsoft.EntityFrameworkCore;
using PostgresAPI.Models;

namespace PostgresAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {    
        }
        public DbSet<TodoModel> Todos { get; set; }

    }

}






