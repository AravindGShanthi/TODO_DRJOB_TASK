function ToDoList ({ data }) {
  return <div>
    <h1 style={{ color: data.color }}>{data.todo}</h1>
  </div>
};

export default ToDoList;