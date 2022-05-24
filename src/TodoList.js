import React from "react";
import TodoListItem from "./ToDoListItem";

const TodoList = ({ todoList, onRemoveTodo }) =>
  todoList.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
  ));

export default TodoList;
