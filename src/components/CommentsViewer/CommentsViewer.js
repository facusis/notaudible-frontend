import React, {useEffect, useState}  from 'react'
import {fetchResource} from "../../api";
import './CommentViewer.css';
import {CardCommentItem} from './CardCommentItem';

export const CommentsViewer = (props) => {


    const [commentContent, setCommentContent] = useState();
    
    useEffect(() => {    
        if (props.refresh) {
            fetchResource('data/comments', props.BookId, 'GET')
            .then(result => { if(result >0) {
                result.reverse();
                setCommentContent(result);
                props.setRefresh(false);
            }});
        } else {console.log('gorka mascachota')}
    }, [props.refresh])


    //Fetch all user details after receiving userId from commentContent.
    return (
        <div className="BoxComments">
            <br/>
            <h5>Los demás oyentes de «{props.bookTitle}» opinan que...</h5>
            <br/>
            <li style={{ listStyleType: "none" }}>
                {commentContent && commentContent.map(comm => {
                    return <CardCommentItem
                        comm={comm}
                        key={comm.id}
                        userId={comm.userId}
                        setRefresh={props.setRefresh}
                        //user={users.filter(u => u.id === comm.userId)[0]}
                            />;
            })}
            </li>            
        </div>
    );
    }