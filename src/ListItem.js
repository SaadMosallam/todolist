import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import EditModal from './EditModal';

class ListItem extends React.Component{
    constructor(props){
        super(props);

        this.listItemDone = this.listItemDone.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
    }

    deleteListItem(e){
        const listEntryText = e.target.parentElement.querySelector('.listEntry').textContent;
        const index = this.props.determineListEntryIndex(listEntryText);
        this.props.deleteListItem(index);
    }

    listItemDone(e){
        const listEntryText = e.target.parentElement.parentElement.querySelector('.listEntry').textContent;
        const index = this.props.determineListEntryIndex(listEntryText);
        this.props.listItemToggleDone(index);
    }


    render(){

        return(
            <li className="list-group-item">
                <div className="btn-group">
                    <button type="button" className="btn done position-relative stretched-link rounded-0 mr-1" aria-label="done"
                    onClick={e=>{this.listItemDone(e)}}>
                        <i className="far fa-check-square"></i>
                    </button>
                    <EditModal determineListEntryIndex={this.props.determineListEntryIndex} 
                        editListItemText={this.props.editListItemText}
                    />
                </div>
                
                <span className={"listEntry "+this.props.taskDone}>{this.props.taskName}</span>
                

                <button type="button" className="btn delete position-relative stretched-link rounded-0 float-right" aria-label="Close"
                onClick={e=>{this.deleteListItem(e)}}>
                    <i className="fas fa-times"></i>
                </button>
            </li>

            
        );
    }
}

export default ListItem;