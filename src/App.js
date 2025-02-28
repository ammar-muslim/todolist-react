import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    if(text.trim() === "") return;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item" key={index}>
                <li
                  className={completed ? "done" : ""}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
              </div>
            );
          })}
        </ul>
        <div className="input-container">
          <input ref={inputRef} placeholder="Enter item..." />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
