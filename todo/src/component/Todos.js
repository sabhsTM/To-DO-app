import React from'react';
 

const Todos = ({text,Todo,setTodo}) => {
    // events
    // Todos.js
const deleteHandler = () => {
  setTodo((prevTodos) => prevTodos.filter((el) => el.id !== Todo.id));
};
const completeHandler = () => {
    setTodo((prevTodos) => 
        prevTodos.map((item) => {
            if(item.id === Todo.id) {
                return {
               ...item,
                completed: !item.comppleted,
            };
        }
            return item;
        })
    );
};
    

  
    return(
        <div className="todo">
            <li className={`todo-item ${Todo.completed? "completed" : "" } `}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className ="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>

            </button>

        </div>

    );
}

export default Todos;