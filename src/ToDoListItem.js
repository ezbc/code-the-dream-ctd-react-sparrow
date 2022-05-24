const TodoListItem = ({ todo, onRemoveTodo }) => (
  <>
    <li>{todo.fields.Title}</li>
    <button
      type="button"
      onClick={() => {
        onRemoveTodo(todo.id);
      }}
    >
      Remove
    </button>
  </>
);

export default TodoListItem;
