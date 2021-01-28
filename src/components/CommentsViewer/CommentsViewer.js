import React, {useEffect, useState}  from 'react'
import {fetchResource} from "../../api";
import './CommentViewer.css';
import {CardCommentItem} from './CardCommentItem';

export const CommentsViewer = (props) => {

    //Fetching all comment data//

    const [commentContent, setCommentContent] = useState();
    
   
    useEffect(() => {    
        if (props.setRefresh) {
            fetchResource(`data/comments?bookId=${props.bookId}`, '', 'GET')
            .then(result => {
                console.log(result);
                result.reverse();

           
                
                //filtering fetched data
                // const filteredComments = result.filter(f =>
                //     (f.bookId === props.bookId));
                
                // setCommentContent(filteredComments);
                setCommentContent(result);
                props.setRefresh(false);                 
    ;} 
            )
        }

    }, [props.refresh] )


    return (
        <div className="BoxComments">
            <div>
                <br/>
                    <h5>Los demás oyentes de «{props.bookTitle}» opinan que...</h5>
                <br/>
                    <li style={{ listStyleType: "none" }}>
                    {commentContent && commentContent.map(comm => {
                        return <CardCommentItem
                            comm={comm}
                            key={comm.id}
                            userId={comm.userId}
                            setRefresh={props.setRefresh}/>;
                    })}
                    </li>            
            </div>
                <div className="Pagination">
                    <a>Page 1</a>
                    <a>Page 2</a>
                    <a></a>
                </div>
        </div>
        
    );
    }