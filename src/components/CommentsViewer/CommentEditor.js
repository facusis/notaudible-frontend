import React, {useState}  from 'react'
import './CommentViewer.css';
import {fetchResource} from "../../api";

console.log('Se activa el editor');


export const CommentEditor = (props) => {

//inicio funcionalidad update comment //

    const [updateInput, setUpdateInput] = useState();

    const handleChange = (e) => {
      setUpdateInput(e.target.value)
    }


    //Esc and enter buttons make actions too//

    const handleKeyPress = (e) => {
      if(e.which === 13){
          handleUpdate()
      };
    }

    const handleUpdate = () => {
      
      fetchResource('data/comments', props.commId,'PUT', {
        comment: updateInput,
      }).then((result) => {
        props.setRefresh(true);
        props.setIsUpdate(false);

      });
    }

// fin funcionalidad update comment//

    return (
        <div className="editorbox">
            <textarea className="editTextArea" onChange={handleChange} onKeyPress={handleKeyPress}>
               {props.comment}
            </textarea>
            <div className="editButtons">
                <div>
                    <button onClick={props.cancellation}>Cancelar</button> 
                </div> 
                <div>
                    <button onClick={handleUpdate}>Actualizar</button>
                </div> 
                <div>
                    <button onClick={props.handleDelete}>Eliminar</button>
                </div> 
            </div>
        </div>
    )
}
