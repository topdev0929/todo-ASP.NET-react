using TodoList.Server.Models;
using TodoList.Server.Services;
using Xunit;

namespace TodoList.Server.Tests
{
    public class TodoServiceTests
    {
        private readonly TodoService _service;

        public TodoServiceTests()
        {
            _service = new TodoService();
        }

        [Fact]
        public void AddTodo_ItemIsAdded()
        {
            var item = new TodoItem { Name = "Test Todo" };
            _service.Add(item);

            var result = _service.GetAll().ToList();

            Assert.Single(result);
            Assert.Equal("Test Todo", result[0].Name);
        }

        [Fact]
        public void UpdateTodo_ItemIsUpdated()
        {
            var item = new TodoItem { Name = "Test Todo" };
            _service.Add(item);

            item.Name = "Updated Todo";
            _service.Update(item);

            var result = _service.GetAll().FirstOrDefault();

            Assert.Equal("Updated Todo", result.Name);
        }
    }
}
