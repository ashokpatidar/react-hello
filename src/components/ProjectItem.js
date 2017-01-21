import React, { Component } from 'react';


class ProjectsItem extends Component {

  deleteProject(id){
  	//console.log('Delete',id);
  	this.props.onDelete(id);
  }	
  render() {
  	
    return (
      <li className="Project">
        
{this.props.project.id} -- <strong>{this.props.project.title}</strong> :- <i>{this.props.project.category}</i> <a href='#' onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectsItem.PropTypes={
	project: React.PropTypes.object,
	onDelete: React.PropTypes.func
}

export default ProjectsItem;
