import React from 'react'

export const AddComment = () => {
    return (
        <div>
            <br/>
            <h4>¡Su opinión también cuenta!</h4>
            <br/>
                <form>
                <textarea name="mensaje" placeholder="Comparte tu opinión con el autor!" className="estilotextarea"></textarea>
                    <input type="submit" value="Submit"/>
                </form>

            <br/>
            <br/>
        </div>
    )
}
