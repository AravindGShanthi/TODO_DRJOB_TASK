function todoReducer(state=[], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return setPersistence(action.payload, state);
    case 'SET_INIT_STATE':
      return getPresistence();
    default:
      return state;
  }
};

function getPresistence() {
  console.log('Called');
  let todos = localStorage.getItem('todos');
  if (!todos) {
    return [];
  }

  todos = JSON.parse(todos);
  console.log('Persisted Todo: ', todos);
  return todos;
}

function setPersistence(todo, todos) {
  const alreadyFound = todos.find((td) => td.todo === todo.todo);
  if (alreadyFound) {
    return todos;
  }
  todos = [{...todo}, ...todos];
  localStorage.setItem('todos', JSON.stringify(todos));
  return todos;
}

export default todoReducer;