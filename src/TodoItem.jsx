function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />
      <span style={todo.completed ? { textDecoration: 'line-through' } : {}}>
        {todo.text}
      </span>
      <button
        className="delete-btn"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
