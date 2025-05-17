import { useState } from "react";
import { useEffect } from "react";

const ITEMS_PER_PAGE = 20;

const TodoCard = ({ title, completed }) => {
  return (
    <div className="border p-2 my-2 w-60 h-32">
      <h2>{title}</h2>
      <p>{completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

const Pagination = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(0);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setTodos(json);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handlePagination = (index) => {
    if (index < 0) {
      return;
    }
    if (index > todos.length / ITEMS_PER_PAGE - 1) {
      return;
    }

    setPage(index);
  };

  return (
    <>
      <div className="w-[1200px] mx-auto flex items-center justify-center flex-wrap gap-5 ">
        {todos
          .slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
          .map((todo) => (
            <TodoCard
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <div
          onClick={() => handlePagination(page - 1)}
          className={`font-semibold ${
            page == 0 ? "text-gray-300" : "text-black"
          }`}
        >
          Prev
        </div>
        {Array.from({ length: todos.length / ITEMS_PER_PAGE }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => handlePagination(index)}
              className={`border flex items-center justify-center w-10 h-10 p-2 m-2 ${
                index === page ? "bg-gray-200" : ""
              }`}
            >
              <h2>{index + 1}</h2>
            </div>
          )
        )}
        <div
          onClick={() => handlePagination(page + 1)}
          className={`font-semibold ${
            page === Math.floor(todos.length / ITEMS_PER_PAGE) - 1
              ? "text-gray-300"
              : "text-black"
          }`}
        >
          Next
        </div>
      </div>
    </>
  );
};

export default Pagination;
