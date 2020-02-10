import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './ListItem';

class ListGroup extends React.Component{

    render(){
        const todoList = this.props.todoList;
        let listItems = [];
        todoList.map((listEntry,id) => {
            
            listItems.push(<ListItem taskDone={ listEntry.done ? "done" : "notDone" } taskName={listEntry.taskName} key={id} 
            deleteListItem={this.props.deleteListItem} 
            determineListEntryIndex={this.props.determineListEntryIndex}
            listItemToggleDone={this.props.listItemToggleDone}
            editListItemText={this.props.editListItemText}
            />);

        });
        return(
            <ul className="list-group list-group-flush  mb-4">
                {listItems}
            </ul>
        );
    }
}

export default ListGroup;