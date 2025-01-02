import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          todo: todo,
          isCompleted: false,
        },
      ];
    });

    setTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="flex items-center justify-center flex-col p-4">
      <div>
        <input
          type="text"
          className="rounded-l-md p-2 shadow-md border-2 border-slate-400 focus:outline-none"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          onKeyDown={handleKeyDown}
          className="p-2 shadow-md rounded-r-md bg-green-500 text-white"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
