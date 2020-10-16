
import React from "react";
import Button from "./Button";

class AddTaskContainer extends React.Component {
  state = {
    content: ""
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div style={{width:760, margin:10}}> 
        <div style={{display:'flex', flexDirection:'row'}}>
            <input
                type="text"
                onChange={this.handleChange}
                value={this.state.content}
                placeholder="Enter task" 
                style={{width:660,height:30}}
                />
            <Button onClick={this.handleSubmit} title="ADD" style={{backgroundColor:'green',marginLeft:10, width:80}}/>
        </div>
      </div>
    );
  }
}
export default AddTaskContainer;
