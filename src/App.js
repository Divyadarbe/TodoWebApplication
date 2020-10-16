import React from "react";
import { v4 as uuidV4 } from "uuid";
import TaskListContainer from './TaskListContainer';
import AddTaskContainer from './AddTaskContainer';
import Header from './Header';


class App extends React.Component {
  state = {
    todos: [
      { id: uuidV4(), content: "Buy grocerries", status: "pending" },
      { id: uuidV4(), content: "Feed cat", status: "pending" },
      { id: uuidV4(), content: "Meet Dentist", status: "done" },
      { id: uuidV4(), content: "Learn react", status: "deleted" }
    ]
  };

  onDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: "deleted"
            }
          : todo
      )
    }));
  };

  onChangeCheckbox = (id, checked) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: checked ? "done" : "pending"
            }
          : todo
      )
    }));
  };

  addTodo = (todo) => {
    if(todo.content ===''){
      alert("Task should not be empty !!");
    }
    else{
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          ...todo,
          id: uuidV4(),
          status: "pending"
        }
      ]
    }));
  }
  };

  render() {
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{display:'flex',alignItems:'center',margin:20, justifyContent:'center', flexDirection:'column',height:'1100',backgroundColor:'#B8E2F2',width:800,borderColor:'black', borderWidth:1,borderStyle:'solid'}}>
        <div style={{display:'flex', width:780,marginTop:10, alignItems:'center', justifyContent:'center', backgroundColor:'#B8E2F2',borderColor:'#FF69B4', borderWidth:1,borderStyle:'solid'}}>
          <Header/>
        </div>
        <div style={{display:'flex', alignItems:'center',justifyContent:'center',backgroundColor:'#fbe1d5',width:780, borderColor:'#ed8756', borderWidth:1,borderStyle:'solid'}}>
          <AddTaskContainer addTodo={this.addTodo} />
        </div>
        <div style={{display:'flex', alignItems:'center',marginBottom:10,justifyContent:'center',backgroundColor:'#B8E2F2',width:780,borderColor:'#187bcd', borderWidth:1,borderStyle:'solid'}}>
          <TaskListContainer 
            todos={this.state.todos}
            deleteTodo={this.onDelete}
            onChangeCheckbox={this.onChangeCheckbox}

          />
        </div>
      </div>
      </div>
    );
  }
}


export default App;
