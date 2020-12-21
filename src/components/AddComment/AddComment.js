import React, {useState} from 'react'
import './AddComment.css'
import {fetchResource} from "../../api";

export const AddComment = (props) => {

    const [commentInput, setCommentInput] = useState('')

    const handleChange = (e) => {
      setCommentInput(e.target.value)
    }


    const handleSubmit = () => {

      fetchResource('data/comments','','POST', {
        userId: localStorage.getItem('id'),
        comment: commentInput,
        bookId: props.bookId,
      }).then((result) => {
        props.setRefresh(true);
        setCommentInput('');
      });
    }
    

    return (
        
        <div>
            <br/>
            <h4>¡Su opinión también cuenta!</h4>
            <br/>
                <textarea
                    className="textArea"
                    name="mensaje"
                    placeholder="¡Comparta tu opinión con los demás oyentes!"
                    cols="50"
                    rows="10"
                    id="textarea"
                    value={commentInput}
                    onChange={handleChange}>
                </textarea>
                <br/>
                <button onClick={handleSubmit}>Enviar</button>
            <br/>
            <br/>
        </div>
    )
}
