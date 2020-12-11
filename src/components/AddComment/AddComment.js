import React, {useState} from 'react'
import './AddComment.css'

export const AddComment = (props) => {

    const [commentInput, setCommentInput] = useState('')


    const handleChange = (e) => {
        setCommentInput(e.target.value)
      }
      console.log(commentInput);

    const handleSubmit = () => {

        const url = `http://localhost:3001/data/comments`;

        const options = {
            method: 'POST',
            body: JSON.stringify({
                comment: commentInput,
                UserId:localStorage.getItem('id'),
                bookId:localStorage.getItem('book'),
            }),
            headers: {
              Authorization: `bearer ${localStorage.getItem('token')}`
            },
            mode: 'cors',
          };

        fetch(url, options)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return Promise.reject(response.status);
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
    }
    

    return (
        
        <div>
            <br/>
            <h4>¡Su opinión también cuenta!</h4>
            <br/>
                <form>
                <textarea
                    className="textArea"
                    name="mensaje"
                    placeholder="¡Comparta tu opinión con los demás oyentes!"
                    cols="50"
                    rows="10"
                    id="textarea"
                    onChange={handleChange}>
                    {commentInput}
                </textarea>
                <br/>
                    <input type="submit" onClick={handleSubmit}/>
                </form>

            <br/>
            <br/>
        </div>
    )
}
