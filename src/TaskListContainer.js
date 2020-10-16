import React from "react";
import Button from "./Button";
import CheckBox from "./Checkbox";
import Label from "./Label";
import './style.css';

const TaskListContainer = ({ todos, deleteTodo, onChangeCheckbox }) => {
    
  const todoList = todos.length > 0 ? (
    todos
      .filter(({ status }) => status !== "deleted")
      .map((todo) => {
        return (
            <div key={todo.id} style={{width:780,margin:10}} id='selected'>
                <div style = {{ display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <CheckBox checked={todo.status === "done"} onChange={(event) =>
                            onChangeCheckbox(todo.id, event.target.checked)
                            }/>
                        
                        <Label style={
                            todo.status === "pending"
                                ? { color: "black",fontSize:15 }
                                : { color: "grey", textDecoration: "line-through",fontSize:15 }
                            } content={todo.content}/>  
                    
                    </div>
                    <Button onClick={() => deleteTodo(todo.id)} title="delete" style={{marginRight:10,marginLeft:10, width:80, height:30}}/>
                </div>
           
            </div>
           
        );
      })
  ) : (
    <p>You have no todos</p>
  );

 

  return <div style={{ marginBottom:30}}>{todoList}</div>;
};

export default TaskListContainer;

