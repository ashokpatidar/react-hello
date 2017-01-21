import React, { Component } from 'react';


class TodoItem extends Component {

  render() {
  	
    return (
      <li className="Todo">
        
{this.props.todo.id} -- <strong>{this.props.todo.title}</strong> :- <i></i> 
      </li>
    );
  }
}

TodoItem.PropTypes={
	project: React.PropTypes.object
}

export default TodoItem;
