import { useEffect, useReducer, useState } from "react";
import todoReducer from "../reducers/todoReducer";
import ToDoList from "./ToDoList";

function ToDo() {
  const [todo, setTodo] = useState('');
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({type: 'SET_INIT_STATE'});
  }, []);

  const getRandomColor = () => {
    const colors = ['blue', 'green', 'red', 'pink', 'cyan', 'grey', 'black', 'yellow', 'lightblue'];
    return colors[Math.floor(Math.random(0, 1) * colors.length)];
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    console.log(todo);
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        todo,
        complete: false,
        color: getRandomColor(),
      }
    });
    setTodo(() => '');
  };


  console.log('TODOS: ', todos);
  return <div>
    <div style={{ width: '100vh', background: 'pink', padding: '10px' }}>
      <form onSubmit={handleTodoSubmit}>
        <input value={todo} onChange={(e) => setTodo(prevValue => e.target.value)} />
        <button>+ Add</button>
      </form>
    </div>

    {/* Todo list */}
    {
      todos.map((td) => {
        return <ToDoList key={td.id} data={td} /> 
      })
    }
    
  </div>;
};

export default ToDo;  