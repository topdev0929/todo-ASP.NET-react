using TodoList.Server.Models;

namespace TodoList.Server.Services
{
    public class TodoService : ITodoService
    {
        private readonly List<TodoItem> _todos = new List<TodoItem>();

        public IEnumerable<TodoItem> GetAll()
        {
            return _todos;
        }

        public TodoItem GetById(long id)
        {
            return _todos.FirstOrDefault(t => t.Id == id);
        }

        public void Add(TodoItem item)
        {
            item.Id = _todos.Count > 0 ? _todos.Max(t => t.Id) + 1 : 1;
            _todos.Insert(_todos.Count, item);
        }

        public void Update(TodoItem item)
        {
            var index = _todos.FindIndex(t => t.Id == item.Id);
            if (index != -1)
            {
                _todos[index] = item;
            }
        }

        public void Delete(long id)
        {
            var index = _todos.FindIndex(t => t.Id == id);
            if (index != -1)
            {
                _todos.RemoveAt(index);
            }
        }

        public IEnumerable<TodoItem> GetFiltered(TodoFilter filter)
        {
            var query = _todos.AsQueryable();
            if (filter.IsComplete.HasValue)
            {
                query = query.Where(t => t.IsComplete == filter.IsComplete);
            }
            return query.ToList();
        }
    }
}
