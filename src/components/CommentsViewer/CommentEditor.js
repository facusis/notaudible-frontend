import React from 'react'


console.log('Se activa el editor');

export const CommentEditor = (props) => {
    return (
        <div>
            <textarea>
               {props.comment}
            </textarea>
            <div>
                <div>
                    Botón Cancelar Edición
                </div> 
                <div>
                    Botón Eliminar
                </div> 
                <div>
                    Botón Actualizar
                </div> 
            </div>
        </div>
    )
}
