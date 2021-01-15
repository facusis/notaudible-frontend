import React, {useEffect, useState}  from 'react'
import {fetchResource} from "../../api";
import {formatRelative, subDays, format} from 'date-fns'
import { es, } from 'date-fns/locale'
import {CommentEditor} from './CommentEditor';


export const CardCommentItem = (props) => {

  const [userInfo, setUserInfo] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  const editMode = () => {
    setIsUpdate(!isUpdate);
  }

  useEffect(() => {    
          fetchResource('data/user', props.userId, 'GET')
          .then(result => { 
              setUserInfo(result);
           });
          }, [])


  const fecha = formatRelative(new Date(props.comm.createdAt), new Date(), { locale: es });

  //console.log(fecha);

    return (
      <ul style={{ listStyleType: "none" }}>
        <div className="UserComentario">{userInfo && userInfo.nickname} opinó {fecha}:</div>
        <div className="UserOpinion" onClick={editMode}>
          {isUpdate ? (<CommentEditor comment={props.comm.comment}/>) : props.comm.comment}
        </div>
      </ul>
    );  
  }

  // <input type="button" onClick={() => isUpdate ? submit() : setIsUpdate(!isUpdate)} value={isUpdate ? submit() : update()} />
