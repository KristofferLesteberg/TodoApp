using Microsoft.AspNetCore.Mvc;
using PostgresAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TodoApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TodoAppController : ControllerBase
    {
        //Legge til Dbcontext
        private readonly AppDbContext _context;
        public TodoAppController(AppDbContext context)
        {
            _context = context;
        }

        //Get endpoint
        [HttpGet("GetTodos")]
        public async Task<IActionResult> GetTodo()
        {
            var todoResult = await _context.Todos.Select(x => new TodoModel
            {
                Id = x.Id,
                Name = x.Name,
                IsComplete = x.IsComplete,

            }).ToListAsync();

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
                .ExecuteUpdateAsync(x => x.SetProperty(x => x.Name, todo.Name));
                
            return Ok(todo);
        }


        [HttpDelete("DeleteTodo")]
        public async Task<IActionResult> DeleteTodo(int todoId)
        {
            var todoRow = await _context.Todos.Where(x => x.Id == todoId).ExecuteDeleteAsync();

            return Ok(true);
        }

    


    
    }

    
}



