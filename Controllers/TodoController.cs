using Microsoft.AspNetCore.Mvc;
using PostgresAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.AspNetCore.Cors;

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class TodoAppController : ControllerBase
    {
        //Legge til Dbcontext
        private readonly AppDbContext _context;
        public TodoAppController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetTodos")]
        public async Task<IActionResult> GetTodo()
        {
            var todoResult = await _context.Todos.ToListAsync();
            return Ok(todoResult);
        }

        [HttpPost("CreateTodo")]
        public async Task<IActionResult> CreateTodo([FromBody] TodoModel todo)
        {
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();

            return Ok(todo);
        }

        [HttpPut("UpdateTodo")]
        public async Task<IActionResult> UpdateTodo([FromBody] TodoModel todo)
        {
            var todoRow = await _context.Todos.Where(x => x.Id == todo.Id)
                .ExecuteUpdateAsync(x => x
                    .SetProperty(x => x.Name, todo.Name)
                    .SetProperty(x => x.IsComplete, todo.IsComplete)
                    .SetProperty(x => x.Description, todo.Description));
            return Ok(todo);
        }

        [HttpDelete("DeleteTodo/{todoId}")]
        public async Task<IActionResult> DeleteTodo(int todoId)
        {
            var todoRow = await _context.Todos.Where(x => x.Id == todoId).ExecuteDeleteAsync();
            return Ok(true);
        }    
    }

}



