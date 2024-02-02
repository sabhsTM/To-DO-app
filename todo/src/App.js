import React ,{useState,useEffect} from "react";
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';


function App() {
  //state stuff
  const [inputText, setInputText] =useState("");
  const [Todo, setTodo] = useState([]);
  const [status, setStatus]= useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
//RUN ONCE when the App starts
useEffect(() => {
  getLocalTodos();
},[]); 


  // USE useEffect
useEffect(() => {
  filterHandler();
  saveLocalTodos();
},[Todo,status]);

  //Functions
  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(Todo.filter((Todo) => Todo.completed === true));
        break;
        case "ucompleted":
        setFilteredTodos(Todo.filter((Todo) => Todo.completed === false));
        break;
        default:
        setFilteredTodos(Todo);
        break ;       
    }
  };
  //save to local storage
  const saveLocalTodos = () => {
    {
      localStorage.setItem("todos", JSON.stringify(Todo));
    }

  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let TodoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodo(TodoLocal);
    }
  };
  
  // console.log(filteredTodos);
  return (
    <div className="App">
      <header>
        <h1>Sabhs'™️🌀
 Todo</h1>
        </header>
        <Form Todo={Todo} setTodo={setTodo} inputText={inputText} setInputText={setInputText} setStatus={setStatus} filteredTodos={filteredTodos}/>
        <TodoList Todo={Todo} setTodo={setTodo} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
