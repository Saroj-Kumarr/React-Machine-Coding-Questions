/* eslint-disable react/prop-types */

const TodoCard = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div key={todo.id} className="flex items-center justify-between p-2 gap-10">
      <p className={`${todo.isCompleted && "line-through"}`}>{todo.todo}</p>
      <div className="flex gap-3">
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.isCompleted ? "❌" : "✅"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
