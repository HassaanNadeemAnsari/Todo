import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import { useState, useEffect  } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
      initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo)=>{
    console.log("I am on delete of todo", todo);

    // deliting this not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("i'm adding todo", title, desc);
    let sno;
    if (todos.length===0) {
       sno = 1;
    }
    else{

      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])
  
  
  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar = {true}/>
      <Switch>
        <Route path="/" render={()=>{
          return(
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos = {todos} onDelete={onDelete}/>
          </>
          )
        }}>
          <Home/>
        </Route>
      </Switch>
      
      <Footer/>
      </Router>
    </>
  );
}

export default App;
