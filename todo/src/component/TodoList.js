import React from 'react';
import Todos from'./Todos';
 
const TodoList = ({Todo, setTodo,filteredTodos}) => {
  
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos .map(Todo => (
                    <Todos key={Todo.id} text={Todo.text} Todo={Todo} setTodo={setTodo}/>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;