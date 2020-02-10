import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoInput.css';

class TodoInput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <form className="row my-2 justify-content-center" onSubmit={ e => {this.props.submitNewListItem(e)}}>
                    <div className="input-group  col-sm-8">
                        <input type="text" id="listInput" className="form-control" aria-describedby="add new todo item" placeholder="add a new todo..."/>
                        <div className="input-group-append">
                            <button type="submit" className="btn add">Add</button>
                        </div>
                    </div>
                </form>
            </div> 
        );
    }
}

export default TodoInput;