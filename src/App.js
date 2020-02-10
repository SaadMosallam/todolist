import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from './ListGroup.js';
import TodoInput from './TodoInput';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      todoListItems: [
        {taskName: 'Go shopping', done: false},
        {taskName:'buy flowers', done: false},
        {taskName: 'learn react', done: false}]
    }

    this.SubmitNewListItem = this.SubmitNewListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.determineListEntryIndex = this.determineListEntryIndex.bind(this);
    this.listItemToggleDone = this.listItemToggleDone.bind(this);
    this.editListItemText = this.editListItemText.bind(this);
  }

  SubmitNewListItem(e){
    e.preventDefault();
    const input = e.target.querySelector('#listInput');
    if( input.value !== "" ){
      this.setState(prevState => prevState.todoListItems.unshift({taskName: input.value, done: false}),
      ()=>{input.value=""});
    }
  }

  determineListEntryIndex(listItemContent){
    const todtListItems = this.state.todoListItems;
    let todoListItemsNames = [];
    todtListItems.map((listEntry,id)=>{
      todoListItemsNames[id] = listEntry.taskName
    })
    const index = todoListItemsNames.indexOf(listItemContent);
    return(index);
  }

  deleteListItem(index){
    this.setState(prevState=> prevState.todoListItems.splice(index,1));
  }

  listItemToggleDone(index){
    this.setState(prevState => {
      const listItem = prevState.todoListItems[index];
      prevState.todoListItems.splice(index,1);
      if(listItem.done){
        prevState.todoListItems.unshift({taskName: listItem.taskName, done: !listItem.done});
      }else{
        prevState.todoListItems.push({taskName: listItem.taskName, done: !listItem.done});
      }
      return prevState;
    });
  }

  editListItemText(index, newListItemText){
    this.setState(prevState => 
      prevState.todoListItems[index].taskName = newListItemText);
  }

  render(){
    return (
      <div className="App container p-4">
          <h1 className="display-1 text-light font-weight-bold text-center mb-4">TodoList</h1>
          <ListGroup todoList={this.state.todoListItems} 
          deleteListItem={this.deleteListItem} 
          determineListEntryIndex={this.determineListEntryIndex}
          listItemToggleDone={this.listItemToggleDone}
          editListItemText = {this.editListItemText}
          /> 
          <TodoInput submitNewListItem={this.SubmitNewListItem}/>
      </div>
    );
  }
}

export default App;
