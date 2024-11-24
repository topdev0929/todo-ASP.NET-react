using Microsoft.AspNetCore.Mvc;
using TodoList.Server.Models;
using TodoList.Server.Services;

namespace TodoList.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TodoItem>> Get()
        {
            return Ok(_todoService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<TodoItem> Get(long id)
        {
            var todoItem = _todoService.GetById(id);
            if (todoItem == null)
            {
                return NotFound();
            }
            return Ok(todoItem);
        }

        [HttpPost]
        public ActionResult<TodoItem> Post(TodoItem item)
        {
            _todoService.Add(item);
            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Put(long id, TodoItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _todoService.Update(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todoItem = _todoService.GetById(id);

            if (todoItem == null)
            {
                return NotFound();
            }
            _todoService.Delete(id);
            return Ok(todoItem.Id);
        }

        [HttpGet("filter")]
        public ActionResult<IEnumerable<TodoItem>> Get([FromQuery] TodoFilter filter)
        {
            var todos = _todoService.GetFiltered(filter);
            return Ok(todos);
        }

        [HttpPost("{id}/complete")]
        public IActionResult MarkComplete(long id)
        {
            var todo = _todoService.GetById(id);
            if (todo == null)
            {
                return NotFound();
            }
            todo.IsComplete = !todo.IsComplete;
            _todoService.Update(todo);
            return Ok(todo.Id);
        }
    }
}
