    const getTodos = () => JSON.parse(localStorage.getItem("todos") || "[]");
    const saveTodos = (todos) => localStorage.setItem("todos", JSON.stringify(todos));

    function addTodo() {
      const input = document.getElementById("todoInput").value;
      if (input) {
        const todos = getTodos();
        todos.push(input);
        saveTodos(todos);
        document.getElementById("todoInput").value = "";
        showTodos();
      }
    }

    function deleteTodo(index) {
      const todos = getTodos();
      todos.splice(index, 1);
      saveTodos(todos);
      showTodos();
    }

    function showTodos() {
      const list = document.getElementById("todoList");
      list.innerHTML = getTodos().map((todo, i) => 
        `<li>${todo} <button onclick="deleteTodo(${i})">Delete</button></li>`
      ).join('');
    }

    showTodos();