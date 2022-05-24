import { useState } from "react";
import TodoList from "./TodoList";
import { useEffect } from "react";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const LOCAL_STORAGE_KEY = "savedTodoList";
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todo`,
      {
        headers: new Headers({
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.records);
        setTodoList(result.records);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };
  const removeItem = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...newTodoList]);
  };

  return (
    <>
      <header>
        <h1>{"Todo List"}</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeItem} />
      )}
    </>
  );
};

export default App;
