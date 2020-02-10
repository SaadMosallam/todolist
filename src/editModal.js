import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";



const EditModal = (props) => {
    function editTaskText(form,taskOldText){
      const input = form.querySelector('#editInput');
      const index = props.determineListEntryIndex(taskOldText);
      if(input.value === ""){
        form.querySelector('#editInput').style = "border-color:#e00909";
        if( form.lastChild.nodeName !== "P" ){
          var node = document.createElement("p");
          var textnode = document.createTextNode("Inset a new task text");
          node.style.cssText = "font-weight:bold;color:#e00909;margin-top:5px;margin-bottom:0;font-size:14px";
          node.appendChild(textnode);
          form.appendChild(node);
        }
        return;
      }
      props.editListItemText(index,input.value);
      hideModal();
    }

    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <button onClick={e =>{EditModal.taskOldText = e.target.parentElement.nextSibling.textContent; showModal();} } className="btn edit position-relative stretched-link rounded-0 mr-1">
            <i className="far fa-edit"></i>
        </button>
        
        <Modal show={isOpen} onHide={hideModal} centered={true} onEntered={function(){
            document.querySelector('#editInput').focus()
        }}>
          <Modal.Header>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <form onSubmit={ e => {e.preventDefault(); editTaskText(e.target,EditModal.taskOldText);}}>
            <label>old task text: <span>{EditModal.taskOldText}</span></label>
            <input type="text" id="editInput" className="form-control" onChange={e=>{
              if(e.target.value !== ""){
                e.target.style = "border-color:#ced4da"
              }else{
                e.target.style = "border-color:#e00909"
              }
              }}
                aria-describedby="new task content..." placeholder="new task text..."
            />
          </form>
                 
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal} className="btn delete position-relative stretched-link rounded-0 mr-1">Cancel</button>
            <button onClick={ e => { editTaskText(e.target.parentElement.parentElement.querySelector('form'),EditModal.taskOldText) }} type="submit" className="btn done position-relative stretched-link rounded-0 mr-1">Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

export default EditModal;