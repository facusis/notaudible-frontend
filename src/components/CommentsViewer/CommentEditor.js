import React from 'react'
import './CommentViewer.css';

console.log('Se activa el editor');

export const CommentEditor = (props) => {


    return (
        <div className="editorbox">
            <textarea className="editTextArea">
               {props.comment}
            </textarea>
            <div className="editButtons">
                <div>
                    <button onClick={props.cancellation}>Cancelar</button> 
                </div> 
                <div>
                    <button>Actualizar</button>
                </div> 
                <div>
                    <button>Eliminar</button>
                </div> 
            </div>
        </div>
    )
}
