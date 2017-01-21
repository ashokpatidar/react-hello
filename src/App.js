import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
//import TodoItem from './components/TodoItem';
import $ from 'jquery';
import './App.css';



class App extends Component {


  constructor() {
    super();
    this.state = {
      projects:[],
      todos:[]
    }
  }

  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache:false,
      success:function(data){
        this.setState({todos:data},function() {
          console.log(this.state);
        })
      }.bind(this),
      error:function(xhr,status, err){
        console.log(err);
      }
    })
  }

  getProjects(){
      this.setState({projects:[{
              id:uuid.v4(),
              title:'Business Website',
              category:'Web Design'
            },
            {
              id:uuid.v4(),
              title:'Bank Software',
              category:'Bank App'
            },
            {
              id:uuid.v4(),
              title:'SMS Software',
              category:'SMS App'
            }]});
  }

  componentWillMount() {
    
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
this.getTodos();
  }

  handleAddProject(project){

    let projects = this.state.projects;
    //console.log(projects);
    projects.push(project);
    this.setState({projects:projects});
    //console.log(project);
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
    console.log('final delete',id);
  }

  render() {
    return (

      <div className="App">
        <h2>Welcome https://www.youtube.com/watch?v=A71aqufiNtQ</h2>
        <AddProject addProject={this.handleAddProject.bind(this)}></AddProject>
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
        <hr/>
        <Todos todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
